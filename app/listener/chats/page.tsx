'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;background:var(--light);}
  .page{max-width:480px;margin:0 auto;background:white;min-height:100dvh;}
  .topbar{position:sticky;top:0;z-index:50;background:var(--navy);padding:14px 16px 12px;display:flex;align-items:center;gap:12px;}
  .back-btn{background:none;border:none;cursor:pointer;font-size:20px;color:white;padding:4px;line-height:1;}
  .topbar h1{font-size:18px;font-weight:900;color:white;flex:1;}
  .online-dot{width:10px;height:10px;border-radius:50%;background:#34C759;flex-shrink:0;}
  .chat-row{display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:background .1s;}
  .chat-row:hover{background:var(--light);}
  .chat-row:active{background:#E8F4FD;}
  .avatar{width:48px;height:48px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;color:white;flex-shrink:0;overflow:hidden;position:relative;}
  .avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
  .active-ring{outline:2.5px solid #34C759;outline-offset:2px;}
  .chat-body{flex:1;min-width:0;}
  .chat-header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px;}
  .chat-name{font-size:15px;font-weight:800;color:var(--navy);}
  .chat-time{font-size:11px;color:var(--gray);font-weight:600;flex-shrink:0;}
  .chat-preview{display:flex;align-items:center;gap:4px;}
  .preview-text{font-size:13px;color:var(--gray);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;}
  .badge-active{display:inline-block;padding:2px 8px;border-radius:50px;font-size:10px;font-weight:800;background:#DCFCE7;color:#166534;}
  .badge-ended{display:inline-block;padding:2px 8px;border-radius:50px;font-size:10px;font-weight:800;background:var(--light);color:var(--gray);}
  .empty{text-align:center;padding:60px 20px;color:var(--gray);}
  .empty-icon{font-size:52px;margin-bottom:16px;}
  .empty h3{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .empty p{font-size:14px;font-weight:500;line-height:1.6;}
  .skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:8px;}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  .join-btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;padding:6px 14px;border-radius:8px;border:none;cursor:pointer;flex-shrink:0;}
`

type Seeker = { id: string; name?: string; avatar_url?: string }
type LastMsg = { content: string; created_at: string; sender_id: string } | null
type ChatSession = {
  id: string
  status: string
  session_type: string
  duration_mins: number
  amount_held: number
  started_at: string
  ended_at?: string | null
  seeker: Seeker | null
  lastMsg: LastMsg
}

function ini(n?: string | null) {
  if (!n) return '?'
  return n.split(' ').map(x => x[0] || '').join('').slice(0, 2).toUpperCase()
}

function fmtTime(iso: string) {
  const d = new Date(iso)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  if (diff < 60_000) return 'Now'
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`
  if (diff < 86_400_000) return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  if (diff < 604_800_000) return days[d.getDay()]
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
}

export default function ListenerChats() {
  const router = useRouter()
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => { loadChats() }, [])

  async function loadChats() {
    const { data: { user } } = await sb.auth.getUser()
    if (!user) { router.push('/auth?redirect=/listener/chats'); return }
    setUserId(user.id)

    const { data: raw } = await sb
      .from('sessions')
      .select('id, status, session_type, duration_mins, amount_held, started_at, ended_at, users!seeker_id(id, name, avatar_url)')
      .eq('listener_id', user.id)
      .order('started_at', { ascending: false })
      .limit(50)

    if (!raw) { setLoading(false); return }

    // Fetch last message for each session in parallel
    const withMsgs: ChatSession[] = await Promise.all(
      raw.map(async (s) => {
        const seekerRaw = s.users as unknown
        const seeker: Seeker | null = seekerRaw && !Array.isArray(seekerRaw)
          ? seekerRaw as Seeker
          : Array.isArray(seekerRaw) && (seekerRaw as Seeker[]).length > 0
            ? (seekerRaw as Seeker[])[0]
            : null

        const { data: msg } = await sb
          .from('messages')
          .select('content, created_at, sender_id')
          .eq('session_id', s.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle()

        return {
          id: s.id,
          status: s.status,
          session_type: s.session_type,
          duration_mins: s.duration_mins,
          amount_held: s.amount_held,
          started_at: s.started_at,
          ended_at: s.ended_at,
          seeker,
          lastMsg: msg as LastMsg,
        }
      })
    )

    // Sort: active first, then by most recent message or start time
    withMsgs.sort((a, b) => {
      if (a.status === 'active' && b.status !== 'active') return -1
      if (b.status === 'active' && a.status !== 'active') return 1
      const aT = a.lastMsg?.created_at || a.ended_at || a.started_at
      const bT = b.lastMsg?.created_at || b.ended_at || b.started_at
      return new Date(bT).getTime() - new Date(aT).getTime()
    })

    setSessions(withMsgs)
    setLoading(false)
  }

  function openSession(s: ChatSession) {
    if (s.status === 'active') {
      router.push(`/session/${s.id}?name=${encodeURIComponent(s.seeker?.name || 'Seeker')}&duration=${s.duration_mins}&type=${s.session_type}`)
    } else {
      router.push(`/listener/chats/${s.id}`)
    }
  }

  function previewText(s: ChatSession, myId: string | null) {
    if (!s.lastMsg) {
      if (s.status === 'active') return 'Session in progress...'
      return `${s.duration_mins}-min ${s.session_type} session`
    }
    const isMe = s.lastMsg.sender_id === myId
    const preview = s.lastMsg.content.slice(0, 60) + (s.lastMsg.content.length > 60 ? '...' : '')
    return isMe ? `You: ${preview}` : preview
  }

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <button className="back-btn" onClick={() => router.push('/dashboard')}>←</button>
          <h1>My Chats</h1>
        </div>

        {loading ? (
          <div style={{ padding: '16px' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                <div className="skeleton" style={{ width: 48, height: 48, borderRadius: '50%', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div className="skeleton" style={{ height: 14, width: '60%', marginBottom: 8 }} />
                  <div className="skeleton" style={{ height: 12, width: '80%' }} />
                </div>
              </div>
            ))}
          </div>
        ) : sessions.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">💬</div>
            <h3>No chats yet</h3>
            <p>When seekers book sessions with you, their conversations will appear here.</p>
          </div>
        ) : (
          sessions.map(s => (
            <div key={s.id} className="chat-row" onClick={() => openSession(s)}>
              <div className={`avatar${s.status === 'active' ? ' active-ring' : ''}`}>
                {s.seeker?.avatar_url
                  ? <img src={s.seeker.avatar_url} alt="" />
                  : ini(s.seeker?.name)}
              </div>
              <div className="chat-body">
                <div className="chat-header">
                  <span className="chat-name">{s.seeker?.name || 'Seeker'}</span>
                  <span className="chat-time">
                    {fmtTime(s.lastMsg?.created_at || s.ended_at || s.started_at)}
                  </span>
                </div>
                <div className="chat-preview">
                  <span className="preview-text">{previewText(s, userId)}</span>
                  {s.status === 'active'
                    ? <span className="badge-active">Active</span>
                    : <span className="badge-ended">{s.duration_mins}m</span>}
                </div>
              </div>
              {s.status === 'active' && (
                <button
                  className="join-btn"
                  onClick={e => { e.stopPropagation(); openSession(s) }}
                >
                  Join
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </>
  )
}
