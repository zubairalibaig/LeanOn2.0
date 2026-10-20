// Contact-detail guard for chat (2026-10-20, redesigned the same day).
//
// Terms §3 forbid sharing phone / email / social media and moving a
// conversation off LeanOn — for safety (no record, no protection) and because
// competitors pose as seekers to recruit listeners (2026-10-20: a "college
// student survey" ended with a listener's Instagram handle).
//
// TWO TIERS — owner rule: no genuine message may ever be blocked.
//   • BLOCK only when an actual contact DETAIL is in the message: a phone
//     number, an email address, a link to a messaging / social app, or a
//     handle given as a handle. Without the detail nobody can be reached
//     off LeanOn, so this is enough to stop the move.
//   • FLAG (deliver, record for admin) everything that only HINTS at it:
//     "text me on my ig", "lets talk on whatsapp", "insta id do", a website
//     address, a number that might be a phone, a word that might be a handle.
//     These overlap with how people describe their lives ("he used to call me
//     on whatsapp", "my insta id got hacked"), so they are never blocked.
//
// After ANY change run: npx tsx scripts/check-contact-guard.ts

export type ContactKind = 'phone' | 'email' | 'link' | 'handle' | 'social'
export type ContactCheck = { block: ContactKind[]; flag: ContactKind[] }

// ── Shared pieces ────────────────────────────────────────────────────────────

// Fine to share: LeanOn's crisis lines, plus well-known helplines a seeker may
// mention having called (iCall, Vandrevala, AASRA, Sneha). Allowing a mention in
// chat is NOT LeanOn listing them (CLAUDE.md: LeanOn itself shows only
// Tele-MANAS and NIMHANS). Any 1800 toll-free number is fine too.
const ALLOWED_NUMBERS = new Set(['14416', '08046110007', '8046110007', '918046110007',
  '9152987821', '919152987821', '9999666555', '919999666555', '9820466726', '919820466726', '04424640050', '4424640050'])

// Apps used to move a chat elsewhere — NOT words that also mean something else
// (signal, threads, hike, imo, moj, josh).
const PLATFORM = String.raw`(?:insta(?:gram)?|ig|whats\s?app|wtsp|watsapp|telegram|snapchat|snap|facebook|fb|messenger|discord|twitter|linkedin|skype|sharechat)`
const P = new RegExp(String.raw`\b${PLATFORM}\b`, 'i')
const OWNER = String.raw`(?:my|mera|meri|mere|apna|apni|apne|your|ur|tumhara|tumhari|tumhare|tera|teri|tere|aapka|aapki|aapke)`
const IDWORD = String.raw`(?:id|handle|user\s?name|number|no\.?)`

// Indian-script and full-width digits → ASCII ("९८७६५४३२१०" is a number too):
// Devanagari, Bengali, Gurmukhi, Gujarati, Odia, Tamil, Telugu, Kannada, Malayalam, full-width.
const DIGIT_ZEROS = [0x0966, 0x09e6, 0x0a66, 0x0ae6, 0x0b66, 0x0be6, 0x0c66, 0x0ce6, 0x0d66, 0xff10]
const RE_OTHER_DIGITS = /[०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯０-９]/g
function asciiDigits(s: string): string {
  return s.replace(RE_OTHER_DIGITS, d => {
    const cp = d.charCodeAt(0)
    const zero = DIGIT_ZEROS.find(z => cp >= z && cp <= z + 9)
    return zero === undefined ? d : String(cp - zero)
  })
}

// ── Phone numbers ────────────────────────────────────────────────────────────

const RE_PHONE_RUN = /\+?\d[\d\s\-().]{7,}\d/g
// A number right after one of these is an ID, not a phone ("PNR 8456123790").
const RE_NOT_PHONE_CONTEXT = /\b(?:pnr|roll|order|ticket|account|a\/c|acc|aadhaa?r|rank|application|app\s*no|registration|reg|invoice|txn|transaction|utr|ref|reference|booking|policy|case|complaint|tracking|awb|otp|pin|pincode|employee|emp|student|admission|enrol(?:l)?ment|seat|hall\s*ticket|serial|imei|cgpa|marks?|scores?|salary|rs|inr|rupees)\b[^0-9]{0,15}$/i
// Phone words RIGHT BEFORE the digits ("my number 98 76 54 32 10", "call me on 98 76…").
const RE_PHONE_CONTEXT = /\b(?:number|no|num|mob(?:ile)?|phone|ph|contact|call\s+me(?:\s+on|\s+at)?|whats\s?app(?:\s+me)?(?:\s+on)?|dial)\b[\s:,\-=]{0,4}(?:is|hai|:|-|=)?[\s:,\-=]{0,3}$/i

