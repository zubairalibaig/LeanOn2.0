'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { LANGUAGES, PLATFORM_FEE } from '@/lib/constants'

type ListenerProfile = {
  id: string
  user_id: string
  name: string
  bio: string
  rating: number
  total_sessions: number
  rate_per_min: number
  is_available: boolean
  is_verified: boolean
  specialty_tags: string[]
  languages_spoken: string[]
  avatar_url?: string
}

type Review = {
  seeker_rating: number
  seeker_review: string | null
  users: { name: string } | null
}

const TAGS: Record<string,string> = {
  loneliness:'Loneliness 🌙', anxiety:'Anxiety 😰', stress:'Work stress 💼',
  burnout:'Burnout 🔥', career:'Career confusion 🧭', relationships:'Relationships 💬',
  breakup:'Breakup & divorce 💔', grief:'Grief & loss 🌿', students:'Student pressure 📚',
  selfesteem:'Self-esteem 💙', lgbtq:'LGBTQ+ 🌈', parenting:'Parenting 👶',
  startup:'Startup journey 🚀', general:'Just need to talk ☕'
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.page{max-width:480px;margin:0 auto;padding-bottom:280px;}
.topbar{display:flex;align-items:center;gap:12px;padding:16px 20px;}
.back{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,.8);border:1.5px solid var(--border);cursor:pointer;font-size:18px;color:var(--navy);display:flex;align-items:center;justify-content:center;}
.profile-hdr{padding:0 20px 24px;}
.av-row{display:flex;align-items:flex-end;gap:16px;margin-bottom:16px;}
.av{width:80px;height:80px;border-radius:24px;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:28px;color:white;position:relative;flex-shrink:0;overflow:hidden;}
.av img{width:100%;height:100%;object-fit:cover;border-radius:24px;}
.av-dot{position:absolute;bottom:-2px;right:-2px;width:16px;height:16px;border-radius:50%;border:3px solid white;}
.av-dot.on{background:#34C759;}.av-dot.off{background:#C7C7CC;}
.listener-name{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:4px;}
.verified-badge{display:inline-flex;align-items:center;gap:4px;background:#E6F6FF;color:#0F4867;font-size:11px;font-weight:800;padding:3px 8px;border-radius:50px;border:1.5px solid #B8D9F0;}
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
.book-bar{position:fixed;bottom:60px;left:50%;transform:translateX(-50%);width:100%;max-width:480px;background:white;border-top:1px solid var(--border);padding:16px 20px;box-shadow:0 -4px 24px rgba(15,72,103,.1);}
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

export default function ListenerClient({ id }: { id: string }) {
  const router   = useRouter()
  const client   = createClient()

  const [listener, setListener] = useState<ListenerProfile|null>(null)
  const [reviews,  setReviews]  = useState<Review[]>([])
  const [duration, setDuration] = useState<number>(15)
  const [type,     setType]     = useState<'text'|'voice'>('text')
  const [balance,  setBalance]  = useState<number>(0)
  const [loading,  setLoading]  = useState(false)
  const [userId,   setUserId]   = useState<string|null>(null)
  const [notFound, setNotFound] = useState(false)
  const [isBooking, setIsBooking] = useState(false)
  const [showInsufficient, setShowInsufficient] = useState(false)
  const [bookError, setBookError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch via API route (admin client server-side) — avoids the
    // users!inner join failing due to RLS drift on users_select_listener_public
    fetch(`/api/listener/${id}`)
      .then(r => r.json())
      .then(json => {
        if (json.profile) {
          const lp = json.profile
          setListener({
            ...lp,
            name: (lp.users as {name:string}|null)?.name || 'Listener',
            avatar_url: (lp.users as {avatar_url?:string}|null)?.avatar_url,
          })
        } else {
          setNotFound(true)
        }
      })
      .catch(() => setNotFound(true))

    client.from('sessions')
      .select('seeker_rating, seeker_review, users!seeker_id(name)')
      .eq('listener_id', id).eq('status', 'completed').not('seeker_rating', 'is', null)
      .order('created_at', {ascending:false}).limit(5)
      .then(({data}) => { if (data) setReviews(data as unknown as Review[]) })

    client.auth.getUser().then(async ({data:{user}}) => {
      if (!user) return
      setUserId(user.id)
      const {data} = await client.from('users').select('wallet_balance').eq('id', user.id).single()
      if (data) setBalance(data.wallet_balance)
    })
  }, [id])

  if (notFound) return (
    <>
      <style>{S}</style>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif',color:'#0F4867',gap:16,padding:24,textAlign:'center'}}>
        <div style={{fontSize:48}}>🔍</div>
        <div style={{fontSize:20,fontWeight:900}}>Listener not found</div>
        <div style={{fontSize:14,color:'#5A7A8A',fontWeight:500}}>This profile may no longer be active.</div>
        <button style={{background:'#FF9933',color:'white',border:'none',borderRadius:50,padding:'12px 28px',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:15,cursor:'pointer'}} onClick={()=>router.push('/browse')}>Browse listeners →</button>
      </div>
    </>
  )

  if (!listener) return (
    <>
      <style>{S}</style>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif',color:'#0F4867'}}>Loading...</div>
    </>
  )

  const ini  = (n:string) => n.split(' ').map((x:string)=>x[0]||'').join('').slice(0,2).toUpperCase()||'?'
  const cost = duration === 5 ? 0 : listener.rate_per_min * duration + PLATFORM_FEE

  const ERROR_MESSAGES: Record<string, string> = {
    listener_unavailable: 'This listener is currently unavailable.',
    listener_offline: 'This listener is offline right now.',
    listener_busy: 'This listener is in a session. Please try again shortly.',
    already_in_session: 'You already have an active session.',
    insufficient_balance: 'Your wallet balance is too low. Top up to continue.',
    free_trial_used: "You've used your free trial. Recharge your wallet to continue.",
  }

  async function book() {
    if (!userId) { router.push('/auth'); return }
    // Double-click guard
    if (isBooking) return
    // Client-side balance check
    if (duration !== 5 && balance < cost) { setShowInsufficient(true); return }
    setIsBooking(true)
    setBookError(null)
    try {
      const res = await fetch('/api/sessions', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ listenerId: id, durationMins: duration, sessionType: type }),
      })
      const data = await res.json()
      if (data.error) {
        if (data.error === 'already_in_session' && data.sessionId) {
          router.push(`/session/${data.sessionId}?duration=${duration}&type=${type}`)
          return
        }
        if (data.error === 'insufficient_balance') { setShowInsufficient(true); return }
        setBookError(ERROR_MESSAGES[data.error] || data.message || 'Something went wrong. Please try again.')
        return
      }
      if (data.sessionId) {
        router.push(`/session/${data.sessionId}?name=${encodeURIComponent(listener?.name ?? '')}&duration=${duration}&type=${type}`)
      }
    } catch {
      setBookError('Network error. Please check your connection and try again.')
    } finally {
      setIsBooking(false)
    }
  }

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <button className="back" aria-label="Go back" onClick={()=>router.back()}>←</button>
        </div>

        <div className="profile-hdr">
          <div className="av-row">
            <div className="av">
              {listener.avatar_url
                ? <img src={listener.avatar_url} alt={listener.name} />
                : ini(listener.name)}
              <div className={`av-dot ${listener.is_available?'on':'off'}`}/>
            </div>
            <div style={{flex:1}}>
              <div className="listener-name">{listener.name}</div>
              <div className="stats-row">
                {listener.is_verified && <span className="verified-badge">✓ Verified</span>}
                {listener.rating > 0 && <span className="stat">⭐ {(+listener.rating).toFixed(1)}</span>}
                {listener.total_sessions > 0 && <span className="stat">{listener.total_sessions} sessions</span>}
                <span className="rate-badge">₹{listener.rate_per_min}/min</span>
              </div>
            </div>
          </div>
          <div className="tags">
            {(listener.specialty_tags||[]).map((t:string) => (
              <span key={t} className="tag">{TAGS[t]||t}</span>
            ))}
            {(listener.languages_spoken||[]).map((lid:string) => {
              const info = LANGUAGES.find(x=>x.id===lid)
              return <span key={lid} className="tag" style={{background:'rgba(255,153,51,.12)',color:'#7A4A00'}}>🌐 {info?.label||lid}</span>
            })}
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

      {showInsufficient && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.5)',zIndex:200,display:'flex',alignItems:'flex-end',justifyContent:'center'}}>
          <div style={{background:'white',borderRadius:'20px 20px 0 0',padding:24,width:'100%',maxWidth:480,fontFamily:'Nunito,sans-serif'}}>
            <div style={{fontSize:24,marginBottom:12}}>💰</div>
            <div style={{fontSize:18,fontWeight:900,color:'#0F4867',marginBottom:8}}>Insufficient Balance</div>
            <div style={{fontSize:14,color:'#5A7A8A',marginBottom:20,lineHeight:1.6}}>
              Your wallet has ₹{balance}. This session costs ₹{cost}. You need ₹{cost - balance} more.
            </div>
            <div style={{display:'flex',gap:10}}>
              <button onClick={()=>setShowInsufficient(false)} style={{flex:1,padding:13,background:'white',border:'1.5px solid #D5EEF6',borderRadius:12,fontFamily:'Nunito,sans-serif',fontWeight:700,cursor:'pointer'}}>Cancel</button>
              <a href="/wallet" style={{flex:1}}><button style={{width:'100%',padding:13,background:'#FF9933',color:'white',border:'none',borderRadius:12,fontFamily:'Nunito,sans-serif',fontWeight:800,cursor:'pointer'}}>Top Up Wallet →</button></a>
            </div>
          </div>
        </div>
      )}

      <div className="book-bar">
        {bookError && (
          <div className="wallet-warn">{bookError}</div>
        )}
        <div className="book-opts">
          {([5,15,30,45] as const).map(d => (
            <div key={d} className={`book-opt${duration===d?' sel':''}`} onClick={()=>setDuration(d)} role="button" aria-pressed={duration===d} aria-label={`${d} minute session${d===5?' free':''}`}>
              <div className="opt-label">{d} min</div>
              <div className="opt-price">{d===5 ? '—' : `₹${listener.rate_per_min*d+PLATFORM_FEE}`}</div>
              {d===5 && <div className="opt-free">FREE</div>}
            </div>
          ))}
        </div>
        <div className="type-row">
          <button className={`type-btn${type==='text'?' sel':''}`} onClick={()=>setType('text')}>💬 Text chat</button>
          <button className={`type-btn${type==='voice'?' sel':''}`} onClick={()=>setType('voice')}>🎙️ Voice call</button>
        </div>
        {duration === 5 && (
          <div style={{background:'rgba(52,199,89,.1)',border:'1px solid rgba(52,199,89,.3)',borderRadius:10,padding:'8px 12px',fontSize:12,fontWeight:700,color:'#166534',marginBottom:8,textAlign:'center'}}>
            ✅ No payment needed — completely free for 5 minutes
          </div>
        )}
        <button className="btn-book" onClick={book} disabled={isBooking}>
          {isBooking ? <span className="spin">⟳</span>
            : duration===5 ? '🎁 Try Free — 5 min, no payment needed →'
            : `Book ${duration}-min ${type} — ₹${cost} →`}
        </button>
      </div>
    </>
  )
}
