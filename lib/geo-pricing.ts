// Geo-pricing utilities — NRI vs India price display and billing.
//
// Phase 2 (now, 2026-09-14): actual billing at flat USD rates for NRI users.
//   Razorpay processes in INR (no multi-currency setup needed). "We do the
//   conversion" — LeanOn stores pre-defined INR equivalents; the seeker's
//   Indian/foreign bank card sees the INR charge and does FX at market rate.
//   Listener still earns their configured rate × 85% (unchanged). LeanOn keeps
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

// Per-currency display config for the 8 supported countries.
// symbol: shown before the amount. code: for screen-reader / accessibility.
const CURRENCY_MAP: Record<string, { symbol: string; code: string; rate: number }> = {
  US: { symbol: '$',  code: 'USD', rate: APPROX_USD_TO_INR },
  CA: { symbol: 'CA$', code: 'CAD', rate: 62  }, // ≈ 1 CAD = ₹62
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

/**
 * Format a price in the user's local currency.
 * Falls back to USD for unknown countries.
 */
export function formatNriPrice(inrAmount: number, country: string): string {
  const cfg = CURRENCY_MAP[country] ?? CURRENCY_MAP['US']
  const localAmount = inrAmount / cfg.rate
  // Round to nearest 0.5 for clean display
  const rounded = Math.round(localAmount * 2) / 2
  // Show no decimals when it's a whole number
  const display = rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1)
  return `${cfg.symbol}${display}`
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
  const nriPrice = getNriDisplayPrice(durationMins, country)
  if (!nriPrice) return { primary: `₹${inrCost}`, note: null }
  const inrEquiv = NRI_INR_EQUIV[durationMins as 15 | 30 | 45]
  return {
    primary: nriPrice,
    // Show exact INR amount deducted from wallet so there are no surprises
    note: `₹${inrEquiv} deducted from wallet`,
  }
}