// 'block' = clearly a phone number; 'flag' = could be (e.g. digits in pairs,
// which marks are written like too); null = not a phone.
function phoneVerdict(run: string, before: string, whole: string): 'block' | 'flag' | null {
  const digits = run.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 13 || ALLOWED_NUMBERS.has(digits)) return null
  if (/^1800\d{6,7}$/.test(digits)) return null                         // toll-free
  if (RE_NOT_PHONE_CONTEXT.test(before)) return null
  const intl = run.trim().startsWith('+')
  const core = digits.replace(/^(?:91|0)(?=[6-9]\d{9}$)/, '')
  const indianMobile = /^[6-9]\d{9}$/.test(core)
  if (!indianMobile && !intl) return null                                // 10+ digits but not a mobile number
  if (/0{5,}$/.test(digits) || /^(\d)\1+$/.test(core)) return null      // 7000000000 people, 9999999999
  const groups = run.trim().replace(/^\+/, '').split(/[\s\-().]+/).filter(Boolean)
  if (groups.length >= 2 && groups.every(g => /00$/.test(g))) return null // "between 65000 75000"
  if (ALLOWED_NUMBERS.has(core) || ALLOWED_NUMBERS.has('91' + core)) return null
  // Written the way phone numbers are written → block; any other split ("85 909588 92",
  // "78 2018 2021" — marks or years run together) → flag only.
  const g = groups.map(x => x.replace(/\D/g, '').length)
  const body = (g.length > 1 && /^(?:91|0)$/.test(groups[0].replace(/\D/g, ''))) ? g.slice(1) : g
  const PHONE_SHAPES = ['10', '11', '12', '13', '5,5', '3,3,4', '4,3,3', '3,4,3', '4,6', '6,4', '3,7', '2,4,4']
  if (PHONE_SHAPES.includes(body.join(','))) return body.join(',') === '2,4,4' && !/^\+/.test(run.trim()) ? 'flag' : 'block'
  // Anything else ("98 76 54 32 10" — or marks "85 90 95 88 92"): only with phone words right before.
  return RE_PHONE_CONTEXT.test(before) ? 'block' : 'flag'
}

// ── Emails, links ────────────────────────────────────────────────────────────

