'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { showToast } from '@/lib/toast'
import { registerPushNotifications } from '@/lib/firebase-client'

// ── Global listener presence layer ───────────────────────────────────────────
//
// Solves two gaps that only /dashboard previously covered:
//
//  1. NUDGE — an approved listener who is OFFLINE gets a persistent reminder,
//     on every page, that they receive no requests until they go online. Before
//     this, a listener browsing /history or /wallet had no idea they were
//     invisible; the toggle only existed on the dashboard.
//
//  2. ALERT — an ONLINE listener is notified of an incoming request wherever
//     they are, with the same sound + accept/decline treatment the dashboard
//     gives. Previously only /dashboard and /browse subscribed, so a listener
//     reading their earnings or history simply missed the request and it
//     expired.
//
// DELIBERATELY SKIPPED PATHS: /dashboard and /browse already implement their
// own (richer) handling, so mounting here too would double-alert; /session/*
// must never be interrupted mid-conversation; /auth and /admin are out of scope.
//
// PERFORMANCE / SEO: the very first thing this does is check for a session, and
// it returns immediately for anonymous visitors — so public marketing pages do
// no extra work. It never sets is_available on its own beyond the explicit
// toggle the listener taps, keeping the availability contract intact.

const SKIP_PREFIXES = ['/dashboard', '/browse', '/session', '/auth', '/admin']

type Incoming = {
  id: string
  duration_mins: number
  session_type: string
  amount_held: number
  seeker_id: string
}

