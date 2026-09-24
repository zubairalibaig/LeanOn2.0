import { LISTENER_SERVICE_FEE_RATE, VOICE_PRICING_ENABLED, VOICE_RATE_PREMIUM } from './constants'

const FEE  = Math.round(LISTENER_SERVICE_FEE_RATE * 100)
const KEEP = 100 - FEE

// One-time announcement of text/voice pricing + the service fee change
// (2026-09-24). `type` doubles as the idempotency key for the in-app
// notification — one row per listener. db/one-off/2026-09-24-pricing-notice.sql
// broadcasts the same row to existing listeners; keep its text in sync.
export const PRICING_NOTICE = {
  type: 'pricing_update_2026_09',
  storageKey: 'leanon_pricing_notice_2026_09_dismissed',
  sentKey:    'leanon_pricing_notice_2026_09_sent',
  title: VOICE_PRICING_ENABLED
    ? 'Voice calls now earn you more — and an update on how you earn'
    : 'An update on how you earn on LeanOn',
  body:
    (VOICE_PRICING_ENABLED
      ? `Seekers can now choose text chat or a voice call, and voice is always priced ₹${VOICE_RATE_PREMIUM}/min above your text rate. `
      : '') +
    `From 24 Sep 2026, you keep ${KEEP}% of every session; LeanOn's ${FEE}% service fee covers finding seekers for you, secure payments, ` +
    `verification, safety and support. Sessions you've already completed aren't affected. You set your own price — now is a good time to review it.`,
  action_url: '/dashboard?edit=pricing',
} as const
