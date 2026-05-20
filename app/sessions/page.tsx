'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.topbar{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);padding:14px 20px;display:flex;align-items:center;gap:12px;}
.back-btn{background:none;border:none;cursor:pointer;font-size:20px;color:var(--navy);padding:4px;line-height:1;}
.topbar h1{font-size:20px;font-weight:900;color:var(--navy);}
.page{max-width:540px;margin:0 auto;padding:16px 20px 100px;}
.card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:18px;margin-bottom:14px;box-shadow:0 1px 4px rgba(15,72,103,.04);}
.card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
.listener-name{font-size:16px;font-weight:800;color:var(--navy);}
.badge{display:inline-block;padding:4px 10px;border-radius:50px;font-size:11px;font-weight:700;}
.badge-active{background:#DCFCE7;color:#166534;}
.badge-completed{background:#F3F4F6;color:#6B7280;}
.badge-other{background:var(--light);color:var(--gray);}
.meta-row{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px;}
.meta-item{font-size:12px;color:var(--gray);font-weight:600;display:flex;align-items:center;gap:4px;}
.amount{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:8px;}
.rating-row{font-size:13px;font-weight:600;color:var(--gray);margin-bottom:10px;}
.stars{color:#F59E0B;letter-spacing:1px;}
.rejoin-btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:10px 18px;border-radius:12px;border:none;cursor:pointer;transition:all .2s;}
.rejoin-btn:hover{background:#e8861a;}
.empty{text-align:center;padding:60px 20px;}
.empty-icon{font-size:48px;margin-bottom:16px;}
.empty h3{font-size:18px;font-weight:800;margin-bottom:8px;color:var(--navy);}
.empty p{font-size:14px;color:var(--gray);font-weight:500;margin-bottom:24px;}
.browse-btn{background:var(--navy);color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:12px 28px;border-radius:12px;border:none;cursor:pointer;}
.loading{text-align:center;padding:60px 20px;font-size:16px;font-weight:600;color:var(--gray);}
.skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:16px;height:130px;margin-bottom:14px;}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
`

type Session = {
  id: string
  status: string
  session_type: string
  duration: number
  amount_held: number
  seeker_rating: number | null
  created_at: string
  listener_id: string
  listener_name: string
}

export default function SessionsPage() {
  const router = useRouter()
  const supabase = createClient()
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth'); return }

      const { data } = await supabase
        .from('sessions')
        .select('*, listener_profiles!listener_id(users!inner(name))')
        .eq('seeker_id', user.id)
        .order('created_at', { ascending: false })
        .limit(20)

      const mapped: Session[] = (data || []).map((s: Record<string, unknown>) => {
        const lp = s.listener_profiles as { users: { name: string } } | null
        const fullName = lp?.users?.name || 'Listener'
        const firstName = fullName.split(' ')[0]
        return {
          id: s.id as string,
          status: s.status as string,
          session_type: s.session_type as string,
          duration: (s.duration as number) || 0,
          amount_held: (s.amount_held as number) || 0,
          seeker_rating: s.seeker_rating as number | null,
          created_at: s.created_at as string,
          listener_id: s.listener_id as string,
          listener_name: firstName,
        }
      })
      setSessions(mapped)
      setLoading(false)
    }
    load()
  }, [])

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

  const formatDuration = (mins: number) => {
    if (!mins) return '—'
    if (mins < 60) return `${mins}m`
    return `${Math.floor(mins / 60)}h ${mins % 60}m`
  }

  const renderStars = (rating: number | null) => {
    if (!rating) return <span>Not rated</span>
    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)
    return <span><span className="stars">{stars}</span> {rating}/5</span>
  }

  const badgeClass = (status: string) => {
    if (status === 'active') return 'badge badge-active'
    if (status === 'completed') return 'badge badge-completed'
    return 'badge badge-other'
  }

  return (
    <>
      <style>{S}</style>
      <div className="topbar">
        <button className="back-btn" onClick={() => router.push('/browse')}>←</button>
        <h1>My Sessions</h1>
      </div>

      <div className="page">
        {loading ? (
          [1, 2, 3].map(i => <div key={i} className="skeleton" />)
        ) : sessions.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">💬</div>
            <h3>No sessions yet</h3>
            <p>Browse listeners to get started.</p>
            <button className="browse-btn" onClick={() => router.push('/browse')}>Browse listeners</button>
          </div>
        ) : sessions.map(s => (
          <div key={s.id} className="card">
            <div className="card-header">
              <div className="listener-name">{s.listener_name}</div>
              <span className={badgeClass(s.status)}>
                {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-item">
                {s.session_type === 'voice' ? '🎙️' : '💬'} {s.session_type === 'voice' ? 'Voice' : 'Text'}
              </span>
              {s.duration > 0 && (
                <span className="meta-item">⏱ {formatDuration(s.duration)}</span>
              )}
              <span className="meta-item">📅 {formatDate(s.created_at)}</span>
            </div>
            {s.amount_held > 0 && (
              <div className="amount">₹{s.amount_held} charged</div>
            )}
            <div className="rating-row">
              ⭐ {renderStars(s.seeker_rating)}
            </div>
            {s.status === 'active' && (
              <button
                className="rejoin-btn"
                onClick={() => router.push(`/session/${s.id}?name=${encodeURIComponent(s.listener_name)}&duration=${s.duration}`)}
              >
                Rejoin →
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
