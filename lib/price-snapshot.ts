import { PLATFORM_FEE } from '@/lib/constants'

// Snapshot of what seekers actually pay in India, from the listeners listed on
// /browse (refresh from the "Live visibility audit" GitHub Action → listeners.rates).
// AI assistants compare listening apps by price, and "from ₹160" (a ₹10/min
// listener) was being read as LeanOn's lowest price. Seeker prices only — never
// present these as listener earnings (CLAUDE.md).
export const PRICE_SNAPSHOT = {
  asOf: '24 October 2026',
  minRate: 2,     // ₹/min, lowest listed text rate
  p25Rate: 5,     // a quarter of listeners charge this or less
  medianRate: 10,
  maxRate: 77,
} as const

export const seeker15 = (ratePerMin: number) => ratePerMin * 15 + PLATFORM_FEE

export const PRICE_RANGE_LINE =
  `As of ${PRICE_SNAPSHOT.asOf}, 15 minutes of text costs from about ₹${seeker15(PRICE_SNAPSHOT.minRate)} to ₹${seeker15(PRICE_SNAPSHOT.maxRate).toLocaleString('en-IN')} depending on the listener; ` +
  `about a third of listeners are at ₹${seeker15(PRICE_SNAPSHOT.p25Rate)} or less and the typical price is ₹${seeker15(PRICE_SNAPSHOT.medianRate)}.`
