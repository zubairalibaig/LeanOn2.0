'use client'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const TAGS = [
  { id:'all',          icon:'✨', label:'All'             },
  { id:'loneliness',   icon:'🌙', label:'Loneliness'      },
  { id:'stress',       icon:'💼', label:'Work stress'      },
  { id:'career',       icon:'🧭', label:'Career'           },
  { id:'relationships',icon:'💬', label:'Relationships'    },
  { id:'grief',        icon:'🌿', label:'Grief'            },
  { id:'students',     icon:'📚', label:'Students'         },
  { id:'startup',      icon:'🚀', label:'Startup'          },
  { id:'general',      icon:'☕', label:'Just talk'        },
]

// Demo listeners — replace with Supabase query
const DEMO_LISTENERS = [
  { id:'1', name:'Ananya S.', tags:['loneliness','relationships'], rate:10, rating:4.9, sessions:143, available:true,  bio:'Went through a painful divorce at 29. Found my way back. Here to help you not feel so alone at 2 AM.' },
  { id:'2', name:'Rohan M.',  tags:['startup','career','stress'],  rate:15, rating:4.8, sessions:89,  available:true,  bio:'Bootstrapped and shut down two startups. Now building again. I understand founder loneliness deeply.' },
  { id:'3', name:'Preethi K.',tags:['grief','general'],           rate:10, rating:5.0, sessions:201, available:false, bio:'Lost my mother in 2021. Grief is not linear. I am here to sit with you in it, however long it takes.' },
  { id:'4', name:'Karthik V.',tags:['students','career','stress'],rate:8,  rating:4.7, sessions:56,  available:true,  bio:'NEET appeared 3 times. Finally got through. I know what exam pressure does to a person from the inside.' },
  { id:'5', name:'Meera R.',  tags:['relationships','loneliness'], rate:12, rating:4.9, sessions:178, available:true,  bio:'Moved cities alone at 24, rebuilt my social life from zero. I know what real loneliness feels like.' },
  { id:'6', name:'Aditya P.', tags:['stress','startup','general'], rate:10, rating:4.6, sessions:34,  available:false, bio:'Burned out at a top MNC. Left. Rebuilt. Happier now. Let\'s talk about what burnout actually feels like.' },
]

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--blue:#C9E7F4;--cream:#FFFBF5;--gray:#6B8FA8;--border:#DDE8F0;--light:#F0F4F7;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  a{text-decoration:none;color:inherit;}
  .topbar{position:sticky;top:0;z-index:50;background:rgba(255,251,245,0.95);backdrop-filter:blur(8px);border-bottom:1px solid var(--border);padding:14px 20px;}
  .topbar-row1{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
  .topbar h1{font-size:20px;font-weight:900;color:var(--navy);}
  .wallet-chip{display:flex;align-items:center;gap:6px;background:var(--light);padding:8px 14px;border-radius:50px;font-weight:800;font-size:14px;color:var(--navy);cursor:pointer;}
  .wallet-chip span{font-size:16px;}
  .search-wrap{display:flex;align-items:center;gap:10px;background:white;border:1.5px solid var(--border);border-radius:12px;padding:10px 14px;margin-bottom:12px;}
  .search-wrap input{flex:1;border:none;outline:none;font-family:'Nunito',sans-serif;font-size:14px;color:var(--navy);background:transparent;}
  .search-wrap input::placeholder{color:#B0C8D8;}
  .tag-scroll{display:flex;gap:8px;overflow-x:auto;padding-bottom:2px;}
  .tag-scroll::-webkit-scrollbar{display:none;}
  .tag-pill{flex-shrink:0;display:flex;align-items:center;gap:5px;padding:7px 14px;border-radius:50px;font-size:12px;font-weight:700;border:1.5px solid var(--border);background:white;color:var(--gray);cursor:pointer;transition:all 0.15s;white-space:nowrap;}
  .tag-pill.active{background:var(--navy);color:white;border-color:var(--navy);}
  .list{padding:16px 20px;display:flex;flex-direction:column;gap:14px;max-width:540px;margin:0 auto;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:18px;cursor:pointer;transition:all 0.2s;}
  .card:hover{border-color:var(--orange);box-shadow:0 4px 20px rgba(15,72,103,0.08);transform:translateY(-2px);}
  .card-top{display:flex;gap:12px;align-items:flex-start;margin-bottom:10px;}
  .avatar{width:48px;height:48px;border-radius:16px;background:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;color:var(--navy);flex-shrink:0;position:relative;}
  .dot{position:absolute;bottom:-2px;right:-2px;width:12px;height:12px;border-radius:50%;border:2px solid white;}
  .dot.on{background:#34C759;}
  .dot.off{background:#C7C7CC;}
  .card-meta{flex:1;min-width:0;}
  .card-name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:3px;}
  .card-stats{display:flex;align-items:center;gap:10px;font-size:12px;color:var(--gray);font-weight:600;}
  .card-rate{font-size:15px;font-weight:900;color:var(--navy);flex-shrink:0;}
  .card-rate span{font-size:11px;font-weight:500;color:var(--gray);}
  .card-bio{font-size:13px;color:#4A6B7E;line-height:1.6;margin-bottom:12px;font-weight:500;}
  .card-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;}
  .card-tag{background:rgba(201,231,244,0.4);color:var(--navy);font-size:11px;font-weight:700;padding:4px 10px;border-radius:50px;}
  .card-btns{display:flex;gap:8px;}
  .btn-chat{flex:1;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:11px;border-radius:12px;border:none;cursor:pointer;transition:all 0.2s;}
  .btn-chat:hover{background:#e8861a;}
  .btn-voice{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:11px 16px;border-radius:12px;border:1.5px solid var(--border);cursor:pointer;transition:all 0.2s;}
  .btn-voice:hover{border-color:var(--navy);}
  .skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:12px;}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  .empty{text-align:center;padding:60px 20px;}
  .empty-icon{font-size:48px;margin-bottom:16px;}
  .empty h3{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .empty p{font-size:14px;color:var(--gray);font-weight:500;}
  .join-card{margin:0 20px 40px;background:var(--light);border:1.5px dashed var(--border);border-radius:20px;padding:24px;text-align:center;}
  .join-card h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .join-card p{font-size:13px;color:var(--gray);font-weight:500;margin-bottom:16px;}
  .btn-join{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:10px 20px;border-radius:12px;border:1.5px solid var(--border);cursor:pointer;}
`

function BrowseContent() {
  const router = useRouter()
  const params = useSearchParams()
  const [tag, setTag]         = useState(params.get('topic') || 'all')
  const [query, setQuery]     = useState('')
  const [listeners, setListeners] = useState(DEMO_LISTENERS)

  const filtered = listeners.filter(l => {
    const matchTag = tag === 'all' || l.tags.includes(tag)
    const matchQ   = !query || l.name.toLowerCase().includes(query.toLowerCase()) || l.bio.toLowerCase().includes(query.toLowerCase())
    return matchTag && matchQ
  })

  const initials = (n: string) => n.split(' ').map(x => x[0]).join('').slice(0,2)

  return (
    <>
      <style>{S}</style>
      <div className="topbar">
        <div className="topbar-row1">
          <h1>Find a listener</h1>
          <a href="/wallet" className="wallet-chip"><span>💰</span> Wallet</a>
        </div>
        <div className="search-wrap">
          <span>🔍</span>
          <input placeholder="Search by name or topic..." value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        <div className="tag-scroll">
          {TAGS.map(t => (
            <button key={t.id} className={`tag-pill${tag === t.id ? ' active':''}`} onClick={() => setTag(t.id)}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="list">
        {filtered.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">🦉</div>
            <h3>No listeners found</h3>
            <p>Try a different topic or check back soon.</p>
          </div>
        ) : filtered.map(l => (
          <div key={l.id} className="card">
            <div className="card-top">
              <div className="avatar">
                {initials(l.name)}
                <div className={`dot ${l.available ? 'on':'off'}`} />
              </div>
              <div className="card-meta">
                <div className="card-name">{l.name}</div>
                <div className="card-stats">
                  {l.rating > 0 && <span>⭐ {l.rating}</span>}
                  {l.sessions > 0 && <span>{l.sessions} sessions</span>}
                  <span style={{color: l.available ? '#34C759':'#C7C7CC'}}>{l.available ? '● Available':'● Offline'}</span>
                </div>
              </div>
              <div className="card-rate">₹{l.rate}<span>/min</span></div>
            </div>
            <p className="card-bio">{l.bio}</p>
            <div className="card-tags">
              {l.tags.slice(0,3).map(t => {
                const found = TAGS.find(x => x.id === t)
                return <span key={t} className="card-tag">{found?.icon} {found?.label || t}</span>
              })}
            </div>
            <div className="card-btns">
              <button className="btn-chat" onClick={() => router.push(`/listener/${l.id}?type=text`)}>
                💬 Chat — ₹{Math.round(l.rate * 15 * 1.1)}
              </button>
              <button className="btn-voice" onClick={() => router.push(`/listener/${l.id}?type=voice`)}>
                🎙️ Voice
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="join-card">
        <h3>Have lived experience to share?</h3>
        <p>Earn ₹8–25/min as a peer listener on LeanOn.</p>
        <a href="/become-listener"><button className="btn-join">Join as a listener →</button></a>
      </div>
    </>
  )
}

export default function BrowsePage() {
  return <Suspense fallback={<div style={{padding:40,textAlign:'center',fontFamily:'Nunito,sans-serif'}}>Loading...</div>}><BrowseContent /></Suspense>
}
