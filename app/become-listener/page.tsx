'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MIN_LISTENER_RATE, MAX_LISTENER_RATE, LISTENER_SERVICE_FEE_RATE, VOICE_PRICING_ENABLED, VOICE_RATE_PREMIUM, LANGUAGES, MONTHS, MIN_LISTENER_AGE, MAX_LISTENER_AGE, ageFromBirth } from '@/lib/constants'
import { createClient } from '@/lib/supabase'
import { SHOW_LISTENER_GROWTH_NOTICE, SHOW_NEW_LISTENER_ONBOARDING } from '@/lib/feature-flags'
import { compressImage, extForType, AVATAR_OPTS, MAX_INPUT_BYTES } from '@/lib/compress-image'
import SelfieCapture from '@/app/components/SelfieCapture'
import {
  EDUCATION_LEVELS, EDUCATION_FIELDS, OCCUPATIONS, INDIAN_STATES, HOURS_PER_WEEK, TIME_SLOTS,
  PRIOR_EXPERIENCE, HEARD_FROM, TAGLINE_PHRASES, TAGLINE_PICK, SCREENING_QUIZ,
  WHY_MIN_WORDS, WHY_MAX_WORDS, LIVED_MIN_CHARS, LIVED_MAX_CHARS, wordCount, isValidLinkedIn,
} from '@/lib/listener-onboarding'

// Public display photo: sharper than the old selfie avatar (shown large on profiles).
const DISPLAY_PHOTO_OPTS = { maxDim: 1024, quality: 0.86 }

