// Single source of truth for session settlement math.
// Used by: /api/sessions (PATCH), /api/sessions/cleanup, /api/sessions/expire.
//
// Billing rule: bill in whole minutes, rounding UP — a started minute counts
// (telecom convention), capped at the booked duration.
//
// WHY ceil, not floor: a session that runs its full course clocks in at
// e.g. 14m58s (accept/network latency eats a second or two). Math.floor
// turned that into 14/15 minutes, shaving the listener's earning and
// issuing a spurious refund to the seeker on every completed session.
// With ceil, 14m01s–15m00s all bill as the full 15 minutes; a genuinely
// early exit (say 7m10s) still pro-rates fairly (8/15).
//
// Sessions under 60 seconds are treated as accidental starts: full refund
// to the seeker (including the platform fee), nothing to the listener.
//
// LISTENER SERVICE FEE (2026-09-14): LeanOn now takes LISTENER_SERVICE_FEE_RATE
// (15%, lib/constants.ts) out of the listener's share at settlement. This is
// entirely separate from PLATFORM_FEE (the seeker's flat ₹10) — the seeker's
// amountHeld and refundAmount math below are completely unaffected by this
// fee; the seeker never sees or pays it. The fee applies only to the
// listener's rawShare (full or pro-rated), so an early-exit session is
// charged the fee on the minutes actually earned, not the booked amount.

import { LISTENER_SERVICE_FEE_RATE } from './constants'

export type SettlementInput = {
  startedAt: string | null   // sessions.started_at (null → treat as 0s used)
  endedAt: string            // sessions.ended_at
  bookedMins: number         // sessions.duration_mins
  amountHeld: number         // sessions.amount_held (listener total + platform fee)
  platformFee: number        // sessions.platform_fee
  isFreeTrial: boolean       // sessions.is_free_trial
}

export type Settlement = {
  billedMins: number         // minutes actually billed (0..bookedMins)
  listenerEarning: number    // credit to listener wallet (after the service fee)
  refundAmount: number       // refund to seeker wallet — unaffected by the service fee
  listenerServiceFee: number // LeanOn's 15% cut of the listener's share (ledger only)
}

export function settleSession(s: SettlementInput): Settlement {
  if (s.isFreeTrial) return { billedMins: s.bookedMins, listenerEarning: 0, refundAmount: 0, listenerServiceFee: 0 }

  const startMs = s.startedAt ? new Date(s.startedAt).getTime() : NaN
  const endMs   = new Date(s.endedAt).getTime()
  const actualSecs = Number.isFinite(startMs) ? Math.max(0, (endMs - startMs) / 1000) : 0

  // Accidental start — ended inside the first minute: full refund, fee included.
  if (actualSecs < 60) {
    return { billedMins: 0, listenerEarning: 0, refundAmount: s.amountHeld, listenerServiceFee: 0 }
  }

  const billedMins = Math.min(s.bookedMins, Math.ceil(actualSecs / 60))
  // rawShare = what the listener would have earned before LeanOn's service fee —
  // this is also what refundAmount is computed against, so the seeker's side of
  // the ledger is byte-for-byte identical to the pre-service-fee behaviour.
  const rawShare = billedMins >= s.bookedMins
    ? s.amountHeld - (s.platformFee ?? 0)
    : Math.floor((s.amountHeld - (s.platformFee ?? 0)) * billedMins / s.bookedMins)

  // Fee computed first, earning is the remainder — guarantees
  // listenerEarning + listenerServiceFee === rawShare exactly (no rounding leak).
  const listenerServiceFee = Math.round(rawShare * LISTENER_SERVICE_FEE_RATE)
  const listenerEarning = rawShare - listenerServiceFee

  const refundAmount = billedMins >= s.bookedMins
    ? 0
    : Math.max(0, s.amountHeld - rawShare - (s.platformFee ?? 0))

  return { billedMins, listenerEarning, refundAmount, listenerServiceFee }
}
