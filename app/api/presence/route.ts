import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { STALE_HEARTBEAT_MINS, AWAY_WITH_ALERTS_MINS, LEAVE_GRACE_SECS } from '@/lib/constants'
import { pushReachableUserIds } from '@/lib/push'

export const dynamic = 'force-dynamic'

// POST — listener presence signal. Two jobs only:
//   • { heartbeat: true }      → refresh last_heartbeat_at (keeps the listener
//                                inside the browse staleness window while online)
//   • { available: false } or  → set is_available=false (explicit go-offline /
//     anything else              unload beacon)
//
// IMPORTANT: this endpoint can NEVER set is_available=true. Going ONLINE is
// exclusively the job of the authenticated toggle (/api/listener/availability).
// Allowing presence to write `true` created a backdoor: a stale/old dashboard
// tab (or legacy beacon code) left open on a device would re-online a listener
// on a loop, which is why ghosts kept reappearing as "online" even after the
// DB was corrected. Heartbeats keep an already-online listener fresh, but they
// never flip is_available back on.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))

    // Authenticate from session cookie — never trust userId from request body
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ ok: true }) // beacon fire-and-forget

    const sb = createAdminClient()

    // Heartbeat: only refresh the timestamp, never touch is_available. It does
    // REPORT is_available back, so a dashboard still showing "online" learns
    // that the sweep or a missed request set this listener offline, instead of
    // looking online to them while seekers see them offline.
    if (body.heartbeat === true) {
      const { data } = await sb.from('listener_profiles')
        .update({ last_heartbeat_at: new Date().toISOString() })
        .eq('user_id', user.id)
        .select('is_available')
        .maybeSingle()
      const isAvailable = (data as { is_available?: boolean } | null)?.is_available
      return NextResponse.json(typeof isAvailable === 'boolean' ? { ok: true, is_available: isAvailable } : { ok: true })
    }

    // A LeanOn tab was closed (beacon from ListenerPresence on pagehide). Don't
    // go offline yet — a reload, a full page load or another open LeanOn tab
    // heart-beats within 90s. Instead make the heartbeat look LEAVE_GRACE_SECS
    // short of stale, so the normal sweep takes them offline then if nobody
    // came back. Never touches is_available, and never brings back a heartbeat
    // already older than that (a truly stale listener stays stale). Closing a
    // second tab later only moves the deadline to ~3 min after THAT close.
    if (body.leaving === true) {
      // The sweep allows STALE_HEARTBEAT_MINS without a heartbeat, or
      // AWAY_WITH_ALERTS_MINS for a listener push can reach — age to just
      // short of THEIR limit, so closing LeanOn means offline ~3 min later
      // either way (not 60 min later for listeners with alerts).
      const reachable = (await pushReachableUserIds(sb, [user.id])).has(user.id)
      const windowMins = reachable ? AWAY_WITH_ALERTS_MINS : STALE_HEARTBEAT_MINS
      const aged = new Date(Date.now() - (windowMins * 60 - LEAVE_GRACE_SECS) * 1000).toISOString()
      await sb.from('listener_profiles')
        .update({ last_heartbeat_at: aged })
        .eq('user_id', user.id)
        .eq('is_available', true)
        .gt('last_heartbeat_at', aged)
      return NextResponse.json({ ok: true })
    }

    // Any other call can only ever set the listener OFFLINE (never online).
    await sb.from('listener_profiles')
      .update({ is_available: false })
      .eq('user_id', user.id)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // beacon fire-and-forget; always 200
  }
}