export default function ListenerPresence() {
  const pathname = usePathname() || ''
  const router = useRouter()
  const sb = createClient()

  const [userId, setUserId]       = useState<string | null>(null)
  const [isListener, setIsListener] = useState(false)
  const [available, setAvailable] = useState<boolean | null>(null)
  const [incoming, setIncoming]   = useState<Incoming | null>(null)
  const [busy, setBusy]           = useState(false)
  const [dismissedNudge, setDismissedNudge] = useState(false)

  const audioCtxRef  = useRef<AudioContext | null>(null)
  const ringTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const incomingIdRef = useRef<string | null>(null)
  const pathRef = useRef(pathname)
  useEffect(() => { pathRef.current = pathname }, [pathname])

  const skip = SKIP_PREFIXES.some(p => pathname === p || pathname.startsWith(p + '/'))

  // ── Identify the viewer once. Anonymous visitors bail immediately. ──────────
  useEffect(() => {
    let cancelled = false
    sb.auth.getUser().then(async ({ data: { user } }) => {
      if (cancelled || !user) return
      setUserId(user.id)
      const { data: lp } = await sb
        .from('listener_profiles')
        .select('is_approved, is_available, is_suspended, is_active')
        .eq('user_id', user.id)
        .maybeSingle()
      if (cancelled || !lp) return
      const active = lp.is_approved && !lp.is_suspended && lp.is_active !== false
      setIsListener(!!active)
      if (active) setAvailable(!!lp.is_available)
    }).catch(() => {})
    return () => { cancelled = true }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function ring() {
    try {
      type WK = Window & { webkitAudioContext?: typeof AudioContext }
      const Ctx = window.AudioContext ?? (window as WK).webkitAudioContext
      if (!Ctx) return
      if (!audioCtxRef.current) audioCtxRef.current = new Ctx()
      const ctx = audioCtxRef.current
      if (ctx.state === 'suspended') ctx.resume().catch(() => {})
      const now = ctx.currentTime
      for (const [freq, at] of [[660, 0], [880, 0.18], [1100, 0.36]] as [number, number][]) {
        const osc = ctx.createOscillator(); const gain = ctx.createGain()
        osc.type = 'sine'; osc.frequency.value = freq
        gain.gain.setValueAtTime(0.0001, now + at)
        gain.gain.exponentialRampToValueAtTime(0.35, now + at + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + at + 0.18)
        osc.connect(gain); gain.connect(ctx.destination)
        osc.start(now + at); osc.stop(now + at + 0.22)
      }
    } catch { /* audio unsupported — visual alert still shows */ }
    try { navigator.vibrate?.([200, 100, 200]) } catch { /* not supported */ }
  }

  const surface = useCallback((s: Incoming) => {
    if (incomingIdRef.current) return          // one at a time
    incomingIdRef.current = s.id
    setIncoming(s)
    ring()
    if (ringTimerRef.current) clearInterval(ringTimerRef.current)
    ringTimerRef.current = setInterval(ring, 3000)
    try {
      if ('Notification' in window && Notification.permission === 'granted' && document.visibilityState !== 'visible') {
        new Notification('New session request 🔔', {
          body: `${s.duration_mins}-min ${s.session_type} session — respond now`,
          tag: 'leanon-incoming-request', icon: '/logo.png',
        })
      }
    } catch { /* some Android WebViews throw */ }
  }, [])

  const clearIncoming = useCallback(() => {
    incomingIdRef.current = null
    setIncoming(null)
    if (ringTimerRef.current) { clearInterval(ringTimerRef.current); ringTimerRef.current = null }
  }, [])

  // ── Subscribe + catch-up while online. Mirrors the dashboard's approach:
  //    realtime for immediacy, plus a poll so a dropped socket cannot lose a
  //    request (the failure that made listeners miss bookings before).
  useEffect(() => {
    if (skip || !userId || !isListener || available !== true) return
    let cancelled = false

    const check = async () => {
      if (cancelled || incomingIdRef.current) return
      const { data } = await sb
        .from('sessions')
        .select('id, duration_mins, session_type, amount_held, seeker_id, created_at, status')
        .eq('listener_id', userId)
        .eq('status', 'pending')
        .order('created_at', { ascending: false })
        .limit(1)
      const row = data?.[0]
      if (!row || cancelled) return
      const ageSecs = Math.floor((Date.now() - new Date(row.created_at as string).getTime()) / 1000)
      if (5 * 60 - ageSecs <= 5) return       // about to expire — don't surface
      surface(row as unknown as Incoming)
    }

    const ch = sb.channel(`presence-incoming-${userId}`)
      .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'sessions',
        filter: `listener_id=eq.${userId}`,
      }, (payload) => {
        const s = payload.new as Incoming & { status?: string }
        if (s.status && s.status !== 'pending') return
        surface(s)
      })
      .subscribe()

    check()
    const iv = setInterval(check, 20_000)
    const onVis = () => { if (document.visibilityState === 'visible') check() }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      cancelled = true
      clearInterval(iv)
      document.removeEventListener('visibilitychange', onVis)
      sb.removeChannel(ch)
      if (ringTimerRef.current) clearInterval(ringTimerRef.current)
    }
  }, [skip, userId, isListener, available, surface]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Global heartbeat — keeps presence alive from ANY page, not just /dashboard.
  //
  // GAP THIS CLOSES: only app/dashboard/page.tsx ever sent the "I'm still here"
  // ping (POST /api/presence, heartbeat:true, every 60s). A listener who went
  // online and then navigated to /history, /wallet, /profile — or simply
  // reopened the app onto any page other than the dashboard — sent NO
  // heartbeat at all. They were genuinely present, but invisible to the
  // system: the next staleness sweep (any /browse load, once 15 minutes had
  // passed since their LAST real heartbeat) would silently mark them offline
  // with no warning, even though they never actually left.
  //
  // DOES NOT TOUCH THE LOCKED DASHBOARD LOGIC. This is a fully independent
  // effect living in this separate, unlocked component. Both this and the
  // dashboard's own heartbeat simply write "now" to the same timestamp column
  // — if the listener happens to be on /dashboard, both fire and that is
  // harmless (idempotent; last write wins, same value either way).
  //
  // Skips /session/* only, because that page already refreshes
  // last_heartbeat_at through a separate call (app/api/sessions/heartbeat) —
  // sending it again here would be pure duplication with no benefit. The skip
  // check reads a ref (not the `pathname` closure) so navigating around does
  // NOT tear down and restart this effect — it just keeps ticking, and each
  // tick decides fresh whether the CURRENT page is a session page.
  //
  // SECURITY-RELEVANT — unchanged: this can only ever REFRESH an existing
  // "online". If the database already says offline (available === false,
  // e.g. the listener was away long enough to be swept), this effect does
  // nothing. Going back online after a real timeout still requires the
  // explicit "Go online" tap — a heartbeat can never resurrect a stale
  // listener on its own.
  useEffect(() => {
    if (!isListener || available !== true) return

    const isSessionPage = () => pathRef.current === '/session' || pathRef.current.startsWith('/session/')

    const ping = () => {
      if (isSessionPage()) return
      fetch('/api/presence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ heartbeat: true }),
      }).catch(() => {})
    }

    ping() // immediate — covers "just reopened the app" without waiting up to 60s
    const iv = setInterval(ping, 60_000)

    // Mobile browsers throttle timers while backgrounded — an immediate ping
    // on foregrounding avoids waiting for the next 60s tick to notice.
    function onVisible() { if (document.visibilityState === 'visible') ping() }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      clearInterval(iv)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [isListener, available])

  // Silently keep the push token fresh for a listener who is ALREADY online
  // and permission was already granted in an earlier session (e.g. they
  // reloaded, or opened LeanOn on a new device). No prompt is shown —
  // Notification.permission is only 'granted' if the browser already decided
  // that. registerPushNotifications() itself is idempotent and skips the
  // network call when the token is unchanged.
  useEffect(() => {
    if (skip || !isListener || available !== true) return
    if (typeof window === 'undefined' || !('Notification' in window)) return
    if (Notification.permission !== 'granted') return
    registerPushNotifications().catch(() => {})
  }, [skip, isListener, available])

  async function goOnline() {
    setBusy(true)
    // Unlock audio on this user gesture so the incoming-request chime can play
    // later (browsers block sound until the page has been interacted with),
    // and register for push so a request still reaches this listener with no
    // LeanOn tab open at all — the in-tab chime alone cannot do that.
    try {
      type WK = Window & { webkitAudioContext?: typeof AudioContext }
      const Ctx = window.AudioContext ?? (window as WK).webkitAudioContext
      if (Ctx) { audioCtxRef.current ??= new Ctx(); audioCtxRef.current.resume().catch(() => {}) }
    } catch { /* non-fatal */ }
    registerPushNotifications().catch(() => {})
    try {
      const res = await fetch('/api/listener/availability', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ available: true }),
      })
      if (res.ok) { setAvailable(true); showToast("You're online — seekers can reach you now.", 'success') }
      else {
        const b = await res.json().catch(() => ({}))
        showToast(b.message || b.error || 'Could not go online. Please try from your dashboard.', 'error')
      }
    } catch {
      showToast('Network error — could not go online.', 'error')
    } finally { setBusy(false) }
  }

  if (skip || !isListener) return null

  // ── Incoming request (takes precedence over the nudge) ─────────────────────
  if (incoming) {
    return (
      <div style={{ position:'fixed', left:0, right:0, bottom:0, zIndex:300, display:'flex', justifyContent:'center', padding:'0 12px 12px', fontFamily:"'Nunito',sans-serif" }}>
        <div style={{ width:'100%', maxWidth:480, background:'#0F4867', color:'white', borderRadius:18, padding:'16px 18px', boxShadow:'0 8px 30px rgba(0,0,0,.3)' }}>
          <div style={{ fontSize:15, fontWeight:900, marginBottom:2 }}>🔔 New session request</div>
          <div style={{ fontSize:12.5, opacity:.85, marginBottom:12 }}>
            {incoming.duration_mins} min · {incoming.session_type}
            {incoming.amount_held ? ` · ₹${incoming.amount_held}` : ' · free trial'}
          </div>
          <div style={{ display:'flex', gap:8 }}>
            <button
              disabled={busy}
              onClick={async () => {
                const s = incoming; setBusy(true)
                try {
                  const res = await fetch(`/api/sessions/${s.id}/accept`, { method: 'POST' })
                  if (!res.ok) {
                    const b = await res.json().catch(() => ({}))
                    showToast(b.message || b.error || 'Could not accept — it may have expired.', 'error')
                    clearIncoming(); return
                  }
                  clearIncoming()
                  router.push(`/session/${s.id}?name=You&duration=${s.duration_mins}&type=${s.session_type ?? 'text'}`)
                } catch { showToast('Network error — could not accept.', 'error') }
                finally { setBusy(false) }
              }}
              style={{ flex:1, padding:'12px', background:'#34C759', color:'white', border:'none', borderRadius:12, fontFamily:'inherit', fontWeight:800, fontSize:14, cursor:'pointer' }}
            >
              {busy ? '…' : '✅ Accept'}
            </button>
            <button
              disabled={busy}
              onClick={async () => {
                const s = incoming; clearIncoming()
                // Decline refunds the seeker immediately instead of making them
                // wait out the full request window.
                try { await fetch(`/api/sessions/${s.id}/decline`, { method: 'POST' }) } catch { /* ignore */ }
              }}
              style={{ padding:'12px 18px', background:'rgba(255,255,255,.12)', color:'white', border:'1.5px solid rgba(255,255,255,.3)', borderRadius:12, fontFamily:'inherit', fontWeight:800, fontSize:14, cursor:'pointer' }}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Offline nudge ──────────────────────────────────────────────────────────
  if (available === false && !dismissedNudge) {
    return (
      <div style={{ position:'fixed', left:0, right:0, bottom:62, zIndex:120, display:'flex', justifyContent:'center', padding:'0 12px', fontFamily:"'Nunito',sans-serif", pointerEvents:'none' }}>
        <div style={{ width:'100%', maxWidth:480, background:'#FFF4E5', border:'1.5px solid #FFD09B', borderRadius:14, padding:'10px 12px', display:'flex', alignItems:'center', gap:10, boxShadow:'0 4px 18px rgba(15,72,103,.12)', pointerEvents:'auto' }}>
          <div style={{ flex:1, fontSize:12.5, fontWeight:700, color:'#7A4A00', lineHeight:1.45 }}>
            You&apos;re offline — seekers can&apos;t reach you. Go online to start receiving requests.
          </div>
          <button
            onClick={goOnline}
            disabled={busy}
            style={{ background:'#FF9933', color:'white', border:'none', borderRadius:50, padding:'8px 14px', fontFamily:'inherit', fontWeight:800, fontSize:12.5, cursor:'pointer', whiteSpace:'nowrap' }}
          >
            {busy ? '…' : 'Go online'}
          </button>
          <button
            onClick={() => setDismissedNudge(true)}
            aria-label="Dismiss"
            style={{ background:'none', border:'none', color:'#7A4A00', fontSize:16, fontWeight:900, cursor:'pointer', lineHeight:1, padding:'0 2px' }}
          >
            ✕
          </button>
        </div>
      </div>
    )
  }

  return null
}
