'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

// Phone sign-in via the MSG91 OTP Widget.
//
// India's DLT regime blocks the "Supabase generates the OTP, a carrier delivers
// it" path (needs a DLT template → needs an active GST LeanOn no longer has —
// see CLAUDE.md). MSG91's only no-DLT product is the OTP Widget, where MSG91
// generates AND verifies the OTP and hands the browser a short-lived token.
//
// This page drives the widget with exposeMethods:true so the UI stays ours
// (window.sendOtp / verifyOtp), then posts the token to /api/auth/phone-widget,
// which verifies it server-side with MSG91 and mints a real Supabase session.
// Supabase never sees this OTP, so the session is minted server-side — see the
// route for the full trust model.

const WIDGET_ID  = process.env.NEXT_PUBLIC_MSG91_WIDGET_ID || ''
const TOKEN_AUTH = process.env.NEXT_PUBLIC_MSG91_TOKEN_AUTH || ''
// The widget's OTP length is set in the MSG91 dashboard; keep this in sync.
const OTP_LEN = Math.max(4, Math.min(8, Number(process.env.NEXT_PUBLIC_MSG91_OTP_LENGTH) || 6))
const widgetConfigured = Boolean(WIDGET_ID && TOKEN_AUTH)

// MSG91 exposes these on window once initSendOTP() runs with exposeMethods:true.
declare global {
  interface Window {
    initSendOTP?: (config: unknown) => void
    sendOtp?: (identifier: string, success?: (d: unknown) => void, failure?: (e: unknown) => void) => void
    verifyOtp?: (otp: string, success?: (d: unknown) => void, failure?: (e: unknown) => void) => void
    retryOtp?: (channel: string | null, success?: (d: unknown) => void, failure?: (e: unknown) => void, identifier?: string) => void
  }
}

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
  #msg91-captcha{margin-bottom:12px;}
