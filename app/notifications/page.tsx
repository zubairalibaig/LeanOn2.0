'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Notification = {
  id:         string
  type:       string
  title:      string
  body:       string
  action_url: string | null
  is_read:    boolean
  created_at: string
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60_000)
  const h = Math.floor(m / 60)
  const d = Math.floor(h / 24)
  if (m < 1)  return 'just now'
  if (m < 60) return `${m}m ago`
  if (h < 24) return `${h}h ago`
  if (d < 7)  return `${d}d ago`
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
}

function groupByDate(notifs: Notification[]): { label: string; items: Notification[] }[] {
  const now    = new Date()
  const today  = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const yester = today - 86400_000
  const week   = today - 7 * 86400_000

  const groups: Record<string, Notification[]> = {}
  for (const n of notifs) {
    const t = new Date(n.created_at).getTime()
    const k = t >= today ? 'Today' : t >= yester ? 'Yesterday' : t >= week ? 'This week' : 'Earlier'
    if (!groups[k]) groups[k] = []
    groups[k].push(n)
  }

  return ['Today', 'Yesterday', 'This week', 'Earlier']
    .filter(k => groups[k])
    .map(k => ({ label: k, items: groups[k] }))
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;background:#F0F8FC;-webkit-font-smoothing:antialiased;}
  .page{max-width:480px;margin:0 auto;padding:0 0 90px;}
  .topbar{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 14px;background:white;border-bottom:1.5px solid #D5EEF6;position:sticky;top:0;z-index:10;}
  .topbar-left{display:flex;align-items:center;gap:10px;}
  .back{width:36px;height:36px;border-radius:10px;background:#F0F8FC;border:1.5px solid #D5EEF6;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;color:#0F4867;}
  h1{font-size:20px;font-weight:900;}
  .mark-all{font-size:13px;font-weight:700;color:#1A8FA0;background:none;border:none;cursor:pointer;}
  .group-label{font-size:12px;font-weight:800;color:#5A7A8A;text-transform:uppercase;letter-spacing:.06em;padding:14px 20px 8px;}
  .notif-row{display:flex;align-items:flex-start;gap:12px;padding:14px 20px;background:white;border-bottom:1px solid #EFF6FA;cursor:pointer;text-decoration:none;transition:background .15s;}
  .notif-row:hover{background:#F8FBFD;}
  .notif-row.unread{background:#F0F8FC;}
  .notif-dot{width:8px;height:8px;border-radius:4px;background:#1A8FA0;flex-shrink:0;margin-top:6px;}
  .notif-dot.read{background:transparent;}
  .notif-body{flex:1;}
  .notif-title{font-size:14px;font-weight:800;color:#0F4867;margin-bottom:3px;}
  .notif-text{font-size:13px;color:#5A7A8A;font-weight:500;line-height:1.5;margin-bottom:4px;}
  .notif-time{font-size:11px;color:#8AAAB8;font-weight:600;}
  .empty{text-align:center;padding:60px 20px;color:#5A7A8A;font-size:14px;font-weight:600;}
  .load-more{display:block;width:100%;padding:14px;background:white;border:1.5px solid #D5EEF6;border-radius:12px;margin:16px 20px;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;color:#1A8FA0;cursor:pointer;width:calc(100% - 40px);}
`

const LIMIT = 20

export default function NotificationsPage() {
  const router  = useRouter()
  const [notifs,  setNotifs]  = useState<Notification[]>([])
  const [page,    setPage]    = useState(0)
  const [total,   setTotal]   = useState(0)
  const [loading, setLoading] = useState(true)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const load = useCallback(async (p: number) => {
    const { data: { session } } = await sb.auth.getSession()
    if (!session) { router.replace('/auth?redirect=/notifications'); return }
    const { data: { user } } = await sb.auth.getUser()
    if (!user) { router.replace('/auth?redirect=/notifications'); return }

    const res = await fetch(`/api/notifications?page=${p}&limit=${LIMIT}`).catch(() => null)
    if (!res?.ok) return
    const json = await res.json()
    setNotifs(prev => p === 0 ? json.notifications : [...prev, ...json.notifications])
    setTotal(json.total ?? 0)
    setLoading(false)
  }, [router])

  useEffect(() => {
    // Fast session check (reads local storage/cookie — no network request)
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.replace('/auth?redirect=/notifications'); return }
      load(0)
    })
  }, [load, router])

  // Mark visible unread notifications as read via IntersectionObserver
  useEffect(() => {
    const unreadIds: string[] = []

    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).dataset.id
          const isUnread = (entry.target as HTMLElement).dataset.unread === 'true'
          if (id && isUnread && !unreadIds.includes(id)) {
            unreadIds.push(id)
          }
        }
      })

      if (unreadIds.length > 0) {
        const toMark = [...unreadIds]
        unreadIds.length = 0
        setNotifs(prev => prev.map(n => toMark.includes(n.id) ? { ...n, is_read: true } : n))
        fetch('/api/notifications', {
          method:  'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids: toMark }),
        }).catch(() => {})
      }
    }, { threshold: 0.5 })

    return () => observerRef.current?.disconnect()
  }, [])

  function attachObserver(el: HTMLElement | null) {
    if (el && observerRef.current) observerRef.current.observe(el)
  }

  async function markAllRead() {
    setNotifs(prev => prev.map(n => ({ ...n, is_read: true })))
    await fetch('/api/notifications', {
      method:  'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ all: true }),
    }).catch(() => {})
  }

  const grouped = groupByDate(notifs)

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <div className="topbar-left">
            <button className="back" onClick={() => router.back()}>←</button>
            <h1>Notifications</h1>
          </div>
          {notifs.some(n => !n.is_read) && (
            <button className="mark-all" onClick={markAllRead}>Mark all read</button>
          )}
        </div>

        {loading ? (
          <div className="empty">Loading…</div>
        ) : notifs.length === 0 ? (
          <div className="empty">
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔔</div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8, color: '#0F4867' }}>All caught up!</div>
            <div style={{ fontSize: 14, color: '#5A7A8A', lineHeight: 1.6 }}>Notifications about your sessions and account will appear here.</div>
          </div>
        ) : (
          <>
            {grouped.map(group => (
              <div key={group.label}>
                <div className="group-label">{group.label}</div>
                {group.items.map(n => (
                  <a
                    key={n.id}
                    href={n.action_url ?? '#'}
                    className={`notif-row${!n.is_read ? ' unread' : ''}`}
                    data-id={n.id}
                    data-unread={String(!n.is_read)}
                    ref={attachObserver}
                  >
                    <div className={`notif-dot${n.is_read ? ' read' : ''}`} />
                    <div className="notif-body">
                      <div className="notif-title">{n.title}</div>
                      <div className="notif-text">{n.body}</div>
                      <div className="notif-time">{timeAgo(n.created_at)}</div>
                    </div>
                  </a>
                ))}
              </div>
            ))}

            {notifs.length < total && (
              <button className="load-more" onClick={() => { const next = page + 1; setPage(next); load(next) }}>
                Load more
              </button>
            )}
          </>
        )}
      </div>
    </>
  )
}
