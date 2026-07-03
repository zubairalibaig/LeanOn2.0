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
  listenerEarning: number    // credit to listener wallet
  refundAmount: number       // refund to seeker wallet
}

export function settleSession(s: SettlementInput): Settlement {
  if (s.isFreeTrial) return { billedMins: s.bookedMins, listenerEarning: 0, refundAmount: 0 }

  const startMs = s.startedAt ? new Date(s.startedAt).getTime() : NaN
  const endMs   = new Date(s.endedAt).getTime()
  const actualSecs = Number.isFinite(startMs) ? Math.max(0, (endMs - startMs) / 1000) : 0

  // Accidental start — ended inside the first minute: full refund, fee included.
  if (actualSecs < 60) {
    return { billedMins: 0, listenerEarning: 0, refundAmount: s.amountHeld }
  }

  const billedMins = Math.min(s.bookedMins, Math.ceil(actualSecs / 60))
  const baseEarning = s.amountHeld - (s.platformFee ?? 0)

  if (billedMins >= s.bookedMins) {
    // Full session — listener keeps their entire rate, platform keeps the fee.
    return { billedMins: s.bookedMins, listenerEarning: baseEarning, refundAmount: 0 }
  }

  // Early exit — pro-rate the listener's share; platform fee is not refunded.
  const listenerEarning = Math.floor(baseEarning * billedMins / s.bookedMins)
  const refundAmount = Math.max(0, s.amountHeld - listenerEarning - (s.platformFee ?? 0))
  return { billedMins, listenerEarning, refundAmount }
}
