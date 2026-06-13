'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

type Notification = {
  id:         string
  type:       string
  title:      string
  body:       string
  action_url: string | null
  is_read:    boolean
  created_at: string
}

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60_000)
  const h = Math.floor(m / 60)
  const d = Math.floor(h / 24)
  if (m < 1)  return 'just now'
  if (m < 60) return `${m}m ago`
  if (h < 24) return `${h}h ago`
  return `${d}d ago`
}

export default function NotificationsBell() {
  const router = useRouter()
  const [open,         setOpen]         = useState(false)
  const [notifs,       setNotifs]       = useState<Notification[]>([])
  const [unread,       setUnread]       = useState(0)
  const [userId,       setUserId]       = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    sb.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id)
    })
  }, [])

  useEffect(() => {
    if (!userId) return
    fetchNotifs()

    const channel = sb
      .channel(`notifs:${userId}`)
      .on('postgres_changes' as 'postgres_changes', {
        event:  'INSERT',
        schema: 'public',
        table:  'notifications',
        filter: `user_id=eq.${userId}`,
      }, (payload: { new: Notification }) => {
        setNotifs(prev => [payload.new, ...prev].slice(0, 20))
        setUnread(c => c + 1)
      })
      .subscribe()

    return () => { sb.removeChannel(channel) }
  }, [userId])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  async function fetchNotifs() {
    const res = await fetch('/api/notifications?limit=5&page=0').catch(() => null)
    if (!res?.ok) return
    const json = await res.json()
    setNotifs(json.notifications ?? [])
    setUnread(json.unreadCount ?? 0)
  }

  async function markAllRead() {
    setUnread(0)
    setNotifs(prev => prev.map(n => ({ ...n, is_read: true })))
    await fetch('/api/notifications', {
      method:  'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ all: true }),
    }).catch(() => {})
  }

  if (!userId) return null

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o) }}
        aria-label={`Notifications${unread > 0 ? ` — ${unread} unread` : ''}`}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          position: 'relative', padding: '8px', display: 'flex', alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 22 }}>🔔</span>
        {unread > 0 && (
          <span style={{
            position: 'absolute', top: 4, right: 4,
            background: '#FF3B30', color: 'white',
            fontSize: 10, fontWeight: 800,
            width: 16, height: 16, borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Nunito', sans-serif",
          }}>
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {open && (
        <div style={{
          position: 'absolute', right: 0, bottom: '100%',
          background: 'white', borderRadius: 16,
          border: '1.5px solid #D5EEF6',
          boxShadow: '0 8px 32px rgba(15,72,103,0.15)',
          width: 300, zIndex: 500,
          fontFamily: "'Nunito', sans-serif",
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 16px', borderBottom: '1.5px solid #D5EEF6',
          }}>
            <span style={{ fontWeight: 800, fontSize: 14, color: '#0F4867' }}>Notifications</span>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              {unread > 0 && (
                <button
                  onClick={markAllRead}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: '#5A7A8A' }}
                >
                  Mark all read
                </button>
              )}
              <a href="/notifications" style={{ fontSize: 12, fontWeight: 700, color: '#1A8FA0', textDecoration: 'none' }}>
                View all
              </a>
            </div>
          </div>

          {notifs.length === 0 ? (
            <div style={{ padding: '24px 16px', textAlign: 'center', color: '#8AAAB8', fontSize: 13, fontWeight: 600 }}>
              No notifications yet
            </div>
          ) : (
            <div>
              {notifs.map(n => {
                const safeUrl = n.action_url && n.action_url.startsWith('/') && !n.action_url.startsWith('//')
                  ? n.action_url : null
                return (
                <a
                  key={n.id}
                  href={safeUrl || undefined}
                  onClick={(e) => { e.preventDefault(); setOpen(false); if (safeUrl) router.push(safeUrl) }}
                  style={{
                    display: 'block', padding: '12px 16px',
                    borderBottom: '1px solid #EFF6FA',
                    textDecoration: 'none',
                    cursor: safeUrl ? 'pointer' : 'default',
                    background: n.is_read ? 'white' : '#F0F8FC',
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0F4867', marginBottom: 3 }}>{n.title}</div>
                  <div style={{ fontSize: 12, color: '#5A7A8A', fontWeight: 500, lineHeight: 1.5, marginBottom: 4 }}>
                    {(n.body ?? '').slice(0, 80)}{(n.body ?? '').length > 80 ? '…' : ''}
                  </div>
                  <div style={{ fontSize: 11, color: '#8AAAB8', fontWeight: 600 }}>{timeAgo(n.created_at)}</div>
                </a>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
