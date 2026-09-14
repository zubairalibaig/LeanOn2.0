// Geo-pricing utilities — NRI vs India price display.
//
// Phase 1 (now): display USD/GBP/AED equivalent prices to international users.
//   The underlying wallet and Razorpay charge still runs in INR; Razorpay's
//   international gateway handles FX at checkout. The display price is a flat
//   simplified amount so NRI users aren't confused by variable listener rates.
//
// Phase 2 (later): actual billing in international currency with LeanOn keeping
//   the FX margin. Requires account_country gating in create_session RPC.
//
// Rate: approximate mid-market rate stored here. Update quarterly.
// Do NOT use live FX APIs in the render path — rate calls are slow, have quotas,
// and the variability is not meaningful at these price points (~₹5 swing on $6).

export const INDIA_COUNTRY = 'IN'

// Flat USD prices shown to NRI users for the 3 paid session durations.
// ₹10 platform fee is bundled in (not shown separately to international users).
export const NRI_USD_PRICES: Record<15 | 30 | 45, number> = {
  15: 6,
  30: 10,
  45: 15,
}

// Approximate USD → INR for display parity. Razorpay settles at live rate.
// Update this when it drifts ≥10% from mid-market.
export const APPROX_USD_TO_INR = 84

// Pre-computed INR equivalents of the flat USD prices. Used in session creation
// for Phase 2 when we actually bill at the NRI rate (currently display-only).
export const NRI_INR_EQUIV: Record<15 | 30 | 45, number> = {
  15: Math.round(NRI_USD_PRICES[15] * APPROX_USD_TO_INR),  // ₹504
  30: Math.round(NRI_USD_PRICES[30] * APPROX_USD_TO_INR),  // ₹840
  45: Math.round(NRI_USD_PRICES[45] * APPROX_USD_TO_INR),  // ₹1260
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
 * NRI:    "~$6" (with a note that INR is charged at checkout)
 */
export function getBookingPriceDisplay(
  inrCost: number,
  country: string | null | undefined,
  durationMins: number,
): { primary: string; note: string | null } {
  if (!isNriCountry(country)) return { primary: `₹${inrCost}`, note: null }
  const nriPrice = getNriDisplayPrice(durationMins, country)
  if (!nriPrice) return { primary: `₹${inrCost}`, note: null }
  const cfg = CURRENCY_MAP[country!] ?? CURRENCY_MAP['US']
  return {
    primary: nriPrice,
    note: `Charged in ₹ at checkout (${cfg.code} equiv.)`,
  }
}
