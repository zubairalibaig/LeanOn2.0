'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--blue:#C9E7F4;--cream:#FFFBF5;--gray:#6B8FA8;--border:#DDE8F0;--light:#F0F4F7;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  a{text-decoration:none;color:inherit;}
  .page{min-height:100vh;display:flex;flex-direction:column;max-width:420px;margin:0 auto;padding:0 20px;}
  .topbar{display:flex;align-items:center;justify-content:space-between;padding:16px 0;}
  .back-btn{width:40px;height:40px;border-radius:12px;background:var(--light);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;color:var(--navy);}
  .logo-text{font-weight:900;font-size:20px;color:var(--navy);}
  .logo-text span{color:var(--orange);}
  .spacer{width:40px;}
  .content{flex:1;padding:32px 0;}
  .step-icon{width:60px;height:60px;border-radius:20px;background:var(--navy);display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:24px;}
  h1{font-size:30px;font-weight:900;color:var(--navy);line-height:1.2;margin-bottom:10px;}
  .subtitle{font-size:15px;color:var(--gray);font-weight:500;line-height:1.6;margin-bottom:32px;}
  .label{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px;display:block;}
  .phone-wrap{display:flex;align-items:center;gap:0;background:white;border:2px solid var(--border);border-radius:14px;overflow:hidden;transition:border-color 0.2s;}
  .phone-wrap:focus-within{border-color:var(--navy);}
  .phone-prefix{padding:14px 14px 14px 16px;font-weight:800;font-size:16px;color:var(--gray);border-right:2px solid var(--border);white-space:nowrap;}
  .phone-input{flex:1;padding:14px 16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:700;color:var(--navy);border:none;outline:none;background:transparent;}
  .phone-input::placeholder{color:#B0C8D8;font-weight:500;}
  .text-input{width:100%;padding:14px 16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:700;color:var(--navy);border:2px solid var(--border);border-radius:14px;outline:none;background:white;transition:border-color 0.2s;}
  .text-input:focus{border-color:var(--navy);}
  .text-input::placeholder{color:#B0C8D8;font-weight:500;}
  .otp-row{display:flex;gap:10px;justify-content:center;margin-bottom:8px;}
  .otp-box{width:48px;height:56px;border:2px solid var(--border);border-radius:14px;font-family:'Nunito',sans-serif;font-size:22px;font-weight:900;color:var(--navy);text-align:center;background:white;outline:none;transition:all 0.2s;}
  .otp-box:focus{border-color:var(--orange);background:#FFFBF5;}
  .btn{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:16px;cursor:pointer;transition:all 0.2s;margin-top:24px;box-shadow:0 4px 20px rgba(255,153,51,0.3);}
  .btn:hover{background:#e8861a;transform:translateY(-1px);}
  .btn:disabled{opacity:0.5;cursor:not-allowed;transform:none;}
  .resend-row{text-align:center;margin-top:20px;}
  .resend-btn{background:none;border:none;font-family:'Nunito',sans-serif;font-size:14px;font-weight:700;color:var(--orange);cursor:pointer;}
  .resend-count{font-size:14px;color:var(--gray);font-weight:600;}
  .error{color:#E53935;font-size:13px;font-weight:700;margin-top:8px;}
  .tos{font-size:12px;color:var(--gray);font-weight:500;margin-top:12px;line-height:1.5;}
  .tos a{color:var(--orange);}
  .spinning{display:inline-block;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
`

export default function AuthPage() {
  const router = useRouter()
  const [step, setStep]       = useState<'phone'|'otp'|'name'>('phone')
  const [phone, setPhone]     = useState('')
  const [otp, setOtp]         = useState(['','','','','',''])
  const [name, setName]       = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [countdown, setCountdown] = useState(0)
  const otpRefs = useRef<(HTMLInputElement|null)[]>([])

  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  async function sendOtp() {
    setError('')
    const digits = phone.replace(/\D/g,'')
    if (digits.length < 10) { setError('Enter a valid 10-digit mobile number'); return }
    setLoading(true)
    // TODO: integrate Supabase phone OTP
    // const { createClient } = await import('@/lib/supabase')
    // const sb = createClient()
    // await sb.auth.signInWithOtp({ phone: '+91' + digits.slice(-10) })
    await new Promise(r => setTimeout(r, 1000)) // Remove when Supabase connected
    setLoading(false)
    setStep('otp')
    setCountdown(30)
  }

  async function verifyOtp() {
    setError('')
    const code = otp.join('')
    if (code.length < 6) { setError('Enter the full 6-digit code'); return }
    setLoading(true)
    // TODO: verify with Supabase
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setStep('name')
  }

  async function saveName() {
    setError('')
    if (name.trim().length < 2) { setError('Enter at least a first name'); return }
    setLoading(true)
    // TODO: upsert user name in Supabase
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    router.push('/browse')
  }

  function handleOtpChange(i: number, val: string) {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]; next[i] = val.slice(-1); setOtp(next)
    if (val && i < 5) otpRefs.current[i+1]?.focus()
    if (next.every(d => d)) setTimeout(() => document.getElementById('verify-btn')?.click(), 100)
  }

  function handleOtpKey(i: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs.current[i-1]?.focus()
  }

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          {step !== 'phone'
            ? <button className="back-btn" onClick={() => { setStep(step === 'otp' ? 'phone' : 'otp'); setError('') }}>←</button>
            : <a href="/" className="back-btn">←</a>
          }
          <span className="logo-text">Lean<span>On</span></span>
          <div className="spacer" />
        </div>

        <div className="content">
          {step === 'phone' && (
            <>
              <div className="step-icon">📱</div>
              <h1>What&apos;s your mobile number?</h1>
              <p className="subtitle">We&apos;ll send a one-time code to verify. No spam, ever.</p>
              <label className="label">Mobile number</label>
              <div className="phone-wrap">
                <div className="phone-prefix">🇮🇳 +91</div>
                <input className="phone-input" type="tel" inputMode="numeric" maxLength={10}
                  placeholder="98765 43210" autoFocus
                  value={phone.replace(/\D/g,'').slice(-10)}
                  onChange={e => setPhone(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendOtp()} />
              </div>
              {error && <p className="error">{error}</p>}
              <p className="tos">By continuing you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.</p>
              <button className="btn" onClick={sendOtp} disabled={loading || phone.replace(/\D/g,'').length < 10}>
                {loading ? <span className="spinning">⟳</span> : 'Send OTP →'}
              </button>
            </>
          )}

          {step === 'otp' && (
            <>
              <div className="step-icon">🔐</div>
              <h1>Enter the code</h1>
              <p className="subtitle">Sent to +91 {phone.replace(/\D/g,'').slice(-10)}</p>
              <div className="otp-row">
                {otp.map((d, i) => (
                  <input key={i} ref={el => { otpRefs.current[i] = el }} className="otp-box"
                    type="text" inputMode="numeric" maxLength={1} value={d} autoFocus={i === 0}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => handleOtpKey(i, e)} aria-label={`OTP digit ${i+1}`} />
                ))}
              </div>
              {error && <p className="error" style={{textAlign:'center'}}>{error}</p>}
              <button id="verify-btn" className="btn" onClick={verifyOtp} disabled={loading || otp.join('').length < 6}>
                {loading ? <span className="spinning">⟳</span> : 'Verify & continue →'}
              </button>
              <div className="resend-row">
                {countdown > 0
                  ? <span className="resend-count">Resend in {countdown}s</span>
                  : <button className="resend-btn" onClick={sendOtp}>Resend OTP</button>
                }
              </div>
            </>
          )}

          {step === 'name' && (
            <>
              <div className="step-icon">👋</div>
              <h1>What should we call you?</h1>
              <p className="subtitle">Just a first name is fine. This is what listeners will see.</p>
              <label className="label">Your first name</label>
              <input className="text-input" type="text" placeholder="e.g. Priya" autoFocus
                value={name} onChange={e => setName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && saveName()} />
              {error && <p className="error">{error}</p>}
              <button className="btn" onClick={saveName} disabled={loading || name.trim().length < 2}>
                {loading ? <span className="spinning">⟳</span> : "Let's go →"}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
