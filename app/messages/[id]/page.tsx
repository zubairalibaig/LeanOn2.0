'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;background:var(--light);}
.page{max-width:480px;margin:0 auto;background:white;min-height:100dvh;padding-bottom:100px;}
.topbar{background:var(--navy);padding:16px 18px 14px;display:flex;align-items:center;gap:12px;}
.back{width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.15);border:none;color:white;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.topbar-info{flex:1;min-width:0;}
.topbar-name{font-size:16px;font-weight:800;color:white;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.topbar-sub{font-size:12px;color:rgba(255,255,255,.65);font-weight:600;margin-top:1px;}
.av{width:38px;height:38px;border-radius:12px;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:white;flex-shrink:0;overflow:hidden;}
.av img{width:100%;height:100%;object-fit:cover;border-radius:12px;}
.status-bar{background:#FFF3E0;border-bottom:1px solid #FFE0B2;padding:10px 18px;font-size:12px;font-weight:700;color:#B35C00;text-align:center;}
.messages-area{padding:20px 18px;display:flex;flex-direction:column;gap:12px;}
.msg-bubble{background:var(--light);border:1.5px solid var(--border);border-radius:16px 16px 16px 4px;padding:14px 16px;max-width:85%;}
.msg-text{font-size:14px;font-weight:500;color:var(--navy);line-height:1.6;}
.msg-time{font-size:11px;color:var(--gray);font-weight:600;margin-top:6px;}
.msg-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;}
.cta-bar{position:fixed;bottom:60px;left:50%;transform:translateX(-50%);width:100%;max-width:480px;background:white;border-top:1px solid var(--border);padding:16px 20px;}
.btn-cta{width:100%;padding:15px;font-family:'Nunito',sans-serif;font-size:15px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:50px;cursor:pointer;}
.unread-badge{display:inline-block;background:var(--teal);color:white;font-size:10px;font-weight:800;padding:2px 8px;border-radius:50px;margin-left:8px;}
`

type MsgThread = {
  id: string
  seeker_id: string
  listener_id: string
  messages: string[]
  is_read: boolean
  created_at: string
  updated_at: string
  iAmListener: boolean
  otherName: string
  otherAvatar: string | null
  otherUserId: string
}

function ini(name?: string | null) {
  if (!name) return '?'
  return name.split(' ').map(x => x[0] || '').join('').slice(0, 2).toUpperCase()
}

function fmtTime(iso: string) {
  const d = new Date(iso)
  const diff = Date.now() - d.getTime()
  if (diff < 60_000) return 'Just now'
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`
  if (diff < 86_400_000) return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function MessageThreadPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [thread, setThread] = useState<MsgThread | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`/api/listener-messages/${params.id}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data || data.error) { setNotFound(true); return }
        setThread(data as MsgThread)
        // Mark as read if I'm the listener
        if (data.iAmListener && !data.is_read) {
          fetch(`/api/listener-messages/${params.id}`, { method: 'PATCH' }).catch(() => {})
        }
      })
      .catch(() => setNotFound(true))
  }, [params.id])

  if (notFound) return (
    <>
      <style>{S}</style>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Nunito,sans-serif', gap: 16, padding: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 48 }}>💬</div>
        <div style={{ fontSize: 18, fontWeight: 900, color: '#0F4867' }}>Message not found</div>
        <button style={{ background: '#FF9933', color: 'white', border: 'none', borderRadius: 50, padding: '12px 28px', fontFamily: 'Nunito,sans-serif', fontWeight: 800, cursor: 'pointer' }} onClick={() => router.push('/history')}>Back to Chats</button>
      </div>
    </>
  )

  if (!thread) return (
    <>
      <style>{S}</style>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Nunito,sans-serif', color: '#0F4867' }}>Loading…</div>
    </>
  )

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <button className="back" onClick={() => router.push('/history')}>←</button>
          <div className="av">
            {thread.otherAvatar
              ? <img src={thread.otherAvatar} alt="" />
              : ini(thread.otherName)}
          </div>
          <div className="topbar-info">
            <div className="topbar-name">{thread.otherName}</div>
            <div className="topbar-sub">
              {thread.iAmListener
                ? `Seeker left you a message${!thread.is_read ? ' · Unread' : ''}`
                : `Message sent · ${thread.messages.length} of 2 sent`}
            </div>
          </div>
        </div>

        <div className="status-bar">
          💌 Offline message request — not a live session
        </div>

        <div className="messages-area">
          <div className="msg-label">{thread.iAmListener ? thread.otherName : 'You'} wrote:</div>
          {thread.messages.map((msg, i) => (
            <div key={i}>
              <div className="msg-bubble">
                <div className="msg-text">{msg}</div>
                {i === 0 && <div className="msg-time">{fmtTime(thread.created_at)}</div>}
                {i > 0    && <div className="msg-time">{fmtTime(thread.updated_at)}</div>}
              </div>
            </div>
          ))}

          {thread.iAmListener && (
            <div style={{ marginTop: 12, background: '#F0F8FC', border: '1.5px solid #D5EEF6', borderRadius: 14, padding: '14px 16px', fontSize: 13, fontWeight: 600, color: '#5A7A8A', lineHeight: 1.6 }}>
              💡 To respond to {thread.otherName}, go online in your dashboard. They can then book a session with you directly.
            </div>
          )}

          {!thread.iAmListener && (
            <div style={{ marginTop: 12, background: 'rgba(52,199,89,.08)', border: '1px solid rgba(52,199,89,.3)', borderRadius: 14, padding: '14px 16px', fontSize: 13, fontWeight: 600, color: '#166534', lineHeight: 1.6 }}>
              ✅ {thread.otherName} will see your message when they next come online.
              {thread.messages.length < 2 && (
                <div style={{ marginTop: 6, fontSize: 12 }}>
                  You can send one more follow-up from their profile page.
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="cta-bar">
        {thread.iAmListener ? (
          <button className="btn-cta" onClick={() => router.push('/dashboard')}>
            Go online to receive their session →
          </button>
        ) : (
          <button className="btn-cta" onClick={() => router.push(`/listener/${thread.listener_id}`)}>
            Visit their profile to book →
          </button>
        )}
      </div>
    </>
  )
}
