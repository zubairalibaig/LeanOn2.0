import type { createAdminClient } from '@/lib/supabase-server'
import { pushReachableUserIds, sendPushToUser } from '@/lib/push'
import { logger } from '@/lib/logger'
import { STALE_HEARTBEAT_MINS, AWAY_WITH_ALERTS_MINS } from '@/lib/constants'

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
// alert didn't bring them back), or if their previous request also went
// unanswered. Seekers should not keep booking someone who isn't there.
export async function recordMissedRequest(sb: Sb, args: { listenerId: string; sessionId: string }): Promise<void> {
  const { listenerId, sessionId } = args
  try {
    const { data: lp } = await sb.from('listener_profiles')
      .select('is_available, last_heartbeat_at')
      .eq('user_id', listenerId)
      .maybeSingle()
    const row = lp as { is_available?: boolean; last_heartbeat_at?: string | null } | null
    if (!row?.is_available) return

    const hb = row.last_heartbeat_at ? new Date(row.last_heartbeat_at).getTime() : NaN
    const away = !Number.isFinite(hb) || Date.now() - hb > STALE_HEARTBEAT_MINS * 60_000

    let secondInARow = false
    if (!away) {
      const { data: missed } = await sb.from('sessions').select('created_at').eq('id', sessionId).maybeSingle()
      const createdAt = (missed as { created_at?: string } | null)?.created_at
      if (createdAt) {
        const { data: prev } = await sb.from('sessions')
          .select('status, cancel_reason')
          .eq('listener_id', listenerId)
          .neq('id', sessionId)
          .lt('created_at', createdAt)
          .order('created_at', { ascending: false })
          .limit(1)
        const p = (prev as { status: string; cancel_reason: string | null }[] | null)?.[0]
        secondInARow = p?.status === 'cancelled' && p.cancel_reason === 'timed_out'
      }
    }
    if (!away && !secondInARow) return

    const { data: flipped } = await sb.from('listener_profiles')
      .update({ is_available: false })
      .eq('user_id', listenerId)
      .eq('is_available', true)
      .select('user_id')
      .maybeSingle()
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
