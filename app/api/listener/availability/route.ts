import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { sendSms } from '@/lib/twilio'
import { logger } from '@/lib/logger'

export const dynamic = 'force-dynamic'

// PATCH — set is_available for the authenticated listener.
// The client sends its explicit intent in the body ({ available: true|false }).
// We use that directly rather than re-reading the DB and flipping, because a
// flip-from-DB design silently does the WRONG thing whenever the dashboard's
// view has drifted from the row (e.g. clicking "Go offline" would read a row
// that's already false and flip it back ON). If no body is sent we fall back to
// the legacy flip for backward compatibility.
// When a listener goes ONLINE, SMS their recent seekers (last 30 days, up to 5).
export async function PATCH(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`availability:${user.id}`, 30, 60_000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const body = await req.json().catch(() => ({}))
    const desired: boolean | null = typeof body?.available === 'boolean' ? body.available : null

    const sb = createAdminClient()
    const { data: lp } = await sb
      .from('listener_profiles')
      .select('is_available, is_approved, is_active, is_suspended')
      .eq('user_id', user.id)
      .single()

    if (!lp) return NextResponse.json({ error: 'Listener profile not found' }, { status: 404 })
    if (!lp.is_approved) return NextResponse.json({ error: 'Your application is still under review' }, { status: 403 })
    if (lp.is_suspended) return NextResponse.json({ error: 'Your listener account is suspended' }, { status: 403 })
    if (!lp.is_active) return NextResponse.json({ error: 'Your listener profile is deactivated' }, { status: 403 })

    // Explicit intent from the client; fall back to a flip only if none was sent.
    const goingOnline = desired !== null ? desired : !lp.is_available

    // Write via admin client (bypasses RLS and the guard trigger's is_service_role
    // check, which would otherwise freeze is_approved/rating/etc). is_available is
    // NOT in the guard's freeze list, so it is safe from browser-side writes too.
    const { data: updated, error: updateErr } = await sb.from('listener_profiles')
      .update({ is_available: goingOnline })
      .eq('user_id', user.id)
      .select('is_available')
      .single()

    if (updateErr) {
      logger.error('availability toggle failed:', { error: updateErr.message, userId: user.id, intended: goingOnline })
      return NextResponse.json({ error: 'Could not update availability. Please try again.' }, { status: 500 })
    }
    if (!updated) {
      logger.error('availability toggle: 0 rows updated (admin client, correct user_id)', { userId: user.id })
      return NextResponse.json({ error: 'Listener profile not found for update.' }, { status: 500 })
    }

    // Explicit re-read — RETURNING captures the value BEFORE any AFTER-UPDATE
    // trigger fires. If the live DB has an AFTER trigger that resets is_available
    // (a trigger added via the Supabase dashboard that is not in any committed
    // migration), RETURNING and a subsequent SELECT will disagree. We treat the
    // re-read SELECT as ground truth and surface a specific error so the listener
    // knows exactly what happened instead of seeing a silent wrong state.
    const { data: reread } = await sb.from('listener_profiles')
      .select('is_available')
      .eq('user_id', user.id)
      .single()

    const actualValue: boolean = reread?.is_available ?? updated.is_available

    if (actualValue !== goingOnline) {
      logger.error('availability write-revert detected', {
        userId: user.id,
        intended: goingOnline,
        returningValue: updated.is_available,
        rereadValue: reread?.is_available,
      })
      // 409 so the dashboard reverts the optimistic UI and shows an error toast.
      // Include the diagnostic query the owner needs to run.
      return NextResponse.json({
        error: 'write_reverted',
        is_available: actualValue,
        message:
          'The database accepted the write but something immediately reversed it. ' +
          'A trigger in the live DB is overriding this change. ' +
          'Run this query in Supabase SQL Editor and share the output:\n\n' +
          "SELECT tgname, tgenabled, tgtype, pg_get_triggerdef(oid) " +
          "FROM pg_trigger WHERE tgrelid = 'public.listener_profiles'::regclass;\n\n" +
          'Error code: W01',
      }, { status: 409 })
    }

    // Only SMS when this call actually transitioned offline → online.
    if (goingOnline && !lp.is_available) {
      notifyRecentSeekers(sb, user.id).catch(e =>
        logger.error('notifyRecentSeekers error (non-critical):', { error: String(e) })
      )
    }

    return NextResponse.json({ is_available: actualValue })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// Send SMS to up to 5 seekers who had sessions with this listener in the last 30 days.
// Non-blocking — called fire-and-forget. Failures are logged but do not affect the
// availability toggle response.
async function notifyRecentSeekers(
  sb: ReturnType<typeof createAdminClient>,
  listenerId: string,
): Promise<void> {
  const { data: listenerUser } = await sb
    .from('users')
    .select('name')
    .eq('id', listenerId)
    .single()
  const listenerName = listenerUser?.name || 'Your listener'

  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
  const { data: recentSessions } = await sb
    .from('sessions')
    .select('seeker_id')
    .eq('listener_id', listenerId)
    .eq('status', 'completed')
    .gte('ended_at', since)
    .order('ended_at', { ascending: false })
    .limit(50)

  if (!recentSessions || recentSessions.length === 0) return

  const seen = new Set<string>()
  const seekerIds: string[] = []
  for (const s of recentSessions) {
    const id = s.seeker_id as string
    if (!seen.has(id)) { seen.add(id); seekerIds.push(id) }
    if (seekerIds.length >= 5) break
  }

  const { data: seekers } = await sb
    .from('users')
    .select('id, phone')
    .in('id', seekerIds)

  if (!seekers || seekers.length === 0) return

  const message = `${listenerName} is now online on LeanOn and ready to listen. Start a session anytime: leanon.app/browse`

  for (const seeker of seekers) {
    if (!seeker.phone) continue
    await sendSms(seeker.phone as string, message)
  }
}
