export const PLATFORM_FEE       = 10   // flat ₹10 per session added on top of listener rate (paid by seeker) — unchanged by the service fee below
// LeanOn's service fee on listener earnings: 15% from 2026-09-14, 40% from
// 2026-09-24. Deducted from the listener's share at settlement
// (lib/session-billing.ts) — the seeker's charge (amountHeld) and the flat
// PLATFORM_FEE above are completely unaffected; the seeker never sees or pays
// this. settleSession() runs once per session at its own completion, so
// already-completed sessions are never recalculated under a new rate.
// NOTE: user-facing copy that states hard-coded numbers must be updated
// alongside it — see the surface list in CLAUDE.md.
export const LISTENER_SERVICE_FEE_RATE = 0.40
// For admin display only: the rate a session settled at, by its end time.
// Switch time = the 40% deploy (commit b90fc5a pushed 05:12 UTC; ±a few min).
const SERVICE_FEE_40_FROM = Date.parse('2026-09-24T05:15:00Z')
export const serviceFeeRateAt = (endedAt?: string | null) =>
  endedAt && Date.parse(endedAt) < SERVICE_FEE_40_FROM ? 0.15 : LISTENER_SERVICE_FEE_RATE
// Razorpay gateway commission (2%) + 18% GST on the fee — borne by the seeker
// at recharge time. The wallet is credited the selected tier; the gross charge
// includes this fee.
export const GATEWAY_FEE_RATE   = 0.0236
export const grossRechargeAmount = (amount: number) => Math.ceil(amount * (1 + GATEWAY_FEE_RATE))
export const MIN_LISTENER_RATE  = 1    // ₹/min (suggestion floor; no hard mandate)
export const MAX_LISTENER_RATE  = 500  // ₹/min — requires migration 039 (011 was a no-op; live cap stays ≤200 until 039 runs)
// Text/voice pricing (2026-09-24). Only the TEXT rate is stored
// (listener_profiles.rate_per_min); voice is always text + VOICE_RATE_PREMIUM,
// so voice > text holds structurally and no migration is needed.
// Kill switch: set NEXT_PUBLIC_VOICE_PRICING=false and redeploy → one rate for
// both modes again. Read by both client and server (inlined at build), so the
// price shown and the price charged always agree.
export const VOICE_PRICING_ENABLED = process.env.NEXT_PUBLIC_VOICE_PRICING !== 'false'
export const VOICE_RATE_PREMIUM    = 5 // ₹/min
// Sessions booked before this (the voice-pricing deploy) never paid the premium.
export const VOICE_PRICING_FROM    = Date.parse('2026-09-24T04:55:00Z')
export const sessionRatePerMin = (textRate: number, type: 'text' | 'voice') =>
  type === 'voice' && VOICE_PRICING_ENABLED ? textRate + VOICE_RATE_PREMIUM : textRate
export const FREE_SESSION_MINS  = 5
// Each user gets N free 5-min trials, ONE per listener (so they can try the
// product before paying). Reduced 5 → 3 (2026-08-11) → 2 → 1 (2026-09-13):
// multiple free trials let users satisfy casual "need to vent" needs without
// ever reaching the paywall — at 2 trials, 101/104 free users never recharged.
// 1 trial preserves a genuine try-before-you-buy moment while making the
// paywall decision unavoidable after the first session.
// NOTE: any user-facing copy stating the number must be updated alongside this
// (app/browse/page.tsx nudge, app/session/[id]/page.tsx conversion screen,
// homepage FAQ, /faq, city page FAQs, layout Service schema, public/llms.txt).
export const MAX_FREE_TRIALS    = 1
export const SESSION_DURATIONS  = [5, 15, 30, 45] as const
// How long a seeker's session REQUEST stays open waiting for the listener to
// accept, before it auto-cancels and refunds the seeker. This is the single
// source of truth — the seeker waiting screen, the listener dashboard countdown,
// the listener catch-up guard, the accept-too-late check, and the stale-pending
// cleanup all read it, so they can never drift out of sync.
export const REQUEST_RESPONSE_WINDOW_SECS = 180 // 3 minutes
export const REQUEST_RESPONSE_WINDOW_MS   = REQUEST_RESPONSE_WINDOW_SECS * 1000
export const RECHARGE_AMOUNTS   = [200, 500, 1000, 2000] as const
export const UUID_RE            = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
export const CRISIS_RESOURCES   = {
  NIMHANS:     { name: 'NIMHANS',     number: '080-46110007', tel: '08046110007' },
  TELE_MANAS:  { name: 'Tele-MANAS', number: '14416',        tel: '14416'       },
} as const

