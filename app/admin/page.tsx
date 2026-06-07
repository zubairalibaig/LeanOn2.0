'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { createClient } from '@/lib/supabase'

// ── Types ─────────────────────────────────────────────────────────────────────

type KPIs = {
  users: { total: number; active: number; inactive: number; newToday: number; newThisMonth: number }
  listeners: { total: number; active: number; pending: number; online: number }
  sessions: { total: number; today: number; thisMonth: number; active: number; freeTrial: number; paid: number; avgDurationMins: number }
  revenue: { totalRechargedPaise: number; thisMonthPaise: number; todayPaise: number; listenerEarningsPaise: number }
  payouts: { pendingAmountPaise: number; pendingCount: number; totalPaidPaise: number }
  moderation: { pendingReports: number }
}

type UserRow = { id: string; name?: string; phone?: string; email?: string; created_at: string; is_active: boolean; is_suspended: boolean; wallet_balance: number; updated_at?: string }
type ListenerRow = {
  user_id: string; bio?: string; specialty_tags?: string[]; rate_per_min?: number; rating?: number; total_sessions?: number
  is_active: boolean; is_approved: boolean; is_available: boolean; is_verified?: boolean; is_suspended?: boolean; created_at: string
  users: { id: string; name?: string; email?: string; phone?: string; created_at: string; is_active: boolean; is_suspended: boolean; wallet_balance: number }
}
type SessionRow = {
  id: string; seeker_id: string; listener_id: string; session_type: string; duration_mins: number
  amount_held: number; status: string; is_free_trial: boolean; started_at: string | null; ended_at?: string | null
  seeker?: { name?: string }; listener?: { name?: string }
}
type ReportRow = {
  id: string; type: string; description: string; status: string; created_at: string
  session_id: string | null; reported_user_id: string | null
  reporter: { name?: string; email?: string } | null
  target: { name?: string; email?: string } | null
}
type VerificationRow = {
  id: string; listener_id: string; full_name: string; id_type: string
  selfie_url: string | null; id_doc_url: string | null; status: string
  submitted_at: string; admin_notes: string | null
}
type PayoutRow = { id: string; amount: number; upi_id?: string; status: string; created_at: string; users: { name?: string; email?: string; phone?: string } | null }
type RefundRow  = { id: string; amount: number; reason?: string; status: string; created_at: string; users: { name?: string; email?: string } | null }

type Tab = 'overview' | 'users' | 'listeners' | 'sessions' | 'reports' | 'payouts' | 'verifications'

