// Contact-detail guard for chat (2026-10-20).
//
// Terms §3 forbid sharing phone / email / social media and moving a
// conversation off LeanOn — for safety (no record, no protection) and because
// competitors pose as seekers to recruit listeners (2026-10-20: a "college
// student survey" ended with a listener's Instagram handle). The screening quiz
// asks listeners this exact case.
//
// Used server-side by /api/messages (session chat) and /api/listener/[id]/message
// (offline messages). It blocks what people actually send — a phone number, an
// email, a handle, a site address, "text me on my ig" — and must NOT block people
// describing their own lives: "his whatsapp number was saved as office", "I
// checked his insta profile", "she commented on my insta post", ages ("25years"),
// marks, prices, the crisis helplines. Every rule below has a reason in the test
// list in the commit history; when tuning, add the new example to both lists.

export type ContactKind = 'phone' | 'email' | 'link' | 'handle' | 'social'

// Numbers that are fine to share: the only crisis helplines LeanOn lists.
const ALLOWED_NUMBERS = new Set(['14416', '08046110007', '8046110007', '918046110007'])

// Only apps used to move a chat elsewhere. NOT English/Hinglish words that also
// mean something else (signal, threads, hike, imo, moj, josh, snap-as-verb).
const PLATFORM = String.raw`(?:insta(?:gram)?|ig|whats\s?app|wtsp|watsapp|telegram|snapchat|snap|facebook|fb|messenger|discord|twitter|linkedin|skype|sharechat)`
const P = new RegExp(String.raw`\b${PLATFORM}\b`, 'i')
const OWNER = String.raw`(?:my|mera|meri|mere|apna|apni|apne|your|ur|tumhara|tumhari|tumhare|tera|teri|tere|aapka|aapki|aapke)`
const IDWORD = String.raw`(?:id|handle|user\s?name|number|no\.?)`

const RE_EMAIL = /[a-z0-9._%+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}/i
const RE_EMAIL_NO_TLD = /[a-z0-9._%+-]{3,}@(?:gmail|yahoo|outlook|hotmail|rediffmail|icloud|proton(?:mail)?)\b/i
const RE_AT_HANDLE = /(?:^|[\s(:,])@[a-z0-9_.]{3,30}\b/i
const RE_URL = /\bhttps?:\/\/\S+|\bwww\.[a-z0-9-]+\.\S+|\bwa\.me\/\S*|\bt\.me\/\S*/i
// Unambiguous TLDs anywhere. Word-like ones (in, me, co, live, club…) only at the
// end of a message, before a path, or after "visit / check out" — so a missed
// space ("so tired.in the morning", "I cried.me and mom") isn't a link.
const RE_DOMAIN_STRONG = /(?:^|\s)(?:[a-z0-9-]{2,}\.)+(?:com|net|org|io|app|xyz|ly|gg|info|site|online|store|page)(?:\/\S*)?(?=\s|$|[),.!?])/gi
const RE_DOMAIN_WEAK = /(?:^|\s)[a-z0-9-]{4,}\.(?:in|co\.in|co|me|live|chat|club|link)(?:\/\S*)?(?=\s*$|\/)/gi
// "checkout thetalkingapp.in", "visit abc.me", "go to xyz.co" — a word-like TLD
// mid-sentence counts only after a "go and look" verb.
const RE_DOMAIN_VISIT = /\b(?:check\s?out|visit|go\s+to|search|google|site|website|link)\b[\s\S]{0,12}\b[a-z0-9-]{3,}\.(?:in|co\.in|co|me|live|chat|club|link)\b/i
const RE_PHONE_RUN = /\+?\d[\d\s\-().]{7,}\d/g

