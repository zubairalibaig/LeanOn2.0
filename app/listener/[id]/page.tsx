'use client'
import { useState, use } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// Demo data — replace with Supabase fetch by user_id
const LISTENERS: Record<string, any> = {
  '1': { id:'1', name:'Ananya S.', rate:10, rating:4.9, sessions:143, available:true,
    tags:['loneliness','relationships'], gender:'female',
    bio:'Went through a painful divorce at 29. Two years of rebuilding — therapy, journaling, slowly letting people back in. I know what it feels like when the nights are the hardest.',
    story:'I started listening on LeanOn because I wished someone had been there for me at 2 AM when I couldn\'t stop crying and didn\'t want to wake my family. Now I am that person for others.',
    reviews:[
      { name:'R.M.', rating:5, text:'Ananya just listened. Didn\'t try to fix me or give advice I didn\'t ask for. That was exactly what I needed.' },
      { name:'P.K.', rating:5, text:'Talked for 30 minutes. Felt lighter after. Will book again.' },
      { name:'S.V.', rating:5, text:'She\'s been through it herself. You can tell. Made all the difference.' },
    ]
  },
  '2': { id:'2', name:'Rohan M.', rate:15, rating:4.8, sessions:89, available:true,
    tags:['startup','career','stress'], gender:'male',
    bio:'Bootstrapped two startups and shut both down. Now building again, wiser. The loneliness of being a founder is something most people don\'t talk about.',
    story:'I spent 3 years feeling like I couldn\'t show weakness to my team, my investors, or my family. I want to be the person I needed back then.',
    reviews:[
      { name:'A.T.', rating:5, text:'Finally someone who understands what it\'s like to shut down a company. No judgment, just understanding.' },
      { name:'D.K.', rating:5, text:'Rohan helped me think through my co-founder conflict clearly. Really valuable.' },
    ]
  },
}

