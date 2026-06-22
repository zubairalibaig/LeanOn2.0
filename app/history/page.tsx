'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;background:var(--light);}
.page{max-width:480px;margin:0 auto;background:white;min-height:100dvh;padding-bottom:90px;}
.topbar{position:sticky;top:0;z-index:50;background:var(--navy);padding:16px 18px 14px;}
.topbar h1{font-size:20px;font-weight:900;color:white;}
.topbar p{font-size:12px;color:rgba(255,255,255,0.7);font-weight:600;margin-top:2px;}
.chat-row{display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:background .1s;}
.chat-row:hover{background:var(--light);}
.chat-row:active{background:#E8F4FD;}
.avatar{width:48px;height:48px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;color:white;flex-shrink:0;overflow:hidden;}
.avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
.active-ring{outline:2.5px solid #34C759;outline-offset:2px;}
.chat-body{flex:1;min-width:0;}
.chat-header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px;gap:8px;}
.chat-name{font-size:15px;font-weight:800;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.role-tag{font-size:10px;font-weight:800;padding:1px 7px;border-radius:50px;flex-shrink:0;}
.role-listener{background:#FFF3E0;color:#B35C00;}
.role-seeker{background:rgba(26,143,160,.12);color:#0d6e7e;}
.chat-time{font-size:11px;color:var(--gray);font-weight:600;flex-shrink:0;}
.chat-preview{display:flex;align-items:center;gap:6px;}
.preview-text{font-size:13px;color:var(--gray);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;}
.badge-active{display:inline-block;padding:2px 8px;border-radius:50px;font-size:10px;font-weight:800;background:#DCFCE7;color:#166534;flex-shrink:0;}
.badge-ended{display:inline-block;padding:2px 8px;border-radius:50px;font-size:10px;font-weight:800;background:var(--light);color:var(--gray);flex-shrink:0;}
.badge-missed{display:inline-block;padding:2px 8px;border-radius:50px;font-size:10px;font-weight:800;background:#FFEBEE;color:#C62828;flex-shrink:0;}
.role-missed{background:#FFEBEE;color:#C62828;}
.filter-tabs{display:flex;gap:8px;padding:12px 16px;background:white;border-bottom:1px solid var(--border);}
.filter-tab{flex:1;padding:8px 12px;border:1.5px solid var(--border);border-radius:50px;background:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;color:var(--gray);cursor:pointer;transition:all .15s;}
.filter-tab.active{background:var(--navy);color:white;border-color:var(--navy);}
.join-btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;padding:6px 14px;border-radius:8px;border:none;cursor:pointer;flex-shrink:0;}
.empty{text-align:center;padding:60px 24px;}
.empty-icon{font-size:48px;margin-bottom:16px;}
.empty h3{font-size:18px;font-weight:800;margin-bottom:8px;color:var(--navy);}
.empty p{font-size:14px;color:var(--gray);font-weight:500;margin-bottom:24px;line-height:1.6;}
.empty button{background:var(--orange);color:white;border:none;border-radius:50px;padding:12px 28px;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;cursor:pointer;}
.skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:8px;}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
`

type Party = { id: string; name?: string; avatar_url?: string }
type LastMsg = { content: string; created_at: string; sender_id: string } | null
type ChatRow = {
  id: string
  status: string
  session_type: string
  duration_mins: number
  amount_held: number
  started_at: string | null
  created_at: string
  ended_at: string | null
  iAmListener: boolean
  other: Party | null
  lastMsg: LastMsg
}
type OfflineMsgRow = {
  id: string
  kind: 'offline_msg'
  other: { name: string; avatar_url?: string | null } | null
  messages: string[]
  is_read: boolean
  iAmListener: boolean
  created_at: string
  updated_at: string
}
type DisplayItem =
  | { type: 'session'; row: ChatRow;      sortKey: string }
  | { type: 'msg';     row: OfflineMsgRow; sortKey: string }

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
// Supabase embeds can come back as an object or a single-element array — normalise.
function one(v: unknown): Party | null {
  if (!v) return null
  if (Array.isArray(v)) return (v.length > 0 ? v[0] : null) as Party | null
  return v as Party
}

export default function HistoryPage() {
  const router = useRouter()
  const sb = createClient()
  const [items, setItems] = useState<DisplayItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'completed' | 'missed'>('all')

  useEffect(() => { load() }, [])

  async function load() {
    try {
      const { data: { user } } = await sb.auth.getUser()
      if (!user) { router.push('/auth?redirect=/history'); return }

      // Fetch sessions and offline message requests in parallel
      const [sessionsRes, offlineMsgsRes] = await Promise.all([
        sb
          .from('sessions')
          .select(`id, status, session_type, duration_mins, amount_held, started_at, created_at, ended_at, seeker_id, listener_id,
            listener:users!listener_id(id, name, avatar_url),
            seeker:users!seeker_id(id, name, avatar_url)`)
          .or(`seeker_id.eq.${user.id},listener_id.eq.${user.id}`)
          .order('created_at', { ascending: false })
          .limit(50),
        fetch('/api/listener-messages').then(r => r.ok ? r.json() : { sent: [], received: [] }).catch(() => ({ sent: [], received: [] })),
      ])

      const data = sessionsRes.data ?? []

      const withMsgs: ChatRow[] = await Promise.all(
        data.map(async (s) => {
          const iAmListener = s.listener_id === user.id
          const other = iAmListener ? one(s.seeker) : one(s.listener)
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
            created_at: s.created_at,
            ended_at: s.ended_at,
            iAmListener,
            other,
            lastMsg: msg as LastMsg,
          }
        })
      )

      // Build offline message rows from both sent and received
      const sentMsgs: OfflineMsgRow[] = ((offlineMsgsRes.sent ?? []) as Array<{id:string;listener_id:string;messages:string[];is_read:boolean;updated_at:string;created_at:string;otherName:string;otherAvatar:string|null}>).map(m => ({
        id: m.id, kind: 'offline_msg' as const,
        other: { name: m.otherName, avatar_url: m.otherAvatar },
        messages: m.messages, is_read: m.is_read, iAmListener: false,
        created_at: m.created_at, updated_at: m.updated_at,
      }))
      const recvMsgs: OfflineMsgRow[] = ((offlineMsgsRes.received ?? []) as Array<{id:string;seeker_id:string;messages:string[];is_read:boolean;updated_at:string;created_at:string;otherName:string;otherAvatar:string|null}>).map(m => ({
        id: m.id, kind: 'offline_msg' as const,
        other: { name: m.otherName, avatar_url: m.otherAvatar },
        messages: m.messages, is_read: m.is_read, iAmListener: true,
        created_at: m.created_at, updated_at: m.updated_at,
      }))

      // Combine into unified display list, active sessions first then by recency
      const sessionItems: DisplayItem[] = withMsgs.map(r => ({
        type: 'session' as const, row: r,
        sortKey: r.lastMsg?.created_at || r.ended_at || r.started_at || r.created_at,
      }))
      const msgItems: DisplayItem[] = [...sentMsgs, ...recvMsgs].map(r => ({
        type: 'msg' as const, row: r,
        sortKey: r.updated_at || r.created_at,
      }))

      const all: DisplayItem[] = [...sessionItems, ...msgItems].sort((a, b) => {
        if (a.type === 'session' && a.row.status === 'active') return -1
        if (b.type === 'session' && b.row.status === 'active') return 1
        return new Date(b.sortKey).getTime() - new Date(a.sortKey).getTime()
      })

      setItems(all)
    } catch {
      // silent — show empty state
    }
    setLoading(false)
  }

  function openRow(r: ChatRow) {
    if (r.status === 'active') {
      router.push(`/session/${r.id}?name=${encodeURIComponent(r.other?.name || 'User')}&duration=${r.duration_mins}&type=${r.session_type}`)
    } else {
      router.push(`/history/${r.id}`)
    }
  }

  function preview(r: ChatRow) {
    if (!r.lastMsg) {
      if (r.status === 'active') return 'Session in progress…'
      if (r.status === 'cancelled') {
        // No conversation ever happened — distinguish missed (listener) vs cancelled (seeker)
        return r.iAmListener
          ? '⏰ Missed — no response in time'
          : 'Request cancelled — fully refunded'
      }
      if (r.status === 'pending') return 'Awaiting response…'
      return `${r.duration_mins}-min ${r.session_type} session`
    }
    const text = r.lastMsg.content.slice(0, 56) + (r.lastMsg.content.length > 56 ? '…' : '')
    const incoming = r.lastMsg.sender_id === r.other?.id
    return incoming ? text : `You: ${text}`
  }

  function msgPreview(m: OfflineMsgRow) {
    const text = (m.messages[0] ?? '').slice(0, 56)
    return m.iAmListener ? text : `You: ${text}`
  }

  // Apply the active filter. Messages and active/pending sessions only show under "All".
  const visibleItems = items.filter(it => {
    if (filter === 'all') return true
    if (it.type === 'msg') return false
    if (filter === 'completed') return it.row.status === 'completed'
    if (filter === 'missed')    return it.row.status === 'cancelled'
    return true
  })

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <h1>Chats</h1>
          <p>Your conversations and session history</p>
        </div>

        <div className="filter-tabs">
          {(['all', 'completed', 'missed'] as const).map(f => (
            <button
              key={f}
              className={`filter-tab${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'completed' ? 'Completed' : 'Missed'}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ padding: '8px 16px' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                <div className="skeleton" style={{ width: 48, height: 48, borderRadius: '50%', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div className="skeleton" style={{ height: 14, width: '55%', marginBottom: 8 }} />
                  <div className="skeleton" style={{ height: 12, width: '80%' }} />
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">💬</div>
            <h3>No conversations yet</h3>
            <p>When you talk to a listener — or a seeker talks to you — your chats will appear here. Your first 5 minutes are free.</p>
            <button onClick={() => router.push('/browse')}>Find a listener →</button>
          </div>
        ) : visibleItems.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">{filter === 'missed' ? '⏰' : '✅'}</div>
            <h3>No {filter} sessions</h3>
            <p>{filter === 'missed'
              ? 'You haven’t missed any requests. Nice — keep it up!'
              : 'No completed sessions yet. Your finished conversations will show here.'}</p>
            <button onClick={() => setFilter('all')}>Show all →</button>
          </div>
        ) : (
          visibleItems.map(item => {
            if (item.type === 'session') {
              const r = item.row
              return (
                <div key={`s-${r.id}`} className="chat-row" onClick={() => openRow(r)}>
                  <div className={`avatar${r.status === 'active' ? ' active-ring' : ''}`}>
                    {r.other?.avatar_url ? <img src={r.other.avatar_url} alt="" /> : ini(r.other?.name)}
                  </div>
                  <div className="chat-body">
                    <div className="chat-header">
                      <span className="chat-name">{r.other?.name || (r.iAmListener ? 'Seeker' : 'Listener')}</span>
                      {r.status === 'cancelled'
                        ? <span className="role-tag role-missed">{r.iAmListener ? '⏰ Missed' : 'Cancelled'}</span>
                        : <span className={`role-tag ${r.iAmListener ? 'role-listener' : 'role-seeker'}`}>
                            {r.iAmListener ? 'You listened' : 'You talked'}
                          </span>}
                    </div>
                    <div className="chat-preview">
                      <span className="preview-text">{preview(r)}</span>
                      {r.status === 'active'
                        ? <span className="badge-active">Active</span>
                        : r.status === 'cancelled'
                          ? <span className="badge-missed">{fmtTime(r.ended_at || r.created_at)}</span>
                          : <span className="badge-ended">{fmtTime(r.lastMsg?.created_at || r.ended_at || r.created_at)}</span>}
                    </div>
                  </div>
                  {r.status === 'active' && (
                    <button className="join-btn" onClick={e => { e.stopPropagation(); openRow(r) }}>
                      {r.iAmListener ? 'Join' : 'Rejoin'}
                    </button>
                  )}
                </div>
              )
            }

            // Offline message request row
            const m = item.row
            return (
              <div key={`m-${m.id}`} className="chat-row" onClick={() => router.push(`/messages/${m.id}`)}>
                <div className="avatar">
                  {m.other?.avatar_url ? <img src={m.other.avatar_url} alt="" /> : ini(m.other?.name)}
                </div>
                <div className="chat-body">
                  <div className="chat-header">
                    <span className="chat-name">{m.other?.name || (m.iAmListener ? 'Seeker' : 'Listener')}</span>
                    <span className="role-tag" style={{background:'#F3E8FF',color:'#6B21A8'}}>
                      {m.iAmListener ? (m.is_read ? '✉️ Message' : '✉️ New') : '✉️ Message sent'}
                    </span>
                  </div>
                  <div className="chat-preview">
                    <span className="preview-text">{msgPreview(m)}</span>
                    <span className="badge-ended">{fmtTime(m.updated_at || m.created_at)}</span>
                  </div>
                </div>
                {m.iAmListener && !m.is_read && (
                  <div style={{width:10,height:10,borderRadius:'50%',background:'#7C3AED',flexShrink:0}} />
                )}
              </div>
            )
          })
        )}
      </div>
    </>
  )
}
