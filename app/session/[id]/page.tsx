'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--blue:#C9E7F4;--cream:#FFFBF5;--gray:#6B8FA8;--border:#DDE8F0;--light:#F0F4F7;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  .session-wrap{display:flex;flex-direction:column;height:100vh;max-width:480px;margin:0 auto;background:var(--cream);}
  /* HEADER */
  .session-header{background:var(--navy);padding:14px 16px;display:flex;align-items:center;gap:12px;flex-shrink:0;}
  .avatar-sm{width:38px;height:38px;border-radius:12px;background:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:var(--navy);flex-shrink:0;}
  .header-info{flex:1;}
  .header-name{font-size:15px;font-weight:800;color:white;}
  .header-sub{font-size:12px;color:rgba(201,231,244,0.7);font-weight:500;}
  .timer-chip{background:rgba(255,255,255,0.12);padding:6px 14px;border-radius:50px;font-size:15px;font-weight:800;color:white;border:1px solid rgba(255,255,255,0.2);}
  .timer-chip.urgent{background:rgba(239,68,68,0.25);border-color:rgba(239,68,68,0.5);color:#FCA5A5;}
  .end-btn{background:rgba(239,68,68,0.2);color:#FCA5A5;border:1px solid rgba(239,68,68,0.3);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:7px 14px;border-radius:10px;cursor:pointer;flex-shrink:0;}
  /* VOICE MODE */
  .voice-screen{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:32px;}
  .voice-avatar{width:100px;height:100px;border-radius:30px;background:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:36px;color:var(--navy);}
  .voice-avatar.speaking{box-shadow:0 0 0 8px rgba(255,153,51,0.3),0 0 0 16px rgba(255,153,51,0.1);animation:pulse 1.5s ease-in-out infinite;}
  @keyframes pulse{0%,100%{box-shadow:0 0 0 8px rgba(255,153,51,0.3),0 0 0 16px rgba(255,153,51,0.1);}50%{box-shadow:0 0 0 14px rgba(255,153,51,0.2),0 0 0 24px rgba(255,153,51,0.05);}}
  .voice-name{font-size:20px;font-weight:800;color:var(--navy);}
  .voice-status{font-size:14px;color:var(--gray);font-weight:500;}
  .voice-controls{display:flex;gap:16px;margin-top:8px;}
  .voice-btn{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;border:none;cursor:pointer;transition:all 0.2s;}
  .voice-btn.mute{background:var(--light);color:var(--navy);}
  .voice-btn.mute.on{background:#FEE2E2;color:#EF4444;}
  .voice-btn.speaker{background:var(--light);color:var(--navy);}
  .voice-btn.hang{background:#EF4444;color:white;box-shadow:0 4px 16px rgba(239,68,68,0.4);}
  /* CHAT MODE */
  .messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;}
  .messages::-webkit-scrollbar{width:3px;}
  .messages::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}
  .msg{max-width:80%;padding:12px 16px;border-radius:18px;font-size:14px;font-weight:500;line-height:1.5;}
  .msg.them{background:white;color:var(--navy);border:1.5px solid var(--border);align-self:flex-start;border-bottom-left-radius:4px;}
  .msg.me{background:var(--navy);color:white;align-self:flex-end;border-bottom-right-radius:4px;}
  .msg-time{font-size:10px;margin-top:4px;opacity:0.6;}
  .msg.me .msg-time{text-align:right;}
  .typing{display:flex;align-items:center;gap:4px;padding:10px 14px;background:white;border:1.5px solid var(--border);border-radius:18px;border-bottom-left-radius:4px;width:fit-content;}
  .typing-dot{width:7px;height:7px;border-radius:50%;background:var(--gray);animation:typing-bounce 1.2s infinite;}
  .typing-dot:nth-child(2){animation-delay:0.2s;} .typing-dot:nth-child(3){animation-delay:0.4s;}
  @keyframes typing-bounce{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);}}
  /* INPUT */
  .input-bar{padding:12px 16px;background:white;border-top:1px solid var(--border);display:flex;align-items:flex-end;gap:10px;flex-shrink:0;}
  .msg-input{flex:1;padding:12px 16px;font-family:'Nunito',sans-serif;font-size:15px;color:var(--navy);border:1.5px solid var(--border);border-radius:20px;outline:none;resize:none;max-height:120px;background:var(--cream);transition:border-color 0.2s;line-height:1.4;}
  .msg-input:focus{border-color:var(--navy);}
  .send-btn{width:44px;height:44px;border-radius:50%;background:var(--orange);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;transition:all 0.2s;box-shadow:0 2px 10px rgba(255,153,51,0.3);}
  .send-btn:hover{background:#e8861a;transform:scale(1.05);}
  .send-btn:disabled{opacity:0.5;cursor:not-allowed;transform:none;}
  /* END SCREEN */
  .end-screen{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;}
  .end-icon{font-size:56px;margin-bottom:20px;}
  .end-title{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:8px;}
  .end-sub{font-size:15px;color:var(--gray);font-weight:500;margin-bottom:32px;}
  .stars-row{display:flex;gap:8px;justify-content:center;margin-bottom:28px;}
  .star-btn{font-size:36px;background:none;border:none;cursor:pointer;transition:transform 0.15s;filter:grayscale(1);opacity:0.3;}
  .star-btn.lit{filter:none;opacity:1;transform:scale(1.1);}
  .btn-done{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:16px 40px;border-radius:16px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.3);}
  .btn-done:hover{background:#e8861a;}
  .session-note{background:var(--light);border-radius:14px;padding:14px 16px;margin:16px;font-size:13px;color:var(--gray);font-weight:500;line-height:1.5;text-align:center;}
`

const DEMO_MSGS = [
  { id:1, from:'them', text:'Hi! I\'m here and ready to listen. Take your time — what\'s on your mind?', time:'2:14 AM' },
]

function SessionContent() {
  const router      = useRouter()
  const params      = useSearchParams()
  const listenerId  = params.get('listener') || '1'
  const durationMin = parseInt(params.get('duration') || '15')
  const sessionType = (params.get('type') || 'text') as 'text'|'voice'

  const listenerName = listenerId === '2' ? 'Rohan M.' : 'Ananya S.'
  const initials     = listenerName.split(' ').map(n => n[0]).join('')

  const totalSecs   = durationMin * 60
  const [secs, setSecs]       = useState(totalSecs)
  const [msgs, setMsgs]       = useState(DEMO_MSGS)
  const [input, setInput]     = useState('')
  const [typing, setTyping]   = useState(false)
  const [ended, setEnded]     = useState(false)
  const [rating, setRating]   = useState(0)
  const [muted, setMuted]     = useState(false)
  const [speaker, setSpeaker] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Countdown timer
  useEffect(() => {
    if (ended) return
    if (secs <= 0) { setEnded(true); return }
    const t = setInterval(() => setSecs(s => s - 1), 1000)
    return () => clearInterval(t)
  }, [secs, ended])

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:'smooth' })
  }, [msgs, typing])

  const fmt = (s: number) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`

  function sendMsg() {
    if (!input.trim()) return
    const newMsg = { id: Date.now(), from:'me', text:input.trim(), time: new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true}) }
    setMsgs(m => [...m, newMsg])
    setInput('')
    // Simulate listener typing + reply
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(m => [...m, {
        id: Date.now()+1, from:'them',
        text: "I hear you. That sounds really hard. Can you tell me more about when this started?",
        time: new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true})
      }])
    }, 2500)
  }

  if (ended) return (
    <>
      <style>{S}</style>
      <div className="session-wrap">
        <div className="session-header">
          <div className="avatar-sm">{initials}</div>
          <div className="header-info">
            <div className="header-name">{listenerName}</div>
            <div className="header-sub">Session ended</div>
          </div>
        </div>
        <div className="end-screen">
          <div className="end-icon">🙏</div>
          <h2 className="end-title">Session complete</h2>
          <p className="end-sub">How was your session with {listenerName}?</p>
          <div className="stars-row">
            {[1,2,3,4,5].map(s => (
              <button key={s} className={`star-btn${rating >= s ? ' lit':''}`} onClick={() => setRating(s)}>★</button>
            ))}
          </div>
          <button className="btn-done" onClick={() => router.push('/browse')}>
            {rating > 0 ? 'Submit & finish →' : 'Skip & finish →'}
          </button>
        </div>
        <div className="session-note">
          Your session has been logged. Wallet has been charged ₹{durationMin === 5 ? 0 : Math.round(durationMin * 10 * 1.1)}. Thank you for using LeanOn.
        </div>
      </div>
    </>
  )

  return (
    <>
      <style>{S}</style>
      <div className="session-wrap">
        {/* Header */}
        <div className="session-header">
          <div className="avatar-sm">{initials}</div>
          <div className="header-info">
            <div className="header-name">{listenerName}</div>
            <div className="header-sub">{durationMin}-min {sessionType} session</div>
          </div>
          <div className={`timer-chip${secs < 120 ? ' urgent':''}`}>{fmt(secs)}</div>
          <button className="end-btn" onClick={() => setEnded(true)}>End</button>
        </div>

        {sessionType === 'voice' ? (
          /* VOICE UI */
          <div className="voice-screen">
            <div className={`voice-avatar${typing ? ' speaking':''}`}>{initials}</div>
            <div className="voice-name">{listenerName}</div>
            <div className="voice-status">{typing ? '🎙️ Speaking...' : '🔊 Listening...'}</div>
            <div className="voice-controls">
              <button className={`voice-btn mute${muted ? ' on':''}`} onClick={() => setMuted(!muted)}>
                {muted ? '🔇' : '🎙️'}
              </button>
              <button className="voice-btn hang" onClick={() => setEnded(true)}>📵</button>
              <button className={`voice-btn speaker`} onClick={() => setSpeaker(!speaker)}>
                {speaker ? '🔊' : '🔈'}
              </button>
            </div>
            <p style={{fontSize:13,color:'var(--gray)',fontWeight:500,textAlign:'center',maxWidth:260,lineHeight:1.5}}>
              Voice integration via Agora.io — connect your Agora App ID in .env to activate live calls
            </p>
          </div>
        ) : (
          /* TEXT CHAT UI */
          <>
            <div className="messages">
              {msgs.map(m => (
                <div key={m.id} className={`msg ${m.from === 'me' ? 'me':'them'}`}>
                  {m.text}
                  <div className="msg-time">{m.time}</div>
                </div>
              ))}
              {typing && (
                <div className="typing">
                  <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
                </div>
              )}
              <div ref={bottomRef} />
            </div>
            <div className="input-bar">
              <textarea className="msg-input" rows={1} placeholder="Type your message..."
                value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg() } }} />
              <button className="send-btn" onClick={sendMsg} disabled={!input.trim()}>↑</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default function SessionPage({ params }: { params: Promise<{id: string}> }) {
  return <Suspense fallback={<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif',color:'#0F4867'}}>Starting session...</div>}><SessionContent /></Suspense>
}