// "my insta id", "apna whatsapp number", "your snap username"
// …only when it's being shared or asked for ("my insta id is …", "apna number do"),
// not "my insta id got hacked" / "my whatsapp number changed".
const SHARE_TAIL = String.raw`\s*(?:is\b|hai\b|kya\b|:|=|-|do\b|de\b|dedo\b|de\s+do\b|bhejo\b|bhej\s+do\b|send\b|share\b|batao\b|bata\s+do\b|please\b|pls\b|plz\b|\?|$)`
const RE_OWN_ID = new RegExp(String.raw`\b${OWNER}\s+${PLATFORM}\s*${IDWORD}${SHARE_TAIL}`, 'i')
const RE_WHAT_ID = new RegExp(String.raw`\b(?:what'?s|what\s+is|kya\s+hai)\s+(?:your|ur|tumhara|tumhari|tera|teri|aapka|aapki)\s+${PLATFORM}\s*${IDWORD}\b`, 'i')
// "insta id do", "whatsapp number bhejo", "ig handle is …"
const RE_ID_ASK = new RegExp(String.raw`\b${PLATFORM}\s*${IDWORD}\s*(?:do|de|dedo|de\s+do|bhejo|bhej\s+do|send|share|please|pls|plz|chahiye|batao|bata\s+do|is|hai|:|=)`, 'i')
// "send me your whatsapp number", "share your insta id"
const RE_SEND_ID = new RegExp(String.raw`\b(?:send|share|give|bhejo|batao)\s+(?:me\s+)?(?:${OWNER}\s+)?${PLATFORM}\s*${IDWORD}\b`, 'i')
// "text me (here) on (my) ig", "find me on insta", "hit me up on telegram"
const RE_CONTACT_ON = new RegExp(String.raw`\b(?:text|message|msg|dm|ping|call|add|follow|reach|connect|talk|chat|contact|find|search|hit)\s+(?:to\s+|with\s+)?(?:me|mujhe|us)\b(?:\s+up)?[\s\S]{0,20}\b(?:on|pe|par|in|via|at)\s+(?:my\s+|mere\s+|meri\s+)?${PLATFORM}\b`, 'i')
// "let's talk on whatsapp", "can we continue on instagram"
const RE_LETS_MOVE = new RegExp(String.raw`\b(?:let'?s|lets|can\s+we|shall\s+we|chalo|we\s+can)\b[\s\S]{0,15}\b(?:talk|chat|connect|baat|continue|move)\b[\s\S]{0,15}\b(?:on|pe|par|in|to)\s+${PLATFORM}\b`, 'i')
// Inviting, not past tense: "telegram pe aao", "insta pe baat karte hain",
// "whatsapp karo" — but not "insta pe baat ki thi", "whatsapp pe call aaya".
const RE_PLATFORM_COME = new RegExp(String.raw`\b${PLATFORM}\b\s*(?:pe|par)?\s*(?:aao|aaja|aa\s?jao|aa\s?jaao|milo|(?:baat|msg|message|text|call|dm|add|follow)\s+(?:karo|kro|kar\s+lo|karte\s+hain|karte\s+he|karein|karna|karenge)|karo|kro)\b`, 'i')
const RE_DM_ME = /\b(?:dm|inbox)\s+(?:me|kar(?:o|do)?|kro)\b/i
// "ig: priya.k_21", "my snap is rahul99x", "search theurbandude_lll on ig"
const RE_PLATFORM_HANDLE = new RegExp(String.raw`\b${PLATFORM}\b\s*(?:id\s*|handle\s*)?(?:is|hai|:|-|=)?\s*@?([a-z0-9._]{4,30})`, 'i')
const RE_HANDLE_ON_PLATFORM = new RegExp(String.raw`\b@?([a-z0-9._]{4,30})\s+(?:on|pe|par)\s+${PLATFORM}\b`, 'i')