export const LANGUAGES = [
  { id: 'english',   label: 'English' },
  { id: 'hindi',     label: 'हिंदी (Hindi)' },
  { id: 'tamil',     label: 'தமிழ் (Tamil)' },
  { id: 'telugu',    label: 'తెలుగు (Telugu)' },
  { id: 'kannada',   label: 'ಕನ್ನಡ (Kannada)' },
  { id: 'malayalam', label: 'മലയാളം (Malayalam)' },
  { id: 'marathi',   label: 'मराठी (Marathi)' },
  { id: 'bengali',   label: 'বাংলা (Bengali)' },
  { id: 'gujarati',  label: 'ગુજરાતી (Gujarati)' },
  { id: 'punjabi',   label: 'ਪੰਜਾਬੀ (Punjabi)' },
  { id: 'odia',      label: 'ଓଡ଼ିଆ (Odia)' },
  { id: 'urdu',      label: 'اردو (Urdu)' },
] as const

export type LanguageId = typeof LANGUAGES[number]['id']

// ── Message reactions ───────────────────────────────────────────────────────
// Deliberately a SHORT, SUPPORTIVE-ONLY set.
//
// A thumbs-down (or any negative reaction) is intentionally excluded: LeanOn is
// an emotional-support product, and letting someone react negatively to another
// person's vulnerable message is a wellbeing risk, not a feature. Ambiguous
// reactions (e.g. a crying face, which can read as pity) are excluded for the
// same reason. What remains maps to the things a listener or seeker actually
// wants to express without interrupting the conversation:
//   ❤️ I care / that matters   🙏 thank you   🫂 sending a hug   😊 warmth
// This list is mirrored by a CHECK constraint in migration 051 so it cannot drift.
export const MESSAGE_REACTIONS = ['❤️', '🙏', '🫂', '😊'] as const
export type MessageReaction = typeof MESSAGE_REACTIONS[number]

// ── Listener age (month + year only — never the day, for privacy) ───────────
// Minimum age to be a listener; LeanOn is an adults-only platform.
export const MIN_LISTENER_AGE = 18
// Oldest birth year we offer in the dropdown (keeps the list finite/sane).
export const MAX_LISTENER_AGE = 90

// Browse age-range filter buckets. `max: 200` on the last bucket means "and up".
export const AGE_RANGES = [
  { id: '18-29', label: '18–29', min: 18, max: 29 },
  { id: '30-39', label: '30–39', min: 30, max: 39 },
  { id: '40-49', label: '40–49', min: 40, max: 49 },
  { id: '50-59', label: '50–59', min: 50, max: 59 },
  { id: '60+',   label: '60+',   min: 60, max: 200 },
] as const

export type AgeRangeId = typeof AGE_RANGES[number]['id']

export const MONTHS = [
  { id: 1, label: 'January' },   { id: 2,  label: 'February' }, { id: 3,  label: 'March' },
  { id: 4, label: 'April' },     { id: 5,  label: 'May' },      { id: 6,  label: 'June' },
  { id: 7, label: 'July' },      { id: 8,  label: 'August' },   { id: 9,  label: 'September' },
  { id: 10, label: 'October' },  { id: 11, label: 'November' }, { id: 12, label: 'December' },
] as const

// Compute age (whole years) from month+year precision only. Returns null if the
// inputs are missing/invalid. Uses month-level precision — the birthday is
// treated as the 1st of the birth month.
export function ageFromBirth(year?: number | null, month?: number | null): number | null {
  if (!year || !month || month < 1 || month > 12) return null
  const now = new Date()
  let age = now.getFullYear() - year
  if ((now.getMonth() + 1) < month) age -= 1
  return age >= 0 && age <= 130 ? age : null
}

// Map a birth month+year to its AGE_RANGES bucket id, or null if unknown.
export function ageRangeId(year?: number | null, month?: number | null): AgeRangeId | null {
  const age = ageFromBirth(year, month)
  if (age === null) return null
  return AGE_RANGES.find(r => age >= r.min && age <= r.max)?.id ?? null
}
