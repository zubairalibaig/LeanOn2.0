'use client'
import { useEffect, useRef, useState } from 'react'

// ── Cloudflare Turnstile CAPTCHA ─────────────────────────────────────────────
// Blocks bots from triggering SMS OTP sends (which cost real money on Twilio).
//
// PERFORMANCE / SEO: the Turnstile script is loaded LAZILY — only when this
// component actually mounts. Pages should mount it only at the moment a user is
// about to request an OTP (e.g. once a full phone number is typed), so search
// crawlers and casual visitors never download it and Core Web Vitals on public
// SEO pages are untouched.
//
// GRACEFUL DEGRADATION: when NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set, this
// renders nothing and reports "not enabled" — the OTP flow keeps working exactly
// as before. That means shipping this code is safe before the dashboard is
// configured; protection switches on the moment the env var + Supabase secret
// are in place.

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

// True when CAPTCHA is configured for this deployment. Pages use this to decide
// whether a token is required before calling signInWithOtp.
export const turnstileEnabled = Boolean(SITE_KEY)

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
}

declare global {
  interface Window { turnstile?: TurnstileApi }
}

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

// Module-level promise so the script is fetched at most once per page load even
// if several widgets mount.
let scriptPromise: Promise<void> | null = null

function loadTurnstileScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
    if (existing) { existing.addEventListener('load', () => resolve()); return }
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => { scriptPromise = null; reject(new Error('Turnstile failed to load')) }
    document.head.appendChild(s)
  })
  return scriptPromise
}

export default function TurnstileWidget({
  onVerify,
  resetSignal = 0,
  action,
}: {
  /** Called with a fresh token when the challenge is solved, and with null when it expires/errors. */
  onVerify: (token: string | null) => void
  /** Increment this to force a fresh token (Turnstile tokens are single-use). */
  resetSignal?: number
  /** Optional label shown in Cloudflare analytics, e.g. 'signin-otp'. */
  action?: string
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef  = useRef<string | null>(null)
  // Keep the latest callback in a ref so re-renders never re-create the widget.
  const onVerifyRef  = useRef(onVerify)
  onVerifyRef.current = onVerify
  const [failed, setFailed] = useState(false)

  // Mount the widget exactly once.
  useEffect(() => {
    if (!SITE_KEY) return
    let cancelled = false

    // Hard timeout. Ad blockers and privacy extensions (very common in India)
    // often BLACKHOLE challenges.cloudflare.com rather than failing the request,
    // so neither onload nor onerror ever fires. Without this the promise never
    // settles, `failed` stays false, and the user is left staring at a disabled
    // button with no explanation — a silent lockout on the sign-in path.
    const timeoutId = setTimeout(() => {
      if (!cancelled && !widgetIdRef.current) setFailed(true)
    }, 8000)

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return
        if (widgetIdRef.current) return // already rendered
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          action,
          callback: (token: string) => { setFailed(false); onVerifyRef.current(token) },
          'expired-callback': () => onVerifyRef.current(null),
          'error-callback': () => { onVerifyRef.current(null); setFailed(true) },
          theme: 'light',
          size: 'flexible',
        })
        clearTimeout(timeoutId)
      })
      .catch(() => { if (!cancelled) setFailed(true) })

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
      if (widgetIdRef.current && window.turnstile) {
        try { window.turnstile.remove(widgetIdRef.current) } catch { /* already gone */ }
        widgetIdRef.current = null
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Reset on demand — a Turnstile token can only be used once, so every OTP
  // send (including "Resend") needs a brand-new one.
  useEffect(() => {
    if (resetSignal === 0) return
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current)
        onVerifyRef.current(null)
      } catch { /* widget not ready yet — nothing to reset */ }
    }
  }, [resetSignal])

  if (!SITE_KEY) return null

  return (
    <div style={{ margin: '12px 0' }}>
      <div ref={containerRef} />
      {failed && (
        // Name the likely cause. "Refresh the page" alone is useless advice when
        // the real reason is a blocker, which is the most common case.
        <p style={{ fontSize: 12, color: '#E53935', fontWeight: 700, marginTop: 6, lineHeight: 1.6 }}>
          Couldn&apos;t load the security check. This is usually an ad blocker or
          privacy extension blocking <span style={{ whiteSpace: 'nowrap' }}>challenges.cloudflare.com</span>.
          Please pause it for this site (or try a different browser) and reload.
        </p>
      )}
    </div>
  )
}
