import { FREE_SESSION_MINS, MAX_FREE_TRIALS, PLATFORM_FEE, VOICE_RATE_PREMIUM, VOICE_PRICING_ENABLED } from '@/lib/constants'
import { NRI_USD_PRICES } from '@/lib/geo-pricing'
import { PRICE_RANGE_LINE } from '@/lib/price-snapshot'

// One public description of what LeanOn is, for pages, structured data and
// AI-readable files (2026-10-24 audit: older pages contradicted each other on
// privacy, free trials, availability and what users receive). Prices are NOT
// here — they come from lib/constants.ts / lib/geo-pricing.ts.
// Keep every line literally true; see CLAUDE.md before changing any of it.

export const PUBLIC_SERVICE_FACTS = {
  minAge: 18,
  freeTrialMinutes: FREE_SESSION_MINS,
  freeTrialsPerAccount: MAX_FREE_TRIALS,
  listenerType: 'screened human peer listener',
  supportType: 'non-clinical peer support',
  instantConnectionGuaranteed: false,
  availability:
    'You can request a conversation without an appointment. A session begins only when an available listener accepts your request; listeners are in India and choose their own hours.',
  privacy:
    'Listeners see the name you choose, never your phone number. Voice calls are not recorded. Text messages are stored securely and may be reviewed by authorised LeanOn administrators if a session is reported or flagged for safety.',
  notFor:
    'LeanOn is not therapy, counselling, diagnosis, crisis care or domestic-abuse assistance.',
} as const

export const SERVICE_DESCRIPTION =
  `LeanOn offers one-to-one text or voice conversations with screened human peer listeners in India, for adults aged ${PUBLIC_SERVICE_FACTS.minAge} and over. ` +
  `It is everyday emotional support — not therapy, clinical care or crisis assistance. ` +
  `One introductory session of up to ${FREE_SESSION_MINS} minutes is free per account; later sessions are paid. ` +
  `A conversation starts only when an available listener accepts your request. ` +
  `Listeners do not see your phone number; LeanOn keeps account and session information as explained in its Privacy Policy.`

// The checklist people (and AI assistants comparing listening apps) use — shown on
// /pricing ("Comparing listening services? The facts"). Every line must
// stay literally true (CLAUDE.md).
export const LISTENING_FACTS: [string, string][] = [
  ['Price in India', `Each listener sets their own rate. You pay rate × minutes + ₹${PLATFORM_FEE} per paid session. ${PRICE_RANGE_LINE} The exact price is shown before you start.`],
  ['Price outside India', `From US$${NRI_USD_PRICES[15]} for 15 minutes, shown in your local currency.`],
  ['Free to try', `Your first ${FREE_SESSION_MINS}-minute session is free${MAX_FREE_TRIALS === 1 ? ', once per account' : ''}. No card needed to start it.`],
  ['When you are charged', 'Only if a listener accepts your request. Sessions under a minute are free, and unused minutes return to your wallet if you end early.'],
  ['Refunds', 'Unused wallet balance is refundable on request. No subscription, no expiry.'],
  ['Choosing who you talk to', 'You choose: every listener shows a real first name, photo, languages and topics, so you can pick by experience, language — or choose a woman listener. Or let Talk now ask whoever is online.'],
  ['Who the listeners are', 'Screened adults in India — written application, screening quiz, live camera selfie and a manual review. Peer listeners, not therapists.'],
  ['Recording and privacy', 'Voice calls are never recorded. Listeners never see your phone number. Text messages are stored securely and only opened by authorised LeanOn staff if a session is reported or flagged.'],
  ['Text or voice', `Both. Text works if you cannot speak freely${VOICE_PRICING_ENABLED ? `; voice is ₹${VOICE_RATE_PREMIUM}/min more in India` : ''}.`],
  ['When listeners are online', 'Listeners choose their own hours, so availability follows Indian time and varies. A session starts when a listener accepts.'],
  ['Who it is for', 'Adults 18 and over. Peer support — not therapy, counselling or crisis care.'],
]