const TAGS = [
  {id:'loneliness', label:'Loneliness 🌙'},
  {id:'anxiety',    label:'Anxiety 😰'},
  {id:'stress',     label:'Work stress 💼'},
  {id:'burnout',    label:'Burnout 🔥'},
  {id:'career',     label:'Career confusion 🧭'},
  {id:'relationships', label:'Relationships 💬'},
  {id:'breakup',    label:'Breakup & divorce 💔'},
  {id:'grief',      label:'Grief & loss 🌿'},
  {id:'students',   label:'Student pressure 📚'},
  {id:'selfesteem', label:'Self-esteem 💙'},
  {id:'lgbtq',      label:'LGBTQ+ 🌈'},
  {id:'parenting',  label:'Parenting 👶'},
  {id:'startup',    label:'Startup journey 🚀'},
  {id:'general',    label:'Just need to talk ☕'},
]

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--bg:#FFFFFF;--light:#F0F8FC;--border:#D5EEF6;--gray:#5A7A8A;}
  body{font-family:'Nunito',sans-serif;background:var(--bg);color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .page{max-width:480px;margin:0 auto;padding:0 20px 60px;}
  .topbar{display:flex;align-items:center;gap:12px;padding:16px 0 24px;}
  .back{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,0.7);border:1.5px solid var(--border);cursor:pointer;font-size:18px;color:var(--navy);display:flex;align-items:center;justify-content:center;}

  .hero-card{background:var(--navy);border-radius:24px;padding:28px;margin-bottom:32px;text-align:center;}
  .hero-card h1{font-size:24px;font-weight:900;color:white;margin-bottom:10px;}
  .hero-card p{font-size:14px;color:rgba(201,231,244,0.8);font-weight:500;line-height:1.6;margin-bottom:24px;}
  .earn-row{display:flex;justify-content:center;gap:20px;}
  .earn-item .amount{font-size:24px;font-weight:900;color:var(--orange);}
  .earn-item .label{font-size:11px;color:rgba(201,231,244,0.7);font-weight:600;margin-top:2px;}

  .fee-box{background:rgba(26,143,160,0.08);border:1.5px solid rgba(26,143,160,0.2);border-radius:16px;padding:16px;margin-bottom:24px;}
  .fee-box h3{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .fee-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(26,143,160,0.12);font-size:13px;}
  .fee-row:last-child{border-bottom:none;font-weight:800;}
  .fee-row .label{color:var(--gray);font-weight:500;}
  .fee-row .value{color:var(--navy);font-weight:700;}
  .fee-row.highlight .value{color:#1A8FA0;font-weight:800;}

  .step-dots{display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:28px;}
  .dot{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;}
  .dot.done{background:var(--orange);color:white;} .dot.active{background:var(--navy);color:white;} .dot.todo{background:var(--light);color:var(--gray);}
  .dot-line{width:24px;height:2px;background:var(--border);}

  .section-title{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .section-sub{font-size:13px;color:var(--gray);font-weight:500;margin-bottom:20px;}
  .lbl{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px;display:block;}
  .input{width:100%;padding:13px 16px;font-family:'Nunito',sans-serif;font-size:15px;font-weight:600;color:var(--navy);border:2px solid var(--border);border-radius:14px;outline:none;background:white;transition:border-color 0.2s;margin-bottom:4px;}
  .input:focus{border-color:var(--navy);}
  .input.err{border-color:#E53935;background:#FFF5F5;}
  .input::placeholder{color:#B0C8D8;font-weight:400;}
  textarea.input{resize:vertical;min-height:100px;line-height:1.5;}
  .field-err{font-size:12px;color:#E53935;font-weight:700;margin-bottom:12px;display:block;}
  .char-count{font-size:12px;color:var(--gray);font-weight:600;text-align:right;margin-bottom:12px;}
  .char-count.warn{color:#E53935;}
  .tag-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;}
  .tag-chip{padding:10px 14px;border:2px solid var(--border);border-radius:12px;font-family:'Nunito',sans-serif;font-size:13px;font-weight:700;color:var(--gray);background:white;cursor:pointer;text-align:left;transition:all 0.15s;}
  .tag-chip.sel{border-color:var(--orange);background:#FFF3E0;color:var(--navy);}
  .rate-wrap{display:flex;align-items:center;gap:0;background:white;border:2px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:4px;}
  .rate-wrap:focus-within{border-color:var(--navy);}
  .rate-wrap.err{border-color:#E53935;}
  .rate-prefix{padding:13px 14px;font-weight:800;color:var(--gray);border-right:2px solid var(--border);}
  .rate-input{flex:1;min-width:0;padding:13px 14px;border:none;outline:none;font-family:'Nunito',sans-serif;font-size:18px;font-weight:800;color:var(--navy);}
  .rate-suffix{padding:13px 14px;font-size:13px;font-weight:600;color:var(--gray);}
  .rate-pair .rate-prefix,.rate-pair .rate-suffix{padding:13px 8px;}
  .rate-pair .rate-input{padding:13px 6px;}
  .rate-preview{background:var(--light);border-radius:12px;padding:12px 16px;margin-bottom:16px;}
  .rate-preview p{font-size:13px;color:var(--gray);font-weight:600;line-height:1.8;}
  .rate-preview strong{color:var(--navy);}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;}
  .disclaimer p{font-size:12px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .error-box{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:12px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#7A2020;font-weight:600;}
  .errors-list{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:12px;padding:12px 16px;margin-bottom:16px;}
  .errors-list p{font-size:13px;color:#7A2020;font-weight:700;margin-bottom:6px;}
  .errors-list ul{padding-left:16px;}
  .errors-list li{font-size:12px;color:#7A2020;font-weight:600;margin-bottom:2px;}
  .btn{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:50px;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 20px rgba(255,153,51,0.3);}
  .btn:hover{background:#e8861a;transform:translateY(-1px);}
  .btn:disabled{opacity:0.5;cursor:not-allowed;transform:none;}
  .btn-ghost{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:15px;font-weight:700;color:var(--navy);background:white;border:2px solid var(--border);border-radius:50px;cursor:pointer;margin-top:10px;}
  .success{text-align:center;padding:40px 20px;}
  .success-icon{font-size:64px;margin-bottom:20px;}
  .success h2{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:12px;}
  .success p{font-size:15px;color:var(--gray);font-weight:500;line-height:1.6;}
  .spin{display:inline-block;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
  .shake{animation:shake 0.4s ease;}
  @keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}
  .otp-row{display:flex;gap:10px;justify-content:center;margin-bottom:8px;}
  .otp-box{width:48px;height:56px;border:2px solid var(--border);border-radius:14px;font-family:'Nunito',sans-serif;font-size:22px;font-weight:900;color:var(--navy);text-align:center;background:white;outline:none;transition:all 0.2s;}
  .otp-box:focus{border-color:var(--orange);background:#FFFBF5;}
  .otp-box.err{border-color:#E53935;background:#FFF5F5;}
  .resend-btn{background:none;border:none;font-family:'Nunito',sans-serif;font-size:14px;font-weight:700;color:var(--teal);cursor:pointer;}
  .resend-count{font-size:14px;color:var(--gray);font-weight:600;}
  .already-reg{background:#F0F8FC;border:1.5px solid var(--border);border-radius:16px;padding:20px;text-align:center;margin-bottom:24px;}
  .already-reg p{font-size:15px;color:var(--navy);font-weight:600;margin-bottom:12px;}
  .photo-box{border:2px dashed var(--border);border-radius:16px;padding:20px;text-align:center;cursor:pointer;transition:all 0.2s;margin-bottom:4px;background:white;position:relative;overflow:hidden;}
  .photo-box:hover,.photo-box.has-photo{border-color:var(--teal);border-style:solid;}
  .photo-box.err{border-color:#E53935;border-style:solid;}
  .photo-preview{width:80px;height:80px;border-radius:50%;object-fit:cover;margin:0 auto 8px;display:block;border:3px solid var(--teal);}
  .photo-placeholder{width:64px;height:64px;border-radius:50%;background:var(--light);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 8px;}
  .photo-label{font-size:13px;font-weight:700;color:var(--teal);display:block;}
  .photo-sub{font-size:11px;color:var(--gray);font-weight:500;margin-top:3px;}
  .training-box{background:rgba(26,143,160,0.06);border:1.5px solid rgba(26,143,160,0.2);border-radius:14px;padding:14px 16px;margin-bottom:20px;}
  .training-box h3{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .training-box li{font-size:12px;color:var(--gray);font-weight:600;margin-bottom:4px;list-style:none;padding-left:4px;}
  .training-box li::before{content:"✓ ";color:var(--teal);}
`

// Validation helpers
function validateName(v: string): string {
  if (!v || v.trim().length < 2) return 'Please enter your full name (2–60 characters)'
  if (v.trim().length > 60) return 'Please enter your full name (2–60 characters)'
  // Allow: Latin letters, common accented chars, Devanagari (Hindi/Marathi),
  // Tamil, Telugu, Kannada, Malayalam, Bengali, spaces, hyphens, dots
  // (e.g. "A.P.J. Singh", "Md. Irfan"), and apostrophes (e.g. "O'Brien").
  if (!/^[a-zA-ZÀ-ɏऀ-ൿ\s\-.']+$/.test(v.trim())) return "Name can only contain letters, spaces, hyphens, dots, and apostrophes"
  return ''
}
function validatePhone(v: string): string {
  const d = v.replace(/\D/g, '')
  if (d.length !== 10) return 'Enter a valid 10-digit Indian mobile number'
  if (!/^[6789]/.test(d)) return 'Enter a valid 10-digit Indian mobile number'
  return ''
}
function validateBio(v: string): string {
  if (v.trim().length < 30) return 'Bio must be 30–400 characters'
  if (v.trim().length > 400) return 'Bio must be 30–400 characters'
  return ''
}
function validateLived(v: string): string {
  const n = v.trim().length
  if (n < LIVED_MIN_CHARS || n > LIVED_MAX_CHARS) return `"What I've been through" must be ${LIVED_MIN_CHARS}–${LIVED_MAX_CHARS} characters`
  return ''
}
function validateRate(v: string): string {
  const n = parseInt(v)
  if (VOICE_PRICING_ENABLED) {
    if (isNaN(n) || n < MIN_LISTENER_RATE) return `Text rate must be at least ₹${MIN_LISTENER_RATE}/min (voice at least ₹${MIN_LISTENER_RATE + VOICE_RATE_PREMIUM}/min)`
    if (n > MAX_LISTENER_RATE) return `Text rate can be at most ₹${MAX_LISTENER_RATE}/min (voice at most ₹${MAX_LISTENER_RATE + VOICE_RATE_PREMIUM}/min)`
    return ''
  }
  if (isNaN(n) || n < MIN_LISTENER_RATE) return `Please enter a rate of at least ₹${MIN_LISTENER_RATE} per minute`
  if (n > MAX_LISTENER_RATE) return `Rate can be at most ₹${MAX_LISTENER_RATE} per minute`
  return ''
}
function validateBank(v: string): string {
  const d = v.replace(/\D/g, '')
  if (d.length < 9 || d.length > 18) return 'Enter a valid 9–18 digit account number'
  return ''
}
function validateIFSC(v: string): string {
  if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(v.trim().toUpperCase())) return 'Enter a valid IFSC code (e.g. SBIN0001234)'
  return ''
}
function validateUPI(v: string): string {
  // Local-part: 2+ alphanumeric/dot/hyphen/underscore chars
  // VPA suffix: 2+ alphanumeric chars (e.g. @okaxis, @ybl, @paytm1, @okhdfcbank)
  if (!/^[\w.\-]{2,}@[\w]{2,}$/.test(v)) return 'Enter a valid UPI ID (e.g. yourname@okaxis)'
  return ''
}
function validateAadhaar(v: string): string {
  if (!/^\d{12}$/.test(v.replace(/\D/g, ''))) return 'Enter your 12-digit Aadhaar number'
  return ''
}
function validateBirth(monthStr: string, yearStr: string): string {
  const month = parseInt(monthStr, 10)
  const year  = parseInt(yearStr, 10)
  if (!month || !year) return 'Please select your birth month and year'
  const age = ageFromBirth(year, month)
  if (age === null || age < MIN_LISTENER_AGE || age > MAX_LISTENER_AGE)
    return `Listeners must be between ${MIN_LISTENER_AGE} and ${MAX_LISTENER_AGE} years old`
  return ''
}
// Year dropdown options: oldest allowed birth year → newest (18 years ago).
const CURRENT_YEAR = new Date().getFullYear()
const BIRTH_YEARS = Array.from(
  { length: MAX_LISTENER_AGE - MIN_LISTENER_AGE + 1 },
  (_, i) => CURRENT_YEAR - MIN_LISTENER_AGE - i,
)

export default function BecomeListenerPage() {
  const router  = useRouter()
  const sb      = createClient()
  const [step, setStep]   = useState(1)
  const [name, setName]   = useState('')
  const [guardChecked, setGuardChecked] = useState(false)
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)
  const [permanentlyRejected, setPermanentlyRejected] = useState(false)
  const [rejectedNotes, setRejectedNotes] = useState<string | null>(null)
  const [resubmissionNotes, setResubmissionNotes] = useState<string | null>(null)
  const [phone, setPhone] = useState('')
  const [bio, setBio]     = useState('')
  const [tags, setTags]   = useState<string[]>([])
  const [rate, setRate]   = useState('10')
  // Raw voice text while the listener is typing in the voice box; null = derive from rate.
  const [voiceDraft, setVoiceDraft] = useState<string | null>(null)
  const [langs, setLangs] = useState<string[]>(['english'])
  const [accountHolder, setAccountHolder] = useState('')
  const [bank, setBank]   = useState('')
  const [ifsc, setIfsc]   = useState('')
  const [upi, setUpi]     = useState('')
  const [aadhaar, setAadhaar] = useState('')
  const [birthMonth, setBirthMonth] = useState('')
  const [birthYear, setBirthYear]   = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone]   = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [shaking, setShaking] = useState(false)
  const [step1Submitted, setStep1Submitted] = useState(false)
  const [step2Submitted, setStep2Submitted] = useState(false)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string>('')
  const [avatarUrl, setAvatarUrl] = useState<string>('')
  const [avatarUploading, setAvatarUploading] = useState(false)
  const [selfieProcessing, setSelfieProcessing] = useState(false)
  // Private verification selfie (camera-only, stored server-side, never public)
  const [selfieDone, setSelfieDone] = useState(false)
  const [selfiePreview, setSelfiePreview] = useState('')
  const [selfieUploading, setSelfieUploading] = useState(false)
  // Public profile extras
  const [taglines, setTaglines] = useState<string[]>([])
  const [lived, setLived] = useState('')
  // Private screening (step 2)
  const [eduLevel, setEduLevel] = useState('')
  const [eduField, setEduField] = useState('')
  const [occupation, setOccupation] = useState('')
  const [stateName, setStateName] = useState('')
  const [hoursPerWeek, setHoursPerWeek] = useState('')
  const [timeSlots, setTimeSlots] = useState<string[]>([])
  const [priorExp, setPriorExp] = useState<string[]>([])
  const [why, setWhy] = useState('')
  const [heardFrom, setHeardFrom] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [quiz, setQuiz] = useState<Record<string, number>>({})
  const [step3Submitted, setStep3Submitted] = useState(false)
  // Onboarding agreement (new flow) — persisted in sessionStorage across the
  // auth redirect so the landing page is not shown again on return.
  const [agreementChecked, setAgreementChecked] = useState(false)
  const [showLanding, setShowLanding] = useState(false)

  // Phone verification now happens ONCE at sign-in via the MSG91 widget on /auth.
  // The in-form OTP flow (signInWithOtp / verifyOtp) is permanently dead —
  // India's DLT regime blocks the SMS hook — and is removed. `otpVerified` is
  // kept only so the phone field stays disabled and the green badge shows;
  // it is always true by the time the form is visible.
  const [otpVerified] = useState(true)

  // "Request fix" applicants only need to change what the admin flagged, so
  // pre-fill their previous answers. Aadhaar and quiz answers are re-entered.
  // Each read is independent and ignores errors (e.g. migration 060 columns
  // not present yet) so a failure never blocks the form.
  async function prefillResubmission(uid: string) {
    const str = (v: unknown) => (typeof v === 'string' ? v : '')
    const arr = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [])
    const [{ data: lp }, { data: lpNew }, { data: la }, { data: laNew }] = await Promise.all([
      sb.from('listener_profiles').select('bio, specialty_tags, languages_spoken, rate_per_min, birth_year, birth_month').eq('user_id', uid).maybeSingle(),
      sb.from('listener_profiles').select('education_level, education_field, tagline_phrases, lived_experience').eq('user_id', uid).maybeSingle(),
      sb.from('listener_applications').select('name, account_holder_name, bank_account, ifsc_code, upi_id').eq('user_id', uid).maybeSingle(),
      sb.from('listener_applications').select('screening').eq('user_id', uid).maybeSingle(),
    ])
    if (lp) {
      if (lp.bio) setBio(str(lp.bio))
      if (arr(lp.specialty_tags).length) setTags(arr(lp.specialty_tags))
      if (arr(lp.languages_spoken).length) setLangs(arr(lp.languages_spoken))
      if (lp.rate_per_min != null) setRate(String(Math.round(Number(lp.rate_per_min))))
      if (lp.birth_year && lp.birth_month) { setBirthYear(String(lp.birth_year)); setBirthMonth(String(lp.birth_month)) }
    }
    if (lpNew) {
      setEduLevel(str(lpNew.education_level)); setEduField(str(lpNew.education_field))
      setTaglines(arr(lpNew.tagline_phrases)); setLived(str(lpNew.lived_experience))
    }
    if (la) {
      if (la.name) setName(str(la.name))
      setAccountHolder(str(la.account_holder_name)); setBank(str(la.bank_account))
      setIfsc(str(la.ifsc_code)); setUpi(str(la.upi_id))
    }
    const sc = (laNew?.screening ?? null) as Record<string, unknown> | null
    if (sc) {
      setOccupation(str(sc.occupation)); setStateName(str(sc.state)); setHoursPerWeek(str(sc.hours_per_week))
      setTimeSlots(arr(sc.time_slots)); setPriorExp(arr(sc.prior_experience)); setWhy(str(sc.why))
      setHeardFrom(str(sc.heard_from)); setLinkedin(str(sc.linkedin_url))
    }
  }

  // Shared auth guard — checks session, loads existing application state,
  // and either shows the form or redirects. Called from both the useEffect
  // (returning visitors who already agreed) and the landing Continue button.
  async function runAuthGuard() {
    try {
      const { data: { user } } = await sb.auth.getUser()
      if (!user || !user.phone) {
        router.replace('/auth?mode=listener&redirect=/become-listener')
        return
      }
      setPhone(user.phone.replace(/\D/g, '').slice(-10))

      const [{ data: existing }, { data: app }, { data: userRow }] = await Promise.all([
        sb.from('listener_profiles').select('id, is_approved').eq('user_id', user.id).maybeSingle(),
        sb.from('listener_applications').select('status, admin_notes').eq('user_id', user.id).maybeSingle(),
        sb.from('users').select('avatar_url').eq('id', user.id).maybeSingle(),
      ])
      const canResubmit = app?.status === 'needs_resubmission'
      if (app?.status === 'rejected') {
        setPermanentlyRejected(true)
        setRejectedNotes((app.admin_notes as string | null) || null)
        setAlreadyRegistered(true)
      } else if (existing?.is_approved) {
        router.replace('/dashboard')
        return
      } else if (existing && !canResubmit) {
        setAlreadyRegistered(true)
      }
      // A selfie taken earlier (e.g. before a reload, or on a previous attempt) is reused.
      fetch('/api/listener/selfie').then(r => r.ok ? r.json() : null).then(d => { if (d?.exists) setSelfieDone(true) }).catch(() => {})
      if (canResubmit) {
        if (app?.admin_notes) setResubmissionNotes(app.admin_notes as string)
        prefillResubmission(user.id)
        if (userRow?.avatar_url) {
          setAvatarUrl(userRow.avatar_url as string)
          setAvatarPreview(userRow.avatar_url as string)
        }
      }
      setGuardChecked(true)
    } catch {
      router.replace('/auth?mode=listener&redirect=/become-listener')
      setGuardChecked(true)
    }
  }

  // Guard: check if already registered. Rejected / needs_resubmission
  // applicants must NOT be blocked — the status page sends them here to
  // resubmit, so blocking on the mere existence of a listener_profiles row
  // would make resubmission a dead end.
  useEffect(() => {
    if (SHOW_NEW_LISTENER_ONBOARDING) {
      let agreed = false
      try { agreed = sessionStorage.getItem('leanon_listener_agreed') === '1' } catch { /* private mode */ }
      if (!agreed) {
        setShowLanding(true)
        setGuardChecked(true)
        return
      }
    }
    runAuthGuard()
  }, [])

  // Use raw input for the live preview — validation blocks invalid values on submit.
  // This page deliberately shows only the LISTENER_SERVICE_FEE_RATE math —
  // the seeker's separate flat PLATFORM_FEE never touches listener earnings and
  // isn't shown here (see lib/constants.ts for both).
  const rateNum      = Math.max(0, parseInt(rate) || 0)
  const gross15       = rateNum * 15
  const gross30       = rateNum * 30
  const gross45       = rateNum * 45
  const serviceFee15  = Math.round(gross15 * LISTENER_SERVICE_FEE_RATE)
  const serviceFee30  = Math.round(gross30 * LISTENER_SERVICE_FEE_RATE)
  const serviceFee45  = Math.round(gross45 * LISTENER_SERVICE_FEE_RATE)
  const earn15        = gross15 - serviceFee15
  const earn30        = gross30 - serviceFee30
  const earn45        = gross45 - serviceFee45

  function toggleTag(t: string) {
    setTags(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])
  }
  function toggleLang(l: string) {
    setLangs(p => p.includes(l) ? (p.length > 1 ? p.filter(x => x !== l) : p) : [...p, l])
  }

  const digits = () => phone.replace(/\D/g,'').slice(-10)

  function validateStep1(): string[] {
    const errs: string[] = []
    const ne = validateName(name); if (ne) errs.push(ne)
    const pe = validatePhone(phone); if (pe) errs.push(pe)
    // Phone is verified at sign-in time — no in-form OTP check needed.
    const be = validateBio(bio); if (be) errs.push(be)
    if (tags.length === 0) errs.push('Please select at least one topic')
    if (!avatarFile && !avatarUrl) errs.push('Please add a clear display photo of your face')
    if (!selfieDone) errs.push('Please take your verification selfie')
    if (taglines.length !== TAGLINE_PICK) errs.push(`Pick exactly ${TAGLINE_PICK} phrases that describe you`)
    const lv = validateLived(lived); if (lv) errs.push(lv)
    return errs
  }

  function step2FieldErrors(): Record<string, string> {
    const fe: Record<string, string> = {}
    if (!eduLevel) fe.eduLevel = 'Select your highest education'
    if (!eduField) fe.eduField = 'Select your field of education'
    if (!occupation) fe.occupation = 'Select your occupation'
    if (!stateName) fe.stateName = 'Select your state'
    if (!hoursPerWeek) fe.hoursPerWeek = 'Select your weekly hours'
    if (timeSlots.length === 0) fe.timeSlots = 'Select at least one time slot'
    if (priorExp.length === 0) fe.priorExp = 'Select your listening experience (or "None yet")'
    const wc = wordCount(why)
    if (wc < WHY_MIN_WORDS || wc > WHY_MAX_WORDS) fe.why = `Write ${WHY_MIN_WORDS}–${WHY_MAX_WORDS} words (currently ${wc})`
    if (!heardFrom) fe.heardFrom = 'Tell us how you heard about LeanOn'
    if (linkedin.trim() && !isValidLinkedIn(linkedin)) fe.linkedin = 'Enter a LinkedIn profile URL (linkedin.com/in/…) or leave blank'
    if (SCREENING_QUIZ.some(q => quiz[q.id] === undefined)) fe.quiz = 'Please answer every situation question'
    return fe
  }
  function validateStep2(): string[] { return Object.values(step2FieldErrors()) }

  function tryNextFromStep2() {
    setStep2Submitted(true)
    const fe = step2FieldErrors()
    if (Object.keys(fe).length > 0) {
      setFieldErrors(fe)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      return
    }
    setFieldErrors({})
    setStep(3)
    window.scrollTo({ top: 0 })
  }

  async function uploadSelfie(file: File) {
    if (file.size > MAX_INPUT_BYTES) { setFieldErrors(f => ({...f, selfie: 'Photo must be under 20 MB'})); return }
    setSelfieUploading(true)
    try {
      const shrunk = await compressImage(file, AVATAR_OPTS)
      const fd = new FormData()
      fd.append('file', shrunk, 'selfie')
      const res = await fetch('/api/listener/selfie', { method: 'POST', body: fd })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) { setFieldErrors(f => ({...f, selfie: json.error || `Selfie upload failed (code: http_${res.status}). Please try again.`})); return }
      const reader = new FileReader()
      reader.onload = ev => setSelfiePreview(ev.target?.result as string)
      reader.readAsDataURL(shrunk)
      setSelfieDone(true)
      setFieldErrors(f => ({...f, selfie: ''}))
    } catch {
      setFieldErrors(f => ({...f, selfie: 'Selfie upload failed (code: network). Check your connection and try again.'}))
    } finally {
      setSelfieUploading(false)
    }
  }

  function validateStep3(): string[] {
    const errs: string[] = []
    const bde = validateBirth(birthMonth, birthYear); if (bde) errs.push(bde)
    const re = validateRate(rate); if (re) errs.push(re)
    if (!accountHolder.trim()) errs.push('Enter the name exactly as on your bank account')
    const banke = validateBank(bank); if (banke) errs.push(banke)
    const ifsce = validateIFSC(ifsc); if (ifsce) errs.push(ifsce)
    const aae = validateAadhaar(aadhaar); if (aae) errs.push(aae)
    if (upi.trim()) { const upie = validateUPI(upi); if (upie) errs.push(upie) }
    return errs
  }

  async function tryNextFromStep1() {
    setStep1Submitted(true)
    const errs = validateStep1()
    if (errs.length > 0) {
      const fe: Record<string,string> = {}
      const ne = validateName(name); if (ne) fe.name = ne
      const pe = validatePhone(phone); if (pe) fe.phone = pe
      const be = validateBio(bio); if (be) fe.bio = be
      if (tags.length === 0) fe.tags = 'Please select at least one topic'
      if (!avatarFile && !avatarUrl) fe.avatar = 'Please add a clear display photo of your face'
      if (!selfieDone) fe.selfie = 'Please take your verification selfie'
      if (taglines.length !== TAGLINE_PICK) fe.taglines = `Pick exactly ${TAGLINE_PICK} phrases`
      const lv = validateLived(lived); if (lv) fe.lived = lv
      setFieldErrors(fe)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      return
    }
    // Upload photo if not already uploaded
    if (avatarFile && !avatarUrl) {
      setAvatarUploading(true)
      try {
        const { data: { user } } = await sb.auth.getUser()
        if (!user) { setError('Session expired. Please refresh and try again.'); setAvatarUploading(false); return }
        // avatarFile was already downscaled at selection time.
        // Derive extension from MIME type — never trust the user-controlled filename
        const ext = extForType(avatarFile.type)
        // Unique path per upload so a new photo never overwrites a live,
        // already-approved one (it stays pending until the admin approves).
        const path = `${user.id}.display-${Date.now()}.${ext}`
        // Race the upload against a 30-second timeout. Mobile browsers on weak
        // connections can stall indefinitely on storage.upload() if the TCP
        // connection hangs without closing, locking the button forever.
        const UPLOAD_TIMEOUT_MS = 30_000
        const uploadTimeout = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('upload_timeout')), UPLOAD_TIMEOUT_MS)
        )
        const { error: upErr } = await Promise.race([
          sb.storage.from('avatars').upload(path, avatarFile, { upsert: true, contentType: avatarFile.type }),
          uploadTimeout,
        ])
        if (upErr) { setFieldErrors(f => ({...f, avatar: 'Photo upload failed. Please try again.'})); setAvatarUploading(false); return }
        const { data: { publicUrl } } = sb.storage.from('avatars').getPublicUrl(path)
        // Version the URL so a re-upload to the same path is not served stale
        // from the CDN — matches what /profile and /dashboard already do.
        setAvatarUrl(`${publicUrl}?t=${Date.now()}`)
      } catch (e) {
        const msg = e instanceof Error && e.message === 'upload_timeout'
          ? 'Photo upload timed out. Please check your connection and try again.'
          : 'Photo upload failed. Please try again.'
        setFieldErrors(f => ({...f, avatar: msg}))
        setAvatarUploading(false)
        return
      }
      setAvatarUploading(false)
    }
    setFieldErrors({})
    setStep(2)
    window.scrollTo({ top: 0 })
  }

  async function submit() {
    setStep3Submitted(true)
    const errs = validateStep3()
    if (errs.length > 0) {
      const fe: Record<string,string> = {}
      const bde = validateBirth(birthMonth, birthYear); if (bde) fe.birth = bde
      const re = validateRate(rate); if (re) fe.rate = re
      if (!accountHolder.trim()) fe.accountHolder = 'Enter the name exactly as on your bank account'
      const banke = validateBank(bank); if (banke) fe.bank = banke
      const ifsce = validateIFSC(ifsc); if (ifsce) fe.ifsc = ifsce
      const aae = validateAadhaar(aadhaar); if (aae) fe.aadhaar = aae
      if (upi.trim()) { const upie = validateUPI(upi); if (upie) fe.upi = upie }
      setFieldErrors(fe)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      return
    }

    setError('')
    setLoading(true)
    try {
      const { data: { user } } = await sb.auth.getUser()
      if (!user) {
        router.push('/auth?redirect=/become-listener')
        return
      }

      // All three writes (users row, listener profile, application) happen
      // server-side with the service-role client — browser RLS writes into
      // these tables proved fragile (policy/trigger/constraint drift broke
      // every submission). See /api/listener/apply.
      const res = await fetch('/api/listener/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:       name.trim(),
          phone:      phone.trim(),
          bio:        bio.trim(),
          tags,
          langs,
          rate:       rateNum,
          birthMonth: parseInt(birthMonth, 10),
          birthYear:  parseInt(birthYear, 10),
          account_holder_name: accountHolder.trim(),
          bank:       bank.trim(),
          ifsc:       ifsc.trim().toUpperCase(),
          upi:        upi.trim(),
          aadhaar:    aadhaar.replace(/\D/g, ''),
          avatar_url: avatarUrl || undefined,
          tagline_phrases: taglines,
          lived_experience: lived.trim(),
          education_level: eduLevel,
          education_field: eduField,
          occupation,
          state: stateName,
          hours_per_week: hoursPerWeek,
          time_slots: timeSlots,
          prior_experience: priorExp,
          why: why.trim(),
          heard_from: heardFrom,
          linkedin_url: linkedin.trim(),
          quiz,
        }),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        // 403 means the application was permanently rejected server-side.
        // Show the closed-screen instead of an inline error so the user has
        // a clear call-to-action (contact support) rather than a confusing
        // "try again" message on a form they can never resubmit.
        if (res.status === 403) {
          setPermanentlyRejected(true)
          setRejectedNotes(json.adminNotes || null)
          setAlreadyRegistered(true)
          return
        }
        const msg = json.error || `Submission failed (HTTP ${res.status}).`
        setError(`${msg} Please try again or contact support.`)
        return
      }

      setDone(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error'
      setError(`Submission failed: ${msg}. Please check your connection and try again.`)
      console.error('Listener application error:', err)
    } finally {
      setLoading(false)
    }
  }

  // Wait for the session check before rendering: unsigned visitors are being
  // redirected to /auth (widget sign-in), and signed-in ones need the phone
  // pre-filled + OTP step skipped. Rendering the form early would flash the
  // now-dead in-form OTP UI.
  // ── New onboarding landing page ──────────────────────────────────────────
  if (guardChecked && showLanding) return (
    <>
      <style>{S}</style>
      <style>{`
        .landing-section{background:white;border:1.5px solid var(--border);border-radius:20px;padding:22px;margin-bottom:16px;}
        .landing-section h2{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
        .landing-row{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:#3A6070;line-height:1.6;margin-bottom:8px;}
        .landing-row:last-child{margin-bottom:0;}
        .landing-icon{font-size:18px;flex-shrink:0;margin-top:1px;}
        .not-row{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:#5A4020;line-height:1.6;margin-bottom:8px;}
        .not-row:last-child{margin-bottom:0;}
        .not-section{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:20px;padding:22px;margin-bottom:16px;}
        .not-section h2{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
        .identity-section{background:#F0F8FC;border:1.5px solid var(--border);border-radius:20px;padding:22px;margin-bottom:16px;}
        .identity-section h2{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
        .agree-box{background:white;border:2px solid var(--border);border-radius:16px;padding:18px 20px;margin-bottom:20px;display:flex;gap:14px;align-items:flex-start;cursor:pointer;transition:border-color 0.2s;}
        .agree-box.checked{border-color:var(--orange);}
        .agree-check{width:22px;height:22px;border:2px solid var(--border);border-radius:6px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px;margin-top:2px;transition:all 0.15s;}
        .agree-box.checked .agree-check{background:var(--orange);border-color:var(--orange);color:white;}
        .agree-text{font-size:13px;color:var(--navy);font-weight:600;line-height:1.6;}
      `}</style>
      <div className="page">
        <div className="topbar"><a href="/" className="back">←</a></div>

        <div className="hero-card" style={{marginBottom:20}}>
          <h1>Before you apply 🎧</h1>
          <p>Read this carefully. LeanOn listeners make a real difference — but this role is not for everyone.</p>
        </div>

        <div className="landing-section">
          <h2>What LeanOn is</h2>
          {[
            ['💙', 'A peer support platform. Seekers want someone to truly listen — not advise, not fix, not redirect.'],
            ['🎧', 'Active listening and empathy are your only tools. Reflect back what you hear. Hold space. Be present.'],
            ['💬', 'If a seeker specifically asks for advice AND you have direct lived experience, you may share carefully. Otherwise: listen.'],
            ['🌱', 'A safe space built on trust. Seekers are often vulnerable. That trust is everything.'],
          ].map(([icon, text], i) => (
            <div key={i} className="landing-row"><span className="landing-icon">{icon}</span><span>{text}</span></div>
          ))}
        </div>

        <div className="not-section">
          <h2>What LeanOn is NOT</h2>
          {[
            ['✗', 'Not a therapy or counselling service. Do not diagnose, prescribe, or give clinical advice.'],
            ['✗', 'Not a sex chat, adult, or entertainment platform. Any such behaviour results in a permanent ban.'],
            ['✗', 'Not a quick money scheme. Earnings depend entirely on how many seekers book you. No guaranteed income.'],
            ['✗', 'Not anonymous for listeners. Your name and photo are visible to every seeker on the platform.'],
            ['✗', 'Not open to everyone. Every application is personally reviewed. We reject applications that don\'t reflect the right intent.'],
          ].map(([icon, text], i) => (
            <div key={i} className="not-row"><span className="landing-icon">{icon}</span><span>{text}</span></div>
          ))}
        </div>

        <div className="identity-section">
          <h2>Your identity on LeanOn</h2>
          {[
            ['👤', 'Seekers see: your real first name, your selfie photo, your bio, and your listed topics.'],
            ['🔒', 'LeanOn sees (kept private): your Aadhaar number, your bank/UPI details, and your selfie for identity verification.'],
            ['📋', 'You cannot use a fake name, avatar, or stock photo. Every profile is reviewed before going live.'],
          ].map(([icon, text], i) => (
            <div key={i} className="landing-row"><span className="landing-icon">{icon}</span><span>{text}</span></div>
          ))}
        </div>

        <div
          className={`agree-box${agreementChecked ? ' checked' : ''}`}
          onClick={() => setAgreementChecked(c => !c)}
          role="checkbox"
          aria-checked={agreementChecked}
          tabIndex={0}
          onKeyDown={e => { if (e.key === ' ' || e.key === 'Enter') setAgreementChecked(c => !c) }}
        >
          <div className="agree-check">{agreementChecked ? '✓' : ''}</div>
          <div className="agree-text">
            I have read and understood the above. I am applying because I genuinely want to support people — not for easy money. I agree to LeanOn&apos;s <a href="/terms" style={{color:'var(--teal)'}}>Terms of Service</a> and <a href="/privacy" style={{color:'var(--teal)'}}>Privacy Policy</a>.
          </div>
        </div>

        <button
          className="btn"
          disabled={!agreementChecked}
          onClick={() => {
            try { sessionStorage.setItem('leanon_listener_agreed', '1') } catch { /* private mode */ }
            setShowLanding(false)
            setGuardChecked(false)
            runAuthGuard()
          }}
        >
          I agree — Continue to apply →
        </button>
        <a href="/"><button className="btn-ghost" style={{marginTop:10}}>Not now</button></a>
      </div>
    </>
  )
  // ─────────────────────────────────────────────────────────────────────────

  if (!guardChecked) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar"><a href="/" className="back">←</a></div>
        <div style={{ textAlign: 'center', padding: '64px 20px', fontFamily: "'Nunito',sans-serif", fontWeight: 600, color: '#5A7A8A' }}>
          Loading…
        </div>
      </div>
    </>
  )

  // guardChecked resolved: show "already registered" or "permanently rejected" screen.
  if (guardChecked && alreadyRegistered) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar"><a href="/" className="back">←</a></div>
        <div className="already-reg">
          {permanentlyRejected ? (
            <>
              <div style={{fontSize:48,marginBottom:12}}>😔</div>
              <p style={{fontWeight:800,fontSize:17,marginBottom:6}}>Application not approved</p>
              <p style={{fontSize:14,color:'#5A7A8A',marginBottom:16}}>
                Unfortunately your listener application was not approved at this time.
              </p>
              {rejectedNotes && (
                <div style={{background:'#F0F8FC',border:'1.5px solid #D5EEF6',borderRadius:14,padding:'14px 16px',textAlign:'left',marginBottom:16}}>
                  <div style={{fontSize:11,fontWeight:800,color:'#1A8FA0',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:6}}>Reason</div>
                  <div style={{fontSize:14,color:'#0F4867',lineHeight:1.6,fontWeight:500}}>{rejectedNotes}</div>
                </div>
              )}
              <p style={{fontSize:13,color:'#5A7A8A',marginBottom:16}}>
                If you believe this is an error, please contact us and we&apos;ll look into it.
              </p>
              <a href="/contact">
                <button className="btn">Contact support →</button>
              </a>
              <a href="/dashboard">
                <button className="btn-ghost" style={{marginTop:10}}>Go to dashboard</button>
              </a>
            </>
          ) : (
            <>
              <div style={{fontSize:48,marginBottom:12}}>✅</div>
              <p style={{fontWeight:800,fontSize:17,marginBottom:6}}>Your application was received!</p>
              <p style={{fontSize:14,color:'#5A7A8A',marginBottom:16}}>We got your listener application and our team is reviewing it. You&apos;ll hear from us within 24–48 hours on the phone number you registered with.</p>
              <a href="/become-listener/status">
                <button className="btn">Check application status →</button>
              </a>
              <a href="/dashboard">
                <button className="btn-ghost" style={{marginTop:10}}>Go to dashboard</button>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  )

  if (done) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="success">
          <div className="success-icon">🎉</div>
          <h2>Application submitted!</h2>
          <p>We&apos;ll review your profile within 24 hours and notify you on {phone}. Once approved, you&apos;ll go live and start earning.</p>
          <a href="/become-listener/status"><button className="btn" style={{marginTop:28}}>Check application status →</button></a>
        </div>
      </div>
    </>
  )

  // Show persistent error list after first submit attempt (not just during the 500ms shake)
  const step1Errors = step === 1 && step1Submitted ? validateStep1() : []
  const step2Errors = step === 2 && step2Submitted ? validateStep2() : []
  const step3Errors = step === 3 && step3Submitted ? validateStep3() : []

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          {step > 1
            ? <button className="back" onClick={() => setStep(s=>s-1)}>←</button>
            : <a href="/" className="back">←</a>
          }
        </div>

        {step === 1 && (
          <div className="hero-card">
            <h1>Earn by listening 🎧</h1>
            <p>You set your price, and you keep {Math.round((1 - LISTENER_SERVICE_FEE_RATE) * 100)}% of your rate on every paid session. LeanOn&apos;s {Math.round(LISTENER_SERVICE_FEE_RATE * 100)}% service fee supports the work of bringing seekers to LeanOn, secure payments, verification, safety and support — so you can focus on listening.</p>
            <div className="earn-row">
              <div className="earn-item"><div className="amount">₹{MIN_LISTENER_RATE}+</div><div className="label">per minute (you choose)</div></div>
              <div className="earn-item"><div className="amount">₹9K+</div><div className="label">per month possible</div></div>
              <div className="earn-item"><div className="amount">{Math.round((1 - LISTENER_SERVICE_FEE_RATE) * 100)}%</div><div className="label">of your rate you keep on paid sessions</div></div>
            </div>
            {SHOW_LISTENER_GROWTH_NOTICE && (
              <div style={{marginTop:16,background:'rgba(255,153,51,0.13)',border:'1.5px solid rgba(255,153,51,0.35)',borderRadius:12,padding:'12px 14px',fontSize:13,color:'rgba(255,220,140,0.95)',lineHeight:1.6,fontWeight:500}}>
                <strong style={{fontWeight:800}}>Honest note:</strong> LeanOn is a growing platform. How much you earn depends entirely on how many seekers are using LeanOn when you&apos;re online. Early listeners focus on building their profile and first few ratings — volume grows as the platform does. We don&apos;t promise a specific income.
              </div>
            )}
          </div>
        )}

        {resubmissionNotes && (
          <div style={{margin:'0 0 20px',background:'#FFF8E6',border:'2px solid #F5A623',borderRadius:14,padding:'14px 16px'}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}>
              <span style={{fontSize:18}}>✏️</span>
              <span style={{fontWeight:800,fontSize:14,color:'#7A4500'}}>Action needed — please fix and resubmit</span>
            </div>
            <div style={{fontSize:14,color:'#5A3300',lineHeight:1.6,fontWeight:500}}>{resubmissionNotes}</div>
          </div>
        )}

        <div className="step-dots">
          {[1,2,3].map((s,i) => (
            <span key={s} style={{display:'contents'}}>
              {i > 0 && <div className="dot-line" />}
              <div className={`dot ${step > s ? 'done' : step === s ? 'active' : 'todo'}`}>
                {step > s ? '✓' : s}
              </div>
            </span>
          ))}
        </div>

        {/* STEP 1: Profile + OTP */}
        {step === 1 && (
          <div className={shaking ? 'shake' : ''}>
            <div className="section-title">About you</div>
            <p className="section-sub">Your story is your profile. Be real — it builds trust.</p>

            {step1Errors.length > 0 && (
              <div className="errors-list">
                <p>Please fix the following:</p>
                <ul>{step1Errors.map((e,i) => <li key={i}>{e}</li>)}</ul>
              </div>
            )}

            <label className="lbl">Full name</label>
            <input
              className={`input${fieldErrors.name ? ' err' : ''}`}
              placeholder="Your full name"
              value={name}
              onChange={e => { setName(e.target.value); if (fieldErrors.name) setFieldErrors(f => ({...f, name: ''})) }}
            />
            {fieldErrors.name && <span className="field-err">{fieldErrors.name}</span>}

            <label className="lbl">Phone number (India)</label>
            <input
              className={`input${fieldErrors.phone ? ' err' : ''}`}
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="98765 43210 (10 digits)"
              value={phone}
              disabled={otpVerified}
              onChange={e => { setPhone(e.target.value.replace(/\D/g,'')); if (fieldErrors.phone) setFieldErrors(f => ({...f, phone: ''})) }}
            />
            {fieldErrors.phone && <span className="field-err">{fieldErrors.phone}</span>}

            {/* Phone is verified at sign-in via the MSG91 widget — show badge only. */}
            {digits().length === 10 && (
              <div style={{background:'#F0FFF4',border:'1.5px solid #34C759',borderRadius:12,padding:'10px 14px',marginBottom:16,fontSize:13,fontWeight:700,color:'#276749'}}>
                {'✓'} Phone verified: +91 {digits()}
              </div>
            )}

            <label className="lbl">About me (30–400 characters — shown on your profile)</label>
            <textarea
              className={`input${fieldErrors.bio ? ' err' : ''}`}
              placeholder="e.g. I'm a patient listener who lets you go at your own pace. I won't judge or rush to give advice — I'll help you make sense of what you're feeling."
              value={bio}
              onChange={e => { if (e.target.value.length <= 400) { setBio(e.target.value); if (fieldErrors.bio) setFieldErrors(f => ({...f, bio: ''})) } }}
            />
            <div className={`char-count${bio.length > 380 || (bio.length > 0 && bio.length < 30) ? ' warn' : ''}`}>
              {bio.length}/400 {bio.length < 30 && bio.length > 0 ? `(${30 - bio.length} more chars needed)` : ''}
            </div>
            {fieldErrors.bio && <span className="field-err">{fieldErrors.bio}</span>}

            <div className="section-title" style={{marginTop:8}}>Your photos</div>
            <div style={{background:'#FFF8E6',border:'1.5px solid #F5A623',borderRadius:12,padding:'12px 14px',marginBottom:14,fontSize:13,color:'#5A3300',lineHeight:1.6,fontWeight:600}}>
              ⚠️ <strong>Both photos must be real photos of you, taken in good light.</strong> Your face must be clearly visible — no sunglasses, filters, group photos, avatars, screenshots or photos of someone else. Dark, blurry or unclear photos are not approved.
            </div>

            <label className="lbl">1. Display photo <span style={{fontWeight:500,color:'var(--gray)'}}>— shown on your public profile</span></label>
            <p style={{fontSize:12,color:'var(--gray)',marginBottom:10,lineHeight:1.5}}>
              Upload a clear, well-lit photo of just you, looking at the camera. This is what seekers see, so pick a friendly one. It is reviewed before it goes live.
            </p>
            <label style={{display:'flex',alignItems:'center',gap:14,cursor:'pointer',border:`2px ${avatarPreview ? 'solid' : 'dashed'} ${fieldErrors.avatar ? '#E53935' : avatarPreview ? 'var(--teal)' : 'var(--border)'}`,borderRadius:14,padding:12,background:'white',marginBottom:6}}>
              <div style={{width:88,height:88,borderRadius:'50%',overflow:'hidden',background:'var(--light)',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28}}>
                {avatarPreview
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={avatarPreview} alt="Your display photo" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                  : '🖼️'}
              </div>
              <div style={{fontSize:13,fontWeight:700,color:'var(--navy)'}}>
                {selfieProcessing || avatarUploading ? 'Processing…' : avatarPreview ? 'Change display photo' : 'Choose display photo'}
                <div style={{fontSize:12,fontWeight:500,color:'var(--gray)',marginTop:2}}>From your gallery · JPG or PNG</div>
              </div>
              <input type="file" accept="image/jpeg,image/png,image/webp" style={{display:'none'}} onChange={async e => {
                const file = e.target.files?.[0]
                e.target.value = ''
                if (!file) return
                if (file.size > MAX_INPUT_BYTES) { setFieldErrors(f => ({...f, avatar:'Photo must be under 20 MB'})); return }
                setSelfieProcessing(true)
                try {
                  const shrunk = await compressImage(file, DISPLAY_PHOTO_OPTS)
                  setAvatarFile(shrunk)
                  setAvatarUrl('')
                  const reader = new FileReader()
                  reader.onload = ev => setAvatarPreview(ev.target?.result as string)
                  reader.readAsDataURL(shrunk)
                  if (fieldErrors.avatar) setFieldErrors(f => ({...f, avatar:''}))
                } catch {
                  setFieldErrors(f => ({...f, avatar:'Could not process photo. Please try another one.'}))
                } finally {
                  setSelfieProcessing(false)
                }
              }} />
            </label>
            {fieldErrors.avatar && <span className="field-err">{fieldErrors.avatar}</span>}

            <label className="lbl" style={{marginTop:14}}>2. Verification selfie <span style={{fontWeight:500,color:'var(--gray)'}}>— private, never shown to anyone</span></label>
            <p style={{fontSize:12,color:'var(--gray)',marginBottom:10,lineHeight:1.5}}>
              🔒 Take a live selfie with your camera. Only the LeanOn team sees it, to confirm your display photo is really you.
            </p>
            <SelfieCapture
              preview={selfiePreview || null}
              loading={selfieUploading}
              hasError={!!fieldErrors.selfie}
              onCapture={uploadSelfie}
            />
            {selfieDone && !selfiePreview && (
              <div style={{fontSize:12,fontWeight:700,color:'#276749',marginTop:6}}>✓ Selfie on file — retake only if you were asked to.</div>
            )}
            {selfieDone && selfiePreview && (
              <div style={{fontSize:12,fontWeight:700,color:'#276749',marginTop:6}}>✓ Selfie saved privately</div>
            )}
            {fieldErrors.selfie && <span className="field-err">{fieldErrors.selfie}</span>}

            <div className="section-title" style={{marginTop:20}}>How seekers will see you</div>
            <label className="lbl">People talk to me about… <span style={{fontWeight:500,color:'var(--gray)'}}>— pick {TAGLINE_PICK} ({taglines.length}/{TAGLINE_PICK})</span></label>
            {fieldErrors.taglines && <span className="field-err">{fieldErrors.taglines}</span>}
            <div className="tag-grid">
              {TAGLINE_PHRASES.map(p => {
                const sel = taglines.includes(p)
                const full = !sel && taglines.length >= TAGLINE_PICK
                return (
                  <button key={p} type="button" className={`tag-chip${sel ? ' sel' : ''}`} disabled={full} style={full ? {opacity:0.45} : undefined}
                    onClick={() => { setTaglines(t => sel ? t.filter(x => x !== p) : [...t, p]); if (fieldErrors.taglines) setFieldErrors(f => ({...f, taglines: ''})) }}>
                    {p}
                  </button>
                )
              })}
            </div>

            <label className="lbl" style={{marginTop:14}}>What I&apos;ve been through <span style={{fontWeight:500,color:'var(--gray)'}}>— shown on your profile ({LIVED_MIN_CHARS}–{LIVED_MAX_CHARS} characters)</span></label>
            <textarea
              className={`input${fieldErrors.lived ? ' err' : ''}`}
              placeholder="e.g. I moved to a new city alone at 22 and spent two years feeling invisible. I know how heavy loneliness gets, and how small steps helped me through it."
              value={lived}
              onChange={e => { if (e.target.value.length <= LIVED_MAX_CHARS) { setLived(e.target.value); if (fieldErrors.lived) setFieldErrors(f => ({...f, lived: ''})) } }}
            />
            <div className={`char-count${lived.trim().length > 0 && lived.trim().length < LIVED_MIN_CHARS ? ' warn' : ''}`}>{lived.trim().length}/{LIVED_MAX_CHARS}</div>
            {fieldErrors.lived && <span className="field-err">{fieldErrors.lived}</span>}

            <label className="lbl">Topics you can speak to (select all that apply)</label>
            {fieldErrors.tags && <span className="field-err">{fieldErrors.tags}</span>}
            <div className="tag-grid">
              {TAGS.map(t => (
                <button key={t.id} className={`tag-chip${tags.includes(t.id)?' sel':''}`} onClick={()=>toggleTag(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
            <label className="lbl" style={{marginTop:4}}>Languages you can listen in 🌐 (select all)</label>
            <div className="tag-grid">
              {LANGUAGES.map(l => (
                <button key={l.id} className={`tag-chip${langs.includes(l.id)?' sel':''}`} onClick={()=>toggleLang(l.id)}>
                  {l.label}
                </button>
              ))}
            </div>

            <div className="training-box" style={{marginBottom:20}}>
              <h3>📚 Training requirements</h3>
              <ul>
                <li>All listeners complete our 4-module empathy training program before going live</li>
                <li>Module 1: Active listening & emotional reflection</li>
                <li>Module 2: Boundary-setting & self-care</li>
                <li>Module 3: Crisis recognition & referral protocols</li>
                <li>Module 4: LeanOn code of conduct</li>
              </ul>
            </div>

            <button className="btn" onClick={tryNextFromStep1} disabled={avatarUploading || selfieProcessing || selfieUploading}>
              {(avatarUploading || selfieProcessing || selfieUploading) ? <span className="spin">⟳</span> : 'Next: Your background →'}
            </button>
          </div>
        )}

        {/* STEP 2: Background & screening (private — only the LeanOn team sees this) */}
        {step === 2 && (
          <div className={shaking ? 'shake' : ''}>
            <div className="section-title">Your background</div>
            <p className="section-sub">🔒 Private — only the LeanOn team sees this, except your education, which appears on your profile.</p>

            {step2Errors.length > 0 && (
              <div className="errors-list">
                <p>Please fix the following:</p>
                <ul>{step2Errors.map((e,i) => <li key={i}>{e}</li>)}</ul>
              </div>
            )}

            <label className="lbl">Highest education <span style={{fontWeight:500,color:'var(--gray)'}}>— shown on your profile</span></label>
            <select className={`input${fieldErrors.eduLevel ? ' err' : ''}`} value={eduLevel} onChange={e => { setEduLevel(e.target.value); setFieldErrors(f => ({...f, eduLevel: ''})) }}>
              <option value="">Select…</option>
              {EDUCATION_LEVELS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
            {fieldErrors.eduLevel && <span className="field-err">{fieldErrors.eduLevel}</span>}

            <label className="lbl">Field of education <span style={{fontWeight:500,color:'var(--gray)'}}>— shown on your profile</span></label>
            <select className={`input${fieldErrors.eduField ? ' err' : ''}`} value={eduField} onChange={e => { setEduField(e.target.value); setFieldErrors(f => ({...f, eduField: ''})) }}>
              <option value="">Select…</option>
              {EDUCATION_FIELDS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
            {fieldErrors.eduField && <span className="field-err">{fieldErrors.eduField}</span>}

            <label className="lbl">Occupation</label>
            <select className={`input${fieldErrors.occupation ? ' err' : ''}`} value={occupation} onChange={e => { setOccupation(e.target.value); setFieldErrors(f => ({...f, occupation: ''})) }}>
              <option value="">Select…</option>
              {OCCUPATIONS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
            {fieldErrors.occupation && <span className="field-err">{fieldErrors.occupation}</span>}

            <label className="lbl">State</label>
            <select className={`input${fieldErrors.stateName ? ' err' : ''}`} value={stateName} onChange={e => { setStateName(e.target.value); setFieldErrors(f => ({...f, stateName: ''})) }}>
              <option value="">Select…</option>
              {INDIAN_STATES.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            {fieldErrors.stateName && <span className="field-err">{fieldErrors.stateName}</span>}

            <label className="lbl">Hours you can listen per week</label>
            <select className={`input${fieldErrors.hoursPerWeek ? ' err' : ''}`} value={hoursPerWeek} onChange={e => { setHoursPerWeek(e.target.value); setFieldErrors(f => ({...f, hoursPerWeek: ''})) }}>
              <option value="">Select…</option>
              {HOURS_PER_WEEK.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
            {fieldErrors.hoursPerWeek && <span className="field-err">{fieldErrors.hoursPerWeek}</span>}

            <label className="lbl">Usual time slots <span style={{fontWeight:500,color:'var(--gray)'}}>(select all that apply)</span></label>
            <div className="tag-grid">
              {TIME_SLOTS.map(o => (
                <button key={o.id} type="button" className={`tag-chip${timeSlots.includes(o.id) ? ' sel' : ''}`}
                  onClick={() => { setTimeSlots(t => t.includes(o.id) ? t.filter(x => x !== o.id) : [...t, o.id]); setFieldErrors(f => ({...f, timeSlots: ''})) }}>{o.label}</button>
              ))}
            </div>
            {fieldErrors.timeSlots && <span className="field-err">{fieldErrors.timeSlots}</span>}

            <label className="lbl" style={{marginTop:8}}>Prior listening experience <span style={{fontWeight:500,color:'var(--gray)'}}>(select all that apply)</span></label>
            <div className="tag-grid">
              {PRIOR_EXPERIENCE.map(o => (
                <button key={o.id} type="button" className={`tag-chip${priorExp.includes(o.id) ? ' sel' : ''}`}
                  onClick={() => {
                    setPriorExp(t => o.id === 'none' ? (t.includes('none') ? [] : ['none'])
                      : t.includes(o.id) ? t.filter(x => x !== o.id) : [...t.filter(x => x !== 'none'), o.id])
                    setFieldErrors(f => ({...f, priorExp: ''}))
                  }}>{o.label}</button>
              ))}
            </div>
            {fieldErrors.priorExp && <span className="field-err">{fieldErrors.priorExp}</span>}

            <label className="lbl" style={{marginTop:8}}>Why do you want to be a listener? <span style={{fontWeight:500,color:'var(--gray)'}}>({WHY_MIN_WORDS}–{WHY_MAX_WORDS} words)</span></label>
            <textarea
              className={`input${fieldErrors.why ? ' err' : ''}`}
              style={{minHeight:140}}
              placeholder="Tell us honestly what draws you to supporting people, and what you would bring to a conversation."
              value={why}
              onChange={e => { setWhy(e.target.value); if (fieldErrors.why) setFieldErrors(f => ({...f, why: ''})) }}
            />
            {(() => { const wc = wordCount(why); return (
              <div className={`char-count${wc > 0 && (wc < WHY_MIN_WORDS || wc > WHY_MAX_WORDS) ? ' warn' : ''}`}>{wc} words{wc < WHY_MIN_WORDS && wc > 0 ? ` (${WHY_MIN_WORDS - wc} more needed)` : ''}</div>
            )})()}
            {fieldErrors.why && <span className="field-err">{fieldErrors.why}</span>}

            <label className="lbl">How did you hear about LeanOn?</label>
            <select className={`input${fieldErrors.heardFrom ? ' err' : ''}`} value={heardFrom} onChange={e => { setHeardFrom(e.target.value); setFieldErrors(f => ({...f, heardFrom: ''})) }}>
              <option value="">Select…</option>
              {HEARD_FROM.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
            {fieldErrors.heardFrom && <span className="field-err">{fieldErrors.heardFrom}</span>}

            <label className="lbl">LinkedIn profile URL <span style={{fontWeight:500,color:'var(--gray)'}}>— optional, private</span></label>
            <input className={`input${fieldErrors.linkedin ? ' err' : ''}`} type="url" inputMode="url" placeholder="https://www.linkedin.com/in/your-name"
              value={linkedin} onChange={e => { setLinkedin(e.target.value); if (fieldErrors.linkedin) setFieldErrors(f => ({...f, linkedin: ''})) }} />
            {fieldErrors.linkedin && <span className="field-err">{fieldErrors.linkedin}</span>}

            <div className="section-title" style={{marginTop:22}}>A few situations</div>
            <p className="section-sub">Pick what you would do. There&apos;s no trick — we want to understand how you&apos;d handle real conversations.</p>
            {fieldErrors.quiz && <span className="field-err">{fieldErrors.quiz}</span>}
            {SCREENING_QUIZ.map((q, qi) => (
              <div key={q.id} style={{background:'white',border:`1.5px solid ${fieldErrors.quiz && quiz[q.id] === undefined ? '#E53935' : 'var(--border)'}`,borderRadius:14,padding:'14px 14px 8px',marginBottom:12}}>
                <div style={{fontSize:14,fontWeight:800,color:'var(--navy)',marginBottom:10,lineHeight:1.5}}>{qi + 1}. {q.q}</div>
                {q.options.map((opt, oi) => (
                  <label key={oi} style={{display:'flex',gap:10,alignItems:'flex-start',padding:'8px 4px',cursor:'pointer',fontSize:13,fontWeight:600,color:'var(--navy)',lineHeight:1.5}}>
                    <input type="radio" name={`quiz-${q.id}`} checked={quiz[q.id] === oi} style={{marginTop:3,width:18,height:18,flexShrink:0}}
                      onChange={() => { setQuiz(z => ({...z, [q.id]: oi})); if (fieldErrors.quiz) setFieldErrors(f => ({...f, quiz: ''})) }} />
                    {opt}
                  </label>
                ))}
              </div>
            ))}

            <button className="btn" onClick={tryNextFromStep2}>Next: Rate &amp; payment →</button>
          </div>
        )}

        {/* STEP 3: Rate + Payment */}
        {step === 3 && (
          <div className={shaking ? 'shake' : ''}>
            <div className="section-title">Rate & payment details</div>
            <p className="section-sub">Set your rate and add your payout details. Earnings transferred within 3 business days.</p>

            {step3Errors.length > 0 && (
              <div className="errors-list">
                <p>Please fix the following:</p>
                <ul>{step3Errors.map((e,i) => <li key={i}>{e}</li>)}</ul>
              </div>
            )}

            <label className="lbl">Your age <span style={{color:'#c0392b'}}>*</span> <span style={{fontWeight:500,color:'var(--gray)'}}>(month &amp; year only — shown to seekers as an age range, never your exact date)</span></label>
            <div style={{display:'flex',gap:10,marginBottom:4}}>
              <select
                className={`input${fieldErrors.birth ? ' err' : ''}`}
                style={{flex:1,marginBottom:0,appearance:'auto'}}
                value={birthMonth}
                aria-label="Birth month"
                onChange={e => { setBirthMonth(e.target.value); if (fieldErrors.birth) setFieldErrors(f => ({...f, birth: ''})) }}
              >
                <option value="">Birth month</option>
                {MONTHS.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
              </select>
              <select
                className={`input${fieldErrors.birth ? ' err' : ''}`}
                style={{flex:1,marginBottom:0,appearance:'auto'}}
                value={birthYear}
                aria-label="Birth year"
                onChange={e => { setBirthYear(e.target.value); if (fieldErrors.birth) setFieldErrors(f => ({...f, birth: ''})) }}
              >
                <option value="">Birth year</option>
                {BIRTH_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            {fieldErrors.birth && <span className="field-err">{fieldErrors.birth}</span>}
            <p style={{fontSize:12,color:'var(--gray)',margin:'-4px 0 12px',lineHeight:1.5}}>
              🔒 Seekers only see a range (e.g. 30–39), never your exact birth date. Helps them find a listener at a similar life stage.
            </p>

            <label className="lbl">Your rate per minute <span style={{color:'#c0392b'}}>*</span> <span style={{fontWeight:500,color:'var(--gray)'}}>— suggestion: ₹10–₹50/min</span></label>
            {VOICE_PRICING_ENABLED ? (
              <>
                <div className="rate-pair" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:10}}>
                  <div>
                    <div style={{fontSize:12,fontWeight:800,color:'var(--navy)',marginBottom:4}}>💬 Text chat</div>
                    <div className={`rate-wrap${fieldErrors.rate ? ' err' : ''}`}>
                      <span className="rate-prefix">₹</span>
                      <input className="rate-input" type="number" min={MIN_LISTENER_RATE} max={MAX_LISTENER_RATE} value={rate} aria-label="Text chat rate per minute"
                        onChange={e => { setVoiceDraft(null); setRate(e.target.value); if (fieldErrors.rate) setFieldErrors(f => ({...f, rate: ''})) }} />
                      <span className="rate-suffix">/min</span>
                    </div>
                  </div>
                  <div>
                    <div style={{fontSize:12,fontWeight:800,color:'var(--navy)',marginBottom:4}}>📞 Voice call</div>
                    <div className={`rate-wrap${fieldErrors.rate ? ' err' : ''}`}>
                      <span className="rate-prefix">₹</span>
                      <input className="rate-input" type="number" min={MIN_LISTENER_RATE + VOICE_RATE_PREMIUM} max={MAX_LISTENER_RATE + VOICE_RATE_PREMIUM} aria-label="Voice call rate per minute"
                        value={voiceDraft ?? (rate.trim() && Number.isFinite(parseInt(rate)) ? String(parseInt(rate) + VOICE_RATE_PREMIUM) : '')}
                        onChange={e => {
                          const v = e.target.value
                          const n = parseInt(v)
                          setVoiceDraft(v)
                          setRate(Number.isFinite(n) ? String(n - VOICE_RATE_PREMIUM) : '')
                          if (fieldErrors.rate) setFieldErrors(f => ({...f, rate: ''}))
                        }}
                        onBlur={() => setVoiceDraft(null)} />
                      <span className="rate-suffix">/min</span>
                    </div>
                  </div>
                </div>
                <p style={{fontSize:12,color:'var(--gray)',margin:'2px 0 4px',fontWeight:600}}>Voice is always ₹{VOICE_RATE_PREMIUM}/min more than text — change either one and the other adjusts.</p>
              </>
            ) : (
            <div className={`rate-wrap${fieldErrors.rate ? ' err' : ''}`}>
              <span className="rate-prefix">₹</span>
              <input className="rate-input" type="number" min={1} max={MAX_LISTENER_RATE} value={rate}
                onChange={e => { setRate(e.target.value); if (fieldErrors.rate) setFieldErrors(f => ({...f, rate: ''})) }} />
              <span className="rate-suffix">/ minute</span>
            </div>
            )}
            {fieldErrors.rate && <span className="field-err">{fieldErrors.rate}</span>}
            <p style={{fontSize:12,color:'var(--gray)',marginBottom:12,fontWeight:500}}>You keep {Math.round((1 - LISTENER_SERVICE_FEE_RATE) * 100)}% of your rate on every paid session. New listeners often start at ₹10–₹15 and raise it as they build reviews.</p>

            <div style={{background:'#F0F8FC',borderRadius:12,padding:'10px 14px',marginBottom:12,fontSize:13,color:'#0F4867',fontWeight:600}}>
              📅 Sessions are booked in <strong>15, 30, or 45 minute slots</strong>. No open-ended calls — clean start and end times for both sides.
            </div>

            {VOICE_PRICING_ENABLED ? (() => {
              const voiceNet = (mins: number) => {
                const g = (rateNum + VOICE_RATE_PREMIUM) * mins
                return g - Math.round(g * LISTENER_SERVICE_FEE_RATE)
              }
              return (
                <div className="rate-preview">
                  <p>What you take home:</p>
                  <p>15 min → 💬 <strong>₹{earn15.toLocaleString('en-IN')}</strong> · 📞 <strong>₹{voiceNet(15).toLocaleString('en-IN')}</strong></p>
                  <p>30 min → 💬 <strong>₹{earn30.toLocaleString('en-IN')}</strong> · 📞 <strong>₹{voiceNet(30).toLocaleString('en-IN')}</strong></p>
                  <p>45 min → 💬 <strong>₹{earn45.toLocaleString('en-IN')}</strong> · 📞 <strong>₹{voiceNet(45).toLocaleString('en-IN')}</strong></p>
                </div>
              )
            })() : (
            <div className="rate-preview">
              <p>At <strong>₹{rateNum.toLocaleString('en-IN')}/min</strong> you earn (after the service fee):</p>
              <p>15 min → you earn <strong>₹{earn15.toLocaleString('en-IN')}</strong></p>
              <p>30 min → you earn <strong>₹{earn30.toLocaleString('en-IN')}</strong></p>
              <p>45 min → you earn <strong>₹{earn45.toLocaleString('en-IN')}</strong></p>
            </div>
            )}

            <div className="fee-box">
              <h3>What you take home from a 15-min text chat</h3>
              <div className="fee-row"><span className="label">Session value (15 min at ₹{rateNum}/min)</span><span className="value">₹{gross15.toLocaleString('en-IN')}</span></div>
              <div className="fee-row"><span className="label">LeanOn service fee ({Math.round(LISTENER_SERVICE_FEE_RATE * 100)}%) — seekers, payments, safety &amp; support</span><span className="value">− ₹{serviceFee15.toLocaleString('en-IN')}</span></div>
              <div className="fee-row highlight"><span className="label">You take home</span><span className="value">₹{earn15.toLocaleString('en-IN')} ✓</span></div>
            </div>

            <label className="lbl">Account holder name <span style={{color:'#c0392b'}}>*</span></label>
            <input
              className={`input${fieldErrors.accountHolder ? ' err' : ''}`}
              type="text"
              placeholder="Full name exactly as on your bank account"
              value={accountHolder}
              onChange={e => { setAccountHolder(e.target.value); if (fieldErrors.accountHolder) setFieldErrors(f => ({...f, accountHolder: ''})) }}
            />
            {fieldErrors.accountHolder
              ? <span className="field-err">{fieldErrors.accountHolder}</span>
              : <span style={{fontSize:11,color:'#8aabbc',marginTop:2,display:'block'}}>Must match your bank records exactly — used to verify payouts</span>
            }

            <label className="lbl">Bank account number (9–18 digits) <span style={{color:'#c0392b'}}>*</span></label>
            <input
              className={`input${fieldErrors.bank ? ' err' : ''}`}
              type="text"
              inputMode="numeric"
              placeholder="Enter account number"
              value={bank}
              onChange={e => { setBank(e.target.value.replace(/\D/g,'')); if (fieldErrors.bank) setFieldErrors(f => ({...f, bank: ''})) }}
            />
            {fieldErrors.bank && <span className="field-err">{fieldErrors.bank}</span>}

            <label className="lbl">IFSC code <span style={{color:'#c0392b'}}>*</span></label>
            <input
              className={`input${fieldErrors.ifsc ? ' err' : ''}`}
              type="text"
              placeholder="e.g. SBIN0001234"
              value={ifsc}
              onChange={e => { setIfsc(e.target.value.toUpperCase()); if (fieldErrors.ifsc) setFieldErrors(f => ({...f, ifsc: ''})) }}
            />
            {fieldErrors.ifsc && <span className="field-err">{fieldErrors.ifsc}</span>}

            <label className="lbl">UPI ID (optional)</label>
            <input
              className={`input${fieldErrors.upi ? ' err' : ''}`}
              type="text"
              placeholder="e.g. yourname@upi"
              value={upi}
              onChange={e => { setUpi(e.target.value); if (fieldErrors.upi) setFieldErrors(f => ({...f, upi: ''})) }}
            />
            {fieldErrors.upi && <span className="field-err">{fieldErrors.upi}</span>}

            <label className="lbl">Aadhaar number (12 digits) <span style={{color:'#c0392b'}}>*</span></label>
            <input
              className={`input${fieldErrors.aadhaar ? ' err' : ''}`}
              type="text"
              inputMode="numeric"
              maxLength={12}
              placeholder="12-digit Aadhaar"
              value={aadhaar}
              onChange={e => { setAadhaar(e.target.value.replace(/\D/g,'').slice(0,12)); if (fieldErrors.aadhaar) setFieldErrors(f => ({...f, aadhaar: ''})) }}
            />
            {fieldErrors.aadhaar && <span className="field-err">{fieldErrors.aadhaar}</span>}
            <p style={{fontSize:12,color:'var(--gray)',margin:'-4px 0 4px',lineHeight:1.5}}>
              🔒 Used only for one-time identity verification by our team. Never shown to seekers.
            </p>

            <div className="disclaimer">
              <p>⚠️ <strong>Important:</strong> LeanOn is a peer support platform. By applying, you confirm you are sharing personal lived experience only — not providing clinical advice, therapy, or counseling of any kind.</p>
            </div>
            {error && <div className="error-box">{error}</div>}
            <button className="btn" onClick={submit} disabled={loading}>
              {loading ? <span className="spin">⟳</span> : 'Submit application →'}
            </button>
            <a href="/"><button className="btn-ghost">Cancel</button></a>
          </div>
        )}
      </div>
    </>
  )
}
