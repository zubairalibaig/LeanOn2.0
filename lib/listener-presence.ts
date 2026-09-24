import type { createAdminClient } from '@/lib/supabase-server'
import { pushReachableUserIds, sendPushToUser } from '@/lib/push'
import { logger } from '@/lib/logger'
import { STALE_HEARTBEAT_MINS, AWAY_WITH_ALERTS_MINS, REQUEST_RESPONSE_WINDOW_MS } from '@/lib/constants'

type Sb = ReturnType<typeof createAdminClient>

// ── Listener presence: who counts as online ──────────────────────────────────
//
// History (see PROJECT.md §8.2.3): a listener's browser stamps
// listener_profiles.last_heartbeat_at every 60–90s while LeanOn is open, and
// the sweep below (run on every /api/listeners load) takes a listener offline
// once that stamp is too old. Phones pause background tabs, so a listener who
// switched to WhatsApp stopped heart-beating and was swept offline after 15
// minutes — "I was online, then I wasn't".
//
// AWAY MODE (2026-09-24): a listener whose device can receive push alerts can
// still be reached with LeanOn in the background, so they stay online for up
// to AWAY_WITH_ALERTS_MINS without heartbeats. Two guards keep this from
// bringing back "ghost online" listeners:
//   • no push device → the original 15-minute rule, unchanged;
//   • a request that goes unanswered while the listener is away (or a second
//     unanswered request in a row while active) sets them offline at once —
//     see recordMissedRequest().
// is_available is still only ever set TRUE by the explicit toggle.

export { STALE_HEARTBEAT_MINS, AWAY_WITH_ALERTS_MINS }

export async function sweepStaleListeners(sb: Sb): Promise<void> {
  const now = Date.now()
  const staleCutoff = new Date(now - STALE_HEARTBEAT_MINS * 60_000).toISOString()
  const awayCutoff = new Date(now - AWAY_WITH_ALERTS_MINS * 60_000).toISOString()

  // Separate updates, not one .or() — PostgREST's OR parser silently drops a
  // clause containing an ISO timestamp, which once left ghosts online forever.
  try {
    // 1. Online with no heartbeat at all.
    const { error: e1 } = await sb.from('listener_profiles')
      .update({ is_available: false })
      .eq('is_available', true)
      .is('last_heartbeat_at', null)
    if (e1) logger.warn('sweep(null-hb) failed', { error: e1.message })

    // 2. Past the away window — everyone, alerts or not.
    const { error: e2 } = await sb.from('listener_profiles')
      .update({ is_available: false })
      .eq('is_available', true)
      .lt('last_heartbeat_at', awayCutoff)
    if (e2) logger.warn('sweep(away) failed', { error: e2.message })

    // 3. Between 15 min and the away window: offline unless push can reach them.
    const { data: stale, error: e3 } = await sb.from('listener_profiles')
      .select('user_id')
      .eq('is_available', true)
      .lt('last_heartbeat_at', staleCutoff)
      .limit(500)
    if (e3) { logger.warn('sweep(stale read) failed', { error: e3.message }); return }
    const ids = ((stale ?? []) as { user_id: string }[]).map(r => r.user_id)
    if (ids.length === 0) return
    const reachable = await pushReachableUserIds(sb, ids)
    const unreachable = ids.filter(id => !reachable.has(id))
    if (unreachable.length === 0) return
    // Re-check the heartbeat in the UPDATE itself so a listener who came back
    // between the read and the write is not knocked offline.
    const { error: e4 } = await sb.from('listener_profiles')
      .update({ is_available: false })
      .in('user_id', unreachable)
      .eq('is_available', true)
      .lt('last_heartbeat_at', staleCutoff)
    if (e4) logger.warn('sweep(stale-hb) failed', { error: e4.message })
  } catch (e) {
    logger.warn('staleness sweep threw', { error: String(e) })
  }
}

// A request to this listener expired unanswered (cancel_reason 'timed_out').
// Take them offline if they were away (no heartbeat for 15+ min — the phone
// alert didn't bring them back), or if their previous request, within the last
// two hours, also went unanswered. Seekers should not keep booking someone who
// isn't there.
//
// Only for a request that expired JUST NOW: the "away" test reads the
// listener's heartbeat today, so it says nothing about a request that sat
// pending for hours (cleanup finds those, e.g. when the seeker closed the tab).
// Call it AFTER the seeker's refund — it is slower (reads + a push) and must
// never stand between a cancelled request and its refund.
const MISS_FRESH_MS = REQUEST_RESPONSE_WINDOW_MS + 2 * 60_000
const PREVIOUS_MISS_WITHIN_MS = 2 * 60 * 60_000

export async function recordMissedRequest(sb: Sb, args: { listenerId: string; sessionId: string }): Promise<void> {
  const { listenerId, sessionId } = args
  try {
    const { data: missed } = await sb.from('sessions').select('created_at').eq('id', sessionId).maybeSingle()
    const createdAt = (missed as { created_at?: string } | null)?.created_at
    if (!createdAt || Date.now() - new Date(createdAt).getTime() > MISS_FRESH_MS) return

    const { data: lp } = await sb.from('listener_profiles')
      .select('is_available, last_heartbeat_at')
      .eq('user_id', listenerId)
      .maybeSingle()
    const row = lp as { is_available?: boolean; last_heartbeat_at?: string | null } | null
    if (!row?.is_available) return

    const staleCutoff = new Date(Date.now() - STALE_HEARTBEAT_MINS * 60_000).toISOString()
    const away = !row.last_heartbeat_at || row.last_heartbeat_at < staleCutoff

    let secondInARow = false
    if (!away) {
      const { data: prev } = await sb.from('sessions')
        .select('status, cancel_reason')
        .eq('listener_id', listenerId)
        .neq('id', sessionId)
        .lt('created_at', createdAt)
        .gte('created_at', new Date(new Date(createdAt).getTime() - PREVIOUS_MISS_WITHIN_MS).toISOString())
        .order('created_at', { ascending: false })
        .limit(1)
      const p = (prev as { status: string; cancel_reason: string | null }[] | null)?.[0]
      secondInARow = p?.status === 'cancelled' && p.cancel_reason === 'timed_out'
    }
    if (!away && !secondInARow) return

    // For "away", re-check the heartbeat in the UPDATE itself: a listener who
    // tapped the alert and came back a moment ago keeps their online status.
    let flip = sb.from('listener_profiles')
      .update({ is_available: false })
      .eq('user_id', listenerId)
      .eq('is_available', true)
    if (away) flip = row.last_heartbeat_at ? flip.lt('last_heartbeat_at', staleCutoff) : flip.is('last_heartbeat_at', null)
    const { data: flipped } = await flip.select('user_id').maybeSingle()
    if (!flipped) return
    const body = away
      ? 'A seeker requested a session while LeanOn was in the background and it went unanswered, so we set you offline. Go online again when you’re ready.'
      : 'Two requests in a row went unanswered, so we set you offline. Go online again when you’re ready.'
    logger.info('listener auto-offline after missed request', { listenerId, sessionId, away, secondInARow })
    await sb.from('notifications').insert({
      user_id: listenerId, type: 'auto_offline',
      title: 'You were set offline', body, action_url: '/dashboard',
    }).then(() => {}, () => {})
    await sendPushToUser(sb, listenerId, {
      title: 'You missed a request — you’re now offline',
      body, url: '/dashboard', tag: 'leanon-auto-offline', ttlSecs: 6 * 60 * 60,
      data: { type: 'auto_offline' },
    })
  } catch (e) {
    logger.warn('recordMissedRequest failed', { listenerId, sessionId, error: String(e) })
  }
}
