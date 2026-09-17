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
  amountHeld: number         // sessions.amount_held (flat NRI price or rate×duration+fee)
  platformFee: number        // sessions.platform_fee (always ₹10 for paid sessions)
  isFreeTrial: boolean       // sessions.is_free_trial
  /**
   * When set (NRI sessions), the listener earns at most this rate × billed_mins.
   * The NRI flat price in amountHeld is higher; the difference is LeanOn's margin.
   * For India sessions leave undefined — billing uses amountHeld - platformFee as always.
   * sessions.listener_rate_per_min (stored at booking time, migration 054).
   */
  listenerRatePerMin?: number | null
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

  // rawShare = the listener's pre-fee earnings for the billed minutes.
  //
  // India sessions: rawShare = amount_held − platform_fee (pro-rated for early exit).
  //   This is unchanged — the listener earns the full booked rate.
  //
  // NRI sessions (listenerRatePerMin set): listener_rate_per_min × billedMins.
  //   The seeker paid a flat NRI price; the listener earns only their configured
  //   rate. LeanOn keeps the difference (NRI margin). rawShare is capped at the
  //   available hold (amountHeld − platformFee) as a safety net.
  const maxRawShare = s.listenerRatePerMin != null
    ? s.listenerRatePerMin * billedMins
    : Infinity

  const rawShare = Math.min(
    billedMins >= s.bookedMins
      ? s.amountHeld - (s.platformFee ?? 0)
      : Math.floor((s.amountHeld - (s.platformFee ?? 0)) * billedMins / s.bookedMins),
    maxRawShare,
  )

  // Fee computed first, earning is the remainder — guarantees
  // listenerEarning + listenerServiceFee === rawShare exactly (no rounding leak).
  const listenerServiceFee = Math.round(rawShare * LISTENER_SERVICE_FEE_RATE)
  const listenerEarning = rawShare - listenerServiceFee

  const refundAmount = billedMins >= s.bookedMins
    ? 0
    : Math.max(0, s.amountHeld - rawShare - (s.platformFee ?? 0))

  return { billedMins, listenerEarning, refundAmount, listenerServiceFee }
}