const RE_EMAIL = /[a-z0-9._%+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}/i
const RE_EMAIL_NO_TLD = /[a-z0-9._%+-]{3,}@(?:gmail|yahoo|outlook|hotmail|rediffmail|icloud|proton(?:mail)?)\b/i
// Links that ARE a way to contact someone: block.
// Profile / chat links only — a link to a POST ("instagram.com/p/…", "/reel/",
// "x.com/…/status/…") is flagged, not blocked: people share what someone posted.
const RE_CONTACT_LINK = new RegExp([
  // Always with a path ("t.me/name") — "I can't.me and him", "I'm.me" are missed spaces.
  String.raw`(?:^|[^a-z0-9'’])(?:wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com|t\.me|telegram\.(?:me|dog)|m\.me|fb\.me|discord\.gg|linktr\.ee|join\.skype\.com|snapchat\.com\/add)\/[a-z0-9_.+\-]`,
  String.raw`\b(?:instagram\.com|instagr\.am)\/(?!p\/|reels?\/|tv\/|stories\/|explore\/)[a-z0-9._]{3,}`,
  String.raw`\b(?:facebook\.com|fb\.com)\/(?!watch|share|photo|story|groups|events|reel|posts|permalink)[a-z0-9.]{4,}(?:\/?$|\/?\s|\?)`,
  String.raw`\b(?:twitter\.com|x\.com)\/[a-z0-9_]{2,}(?!\/status)(?:\/?$|\/?\s)`,
  String.raw`\blinkedin\.com\/in\/`,
  String.raw`\bthreads\.net\/@`,
].join('|'), 'i')
// Any other link / website: flag only.
const RE_URL = /\bhttps?:\/\/\S+|\bwww\.[a-z0-9-]+\.\S+/i
const RE_DOMAIN_STRONG = /(?:^|\s)(?:[a-z0-9-]{2,}\.)+(?:com|net|org|io|app|xyz|ly|gg|info|site|online|store|page)(?:\/\S*)?(?=\s|$|[),.!?])/gi
const RE_DOMAIN_WEAK = /(?:^|\s)[a-z0-9-]{4,}\.(?:in|co\.in|co|me|live|chat|club|link)(?:\/\S*)?(?=\s*$|\/)/gi
const RE_DOMAIN_VISIT = /\b(?:check\s?out|visit|go\s+to|search|google|site|website|link)\b[\s\S]{0,12}\b[a-z0-9-]{3,}\.(?:in|co\.in|co|me|live|chat|club|link)\b/i
const isLeanOn = (s: string) => /^\s*(https?:\/\/)?(www\.)?leanon\.app(\/|$|\s)/i.test(s + ' ')
// Content people share in a conversation (a song, a video, an article, a
// government site) — not a way to reach anyone, so not even flagged.
const CONTENT_SITE = /^\s*(?:https?:\/\/)?(?:www\.|m\.)?(?:[a-z0-9-]+\.)*(?:youtube\.com|youtu\.be|spotify\.com|open\.spotify\.com|music\.apple\.com|gaana\.com|jiosaavn\.com|wikipedia\.org|google\.com|bbc\.com|bbc\.co\.uk|ndtv\.com|thehindu\.com|indianexpress\.com|timesofindia\.indiatimes\.com|hindustantimes\.com|who\.int|nimhans\.ac\.in|gov\.in|nic\.in|ac\.in|edu|imdb\.com|netflix\.com|amazon\.in|flipkart\.com)(?:[\/?#]|\s|$)/i
const benign = (s: string) => isLeanOn(s) || CONTENT_SITE.test(s + ' ')

// ── Handles ──────────────────────────────────────────────────────────────────

const NOT_A_HANDLE = /^\d+(?:yrs?|years?|yo|yr|age|th|st|nd|rd|am|pm|hrs?|hours?|mins?|minutes?|days?|k|lakh|lakhs|lpa|cm|kg|kgs|km|rs|inr|percent)$/i
const CHAT_WORDS = new Set(['k', 'kk', 'ok', 'okk', 'okay', 'okie', 'bye', 'byee', 'tc', 'gn', 'gm', 'thx', 'thanks', 'ty', 'yes', 'ya', 'yeah', 'no', 'nah', 'sure', 'fine', 'done', 'hmm', 'u', 'r', 'y', 'n', 'bro', 'sis', 'see', 'later', 'cya', 'lol'])

const EVERYDAY_WORDS = new Set(['love', 'you', 'miss', 'good', 'night', 'morning', 'evening', 'sorry', 'happy', 'sad', 'thank', 'take', 'care', 'see', 'soon', 'me', 'too', 'so', 'much', 'very', 'i', 'am', 'feel', 'feeling', 'better', 'tired', 'alone', 'lonely', 'help', 'please', 'hi', 'hello', 'hey', 'ji', 'haan', 'nahi', 'theek', 'hai', 'acha', 'accha', 'chalo', 'shukriya', 'dhanyavaad'])

const COMMON_WORDS = new Set(['and', 'the', 'i', 'a', 'at', 'to', 'on', 'in', 'me', 'my', 'so', 'but', 'or', 'of', 'it', 'is', 'we', 'he', 'she', 'you', 'u', 'am', 'are', 'was', 'not', 'dont', 'im', 'its', 'for', 'with', 'then', 'now', 'just', 'hai', 'ho', 'ki', 'ka', 'ke', 'se', 'aur', 'par', 'pe', 'bhi'])

// Looks like an account name: priya_k12, priya.k, rahul99x.
function handleLike(token: string): boolean {
  const t = token.replace(/^@/, '').replace(/[.]+$/, '')
  if (t.length < 5 || t.length > 30 || (t.match(/[a-z]/gi) ?? []).length < 3 || NOT_A_HANDLE.test(t)) return false
  if (/[a-z0-9]_|_[a-z0-9]/i.test(t)) return true
  if (/^[a-z]/i.test(t) && (t.match(/\d/g) ?? []).length >= 2) return true
  if (/[a-z0-9]\.[a-z0-9]/i.test(t)) {
    const segs = t.toLowerCase().split('.').filter(Boolean)
    if (segs.every(seg => CHAT_WORDS.has(seg))) return false              // "k.bye", "ok.tc"
    if (segs.some(seg => COMMON_WORDS.has(seg) || NOT_A_HANDLE.test(seg))) return false  // "and.I", "at.3am" (missed space)
    return /\d/.test(t) || segs.some(seg => seg.length === 1)
  }
  return false
}

const RE_AT = /(?:^|[\s(:,])@([a-z0-9_.]{3,30})\b/i
// "my insta is priya_k12", "ig: priya.k", "snap - rahul99x"
const RE_PLATFORM_HANDLE = new RegExp(String.raw`\b${PLATFORM}\b\s*(?:(?:id|handle|user\s?name)\s*(?:is|hai|:|-|=)?|is|hai|:|-|=|->|>)\s*@?([a-z0-9._]{4,30})`, 'i')
// "search priya_k12 on ig", "priya.k on insta"
const RE_HANDLE_ON_PLATFORM = new RegExp(String.raw`\b(?:search|find|add|follow|check)\s+(?:me\s+)?@?([a-z0-9._]{4,30})\s+(?:on|pe|par)\s+${PLATFORM}\b`, 'i')

// ── Hints (flag only) ────────────────────────────────────────────────────────

const SHARE_TAIL = String.raw`\s*(?:is\b|hai\b|kya\b|:|=|-|do\b|de\b|dedo\b|de\s+do\b|bhejo\b|bhej\s+do\b|send\b|share\b|batao\b|bata\s+do\b|please\b|pls\b|plz\b|\?|$)`
const HINTS: RegExp[] = [
  new RegExp(String.raw`\b${OWNER}\s+${PLATFORM}\s*${IDWORD}${SHARE_TAIL}`, 'i'),                        // "apna whatsapp number do"
  new RegExp(String.raw`\b(?:what'?s|what\s+is|kya\s+hai)\s+(?:your|ur|tumhara|tumhari|tera|teri|aapka|aapki)\s+${PLATFORM}\s*${IDWORD}\b`, 'i'),
  new RegExp(String.raw`\b(?:send|share|give|bhejo|batao)\s+(?:me\s+)?(?:${OWNER}\s+)?${PLATFORM}\s*${IDWORD}\b`, 'i'),
  new RegExp(String.raw`\b${PLATFORM}\s*${IDWORD}\s*(?:do|de|dedo|de\s+do|bhejo|bhej\s+do|send|share|please|pls|plz|chahiye|batao|bata\s+do)\b`, 'i'),
  new RegExp(String.raw`\b(?:text|message|msg|dm|ping|call|add|follow|reach|connect|talk|chat|contact|find|search|hit)\s+(?:to\s+|with\s+)?(?:me|mujhe|us)\b(?:\s+up)?[\s\S]{0,20}\b(?:on|pe|par|in|via|at)\s+(?:my\s+|mere\s+|meri\s+)?${PLATFORM}\b`, 'i'),
  new RegExp(String.raw`\b(?:let'?s|lets|can\s+we|shall\s+we|chalo|we\s+can)\b[\s\S]{0,15}\b(?:talk|chat|connect|baat|continue|move)\b[\s\S]{0,15}\b(?:on|pe|par|in|to)\s+${PLATFORM}\b`, 'i'),
  new RegExp(String.raw`\b${PLATFORM}\b\s*(?:pe|par)?\s*(?:aao|aaja|aa\s?jao|aa\s?jaao|milo|(?:baat|msg|message|text|call|dm|add|follow)\s+(?:karo|kro|kar\s+lo|karein|karenge)|karo|kro)\b`, 'i'),
  /\b(?:dm|inbox)\s+(?:me|kar(?:o|do)?|kro)\b/i,
  /\b(?:talk|chat|connect|baat)\b[\s\S]{0,20}\b(?:somewhere\s+else|outside\s+(?:leanon|here|this)|other\s+(?:app|platform)|free\s+(?:app|platform))\b/i,
]

// Someone describing what happened ("HE used to call me on whatsapp", "WO insta pe
// baat karte hain") — not an invitation, so not even a flag.
const RE_NARRATIVE = /\b(?:he|she|they|his|her|their|him|them|ex|husband|wife|boyfriend|girlfriend|bf|gf|friends?|dost|mom|mummy|mother|dad|papa|father|bhai|didi|sister|brother|boss|crush|everyone|nobody|people|log|wo|woh|vo|usne|unhone|uska|uski|uske|unka|unki|unke|used\s+to|would|was|were|did|didn'?t|never|always|still|keeps?|kept)\b/i
function invites(re: RegExp, text: string): boolean {
  const m = re.exec(text)
  return !!m && !RE_NARRATIVE.test(text.slice(Math.max(0, m.index - 30), m.index + 1))
}

// ── The check ────────────────────────────────────────────────────────────────

export function checkContact(input: string): ContactCheck {
  const text = asciiDigits(input.normalize('NFKC'))
  const block = new Set<ContactKind>()
  const flag = new Set<ContactKind>()

  // Phones
  const re = new RegExp(RE_PHONE_RUN.source, 'g')
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    const v = phoneVerdict(m[0], text.slice(Math.max(0, m.index - 30), m.index), text)
    if (v === 'block') block.add('phone'); else if (v === 'flag') flag.add('phone')
  }

  // Emails
  if (RE_EMAIL.test(text) || RE_EMAIL_NO_TLD.test(text)) block.add('email')

  // Links
  if (RE_CONTACT_LINK.test(text)) block.add('link')
  else {
    const url = text.match(RE_URL)?.[0]
    if (url && !benign(url)) flag.add('link')
    if (RE_DOMAIN_VISIT.test(text)) flag.add('link')
    for (const r of [RE_DOMAIN_STRONG, RE_DOMAIN_WEAK]) for (const d of text.match(r) ?? []) if (!benign(d)) flag.add('link')
  }

  // Handles
  if (!block.has('email')) {
    const at = RE_AT.exec(text)
    // "@priya_k12" → block; "@priya" with an app named → flag; plain "@home", "@everyone" → nothing.
    if (at) { if (handleLike(at[1])) block.add('handle'); else if (P.test(text) || /[\d_.]/.test(at[1])) flag.add('handle') }
  }
  if (P.test(text)) {
    const h = RE_PLATFORM_HANDLE.exec(text)
    if (h && handleLike(h[1])) block.add('handle')
    const h2 = RE_HANDLE_ON_PLATFORM.exec(text)
    if (h2 && handleLike(h2[1])) block.add('handle')
  }
  const solo = text.trim()
  if (/^@?[a-z0-9._]+$/i.test(solo) && handleLike(solo)) {
    // A message that is nothing but an account name. Underscore = clearly a handle
    // ("theurbandude_lll"); digits/dots alone (rahul99x, priya.k) could be a word.
    const words = solo.toLowerCase().replace(/^@/, '').split(/[_.]+/).filter(Boolean)
    const everyday = words.every(w => CHAT_WORDS.has(w) || EVERYDAY_WORDS.has(w))  // "love_you", "good_night"
    // Abbreviations ("B.Tech", "Ph.D", "Mr.Sharma") are written with capitals; handles aren't.
    const abbreviation = /[A-Z]/.test(solo) && !/_/.test(solo)
    // Block only a made-up-looking name: a digit, a vowel-less part ("lll", "xyz") or a
    // one-letter part — "theurbandude_lll", "priya_k12". Two real words joined
    // ("happy_birthday", "rahul_sharma") are only flagged.
    const madeUp = words.some(w => /\d/.test(w) || w.length === 1 || (w.length >= 2 && !/[aeiouy]/i.test(w)))
    if (!everyday && !abbreviation) { if (/[a-z0-9]_|_[a-z0-9]/i.test(solo) && madeUp) block.add('handle'); else flag.add('handle') }
  }

  // Hints
  if (HINTS.some(h => invites(h, text))) flag.add('social')

  Array.from(block).forEach(k => flag.delete(k))
  return { block: Array.from(block), flag: Array.from(flag) }
}

// What must be refused (bios, the broadcast filter and the chat routes use this).
export function detectContact(input: string): ContactKind[] {
  return checkContact(input).block
}

export function contactBlockedMessage(isListener: boolean): string {
  return isListener
    ? 'Contact details (phone, social media, email, links) can’t be shared on LeanOn — it breaks the listener rules you agreed to, and the message was not sent. If someone asks to talk outside LeanOn, politely decline: it is often someone recruiting listeners for another app.'
    : 'For your safety, contact details (phone, social media, email, links) can’t be shared on LeanOn, so this message was not sent. Please keep the conversation here.'
}
