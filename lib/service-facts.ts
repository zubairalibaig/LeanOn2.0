import { FREE_SESSION_MINS, MAX_FREE_TRIALS } from '@/lib/constants'

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
