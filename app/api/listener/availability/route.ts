import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { sendSms } from '@/lib/twilio'
import { logger } from '@/lib/logger'

// PATCH — toggle is_available for authenticated listener.
// When a listener goes ONLINE, send SMS to their recent seekers (last 30 days,
// up to 5 unique) so they know support is available now.
export async function PATCH() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`availability:${user.id}`, 20, 60_000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

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

    const goingOnline = !lp.is_available
    // Stamp last_heartbeat_at when going online so the listener appears "fresh"
    // immediately — the browse query filters out stale-online (ghost) listeners
    // whose heartbeat has lapsed (force-killed tab, dropped network).
    const { error: updateErr } = await sb.from('listener_profiles')
      .update({ is_available: goingOnline, ...(goingOnline ? { last_heartbeat_at: new Date().toISOString() } : {}) })
      .eq('user_id', user.id)
    if (updateErr) {
      return NextResponse.json({ error: 'Could not update availability. Please try again.' }, { status: 500 })
    }

    // Fire-and-forget SMS to recent seekers when going online
    if (goingOnline) {
      notifyRecentSeekers(sb, user.id).catch(e =>
        logger.error('notifyRecentSeekers error (non-critical):', { error: String(e) })
      )
    }

    return NextResponse.json({ is_available: goingOnline })
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
  // Get listener's display name
  const { data: listenerUser } = await sb
    .from('users')
    .select('name')
    .eq('id', listenerId)
    .single()
  const listenerName = listenerUser?.name || 'Your listener'

  // Recent unique seekers (last 30 days, up to 5)
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

  // Deduplicate to unique seeker IDs, max 5
  const seen = new Set<string>()
  const seekerIds: string[] = []
  for (const s of recentSessions) {
    const id = s.seeker_id as string
    if (!seen.has(id)) { seen.add(id); seekerIds.push(id) }
    if (seekerIds.length >= 5) break
  }

  // Fetch phone numbers
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
