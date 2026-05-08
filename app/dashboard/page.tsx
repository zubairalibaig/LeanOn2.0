'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--blue:#C9E7F4;--cream:#FFFBF5;--gray:#6B8FA8;--border:#DDE8F0;--light:#F0F4F7;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  .page{max-width:480px;margin:0 auto;padding:0 20px 60px;}
  .topbar{display:flex;align-items:center;justify-content:space-between;padding:16px 0 20px;}
  .topbar h1{font-size:22px;font-weight:900;}
  .avail-toggle{display:flex;align-items:center;gap:8px;background:white;border:1.5px solid var(--border);padding:8px 16px;border-radius:50px;cursor:pointer;font-weight:700;font-size:13px;transition:all 0.2s;}
  .avail-toggle.on{border-color:#34C759;background:#F0FFF4;color:#276749;}
  .avail-toggle.off{color:var(--gray);}
  .avail-dot{width:8px;height:8px;border-radius:50%;}
  .avail-dot.on{background:#34C759;} .avail-dot.off{background:#C7C7CC;}
  .stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px;}
  .stat-card{background:white;border:1.5px solid var(--border);border-radius:18px;padding:18px;}
  .stat-card.accent{background:var(--navy);border-color:var(--navy);}
  .stat-label{font-size:11px;font-weight:700;color:var(--gray);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;}
  .stat-card.accent .stat-label{color:rgba(201,231,244,0.7);}
  .stat-value{font-size:26px;font-weight:900;color:var(--navy);}
  .stat-card.accent .stat-value{color:white;}
  .stat-sub{font-size:12px;color:var(--gray);font-weight:500;margin-top:3px;}
  .stat-card.accent .stat-sub{color:rgba(201,231,244,0.6);}
  .section-title{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:14px;}
  .payout-card{background:white;border:2px solid var(--border);border-radius:18px;padding:20px;margin-bottom:24px;}
  .payout-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;}
  .payout-balance{font-size:32px;font-weight:900;color:var(--navy);}
  .payout-label{font-size:13px;color:var(--gray);font-weight:600;}
  .btn-payout{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:12px 24px;border-radius:12px;border:none;cursor:pointer;box-shadow:0 3px 12px rgba(255,153,51,0.3);transition:all 0.2s;}
  .btn-payout:hover{background:#e8861a;}
  .payout-note{font-size:12px;color:var(--gray);font-weight:500;}
  .session-list{display:flex;flex-direction:column;gap:8px;margin-bottom:28px;}
  .session-item{background:white;border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;}
  .session-user{font-size:14px;font-weight:700;color:var(--navy);}
  .session-meta{font-size:12px;color:var(--gray);font-weight:500;margin-top:2px;}
  .session-earn{font-size:15px;font-weight:800;color:#34C759;}
  .profile-section{background:white;border:1.5px solid var(--border);border-radius:18px;padding:18px;margin-bottom:24px;}
  .profile-row{display:flex;align-items:center;gap:14px;}
  .profile-avatar{width:52px;height:52px;border-radius:16px;background:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;color:var(--navy);flex-shrink:0;}
  .profile-name{font-size:16px;font-weight:800;color:var(--navy);}
  .profile-rate{font-size:13px;color:var(--gray);font-weight:600;}
  .profile-actions{display:flex;gap:8px;margin-top:14px;}
  .btn-edit{flex:1;padding:10px;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:var(--navy);background:var(--light);border:none;border-radius:10px;cursor:pointer;}
  .btn-share{flex:1;padding:10px;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:var(--orange);background:#FFF3E0;border:none;border-radius:10px;cursor:pointer;}
  .progress-section{margin-bottom:28px;}
  .progress-label{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}
  .progress-bar{height:8px;background:var(--light);border-radius:4px;overflow:hidden;}
  .progress-fill{height:100%;background:var(--orange);border-radius:4px;transition:width 0.6s ease;}
  .level-label{font-size:12px;font-weight:700;color:var(--gray);}
`

const DEMO_SESSIONS = [
  { user:'P.M.',  duration:'30 min', type:'Text', date:'Today, 2:15 AM',    earn:270 },
  { user:'A.K.',  duration:'15 min', type:'Voice',date:'Yesterday, 11 PM',  earn:135 },
  { user:'S.R.',  duration:'30 min', type:'Text', date:'2 days ago',        earn:270 },
  { user:'R.V.',  duration:'15 min', type:'Text', date:'3 days ago',        earn:135 },
  { user:'D.P.',  duration:'15 min', type:'Voice',date:'4 days ago',        earn:135 },
]

export default function DashboardPage() {
  const router   = useRouter()
  const [avail, setAvail]   = useState(true)
  const [loading, setLoading] = useState(false)

  async function requestPayout() {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    alert('Payout request submitted! ₹945 will be transferred to your bank within 3 business days.')
  }

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <h1>My Dashboard</h1>
          <button className={`avail-toggle ${avail ? 'on':'off'}`} onClick={() => setAvail(!avail)}>
            <div className={`avail-dot ${avail ? 'on':'off'}`} />
            {avail ? 'Available' : 'Go offline'}
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card accent">
            <div className="stat-label">This month</div>
            <div className="stat-value">₹4,050</div>
            <div className="stat-sub">15 sessions</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Rating</div>
            <div className="stat-value">4.9 ⭐</div>
            <div className="stat-sub">143 reviews</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total sessions</div>
            <div className="stat-value">143</div>
            <div className="stat-sub">Since joining</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total earned</div>
            <div className="stat-value">₹38K</div>
            <div className="stat-sub">All time</div>
          </div>
        </div>

        {/* Rate tier progress */}
        <div className="progress-section">
          <div className="progress-label">
            <span className="level-label">Level: ₹10/min</span>
            <span className="level-label">Next: ₹15/min at 200 sessions</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{width:'71.5%'}} />
          </div>
          <div style={{fontSize:12,color:'var(--gray)',fontWeight:600,marginTop:6}}>143 / 200 sessions to unlock ₹15/min rate</div>
        </div>

        {/* Payout */}
        <div className="section-title">Pending payout</div>
        <div className="payout-card">
          <div className="payout-row">
            <div>
              <div className="payout-label">Available to withdraw</div>
              <div className="payout-balance">₹945</div>
            </div>
            <button className="btn-payout" onClick={requestPayout} disabled={loading}>
              {loading ? '...' : 'Request payout →'}
            </button>
          </div>
          <p className="payout-note">Transfers to your registered bank account within 3 business days.</p>
        </div>

        {/* Profile card */}
        <div className="section-title">Your listener profile</div>
        <div className="profile-section">
          <div className="profile-row">
            <div className="profile-avatar">AS</div>
            <div>
              <div className="profile-name">Ananya S.</div>
              <div className="profile-rate">₹10/min · Loneliness, Relationships</div>
            </div>
          </div>
          <div className="profile-actions">
            <button className="btn-edit" onClick={() => alert('Profile editing coming soon')}>✏️ Edit profile</button>
            <button className="btn-share" onClick={() => { navigator.clipboard?.writeText('https://leanon.app/listener/1'); alert('Profile link copied!') }}>🔗 Share profile</button>
          </div>
        </div>

        {/* Recent sessions */}
        <div className="section-title">Recent sessions</div>
        <div className="session-list">
          {DEMO_SESSIONS.map((s,i) => (
            <div key={i} className="session-item">
              <div>
                <div className="session-user">{s.user} · {s.duration} {s.type}</div>
                <div className="session-meta">{s.date}</div>
              </div>
              <div className="session-earn">+₹{s.earn}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