`

// Prevent open redirect — only allow relative paths we control
function safeRedirect(raw: string | null, fallback: string): string {
  if (!raw) return fallback
  if (raw.startsWith('/') && !raw.startsWith('//') && !raw.includes('\\')) return raw
  return fallback
}

/** MSG91 hands the verified token back in slightly different shapes; accept all. */
function extractToken(data: unknown): string | null {
  if (!data) return null
  if (typeof data === 'string') return data
  if (typeof data === 'object') {
    const d = data as Record<string, unknown>
    for (const k of ['message', 'access-token', 'accessToken', 'token', 'jwt']) {
      if (typeof d[k] === 'string' && d[k]) return d[k] as string
    }
  }
  return null
}

const errText = (e: unknown): string | null =>
  typeof e === 'string' ? e
  : (e && typeof e === 'object' && typeof (e as { message?: unknown }).message === 'string')
      ? (e as { message: string }).message
  : null

export default function AuthPage() {
  const router = useRouter()
  const sb = createClient()
  const [step, setStep]         = useState<'phone'|'otp'|'name'>('phone')
  const [phone, setPhone]       = useState('')
  const [otp, setOtp]           = useState<string[]>(Array(OTP_LEN).fill(''))
  const [name, setName]         = useState('')
  const [loading, setLoading]   = useState(false)
  const [checking, setChecking] = useState(true)
  const [error, setError]       = useState('')
  const [countdown, setCountdown] = useState(0)
  const [widgetReady, setWidgetReady] = useState(false)
  const otpRefs = useRef<(HTMLInputElement|null)[]>([])
  const handledRef = useRef(false)      // guards the final navigation
  const tokenHandledRef = useRef(false) // guards double token delivery (verifyOtp cb + config.success)

  const [isListenerMode, setIsListenerMode] = useState(false)

  const digits = () => phone.replace(/\D/g,'').slice(-10)

  function getDestination(): string {
    const stored = sessionStorage.getItem('auth_redirect')
    const mode = sessionStorage.getItem('auth_mode')
    const fallback = mode === 'listener' ? '/dashboard' : '/browse'
    return safeRedirect(stored, fallback)
  }

  // Exchange the widget token for a Supabase session, then route the user.
  const handleToken = useCallback(async (raw: unknown) => {
    const token = extractToken(raw)
    if (!token || tokenHandledRef.current) return
    tokenHandledRef.current = true
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/phone-widget', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data?.error || 'Could not sign you in. Please try again.')
        tokenHandledRef.current = false
        setLoading(false)
        return
      }
      // Session cookies are now set by the server route. Decide new-vs-returning
      // by asking the server for a profile name (admin read, bypasses RLS).
      let existingName: string | null = null
      try {
        const p = await fetch('/api/auth/profile')
        if (p.ok) existingName = (await p.json())?.name ?? null
      } catch { /* treat as new */ }

      if (!existingName) { setStep('name'); setLoading(false); return }

      const dest = getDestination()
      sessionStorage.removeItem('auth_redirect')
      sessionStorage.removeItem('auth_mode')
      handledRef.current = true
      window.location.assign(dest)
    } catch {
      setError('Network error. Please check your connection and try again.')
      tokenHandledRef.current = false
      setLoading(false)
    }
  }, [])

  // Keep the widget's config callback pointing at the latest handleToken.
  const handleTokenRef = useRef(handleToken)
  useEffect(() => { handleTokenRef.current = handleToken }, [handleToken])

  // Read redirect/mode + resume any existing session.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const redirect = params.get('redirect')
    const mode = params.get('mode')
    if (redirect) sessionStorage.setItem('auth_redirect', redirect)
    if (mode) sessionStorage.setItem('auth_mode', mode)
    if (mode === 'listener') setIsListenerMode(true)

    sb.auth.getUser().then(({ data: { user } }) => {
      if (user && !handledRef.current) {
        handledRef.current = true
        const dest = safeRedirect(sessionStorage.getItem('auth_redirect'), mode === 'listener' ? '/dashboard' : '/browse')
        sessionStorage.removeItem('auth_redirect')
        router.replace(dest)
        return
      }
      setChecking(false)
    }).catch(() => setChecking(false))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Load MSG91's widget script once and initialise it.
  useEffect(() => {
    if (!widgetConfigured || typeof window === 'undefined') return
    if (window.initSendOTP) { setWidgetReady(true); return }

    const configuration = {
      widgetId: WIDGET_ID,
      tokenAuth: TOKEN_AUTH,
      exposeMethods: true, // drive the UI ourselves; also hides MSG91's popup
      captchaRenderId: 'msg91-captcha',
      success: (d: unknown) => { handleTokenRef.current(d) }, // token can arrive here…
      failure: (e: unknown) => { setError(errText(e) || 'Verification failed. Please try again.') },
    }

    const urls = ['https://verify.msg91.com/otp-provider.js', 'https://verify.phone91.com/otp-provider.js']
    let i = 0
    let cancelled = false
    const attempt = () => {
      if (cancelled) return
      const s = document.createElement('script')
      s.src = urls[i]
      s.async = true
      s.onload = () => {
        if (typeof window.initSendOTP === 'function') {
          window.initSendOTP(configuration)
          setWidgetReady(true)
        }
      }
      s.onerror = () => { i++; if (i < urls.length) attempt() }
      document.head.appendChild(s)
    }
    attempt()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c-1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  function requestOtp() {
    setError('')
    if (digits().length !== 10) { setError('Enter a valid 10-digit mobile number'); return }
    if (!widgetReady || typeof window.sendOtp !== 'function') {
      setError('Verification is still loading — give it a second and try again.')
      return
    }
    tokenHandledRef.current = false
    setLoading(true)
    window.sendOtp(
      '91' + digits(),
      () => { setLoading(false); setOtp(Array(OTP_LEN).fill('')); setStep('otp'); setCountdown(30) },
      (err) => { setLoading(false); setError(errText(err) || 'Could not send the code. Please try again.') },
    )
  }

  function verify() {
    setError('')
    const code = otp.join('')
    if (code.length < OTP_LEN) { setError(`Enter the full ${OTP_LEN}-digit code`); return }
    if (typeof window.verifyOtp !== 'function') { setError('Verification not ready. Please try again.'); return }
    setLoading(true)
    window.verifyOtp(
      code,
      (d: unknown) => { handleToken(d) }, // …or here. handleToken de-dupes.
      (err: unknown) => { setLoading(false); setError(errText(err) || 'Incorrect code. Please check and try again.') },
    )
  }

  function resend() {
    setError('')
    // Re-send via sendOtp (robust) rather than guessing retryOtp's channel code.
    if (typeof window.sendOtp === 'function') {
      window.sendOtp('91' + digits(), () => setCountdown(30), (err) => setError(errText(err) || 'Could not resend. Please try again.'))
    }
  }

  async function saveName() {
    setError('')
    if (name.trim().length < 2) { setError('Enter at least a first name'); return }
    setLoading(true)
    const { data: { user } } = await sb.auth.getUser()
    if (!user) { setError('Session expired. Please try again.'); setLoading(false); return }

    let saveErrMsg: string | null = null
    try {
      const res = await fetch('/api/auth/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim() }),
      })
      if (!res.ok) saveErrMsg = (await res.json().catch(() => ({}))).error || 'Could not save your profile. Please try again.'
    } catch { saveErrMsg = 'Network error. Please check your connection and try again.' }
    setLoading(false)
    if (saveErrMsg) { setError(saveErrMsg); return }

    const storedRedirect = sessionStorage.getItem('auth_redirect')
    const mode = sessionStorage.getItem('auth_mode')
    let listenerDest = '/become-listener'
    if (mode === 'listener' && !storedRedirect) {
      try {
        const { data: { user: u } } = await sb.auth.getUser()
        if (u) {
          const appRes = await sb.from('listener_applications').select('id', { count: 'exact', head: true }).eq('user_id', u.id)
          if ((appRes.count ?? 0) > 0) listenerDest = '/dashboard'
        }
      } catch { /* default to /become-listener */ }
    }
    const dest = storedRedirect ? getDestination() : mode === 'listener' ? listenerDest : getDestination()
    sessionStorage.removeItem('auth_redirect')
    sessionStorage.removeItem('auth_mode')
    sessionStorage.setItem('leanon_welcome_new', '1')
    handledRef.current = true
    window.location.assign(dest)
  }

  function handleOtpChange(i: number, val: string) {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]; next[i] = val.slice(-1); setOtp(next)
    if (val && i < OTP_LEN - 1) otpRefs.current[i+1]?.focus()
    if (next.every(d => d) && next.length === OTP_LEN) {
      setTimeout(() => { if (!loading) document.getElementById('verify-btn')?.click() }, 100)
    }
  }
  function handleOtpKey(i: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs.current[i-1]?.focus()
  }
  function handleOtpPaste(e: React.ClipboardEvent) {
    const ds = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LEN)
    if (ds.length < OTP_LEN) return
    e.preventDefault()
    setOtp(ds.split(''))
    setTimeout(() => { if (!loading) document.getElementById('verify-btn')?.click() }, 100)
  }

  if (checking) {
    return (<><style>{S}</style><div className="loading-screen">Checking your session…</div></>)
  }

  if (!widgetConfigured) {
    return (
      <>
        <style>{S}</style>
        <div className="page">
          <div className="topbar"><a href="/" className="back">←</a><span className="logo">Lean<span>On</span></span><div className="spacer" /></div>
          <div className="content">
            <div className="step-icon">🔧</div>
            <h1>Sign-in is being set up</h1>
            <p className="subtitle">Phone verification isn&apos;t configured yet. Please check back shortly.</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          {step === 'otp'
            ? <button className="back" onClick={() => { setOtp(Array(OTP_LEN).fill('')); setStep('phone'); setError('') }}>←</button>
            : step === 'phone'
              ? <a href="/" className="back">←</a>
              : <div className="spacer" />}
          <span className="logo">Lean<span>On</span></span>
          <div className="spacer" />
        </div>

        <div className="content">
          {step === 'phone' && (
            <>
              <div className="step-icon">{isListenerMode ? '🎧' : '📱'}</div>
              <h1>{isListenerMode ? 'Listener sign in' : "What's your mobile number?"}</h1>
              <p className="subtitle">
                {isListenerMode
                  ? 'Sign in to your listener dashboard. Same number you registered with.'
                  : "We'll send a one-time code to verify. No spam, ever."}
              </p>
              <label className="label">Mobile number</label>
              <div className="phone-wrap">
                <div className="phone-prefix">🇮🇳 +91</div>
                <input className="phone-input" type="tel" inputMode="numeric" maxLength={10}
                  placeholder="98765 43210" autoFocus aria-label="Mobile number"
                  value={digits()} onChange={e => setPhone(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && requestOtp()} />
              </div>
              {/* MSG91's invisible-captcha renders here when required. */}
              <div id="msg91-captcha" />
              {error && <p className="error">{error}</p>}
              <p className="tos">By continuing you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.</p>
              <button className="btn" onClick={requestOtp} disabled={loading || digits().length < 10}>
                {loading ? <span className="spin">⟳</span> : !widgetReady ? 'Loading…' : 'Send OTP →'}
              </button>
            </>
          )}

          {step === 'otp' && (
            <>
              <div className="step-icon">🔐</div>
              <h1>Enter the code</h1>
              <p className="subtitle">Sent to +91 {digits()}</p>
              <div className="otp-row" onPaste={handleOtpPaste}>
                {otp.map((d,i) => (
                  <input key={i} ref={el => { otpRefs.current[i] = el }} className="otp-box"
                    type="text" inputMode="numeric" maxLength={1} value={d} autoFocus={i===0}
                    autoComplete={i === 0 ? 'one-time-code' : 'off'}
                    aria-label={`Code digit ${i + 1}`}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => handleOtpKey(i, e)} />
                ))}
              </div>
              {error && <p className="error" style={{textAlign:'center'}}>{error}</p>}
              <button id="verify-btn" className="btn" onClick={verify} disabled={loading || otp.join('').length < OTP_LEN}>
                {loading ? <span className="spin">⟳</span> : 'Verify & continue →'}
              </button>
              <div className="resend-row">
                {countdown > 0
                  ? <span className="resend-count">Resend in {countdown}s</span>
                  : <button className="resend-btn" onClick={resend}>Resend OTP</button>}
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
