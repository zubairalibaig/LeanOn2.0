import { PLATFORM_FEE, sessionRatePerMin } from '@/lib/constants'

// Geo-pricing utilities — NRI vs India price display and billing.
//
// Phase 2 (now, 2026-09-14): actual billing at flat USD rates for NRI users.
//   Razorpay processes in INR (no multi-currency setup needed). "We do the
//   conversion" — LeanOn stores pre-defined INR equivalents; the seeker's
//   Indian/foreign bank card sees the INR charge and does FX at market rate.
//   Listener still earns their configured rate minus the service fee. LeanOn keeps
//   the NRI margin = flat_price − listener_earnings − ₹10 platform fee.
//
// Rate: approximate mid-market rate stored here. Update quarterly.
// Do NOT use live FX APIs in the render path — rate calls are slow, have quotas,
// and the variability is not meaningful at these price points (~₹5 swing on $10).

export const INDIA_COUNTRY = 'IN'

// Flat USD prices billed to NRI users for the 3 paid session durations.
// Total amount the seeker pays (inclusive of ₹10 platform fee — not shown
// separately to international users; the flat price is the all-in price).
export const NRI_USD_PRICES: Record<15 | 30 | 45, number> = {
  15: 10,
  30: 15,
  45: 20,
}

// Approximate USD → INR for billing. Razorpay processes at this INR amount.
// Update this when it drifts ≥10% from mid-market (check quarterly).
export const APPROX_USD_TO_INR = 84

// Pre-computed INR equivalents — the actual amount_held on the session and
// the amount deducted from the seeker's wallet for NRI bookings.
export const NRI_INR_EQUIV: Record<15 | 30 | 45, number> = {
  15: Math.round(NRI_USD_PRICES[15] * APPROX_USD_TO_INR),  // $10 → ₹840
  30: Math.round(NRI_USD_PRICES[30] * APPROX_USD_TO_INR),  // $15 → ₹1260
  45: Math.round(NRI_USD_PRICES[45] * APPROX_USD_TO_INR),  // $20 → ₹1680
}

// Per-currency display config for the supported overseas countries.
// symbol: shown before the amount. code: for screen-reader / accessibility.
const CURRENCY_MAP: Record<string, { symbol: string; code: string; rate: number }> = {
  US: { symbol: '$',  code: 'USD', rate: APPROX_USD_TO_INR },
  CA: { symbol: 'CA$', code: 'CAD', rate: 62  }, // ≈ 1 CAD = ₹62
  AU: { symbol: 'A$', code: 'AUD', rate: 55  }, // ≈ 1 AUD = ₹55
  GB: { symbol: '£',  code: 'GBP', rate: 107 }, // ≈ 1 GBP = ₹107
  AE: { symbol: 'AED ', code: 'AED', rate: 23 }, // ≈ 1 AED = ₹23
  KW: { symbol: 'KD ', code: 'KWD', rate: 274 },
  OM: { symbol: 'OMR ', code: 'OMR', rate: 219 },
  SG: { symbol: 'S$', code: 'SGD', rate: 63  },
  MY: { symbol: 'RM ', code: 'MYR', rate: 19  },
}

export function isNriCountry(country: string | null | undefined): boolean {
  return !!country && country !== INDIA_COUNTRY
}

// Dial code → country, longest code first. +1 is US or Canada; the login
// dropdown choice decides which (pricingCountry), US otherwise.
const DIAL_CODES: [string, string][] = [
  ['971', 'AE'], ['965', 'KW'], ['968', 'OM'],
  ['91', 'IN'], ['44', 'GB'], ['65', 'SG'], ['60', 'MY'], ['61', 'AU'],
  ['1', 'US'],
]

/**
 * The country that decides India vs NRI pricing — from the account's
 * OTP-VERIFIED phone number, not from users.account_country alone.
 *
 * Why (2026-10-14): account_country ended up 'IN' for every account, including
 * all 14 overseas numbers (a +971 seeker was billed Indian rates on 100+
 * sessions). The verified phone can't be spoofed and is always present.
 * account_country is still used to tell the US from Canada (both +1) and for
 * overseas numbers whose prefix isn't in the list (it's then trusted only
 * when it isn't 'IN').
 *
 * Rules: a +91 number (or a legacy bare 10-digit Indian number) → 'IN'.
 * Any other number → its country (never 'IN'). No phone → account_country.
 */
