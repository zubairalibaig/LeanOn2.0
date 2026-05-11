'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

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
.wrap{display:flex;flex-direction:column;height:100dvh;max-width:480px;margin:0 auto;background:#ECE5DD;}
.hdr{background:#075E54;padding:10px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;}
.av{width:40px;height:40px;border-radius:50%;background:#128C7E;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:white;flex-shrink:0;}
.hdr-info{flex:1;}
.hdr-name{font-size:16px;font-weight:700;color:white;}
.hdr-sub{font-size:12px;color:rgba(255,255,255,0.7);font-weight:500;}
.timer{background:rgba(255,255,255,0.15);padding:5px 12px;border-radius:50px;font-size:13px;font-weight:800;color:white;}
.timer.low{background:rgba(220,38,38,0.4);color:#FCA5A5;}
.end-btn{background:rgba(220,38,38,0.25);color:#FCA5A5;border:1px solid rgba(220,38,38,0.3);font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;padding:6px 12px;border-radius:8px;cursor:pointer;}
.msgs{flex:1;overflow-y:auto;padding:12px 8px;display:flex;flex-direction:column;gap:3px;}
.msgs::-webkit-scrollbar{width:3px;}
.msgs::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:2px;}
.date-pill{align-self:center;background:rgba(255,255,255,0.85);color:#667781;font-size:12px;font-weight:600;padding:4px 12px;border-radius:8px;margin:8px 0;box-shadow:0 1px 2px rgba(0,0,0,0.1);}
.msg-wrap{display:flex;flex-direction:column;max-width:72%;}
.msg-wrap.me{align-self:flex-end;align-items:flex-end;}
.msg-wrap.them{align-self:flex-start;align-items:flex-start;}
.bubble{padding:8px 12px 6px;border-radius:8px;position:relative;box-shadow:0 1px 2px rgba(0,0,0,0.13);}
.bubble.me{background:#DCF8C6;border-top-right-radius:2px;}
.bubble.them{background:#FFFFFF;border-top-left-radius:2px;}
.bubble.temp{opacity:0.65;}
.bubble-text{font-size:14px;font-weight:500;line-height:1.5;color:#111B21;word-break:break-word;}
.bubble-footer{display:flex;align-items:center;justify-content:flex-end;gap:4px;margin-top:2px;}
.bubble-time{font-size:11px;color:#667781;font-weight:500;}
.ticks{font-size:13px;line-height:1;color:#8696A0;}
.input-bar{padding:8px 10px;background:#F0F2F5;display:flex;align-items:flex-end;gap:8px;flex-shrink:0;}
.msg-input{flex:1;padding:10px 14px;font-family:'Nunito',sans-serif;font-size:15px;color:#111B21;border:none;border-radius:24px;outline:none;resize:none;max-height:100px;background:white;line-height:1.4;box-shadow:0 1px 2px rgba(0,0,0,0.1);}
.send{width:44px;height:44px;border-radius:50%;background:#075E54;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,0.2);}
.send svg{width:22px;height:22px;}
.send:disabled{opacity:.5;cursor:not-allowed;}
.note{padding:8px 16px;text-align:center;font-size:12px;color:#667781;font-weight:600;background:rgba(255,255,255,0.6);flex-shrink:0;}
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
`

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

  // Voice call state
  const [voiceStatus, setVoiceStatus] = useState<'connecting' | 'connected' | 'error'>('connecting')
  const [voiceError, setVoiceError]   = useState<string | null>(null)
  const [muted, setMuted]             = useState(false)
  const [callSecs, setCallSecs]       = useState(0)

  const channelRef  = useRef<any>(null)
  const bottomRef   = useRef<HTMLDivElement>(null)
  const agoraRef    = useRef<{
    client: any
    micTrack: any
  } | null>(null)

  // Auth — runs once
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id)
    })
  }, [])

  // Sync timer from DB session record — prevents free time on refresh
  useEffect(() => {
    if (!sessionId) return
    supabase.from('sessions')
      .select('started_at, duration_mins')
      .eq('id', sessionId)
      .single()
      .then(({ data }) => {
        if (data?.started_at) {
          const elapsed    = Math.floor((Date.now() - new Date(data.started_at).getTime()) / 1000)
          const remaining  = Math.max(0, data.duration_mins * 60 - elapsed)
          setSecs(remaining)
          if (remaining <= 0) setEnded(true)
        }
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

  // ── CRITICAL FIX 2: Broadcast subscription
  // Channel name is SHARED between all session participants
  // NO sender_id filter — deduplicate by message ID instead
  useEffect(() => {
    if (!sessionId) return

    const channel = supabase.channel(`room:${sessionId}`)

    channel
      .on('broadcast', { event: 'msg' }, ({ payload }: { payload: Msg }) => {
        if (payload.session_id !== sessionId) return

        setMsgs(prev => {
          // ── CRITICAL FIX 3: Deduplicate by ID only, NOT sender_id
          // sender_id check was dropping all messages when both users are same person (testing)
          // and was unreliable in real usage too
          if (prev.find(m => m.id === payload.id)) return prev

          // Replace any matching temp message (same content + sender)
          const hasTemp = prev.find(
            m => m.temp && m.sender_id === payload.sender_id && m.content === payload.content
          )
          if (hasTemp) {
            return prev.map(m =>
              m.temp && m.sender_id === payload.sender_id && m.content === payload.content
                ? payload
                : m
            )
          }

          return [...prev, payload]
        })
      })
      .subscribe((status: string) => {
        setConnected(status === 'SUBSCRIBED')
      })

    channelRef.current = channel
    return () => { supabase.removeChannel(channel) }
  }, [sessionId])

  // Countdown timer (shared for both text and voice)
  useEffect(() => {
    if (ended || secs <= 0) { if (secs <= 0) setEnded(true); return }
    const t = setInterval(() => setSecs(s => s - 1), 1000)
    return () => clearInterval(t)
  }, [secs, ended])

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
  useEffect(() => {
    if (!isVoice || !sessionId) return

    let cancelled = false

    async function joinVoiceCall() {
      try {
        // Dynamically import to avoid SSR issues with the browser SDK
        const AgoraRTC = (await import('agora-rtc-sdk-ng')).default

        // Fetch token from our API
        const res = await fetch(`/api/agora?sessionId=${sessionId}`)
        if (!res.ok) {
          const { error } = await res.json()
          throw new Error(error || 'Failed to get voice token')
        }
        const { token, channelName, appId } = await res.json()

        if (cancelled) return

        // Create Agora RTC client
        const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })

        // Create microphone audio track
        let micTrack: any
        try {
          micTrack = await AgoraRTC.createMicrophoneAudioTrack()
        } catch (micErr: any) {
          throw new Error('Microphone access denied. Please allow microphone permission and try again.')
        }

        if (cancelled) {
          micTrack.close()
          return
        }

        // Join channel then publish mic
        await client.join(appId, channelName, token, null)
        await client.publish([micTrack])

        if (cancelled) {
          await client.unpublish([micTrack])
          micTrack.close()
          await client.leave()
          return
        }

        agoraRef.current = { client, micTrack }
        setVoiceStatus('connected')
        setVoiceError(null)
      } catch (err: any) {
        if (!cancelled) {
          console.error('Agora join error:', err)
          setVoiceStatus('error')
          setVoiceError(err?.message || 'Failed to connect voice call')
        }
      }
    }

    joinVoiceCall()

    return () => {
      cancelled = true
      // Cleanup Agora on unmount or when session ends
      if (agoraRef.current) {
        const { client, micTrack } = agoraRef.current
        micTrack.close()
        client.unpublish([micTrack]).catch(() => {})
        client.leave().catch(() => {})
        agoraRef.current = null
      }
    }
  }, [isVoice, sessionId])

  // Leave Agora channel when session ends
  useEffect(() => {
    if (ended && agoraRef.current) {
      const { client, micTrack } = agoraRef.current
      micTrack.close()
      client.unpublish([micTrack]).catch(() => {})
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

    // 2. Save to database
    const { data: saved, error } = await supabase
      .from('messages')
      .insert({ session_id: sessionId, sender_id: userId, content: text })
      .select()
      .single()

    if (error) {
      console.error('Send failed:', error.message)
      setMsgs(prev => prev.filter(m => m.id !== tempId))
      setInput(text)
      return
    }

    // 3. Replace temp with confirmed DB message
    setMsgs(prev => prev.map(m => m.id === tempId ? (saved as Msg) : m))

    // 4. Broadcast to the other participant(s)
    if (channelRef.current && saved) {
      channelRef.current.send({
        type: 'broadcast',
        event: 'msg',
        payload: saved,
      })
    }
  }

  async function finishSession() {
    if (sessionId) {
      await fetch('/api/sessions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, rating }),
      })
    }
    router.push('/browse')
  }

  // ── End screen (shared for both text and voice)
  if (ended) return (
    <>
      <style>{S}</style>
      <div className="wrap">
        <div className="hdr" style={{ background: '#0F4867' }}>
          <div className="av">{ini(listenerName)}</div>
          <div className="hdr-info">
            <div className="hdr-name">{listenerName}</div>
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
        <div className="voice-av">{ini(listenerName)}</div>
        <div className="voice-name">{listenerName}</div>

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
          <div className="av">{ini(listenerName)}</div>
          <div className="hdr-info">
            <div className="hdr-name">{listenerName}</div>
            <div className="hdr-sub">
              {connected ? '🟢 connected' : '⏳ connecting...'}
            </div>
          </div>
          <div className={`timer${secs < 120 ? ' low' : ''}`}>{fmtTimer(secs)}</div>
          <button className="end-btn" onClick={() => setEnded(true)}>End</button>
        </div>

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
