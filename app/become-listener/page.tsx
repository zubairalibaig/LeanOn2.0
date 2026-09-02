'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MIN_LISTENER_RATE, MAX_LISTENER_RATE, PLATFORM_FEE, LANGUAGES, MONTHS, MIN_LISTENER_AGE, MAX_LISTENER_AGE, ageFromBirth } from '@/lib/constants'
import { createClient } from '@/lib/supabase'
import { compressImage, extForType, AVATAR_OPTS, MAX_INPUT_BYTES } from '@/lib/compress-image'

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
  .rate-input{flex:1;padding:13px 14px;border:none;outline:none;font-family:'Nunito',sans-serif;font-size:18px;font-weight:800;color:var(--navy);}
  .rate-suffix{padding:13px 14px;font-size:13px;font-weight:600;color:var(--gray);}
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
  if (!/^[a-zA-Z\s\-]+$/.test(v.trim())) return 'Name can only contain letters, spaces, and hyphens'
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
function validateRate(v: string): string {
  const n = parseInt(v)
  if (isNaN(n) || n < 1) return 'Please enter a rate of at least ₹1 per minute'
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
  // UPI IDs: at least 3 chars before @, at least 4 chars after (e.g. @okaxis)
  const parts = v.split('@')
  if (parts.length !== 2 || parts[0].length < 3 || parts[1].length < 4) return 'Enter a valid UPI ID (e.g. yourname@okaxis)'
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
  const [phone, setPhone] = useState('')
  const [bio, setBio]     = useState('')
  const [tags, setTags]   = useState<string[]>([])
  const [rate, setRate]   = useState('10')
  const [langs, setLangs] = useState<string[]>(['english'])
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
  const photoInputRef = useRef<HTMLInputElement | null>(null)

  // Phone verification now happens ONCE at sign-in via the MSG91 widget on /auth.
  // The in-form OTP flow (signInWithOtp / verifyOtp) is permanently dead —
  // India's DLT regime blocks the SMS hook — and is removed. `otpVerified` is
  // kept only so the phone field stays disabled and the green badge shows;
  // it is always true by the time the form is visible.
  const [otpVerified] = useState(true)

  // Guard: check if already registered. Rejected / needs_resubmission
  // applicants must NOT be blocked — the status page sends them here to
  // resubmit, so blocking on the mere existence of a listener_profiles row
  // would make resubmission a dead end.
  useEffect(() => {
    sb.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) {
        // Not signed in — gate behind /auth. The phone widget there is the only
        // working verification path.
        router.replace('/auth?mode=listener&redirect=/become-listener')
        return
      }
      // Pre-fill the phone they logged in with. No in-form OTP needed.
      if (user.phone) setPhone(user.phone.replace(/\D/g, '').slice(-10))

      const [{ data: existing }, { data: app }] = await Promise.all([
        sb.from('listener_profiles').select('id, is_approved').eq('user_id', user.id).maybeSingle(),
        sb.from('listener_applications').select('status').eq('user_id', user.id).maybeSingle(),
      ])
      const canResubmit = app?.status === 'rejected' || app?.status === 'needs_resubmission'
      if (existing && !canResubmit) {
        setAlreadyRegistered(true)
      }
      setGuardChecked(true)
    }).catch(() => {
      // Auth error / network issue — send to /auth rather than showing the form
      // with no session. (A broken session shown as a form produced the dead
      // in-form OTP button that users saw after the DLT migration.)
      router.replace('/auth?mode=listener&redirect=/become-listener')
    })
  }, [])

  // Use raw input for the live preview — validation blocks invalid values on submit.
  const rateNum     = Math.max(0, parseInt(rate) || 0)
  const earn15      = rateNum * 15
  const earn30      = rateNum * 30
  const earn45      = rateNum * 45
  const platformFee = PLATFORM_FEE  // flat ₹10 added to every session (paid by seeker)
  const userPays15  = earn15 + platformFee
  const userPays30  = earn30 + platformFee
  const userPays45  = earn45 + platformFee

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
    if (!avatarFile && !avatarUrl) errs.push('Please upload a profile photo')
    return errs
  }

  function validateStep2(): string[] {
    const errs: string[] = []
    const bde = validateBirth(birthMonth, birthYear); if (bde) errs.push(bde)
    const re = validateRate(rate); if (re) errs.push(re)
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
      if (!avatarFile && !avatarUrl) fe.avatar = 'Please upload a profile photo'
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
        const path = `${user.id}.${ext}`
        const { error: upErr } = await sb.storage.from('avatars').upload(path, avatarFile, { upsert: true, contentType: avatarFile.type })
        if (upErr) { setFieldErrors(f => ({...f, avatar: 'Photo upload failed. Please try again.'})); setAvatarUploading(false); return }
        const { data: { publicUrl } } = sb.storage.from('avatars').getPublicUrl(path)
        // Version the URL so a re-upload to the same path is not served stale
        // from the CDN — matches what /profile and /dashboard already do.
        setAvatarUrl(`${publicUrl}?t=${Date.now()}`)
      } catch {
        setFieldErrors(f => ({...f, avatar: 'Photo upload failed. Please try again.'}))
        setAvatarUploading(false)
        return
      }
      setAvatarUploading(false)
    }
    setFieldErrors({})
    setStep(2)
  }

  async function submit() {
    setStep2Submitted(true)
    const errs = validateStep2()
    if (errs.length > 0) {
      const fe: Record<string,string> = {}
      const bde = validateBirth(birthMonth, birthYear); if (bde) fe.birth = bde
      const re = validateRate(rate); if (re) fe.rate = re
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
          bank:       bank.trim(),
          ifsc:       ifsc.trim().toUpperCase(),
          upi:        upi.trim(),
          aadhaar:    aadhaar.replace(/\D/g, ''),
          avatar_url: avatarUrl || undefined,
        }),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
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

  // guardChecked resolved: show "already registered" if applicable.
  if (guardChecked && alreadyRegistered) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar"><a href="/" className="back">←</a></div>
        <div className="already-reg">
          <div style={{fontSize:48,marginBottom:12}}>🎧</div>
          <p>You already have a listener application on LeanOn.</p>
          <a href="/become-listener/status">
            <button className="btn">View your application status →</button>
          </a>
          <a href="/dashboard">
            <button className="btn-ghost" style={{marginTop:10}}>Go to dashboard</button>
          </a>
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
            <p>You keep 100% of your rate. LeanOn adds a small flat fee on top — paid by the user, not taken from you.</p>
            <div className="earn-row">
              <div className="earn-item"><div className="amount">₹{MIN_LISTENER_RATE}+</div><div className="label">per minute (you choose)</div></div>
              <div className="earn-item"><div className="amount">₹13K+</div><div className="label">per month possible</div></div>
              <div className="earn-item"><div className="amount">100%</div><div className="label">of your rate you keep</div></div>
            </div>
          </div>
        )}

        <div className="step-dots">
          {[1,2].map((s,i) => (
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

            <label className="lbl">Your story (30–400 characters — shown on your profile)</label>
            <textarea
              className={`input${fieldErrors.bio ? ' err' : ''}`}
              placeholder="e.g. I went through a painful divorce at 29. It took 2 years to rebuild. I'm here for people who feel like there's no light at the end of the tunnel — I've been there and found my way back."
              value={bio}
              onChange={e => { if (e.target.value.length <= 400) { setBio(e.target.value); if (fieldErrors.bio) setFieldErrors(f => ({...f, bio: ''})) } }}
            />
            <div className={`char-count${bio.length > 380 || (bio.length > 0 && bio.length < 30) ? ' warn' : ''}`}>
              {bio.length}/400 {bio.length < 30 && bio.length > 0 ? `(${30 - bio.length} more chars needed)` : ''}
            </div>
            {fieldErrors.bio && <span className="field-err">{fieldErrors.bio}</span>}

            <label className="lbl">Profile photo (required — builds trust with seekers)</label>
            <input
              ref={photoInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              style={{display:'none'}}
              onChange={async e => {
                const file = e.target.files?.[0]
                if (!file) return
                // Raised from 5 MB: the photo is downscaled below, so a raw
                // phone camera file is a fine INPUT. Only absurd files are blocked.
                if (file.size > MAX_INPUT_BYTES) { setFieldErrors(f => ({...f, avatar:'Photo must be under 20 MB'})); return }
                // Compress at SELECTION time, not upload time, so the preview
                // shows exactly the image that will be stored, and the later
                // upload step is instant.
                const shrunk = await compressImage(file, AVATAR_OPTS)
                setAvatarFile(shrunk)
                setAvatarUrl('')
                const reader = new FileReader()
                reader.onload = ev => setAvatarPreview(ev.target?.result as string)
                reader.readAsDataURL(shrunk)
                if (fieldErrors.avatar) setFieldErrors(f => ({...f, avatar:''}))
              }}
            />
            <div
              className={`photo-box${avatarPreview ? ' has-photo' : ''}${fieldErrors.avatar ? ' err' : ''}`}
              onClick={() => photoInputRef.current?.click()}
            >
              {avatarPreview
                ? <img src={avatarPreview} alt="Preview" className="photo-preview" />
                : <div className="photo-placeholder">📷</div>
              }
              <span className="photo-label">
                {avatarPreview ? 'Change photo' : 'Tap to upload your photo'}
              </span>
              <span className="photo-sub">JPG / PNG / WebP · max 5 MB · real photo required</span>
            </div>
            {fieldErrors.avatar && <span className="field-err">{fieldErrors.avatar}</span>}
            <div style={{background:'rgba(26,143,160,0.06)',border:'1px solid rgba(26,143,160,0.2)',borderRadius:10,padding:'10px 14px',marginBottom:16,fontSize:12,color:'#1A5F6A',fontWeight:600,lineHeight:1.5}}>
              💙 Listeners with a genuine photo receive 3× more bookings. Use a clear, well-lit photo of yourself — no avatars or illustrations.
            </div>

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

            <button className="btn" onClick={tryNextFromStep1} disabled={avatarUploading}>
              {avatarUploading ? <span className="spin">⟳</span> : 'Next: Payment details →'}
            </button>
          </div>
        )}

        {/* STEP 2: Rate + Payment */}
        {step === 2 && (
          <div className={shaking ? 'shake' : ''}>
            <div className="section-title">Rate & payment details</div>
            <p className="section-sub">Set your rate and add your payout details. Earnings transferred within 3 business days.</p>

            {step2Errors.length > 0 && (
              <div className="errors-list">
                <p>Please fix the following:</p>
                <ul>{step2Errors.map((e,i) => <li key={i}>{e}</li>)}</ul>
              </div>
            )}

            <label className="lbl">Your age <span style={{fontWeight:500,color:'var(--gray)'}}>(month &amp; year only — shown to seekers as an age range, never your exact date)</span></label>
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

            <label className="lbl">Your rate per minute — <span style={{fontWeight:500,color:'var(--gray)'}}>suggestion: ₹10–₹50/min</span></label>
            <div className={`rate-wrap${fieldErrors.rate ? ' err' : ''}`}>
              <span className="rate-prefix">₹</span>
              <input className="rate-input" type="number" min={1} max={MAX_LISTENER_RATE} value={rate}
                onChange={e => { setRate(e.target.value); if (fieldErrors.rate) setFieldErrors(f => ({...f, rate: ''})) }} />
              <span className="rate-suffix">/ minute</span>
            </div>
            {fieldErrors.rate && <span className="field-err">{fieldErrors.rate}</span>}
            <p style={{fontSize:12,color:'var(--gray)',marginBottom:12,fontWeight:500}}>You keep 100% of your rate. New listeners often start at ₹10–₹15 and raise it as they build reviews.</p>

            <div style={{background:'#F0F8FC',borderRadius:12,padding:'10px 14px',marginBottom:12,fontSize:13,color:'#0F4867',fontWeight:600}}>
              📅 Sessions are booked in <strong>15, 30, or 45 minute slots</strong>. No open-ended calls — clean start and end times for both sides.
            </div>

            <div className="rate-preview">
              <p>At <strong>₹{rateNum.toLocaleString('en-IN')}/min</strong> you earn:</p>
              <p>15 min → you earn <strong>₹{earn15.toLocaleString('en-IN')}</strong> · user pays <strong>₹{userPays15.toLocaleString('en-IN')}</strong></p>
              <p>30 min → you earn <strong>₹{earn30.toLocaleString('en-IN')}</strong> · user pays <strong>₹{userPays30.toLocaleString('en-IN')}</strong></p>
              <p>45 min → you earn <strong>₹{earn45.toLocaleString('en-IN')}</strong> · user pays <strong>₹{userPays45.toLocaleString('en-IN')}</strong></p>
            </div>

            <div className="fee-box">
              <h3>How the ₹{platformFee} platform fee works</h3>
              <div className="fee-row"><span className="label">Your rate (15 min at ₹{rateNum}/min)</span><span className="value">₹{earn15.toLocaleString('en-IN')}</span></div>
              <div className="fee-row"><span className="label">LeanOn platform fee (paid by user)</span><span className="value">+ ₹{platformFee}</span></div>
              <div className="fee-row"><span className="label">Razorpay fee (paid by LeanOn)</span><span className="value">~ −₹3</span></div>
              <div className="fee-row highlight"><span className="label">You receive</span><span className="value">₹{earn15.toLocaleString('en-IN')} ✓</span></div>
            </div>

            <label className="lbl">Bank account number (9–18 digits)</label>
            <input
              className={`input${fieldErrors.bank ? ' err' : ''}`}
              type="text"
              inputMode="numeric"
              placeholder="Enter account number"
              value={bank}
              onChange={e => { setBank(e.target.value.replace(/\D/g,'')); if (fieldErrors.bank) setFieldErrors(f => ({...f, bank: ''})) }}
            />
            {fieldErrors.bank && <span className="field-err">{fieldErrors.bank}</span>}

            <label className="lbl">IFSC code</label>
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

            <label className="lbl">Aadhaar number (12 digits)</label>
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
