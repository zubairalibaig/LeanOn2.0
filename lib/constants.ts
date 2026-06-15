export const PLATFORM_FEE       = 10   // flat ₹10 per session added on top of listener rate (paid by seeker)
// Razorpay gateway commission (2%) + 18% GST on the fee — borne by the seeker
// at recharge time. The wallet is credited the selected tier; the gross charge
// includes this fee.
export const GATEWAY_FEE_RATE   = 0.0236
export const grossRechargeAmount = (amount: number) => Math.ceil(amount * (1 + GATEWAY_FEE_RATE))
export const MIN_LISTENER_RATE  = 1    // ₹/min (suggestion floor; no hard mandate)
export const MAX_LISTENER_RATE  = 500  // ₹/min — DB CHECK constraint updated in migration 011
export const FREE_SESSION_MINS  = 5
export const MAX_FREE_TRIALS    = 5    // each user gets 5 free 5-min trials (try multiple listeners)
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