export function pricingCountry(phone: string | null | undefined, accountCountry: string | null | undefined): string {
  const d = (phone ?? '').replace(/\D/g, '')
  if (!d || (phone ?? '').startsWith('DELETE')) return accountCountry || INDIA_COUNTRY
  // Legacy rows: a 10-digit Indian mobile stored WITHOUT '+' or country code.
  // (Only without '+': +65 Singapore numbers are 10 digits too.)
  if (!(phone ?? '').startsWith('+') && d.length === 10 && /^[6-9]/.test(d)) return INDIA_COUNTRY
  for (const [code, cc] of DIAL_CODES) {
    if (!d.startsWith(code)) continue
    if (cc === INDIA_COUNTRY) return INDIA_COUNTRY
    if (code === '1') return accountCountry === 'CA' ? 'CA' : 'US'
    return cc
  }
  // Overseas number from a country not in the list: still NRI pricing.
  return isNriCountry(accountCountry) ? accountCountry! : 'US'
}

/**
 * Format a price in the user's local currency.
 * Falls back to USD for unknown countries.
 */
export function formatNriPrice(inrAmount: number, country: string): string {
  const cfg = CURRENCY_MAP[country] ?? CURRENCY_MAP['US']
  const localAmount = inrAmount / cfg.rate
  // Always round UP to the next whole integer — no decimals ever shown
  const rounded = Math.ceil(localAmount)
  return `${cfg.symbol}${rounded}`
}

/**
 * Get the flat NRI display price for a given duration.
 * Returns null for India or unknown duration.
 */
export function getNriDisplayPrice(
  durationMins: number,
  country: string | null | undefined,
): string | null {
  if (!isNriCountry(country)) return null
  if (durationMins !== 15 && durationMins !== 30 && durationMins !== 45) return null
  const inr = NRI_INR_EQUIV[durationMins as 15 | 30 | 45]
  return formatNriPrice(inr, country!)
}

/**
 * What a paid session costs, in INR — THE rule, shared by /api/sessions
 * (billing) and every price shown in the app.
 * India: the listener's per-minute price (indianTotal = rate × mins + ₹10 fee).
 * NRI: the flat price (US$10/15/20 in INR), but never less than the Indian
 * price — with a listener above ~₹37–55/min the flat price would otherwise pay
 * the listener less than their own rate (owner decision, 2026-10-14).
 */
export function sessionTotalInr(indianTotal: number, country: string | null | undefined, durationMins: number): number {
  if (!isNriCountry(country)) return indianTotal
  const flat = NRI_INR_EQUIV[durationMins as 15 | 30 | 45]
  return flat ? Math.max(flat, indianTotal) : indianTotal
}

/**
 * THE server-side price quote for a session — used by POST /api/sessions
 * (the amount actually held) and /api/talk/candidates (the price shown before
 * booking), so the two can't drift. `textRate` is listener_profiles.rate_per_min.
 * Returns the per-minute rate for this mode (what settlement caps the
 * listener's share at), the Indian total, and the total charged.
 */
export function quoteSession(textRate: number, sessionType: 'text' | 'voice', durationMins: number, country: string | null | undefined, free: boolean) {
  const rate = sessionRatePerMin(textRate, sessionType)
  const indianTotal = rate * durationMins + PLATFORM_FEE
  const total = free ? 0 : sessionTotalInr(indianTotal, country, durationMins)
  return { rate, indianTotal, total }
}

/**
 * Full price line for booking UI:
 * India:  "₹310"
 * NRI:    "$10" (flat price; INR equivalent charged from wallet)
 */
export function getBookingPriceDisplay(
  inrCost: number,
  country: string | null | undefined,
  durationMins: number,
): { primary: string; note: string | null } {
  if (!isNriCountry(country)) return { primary: `₹${inrCost}`, note: null }
  if (!NRI_INR_EQUIV[durationMins as 15 | 30 | 45]) return { primary: `₹${inrCost}`, note: null }
  // Same rule as billing: flat price, or the listener's price if that's higher.
  const inrEquiv = sessionTotalInr(inrCost, country, durationMins)
  const nriPrice = formatNriPrice(inrEquiv, country!)
  return {
    primary: nriPrice,
    // Show exact INR amount deducted from wallet so there are no surprises
    note: `₹${inrEquiv} deducted from wallet`,
  }
}
