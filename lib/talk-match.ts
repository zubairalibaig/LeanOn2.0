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

// How long one listener gets before Talk now moves on to the next. The
// listener's own request window (REQUEST_RESPONSE_WINDOW_SECS) is longer; the
// switch cancels the request as 'seeker_cancelled', which never counts as a
// missed request against the listener.
export const TALK_TRY_SECS = 60

// Most listeners Talk now will try in one go before offering /browse.
export const TALK_MAX_TRIES = 5
