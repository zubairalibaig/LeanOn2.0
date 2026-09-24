// Listener onboarding: option lists, taglines, screening quiz and validation.
// Shared by the become-listener form (client) and /api/listener/apply (server)
// so the two can never disagree on what's valid.

export const EDUCATION_LEVELS = [
  { id: 'below_10th',   label: 'Below 10th' },
  { id: '10th',         label: '10th' },
  { id: '12th',         label: '12th' },
  { id: 'diploma',      label: 'Diploma' },
  { id: 'graduate',     label: 'Graduate' },
  { id: 'postgraduate', label: 'Postgraduate' },
  { id: 'doctorate',    label: 'Doctorate' },
] as const

// Levels below this are highlighted for the admin (owner reviews them manually).
export const MIN_PREFERRED_EDUCATION = 'diploma'
export function isBelowPreferredEducation(level?: string | null): boolean {
  const i = EDUCATION_LEVELS.findIndex(l => l.id === level)
  const min = EDUCATION_LEVELS.findIndex(l => l.id === MIN_PREFERRED_EDUCATION)
  return i >= 0 && i < min
}

export const EDUCATION_FIELDS = [
  { id: 'psychology',   label: 'Psychology' },
  { id: 'social_work',  label: 'Social work' },
  { id: 'counselling',  label: 'Counselling' },
  { id: 'medicine',     label: 'Medicine or nursing' },
  { id: 'other',        label: 'Other' },
  { id: 'none',         label: 'None' },
] as const

export const OCCUPATIONS = [
  { id: 'student',      label: 'Student' },
  { id: 'working',      label: 'Working professional' },
  { id: 'homemaker',    label: 'Homemaker' },
  { id: 'retired',      label: 'Retired' },
  { id: 'other',        label: 'Other' },
] as const

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
  'Lakshadweep', 'Puducherry', 'Outside India',
] as const

export const HOURS_PER_WEEK = [
  { id: 'lt5',   label: 'Less than 5 hours' },
  { id: '5_10',  label: '5–10 hours' },
  { id: '10_20', label: '10–20 hours' },
  { id: '20p',   label: '20+ hours' },
] as const

export const TIME_SLOTS = [
  { id: 'morning',    label: 'Morning (6am–12pm)' },
  { id: 'afternoon',  label: 'Afternoon (12–5pm)' },
  { id: 'evening',    label: 'Evening (5–10pm)' },
  { id: 'late_night', label: 'Late night (10pm–2am)' },
] as const

export const PRIOR_EXPERIENCE = [
  { id: 'helpline', label: 'Helpline volunteer' },
  { id: 'ngo',      label: 'NGO / community work' },
  { id: 'peer',     label: 'Peer support group' },
  { id: 'informal', label: 'Informal (friends & family)' },
  { id: 'none',     label: 'None yet' },
] as const

export const HEARD_FROM = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'google',    label: 'Google search' },
  { id: 'friend',    label: 'Friend / referral' },
  { id: 'whatsapp',  label: 'WhatsApp' },
  { id: 'linkedin',  label: 'LinkedIn' },
  { id: 'youtube',   label: 'YouTube' },
  { id: 'other',     label: 'Other' },
] as const

// Public "People talk to me about…" — listeners pick exactly TAGLINE_PICK.
export const TAGLINE_PICK = 3
export const TAGLINE_PHRASES = [
  "Let's talk", 'Warm & empathetic', 'A calm listener', 'No judgement here',
  'Here for late-night talks', 'Patient and kind', 'Been there, got through it',
  'Listening, not lecturing', 'Honest but gentle', 'Gentle with hard topics',
  'Here when you need to vent', 'Comfortable with silence', 'Cheerful company',
  'Get family pressure', 'Get work stress', 'Know heartbreak', 'Understand loneliness',
  'Survived student life', 'Understand new parenthood', 'Get life away from home',
  'Honest and grounded', 'Take it slow with me', 'A safe space', 'A friendly voice',
  'Thoughtful listener', 'Good with overthinkers', 'Help untangle thoughts',
  'No advice unless you ask', 'Kind words, real talk', 'Steady in tough moments',
] as const

