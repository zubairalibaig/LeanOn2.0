'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase'

type ListenerProfile = {
  id: string
  user_id: string
  name: string
  bio: string
  rating: number
  total_sessions: number
  rate_per_min: number
  is_available: boolean
  specialty_tags: string[]
}

type Review = {
  seeker_rating: number
  seeker_review: string | null
  users: { name: string } | null
}

const TAGS: Record<string,string> = {
  loneliness:'Loneliness 🌙',stress:'Work stress 💼',career:'Career confusion 🧭',
  relationships:'Relationships 💬',grief:'Grief & loss 🌿',students:'Student pressure 📚',
  startup:'Startup journey 🚀',general:'Just need to talk ☕'
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.page{max-width:480px;margin:0 auto;padding-bottom:180px;}
.topbar{display:flex;align-items:center;gap:12px;padding:16px 20px;}
.back{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,.8);border:1.5px solid var(--border);cursor:pointer;font-size:18px;color:var(--navy);display:flex;align-items:center;justify-content:center;}
.profile-hdr{padding:0 20px 24px;}
.av-row{display:flex;align-items:flex-end;gap:16px;margin-bottom:16px;}
.av{width:80px;height:80px;border-radius:24px;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:28px;color:white;position:relative;flex-shrink:0;}
.av-dot{position:absolute;bottom:-2px;right:-2px;width:16px;height:16px;border-radius:50%;border:3px solid white;}
.av-dot.on{background:#34C759;}.av-dot.off{background:#C7C7CC;}
.listener-name{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:4px;}
.stats-row{display:flex;align-items:center;gap:12px;}
.stat{font-size:13px;color:var(--gray);font-weight:600;}
.rate-badge{background:var(--orange);color:white;font-weight:800;font-size:14px;padding:5px 14px;border-radius:50px;margin-left:auto;}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;}
.tag{background:rgba(26,143,160,.1);color:var(--navy);font-size:12px;font-weight:700;padding:5px 12px;border-radius:50px;}
.bio{font-size:15px;color:#3A5A6E;line-height:1.7;font-weight:500;margin-bottom:16px;}
.story-card{background:white;border:1.5px solid var(--border);border-radius:18px;padding:18px;margin:0 20px 24px;}
.story-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;}
.story-text{font-size:14px;color:#3A5A6E;line-height:1.65;font-weight:500;font-style:italic;}
.reviews-section{padding:0 20px;margin-bottom:28px;}
.sec-title{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:14px;}
.reviews{display:flex;flex-direction:column;gap:10px;}
.review{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px;}
.review-stars{font-size:13px;color:var(--orange);margin-bottom:6px;}
.review-text{font-size:13px;color:#3A5A6E;font-weight:500;line-height:1.55;margin-bottom:8px;}
.review-name{font-size:12px;color:var(--gray);font-weight:700;}
.book-bar{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:480px;background:white;border-top:1px solid var(--border);padding:16px 20px;box-shadow:0 -4px 24px rgba(15,72,103,.1);}
.book-opts{display:flex;gap:8px;margin-bottom:12px;}
.book-opt{flex:1;padding:12px;border:2px solid var(--border);border-radius:14px;text-align:center;cursor:pointer;transition:all .15s;background:white;}
.book-opt.sel{border-color:var(--orange);background:#FFF3E0;}
.opt-label{font-size:13px;font-weight:800;color:var(--navy);}
.opt-price{font-size:12px;color:var(--gray);font-weight:600;margin-top:2px;}
.opt-free{font-size:10px;background:var(--orange);color:white;font-weight:800;padding:2px 7px;border-radius:50px;display:inline-block;margin-top:3px;}
.type-row{display:flex;gap:8px;margin-bottom:12px;}
.type-btn{flex:1;padding:10px;border:2px solid var(--border);border-radius:12px;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:var(--gray);background:white;cursor:pointer;transition:all .15s;}
.type-btn.sel{border-color:var(--navy);color:var(--navy);background:var(--light);}
.btn-book{width:100%;padding:15px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:50px;cursor:pointer;transition:all .2s;box-shadow:0 4px 16px rgba(255,153,51,.3);}
.btn-book:hover{background:#e8861a;}
.btn-book:disabled{opacity:.5;cursor:not-allowed;}
.wallet-warn{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:12px;padding:12px 16px;font-size:13px;color:#7A2020;font-weight:600;text-align:center;margin-bottom:12px;}
.spin{display:inline-block;animation:spin .8s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
`

export default function ListenerPage({ params }: { params: {id:string} }) {
  const router   = useRouter()
  const { id }   = params
  const client   = createClient()

  const [listener, setListener] = useState<ListenerProfile|null>(null)
  const [reviews,  setReviews]  = useState<Review[]>([])
  const [duration, setDuration] = useState<number>(15)
  const [type,     setType]     = useState<'text'|'voice'>('text')
  const [balance,  setBalance]  = useState<number>(0)
  const [loading,  setLoading]  = useState(false)
  const [userId,   setUserId]   = useState<string|null>(null)

  useEffect(() => {
    // Load listener profile
    client.from('listener_profiles')
      .select('*, users!inner(name, avatar_url)')
      .eq('user_id', id).single()
      .then(({data}) => {
        if (data) setListener({
          ...data,
          name: (data.users as {name:string}|null)?.name || 'Listener',
        })
      })

    // Load reviews
    client.from('sessions')
      .select('seeker_rating, seeker_review, users!seeker_id(name)')
      .eq('listener_id', id).eq('status', 'completed').not('seeker_rating', 'is', null)
      .order('created_at', {ascending:false}).limit(5)
      .then(({data}) => { if (data) setReviews(data as Review[]) })

    // Load user wallet
    client.auth.getUser().then(async ({data:{user}}) => {
      if (!user) return
      setUserId(user.id)
      const {data} = await client.from('users').select('wallet_balance').eq('id', user.id).single()
      if (data) setBalance(data.wallet_balance)
    })
  }, [id])

  if (!listener) return (
    <>
      <style>{S}</style>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif',color:'#0F4867'}}>Loading...</div>
    </>
  )

  const ini    = (n:string) => n.split(' ').map((x:string)=>x[0]).join('').slice(0,2).toUpperCase()
  const cost   = duration === 5 ? 0 : listener!.rate_per_min * duration + 15
  const canPay = duration === 5 || balance >= cost

  async function book() {
    if (!userId) { router.push('/auth'); return }
    if (!canPay) { router.push('/wallet'); return }
    setLoading(true)
    const res = await fetch('/api/sessions', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ listenerId: id, durationMins: duration, sessionType: type }),
    })
    const data = await res.json()
    setLoading(false)
    if (data.error === 'insufficient_balance') { router.push('/wallet'); return }
    if (data.sessionId) {
      router.push(`/session/${data.sessionId}?name=${encodeURIComponent(listener.name)}&duration=${duration}&type=${type}`)
    }
  }

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <button className="back" onClick={()=>router.back()}>←</button>
        </div>

        <div className="profile-hdr">
          <div className="av-row">
            <div className="av">
              {ini(listener.name)}
              <div className={`av-dot ${listener.is_available?'on':'off'}`}/>
            </div>
            <div style={{flex:1}}>
              <div className="listener-name">{listener.name}</div>
              <div className="stats-row">
                {listener.rating > 0 && <span className="stat">⭐ {parseFloat(listener.rating).toFixed(1)}</span>}
                {listener.total_sessions > 0 && <span className="stat">{listener.total_sessions} sessions</span>}
                <span className="rate-badge">₹{listener.rate_per_min}/min</span>
              </div>
            </div>
          </div>
          <div className="tags">
            {(listener.specialty_tags||[]).map((t:string) => (
              <span key={t} className="tag">{TAGS[t]||t}</span>
            ))}
          </div>
          <p className="bio">{listener.bio}</p>
        </div>

        {reviews.length > 0 && (
          <div className="reviews-section">
            <div className="sec-title">What others say</div>
            <div className="reviews">
              {reviews.map((r,i) => (
                <div key={i} className="review">
                  <div className="review-stars">{'★'.repeat(r.seeker_rating)}</div>
                  {r.seeker_review && <p className="review-text">"{r.seeker_review}"</p>}
                  <span className="review-name">— {r.users?.name || 'Anonymous'}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="book-bar">
        {!canPay && duration !== 5 && (
          <div className="wallet-warn">⚠️ Your wallet (₹{balance}) needs ₹{cost-balance} more. <a href="/wallet" style={{color:'var(--teal)'}}>Recharge →</a></div>
        )}
        <div className="book-opts">
          {([5,15,30] as const).map(d => (
            <div key={d} className={`book-opt${duration===d?' sel':''}`} onClick={()=>setDuration(d)}>
              <div className="opt-label">{d} min</div>
              <div className="opt-price">{d===5 ? '—' : `₹${listener.rate_per_min*d+15}`}</div>
              {d===5 && <div className="opt-free">FREE</div>}
            </div>
          ))}
        </div>
        <div className="type-row">
          <button className={`type-btn${type==='text'?' sel':''}`} onClick={()=>setType('text')}>💬 Text chat</button>
          <button className={`type-btn${type==='voice'?' sel':''}`} onClick={()=>setType('voice')}>🎙️ Voice call</button>
        </div>
        <button className="btn-book" onClick={book} disabled={loading}>
          {loading ? <span className="spin">⟳</span>
            : duration===5 ? 'Start free 5-min chat →'
            : `Book ${duration}-min ${type} — ₹${cost} →`}
        </button>
      </div>
    </>
  )
}
