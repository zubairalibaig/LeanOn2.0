'use client'

// /talk — "Talk now": the match-first way in, for people who don't want to pick
// from a catalogue. Two taps (what's on your mind, text or voice), phone login
// only after that, then LeanOn connects them to the best listener online now
// and moves on to the next one automatically if nobody answers in
// TALK_TRY_SECS. /browse is unchanged and stays the way to choose someone.
//
// Booking, pricing, free trial, wallet and suspension rules all stay in
// POST /api/sessions; /api/talk/candidates only decides who to try, in order.

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { createClient } from '@/lib/supabase'
import { REQUEST_RESPONSE_WINDOW_SECS, FREE_SESSION_MINS } from '@/lib/constants'
import { TALK_TOPICS, TALK_TRY_SECS, TALK_MAX_TRIES, TALK_MAX_WAIT_SECS, talkTopic, type TalkTopicId } from '@/lib/talk-match'

type Mode = 'text' | 'voice'
type Candidate = { listenerId: string; name: string; priceInr: number; priceLabel: string }
type Phase =
  | { k: 'topic' }
  | { k: 'finding' }
  | { k: 'confirm'; priceLabel: string; durationMins: number }
  | { k: 'waiting'; sessionId: string; name: string; tryNo: number; free: boolean; priceLabel: string }
  | { k: 'none' }
  | { k: 'wallet'; need: number; priceLabel: string }
  | { k: 'error'; message: string }

const CHOICE_KEY = 'leanon_talk_choice'