// Screening quiz — auto-scored server-side; the score is shown to the admin
// (not a hard gate yet). `correct` is the index of the right option.
// Crisis answers may only reference NIMHANS and Tele-MANAS (see CLAUDE.md).
export const SCREENING_QUIZ: ReadonlyArray<{ id: string; q: string; options: readonly string[]; correct: number }> = [
  {
    id: 'crisis',
    q: 'A seeker says they are thinking of ending their life. What do you do?',
    options: [
      'Tell them to calm down and change the topic',
      'Take it seriously, stay with them, and share NIMHANS (080-46110007) or Tele-MANAS (14416) for immediate help',
      'End the session — it is not your responsibility',
      'Promise to keep it a secret and keep chatting',
    ],
    correct: 1,
  },
  {
    id: 'contact',
    q: 'A seeker asks for your phone number or Instagram to talk outside LeanOn.',
    options: [
      'Share it — they seem genuine',
      'Politely decline; all conversations stay on LeanOn',
      'Share it only if they pay extra',
      'Ignore the message and end the session',
    ],
    correct: 1,
  },
  {
    id: 'flirting',
    q: 'A seeker starts flirting or making sexual comments.',
    options: [
      'Play along to keep them happy',
      'Set a clear boundary; if it continues, end the session and report it',
      'Ignore it and keep the session going',
      'Ask them to book a longer session',
    ],
    correct: 1,
  },
  {
    id: 'medical',
    q: 'A seeker asks which medicine they should take for anxiety.',
    options: [
      'Suggest a medicine that helped you',
      'Explain you are a peer listener, not a doctor, and encourage them to see a qualified professional',
      'Tell them medicines are not needed',
      'Search online and share what you find',
    ],
    correct: 1,
  },
  {
    id: 'empathy',
    q: 'Someone shares something very painful. Which response is best?',
    options: [
      '"Others have it much worse."',
      '"Just stay positive."',
      '"That sounds really hard. Would you like to tell me more about what happened?"',
      '"Here is what you should do."',
    ],
    correct: 2,
  },
  {
    id: 'time',
    q: 'A seeker wants to keep talking past the booked time for free.',
    options: [
      'Continue on WhatsApp instead',
      'Kindly let them know the session is ending and that they can book another one',
      'Keep talking for free as long as they want',
      'End the session abruptly without saying anything',
    ],
    correct: 1,
  },
  {
    id: 'selfcare',
    q: 'You feel emotionally drained after a heavy session.',
    options: [
      'Take the next session anyway',
      'Take a break and go offline until you feel ready',
      'Vent about the seeker on social media',
      'Share the seeker’s story with friends',
    ],
    correct: 1,
  },
]

export type QuizResult = { score: number; total: number; answers: Record<string, number> }
export function scoreQuiz(raw: unknown): QuizResult {
  const answers: Record<string, number> = {}
  let score = 0
  const obj = raw && typeof raw === 'object' ? raw as Record<string, unknown> : {}
  for (const q of SCREENING_QUIZ) {
    const a = obj[q.id]
    if (typeof a === 'number' && Number.isInteger(a) && a >= 0 && a < q.options.length) {
      answers[q.id] = a
      if (a === q.correct) score++
    }
  }
  return { score, total: SCREENING_QUIZ.length, answers }
}

export const WHY_MIN_WORDS = 100
export const WHY_MAX_WORDS = 300
export const wordCount = (s: string) => (s.trim().match(/\S+/g) ?? []).length

export const LIVED_MIN_CHARS = 50
export const LIVED_MAX_CHARS = 600

export function isValidLinkedIn(url: string): boolean {
  return /^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\/in\/[A-Za-z0-9\-_%]{2,100}\/?(\?.*)?$/i.test(url.trim())
}

const ids = <T extends ReadonlyArray<{ id: string }>>(arr: T) => new Set(arr.map(x => x.id))
const pick = <T extends ReadonlyArray<{ id: string }>>(arr: T, v: unknown) =>
  typeof v === 'string' && ids(arr).has(v) ? v : null
