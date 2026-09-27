'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

let _sb: ReturnType<typeof createBrowserClient> | null = null
function getSb() {
  if (!_sb) _sb = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  return _sb
}

type LoungeMsg = {
  id: string
  sender_id: string
  content: string
  created_at: string
  users: { name: string | null } | null
  temp?: boolean
  deleted?: boolean
}

const REPORT_REASONS = [
  { value: 'inappropriate_sexual', label: 'Sexual / inappropriate content' },
  { value: 'harassment',           label: 'Harassment or personal attack' },
  { value: 'spam',                 label: 'Spam or solicitation' },
  { value: 'seeker_privacy',       label: 'Seeker privacy violation' },
  { value: 'other',                label: 'Other' },
]

function fmtTime(iso: string) {
  const d = new Date(iso)
  const now = new Date()
  const isToday = d.toDateString() === now.toDateString()
  const yesterday = new Date(now); yesterday.setDate(now.getDate() - 1)
  const isYesterday = d.toDateString() === yesterday.toDateString()
  const time = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  if (isToday) return time
  if (isYesterday) return `Yesterday ${time}`
  return `${d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} ${time}`
}

function dayLabel(iso: string) {
  const d = new Date(iso)
  const now = new Date()
  if (d.toDateString() === now.toDateString()) return 'Today'
  const yesterday = new Date(now); yesterday.setDate(now.getDate() - 1)
  if (d.toDateString() === yesterday.toDateString()) return 'Yesterday'
  return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;--white:#fff;}
  html,body{height:100%;font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;background:var(--light);}
  .lounge-shell{display:flex;flex-direction:column;height:100dvh;max-width:700px;margin:0 auto;background:white;box-shadow:0 0 40px rgba(15,72,103,0.08);}
  .lounge-header{flex-shrink:0;background:var(--navy);color:white;padding:0 16px;display:flex;align-items:center;gap:12px;height:64px;}
  .lounge-back{background:none;border:none;color:white;font-size:22px;cursor:pointer;padding:6px;line-height:1;border-radius:8px;}
  .lounge-back:hover{background:rgba(255,255,255,0.1);}
  .lounge-title{flex:1;}
  .lounge-title h1{font-size:17px;font-weight:800;line-height:1.2;}
  .lounge-title p{font-size:12px;color:rgba(201,231,244,0.80);font-weight:600;margin-top:2px;}
  .lounge-status{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:rgba(201,231,244,0.90);}
  .dot{width:8px;height:8px;border-radius:50%;background:#4CAF50;flex-shrink:0;}
  .dot.off{background:#90A4AE;}
  .search-bar{flex-shrink:0;padding:10px 16px;background:var(--light);border-bottom:1.5px solid var(--border);display:flex;gap:8px;align-items:center;}
  .search-input{flex:1;border:1.5px solid var(--border);border-radius:50px;padding:8px 14px;font-family:'Nunito',sans-serif;font-size:14px;font-weight:600;color:var(--navy);outline:none;background:white;}
  .search-input:focus{border-color:var(--teal);}
  .search-clear{background:none;border:none;color:var(--gray);font-size:18px;cursor:pointer;padding:4px;line-height:1;}
  .lounge-rules{flex-shrink:0;background:#FFF8E1;border-bottom:1.5px solid #FFE082;padding:10px 16px;}
  .lounge-rules p{font-size:12px;color:#5D4037;font-weight:600;line-height:1.6;}
  .msgs{flex:1;overflow-y:auto;padding:16px 12px;display:flex;flex-direction:column;gap:4px;}
  .msgs::-webkit-scrollbar{width:4px;}
  .msgs::-webkit-scrollbar-thumb{background:var(--border);border-radius:4px;}
  .day-divider{text-align:center;font-size:11px;font-weight:700;color:var(--gray);padding:10px 0 6px;letter-spacing:0.04em;text-transform:uppercase;}
  .msg-wrap{display:flex;flex-direction:column;max-width:75%;margin-bottom:2px;position:relative;}
  .msg-wrap.me{align-self:flex-end;align-items:flex-end;}
  .msg-wrap.them{align-self:flex-start;align-items:flex-start;}
  .msg-wrap:hover .msg-actions{opacity:1;}
  .msg-actions{opacity:0;transition:opacity 0.15s;display:flex;gap:4px;margin-bottom:3px;}
  .msg-action-btn{background:none;border:1.5px solid var(--border);border-radius:50px;padding:3px 8px;font-size:11px;font-weight:700;color:var(--gray);cursor:pointer;background:white;}
  .msg-action-btn:hover{border-color:var(--teal);color:var(--teal);}
  .msg-action-btn.del:hover{border-color:#C62828;color:#C62828;}
  .sender-name{font-size:11px;font-weight:800;color:var(--teal);margin-bottom:3px;padding-left:4px;}
  .bubble{padding:10px 14px;line-height:1.55;font-size:14.5px;font-weight:500;word-break:break-word;}
  .bubble.me{background:var(--teal);color:white;border-radius:18px 18px 4px 18px;}
  .bubble.them{background:var(--light);color:var(--navy);border-radius:18px 18px 18px 4px;border:1.5px solid var(--border);}
  .bubble.deleted{background:#F5F5F5;border:1.5px solid #E0E0E0;border-radius:12px;color:#9E9E9E;font-style:italic;font-size:13px;}
  .bubble.temp{opacity:0.65;}
  .bubble-footer{display:flex;align-items:center;gap:4px;margin-top:4px;justify-content:flex-end;}
  .bubble-time{font-size:10.5px;font-weight:600;opacity:0.75;}
  .bubble.me .bubble-time{color:rgba(255,255,255,0.85);}
  .bubble.them .bubble-time{color:var(--gray);}
  .load-more-btn{align-self:center;background:none;border:1.5px solid var(--border);border-radius:50px;padding:8px 18px;font-family:'Nunito',sans-serif;font-size:13px;font-weight:700;color:var(--teal);cursor:pointer;margin-bottom:8px;}
  .load-more-btn:hover{background:var(--light);}
  .search-result-tag{align-self:center;background:#FFF3CD;border:1.5px solid #FFD54F;border-radius:50px;padding:6px 16px;font-size:12px;font-weight:700;color:#7B4F00;margin-bottom:8px;}
  .empty{align-self:center;text-align:center;color:var(--gray);font-size:14px;font-weight:600;padding:40px 20px;line-height:1.8;}
  .input-bar{flex-shrink:0;background:white;border-top:1.5px solid var(--border);padding:10px 12px;display:flex;align-items:flex-end;gap:8px;}
  .msg-input{flex:1;border:1.5px solid var(--border);border-radius:18px;padding:10px 14px;font-family:'Nunito',sans-serif;font-size:14px;font-weight:600;color:var(--navy);outline:none;resize:none;min-height:42px;max-height:120px;line-height:1.5;background:var(--light);}
  .msg-input:focus{border-color:var(--teal);background:white;}
  .send-btn{flex-shrink:0;width:42px;height:42px;background:var(--teal);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(26,143,160,0.30);}
  .send-btn:disabled{background:#B0BEC5;box-shadow:none;cursor:not-allowed;}
  .send-icon{width:18px;height:18px;fill:white;}
  .lounge-loading{flex:1;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--gray);}
  /* Report modal */
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:100;display:flex;align-items:center;justify-content:center;padding:20px;}
  .modal{background:white;border-radius:20px;padding:24px;width:100%;max-width:400px;}
  .modal h2{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .modal p{font-size:13px;color:var(--gray);font-weight:600;margin-bottom:16px;line-height:1.5;}
  .reason-option{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);cursor:pointer;}
  .reason-option:last-of-type{border-bottom:none;}
  .reason-option input{accent-color:var(--teal);}
  .reason-label{font-size:14px;font-weight:700;color:var(--navy);}
  .modal-actions{display:flex;gap:10px;margin-top:16px;}
  .modal-btn{flex:1;padding:11px;border-radius:50px;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;border:none;cursor:pointer;}
  .modal-btn.cancel{background:var(--light);color:var(--gray);}
  .modal-btn.submit{background:var(--teal);color:white;}
  .modal-btn:disabled{opacity:0.5;cursor:not-allowed;}
`

export default function ListenerLoungePage() {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  const [userName, setUserName] = useState<string>('')
  const [messages, setMessages] = useState<LoungeMsg[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')         // fatal load error — replaces page
  const [sendError, setSendError] = useState('') // inline send error — toast only
  const [connected, setConnected] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [searchQ, setSearchQ] = useState('')
  const [searching, setSearching] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [searchTotal, setSearchTotal] = useState(0)
  const [searchOffset, setSearchOffset] = useState(0)
  // Report modal
  const [reportTarget, setReportTarget] = useState<LoungeMsg | null>(null)
  const [reportReason, setReportReason] = useState('inappropriate_sexual')
  const [reportSubmitting, setReportSubmitting] = useState(false)
  const [reportDone, setReportDone] = useState<string | null>(null)

  const msgsEndRef = useRef<HTMLDivElement>(null)
  const msgsContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channelRef = useRef<any>(null)
  const isSearchModeRef = useRef(false)

  // Keep ref in sync with state (for use inside realtime callback closure)
  useEffect(() => { isSearchModeRef.current = isSearchMode }, [isSearchMode])

  const scrollToBottom = useCallback((smooth = false) => {
    msgsEndRef.current?.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' })
  }, [])

  const applyMsg = useCallback((msg: LoungeMsg) => {
    // Never inject realtime messages into search results
    if (isSearchModeRef.current) return
    setMessages(prev => {
      if (prev.some(m => m.id === msg.id)) return prev
      return [...prev, msg]
    })
  }, [])

  // Auth + initial load
  useEffect(() => {
    const sb = getSb()
    let unsubAuth: (() => void) | null = null

    sb.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.replace('/auth?redirect=/listener-lounge'); return }

      // Auth state change listener — disconnect immediately if session ends or user is signed out
      const { data: { subscription } } = sb.auth.onAuthStateChange((event) => {
        if (event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') {
          if (event === 'SIGNED_OUT') {
            if (channelRef.current) sb.removeChannel(channelRef.current)
            router.replace('/auth?redirect=/listener-lounge')
          }
        }
      })
      unsubAuth = () => subscription.unsubscribe()

      fetch('/api/lounge/messages')
        .then(r => {
          if (r.status === 403) { setLoading(false); router.replace('/dashboard'); return null }
          return r.json()
        })
        .then(data => {
          if (!data) return
          const msgs: LoungeMsg[] = data.messages ?? []
          setUserId(user.id)
          setMessages(msgs)
          setHasMore(data.hasMore ?? false)
          setLoading(false)
          // Mark last seen as the newest loaded message's timestamp (not wall clock)
          const newest = msgs[msgs.length - 1]?.created_at
          if (newest) {
            try { localStorage.setItem(`lounge_last_seen_${user.id}`, newest) } catch (_) {}
          }
          setTimeout(() => scrollToBottom(), 50)
        })
        .catch(() => { setError('Failed to load messages.'); setLoading(false) })

      // Own display name
      sb.from('users').select('name').eq('id', user.id).single()
        .then(({ data }) => { if (data?.name) setUserName(data.name as string) })
    })

    return () => { unsubAuth?.() }
  }, [router, scrollToBottom])

  // Scroll to bottom on new messages (only if near bottom)
  useEffect(() => {
    if (loading || isSearchMode) return
    const container = msgsContainerRef.current
    if (!container) return
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 120
    if (isNearBottom) scrollToBottom(true)
  }, [messages, loading, isSearchMode, scrollToBottom])

  // Realtime subscription
  useEffect(() => {
    if (!userId) return
    const sb = getSb()

    const ch = sb.channel('listener-lounge')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'lounge_messages',
      }, (payload) => {
        const msg = payload.new as LoungeMsg
        // Keep last-seen current while the lounge is open
        try { localStorage.setItem(`lounge_last_seen_${userId}`, msg.created_at) } catch (_) {}
        // Realtime payloads don't include joined columns — re-fetch with name
        if (!(msg as LoungeMsg & { users?: unknown }).users) {
          const justBefore = new Date(new Date(msg.created_at).getTime() - 1).toISOString()
          fetch(`/api/lounge/messages?since=${encodeURIComponent(justBefore)}`)
            .then(r => r.json())
            .then(d => {
              const fetched = (d.messages ?? []).find((m: LoungeMsg) => m.id === msg.id)
              if (fetched) applyMsg(fetched)
            })
            .catch(() => {})
        } else {
          applyMsg(msg)
        }
      })
      .subscribe(status => {
        setConnected(status === 'SUBSCRIBED')
        // Reconnect reconciliation: fetch any messages missed during the drop
        if (status === 'SUBSCRIBED') {
          setMessages(prev => {
            const newest = prev[prev.length - 1]?.created_at
            if (!newest) return prev
            fetch(`/api/lounge/messages?since=${encodeURIComponent(newest)}`)
              .then(r => r.json())
              .then(d => {
                const incoming: LoungeMsg[] = d.messages ?? []
                if (incoming.length === 0) return
                setMessages(current => {
                  const existingIds = new Set(current.map(m => m.id))
                  const newOnes = incoming.filter(m => !existingIds.has(m.id))
                  return newOnes.length ? [...current, ...newOnes] : current
                })
              })
              .catch(() => {})
            return prev // no immediate state change
          })
        }
      })

    channelRef.current = ch
    return () => { sb.removeChannel(ch) }
  }, [userId, applyMsg])

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore || !messages.length) return
    setLoadingMore(true)
    try {
      const oldest = messages[0].created_at
      const res = await fetch(`/api/lounge/messages?before=${encodeURIComponent(oldest)}`)
      const data = await res.json()
      const container = msgsContainerRef.current
      const prevScrollHeight = container?.scrollHeight ?? 0
      setMessages(prev => [...(data.messages ?? []), ...prev])
      setHasMore(data.hasMore ?? false)
      requestAnimationFrame(() => {
        if (container) container.scrollTop = container.scrollHeight - prevScrollHeight
      })
    } catch (_) {
      // Network error — leave hasMore so user can retry
    } finally {
      setLoadingMore(false)
    }
  }, [loadingMore, hasMore, messages])

  const runSearch = useCallback(async (q: string, offset = 0) => {
    if (!q.trim()) {
      setIsSearchMode(false)
      setLoading(true)
      try {
        const res = await fetch('/api/lounge/messages')
        const data = await res.json()
        setMessages(data.messages ?? [])
        setHasMore(data.hasMore ?? false)
        setTimeout(() => scrollToBottom(), 50)
      } catch (_) { setError('Failed to reload.') } finally { setLoading(false) }
      return
    }
    if (q.length < 2) return
    setSearching(true)
    setIsSearchMode(true)
    setSearchOffset(offset)
    try {
      const res = await fetch(`/api/lounge/messages?q=${encodeURIComponent(q)}&offset=${offset}`)
      const data = await res.json()
      if (offset === 0) {
        setMessages(data.messages ?? [])
      } else {
        setMessages(prev => [...(data.messages ?? []), ...prev])
      }
      setHasMore(data.hasMore ?? false)
      setSearchTotal(data.total ?? 0)
    } catch (_) { setMessages([]) } finally { setSearching(false) }
  }, [scrollToBottom])

  const deleteMsg = useCallback(async (msg: LoungeMsg) => {
    try {
      const res = await fetch(`/api/lounge/messages/${msg.id}`, { method: 'DELETE' })
      if (res.ok) {
        setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, deleted: true, content: '' } : m))
      } else {
        setSendError('Could not delete message — please try again.')
        setTimeout(() => setSendError(''), 4000)
      }
    } catch {
      setSendError('Network error — could not delete message.')
      setTimeout(() => setSendError(''), 4000)
    }
  }, [])

  const submitReport = useCallback(async () => {
    if (!reportTarget) return
    setReportSubmitting(true)
    try {
      const res = await fetch('/api/lounge/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageId: reportTarget.id, reason: reportReason }),
      })
      if (res.ok) setReportDone(reportTarget.id)
      else setReportTarget(null)
    } catch (_) { setReportTarget(null) } finally { setReportSubmitting(false) }
  }, [reportTarget, reportReason])

  const sendMsg = useCallback(async () => {
    const content = input.trim()
    if (!content || sending || !userId) return
    setSending(true)
    setInput('')

    const tempId = `temp-${Date.now()}`
    const tempMsg: LoungeMsg = {
      id: tempId, sender_id: userId, content,
      created_at: new Date().toISOString(),
      users: { name: userName || 'You' }, temp: true,
    }
    setMessages(prev => [...prev, tempMsg])
    setTimeout(() => scrollToBottom(true), 20)

    try {
      const res = await fetch('/api/lounge/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })
      if (res.ok) {
        const { message } = await res.json()
        setMessages(prev => {
          if (prev.some(m => m.id === message.id)) return prev.filter(m => m.id !== tempId)
          return prev.map(m => m.id === tempId ? { ...message, temp: false } : m)
        })
      } else {
        const errData = await res.json().catch(() => ({}))
        setMessages(prev => prev.filter(m => m.id !== tempId))
        setInput(content)
        setSendError(errData?.error || 'Failed to send message.')
        setTimeout(() => setSendError(''), 4000)
      }
    } catch {
      setMessages(prev => prev.filter(m => m.id !== tempId))
      setInput(content)
      setSendError('Network error — please try again.')
      setTimeout(() => setSendError(''), 4000)
    } finally {
      setSending(false)
    }
  }, [input, sending, userId, userName, scrollToBottom])

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg() }
  }

  // Group by day
  const grouped: Array<{ day: string; msgs: LoungeMsg[] }> = []
  for (const msg of messages) {
    const label = dayLabel(msg.created_at)
    if (!grouped.length || grouped[grouped.length - 1].day !== label) {
      grouped.push({ day: label, msgs: [msg] })
    } else {
      grouped[grouped.length - 1].msgs.push(msg)
    }
  }

  if (loading) return (
    <><style>{S}</style>
    <div className="lounge-shell">
      <div className="lounge-header">
        <button className="lounge-back" onClick={() => router.push('/dashboard')}>←</button>
        <div className="lounge-title"><h1>Listener Lounge</h1></div>
      </div>
      <div className="lounge-loading">Loading…</div>
    </div></>
  )

  if (error) return (
    <><style>{S}</style>
    <div className="lounge-shell">
      <div className="lounge-header">
        <button className="lounge-back" onClick={() => router.push('/dashboard')}>←</button>
        <div className="lounge-title"><h1>Listener Lounge</h1></div>
      </div>
      <div className="lounge-loading" style={{ color: '#C62828' }}>{error}</div>
    </div></>
  )

  return (
    <><style>{S}</style>
    <div className="lounge-shell">

      {/* Header */}
      <div className="lounge-header">
        <button className="lounge-back" onClick={() => router.push('/dashboard')} aria-label="Back to dashboard">←</button>
        <div className="lounge-title">
          <h1>Listener Lounge</h1>
          <p>Approved listeners only · Not visible to seekers</p>
        </div>
        <div className="lounge-status">
          <span className={`dot${connected ? '' : ' off'}`} />
          {connected ? 'Live' : 'Connecting…'}
        </div>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Search message history (min 2 characters)…"
          value={searchQ}
          onChange={e => setSearchQ(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') runSearch(searchQ) }}
        />
        {searchQ
          ? <button className="search-clear" onClick={() => { setSearchQ(''); runSearch('') }}>✕</button>
          : <button className="search-clear" onClick={() => runSearch(searchQ)} style={{ fontSize:16,color:'var(--teal)' }}>⌕</button>
        }
      </div>

      {/* Permanent rules strip */}
      <div className="lounge-rules">
        <p>🔒 <strong>Share learning, not identities.</strong> Never post a seeker&apos;s name, contact details, session quotes, or anything identifying. Messages are visible to all LeanOn listeners and may be reviewed by LeanOn moderators.</p>
      </div>

      {/* Messages */}
      <div className="msgs" ref={msgsContainerRef}>
        {isSearchMode && (
          <div className="search-result-tag">
            {searching
              ? 'Searching…'
              : `${searchTotal} result${searchTotal !== 1 ? 's' : ''} for "${searchQ}"`}
          </div>
        )}

        {!isSearchMode && hasMore && (
          <button className="load-more-btn" onClick={loadMore} disabled={loadingMore}>
            {loadingMore ? 'Loading…' : '↑ Load earlier messages'}
          </button>
        )}

        {isSearchMode && hasMore && (
          <button className="load-more-btn" onClick={() => runSearch(searchQ, searchOffset + 50)} disabled={searching}>
            {searching ? 'Loading…' : '↑ Load more results'}
          </button>
        )}

        {messages.length === 0 && !loading && !searching && (
          <div className="empty">
            {isSearchMode
              ? `No messages matched "${searchQ}".`
              : 'No messages yet.\nBe the first to say hello! 👋'}
          </div>
        )}

        {grouped.map(group => (
          <div key={group.day} style={{ display:'contents' }}>
            <div className="day-divider">{group.day}</div>
            {group.msgs.map(msg => {
              const isMe = msg.sender_id === userId
              const name = msg.users?.name ?? 'Listener'
              const isDeleted = !!msg.deleted

              return (
                <div key={msg.id} className={`msg-wrap ${isMe ? 'me' : 'them'}`}>
                  {/* Action buttons — appear on hover */}
                  {!isDeleted && !msg.temp && (
                    <div className="msg-actions" style={{ justifyContent: isMe ? 'flex-end' : 'flex-start' }}>
                      {isMe && (
                        <button
                          className="msg-action-btn del"
                          onClick={() => {
                            if (window.confirm('Delete this message? It will be removed for everyone.')) deleteMsg(msg)
                          }}
                          title="Delete message"
                        >🗑 Delete</button>
                      )}
                      {!isMe && (
                        <button
                          className="msg-action-btn"
                          onClick={() => { setReportTarget(msg); setReportReason('inappropriate_sexual'); setReportDone(null) }}
                          title="Report message"
                        >🚩 Report</button>
                      )}
                    </div>
                  )}
                  {!isMe && !isDeleted && <span className="sender-name">{name}</span>}
                  <div className={`bubble${isMe && !isDeleted ? ' me' : ' them'}${isDeleted ? ' deleted' : ''}${msg.temp ? ' temp' : ''}`}>
                    {isDeleted ? 'Message removed' : msg.content}
                    {!isDeleted && (
                      <div className="bubble-footer">
                        <span className="bubble-time">{fmtTime(msg.created_at)}</span>
                        {isMe && <span style={{ fontSize:11,opacity:0.7 }}>{msg.temp ? '✓' : '✓✓'}</span>}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
        <div ref={msgsEndRef} />
      </div>

      {/* Inline send error toast */}
      {sendError && (
        <div style={{ background:'#FFEBEE', borderTop:'1.5px solid #EF9A9A', padding:'8px 16px', fontSize:13, fontWeight:700, color:'#C62828', flexShrink:0 }}>
          {sendError}
        </div>
      )}

      {/* Input */}
      {!isSearchMode && (
        <div className="input-bar">
          <textarea
            ref={inputRef}
            className="msg-input"
            placeholder="Share with your fellow listeners…"
            value={input}
            onChange={e => {
              setInput(e.target.value)
              e.target.style.height = 'auto'
              e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`
            }}
            onKeyDown={handleKey}
            rows={1}
            maxLength={2000}
          />
          <button className="send-btn" onClick={sendMsg} disabled={!input.trim() || sending} aria-label="Send">
            <svg className="send-icon" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
          </button>
        </div>
      )}

      {isSearchMode && (
        <div className="input-bar" style={{ justifyContent:'center' }}>
          <button
            onClick={() => { setSearchQ(''); runSearch('') }}
            style={{ background:'var(--teal)',color:'white',border:'none',borderRadius:50,padding:'10px 24px',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:14,cursor:'pointer' }}
          >← Back to chat</button>
        </div>
      )}
    </div>

    {/* Report modal */}
    {reportTarget && (
      <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setReportTarget(null) }}>
        <div className="modal">
          {reportDone === reportTarget.id ? (
            <>
              <h2>✅ Report received</h2>
              <p>Thank you. We&apos;ll review this within 24 hours.</p>
              <button className="modal-btn submit" onClick={() => setReportTarget(null)}>Close</button>
            </>
          ) : (
            <>
              <h2>Report message</h2>
              <p>Select a reason. We&apos;ll review it privately.</p>
              {REPORT_REASONS.map(r => (
                <label key={r.value} className="reason-option">
                  <input type="radio" name="reason" value={r.value}
                    checked={reportReason === r.value}
                    onChange={() => setReportReason(r.value)} />
                  <span className="reason-label">{r.label}</span>
                </label>
              ))}
              <div className="modal-actions">
                <button className="modal-btn cancel" onClick={() => setReportTarget(null)}>Cancel</button>
                <button className="modal-btn submit" onClick={submitReport} disabled={reportSubmitting}>
                  {reportSubmitting ? 'Sending…' : 'Report'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )}
    </>
  )
}
