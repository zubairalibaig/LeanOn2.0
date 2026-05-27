'use client'
export const dynamic = 'force-dynamic'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .page{min-height:100vh;display:flex;flex-direction:column;max-width:420px;margin:0 auto;padding:0 20px;}
  .topbar{display:flex;align-items:center;justify-content:space-between;padding:16px 0;}
  .back{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,0.8);border:1.5px solid var(--border);cursor:pointer;font-size:18px;color:var(--navy);display:flex;align-items:center;justify-content:center;}
  .logo{font-family:'Nunito',sans-serif;font-weight:900;font-size:20px;color:var(--navy);}
  .logo span{color:var(--orange);}
  .spacer{width:40px;}
  .content{flex:1;padding:32px 0;}
  .step-icon{width:60px;height:60px;border-radius:20px;background:var(--navy);display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:24px;}
  h1{font-size:28px;font-weight:900;color:var(--navy);line-height:1.2;margin-bottom:10px;}
  .subtitle{font-size:15px;color:var(--gray);font-weight:500;line-height:1.6;margin-bottom:32px;}
  .label{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px;display:block;}
  .phone-wrap{display:flex;align-items:center;background:white;border:2px solid var(--border);border-radius:14px;overflow:hidden;transition:border-color 0.2s;margin-bottom:8px;}
  .phone-wrap:focus-within{border-color:var(--navy);}
  .phone-prefix{padding:14px 14px 14px 16px;font-weight:800;font-size:16px;color:var(--gray);border-right:2px solid var(--border);white-space:nowrap;}
  .phone-input{flex:1;padding:14px 16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:700;color:var(--navy);border:none;outline:none;background:transparent;}
  .phone-input::placeholder{color:#B0C8D8;font-weight:500;}
  .text-input{width:100%;padding:14px 16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:700;color:var(--navy);border:2px solid var(--border);border-radius:14px;outline:none;background:white;transition:border-color 0.2s;margin-bottom:8px;}
  .text-input:focus{border-color:var(--navy);}
  .text-input::placeholder{color:#B0C8D8;font-weight:500;}
  .otp-row{display:flex;gap:10px;justify-content:center;margin-bottom:8px;}
  .otp-box{width:48px;height:56px;border:2px solid var(--border);border-radius:14px;font-family:'Nunito',sans-serif;font-size:22px;font-weight:900;color:var(--navy);text-align:center;background:white;outline:none;transition:all 0.2s;}
  .otp-box:focus{border-color:var(--orange);background:#FFFBF5;}
  .btn{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:50px;cursor:pointer;transition:all 0.2s;margin-top:24px;box-shadow:0 4px 20px rgba(255,153,51,0.3);}
  .btn:hover{background:#e8861a;}
  .btn:disabled{opacity:0.5;cursor:not-allowed;}
  .resend-row{text-align:center;margin-top:20px;}
  .resend-btn{background:none;border:none;font-family:'Nunito',sans-serif;font-size:14px;font-weight:700;color:var(--teal);cursor:pointer;}
  .resend-count{font-size:14px;color:var(--gray);font-weight:600;}
  .error{color:#E53935;font-size:13px;font-weight:700;margin-top:8px;}
  .tos{font-size:12px;color:var(--gray);font-weight:500;margin-top:12px;line-height:1.5;}
  .tos a{color:var(--teal);}
  .spin{display:inline-block;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
`

export default function AuthPage() {
  const router = useRouter()
  const sb = createClient() // returns the module-level singleton
  const [step, setStep]         = useState<'phone'|'otp'|'name'>('phone')
  const [phone, setPhone]       = useState('')
  const [otp, setOtp]           = useState(['','','','','',''])
  const [name, setName]         = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [countdown, setCountdown] = useState(0)
  const otpRefs = useRef<(HTMLInputElement|null)[]>([])

  // Detect listener mode from ?mode=listener query param
  const isListenerMode = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('mode') === 'listener'
    : false

  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c-1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  const digits = () => phone.replace(/\D/g,'').slice(-10)
  const formatted = () => '+91' + digits()

  async function sendOtp() {
    setError('')
    if (digits().length < 10) { setError('Enter a valid 10-digit mobile number'); return }
    setLoading(true)
    const { error: err } = await sb.auth.signInWithOtp({ phone: formatted() })
    setLoading(false)
    if (err) { setError(err.message); return }
    setStep('otp')
    setCountdown(30)
  }

  async function verifyOtp() {
    setError('')
    const code = otp.join('')
    if (code.length < 6) { setError('Enter the full 6-digit code'); return }
    setLoading(true)
    const { data, error: err } = await sb.auth.verifyOtp({
      phone: formatted(),
      token: code,
      type: 'sms',
    })
    if (err) { setLoading(false); setError('Invalid code. Try again.'); return }

    // Check if new user — upsert their phone
    await sb.from('users').upsert({
      id: data.user!.id,
      phone: formatted(),
    }, { onConflict: 'id' })

    const { data: userData } = await sb.from('users').select('name').eq('id', data.user!.id).single()
    setLoading(false)
    if (!userData?.name) {
      setStep('name')
    } else {
      const params = new URLSearchParams(window.location.search)
      router.push(safeRedirect(params.get('redirect'), params.get('mode') === 'listener' ? '/dashboard' : '/browse'))
    }
  }

  async function saveName() {
    setError('')
    if (name.trim().length < 2) { setError('Enter at least a first name'); return }
    setLoading(true)
    const { data: { user } } = await sb.auth.getUser()
    if (!user) { setError('Session expired. Please try again.'); setLoading(false); return }
    await sb.from('users').update({ name: name.trim() }).eq('id', user.id)
    setLoading(false)
    const params = new URLSearchParams(window.location.search)
    router.push(safeRedirect(params.get('redirect'), params.get('mode') === 'listener' ? '/dashboard' : '/browse'))
  }

  // Prevent open redirect — only allow relative paths we control
  function safeRedirect(raw: string | null, fallback: string): string {
    if (!raw) return fallback
    if (raw.startsWith('/') && !raw.startsWith('//') && !raw.includes('\\')) return raw
    return fallback
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
            ? <button className="back" onClick={() => { setStep(step === 'otp' ? 'phone' : 'otp'); setError('') }}>←</button>
            : <a href="/" className="back">←</a>
          }
          <span className="logo">Lean<span>On</span></span>
          <div className="spacer" />
        </div>

        <div className="content">
          {step === 'phone' && (
            <>
              <div className="step-icon">{isListenerMode ? '🎧' : '📱'}</div>
              <h1>{isListenerMode ? 'Listener sign in' : 'What\'s your mobile number?'}</h1>
              <p className="subtitle">
                {isListenerMode
                  ? 'Sign in to your listener dashboard. Same number you registered with.'
                  : "We'll send a one-time code to verify. No spam, ever."}
              </p>
              <label className="label">Mobile number</label>
              <div className="phone-wrap">
                <div className="phone-prefix">🇮🇳 +91</div>
                <input className="phone-input" type="tel" inputMode="numeric" maxLength={10}
                  placeholder="98765 43210" autoFocus
                  aria-label="Mobile number"
                  value={digits()} onChange={e => setPhone(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendOtp()} />
              </div>
              {error && <p className="error">{error}</p>}
              <p className="tos">By continuing you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.</p>
              <button className="btn" onClick={sendOtp} disabled={loading || digits().length < 10}>
                {loading ? <span className="spin">⟳</span> : 'Send OTP →'}
              </button>
            </>
          )}

          {step === 'otp' && (
            <>
              <div className="step-icon">🔐</div>
              <h1>Enter the code</h1>
              <p className="subtitle">Sent to +91 {digits()}</p>
              <div className="otp-row">
                {otp.map((d,i) => (
                  <input key={i} ref={el => { otpRefs.current[i] = el }} className="otp-box"
                    type="text" inputMode="numeric" maxLength={1} value={d} autoFocus={i===0}
                    aria-label={`OTP digit ${i + 1}`}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => handleOtpKey(i, e)} />
                ))}
              </div>
              {error && <p className="error" style={{textAlign:'center'}}>{error}</p>}
              <button id="verify-btn" className="btn" onClick={verifyOtp} disabled={loading || otp.join('').length < 6}>
                {loading ? <span className="spin">⟳</span> : 'Verify & continue →'}
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
              <p className="subtitle">{isListenerMode ? 'Just a first name. This is what seekers will see on your profile.' : 'Just a first name. This is what listeners will see.'}</p>
              <label className="label">Your first name</label>
              <input className="text-input" type="text" placeholder="e.g. Priya" autoFocus
                aria-label="Your first name"
                value={name} onChange={e => setName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && saveName()} />
              {error && <p className="error">{error}</p>}
              <button className="btn" onClick={saveName} disabled={loading || name.trim().length < 2}>
                {loading ? <span className="spin">⟳</span> : "Let's go →"}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
