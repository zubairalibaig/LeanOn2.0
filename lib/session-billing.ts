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
// LISTENER SERVICE FEE: LeanOn takes LISTENER_SERVICE_FEE_RATE (40% since
// 2026-09-24, lib/constants.ts) out of the listener's share at settlement. This is
// entirely separate from PLATFORM_FEE (the seeker's flat ₹10) — the seeker's
// amountHeld and refundAmount math below are completely unaffected by this
// fee; the seeker never sees or pays it. The fee applies only to the
// listener's rawShare (full or pro-rated), so an early-exit session is
// charged the fee on the minutes actually earned, not the booked amount.

import { LISTENER_SERVICE_FEE_RATE, VOICE_PRICING_ENABLED, VOICE_PRICING_FROM, VOICE_RATE_PREMIUM, sessionRatePerMin } from './constants'

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
  listenerServiceFee: number // LeanOn's service fee on the listener's share (ledger only)
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

// What the listener takes home if a booked session runs its full length —
// same math as settleSession(). Shown on incoming requests instead of the
// seeker's total. `textRate` is the listener's own rate_per_min; it caps the
// share for NRI sessions (whose amount_held is a flat price).
export function estimateListenerTakeHome(
  s: { amount_held: number; platform_fee?: number | null; duration_mins: number; session_type: string },
  textRate?: number | null,
): number {
  let raw = Math.max(0, s.amount_held - (s.platform_fee ?? 0))
  if (textRate != null) {
    raw = Math.min(raw, sessionRatePerMin(Number(textRate), s.session_type === 'voice' ? 'voice' : 'text') * s.duration_mins)
  }
  return raw - Math.round(raw * LISTENER_SERVICE_FEE_RATE)
}

// Voice → text switch mid-session: the seeker gets back the voice premium for
// the minutes not yet used (whole minutes used are rounded DOWN, so a call that
// fails in the first minute refunds the whole premium). Returns 0 when the
// session never paid a premium: free trials, NRI flat-price sessions (seeker
// price is the same for both modes), and sessions booked before voice pricing.
// Only amount_held is lowered — listener_rate_per_min stays the voice rate so
// settlement pays voice minutes at voice and the rest at text, automatically.
export function voiceSwitchRefund(s: {
  amount_held: number; platform_fee?: number | null; duration_mins: number
  is_free_trial: boolean; listener_rate_per_min?: number | null
  started_at?: string | null; created_at?: string | null
}, nowMs: number): number {
  if (!VOICE_PRICING_ENABLED || s.is_free_trial || s.listener_rate_per_min == null) return 0
  if (!s.created_at || Date.parse(s.created_at) < VOICE_PRICING_FROM) return 0
  // India sessions only: amount_held − fee == rate × booked mins. NRI holds a flat price.
  if (s.listener_rate_per_min * s.duration_mins !== s.amount_held - (s.platform_fee ?? 0)) return 0
  if (s.listener_rate_per_min - VOICE_RATE_PREMIUM < 1) return 0
  const startMs = s.started_at ? Date.parse(s.started_at) : nowMs
  const usedMins = Math.floor(Math.max(0, nowMs - startMs) / 60_000)
  const remaining = Math.max(0, s.duration_mins - usedMins)
  return VOICE_RATE_PREMIUM * remaining
}
