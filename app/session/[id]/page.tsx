'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { showToast } from '@/lib/toast'
import ReportModal from '@/app/components/ReportModal'
import { SESSION_DURATIONS, MESSAGE_REACTIONS } from '@/lib/constants'

// ── CRITICAL FIX 1: Create client ONCE outside component
// Previously inside component = new WebSocket on every render
const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;}
.wrap{display:flex;flex-direction:column;height:100dvh;max-width:480px;margin:0 auto;background:#E8F4FD;}
.hdr{background:#0F4867;padding:10px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;position:sticky;top:0;z-index:50;}
.av{width:40px;height:40px;border-radius:50%;background:#1A8FA0;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:white;flex-shrink:0;}
.hdr-info{flex:1;}
.hdr-name{font-size:16px;font-weight:700;color:white;}
.hdr-sub{font-size:12px;color:rgba(255,255,255,0.7);font-weight:500;}
.timer{background:rgba(255,255,255,0.15);padding:5px 12px;border-radius:50px;font-size:13px;font-weight:800;color:white;font-variant-numeric:tabular-nums;}
.timer.warn{background:rgba(255,153,51,0.4);color:#FFD580;}
.timer.low{background:rgba(220,38,38,0.4);color:#FCA5A5;}
.end-btn{background:rgba(220,38,38,0.25);color:#FCA5A5;border:1px solid rgba(220,38,38,0.3);font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;padding:6px 12px;border-radius:8px;cursor:pointer;}
.msgs{flex:1;overflow-y:auto;padding:12px 8px 80px;display:flex;flex-direction:column;gap:3px;}
.msgs::-webkit-scrollbar{width:3px;}
.msgs::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:2px;}
.date-pill{align-self:center;background:rgba(255,255,255,0.85);color:#4A6B7E;font-size:12px;font-weight:600;padding:4px 12px;border-radius:8px;margin:8px 0;box-shadow:0 1px 2px rgba(0,0,0,0.1);}
.msg-wrap{display:flex;flex-direction:column;max-width:80%;}
.msg-wrap.me{align-self:flex-end;align-items:flex-end;}
.msg-wrap.them{align-self:flex-start;align-items:flex-start;}
.bubble{padding:10px 14px;border-radius:8px;position:relative;box-shadow:0 1px 2px rgba(0,0,0,0.13);margin:4px 0;word-break:break-word;}
.bubble.me{background:var(--teal);color:white;border-radius:18px 18px 4px 18px;}
.bubble.them{background:#FFFFFF;color:var(--navy);border-radius:18px 18px 18px 4px;}
.bubble.temp{opacity:0.65;}
.bubble-text{font-size:14px;font-weight:500;line-height:1.5;word-break:break-word;}
.bubble.me .bubble-text{color:white;}
.bubble.them .bubble-text{color:#0F2233;}
.bubble-footer{display:flex;align-items:center;justify-content:flex-end;gap:4px;margin-top:2px;}
.bubble-time{font-size:11px;font-weight:500;}
.bubble.me .bubble-time{color:rgba(255,255,255,0.75);}
.bubble.them .bubble-time{color:#4A6B7E;}
.ticks{font-size:13px;line-height:1;color:rgba(255,255,255,0.85);}
.typing-indicator{align-self:flex-start;background:white;border-radius:18px;padding:10px 16px;font-size:13px;color:var(--gray);font-style:italic;font-weight:600;margin:4px 0;animation:pulse 1.5s ease-in-out infinite;}
.bubble{cursor:pointer;}
.rx-row{display:flex;gap:4px;margin-top:-2px;flex-wrap:wrap;}
.rx-chip{background:white;border:1px solid var(--border);border-radius:50px;padding:2px 8px;font-size:12px;font-weight:700;color:var(--navy);cursor:pointer;line-height:1.5;box-shadow:0 1px 2px rgba(0,0,0,.08);}
.rx-chip.mine{background:#E8F4FD;border-color:var(--teal);}
.rx-picker{display:flex;gap:6px;background:white;border:1px solid var(--border);border-radius:50px;padding:5px 8px;margin-top:4px;box-shadow:0 2px 10px rgba(0,0,0,.14);}
.rx-opt{background:none;border:none;font-size:19px;cursor:pointer;line-height:1;padding:2px;border-radius:50%;}
.rx-opt:hover{transform:scale(1.18);}
.rx-opt.mine{background:#E8F4FD;}
.input-bar{position:fixed;bottom:0;left:0;right:0;max-width:480px;margin:0 auto;padding:8px 10px;padding-bottom:calc(8px + env(safe-area-inset-bottom));background:#D6EAF8;border-top:1px solid #C5DFF0;display:flex;align-items:flex-end;gap:8px;z-index:100;}
.msg-input{flex:1;padding:10px 14px;font-family:'Nunito',sans-serif;font-size:15px;color:#0F2233;border:none;border-radius:24px;outline:none;resize:none;max-height:100px;background:white;line-height:1.4;box-shadow:0 1px 2px rgba(0,0,0,0.1);}
.send{width:44px;height:44px;border-radius:50%;background:#0F4867;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,0.2);}
.send svg{width:22px;height:22px;}
.send:disabled{opacity:.5;cursor:not-allowed;}
.note{padding:8px 16px;text-align:center;font-size:12px;color:#4A6B7E;font-weight:600;background:rgba(255,255,255,0.6);flex-shrink:0;}
.listener-banner{padding:10px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;background:#E8F4FD;border-bottom:1px solid var(--border);}
.listener-banner.free{background:#FFF8E8;border-color:#FFE3A3;}
.listener-banner-icon{font-size:17px;flex-shrink:0;line-height:1;}
.listener-banner-text{flex:1;font-size:12.5px;font-weight:700;color:var(--navy);line-height:1.4;}
.listener-banner-close{background:none;border:none;cursor:pointer;color:var(--gray);font-size:15px;font-weight:900;padding:2px 4px;flex-shrink:0;line-height:1;}
.crisis-bar{background:#FFF0F0;border-bottom:2px solid #FFCDD2;padding:10px 16px;font-size:12px;color:#7A2020;font-weight:700;line-height:1.5;flex-shrink:0;}
.crisis-bar a{color:#C0392B;text-decoration:underline;}
.crisis-footer{background:#FFF8F8;border-top:1px solid #FFCDD2;padding:6px 16px;font-size:11px;color:#7A2020;font-weight:700;text-align:center;flex-shrink:0;}
.crisis-footer a{color:#C0392B;}
.end-screen{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;background:white;}
.end-icon{font-size:56px;margin-bottom:20px;}
.end-h{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:8px;}
.end-p{font-size:15px;color:var(--gray);font-weight:500;margin-bottom:28px;}
.end-duration{background:var(--light);border:1.5px solid var(--border);border-radius:14px;padding:14px 20px;margin-bottom:20px;font-size:16px;font-weight:700;color:var(--navy);}
.stars{display:flex;gap:8px;justify-content:center;margin-bottom:28px;}
.star{font-size:36px;background:none;border:none;cursor:pointer;filter:grayscale(1);opacity:.3;}
.star.lit{filter:none;opacity:1;}
.btn-done{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:16px 40px;border-radius:50px;border:none;cursor:pointer;}
.back-confirm-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;}
.back-confirm-card{background:white;border-radius:20px;padding:24px;max-width:340px;width:100%;text-align:center;}
.back-confirm-card h3{font-size:18px;font-weight:900;color:var(--navy);margin-bottom:10px;}
.back-confirm-card p{font-size:14px;color:var(--gray);font-weight:500;margin-bottom:20px;}
.back-confirm-btns{display:flex;gap:10px;}
.back-confirm-btns button{flex:1;padding:12px;border-radius:12px;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;cursor:pointer;}
.back-stay{background:var(--navy);color:white;border:none;}
.back-leave{background:white;color:#E53935;border:1.5px solid #FFCDD2;}

/* ── Voice strip (sits above the message list, text always accessible) ── */
.voice-strip{
  background:var(--navy);
  display:flex;flex-direction:column;align-items:center;
  gap:6px;padding:12px 16px 10px;flex-shrink:0;
}
.voice-strip-row{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;}
.voice-status{font-size:13px;color:rgba(255,255,255,0.75);font-weight:600;}
.voice-timer{font-size:22px;font-weight:900;color:white;font-variant-numeric:tabular-nums;letter-spacing:.02em;}
.voice-timer.warn{color:#FFD580;}
.voice-timer.low{color:#FCA5A5;}
.voice-actions{display:flex;gap:10px;align-items:center;justify-content:center;}
.voice-btn{
  min-width:44px;min-height:44px;border-radius:50%;border:none;cursor:pointer;
  display:flex;align-items:center;justify-content:center;font-size:20px;
  font-family:'Nunito',sans-serif;font-weight:700;
}
.voice-btn.mute{background:rgba(255,255,255,0.15);color:white;width:44px;height:44px;}
.voice-btn.mute.muted{background:rgba(220,38,38,0.35);color:#FCA5A5;}
.voice-btn.end{background:rgba(220,38,38,0.85);color:white;width:50px;height:50px;font-size:22px;}
.voice-hint{font-size:11px;color:rgba(255,255,255,0.45);font-weight:600;text-align:center;}
.voice-err{
  font-size:12px;color:#FCA5A5;font-weight:600;
  background:rgba(220,38,38,0.15);
  border:1px solid rgba(220,38,38,0.3);
  border-radius:8px;padding:8px 12px;text-align:center;width:100%;
}
.net-quality{
  display:flex;align-items:center;gap:4px;
  font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);
}
.net-bars{display:flex;align-items:flex-end;gap:2px;height:12px;}
.net-bar{width:3px;border-radius:2px;background:rgba(255,255,255,0.2);}
.net-bar.on.good{background:#4ADE80;}
.net-bar.on.fair{background:#FCD34D;}
.net-bar.on.poor{background:#F87171;}
.mic-select{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-size:11px;font-weight:700;border:1px solid rgba(255,255,255,0.2);border-radius:6px;padding:4px 8px;cursor:pointer;max-width:160px;}
.mic-select option{background:#0F4867;color:white;}
.reconnecting-badge{background:rgba(255,153,51,0.2);border:1px solid rgba(255,153,51,0.4);color:#FFD580;font-size:11px;font-weight:700;padding:4px 10px;border-radius:50px;animation:pulse 1.5s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
`

function NetQualityIndicator({ q }: { q: 0|1|2|3|4|5|6 }) {
  // 0=unknown, 1-2=good, 3-4=fair, 5-6=poor
  if (q === 0) return null
  const tier = q <= 2 ? 'good' : q <= 4 ? 'fair' : 'poor'
  const label = q <= 2 ? 'Good signal' : q <= 4 ? 'Fair signal' : 'Poor signal'
  const filled = q <= 2 ? 3 : q <= 4 ? 2 : 1
  return (
    <div className="net-quality">
      <div className="net-bars">
        {[1,2,3].map(i => (
          <div
            key={i}
            className={`net-bar${i <= filled ? ` on ${tier}` : ''}`}
            style={{ height: i === 1 ? 5 : i === 2 ? 9 : 14 }}
          />
        ))}
      </div>
      <span>{label}</span>
    </div>
  )
}

function fmtTimer(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}
function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
}
function ini(n: string) {
  return n.split(' ').map(x => x[0] || '').join('').slice(0, 2).toUpperCase() || '?'
}

type Msg = {
  id: string
  session_id: string
  sender_id: string
  content: string
  created_at: string
  temp?: boolean
}

const CRISIS_WORDS = ['suicide', 'kill myself', 'end my life', 'want to die', 'self harm', 'hurt myself', 'no reason to live', "can't go on"]

function SessionContent() {
  const router       = useRouter()
  const routeParams  = useParams()
  const searchParams = useSearchParams()

  const sessionId    = routeParams.id as string
  const listenerName = (() => { try { return decodeURIComponent(searchParams.get('name') || 'Listener') } catch { return 'Listener' } })()
  // Validate duration against allowed values — prevents NaN crash and URL manipulation
  const rawDuration  = parseInt(searchParams.get('duration') || '15')
  const durationMins = (SESSION_DURATIONS as readonly number[]).includes(rawDuration) ? rawDuration : 15
  const sessionType  = searchParams.get('type') === 'voice' ? 'voice' : 'text'
  const [isVoice, setIsVoice] = useState(sessionType === 'voice')

  const [msgs, setMsgs]       = useState<Msg[]>([])
  const [input, setInput]     = useState('')
  const [secs, setSecs]       = useState(durationMins * 60)
  const [ended, setEnded]     = useState(false)
  const [rating, setRating]   = useState(0)
  const [userId, setUserId]   = useState<string | null>(null)
  const [connected, setConnected] = useState(false)
  // Resolved from DB so name survives page refresh
  const [resolvedListenerName, setResolvedListenerName] = useState(listenerName)
  // Typing indicator (Item 13)
  const [isOtherTyping, setIsOtherTyping] = useState(false)
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const lastTypingBroadcast = useRef<number>(0)
  // Back button guard (Item 17)
  const [showBackConfirm, setShowBackConfirm] = useState(false)
  // Session start time for end screen duration display (Item 7)
  const sessionStartRef = useRef<Date>(new Date())

  // Voice call state
  const [voiceStatus, setVoiceStatus]   = useState<'connecting' | 'connected' | 'error'>('connecting')
  const [voiceError, setVoiceError]     = useState<string | null>(null)
  const [muted, setMuted]               = useState(false)
  const [callSecs, setCallSecs]         = useState(0)
  const [netQuality, setNetQuality]     = useState<0 | 1 | 2 | 3 | 4 | 5 | 6>(0)
  const [mics, setMics]                   = useState<MediaDeviceInfo[]>([])
  const [selectedMic, setSelectedMic]     = useState<string>('')
  const [reconnecting, setReconnecting]   = useState(false)
  // Increment to force the voice useEffect to retry joining the Agora channel
  const [voiceRetryKey, setVoiceRetryKey] = useState(0)
  const [showReport, setShowReport]       = useState(false)
  const [listenerId, setListenerId]       = useState<string | null>(null)
  // Request lifecycle: 'pending' (awaiting listener), 'active' (live), 'cancelled'
  // (declined / timed out). null until the first DB read resolves.
  const [sessionStatus, setSessionStatus]       = useState<string | null>(null)
  const [cancellingRequest, setCancellingRequest] = useState(false)
  const [requestCreatedAt, setRequestCreatedAt]   = useState<string | null>(null)
  const crisisFlaggedRef                  = useRef(false)
  // Paid/free + earnings context for the listener — surfaced once at the top
  // of the live chat window (not on the accept/decline banner, which is a
  // 60-second, decision-under-pressure moment and already busy enough).
  const [sessionIsFreeTrial, setSessionIsFreeTrial] = useState(false)
  const [sessionAmountHeld, setSessionAmountHeld]   = useState<number | null>(null)
  const [sessionPlatformFee, setSessionPlatformFee] = useState(0)
  const [showListenerBanner, setShowListenerBanner] = useState(true)

  const channelRef      = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const bottomRef       = useRef<HTMLDivElement>(null)
  const userIdRef       = useRef<string | null>(null)
  const completedRef    = useRef(false)
  const peerEndedRef    = useRef(false) // true when session_ended arrived from the other side
  const [crisisAlert, setCrisisAlert] = useState(false)
  // Reactions: { [messageId]: { [userId]: emoji } }. Keyed by user so we can
  // show the caller's own choice as selected and render per-emoji counts.
  const [reactions, setReactions] = useState<Record<string, Record<string, string>>>({})
  const [pickerFor, setPickerFor]  = useState<string | null>(null)
  const [reconnectTick, setReconnectTick] = useState(0)
  // Agora SDK is a dynamic import; typed with eslint-disable to avoid any
  // The SDK types conflict with our interface due to UID return type from join()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const agoraRef    = useRef<{ client: any; micTrack: any } | null>(null)

  // Toggle a reaction. Optimistic so it feels instant; the server is the
  // authority and a failure reverts. Realtime keeps the other person in sync.
  async function react(messageId: string, emoji: string) {
    if (!userId) return
    setPickerFor(null)
    const prev = reactions
    setReactions(r => {
      const forMsg = { ...(r[messageId] ?? {}) }
      if (forMsg[userId] === emoji) delete forMsg[userId]
      else forMsg[userId] = emoji
      return { ...r, [messageId]: forMsg }
    })
    try {
      const res = await fetch('/api/messages/react', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageId, emoji }),
      })
      if (!res.ok) setReactions(prev) // revert on rejection
    } catch {
      setReactions(prev) // revert on network failure
    }
  }

  // Load existing reactions once the message list is known, and subscribe to
  // changes so the other person's taps appear live. Degrades silently if
  // migration 051 has not been applied yet.
  useEffect(() => {
    if (!sessionId || msgs.length === 0) return
    let cancelled = false
    const ids = msgs.filter(m => !m.temp).map(m => m.id)
    if (ids.length === 0) return
    supabase.from('message_reactions')
      .select('message_id, user_id, emoji')
      .in('message_id', ids)
      .then(({ data, error }) => {
        if (cancelled || error || !data) return
        const next: Record<string, Record<string, string>> = {}
        for (const row of data as { message_id: string; user_id: string; emoji: string }[]) {
          ;(next[row.message_id] ??= {})[row.user_id] = row.emoji
        }
        setReactions(next)
      })
    return () => { cancelled = true }
    // Re-runs as messages arrive; ids grow, so newly loaded history is covered.
  }, [sessionId, msgs.length])

  useEffect(() => {
    if (!sessionId) return
    const ch = supabase.channel(`reactions-${sessionId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'message_reactions' }, (payload) => {
        const row = (payload.new ?? payload.old) as { message_id?: string; user_id?: string; emoji?: string } | null
        if (!row?.message_id || !row.user_id) return
        setReactions(r => {
          const forMsg = { ...(r[row.message_id!] ?? {}) }
          if (payload.eventType === 'DELETE') delete forMsg[row.user_id!]
          else if (row.emoji) forMsg[row.user_id!] = row.emoji
          return { ...r, [row.message_id!]: forMsg }
        })
      })
      .subscribe()
    return () => { supabase.removeChannel(ch) }
  }, [sessionId])

  function playBeep() {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.value = 880
      gain.gain.setValueAtTime(0.3, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)
      osc.start()
      osc.stop(ctx.currentTime + 0.3)
    } catch { /* audio not available */ }
  }

  // Auth — runs once
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) { setUserId(user.id); userIdRef.current = user.id }
    })
  }, [])

  // Sync timer + peer name + IDs from DB — survives page refresh
  // We fetch both listener and seeker names so each party sees the OTHER person's name.
  // Depends on userId so peer name resolves after auth (race condition guard).
  useEffect(() => {
    if (!sessionId) return
    supabase.from('sessions')
      .select('status, started_at, created_at, duration_mins, session_type, listener_id, seeker_id, is_free_trial, amount_held, platform_fee, listener:users!listener_id(name), seeker:users!seeker_id(name)')
      .eq('id', sessionId)
      .single()
      .then(({ data, error }) => {
        // If the query errors (e.g. RLS denied, session gone), set a safe
        // fallback so the page doesn't stay on "Loading session…" forever.
        if (error || !data) { setSessionStatus('cancelled'); return }
        if (data?.status) setSessionStatus(data.status)
        if (data?.created_at) setRequestCreatedAt(data.created_at as string)
        if (typeof data?.is_free_trial === 'boolean') setSessionIsFreeTrial(data.is_free_trial)
        if (data?.amount_held != null) setSessionAmountHeld(Number(data.amount_held))
        if (data?.platform_fee != null) setSessionPlatformFee(Number(data.platform_fee))
        // Only sync the timer for sessions that have actually started. A pending
        // request has started_at = NULL and must not run the countdown.
        if (data?.started_at && data?.status === 'active') {
          sessionStartRef.current = new Date(data.started_at)
          const elapsed    = Math.floor((Date.now() - new Date(data.started_at).getTime()) / 1000)
          const remaining  = Math.max(0, data.duration_mins * 60 - elapsed)
          setSecs(remaining)
          if (remaining <= 0) setEnded(true)
        }
        if (data?.session_type) setIsVoice(data.session_type === 'voice')
        if (data?.listener_id) setListenerId(data.listener_id)
        // Show the OTHER person's name — listener sees seeker's name, seeker sees listener's name
        const myId = userIdRef.current
        if (!myId) return
        const isListener = myId === data?.listener_id
        const peerName = isListener
          ? (data?.seeker as { name?: string } | null)?.name
          : (data?.listener as { name?: string } | null)?.name
        if (peerName) setResolvedListenerName(peerName)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, userId])

  // Poll session status every 4s while pending — fallback if the realtime
  // UPDATE is missed. Flips into the live room the moment the listener accepts,
  // or to the cancelled screen on decline / timeout.
  useEffect(() => {
    if (sessionStatus !== 'pending' || !sessionId) return
    const poll = () => {
      supabase.from('sessions').select('status, started_at, duration_mins')
        .eq('id', sessionId).single()
        .then(({ data }) => {
          if (!data?.status) return
          setSessionStatus(data.status)
          if (data.status === 'active' && data.started_at) {
            sessionStartRef.current = new Date(data.started_at)
            const elapsed = Math.floor((Date.now() - new Date(data.started_at).getTime()) / 1000)
            setSecs(Math.max(0, (data.duration_mins as number) * 60 - elapsed))
          }
        })
    }
    const iv = setInterval(poll, 4000)
    return () => clearInterval(iv)
  }, [sessionStatus, sessionId])

  // Seeker-side enforcement of the 5-minute request window. The seeker is the
  // party watching the waiting screen, so they trigger the cancel + instant
  // refund the moment the window lapses (the daily cron is only a backstop).
  // Re-evaluates each second so the displayed countdown stays in sync.
  const [requestSecsLeft, setRequestSecsLeft] = useState<number | null>(null)
  useEffect(() => {
    if (sessionStatus !== 'pending' || !requestCreatedAt) { setRequestSecsLeft(null); return }
    const isSeeker = userIdRef.current !== null && listenerId !== null && userIdRef.current !== listenerId
    const deadline = new Date(requestCreatedAt).getTime() + 5 * 60_000
    let fired = false
    const tick = () => {
      const left = Math.max(0, Math.round((deadline - Date.now()) / 1000))
      setRequestSecsLeft(left)
      if (left <= 0 && isSeeker && !fired) {
        fired = true
        fetch(`/api/sessions/${sessionId}/decline`, { method: 'POST' })
          .catch(() => {})
          .finally(() => setSessionStatus('cancelled'))
      }
    }
    tick()
    const iv = setInterval(tick, 1000)
    return () => clearInterval(iv)
  }, [sessionStatus, requestCreatedAt, listenerId, sessionId])

  // Back button guard — intercept popstate (Item 17)
  useEffect(() => {
    if (ended) return
    window.history.pushState(null, '', window.location.href)
    function handlePop() {
      window.history.pushState(null, '', window.location.href)
      setShowBackConfirm(true)
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [ended])

  // Mobile: track keyboard height via visualViewport API
  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return
    function onViewportResize() {
      const keyboardH = window.innerHeight - (window.visualViewport?.height ?? window.innerHeight)
      const bar = document.querySelector('.input-bar') as HTMLElement | null
      if (bar) bar.style.bottom = `calc(${Math.max(0, keyboardH)}px + env(safe-area-inset-bottom) + 8px)`
      if (keyboardH > 100) {
        setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
    window.visualViewport.addEventListener('resize', onViewportResize)
    return () => window.visualViewport?.removeEventListener('resize', onViewportResize)
  }, [])

  // Load existing messages from DB on mount — via the server (admin client),
  // NOT a browser RLS read. See /api/messages GET for why. Crucially, this
  // MERGES into whatever is already on screen instead of overwriting it: on a
  // fresh session the history is empty, and if that empty result landed after
  // the user had already fired off their first message, the old
  // `setMsgs(data)` wiped it — that was the "messages disappear" bug.
  useEffect(() => {
    if (!sessionId) return
    let cancelled = false
    fetch(`/api/messages?sessionId=${sessionId}`)
      .then(r => (r.ok ? r.json() : []))
      .then((data: Msg[]) => {
        if (cancelled || !Array.isArray(data)) return
        setMsgs(prev => {
          const byId = new Map<string, Msg>()
          for (const m of data) byId.set(m.id, m)
          for (const m of prev) {
            if (byId.has(m.id)) continue
            // Drop an optimistic temp only if the server already has the same
            // message (same sender + text); otherwise keep it — never remove a
            // message that is already visible.
            if (m.temp && data.some(s => s.sender_id === m.sender_id && s.content === m.content)) continue
            byId.set(m.id, m)
          }
          return Array.from(byId.values()).sort(
            (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          )
        })
      })
      .catch(() => { /* keep whatever is on screen */ })
    return () => { cancelled = true }
  }, [sessionId])

  useEffect(() => {
    if (!sessionId) return

    function applyMsg(msg: Msg) {
      setMsgs(prev => {
        if (prev.find(m => m.id === msg.id)) return prev
        const hasTemp = prev.find(
          m => m.temp && m.sender_id === msg.sender_id && m.content === msg.content
        )
        let next: Msg[]
        if (hasTemp) {
          next = prev.map(m =>
            m.temp && m.sender_id === msg.sender_id && m.content === msg.content ? msg : m
          )
        } else {
          if (msg.sender_id !== userIdRef.current) playBeep()
          next = [...prev, msg]
        }
        // Sort by created_at to ensure correct order (Item 13)
        return next.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      })
    }

    // Primary: postgres_changes; backup: broadcast for instant delivery
    const channel = supabase
      .channel(`room:${sessionId}:${reconnectTick}`)
      .on(
        'postgres_changes' as 'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages', filter: `session_id=eq.${sessionId}` },
        (payload: { new: Msg }) => applyMsg(payload.new)
      )
      .on('broadcast', { event: 'msg' }, ({ payload }: { payload: Msg }) => {
        if (payload.session_id !== sessionId) return
        applyMsg(payload)
      })
      // Typing indicator (Item 13)
      .on('broadcast', { event: 'typing' }, ({ payload }: { payload: { userId: string } }) => {
        if (payload.userId !== userIdRef.current) {
          setIsOtherTyping(true)
          clearTimeout(typingTimeoutRef.current)
          typingTimeoutRef.current = setTimeout(() => setIsOtherTyping(false), 3000)
        }
      })
      .on('broadcast', { event: 'session_ended' }, () => {
        peerEndedRef.current = true
        setEnded(true)
      })
      // Session status transitions (pending → active on accept, → cancelled on decline)
      .on(
        'postgres_changes' as 'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'sessions', filter: `id=eq.${sessionId}` },
        (payload: { new: Record<string, unknown> }) => {
          const ns = payload.new.status as string | undefined
          if (!ns) return
          setSessionStatus(ns)
          if (ns === 'active') {
            const sa = payload.new.started_at as string | null
            if (sa) {
              sessionStartRef.current = new Date(sa)
              const elapsed = Math.floor((Date.now() - new Date(sa).getTime()) / 1000)
              setSecs(Math.max(0, durationMins * 60 - elapsed))
            }
          }
        }
      )
      .subscribe((status: string) => {
        setConnected(status === 'SUBSCRIBED')
        if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          // Reconnect after 3 s — incrementing tick re-runs this effect
          setTimeout(() => setReconnectTick(t => t + 1), 3000)
        }
      })

    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId, reconnectTick])

  // Countdown timer — auto-ends session when it hits 0.
  // Paused while a request is pending or after it's cancelled (no live timer).
  useEffect(() => {
    if (ended || sessionStatus === 'pending' || sessionStatus === 'cancelled') return
    const t = setInterval(() => setSecs(s => {
      if (s <= 1) { setEnded(true); return 0 }
      return s - 1
    }), 1000)
    return () => clearInterval(t)
  }, [ended, sessionStatus])

  // Auto-complete session in DB when ended (timer expiry or manual end)
  // Uses a ref so it fires exactly once even if component re-renders.
  // Skip broadcast + PATCH if the other side already sent session_ended —
  // they already called PATCH; we only need to show the end screen.
  useEffect(() => {
    if (!ended || completedRef.current || !sessionId) return
    // Never PATCH-complete a request that never went live (pending/cancelled) —
    // that path is settled by accept/decline, not the session-complete flow.
    if (sessionStatus === 'pending' || sessionStatus === 'cancelled') return
    completedRef.current = true
    if (!peerEndedRef.current) {
      channelRef.current?.send({ type: 'broadcast', event: 'session_ended', payload: {} }).catch?.(() => {})
      fetch('/api/sessions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      }).catch(() => {})
    }
  }, [ended, sessionId, sessionStatus])

  // Session heartbeat — keeps session alive and enables listener disconnect detection
  // Fires every 30s; uses sendBeacon on unmount so it doesn't block navigation
  useEffect(() => {
    if (!sessionId || ended) return
    const send = () => fetch('/api/sessions/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
      signal: AbortSignal.timeout(5000),
    }).catch(() => {})
    send() // immediate on mount
    const hb = setInterval(send, 30_000)
    return () => {
      clearInterval(hb)
      // Final beacon on unmount (works even if page is closing).
      // Must use Blob with application/json so the server can parse req.json() —
      // sendBeacon(url, string) sends text/plain which throws in req.json().
      navigator.sendBeacon(
        '/api/sessions/heartbeat',
        new Blob([JSON.stringify({ sessionId })], { type: 'application/json' })
      )
    }
  }, [sessionId, ended])

  // Trigger cleanup API on session mount — self-heals any orphaned sessions from prior crashes
  useEffect(() => {
    if (!sessionId) return
    fetch('/api/sessions/cleanup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' })
      .catch(() => {})
  }, [sessionId])

  // Crisis keyword detection — show helpline banner + flag session
  useEffect(() => {
    if (crisisAlert || msgs.length === 0) return
    const recentText = msgs.slice(-6).map(m => m.content.toLowerCase()).join(' ')
    if (CRISIS_WORDS.some(w => recentText.includes(w))) {
      setCrisisAlert(true)
      if (!crisisFlaggedRef.current && sessionId) {
        crisisFlaggedRef.current = true
        fetch('/api/sessions/crisis-flag', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        }).catch(() => {})
      }
    }
  }, [msgs, crisisAlert, sessionId])

  // Call duration counter (voice only — counts up from 0 once connected)
  useEffect(() => {
    if (!isVoice || voiceStatus !== 'connected') return
    const t = setInterval(() => setCallSecs(s => s + 1), 1000)
    return () => clearInterval(t)
  }, [isVoice, voiceStatus])

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs])

  // Agora voice call — only for voice sessions
  // Includes: token refresh, network-disconnect reconnect, Safari/Bluetooth handling
  // IMPORTANT: guard on sessionStatus === 'active' — the token API rejects pending
  // sessions with 403, which previously caused the catch block to call setEnded(true)
  // and show the end screen before the listener had even accepted.
  useEffect(() => {
    if (!isVoice || !sessionId || sessionStatus !== 'active') return

    let cancelled = false
    let reconnectTimer: ReturnType<typeof setTimeout> | null = null
    // Declared OUTSIDE joinVoiceCall so the counter persists across recursive calls.
    // If declared inside, each recursive entry resets it to 0 and the cap never triggers.
    let reconnectAttempts = 0

    async function joinVoiceCall() {
      try {
        // Dynamically import to avoid SSR issues with the browser SDK
        const AgoraRTC = (await import('agora-rtc-sdk-ng')).default

        // Suppress Agora's own console noise in production
        AgoraRTC.setLogLevel(process.env.NODE_ENV === 'production' ? 4 : 1)

        // Fetch token from our API (token expires in 1 hour — sufficient for any session)
        const res = await fetch(`/api/agora?sessionId=${sessionId}`, {
          signal: AbortSignal.timeout(8000),
        })
        if (!res.ok) {
          const body = await res.json().catch(() => ({}))
          throw new Error(body.error || 'Failed to get voice token')
        }
        const { token, channelName, appId } = await res.json()

        if (cancelled) return

        // Create Agora RTC client
        const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })

        // Handle network disconnect.
        //
        // STATE MACHINE (Agora Web SDK 4.x):
        //   CONNECTING → CONNECTED (normal join)
        //   CONNECTED → RECONNECTING (network drop — SDK retries automatically)
        //   RECONNECTING → CONNECTED (SDK recovered — no action needed)
        //   RECONNECTING → DISCONNECTED (SDK gave up after its own retries)
        //   CONNECTED → DISCONNECTING → DISCONNECTED (intentional client.leave())
        //
        // Bug fixed: the old code triggered a manual reconnect on DISCONNECTING,
        // which is the intentional-leave path (every clean exit caused a rogue
        // reconnect). Only act on DISCONNECTED *after* RECONNECTING (SDK gave up).
        // For DISCONNECTING (intentional leave) we do nothing — just update UI.
        client.on('connection-state-change', (curState: string, prevState: string) => {
          if (cancelled) return
          if (curState === 'RECONNECTING') {
            setReconnecting(true)
            setVoiceError('Connection dropped — reconnecting…')
          }
          if (curState === 'CONNECTED') {
            reconnectAttempts = 0
            setReconnecting(false)
            setVoiceError(null)
            // Re-publish mic in case it was unpublished during reconnect
            if (agoraRef.current) {
              client.publish([agoraRef.current.micTrack]).catch(() => {})
            }
          }
          // DISCONNECTED after RECONNECTING = SDK gave up. Try once more manually,
          // then show error. DISCONNECTED after DISCONNECTING = intentional leave, ignore.
          if (curState === 'DISCONNECTED' && prevState === 'RECONNECTING') {
            setReconnecting(false)
            if (reconnectAttempts < 3) {
              reconnectAttempts++
              setVoiceError(`Connection lost — retrying (${reconnectAttempts}/3)…`)
              reconnectTimer = setTimeout(() => {
                if (cancelled) return
                // Clean up the old client first — critical to avoid two clients in the channel.
                // The old client is already disconnected so leave() is a no-op,
                // but we still need to release micTrack and null the ref.
                if (agoraRef.current) {
                  const { micTrack: oldMic } = agoraRef.current
                  oldMic.close()
                  agoraRef.current = null
                }
                joinVoiceCall()
              }, 2000 * reconnectAttempts)
            } else {
              setVoiceStatus('error')
              setVoiceError('Connection lost. Tap "Retry voice" to try again.')
            }
          }
        })

        // Network quality monitoring (0=unknown, 1=excellent…6=disconnected)
        client.on('network-quality', (stats: { uplinkNetworkQuality: 0|1|2|3|4|5|6 }) => {
          if (!cancelled) setNetQuality(stats.uplinkNetworkQuality)
        })

        // Token expiry — Agora fires this 30 seconds before the token expires.
        // Without a handler the SDK loses privileges mid-call and the call drops
        // silently. Fetch a fresh token and renew in-place (no rejoin needed).
        client.on('token-privilege-will-expire', async () => {
          if (cancelled) return
          try {
            const r = await fetch(`/api/agora?sessionId=${sessionId}`, {
              signal: AbortSignal.timeout(8000),
            })
            if (r.ok) {
              const { token: newToken } = await r.json()
              if (newToken && !cancelled) await client.renewToken(newToken)
            }
          } catch (e) {
            console.error('Agora token renewal failed:', e)
          }
        })

        // ── THE CRITICAL FIX ────────────────────────────────────────────────
        // Subscribe to the remote user's audio track and play it.
        // Without this handler, both users connect and publish their mic, but
        // nobody ever calls subscribe() + play() on the incoming stream, so
        // the channel is dead-silent for both parties from day one.
        // Must be registered BEFORE client.join() so it fires for any user
        // who is already in the channel when the local user joins.
        client.on('user-published', async (remoteUser: any, mediaType: string) => {
          if (cancelled || mediaType !== 'audio') return
          try {
            await client.subscribe(remoteUser, 'audio')
            remoteUser.audioTrack?.play()
          } catch (subErr) {
            console.error('Agora subscribe error:', subErr)
          }
        })

        // Stop playing when the remote user unpublishes (mute / leaves)
        client.on('user-unpublished', (remoteUser: any, mediaType: string) => {
          if (mediaType === 'audio') {
            remoteUser.audioTrack?.stop()
          }
        })
        // ────────────────────────────────────────────────────────────────────

        // Create microphone audio track
        // Bluetooth/Safari: createMicrophoneAudioTrack may need AEC disabled on some devices
        let micTrack: Awaited<ReturnType<typeof AgoraRTC.createMicrophoneAudioTrack>>
        try {
          micTrack = await AgoraRTC.createMicrophoneAudioTrack({
            AEC: true,  // Acoustic Echo Cancellation
            AGC: true,  // Automatic Gain Control
            ANS: true,  // Automatic Noise Suppression
          })
        } catch (micErr: unknown) {
          const msg = micErr instanceof Error ? micErr.message : ''
          const name = micErr instanceof Error ? (micErr as { name?: string }).name ?? '' : ''
          if (name === 'NotAllowedError' || msg.includes('Permission') || msg.includes('NotAllowed') || msg.includes('denied')) {
            // Distinguish a remembered "block" (no prompt shown) from a fresh deny.
            // On desktop the mic permission lives behind the camera/mic icon at the
            // right edge of the address bar — guide users to reset it there.
            let blocked = false
            try {
              const perm = await navigator.permissions?.query({ name: 'microphone' as PermissionName })
              blocked = perm?.state === 'denied'
            } catch { /* permissions API unavailable — fall through to generic copy */ }
            throw new Error(
              blocked
                ? 'Microphone is blocked for this site. Click the camera/mic icon (🎥) at the right edge of the address bar → "Always allow" → reload. On mobile: Site settings → Microphone → Allow.'
                : 'Microphone access denied. When the browser asks, choose "Allow", then retry. If no prompt appears, open Site settings → Microphone → Allow, then reload.'
            )
          }
          if (name === 'NotFoundError' || msg.includes('NotFound') || msg.includes('Requested device not found')) {
            throw new Error('No microphone found. Please connect a microphone and try again.')
          }
          if (name === 'NotReadableError' || msg.includes('NotReadable')) {
            throw new Error('Microphone is being used by another app. Close other apps and try again.')
          }
          throw new Error('Could not access your microphone. Check browser permissions and try again.')
        }

        if (cancelled) {
          micTrack.close()
          return
        }

        // Join channel then publish mic
        await client.join(appId, channelName, token, null)
        await client.publish([micTrack])

        if (cancelled) {
          await client.unpublish([micTrack]).catch(() => {})
          micTrack.close()
          await client.leave().catch(() => {})
          return
        }

        agoraRef.current = { client, micTrack }
        setVoiceStatus('connected')
        setVoiceError(null)
        reconnectAttempts = 0

        // Enumerate audio input devices for mic selector
        navigator.mediaDevices.enumerateDevices().then(devices => {
          if (!cancelled) {
            const audioInputs = devices.filter(d => d.kind === 'audioinput')
            setMics(audioInputs)
            if (audioInputs.length > 0) setSelectedMic(audioInputs[0].deviceId)
          }
        }).catch(() => {})
      } catch (err: unknown) {
        if (!cancelled) {
          console.error('Agora join error:', err)
          setVoiceStatus('error')
          setVoiceError((err instanceof Error ? err.message : null) || 'Failed to connect voice call. Please check your microphone and try again.')
          // DO NOT call setEnded(true) here — keep the session alive so the user
          // can retry the voice call or switch to text chat without losing the session.
        }
      }
    }

    joinVoiceCall()

    // Visibility change — reconnect if tab was hidden and connection dropped
    function handleVisibilityChange() {
      if (document.visibilityState === 'visible' && !cancelled && agoraRef.current) {
        const state: string = agoraRef.current.client.connectionState
        if (state === 'DISCONNECTED' || state === 'DISCONNECTING') {
          reconnectAttempts = 0
          joinVoiceCall()
        }
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelled = true
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (reconnectTimer) clearTimeout(reconnectTimer)
      // Cleanup Agora on unmount or when session ends (unpublish → close → leave)
      if (agoraRef.current) {
        const { client, micTrack } = agoraRef.current
        client.unpublish([micTrack]).catch(() => {})
        micTrack.close()
        client.leave().catch(() => {})
        agoraRef.current = null
      }
    }
  }, [isVoice, sessionId, sessionStatus, voiceRetryKey])

  // Leave Agora channel when session ends (unpublish → close → leave)
  useEffect(() => {
    if (ended && agoraRef.current) {
      const { client, micTrack } = agoraRef.current
      client.unpublish([micTrack]).catch(() => {})
      micTrack.close()
      client.leave().catch(() => {})
      agoraRef.current = null
    }
  }, [ended])

  async function toggleMute() {
    if (!agoraRef.current) return
    const { micTrack } = agoraRef.current
    const next = !muted
    if (next) {
      await micTrack.setMuted(true)
    } else {
      await micTrack.setMuted(false)
    }
    setMuted(next)
  }

  async function switchMic(deviceId: string) {
    if (!agoraRef.current) return
    setSelectedMic(deviceId)
    try {
      const AgoraRTC = (await import('agora-rtc-sdk-ng')).default
      const newMic = await AgoraRTC.createMicrophoneAudioTrack({ microphoneId: deviceId })
      await agoraRef.current.client.unpublish([agoraRef.current.micTrack])
      agoraRef.current.micTrack.close()
      await agoraRef.current.client.publish([newMic])
      agoraRef.current.micTrack = newMic
    } catch (err) {
      console.error('switchMic error:', err)
    }
  }

  async function endVoiceCall() {
    setEnded(true)
  }

  // Tear down the Agora connection without ending the session
  function cleanupAgora() {
    if (agoraRef.current) {
      const { client, micTrack } = agoraRef.current
      client.unpublish([micTrack]).catch(() => {})
      micTrack.close()
      client.leave().catch(() => {})
      agoraRef.current = null
    }
  }

  // Let the user retry the voice connection (e.g. after granting mic permission)
  function retryVoice() {
    cleanupAgora()
    setVoiceStatus('connecting')
    setVoiceError(null)
    setReconnecting(false)
    setVoiceRetryKey(k => k + 1)
  }

  // Fall back to text chat — keeps the same live session, just switches UI mode
  function switchToText() {
    cleanupAgora()
    setIsVoice(false)
    setVoiceError(null)
    setVoiceStatus('connecting')
  }

  function handleInputChange(val: string) {
    setInput(val)
    // Broadcast typing indicator — debounced to once per 2s (Item 13)
    if (channelRef.current && userId) {
      const now = Date.now()
      if (now - lastTypingBroadcast.current > 2000) {
        lastTypingBroadcast.current = now
        channelRef.current.send({ type: 'broadcast', event: 'typing', payload: { userId } })
      }
    }
  }

  async function sendMsg() {
    const text = input.trim()
    if (!text || !sessionId || !userId) return
    setInput('')

    // 1. Optimistic update — show immediately
    const tempId = `temp-${Date.now()}`
    const tempMsg: Msg = {
      id: tempId, temp: true,
      session_id: sessionId,
      sender_id: userId,
      content: text,
      created_at: new Date().toISOString(),
    }
    setMsgs(prev => [...prev, tempMsg])

    // 2. Save via server API (rate-limited, participant-verified)
    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, content: text }),
    }).catch(() => null)

    if (!res || !res.ok) {
      const body = await res?.json().catch(() => ({}))
      console.error('Send failed:', body?.error)
      setMsgs(prev => prev.filter(m => m.id !== tempId))
      setInput(text)
      return
    }

    const saved = await res.json() as Msg

    // 3. Replace temp with confirmed DB message
    setMsgs(prev => prev.map(m => m.id === tempId ? saved : m))

    // 4. Broadcast to the other participant(s)
    if (channelRef.current) {
      channelRef.current.send({
        type: 'broadcast',
        event: 'msg',
        payload: saved,
      })
    }
  }

  async function finishSession() {
    if (sessionId) {
      // Session may already be completed by auto-end; send rating regardless
      // The API accepts rating updates on already-completed sessions
      await fetch('/api/sessions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, rating: rating || undefined }),
      }).catch(() => {})
    }
    router.push(userId === listenerId ? '/dashboard' : '/browse')
  }

  // ── End screen (shared for both text and voice)
  if (ended) {
    const actualSecs = Math.floor((Date.now() - sessionStartRef.current.getTime()) / 1000)
    const actualMins = Math.floor(actualSecs / 60)
    const actualSecRemainder = actualSecs % 60
    const durationDisplay = actualMins > 0 ? `${actualMins}m ${actualSecRemainder}s` : `${actualSecs}s`
    const voiceFailed = isVoice && voiceError && voiceStatus === 'error'
    return (
      <>
        <style>{S}</style>
        <div className="wrap">
          <div className="hdr">
            <div className="av">{ini(resolvedListenerName)}</div>
            <div className="hdr-info">
              <div className="hdr-name">{resolvedListenerName}</div>
              <div className="hdr-sub">{voiceFailed ? 'Voice connection failed' : 'Session complete'}</div>
            </div>
          </div>
          <div className="end-screen">
            <div className="end-icon">{voiceFailed ? '📵' : '🎉'}</div>
            <h2 className="end-h">{voiceFailed ? 'Voice call failed' : 'Session ended'}</h2>
            {voiceFailed && (
              <div style={{ background: '#FFF0F0', border: '1.5px solid #FFCDD2', borderRadius: 12, padding: '12px 16px', marginBottom: 16, fontSize: 13, color: '#7A2020', fontWeight: 600, maxWidth: 320, textAlign: 'left' }}>
                ⚠️ {voiceError}
              </div>
            )}
            <div className="end-duration">⏱ Duration: {durationDisplay}</div>
            <p className="end-p">{voiceFailed ? 'The voice connection could not be established. You have not been charged.' : userId === listenerId
              ? 'Thank you for supporting someone today. 💙'
              : 'How are you feeling? Rate your session to help others find the right listener.'}</p>
            {userId !== listenerId && !voiceFailed && (
            <div className="stars">
              {[1,2,3,4,5].map(s => (
                <button key={s} className={`star${rating >= s ? ' lit' : ''}`} onClick={() => setRating(s)}>★</button>
              ))}
            </div>
            )}
            <button className="btn-done" onClick={finishSession}>
              {voiceFailed
                ? 'Back →'
                : userId === listenerId
                  ? 'Back to dashboard →'
                  : rating > 0 ? 'Submit & finish →' : 'Skip & finish →'}
            </button>
            {userId !== listenerId && (
              <a href="/browse" style={{display:'block',marginTop:16,fontFamily:'Nunito,sans-serif',fontSize:14,fontWeight:700,color:'var(--teal)'}}>
                Book another session →
              </a>
            )}
            {listenerId && (
              <button
                onClick={() => setShowReport(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#8AAAB8', fontFamily: "'Nunito',sans-serif", marginTop: 12, fontWeight: 600 }}
              >
                Report an issue with this session
              </button>
            )}
          </div>
          {/* Crisis helpline footer — kept visible right after a session too. */}
          <div className="crisis-footer">
            🆘 Crisis: <a href="tel:08046110007">NIMHANS 080-46110007</a> · <a href="tel:14416">Tele-MANAS 14416</a>
          </div>
        </div>
        {showReport && listenerId && (
          <ReportModal
            targetUserId={listenerId}
            targetName={resolvedListenerName}
            sessionId={sessionId}
            onClose={() => setShowReport(false)}
          />
        )}
      </>
    )
  }

  // ── Pending request screen (seeker waiting / listener opened the link directly)
  if (sessionStatus === 'pending') {
    const isSeeker = userId !== null && listenerId !== null && userId !== listenerId
    return (
      <>
        <style>{S}</style>
        <div className="wrap" style={{ background: 'white' }}>
          <div className="hdr">
            <div className="av">{ini(resolvedListenerName)}</div>
            <div className="hdr-info">
              <div className="hdr-name">{resolvedListenerName}</div>
              <div className="hdr-sub">⏳ Waiting for response…</div>
            </div>
          </div>
          <div className="end-screen">
            <div className="end-icon">⏳</div>
            <h2 className="end-h">
              {isSeeker ? `Waiting for ${resolvedListenerName}…` : 'Someone wants to connect'}
            </h2>
            <p className="end-p" style={{ marginBottom: 20 }}>
              {isSeeker
                ? "Your listener has been notified and usually responds within a minute. Your wallet is held — you'll be refunded in full if they don't respond in time."
                : 'A seeker is waiting for you. Open your dashboard to accept or decline this request.'}
            </p>
            {isSeeker && requestSecsLeft !== null && (
              <div className="end-duration" style={{ marginBottom: 20 }}>
                ⏳ Auto-cancels in {fmtTimer(requestSecsLeft)}
              </div>
            )}
            {isSeeker ? (
              <button
                className="btn-done"
                style={{ background: cancellingRequest ? '#ccc' : '#E53935' }}
                disabled={cancellingRequest}
                onClick={async () => {
                  setCancellingRequest(true)
                  try { await fetch(`/api/sessions/${sessionId}/decline`, { method: 'POST' }) } catch { /* ignore */ }
                  router.push('/browse')
                }}
              >
                {cancellingRequest ? 'Cancelling…' : 'Cancel request'}
              </button>
            ) : (
              <a href="/dashboard" className="btn-done" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Go to dashboard →
              </a>
            )}
          </div>
          <div className="crisis-footer">
            🆘 Crisis: <a href="tel:08046110007">NIMHANS 080-46110007</a> · <a href="tel:14416">Tele-MANAS 14416</a>
          </div>
        </div>
      </>
    )
  }

  // ── Cancelled / declined / timed-out screen
  if (sessionStatus === 'cancelled') {
    return (
      <>
        <style>{S}</style>
        <div className="wrap" style={{ background: 'white' }}>
          <div className="hdr">
            <div className="av">{ini(resolvedListenerName)}</div>
            <div className="hdr-info">
              <div className="hdr-name">{resolvedListenerName}</div>
              <div className="hdr-sub">Session not started</div>
            </div>
          </div>
          <div className="end-screen">
            <div className="end-icon">😔</div>
            <h2 className="end-h">Request not accepted</h2>
            <p className="end-p">
              This request wasn&apos;t accepted in time. Your wallet has been fully refunded — no charge.
            </p>
            <a href="/browse" className="btn-done" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Browse other listeners →
            </a>
          </div>
          <div className="crisis-footer">
            🆘 Crisis: <a href="tel:08046110007">NIMHANS 080-46110007</a> · <a href="tel:14416">Tele-MANAS 14416</a>
          </div>
        </div>
      </>
    )
  }

  // Show a brief loading screen while the DB fetch resolves — prevents the
  // chat/voice UI from flashing before the pending or cancelled screen renders.
  if (sessionStatus === null) {
    return (
      <>
        <style>{S}</style>
        <div className="wrap" style={{ background: '#0F4867', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,.65)', fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16 }}>
            Loading session…
          </div>
        </div>
      </>
    )
  }

  const voiceTimerClass = callSecs > 0 && secs < 60 ? ' low' : secs < 120 ? ' warn' : ''
  const timerClass = secs < 60 ? ' low' : secs < 120 ? ' warn' : ''
  const isListenerView = userId !== null && listenerId !== null && userId === listenerId
  const listenerEarning = sessionAmountHeld != null ? Math.max(0, sessionAmountHeld - sessionPlatformFee) : null

  async function handleLeaveSession() {
    // Mark completed so the ended useEffect doesn't fire again after navigation
    completedRef.current = true
    // Notify the other participant before navigating away
    channelRef.current?.send({ type: 'broadcast', event: 'session_ended', payload: {} }).catch?.(() => {})
    await fetch('/api/sessions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
    }).catch(() => {})
    setShowBackConfirm(false)
    router.push('/browse')
  }

  // ── Text chat
  return (
    <>
      <style>{S}</style>

      {/* Back button confirm dialog (Item 17) */}
      {showBackConfirm && (
        <div className="back-confirm-overlay">
          <div className="back-confirm-card">
            <h3>Leave session?</h3>
            <p>Are you sure you want to leave? Your session will end and you may be charged for time used.</p>
            <div className="back-confirm-btns">
              <button className="back-stay" onClick={() => setShowBackConfirm(false)}>Stay in session</button>
              <button className="back-leave" onClick={handleLeaveSession}>End & leave</button>
            </div>
          </div>
        </div>
      )}

      <div className="wrap">
        <div className="hdr">
          <div className="av">{ini(resolvedListenerName)}</div>
          <div className="hdr-info">
            <div className="hdr-name">{resolvedListenerName}</div>
            <div className="hdr-sub">
              {isVoice
                ? (voiceStatus === 'connected' ? '🟢 voice connected' : voiceStatus === 'error' ? '🔴 voice failed' : '⏳ voice connecting…')
                : (connected ? '🟢 connected' : '⏳ connecting...')}
            </div>
          </div>
          <div className={`timer${timerClass}`}>{fmtTimer(secs)}</div>
          <button className="end-btn" onClick={() => setEnded(true)}>End</button>
        </div>

        {/* ── Voice strip: shown when voice mode is active, text always accessible below ── */}
        {isVoice && (
          <div className="voice-strip">
            <div className="voice-strip-row">
              {/* Call duration counter */}
              <div className={`voice-timer${voiceTimerClass}`}>
                {voiceStatus === 'connected' ? fmtTimer(callSecs) : voiceStatus === 'connecting' ? '--:--' : '✕'}
              </div>
              {voiceStatus === 'connecting' && (
                <div className="voice-status">⏳ Connecting audio…</div>
              )}
              {voiceStatus === 'connected' && <NetQualityIndicator q={netQuality} />}
              {reconnecting && <div className="reconnecting-badge">🔄 Reconnecting…</div>}
              {/* Mic selector */}
              {mics.length > 1 && voiceStatus === 'connected' && (
                <select className="mic-select" value={selectedMic} onChange={e => switchMic(e.target.value)} aria-label="Select microphone">
                  {mics.map(m => (
                    <option key={m.deviceId} value={m.deviceId}>🎙 {m.label || `Mic ${mics.indexOf(m) + 1}`}</option>
                  ))}
                </select>
              )}
              {/* Mute + End buttons */}
              <div className="voice-actions">
                <button
                  className={`voice-btn mute${muted ? ' muted' : ''}`}
                  onClick={toggleMute}
                  title={muted ? 'Unmute' : 'Mute'}
                  disabled={voiceStatus !== 'connected'}
                >{muted ? '🔇' : '🎙️'}</button>
                <button className="voice-btn end" onClick={endVoiceCall} title="End call">📵</button>
              </div>
            </div>

            {/* Error row with retry / switch-to-text */}
            {voiceError && voiceStatus === 'error' && (
              <div className="voice-err">
                <div style={{ marginBottom: 8 }}>⚠️ {voiceError}</div>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={retryVoice} style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1.5px solid rgba(255,255,255,0.35)', borderRadius: 8, padding: '6px 14px', fontFamily: 'Nunito,sans-serif', fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>🔄 Retry voice</button>
                  <button onClick={switchToText} style={{ background: 'rgba(26,143,160,0.85)', color: 'white', border: 'none', borderRadius: 8, padding: '6px 14px', fontFamily: 'Nunito,sans-serif', fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>💬 Text only</button>
                </div>
              </div>
            )}
            {voiceError && voiceStatus !== 'error' && (
              <div className="voice-err">{voiceError}</div>
            )}

            {/* Hint: text chat is available below */}
            <div className="voice-hint">💬 Text chat is open below — type while on call</div>
          </div>
        )}

        {/* One-time paid/free + earnings context for the listener — shown once
            at the top of the live chat, not on the accept/decline banner. */}
        {isListenerView && showListenerBanner && (
          <div className={`listener-banner${sessionIsFreeTrial ? ' free' : ''}`}>
            <span className="listener-banner-icon">{sessionIsFreeTrial ? '🎁' : '💰'}</span>
            <span className="listener-banner-text">
              {sessionIsFreeTrial
                ? `Free trial session · ${durationMins} min · no earnings on trial sessions`
                : `Paid session · ${durationMins} min${listenerEarning != null ? ` · you'll earn ₹${listenerEarning}` : ''}`}
            </span>
            <button
              className="listener-banner-close"
              onClick={() => setShowListenerBanner(false)}
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        )}

        {crisisAlert && (
          <div className="crisis-bar">
            🆘 In crisis? Call <strong>NIMHANS: <a href="tel:08046110007">080-46110007</a></strong> or <strong>Tele-MANAS: <a href="tel:14416">14416</a></strong> (free · 24/7 · Govt of India). You can still continue this conversation.
            <button onClick={() => setCrisisAlert(false)} style={{float:'right',background:'none',border:'none',cursor:'pointer',color:'#7A2020',fontWeight:900,fontSize:14}}>✕</button>
          </div>
        )}
        <div className="note">🔒 Private & confidential · {durationMins}-min session</div>

        <div className="msgs">
          <div className="date-pill">
            {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>

          {msgs.length === 0 && (
            <div className="msg-wrap them">
              <div className="bubble them">
                <div className="bubble-text">Hi! I&apos;m here and ready to listen. Take your time — what&apos;s on your mind?</div>
                <div className="bubble-footer">
                  <span className="bubble-time">{fmtTime(new Date().toISOString())}</span>
                </div>
              </div>
            </div>
          )}

          {msgs.map(m => {
            const isMe = m.sender_id === userId
            const rx = reactions[m.id] ?? {}
            const counts = Object.values(rx).reduce<Record<string, number>>((acc, e) => {
              acc[e] = (acc[e] || 0) + 1; return acc
            }, {})
            const mine = userId ? rx[userId] : undefined
            return (
              <div key={m.id} className={`msg-wrap ${isMe ? 'me' : 'them'}`}>
                <div
                  className={`bubble ${isMe ? 'me' : 'them'}${m.temp ? ' temp' : ''}`}
                  // Temp (unsent) messages have no server id yet, so they cannot
                  // carry a reaction. Tap toggles the picker for this bubble.
                  onClick={() => { if (!m.temp) setPickerFor(p => (p === m.id ? null : m.id)) }}
                >
                  <div className="bubble-text">{m.content}</div>
                  <div className="bubble-footer">
                    <span className="bubble-time">{fmtTime(m.created_at)}</span>
                    {isMe && <span className="ticks">{m.temp ? '✓' : '✓✓'}</span>}
                  </div>
                </div>

                {Object.keys(counts).length > 0 && (
                  <div className="rx-row">
                    {Object.entries(counts).map(([e, n]) => (
                      <button
                        key={e}
                        className={`rx-chip${mine === e ? ' mine' : ''}`}
                        onClick={() => react(m.id, e)}
                        aria-label={`${e} reaction`}
                      >
                        {e}{n > 1 ? ` ${n}` : ''}
                      </button>
                    ))}
                  </div>
                )}

                {pickerFor === m.id && (
                  <div className="rx-picker">
                    {MESSAGE_REACTIONS.map(e => (
                      <button
                        key={e}
                        className={`rx-opt${mine === e ? ' mine' : ''}`}
                        onClick={() => react(m.id, e)}
                        aria-label={`React ${e}`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          {/* Typing indicator (Item 13) */}
          {isOtherTyping && (
            <div className="typing-indicator">{resolvedListenerName} is typing...</div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Crisis resources footer — always visible, not dismissible (Item 24) */}
        <div className="crisis-footer">
          🆘 Crisis: <a href="tel:08046110007">NIMHANS 080-46110007</a> · <a href="tel:14416">Tele-MANAS 14416</a>
        </div>

        <div className="input-bar">
          <textarea
            className="msg-input"
            rows={1}
            placeholder="Type a message..."
            value={input}
            inputMode="text"
            onChange={e => handleInputChange(e.target.value)}
            onFocus={() => { setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 300) }}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg() }
            }}
          />
          <button className="send" onClick={sendMsg} disabled={!input.trim()}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default function SessionPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Nunito,sans-serif', color: '#0F4867' }}>
        Starting session...
      </div>
    }>
      <SessionContent />
    </Suspense>
  )
}
