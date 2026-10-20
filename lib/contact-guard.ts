// Contact-detail guard for chat (2026-10-20).
//
// Terms §3 forbid sharing phone / email / social media and moving a
// conversation off LeanOn — for safety (no record, no protection) and because
// competitors pose as seekers to recruit listeners (2026-10-20: a "college
// student survey" ended with a listener's Instagram handle). The screening quiz
// asks listeners this exact case.
//
// Used server-side by /api/messages (session chat) and /api/listener/[id]/message
// (offline messages). Tuned to catch what people actually send — a bare handle,
// "text me on my ig", a phone number, an email, a site address — WITHOUT blocking
// normal support talk ("my ex keeps posting on instagram", "I deleted WhatsApp",
// prices, years, the crisis helplines).

export type ContactKind = 'phone' | 'email' | 'link' | 'handle' | 'social'

// Numbers that are fine to share: the only crisis helplines LeanOn lists.
const ALLOWED_NUMBERS = new Set(['14416', '08046110007', '8046110007', '918046110007'])
const ALLOWED_DOMAINS = /^(www\.)?leanon\.app$/i

const PLATFORM = String.raw`(?:insta(?:gram)?|ig|whats\s?app|wtsp|watsapp|telegram|tg|snap(?:chat)?|facebook|fb|messenger|discord|signal|threads|twitter|linkedin|skype|imo|sharechat|moj|josh|hike)`
const P = new RegExp(String.raw`\b${PLATFORM}\b`, 'i')

const RE_EMAIL = /[a-z0-9._%+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}/i
const RE_AT_HANDLE = /(?:^|[\s(:,])@[a-z0-9_.]{3,30}\b/i
const RE_URL = /\bhttps?:\/\/\S+|\bwww\.[a-z0-9-]+\.\S+|\bwa\.me\/\S*|\bt\.me\/\S*/i
const RE_DOMAIN = /\b([a-z0-9-]{2,}\.)+(com|in|app|net|org|io|co|me|link|xyz|ly|gg|info|site|online|live|chat|club|store|page)\b/gi
// A number written with spaces/dashes/dots/brackets: 10–13 digits in total.
const RE_PHONE_RUN = /\+?\d[\d\s\-().]{7,}\d/g

// "insta id", "whatsapp number", "my ig handle", "snap username"
const RE_PLATFORM_ID = new RegExp(String.raw`\b${PLATFORM}\b[\s\S]{0,15}\b(?:id|handle|user\s?name|profile|number|no\.?|link)\b|\b(?:id|handle|user\s?name|number)\b[\s\S]{0,12}\b${PLATFORM}\b`, 'i')
// A request aimed at the other person — "text ME on…", "on MY ig", "LET'S talk on…" —
// not someone describing their own life ("I talk to my sister on whatsapp").
const RE_CONTACT_ON = new RegExp([
  String.raw`\b(?:text|message|msg|dm|ping|call|add|follow|reach|connect|talk|chat|contact)\s+(?:me|mujhe|us)\b[\s\S]{0,20}\b(?:on|pe|par|in|via|at)\s+(?:my\s+|mere\s+|meri\s+)?${PLATFORM}\b`,
  String.raw`\b(?:on|pe|par)\s+(?:my|mere|meri|mera)\s+${PLATFORM}\b`,
  String.raw`\b(?:let'?s|lets|can\s+we|shall\s+we|chalo|we\s+can)\b[\s\S]{0,15}\b(?:talk|chat|connect|baat|continue)\b[\s\S]{0,15}\b(?:on|pe|par|in)\s+${PLATFORM}\b`,
].join('|'), 'i')
// "telegram pe aao", "insta pe baat karo", "whatsapp karo", "dm me", "ig pe milo"
const RE_PLATFORM_COME = new RegExp(String.raw`\b${PLATFORM}\b\s*(?:pe|par|par\s+)?\s*(?:aao|aaja|aa\s?jao|aa\s?jaao|milo|baat|text|msg|message|call|dm|add|follow|karo|kro|kar\s?lo)\b`, 'i')
const RE_DM_ME = /\b(?:dm|inbox)\s+(?:me|kar(?:o|do)?|kro)\b/i
// "my insta is abc_12" / "ig: abc.xyz"
const RE_PLATFORM_HANDLE = new RegExp(String.raw`\b${PLATFORM}\b\s*(?:id\s*)?(?:is|hai|:|-|=)?\s*@?([a-z0-9._]{4,30})`, 'i')

function handleLike(token: string): boolean {
  const t = token.replace(/^@/, '')
  if (t.length < 5 || t.length > 30 || !/[a-z]/i.test(t)) return false
  return /[a-z0-9][._][a-z0-9_]/i.test(t) || /_/.test(t) || (/[a-z]/i.test(t) && (t.match(/\d/g) ?? []).length >= 2)
}

export function detectContact(input: string): ContactKind[] {
  const text = input.normalize('NFKC')
  const kinds = new Set<ContactKind>()

  for (const m of text.match(RE_PHONE_RUN) ?? []) {
    const digits = m.replace(/\D/g, '')
    if (digits.length >= 10 && digits.length <= 13 && !ALLOWED_NUMBERS.has(digits)) kinds.add('phone')
  }
  // Digits spelled with gaps across words ("98765 432 10") are covered by the run above.

  if (RE_EMAIL.test(text)) kinds.add('email')
  if (RE_AT_HANDLE.test(text) && !RE_EMAIL.test(text)) kinds.add('handle')

  if (RE_URL.test(text) && !/^\s*(https?:\/\/)?(www\.)?leanon\.app(\/\S*)?\s*$/i.test(text.match(RE_URL)?.[0] ?? '')) kinds.add('link')
  for (const d of text.match(RE_DOMAIN) ?? []) {
    if (!ALLOWED_DOMAINS.test(d) && !/^(e\.g|i\.e)$/i.test(d)) kinds.add('link')
  }

  if (P.test(text)) {
    if (RE_PLATFORM_ID.test(text) || RE_CONTACT_ON.test(text) || RE_PLATFORM_COME.test(text)) kinds.add('social')
    const h = RE_PLATFORM_HANDLE.exec(text)
    if (h && handleLike(h[1])) kinds.add('handle')
  }
  if (RE_DM_ME.test(text)) kinds.add('social')

  // A message that is nothing but a handle ("theurbandude_lll").
  const solo = text.trim()
  if (/^@?[a-z0-9._]+$/i.test(solo) && handleLike(solo)) kinds.add('handle')

  return Array.from(kinds)
}

export function contactBlockedMessage(isListener: boolean): string {
  return isListener
    ? 'Contact details (phone, social media, email, links) can’t be shared on LeanOn — it breaks the listener rules you agreed to, and the message was not sent. If someone asks to talk outside LeanOn, politely decline: it is often someone recruiting listeners for another app.'
    : 'For your safety, contact details (phone, social media, email, links) can’t be shared on LeanOn, so this message was not sent. Please keep the conversation here.'
}
