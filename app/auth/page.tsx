'use client'
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
  .loading-screen{display:flex;align-items:center;justify-content:center;height:100vh;font-family:'Nunito',sans-serif;color:#0F4867;font-size:16px;font-weight:600;}
`

// Prevent open redirect — only allow relative paths we control
function safeRedirect(raw: string | null, fallback: string): string {
  if (!raw) return fallback
  if (raw.startsWith('/') && !raw.startsWith('//') && !raw.includes('\\')) return raw
  return fallback
}

export default function AuthPage() {
  const router = useRouter()
  const sb = createClient()
  const [step, setStep]         = useState<'phone'|'otp'|'name'>('phone')
  const [phone, setPhone]       = useState('')
  const [otp, setOtp]           = useState(['','','','','',''])
  const [name, setName]         = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [countdown, setCountdown] = useState(0)
  const otpRefs = useRef<(HTMLInputElement|null)[]>([])
  const handledRef = useRef(false)

  // Read mode from URL safely (SSR-safe)
  const [isListenerMode, setIsListenerMode] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const redirect = params.get('redirect')
    const mode = params.get('mode')

    // Persist redirect destination and mode to sessionStorage for post-OTP use
    if (redirect) sessionStorage.setItem('auth_redirect', redirect)
    if (mode) sessionStorage.setItem('auth_mode', mode)

    if (mode === 'listener') setIsListenerMode(true)

    // Validate session server-side to avoid stale-token redirect loops.
    // getUser() hits the Supabase server; getSession() only reads localStorage
    // and can return an expired session that the middleware will reject.
    sb.auth.getUser().then(({ data: { user } }) => {
      if (user && !handledRef.current) {
        handledRef.current = true
        const dest = safeRedirect(
          sessionStorage.getItem('auth_redirect'),
          mode === 'listener' ? '/dashboard' : '/browse'
        )
        sessionStorage.removeItem('auth_redirect')
        router.replace(dest)
      }
    }).catch(() => {})

    // Also listen for auth state changes (handles Supabase OTP callback)
    const { data: { subscription } } = sb.auth.onAuthStateChange((event, session) => {
      if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session && !handledRef.current) {
        // Only handle if we're past the OTP step (name step redirect happens in saveName)
        // Don't double-redirect from the name step
        if (step !== 'name') {
          // Let verifyOtp handle the redirect logic
        }
      }
    })
    return () => subscription.unsubscribe()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c-1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  const digits = () => phone.replace(/\D/g,'').slice(-10)
  const formatted = () => '+91' + digits()

  function getDestination(): string {
    const stored = sessionStorage.getItem('auth_redirect')
    const mode = sessionStorage.getItem('auth_mode')
    const fallback = mode === 'listener' ? '/dashboard' : '/browse'
    return safeRedirect(stored, fallback)
  }

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
    if (err) {
      setLoading(false)
      const msg = err.message?.toLowerCase() ?? ''
      if (msg.includes('expired') || msg.includes('not found')) {
        setError('OTP expired. Please request a new one.')
      } else if (msg.includes('invalid') || msg.includes('incorrect')) {
        setError('Incorrect OTP. Double-check and try again.')
      } else {
        setError('Verification failed. Please try again.')
      }
      return
    }

    // Create or update the public.users row NOW — this is the authoritative
    // creation point for phone users. The DB trigger intentionally skips
    // phone-only users at OTP-send time to prevent ghost accounts.
    const { error: upsertErr } = await sb.from('users').upsert({
      id: data.user!.id,
      phone: formatted(),
      is_active: true,
    }, { onConflict: 'id' })

    if (upsertErr) {
      // Non-fatal: log and continue — user may already exist
      console.warn('users upsert after OTP:', upsertErr.message)
    }

    const { data: userData } = await sb.from('users').select('name').eq('id', data.user!.id).single()
    setLoading(false)

    if (!userData?.name) {
      setStep('name')
    } else {
      // Returning user — check if new (no sessions) for welcome toast
      const { count: sessionCount } = await sb
        .from('sessions')
        .select('id', { count: 'exact', head: true })
        .eq('seeker_id', data.user!.id)

      const dest = getDestination()
      sessionStorage.removeItem('auth_redirect')
      sessionStorage.removeItem('auth_mode')

      if ((sessionCount ?? 0) === 0) {
        sessionStorage.setItem('leanon_welcome_new', '1')
      }

      handledRef.current = true
      // refresh() propagates the new session cookie to the Next.js middleware
      // before the subsequent replace() navigation — prevents SSR redirect loops.
      router.refresh()
      router.replace(dest)
    }
  }

  async function saveName() {
    setError('')
    if (name.trim().length < 2) { setError('Enter at least a first name'); return }
    setLoading(true)
    const { data: { user } } = await sb.auth.getUser()
    if (!user) { setError('Session expired. Please try again.'); setLoading(false); return }
    // Upsert (not update) — ensures the row exists even if the post-verifyOtp upsert failed
    const { error: saveErr } = await sb.from('users').upsert({
      id: user.id,
      name: name.trim(),
      phone: user.phone ?? undefined,
      is_active: true,
    }, { onConflict: 'id' })
    setLoading(false)
    if (saveErr) {
      // Without a users row, every downstream flow (wallet, sessions, listener
      // application) breaks — block here instead of failing mysteriously later.
      console.error('users upsert failed in saveName:', saveErr.message)
      setError('Could not save your profile. Please try again.')
      return
    }

    const dest = getDestination()
    sessionStorage.removeItem('auth_redirect')
    sessionStorage.removeItem('auth_mode')
    sessionStorage.setItem('leanon_welcome_new', '1')

    handledRef.current = true
    // refresh() propagates the new session cookie before navigation
    router.refresh()
    router.replace(dest)
  }

  function handleOtpChange(i: number, val: string) {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]; next[i] = val.slice(-1); setOtp(next)
    if (val && i < 5) otpRefs.current[i+1]?.focus()
    // Only auto-click if not already loading — prevents double-submit
    if (next.every(d => d)) setTimeout(() => { if (!loading) document.getElementById('verify-btn')?.click() }, 100)
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
            ? <button className="back" onClick={() => { if (step === 'otp') { setOtp(['','','','','','']); setCountdown(0) } setStep(step === 'otp' ? 'phone' : 'otp'); setError('') }}>←</button>
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
