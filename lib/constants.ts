export const PLATFORM_FEE       = 15   // flat ₹15 added on top of listener rate
export const MIN_LISTENER_RATE  = 8    // ₹/min
export const MAX_LISTENER_RATE  = 25   // ₹/min
export const FREE_SESSION_MINS  = 5
export const MAX_FREE_TRIALS    = 5    // each user gets 5 free 5-min trials (try multiple listeners)
export const SESSION_DURATIONS  = [5, 15, 30, 45] as const

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
