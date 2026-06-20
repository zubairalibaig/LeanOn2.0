'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { LANGUAGES, MIN_LISTENER_RATE, MAX_LISTENER_RATE, PLATFORM_FEE } from '@/lib/constants'
import { showToast } from '@/lib/toast'

let _sb: ReturnType<typeof createBrowserClient> | null = null
function initSb() {
  if (!_sb) _sb = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  return _sb
}
const sb = new Proxy({} as ReturnType<typeof createBrowserClient>, {
  get(_, prop) {
    const client = initSb()
    const val = (client as ReturnType<typeof createBrowserClient>)[prop as keyof ReturnType<typeof createBrowserClient>]
    return typeof val === 'function' ? (val as (...a: unknown[]) => unknown).bind(client) : val
  }
})

const SPECIALTY_TAGS = [
  {id:'loneliness',  label:'Loneliness 🌙'},
  {id:'anxiety',     label:'Anxiety 😰'},
  {id:'stress',      label:'Work stress 💼'},
  {id:'burnout',     label:'Burnout 🔥'},
  {id:'career',      label:'Career confusion 🧭'},
  {id:'relationships',label:'Relationships 💬'},
  {id:'breakup',     label:'Breakup & divorce 💔'},
  {id:'grief',       label:'Grief & loss 🌿'},
  {id:'students',    label:'Student pressure 📚'},
  {id:'selfesteem',  label:'Self-esteem 💙'},
  {id:'lgbtq',       label:'LGBTQ+ 🌈'},
  {id:'parenting',   label:'Parenting 👶'},
  {id:'startup',     label:'Startup journey 🚀'},
  {id:'general',     label:'Just need to talk ☕'},
]

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
  .profile-avatar{width:52px;height:52px;border-radius:16px;background:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:18px;color:var(--navy);flex-shrink:0;overflow:hidden;}
  .profile-avatar img{width:100%;height:100%;object-fit:cover;border-radius:16px;}
  .profile-name{font-size:16px;font-weight:800;color:var(--navy);}
  .profile-rate{font-size:13px;color:var(--gray);font-weight:600;}
  .profile-actions{display:flex;gap:8px;margin-top:14px;}
  .btn-edit{flex:1;padding:10px;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:var(--navy);background:var(--light);border:none;border-radius:10px;cursor:pointer;}
  .btn-share{flex:1;padding:10px;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:var(--orange);background:#FFF3E0;border:none;border-radius:10px;cursor:pointer;}
  .btn-deactivate{width:100%;margin-top:10px;padding:10px;font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;color:#B71C1C;background:#FFF5F5;border:1.5px solid #FFCDD2;border-radius:10px;cursor:pointer;transition:all 0.2s;}
  .btn-deactivate:hover{background:#FFEBEE;}
  .btn-deactivate:disabled{opacity:0.5;cursor:not-allowed;}
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
  .modal-overlay{position:fixed;inset:0;background:rgba(15,72,103,0.55);z-index:200;display:flex;align-items:flex-end;justify-content:center;padding:0;animation:fadeIn .2s ease;}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  .modal-card{background:white;border-radius:24px 24px 0 0;padding:28px 24px 40px;width:100%;max-width:480px;max-height:90vh;overflow-y:auto;animation:slideUp .25s ease;}
  @keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
  .modal-title{font-size:20px;font-weight:900;color:var(--navy);margin-bottom:20px;}
  .modal-icon{width:56px;height:56px;border-radius:18px;background:var(--orange);display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px;}
  .modal-title2{font-size:20px;font-weight:900;color:var(--navy);text-align:center;margin-bottom:8px;}
  .modal-sub{font-size:14px;color:var(--gray);font-weight:600;text-align:center;margin-bottom:20px;}
  .modal-detail{display:flex;justify-content:space-around;background:var(--light);border-radius:14px;padding:14px;margin-bottom:20px;}
  .modal-detail-item{text-align:center;}
  .modal-detail-label{font-size:10px;font-weight:800;color:var(--gray);text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;}
  .modal-detail-value{font-size:16px;font-weight:900;color:var(--navy);}
  .btn-join-session{width:100%;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:15px;border-radius:14px;border:none;cursor:pointer;margin-bottom:10px;box-shadow:0 4px 16px rgba(255,153,51,.35);transition:all .2s;}
  .btn-join-session:hover{background:#e8861a;}
  .btn-dismiss{width:100%;background:transparent;color:var(--gray);font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:10px;border-radius:14px;border:1.5px solid var(--border);cursor:pointer;}
  .countdown-bar{height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-bottom:16px;}
  .countdown-fill{height:100%;background:var(--orange);border-radius:2px;transition:width 1s linear;}
  .field-label{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .field-group{margin-bottom:18px;}
  .field-input{width:100%;padding:12px 14px;font-family:'Nunito',sans-serif;font-size:14px;color:var(--navy);border:1.5px solid var(--border);border-radius:12px;outline:none;resize:vertical;}
  .field-input:focus{border-color:var(--navy);}
  .tag-grid{display:flex;flex-wrap:wrap;gap:8px;}
  .tag-chip{padding:7px 14px;border:1.5px solid var(--border);border-radius:50px;font-family:'Nunito',sans-serif;font-size:12px;font-weight:700;color:var(--gray);background:white;cursor:pointer;transition:all .15s;}
  .tag-chip.sel{background:var(--navy);color:white;border-color:var(--navy);}
  .rate-row{display:flex;align-items:center;gap:12px;}
  .rate-input{width:100px;padding:12px 14px;font-family:'Nunito',sans-serif;font-size:18px;font-weight:900;color:var(--navy);border:1.5px solid var(--border);border-radius:12px;outline:none;text-align:center;}
  .rate-input:focus{border-color:var(--navy);}
  .btn-save-profile{width:100%;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:15px;border-radius:14px;border:none;cursor:pointer;margin-top:8px;}
  .btn-save-profile:disabled{opacity:.5;cursor:not-allowed;}
  .btn-cancel{width:100%;background:transparent;color:var(--gray);font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:10px;border-radius:14px;border:1.5px solid var(--border);cursor:pointer;margin-top:8px;}
  .avatar-edit{display:flex;flex-direction:column;align-items:center;margin-bottom:20px;}
  .avatar-edit-img{width:72px;height:72px;border-radius:20px;background:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:24px;color:var(--navy);overflow:hidden;margin-bottom:8px;}
  .avatar-edit-img img{width:100%;height:100%;object-fit:cover;border-radius:20px;}
  .avatar-upload-btn{font-size:12px;font-weight:700;color:var(--navy);background:var(--light);border:none;cursor:pointer;padding:7px 16px;border-radius:8px;}
`

function ini(n?: string | null) {
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

type DashProfile = {
  user_id: string; bio?: string; rate_per_min: number; specialty_tags: string[]
  languages_spoken: string[]; total_sessions: number; rating: number
  is_available: boolean; is_approved?: boolean; avatar_url?: string | null; balance: number
  bank_account?: string; ifsc_code?: string; aadhaar_last4?: string
  name?: string; wallet_balance?: number
}
type DashUser = { id: string; name?: string; email?: string; wallet_balance?: number }
type DashSession = {
  id: string; listener_id: string; duration_mins: number; amount_held: number
  platform_fee?: number; status: string; started_at: string; ended_at?: string
  seeker_rating?: number; session_type?: string
  listener?: { name?: string } | null
  users?: { name?: string } | null
}
type IncomingSession = {
  id: string; duration_mins: number; session_type: string; amount_held: number; seeker_id: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [profile, setProfile]     = useState<DashProfile | null>(null)
  const [user, setUser]           = useState<DashUser | null>(null)
  const [sessions, setSessions]   = useState<DashSession[]>([])
  const [avail, setAvail]         = useState(false)
  const [loading, setLoading]     = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [payoutLoading, setPayoutLoading] = useState(false)
  const [incomingSession, setIncomingSession] = useState<IncomingSession | null>(null)
  const [respondingIncoming, setRespondingIncoming] = useState(false)
  const [missedSessions, setMissedSessions] = useState<Array<{ id: string; created_at: string; duration_mins: number; session_type: string }>>([])
  const [monthEarned, setMonthEarned] = useState<number | null>(null)
  const [countdown, setCountdown] = useState(60)
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const channelRef   = useRef<ReturnType<typeof sb.channel> | null>(null)

  // Edit profile state
  const [showEdit, setShowEdit]       = useState(false)
  const [editBio, setEditBio]         = useState('')
  const [editTags, setEditTags]       = useState<string[]>([])
  const [editLangs, setEditLangs]     = useState<string[]>([])
  const [editRate, setEditRate]       = useState('')
  const [editAvatar, setEditAvatar]   = useState<string | null>(null)
  const [uploadingAv, setUploadingAv] = useState(false)
  const [savingEdit, setSavingEdit]   = useState(false)
  const [deactivating, setDeactivating] = useState(false)
  const [showDeactivateConfirm, setShowDeactivateConfirm] = useState(false)

  useEffect(() => { loadData() }, [])

  // Cleanup realtime on unmount
  useEffect(() => {
    return () => {
      if (channelRef.current) sb.removeChannel(channelRef.current)
      if (countdownRef.current) clearInterval(countdownRef.current)
    }
  }, [])

  // Presence heartbeat — immediately on going online, then every 60s. The
  // leading-edge ping closes the window after a page load / returning from a
  // session where the browse query would otherwise treat the listener as stale.
  //
  // IMPORTANT: we deliberately do NOT fire an "offline" beacon on tab-hide or
  // navigation. Doing so knocked listeners offline the instant they switched
  // tabs / backgrounded the app to check /browse — the #1 "I clicked Go Online
  // but I'm not shown online" complaint. Both the browse list and the booking
  // guard already treat a listener as offline once their heartbeat goes stale
  // (>3 min), so an intentional toggle-off or a genuine disconnect is covered
  // by that single mechanism. Staying online is sticky while the dashboard is
  // open; leaving simply lets the heartbeat lapse.
  useEffect(() => {
    if (!avail) return
    const ping = () => fetch('/api/presence', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ heartbeat: true }),
    }).catch(() => {})
    ping()
    const iv = setInterval(ping, 60_000)
    return () => clearInterval(iv)
  }, [avail])

  // When the tab returns to the foreground, send an immediate heartbeat so the
  // listener is refreshed right away instead of waiting up to 60s (mobile
  // browsers throttle timers while backgrounded).
  useEffect(() => {
    if (!avail) return
    function handleVis() {
      if (document.visibilityState === 'visible') {
        fetch('/api/presence', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ heartbeat: true }),
        }).catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', handleVis)
    return () => document.removeEventListener('visibilitychange', handleVis)
  }, [avail])

  function startCountdown(onExpire: () => void) {
    setCountdown(60)
    if (countdownRef.current) clearInterval(countdownRef.current)
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownRef.current!)
          onExpire()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  function dismissIncoming() {
    setIncomingSession(null)
    if (countdownRef.current) clearInterval(countdownRef.current)
  }

  async function loadData() {
   try {
    const { data: { user: u } } = await sb.auth.getUser()
    if (!u) { router.push('/auth?redirect=/dashboard'); return }
    setUser(u)

    // Two separate queries instead of users!inner join — an RLS or join failure
    // on users must not silently filter out the profile row and show the
    // misleading "you haven't applied" screen to a real listener.
    const { data: lp, error: lpErr } = await sb
      .from('listener_profiles')
      .select('*')
      .eq('user_id', u.id)
      .maybeSingle()

    if (lpErr) {
      setLoadError('Could not load your listener profile. Please retry.')
      return
    }

    if (lp) {
      const { data: usr } = await sb
        .from('users')
        .select('name, wallet_balance, avatar_url')
        .eq('id', u.id)
        .maybeSingle()
      const avatarUrl = usr?.avatar_url || null
      setProfile({ ...lp, name: usr?.name || 'Listener', balance: usr?.wallet_balance || 0, avatar_url: avatarUrl })
      setAvail(lp.is_available)
      setEditBio(lp.bio || '')
      setEditTags(lp.specialty_tags || [])
      setEditLangs(lp.languages_spoken || ['english'])
      setEditRate(String(lp.rate_per_min || 10))
      setEditAvatar(avatarUrl)
    }

    const { data: recent } = await sb
      .from('sessions')
      .select('*, users!seeker_id(name)')
      .eq('listener_id', u.id)
      .eq('status', 'completed')
      .order('ended_at', { ascending: false })
      .limit(100)

    if (recent) setSessions(recent)

    // Missed requests — pending sessions that were cancelled (declined/timed out)
    // and never started, in the last 24h. Shown so the listener knows they
    // missed someone who wanted to talk.
    const { data: missed } = await sb
      .from('sessions')
      .select('id, created_at, duration_mins, session_type, started_at')
      .eq('listener_id', u.id)
      .eq('status', 'cancelled')
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60_000).toISOString())
      .order('created_at', { ascending: false })
      .limit(10)
    if (missed) setMissedSessions(missed.filter(s => !s.started_at))

    // Authoritative earnings come from the listener_earnings ledger (net_amount),
    // which already accounts for pro-rated partial sessions. Deriving "this month"
    // from amount_held - platform_fee overstates partial-session earnings and
    // disagrees with the wallet and the /dashboard/earnings page.
    const { data: earnings } = await sb
      .from('listener_earnings')
      .select('net_amount, created_at, status')
      .eq('listener_id', u.id)
    if (earnings) {
      const now = new Date()
      const sum = earnings
        .filter(e => e.status === 'settled')
        .filter(e => { const d = new Date(e.created_at); return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear() })
        .reduce((s, e) => s + (e.net_amount || 0), 0)
      setMonthEarned(sum)
    }

    if (channelRef.current) sb.removeChannel(channelRef.current)
    const channel = sb.channel(`dashboard-incoming-${u.id}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'sessions',
        filter: `listener_id=eq.${u.id}`,
      }, (payload) => {
        const s = payload.new as IncomingSession & { status?: string }
        // Only surface genuine pending requests (ignore any non-pending inserts)
        if (s.status && s.status !== 'pending') return
        setIncomingSession(s)
        startCountdown(() => {
          const expiredId = s.id
          setIncomingSession(null)
          // Auto-decline so the seeker gets an immediate refund instead of
          // waiting up to 5 more minutes for their own timeout to fire.
          fetch(`/api/sessions/${expiredId}/decline`, { method: 'POST' }).catch(() => {})
          showToast('Session request expired — seeker has been refunded.', 'info')
        })
      })
      .subscribe()
    channelRef.current = channel
   } catch (err) {
     console.error('Dashboard load error:', err)
     setLoadError('Something went wrong loading your dashboard. Please retry.')
   } finally {
     setLoading(false)   // never hang on the skeleton, even on network error
   }
  }

  async function toggleAvailability() {
    if (!user) return
    const prev = avail
    setAvail(!prev) // optimistic
    const res = await fetch('/api/listener/availability', { method: 'PATCH' }).catch(() => null)
    if (!res?.ok) {
      setAvail(prev) // revert on failure
      const body = await res?.json().catch(() => ({}))
      showToast(body?.error || 'Could not update availability. Please try again.', 'error')
    } else {
      const data = await res.json().catch(() => ({}))
      if (typeof data.is_available === 'boolean') setAvail(data.is_available)
    }
  }

  async function requestPayout() {
    if (!user || !profile) return
    setPayoutLoading(true)
    const res = await fetch('/api/payout', { method: 'POST' }).catch(() => null)
    setPayoutLoading(false)
    if (!res) { showToast('Network error. Please try again.', 'error'); return }
    const body = await res.json().catch(() => ({}))
    if (res.status === 409) { showToast('You already have a pending payout request.', 'warning'); return }
    if (!res.ok) { showToast(body.message || body.error || 'Failed to submit payout. Please try again.', 'error'); return }
    showToast(`Payout request submitted! ₹${body.amount} will be transferred within 3 business days.`, 'success')
  }

  async function deactivateListenerProfile() {
    setDeactivating(true)
    const res = await fetch('/api/account', { method: 'PATCH' })
    setDeactivating(false)
    if (res.ok) {
      showToast('Listener profile deactivated. Contact support to reactivate.', 'info')
      router.push('/browse')
    } else {
      showToast('Something went wrong. Please try again.', 'error')
    }
  }

  function openEdit() {
    if (!profile) return
    setEditBio(profile.bio || '')
    setEditTags(profile.specialty_tags || [])
    setEditLangs(profile.languages_spoken || ['english'])
    setEditRate(String(profile.rate_per_min || 10))
    setEditAvatar(profile.avatar_url || null)
    setShowEdit(true)
  }

  async function uploadAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file || !user) return
    if (!file.type.startsWith('image/')) { alert('Please choose an image file'); return }
    if (file.size > 2 * 1024 * 1024) { alert('Photo must be under 2 MB'); return }
    setUploadingAv(true)
    try {
      // Derive extension from MIME type, not the user-controlled filename
      const ext = file.type === 'image/png' ? 'png' : file.type === 'image/webp' ? 'webp' : 'jpg'
      const path = `${user.id}.${ext}`
      const { error: upErr } = await sb.storage.from('avatars').upload(path, file, { upsert: true, contentType: file.type })
      if (upErr) throw upErr
      const { data: { publicUrl } } = sb.storage.from('avatars').getPublicUrl(path)
      const url = `${publicUrl}?t=${Date.now()}`
      const res = await fetch('/api/auth/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avatar_url: url }),
      })
      // Only reflect the new avatar if the server actually saved it — otherwise
      // the UI shows a photo that's gone on the next reload.
      if (!res.ok) throw new Error('profile update failed')
      setEditAvatar(url)
    } catch (err) {
      console.error('Avatar upload error:', err)
      alert('Upload failed. Make sure the avatars storage bucket exists in Supabase.')
    } finally {
      setUploadingAv(false)
    }
  }

  function toggleTag(id: string) {
    setEditTags(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id])
  }

  function toggleLang(id: string) {
    setEditLangs(prev => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev
        return prev.filter(l => l !== id)
      }
      return [...prev, id]
    })
  }

  async function saveProfile() {
    if (!user) return
    const rate = parseInt(editRate)
    if (isNaN(rate) || rate < MIN_LISTENER_RATE || rate > MAX_LISTENER_RATE) {
      alert(`Rate must be between ₹${MIN_LISTENER_RATE} and ₹${MAX_LISTENER_RATE} per minute`)
      return
    }
    // Match the server's bio length validation (30–400) so the user gets a
    // specific message instead of a generic "Failed to save" from the API.
    const bioLen = editBio.trim().length
    if (bioLen < 30 || bioLen > 400) {
      alert(`Your bio must be 30–400 characters (currently ${bioLen}).`)
      return
    }
    if (editLangs.length === 0) {
      alert('Please select at least one language you speak.')
      return
    }
    setSavingEdit(true)
    const res = await fetch('/api/listener/profile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bio: editBio.trim(),
        specialty_tags: editTags,
        languages_spoken: editLangs,
        rate_per_min: rate,
      }),
    })
    setSavingEdit(false)
    if (!res.ok) {
      alert('Failed to save profile. Please try again.')
      return
    }
    setProfile((prev) => prev ? {
      ...prev,
      bio: editBio.trim(),
      specialty_tags: editTags,
      languages_spoken: editLangs,
      rate_per_min: rate,
      avatar_url: editAvatar,
    } : null)
    setShowEdit(false)
  }

  const thisMonthSessions = sessions.filter(s => {
    if (!s.ended_at) return false
    const d = new Date(s.ended_at)
    const now = new Date()
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
  })
  // Prefer the authoritative listener_earnings ledger (accounts for pro-ration).
  // Fall back to amount_held - platform_fee only if the ledger hasn't loaded.
  const thisMonthEarned = monthEarned ?? thisMonthSessions
    .filter(s => s.platform_fee != null)
    .reduce((sum, s) => sum + (s.amount_held - s.platform_fee!), 0)
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

  if (loadError) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar"><h1>My Dashboard</h1></div>
        <div className="not-listener">
          <div style={{fontSize:48,marginBottom:16}}>⚠️</div>
          <p>{loadError}</p>
          <button className="btn-apply" onClick={() => { setLoadError(null); setLoading(true); loadData() }}>
            Retry
          </button>
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

      {/* Incoming session modal */}
      {incomingSession && (
        <div className="modal-overlay" onClick={dismissIncoming}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">📞</div>
            <div className="modal-title2">New session request!</div>
            <div className="modal-sub">Someone wants to connect with you right now.</div>
            <div className="countdown-bar">
              <div className="countdown-fill" style={{ width: `${(countdown / 60) * 100}%` }} />
            </div>
            <div className="modal-detail">
              <div className="modal-detail-item">
                <div className="modal-detail-label">Duration</div>
                <div className="modal-detail-value">{incomingSession.duration_mins ?? '—'} min</div>
              </div>
              <div className="modal-detail-item">
                <div className="modal-detail-label">Type</div>
                <div className="modal-detail-value" style={{ textTransform: 'capitalize' }}>{incomingSession.session_type ?? '—'}</div>
              </div>
              <div className="modal-detail-item">
                <div className="modal-detail-label">Amount</div>
                <div className="modal-detail-value">₹{incomingSession.amount_held ?? '—'}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <button
                className="btn-join-session"
                style={{ flex: 2, marginBottom: 0 }}
                disabled={respondingIncoming}
                onClick={async () => {
                  if (!incomingSession) return
                  setRespondingIncoming(true)
                  try {
                    const res = await fetch(`/api/sessions/${incomingSession.id}/accept`, { method: 'POST' })
                    if (res.ok) {
                      const sess = incomingSession
                      dismissIncoming()
                      router.push(`/session/${sess.id}?name=You&duration=${sess.duration_mins}&type=${sess.session_type ?? 'text'}`)
                    } else {
                      const body = await res.json().catch(() => ({}))
                      showToast(body.message || body.error || 'Could not accept — it may have expired.', 'error')
                      dismissIncoming()
                    }
                  } catch {
                    showToast('Network error — could not accept session.', 'error')
                  } finally {
                    setRespondingIncoming(false)
                  }
                }}
              >
                {respondingIncoming ? '…' : `✅ Accept (${countdown}s)`}
              </button>
              <button
                className="btn-dismiss"
                style={{ flex: 1, background: '#FFF5F5', color: '#E53935', border: '1.5px solid #FFCDD2' }}
                disabled={respondingIncoming}
                onClick={async () => {
                  if (!incomingSession) return
                  const sess = incomingSession
                  dismissIncoming()
                  try { await fetch(`/api/sessions/${sess.id}/decline`, { method: 'POST' }) } catch { /* ignore */ }
                  showToast('Request declined — seeker refunded.', 'info')
                }}
              >
                ✗ Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit profile bottom sheet */}
      {showEdit && (
        <div className="modal-overlay" onClick={() => setShowEdit(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-title">Edit listener profile</div>

            {/* Avatar */}
            <div className="avatar-edit">
              <div className="avatar-edit-img">
                {editAvatar
                  ? <img src={editAvatar} alt="avatar" />
                  : ini(profile?.name)}
              </div>
              <label style={{cursor:'pointer'}}>
                <input type="file" accept="image/*" style={{display:'none'}} onChange={uploadAvatar} />
                <span className="avatar-upload-btn">
                  {uploadingAv ? 'Uploading...' : editAvatar ? 'Change photo' : '+ Add photo'}
                </span>
              </label>
            </div>

            {/* Bio */}
            <div className="field-group">
              <div className="field-label">Bio (introduce yourself)</div>
              <textarea
                className="field-input"
                rows={3}
                value={editBio}
                onChange={e => setEditBio(e.target.value)}
                placeholder="Share a little about your lived experience and how you can help..."
              />
            </div>

            {/* Rate */}
            <div className="field-group">
              <div className="field-label">Your rate /min — suggested ₹5–₹50 (max ₹{MAX_LISTENER_RATE})</div>
              <div className="rate-row">
                <span style={{fontSize:20,fontWeight:900,color:'var(--navy)'}}>₹</span>
                <input
                  type="number"
                  className="rate-input"
                  value={editRate}
                  min={MIN_LISTENER_RATE}
                  max={MAX_LISTENER_RATE}
                  onChange={e => setEditRate(e.target.value)}
                />
                <span style={{fontSize:14,color:'var(--gray)',fontWeight:600}}>/min</span>
              </div>
              {/* Earnings preview — updates live as rate changes */}
              {(() => {
                const r = Math.min(Math.max(parseInt(editRate)||MIN_LISTENER_RATE, MIN_LISTENER_RATE), MAX_LISTENER_RATE)
                return (
                  <div style={{marginTop:10,background:'var(--light)',borderRadius:12,padding:'10px 14px',fontSize:12,color:'var(--gray)',fontWeight:600,lineHeight:1.9}}>
                    📅 Sessions are booked in <strong style={{color:'var(--navy)'}}>15 / 30 / 45 min slots</strong>
                    <br/>15 min → you earn <strong style={{color:'var(--navy)'}}>₹{r*15}</strong> · user pays ₹{r*15+PLATFORM_FEE}
                    <br/>30 min → you earn <strong style={{color:'var(--navy)'}}>₹{r*30}</strong> · user pays ₹{r*30+PLATFORM_FEE}
                    <br/>45 min → you earn <strong style={{color:'var(--navy)'}}>₹{r*45}</strong> · user pays ₹{r*45+PLATFORM_FEE}
                  </div>
                )
              })()}
            </div>

            {/* Specialty tags */}
            <div className="field-group">
              <div className="field-label">I can help with</div>
              <div className="tag-grid">
                {SPECIALTY_TAGS.map(t => (
                  <button
                    key={t.id}
                    className={`tag-chip${editTags.includes(t.id) ? ' sel' : ''}`}
                    onClick={() => toggleTag(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="field-group">
              <div className="field-label">Languages I speak</div>
              <div className="tag-grid">
                {LANGUAGES.map(l => (
                  <button
                    key={l.id}
                    className={`tag-chip${editLangs.includes(l.id) ? ' sel' : ''}`}
                    onClick={() => toggleLang(l.id)}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="btn-save-profile" onClick={saveProfile} disabled={savingEdit}>
              {savingEdit ? 'Saving...' : 'Save changes'}
            </button>
            <button className="btn-cancel" onClick={() => setShowEdit(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="page">
        <div className="topbar">
          <h1>My Dashboard</h1>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:4}}>
            <button className={`avail-toggle ${avail ? 'on' : 'off'}`} onClick={toggleAvailability}>
              <div className={`avail-dot ${avail ? 'on' : 'off'}`} />
              {avail ? 'Go offline' : 'Go online'}
            </button>
            <span style={{fontSize:10,color:'var(--gray)',fontWeight:500,textAlign:'right',maxWidth:140,lineHeight:1.3}}>
              {avail ? 'Seekers can find and book you now' : 'Go online to receive session requests'}
            </span>
          </div>
        </div>

        {profile.is_approved === false && (
          <div style={{background:'#FFFBF0',border:'1.5px solid #FFE0B2',borderRadius:14,padding:'14px 16px',marginBottom:18,fontSize:13,fontWeight:700,color:'#b35c00',lineHeight:1.6}}>
            ⏳ Your listener application is under review. You can edit your profile, but you won&apos;t
            appear in search or receive sessions until you&apos;re approved.{' '}
            <a href="/become-listener/status" style={{color:'#0F4867',textDecoration:'underline'}}>Check status →</a>
          </div>
        )}

        <div className="stats-grid">
          <div className="stat-card accent">
            <div className="stat-label">This month</div>
            <div className="stat-value">₹{thisMonthEarned}</div>
            <div className="stat-sub">{thisMonthSessions.length} sessions</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Rating</div>
            <div className="stat-value">{rating > 0 ? `${(+rating).toFixed(1)} ⭐` : '— ⭐'}</div>
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
          <a href="/history" style={{display:'block',textAlign:'center',marginTop:10,fontSize:13,fontWeight:700,color:'var(--teal)',textDecoration:'none'}}>
            View full session history →
          </a>
        </div>

        <div className="section-title">Your listener profile</div>
        <div className="profile-section">
          <div className="profile-row">
            <div className="profile-avatar">
              {profile?.avatar_url
                ? <img src={profile.avatar_url ?? ''} alt={profile.name ?? ''} />
                : ini(profile?.name)}
            </div>
            <div>
              <div className="profile-name">{profile.name}</div>
              <div className="profile-rate">
                ₹{profile.rate_per_min}/min · {(profile.specialty_tags || []).slice(0, 2).join(', ')}
              </div>
            </div>
          </div>
          <div className="profile-actions">
            <button className="btn-edit" onClick={openEdit}>✏️ Edit profile</button>
            <button className="btn-share" onClick={() => {
              navigator.clipboard?.writeText(`${window.location.origin}/listener/${user?.id}`)
              showToast('Profile link copied!', 'success')
            }}>🔗 Share profile</button>
          </div>
          {showDeactivateConfirm ? (
            <div style={{background:'#FFF5F5',border:'1.5px solid #FFCDD2',borderRadius:12,padding:'14px 16px',marginTop:10}}>
              <p style={{fontSize:13,color:'#7A2020',fontWeight:700,marginBottom:12}}>This will remove you from search and stop incoming sessions. Your account stays active.</p>
              <div style={{display:'flex',gap:8}}>
                <button className="btn-deactivate" style={{flex:1,marginTop:0}} onClick={deactivateListenerProfile} disabled={deactivating}>
                  {deactivating ? '⟳ Deactivating...' : 'Yes, deactivate'}
                </button>
                <button style={{flex:1,padding:10,background:'white',border:'1.5px solid var(--border)',borderRadius:10,fontFamily:'Nunito,sans-serif',fontWeight:700,fontSize:12,cursor:'pointer',color:'var(--navy)'}} onClick={() => setShowDeactivateConfirm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button className="btn-deactivate" onClick={() => setShowDeactivateConfirm(true)} disabled={deactivating}>
              ⚠️ Deactivate listener profile
            </button>
          )}
        </div>

        {/* Missed requests — pending sessions that lapsed without a response */}
        {missedSessions.length > 0 && (
          <>
            <div className="section-title" style={{ color: '#E53935' }}>Missed requests · last 24h</div>
            <div className="session-list" style={{ marginBottom: 24 }}>
              {missedSessions.map(s => (
                <div key={s.id} className="session-item" style={{ borderColor: '#FFCDD2', background: '#FFF5F5' }}>
                  <div>
                    <div className="session-user" style={{ color: '#B71C1C' }}>⏰ Missed request</div>
                    <div className="session-meta">{s.duration_mins} min · {s.session_type} · {fmtDate(s.created_at)}</div>
                  </div>
                  <div style={{ fontSize: 12, color: '#B71C1C', fontWeight: 700 }}>No response</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12, color: 'var(--gray)', fontWeight: 600, marginTop: -14, marginBottom: 24 }}>
              💡 Stay online and respond within 5 minutes so you don&apos;t miss seekers who want to talk.
            </div>
          </>
        )}

        {/* My Chats shortcut */}
        <button
          onClick={() => router.push('/history')}
          style={{ width:'100%', background:'white', border:'1.5px solid var(--border)', borderRadius:18, padding:'16px 20px', marginBottom:20, display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer', textAlign:'left' }}
        >
          <div>
            <div style={{ fontSize:16, fontWeight:800, color:'var(--navy)' }}>My Chats</div>
            <div style={{ fontSize:13, color:'var(--gray)', fontWeight:600, marginTop:2 }}>View all conversations and session history</div>
          </div>
          <span style={{ fontSize:20 }}>💬</span>
        </button>

        {sessions.length > 0 && (
          <>
            <div className="section-title">Recent sessions</div>
            <div className="session-list">
              {sessions.map((s, i) => {
                const earned = s.amount_held - (s.platform_fee ?? 0)
                const seeker = s.users?.name
                const seekerDisplay = seeker
                  ? seeker.split(' ').map((p: string) => p[0] || '').join('.') + '.'
                  : 'User'
                return (
                  <div key={s.id} className="session-item">
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