// Someone describing what happened ("HE used to call me on whatsapp", "WO insta pe
// baat karte hain", "HIS whatsapp number is saved as…") rather than asking.
const RE_NARRATIVE = /\b(?:he|she|they|his|her|their|him|them|ex|husband|wife|boyfriend|girlfriend|bf|gf|friends?|dost|mom|mummy|mother|dad|papa|father|bhai|didi|sister|brother|boss|everyone|nobody|people|log|wo|woh|vo|usne|unhone|uska|uski|uske|unka|unki|unke|used\s+to|would|was|were|did|didn'?t|never|always|still|keeps?|kept)\b/i
function invites(re: RegExp, text: string): boolean {
  const m = re.exec(text)
  if (!m) return false
  return !RE_NARRATIVE.test(text.slice(Math.max(0, m.index - 30), m.index + 1))
}

// Ages, marks, units… not handles: "25years", "24yrs", "12th", "5kg".
const NOT_A_HANDLE = /^\d+(?:yrs?|years?|yo|yr|age|th|st|nd|rd|am|pm|hrs?|hours?|mins?|minutes?|days?|k|lakh|lakhs|lpa|cm|kg|kgs|km|rs|inr|percent)$/i

const CHAT_WORDS = new Set(['k', 'kk', 'ok', 'okk', 'okay', 'okie', 'bye', 'byee', 'tc', 'gn', 'gm', 'thx', 'thanks', 'ty', 'yes', 'ya', 'yeah', 'no', 'nah', 'sure', 'fine', 'done', 'hmm', 'u', 'r', 'y', 'n', 'bro', 'sis', 'see', 'later', 'cya', 'lol'])

function handleLike(token: string): boolean {
  const t = token.replace(/^@/, '').replace(/[.]+$/, '')
  if (t.length < 5 || t.length > 30 || !/[a-z]/i.test(t) || NOT_A_HANDLE.test(t)) return false
  if (/_/.test(t)) return true
  if (/^[a-z]/i.test(t) && (t.match(/\d/g) ?? []).length >= 2) return true
  // Dots: "priya.k" / "abc.xyz12" are handles; "ok.bye", "hmm.ok", "thanks.tc" are a missed space.
  if (/[a-z0-9]\.[a-z0-9]/i.test(t)) {
    const segs = t.toLowerCase().split('.').filter(Boolean)
    if (segs.every(seg => CHAT_WORDS.has(seg))) return false        // "k.bye", "ok.tc"
    return /\d/.test(t) || segs.some(seg => seg.length === 1)
  }
  return false
}

// Indian-script and full-width digits → ASCII, so "९८७६५४३२१०" counts as a number:
// Devanagari, Bengali, Gurmukhi, Gujarati, Odia, Tamil, Telugu, Kannada, Malayalam, full-width.
const DIGIT_ZEROS = [0x0966, 0x09e6, 0x0a66, 0x0ae6, 0x0b66, 0x0be6, 0x0c66, 0x0ce6, 0x0d66, 0xff10]
const RE_OTHER_DIGITS = /[\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\uff10-\uff19]/g
function asciiDigits(s: string): string {
  return s.replace(RE_OTHER_DIGITS, d => {
    const cp = d.charCodeAt(0)
    const zero = DIGIT_ZEROS.find(z => cp >= z && cp <= z + 9)
    return zero === undefined ? d : String(cp - zero)
  })
}

// A phone number, not a list of marks: 10–13 digits, and not 3+ separate short
// groups of 1–3 digits each ("85 90 95 88 92").
function looksLikePhone(run: string): boolean {
  const digits = run.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 13 || ALLOWED_NUMBERS.has(digits)) return false
  if (/^1800\d{6,7}$/.test(digits)) return false   // toll-free (helplines, banks) — not a person's number
  const groups = run.trim().split(/[\s\-().]+/).filter(Boolean)
  if (groups.length >= 4 && groups.every(g => g.replace(/\D/g, '').length <= 3)) return /^\+/.test(run.trim()) || /^[6-9]\d{0,2}$/.test(groups[0]) && groups.length >= 8
  return true
}

export function detectContact(input: string): ContactKind[] {
  const text = asciiDigits(input.normalize('NFKC'))
  const kinds = new Set<ContactKind>()

  for (const m of text.match(RE_PHONE_RUN) ?? []) if (looksLikePhone(m)) kinds.add('phone')

  if (RE_EMAIL.test(text) || RE_EMAIL_NO_TLD.test(text)) kinds.add('email')
  else if (RE_AT_HANDLE.test(text)) {
    const m = RE_AT_HANDLE.exec(text)!
    if (handleLike(m[0].trim().replace(/^[(:,]/, '')) || /@[a-z0-9_.]{3,30}\b/i.test(m[0]) && P.test(text)) kinds.add('handle')
  }

  const url = text.match(RE_URL)?.[0]
  if (url && !/^(https?:\/\/)?(www\.)?leanon\.app(\/|$)/i.test(url)) kinds.add('link')
  if (RE_DOMAIN_VISIT.test(text)) kinds.add('link')
  for (const re of [RE_DOMAIN_STRONG, RE_DOMAIN_WEAK]) {
    for (const d of text.match(re) ?? []) if (!/^\s*(www\.)?leanon\.app(\/|$)/i.test(d.trim() + '/')) kinds.add('link')
  }

  if (P.test(text)) {
    if (RE_OWN_ID.test(text) || RE_WHAT_ID.test(text) || RE_SEND_ID.test(text) || RE_LETS_MOVE.test(text)
      || invites(RE_ID_ASK, text) || invites(RE_CONTACT_ON, text) || invites(RE_PLATFORM_COME, text)) kinds.add('social')
    const h = RE_PLATFORM_HANDLE.exec(text)
    if (h && handleLike(h[1])) kinds.add('handle')
    const h2 = RE_HANDLE_ON_PLATFORM.exec(text)
    if (h2 && handleLike(h2[1])) kinds.add('handle')
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
