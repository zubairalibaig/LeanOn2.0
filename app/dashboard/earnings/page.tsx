'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Earning = {
  id:          string
  session_id:  string | null
  gross_amount: number
  platform_fee: number
  net_amount:  number
  status:      string
  settled_at:  string
  created_at:  string
}

type PayoutRequest = {
  id:          string
  amount:      number
  status:      string
  upi_id:      string | null
  requested_at: string
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;background:#F0F8FC;-webkit-font-smoothing:antialiased;}
  .page{max-width:480px;margin:0 auto;padding:20px 20px 80px;}
  .topbar{display:flex;align-items:center;gap:12px;padding:0 0 20px;}
  .back{width:40px;height:40px;border-radius:12px;background:white;border:1.5px solid #D5EEF6;cursor:pointer;font-size:18px;color:#0F4867;display:flex;align-items:center;justify-content:center;}
  h1{font-size:22px;font-weight:900;}
  .stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .stat-card{background:white;border:1.5px solid #D5EEF6;border-radius:18px;padding:18px;}
  .stat-card.accent{background:#0F4867;border-color:#0F4867;}
  .stat-label{font-size:11px;font-weight:700;color:#5A7A8A;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;}
  .stat-card.accent .stat-label{color:rgba(201,231,244,.7);}
  .stat-value{font-size:24px;font-weight:900;color:#0F4867;}
  .stat-card.accent .stat-value{color:white;}
  .section-title{font-size:16px;font-weight:800;color:#0F4867;margin-bottom:12px;padding-bottom:10px;border-bottom:2px solid #D5EEF6;}
  .earning-row{background:white;border:1.5px solid #D5EEF6;border-radius:14px;padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;}
  .earning-date{font-size:12px;color:#5A7A8A;font-weight:600;margin-bottom:3px;}
  .earning-label{font-size:13px;font-weight:700;color:#0F4867;}
  .earning-net{font-size:18px;font-weight:900;color:#0F4867;}
  .earning-fee{font-size:11px;color:#5A7A8A;font-weight:600;text-align:right;}
  .empty{text-align:center;padding:32px;color:#5A7A8A;font-size:14px;font-weight:600;}
  .btn-payout{width:100%;padding:15px;background:#FF9933;color:white;border:none;border-radius:14px;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;cursor:pointer;margin-bottom:24px;}
  .btn-payout:disabled{background:#ccc;cursor:not-allowed;}
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:100;display:flex;align-items:flex-end;justify-content:center;}
  .modal{background:white;border-radius:20px 20px 0 0;padding:24px 20px;width:100%;max-width:480px;font-family:'Nunito',sans-serif;}
  .modal h2{font-size:18px;font-weight:900;margin-bottom:16px;}
  .input{width:100%;padding:12px 14px;border:1.5px solid #D5EEF6;border-radius:12px;font-family:'Nunito',sans-serif;font-size:15px;color:#0F4867;outline:none;margin-bottom:14px;}
  .input:focus{border-color:#1A8FA0;}
  .modal-btns{display:flex;gap:10px;}
  .btn-cancel{flex:1;padding:14px;background:white;border:1.5px solid #D5EEF6;border-radius:12px;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;cursor:pointer;color:#0F4867;}
  .btn-submit{flex:1;padding:14px;background:#0F4867;color:white;border:none;border-radius:12px;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;cursor:pointer;}
  .btn-submit:disabled{background:#ccc;cursor:not-allowed;}
  .payout-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700;}
  .badge-pending{background:#FFF3E0;color:#E65100;}
  .badge-completed{background:#E8F5E9;color:#2E7D32;}
  .badge-rejected{background:#FFF0EF;color:#FF3B30;}
  .toast{position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#0F4867;color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:12px 24px;border-radius:50px;z-index:200;}
`

function fmt(paise: number) { return `₹${Math.round(paise / 100 * 10) / 10}` }
function fmtDate(iso: string) { return new Date(iso).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }) }

export default function EarningsPage() {
  const router = useRouter()
  const [earnings, setEarnings]       = useState<Earning[]>([])
  const [payouts,  setPayouts]        = useState<PayoutRequest[]>([])
  const [loading,  setLoading]        = useState(true)
  const [showModal,setShowModal]      = useState(false)
  const [upiId,    setUpiId]          = useState('')
  const [submitting,setSubmitting]    = useState(false)
  const [toast,    setToast]          = useState('')

  const totalNet     = earnings.reduce((s, e) => s + (e.status === 'settled' ? e.net_amount : 0), 0)
  const totalPaid    = payouts.filter(p => p.status === 'completed').reduce((s, p) => s + p.amount, 0)
  const available    = Math.max(0, totalNet - totalPaid)
  const hasPending   = payouts.some(p => p.status === 'pending')

  useEffect(() => {
    async function load() {
      try {
        const { data: { user } } = await sb.auth.getUser()
        if (!user) { router.push('/auth?redirect=/dashboard/earnings'); return }

        const [e, p] = await Promise.all([
          sb.from('listener_earnings').select('*').eq('listener_id', user.id).order('created_at', { ascending: false }).limit(50),
          sb.from('payout_requests').select('id, amount, status, upi_id, created_at').eq('user_id', user.id).order('created_at', { ascending: false }).limit(20),
        ])

        setEarnings((e.data ?? []) as Earning[])
        setPayouts((p.data ?? []).map(r => ({ ...r, requested_at: r.created_at })) as PayoutRequest[])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [router])

  async function requestPayout() {
    if (!upiId.includes('@')) { showToastMsg('Enter a valid UPI ID (must contain @)'); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/payout', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ upi_id: upiId }),
      })
      const json = await res.json()
      if (!res.ok) { showToastMsg(json.error || 'Failed to submit'); return }
      setShowModal(false)
      showToastMsg('Payout request submitted!')
      setPayouts(prev => [{ id: 'new', amount: available, status: 'pending', upi_id: upiId, requested_at: new Date().toISOString() }, ...prev])
    } finally {
      setSubmitting(false)
    }
  }

  function showToastMsg(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  if (loading) return (
    <>
      <style>{S}</style>
      <div className="page"><div className="empty">Loading…</div></div>
    </>
  )

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <button className="back" onClick={() => router.push('/dashboard')}>←</button>
          <h1>My Earnings</h1>
        </div>

        <div className="stats-grid">
          <div className="stat-card accent">
            <div className="stat-label">Available</div>
            <div className="stat-value">{fmt(available)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total earned</div>
            <div className="stat-value">{fmt(totalNet)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Sessions</div>
            <div className="stat-value">{earnings.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total paid out</div>
            <div className="stat-value">{fmt(totalPaid)}</div>
          </div>
        </div>

        <button
          className="btn-payout"
          disabled={available <= 0 || hasPending}
          onClick={() => setShowModal(true)}
        >
          {hasPending ? 'Payout pending…' : available <= 0 ? 'No balance to withdraw' : `Request Payout · ${fmt(available)}`}
        </button>

        <div className="section-title">Earnings history</div>
        {earnings.length === 0 ? (
          <div className="empty">No earnings yet — complete sessions to start earning.</div>
        ) : earnings.map(e => (
          <div key={e.id} className="earning-row">
            <div>
              <div className="earning-date">{fmtDate(e.created_at)}</div>
              <div className="earning-label">Session earning</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="earning-net">{fmt(e.net_amount)}</div>
              <div className="earning-fee">Gross {fmt(e.gross_amount)} · Fee {fmt(e.platform_fee)}</div>
            </div>
          </div>
        ))}

        {payouts.length > 0 && (
          <>
            <div className="section-title" style={{ marginTop: 24 }}>Payout requests</div>
            {payouts.map(p => (
              <div key={p.id} className="earning-row">
                <div>
                  <div className="earning-date">{fmtDate(p.requested_at)}</div>
                  <div className="earning-label">{p.upi_id || 'Payout'}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="earning-net">{fmt(p.amount)}</div>
                  <span className={`payout-badge badge-${p.status === 'completed' ? 'completed' : p.status === 'rejected' ? 'rejected' : 'pending'}`}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setShowModal(false) }}>
          <div className="modal">
            <h2>Request Payout · {fmt(available)}</h2>
            <input
              className="input"
              type="text"
              placeholder="Your UPI ID (e.g. name@upi)"
              value={upiId}
              onChange={e => setUpiId(e.target.value)}
            />
            <p style={{ fontSize: 12, color: '#5A7A8A', marginBottom: 16, fontWeight: 500 }}>
              Payouts are processed manually within 3 business days.
            </p>
            <div className="modal-btns">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              <button
                className="btn-submit"
                disabled={!upiId.includes('@') || submitting}
                onClick={requestPayout}
              >{submitting ? 'Submitting…' : 'Request Payout'}</button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
