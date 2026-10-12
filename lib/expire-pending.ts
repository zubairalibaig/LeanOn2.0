import type { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'
import { recordMissedRequest } from '@/lib/listener-presence'
import { REQUEST_RESPONSE_WINDOW_MS } from '@/lib/constants'

type Sb = ReturnType<typeof createAdminClient>

// Cancel requests still 'pending' after the response window, refunding the seeker.
//
// The window is normally enforced by whichever page is open (the seeker's
// waiting screen or the listener's dashboard). When neither is open the request
// used to stay pending until the daily cleanup cron — and a pending row makes
// /api/sessions treat the listener as busy, turning away every paid request to
// them for hours. Called from booking (scoped to the listener + seeker) and from
// the cron (all). Optimistic lock on status so concurrent callers never refund twice.
export async function expireStalePendingRequests(
  sb: Sb,
  scope: { listenerId?: string; seekerId?: string } = {},
): Promise<number> {
  const cutoff = new Date(Date.now() - REQUEST_RESPONSE_WINDOW_MS).toISOString()
  let q = sb.from('sessions')
    .select('id, seeker_id, listener_id, amount_held')
    .eq('status', 'pending')
    .lt('created_at', cutoff)
  const ors = [
    scope.listenerId ? `listener_id.eq.${scope.listenerId}` : null,
    scope.seekerId ? `seeker_id.eq.${scope.seekerId}` : null,
  ].filter(Boolean)
  if (ors.length) q = q.or(ors.join(','))

  const { data: stale, error } = await q
  if (error) {
    logger.warn('expireStalePendingRequests: read failed', { error: error.message })
    return 0
  }

  let expired = 0
  for (const s of stale ?? []) {
    const now = new Date().toISOString()
    const { data: cancelled } = await sb.from('sessions')
      .update({ status: 'cancelled', ended_at: now, cancel_reason: 'timed_out' })
      .eq('id', s.id)
      .eq('status', 'pending')
      .select('id')
      .maybeSingle()
    if (!cancelled) continue

    if (Number(s.amount_held) > 0) {
      const { error: refundErr } = await sb.rpc('credit_wallet', { p_user_id: s.seeker_id, p_amount: s.amount_held })
      if (refundErr) {
        logger.error('expireStalePendingRequests: refund failed — RECONCILIATION NEEDED', { sessionId: s.id, seekerId: s.seeker_id, amount: s.amount_held, error: refundErr.message })
      } else {
        const { error: txErr } = await sb.from('wallet_transactions').insert({
          user_id: s.seeker_id,
          amount: s.amount_held,
          type: 'refund',
          description: 'Refund — listener did not respond',
          session_id: s.id,
        })
        if (txErr) logger.error('expireStalePendingRequests: refund ledger insert failed (audit gap)', { sessionId: s.id, error: txErr.message })
        await sb.from('notifications').insert({
          user_id: s.seeker_id,
          type: 'session_cancelled',
          title: 'No response from listener',
          body: 'Your request timed out and your wallet has been fully refunded. Try another listener anytime.',
          action_url: '/browse',
        }).then(() => {}, () => {})
      }
    }
    expired++
    // Only acts on requests that expired just now; old ones say nothing about today.
    await recordMissedRequest(sb, { listenerId: s.listener_id as string, sessionId: s.id as string })
  }
  return expired
}
