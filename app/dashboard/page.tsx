'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

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
  .btn-payout:disabled{opacity:.5;cursor:not-allowed;}
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
  .not-listener{text-align:center;padding:60px 20px;}
  .not-listener p{font-size:15px;color:var(--gray);margin-bottom:20px;}
  .btn-apply{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
  .skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:12px;}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
`

function ini(n: string) {
  if (!n) return '?'
  return n.split(' ').map(x => x[0] || '').join('').slice(0, 2).toUpperCase()
}

function fmtDate(iso: string) {
  const d = new Date(iso)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return `Today, ${d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}`
  if (days === 1) return `Yesterday, ${d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}`
  return `${days} days ago`
}

export default function DashboardPage() {
  const router = useRouter()
  const [profile, setProfile]     = useState<any>(null)
  const [user, setUser]           = useState<any>(null)
  const [sessions, setSessions]   = useState<any[]>([])
  const [avail, setAvail]         = useState(false)
  const [loading, setLoading]     = useState(true)
  const [payoutLoading, setPayoutLoading] = useState(false)

  useEffect(() => { loadData() }, [])

  async function loadData() {
    const { data: { user: u } } = await sb.auth.getUser()
    if (!u) { router.push('/auth?redirect=/dashboard'); return }
    setUser(u)

    // Load listener profile
    const { data: lp } = await sb
      .from('listener_profiles')
      .select('*, users!inner(name, wallet_balance)')
      .eq('user_id', u.id)
      .single()

    if (lp) {
      setProfile({ ...lp, name: lp.users?.name || 'Listener', balance: lp.users?.wallet_balance || 0 })
      setAvail(lp.is_available)
    }

    // Load recent completed sessions
    const { data: recent } = await sb
      .from('sessions')
      .select('*, users!seeker_id(name)')
      .eq('listener_id', u.id)
      .eq('status', 'completed')
      .order('ended_at', { ascending: false })
      .limit(10)

    if (recent) setSessions(recent)
    setLoading(false)
  }

  async function toggleAvailability() {
    if (!user) return
    const next = !avail
    setAvail(next)
    await sb.from('listener_profiles')
      .update({ is_available: next })
      .eq('user_id', user.id)
  }

  async function requestPayout() {
    if (!user || !profile) return
    setPayoutLoading(true)
    // Log payout request — admin processes manually within 3 days
    await sb.from('payout_requests').insert({
      user_id: user.id,
      amount:  profile.balance,
      status:  'pending',
    })
    setPayoutLoading(false)
    alert(`Payout request submitted! ₹${profile.balance} will be transferred to your bank within 3 business days.`)
  }

  // Calculate stats from real sessions
  const thisMonthSessions = sessions.filter(s => {
    if (!s.ended_at) return false
    const d = new Date(s.ended_at)
    const now = new Date()
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
  })
  const thisMonthEarned = thisMonthSessions.reduce((sum, s) => sum + (s.amount_held - s.platform_fee), 0)
  const totalSessions   = profile?.total_sessions || 0
  const rating          = profile?.rating || 0
  const nextTierAt      = 200
  const progressPct     = Math.min(100, Math.round((totalSessions / nextTierAt) * 100))

  if (loading) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar"><h1>My Dashboard</h1></div>
        <div className="stats-grid">
          {[1,2,3,4].map(i => <div key={i} className="skeleton" style={{height:80}} />)}
        </div>
      </div>
    </>
  )

  if (!profile) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar"><h1>My Dashboard</h1></div>
        <div className="not-listener">
          <div style={{fontSize:48,marginBottom:16}}>🎧</div>
          <p>You haven&apos;t applied to become a listener yet.</p>
          <button className="btn-apply" onClick={() => router.push('/become-listener')}>
            Apply to become a listener →
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <h1>My Dashboard</h1>
          <button className={`avail-toggle ${avail ? 'on' : 'off'}`} onClick={toggleAvailability}>
            <div className={`avail-dot ${avail ? 'on' : 'off'}`} />
            {avail ? 'Available' : 'Go offline'}
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card accent">
            <div className="stat-label">This month</div>
            <div className="stat-value">₹{thisMonthEarned}</div>
            <div className="stat-sub">{thisMonthSessions.length} sessions</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Rating</div>
            <div className="stat-value">{rating > 0 ? `${parseFloat(rating).toFixed(1)} ⭐` : '— ⭐'}</div>
            <div className="stat-sub">{totalSessions} reviews</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total sessions</div>
            <div className="stat-value">{totalSessions}</div>
            <div className="stat-sub">Since joining</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Wallet balance</div>
            <div className="stat-value">₹{profile.balance}</div>
            <div className="stat-sub">Available</div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-label">
            <span className="level-label">Level: ₹{profile.rate_per_min}/min</span>
            <span className="level-label">Next: ₹{profile.rate_per_min + 5}/min at {nextTierAt} sessions</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <div style={{ fontSize: 12, color: 'var(--gray)', fontWeight: 600, marginTop: 6 }}>
            {totalSessions} / {nextTierAt} sessions to unlock higher rate
          </div>
        </div>

        <div className="section-title">Pending payout</div>
        <div className="payout-card">
          <div className="payout-row">
            <div>
              <div className="payout-label">Available to withdraw</div>
              <div className="payout-balance">₹{profile.balance}</div>
            </div>
            <button className="btn-payout" onClick={requestPayout}
              disabled={payoutLoading || profile.balance <= 0}>
              {payoutLoading ? '...' : 'Request payout →'}
            </button>
          </div>
          <p className="payout-note">Transfers to your registered bank account within 3 business days.</p>
        </div>

        <div className="section-title">Your listener profile</div>
        <div className="profile-section">
          <div className="profile-row">
            <div className="profile-avatar">{ini(profile.name)}</div>
            <div>
              <div className="profile-name">{profile.name}</div>
              <div className="profile-rate">
                ₹{profile.rate_per_min}/min · {(profile.specialty_tags || []).slice(0, 2).join(', ')}
              </div>
            </div>
          </div>
          <div className="profile-actions">
            <button className="btn-edit" onClick={() => alert('Profile editing coming soon')}>✏️ Edit profile</button>
            <button className="btn-share" onClick={() => {
              navigator.clipboard?.writeText(`https://leanon.app/listener/${user?.id}`)
              alert('Profile link copied!')
            }}>🔗 Share profile</button>
          </div>
        </div>

        {sessions.length > 0 && (
          <>
            <div className="section-title">Recent sessions</div>
            <div className="session-list">
              {sessions.map((s, i) => {
                const earned = s.amount_held - s.platform_fee
                const seeker = s.users?.name
                const seekerDisplay = seeker
                  ? seeker.split(' ').map((p: string) => p[0] || '').join('.') + '.'
                  : 'User'
                return (
                  <div key={i} className="session-item">
                    <div>
                      <div className="session-user">
                        {seekerDisplay} · {s.duration_mins} min {s.session_type}
                      </div>
                      <div className="session-meta">{s.ended_at ? fmtDate(s.ended_at) : ''}</div>
                    </div>
                    <div className="session-earn">+₹{earned}</div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {sessions.length === 0 && (
          <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--gray)', fontSize: 14, fontWeight: 600 }}>
            No sessions yet — go available to start receiving requests.
          </div>
        )}
      </div>
    </>
  )
}
