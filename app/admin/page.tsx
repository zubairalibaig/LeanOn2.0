'use client'
import { useState, useEffect, useCallback, useRef, Fragment } from 'react'
import { createClient } from '@/lib/supabase'
import { LISTENER_SERVICE_FEE_RATE, serviceFeeRateAt } from '@/lib/constants'
import ListenerReviewPanel, { type ListenerReview, photoUploadedAt, fmtWhen } from './ListenerReviewPanel'
import { EDUCATION_LEVELS, EDUCATION_FIELDS, labelOf } from '@/lib/listener-onboarding'

// ── Types ─────────────────────────────────────────────────────────────────────

type KPIs = {
  users: { total: number; active: number; inactive: number; newToday: number; newThisMonth: number }
  listeners: { total: number; active: number; pending: number; online: number; newToday?: number; newThisMonth?: number; needsResubmission?: number; pendingSelfie?: number }
  sessions: {
    total: number; today: number; thisMonth: number; active: number; avgDurationMins: number
    freeTrial: number; freeTrialToday?: number; freeTrialThisMonth?: number
    paid: number; paidToday?: number; paidThisMonth?: number
  }
  revenue: { totalRechargedRupees: number; thisMonthRupees: number; todayRupees: number; listenerEarningsRupees: number; uniqueRechargers?: number; uniqueSessionSeekers?: number }
  // Optional: absent if an older API build is still deployed, so the UI must guard.
  walletLiability?: {
    totalRupees: number; usersWithBalance: number; listenerEarningsUnrequestedRupees?: number
    heldInSessionsRupees?: number; heldInSessionsCount?: number; pendingRefundsRupees?: number; pendingRefundsCount?: number
    listenersWithBalance?: number
  }
  deletedWithBalance?: { user_id: string; name: string | null; balance: number; earned: boolean }[] | null
  walletIntegrity?: { usersChecked: number; mismatchedUsers: number; netDiffRupees: number; top: { user_id: string; name: string | null; balance: number; ledger: number; diff: number }[] } | null
  funnel?: { requested: number; completedAny: number; completedTrial: number; recharged: number; paid: number; repeatPaid: number; rechargedNotPaid: number } | null
  platformEarnings?: { allTimeRupees: number; thisMonthRupees: number; todayRupees: number; paidSessions: number }
  gatewayFees: { allTime: number; thisMonth: number; today: number }
  payouts: { pendingAmountRupees: number; pendingCount: number; totalPaidRupees: number }
  moderation: { pendingReports: number }
}

type UserRow = { id: string; name?: string; phone?: string; email?: string; avatar_url?: string | null; created_at: string; is_active: boolean; is_suspended: boolean; wallet_balance: number; updated_at?: string; last_sign_in_at?: string | null }
type ListenerRow = {
  user_id: string; bio?: string; specialty_tags?: string[]; rate_per_min?: number; rating?: number; total_sessions?: number
  is_active: boolean; is_approved: boolean; is_available: boolean; is_verified?: boolean; is_suspended?: boolean; created_at: string
  last_sign_in_at?: string | null
  // Per-listener service fee override (migration 062). NULL = use global rate.
  custom_service_fee_rate?: number | null
  // Pending selfie awaiting admin review (uploaded by an already-approved listener)
  pending_avatar_url?: string | null
  // Summed from listener_earnings by /api/admin/users. earned_total is
  // everything the ledger credits them; earned_settled is the payable subset.
  earned_total?: number; earned_settled?: number
  review?: ListenerReview
  users: { id: string; name?: string; email?: string; phone?: string; avatar_url?: string | null; created_at: string; is_active: boolean; is_suspended: boolean; wallet_balance: number }
  application?: { status: string; admin_notes: string | null; upi_id?: string | null; bank_account?: string | null; ifsc_code?: string | null; aadhaar?: string | null; aadhaar_last4?: string | null; account_holder_name?: string | null } | null
}
type CustomerRow = {
  user_id: string; name: string | null; phone: string | null; joined: string | null; wallet_balance: number
  recharged: number; recharges: number; first_recharge: string | null; last_recharge: string | null
  other_credits: number; refunds: number; earned_as_listener: boolean
  paid_sessions: number; voice_sessions: number; booked_value: number; distinct_listeners: number
  last_paid_session: string | null; flags: string[]
}
type SessionRow = {
  id: string; seeker_id: string; listener_id: string; session_type: string; duration_mins: number
  amount_held: number; platform_fee?: number; status: string; is_free_trial: boolean; started_at: string | null; ended_at?: string | null
  crisis_flagged?: boolean; crisis_flagged_at?: string | null; created_at?: string
  seeker?: { name?: string; phone?: string }; listener?: { name?: string; phone?: string }
  // Set by /api/admin/sessions when a listener_earnings row exists for this session.
  // listener_service_fee = combined LeanOn extra beyond seeker's ₹10 flat fee.
  //   India sessions: just the listener service fee on rawShare.
  //   NRI sessions: service fee + NRI margin (amountHeld was the flat USD rate).
  // listener_net_amount = what the listener was actually credited (after the svc fee).
  // null means no earnings row yet (unsettled, accidental-start, or free trial).
  listener_service_fee?: number | null
  listener_net_amount?: number | null
  // Non-null for NRI sessions only (set at booking from listener_profiles.rate_per_min)
  listener_rate_per_min?: number | null
}
type TranscriptMsg = { id: string; sender_id: string; content: string; created_at: string; is_flagged?: boolean }
type ReportRow = {
  id: string; type: string; description: string; status: string; created_at: string
  session_id: string | null; reported_user_id: string | null
  reporter: { name?: string; email?: string; phone?: string } | null
  target: { name?: string; email?: string; phone?: string } | null
}
type VerificationRow = {
  id: string; listener_id: string; full_name: string; id_type: string
  selfie_url: string | null; id_doc_url: string | null; status: string
  submitted_at: string; admin_notes: string | null
}
type PayoutRow = {
  id: string; user_id: string; amount: number; upi_id?: string | null; status: string; created_at: string
  users: { name?: string | null; email?: string | null; phone?: string | null } | null
  // Bank/UPI details captured at listener application time (for manual transfer)
  bank?: { upi_id?: string | null; bank_account?: string | null; ifsc_code?: string | null; account_holder_name?: string | null } | null
}
type RefundRow  = { id: string; amount: number; reason?: string; status: string; created_at: string; razorpay_payment_id?: string | null; users: { name?: string; email?: string } | null }
type CompletedPayoutRow = { id: string; user_id: string; amount: number; upi_id?: string | null; status: string; created_at: string; processed_at: string | null; name: string | null; phone: string | null }

