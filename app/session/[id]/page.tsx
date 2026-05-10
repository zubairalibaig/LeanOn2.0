'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

const sb = () => createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;background:#fff;}
.wrap{display:flex;flex-direction:column;height:100dvh;max-width:480px;margin:0 auto;background:#fff;}
.hdr{background:var(--navy);padding:12px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;}
.av{width:38px;height:38px;border-radius:12px;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:white;flex-shrink:0;}
.hdr-info{flex:1;}
.hdr-name{font-size:15px;font-weight:800;color:white;}
.hdr-sub{font-size:12px;color:rgba(213,238,246,0.7);font-weight:500;}
.timer{background:rgba(255,255,255,0.12);padding:6px 14px;border-radius:50px;font-size:14px;font-weight:800;color:white;}
.timer.low{background:rgba(239,68,68,0.3);color:#FCA5A5;}
.end-btn{background:rgba(239,68,68,0.2);color:#FCA5A5;border:1px solid rgba(239,68,68,0.3);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:7px 14px;border-radius:10px;cursor:pointer;}
.msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;}
.msgs::-webkit-scrollbar{width:3px;}
.msgs::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}
.msg{max-width:78%;padding:11px 15px;border-radius:18px;font-size:14px;font-weight:500;line-height:1.5;}
.msg.them{background:var(--light);color:var(--navy);border:1.5px solid var(--border);align-self:flex-start;border-bottom-left-radius:4px;}
.msg.me{background:var(--navy);color:white;align-self:flex-end;border-bottom-right-radius:4px;}
.msg-time{font-size:10px;margin-top:4px;opacity:0.55;}
.msg.me .msg-time{text-align:right;}
.input-bar{padding:10px 14px;background:white;border-top:1px solid var(--border);display:flex;align-items:flex-end;gap:10px;flex-shrink:0;}
.msg-input{flex:1;padding:11px 15px;font-family:'Nunito',sans-serif;font-size:15px;color:var(--navy);border:1.5px solid var(--border);border-radius:20px;outline:none;resize:none;max-height:100px;background:var(--light);line-height:1.4;}
.msg-input:focus{border-color:var(--navy);background:white;}
.send{width:42px;height:42px;border-radius:50%;background:var(--orange);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;color:white;flex-shrink:0;box-shadow:0 2px 10px rgba(255,153,51,.3);}
.send:disabled{opacity:.4;cursor:not-allowed;}
.note{padding:8px 16px;text-align:center;font-size:12px;color:var(--gray);font-weight:600;background:var(--light);flex-shrink:0;}
.end-screen{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;}
.end-icon{font-size:56px;margin-bottom:20px;}
.end-h{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:8px;}
.end-p{font-size:15px;color:var(--gray);font-weight:500;margin-bottom:28px;}
.stars{display:flex;gap:8px;justify-content:center;margin-bottom:28px;}
.star{font-size:36px;background:none;border:none;cursor:pointer;filter:grayscale(1);opacity:.3;}
.star.lit{filter:none;opacity:1;}
.btn-done{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:16px 40px;border-radius:50px;border:none;cursor:pointer;}
`

function fmt(s: number) {
  return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`
}

function SessionContent() {
  const router       = useRouter()
  const routeParams  = useParams()
  const searchParams = useSearchParams()
  const client       = sb()

  const sessionId    = routeParams.id as string
  const listenerName = searchParams.get('name') || 'Listener'
  const durationMins = parseInt(searchParams.get('duration') || '15')

  const [msgs, setMsgs]       = useState<any[]>([])
  const [input, setInput]     = useState('')
  const [secs, setSecs]       = useState(durationMins * 60)
  const [ended, setEnded]     = useState(false)
  const [rating, setRating]   = useState(0)
  const [userId, setUserId]   = useState<string|null>(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus]   = useState<string>('connecting')
  const bottomRef = useRef<HTMLDivElement>(null)

  // Get current user
  useEffect(() => {
    client.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id)
    })
  }, [])

  // Load existing messages
  useEffect(() => {
    if (!sessionId) return
    client.from('messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .then(({ data }) => { if (data) setMsgs(data) })
  }, [sessionId])

  // Realtime — NO filter, match client-side (more reliable on free tier)
  useEffect(() => {
    if (!sessionId) return

    const channel = client
      .channel('all-messages')
      .on('postgres_changes', {
        event:  'INSERT',
        schema: 'public',
        table:  'messages',
      }, (payload) => {
        const msg = payload.new as any
        // Only show messages for THIS session
        if (msg.session_id !== sessionId) return
        setMsgs(prev => {
          if (prev.find(m => m.id === msg.id)) return prev
          return [...prev, msg]
        })
      })
      .subscribe((s) => setStatus(s))

    return () => { client.removeChannel(channel) }
  }, [sessionId])

  // Countdown
  useEffect(() => {
    if (ended || secs <= 0) { if (secs <= 0) setEnded(true); return }
    const t = setInterval(() => setSecs(s => s - 1), 1000)
    return () => clearInterval(t)
  }, [secs, ended])

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs])

  async function sendMsg() {
    const text = input.trim()
    if (!text || !sessionId || !userId || sending) return
    setSending(true)
    setInput('')
    const { error } = await client.from('messages').insert({
      session_id: sessionId,
      sender_id:  userId,
      content:    text,
    })
    if (error) {
      console.error('Send error:', error.message)
      setInput(text)
    }
    setSending(false)
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

  const ini = (n: string) => n.split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase()

  if (ended) return (
    <>
      <style>{S}</style>
      <div className="wrap">
        <div className="hdr">
          <div className="av">{ini(listenerName)}</div>
          <div className="hdr-info">
            <div className="hdr-name">{listenerName}</div>
            <div className="hdr-sub">Session complete</div>
          </div>
        </div>
        <div className="end-screen">
          <div className="end-icon">🙏</div>
          <h2 className="end-h">How was your session?</h2>
          <p className="end-p">Your rating helps listeners improve.</p>
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

  return (
    <>
      <style>{S}</style>
      <div className="wrap">
        <div className="hdr">
          <div className="av">{ini(listenerName)}</div>
          <div className="hdr-info">
            <div className="hdr-name">{listenerName}</div>
            <div className="hdr-sub">
              {durationMins}-min session · {status === 'SUBSCRIBED' ? '🟢 live' : '⏳ connecting...'}
            </div>
          </div>
          <div className={`timer${secs < 120 ? ' low' : ''}`}>{fmt(secs)}</div>
          <button className="end-btn" onClick={() => setEnded(true)}>End</button>
        </div>

        <div className="note">Everything shared here is private and confidential.</div>

        <div className="msgs">
          {msgs.length === 0 && (
            <div className="msg them">
              Hi! I&apos;m here and ready to listen. Take your time — what&apos;s on your mind?
              <div className="msg-time">{new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true})}</div>
            </div>
          )}
          {msgs.map(m => (
            <div key={m.id} className={`msg ${m.sender_id === userId ? 'me' : 'them'}`}>
              {m.content}
              <div className="msg-time">
                {new Date(m.created_at).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true})}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="input-bar">
          <textarea
            className="msg-input"
            rows={1}
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg() }
            }}
          />
          <button className="send" onClick={sendMsg} disabled={!input.trim() || sending}>↑</button>
        </div>
      </div>
    </>
  )
}

export default function SessionPage() {
  return (
    <Suspense fallback={
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif',color:'#0F4867'}}>
        Starting session...
      </div>
    }>
      <SessionContent />
    </Suspense>
  )
}
