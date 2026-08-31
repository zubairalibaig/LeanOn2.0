'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import Avatar from '@/app/components/Avatar'

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;}
  .wrap{display:flex;flex-direction:column;height:100dvh;max-width:480px;margin:0 auto;background:#E8F4FD;}
  .hdr{background:var(--navy);padding:10px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;position:sticky;top:0;z-index:50;}
  .back-btn{background:none;border:none;cursor:pointer;font-size:20px;color:white;padding:4px;line-height:1;flex-shrink:0;}
  .av{width:40px;height:40px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:white;flex-shrink:0;overflow:hidden;}
  .av img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
  .hdr-info{flex:1;}
  .hdr-name{font-size:16px;font-weight:700;color:white;}
  .hdr-sub{font-size:12px;color:rgba(255,255,255,0.7);font-weight:500;}
  .msgs{flex:1;overflow-y:auto;padding:12px 8px 20px;display:flex;flex-direction:column;gap:3px;}
  .msgs::-webkit-scrollbar{width:3px;}
  .msgs::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.15);border-radius:2px;}
  .date-pill{align-self:center;background:rgba(255,255,255,0.85);color:#4A6B7E;font-size:12px;font-weight:600;padding:4px 12px;border-radius:8px;margin:8px 0;box-shadow:0 1px 2px rgba(0,0,0,0.1);}
  .msg-wrap{display:flex;flex-direction:column;max-width:80%;}
  .msg-wrap.me{align-self:flex-end;align-items:flex-end;}
  .msg-wrap.them{align-self:flex-start;align-items:flex-start;}
  .bubble{padding:10px 14px;border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,0.13);margin:4px 0;word-break:break-word;}
  .bubble.me{background:var(--teal);color:white;border-radius:18px 18px 4px 18px;}
  .bubble.them{background:#FFFFFF;color:var(--navy);border-radius:18px 18px 18px 4px;}
  .bubble-text{font-size:14px;font-weight:500;line-height:1.5;word-break:break-word;}
  .bubble.me .bubble-text{color:white;}
  .bubble.them .bubble-text{color:#0F2233;}
  .bubble-time{font-size:11px;font-weight:500;margin-top:2px;}
  .bubble.me .bubble-time{color:rgba(255,255,255,0.75);}
  .bubble.them .bubble-time{color:#4A6B7E;}
  .ended-note{background:rgba(255,255,255,0.8);text-align:center;padding:10px 16px;font-size:12px;color:var(--gray);font-weight:600;border-radius:8px;margin:8px auto;max-width:280px;}
  .readonly-bar{background:rgba(15,72,103,0.06);border-top:1px solid rgba(15,72,103,0.1);padding:12px 16px;text-align:center;font-size:13px;color:var(--gray);font-weight:600;flex-shrink:0;}
  .loading{flex:1;display:flex;align-items:center;justify-content:center;color:var(--gray);font-weight:600;}
  .empty-msgs{align-self:center;background:rgba(255,255,255,0.85);padding:16px 24px;border-radius:12px;font-size:14px;color:var(--gray);font-weight:600;margin:auto;}
`

type Msg = { id: string; sender_id: string; content: string; created_at: string }
type Party = { name?: string; avatar_url?: string }
type SessionInfo = {
  id: string; duration_mins: number; session_type: string
  started_at: string | null; ended_at?: string | null
  seeker_id: string; listener_id: string
  other: Party | null
  iAmListener: boolean
}

function ini(n?: string | null) {
  if (!n) return '?'
  return n.split(' ').map(x => x[0] || '').join('').slice(0, 2).toUpperCase()
}
function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
}
function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
}
function sameDay(a: string, b: string) {
  return new Date(a).toDateString() === new Date(b).toDateString()
}
function one(v: unknown): Party | null {
  if (!v) return null
  if (Array.isArray(v)) return (v.length > 0 ? v[0] : null) as Party | null
  return v as Party
}

export default function ChatHistoryPage() {
  const router = useRouter()
  const params = useParams()
  const sb = createClient()
  const sessionId = params.id as string
  const [session, setSession] = useState<SessionInfo | null>(null)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { loadHistory() }, [])

  useEffect(() => {
    if (!loading) bottomRef.current?.scrollIntoView()
  }, [loading])

  async function loadHistory() {
    const { data: { user } } = await sb.auth.getUser()
    if (!user) { router.push('/auth'); return }
    setUserId(user.id)

    const { data: sess, error: sErr } = await sb
      .from('sessions')
      .select(`id, duration_mins, session_type, started_at, ended_at, seeker_id, listener_id,
        listener:users!listener_id(name, avatar_url),
        seeker:users!seeker_id(name, avatar_url)`)
      .eq('id', sessionId)
      .single()

    if (sErr || !sess) { setError('Conversation not found.'); setLoading(false); return }

    // Either participant may view their own session history.
    if (sess.listener_id !== user.id && sess.seeker_id !== user.id) { router.push('/history'); return }

    const iAmListener = sess.listener_id === user.id
    const other = iAmListener ? one(sess.seeker) : one(sess.listener)
    setSession({ ...sess, other, iAmListener })

    const { data: messages } = await sb
      .from('messages')
      .select('id, sender_id, content, created_at')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })

    setMsgs((messages || []) as Msg[])
    setLoading(false)
  }

  if (loading) {
    return (
      <>
        <style>{S}</style>
        <div className="wrap"><div className="loading">Loading conversation…</div></div>
      </>
    )
  }

  if (error || !session) {
    return (
      <>
        <style>{S}</style>
        <div className="wrap">
          <div className="hdr">
            <button className="back-btn" onClick={() => router.push('/history')}>←</button>
            <div className="hdr-info"><div className="hdr-name">Chat history</div></div>
          </div>
          <div className="loading">{error || 'Conversation not found.'}</div>
        </div>
      </>
    )
  }

  const otherName = session.other?.name || (session.iAmListener ? 'Seeker' : 'Listener')
  const sessionDate = session.started_at ? fmtDate(session.started_at) : ''
  const endedAt = session.ended_at
    ? new Date(session.ended_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
    : null

  return (
    <>
      <style>{S}</style>
      <div className="wrap">
        <div className="hdr">
          <button className="back-btn" onClick={() => router.push('/history')}>←</button>
          <div className="av">
            {session.other?.avatar_url ? <Avatar src={session.other.avatar_url} size={96} /> : ini(otherName)}
          </div>
          <div className="hdr-info">
            <div className="hdr-name">{otherName}</div>
            <div className="hdr-sub">{session.duration_mins}-min {session.session_type}{sessionDate ? ` · ${sessionDate}` : ''}</div>
          </div>
        </div>

        <div className="msgs">
          {msgs.length === 0 ? (
            <div className="empty-msgs">No messages in this session</div>
          ) : msgs.map((msg, idx) => {
            const isMe = msg.sender_id === userId
            const showDate = idx === 0 || !sameDay(msgs[idx - 1].created_at, msg.created_at)
            return (
              <div key={msg.id}>
                {showDate && <div className="date-pill">{fmtDate(msg.created_at)}</div>}
                <div className={`msg-wrap ${isMe ? 'me' : 'them'}`}>
                  <div className={`bubble ${isMe ? 'me' : 'them'}`}>
                    <div className="bubble-text">{msg.content}</div>
                    <div className="bubble-time">{fmtTime(msg.created_at)}</div>
                  </div>
                </div>
              </div>
            )
          })}
          {endedAt && <div className="ended-note">Session ended at {endedAt}</div>}
          <div ref={bottomRef} />
        </div>

        <div className="readonly-bar">
          Read-only · This session has ended
        </div>
      </div>
    </>
  )
}
