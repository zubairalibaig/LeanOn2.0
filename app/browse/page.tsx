'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase'

type Listener = {
  id: string
  user_id: string
  name: string
  bio: string
  rating: number
  total_sessions: number
  rate_per_min: number
  is_available: boolean
  specialty_tags: string[]
  avatar_url?: string
}

const TAGS = [
  {id:'all',icon:'✨',label:'All'},
  {id:'loneliness',icon:'🌙',label:'Loneliness'},
  {id:'stress',icon:'💼',label:'Work stress'},
  {id:'career',icon:'🧭',label:'Career'},
  {id:'relationships',icon:'💬',label:'Relationships'},
  {id:'grief',icon:'🌿',label:'Grief'},
  {id:'students',icon:'📚',label:'Students'},
  {id:'startup',icon:'🚀',label:'Startup'},
  {id:'general',icon:'☕',label:'Just talk'},
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
.search-wrap{display:flex;align-items:center;gap:10px;background:white;border:1.5px solid var(--border);border-radius:12px;padding:10px 14px;margin-bottom:12px;}
.search-wrap input{flex:1;border:none;outline:none;font-family:'Nunito',sans-serif;font-size:14px;color:var(--navy);background:transparent;}
.tag-scroll{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;}
.tag-scroll::-webkit-scrollbar{display:none;}
.tag-pill{flex-shrink:0;display:flex;align-items:center;gap:5px;padding:7px 14px;border-radius:50px;font-size:12px;font-weight:700;border:1.5px solid var(--border);background:white;color:var(--gray);cursor:pointer;transition:all .15s;white-space:nowrap;}
.tag-pill.active{background:var(--navy);color:white;border-color:var(--navy);}
.list{padding:16px 20px;display:flex;flex-direction:column;gap:14px;max-width:540px;margin:0 auto;}
.card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:18px;cursor:pointer;transition:all .2s;box-shadow:0 1px 4px rgba(15,72,103,.04);}
.card:hover{border-color:var(--teal);box-shadow:0 4px 20px rgba(15,72,103,.08);transform:translateY(-2px);}
.card-top{display:flex;gap:12px;align-items:flex-start;margin-bottom:10px;}
.av{width:48px;height:48px;border-radius:16px;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;color:white;flex-shrink:0;position:relative;}
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
.btns{display:flex;gap:8px;}
.btn-chat{flex:1;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:11px;border-radius:12px;border:none;cursor:pointer;transition:all .2s;}
.btn-chat:hover{background:#e8861a;}
.btn-voice{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:11px 16px;border-radius:12px;border:1.5px solid var(--border);cursor:pointer;}
.skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:12px;height:160px;}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
.empty{text-align:center;padding:60px 20px;}
.join-cta{margin:0 20px 40px;background:var(--light);border:1.5px dashed var(--border);border-radius:20px;padding:24px;text-align:center;}
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
  const params  = useSearchParams()
  const client  = createClient()

  const [tag, setTag]         = useState(params.get('topic') || 'all')
  const [query, setQuery]     = useState('')
  const [listeners, setListeners] = useState<Listener[]>([])
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState<number|null>(null)
  const [incomingSession, setIncomingSession] = useState<any>(null)
  const channelRef = useRef<ReturnType<typeof client.channel> | null>(null)

  useEffect(() => { loadListeners() }, [tag])

  useEffect(() => {
    client.auth.getUser().then(async ({data:{user}}) => {
      if (!user) return
      const {data} = await client.from('users').select('wallet_balance').eq('id',user.id).single()
      if (data) setBalance(data.wallet_balance)

      // Subscribe to incoming session requests (in case user is a listener browsing)
      if (channelRef.current) client.removeChannel(channelRef.current)
      const channel = client.channel('browse-incoming-sessions')
        .on('postgres_changes', {
          event: 'INSERT',
          schema: 'public',
          table: 'sessions',
          filter: `listener_id=eq.${user.id}`,
        }, (payload) => {
          setIncomingSession(payload.new)
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
      .order('is_available', {ascending:false})
      .order('rating', {ascending:false})
      .limit(20)
    if (tag !== 'all') q = q.contains('specialty_tags', [tag])
    const {data} = await q
    setListeners((data || []).map((l) => ({
      ...l, name: (l.users as {name:string}|null)?.name || 'Listener',
      avatar_url: (l.users as {avatar_url?:string}|null)?.avatar_url,
    })))
    setLoading(false)
  }

  const filtered = query
    ? listeners.filter(l => l.name.toLowerCase().includes(query.toLowerCase()) || l.bio?.toLowerCase().includes(query.toLowerCase()))
    : listeners

  const ini = (n:string) => n.split(' ').map((x:string)=>x[0]).join('').slice(0,2).toUpperCase()
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
                router.push(`/session/${incomingSession.id}?name=You&duration=${incomingSession.duration_mins}`)
              }}
            >
              Join →
            </button>
            <button className="btn-toast-dismiss" onClick={() => setIncomingSession(null)}>✕</button>
          </div>
        </div>
      )}

      <div className="topbar">
        <div className="topbar-row">
          <h1>Find a listener</h1>
          <a href="/wallet" className="wallet-chip">
            💰 {balance !== null ? `₹${balance}` : 'Wallet'}
          </a>
        </div>
        <div className="search-wrap">
          <span>🔍</span>
          <input placeholder="Search listeners..." value={query} onChange={e=>setQuery(e.target.value)}/>
        </div>
        <div className="tag-scroll">
          {TAGS.map(t=>(
            <button key={t.id} className={`tag-pill${tag===t.id?' active':''}`} onClick={()=>setTag(t.id)}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="list">
        {loading ? (
          [1,2,3].map(i=><div key={i} className="skeleton"/>)
        ) : filtered.length === 0 ? (
          <div className="empty">
            <div style={{fontSize:48,marginBottom:16}}>🦉</div>
            <h3 style={{fontSize:18,fontWeight:800,marginBottom:8}}>No listeners yet</h3>
            <p style={{fontSize:14,color:'var(--gray)',fontWeight:500}}>Be the first — or check back soon.</p>
          </div>
        ) : filtered.map(l => (
          <div key={l.id} className="card">
            <div className="card-top">
              <div className="av">
                {ini(l.name)}
                <div className={`dot ${l.is_available?'on':'off'}`}/>
              </div>
              <div className="meta">
                <div className="name">{l.name}</div>
                <div className="stats">
                  {l.rating > 0 && <span>⭐ {(+l.rating).toFixed(1)}</span>}
                  {l.total_sessions > 0 && <span>{l.total_sessions} sessions</span>}
                  <span style={{color:l.is_available?'#34C759':'#C7C7CC'}}>
                    {l.is_available?'● Available':'● Offline'}
                  </span>
                </div>
              </div>
              <div className="rate">₹{l.rate_per_min}<span>/min</span></div>
            </div>
            <p className="bio">{l.bio}</p>
            <div className="tags">
              {(l.specialty_tags||[]).slice(0,3).map((t) => {
                const info = tagInfo(t)
                return <span key={t} className="tag-badge">{info?.icon} {info?.label||t}</span>
              })}
            </div>
            <div className="btns">
              <button className="btn-chat" onClick={()=>router.push(`/listener/${l.user_id}?type=text`)}>
                💬 Chat — ₹{Math.round(l.rate_per_min*15)+15}
              </button>
              <button className="btn-voice" onClick={()=>router.push(`/listener/${l.user_id}?type=voice`)}>
                🎙️ Voice
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="join-cta">
        <h3>Have lived experience to share?</h3>
        <p>Listeners keep 100% of their rate.</p>
        <a href="/become-listener"><button className="btn-join">Join as a listener →</button></a>
      </div>
    </>
  )
}

export default function BrowsePage() {
  return (
    <Suspense fallback={<div style={{padding:40,textAlign:'center',fontFamily:'Nunito,sans-serif'}}>Loading...</div>}>
      <BrowseContent/>
    </Suspense>
  )
}
