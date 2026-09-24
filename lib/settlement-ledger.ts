import type { createAdminClient } from '@/lib/supabase-server'
import type { Settlement } from '@/lib/session-billing'
import { logger } from '@/lib/logger'

type Sb = ReturnType<typeof createAdminClient>

// Moves the money for one settled session. Shared by every settlement path —
// /api/sessions PATCH, /api/sessions/cleanup and /api/sessions/expire — so they
// can't drift apart again (the expire cron used to write the listener's ledger
// rows even when the wallet credit had failed, leaving an unpaid listener that
// looked paid and that "re-run settlement" refused to fix).
//
// Rules:
// - A ledger row (wallet_transactions / listener_earnings) is written ONLY
//   after the matching wallet credit succeeded.
// - listener_earnings.platform_fee = LeanOn's total take for the session
//   (amount_held − refund − listener net = ₹10 fee + service fee + NRI margin).
// - Failures are logged with "RECONCILIATION NEEDED" and the session id.
export async function applySettlement(sb: Sb, args: {
  sessionId: string
  seekerId: string
  listenerId: string
  amountHeld: number
  isFreeTrial: boolean
  settlement: Settlement
  bookedMins: number
  source: 'ended' | 'auto-closed' | 'auto-expired'
}): Promise<{ refunded: boolean; listenerPaid: boolean }> {
  const { sessionId, seekerId, listenerId, amountHeld, isFreeTrial, settlement, bookedMins, source } = args
  const { billedMins, listenerEarning, refundAmount, listenerServiceFee } = settlement
  let refunded = false
  let listenerPaid = false
  if (isFreeTrial) return { refunded, listenerPaid }
  const tag = source === 'ended' ? '' : `${source}, `

  if (refundAmount > 0) {
    const { error } = await sb.rpc('credit_wallet', { p_user_id: seekerId, p_amount: refundAmount })
    if (error) {
      logger.error('settlement: seeker refund credit_wallet failed — RECONCILIATION NEEDED — seeker owed refund', { sessionId, seekerId, refundAmount, error: error.message })
    } else {
      refunded = true
      const { error: txErr } = await sb.from('wallet_transactions').insert({
        user_id: seekerId, amount: refundAmount, type: 'refund', session_id: sessionId,
        description: billedMins < 1 ? `Session refund (${tag}ended < 1 min)` : `Session refund (${tag}${billedMins}/${bookedMins} min used)`,
      })
      if (txErr) logger.error('settlement: refund wallet_transactions insert failed', { sessionId, error: txErr.message })
    }
  }

  if (listenerEarning > 0) {
    const { error } = await sb.rpc('credit_wallet', { p_user_id: listenerId, p_amount: listenerEarning })
    if (error) {
      logger.error('settlement: credit_wallet failed — RECONCILIATION NEEDED — listener unpaid', { sessionId, listenerId, listenerEarning, error: error.message })
      return { refunded, listenerPaid }
    }
    listenerPaid = true
    const { error: txErr } = await sb.from('wallet_transactions').insert({
      user_id: listenerId, amount: listenerEarning, type: 'credit', session_id: sessionId,
      description: source === 'ended' ? 'Session earnings' : `Session earnings (${source}, ${billedMins}/${bookedMins} min)`,
    })
    if (txErr) logger.error('settlement: listener wallet_transactions insert failed', { sessionId, error: txErr.message })
    await recordEarnings(sb, { sessionId, listenerId, amountHeld, settlement })
  }
  return { refunded, listenerPaid }
}

// Earnings ledger row. listener_gross / service_fee come from migration 057;
// if those columns are missing the row is still written without them, so the
// listener's dashboard and LeanOn's revenue figure never silently lose a session.
// mode 'insert' (normal settlement: first write wins, duplicate = already recorded)
// or 'upsert' (admin re-run: corrects an earlier, wrong row).
export async function recordEarnings(sb: Sb, args: { sessionId: string; listenerId: string; amountHeld: number; settlement: Settlement; mode?: 'insert' | 'upsert' }) {
  const { sessionId, listenerId, amountHeld, settlement, mode = 'insert' } = args
  const held = Math.round(amountHeld)
  const net = Math.round(settlement.listenerEarning)
  const row: Record<string, unknown> = {
    listener_id:    listenerId,
    session_id:     sessionId,
    gross_amount:   held,
    platform_fee:   held - Math.round(settlement.refundAmount) - net,
    net_amount:     net,
    listener_gross: Math.round(settlement.listenerEarning + settlement.listenerServiceFee),
    service_fee:    Math.round(settlement.listenerServiceFee),
    status:         'settled',
  }
  const write = () => mode === 'upsert'
    ? sb.from('listener_earnings').upsert(row, { onConflict: 'session_id' })
    : sb.from('listener_earnings').insert(row)
  let { error } = await write()
  if (error && /listener_gross|service_fee/.test(error.message)) {
    delete row.listener_gross; delete row.service_fee
    ;({ error } = await write())
  }
  if (error && error.code !== '23505') {
    logger.error('settlement: listener_earnings write failed (earnings ledger gap)', { sessionId, error: error.message })
  }
}
