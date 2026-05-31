'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MIN_LISTENER_RATE, MAX_LISTENER_RATE, LANGUAGES } from '@/lib/constants'
import { createClient } from '@/lib/supabase'

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
  if (isNaN(n) || n < MIN_LISTENER_RATE || n > MAX_LISTENER_RATE) return `Rate must be between ₹${MIN_LISTENER_RATE}–₹${MAX_LISTENER_RATE} per minute`
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
  if (!v.includes('@') || v.split('@')[0].length < 3) return 'Enter a valid UPI ID (e.g. name@upi)'
  return ''
}

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
  const [loading, setLoading] = useState(false)
  const [done, setDone]   = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [shaking, setShaking] = useState(false)

  // OTP state
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otp, setOtp] = useState(['','','','','',''])
  const [otpLoading, setOtpLoading] = useState(false)
  const [otpError, setOtpError] = useState('')
  const [countdown, setCountdown] = useState(0)
  const otpRefs = useRef<(HTMLInputElement|null)[]>([])

  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  // Guard: check if already registered
  useEffect(() => {
    sb.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { setGuardChecked(true); return }
      const { data: existing } = await sb.from('listener_profiles').select('id, is_approved').eq('user_id', user.id).maybeSingle()
      if (existing) {
        setAlreadyRegistered(true)
      }
      setGuardChecked(true)
    })
  }, [])

  const rateNum     = Math.min(Math.max(parseInt(rate) || MIN_LISTENER_RATE, MIN_LISTENER_RATE), MAX_LISTENER_RATE)
  const earn15      = rateNum * 15
  const earn30      = rateNum * 30
  const earn45      = rateNum * 45
  const userPays15  = earn15 + 15
  const userPays30  = earn30 + 15
  const userPays45  = earn45 + 15

  function toggleTag(t: string) {
    setTags(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])
  }
  function toggleLang(l: string) {
    setLangs(p => p.includes(l) ? (p.length > 1 ? p.filter(x => x !== l) : p) : [...p, l])
  }

  const digits = () => phone.replace(/\D/g,'').slice(-10)

  async function sendOtp() {
    const phoneErr = validatePhone(phone)
    if (phoneErr) { setFieldErrors(e => ({...e, phone: phoneErr})); return }
    setOtpLoading(true)
    setOtpError('')
    const { error: err } = await sb.auth.signInWithOtp({ phone: '+91' + digits() })
    setOtpLoading(false)
    if (err) { setOtpError(err.message); return }
    setOtpSent(true)
    setCountdown(30)
  }

  async function verifyOtp() {
    const code = otp.join('')
    if (code.length < 6) { setOtpError('Enter the full 6-digit code'); return }
    setOtpLoading(true)
    setOtpError('')
    const { error: err } = await sb.auth.verifyOtp({
      phone: '+91' + digits(),
      token: code,
      type: 'sms',
    })
    setOtpLoading(false)
    if (err) { setOtpError('Invalid OTP. Please try again.'); return }
    setOtpVerified(true)
  }

  function handleOtpChange(i: number, val: string) {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]; next[i] = val.slice(-1); setOtp(next)
    if (val && i < 5) otpRefs.current[i+1]?.focus()
    if (next.every(d => d)) setTimeout(() => verifyOtp(), 100)
  }
  function handleOtpKey(i: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs.current[i-1]?.focus()
  }

  function validateStep1(): string[] {
    const errs: string[] = []
    const ne = validateName(name); if (ne) errs.push(ne)
    const pe = validatePhone(phone); if (pe) errs.push(pe)
    if (!otpVerified) errs.push('Please verify your phone number with OTP')
    const be = validateBio(bio); if (be) errs.push(be)
    if (tags.length === 0) errs.push('Please select at least one topic')
    return errs
  }

  function validateStep2(): string[] {
    const errs: string[] = []
    const re = validateRate(rate); if (re) errs.push(re)
    const banke = validateBank(bank); if (banke) errs.push(banke)
    const ifsce = validateIFSC(ifsc); if (ifsce) errs.push(ifsce)
    if (upi.trim()) { const upie = validateUPI(upi); if (upie) errs.push(upie) }
    return errs
  }

  function tryNextFromStep1() {
    const errs = validateStep1()
    if (errs.length > 0) {
      const fe: Record<string,string> = {}
      const ne = validateName(name); if (ne) fe.name = ne
      const pe = validatePhone(phone); if (pe) fe.phone = pe
      if (!otpVerified) fe.otp = 'Please verify your phone number with OTP'
      const be = validateBio(bio); if (be) fe.bio = be
      if (tags.length === 0) fe.tags = 'Please select at least one topic'
      setFieldErrors(fe)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      return
    }
    setFieldErrors({})
    setStep(2)
  }

  async function submit() {
    const errs = validateStep2()
    if (errs.length > 0) {
      const fe: Record<string,string> = {}
      const re = validateRate(rate); if (re) fe.rate = re
      const banke = validateBank(bank); if (banke) fe.bank = banke
      const ifsce = validateIFSC(ifsc); if (ifsce) fe.ifsc = ifsce
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

      const { error: profileErr } = await sb.from('listener_profiles').upsert({
        user_id:          user.id,
        bio:              bio.trim(),
        specialty_tags:   tags,
        languages_spoken: langs,
        rate_per_min:     rateNum,
        is_approved:      false,
        is_available:     false,
      }, { onConflict: 'user_id' })

      if (profileErr) throw profileErr

      const { error: appErr } = await sb.from('listener_applications').upsert({
        user_id:       user.id,
        name:          name.trim(),
        phone:         phone.trim(),
        bank_account:  bank.trim(),
        ifsc_code:     ifsc.trim().toUpperCase(),
        upi_id:        upi.trim() || null,
        status:        'pending',
      }, { onConflict: 'user_id' })
      if (appErr) throw appErr

      await sb.from('users').upsert({
        id: user.id,
        name: name.trim(),
        phone: user.phone ?? undefined,
        is_active: true,
      }, { onConflict: 'id' })

      setDone(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Listener application error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!guardChecked) return (
    <>
      <style>{S}</style>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif',color:'#0F4867'}}>Loading...</div>
    </>
  )

  if (alreadyRegistered) return (
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
          <a href="/"><button className="btn" style={{marginTop:28}}>Back to home</button></a>
        </div>
      </div>
    </>
  )

  const step1Errors = step === 1 && shaking ? validateStep1() : []
  const step2Errors = step === 2 && shaking ? validateStep2() : []

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
              <div className="earn-item"><div className="amount">₹8–20</div><div className="label">per minute (you set it)</div></div>
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

            {/* OTP Flow */}
            {!otpVerified && (
              <div style={{marginBottom:16}}>
                {!otpSent ? (
                  <button
                    style={{width:'100%',padding:'12px',fontFamily:'Nunito,sans-serif',fontSize:14,fontWeight:700,color:'var(--teal)',background:'rgba(26,143,160,0.08)',border:'1.5px solid rgba(26,143,160,0.3)',borderRadius:12,cursor:'pointer',marginBottom:4}}
                    onClick={sendOtp}
                    disabled={otpLoading || digits().length < 10}
                  >
                    {otpLoading ? <span className="spin">⟳</span> : '📱 Send OTP to verify phone →'}
                  </button>
                ) : (
                  <div style={{background:'white',border:'1.5px solid var(--border)',borderRadius:14,padding:16,marginBottom:4}}>
                    <p style={{fontSize:13,fontWeight:700,color:'var(--navy)',marginBottom:12}}>Enter the 6-digit OTP sent to +91 {digits()}</p>
                    <div className="otp-row">
                      {otp.map((d,i) => (
                        <input
                          key={i}
                          ref={el => { otpRefs.current[i] = el }}
                          className={`otp-box${otpError ? ' err' : ''}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={d}
                          autoFocus={i===0}
                          onChange={e => handleOtpChange(i, e.target.value)}
                          onKeyDown={e => handleOtpKey(i, e)}
                        />
                      ))}
                    </div>
                    {otpError && <p style={{fontSize:12,color:'#E53935',fontWeight:700,marginTop:6,textAlign:'center'}}>{otpError}</p>}
                    <div style={{textAlign:'center',marginTop:10}}>
                      {otpLoading
                        ? <span style={{fontSize:13,color:'var(--gray)'}}>Verifying...</span>
                        : countdown > 0
                          ? <span className="resend-count">Resend in {countdown}s</span>
                          : <button className="resend-btn" onClick={() => { setOtp(['','','','','','']); sendOtp() }}>Resend OTP</button>
                      }
                    </div>
                  </div>
                )}
                {fieldErrors.otp && <span className="field-err">{fieldErrors.otp}</span>}
              </div>
            )}
            {otpVerified && (
              <div style={{background:'#F0FFF4',border:'1.5px solid #34C759',borderRadius:12,padding:'10px 14px',marginBottom:16,fontSize:13,fontWeight:700,color:'#276749'}}>
                ✓ Phone verified: +91 {digits()}
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

            <button className="btn" onClick={tryNextFromStep1}>
              Next: Payment details →
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

            <label className="lbl">Your rate per minute (₹1–₹20)</label>
            <div className={`rate-wrap${fieldErrors.rate ? ' err' : ''}`}>
              <span className="rate-prefix">₹</span>
              <input className="rate-input" type="number" min={1} max={20} value={rate}
                onChange={e => { setRate(e.target.value); if (fieldErrors.rate) setFieldErrors(f => ({...f, rate: ''})) }} />
              <span className="rate-suffix">/ minute</span>
            </div>
            {fieldErrors.rate && <span className="field-err">{fieldErrors.rate}</span>}

            <div style={{background:'#F0F8FC',borderRadius:12,padding:'10px 14px',marginBottom:12,fontSize:13,color:'#0F4867',fontWeight:600}}>
              📅 Sessions are booked in <strong>15, 30, or 45 minute slots</strong>. No open-ended calls — clean start and end times for both sides.
            </div>

            <div className="rate-preview">
              <p>At <strong>₹{rateNum}/min</strong> you earn:</p>
              <p>15 min → you earn <strong>₹{earn15}</strong> · user pays <strong>₹{userPays15}</strong></p>
              <p>30 min → you earn <strong>₹{earn30}</strong> · user pays <strong>₹{userPays30}</strong></p>
              <p>45 min → you earn <strong>₹{earn45}</strong> · user pays <strong>₹{userPays45}</strong></p>
            </div>

            <div className="fee-box">
              <h3>How the ₹15 platform fee works</h3>
              <div className="fee-row"><span className="label">Your rate (15 min at ₹{rateNum}/min)</span><span className="value">₹{earn15}</span></div>
              <div className="fee-row"><span className="label">LeanOn platform fee (paid by user)</span><span className="value">+ ₹15</span></div>
              <div className="fee-row"><span className="label">Razorpay fee (paid by LeanOn)</span><span className="value">~ −₹3</span></div>
              <div className="fee-row highlight"><span className="label">You receive</span><span className="value">₹{earn15} ✓</span></div>
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