type Tab = 'overview' | 'users' | 'listeners' | 'sessions' | 'reports' | 'payouts' | 'verifications' | 'quality'

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
  tr.rejected-row{background:#FFF5F5;}
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
  /* Unspent-balance banner. Amber, not red: this is money to safeguard, not an error. */
  .liability-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;
    background:#FFF6E8;border:1.5px solid #FFD79A;border-left:5px solid var(--orange);
    border-radius:12px;padding:14px 18px;margin-bottom:16px;}
  .liability-label{font-size:13px;font-weight:800;color:#8A5A00;text-transform:uppercase;letter-spacing:.04em;}
  .liability-sub{font-size:12px;font-weight:600;color:var(--gray);margin-top:3px;}
  .liability-amount{font-size:24px;font-weight:900;color:#8A5A00;white-space:nowrap;}
  .card{background:white;border:1.5px solid var(--border);border-radius:16px;padding:18px 20px;margin-bottom:12px;}
  .card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}
  .name-text{font-size:15px;font-weight:800;color:var(--navy);}
  .meta-text{font-size:12px;color:var(--gray);font-weight:600;margin-top:2px;}
  .skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:14px;}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  .toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--navy);color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:12px 28px;border-radius:50px;box-shadow:0 4px 24px rgba(15,72,103,.3);z-index:9999;animation:toastIn .25s ease;white-space:nowrap;}
  .modal-overlay{position:fixed;inset:0;background:rgba(15,34,51,0.55);z-index:500;display:flex;align-items:center;justify-content:center;padding:20px;}
  .modal-card{background:white;border-radius:16px;padding:20px 22px;max-width:560px;width:100%;max-height:80vh;overflow-y:auto;}
  .transcript-card{max-width:640px;}
  .transcript-list{display:flex;flex-direction:column;gap:10px;margin-top:14px;}
  .transcript-msg{border-radius:12px;padding:10px 14px;background:var(--light);border:1.5px solid var(--border);}
  .transcript-msg.listener{background:#F3F0FF;border-color:#E2D9FF;}
  .transcript-msg-meta{font-size:11px;font-weight:700;color:var(--gray);margin-bottom:4px;}
  .transcript-msg-text{font-size:14px;color:var(--navy);font-weight:500;line-height:1.5;white-space:pre-wrap;word-break:break-word;}
  @keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(14px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
  .error-page{text-align:center;padding:80px 20px;}
  .error-page h2{font-size:22px;font-weight:900;color:var(--navy);margin-bottom:10px;}
  .reject-input{width:100%;padding:7px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:'Nunito',sans-serif;font-size:12px;margin-bottom:8px;outline:none;color:var(--navy);}
  .reject-input:focus{border-color:var(--red);}
`

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmt(n: number) { return n.toLocaleString('en-IN') }
// Takes RUPEES, not paise. The API returns rupee amounts (users.wallet_balance,
// wallet_transactions.amount and sessions.platform_fee are all rupee columns);
// only the Razorpay boundary deals in paise. KPI fields are named *Rupees to
// keep that unambiguous.
function fmtRs(rupees: number) { return `₹${fmt(Math.round(rupees))}` }
function fmtDate(iso: string | null | undefined) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

// Date + time, for "last login" where the time of day matters.
function fmtDateTime(iso: string | null | undefined) {
  if (!iso) return 'Never'
  return new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
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
  // True only for the ADMIN_PHONE/ADMIN_PIN primary admin (see lib/require-admin.ts).
  // Gates owner-only UI, e.g. raw session transcripts — never derived from
  // anything the client already knows, always read back from the server.
  const [isPrimaryAdmin, setIsPrimaryAdmin] = useState(false)
  const [denied, setDenied] = useState(false)

  // On mount: require a valid Supabase session (OTP login) — no phone+PIN header bypass.
  // Admin flow: sign in via the normal app OTP flow → come back to /admin → enter PIN.
  useEffect(() => {
    async function init() {
      try {
        const sb = createClient()
        const { data: { user } } = await sb.auth.getUser()
        if (!user) { setAuthChecking(false); setDenied(true); return }

        // Set authUser early — the denied/PIN screens both need it to branch correctly.
        const u = user as { id: string; email?: string; phone?: string }

        // Ping with no PIN header first. Three outcomes:
        //   200 ok            → full admin access (no PIN configured, or PIN already carried)
        //   403 PIN_REQUIRED  → identity confirmed, PIN gate needed
        //   403 NOT_ADMIN / other → show Access Denied
        const pingRes = await fetch('/api/admin/ping').catch(() => null)
        if (pingRes?.ok) {
          const body = await pingRes.json().catch(() => ({}))
          setIsPrimaryAdmin(!!body.isPrimaryAdmin)
          setAuthUser(u)
          setAuthChecking(false)
        } else if (pingRes?.status === 403) {
          const body = await pingRes.json().catch(() => ({}))
          setAuthUser(u)
          if (body.code === 'PIN_REQUIRED') {
            // Check sessionStorage for a PIN saved from a previous verification
            const savedPin = (() => { try { return sessionStorage.getItem('admin_pin') } catch { return null } })()
            if (savedPin) {
              // Try the saved PIN automatically — avoids re-entering it on refresh
              const pinRes = await fetch('/api/admin/kpis', {
                headers: { 'x-admin-pin': savedPin },
              }).catch(() => null)
              if (pinRes?.ok) {
                verifiedPinRef.current = savedPin
                const kpiJson = await pinRes.json().catch(() => ({}))
                setKpis(kpiJson)
                setIsPrimaryAdmin(!!kpiJson.isPrimaryAdmin)
                setKpisLoading(false)
                setPinVerified(true)
                setAuthChecking(false)
                return
              }
              // Saved PIN rejected — clear it and show the PIN gate
              try { sessionStorage.removeItem('admin_pin') } catch { /* ignore */ }
            }
            // Admin identity confirmed — show PIN gate
            setPinRequired(true)
            setAuthChecking(false)
          } else {
            // NOT_ADMIN or similar — show "Access Denied" (authUser is set → right branch)
            setAuthChecking(false)
            setDenied(true)
          }
        } else {
          // Network error or 5xx — show denied
          setAuthUser(u)
          setAuthChecking(false)
          setDenied(true)
        }
      } catch {
        setAuthChecking(false)
        setDenied(true)
      }
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
  const [listenersSearch, setListenersSearch] = useState('')
  const [listenersLoading, setListenersLoading] = useState(false)
  // Pending approvals surfaced on Overview — the KPI alone gave admins no
  // path to act, which made approvals look impossible to do.
  const [pendingApprovals, setPendingApprovals] = useState<ListenerRow[]>([])
  const [customers, setCustomers] = useState<CustomerRow[] | null>(null)
  const [showAllCustomers, setShowAllCustomers] = useState(false)
  // Separate reject-note inputs per context so a reason typed in Overview
  // never pre-fills the Listeners tab input for the same user (Bug: shared state).
  const [rejectNotesOverview, setRejectNotesOverview] = useState<Record<string, string>>({})
  const [rejectNotesListeners, setRejectNotesListeners] = useState<Record<string, string>>({})
  // Per-applicant "needs a new verification selfie" flag for Request Fix.
  const [retakeSelfie, setRetakeSelfie] = useState<Record<string, boolean>>({})

  // ── Table sorting ──────────────────────────────────────────────────────────
  // "Joined" (created_at) sorts SERVER-side so it orders across every page.
  // "Last login" is enriched per-row from auth.users after pagination, so it
  // can only be ordered client-side — i.e. within the page currently shown.
  type SortDir = 'asc' | 'desc'
  const [usersJoinedDir,     setUsersJoinedDir]     = useState<SortDir>('desc')
  const [listenersJoinedDir, setListenersJoinedDir] = useState<SortDir>('desc')
  const [usersLoginDir,      setUsersLoginDir]      = useState<SortDir | null>(null)
  const [listenersLoginDir,  setListenersLoginDir]  = useState<SortDir | null>(null)
  // Which server-side column each table is ordered by. 'wallet' and 'earnings'
  // both sort across ALL pages (see /api/admin/users), not just the page shown.
  const [usersSortBy,     setUsersSortBy]     = useState<'joined' | 'wallet' | 'name'>('joined')
  const [listenersSortBy, setListenersSortBy] = useState<'joined' | 'earnings' | 'name' | 'wallet'>('joined')
  // Unspent seeker money across the whole filtered set. null = unavailable.
  const [usersWalletTotal, setUsersWalletTotal] = useState<number | null>(null)

  // Sort the visible page by last_sign_in_at. Rows that have never signed in
  // (null) always sink to the bottom, in both directions.
  function sortByLastLogin<T extends { last_sign_in_at?: string | null }>(rows: T[], dir: SortDir | null): T[] {
    if (!dir) return rows
    return [...rows].sort((a, b) => {
      const av = a.last_sign_in_at ? new Date(a.last_sign_in_at).getTime() : null
      const bv = b.last_sign_in_at ? new Date(b.last_sign_in_at).getTime() : null
      if (av === null && bv === null) return 0
      if (av === null) return 1
      if (bv === null) return -1
      return dir === 'asc' ? av - bv : bv - av
    })
  }

  const arrow = (dir: SortDir | null) => dir === 'asc' ? ' ▲' : dir === 'desc' ? ' ▼' : ' ⇅'
  const sortableTh: React.CSSProperties = { cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }

  // Sessions
  const [sessions, setSessions] = useState<SessionRow[]>([])
  const [sessionsTotal, setSessionsTotal] = useState(0)
  const [sessionsPage, setSessionsPage] = useState(0)
  const [sessionsStatus, setSessionsStatus] = useState('all')
  const [sessionsLoading, setSessionsLoading] = useState(false)
  // sessionsSort: direction (asc/desc), applied to whichever column is active.
  // sessionsSortBy: the column being sorted — sent to the API so the sort
  // applies across ALL pages, not just the 50 rows in memory.
  const [sessionsSort, setSessionsSort] = useState<SortDir>('desc')
  const [sessionsSortBy, setSessionsSortBy] = useState<'created_at' | 'amount'>('created_at')
  const [sessionsSearch, setSessionsSearch] = useState('')
  // Sessions where listener was never credited (credit_wallet failed at settlement time)
  const [unsettledIds, setUnsettledIds] = useState<Set<string>>(new Set())
  const [fixingSettlement, setFixingSettlement] = useState<string | null>(null)
  // Full transcript viewer — primary admin only (see isPrimaryAdmin above).
  const [transcriptSession, setTranscriptSession] = useState<SessionRow | null>(null)
  const [transcriptMsgs, setTranscriptMsgs] = useState<TranscriptMsg[]>([])
  const [transcriptLoading, setTranscriptLoading] = useState(false)

  // Reports
  const [reports, setReports] = useState<ReportRow[]>([])
  const [reportsStatus, setReportsStatus] = useState('pending')
  const [reportsLoading, setReportsLoading] = useState(false)
  const [reportRejectNotes, setReportRejectNotes] = useState<Record<string, string>>({})

  // Payouts + Refunds
  const [payouts, setPayouts] = useState<PayoutRow[]>([])
  const [completedPayouts, setCompletedPayouts] = useState<CompletedPayoutRow[]>([])
  const [refunds, setRefunds] = useState<RefundRow[]>([])
  const [rzpxEnabled, setRzpxEnabled] = useState(false)
  const [payoutsLoading, setPayoutsLoading] = useState(false)
  // Inline confirm state for destructive actions (window.confirm blocked in mobile PWA/iOS)
  const [confirmBanId, setConfirmBanId] = useState<string | null>(null)
  const [confirmBanListenerId, setConfirmBanListenerId] = useState<string | null>(null)
  const [confirmDeleteUserId, setConfirmDeleteUserId] = useState<string | null>(null)
  const [deleteConfirmInput, setDeleteConfirmInput] = useState('')
  const [deletingUser, setDeletingUser] = useState(false)
  const [confirmRejectOverviewId, setConfirmRejectOverviewId] = useState<string | null>(null)
  const [reviewOpenId, setReviewOpenId] = useState<string | null>(null)
  const [confirmRejectListenersId, setConfirmRejectListenersId] = useState<string | null>(null)
  // Inline name-edit state (shared for both users and listeners tables)
  const [editingNameId, setEditingNameId] = useState<string | null>(null)
  const [editingNameValue, setEditingNameValue] = useState('')
  // Inline custom service fee rate edit (per-listener override of global schedule)
  const [editingFeeRateId, setEditingFeeRateId] = useState<string | null>(null)
  const [feeRateInputValue, setFeeRateInputValue] = useState('')
  // Inline bank-details edit (replaces window.prompt, blocked on mobile PWA)
  const [editingBankId, setEditingBankId] = useState<string | null>(null)
  const [bankEditValues, setBankEditValues] = useState({ bank: '', ifsc: '', upi: '', holderName: '' })
  // Inline payout account-holder-name edit
  const [editingPayoutHolderNameId, setEditingPayoutHolderNameId] = useState<string | null>(null)
  const [payoutHolderNameValue, setPayoutHolderNameValue] = useState('')
  // Inline payout reject confirm + reason
  const [confirmRejectPayoutId, setConfirmRejectPayoutId] = useState<string | null>(null)
  const [rejectPayoutReason, setRejectPayoutReason] = useState('')

  // Verifications
  const [verifs, setVerifs] = useState<VerificationRow[]>([])
  const [verifsStatus, setVerifsStatus] = useState('pending')
  const [verifsLoading, setVerifsLoading] = useState(false)
  const [verifRejectNotes, setVerifRejectNotes] = useState<Record<string, string>>({})

  // Quality metrics — owner-facing quality and retention signals.
  type QualitySummary = {
    trial_to_paid_24h: { converted: number; eligible: number; pct: number | null }
    trial_to_paid_7d: { converted: number; eligible: number; pct: number | null }
    paid_to_second_7d: { converted: number; eligible: number; pct: number | null }
    paid_to_second_30d: { converted: number; eligible: number; pct: number | null }
    one_paid_seekers: number; two_plus_paid_seekers: number; three_plus_paid_seekers: number; five_plus_paid_seekers: number; three_plus_rate_pct: number | null
    avg_rating: number | null; rating_count: number | null; five_star_pct: number | null; low_rating_pct: number | null; sessions_rated_pct: number | null
    completion_rate_pct: number | null; short_voice_sessions: number; short_voice_pct: number | null; missing_duration_telemetry: number
    refund_requests: number; refund_amount: number; refund_rate_pct: number; report_count: number; report_rate_per_1000: number; block_count: number; block_rate_per_100_sessions: number; crisis_flags: number
    paid_sessions: number; paid_minutes: number; listeners_taking_sessions: number; online_listeners_now: number; top_listener_concentration_pct: number | null; failed_starts: number; unmatched_sessions: number
    voice_paid_sessions: number; text_paid_sessions: number; avg_session_duration_mins: number | null
  }
  type ListenerQuality = { listener_id: string; name: string; paid_sessions: number; unique_paid_seekers: number; second_session_pct: number | null; three_plus_seekers: number; rating: number | null; rating_count: number | null; reports_per_100: number; refunds_per_100: number; blocks_per_100: number; short_voice_pct: number | null; avg_duration_mins: number | null; earnings: number }
  type RepeatPair = { seeker_name: string; listener_name: string; count: number }
  const [qualitySummary, setQualitySummary] = useState<QualitySummary | null>(null)
  const [qualityWindow, setQualityWindow] = useState<'today' | '7d' | '30d' | '90d' | 'all'>('30d')
  const [qualityListeners, setQualityListeners] = useState<ListenerQuality[]>([])
  const [qualityPairs, setQualityPairs] = useState<RepeatPair[]>([])
  const [qualityLoading, setQualityLoading] = useState(false)
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
      try { sessionStorage.setItem('admin_pin', pin) } catch { /* ignore */ }
      setPinVerified(true)
      setPinRequired(false)
      const json = await res.json()
      setKpis(json)
      setIsPrimaryAdmin(!!json.isPrimaryAdmin)
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
    if (verifiedPinRef.current) h['x-admin-pin'] = verifiedPinRef.current
    return h
  }

  const loadKPIs = useCallback(async () => {
    setKpisLoading(true)
    try {
      const res = await fetch('/api/admin/kpis', { headers: adminHeaders() })
      if (res.status === 401) { setAuthUser(null); setDenied(true); return }
      if (res.status === 403) {
        const body = await res.json().catch(() => ({}))
        if (body.code === 'PIN_REQUIRED') { setPinRequired(true) } else { setAuthUser(null); setDenied(true) }
        return
      }
      if (res.status === 429) { showToast('Too many requests — please wait a moment'); return }
      if (res.ok) {
        const json = await res.json()
        setKpis(json)
        setIsPrimaryAdmin(!!json.isPrimaryAdmin)
      } else {
        showToast('Failed to refresh KPIs — server error')
      }
    } catch {
      showToast('Failed to refresh KPIs — check your connection')
    } finally {
      setKpisLoading(false)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const loadUsers = useCallback(async (pg = usersPage, st = usersStatus, q = usersSearch, dir = usersJoinedDir, sort = usersSortBy) => {
    setUsersLoading(true)
    const params = new URLSearchParams({ type: 'user', page: String(pg), status: st, search: q, dir, sort })
    const res = await fetch(`/api/admin/users?${params}`, { headers: adminHeaders(), cache: 'no-store' }).catch(() => null)
    if (res?.ok) {
      const json = await res.json()
      setUsers(json.items)
      setUsersTotal(json.total)
      setUsersWalletTotal(typeof json.walletTotal === 'number' ? json.walletTotal : null)
    } else {
      showToast('Failed to load users — tap a filter to retry')
    }
    setUsersLoading(false)
  }, [usersPage, usersStatus, usersSearch, usersJoinedDir, usersSortBy]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadListeners = useCallback(async (pg = listenersPage, st = listenersStatus, dir = listenersJoinedDir, sort = listenersSortBy, q = listenersSearch) => {
    setListenersLoading(true)
    const params = new URLSearchParams({ type: 'listener', page: String(pg), status: st, dir, sort, search: q })
    const res = await fetch(`/api/admin/users?${params}`, { headers: adminHeaders(), cache: 'no-store' }).catch(() => null)
    if (res?.ok) {
      const json = await res.json()
      setListeners(json.items)
      setListenersTotal(json.total)
    } else {
      showToast('Failed to load listeners — tap a filter to retry')
    }
    setListenersLoading(false)
  }, [listenersPage, listenersStatus, listenersJoinedDir, listenersSortBy, listenersSearch]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadPendingApprovals = useCallback(async () => {
    const params = new URLSearchParams({ type: 'listener', page: '0', status: 'pending' })
    const res = await fetch(`/api/admin/users?${params}`, { headers: adminHeaders(), cache: 'no-store' }).catch(() => null)
    if (res?.ok) {
      const json = await res.json()
      setPendingApprovals(json.items ?? [])
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const SESSION_PAGE_SIZE = 50
  const loadSessions = useCallback(async (st = sessionsStatus, sort = sessionsSort, pg = sessionsPage, sortBy = sessionsSortBy, search = sessionsSearch) => {
    setSessionsLoading(true)
    const params = new URLSearchParams({ status: st !== 'all' ? st : '', sort, page: String(pg), sortBy })
    if (search.trim()) params.set('search', search.trim())
    const [sessRes, unsettledRes] = await Promise.all([
      fetch(`/api/admin/sessions?${params}`, { headers: adminHeaders() }).catch(() => null),
      fetch('/api/admin/sessions/unsettled', { headers: adminHeaders() }).catch(() => null),
    ])
    if (sessRes?.ok) {
      const json = await sessRes.json()
      setSessions(json.sessions ?? [])
      setSessionsTotal(json.total ?? 0)
    } else {
      showToast('Failed to load sessions — tap Refresh to retry')
    }
    if (unsettledRes?.ok) {
      const u = await unsettledRes.json()
      setUnsettledIds(new Set((u.unsettled ?? []).map((s: { id: string }) => s.id)))
    }
    setSessionsLoading(false)
  }, [sessionsStatus, sessionsSort, sessionsPage, sessionsSortBy, sessionsSearch]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadTranscript = useCallback(async (session: SessionRow) => {
    setTranscriptSession(session)
    setTranscriptLoading(true)
    setTranscriptMsgs([])
    const res = await fetch(`/api/admin/session-messages?sessionId=${session.id}`, { headers: adminHeaders() }).catch(() => null)
    if (res?.ok) setTranscriptMsgs((await res.json()).messages ?? [])
    else showToast('Failed to load transcript')
    setTranscriptLoading(false)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const loadReports = useCallback(async (st = reportsStatus) => {
    setReportsLoading(true)
    const res = await fetch(`/api/admin/moderate?status=${st}`, { headers: adminHeaders() }).catch(() => null)
    if (res?.ok) setReports((await res.json()).reports ?? [])
    else showToast('Failed to load reports — tap a filter to retry')
    setReportsLoading(false)
  }, [reportsStatus]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadPayouts = useCallback(async () => {
    setPayoutsLoading(true)
    const res = await fetch('/api/admin?prPage=0&lpPage=0', { headers: adminHeaders() }).catch(() => null)
    if (res?.ok) {
      const json = await res.json()
      setPayouts(json.pendingPayouts ?? [])
      setCompletedPayouts(json.completedPayouts ?? [])
      setRefunds(json.refundRequests ?? [])
      setRzpxEnabled(json.razorpayxEnabled === true)
    } else {
      showToast('Failed to load payouts — switch tabs to retry')
    }
    setPayoutsLoading(false)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const loadVerifs = useCallback(async (st = verifsStatus) => {
    setVerifsLoading(true)
    const res = await fetch(`/api/admin/verify-listener?status=${st}`, { headers: adminHeaders() }).catch(() => null)
    if (res?.ok) setVerifs((await res.json()).verifications ?? [])
    else showToast('Failed to load verifications — tap a filter to retry')
    setVerifsLoading(false)
  }, [verifsStatus]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadQuality = useCallback(async (windowKey: 'today' | '7d' | '30d' | '90d' | 'all' = qualityWindow) => {
    setQualityLoading(true)
    const res = await fetch(`/api/admin/quality?window=${windowKey}`, { headers: adminHeaders() }).catch(() => null)
    if (res?.ok) {
      const json = await res.json()
      setQualitySummary(json.summary ?? null)
      setQualityListeners(json.listeners ?? [])
      setQualityPairs(json.repeatPairs ?? [])
    } else showToast('Failed to load quality metrics')
    setQualityLoading(false)
  }, [qualityWindow]) // eslint-disable-line react-hooks/exhaustive-deps


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

  // Pending listener approvals must be actionable from Overview
  useEffect(() => {
    if (tab === 'overview' && !authChecking && authUser) loadPendingApprovals()
    if (tab === 'overview' && !authChecking && authUser) {
      fetch('/api/admin/customers', { headers: adminHeaders() })
        .then(r => r.ok ? r.json() : null).then(j => { if (j?.customers) setCustomers(j.customers) }).catch(() => {})
    }
  }, [tab, authChecking, authUser, loadPendingApprovals])

  useEffect(() => {
    if (tab === 'users') loadUsers(0, usersStatus, usersSearch)
  }, [tab]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tab === 'listeners') loadListeners(0, listenersStatus, listenersJoinedDir, listenersSortBy, listenersSearch)
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

  useEffect(() => {
    if (tab === 'quality') loadQuality()
  }, [tab]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Actions ─────────────────────────────────────────────────────────────────

  async function userAction(userId: string, action: string, notes?: string, name?: string, extra?: Record<string, unknown>) {
    const key = `${action}:${userId}`
    setBusy(key)
    const res = await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: adminHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ userId, action, notes, ...(name !== undefined ? { name } : {}), ...extra }),
    })
    setBusy(null)
    if (res.ok) {
      showToast(`Action "${action}" completed`)
      // Clear the typed rejection reason and any stale ban-confirm state for
      // this user so they don't pre-fill or re-render on next review cycle.
      setRejectNotesOverview(prev => { const n = { ...prev }; delete n[userId]; return n })
      setRejectNotesListeners(prev => { const n = { ...prev }; delete n[userId]; return n })
      setRetakeSelfie(prev => { const n = { ...prev }; delete n[userId]; return n })
      setConfirmBanId(null)
      setConfirmBanListenerId(null)
      setConfirmRejectOverviewId(null)
      setConfirmRejectListenersId(null)
      if (tab === 'users') loadUsers()
      if (tab === 'listeners') loadListeners()
      if (tab === 'overview') loadPendingApprovals()
      loadKPIs()
    } else {
      const err = await res.json()
      showToast(`Error: ${err.error || 'Something went wrong'}`)
    }
  }

  async function adminDeleteAccount(userId: string) {
    setDeletingUser(true)
    const res = await fetch('/api/account', {
      method: 'DELETE',
      headers: adminHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ userId }),
    })
    setDeletingUser(false)
    setConfirmDeleteUserId(null)
    setDeleteConfirmInput('')
    if (res.ok) {
      showToast('Account permanently deleted — all PII scrubbed')
      if (tab === 'users') loadUsers()
      if (tab === 'listeners') loadListeners()
      loadKPIs()
    } else {
      const err = await res.json().catch(() => ({}))
      showToast(`Error: ${err.error || 'Deletion failed'}`)
    }
  }

  async function adminAction(action: string, id: string, label: string, notes?: string) {
    setBusy(`${action}:${id}`)
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: adminHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ action, id, ...(notes ? { notes } : {}) }),
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
          // Not logged in — redirect to app sign-in
          <div style={{textAlign:'center',padding:'40px 24px',maxWidth:380}}>
            <div style={{fontSize:48,marginBottom:16}}>🔐</div>
            <h2 style={{fontSize:22,fontWeight:900,color:'#0F4867',marginBottom:10}}>Sign in required</h2>
            <p style={{fontSize:14,color:'#5A7A8A',fontWeight:600,lineHeight:1.7,marginBottom:24}}>
              Sign in to your LeanOn account first, then return to this page.
            </p>
            <a
              href="/auth?redirect=/admin"
              style={{display:'block',padding:'14px',background:'#0F4867',color:'white',textDecoration:'none',borderRadius:50,fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:15}}
            >
              Sign in →
            </a>
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
    { key: 'quality', label: '⭐ Quality' },
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
              style={{ fontSize: 13, opacity: kpisLoading ? 0.6 : 1 }}
              disabled={kpisLoading}
              onClick={loadKPIs}
            >
              {kpisLoading ? '⟳ Refreshing…' : 'Refresh KPIs'}
            </button>
            <button
              className="btn"
              style={{ fontSize: 13, background: 'white', color: 'var(--gray)', border: '1.5px solid var(--border)' }}
              onClick={async () => {
                const sb = createClient()
                await sb.auth.signOut()
                setAuthUser(null)
                setDenied(true)
                setPinVerified(false)
                verifiedPinRef.current = ''
                try { sessionStorage.removeItem('admin_pin') } catch { /* ignore */ }
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
                {pendingApprovals.length > 0 && (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--orange)', marginBottom: 10 }}>
                      ⏳ Pending listener approvals — action needed
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                      {pendingApprovals.map(l => {
                        const u = l.users
                        return (
                          <div key={l.user_id} className="kpi-card" style={{ border: '2px solid var(--orange)', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-start', justifyContent: 'space-between' }}>
                            <div style={{ flexBasis: '100%' }}>
                              <ListenerReviewPanel review={l.review} displayUrl={l.pending_avatar_url || u?.avatar_url || null} displayPending={!!l.pending_avatar_url} />
                            </div>
                            <div style={{ minWidth: 180, flex: 1 }}>
                              <div style={{ fontWeight: 800 }}>{u?.name || '—'}</div>
                              <div style={{ fontSize: 12, color: 'var(--gray)' }}>
                                {u?.phone || u?.email || '—'} · ₹{l.rate_per_min ?? '—'}/min
                              </div>
                              {/* Education (public on the profile) and payout account holder (KYC: should match the name above). */}
                              <div style={{ fontSize: 12, marginTop: 4, color: 'var(--navy)', fontWeight: 700 }}>
                                🎓 {l.review?.education_level ? labelOf(EDUCATION_LEVELS, l.review.education_level) : 'Education not provided'}
                                {l.review?.education_field ? ` · ${labelOf(EDUCATION_FIELDS, l.review.education_field)}` : ''}
                              </div>
                              {(() => {
                                const holder = l.application?.account_holder_name?.trim()
                                const norm = (x?: string | null) => (x ?? '').toLowerCase().replace(/[^a-z]/g, '')
                                const mismatch = !!holder && !!u?.name && norm(holder) !== norm(u.name)
                                return (
                                  <div style={{ fontSize: 12, marginTop: 4, color: 'var(--navy)', fontWeight: 700 }}>
                                    🏦 {holder || 'Account holder name not provided'}
                                    {l.application?.bank_account ? ` · ••••${String(l.application.bank_account).slice(-4)}` : ''}
                                    {l.application?.ifsc_code ? ` · ${l.application.ifsc_code}` : ''}
                                    {mismatch && <span style={{ color: 'var(--orange)', fontWeight: 800 }}> · ⚠️ differs from profile name</span>}
                                  </div>
                                )
                              })()}
                              {/* Aadhaar — full number when migration 047 is applied, else masked tail */}
                              <div style={{ fontSize: 12, marginTop: 4, fontFamily: 'monospace', letterSpacing: 0.5, color: 'var(--navy)', fontWeight: 700 }}>
                                Aadhaar: {l.application?.aadhaar
                                  || (l.application?.aadhaar_last4 ? `••••••••${l.application.aadhaar_last4}` : '— not provided')}
                              </div>
                              {(l.specialty_tags?.length ?? 0) > 0 && (
                                <div style={{ fontSize: 11, color: 'var(--teal)', fontWeight: 700, marginTop: 4 }}>
                                  {l.specialty_tags!.join(' · ')}
                                </div>
                              )}
                              {l.bio && (
                                <div style={{ fontSize: 12, color: 'var(--gray)', maxWidth: 520, marginTop: 4, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                                  {l.bio}
                                </div>
                              )}
                            </div>
                            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                              <button className="btn btn-green" disabled={busy !== null} onClick={() => userAction(l.user_id, 'approve_listener')}>
                                {busy === `approve_listener:${l.user_id}` ? 'Approving…' : 'Approve'}
                              </button>
                              <input
                                className="reject-input"
                                style={{ width: 130, marginBottom: 0 }}
                                placeholder="Reason (required)"
                                value={rejectNotesOverview[l.user_id] || ''}
                                onChange={e => setRejectNotesOverview(prev => ({ ...prev, [l.user_id]: e.target.value }))}
                              />
                              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }} title="Identity or photo concern — the applicant must take a fresh verification selfie">
                                <input type="checkbox" checked={!!retakeSelfie[l.user_id]} onChange={e => setRetakeSelfie(prev => ({ ...prev, [l.user_id]: e.target.checked }))} />
                                New selfie
                              </label>
                              <button className="btn btn-orange" disabled={busy !== null || !rejectNotesOverview[l.user_id]?.trim()} onClick={() => userAction(l.user_id, 'request_resubmission', rejectNotesOverview[l.user_id], undefined, { retake_selfie: !!retakeSelfie[l.user_id] })} title="Ask them to fix and resubmit">
                                {busy === `request_resubmission:${l.user_id}` ? '…' : 'Request Fix'}
                              </button>
                              {confirmRejectOverviewId === l.user_id ? (
                                <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)' }}>Permanently reject?</span>
                                  <button className="btn btn-red" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => { setConfirmRejectOverviewId(null); userAction(l.user_id, 'reject_listener', rejectNotesOverview[l.user_id]) }}>Yes, reject</button>
                                  <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setConfirmRejectOverviewId(null)}>Cancel</button>
                                </span>
                              ) : (
                                <button className="btn btn-red" disabled={busy !== null} onClick={() => setConfirmRejectOverviewId(l.user_id)} title="Permanently reject — cannot resubmit">
                                  {busy === `reject_listener:${l.user_id}` ? '…' : 'Permanently Reject'}
                                </button>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </>
                )}
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>Users</div>
                {/* Seeker funnel — the real adoption metric: distinct people at each step, all time. */}
                {kpis.funnel && (() => {
                  const f = kpis.funnel
                  const pct = (a: number, b: number) => b > 0 ? `${Math.round((a / b) * 100)}%` : '—'
                  const steps: [string, number, string][] = [
                    ['Requested a session', f.requested, 'any request, incl. declined / expired'],
                    ['Had a session', f.completedAny, `${pct(f.completedAny, f.requested)} of requesters`],
                    ['Completed free trial', f.completedTrial, `${pct(f.completedTrial, f.requested)} of requesters`],
                    ['Recharged wallet', f.recharged, `${pct(f.recharged, f.completedTrial)} of trial users`],
                    ['Completed a paid session', f.paid, `${pct(f.paid, f.recharged)} of rechargers`],
                    ['Paid 2+ times', f.repeatPaid, `${pct(f.repeatPaid, f.paid)} of payers`],
                  ]
                  return (
                    <div style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 16, padding: '12px 14px', marginBottom: 14 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>Seeker funnel (unique people, all time)</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 8 }}>
                        {steps.map(([label, n, sub], i) => (
                          <div key={label} style={{ background: i >= 3 ? '#F0FBF8' : 'var(--light)', borderRadius: 12, padding: '8px 10px' }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)' }}>{i + 1}. {label}</div>
                            <div style={{ fontSize: 22, fontWeight: 900, color: i >= 3 ? 'var(--teal)' : 'var(--navy)' }}>{fmt(n)}</div>
                            <div style={{ fontSize: 11, color: 'var(--gray)', fontWeight: 600 }}>{sub}</div>
                          </div>
                        ))}
                      </div>
                      {f.rechargedNotPaid > 0 && (
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--orange)', marginTop: 8 }}>
                          ⚠️ {f.rechargedNotPaid} {f.rechargedNotPaid === 1 ? 'person' : 'people'} recharged but never completed a paid session — worth a personal follow-up.
                        </div>
                      )}
                    </div>
                  )
                })()}
                {/* Paying customers — everyone who recharged or completed a paid session. */}
                {customers && customers.length > 0 && (() => {
                  const d = (x: string | null) => x ? new Date(x).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—'
                  const real = customers.filter(c => !c.flags.includes('deleted') && !c.flags.includes('also listener'))
                  const shown = showAllCustomers ? customers : customers.slice(0, 10)
                  const td: React.CSSProperties = { padding: '8px 10px', borderTop: '1px solid var(--border)', fontSize: 12, verticalAlign: 'top', whiteSpace: 'nowrap' }
                  return (
                    <div style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 16, padding: '12px 14px', marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
                        <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--navy)' }}>Paying customers ({customers.length})</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)' }}>
                          Excluding deleted accounts &amp; listeners: <strong style={{ color: 'var(--teal)' }}>{real.length}</strong> people · {fmtRs(real.reduce((t, c) => t + c.recharged, 0))} recharged · {real.reduce((t, c) => t + c.paid_sessions, 0)} paid sessions
                        </div>
                      </div>
                      <div className="table-wrap" style={{ margin: 0 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                          <thead><tr style={{ background: 'var(--light)', fontSize: 11, textAlign: 'left' }}>
                            <th style={{ padding: '6px 10px' }}>Customer</th><th style={{ padding: '6px 10px' }}>Recharged</th><th style={{ padding: '6px 10px' }}>Paid sessions</th>
                            <th style={{ padding: '6px 10px' }}>Booked</th><th style={{ padding: '6px 10px' }}>Balance</th><th style={{ padding: '6px 10px' }}>Last paid</th><th style={{ padding: '6px 10px' }}>Notes</th>
                          </tr></thead>
                          <tbody>
                            {shown.map(c => (
                              <tr key={c.user_id}>
                                <td style={td}><div style={{ fontWeight: 800, color: 'var(--navy)' }}>{c.name || '—'}</div><div style={{ color: 'var(--gray)' }}>{c.phone || '—'}</div></td>
                                <td style={td}>{c.recharges ? <>{fmtRs(c.recharged)} <span style={{ color: 'var(--gray)' }}>× {c.recharges}</span><div style={{ color: 'var(--gray)' }}>first {d(c.first_recharge)}</div></> : '—'}</td>
                                <td style={td}>{c.paid_sessions}{c.voice_sessions ? <span style={{ color: 'var(--gray)' }}> ({c.voice_sessions} voice)</span> : null}<div style={{ color: 'var(--gray)' }}>{c.distinct_listeners} listener{c.distinct_listeners === 1 ? '' : 's'}</div></td>
                                <td style={td}>{fmtRs(c.booked_value)}{c.refunds ? <div style={{ color: 'var(--gray)' }}>refunded {fmtRs(c.refunds)}</div> : null}</td>
                                <td style={td}>{fmtRs(c.wallet_balance)}</td>
                                <td style={td}>{d(c.last_paid_session)}</td>
                                <td style={{ ...td, whiteSpace: 'normal', minWidth: 140 }}>
                                  {c.flags.map(f => <span key={f} style={{ display: 'inline-block', margin: '0 4px 4px 0', padding: '2px 8px', borderRadius: 999, fontSize: 11, fontWeight: 800,
                                    background: f === 'spent more than wallet inflows' || f === 'paid without recharging' ? '#FFF0EE' : '#F0F8FC',
                                    color: f === 'spent more than wallet inflows' || f === 'paid without recharging' ? '#c0392b' : 'var(--navy)' }}>{f}</span>)}
                                  {c.other_credits > 0 && <div style={{ color: 'var(--gray)' }}>other credits {fmtRs(c.other_credits)}{c.earned_as_listener ? ' (incl. listener earnings)' : ''}</div>}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {customers.length > 10 && (
                        <button className="btn btn-gray" style={{ fontSize: 12, marginTop: 8 }} onClick={() => setShowAllCustomers(v => !v)}>
                          {showAllCustomers ? 'Show top 10' : `Show all ${customers.length}`}
                        </button>
                      )}
                    </div>
                  )
                })()}
                <div className="kpi-grid" style={{ marginBottom: 20 }}>
                  <div className="kpi-card">
                    <div className="kpi-label">Total Users</div>
                    <div className="kpi-value">{fmt(kpis.users.total)}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Active Users</div>
                    <div className="kpi-value">{fmt(kpis.users.active)}</div>
                    <div className="kpi-sub" title="is_active and users.updated_at within 30 days — a profile/wallet change, not a login">account touched in 30 days</div>
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
                    <div className="kpi-label">Listener Profiles</div>
                    <div className="kpi-value">{fmt(kpis.listeners.total)}</div>
                    <div className="kpi-sub">every applicant, any status</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Active Listeners</div>
                    <div className="kpi-value">{fmt(kpis.listeners.active)}</div>
                    <div className="kpi-sub">approved + active</div>
                  </div>
                  <div
                    className="kpi-card"
                    style={{ border: kpis.listeners.pending > 0 ? '2px solid var(--orange)' : undefined, cursor: 'pointer' }}
                    title="View pending listeners"
                    onClick={() => { setListenersStatus('pending'); setListenersPage(0); setTab('listeners') }}
                  >
                    <div className="kpi-label">Pending Approval</div>
                    <div className="kpi-value" style={{ color: kpis.listeners.pending > 0 ? 'var(--orange)' : undefined }}>{fmt(kpis.listeners.pending)}</div>
                    {kpis.listeners.pending > 0 && <div className="kpi-sub" style={{ color: 'var(--orange)' }}>tap to review →</div>}
                  </div>
                  <div
                    className="kpi-card"
                    style={{ border: (kpis.listeners.needsResubmission ?? 0) > 0 ? '2px solid var(--orange)' : undefined, cursor: 'pointer' }}
                    title="View listeners who need to fix their application"
                    onClick={() => { setListenersStatus('needs_resubmission'); setListenersPage(0); setTab('listeners') }}
                  >
                    <div className="kpi-label">Needs Fix</div>
                    <div className="kpi-value" style={{ color: (kpis.listeners.needsResubmission ?? 0) > 0 ? 'var(--orange)' : undefined }}>{fmt(kpis.listeners.needsResubmission ?? 0)}</div>
                    {(kpis.listeners.needsResubmission ?? 0) > 0 && <div className="kpi-sub" style={{ color: 'var(--orange)' }}>tap to review →</div>}
                  </div>
                  <div
                    className="kpi-card"
                    style={{ border: (kpis.listeners.pendingSelfie ?? 0) > 0 ? '2px solid #d4a017' : undefined, cursor: 'pointer' }}
                    title="Approved listeners with a new display photo awaiting review"
                    onClick={() => { setListenersStatus('pending_selfie'); setListenersPage(0); setTab('listeners') }}
                  >
                    <div className="kpi-label">Pending Photo</div>
                    <div className="kpi-value" style={{ color: (kpis.listeners.pendingSelfie ?? 0) > 0 ? '#d4a017' : undefined }}>{fmt(kpis.listeners.pendingSelfie ?? 0)}</div>
                    {(kpis.listeners.pendingSelfie ?? 0) > 0 && <div className="kpi-sub" style={{ color: '#d4a017' }}>tap to review →</div>}
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Online Now</div>
                    <div className="kpi-value" style={{ color: 'var(--green)' }}>{fmt(kpis.listeners.online)}</div>
                  </div>
                </div>

                {/* ── SESSIONS — free trials vs paid, Today / Month / Total ── */}
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>
                  Sessions
                  {kpis.sessions.active > 0 && (
                    <span style={{ marginLeft: 10, fontWeight: 800, color: 'var(--teal)', fontSize: 12 }}>
                      🟢 {kpis.sessions.active} live now
                    </span>
                  )}
                </div>
                {/* 3-column comparison table: Today | This Month | Total */}
                <div style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead>
                      <tr style={{ background: 'var(--light)' }}>
                        <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: 'var(--gray)', fontSize: 12, width: '34%' }}></th>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>Today</th>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>This Month</th>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderTop: '1px solid var(--border)' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--gray)', fontSize: 13 }}>Free Trials</td>
                        <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 800, fontSize: 18, color: 'var(--navy)' }}>{fmt(kpis.sessions.freeTrialToday ?? 0)}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 800, fontSize: 18, color: 'var(--navy)' }}>{fmt(kpis.sessions.freeTrialThisMonth ?? 0)}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700, fontSize: 15, color: 'var(--gray)' }}>{fmt(kpis.sessions.freeTrial)}</td>
                      </tr>
                      <tr style={{ borderTop: '1px solid var(--border)', background: '#FAFCFF' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--gray)', fontSize: 13 }}>Paid Sessions</td>
                        <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 800, fontSize: 18, color: 'var(--teal)' }}>{fmt(kpis.sessions.paidToday ?? 0)}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 800, fontSize: 18, color: 'var(--teal)' }}>{fmt(kpis.sessions.paidThisMonth ?? 0)}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700, fontSize: 15, color: 'var(--gray)' }}>{fmt(kpis.sessions.paid)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ padding: '8px 16px', borderTop: '1px solid var(--border)', fontSize: 12, color: 'var(--gray)', display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    <span>Avg duration: <strong>{kpis.sessions.avgDurationMins} min</strong></span>
                    <span>All created today: <strong>{fmt(kpis.sessions.today)}</strong></span>
                    <span>Created this month: <strong>{fmt(kpis.sessions.thisMonth)}</strong></span>
                    <span style={{ color: 'var(--teal)' }}>Completed today: <strong>{fmt((kpis.sessions.freeTrialToday ?? 0) + (kpis.sessions.paidToday ?? 0))}</strong> (trials + paid)</span>
                  </div>
                </div>

                {/* ── WALLET RECHARGES — seeker money coming in ── */}
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>Wallet Recharges (money in)</div>
                <div style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 16, overflow: 'hidden', marginBottom: 12 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead>
                      <tr style={{ background: 'var(--light)' }}>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>Today</th>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>This Month</th>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 800, fontSize: 20, color: 'var(--teal)' }}>{fmtRs(kpis.revenue.todayRupees)}</td>
                        <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 800, fontSize: 20, color: 'var(--navy)' }}>{fmtRs(kpis.revenue.thisMonthRupees)}</td>
                        <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, fontSize: 16, color: 'var(--gray)' }}>{fmtRs(kpis.revenue.totalRechargedRupees)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {kpis.walletLiability && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                    {/* 1 — Unspent seeker wallet balances */}
                    <div className="liability-bar">
                      <div>
                        <div className="liability-label">Unspent seeker balances — do not touch</div>
                        <div className="liability-sub">
                          Held on behalf of {kpis.walletLiability.usersWithBalance} seeker{kpis.walletLiability.usersWithBalance === 1 ? '' : 's'}.
                          Park this — return it only when they spend it or request a refund.
                          Listener wallet balances are excluded (already in Unrequested Listener Earnings below).
                          {(kpis.walletLiability.heldInSessionsRupees ?? 0) > 0 && <><br />Plus <strong>{fmtRs(kpis.walletLiability.heldInSessionsRupees ?? 0)}</strong> already deducted for {kpis.walletLiability.heldInSessionsCount} pending/live paid session{kpis.walletLiability.heldInSessionsCount === 1 ? '' : 's'} (refunded if they don&apos;t happen).</>}
                          {(kpis.walletLiability.pendingRefundsRupees ?? 0) > 0 && <><br /><strong style={{ color: '#c0392b' }}>{fmtRs(kpis.walletLiability.pendingRefundsRupees ?? 0)}</strong> in {kpis.walletLiability.pendingRefundsCount} refund request{kpis.walletLiability.pendingRefundsCount === 1 ? '' : 's'} waiting for you (already deducted from their wallets).</>}
                        </div>
                      </div>
                      <div className="liability-amount">{fmtRs(kpis.walletLiability.totalRupees + (kpis.walletLiability.heldInSessionsRupees ?? 0) + (kpis.walletLiability.pendingRefundsRupees ?? 0))}</div>
                    </div>
                    {/* 2 — Listener earnings settled but not yet requested for payout */}
                    {(kpis.walletLiability.listenerEarningsUnrequestedRupees ?? 0) > 0 && (
                      <div className="liability-bar" style={{ borderLeftColor: 'var(--teal)', borderColor: '#B2DEB2', background: '#F0FBF8' }}>
                        <div>
                          <div className="liability-label" style={{ color: '#0d6e7e' }}>Unrequested listener earnings</div>
                          <div className="liability-sub">
                            Listener wallet balances ({kpis.walletLiability.listenersWithBalance ?? '—'} listener{kpis.walletLiability.listenersWithBalance === 1 ? '' : 's'}) not yet requested as payout. Owed to them on demand.
                          </div>
                        </div>
                        <div className="liability-amount" style={{ color: '#0d6e7e' }}>{fmtRs(kpis.walletLiability.listenerEarningsUnrequestedRupees ?? 0)}</div>
                      </div>
                    )}
                    {/* Deleted accounts still holding money — they can't log in to withdraw it */}
                    {(kpis.deletedWithBalance?.length ?? 0) > 0 && (
                      <div className="liability-bar" style={{ borderLeftColor: '#c0392b', borderColor: '#FFB3AE', background: '#FFF5F5' }}>
                        <div>
                          <div className="liability-label" style={{ color: '#c0392b' }}>Deleted accounts still holding money ({kpis.deletedWithBalance!.length})</div>
                          <div className="liability-sub">
                            They can&apos;t log in to withdraw it. Pay them out if you can reach them, otherwise decide whether to keep it as owed.
                            {' '}{kpis.deletedWithBalance!.map(d => `${d.name || d.user_id.slice(0, 8)}: ${fmtRs(d.balance)} (${d.earned ? 'listener earnings' : 'seeker wallet'})`).join(' · ')}
                          </div>
                        </div>
                        <div className="liability-amount" style={{ color: '#c0392b' }}>{fmtRs(kpis.deletedWithBalance!.reduce((t, d) => t + d.balance, 0))}</div>
                      </div>
                    )}
                    {/* Wallet ↔ ledger check — every balance should equal its own transaction history */}
                    {kpis.walletIntegrity && (
                      <div className="liability-bar" style={kpis.walletIntegrity.mismatchedUsers > 0 ? { borderLeftColor: '#d4a017', borderColor: '#F5D98A', background: '#FFFBEB' } : { borderLeftColor: 'var(--green)', borderColor: '#B2DEB2', background: '#F3FBF4' }}>
                        <div>
                          <div className="liability-label" style={{ color: kpis.walletIntegrity.mismatchedUsers > 0 ? '#8a6500' : '#1B7A3A' }}>
                            Wallet check: {kpis.walletIntegrity.mismatchedUsers === 0 ? 'all balances match their transaction history' : `${kpis.walletIntegrity.mismatchedUsers} wallet${kpis.walletIntegrity.mismatchedUsers === 1 ? '' : 's'} differ from their transaction history`}
                          </div>
                          <div className="liability-sub">
                            {kpis.walletIntegrity.usersChecked} wallets checked (credits + refunds − debits).
                            {kpis.walletIntegrity.top.length > 0 && <> Biggest: {kpis.walletIntegrity.top.slice(0, 5).map(r => `${r.name || r.user_id.slice(0, 8)} (balance ${fmtRs(r.balance)} vs history ${fmtRs(r.ledger)})`).join(' · ')}.</>}
                          </div>
                        </div>
                        {kpis.walletIntegrity.mismatchedUsers > 0 && <div className="liability-amount" style={{ color: '#8a6500' }}>{kpis.walletIntegrity.netDiffRupees >= 0 ? '+' : '−'}{fmtRs(Math.abs(kpis.walletIntegrity.netDiffRupees))}</div>}
                      </div>
                    )}
                    {/* 3 — Pending payout requests already submitted */}
                    {kpis.payouts.pendingCount > 0 && (
                      <div className="liability-bar" style={{ borderLeftColor: '#c0392b', borderColor: '#FFB3AE', background: '#FFF5F5' }}>
                        <div>
                          <div className="liability-label" style={{ color: '#c0392b' }}>Pending payout requests ({kpis.payouts.pendingCount})</div>
                          <div className="liability-sub">Submitted by listeners, awaiting your manual transfer. Action needed.</div>
                        </div>
                        <div className="liability-amount" style={{ color: '#c0392b' }}>{fmtRs(kpis.payouts.pendingAmountRupees)}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* ── NEW LISTENERS — Today / Month / Total ── */}
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>New Listeners</div>
                <div style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead>
                      <tr style={{ background: 'var(--light)' }}>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>Today</th>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>This Month</th>
                        <th style={{ padding: '10px 16px', textAlign: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 800, fontSize: 20, color: 'var(--navy)' }}>{fmt(kpis.listeners.newToday ?? 0)}</td>
                        <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 800, fontSize: 20, color: 'var(--navy)' }}>{fmt(kpis.listeners.newThisMonth ?? 0)}</td>
                        <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, fontSize: 16, color: 'var(--gray)' }}>{fmt(kpis.listeners.total)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ padding: '8px 16px', borderTop: '1px solid var(--border)', fontSize: 12, color: 'var(--gray)', display: 'flex', gap: 20 }}>
                    <span>Active (approved): <strong>{fmt(kpis.listeners.active)}</strong></span>
                    <span>Online now: <strong style={{ color: 'var(--green)' }}>{fmt(kpis.listeners.online)}</strong></span>
                    {kpis.listeners.pending > 0 && (
                      <span
                        style={{ color: 'var(--orange)', fontWeight: 800, cursor: 'pointer' }}
                        onClick={() => { setListenersStatus('pending'); setListenersPage(0); setTab('listeners') }}
                      >
                        ⏳ {kpis.listeners.pending} pending approval →
                      </span>
                    )}
                  </div>
                </div>

                {/* ── GROSS PLATFORM REVENUE (platform fee) ── */}
                {kpis.platformEarnings && (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray)', marginBottom: 10 }}>LeanOn Revenue — before gateway costs (India: ₹10 flat + listener svc fee — {Math.round(LISTENER_SERVICE_FEE_RATE * 100)}% now, 15% before 24 Sep 2026 · NRI: same + USD price margin)</div>
                    <div className="kpi-grid" style={{ marginBottom: 20 }}>
                      <div className="kpi-card" style={{ borderLeft: '5px solid var(--green)' }}>
                        <div className="kpi-label">All Time</div>
                        <div className="kpi-value" style={{ fontSize: 22, color: 'var(--green)' }}>{fmtRs(kpis.platformEarnings.allTimeRupees)}</div>
                        <div className="kpi-sub">{kpis.platformEarnings.paidSessions} paid session{kpis.platformEarnings.paidSessions === 1 ? '' : 's'}</div>
                      </div>
                      <div className="kpi-card">
                        <div className="kpi-label">This Month</div>
                        <div className="kpi-value" style={{ fontSize: 20 }}>{fmtRs(kpis.platformEarnings.thisMonthRupees)}</div>
                      </div>
                      <div className="kpi-card">
                        <div className="kpi-label">Today</div>
                        <div className="kpi-value" style={{ fontSize: 20 }}>{fmtRs(kpis.platformEarnings.todayRupees)}</div>
                      </div>
                    </div>
                  </>
                )}

                {/* ── PAYOUTS / REPORTS alerts ── */}
                <div className="kpi-grid" style={{ marginBottom: 20 }}>
                  <div className="kpi-card" style={{ border: kpis.payouts.pendingCount > 0 ? '2px solid var(--orange)' : undefined }}>
                    <div className="kpi-label">Pending Payouts</div>
                    <div className="kpi-value" style={{ fontSize: 20, color: kpis.payouts.pendingCount > 0 ? 'var(--orange)' : undefined }}>{fmtRs(kpis.payouts.pendingAmountRupees)}</div>
                    <div className="kpi-sub">{kpis.payouts.pendingCount} requests</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Listener Earnings (settled)</div>
                    <div className="kpi-value" style={{ fontSize: 20 }}>{fmtRs(kpis.revenue.listenerEarningsRupees)}</div>
                  </div>
                  <div className="kpi-card" style={{ border: kpis.moderation.pendingReports > 0 ? '2px solid var(--red)' : undefined }}>
                    <div className="kpi-label">Reports Pending</div>
                    <div className="kpi-value" style={{ color: kpis.moderation.pendingReports > 0 ? 'var(--red)' : undefined }}>{kpis.moderation.pendingReports}</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Gateway Fees (Razorpay offset)</div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 4, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 11, color: 'var(--gray)' }}>Today <strong style={{ color: 'var(--navy)' }}>{fmtRs(kpis.gatewayFees?.today ?? 0)}</strong></span>
                      <span style={{ fontSize: 11, color: 'var(--gray)' }}>Month <strong style={{ color: 'var(--navy)' }}>{fmtRs(kpis.gatewayFees?.thisMonth ?? 0)}</strong></span>
                      <span style={{ fontSize: 11, color: 'var(--gray)' }}>Total <strong style={{ color: 'var(--navy)' }}>{fmtRs(kpis.gatewayFees?.allTime ?? 0)}</strong></span>
                    </div>
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
                placeholder="Search by name or phone..."
                value={usersSearch}
                onChange={e => setUsersSearch(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { setUsersPage(0); loadUsers(0, usersStatus, usersSearch) } }}
              />
              <button className="btn btn-teal" onClick={() => { setUsersPage(0); loadUsers(0, usersStatus, usersSearch) }}>Search</button>
            </div>

            {/* Money seekers have paid in but not yet spent. This is a LIABILITY,
                not revenue — it must stay parked until they spend it or ask for
                it back. Always shows the GLOBAL total (all users) so it matches
                the Overview card — not a per-filter subset, which was confusing. */}
            {kpis?.walletLiability && (
              <div className="liability-bar">
                <div>
                  <div className="liability-label">Unspent seeker balances — do not touch</div>
                  <div className="liability-sub">
                    Held on behalf of {kpis.walletLiability.usersWithBalance} seeker{kpis.walletLiability.usersWithBalance === 1 ? '' : 's'} (listener balances excluded — already in unrequested earnings).
                    Park this and leave it until they spend it or ask for it back.
                  </div>
                </div>
                <div className="liability-amount" title="Unspent wallets + money held for pending/live paid sessions + pending refund requests (same as Overview)">{fmtRs(kpis.walletLiability.totalRupees + (kpis.walletLiability.heldInSessionsRupees ?? 0) + (kpis.walletLiability.pendingRefundsRupees ?? 0))}</div>
              </div>
            )}
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
                        <th
                          style={sortableTh}
                          title="Sort by name A→Z / Z→A (across all pages)"
                          onClick={() => {
                            const next: SortDir = usersSortBy === 'name' ? (usersJoinedDir === 'asc' ? 'desc' : 'asc') : 'asc'
                            setUsersJoinedDir(next); setUsersLoginDir(null); setUsersSortBy('name')
                            setUsersPage(0); loadUsers(0, usersStatus, usersSearch, next, 'name')
                          }}
                        >Name{arrow(usersSortBy === 'name' ? usersJoinedDir : null)}</th>
                        <th>Phone</th>
                        <th
                          style={sortableTh}
                          title="Sort by joined date (across all pages)"
                          onClick={() => {
                            const next: SortDir = usersSortBy === 'joined' ? (usersJoinedDir === 'desc' ? 'asc' : 'desc') : 'desc'
                            setUsersJoinedDir(next); setUsersLoginDir(null); setUsersSortBy('joined')
                            setUsersPage(0); loadUsers(0, usersStatus, usersSearch, next, 'joined')
                          }}
                        >Joined{arrow(usersSortBy === 'joined' ? usersJoinedDir : null)}</th>
                        <th
                          style={sortableTh}
                          title="Sort by last login (this page only)"
                          onClick={() => setUsersLoginDir(d => d === 'desc' ? 'asc' : 'desc')}
                        >Last login{arrow(usersLoginDir)}</th>
                        <th
                          style={sortableTh}
                          title="Sort by wallet balance (across all pages)"
                          onClick={() => {
                            // Default to biggest balances first — that is the money
                            // most worth knowing about.
                            const next: SortDir = usersSortBy === 'wallet' && usersJoinedDir === 'desc' ? 'asc' : 'desc'
                            setUsersJoinedDir(next); setUsersLoginDir(null); setUsersSortBy('wallet')
                            setUsersPage(0); loadUsers(0, usersStatus, usersSearch, next, 'wallet')
                          }}
                        >Wallet{arrow(usersSortBy === 'wallet' ? usersJoinedDir : null)}</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortByLastLogin(users, usersLoginDir).map(u => (
                        <tr key={u.id}>
                          <td style={{ fontWeight: 700 }}>
                            {editingNameId === u.id ? (
                              <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                                <input
                                  className="search-input"
                                  style={{ minWidth: 120, width: 140, padding: '4px 10px', fontSize: 13 }}
                                  value={editingNameValue}
                                  onChange={e => setEditingNameValue(e.target.value)}
                                  onKeyDown={e => {
                                    if (e.key === 'Enter') { setEditingNameId(null); userAction(u.id, 'rename', undefined, editingNameValue.trim()) }
                                    if (e.key === 'Escape') setEditingNameId(null)
                                  }}
                                  autoFocus
                                />
                                <button className="btn btn-teal" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => { setEditingNameId(null); userAction(u.id, 'rename', undefined, editingNameValue.trim()) }}>Save</button>
                                <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setEditingNameId(null)}>Cancel</button>
                              </span>
                            ) : (
                              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                                {u.name || '—'}
                                <button
                                  title="Edit username"
                                  onClick={() => { setEditingNameId(u.id); setEditingNameValue(u.name || '') }}
                                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'var(--teal)', padding: '0 2px', lineHeight: 1 }}
                                >✎</button>
                              </span>
                            )}
                          </td>
                          <td style={{ color: 'var(--gray)', fontSize: 13 }}>{u.phone || '—'}</td>
                          <td style={{ color: 'var(--gray)' }}>{fmtDate(u.created_at)}</td>
                          <td style={{ color: 'var(--gray)', fontSize: 12 }}>{fmtDateTime(u.last_sign_in_at)}</td>
                          <td>₹{u.wallet_balance ?? 0}</td>
                          <td>
                            {u.phone?.startsWith('DELETE')
                              ? <span className="badge badge-red" style={{ background: '#1a1a1a', color: '#ff6b6b' }}>Deleted</span>
                              : u.is_suspended
                              ? <span className="badge badge-red">Suspended</span>
                              : u.is_active
                                ? <span className="badge badge-green">Active</span>
                                : <span className="badge badge-gray">Inactive</span>}
                          </td>
                          <td>
                            <div className="action-row">
                              {/* Suspend ↔ Unsuspend — temporary block, fully reversible */}
                              {u.is_suspended ? (
                                <button className="btn btn-green" disabled={busy !== null} onClick={() => userAction(u.id, 'unsuspend')}>
                                  {busy === `unsuspend:${u.id}` ? '…' : 'Unsuspend'}
                                </button>
                              ) : (
                                <button className="btn btn-orange" disabled={busy !== null} onClick={() => userAction(u.id, 'suspend')}>
                                  {busy === `suspend:${u.id}` ? '…' : 'Suspend'}
                                </button>
                              )}
                              {/* Ban — permanent/severe. Requires confirmation.
                                  Hidden when already suspended (no point re-banning). */}
                              {!u.is_suspended && (confirmBanId === u.id ? (
                                <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)' }}>Ban permanently?</span>
                                  <button className="btn btn-red" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => { setConfirmBanId(null); userAction(u.id, 'ban') }}>Yes, ban</button>
                                  <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setConfirmBanId(null)}>Cancel</button>
                                </span>
                              ) : (
                                <button className="btn btn-red" disabled={busy !== null} onClick={() => setConfirmBanId(u.id)}>Ban</button>
                              ))}
                              {u.phone?.startsWith('DELETE') ? (
                                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--red)', opacity: 0.6 }}>Account deleted</span>
                              ) : (
                                <button className="btn btn-red" style={{ fontSize: 11, opacity: 0.7 }} disabled={busy !== null} onClick={() => { setDeleteConfirmInput(''); setConfirmDeleteUserId(u.id) }}>Delete Account</button>
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
              {(['all', 'pending', 'needs_resubmission', 'pending_selfie', 'active', 'suspended', 'rejected'] as const).map(s => (
                <button
                  key={s}
                  className={`filter-btn${listenersStatus === s ? ' active' : ''}`}
                  onClick={() => { setListenersStatus(s); setListenersPage(0); loadListeners(0, s, listenersJoinedDir, listenersSortBy, listenersSearch) }}
                >
                  {s === 'pending' ? 'Pending Approval' : s === 'needs_resubmission' ? 'Needs Fix' : s === 'pending_selfie' ? 'Pending Photo' : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
              <input
                className="search-input"
                placeholder="Search by name or phone…"
                value={listenersSearch}
                onChange={e => setListenersSearch(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') { setListenersPage(0); loadListeners(0, listenersStatus, listenersJoinedDir, listenersSortBy, listenersSearch) }
                }}
              />
              <button
                className="filter-btn"
                onClick={() => { setListenersPage(0); loadListeners(0, listenersStatus, listenersJoinedDir, listenersSortBy, listenersSearch) }}
              >Search</button>
              {listenersSearch && (
                <button
                  className="filter-btn"
                  onClick={() => { setListenersSearch(''); setListenersPage(0); loadListeners(0, listenersStatus, listenersJoinedDir, listenersSortBy, '') }}
                >✕ Clear</button>
              )}
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
                        <th>Photo</th>
                        <th
                          style={sortableTh}
                          title="Sort by name A→Z / Z→A (across all pages)"
                          onClick={() => {
                            const next: SortDir = listenersSortBy === 'name' ? (listenersJoinedDir === 'asc' ? 'desc' : 'asc') : 'asc'
                            setListenersJoinedDir(next); setListenersLoginDir(null); setListenersSortBy('name')
                            setListenersPage(0); loadListeners(0, listenersStatus, next, 'name')
                          }}
                        >Name{arrow(listenersSortBy === 'name' ? listenersJoinedDir : null)}</th>
                        <th>Phone</th>
                        <th>Aadhaar</th>
                        <th>Payout Details</th>
                        <th
                          style={sortableTh}
                          title="Sort by joined date (across all pages)"
                          onClick={() => {
                            const next: SortDir = listenersSortBy === 'joined' ? (listenersJoinedDir === 'desc' ? 'asc' : 'desc') : 'desc'
                            setListenersJoinedDir(next); setListenersLoginDir(null); setListenersSortBy('joined')
                            setListenersPage(0); loadListeners(0, listenersStatus, next, 'joined')
                          }}
                        >Joined{arrow(listenersSortBy === 'joined' ? listenersJoinedDir : null)}</th>
                        <th
                          style={sortableTh}
                          title="Sort by last login (this page only)"
                          onClick={() => setListenersLoginDir(d => d === 'desc' ? 'asc' : 'desc')}
                        >Last login{arrow(listenersLoginDir)}</th>
                        <th>Rate</th>
                        <th>Rating</th>
                        <th>Sessions</th>
                        <th
                          style={sortableTh}
                          title="Total earned from completed sessions (sorts across all pages)"
                          onClick={() => {
                            // Highest earners first by default.
                            const next: SortDir = listenersSortBy === 'earnings' && listenersJoinedDir === 'desc' ? 'asc' : 'desc'
                            setListenersJoinedDir(next); setListenersLoginDir(null); setListenersSortBy('earnings')
                            setListenersPage(0); loadListeners(0, listenersStatus, next, 'earnings')
                          }}
                        >Earned{arrow(listenersSortBy === 'earnings' ? listenersJoinedDir : null)}</th>
                        <th
                          style={sortableTh}
                          title="Current wallet balance — what they haven't yet requested as payout (sorts across all pages)"
                          onClick={() => {
                            const next: SortDir = listenersSortBy === 'wallet' && listenersJoinedDir === 'desc' ? 'asc' : 'desc'
                            setListenersJoinedDir(next); setListenersLoginDir(null); setListenersSortBy('wallet')
                            setListenersPage(0); loadListeners(0, listenersStatus, next, 'wallet')
                          }}
                        >Wallet{arrow(listenersSortBy === 'wallet' ? listenersJoinedDir : null)}</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortByLastLogin(listeners, listenersLoginDir).map(l => {
                        const u = l.users
                        const appStatus = l.application?.status ?? null
                        const isPending = !l.is_approved && (appStatus === 'pending' || appStatus === 'needs_resubmission' || appStatus === null)
                        const isRejected = !l.is_approved && appStatus === 'rejected'
                        const isNeedsResubmission = !l.is_approved && appStatus === 'needs_resubmission'
                        // Detect if this listener is the currently logged-in admin
                        const isSelf = !!(authUser && (
                          (authUser.phone && u?.phone && authUser.phone.replace(/\D/g, '').slice(-10) === u.phone.replace(/\D/g, '').slice(-10)) ||
                          (authUser.email && u?.email && authUser.email === u.email)
                        ))
                        return (
                          <Fragment key={l.user_id}>
                          <tr className={isPending ? 'pending-row' : isRejected ? 'rejected-row' : ''}>
                            {/* Photo — click to open full size for verification */}
                            <td>
                              {/* The photo awaiting review wins over the live one — otherwise
                                  the Pending Photo tab showed the OLD photo it was asking about. */}
                              {(() => {
                                const shown = l.pending_avatar_url || u?.avatar_url || null
                                const isNew = !!l.pending_avatar_url
                                return (
                                  <a
                                    href={shown || undefined}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={shown ? (isNew ? 'NEW photo awaiting review — open full size' : 'Open full-size photo') : 'No photo uploaded'}
                                    style={{
                                      position: 'relative',
                                      width: 44, height: 44, borderRadius: 8, display: 'flex',
                                      alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                                      background: 'var(--light)', border: isNew ? '2px solid #d4a017' : '1.5px solid var(--border)',
                                      fontSize: 9, color: 'var(--gray)', fontWeight: 700, textAlign: 'center',
                                      cursor: shown ? 'zoom-in' : 'default', textDecoration: 'none',
                                    }}
                                  >
                                    {shown
                                      // eslint-disable-next-line @next/next/no-img-element
                                      ? <img src={shown} alt={`${u?.name || 'Listener'} ${isNew ? 'new' : 'profile'} photo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                      : 'None'}
                                    {isNew && <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#d4a017', color: 'white', fontSize: 8, fontWeight: 900, lineHeight: '11px' }}>NEW</span>}
                                  </a>
                                )
                              })()}
                            </td>
                            <td style={{ fontWeight: 700, maxWidth: 260 }}>
                              {editingNameId === l.user_id ? (
                                <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                                  <input
                                    className="search-input"
                                    style={{ minWidth: 120, width: 140, padding: '4px 10px', fontSize: 13 }}
                                    value={editingNameValue}
                                    onChange={e => setEditingNameValue(e.target.value)}
                                    onKeyDown={e => {
                                      if (e.key === 'Enter') { setEditingNameId(null); userAction(l.user_id, 'rename', undefined, editingNameValue.trim()) }
                                      if (e.key === 'Escape') setEditingNameId(null)
                                    }}
                                    autoFocus
                                  />
                                  <button className="btn btn-teal" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => { setEditingNameId(null); userAction(l.user_id, 'rename', undefined, editingNameValue.trim()) }}>Save</button>
                                  <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setEditingNameId(null)}>Cancel</button>
                                </span>
                              ) : (
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                                  {u?.name || '—'}
                                  <button
                                    title="Edit username"
                                    onClick={() => { setEditingNameId(l.user_id); setEditingNameValue(u?.name || '') }}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'var(--teal)', padding: '0 2px', lineHeight: 1 }}
                                  >✎</button>
                                </span>
                              )}
                              {isSelf && <span className="badge badge-orange" style={{ marginLeft: 6, fontSize: 10 }}>YOU</span>}
                              {l.is_verified && <span className="badge badge-teal" style={{ marginLeft: 6, fontSize: 10 }}>Verified</span>}
                              {(l.specialty_tags?.length ?? 0) > 0 && (
                                <div style={{ fontSize: 10, color: 'var(--teal)', fontWeight: 700, marginTop: 2 }}>
                                  {l.specialty_tags!.join(' · ')}
                                </div>
                              )}
                              {l.bio && (
                                <div
                                  title={l.bio}
                                  style={{ fontSize: 11, color: 'var(--gray)', fontWeight: 500, marginTop: 3, lineHeight: 1.5, whiteSpace: 'normal' }}
                                >
                                  {l.bio.length > 160 ? `${l.bio.slice(0, 160)}…` : l.bio}
                                </div>
                              )}
                            </td>
                            <td style={{ color: 'var(--gray)', fontSize: 12 }}>
                              {u?.phone || '—'}
                            </td>
                            <td style={{ fontSize: 12, fontFamily: 'monospace', letterSpacing: 0.5 }}>
                              {l.application?.aadhaar
                                || (l.application?.aadhaar_last4 ? `••••••••${l.application.aadhaar_last4}` : '—')}
                            </td>
                            <td style={{ fontSize: 11, minWidth: 160 }}>
                              {l.application?.account_holder_name && (
                                <div style={{ marginBottom: 4, fontWeight: 800, color: 'var(--navy)', fontSize: 12 }}>
                                  {l.application.account_holder_name}
                                </div>
                              )}
                              {l.application?.upi_id && (
                                <div style={{ marginBottom: 3 }}>
                                  <span style={{ fontWeight: 700, color: 'var(--gray)', marginRight: 4 }}>UPI</span>
                                  <span
                                    style={{ fontFamily: 'monospace', background: 'var(--light)', padding: '1px 6px', borderRadius: 4, cursor: 'pointer', userSelect: 'all' }}
                                    title="Click to select and copy"
                                  >{l.application.upi_id}</span>
                                </div>
                              )}
                              {l.application?.bank_account && (
                                <div style={{ marginBottom: 3 }}>
                                  <span style={{ fontWeight: 700, color: 'var(--gray)', marginRight: 4 }}>Acct</span>
                                  <span
                                    style={{ fontFamily: 'monospace', background: 'var(--light)', padding: '1px 6px', borderRadius: 4, cursor: 'pointer', userSelect: 'all' }}
                                    title="Click to select and copy"
                                  >{l.application.bank_account}</span>
                                </div>
                              )}
                              {l.application?.ifsc_code && (
                                <div>
                                  <span style={{ fontWeight: 700, color: 'var(--gray)', marginRight: 4 }}>IFSC</span>
                                  <span
                                    style={{ fontFamily: 'monospace', background: 'var(--light)', padding: '1px 6px', borderRadius: 4, cursor: 'pointer', userSelect: 'all' }}
                                    title="Click to select and copy"
                                  >{l.application.ifsc_code}</span>
                                </div>
                              )}
                              {l.application === null && (
                                <span style={{ color: '#C0392B', fontWeight: 700, fontSize: 11 }}>
                                  ⚠️ No application on file — ask to resubmit at /become-listener
                                </span>
                              )}
                              {l.application !== null && !l.application?.upi_id && !l.application?.bank_account && (
                                <span style={{ color: 'var(--gray)', fontStyle: 'italic' }}>—</span>
                              )}
                            </td>
                            <td style={{ color: 'var(--gray)', fontSize: 12 }}>{fmtDate(u?.created_at)}</td>
                            <td style={{ color: 'var(--gray)', fontSize: 12 }}>{fmtDateTime(l.last_sign_in_at)}</td>
                            <td>₹{l.rate_per_min ?? '—'}/min</td>
                            <td>{l.rating ? `${l.rating.toFixed(1)} ★` : '—'}</td>
                            <td>{l.total_sessions ?? 0}</td>
                            <td style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>
                              ₹{(l.earned_total ?? 0).toLocaleString('en-IN')}
                              {/* Settled = cleared and payable. Only worth calling out
                                  when it differs from the total. */}
                              {(l.earned_settled ?? 0) !== (l.earned_total ?? 0) && (
                                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--gray)' }}>
                                  ₹{(l.earned_settled ?? 0).toLocaleString('en-IN')} settled
                                </div>
                              )}
                            </td>
                            <td style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
                              {/* wallet_balance is on the joined users row */}
                              {(() => {
                                const bal = Number((l.users as { wallet_balance?: number } | undefined)?.wallet_balance ?? 0)
                                return bal > 0
                                  ? <span style={{ color: 'var(--teal)' }}>₹{bal.toLocaleString('en-IN')}</span>
                                  : <span style={{ color: 'var(--gray)' }}>₹0</span>
                              })()}
                            </td>
                            <td>
                              {l.users?.phone?.startsWith('DELETE')
                                ? <span className="badge badge-red" style={{ background: '#1a1a1a', color: '#ff6b6b' }}>Deleted</span>
                                : isNeedsResubmission
                                ? <span className="badge badge-orange" style={{ background: '#fff3cd', color: '#856404' }}>Needs Fix</span>
                                : isPending
                                ? <span className="badge badge-orange">Pending Approval</span>
                                : isRejected
                                  ? <span className="badge badge-red">Rejected</span>
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
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
                                      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)' }}>Type reason, then click Request Fix or Reject:</div>
                                      <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                                      <input
                                        className="reject-input"
                                        style={{ width: 160, marginBottom: 0 }}
                                        placeholder="e.g. blurry selfie, invalid IFSC…"
                                        value={rejectNotesListeners[l.user_id] || ''}
                                        onChange={e => setRejectNotesListeners(prev => ({ ...prev, [l.user_id]: e.target.value }))}
                                      />
                                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }} title="Identity or photo concern — the applicant must take a fresh verification selfie">
                                <input type="checkbox" checked={!!retakeSelfie[l.user_id]} onChange={e => setRetakeSelfie(prev => ({ ...prev, [l.user_id]: e.target.checked }))} />
                                New selfie
                              </label>
                              <button className="btn btn-orange" disabled={busy !== null || !rejectNotesListeners[l.user_id]?.trim()} onClick={() => userAction(l.user_id, 'request_resubmission', rejectNotesListeners[l.user_id], undefined, { retake_selfie: !!retakeSelfie[l.user_id] })} title="Ask them to fix and resubmit">
                                        {busy === `request_resubmission:${l.user_id}` ? '…' : 'Request Fix'}
                                      </button>
                                      {confirmRejectListenersId === l.user_id ? (
                                        <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                                          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)' }}>Permanently reject?</span>
                                          <button className="btn btn-red" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => { setConfirmRejectListenersId(null); userAction(l.user_id, 'reject_listener', rejectNotesListeners[l.user_id]) }}>Yes, reject</button>
                                          <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setConfirmRejectListenersId(null)}>Cancel</button>
                                        </span>
                                      ) : (
                                        <button className="btn btn-red" disabled={busy !== null} onClick={() => setConfirmRejectListenersId(l.user_id)} title="Permanently reject — cannot resubmit">
                                          {busy === `reject_listener:${l.user_id}` ? '…' : 'Permanently Reject'}
                                        </button>
                                      )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {isRejected && (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    {l.application?.admin_notes && (
                                      <div style={{ fontSize: 11, color: 'var(--gray)', fontStyle: 'italic', maxWidth: 180 }}>
                                        Note: {l.application.admin_notes}
                                      </div>
                                    )}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                      <button className="btn btn-green" disabled={busy !== null} onClick={() => userAction(l.user_id, 'approve_listener')}>
                                        {busy === `approve_listener:${l.user_id}` ? 'Approving…' : 'Re-approve'}
                                      </button>
                                      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray)' }}>Type reason, then allow resubmission:</div>
                                      <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                                      <input
                                        className="reject-input"
                                        style={{ width: 160, marginBottom: 0 }}
                                        placeholder="e.g. blurry selfie, invalid IFSC…"
                                        value={rejectNotesListeners[l.user_id] || ''}
                                        onChange={e => setRejectNotesListeners(prev => ({ ...prev, [l.user_id]: e.target.value }))}
                                      />
                                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }} title="Identity or photo concern — the applicant must take a fresh verification selfie">
                                <input type="checkbox" checked={!!retakeSelfie[l.user_id]} onChange={e => setRetakeSelfie(prev => ({ ...prev, [l.user_id]: e.target.checked }))} />
                                New selfie
                              </label>
                              <button
                                        className="btn btn-orange"
                                        style={{ fontSize: 11 }}
                                        disabled={busy !== null || !rejectNotesListeners[l.user_id]?.trim()}
                                        title="Give this applicant another chance to fix and resubmit"
                                        onClick={() => userAction(l.user_id, 'request_resubmission', rejectNotesListeners[l.user_id], undefined, { retake_selfie: !!retakeSelfie[l.user_id] })}
                                      >
                                        {busy === `request_resubmission:${l.user_id}` ? '…' : 'Allow Resubmit'}
                                      </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {l.is_approved && l.pending_avatar_url && (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 4 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                      <span style={{ background: '#fff3cd', color: '#856404', border: '1px solid #ffc107', borderRadius: 4, fontSize: 10, fontWeight: 800, padding: '2px 6px', textTransform: 'uppercase' }}>Pending photo</span>
                                      {fmtWhen(photoUploadedAt(l.pending_avatar_url)) && (
                                        <span style={{ fontSize: 10, color: 'var(--gray)', fontWeight: 700 }}>uploaded {fmtWhen(photoUploadedAt(l.pending_avatar_url))}</span>
                                      )}
                                    </div>
                                    {/* Current (live) vs new, side by side, so the admin can compare.
                                        Supabase adds a ?t= cache-buster on every upload, so the
                                        same underlying file gets a different URL. Strip the query
                                        string before comparing to detect "same file, new timestamp". */}
                                    <div style={{ display: 'flex', gap: 8 }}>
                                      {(() => {
                                        const stripQ = (s: string | null | undefined) => s ? s.split('?')[0] : null
                                        const currentUrl = (u?.avatar_url && stripQ(u.avatar_url) !== stripQ(l.pending_avatar_url)) ? u.avatar_url : null
                                        return [{ label: 'Current', url: currentUrl }, { label: 'New', url: l.pending_avatar_url }]
                                      })().map(p => (
                                        <a key={p.label} href={p.url || undefined} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', textAlign: 'center' }}>
                                          <div style={{ width: 72, height: 72, borderRadius: 8, overflow: 'hidden', background: 'var(--light)', border: p.label === 'New' ? '2px solid #d4a017' : '1.5px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'var(--gray)', fontWeight: 700 }}>
                                            {p.url
                                              // eslint-disable-next-line @next/next/no-img-element
                                              ? <img src={p.url} alt={`${p.label} photo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                              : 'None'}
                                          </div>
                                          <div style={{ fontSize: 10, fontWeight: 800, color: p.label === 'New' ? '#856404' : 'var(--gray)', marginTop: 2 }}>{p.label}</div>
                                        </a>
                                      ))}
                                    </div>
                                    <div className="action-row">
                                      <button className="btn btn-green" style={{ fontSize: 11 }} disabled={busy !== null} onClick={() => userAction(l.user_id, 'approve_selfie')}>
                                        {busy === `approve_selfie:${l.user_id}` ? '…' : 'Approve photo'}
                                      </button>
                                      <button className="btn btn-red" style={{ fontSize: 11 }} disabled={busy !== null} onClick={() => userAction(l.user_id, 'reject_selfie', 'Photo not suitable')}>
                                        {busy === `reject_selfie:${l.user_id}` ? '…' : 'Reject photo'}
                                      </button>
                                    </div>
                                  </div>
                                )}
                                {/* Show payout details edit for any listener — approved or not.
                                    Rejected/pending applicants often need corrected bank info. */}
                                {(l.application !== null || l.is_approved) && (
                                  <div>
                                    {editingBankId === l.user_id ? (
                                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 2 }}>
                                        <input className="search-input" style={{ width: '100%', padding: '4px 8px', fontSize: 12 }} placeholder="Account holder name" value={bankEditValues.holderName} onChange={e => setBankEditValues(v => ({ ...v, holderName: e.target.value }))} />
                                        <input className="search-input" style={{ width: '100%', padding: '4px 8px', fontSize: 12 }} placeholder="Bank account number *" value={bankEditValues.bank} onChange={e => setBankEditValues(v => ({ ...v, bank: e.target.value }))} />
                                        <input className="search-input" style={{ width: '100%', padding: '4px 8px', fontSize: 12 }} placeholder="IFSC code *" value={bankEditValues.ifsc} onChange={e => setBankEditValues(v => ({ ...v, ifsc: e.target.value.toUpperCase() }))} />
                                        <input className="search-input" style={{ width: '100%', padding: '4px 8px', fontSize: 12 }} placeholder="UPI ID (optional)" value={bankEditValues.upi} onChange={e => setBankEditValues(v => ({ ...v, upi: e.target.value }))} />
                                        <div style={{ display: 'flex', gap: 4 }}>
                                          <button className="btn btn-teal" style={{ fontSize: 11, padding: '4px 8px' }} disabled={busy !== null || (!bankEditValues.bank.trim() && !bankEditValues.ifsc.trim() && !bankEditValues.holderName.trim() && !bankEditValues.upi.trim())} onClick={() => {
                                            setEditingBankId(null)
                                            const payload: Record<string, string | null> = { userId: l.user_id, action: 'update_bank_details' }
                                            if (bankEditValues.holderName.trim()) payload.account_holder_name = bankEditValues.holderName.trim()
                                            if (bankEditValues.bank.trim()) payload.bank_account = bankEditValues.bank.trim()
                                            if (bankEditValues.ifsc.trim()) payload.ifsc_code = bankEditValues.ifsc.trim()
                                            if (bankEditValues.upi !== '') payload.upi_id = bankEditValues.upi.trim() || null
                                            fetch('/api/admin/users', { method: 'PATCH', headers: { 'Content-Type': 'application/json', ...adminHeaders() }, body: JSON.stringify(payload) })
                                              .then(r => r.json()).then(j => { if (j.ok) { showToast('Payout details saved'); loadListeners(); loadPayouts() } else showToast(j.error || 'Failed to save') })
                                          }}>Save</button>
                                          <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setEditingBankId(null)}>Cancel</button>
                                        </div>
                                      </div>
                                    ) : (
                                      <button className="btn btn-teal" style={{ fontSize: 11 }} disabled={busy !== null} onClick={() => {
                                        setBankEditValues({
                                          holderName: (l.application as { account_holder_name?: string } | null)?.account_holder_name || '',
                                          bank: l.application?.bank_account || '',
                                          ifsc: l.application?.ifsc_code || '',
                                          upi: l.application?.upi_id || '',
                                        })
                                        setEditingBankId(l.user_id)
                                      }}>
                                        {l.application !== null ? 'Edit Payout Details' : 'Enter Payout Details'}
                                      </button>
                                    )}
                                  </div>
                                )}
                                {/* Send inactive (non-pending, non-rejected) listeners back to "Needs Fix" */}
                                {!isPending && !isRejected && !l.is_active && !l.is_suspended && (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 4 }}>
                                    <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                                      <input
                                        className="reject-input"
                                        style={{ width: 160, marginBottom: 0 }}
                                        placeholder="e.g. blurry selfie, fix bank…"
                                        value={rejectNotesListeners[l.user_id] || ''}
                                        onChange={e => setRejectNotesListeners(prev => ({ ...prev, [l.user_id]: e.target.value }))}
                                      />
                                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }} title="Identity or photo concern — the applicant must take a fresh verification selfie">
                                <input type="checkbox" checked={!!retakeSelfie[l.user_id]} onChange={e => setRetakeSelfie(prev => ({ ...prev, [l.user_id]: e.target.checked }))} />
                                New selfie
                              </label>
                              <button
                                        className="btn btn-orange"
                                        style={{ fontSize: 11 }}
                                        disabled={busy !== null || !rejectNotesListeners[l.user_id]?.trim()}
                                        title="Move to Needs Fix so they can resubmit"
                                        onClick={() => userAction(l.user_id, 'request_resubmission', rejectNotesListeners[l.user_id], undefined, { retake_selfie: !!retakeSelfie[l.user_id] })}
                                      >
                                        {busy === `request_resubmission:${l.user_id}` ? '…' : 'Send to Needs Fix'}
                                      </button>
                                    </div>
                                  </div>
                                )}
                                {/* Per-listener service fee rate override */}
                                {l.is_approved && (
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '.04em' }}>Service fee</span>
                                    {editingFeeRateId === l.user_id ? (
                                      <>
                                        <input
                                          type="number" min="0" max="100" step="1"
                                          placeholder="% (0–100)"
                                          value={feeRateInputValue}
                                          onChange={e => setFeeRateInputValue(e.target.value)}
                                          onKeyDown={e => {
                                            if (e.key === 'Enter') {
                                              const pct = feeRateInputValue.trim()
                                              const rate = pct === '' ? null : Number(pct) / 100
                                              if (rate !== null && (Number.isNaN(rate) || rate < 0 || rate > 1)) return
                                              setEditingFeeRateId(null)
                                              userAction(l.user_id, 'set_custom_fee_rate', undefined, undefined, { custom_service_fee_rate: rate })
                                            }
                                            if (e.key === 'Escape') setEditingFeeRateId(null)
                                          }}
                                          style={{ width: 80, padding: '3px 6px', border: '1.5px solid var(--teal)', borderRadius: 6, fontSize: 12, fontFamily: 'inherit' }}
                                          autoFocus
                                        />
                                        <button className="btn btn-teal" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => {
                                          const pct = feeRateInputValue.trim()
                                          const rate = pct === '' ? null : Number(pct) / 100
                                          if (rate !== null && (Number.isNaN(rate) || rate < 0 || rate > 1)) return
                                          setEditingFeeRateId(null)
                                          userAction(l.user_id, 'set_custom_fee_rate', undefined, undefined, { custom_service_fee_rate: rate })
                                        }}>Save</button>
                                        <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setEditingFeeRateId(null)}>Cancel</button>
                                      </>
                                    ) : (
                                      <>
                                        <span style={{ fontSize: 12, fontWeight: 700, color: l.custom_service_fee_rate != null ? '#856404' : 'var(--gray)', background: l.custom_service_fee_rate != null ? '#fff3cd' : 'transparent', border: l.custom_service_fee_rate != null ? '1px solid #ffc107' : 'none', borderRadius: 4, padding: l.custom_service_fee_rate != null ? '1px 5px' : '0' }}>
                                          {l.custom_service_fee_rate != null ? `${Math.round(l.custom_service_fee_rate * 100)}% (custom)` : `${Math.round(LISTENER_SERVICE_FEE_RATE * 100)}% (global default)`}
                                        </span>
                                        <button className="btn btn-gray" style={{ fontSize: 11, padding: '3px 7px' }} onClick={() => { setFeeRateInputValue(l.custom_service_fee_rate != null ? String(Math.round(l.custom_service_fee_rate * 100)) : ''); setEditingFeeRateId(l.user_id) }}>
                                          {l.custom_service_fee_rate != null ? 'Edit' : 'Override'}
                                        </button>
                                        {l.custom_service_fee_rate != null && (
                                          <button className="btn btn-gray" style={{ fontSize: 11, padding: '3px 7px', opacity: 0.7 }} onClick={() => userAction(l.user_id, 'set_custom_fee_rate', undefined, undefined, { custom_service_fee_rate: null })}>
                                            Clear (revert to global)
                                          </button>
                                        )}
                                      </>
                                    )}
                                  </div>
                                )}
                                <div className="action-row">
                                  {!isPending && !isRejected && l.is_suspended && (
                                    <button className="btn btn-green" disabled={busy !== null} onClick={() => userAction(l.user_id, 'unsuspend_listener')}>
                                      {busy === `unsuspend_listener:${l.user_id}` ? '…' : 'Unsuspend'}
                                    </button>
                                  )}
                                  {!isPending && !isRejected && l.is_active && !l.is_suspended && (
                                    <button className="btn btn-orange" disabled={busy !== null} onClick={() => userAction(l.user_id, 'suspend_listener')}>
                                      {busy === `suspend_listener:${l.user_id}` ? '…' : 'Suspend listener'}
                                    </button>
                                  )}
                                  {/* Ban — permanent. Hidden when already suspended. Requires confirmation. */}
                                  {!isPending && !isRejected && !l.is_suspended && (confirmBanListenerId === l.user_id ? (
                                    <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                                      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)' }}>Ban permanently?</span>
                                      <button className="btn btn-red" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => { setConfirmBanListenerId(null); userAction(l.user_id, 'ban') }}>Yes, ban</button>
                                      <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => setConfirmBanListenerId(null)}>Cancel</button>
                                    </span>
                                  ) : (
                                    !l.is_suspended && <button className="btn btn-red" disabled={busy !== null} onClick={() => setConfirmBanListenerId(l.user_id)}>Ban</button>
                                  ))}
                                  {l.users?.phone?.startsWith('DELETE') ? (
                                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--red)', opacity: 0.6 }}>Account deleted</span>
                                  ) : (
                                    <button className="btn btn-red" style={{ fontSize: 11, opacity: 0.7 }} disabled={busy !== null} onClick={() => { setDeleteConfirmInput(''); setConfirmDeleteUserId(l.user_id) }}>
                                      Delete Account
                                    </button>
                                  )}
                                  <a href={`/listener/${l.user_id}`} target="_blank" rel="noopener" className="btn btn-gray" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                    View Profile
                                  </a>
                                  <button className="btn btn-gray" onClick={() => setReviewOpenId(id => id === l.user_id ? null : l.user_id)}>
                                    {reviewOpenId === l.user_id ? 'Hide review' : 'Review'}
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {reviewOpenId === l.user_id && (
                            <tr>
                              <td colSpan={20}>
                                <ListenerReviewPanel review={l.review} displayUrl={l.pending_avatar_url || u?.avatar_url || null} displayPending={!!l.pending_avatar_url} />
                              </td>
                            </tr>
                          )}
                          </Fragment>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                {listenersTotal > PAGE_SIZE && (
                  <div className="pagination">
                    <button className="btn btn-gray" disabled={listenersPage === 0} onClick={() => { const p = listenersPage - 1; setListenersPage(p); loadListeners(p, listenersStatus, listenersJoinedDir, listenersSortBy, listenersSearch) }}>← Prev</button>
                    <span>{listenersPage * PAGE_SIZE + 1}–{Math.min((listenersPage + 1) * PAGE_SIZE, listenersTotal)} of {listenersTotal}</span>
                    <button className="btn btn-gray" disabled={(listenersPage + 1) * PAGE_SIZE >= listenersTotal} onClick={() => { const p = listenersPage + 1; setListenersPage(p); loadListeners(p, listenersStatus, listenersJoinedDir, listenersSortBy, listenersSearch) }}>Next →</button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ─── SESSIONS ─────────────────────────────────────────────────────── */}
        {tab === 'sessions' && (
          <>
            <div className="section-title">
              Sessions
              {sessionsTotal > 0 && <span className="count-badge">{sessionsTotal}</span>}
            </div>
            {unsettledIds.size > 0 && (
              <div style={{ background: '#FFF3CD', border: '1.5px solid #FFCA28', borderRadius: 12, padding: '10px 16px', marginBottom: 16, fontSize: 13, fontWeight: 700, color: '#7A4A00' }}>
                ⚠️ {unsettledIds.size} session{unsettledIds.size > 1 ? 's' : ''} where the listener was never credited (credit_wallet failed). Look for <strong>⚠️ Fix settlement</strong> buttons below.
              </div>
            )}
            <div style={{ marginBottom: 10 }}>
              <input
                type="search"
                placeholder="Search by listener or seeker name / phone…"
                value={sessionsSearch}
                onChange={e => {
                  const v = e.target.value
                  setSessionsSearch(v)
                  setSessionsPage(0)
                  // Debounce: fire after 400 ms of no typing
                  clearTimeout((window as Window & { _sessSearchTimer?: ReturnType<typeof setTimeout> })._sessSearchTimer)
                  ;(window as Window & { _sessSearchTimer?: ReturnType<typeof setTimeout> })._sessSearchTimer = setTimeout(() => {
                    loadSessions(sessionsStatus, sessionsSort, 0, sessionsSortBy, v)
                  }, 400)
                }}
                style={{ width: '100%', padding: '9px 14px', borderRadius: 10, border: '1.5px solid #D5EEF6', fontSize: 14, fontFamily: 'inherit', outline: 'none' }}
              />
            </div>
            <div className="filter-row">
              {(['all', 'active', 'completed', 'cancelled'] as const).map(s => (
                <button
                  key={s}
                  className={`filter-btn${sessionsStatus === s ? ' active' : ''}`}
                  onClick={() => { setSessionsStatus(s); setSessionsPage(0); loadSessions(s, sessionsSort, 0, sessionsSortBy, sessionsSearch) }}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
              <button className="btn btn-teal" style={{ marginLeft: 'auto' }} onClick={() => { setSessionsPage(0); loadSessions(sessionsStatus, sessionsSort, 0, sessionsSortBy, sessionsSearch) }}>Refresh</button>
            </div>
            {sessionsLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[1, 2, 3].map(i => <div key={i} className="skeleton" style={{ height: 52 }} />)}
              </div>
            ) : sessions.length === 0 ? (
              <div className="empty">No sessions found for this filter.</div>
            ) : (
              <>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th
                        style={sortableTh}
                        title="Sort by date across all pages"
                        onClick={() => {
                          const next: SortDir = sessionsSortBy === 'created_at' ? (sessionsSort === 'desc' ? 'asc' : 'desc') : 'desc'
                          setSessionsSort(next); setSessionsSortBy('created_at'); setSessionsPage(0)
                          loadSessions(sessionsStatus, next, 0, 'created_at', sessionsSearch)
                        }}
                      >
                        When{sessionsSortBy === 'created_at' ? arrow(sessionsSort) : ' ⇅'}
                      </th>
                      <th>Seeker</th>
                      <th>Listener</th>
                      <th>Type</th>
                      <th>Duration</th>
                      <th
                        style={sortableTh}
                        title="Sort by amount across all pages"
                        onClick={() => {
                          const next: SortDir = sessionsSortBy === 'amount' ? (sessionsSort === 'desc' ? 'asc' : 'desc') : 'desc'
                          setSessionsSort(next); setSessionsSortBy('amount'); setSessionsPage(0)
                          loadSessions(sessionsStatus, next, 0, 'amount', sessionsSearch)
                        }}
                      >
                        Amount{sessionsSortBy === 'amount' ? arrow(sessionsSort) : ' ⇅'}
                      </th>
                      <th>Status</th>
                      {isPrimaryAdmin && <th>Chat</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {sessions.map((s: SessionRow) => (
                      <tr key={s.id} style={s.crisis_flagged ? { background: '#FFF0F0' } : undefined}>
                        <td style={{ color: 'var(--gray)', fontSize: 12 }}>{fmtDate(s.created_at)}</td>
                        <td>
                          <div>{s.seeker?.name || s.seeker_id.slice(0, 8) + '…'}</div>
                          {s.seeker?.phone && <div style={{ fontSize: 11, color: 'var(--gray)' }}>{s.seeker.phone}</div>}
                        </td>
                        <td>
                          <div>{s.listener?.name || s.listener_id.slice(0, 8) + '…'}</div>
                          {s.listener?.phone && <div style={{ fontSize: 11, color: 'var(--gray)' }}>{s.listener.phone}</div>}
                        </td>
                        <td><span className="badge badge-teal">{s.session_type}</span></td>
                        <td>{(() => {
                          // Show actual elapsed time for completed/expired sessions if we have both timestamps.
                          // duration_mins is the BOOKED time; actual run-time is derived from started_at/ended_at.
                          if (s.started_at && s.ended_at && (s.status === 'completed' || s.status === 'expired')) {
                            const elapsedMs = new Date(s.ended_at).getTime() - new Date(s.started_at).getTime()
                            const actualMins = Math.max(0, Math.ceil(elapsedMs / 60000))
                            const billedMins = Math.min(s.duration_mins, actualMins)
                            if (billedMins < s.duration_mins) {
                              return (
                                <span title={`Booked: ${s.duration_mins} min — Actual: ${billedMins} min`}>
                                  <span style={{ color: 'var(--orange)', fontWeight: 600 }}>{billedMins}</span>
                                  <span style={{ color: 'var(--gray)', fontSize: 11 }}>/{s.duration_mins} min</span>
                                </span>
                              )
                            }
                          }
                          return <span>{s.duration_mins} min</span>
                        })()}</td>
                        <td>
                          {s.is_free_trial
                            ? <span className="badge badge-gray">Free</span>
                            : (() => {
                                const platformFee = s.platform_fee ?? 0  // seeker's flat ₹10

                                // ── Settled path (listener_earnings row exists) ──────────────
                                // listener_net_amount and listener_service_fee come from the
                                // actual settlement ledger — exact, accounts for early exits
                                // and the listener service fee.  Use these when available.
                                if (s.listener_net_amount != null && s.listener_service_fee != null) {
                                  const leanOnExtra  = s.listener_service_fee  // beyond ₹10 flat
                                  const leanOnEarned = platformFee + leanOnExtra  // LeanOn total
                                  const listenerNet  = s.listener_net_amount
                                  const refund = Math.max(0, s.amount_held - leanOnEarned - listenerNet)
                                  const isEarlyExit = refund > 0
                                  // NRI: listener_rate_per_min is set for ALL non-free sessions
                                  // (migration 054), but NRI is only when the flat NRI price
                                  // exceeds what rate × duration would cost (India price).
                                  const isNri = !!s.listener_rate_per_min &&
                                    s.listener_rate_per_min * s.duration_mins < s.amount_held - platformFee

                                  // For NRI sessions: break out the service fee from the NRI margin, using
                                  // the rate locked when the session started (same rule as settleSession).
                                  const feeRate = serviceFeeRateAt(s.started_at ?? s.ended_at)
                                  const listenerRawShare = isNri ? Math.round(listenerNet / (1 - feeRate)) : 0
                                  const nriSvcFee   = isNri ? Math.round(listenerRawShare * feeRate) : 0
                                  const nriMargin   = isNri ? leanOnExtra - nriSvcFee : 0

                                  const tooltip = isNri
                                    ? [
                                        `NRI session · Seeker held ₹${s.amount_held}`,
                                        `Listener ₹${listenerNet} (rate ₹${s.listener_rate_per_min}/min × ${Math.round((1 - feeRate) * 100)}%)`,
                                        `Svc fee ₹${nriSvcFee} · NRI margin ₹${nriMargin} · Flat ₹${platformFee}`,
                                        `LeanOn total ₹${leanOnEarned}`,
                                        isEarlyExit ? `Refund ₹${refund}` : null,
                                      ].filter(Boolean).join(' | ')
                                    : [
                                        `Seeker held ₹${s.amount_held}`,
                                        `Listener earned ₹${listenerNet}`,
                                        leanOnExtra > 0 ? `Service fee ₹${leanOnExtra}` : null,
                                        `Platform fee ₹${platformFee}`,
                                        `LeanOn total ₹${leanOnEarned}`,
                                        isEarlyExit ? `Refund ₹${refund}` : null,
                                      ].filter(Boolean).join(' · ')

                                  return (
                                    <span title={tooltip}>
                                      {isNri && <span style={{ fontSize: 9, background: '#E8F4FF', color: '#0066CC', borderRadius: 3, padding: '1px 4px', marginRight: 4, fontWeight: 800 }}>NRI</span>}
                                      ₹{listenerNet}
                                      <span style={{ fontSize: 10, color: 'var(--green)', marginLeft: 3 }}>+₹{leanOnEarned}</span>
                                      {isEarlyExit && <span style={{ fontSize: 10, color: 'var(--orange)', marginLeft: 3 }}>↩₹{refund}</span>}
                                    </span>
                                  )
                                }

                                // ── Legacy / unsettled path ──────────────────────────────────
                                // No listener_earnings row: active session, cancelled session,
                                // or completed before 2026-09-14 without an earnings row.

                                // Cancelled: seeker is fully refunded — nothing was earned.
                                if (s.status === 'cancelled') {
                                  return (
                                    <span title={`Cancelled — seeker refunded ₹${s.amount_held}`} style={{ color: 'var(--gray)' }}>
                                      ₹0
                                    </span>
                                  )
                                }

                                // Active sessions: project earnings with the current service fee
                                // (same rate applied at settlement by settleSession()).
                                // Show with ~ prefix so it's clear this is a live estimate.
                                // NRI: rawShare = listener's India rate × booked mins (NOT amount_held − ₹10),
                                // because amount_held includes the NRI USD margin that goes to LeanOn, not the listener.
                                if (s.status === 'active') {
                                  const isNriActive = !!s.listener_rate_per_min &&
                                    s.listener_rate_per_min * s.duration_mins < s.amount_held - platformFee
                                  const rawShare   = isNriActive
                                    ? s.listener_rate_per_min! * s.duration_mins
                                    : s.amount_held - platformFee
                                  const activeFeeRate = serviceFeeRateAt(s.started_at)
                                  const serviceFee = Math.round(rawShare * activeFeeRate)
                                  const listenerNet  = rawShare - serviceFee
                                  const nriMargin  = isNriActive ? (s.amount_held - platformFee - rawShare) : 0
                                  const platformTotal = platformFee + serviceFee + nriMargin
                                  return (
                                    <span title={`Seeker held ₹${s.amount_held} · Projected listener ₹${listenerNet} (${Math.round(activeFeeRate * 100)}% svc fee ₹${serviceFee})${isNriActive ? ` · NRI margin ₹${nriMargin}` : ''} · LeanOn ~₹${platformTotal}`}>
                                      ~₹{listenerNet}
                                      <span style={{ fontSize: 10, color: 'var(--green)', marginLeft: 3 }}>+₹{platformTotal}</span>
                                    </span>
                                  )
                                }

                                // Completed/expired with no listener_earnings row: session
                                // was settled before the 2026-09-14 fee deploy — listener
                                // kept the full share. Recompute from timestamps for early exits.
                                let listenerEarning = s.amount_held - platformFee
                                let billedMins = s.duration_mins
                                let isEarlyExit = false
                                if (s.started_at && s.ended_at) {
                                  const elapsedMs = new Date(s.ended_at).getTime() - new Date(s.started_at).getTime()
                                  const actualMins = Math.max(0, Math.ceil(elapsedMs / 60000))
                                  billedMins = Math.min(s.duration_mins, actualMins)
                                  if (billedMins < s.duration_mins && billedMins > 0) {
                                    isEarlyExit = true
                                    listenerEarning = Math.floor((s.amount_held - platformFee) * billedMins / s.duration_mins)
                                  }
                                }
                                const refund = isEarlyExit ? Math.max(0, s.amount_held - listenerEarning - platformFee) : 0
                                return (
                                  <span title={`Seeker held ₹${s.amount_held}${isEarlyExit ? ` · ${billedMins}/${s.duration_mins} min used · Listener earned ₹${listenerEarning} · Refund ₹${refund}` : ` · Listener earned ₹${listenerEarning}`} · Platform fee ₹${platformFee}`}>
                                    ₹{listenerEarning}
                                    {platformFee > 0 && <span style={{ fontSize: 10, color: 'var(--gray)', marginLeft: 3 }}>+₹{platformFee}</span>}
                                    {isEarlyExit && <span style={{ fontSize: 10, color: 'var(--orange)', marginLeft: 3 }}>↩₹{refund}</span>}
                                  </span>
                                )
                              })()
                          }
                        </td>
                        <td>
                          {s.crisis_flagged && <span className="badge badge-red" style={{ marginRight: 4 }}>⚠️ Crisis</span>}
                          {s.status === 'active'
                            ? <span className="badge badge-teal">Active</span>
                            : s.status === 'completed'
                              ? <span className="badge badge-green">Completed</span>
                              : <span className="badge badge-gray">{s.status}</span>}
                          {unsettledIds.has(s.id) && (
                            <div style={{ marginTop: 4 }}>
                              <button
                                className="btn btn-orange"
                                style={{ padding: '3px 10px', fontSize: 11 }}
                                disabled={fixingSettlement === s.id}
                                title="Listener was never credited — click to rerun settlement"
                                onClick={async () => {
                                  setFixingSettlement(s.id)
                                  const res = await fetch('/api/admin/sessions/rerun-settlement', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json', ...adminHeaders() },
                                    body: JSON.stringify({ sessionId: s.id }),
                                  }).catch(() => null)
                                  const json = res ? await res.json().catch(() => ({})) : {}
                                  setFixingSettlement(null)
                                  if (res?.ok) {
                                    showToast(json.already_settled
                                      ? `Already settled: ${json.message}`
                                      : `✅ ₹${json.listenerEarning} credited to listener`)
                                    setUnsettledIds(prev => { const n = new Set(prev); n.delete(s.id); return n })
                                  } else {
                                    showToast(`Failed: ${json.error || 'unknown error'}`)
                                  }
                                }}
                              >
                                {fixingSettlement === s.id ? '…' : '⚠️ Fix settlement'}
                              </button>
                            </div>
                          )}
                        </td>
                        {isPrimaryAdmin && (
                          <td>
                            <button className="btn btn-gray" style={{ padding: '4px 12px', fontSize: 12 }} onClick={() => loadTranscript(s)}>
                              View
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {sessionsTotal > SESSION_PAGE_SIZE && (
                <div className="pagination">
                  <button
                    className="btn btn-gray"
                    disabled={sessionsPage === 0}
                    onClick={() => { const p = sessionsPage - 1; setSessionsPage(p); loadSessions(sessionsStatus, sessionsSort, p, sessionsSortBy, sessionsSearch) }}
                  >← Prev</button>
                  <span>
                    {sessionsPage * SESSION_PAGE_SIZE + 1}–{Math.min((sessionsPage + 1) * SESSION_PAGE_SIZE, sessionsTotal)} of {sessionsTotal}
                  </span>
                  <button
                    className="btn btn-gray"
                    disabled={(sessionsPage + 1) * SESSION_PAGE_SIZE >= sessionsTotal}
                    onClick={() => { const p = sessionsPage + 1; setSessionsPage(p); loadSessions(sessionsStatus, sessionsSort, p, sessionsSortBy, sessionsSearch) }}
                  >Next →</button>
                </div>
              )}
              </>
            )}
          </>
        )}

        {/* ─── TRANSCRIPT VIEWER — primary admin only ─────────────────────────
            Reads every message of the selected session verbatim. See
            /api/admin/session-messages for why this is gated so narrowly. */}
        {transcriptSession && (
          <div className="modal-overlay" onClick={() => setTranscriptSession(null)}>
            <div className="modal-card transcript-card" onClick={e => e.stopPropagation()}>
              <div className="card-header">
                <div>
                  <div className="name-text">
                    {transcriptSession.seeker?.name || 'Seeker'} ↔ {transcriptSession.listener?.name || 'Listener'}
                  </div>
                  <div className="meta-text">
                    {fmtDateTime(transcriptSession.created_at)} · {(() => {
                      if (transcriptSession.started_at && transcriptSession.ended_at) {
                        const elapsedMs = new Date(transcriptSession.ended_at).getTime() - new Date(transcriptSession.started_at).getTime()
                        const billed = Math.min(transcriptSession.duration_mins, Math.max(0, Math.ceil(elapsedMs / 60000)))
                        if (billed < transcriptSession.duration_mins) return `${billed}/${transcriptSession.duration_mins}`
                      }
                      return transcriptSession.duration_mins
                    })()} min {transcriptSession.session_type}
                    {transcriptSession.is_free_trial ? ' · Free trial' : (() => {
                      const pFee = transcriptSession.platform_fee ?? 0
                      const extra = transcriptSession.listener_service_fee ?? 0
                      const listenerNet = transcriptSession.listener_net_amount != null
                        ? transcriptSession.listener_net_amount
                        : transcriptSession.amount_held - pFee - extra
                      const leanOn = pFee + extra
                      const isNri = !!transcriptSession.listener_rate_per_min &&
                        transcriptSession.listener_rate_per_min * transcriptSession.duration_mins < transcriptSession.amount_held - pFee
                      if (isNri) {
                        const feeRate = serviceFeeRateAt(transcriptSession.started_at ?? transcriptSession.ended_at)
                        const rawShare = Math.round(listenerNet / (1 - feeRate))
                        const nriSvcFee = Math.round(rawShare * feeRate)
                        const nriMargin = extra - nriSvcFee
                        return ` · NRI ₹${transcriptSession.amount_held} · Listener ₹${listenerNet} + LeanOn ₹${leanOn} (₹${pFee} flat+₹${nriSvcFee} fee+₹${nriMargin} margin)`
                      }
                      return ` · ₹${listenerNet} listener + ₹${leanOn} LeanOn${extra > 0 ? ` (₹${pFee}+₹${extra})` : ''}`
                    })()}
                  </div>
                </div>
                <button className="btn btn-gray" style={{ padding: '4px 12px', fontSize: 12 }} onClick={() => setTranscriptSession(null)}>Close</button>
              </div>
              {transcriptLoading ? (
                <div className="skeleton" style={{ height: 120 }} />
              ) : transcriptMsgs.length === 0 ? (
                <div className="empty">No messages in this session.</div>
              ) : (
                <div className="transcript-list">
                  {transcriptMsgs.map(m => {
                    const isSeeker = m.sender_id === transcriptSession.seeker_id
                    return (
                      <div key={m.id} className={`transcript-msg${isSeeker ? ' seeker' : ' listener'}`}>
                        <div className="transcript-msg-meta">
                          {isSeeker ? (transcriptSession.seeker?.name || 'Seeker') : (transcriptSession.listener?.name || 'Listener')}
                          {' · '}{fmtDateTime(m.created_at)}
                          {m.is_flagged && <span className="badge badge-red" style={{ marginLeft: 6 }}>flagged</span>}
                        </div>
                        <div className="transcript-msg-text">{m.content}</div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
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
                      From: <strong>{r.reporter?.name || '—'}</strong>
                      {(r.reporter?.phone || r.reporter?.email) && (
                        <span style={{ fontWeight: 400 }}> ({r.reporter.phone || r.reporter.email})</span>
                      )}
                      {' · '}Against: <strong>{r.target?.name || 'unknown'}</strong>
                      {(r.target?.phone || r.target?.email) && (
                        <span style={{ fontWeight: 400 }}> ({r.target.phone || r.target.email})</span>
                      )}
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
            {rzpxEnabled ? (
              <div style={{ background: '#EDFAF3', border: '1.5px solid #A7E3C4', borderRadius: 12, padding: '12px 16px', marginBottom: 16, fontSize: 13, fontWeight: 600, color: '#14532D', lineHeight: 1.6 }}>
                <strong>⚡ RazorpayX automated payouts active:</strong> clicking <strong>Pay via UPI</strong> transfers the money to the listener&apos;s UPI id directly from your RazorpayX balance and marks the request paid. Keep the RazorpayX balance topped up — low-balance payouts queue until the next top-up.
              </div>
            ) : (
              <div style={{ background: '#FFF8E7', border: '1.5px solid #FFD580', borderRadius: 12, padding: '12px 16px', marginBottom: 16, fontSize: 13, fontWeight: 600, color: '#7A5000', lineHeight: 1.6 }}>
                <strong>Manual payout process:</strong> Payouts are NOT processed automatically. Transfer funds via UPI/NEFT to the UPI id shown on each request, then click <strong>Mark Paid</strong> to update the internal ledger. (To automate: activate RazorpayX and set <code>RAZORPAYX_ACCOUNT_NUMBER</code> in Vercel.)
              </div>
            )}
            {kpis && payouts.length > 0 && (
              <div style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 12, padding: '12px 18px', marginBottom: 16, display: 'flex', gap: 32 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Total Pending</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--orange)' }}>{fmtRs(kpis.payouts.pendingAmountRupees)}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Total Paid Out</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--navy)' }}>{fmtRs(kpis.payouts.totalPaidRupees)}</div>
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
              <div key={p.id} style={{ background: 'white', border: `1.5px solid ${p.bank?.account_holder_name ? 'var(--border)' : '#FFD9A0'}`, borderRadius: 16, padding: '16px 20px', marginBottom: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  {/* Listener display name + phone + date */}
                  <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--navy)' }}>{p.users?.name || '—'}
                    <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--gray)', marginLeft: 8 }}>(display name)</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--gray)', fontWeight: 600, marginTop: 2 }}>
                    {p.users?.phone ? <span style={{ marginRight: 8 }}>Phone: {p.users.phone}</span> : null}
                    {p.users?.email ? <span style={{ marginRight: 8 }}>{p.users.email}</span> : null}
                    {p.created_at ? <span>Requested {fmtDate(p.created_at)}</span> : null}
                  </div>

                  {/* Account holder name — the legal name on the bank account */}
                  <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    {p.bank?.account_holder_name ? (
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#1A5F1A', background: '#E8F8E8', border: '1px solid #B2DEB2', borderRadius: 8, padding: '4px 10px' }}>
                        A/C Holder: {p.bank.account_holder_name}
                      </div>
                    ) : (
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#7A5C00', background: '#FFF8F0', border: '1px solid #FFD9A0', borderRadius: 8, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
                        ⚠️ Account holder name missing
                        {editingPayoutHolderNameId === p.id ? (
                          <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                            <input className="search-input" style={{ minWidth: 160, padding: '3px 8px', fontSize: 12 }} placeholder="Legal name on bank account" value={payoutHolderNameValue} onChange={e => setPayoutHolderNameValue(e.target.value)} autoFocus />
                            <button style={{ fontSize: 11, fontWeight: 800, color: 'white', background: 'var(--teal)', border: 'none', borderRadius: 6, padding: '3px 10px', cursor: 'pointer' }} disabled={!payoutHolderNameValue.trim()} onClick={() => {
                              const n = payoutHolderNameValue.trim()
                              setEditingPayoutHolderNameId(null)
                              setPayoutHolderNameValue('')
                              fetch('/api/admin/users', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: p.user_id, action: 'update_bank_details', account_holder_name: n }) })
                                .then(r => r.json()).then(j => { if (j.ok) { setPayouts(prev => prev.map(x => x.id === p.id ? { ...x, bank: { ...x.bank, account_holder_name: n } } : x)); setToast('Saved.') } else setToast(j.error || 'Failed') })
                            }}>Save</button>
                            <button style={{ fontSize: 11, fontWeight: 800, color: 'var(--gray)', background: 'transparent', border: '1px solid var(--border)', borderRadius: 6, padding: '3px 8px', cursor: 'pointer' }} onClick={() => { setEditingPayoutHolderNameId(null); setPayoutHolderNameValue('') }}>Cancel</button>
                          </span>
                        ) : (
                          <button
                            style={{ fontSize: 11, fontWeight: 800, color: 'var(--teal)', background: 'transparent', border: '1px solid var(--teal)', borderRadius: 6, padding: '1px 8px', cursor: 'pointer' }}
                            onClick={() => { setPayoutHolderNameValue(''); setEditingPayoutHolderNameId(p.id) }}
                          >+ Add name</button>
                        )}
                      </div>
                    )}
                  </div>

                  {(() => {
                    // Payment destination: a real VPA gets the UPI deep link; a
                    // "bank:IFSC/ACCT" marker (listener without UPI) renders as a
                    // labeled bank row. Application bank details show as a
                    // fallback/secondary row so the admin never has to hunt.
                    const isVpa = !!p.upi_id && p.upi_id.includes('@')
                    const bankMarker = p.upi_id?.startsWith('bank:')
                      ? p.upi_id.slice(5) // "IFSC/ACCOUNT"
                      : null
                    const [markerIfsc, markerAcct] = bankMarker ? bankMarker.split('/') : [null, null]
                    const acct = p.bank?.bank_account ?? markerAcct ?? null
                    const ifsc = p.bank?.ifsc_code ?? markerIfsc ?? null
                    const pill: React.CSSProperties = { userSelect: 'all', background: '#F0F8FC', padding: '2px 8px', borderRadius: 6 }
                    return (
                      <>
                        {isVpa && (
                          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--teal)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                            UPI: <span style={pill}>{p.upi_id}</span>
                            {!rzpxEnabled && (
                              <a
                                href={`upi://pay?pa=${encodeURIComponent(p.upi_id!)}&pn=${encodeURIComponent(p.bank?.account_holder_name || p.users?.name || 'LeanOn Listener')}&am=${encodeURIComponent(String(p.amount))}&cu=INR&tn=${encodeURIComponent('LeanOn listener payout')}`}
                                style={{ background: 'var(--teal)', color: 'white', padding: '3px 12px', borderRadius: 20, fontSize: 12, fontWeight: 800, textDecoration: 'none' }}
                              >
                                📲 Pay in UPI app
                              </a>
                            )}
                          </div>
                        )}
                        {acct && ifsc && (
                          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                            🏦 A/C: <span style={pill}>{acct}</span>
                            IFSC: <span style={pill}>{ifsc}</span>
                            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--gray)' }}>transfer via your bank app (IMPS/NEFT), then Mark Paid</span>
                          </div>
                        )}
                        {!isVpa && !(acct && ifsc) && (
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#C0392B', marginTop: 4 }}>
                            ⚠️ No payout method on file — check their listener application or contact them for UPI/bank details.
                          </div>
                        )}
                      </>
                    )
                  })()}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--navy)' }}>₹{p.amount}</div>
                  <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-teal" disabled={busy !== null} onClick={() => adminAction('complete_payout', p.id, rzpxEnabled && p.upi_id ? `₹${p.amount} sent via RazorpayX` : `Marked ₹${p.amount} payout complete`)}>
                    {busy === `complete_payout:${p.id}` ? 'Sending…' : rzpxEnabled && p.upi_id ? '⚡ Pay via UPI' : 'Mark Paid'}
                  </button>
                  {confirmRejectPayoutId === p.id ? (
                    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                      <input className="search-input" style={{ minWidth: 180, padding: '3px 8px', fontSize: 12 }} placeholder="Reason (shown to listener)" value={rejectPayoutReason} onChange={e => setRejectPayoutReason(e.target.value)} autoFocus />
                      <span style={{ display: 'inline-flex', gap: 4 }}>
                        <button className="btn btn-red" style={{ fontSize: 11, padding: '4px 8px' }} disabled={busy !== null} onClick={() => { const r = rejectPayoutReason; setConfirmRejectPayoutId(null); setRejectPayoutReason(''); adminAction('reject_payout', p.id, `Rejected ₹${p.amount} payout — balance returned`, r || undefined) }}>Confirm Reject</button>
                        <button className="btn btn-gray" style={{ fontSize: 11, padding: '4px 8px' }} onClick={() => { setConfirmRejectPayoutId(null); setRejectPayoutReason('') }}>Cancel</button>
                      </span>
                    </span>
                  ) : (
                    <button
                      className="btn btn-red"
                      disabled={busy !== null}
                      onClick={() => { setRejectPayoutReason(''); setConfirmRejectPayoutId(p.id) }}
                    >
                      {busy === `reject_payout:${p.id}` ? 'Saving…' : 'Reject'}
                    </button>
                  )}
                  </div>
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
                  {r.razorpay_payment_id ? (
                    <div style={{ fontSize: 11, color: 'var(--teal)', marginTop: 4, fontWeight: 700 }}>
                      Razorpay Payment: <span style={{ fontFamily: 'monospace' }}>{r.razorpay_payment_id}</span>
                      <span style={{ marginLeft: 6, color: 'var(--green)' }}>● Auto-refund will trigger on "Mark Processed"</span>
                    </div>
                  ) : (
                    <div style={{ fontSize: 11, color: 'var(--orange)', marginTop: 4, fontWeight: 700 }}>
                      ⚠ No payment ID — issue refund manually in Razorpay dashboard
                    </div>
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

        {/* ─── COMPLETED PAYOUTS (inside payouts tab) ──────────────────────── */}
        {tab === 'payouts' && completedPayouts.length > 0 && (
          <>
            <div className="section-title" style={{ marginTop: 28 }}>
              Past Payments
              <span className="count-badge">{completedPayouts.length}</span>
            </div>
            <div style={{ background: 'white', border: '1.5px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'var(--light)' }}>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 800, color: 'var(--navy)', fontSize: 11 }}>Name</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 800, color: 'var(--navy)', fontSize: 11 }}>Phone</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', fontWeight: 800, color: 'var(--navy)', fontSize: 11 }}>Amount</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 800, color: 'var(--navy)', fontSize: 11 }}>Requested</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 800, color: 'var(--navy)', fontSize: 11 }}>Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {completedPayouts.map(cp => (
                    <tr key={cp.id} style={{ borderTop: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700, color: 'var(--navy)' }}>{cp.name || '—'}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--gray)', fontWeight: 600, fontFamily: 'monospace', fontSize: 12 }}>{cp.phone || '—'}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'right', fontWeight: 800, color: 'var(--navy)' }}>₹{fmt(cp.amount)}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--gray)', fontWeight: 600, fontSize: 12 }}>{fmtDateTime(cp.created_at)}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--green)', fontWeight: 700, fontSize: 12 }}>{fmtDateTime(cp.processed_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              {(['pending', 'approved', 'rejected', 'needs_resubmission'] as const).map(s => (
                <button
                  key={s}
                  className={`filter-btn${verifsStatus === s ? ' active' : ''}`}
                  onClick={() => { setVerifsStatus(s); loadVerifs(s) }}
                >
                  {s === 'needs_resubmission' ? 'Needs Resubmission' : s.charAt(0).toUpperCase() + s.slice(1)}
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

        {tab === 'quality' && (
          <>
            <div className="section-title" style={{justifyContent:'space-between',flexWrap:'wrap'}}>
              <span>Quality</span>
              <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                {(['today','7d','30d','90d','all'] as const).map(w => <button key={w} className={`filter-btn${qualityWindow===w?' active':''}`} onClick={()=>{setQualityWindow(w);loadQuality(w)}}>{w==='today'?'Today':w==='7d'?'7 days':w==='30d'?'30 days':w==='90d'?'90 days':'All time'}</button>)}
                <button className="btn btn-teal" onClick={()=>loadQuality(qualityWindow)}>↻ Refresh</button>
              </div>
            </div>
            {qualityLoading ? <div className="kpi-grid">{Array.from({length:8}).map((_,i)=><div key={i} className="skeleton" style={{height:90}} />)}</div> : qualitySummary ? <>
              <p style={{fontSize:12,color:'var(--gray)',fontWeight:700,marginBottom:16}}>Quality for {qualityWindow==='today'?'today':qualityWindow==='7d'?'the last 7 days':qualityWindow==='30d'?'the last 30 days':qualityWindow==='90d'?'the last 90 days':'all time'}. Cohort rates only include matured cohorts.</p>
              <div className="section-title" style={{fontSize:15}}>Customer outcome</div>
              <div className="kpi-grid" style={{marginBottom:24}}>
                <div className="kpi-card"><div className="kpi-label">Trial → Paid · 7d</div><div className="kpi-value">{qualitySummary.trial_to_paid_7d.pct==null?'—':`${qualitySummary.trial_to_paid_7d.pct}%`}</div><div className="kpi-sub">{qualitySummary.trial_to_paid_7d.converted}/{qualitySummary.trial_to_paid_7d.eligible} matured trials</div></div>
                <div className="kpi-card"><div className="kpi-label">Trial → Paid · 24h</div><div className="kpi-value">{qualitySummary.trial_to_paid_24h.pct==null?'—':`${qualitySummary.trial_to_paid_24h.pct}%`}</div><div className="kpi-sub">{qualitySummary.trial_to_paid_24h.converted}/{qualitySummary.trial_to_paid_24h.eligible} matured trials</div></div>
                <div className="kpi-card"><div className="kpi-label">Paid → 2nd Paid · 7d</div><div className="kpi-value">{qualitySummary.paid_to_second_7d.pct==null?'—':`${qualitySummary.paid_to_second_7d.pct}%`}</div><div className="kpi-sub">{qualitySummary.paid_to_second_7d.converted}/{qualitySummary.paid_to_second_7d.eligible} matured</div></div>
                <div className="kpi-card"><div className="kpi-label">Paid → 2nd Paid · 30d</div><div className="kpi-value">{qualitySummary.paid_to_second_30d.pct==null?'—':`${qualitySummary.paid_to_second_30d.pct}%`}</div><div className="kpi-sub">{qualitySummary.paid_to_second_30d.converted}/{qualitySummary.paid_to_second_30d.eligible} matured</div></div>
                <div className="kpi-card"><div className="kpi-label">1 paid session</div><div className="kpi-value">{fmt(qualitySummary.one_paid_seekers)}</div></div>
                <div className="kpi-card"><div className="kpi-label">2+ paid sessions</div><div className="kpi-value">{fmt(qualitySummary.two_plus_paid_seekers)}</div></div>
                <div className="kpi-card"><div className="kpi-label">3+ paid sessions</div><div className="kpi-value">{fmt(qualitySummary.three_plus_paid_seekers)}</div><div className="kpi-sub">{qualitySummary.three_plus_rate_pct==null?'—':`${qualitySummary.three_plus_rate_pct}% of paid seekers`}</div></div>
                <div className="kpi-card"><div className="kpi-label">5+ paid sessions</div><div className="kpi-value">{fmt(qualitySummary.five_plus_paid_seekers)}</div></div>
              </div>
              <div className="section-title" style={{fontSize:15}}>Listener quality</div>
              <div className="table-wrap" style={{marginBottom:28}}><table><thead><tr><th>Listener</th><th>Paid</th><th>Unique seekers</th><th>2nd-session %</th><th>3+ seekers</th><th>Rating</th><th>Rated</th><th>Reports / 100</th><th>Refunds / 100</th><th>Blocks / 100</th><th>Short voice</th><th>Avg duration</th><th>Earnings</th></tr></thead><tbody>
                {qualityListeners.map(l=><tr key={l.listener_id}><td style={{fontWeight:800}}>{l.name}</td><td>{l.paid_sessions}</td><td>{l.unique_paid_seekers}</td><td>{l.second_session_pct==null?'—':`${l.second_session_pct}%`}</td><td>{l.three_plus_seekers}</td><td>{l.rating==null?'—':`${l.rating} ⭐`}</td><td>{l.rating_count==null?'—':l.rating_count}</td><td>{l.paid_sessions?l.reports_per_100:'—'}</td><td>{l.paid_sessions?l.refunds_per_100:'—'}</td><td>{l.paid_sessions?l.blocks_per_100:'—'}</td><td>{l.paid_sessions?`${l.short_voice_pct??0}%`:'—'}</td><td>{l.avg_duration_mins==null?'—':`${l.avg_duration_mins} min`}</td><td>₹{fmt(l.earnings)}</td></tr>)}
                {qualityListeners.length===0&&<tr><td colSpan={13} className="empty">No completed paid-session listener data in this window.</td></tr>}
              </tbody></table></div>
              <div className="section-title" style={{fontSize:15}}>Session quality</div>
              <div className="kpi-grid" style={{marginBottom:24}}>
                <div className="kpi-card"><div className="kpi-label">Completion rate</div><div className="kpi-value">{qualitySummary.completion_rate_pct==null?'—':`${qualitySummary.completion_rate_pct}%`}</div><div className="kpi-sub">Completed / terminal</div></div>
                <div className="kpi-card"><div className="kpi-label">Short voice sessions</div><div className="kpi-value">{qualitySummary.short_voice_pct==null?'—':`${qualitySummary.short_voice_pct}%`}</div><div className="kpi-sub">{qualitySummary.short_voice_sessions} under 2 min; missing telemetry excluded</div></div>
                <div className="kpi-card"><div className="kpi-label">Sessions rated</div><div className="kpi-value">{qualitySummary.sessions_rated_pct==null?'—':`${qualitySummary.sessions_rated_pct}%`}</div><div className="kpi-sub">{qualitySummary.rating_count==null?'Rating history unavailable':`${qualitySummary.rating_count} ratings`}</div></div>
                <div className="kpi-card"><div className="kpi-label">Average rating</div><div className="kpi-value">{qualitySummary.avg_rating==null?'—':`${qualitySummary.avg_rating} ⭐`}</div><div className="kpi-sub">5-star {qualitySummary.five_star_pct==null?'—':`${qualitySummary.five_star_pct}%`} · 1–2 star {qualitySummary.low_rating_pct==null?'—':`${qualitySummary.low_rating_pct}%`}</div></div>
                <div className="kpi-card"><div className="kpi-label">Refund rate</div><div className="kpi-value">{qualitySummary.refund_rate_pct}%</div><div className="kpi-sub">{qualitySummary.refund_requests} requests · ₹{fmt(qualitySummary.refund_amount)}</div></div>
                <div className="kpi-card"><div className="kpi-label">Reports / 1K</div><div className="kpi-value">{qualitySummary.report_rate_per_1000}</div><div className="kpi-sub">{qualitySummary.report_count} reports</div></div>
                <div className="kpi-card"><div className="kpi-label">Blocks / 100</div><div className="kpi-value">{qualitySummary.block_rate_per_100_sessions}</div><div className="kpi-sub">{qualitySummary.block_count} blocks</div></div>
                <div className="kpi-card"><div className="kpi-label">Crisis flags</div><div className="kpi-value">{qualitySummary.crisis_flags}</div></div>
              </div>
              <div className="section-title" style={{fontSize:15}}>Marketplace health</div>
              <div className="kpi-grid" style={{marginBottom:24}}>
                <div className="kpi-card"><div className="kpi-label">Paid sessions</div><div className="kpi-value">{fmt(qualitySummary.paid_sessions)}</div><div className="kpi-sub">{fmt(qualitySummary.paid_minutes)} paid minutes</div></div>
                <div className="kpi-card"><div className="kpi-label">Listeners taking sessions</div><div className="kpi-value">{fmt(qualitySummary.listeners_taking_sessions)}</div><div className="kpi-sub">Online now: {fmt(qualitySummary.online_listeners_now)}</div></div>
                <div className="kpi-card"><div className="kpi-label">Top listener concentration</div><div className="kpi-value">{qualitySummary.top_listener_concentration_pct==null?'—':`${qualitySummary.top_listener_concentration_pct}%`}</div><div className="kpi-sub">Share from #1 listener</div></div>
                <div className="kpi-card"><div className="kpi-label">Failed starts</div><div className="kpi-value">{fmt(qualitySummary.failed_starts)}</div></div>
                <div className="kpi-card"><div className="kpi-label">Unmatched sessions</div><div className="kpi-value">{fmt(qualitySummary.unmatched_sessions)}</div></div>
                <div className="kpi-card"><div className="kpi-label">Voice / text</div><div className="kpi-value">{fmt(qualitySummary.voice_paid_sessions)} / {fmt(qualitySummary.text_paid_sessions)}</div></div>
                <div className="kpi-card"><div className="kpi-label">Avg duration</div><div className="kpi-value">{qualitySummary.avg_session_duration_mins==null?'—':`${qualitySummary.avg_session_duration_mins} min`}</div></div>
                <div className="kpi-card"><div className="kpi-label">Missing telemetry</div><div className="kpi-value">{fmt(qualitySummary.missing_duration_telemetry)}</div><div className="kpi-sub">Never treated as silent</div></div>
              </div>
              {qualityPairs.length>0&&<><div className="section-title" style={{fontSize:15}}>Repeat seeker–listener relationships</div><div className="table-wrap"><table><thead><tr><th>Seeker</th><th>Listener</th><th>Paid sessions together</th></tr></thead><tbody>{qualityPairs.map((p,i)=><tr key={i}><td>{p.seeker_name}</td><td style={{fontWeight:800}}>{p.listener_name}</td><td>{p.count}</td></tr>)}</tbody></table></div></>}
            </> : <div className="empty">No quality data available.</div>}
          </>
        )}


      </div>

      {toast && <div className="toast">{toast}</div>}

      {/* Delete Account confirmation modal */}
      {confirmDeleteUserId && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: 20 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: '28px 24px', maxWidth: 400, width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#B71C1C', marginBottom: 8 }}>Permanently delete this account?</h3>
            <p style={{ fontSize: 13, color: '#5A7A8A', fontWeight: 600, lineHeight: 1.6, marginBottom: 6 }}>
              All personal data (name, phone, bank details, aadhaar, selfie, ID docs) will be permanently erased. Phone number will be replaced with a DELETE + last 5 digits stub for audit trail. Sessions and financial records stay but are anonymized.
            </p>
            <p style={{ fontSize: 12, color: '#B71C1C', fontWeight: 700, marginBottom: 16 }}>
              This cannot be undone.
            </p>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0F4867', marginBottom: 10 }}>
              Type <strong>DELETE</strong> to confirm
            </p>
            <input
              style={{ width: '100%', padding: '10px 14px', border: '2px solid #D5EEF6', borderRadius: 10, fontSize: 16, fontWeight: 700, textAlign: 'center', fontFamily: "'Nunito', sans-serif", letterSpacing: 2 }}
              value={deleteConfirmInput}
              onChange={e => setDeleteConfirmInput(e.target.value.toUpperCase())}
              placeholder="DELETE"
              autoFocus
            />
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button
                style={{ flex: 1, padding: '12px 0', background: deleteConfirmInput === 'DELETE' ? '#B71C1C' : '#ccc', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 800, cursor: deleteConfirmInput === 'DELETE' ? 'pointer' : 'not-allowed', fontFamily: "'Nunito', sans-serif" }}
                onClick={() => adminDeleteAccount(confirmDeleteUserId)}
                disabled={deletingUser || deleteConfirmInput !== 'DELETE'}
              >
                {deletingUser ? 'Deleting...' : 'Permanently delete'}
              </button>
              <button
                style={{ flex: 1, padding: '12px 0', background: 'white', color: '#0F4867', border: '2px solid #D5EEF6', borderRadius: 12, fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: "'Nunito', sans-serif" }}
                onClick={() => { setConfirmDeleteUserId(null); setDeleteConfirmInput('') }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