// ── Style ─────────────────────────────────────────────────────────────────────

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;--green:#34C759;--red:#FF3B30;}
  body{font-family:'Nunito',sans-serif;background:var(--light);color:var(--navy);-webkit-font-smoothing:antialiased;}
  .page{max-width:1100px;margin:0 auto;padding:0 20px 80px;}
  .topbar{padding:24px 0 16px;display:flex;align-items:center;justify-content:space-between;}
  .topbar h1{font-size:26px;font-weight:900;color:var(--navy);}
  .topbar p{font-size:13px;color:var(--gray);font-weight:600;margin-top:4px;}
  .tab-row{display:flex;gap:6px;margin-bottom:24px;flex-wrap:wrap;}
  .tab-btn{padding:8px 16px;border-radius:50px;border:none;cursor:pointer;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;transition:all .15s;}
  .tab-btn.active{background:var(--navy);color:white;}
  .tab-btn:not(.active){background:white;color:var(--gray);border:1.5px solid var(--border);}
  .kpi-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:32px;}
  @media(min-width:640px){.kpi-grid{grid-template-columns:repeat(3,1fr);}}
  @media(min-width:900px){.kpi-grid{grid-template-columns:repeat(4,1fr);}}
  .kpi-card{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px 18px;}
  .kpi-label{font-size:11px;font-weight:800;color:var(--gray);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;}
  .kpi-value{font-size:28px;font-weight:900;color:var(--navy);line-height:1;}
  .kpi-sub{font-size:12px;color:var(--gray);font-weight:600;margin-top:4px;}
  .section-title{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid var(--border);display:flex;align-items:center;gap:10px;}
  .count-badge{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:22px;background:var(--orange);color:white;font-size:11px;font-weight:800;border-radius:50px;padding:0 6px;}
  .filter-row{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center;}
  .filter-btn{padding:5px 14px;border-radius:50px;border:1.5px solid var(--border);background:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;cursor:pointer;color:var(--gray);transition:all .15s;}
  .filter-btn.active{background:var(--teal);color:white;border-color:var(--teal);}
  .search-input{flex:1;min-width:160px;padding:7px 14px;border:1.5px solid var(--border);border-radius:50px;font-family:'Nunito',sans-serif;font-size:13px;outline:none;color:var(--navy);}
  .search-input:focus{border-color:var(--teal);}
  .table-wrap{overflow-x:auto;background:white;border:1.5px solid var(--border);border-radius:16px;}
  table{width:100%;border-collapse:collapse;}
  th{font-size:11px;font-weight:800;color:var(--gray);text-transform:uppercase;letter-spacing:.06em;padding:12px 14px;text-align:left;border-bottom:2px solid var(--border);white-space:nowrap;}
  td{font-size:13px;font-weight:600;color:var(--navy);padding:12px 14px;border-bottom:1px solid var(--border);vertical-align:middle;}
  tr:last-child td{border-bottom:none;}
  tr.pending-row{background:#FFFBF0;}
  .badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:50px;font-size:11px;font-weight:800;}
  .badge-green{background:rgba(52,199,89,.15);color:#1a7a2a;}
  .badge-red{background:rgba(255,59,48,.15);color:#c0392b;}
  .badge-orange{background:rgba(255,153,51,.15);color:#b35c00;}
  .badge-gray{background:rgba(90,122,138,.12);color:var(--gray);}
  .badge-teal{background:rgba(26,143,160,.12);color:#0d6e7e;}
  .action-row{display:flex;gap:6px;flex-wrap:wrap;}
  .btn{font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;padding:6px 14px;border-radius:8px;border:none;cursor:pointer;transition:all .15s;white-space:nowrap;}
  .btn:disabled{opacity:.45;cursor:not-allowed;}
  .btn-green{background:var(--green);color:white;}
  .btn-green:hover:not(:disabled){background:#2aad4a;}
  .btn-red{background:white;color:var(--red);border:1.5px solid var(--red);}
  .btn-red:hover:not(:disabled){background:#FFF0EF;}
  .btn-orange{background:var(--orange);color:white;}
  .btn-orange:hover:not(:disabled){background:#d97c00;}
  .btn-teal{background:var(--teal);color:white;}
  .btn-teal:hover:not(:disabled){background:#147a8a;}
  .btn-gray{background:var(--light);color:var(--gray);border:1.5px solid var(--border);}
  .btn-gray:hover:not(:disabled){background:var(--border);}
  .pagination{display:flex;justify-content:space-between;align-items:center;margin-top:12px;}
  .pagination span{font-size:13px;color:var(--gray);font-weight:600;}
  .empty{text-align:center;padding:32px 20px;color:var(--gray);font-size:14px;font-weight:600;}
  .card{background:white;border:1.5px solid var(--border);border-radius:16px;padding:18px 20px;margin-bottom:12px;}
  .card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
  .name-text{font-size:15px;font-weight:800;color:var(--navy);}
  .meta-text{font-size:12px;color:var(--gray);font-weight:600;margin-top:2px;}
  .skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:14px;}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  .toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--navy);color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:12px 28px;border-radius:50px;box-shadow:0 4px 24px rgba(15,72,103,.3);z-index:9999;animation:toastIn .25s ease;white-space:nowrap;}
  @keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(14px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
  .error-page{text-align:center;padding:80px 20px;}
  .error-page h2{font-size:22px;font-weight:900;color:var(--navy);margin-bottom:10px;}
  .reject-input{width:100%;padding:7px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:'Nunito',sans-serif;font-size:12px;margin-bottom:8px;outline:none;color:var(--navy);}
  .reject-input:focus{border-color:var(--red);}
`

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmt(n: number) { return n.toLocaleString('en-IN') }
function fmtRs(paise: number) { return `₹${fmt(Math.round(paise))}` }
function fmtDate(iso: string | null | undefined) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AdminPage() {
  // ── Auth gate ───────────────────────────────────────────────────────────────
  const [authChecking, setAuthChecking] = useState(true)
  const [authUser, setAuthUser] = useState<{ id: string; email?: string; phone?: string } | null>(null)
  const [pinRequired, setPinRequired] = useState(false)
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState('')
  const [pinVerified, setPinVerified] = useState(false)
  const [denied, setDenied] = useState(false)

  // Password login state
  const [loginPassword, setLoginPassword] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  // Stores the admin password for all subsequent API headers (password-based auth)
  const adminPasswordRef = useRef<string>('')

  async function tryPasswordLogin() {
    const pw = loginPassword.trim()
    if (!pw) { setLoginError('Enter the admin password'); return }
    setLoginLoading(true)
    setLoginError('')
    // Use /api/admin/ping for auth-only check — avoids false failures
    // from DB query errors in the KPI endpoint masking a correct password.
    const res = await fetch('/api/admin/ping', {
      headers: { 'x-admin-password': pw },
    }).catch(() => null)
    setLoginLoading(false)
    if (!res) { setLoginError('Connection error. Try again.'); return }
    if (res.status === 429) { setLoginError('Too many attempts. Please wait a minute.'); return }
    if (res.status === 403) { setLoginError('Incorrect password.'); setLoginPassword(''); return }
    if (!res.ok) { setLoginError('Server error. Please try again.'); return }
    // Auth confirmed — store password, enter dashboard, then load KPIs in background
    adminPasswordRef.current = pw
    try { sessionStorage.setItem('adminPw', pw) } catch {}
    setAuthUser({ id: 'password-admin', email: undefined })
    setDenied(false)
    setAuthChecking(false)
    // KPIs load automatically via the authUser useEffect
  }

  // On mount: check sessionStorage for a stored password, then fall back to Supabase session.
  useEffect(() => {
    async function init() {
      let storedPw = ''
      try { storedPw = sessionStorage.getItem('adminPw') ?? '' } catch {}
      if (storedPw) {
        adminPasswordRef.current = storedPw
        // Use ping endpoint — avoids KPI DB errors masking a valid stored password
        const res = await fetch('/api/admin/ping', { headers: { 'x-admin-password': storedPw } }).catch(() => null)
        if (res?.ok) {
          setAuthUser({ id: 'password-admin', email: undefined })
          setAuthChecking(false)
          return  // KPIs load via authUser useEffect
        }
        // Stored password no longer valid — clear it and fall through.
        adminPasswordRef.current = ''
        try { sessionStorage.removeItem('adminPw') } catch {}
      }
      // Fall back to Supabase session check (for existing OTP-authenticated admins).
      const sb = createClient()
      sb.auth.getUser().then(({ data: { user } }) => {
        if (!user) { setAuthChecking(false); setDenied(true); return }
        setAuthUser(user as { id: string; email?: string; phone?: string })
        setAuthChecking(false)
      }).catch(() => { setAuthChecking(false); setDenied(true) })
    }
    init()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const [tab, setTab] = useState<Tab>('overview')
  const [toast, setToast] = useState<string | null>(null)
  const [busy, setBusy] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Stores the verified PIN so all subsequent API calls include it
  const verifiedPinRef = useRef<string>('')

  // KPIs
  const [kpis, setKpis] = useState<KPIs | null>(null)
  const [kpisLoading, setKpisLoading] = useState(false)

  // Users
  const [users, setUsers] = useState<UserRow[]>([])
  const [usersTotal, setUsersTotal] = useState(0)
  const [usersPage, setUsersPage] = useState(0)
  const [usersStatus, setUsersStatus] = useState('all')
  const [usersSearch, setUsersSearch] = useState('')
  const [usersLoading, setUsersLoading] = useState(false)

  // Listeners
  const [listeners, setListeners] = useState<ListenerRow[]>([])
  const [listenersTotal, setListenersTotal] = useState(0)
  const [listenersPage, setListenersPage] = useState(0)
  const [listenersStatus, setListenersStatus] = useState('all')
  const [listenersLoading, setListenersLoading] = useState(false)
  const [rejectNotes, setRejectNotes] = useState<Record<string, string>>({})

  // Sessions
  const [sessions, setSessions] = useState<SessionRow[]>([])
  const [sessionsStatus, setSessionsStatus] = useState('all')
  const [sessionsLoading, setSessionsLoading] = useState(false)

  // Reports
  const [reports, setReports] = useState<ReportRow[]>([])
  const [reportsStatus, setReportsStatus] = useState('pending')
  const [reportsLoading, setReportsLoading] = useState(false)
  const [reportRejectNotes, setReportRejectNotes] = useState<Record<string, string>>({})

  // Payouts + Refunds
  const [payouts, setPayouts] = useState<PayoutRow[]>([])
  const [refunds, setRefunds] = useState<RefundRow[]>([])
  const [payoutsLoading, setPayoutsLoading] = useState(false)
  // Inline confirm state for destructive ban action (window.confirm blocked in mobile)
  const [confirmBanId, setConfirmBanId] = useState<string | null>(null)

  // Verifications
  const [verifs, setVerifs] = useState<VerificationRow[]>([])
  const [verifsStatus, setVerifsStatus] = useState('pending')
  const [verifsLoading, setVerifsLoading] = useState(false)
  const [verifRejectNotes, setVerifRejectNotes] = useState<Record<string, string>>({})

  const showToast = (msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast(msg)
    toastTimer.current = setTimeout(() => setToast(null), 3000)
  }
  useEffect(() => () => { if (toastTimer.current) clearTimeout(toastTimer.current) }, [])

  // ── Data loaders ────────────────────────────────────────────────────────────

  // Verify the admin PIN against the API
  const verifyPin = async () => {
    if (!pinInput.trim()) { setPinError('Please enter your PIN'); return }
    const pin = pinInput.trim()
    const res = await fetch('/api/admin/kpis', {
      headers: { 'x-admin-pin': pin },
    })
    if (res.ok) {
      verifiedPinRef.current = pin
      setPinVerified(true)
      setPinRequired(false)
      const json = await res.json()
      setKpis(json)
      setKpisLoading(false)
    } else if (res.status === 403) {
      setPinError('Incorrect PIN. Try again.')
      setPinInput('')
    } else {
      setPinError('Error verifying PIN. Try again.')
    }
  }

  // Returns Authorization headers including the admin PIN when it has been verified
  function adminHeaders(extra: Record<string, string> = {}): Record<string, string> {
    const h: Record<string, string> = { ...extra }
    if (adminPasswordRef.current) h['x-admin-password'] = adminPasswordRef.current
    if (verifiedPinRef.current) h['x-admin-pin'] = verifiedPinRef.current
    return h
  }

  const loadKPIs = useCallback(async () => {
    setKpisLoading(true)
    const res = await fetch('/api/admin/kpis', { headers: adminHeaders() })
    if (res.status === 401) { setDenied(true); setKpisLoading(false); return }
    if (res.status === 403) {
      const body = await res.json().catch(() => ({}))
      // PIN_REQUIRED → user IS admin but PIN missing/wrong — show PIN gate
      // NOT_ADMIN / anything else → user is not admin — show Access Denied
      if (body.code === 'PIN_REQUIRED') { setPinRequired(true) } else { setDenied(true) }
      setKpisLoading(false)
      return
    }
    if (res.ok) setKpis(await res.json())
    setKpisLoading(false)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const loadUsers = useCallback(async (pg = usersPage, st = usersStatus, q = usersSearch) => {
    setUsersLoading(true)
    const params = new URLSearchParams({ type: 'user', page: String(pg), status: st, search: q })
    const res = await fetch(`/api/admin/users?${params}`, { headers: adminHeaders() })
    if (res.ok) {
      const json = await res.json()
      setUsers(json.items)
      setUsersTotal(json.total)
    }
    setUsersLoading(false)
  }, [usersPage, usersStatus, usersSearch]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadListeners = useCallback(async (pg = listenersPage, st = listenersStatus) => {
    setListenersLoading(true)
    const params = new URLSearchParams({ type: 'listener', page: String(pg), status: st })
    const res = await fetch(`/api/admin/users?${params}`, { headers: adminHeaders() })
    if (res.ok) {
      const json = await res.json()
      setListeners(json.items)
      setListenersTotal(json.total)
    }
    setListenersLoading(false)
  }, [listenersPage, listenersStatus]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadSessions = useCallback(async (st = sessionsStatus) => {
    setSessionsLoading(true)
    const params = new URLSearchParams({ status: st !== 'all' ? st : '' })
    const res = await fetch(`/api/admin/sessions?${params}`, { headers: adminHeaders() })
    if (res.ok) setSessions((await res.json()).sessions ?? [])
    setSessionsLoading(false)
  }, [sessionsStatus]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadReports = useCallback(async (st = reportsStatus) => {
    setReportsLoading(true)
    const res = await fetch(`/api/admin/moderate?status=${st}`, { headers: adminHeaders() })
    if (res.ok) setReports((await res.json()).reports ?? [])
    setReportsLoading(false)
  }, [reportsStatus]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadPayouts = useCallback(async () => {
    setPayoutsLoading(true)
    const res = await fetch('/api/admin?prPage=0&lpPage=0', { headers: adminHeaders() })
    if (res.ok) {
      const json = await res.json()
      setPayouts(json.pendingPayouts ?? [])
      setRefunds(json.refundRequests ?? [])
    }
    setPayoutsLoading(false)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const loadVerifs = useCallback(async (st = verifsStatus) => {
    setVerifsLoading(true)
    const res = await fetch(`/api/admin/verify-listener?status=${st}`, { headers: adminHeaders() })
    if (res.ok) setVerifs((await res.json()).verifications ?? [])
    setVerifsLoading(false)
  }, [verifsStatus]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Effects ─────────────────────────────────────────────────────────────────

  // Only fire loadKPIs after session check completes and user is confirmed logged in.
  // Firing before auth check means the request races with cookie hydration.
  useEffect(() => {
    if (!authChecking && authUser) loadKPIs()
  }, [authChecking, authUser, loadKPIs])

  // Auto-refresh KPIs every 30 seconds (only while dashboard is visible)
  useEffect(() => {
    if (authChecking || !authUser || denied || (pinRequired && !pinVerified)) return
    const interval = setInterval(loadKPIs, 30_000)
    return () => clearInterval(interval)
  }, [authChecking, authUser, denied, pinRequired, pinVerified, loadKPIs])

  useEffect(() => {
    if (tab === 'users') loadUsers(0, usersStatus, usersSearch)
  }, [tab]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tab === 'listeners') loadListeners(0, listenersStatus)
  }, [tab]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tab === 'sessions') loadSessions(sessionsStatus)
  }, [tab]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tab === 'reports') loadReports(reportsStatus)
  }, [tab]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tab === 'payouts') loadPayouts()
  }, [tab]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tab === 'verifications') loadVerifs(verifsStatus)
  }, [tab]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Actions ─────────────────────────────────────────────────────────────────

  async function userAction(userId: string, action: string, notes?: string) {
    const key = `${action}:${userId}`
    setBusy(key)
    const res = await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: adminHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ userId, action, notes }),
    })
    setBusy(null)
    if (res.ok) {
      showToast(`Action "${action}" completed`)
      if (tab === 'users') loadUsers()
      if (tab === 'listeners') loadListeners()
      loadKPIs()
    } else {
      const err = await res.json()
      showToast(`Error: ${err.error || 'Something went wrong'}`)
    }
  }

  async function adminAction(action: string, id: string, label: string) {
    setBusy(`${action}:${id}`)
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: adminHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ action, id }),
    })
    setBusy(null)
    if (res.ok) {
      showToast(label)
      loadPayouts()
      loadKPIs()
    } else {
      const err = await res.json()
      showToast(`Error: ${err.error || 'Failed'}`)
    }
  }

  async function moderateReport(reportId: string, action: 'dismiss' | 'warn' | 'suspend', targetUserId?: string) {
    setBusy(`moderate:${reportId}:${action}`)
    const res = await fetch('/api/admin/moderate', {
      method: 'POST',
      headers: adminHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ reportId, action, targetUserId }),
    })
    setBusy(null)
    if (res.ok) {
      showToast(`Report ${action}d`)
      loadReports(reportsStatus)
    } else {
      const err = await res.json()
      showToast(`Error: ${err.error || 'Failed'}`)
    }
  }

  async function handleVerif(verificationId: string, action: 'approve' | 'reject', listenerId: string) {
    setBusy(`verif:${verificationId}:${action}`)
    const notes = verifRejectNotes[verificationId] || ''
    const res = await fetch('/api/admin/verify-listener', {
      method: 'POST',
      headers: adminHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ verificationId, action, notes: notes || undefined }),
    })
    setBusy(null)
    if (res.ok) {
      showToast(`Verification ${action}d`)
      loadVerifs(verifsStatus)
    } else {
      const err = await res.json()
      showToast(`Error: ${err.error || 'Failed'}`)
    }
  }

  // ── Render Guards ────────────────────────────────────────────────────────────

  // Show loading while checking session
  if (authChecking) return (
    <>
      <style>{S}</style>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif',flexDirection:'column',gap:12}}>
        <div style={{fontSize:32}}>🔐</div>
        <p style={{fontWeight:700,fontSize:16,color:'#0F4867'}}>Verifying access…</p>
      </div>
    </>
  )

  // PIN gate — shown when API returns 403 with pinRequired
  if (pinRequired && !pinVerified) return (
    <>
      <style>{S}</style>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif'}}>
        <div style={{background:'white',borderRadius:24,padding:'40px 32px',boxShadow:'0 8px 40px rgba(15,72,103,0.12)',maxWidth:360,width:'100%',textAlign:'center'}}>
          <div style={{fontSize:40,marginBottom:16}}>🔒</div>
          <h2 style={{fontSize:22,fontWeight:900,color:'#0F4867',marginBottom:8}}>Admin PIN Required</h2>
          <p style={{fontSize:14,color:'#5A7A8A',marginBottom:24,lineHeight:1.6}}>Enter your admin PIN to access the dashboard.</p>
          <input
            type="password"
            placeholder="Enter PIN"
            value={pinInput}
            onChange={e => { setPinInput(e.target.value); setPinError('') }}
            onKeyDown={e => { if (e.key === 'Enter') verifyPin() }}
            style={{width:'100%',padding:'14px 16px',borderRadius:14,border:'2px solid #D5EEF6',fontFamily:'Nunito,sans-serif',fontSize:18,fontWeight:700,letterSpacing:'0.2em',textAlign:'center',outline:'none',boxSizing:'border-box',marginBottom:8}}
            autoFocus
          />
          {pinError && <p style={{color:'#FF3B30',fontSize:13,fontWeight:700,marginBottom:8}}>{pinError}</p>}
          <button onClick={verifyPin} style={{width:'100%',padding:'14px',background:'#0F4867',color:'white',border:'none',borderRadius:50,fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:15,cursor:'pointer',marginTop:8}}>
            Unlock Dashboard
          </button>
        </div>
      </div>
    </>
  )

  if (denied) return (
    <>
      <style>{S}</style>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',fontFamily:'Nunito,sans-serif',background:'#F0F8FC',padding:'20px'}}>
        {authUser ? (
          // Logged in but not admin
          <div style={{textAlign:'center',padding:'40px 24px',maxWidth:380}}>
            <div style={{fontSize:48,marginBottom:16}}>🔒</div>
            <h2 style={{fontSize:22,fontWeight:900,color:'#0F4867',marginBottom:10}}>Access Denied</h2>
            <p style={{fontSize:14,color:'#5A7A8A',fontWeight:600,lineHeight:1.7}}>
              Your account does not have admin access.
            </p>
          </div>
        ) : (
          // Not logged in — password-based admin login
          <div style={{background:'white',borderRadius:24,padding:'36px 28px',boxShadow:'0 8px 40px rgba(15,72,103,0.12)',maxWidth:360,width:'100%'}}>
            <div style={{textAlign:'center',marginBottom:24}}>
              <div style={{fontSize:36,marginBottom:12}}>🔐</div>
              <h2 style={{fontSize:20,fontWeight:900,color:'#0F4867',marginBottom:6}}>Admin Access</h2>
              <p style={{fontSize:13,color:'#5A7A8A',fontWeight:600,lineHeight:1.5}}>
                Enter your admin password to continue.
              </p>
            </div>
            <input
              type="password"
              placeholder="Admin password"
              value={loginPassword}
              onChange={e => { setLoginPassword(e.target.value); setLoginError('') }}
              onKeyDown={e => { if (e.key === 'Enter') tryPasswordLogin() }}
              style={{width:'100%',padding:'13px 16px',border:'2px solid #D5EEF6',borderRadius:14,fontFamily:'Nunito,sans-serif',fontSize:15,fontWeight:700,color:'#0F4867',outline:'none',boxSizing:'border-box',marginBottom:8,background:'white'}}
              autoFocus
            />
            {loginError && <p style={{color:'#E53935',fontSize:13,fontWeight:700,marginBottom:8}}>{loginError}</p>}
            <button
              onClick={tryPasswordLogin}
              disabled={loginLoading || !loginPassword.trim()}
              style={{width:'100%',padding:'14px',background:'#0F4867',color:'white',border:'none',borderRadius:50,fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:15,cursor:'pointer',opacity:(loginLoading || !loginPassword.trim())?0.5:1,marginTop:8}}
            >
              {loginLoading ? '⟳ Verifying…' : 'Access Dashboard →'}
            </button>
          </div>
        )}
      </div>
    </>
  )

  const TABS: { key: Tab; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'users', label: 'Users' },
    { key: 'listeners', label: 'Listeners' },
    { key: 'sessions', label: 'Sessions' },
    { key: 'reports', label: `Reports${kpis ? ` (${kpis.moderation.pendingReports})` : ''}` },
    { key: 'payouts', label: `Payouts${kpis ? ` (${kpis.payouts.pendingCount})` : ''}` },
    { key: 'verifications', label: 'Verifications' },
  ]

  const PAGE_SIZE = 25

  return (
    <>
      <style>{S}</style>
      <div className="page">

        {/* Header */}
        <div className="topbar">
          <div>
            <h1>Admin Panel</h1>
            <p>LeanOn platform management</p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              className="btn btn-teal"
              style={{ fontSize: 13 }}
              onClick={loadKPIs}
            >
              Refresh KPIs
            </button>
            <button
              className="btn"
              style={{ fontSize: 13, background: 'white', color: 'var(--gray)', border: '1.5px solid var(--border)' }}
              onClick={() => {
                try { sessionStorage.removeItem('adminPw') } catch {}
                adminPasswordRef.current = ''
                setAuthUser(null)
                setDenied(true)
                setPinVerified(false)
                verifiedPinRef.current = ''
              }}
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Tab Nav */}
        <div className="tab-row">
          {TABS.map(t => (
            <button
              key={t.key}
              className={`tab-btn${tab === t.key ? ' active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ─── OVERVIEW ─────────────────────────────────────────────────────── */}
        {tab === 'overview' && (
          <>
            {kpisLoading && !kpis ? (
              <div className="kpi-grid">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="skeleton" style={{ height: 90 }} />
                ))}
              </div>
            ) : kpis ? (
              <>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>Users</div>
                <div className="kpi-grid" style={{ marginBottom: 20 }}>
                  <div className="kpi-card">
                    <div className="kpi-label">Total Users</div>
                    <div className="kpi-value">{fmt(kpis.users.total)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Active Users</div>
                    <div className="kpi-value">{fmt(kpis.users.active)}</div>
                    <div className="kpi-sub">last 30 days</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">New Today</div>
                    <div className="kpi-value">{fmt(kpis.users.newToday)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">New This Month</div>
                    <div className="kpi-value">{fmt(kpis.users.newThisMonth)}</div>
                  </div>
                </div>

                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>Listeners</div>
                <div className="kpi-grid" style={{ marginBottom: 20 }}>
                  <div className="kpi-card">
                    <div className="kpi-label">Total Listeners</div>
                    <div className="kpi-value">{fmt(kpis.listeners.total)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Active Listeners</div>
                    <div className="kpi-value">{fmt(kpis.listeners.active)}</div>
                    <div className="kpi-sub">approved + active</div>
                  </div>
                  <div className="kpi-card" style={{ border: kpis.listeners.pending > 0 ? '2px solid var(--orange)' : undefined }}>
                    <div className="kpi-label">Pending Approval</div>
                    <div className="kpi-value" style={{ color: kpis.listeners.pending > 0 ? 'var(--orange)' : undefined }}>{fmt(kpis.listeners.pending)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Online Now</div>
                    <div className="kpi-value" style={{ color: 'var(--green)' }}>{fmt(kpis.listeners.online)}</div>
                  </div>
                </div>

                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>Sessions</div>
                <div className="kpi-grid" style={{ marginBottom: 20 }}>
                  <div className="kpi-card">
                    <div className="kpi-label">Total Sessions</div>
                    <div className="kpi-value">{fmt(kpis.sessions.total)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Sessions Today</div>
                    <div className="kpi-value">{fmt(kpis.sessions.today)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">This Month</div>
                    <div className="kpi-value">{fmt(kpis.sessions.thisMonth)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Active Now</div>
                    <div className="kpi-value" style={{ color: 'var(--teal)' }}>{fmt(kpis.sessions.active)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Free Trials</div>
                    <div className="kpi-value">{fmt(kpis.sessions.freeTrial)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Paid Sessions</div>
                    <div className="kpi-value">{fmt(kpis.sessions.paid)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Avg Duration</div>
                    <div className="kpi-value">{kpis.sessions.avgDurationMins}</div>
                    <div className="kpi-sub">minutes</div>
                  </div>
                </div>

                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>Revenue &amp; Payouts</div>
                <div className="kpi-grid" style={{ marginBottom: 20 }}>
                  <div className="kpi-card">
                    <div className="kpi-label">Total Recharged</div>
                    <div className="kpi-value" style={{ fontSize: 20 }}>{fmtRs(kpis.revenue.totalRechargedPaise)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">This Month</div>
                    <div className="kpi-value" style={{ fontSize: 20 }}>{fmtRs(kpis.revenue.thisMonthPaise)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Today</div>
                    <div className="kpi-value" style={{ fontSize: 20 }}>{fmtRs(kpis.revenue.todayPaise)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Listener Earnings</div>
                    <div className="kpi-value" style={{ fontSize: 20 }}>{fmtRs(kpis.revenue.listenerEarningsPaise)}</div>
                    <div className="kpi-sub">settled</div>
                  </div>
                  <div className="kpi-card" style={{ border: kpis.payouts.pendingCount > 0 ? '2px solid var(--orange)' : undefined }}>
                    <div className="kpi-label">Pending Payouts</div>
                    <div className="kpi-value" style={{ fontSize: 20, color: kpis.payouts.pendingCount > 0 ? 'var(--orange)' : undefined }}>{fmtRs(kpis.payouts.pendingAmountPaise)}</div>
                    <div className="kpi-sub">{kpis.payouts.pendingCount} requests</div>
                  </div>
                  <div className="kpi-card" style={{ border: kpis.moderation.pendingReports > 0 ? '2px solid var(--red)' : undefined }}>
                    <div className="kpi-label">Reports Pending</div>
                    <div className="kpi-value" style={{ color: kpis.moderation.pendingReports > 0 ? 'var(--red)' : undefined }}>{kpis.moderation.pendingReports}</div>
                  </div>
                </div>
              </>
            ) : (
              <div className="empty">Failed to load KPIs. <button className="btn btn-teal" style={{ marginLeft: 8 }} onClick={loadKPIs}>Retry</button></div>
            )}
          </>
        )}

        {/* ─── USERS ────────────────────────────────────────────────────────── */}
        {tab === 'users' && (
          <>
            <div className="section-title">
              Users
              <span className="count-badge">{usersTotal}</span>
            </div>
            <div className="filter-row">
              {(['all', 'active', 'inactive', 'suspended'] as const).map(s => (
                <button
                  key={s}
                  className={`filter-btn${usersStatus === s ? ' active' : ''}`}
                  onClick={() => { setUsersStatus(s); setUsersPage(0); loadUsers(0, s, usersSearch) }}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
              <input
                className="search-input"
                placeholder="Search by name..."
                value={usersSearch}
                onChange={e => setUsersSearch(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { setUsersPage(0); loadUsers(0, usersStatus, usersSearch) } }}
              />
              <button className="btn btn-teal" onClick={() => { setUsersPage(0); loadUsers(0, usersStatus, usersSearch) }}>Search</button>
            </div>
            {usersLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[1, 2, 3].map(i => <div key={i} className="skeleton" style={{ height: 52 }} />)}
              </div>
            ) : users.length === 0 ? (
              <div className="empty">No users found.</div>
            ) : (
              <>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                        <th>Wallet</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(u => (
                        <tr key={u.id}>
                          <td style={{ fontWeight: 700 }}>{u.name || u.phone || '—'}</td>
                          <td style={{ color: 'var(--gray)', fontSize: 13 }}>{u.email || (u.phone && !u.name ? u.phone : '—')}</td>
                          <td style={{ color: 'var(--gray)' }}>{fmtDate(u.created_at)}</td>
                          <td>₹{u.wallet_balance ?? 0}</td>
                          <td>
                            {u.is_suspended
                              ? <span className="badge badge-red">Suspended</span>
                              : u.is_active
                                ? <span className="badge badge-green">Active</span>
                                : <span className="badge badge-gray">Inactive</span>}
                          </td>
                          <td>
                            <div className="action-row">
                              {u.is_suspended ? (
                                <button className="btn btn-green" disabled={busy !== null} onClick={() => userAction(u.id, 'unsuspend')}>
                                  {busy === `unsuspend:${u.id}` ? '…' : 'Unsuspend'}
                                </button>
                              ) : (
                                <button className="btn btn-orange" disabled={busy !== null} onClick={() => userAction(u.id, 'suspend')}>
                                  {busy === `suspend:${u.id}` ? '…' : 'Suspend'}
                                </button>
                              )}
                              {u.is_active
                                ? <button className="btn btn-gray" disabled={busy !== null} onClick={() => userAction(u.id, 'deactivate')}>
                                    {busy === `deactivate:${u.id}` ? '…' : 'Deactivate'}
                                  </button>
                                : <button className="btn btn-green" disabled={busy !== null} onClick={() => userAction(u.id, 'activate')}>
                                    {busy === `activate:${u.id}` ? '…' : 'Activate'}
                                  </button>
                              }
                              {confirmBanId === u.id ? (
                                <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)' }}>Ban?</span>
                                  <button className="btn btn-red" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => { setConfirmBanId(null); userAction(u.id, 'ban') }}>Yes</button>
                                  <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setConfirmBanId(null)}>No</button>
                                </span>
                              ) : (
                                <button className="btn btn-red" disabled={busy !== null} onClick={() => setConfirmBanId(u.id)}>Ban</button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {usersTotal > PAGE_SIZE && (
                  <div className="pagination">
                    <button className="btn btn-gray" disabled={usersPage === 0} onClick={() => { const p = usersPage - 1; setUsersPage(p); loadUsers(p, usersStatus, usersSearch) }}>← Prev</button>
                    <span>{usersPage * PAGE_SIZE + 1}–{Math.min((usersPage + 1) * PAGE_SIZE, usersTotal)} of {usersTotal}</span>
                    <button className="btn btn-gray" disabled={(usersPage + 1) * PAGE_SIZE >= usersTotal} onClick={() => { const p = usersPage + 1; setUsersPage(p); loadUsers(p, usersStatus, usersSearch) }}>Next →</button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ─── LISTENERS ────────────────────────────────────────────────────── */}
        {tab === 'listeners' && (
          <>
            <div className="section-title">
              Listeners
              <span className="count-badge">{listenersTotal}</span>
            </div>
            <div className="filter-row">
              {(['all', 'pending', 'active', 'suspended'] as const).map(s => (
                <button
                  key={s}
                  className={`filter-btn${listenersStatus === s ? ' active' : ''}`}
                  onClick={() => { setListenersStatus(s); setListenersPage(0); loadListeners(0, s) }}
                >
                  {s === 'pending' ? 'Pending Approval' : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
            {listenersLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[1, 2, 3].map(i => <div key={i} className="skeleton" style={{ height: 52 }} />)}
              </div>
            ) : listeners.length === 0 ? (
              <div className="empty">No listeners found.</div>
            ) : (
              <>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Phone / Email</th>
                        <th>Rate</th>
                        <th>Rating</th>
                        <th>Sessions</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listeners.map(l => {
                        const u = l.users
                        const isPending = !l.is_approved && !l.is_active
                        // Detect if this listener is the currently logged-in admin
                        const isSelf = !!(authUser && (
                          (authUser.phone && u?.phone && authUser.phone.replace(/\D/g, '').slice(-10) === u.phone.replace(/\D/g, '').slice(-10)) ||
                          (authUser.email && u?.email && authUser.email === u.email)
                        ))
                        return (
                          <tr key={l.user_id} className={isPending ? 'pending-row' : ''}>
                            <td style={{ fontWeight: 700 }}>
                              {u?.name || '—'}
                              {isSelf && <span className="badge badge-orange" style={{ marginLeft: 6, fontSize: 10 }}>YOU</span>}
                              {l.is_verified && <span className="badge badge-teal" style={{ marginLeft: 6, fontSize: 10 }}>Verified</span>}
                            </td>
                            <td style={{ color: 'var(--gray)', fontSize: 12 }}>
                              {u?.phone ? <div>{u.phone}</div> : null}
                              {u?.email ? <div style={{ color: 'var(--gray)' }}>{u.email}</div> : null}
                              {!u?.phone && !u?.email ? '—' : null}
                            </td>
                            <td>₹{l.rate_per_min ?? '—'}/min</td>
                            <td>{l.rating ? `${l.rating.toFixed(1)} ★` : '—'}</td>
                            <td>{l.total_sessions ?? 0}</td>
                            <td>
                              {isPending
                                ? <span className="badge badge-orange">Pending</span>
                                : l.is_suspended
                                  ? <span className="badge badge-red">Suspended</span>
                                  : l.is_active
                                    ? <span className="badge badge-green">Active</span>
                                    : <span className="badge badge-gray">Inactive</span>}
                            </td>
                            <td>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                {isPending && (
                                  <div className="action-row">
                                    <button className="btn btn-green" disabled={busy !== null} onClick={() => userAction(l.user_id, 'approve_listener')}>
                                      {busy === `approve_listener:${l.user_id}` ? 'Approving…' : 'Approve'}
                                    </button>
                                    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                                      <input
                                        className="reject-input"
                                        style={{ width: 120, marginBottom: 0 }}
                                        placeholder="Reason (opt)"
                                        value={rejectNotes[l.user_id] || ''}
                                        onChange={e => setRejectNotes(prev => ({ ...prev, [l.user_id]: e.target.value }))}
                                      />
                                      <button className="btn btn-red" disabled={busy !== null} onClick={() => userAction(l.user_id, 'reject_listener', rejectNotes[l.user_id])}>
                                        {busy === `reject_listener:${l.user_id}` ? '…' : 'Reject'}
                                      </button>
                                    </div>
                                  </div>
                                )}
                                <div className="action-row">
                                  {!isPending && (
                                    l.is_suspended || !l.is_active
                                      ? <button className="btn btn-green" disabled={busy !== null} onClick={() => userAction(l.user_id, 'unsuspend')}>
                                          {busy === `unsuspend:${l.user_id}` ? '…' : 'Unsuspend'}
                                        </button>
                                      : <button className="btn btn-orange" disabled={busy !== null} onClick={() => userAction(l.user_id, 'suspend')}>
                                          {busy === `suspend:${l.user_id}` ? '…' : 'Suspend'}
                                        </button>
                                  )}
                                  <a href={`/listener/${l.user_id}`} target="_blank" rel="noopener" className="btn btn-gray" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                {listenersTotal > PAGE_SIZE && (
                  <div className="pagination">
                    <button className="btn btn-gray" disabled={listenersPage === 0} onClick={() => { const p = listenersPage - 1; setListenersPage(p); loadListeners(p, listenersStatus) }}>← Prev</button>
                    <span>{listenersPage * PAGE_SIZE + 1}–{Math.min((listenersPage + 1) * PAGE_SIZE, listenersTotal)} of {listenersTotal}</span>
                    <button className="btn btn-gray" disabled={(listenersPage + 1) * PAGE_SIZE >= listenersTotal} onClick={() => { const p = listenersPage + 1; setListenersPage(p); loadListeners(p, listenersStatus) }}>Next →</button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ─── SESSIONS ─────────────────────────────────────────────────────── */}
        {tab === 'sessions' && (
          <>
            <div className="section-title">Recent Sessions</div>
            <div className="filter-row">
              {(['all', 'active', 'completed', 'cancelled'] as const).map(s => (
                <button
                  key={s}
                  className={`filter-btn${sessionsStatus === s ? ' active' : ''}`}
                  onClick={() => { setSessionsStatus(s); loadSessions(s) }}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
              <button className="btn btn-teal" style={{ marginLeft: 'auto' }} onClick={() => loadSessions(sessionsStatus)}>Refresh</button>
            </div>
            {sessionsLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[1, 2, 3].map(i => <div key={i} className="skeleton" style={{ height: 52 }} />)}
              </div>
            ) : sessions.length === 0 ? (
              <div className="empty">No sessions found for this filter.</div>
            ) : (
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Started</th>
                      <th>Seeker</th>
                      <th>Listener</th>
                      <th>Type</th>
                      <th>Duration</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessions.map((s: SessionRow) => (
                      <tr key={s.id}>
                        <td style={{ color: 'var(--gray)', fontSize: 12 }}>{fmtDate(s.started_at)}</td>
                        <td>{s.seeker?.name || s.seeker_id.slice(0, 8) + '…'}</td>
                        <td>{s.listener?.name || s.listener_id.slice(0, 8) + '…'}</td>
                        <td><span className="badge badge-teal">{s.session_type}</span></td>
                        <td>{s.duration_mins} min</td>
                        <td>{s.is_free_trial ? <span className="badge badge-gray">Free</span> : `₹${s.amount_held}`}</td>
                        <td>
                          {s.status === 'active'
                            ? <span className="badge badge-teal">Active</span>
                            : s.status === 'completed'
                              ? <span className="badge badge-green">Completed</span>
                              : <span className="badge badge-gray">{s.status}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* ─── REPORTS ──────────────────────────────────────────────────────── */}
        {tab === 'reports' && (
          <>
            <div className="section-title">
              User Reports
              {reports.length > 0 && <span className="count-badge">{reports.length}</span>}
            </div>
            <div className="filter-row">
              {(['pending', 'reviewed', 'resolved', 'dismissed'] as const).map(s => (
                <button
                  key={s}
                  className={`filter-btn${reportsStatus === s ? ' active' : ''}`}
                  onClick={() => { setReportsStatus(s); loadReports(s) }}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
            {reportsLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[1, 2].map(i => <div key={i} className="skeleton" style={{ height: 120 }} />)}
              </div>
            ) : reports.length === 0 ? (
              <div className="empty">No reports in this status.</div>
            ) : reports.map((r: ReportRow) => (
              <div key={r.id} className="card">
                <div className="card-header">
                  <div>
                    <div className="name-text">{r.type.replace(/_/g, ' ')}</div>
                    <div className="meta-text">
                      From: {r.reporter?.name || '—'} · Against: {r.target?.name || 'unknown'}
                      {r.session_id && <> · <a href={`/session/${r.session_id}`} style={{ color: 'var(--teal)' }}>session</a></>}
                    </div>
                  </div>
                  <span className={`badge ${r.status === 'pending' ? 'badge-orange' : 'badge-gray'}`}>
                    {r.status}
                  </span>
                </div>
                <div style={{ background: 'var(--light)', borderRadius: 10, padding: '10px 12px', marginBottom: 12 }}>
                  <div style={{ fontSize: 13, color: '#4A6B7E', lineHeight: 1.6 }}>{r.description}</div>
                  <div style={{ fontSize: 11, color: 'var(--gray)', marginTop: 6, fontWeight: 600 }}>{fmtDate(r.created_at)}</div>
                </div>
                {r.status === 'pending' && (
                  <div className="action-row">
                    <button className="btn btn-gray" disabled={busy !== null} onClick={() => moderateReport(r.id, 'dismiss')}>
                      {busy === `moderate:${r.id}:dismiss` ? '…' : 'Dismiss'}
                    </button>
                    <button className="btn btn-orange" disabled={busy !== null} onClick={() => moderateReport(r.id, 'warn', r.reported_user_id ?? undefined)}>
                      {busy === `moderate:${r.id}:warn` ? '…' : 'Warn User'}
                    </button>
                    <button className="btn btn-red" disabled={busy !== null} onClick={() => moderateReport(r.id, 'suspend', r.reported_user_id ?? undefined)}>
                      {busy === `moderate:${r.id}:suspend` ? '…' : 'Suspend User'}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* ─── PAYOUTS ──────────────────────────────────────────────────────── */}
        {tab === 'payouts' && (
          <>
            <div className="section-title">
              Pending Payout Requests
              {payouts.length > 0 && <span className="count-badge">{payouts.length}</span>}
            </div>
            <div style={{ background: '#FFF8E7', border: '1.5px solid #FFD580', borderRadius: 12, padding: '12px 16px', marginBottom: 16, fontSize: 13, fontWeight: 600, color: '#7A5000', lineHeight: 1.6 }}>
              <strong>Manual payout process:</strong> Payouts are NOT processed automatically. When a listener requests a payout, you must manually transfer funds via UPI/NEFT using the bank details stored in their listener application. Once transferred, click <strong>Mark Paid</strong> to update the internal ledger.
            </div>
            {kpis && payouts.length > 0 && (
              <div style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 12, padding: '12px 18px', marginBottom: 16, display: 'flex', gap: 32 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Total Pending</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--orange)' }}>{fmtRs(kpis.payouts.pendingAmountPaise)}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Total Paid Out</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--navy)' }}>{fmtRs(kpis.payouts.totalPaidPaise)}</div>
                </div>
              </div>
            )}
            {payoutsLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[1, 2].map(i => <div key={i} className="skeleton" style={{ height: 72 }} />)}
              </div>
            ) : payouts.length === 0 ? (
              <div className="empty">No pending payout requests — all clear!</div>
            ) : payouts.map((p: PayoutRow) => (
              <div key={p.id} style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 16, padding: '16px 20px', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--navy)' }}>{p.users?.name || '—'}</div>
                  <div style={{ fontSize: 12, color: 'var(--gray)', fontWeight: 600, marginTop: 2 }}>
                    {p.users?.phone ? <span style={{ marginRight: 8 }}>Phone: {p.users.phone}</span> : null}
                    {p.users?.email ? <span style={{ marginRight: 8 }}>{p.users.email}</span> : null}
                    {p.created_at ? <span>Requested {fmtDate(p.created_at)}</span> : null}
                  </div>
                  {p.upi_id && (
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--teal)', marginTop: 4 }}>
                      UPI: <span style={{ userSelect: 'all', background: '#F0F8FC', padding: '2px 8px', borderRadius: 6 }}>{p.upi_id}</span>
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--navy)' }}>₹{p.amount}</div>
                  <button className="btn btn-teal" disabled={busy !== null} onClick={() => adminAction('complete_payout', p.id, `Marked ₹${p.amount} payout complete`)}>
                    {busy === `complete_payout:${p.id}` ? 'Saving…' : 'Mark Paid'}
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {/* ─── REFUND REQUESTS (inside payouts tab) ─────────────────────────── */}
        {tab === 'payouts' && (
          <>
            <div className="section-title" style={{ marginTop: 28 }}>
              Pending Wallet Refund Requests
              {refunds.length > 0 && <span className="count-badge">{refunds.length}</span>}
            </div>
            {refunds.length === 0 ? (
              <div className="empty">No pending wallet refund requests — all clear!</div>
            ) : refunds.map((r: RefundRow) => (
              <div key={r.id} style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 16, padding: '16px 20px', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--navy)' }}>{r.users?.name || '—'}</div>
                  <div style={{ fontSize: 12, color: 'var(--gray)', fontWeight: 600, marginTop: 2 }}>
                    {r.users?.email ? <span style={{ marginRight: 8 }}>{r.users.email}</span> : null}
                    {r.created_at ? <span>Requested {fmtDate(r.created_at)}</span> : null}
                  </div>
                  {r.reason && (
                    <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 4 }}>Reason: {r.reason}</div>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--navy)' }}>₹{r.amount}</div>
                  <button
                    className="btn btn-teal"
                    disabled={busy !== null}
                    onClick={() => adminAction('complete_refund', r.id, `Refund of ₹${r.amount} marked complete`)}
                  >
                    {busy === `complete_refund:${r.id}` ? 'Saving…' : 'Mark Processed'}
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        {/* ─── VERIFICATIONS ────────────────────────────────────────────────── */}
        {tab === 'verifications' && (
          <>
            <div className="section-title">
              Listener Verifications
              {verifs.length > 0 && <span className="count-badge">{verifs.length}</span>}
            </div>
            <div className="filter-row">
              {(['pending', 'approved', 'rejected'] as const).map(s => (
                <button
                  key={s}
                  className={`filter-btn${verifsStatus === s ? ' active' : ''}`}
                  onClick={() => { setVerifsStatus(s); loadVerifs(s) }}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
            {verifsLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[1, 2].map(i => <div key={i} className="skeleton" style={{ height: 120 }} />)}
              </div>
            ) : verifs.length === 0 ? (
              <div className="empty">No verifications in this status.</div>
            ) : verifs.map((v: VerificationRow) => (
              <div key={v.id} className="card">
                <div className="card-header">
                  <div>
                    <div className="name-text">{v.full_name}</div>
                    <div className="meta-text">{v.id_type.replace(/_/g, ' ')} · Submitted {fmtDate(v.submitted_at)}</div>
                  </div>
                  <span className={`badge ${v.status === 'pending' ? 'badge-orange' : v.status === 'approved' ? 'badge-green' : 'badge-red'}`}>
                    {v.status}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                  {v.selfie_url && (
                    <a href={v.selfie_url} target="_blank" rel="noopener" style={{ fontSize: 12, fontWeight: 700, color: 'var(--teal)' }}>Selfie</a>
                  )}
                  {v.id_doc_url && (
                    <a href={v.id_doc_url} target="_blank" rel="noopener" style={{ fontSize: 12, fontWeight: 700, color: 'var(--teal)' }}>ID Document</a>
                  )}
                </div>
                {v.status === 'pending' && (
                  <>
                    <input
                      className="reject-input"
                      placeholder="Rejection reason (optional)"
                      value={verifRejectNotes[v.id] || ''}
                      onChange={e => setVerifRejectNotes(prev => ({ ...prev, [v.id]: e.target.value }))}
                    />
                    <div className="action-row">
                      <button className="btn btn-green" disabled={busy !== null} onClick={() => handleVerif(v.id, 'approve', v.listener_id)}>
                        {busy === `verif:${v.id}:approve` ? 'Approving…' : 'Approve'}
                      </button>
                      <button className="btn btn-red" disabled={busy !== null} onClick={() => handleVerif(v.id, 'reject', v.listener_id)}>
                        {busy === `verif:${v.id}:reject` ? 'Rejecting…' : 'Reject'}
                      </button>
                    </div>
                  </>
                )}
                {v.admin_notes && (
                  <div style={{ marginTop: 8, fontSize: 12, color: 'var(--gray)', fontWeight: 600 }}>Note: {v.admin_notes}</div>
                )}
              </div>
            ))}
          </>
        )}

      </div>

      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
