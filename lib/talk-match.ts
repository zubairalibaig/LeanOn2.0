import { PLATFORM_FEE, FREE_SESSION_MINS } from '@/lib/constants'
import { NRI_USD_PRICES } from '@/lib/geo-pricing'

// "Talk now" (/talk) — the match-first entry for people who don't want to
// browse a catalogue. Shared by the page and /api/talk/candidates.

// The chips a seeker picks from. Each maps onto listener specialty tags (the
// same ids as the /browse topic filter). A topic only RANKS listeners — it
// never filters, so a chip can't leave someone with nobody to talk to.
export const TALK_TOPICS = [
  { id: 'relationship', label: 'A relationship', emoji: '💔', tags: ['relationships', 'breakup'] },
  { id: 'family',       label: 'Family',         emoji: '🏠', tags: ['relationships', 'parenting', 'general'] },
  { id: 'work',         label: 'Work or studies', emoji: '💼', tags: ['stress', 'burnout', 'career', 'students', 'startup'] },
  { id: 'lonely',       label: 'Feeling lonely', emoji: '🌙', tags: ['loneliness', 'general'] },
  { id: 'anxious',      label: 'Anxious or overthinking', emoji: '🌀', tags: ['anxiety', 'selfesteem'] },
  { id: 'talk',         label: 'Just need to talk', emoji: '☕', tags: ['general'] },
] as const

export type TalkTopicId = typeof TALK_TOPICS[number]['id']

export function talkTopic(id: string | null | undefined) {
  return TALK_TOPICS.find(t => t.id === id) ?? null
}

// Paid "Talk now" matches only listeners at or below this TEXT rate, so the
// price is known before anyone is picked (₹10/min → ₹160 for 15 min of text).
// Seekers who want a particular (or pricier) listener still use /browse.
export const TALK_MAX_TEXT_RATE = 10

// How long one listener gets before Talk now moves on to the next. Measured
// 2026-10-15: median accept 10s, 90% within 28s. The listener's own request
// window (REQUEST_RESPONSE_WINDOW_SECS) is longer. A switch after the
// listener's full turn (TALK_SWITCH_MISS_SECS) is stored as 'talk_unanswered'
// and counts as a missed request; an earlier one is 'seeker_cancelled'.
export const TALK_TRY_SECS = 30

// The whole search stops after this long (then: Try again / See all listeners).
export const TALK_MAX_WAIT_SECS = 300

// Most listeners Talk now will try in one search (300s / 30s).
export const TALK_MAX_TRIES = 10

// ── Public description of Talk now (server-rendered on /talk + JSON-LD) ──────
// Must stay literally true: prices from lib/constants + lib/geo-pricing,
// listeners are SCREENED (never "trained"), only NIMHANS / Tele-MANAS.

const TALK_EX15 = TALK_MAX_TEXT_RATE * 15 + PLATFORM_FEE

export const TALK_FAQ: { q: string; a: string }[] = [
  { q: 'What is LeanOn Talk now?', a: `Talk now (leanon.app/talk) is the quickest way to talk to a real person in India or abroad. You pick what is on your mind and text or voice, and LeanOn asks a screened peer listener who is online — no browsing and no appointment. If a listener does not answer within about ${TALK_TRY_SECS} seconds, LeanOn asks the next one automatically, for up to ${Math.round(TALK_MAX_WAIT_SECS / 60)} minutes. A session starts only when a listener accepts; if nobody can, you are not charged.` },
  { q: 'How much does it cost?', a: `Your first ${FREE_SESSION_MINS} minutes are free, once per account. After that a Talk now session is 15 minutes, up to ₹${TALK_EX15} for text in India (you pay the matched listener's own price, shown before anyone is asked), and from US$${NRI_USD_PRICES[15]} outside India. You see the price before anyone is asked, it is charged only if a listener accepts, and unused minutes come back to your wallet.` },
  { q: 'Who can use it?', a: 'Adults 18 and over. LeanOn is not for under-18s. If you are under 18 and need to talk, please reach out to a trusted adult, or call Tele-MANAS on 14416 (free).' },
  { q: 'Who will I talk to?', a: 'A screened peer listener based in India — an ordinary adult with lived experience who listens without judging you. Listeners pass a written application, a screening quiz, a live selfie check and a manual review by LeanOn. They are not therapists and do not give medical advice.' },
  { q: 'What can I talk about?', a: 'Relationship problems, a breakup, marriage or family pressure, loneliness, work or study stress, overthinking, grief, or simply a hard day. You choose the topic so LeanOn can start with listeners who talk about it.' },
  { q: 'Can Indians living abroad (NRIs) use it?', a: 'Yes. Talk now works from India, the USA, UK, Canada, Australia, the UAE, Kuwait, Oman, Singapore and Malaysia, with prices shown in your currency. Listeners are in India and understand the Indian context.' },
  { q: 'Is it private?', a: 'A listener sees only the name you choose, never your phone number. Voice calls are not recorded. Text messages are stored securely and only authorised LeanOn administrators can open them, for example to review a reported session.' },
  { q: 'Is it therapy or a crisis line?', a: 'No. LeanOn is peer support, not therapy or emergency care. If you are in crisis or thinking about self-harm, call Tele-MANAS on 14416 (free, 24/7) or NIMHANS on 080-46110007.' },
]