// A fresh id per search (admin metrics only — never trusted for anything else).
function newSearchId(): string {
  try { if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID() } catch { /* fall through */ }
  const h = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('')
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`
}

// Privacy-safe funnel events to Google Analytics (if configured): only the
// topic category, mode and outcome — never anything the person typed, never
// listener ids. GA already records the campaign (utm_*) of the visit.
function track(event: string, params: Record<string, string | number> = {}) {
  try { (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', event, params) } catch { /* ignore */ }
}

// Entry point (home, float, footer, seo…), kept through the login round trip
// so Analytics can tie a match back to where the visitor came from.
const SRC_KEY = 'leanon_talk_src'
function readSrc(): string {
  try { return sessionStorage.getItem(SRC_KEY) || 'direct' } catch { return 'direct' }
}

function readChoice(): { topic: TalkTopicId; mode: Mode } | null {
  try {
    const v = JSON.parse(sessionStorage.getItem(CHOICE_KEY) || 'null')
    if (v && talkTopic(v.topic) && (v.mode === 'text' || v.mode === 'voice')) return v
  } catch { /* storage blocked */ }
  return null
}
function saveChoice(c: { topic: TalkTopicId; mode: Mode }) {
  try { sessionStorage.setItem(CHOICE_KEY, JSON.stringify(c)) } catch { /* ignore */ }
}

function TalkInner() {
  const router = useRouter()
  const params = useSearchParams()
  const [phase, setPhase] = useState<Phase>({ k: 'topic' })
  const [topic, setTopic] = useState<TalkTopicId | null>(null)
  // Text or voice: chosen on the same screen as the topic (text preselected,
  // or what they picked last time), so one tap on a topic connects.
  const [mode, setMode] = useState<Mode>('text')
  useEffect(() => { const c = readChoice(); if (c) setMode(c.mode) }, [])
  const [onlineCount, setOnlineCount] = useState<number | null>(null)
  const [secsLeft, setSecsLeft] = useState(TALK_TRY_SECS)
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null)

  // Matching state lives in refs: the poll/timer callbacks must see the latest.
  const tried = useRef<string[]>([])
  const queue = useRef<Candidate[]>([])
  const meta = useRef<{ free: boolean; durationMins: number }>({ free: true, durationMins: 5 })
  const choice = useRef<{ topic: TalkTopicId; mode: Mode } | null>(null)
  // lastSwitchTry: when we last looked for someone to switch to (at most every
  // 15s, so a quiet evening doesn't hammer the API); timedOut: timeout sent once.
  const current = useRef<{ sessionId: string; startedAt: number; lastSwitchTry: number; timedOut: boolean } | null>(null)
  const busy = useRef(false)
  const alive = useRef(true)
  // gen: bumped by Cancel / a new start, so an in-flight booking from an older
  // run can tell it's stale and withdraw its request. polling: no overlapping
  // status checks. handedOff: the seeker went on to /session — keep the request.
  const gen = useRef(0)
  const polling = useRef(false)
  const handedOff = useRef(false)
  const starting = useRef(false)
  const runStartedAt = useRef(0)          // when this search began (TALK_MAX_WAIT_SECS cap)
  const searchId = useRef('')             // groups this search's requests in admin metrics
  const walletBalance = useRef(0)          // from the last candidate fetch
  const withdraw = (sessionId: string) =>
    fetch(`/api/sessions/${sessionId}/decline`, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: '{}' }).catch(() => {})

  // Leaving /talk while a request is out (tab closed, Back) withdraws it, so a
  // listener isn't alerted for someone who's gone. Not when handing off to the
  // session page.
  // Where the visitor came from (home hero, floating button, footer, content
  // pages…) — set on every link into /talk, so Analytics can compare entry points.
  useEffect(() => {
    // Back from login / the wallet (?go=1) is the same visit continuing — count
    // it as a resume, not a second view, and keep the original entry point.
    if (params.get('go') === '1') { track('talk_resume', { src: readSrc() }); return }
    const src = (params.get('src') || 'direct').replace(/[^a-z0-9_-]/gi, '').slice(0, 20) || 'direct'
    try { sessionStorage.setItem(SRC_KEY, src) } catch { /* ignore */ }
    track('talk_view', { src })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    alive.current = true
    const leave = () => {
      const cur = current.current
      if (cur && !handedOff.current) { current.current = null; withdraw(cur.sessionId) }
    }
    window.addEventListener('pagehide', leave)
    return () => { alive.current = false; window.removeEventListener('pagehide', leave); leave() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goToSession = useCallback((id: string) => {
    handedOff.current = true
    track('talk_matched', { src: readSrc(), try_no: tried.current.length, wait_secs: Math.round((Date.now() - runStartedAt.current) / 1000), free: meta.current.free ? 1 : 0 })
    try { sessionStorage.removeItem(CHOICE_KEY) } catch { /* ignore */ }
    router.replace(`/session/${id}`)
  }, [router])

  // How many listeners are free right now (online and not already in a
  // session) — shown before login, from the same public list /browse uses.
  useEffect(() => {
    fetch('/api/listeners', { cache: 'no-store' }).then(r => (r.ok ? r.json() : null)).then(d => {
      const list = ((d as { listeners?: { is_available?: boolean; is_in_session?: boolean }[] } | null)?.listeners ?? [])
      if (alive.current) setOnlineCount(list.filter(l => l.is_available && !l.is_in_session).length)
    }).catch(() => {})
    // Local check only (no network): decides whether to mention the phone code.
    createClient().auth.getSession().then(({ data: { session } }) => { if (alive.current) setLoggedIn(!!session) }).catch(() => {})
  }, [])

  // Fetch who to try next. No screen changes here — callers decide, because
  // during a switch the seeker's money is still held by the live request.
  const fetchCandidates = useCallback(async (): Promise<
    { ok: true; walletBalance: number } | { ok: false; status: number }
  > => {
    const c = choice.current!
    const qs = new URLSearchParams({ topic: c.topic, type: c.mode, exclude: tried.current.join(','), search: searchId.current })
    const res = await fetch(`/api/talk/candidates?${qs}`, { cache: 'no-store' }).catch(() => null)
    if (!res || !res.ok) return { ok: false, status: res?.status ?? 0 }
    const d = await res.json() as { free: boolean; durationMins: number; walletBalance?: number; candidates: Candidate[] }
    meta.current = { free: d.free, durationMins: d.durationMins }
    queue.current = d.candidates
    walletBalance.current = d.walletBalance ?? 0
    return { ok: true, walletBalance: d.walletBalance ?? 0 }
  }, [])

  // First load (nothing held yet): handles login, errors and an empty wallet.
  const loadCandidates = useCallback(async (): Promise<boolean> => {
    const r = await fetchCandidates()
    if (!r.ok) {
      if (r.status === 401) { router.push('/auth?redirect=' + encodeURIComponent('/talk?go=1')); return false }
      setPhase({ k: 'error', message: 'Could not reach LeanOn. Check your connection and try again.' })
      return false
    }
    if (!meta.current.free && queue.current.length > 0 && r.walletBalance < queue.current[0].priceInr) {
      track('talk_wallet_short')
      setPhase({ k: 'wallet', need: queue.current[0].priceInr - r.walletBalance, priceLabel: queue.current[0].priceLabel })
      return false
    }
    return true
  }, [fetchCandidates, router])

  // Send a request to the next listener in the queue. When `replace` is set,
  // the seeker's current pending request is swapped for the new one (refunded
  // and cancelled — as 'talk_unanswered', a missed request, once that listener
  // had their full turn; see /api/sessions).
  const tryNext = useCallback(async (replace?: string): Promise<void> => {
    if (busy.current || !alive.current) return
    busy.current = true
    const myGen = gen.current
    try {
      for (;;) {
        if (tried.current.length >= TALK_MAX_TRIES) { if (!replace) { track("talk_no_match"); setPhase({ k: "none" }) } return }
        let next = queue.current.shift()
        if (!next) {
          if (replace) { if (!(await fetchCandidates()).ok) return }
          else if (!(await loadCandidates())) return
          next = queue.current.shift()
          if (!next) { if (!replace) { track('talk_no_match'); setPhase({ k: 'none' }) } return }
        }
        tried.current.push(next.listenerId)
        const res = await fetch('/api/sessions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            listenerId: next.listenerId,
            durationMins: meta.current.durationMins,
            sessionType: choice.current!.mode,
            via: 'talk',
            talkSearchId: searchId.current,
            ...(replace ? { replacesSessionId: replace } : {}),
          }),
        }).catch(() => null)
        const d = res ? await res.json().catch(() => ({})) : {}
        if (gen.current !== myGen || !alive.current) {
          // Cancelled (or left) while this booking was in flight: withdraw it.
          if (res?.ok && d.sessionId) withdraw(d.sessionId)
          return
        }
        if (res?.ok && d.sessionId) {
          current.current = { sessionId: d.sessionId, startedAt: Date.now(), lastSwitchTry: 0, timedOut: false }
          setSecsLeft(TALK_TRY_SECS)
          track('talk_request', { try_no: tried.current.length })
          setPhase({ k: 'waiting', sessionId: d.sessionId, name: next.name, tryNo: tried.current.length, free: meta.current.free, priceLabel: next.priceLabel })
          return
        }
        const err = d.error as string | undefined
        if (err === 'listener_busy' || err === 'listener_offline' || err === 'listener_unavailable' || err === 'same_listener') continue
        if (err === 'original_not_pending') { tried.current.pop(); return }   // the current listener just answered — the poll will see it
        if (err === 'already_in_session' && d.sessionId) { goToSession(d.sessionId); return }
        if (res?.status === 429) {
          tried.current.pop()
          if (replace) return                                 // keep the live request; the poll retries later
          setPhase({ k: 'error', message: 'Too many tries in a minute. Please wait a moment and tap Try again.' })
          return
        }
        if (err === 'free_trial_used') { queue.current = []; continue }   // reload as a paid match
        if (err === 'insufficient_balance') {
          if (replace) return                                 // keep the live request running
          // d.required is the full price the server would hold, not the shortfall.
          track('talk_wallet_short')
          setPhase({ k: 'wallet', need: Math.max(0, (Number(d.required) || 0) - walletBalance.current), priceLabel: next.priceLabel })
          return
        }
        if (res?.status === 401) { router.push('/auth?redirect=' + encodeURIComponent('/talk?go=1')); return }
        setPhase({ k: 'error', message: d.message || d.error || 'Something went wrong. Please try again.' })
        return
      }
    } finally {
      busy.current = false
    }
  }, [fetchCandidates, goToSession, loadCandidates, router])

  const start = useCallback(async (c: { topic: TalkTopicId; mode: Mode }) => {
    if (starting.current || busy.current) return   // double tap
    starting.current = true
    try { await startInner(c) } finally { starting.current = false }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadCandidates, router, tryNext])

  const startInner = async (c: { topic: TalkTopicId; mode: Mode }) => {
    gen.current++
    choice.current = c
    saveChoice(c)
    track('talk_start', { src: readSrc(), topic: c.topic, mode: c.mode })
    const sb = createClient()
    const { data: { session } } = await sb.auth.getSession()
    if (!session) { track('talk_login_required'); router.push('/auth?redirect=' + encodeURIComponent('/talk?go=1')); return }
    const { data: { user }, error } = await sb.auth.getUser()
    if (error && !user) {
      if (error.status === 401 || error.status === 403) { router.push('/auth?redirect=' + encodeURIComponent('/talk?go=1')); return }
      setPhase({ k: 'error', message: 'Could not check your login. Please try again.' })
      return
    }
    tried.current = []
    queue.current = []
    searchId.current = newSearchId()
    setPhase({ k: 'finding' })
    if (!(await loadCandidates())) return
    if (!meta.current.free && queue.current.length > 0) {
      // Paid: show the price and let them confirm before anyone is alerted.
      // Prices differ slightly by listener; show the most it can be.
      const top = queue.current.reduce((a, b) => (b.priceInr > a.priceInr ? b : a))
      setPhase({ k: 'confirm', priceLabel: top.priceLabel, durationMins: meta.current.durationMins })
      return
    }
    runStartedAt.current = Date.now()
    await tryNext()
  }

  function confirmPaid() {
    if (busy.current) return
    runStartedAt.current = Date.now()
    setPhase({ k: 'finding' })
    tryNext()
  }

  // Back from login (or the wallet) with the two answers saved: go straight on.
  useEffect(() => {
    if (params.get('go') !== '1') return
    // Consume it, so Back / a reopened tab doesn't start matching again.
    router.replace('/talk')
    const c = readChoice()
    if (c) { setTopic(c.topic); start(c) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // While a request is out: watch it, count down, move on when time is up.
  useEffect(() => {
    if (phase.k !== 'waiting') return
    const sb = createClient()
    const iv = setInterval(async () => {
      if (polling.current || busy.current) return
      const cur = current.current
      if (!cur) { tryNext(); return }   // a request ended while a switch was in flight
      polling.current = true
      try {
      const { data } = await sb.from('sessions').select('status, cancel_reason').eq('id', cur.sessionId).maybeSingle()
      if (!alive.current || current.current?.sessionId !== cur.sessionId) return
      const st = (data as { status?: string } | null)?.status
      if (st === 'active') { goToSession(cur.sessionId); return }
      if (st === 'cancelled' || st === 'completed') { current.current = null; tryNext(); return }
      const elapsed = (Date.now() - cur.startedAt) / 1000
      setSecsLeft(Math.max(0, Math.ceil(TALK_TRY_SECS - elapsed)))
      if (Date.now() - runStartedAt.current >= TALK_MAX_WAIT_SECS * 1000) {
        // Searched long enough: withdraw the last request and offer the options.
        current.current = null
        gen.current++
        withdraw(cur.sessionId)
        track('talk_no_match')
        setPhase({ k: 'none' })
        return
      }
      // Don't alert a new listener in the last 15s of the search — they'd be
      // withdrawn before they could realistically answer.
      const searchLeftMs = TALK_MAX_WAIT_SECS * 1000 - (Date.now() - runStartedAt.current)
      if (elapsed >= TALK_TRY_SECS && tried.current.length < TALK_MAX_TRIES && Date.now() - cur.lastSwitchTry > 15_000 && searchLeftMs > 15_000) {
        // Next listener, swapping out this request. If nobody else is free,
        // tryNext leaves this request running (the listener still has time).
        cur.lastSwitchTry = Date.now()
        tryNext(cur.sessionId)
      }
      if (elapsed >= REQUEST_RESPONSE_WINDOW_SECS + 3 && !cur.timedOut) {
        // Last listener ran out of time: record it the usual way (the next poll
        // sees 'cancelled' and tries someone new, or shows the options).
        cur.timedOut = true
        await fetch(`/api/sessions/${cur.sessionId}/decline`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reason: 'timeout' }),
        }).catch(() => {})
      }
      } finally { polling.current = false }
    }, 2500)
    return () => clearInterval(iv)
  }, [phase.k, goToSession, tryNext])

  async function cancelRequest() {
    track('talk_cancel', { try_no: tried.current.length })
    gen.current++                      // an in-flight switch withdraws its own request
    const cur = current.current
    current.current = null
    setPhase({ k: 'topic' })
    if (cur) await withdraw(cur.sessionId)
  }

  // The server-rendered description below the page (app/talk/layout.tsx) is
  // for the topic / mode screens; hide it while matching so it can't distract.
  useEffect(() => {
    const busy = phase.k !== 'topic'
    document.body.classList.toggle('talk-busy', busy)
    return () => document.body.classList.remove('talk-busy')
  }, [phase.k])

  const t = talkTopic(topic)

  return (
    <>
      <style>{`
        .tk{max-width:520px;margin:0 auto;padding:28px 18px 120px;font-family:'Nunito',system-ui,sans-serif;color:#27394A;}
        .tk h1{font-size:25px;font-weight:900;color:#0F4867;line-height:1.25;margin:6px 0 8px;}
        .tk .sub{font-size:14.5px;color:#5A7A8A;line-height:1.55;margin-bottom:18px;}
        .tk .chips{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        .tk .chip{display:flex;align-items:center;gap:10px;text-align:left;background:#fff;border:2px solid #D5EEF6;border-radius:16px;padding:14px 12px;font:inherit;font-weight:800;font-size:14.5px;color:#0F4867;cursor:pointer;min-height:64px;}
        .tk .chip:hover,.tk .chip:focus-visible{border-color:#1A8FA0;background:#F2FAFC;outline:none;}
        .tk .chip .e{font-size:22px;line-height:1;}
        .tk .chips .chip:last-child:nth-child(odd){grid-column:1/-1;}
        .tk .seg{display:grid;grid-template-columns:1fr 1fr;background:#EAF5F8;border-radius:14px;padding:4px;margin-bottom:14px;}
        .tk .seg button{border:none;background:none;border-radius:11px;padding:10px 8px;font:inherit;font-weight:800;font-size:14.5px;color:#5A7A8A;cursor:pointer;}
        .tk .seg button.on{background:#fff;color:#0F4867;box-shadow:0 1px 4px rgba(15,72,103,.15);}
        .tk .seg button:focus-visible{outline:2px solid #1A8FA0;}
        .tk .primary{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;background:#1A8FA0;color:#fff;border:none;border-radius:16px;padding:17px 16px;font:inherit;font-weight:900;font-size:17px;cursor:pointer;box-shadow:0 4px 14px rgba(26,143,160,.3);}
        .tk .primary:hover,.tk .primary:focus-visible{background:#167C8B;outline:none;}
        .tk .or{text-align:center;font-size:13px;font-weight:700;color:#7A8A96;margin:14px 0 10px;}
        .tk .back{background:none;border:none;color:#1A8FA0;font:inherit;font-weight:800;font-size:13.5px;cursor:pointer;padding:0;margin-bottom:6px;}
        .tk .card{background:#fff;border:2px solid #D5EEF6;border-radius:20px;padding:26px 20px;text-align:center;}
        .tk .pulse{width:72px;height:72px;border-radius:50%;background:#E6F6F8;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:32px;animation:tkp 1.6s ease-in-out infinite;}
        @keyframes tkp{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(26,143,160,.35)}50%{transform:scale(1.05);box-shadow:0 0 0 14px rgba(26,143,160,0)}}
        @media (prefers-reduced-motion: reduce){.tk .pulse{animation:none}}
        .tk .btn{display:inline-block;background:#1A8FA0;color:#fff;border:none;border-radius:50px;padding:12px 22px;font:inherit;font-weight:900;font-size:15px;cursor:pointer;text-decoration:none;margin-top:14px;}
        .tk .btn.ghost{background:#fff;color:#1A8FA0;border:2px solid #1A8FA0;}
        .tk .link{display:inline-block;margin-top:14px;color:#1A8FA0;font-weight:800;font-size:13.5px;}
        .tk .fine{font-size:12.5px;color:#7A8A96;line-height:1.55;margin-top:18px;text-align:center;}
        .tk .live{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:800;color:#276749;background:#E6F6EC;border-radius:50px;padding:5px 12px;margin-bottom:12px;}
        .tk .live i{width:8px;height:8px;border-radius:50%;background:#38A169;display:inline-block;}
      `}</style>
      <div className="tk">
        {phase.k === 'topic' && (
          <>
            {/* Same-size placeholder until the count loads, so the page doesn't jump (CLS). */}
            {onlineCount === null && <div className="live" aria-hidden style={{ visibility: 'hidden' }}><i />0 listeners online now</div>}
            {onlineCount !== null && onlineCount > 0 && <div className="live"><i />{onlineCount} listener{onlineCount === 1 ? '' : 's'} online now</div>}
            {onlineCount === 0 && <div className="live" style={{ background: '#FFF8EC', color: '#9A5B00' }}>Nobody is online this minute — tap anyway to try, or see all listeners</div>}
            <h1>Talk to someone now</h1>
            <p className="sub">A real person, one to one and private, when a listener is online. New here? Your first {FREE_SESSION_MINS} minutes are free.</p>
            <div className="seg" role="radiogroup" aria-label="How would you like to talk?">
              {(['text', 'voice'] as const).map(m => (
                <button key={m} type="button" role="radio" aria-checked={mode === m} className={mode === m ? 'on' : ''} onClick={() => setMode(m)}>
                  <span aria-hidden>{m === 'text' ? '💬' : '📞'}</span> {m === 'text' ? 'Text chat' : 'Voice call'}
                </button>
              ))}
            </div>
            {(() => {
              const go = (id: TalkTopicId) => { setTopic(id); start({ topic: id, mode }) }
              const main = TALK_TOPICS.find(o => o.id === 'talk')!
              return (
                <>
                  <button className="primary" onClick={() => go(main.id)}>
                    <span aria-hidden>{main.emoji}</span> I just need to talk
                  </button>
                  <div className="or">or tap what&apos;s on your mind</div>
                  <div className="chips">
                    {TALK_TOPICS.filter(o => o.id !== 'talk').map(o => (
                      <button key={o.id} className="chip" onClick={() => go(o.id)}>
                        <span className="e" aria-hidden>{o.emoji}</span>{o.label}
                      </button>
                    ))}
                  </div>
                </>
              )
            })()}
            {loggedIn === false && <p className="fine" style={{ marginTop: 12 }}>You&apos;ll confirm your phone with a one-time code. Listeners never see your number.</p>}
          </>
        )}

        {phase.k === 'finding' && (
          <div className="card" aria-live="polite">
            <div className="pulse" aria-hidden>🤝</div>
            <h1 style={{ fontSize: 21 }}>Finding someone for you…</h1>
            <p className="sub" style={{ marginBottom: 0 }}>Looking for a listener who&apos;s online now{t ? `, starting with people who talk about ${t.label.toLowerCase()}` : ''}.</p>
          </div>
        )}

        {phase.k === 'waiting' && (
          <div className="card" aria-live="polite">
            <div className="pulse" aria-hidden>🔔</div>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: '#7A8A96', marginBottom: 4 }}>Listener {phase.tryNo} of up to {TALK_MAX_TRIES}</div>
            <h1 style={{ fontSize: 21 }}>Asking {phase.name}…</h1>
            <p className="sub" style={{ marginBottom: 6 }}>
              {secsLeft > 0
                ? <>{phase.name} has been alerted. If they can&apos;t answer, we&apos;ll ask someone else in {secsLeft}s — you don&apos;t need to do anything.</>
                : <>{phase.name} has been alerted and still has a little time to answer. We&apos;ll keep looking for someone else meanwhile.</>}
            </p>
            <p className="sub" style={{ fontSize: 13, marginBottom: 0 }}>
              {phase.free ? 'Free for 5 minutes.' : `${phase.priceLabel} for ${meta.current.durationMins} minutes — refunded if nobody answers. You only pay for the time you use.`}
            </p>
            <button className="btn ghost" onClick={cancelRequest}>Cancel</button>
            {/* Leaving withdraws the request (see the pagehide/unmount effect). */}
            <div><Link className="link" href="/browse">Choose someone myself →</Link></div>
          </div>
        )}

        {phase.k === 'confirm' && (
          <div className="card">
            <div className="pulse" style={{ animation: 'none' }} aria-hidden>🤝</div>
            <h1 style={{ fontSize: 21 }}>{phase.durationMins}-minute {choice.current?.mode === 'voice' ? 'call' : 'chat'}: at most {phase.priceLabel}</h1>
            <p className="sub" style={{ marginBottom: 4 }}>
              You&apos;ve already had your free 5 minutes, so this is a paid {phase.durationMins}-minute session.
              The amount is held from your wallet only when a listener is asked, and returned in full if nobody answers.
              If you end early, unused minutes come back to your wallet.
            </p>
            <button className="btn" onClick={confirmPaid}>Find someone now</button>
            <div><button className="link" style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }} onClick={() => setPhase({ k: 'topic' })}>Back</button></div>
          </div>
        )}

        {phase.k === 'none' && (
          <div className="card">
            <div className="pulse" style={{ animation: 'none' }} aria-hidden>🌙</div>
            <h1 style={{ fontSize: 21 }}>Nobody could pick up just now</h1>
            <p className="sub">Listeners are in India, so availability follows Indian time. You haven&apos;t been charged.</p>
            <button className="btn" onClick={() => choice.current && start(choice.current)}>Try again</button>
            <p className="sub" style={{ marginTop: 14 }}>Or open any listener&apos;s profile and leave them a message — they&apos;ll see it when they&apos;re back online.</p>
            <div><Link className="link" href="/browse">See all listeners →</Link></div>
          </div>
        )}

        {phase.k === 'wallet' && (
          <div className="card">
            <div className="pulse" style={{ animation: 'none' }} aria-hidden>💳</div>
            <h1 style={{ fontSize: 21 }}>Add money to talk now</h1>
            <p className="sub">A {meta.current.durationMins}-minute session is {phase.priceLabel}. You need ₹{phase.need} more in your wallet. Unused minutes come back to your wallet.</p>
            <Link className="btn" href={`/wallet?return=${encodeURIComponent('/talk?go=1')}`}>Add money</Link>
            <div><Link className="link" href="/browse">See all listeners →</Link></div>
          </div>
        )}

        {phase.k === 'error' && (
          <div className="card">
            <h1 style={{ fontSize: 20 }}>Something went wrong</h1>
            <p className="sub">{phase.message}</p>
            <button className="btn" onClick={() => (choice.current ? start(choice.current) : setPhase({ k: 'topic' }))}>Try again</button>
            <div><Link className="link" href="/browse">See all listeners →</Link></div>
          </div>
        )}

        <p className="fine" style={{ color: '#7A2020' }}>
          In crisis? Call <a href="tel:14416" style={{ color: '#C0392B', fontWeight: 800 }}>Tele-MANAS 14416</a> (free, 24/7)
          {' '}or <a href="tel:08046110007" style={{ color: '#C0392B', fontWeight: 800 }}>NIMHANS 080-46110007</a>. Listeners are not crisis counsellors.
        </p>

        {phase.k === 'topic' && (
          <p className="fine">Prefer to choose someone yourself? <Link href="/browse" style={{ color: '#1A8FA0', fontWeight: 800 }}>See all listeners</Link></p>
        )}
      </div>
    </>
  )
}

export default function TalkPage() {
  return <Suspense fallback={null}><TalkInner /></Suspense>
}
