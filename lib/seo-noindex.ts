// Public pages deliberately kept OUT of search results (noindex, follow) and
// out of the sitemap. They stay live for anyone who has the link.
//
// Why (2026-09-24 SEO review): these queries bring the wrong audience —
// people looking for a paid "friend", stranger chat or chat jobs, or wanting
// something free — not seekers who pay for support. 2 of the first 5 paying
// users came for "friendship", and listener sign-ups far outnumber seekers.
// The ai-chatbot-alternative-<country> pages are ~90% identical to each other
// (doorway-page risk); /ai-chatbot-alternative stays indexed as the one version.
//
// To re-index a page: remove it here. Nothing else needs changing.
export const NOINDEX_PATHS = new Set<string>([
  '/paid-friend-india',
  '/online-friend-india',
  '/stranger-friend-india',
  '/talk-to-stranger-online-india',
  '/human-companionship-online-india',
  '/getcompanion-alternative',
  '/anonymous-chat-india',
  '/get-paid-to-chat-india',
  '/talk-to-someone-free-india',
  '/ai-chatbot-alternative-usa', '/ai-chatbot-alternative-canada', '/ai-chatbot-alternative-uk',
  '/ai-chatbot-alternative-uae', '/ai-chatbot-alternative-singapore', '/ai-chatbot-alternative-malaysia',
  '/ai-chatbot-alternative-kuwait', '/ai-chatbot-alternative-oman', '/ai-chatbot-alternative-australia',
])

export const NOINDEX_ROBOTS = { index: false, follow: true } as const
