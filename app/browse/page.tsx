'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { LANGUAGES, PLATFORM_FEE } from '@/lib/constants'
import { showToast } from '@/lib/toast'

// Post-login welcome banner (Item 5)
function WelcomeBanner() {
  const [show, setShow] = useState(false)
  const [isNew, setIsNew] = useState(false)
  useEffect(() => {
    const newUser = sessionStorage.getItem('leanon_welcome_new')
    const onboarded = localStorage.getItem('leanon_onboarded')
    if (newUser) {
      setIsNew(true)
      setShow(true)
      sessionStorage.removeItem('leanon_welcome_new')
    } else if (!onboarded) {
      setShow(true)
    }
  }, [])
  if (!show) return null
  return (
    <div style={{background:'var(--navy)',color:'white',padding:'12px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,fontFamily:'Nunito,sans-serif'}}>
      <div style={{flex:1}}>
        {isNew ? (
          <p style={{fontSize:14,fontWeight:800,margin:0}}>Welcome to LeanOn! Your first 5 minutes are free. 👋</p>
        ) : (
          <>
            <p style={{fontSize:14,fontWeight:800,margin:0,marginBottom:2}}>Not sure where to start?</p>
            <p style={{fontSize:12,fontWeight:600,opacity:0.8,margin:0}}>Browse listeners by topic → Find one you like → Start with a free 5-min session</p>
          </>
        )}
      </div>
      <button onClick={() => { setShow(false); localStorage.setItem('leanon_onboarded','1') }} style={{background:'none',border:'none',color:'white',cursor:'pointer',fontSize:18,fontWeight:900,padding:0,lineHeight:1}}>✕</button>
    </div>
  )
}

type Listener = {
  id: string
  user_id: string
  name: string
  bio: string
  rating: number
  total_sessions: number
  rate_per_min: number
  is_available: boolean
  is_verified?: boolean
  specialty_tags: string[]
  languages_spoken: string[]
  avatar_url?: string
}

const TAGS = [
  {id:'all',       icon:'✨', label:'All'},
  {id:'loneliness',icon:'🌙', label:'Loneliness'},
  {id:'anxiety',   icon:'😰', label:'Anxiety'},
  {id:'stress',    icon:'💼', label:'Work stress'},
  {id:'burnout',   icon:'🔥', label:'Burnout'},
  {id:'career',    icon:'🧭', label:'Career'},
  {id:'relationships',icon:'💬',label:'Relationships'},
  {id:'breakup',   icon:'💔', label:'Breakup'},
  {id:'grief',     icon:'🌿', label:'Grief'},
  {id:'students',  icon:'📚', label:'Students'},
  {id:'selfesteem',icon:'💙', label:'Self-esteem'},
  {id:'lgbtq',     icon:'🌈', label:'LGBTQ+'},
  {id:'parenting', icon:'👶', label:'Parenting'},
  {id:'startup',   icon:'🚀', label:'Startup'},
  {id:'general',   icon:'☕', label:'Just talk'},
]

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.topbar{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);padding:14px 20px;}
.topbar-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
.topbar h1{font-size:20px;font-weight:900;color:var(--navy);}
.wallet-chip{display:flex;align-items:center;gap:6px;background:var(--light);padding:8px 14px;border-radius:50px;font-weight:800;font-size:14px;color:var(--navy);cursor:pointer;border:1.5px solid var(--border);}
.search-container{width:100%;max-width:600px;margin:0 auto 12px;position:relative;}
.search-icon{position:absolute;left:16px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none;}
.search-wrap{width:100%;padding:12px 16px 12px 44px;border-radius:50px;border:1.5px solid var(--border);font-family:'Nunito',sans-serif;font-size:15px;font-weight:600;color:var(--navy);background:white;outline:none;display:block;box-sizing:border-box;}
.search-wrap:focus{border-color:var(--navy);}
.search-wrap::placeholder{color:#B0C8D8;font-weight:400;}
.filter-container{background:white;border-radius:24px;padding:12px 0 8px;margin-bottom:4px;}
.tag-scroll{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;}
.tag-scroll::-webkit-scrollbar{display:none;}
.tag-pill{flex-shrink:0;display:flex;align-items:center;gap:5px;padding:7px 14px;border-radius:50px;font-size:12px;font-weight:700;border:1.5px solid var(--border);background:white;color:var(--gray);cursor:pointer;transition:all .15s;white-space:nowrap;}
.tag-pill.active{background:var(--navy);color:white;border-color:var(--navy);}
.list{padding:16px 20px;display:flex;flex-direction:column;gap:14px;max-width:540px;margin:0 auto;}
.card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:18px;cursor:pointer;transition:all .2s;box-shadow:0 1px 4px rgba(15,72,103,.04);}
.card:hover{border-color:var(--teal);box-shadow:0 4px 20px rgba(15,72,103,.08);transform:translateY(-2px);}
.card-top{display:flex;gap:12px;align-items:flex-start;margin-bottom:10px;}
.av{width:48px;height:48px;border-radius:16px;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;color:white;flex-shrink:0;position:relative;overflow:hidden;}
.av img{width:100%;height:100%;object-fit:cover;border-radius:16px;}
.dot{position:absolute;bottom:-2px;right:-2px;width:12px;height:12px;border-radius:50%;border:2px solid white;}
.dot.on{background:#34C759;}.dot.off{background:#C7C7CC;}
.meta{flex:1;min-width:0;}
.name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:3px;}
.stats{display:flex;align-items:center;gap:10px;font-size:12px;color:var(--gray);font-weight:600;}
.rate{font-size:15px;font-weight:900;color:var(--navy);flex-shrink:0;}
.rate span{font-size:11px;font-weight:500;color:var(--gray);}
.bio{font-size:13px;color:#4A6B7E;line-height:1.6;margin-bottom:12px;font-weight:500;}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;}
.tag-badge{background:rgba(26,143,160,.1);color:var(--navy);font-size:11px;font-weight:700;padding:4px 10px;border-radius:50px;}
.verified-chip{background:#E6F6FF;color:#0F4867;font-size:10px;font-weight:800;padding:3px 7px;border-radius:50px;border:1.5px solid #B8D9F0;}
.btns{display:flex;gap:8px;align-items:center;}
.btn-chat{flex:1;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:11px;border-radius:12px;border:none;cursor:pointer;transition:all .2s;}
.btn-chat.avail{background:#34C759;box-shadow:0 2px 10px rgba(52,199,89,.3);}
.btn-chat.avail:hover{background:#28a745;}
.btn-chat.busy{background:var(--orange);}
.btn-chat.busy:hover{background:#e8861a;}
.btn-chat.offline{background:#C7C7CC;cursor:not-allowed;box-shadow:none;}
.btn-voice{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:11px 16px;border-radius:12px;border:1.5px solid var(--border);cursor:pointer;white-space:nowrap;}
.avail-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;}
.avail-label.on{color:#34C759;}.avail-label.off{color:#C7C7CC;}
.skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:12px;height:160px;}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
.empty{text-align:center;padding:60px 20px;}
.join-cta{margin:0 20px 80px;background:var(--light);border:1.5px dashed var(--border);border-radius:20px;padding:24px;text-align:center;}
.join-cta h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:6px;}
.join-cta p{font-size:13px;color:var(--gray);font-weight:500;margin-bottom:16px;}
.btn-join{background:white;color:var(--teal);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:10px 20px;border-radius:50px;border:2px solid var(--teal);cursor:pointer;}
.session-toast{position:fixed;top:0;left:0;right:0;z-index:100;background:var(--orange);color:white;font-family:'Nunito',sans-serif;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 4px 20px rgba(255,153,51,.35);animation:toastDrop .25s ease;}
@keyframes toastDrop{from{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}
.session-toast-text{font-size:14px;font-weight:800;}
.session-toast-sub{font-size:12px;font-weight:600;opacity:.85;margin-top:2px;}
.btn-toast-join{background:white;color:var(--orange);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:9px 16px;border-radius:10px;border:none;cursor:pointer;white-space:nowrap;}
.btn-toast-dismiss{background:transparent;color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:20px;border:none;cursor:pointer;padding:0 4px;line-height:1;}
`

function BrowseContent() {
  const router  = useRouter()
  const client  = createClient()

  const [tag, setTag]         = useState('all')
  const [lang, setLang]       = useState('all')
  const [query, setQuery]     = useState('')
  const [listeners, setListeners] = useState<Listener[]>([])
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState<number|null>(null)
  const [incomingSession, setIncomingSession] = useState<{
    id: string; duration_mins: number; session_type: string; amount_held: number
  } | null>(null)
  const channelRef = useRef<ReturnType<typeof client.channel> | null>(null)

  // Read ?topic= from URL after hydration to avoid SSR mismatch
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const topic = params.get('topic')
    if (topic) setTag(topic)
  }, [])

  useEffect(() => { loadListeners() }, [tag, lang])

  useEffect(() => {
    client.auth.getUser().then(async ({data:{user}}) => {
      if (!user) return
      const {data} = await client.from('users').select('wallet_balance').eq('id',user.id).single()
      if (data) setBalance(data.wallet_balance)

      // Subscribe to incoming session requests (in case user is a listener browsing)
      if (channelRef.current) client.removeChannel(channelRef.current)
      const channel = client.channel(`browse-incoming-${user.id}`)
        .on('postgres_changes', {
          event: 'INSERT',
          schema: 'public',
          table: 'sessions',
          filter: `listener_id=eq.${user.id}`,
        }, (payload) => {
          setIncomingSession(payload.new as { id: string; duration_mins: number; session_type: string; amount_held: number })
        })
        .subscribe()
      channelRef.current = channel
    })

    return () => {
      if (channelRef.current) client.removeChannel(channelRef.current)
    }
  }, [])

  async function loadListeners() {
    setLoading(true)
    let q = client.from('listener_profiles')
      .select('*, users!inner(name, avatar_url)')
      .eq('is_approved', true)
      .eq('is_active', true)
      .eq('is_suspended', false)
      .order('is_available', {ascending:false})
      .order('rating', {ascending:false})
      .limit(20)
    if (tag !== 'all') q = q.contains('specialty_tags', [tag])
    if (lang !== 'all') q = q.contains('languages_spoken', [lang])
    const {data} = await q
    setListeners((data || []).map((l) => ({
      ...l, name: (l.users as {name:string}|null)?.name || 'Listener',
      avatar_url: (l.users as {avatar_url?:string}|null)?.avatar_url,
      languages_spoken: l.languages_spoken || [],
    })))
    setLoading(false)
  }

  const filtered = query
    ? listeners.filter(l => l.name.toLowerCase().includes(query.toLowerCase()) || l.bio?.toLowerCase().includes(query.toLowerCase()))
    : listeners

  const ini = (n:string) => n.split(' ').map((x:string)=>x[0]||'').join('').slice(0,2).toUpperCase()||'?'
  const tagInfo = (id:string) => TAGS.find(t=>t.id===id)

  return (
    <>
      <style>{S}</style>

      {/* Incoming session toast for listeners browsing */}
      {incomingSession && (
        <div className="session-toast">
          <div>
            <div className="session-toast-text">New session request!</div>
            <div className="session-toast-sub">
              {incomingSession.duration_mins ? `${incomingSession.duration_mins} min` : ''}{' '}
              {incomingSession.session_type ?? ''}{incomingSession.amount_held ? ` · ₹${incomingSession.amount_held}` : ''}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              className="btn-toast-join"
              onClick={() => {
                setIncomingSession(null)
                router.push(`/session/${incomingSession.id}?name=You&duration=${incomingSession.duration_mins}&type=${incomingSession.session_type ?? 'text'}`)
              }}
            >
              Join →
            </button>
            <button className="btn-toast-dismiss" onClick={() => setIncomingSession(null)}>✕</button>
          </div>
        </div>
      )}

      <WelcomeBanner />
      <div className="topbar">
        <div className="topbar-row">
          <h1>Find a listener</h1>
          <a href="/wallet" className="wallet-chip">
            💰 {balance !== null ? `₹${balance}` : 'Wallet'}
          </a>
        </div>
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            className="search-wrap"
            placeholder="Search listeners..."
            value={query}
            onChange={e=>setQuery(e.target.value)}
            aria-label="Search listeners by name or topic"
          />
        </div>
        <div className="filter-container">
          <div className="tag-scroll">
            {TAGS.map(t=>(
              <button key={t.id} className={`tag-pill${tag===t.id?' active':''}`} onClick={()=>setTag(t.id)}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          <div className="tag-scroll" style={{marginTop:8}}>
            <button className={`tag-pill${lang==='all'?' active':''}`} onClick={()=>setLang('all')}>
              🌐 All languages
            </button>
            {LANGUAGES.map(l=>(
              <button key={l.id} className={`tag-pill${lang===l.id?' active':''}`} onClick={()=>setLang(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="list">
        {loading ? (
          [1,2,3].map(i=><div key={i} className="skeleton"/>)
        ) : filtered.length === 0 ? (
          <div style={{textAlign:'center',padding:'60px 20px',background:'white',borderRadius:24,border:'1.5px solid var(--border)'}}>
            <div style={{fontSize:48,marginBottom:16}}>🔍</div>
            <h3 style={{fontSize:20,fontWeight:800,color:'var(--navy)',marginBottom:8}}>No listeners match right now</h3>
            <p style={{fontSize:15,color:'var(--gray)',lineHeight:1.7,marginBottom:24,maxWidth:400,margin:'0 auto 24px'}}>
              Our listeners are most active between 6–11 PM IST. Try broadening your topic, or check back in 30 minutes.
            </p>
            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
              <button
                onClick={()=>{ setTag('all'); setLang('all'); setQuery('') }}
                style={{background:'var(--navy)',color:'white',border:'none',borderRadius:50,padding:'12px 24px',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:14,cursor:'pointer'}}
              >
                Browse All Listeners
              </button>
              <a href="/support"
                style={{background:'white',color:'var(--navy)',border:'1.5px solid var(--border)',borderRadius:50,padding:'12px 24px',fontFamily:'Nunito,sans-serif',fontWeight:700,fontSize:14,display:'inline-block'}}
              >
                Explore Support Topics
              </a>
            </div>
            <p style={{marginTop:20,fontSize:13,color:'var(--gray)'}}>
              💙 Need immediate support? <a href="/faq" style={{color:'var(--teal)'}}>See crisis resources →</a>
            </p>
          </div>
        ) : filtered.map(l => (
          <div key={l.id} className="card" onClick={()=>router.push(`/listener/${l.user_id}`)}>
            <div className="card-top">
              <div className="av">
                {l.avatar_url
                  ? <img src={l.avatar_url} alt={l.name} />
                  : ini(l.name)}
                <div className={`dot ${l.is_available?'on':'off'}`}/>
              </div>
              <div className="meta">
                <div className="name">
                  {l.name}{l.is_verified && <>&nbsp;<span className="verified-chip">✓ Verified</span></>}
                </div>
                <div className="stats">
                  {l.rating > 0 && <span>⭐ {(+l.rating).toFixed(1)}</span>}
                  {l.total_sessions > 0 && <span>🗣️ {l.total_sessions} sessions</span>}
                </div>
              </div>
              <div style={{textAlign:'right',flexShrink:0}}>
                <div className="rate">₹{l.rate_per_min}<span>/min</span></div>
                <div className={`avail-label ${l.is_available?'on':'off'}`}>{l.is_available?'● Online':'● Offline'}</div>
              </div>
            </div>
            <p className="bio">{l.bio}</p>
            <div className="tags">
              {(l.specialty_tags||[]).slice(0,3).map((t) => {
                const info = tagInfo(t)
                return <span key={t} className="tag-badge">{info?.icon} {info?.label||t}</span>
              })}
              {(l.languages_spoken||[]).slice(0,2).map((lid) => {
                const info = LANGUAGES.find(x=>x.id===lid)
                return <span key={lid} className="tag-badge" style={{background:'rgba(255,153,51,.1)',color:'#7A4A00'}}>🌐 {info?.label||lid}</span>
              })}
            </div>
            <div className="btns">
              <button
                className={`btn-chat ${l.is_available ? 'avail' : 'offline'}`}
                onClick={e=>{e.stopPropagation(); if(l.is_available) router.push(`/listener/${l.user_id}?type=text`)}}
              >
                💬 {l.is_available ? `Chat now — ₹${Math.round(l.rate_per_min*15)+PLATFORM_FEE}` : 'Currently offline'}
              </button>
              {l.is_available && (
                <button className="btn-voice" onClick={e=>{e.stopPropagation();router.push(`/listener/${l.user_id}?type=voice`)}}>
                  🎙️
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="join-cta">
        <h3>Have lived experience to share?</h3>
        <p>Set your own rate and keep 90% of every session.</p>
        <a href="/become-listener"><button className="btn-join">Join as a listener →</button></a>
      </div>
    </>
  )
}

export default function BrowsePage() {
  return (
    <BrowseContent/>
  )
}