const pickMany = <T extends ReadonlyArray<{ id: string }>>(arr: T, v: unknown) =>
  Array.isArray(v) ? Array.from(new Set(v.filter((x): x is string => typeof x === 'string' && ids(arr).has(x)))) : []

export type Screening = {
  occupation: string; state: string; hours_per_week: string; time_slots: string[]
  prior_experience: string[]; why: string; heard_from: string; linkedin_url: string | null
  quiz: QuizResult
}

// Validates everything added by the 2026-09 onboarding revamp. Returns either
// an error message or the cleaned values to store.
export function parseOnboarding(body: Record<string, unknown>):
  { error: string } | {
    public: { education_level: string; education_field: string; tagline_phrases: string[]; lived_experience: string }
    screening: Screening
  } {
  const education_level = pick(EDUCATION_LEVELS, body.education_level)
  if (!education_level) return { error: 'Please select your highest education.' }
  const education_field = pick(EDUCATION_FIELDS, body.education_field)
  if (!education_field) return { error: 'Please select your field of education.' }

  const phrases = Array.isArray(body.tagline_phrases)
    ? Array.from(new Set(body.tagline_phrases.filter((p): p is string => typeof p === 'string' && (TAGLINE_PHRASES as readonly string[]).includes(p))))
    : []
  if (phrases.length !== TAGLINE_PICK) return { error: `Please pick exactly ${TAGLINE_PICK} phrases that describe you.` }

  const lived = typeof body.lived_experience === 'string' ? body.lived_experience.trim() : ''
  if (lived.length < LIVED_MIN_CHARS || lived.length > LIVED_MAX_CHARS)
    return { error: `"What I've been through" must be ${LIVED_MIN_CHARS}–${LIVED_MAX_CHARS} characters.` }

  const occupation = pick(OCCUPATIONS, body.occupation)
  if (!occupation) return { error: 'Please select your occupation.' }
  const state = typeof body.state === 'string' && (INDIAN_STATES as readonly string[]).includes(body.state) ? body.state : null
  if (!state) return { error: 'Please select your state.' }
  const hours_per_week = pick(HOURS_PER_WEEK, body.hours_per_week)
  if (!hours_per_week) return { error: 'Please select how many hours a week you can listen.' }
  const time_slots = pickMany(TIME_SLOTS, body.time_slots)
  if (time_slots.length === 0) return { error: 'Please select at least one time slot.' }
  let prior_experience = pickMany(PRIOR_EXPERIENCE, body.prior_experience)
  if (prior_experience.length === 0) return { error: 'Please select your prior listening experience (or "None yet").' }
  if (prior_experience.includes('none') && prior_experience.length > 1) prior_experience = prior_experience.filter(x => x !== 'none')
  const why = typeof body.why === 'string' ? body.why.trim() : ''
  const wc = wordCount(why)
  if (wc < WHY_MIN_WORDS || wc > WHY_MAX_WORDS)
    return { error: `"Why do you want to be a listener?" must be ${WHY_MIN_WORDS}–${WHY_MAX_WORDS} words (you wrote ${wc}).` }
  if (why.length > 4000) return { error: 'Your answer is too long.' }
  const heard_from = pick(HEARD_FROM, body.heard_from)
  if (!heard_from) return { error: 'Please tell us how you heard about LeanOn.' }
  const li = typeof body.linkedin_url === 'string' ? body.linkedin_url.trim() : ''
  if (li && !isValidLinkedIn(li)) return { error: 'Please enter a valid LinkedIn profile URL (linkedin.com/in/…), or leave it blank.' }

  const quiz = scoreQuiz(body.quiz)
  if (Object.keys(quiz.answers).length !== SCREENING_QUIZ.length) return { error: 'Please answer all the situation questions.' }

  return {
    public: { education_level, education_field, tagline_phrases: phrases, lived_experience: lived },
    screening: { occupation, state, hours_per_week, time_slots, prior_experience, why, heard_from, linkedin_url: li || null, quiz },
  }
}

export const labelOf = (arr: ReadonlyArray<{ id: string; label: string }>, id?: string | null) =>
  arr.find(x => x.id === id)?.label ?? (id || '—')