const TAG_LABELS: Record<string,string> = {
  loneliness:'Loneliness 🌙',stress:'Work stress 💼',career:'Career 🧭',
  relationships:'Relationships 💬',grief:'Grief 🌿',students:'Students 📚',
  startup:'Startup 🚀',general:'Just talk ☕'
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--blue:#C9E7F4;--cream:#FFFBF5;--gray:#6B8FA8;--border:#DDE8F0;--light:#F0F4F7;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  a{text-decoration:none;color:inherit;}
  .page{max-width:480px;margin:0 auto;padding-bottom:120px;}
  .topbar{display:flex;align-items:center;gap:12px;padding:16px 20px;}
  .back{width:40px;height:40px;border-radius:12px;background:var(--light);border:none;cursor:pointer;font-size:18px;color:var(--navy);flex-shrink:0;}
  .profile-header{padding:0 20px 24px;}
  .avatar-row{display:flex;align-items:flex-end;gap:16px;margin-bottom:16px;}
  .avatar{width:80px;height:80px;border-radius:24px;background:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:28px;color:var(--navy);position:relative;flex-shrink:0;}
  .avail-dot{position:absolute;bottom:-2px;right:-2px;width:16px;height:16px;border-radius:50%;border:3px solid var(--cream);}
  .avail-dot.on{background:#34C759;} .avail-dot.off{background:#C7C7CC;}
  .avatar-meta{flex:1;}
  .listener-name{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:4px;}
  .stats-row{display:flex;align-items:center;gap:12px;}
  .stat{font-size:13px;color:var(--gray);font-weight:600;}
  .rate-badge{background:var(--orange);color:white;font-weight:800;font-size:14px;padding:5px 14px;border-radius:50px;margin-left:auto;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;}
  .tag{background:rgba(201,231,244,0.4);color:var(--navy);font-size:12px;font-weight:700;padding:5px 12px;border-radius:50px;}
  .bio{font-size:15px;color:#3A5A6E;line-height:1.7;font-weight:500;margin-bottom:16px;}
  .story-card{background:white;border:1.5px solid var(--border);border-radius:18px;padding:18px;margin:0 20px 24px;}
  .story-label{font-size:11px;font-weight:800;color:var(--orange);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;}
  .story-text{font-size:14px;color:#3A5A6E;line-height:1.65;font-weight:500;font-style:italic;}
  .section-title{font-size:16px;font-weight:800;color:var(--navy);padding:0 20px;margin-bottom:14px;}
  .reviews{padding:0 20px;display:flex;flex-direction:column;gap:10px;margin-bottom:28px;}
  .review{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px;}
  .review-stars{font-size:13px;color:var(--orange);margin-bottom:6px;}
  .review-text{font-size:13px;color:#3A5A6E;font-weight:500;line-height:1.55;margin-bottom:8px;}
  .review-name{font-size:12px;color:var(--gray);font-weight:700;}
  /* BOOKING BOTTOM SHEET */
  .book-bar{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:480px;background:white;border-top:1px solid var(--border);padding:16px 20px;box-shadow:0 -4px 24px rgba(15,72,103,0.1);}
  .book-options{display:flex;gap:8px;margin-bottom:12px;}
  .book-opt{flex:1;padding:12px;border:2px solid var(--border);border-radius:14px;text-align:center;cursor:pointer;transition:all 0.15s;background:white;}
  .book-opt.selected{border-color:var(--orange);background:#FFF3E0;}
  .book-opt-label{font-size:13px;font-weight:800;color:var(--navy);}
  .book-opt-price{font-size:12px;color:var(--gray);font-weight:600;margin-top:2px;}
  .book-opt-free{font-size:10px;background:var(--orange);color:white;font-weight:800;padding:2px 7px;border-radius:50px;display:inline-block;margin-top:3px;}
  .type-row{display:flex;gap:8px;margin-bottom:12px;}
  .type-btn{flex:1;padding:10px;border:2px solid var(--border);border-radius:12px;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:var(--gray);background:white;cursor:pointer;transition:all 0.15s;}
  .type-btn.selected{border-color:var(--navy);color:var(--navy);background:var(--light);}
  .btn-book{width:100%;padding:15px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:14px;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 16px rgba(255,153,51,0.3);}
  .btn-book:hover{background:#e8861a;}
  .offline-notice{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:12px;padding:12px 16px;font-size:13px;color:#7A5C00;font-weight:600;text-align:center;margin-bottom:12px;}
`

export default function ListenerPage({ params }: { params: Promise<{id: string}> }) {
  const router = useRouter()
  const { id } = use(params)
  const listener = LISTENERS[id] || LISTENERS['1']
  const initials = listener.name.split(' ').map((n:string) => n[0]).join('').slice(0,2)

  const [duration, setDuration] = useState<5|15|30>(15)
  const [type, setType]         = useState<'text'|'voice'>('text')

  const cost = duration === 5 ? 0 : Math.round(listener.rate * duration * 1.1)

  function book() {
    // TODO: check wallet balance, create session in Supabase
    router.push(`/session/new?listener=${id}&duration=${duration}&type=${type}`)
  }

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <button className="back" onClick={() => router.back()}>←</button>
        </div>

        <div className="profile-header">
          <div className="avatar-row">
            <div className="avatar">
              {initials}
              <div className={`avail-dot ${listener.available ? 'on':'off'}`} />
            </div>
            <div className="avatar-meta">
              <div className="listener-name">{listener.name}</div>
              <div className="stats-row">
                <span className="stat">⭐ {listener.rating}</span>
                <span className="stat">{listener.sessions} sessions</span>
                <span className="rate-badge">₹{listener.rate}/min</span>
              </div>
            </div>
          </div>

          <div className="tags">
            {listener.tags.map((t:string) => (
              <span key={t} className="tag">{TAG_LABELS[t] || t}</span>
            ))}
          </div>

          <p className="bio">{listener.bio}</p>
        </div>

        <div className="story-card">
          <div className="story-label">Why I listen</div>
          <p className="story-text">"{listener.story}"</p>
        </div>

        <div className="section-title">What others say</div>
        <div className="reviews">
          {listener.reviews.map((r:any, i:number) => (
            <div key={i} className="review">
              <div className="review-stars">{'★'.repeat(r.rating)}</div>
              <p className="review-text">"{r.text}"</p>
              <span className="review-name">— {r.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky booking bar */}
      <div className="book-bar">
        {!listener.available && (
          <div className="offline-notice">⚠️ {listener.name} is currently offline. You can still book — they'll be notified.</div>
        )}
        <div className="book-options">
          {([5,15,30] as const).map(d => (
            <div key={d} className={`book-opt${duration===d?' selected':''}`} onClick={() => setDuration(d)}>
              <div className="book-opt-label">{d} min</div>
              <div className="book-opt-price">{d===5 ? '—' : `₹${Math.round(listener.rate*d*1.1)}`}</div>
              {d===5 && <div className="book-opt-free">FREE</div>}
            </div>
          ))}
        </div>
        <div className="type-row">
          <button className={`type-btn${type==='text'?' selected':''}`} onClick={() => setType('text')}>💬 Text chat</button>
          <button className={`type-btn${type==='voice'?' selected':''}`} onClick={() => setType('voice')}>🎙️ Voice call</button>
        </div>
        <button className="btn-book" onClick={book}>
          {duration === 5 ? 'Start free 5-min chat →' : `Book ${duration}-min session — ₹${cost} →`}
        </button>
      </div>
    </>
  )
}
