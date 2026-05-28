'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { showToast } from '@/lib/toast'

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
.hdr{background:#0F4867;padding:10px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;}
.av{width:40px;height:40px;border-radius:50%;background:#1A8FA0;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:white;flex-shrink:0;}
.hdr-info{flex:1;}
.hdr-name{font-size:16px;font-weight:700;color:white;}
.hdr-sub{font-size:12px;color:rgba(255,255,255,0.7);font-weight:500;}
.timer{background:rgba(255,255,255,0.15);padding:5px 12px;border-radius:50px;font-size:13px;font-weight:800;color:white;}
.timer.low{background:rgba(220,38,38,0.4);color:#FCA5A5;}
.end-btn{background:rgba(220,38,38,0.25);color:#FCA5A5;border:1px solid rgba(220,38,38,0.3);font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;padding:6px 12px;border-radius:8px;cursor:pointer;}
.msgs{flex:1;overflow-y:auto;padding:12px 8px;display:flex;flex-direction:column;gap:3px;}
.msgs::-webkit-scrollbar{width:3px;}
.msgs::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:2px;}
.date-pill{align-self:center;background:rgba(255,255,255,0.85);color:#4A6B7E;font-size:12px;font-weight:600;padding:4px 12px;border-radius:8px;margin:8px 0;box-shadow:0 1px 2px rgba(0,0,0,0.1);}
.msg-wrap{display:flex;flex-direction:column;max-width:72%;}
.msg-wrap.me{align-self:flex-end;align-items:flex-end;}
.msg-wrap.them{align-self:flex-start;align-items:flex-start;}
.bubble{padding:8px 12px 6px;border-radius:8px;position:relative;box-shadow:0 1px 2px rgba(0,0,0,0.13);}
.bubble.me{background:#C5E3FF;border-top-right-radius:2px;}
.bubble.them{background:#FFFFFF;border-top-left-radius:2px;}
.bubble.temp{opacity:0.65;}
.bubble-text{font-size:14px;font-weight:500;line-height:1.5;color:#0F2233;word-break:break-word;}
.bubble-footer{display:flex;align-items:center;justify-content:flex-end;gap:4px;margin-top:2px;}
.bubble-time{font-size:11px;color:#4A6B7E;font-weight:500;}
.ticks{font-size:13px;line-height:1;color:#1A8FA0;}
.input-bar{padding:8px 10px;background:#D6EAF8;display:flex;align-items:flex-end;gap:8px;flex-shrink:0;}
.msg-input{flex:1;padding:10px 14px;font-family:'Nunito',sans-serif;font-size:15px;color:#0F2233;border:none;border-radius:24px;outline:none;resize:none;max-height:100px;background:white;line-height:1.4;box-shadow:0 1px 2px rgba(0,0,0,0.1);}
.send{width:44px;height:44px;border-radius:50%;background:#0F4867;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,0.2);}
.send svg{width:22px;height:22px;}
.send:disabled{opacity:.5;cursor:not-allowed;}
.note{padding:8px 16px;text-align:center;font-size:12px;color:#4A6B7E;font-weight:600;background:rgba(255,255,255,0.6);flex-shrink:0;}
.crisis-bar{background:#FFF0F0;border-bottom:2px solid #FFCDD2;padding:10px 16px;font-size:12px;color:#7A2020;font-weight:700;line-height:1.5;flex-shrink:0;}
.crisis-bar a{color:#C0392B;text-decoration:underline;}
.end-screen{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;background:white;}
.end-icon{font-size:56px;margin-bottom:20px;}
.end-h{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:8px;}
.end-p{font-size:15px;color:var(--gray);font-weight:500;margin-bottom:28px;}
.stars{display:flex;gap:8px;justify-content:center;margin-bottom:28px;}
.star{font-size:36px;background:none;border:none;cursor:pointer;filter:grayscale(1);opacity:.3;}
.star.lit{filter:none;opacity:1;}
.btn-done{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:16px 40px;border-radius:50px;border:none;cursor:pointer;}

/* ── Voice call overlay ── */
.voice-overlay{
  position:fixed;inset:0;z-index:100;
  background:var(--navy);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:20px;max-width:480px;margin:0 auto;
}
.voice-av{
  width:80px;height:80px;border-radius:50%;
  background:var(--teal);
  display:flex;align-items:center;justify-content:center;
  font-weight:900;font-size:28px;color:white;
  box-shadow:0 0 0 8px rgba(26,143,160,0.25);
}
.voice-name{font-size:22px;font-weight:800;color:white;}
.voice-status{font-size:14px;color:rgba(255,255,255,0.65);font-weight:500;}
.voice-timer{font-size:28px;font-weight:800;color:white;font-variant-numeric:tabular-nums;}
.voice-timer.low{color:#FCA5A5;}
.voice-actions{display:flex;gap:20px;margin-top:8px;}
.voice-btn{
  width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;
  display:flex;align-items:center;justify-content:center;font-size:24px;
  font-family:'Nunito',sans-serif;font-weight:700;
}
.voice-btn.mute{background:rgba(255,255,255,0.15);color:white;}
.voice-btn.mute.muted{background:rgba(220,38,38,0.35);color:#FCA5A5;}
.voice-btn.end{background:rgba(220,38,38,0.85);color:white;}
.voice-err{
  font-size:13px;color:#FCA5A5;font-weight:600;
  background:rgba(220,38,38,0.15);
  border:1px solid rgba(220,38,38,0.3);
  border-radius:10px;padding:10px 16px;text-align:center;max-width:280px;
}
.net-quality{
  display:flex;align-items:center;gap:6px;
  font-size:12px;font-weight:700;color:rgba(255,255,255,0.75);
}
.net-bars{display:flex;align-items:flex-end;gap:2px;height:14px;}
.net-bar{width:4px;border-radius:2px;background:rgba(255,255,255,0.2);}
.net-bar.on.good{background:#4ADE80;}
.net-bar.on.fair{background:#FCD34D;}
.net-bar.on.poor{background:#F87171;}
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
  return n.split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase()
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
  const listenerName = decodeURIComponent(searchParams.get('name') || 'Listener')
  const durationMins = parseInt(searchParams.get('duration') || '15')
  const sessionType  = searchParams.get('type') || 'text'
  const isVoice      = sessionType === 'voice'

  const [msgs, setMsgs]       = useState<Msg[]>([])
  const [input, setInput]     = useState('')
  const [secs, setSecs]       = useState(durationMins * 60)
  const [ended, setEnded]     = useState(false)
  const [rating, setRating]   = useState(0)
  const [userId, setUserId]   = useState<string | null>(null)
  const [connected, setConnected] = useState(false)
  // Resolved from DB so name survives page refresh
  const [resolvedListenerName, setResolvedListenerName] = useState(listenerName)

  // Voice call state
  const [voiceStatus, setVoiceStatus]   = useState<'connecting' | 'connected' | 'error'>('connecting')
  const [voiceError, setVoiceError]     = useState<string | null>(null)
  const [muted, setMuted]               = useState(false)
  const [callSecs, setCallSecs]         = useState(0)
  const [netQuality, setNetQuality]     = useState<0 | 1 | 2 | 3 | 4 | 5 | 6>(0)

  const channelRef      = useRef<ReturnType<typeof supabase.channel> | null>(null)
  const bottomRef       = useRef<HTMLDivElement>(null)
  const userIdRef       = useRef<string | null>(null)
  const completedRef    = useRef(false)
  const [crisisAlert, setCrisisAlert] = useState(false)
  const [reconnectTick, setReconnectTick] = useState(0)
  // Agora SDK is a dynamic import; store as opaque interface to avoid any
  const agoraRef    = useRef<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    client: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    micTrack: any
  } | null>(null)

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

  // Sync timer + listener name from DB — survives page refresh
  useEffect(() => {
    if (!sessionId) return
    supabase.from('sessions')
      .select('started_at, duration_mins, listener:users!listener_id(name)')
      .eq('id', sessionId)
      .single()
      .then(({ data }) => {
        if (data?.started_at) {
          const elapsed    = Math.floor((Date.now() - new Date(data.started_at).getTime()) / 1000)
          const remaining  = Math.max(0, data.duration_mins * 60 - elapsed)
          setSecs(remaining)
          if (remaining <= 0) setEnded(true)
        }
        const name = (data?.listener as { name?: string } | null)?.name
        if (name) setResolvedListenerName(name)
      })
  }, [sessionId])

  // Load existing messages from DB on mount
  useEffect(() => {
    if (!sessionId) return
    supabase.from('messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .then(({ data }) => { if (data) setMsgs(data as Msg[]) })
  }, [sessionId])

  useEffect(() => {
    if (!sessionId) return

    function applyMsg(msg: Msg) {
      setMsgs(prev => {
        if (prev.find(m => m.id === msg.id)) return prev
        const hasTemp = prev.find(
          m => m.temp && m.sender_id === msg.sender_id && m.content === msg.content
        )
        if (hasTemp) {
          return prev.map(m =>
            m.temp && m.sender_id === msg.sender_id && m.content === msg.content ? msg : m
          )
        }
        // Beep only for incoming messages (not own messages)
        if (msg.sender_id !== userIdRef.current) playBeep()
        return [...prev, msg]
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

  // Countdown timer — auto-ends session when it hits 0
  useEffect(() => {
    if (ended) return
    const t = setInterval(() => setSecs(s => {
      if (s <= 1) { setEnded(true); return 0 }
      return s - 1
    }), 1000)
    return () => clearInterval(t)
  }, [ended])

  // Auto-complete session in DB when ended (timer expiry or manual end)
  // Uses a ref so it fires exactly once even if component re-renders
  useEffect(() => {
    if (!ended || completedRef.current || !sessionId) return
    completedRef.current = true
    fetch('/api/sessions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
    }).catch(() => {}) // fire and forget — user will rate separately
  }, [ended, sessionId])

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

  // Crisis keyword detection — show helpline banner
  useEffect(() => {
    if (crisisAlert || msgs.length === 0) return
    const recentText = msgs.slice(-6).map(m => m.content.toLowerCase()).join(' ')
    if (CRISIS_WORDS.some(w => recentText.includes(w))) setCrisisAlert(true)
  }, [msgs])

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
  useEffect(() => {
    if (!isVoice || !sessionId) return

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

        // Handle network disconnect — attempt reconnect up to 3 times
        client.on('connection-state-change', (curState: string) => {
          if (cancelled) return
          if (curState === 'DISCONNECTED' || curState === 'DISCONNECTING') {
            if (reconnectAttempts < 3) {
              reconnectAttempts++
              setVoiceError(`Connection lost — reconnecting (${reconnectAttempts}/3)…`)
              reconnectTimer = setTimeout(() => {
                if (!cancelled) joinVoiceCall()
              }, 2000 * reconnectAttempts)
            } else {
              setVoiceStatus('error')
              setVoiceError('Connection lost. Please end and restart the call.')
            }
          }
          if (curState === 'CONNECTED') {
            reconnectAttempts = 0
            setVoiceError(null)
          }
        })

        // Network quality monitoring (0=unknown, 1=excellent…6=disconnected)
        client.on('network-quality', (stats: { uplinkNetworkQuality: 0|1|2|3|4|5|6 }) => {
          if (!cancelled) setNetQuality(stats.uplinkNetworkQuality)
        })

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
            throw new Error('Microphone access denied. Tap the 🔒 icon in your browser address bar, allow microphone, then refresh.')
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
      } catch (err: unknown) {
        if (!cancelled) {
          console.error('Agora join error:', err)
          setVoiceStatus('error')
          setVoiceError((err instanceof Error ? err.message : null) || 'Failed to connect voice call. Please check your microphone and try again.')
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
  }, [isVoice, sessionId])

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

  async function endVoiceCall() {
    setEnded(true)
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
    router.push('/browse')
  }

  // ── End screen (shared for both text and voice)
  if (ended) return (
    <>
      <style>{S}</style>
      <div className="wrap">
        <div className="hdr">
          <div className="av">{ini(resolvedListenerName)}</div>
          <div className="hdr-info">
            <div className="hdr-name">{resolvedListenerName}</div>
            <div className="hdr-sub">Session complete</div>
          </div>
        </div>
        <div className="end-screen">
          <div className="end-icon">🙏</div>
          <h2 className="end-h">How was your session?</h2>
          <p className="end-p">Your rating helps others find the right listener.</p>
          <div className="stars">
            {[1,2,3,4,5].map(s => (
              <button key={s} className={`star${rating >= s ? ' lit' : ''}`} onClick={() => setRating(s)}>★</button>
            ))}
          </div>
          <button className="btn-done" onClick={finishSession}>
            {rating > 0 ? 'Submit & finish →' : 'Skip & finish →'}
          </button>
        </div>
      </div>
    </>
  )

  // ── Voice call overlay
  if (isVoice) return (
    <>
      <style>{S}</style>
      <div className="voice-overlay">
        <div className="voice-av">{ini(resolvedListenerName)}</div>
        <div className="voice-name">{resolvedListenerName}</div>

        {voiceStatus === 'connecting' && (
          <div className="voice-status">Connecting…</div>
        )}
        {voiceStatus === 'connected' && (
          <div className="voice-status">Voice call · {fmtTimer(secs)} left</div>
        )}
        {voiceStatus === 'error' && (
          <div className="voice-status">Connection error</div>
        )}

        <div className={`voice-timer${secs < 120 ? ' low' : ''}`}>
          {voiceStatus === 'connected' ? fmtTimer(callSecs) : '--:--'}
        </div>

        {voiceStatus === 'connected' && (
          <NetQualityIndicator q={netQuality} />
        )}

        {voiceError && (
          <div className="voice-err">{voiceError}</div>
        )}

        <div className="voice-actions">
          <button
            className={`voice-btn mute${muted ? ' muted' : ''}`}
            onClick={toggleMute}
            title={muted ? 'Unmute' : 'Mute'}
            disabled={voiceStatus !== 'connected'}
          >
            {muted ? '🔇' : '🎙️'}
          </button>
          <button
            className="voice-btn end end-btn"
            onClick={endVoiceCall}
            title="End call"
          >
            📵
          </button>
        </div>
      </div>
    </>
  )

  // ── Text chat (unchanged)
  return (
    <>
      <style>{S}</style>
      <div className="wrap">
        <div className="hdr">
          <div className="av">{ini(resolvedListenerName)}</div>
          <div className="hdr-info">
            <div className="hdr-name">{resolvedListenerName}</div>
            <div className="hdr-sub">
              {connected ? '🟢 connected' : '⏳ connecting...'}
            </div>
          </div>
          <div className={`timer${secs < 120 ? ' low' : ''}`}>{fmtTimer(secs)}</div>
          <button className="end-btn" onClick={() => setEnded(true)}>End</button>
        </div>

        {crisisAlert && (
          <div className="crisis-bar">
            🆘 In crisis? Call <strong>Tele MANAS 14416</strong> (free · 24/7 · Govt of India) — also reachable at <a href="tel:18008914416">1800-89-14416</a> · Emergency: <a href="tel:112">112</a>
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
            return (
              <div key={m.id} className={`msg-wrap ${isMe ? 'me' : 'them'}`}>
                <div className={`bubble ${isMe ? 'me' : 'them'}${m.temp ? ' temp' : ''}`}>
                  <div className="bubble-text">{m.content}</div>
                  <div className="bubble-footer">
                    <span className="bubble-time">{fmtTime(m.created_at)}</span>
                    {isMe && <span className="ticks">{m.temp ? '✓' : '✓✓'}</span>}
                  </div>
                </div>
              </div>
            )
          })}
          <div ref={bottomRef} />
        </div>

        <div className="input-bar">
          <textarea
            className="msg-input"
            rows={1}
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
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
