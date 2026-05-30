'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import type { Metadata } from 'next'

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
.page{max-width:480px;margin:0 auto;padding:0 20px 100px;}
.topbar{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);border-bottom:1.5px solid var(--border);padding:14px 20px;display:flex;align-items:center;gap:12px;}
.back{width:40px;height:40px;border-radius:12px;background:var(--light);border:1.5px solid var(--border);cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;}
h1{font-size:20px;font-weight:900;}
.session-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:18px;margin-top:14px;box-shadow:0 1px 4px rgba(15,72,103,.04);}
.card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;}
.listener-name{font-size:16px;font-weight:800;color:var(--navy);}
.session-type{font-size:11px;font-weight:700;background:rgba(26,143,160,.1);color:var(--teal);padding:3px 8px;border-radius:50px;text-transform:uppercase;letter-spacing:.04em;}
.meta-row{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:12px;}
.meta{font-size:12px;color:var(--gray);font-weight:600;}
.rating{font-size:13px;color:var(--orange);margin-bottom:12px;}
.book-again{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:10px 20px;border-radius:50px;border:none;cursor:pointer;transition:all .2s;}
.book-again:hover{background:#e8861a;}
.empty{text-align:center;padding:60px 20px;}
.skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:16px;height:120px;margin-top:14px;}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
`

type SessionRow = {
  id: string
  status: string
  session_type: string
  duration_mins: number
  amount_held: number
  seeker_rating: number | null
  created_at: string
  ended_at: string | null
  listener_id: string
  listener_name?: string
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default function HistoryPage() {
  const router = useRouter()
  const sb = createClient()
  const [sessions, setSessions] = useState<SessionRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const { data: { user } } = await sb.auth.getUser()
        if (!user) { router.push('/auth?redirect=/history'); return }

        const { data } = await sb
          .from('sessions')
          .select('*, listener:users!listener_id(name)')
          .eq('seeker_id', user.id)
          .in('status', ['completed', 'cancelled'])
          .order('created_at', { ascending: false })
          .limit(50)

        if (data) {
          setSessions(data.map(s => ({
            ...s,
            listener_name: (s.listener as { name?: string } | null)?.name || 'Listener',
          })))
        }
      } catch {
        // silently fail
      }
      setLoading(false)
    }
    load()
  }, [])

  return (
    <>
      <style>{S}</style>
      <div className="topbar">
        <button className="back" onClick={() => router.back()}>←</button>
        <h1>Session History</h1>
      </div>
      <div className="page">
        {loading ? (
          [1,2,3].map(i => <div key={i} className="skeleton" />)
        ) : sessions.length === 0 ? (
          <div className="empty">
            <div style={{fontSize:48,marginBottom:16}}>📋</div>
            <h3 style={{fontSize:18,fontWeight:800,marginBottom:8}}>No sessions yet</h3>
            <p style={{fontSize:14,color:'var(--gray)',fontWeight:500,marginBottom:24,lineHeight:1.6}}>
              Your past sessions will appear here. Start your first free 5-min chat today.
            </p>
            <button onClick={() => router.push('/browse')} style={{background:'var(--orange)',color:'white',border:'none',borderRadius:50,padding:'12px 28px',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:15,cursor:'pointer'}}>
              Browse listeners →
            </button>
          </div>
        ) : sessions.map(s => (
          <div key={s.id} className="session-card">
            <div className="card-top">
              <div className="listener-name">{s.listener_name}</div>
              <span className="session-type">{s.session_type}</span>
            </div>
            <div className="meta-row">
              <span className="meta">📅 {fmtDate(s.created_at)}</span>
              <span className="meta">⏱ {s.duration_mins} min</span>
              {s.amount_held > 0 && <span className="meta">₹{s.amount_held}</span>}
              <span className="meta" style={{color: s.status === 'completed' ? '#34C759' : 'var(--gray)'}}>
                {s.status === 'completed' ? '✓ Completed' : s.status}
              </span>
            </div>
            {s.seeker_rating && (
              <div className="rating">{'★'.repeat(s.seeker_rating)}{'☆'.repeat(5 - s.seeker_rating)} {s.seeker_rating}/5</div>
            )}
            {s.status === 'completed' && (
              <button className="book-again" onClick={() => router.push(`/listener/${s.listener_id}`)}>
                Book again →
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
