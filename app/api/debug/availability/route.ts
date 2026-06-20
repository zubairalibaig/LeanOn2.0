import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

// GET — diagnostic for the "Go online/offline not reflecting on /browse" issue.
// Returns, for the authenticated listener:
//   • raw  — their listener_profiles row exactly as the admin client reads it
//   • list — whether the SAME query /api/listeners runs would include them, and
//            the is_available it would show
//   • schema.has_last_heartbeat_at — whether migration 041 actually ran here
// Auth required; only ever exposes the caller's own row. No secrets.
export async function GET() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const sb = createAdminClient()

    // 1) Raw row as the admin client sees it (source of truth for the write).
    const { data: raw, error: rawErr } = await sb
      .from('listener_profiles')
      .select('user_id, is_available, is_approved, is_active, is_suspended, rating')
      .eq('user_id', user.id)
      .maybeSingle()

    // 2) Does last_heartbeat_at exist in THIS database?
    const { error: hbErr } = await sb
      .from('listener_profiles')
      .select('last_heartbeat_at')
      .eq('user_id', user.id)
      .limit(1)
    const hasHeartbeatCol = !hbErr

    // 3) Re-run the exact public browse query and check if the caller appears.
    const { data: listRows, error: listErr } = await sb
      .from('listener_profiles')
      .select('user_id, is_available, is_approved, is_active, is_suspended')
      .eq('is_approved', true)
      .or('is_active.eq.true,is_active.is.null')
      .eq('is_suspended', false)
      .limit(200)

    const mine = (listRows ?? []).find(r => r.user_id === user.id) || null

    return NextResponse.json({
      now: new Date().toISOString(),
      userId: user.id,
      raw,
      rawError: rawErr?.message ?? null,
      schema: { has_last_heartbeat_at: hasHeartbeatCol },
      browseList: {
        includesMe: !!mine,
        myIsAvailable: mine?.is_available ?? null,
        totalReturned: (listRows ?? []).length,
        error: listErr?.message ?? null,
      },
      // Plain-English diagnosis for the most common cases.
      verdict: !raw
        ? 'No listener_profiles row for this user.'
        : !raw.is_approved
        ? 'Row exists but is_approved=false — you will never appear on /browse.'
        : raw.is_suspended
        ? 'Row is suspended — hidden from /browse.'
        : (raw.is_active === false)
        ? 'Row has is_active=false — excluded from /browse.'
        : !mine
        ? 'Row passes flags but the browse query did NOT return it — investigate filters/RLS.'
        : raw.is_available !== mine.is_available
        ? 'MISMATCH: raw vs browse-query disagree on is_available (read inconsistency).'
        : raw.is_available
        ? 'OK: DB says AVAILABLE and the browse query agrees. If /browse shows offline, it is a client cache/refresh problem.'
        : 'OK: DB says OFFLINE and the browse query agrees. If /browse shows online, it is a client cache/refresh problem.',
    }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 })
  }
}
