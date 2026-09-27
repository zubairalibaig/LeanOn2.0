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
  users: { name: string | null }
  temp?: boolean
}

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

  /* ── Layout ── */
  .lounge-shell{display:flex;flex-direction:column;height:100dvh;max-width:700px;margin:0 auto;background:white;box-shadow:0 0 40px rgba(15,72,103,0.08);}

  /* ── Header ── */
  .lounge-header{flex-shrink:0;background:var(--navy);color:white;padding:0 16px;display:flex;align-items:center;gap:12px;height:64px;}
  .lounge-back{background:none;border:none;color:white;font-size:22px;cursor:pointer;padding:6px;line-height:1;border-radius:8px;}
  .lounge-back:hover{background:rgba(255,255,255,0.1);}
  .lounge-title{flex:1;}
  .lounge-title h1{font-size:17px;font-weight:800;line-height:1.2;}
  .lounge-title p{font-size:12px;color:rgba(201,231,244,0.80);font-weight:600;margin-top:2px;}
  .lounge-status{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:rgba(201,231,244,0.90);}
  .dot{width:8px;height:8px;border-radius:50%;background:#4CAF50;flex-shrink:0;}
  .dot.off{background:#90A4AE;}

  /* ── Search bar ── */
  .search-bar{flex-shrink:0;padding:10px 16px;background:var(--light);border-bottom:1.5px solid var(--border);display:flex;gap:8px;align-items:center;}
  .search-input{flex:1;border:1.5px solid var(--border);border-radius:50px;padding:8px 14px;font-family:'Nunito',sans-serif;font-size:14px;font-weight:600;color:var(--navy);outline:none;background:white;}
  .search-input:focus{border-color:var(--teal);}
  .search-clear{background:none;border:none;color:var(--gray);font-size:18px;cursor:pointer;padding:4px;line-height:1;}

  /* ── Info banner ── */
  .lounge-info{flex-shrink:0;background:linear-gradient(135deg,#E8F4FD,#F0F8FC);border-bottom:1.5px solid var(--border);padding:12px 16px;}
  .lounge-info p{font-size:13px;color:var(--navy);font-weight:600;line-height:1.6;}
  .lounge-info strong{color:var(--teal);}

  /* ── Messages ── */
  .msgs{flex:1;overflow-y:auto;padding:16px 12px;display:flex;flex-direction:column;gap:4px;}
  .msgs::-webkit-scrollbar{width:4px;}
  .msgs::-webkit-scrollbar-thumb{background:var(--border);border-radius:4px;}
  .day-divider{text-align:center;font-size:11px;font-weight:700;color:var(--gray);padding:10px 0 6px;letter-spacing:0.04em;text-transform:uppercase;}
  .msg-wrap{display:flex;flex-direction:column;max-width:75%;margin-bottom:2px;}
  .msg-wrap.me{align-self:flex-end;align-items:flex-end;}
  .msg-wrap.them{align-self:flex-start;align-items:flex-start;}
  .sender-name{font-size:11px;font-weight:800;color:var(--teal);margin-bottom:3px;padding-left:4px;}
  .bubble{padding:10px 14px;line-height:1.55;font-size:14.5px;font-weight:500;word-break:break-word;position:relative;}
  .bubble.me{background:var(--teal);color:white;border-radius:18px 18px 4px 18px;}
  .bubble.them{background:var(--light);color:var(--navy);border-radius:18px 18px 18px 4px;border:1.5px solid var(--border);}
  .bubble.temp{opacity:0.65;}
  .bubble-footer{display:flex;align-items:center;gap:4px;margin-top:4px;justify-content:flex-end;}
  .bubble-time{font-size:10.5px;font-weight:600;opacity:0.75;}
  .bubble.me .bubble-time{color:rgba(255,255,255,0.85);}
  .bubble.them .bubble-time{color:var(--gray);}
  .load-more-btn{align-self:center;background:none;border:1.5px solid var(--border);border-radius:50px;padding:8px 18px;font-family:'Nunito',sans-serif;font-size:13px;font-weight:700;color:var(--teal);cursor:pointer;margin-bottom:8px;}
  .load-more-btn:hover{background:var(--light);}
  .search-result-tag{align-self:center;background:#FFF3CD;border:1.5px solid #FFD54F;border-radius:50px;padding:6px 16px;font-size:12px;font-weight:700;color:#7B4F00;margin-bottom:8px;}
  .empty{align-self:center;text-align:center;color:var(--gray);font-size:14px;font-weight:600;padding:40px 20px;line-height:1.8;}

  /* ── Input ── */
  .input-bar{flex-shrink:0;background:white;border-top:1.5px solid var(--border);padding:10px 12px;display:flex;align-items:flex-end;gap:8px;}
  .msg-input{flex:1;border:1.5px solid var(--border);border-radius:18px;padding:10px 14px;font-family:'Nunito',sans-serif;font-size:14px;font-weight:600;color:var(--navy);outline:none;resize:none;min-height:42px;max-height:120px;line-height:1.5;background:var(--light);}
  .msg-input:focus{border-color:var(--teal);background:white;}
  .send-btn{flex-shrink:0;width:42px;height:42px;background:var(--teal);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px rgba(26,143,160,0.30);}
  .send-btn:disabled{background:#B0BEC5;box-shadow:none;cursor:not-allowed;}
  .send-icon{width:18px;height:18px;fill:white;}

  /* ── Loading / Error ── */
  .lounge-loading{flex:1;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--gray);}
`

export default function ListenerLoungePage() {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  const [userName, setUserName] = useState<string>('')
  const [messages, setMessages] = useState<LoungeMsg[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [connected, setConnected] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [searchQ, setSearchQ] = useState('')
  const [searching, setSearching] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)

  const msgsEndRef = useRef<HTMLDivElement>(null)
  const msgsContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channelRef = useRef<any>(null)

  const scrollToBottom = useCallback((smooth = false) => {
    msgsEndRef.current?.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' })
  }, [])

  const applyMsg = useCallback((msg: LoungeMsg) => {
    setMessages(prev => {
      if (prev.some(m => m.id === msg.id)) return prev
      return [...prev, msg]
    })
  }, [])

  // Auth check + initial load
  useEffect(() => {
    const sb = getSb()
    sb.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.replace('/auth?redirect=/listener-lounge'); return }

      fetch('/api/lounge/messages')
        .then(r => {
          if (r.status === 403) { router.replace('/dashboard'); return null }
          return r.json()
        })
        .then(data => {
          if (!data) return
          setUserId(user.id)
          setMessages(data.messages ?? [])
          setHasMore(data.hasMore ?? false)
          setLoading(false)
          setTimeout(() => scrollToBottom(), 50)
        })
        .catch(() => { setError('Failed to load messages.'); setLoading(false) })
    })

    // Get listener's own name for display
    sb.auth.getUser().then(({ data: { user } }) => {
      if (!user) return
      const admin = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      admin.from('users').select('name').eq('id', user.id).single()
        .then(({ data }) => { if (data?.name) setUserName(data.name) })
    })
  }, [router, scrollToBottom])

  // Scroll to bottom when new messages arrive (only if near bottom)
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
        const msg = payload.new as LoungeMsg & { users?: { name: string | null } }
        // Fetch sender name if not present (realtime payload may lack joined columns)
        if (!msg.users) {
          fetch(`/api/lounge/messages?before=${new Date(new Date(msg.created_at).getTime() + 1).toISOString()}&limit=1`)
            .then(r => r.json())
            .then(d => { if (d.messages?.[0]) applyMsg(d.messages[0]) })
            .catch(() => {})
        } else {
          applyMsg(msg)
        }
      })
      .subscribe(status => setConnected(status === 'SUBSCRIBED'))

    channelRef.current = ch
    return () => { sb.removeChannel(ch) }
  }, [userId, applyMsg])

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore || !messages.length) return
    setLoadingMore(true)
    const oldest = messages[0].created_at
    const res = await fetch(`/api/lounge/messages?before=${encodeURIComponent(oldest)}`)
    const data = await res.json()
    const container = msgsContainerRef.current
    const prevScrollHeight = container?.scrollHeight ?? 0
    setMessages(prev => [...(data.messages ?? []), ...prev])
    setHasMore(data.hasMore ?? false)
    setLoadingMore(false)
    // Keep scroll position
    requestAnimationFrame(() => {
      if (container) container.scrollTop = container.scrollHeight - prevScrollHeight
    })
  }, [loadingMore, hasMore, messages])

  const handleSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setIsSearchMode(false)
      // Reload recent messages
      setLoading(true)
      const res = await fetch('/api/lounge/messages')
      const data = await res.json()
      setMessages(data.messages ?? [])
      setHasMore(data.hasMore ?? false)
      setLoading(false)
      setTimeout(() => scrollToBottom(), 50)
      return
    }
    setSearching(true)
    setIsSearchMode(true)
    const res = await fetch(`/api/lounge/messages?q=${encodeURIComponent(q)}`)
    const data = await res.json()
    setMessages(data.messages ?? [])
    setHasMore(false)
    setSearching(false)
  }, [scrollToBottom])

  const sendMsg = useCallback(async () => {
    const content = input.trim()
    if (!content || sending || !userId) return
    setSending(true)
    setInput('')

    const tempId = `temp-${Date.now()}`
    const tempMsg: LoungeMsg = {
      id: tempId,
      sender_id: userId,
      content,
      created_at: new Date().toISOString(),
      users: { name: userName || 'You' },
      temp: true,
    }
    setMessages(prev => [...prev, tempMsg])
    setTimeout(() => scrollToBottom(true), 20)

    const res = await fetch('/api/lounge/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
    setSending(false)
    if (res.ok) {
      const { message } = await res.json()
      setMessages(prev => prev.map(m => m.id === tempId ? { ...message, temp: false } : m))
    } else {
      setMessages(prev => prev.filter(m => m.id !== tempId))
      setInput(content)
    }
  }, [input, sending, userId, userName, scrollToBottom])

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg() }
  }

  // Group messages by day
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
    <>
      <style>{S}</style>
      <div className="lounge-shell">
        <div className="lounge-header">
          <button className="lounge-back" onClick={() => router.push('/dashboard')}>←</button>
          <div className="lounge-title"><h1>Listener Lounge</h1></div>
        </div>
        <div className="lounge-loading">Loading…</div>
      </div>
    </>
  )

  if (error) return (
    <>
      <style>{S}</style>
      <div className="lounge-shell">
        <div className="lounge-header">
          <button className="lounge-back" onClick={() => router.push('/dashboard')}>←</button>
          <div className="lounge-title"><h1>Listener Lounge</h1></div>
        </div>
        <div className="lounge-loading" style={{ color: '#C62828' }}>{error}</div>
      </div>
    </>
  )

  return (
    <>
      <style>{S}</style>
      <div className="lounge-shell">

        {/* Header */}
        <div className="lounge-header">
          <button className="lounge-back" onClick={() => router.push('/dashboard')} aria-label="Back to dashboard">←</button>
          <div className="lounge-title">
            <h1>Listener Lounge</h1>
            <p>Listeners only · Private</p>
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
            placeholder="Search message history…"
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSearch(searchQ) }}
          />
          {searchQ ? (
            <button className="search-clear" onClick={() => { setSearchQ(''); handleSearch('') }} aria-label="Clear search">✕</button>
          ) : (
            <button
              className="search-clear"
              onClick={() => handleSearch(searchQ)}
              aria-label="Search"
              style={{ fontSize: 16, color: 'var(--teal)' }}
            >⌕</button>
          )}
        </div>

        {/* Info banner — shown once, not sticky */}
        {!isSearchMode && messages.length === 0 && (
          <div className="lounge-info">
            <p>
              <strong>Welcome to the Listener Lounge.</strong> This is a private space for verified listeners to connect with each other. Share experiences, ask questions, and support one another — without disclosing any seeker&apos;s identity or session details.
            </p>
          </div>
        )}

        {/* Messages */}
        <div className="msgs" ref={msgsContainerRef}>
          {isSearchMode && (
            <div className="search-result-tag">
              {searching ? 'Searching…' : `${messages.length} result${messages.length !== 1 ? 's' : ''} for "${searchQ}"`}
            </div>
          )}

          {!isSearchMode && hasMore && (
            <button className="load-more-btn" onClick={loadMore} disabled={loadingMore}>
              {loadingMore ? 'Loading…' : '↑ Load earlier messages'}
            </button>
          )}

          {messages.length === 0 && !loading && !searching && (
            <div className="empty">
              {isSearchMode ? 'No messages matched your search.' : 'No messages yet.\nBe the first to say hello! 👋'}
            </div>
          )}

          {grouped.map(group => (
            <div key={group.day} style={{ display: 'contents' }}>
              <div className="day-divider">{group.day}</div>
              {group.msgs.map(msg => {
                const isMe = msg.sender_id === userId
                const name = msg.users?.name ?? 'Listener'
                return (
                  <div key={msg.id} className={`msg-wrap ${isMe ? 'me' : 'them'}`}>
                    {!isMe && <span className="sender-name">{name}</span>}
                    <div className={`bubble${isMe ? ' me' : ' them'}${msg.temp ? ' temp' : ''}`}>
                      {msg.content}
                      <div className="bubble-footer">
                        <span className="bubble-time">{fmtTime(msg.created_at)}</span>
                        {isMe && <span style={{ fontSize: 11, opacity: 0.7 }}>{msg.temp ? '✓' : '✓✓'}</span>}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
          <div ref={msgsEndRef} />
        </div>

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
            <button
              className="send-btn"
              onClick={sendMsg}
              disabled={!input.trim() || sending}
              aria-label="Send"
            >
              <svg className="send-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
              </svg>
            </button>
          </div>
        )}

        {isSearchMode && (
          <div className="input-bar" style={{ justifyContent: 'center' }}>
            <button
              onClick={() => { setSearchQ(''); handleSearch('') }}
              style={{ background: 'var(--teal)', color: 'white', border: 'none', borderRadius: 50, padding: '10px 24px', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 14, cursor: 'pointer' }}
            >
              ← Back to chat
            </button>
          </div>
        )}
      </div>
    </>
  )
}
