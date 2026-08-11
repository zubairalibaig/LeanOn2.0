export const PLATFORM_FEE       = 10   // flat ₹10 per session added on top of listener rate (paid by seeker)
// Razorpay gateway commission (2%) + 18% GST on the fee — borne by the seeker
// at recharge time. The wallet is credited the selected tier; the gross charge
// includes this fee.
export const GATEWAY_FEE_RATE   = 0.0236
export const grossRechargeAmount = (amount: number) => Math.ceil(amount * (1 + GATEWAY_FEE_RATE))
export const MIN_LISTENER_RATE  = 1    // ₹/min (suggestion floor; no hard mandate)
export const MAX_LISTENER_RATE  = 500  // ₹/min — requires migration 039 (011 was a no-op; live cap stays ≤200 until 039 runs)
export const FREE_SESSION_MINS  = 5
// Each user gets N free 5-min trials, ONE per listener (so they can try a few
// listeners before paying). Reduced 5 → 3 on 2026-08-11: at 5 trials a seeker
// could get 25 free minutes across 5 listeners, which fully satisfied most
// casual "just need to vent" needs and meant the paywall was never reached
// (62 free trials vs 1 paid session). 3 keeps a genuine try-before-you-buy
// window while restoring a reason to recharge.
// NOTE: any user-facing copy stating the number must be updated alongside this
// (homepage FAQ, /faq, city page FAQs, layout Service schema, public/llms.txt).
export const MAX_FREE_TRIALS    = 3
export const SESSION_DURATIONS  = [5, 15, 30, 45] as const
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
