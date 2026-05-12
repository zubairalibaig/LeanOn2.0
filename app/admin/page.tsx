'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;background:var(--light);color:var(--navy);-webkit-font-smoothing:antialiased;}
  .page{max-width:760px;margin:0 auto;padding:0 20px 60px;}
  .topbar{padding:24px 0 20px;}
  .topbar h1{font-size:24px;font-weight:900;color:var(--navy);}
  .topbar p{font-size:13px;color:var(--gray);font-weight:600;margin-top:4px;}
  .section{margin-bottom:36px;}
  .section-title{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid var(--border);}
  .count-badge{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:22px;background:var(--orange);color:white;font-size:11px;font-weight:800;border-radius:50px;padding:0 6px;margin-left:8px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:18px;padding:20px;margin-bottom:14px;}
  .card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px;}
  .listener-name{font-size:16px;font-weight:800;color:var(--navy);}
  .listener-email{font-size:12px;color:var(--gray);font-weight:600;margin-top:2px;}
  .rate-badge{background:var(--light);color:var(--teal);font-size:13px;font-weight:800;padding:6px 12px;border-radius:50px;border:1.5px solid var(--border);}
  .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;}
  .field{background:var(--light);border-radius:10px;padding:10px 12px;}
  .field-label{font-size:10px;font-weight:800;color:var(--gray);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:3px;}
  .field-value{font-size:13px;font-weight:700;color:var(--navy);}
  .bio-box{background:var(--light);border-radius:10px;padding:10px 12px;margin-bottom:12px;}
  .bio-text{font-size:13px;color:#4A6B7E;line-height:1.6;font-weight:500;}
  .tags-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;}
  .tag-badge{background:rgba(26,143,160,.1);color:var(--navy);font-size:11px;font-weight:700;padding:4px 10px;border-radius:50px;}
  .card-actions{display:flex;gap:10px;}
  .btn-approve{flex:1;background:#34C759;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:12px;border-radius:12px;border:none;cursor:pointer;transition:all .2s;}
  .btn-approve:hover{background:#2aad4a;}
  .btn-approve:disabled{opacity:.5;cursor:not-allowed;}
  .btn-reject{flex:1;background:white;color:#FF3B30;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:12px;border-radius:12px;border:2px solid #FF3B30;cursor:pointer;transition:all .2s;}
  .btn-reject:hover{background:#FFF0EF;}
  .btn-reject:disabled{opacity:.5;cursor:not-allowed;}
  .payout-card{background:white;border:1.5px solid var(--border);border-radius:18px;padding:18px 20px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;gap:12px;}
  .payout-info{}
  .payout-name{font-size:15px;font-weight:800;color:var(--navy);}
  .payout-meta{font-size:12px;color:var(--gray);font-weight:600;margin-top:3px;}
  .payout-amount{font-size:22px;font-weight:900;color:var(--navy);}
  .btn-complete{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:10px 18px;border-radius:12px;border:none;cursor:pointer;transition:all .2s;white-space:nowrap;}
  .btn-complete:hover{background:#147a8a;}
  .btn-complete:disabled{opacity:.5;cursor:not-allowed;}
  .empty{text-align:center;padding:32px 20px;color:var(--gray);font-size:14px;font-weight:600;}
  .error-page{text-align:center;padding:80px 20px;}
  .error-page h2{font-size:22px;font-weight:900;color:var(--navy);margin-bottom:10px;}
  .error-page p{font-size:15px;color:var(--gray);font-weight:600;}
  .skeleton{background:linear-gradient(90deg,#e8e8e4 25%,#f2f2ee 50%,#e8e8e4 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:14px;}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  .toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--navy);color:white;font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:12px 24px;border-radius:50px;box-shadow:0 4px 20px rgba(15,72,103,.25);z-index:999;animation:toastIn .25s ease;}
  @keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
`

function fmtDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function AdminPage() {
  const router = useRouter()
  const [data, setData]       = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [denied, setDenied]   = useState(false)
  const [busy, setBusy]       = useState<string | null>(null)
  const [toast, setToast]     = useState<string | null>(null)
  const [lpPage, setLpPage]   = useState(0)
  const [prPage, setPrPage]   = useState(0)

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2500)
  }

  const loadData = useCallback(async (lp = lpPage, pr = prPage) => {
    setLoading(true)
    const res = await fetch(`/api/admin?lpPage=${lp}&prPage=${pr}`)
    if (res.status === 401) { router.push('/auth?redirect=/admin'); return }
    if (res.status === 403) { setDenied(true); setLoading(false); return }
    const json = await res.json()
    setData(json)
    setLoading(false)
  }, [router, lpPage, prPage])

  useEffect(() => { loadData() }, [loadData])

  async function doAction(action: string, id: string, label: string) {
    setBusy(`${action}:${id}`)
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, id }),
    })
    setBusy(null)
    if (!res.ok) {
      const err = await res.json()
      showToast(`Error: ${err.error || 'Something went wrong'}`)
      return
    }
    showToast(label)
    loadData()
  }

  if (loading) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar"><h1>Admin Panel</h1></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[1, 2, 3].map(i => <div key={i} className="skeleton" style={{ height: 160 }} />)}
        </div>
      </div>
    </>
  )

  if (denied) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="error-page">
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
          <h2>Not authorized</h2>
          <p>You don&apos;t have permission to access this page.</p>
        </div>
      </div>
    </>
  )

  const { pendingListeners = [], pendingPayouts = [], refundRequests = [], lpTotal = 0, prTotal = 0 } = data || {}
  const PAGE_SIZE = 20

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <h1>Admin Panel</h1>
          <p>Manage listener applications and payout requests.</p>
        </div>

        {/* Pending Listener Applications */}
        <div className="section">
          <div className="section-title">
            Pending Listener Applications
            {pendingListeners.length > 0 && (
              <span className="count-badge">{pendingListeners.length}</span>
            )}
          </div>

          {pendingListeners.length === 0 ? (
            <div className="empty">No pending applications — all caught up!</div>
          ) : pendingListeners.map((app: any) => {

            const lp = app.listener_profiles
            const u  = app.users
            return (
              <div key={app.id} className="card">
                <div className="card-header">
                  <div>
                    <div className="listener-name">{u?.name || '—'}</div>
                    <div className="listener-email">{u?.email || '—'}</div>
                  </div>
                  {lp?.rate_per_min && (
                    <div className="rate-badge">₹{lp.rate_per_min}/min</div>
                  )}
                </div>

                {lp?.bio && (
                  <div className="bio-box">
                    <div className="field-label">Bio</div>
                    <div className="bio-text">
                      {lp.bio.slice(0, 100)}{lp.bio.length > 100 ? '…' : ''}
                    </div>
                  </div>
                )}

                {(lp?.specialty_tags || []).length > 0 && (
                  <div className="tags-row">
                    {lp.specialty_tags.map((t: string) => (
                      <span key={t} className="tag-badge">{t}</span>
                    ))}
                  </div>
                )}

                <div className="field-grid">
                  {lp?.phone && (
                    <div className="field">
                      <div className="field-label">Phone</div>
                      <div className="field-value">{lp.phone}</div>
                    </div>
                  )}
                  {lp?.aadhaar_last4 && (
                    <div className="field">
                      <div className="field-label">Aadhaar (last 4)</div>
                      <div className="field-value">XXXX-XXXX-{lp.aadhaar_last4}</div>
                    </div>
                  )}
                  {lp?.bank_account && (
                    <div className="field">
                      <div className="field-label">Bank account</div>
                      <div className="field-value">{lp.bank_account}</div>
                    </div>
                  )}
                  {lp?.ifsc_code && (
                    <div className="field">
                      <div className="field-label">IFSC</div>
                      <div className="field-value">{lp.ifsc_code}</div>
                    </div>
                  )}
                </div>

                <div className="card-actions">
                  <button
                    className="btn-approve"
                    disabled={busy !== null}
                    onClick={() => doAction('approve_listener', app.user_id, `Approved ${u?.name || 'listener'}`)}
                  >
                    {busy === `approve_listener:${app.user_id}` ? 'Approving…' : '✓ Approve'}
                  </button>
                  <button
                    className="btn-reject"
                    disabled={busy !== null}
                    onClick={() => doAction('reject_listener', app.user_id, `Rejected ${u?.name || 'listener'}`)}
                  >
                    {busy === `reject_listener:${app.user_id}` ? 'Rejecting…' : '✕ Reject'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Listener applications pagination */}
        {lpTotal > PAGE_SIZE && (
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8,marginBottom:8}}>
            <button style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:10,padding:'8px 16px',fontFamily:'Nunito,sans-serif',fontWeight:700,fontSize:13,cursor:'pointer',color:'var(--navy)'}} disabled={lpPage===0} onClick={()=>{ const p=lpPage-1; setLpPage(p); loadData(p,prPage) }}>← Prev</button>
            <span style={{fontSize:13,color:'var(--gray)',fontWeight:600}}>{lpPage*PAGE_SIZE+1}–{Math.min((lpPage+1)*PAGE_SIZE,lpTotal)} of {lpTotal}</span>
            <button style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:10,padding:'8px 16px',fontFamily:'Nunito,sans-serif',fontWeight:700,fontSize:13,cursor:'pointer',color:'var(--navy)'}} disabled={(lpPage+1)*PAGE_SIZE>=lpTotal} onClick={()=>{ const p=lpPage+1; setLpPage(p); loadData(p,prPage) }}>Next →</button>
          </div>
        )}

        {/* Pending Payouts */}
        <div className="section">
          <div className="section-title">
            Pending Payout Requests
            {pendingPayouts.length > 0 && (
              <span className="count-badge">{pendingPayouts.length}</span>
            )}
          </div>

          {pendingPayouts.length === 0 ? (
            <div className="empty">No pending payouts — all clear!</div>
          ) : pendingPayouts.map((p: any) => (
            <div key={p.id} className="payout-card">
              <div className="payout-info">
                <div className="payout-name">{p.users?.name || '—'}</div>
                <div className="payout-meta">
                  {p.users?.email || ''}{p.created_at ? ` · Requested ${fmtDate(p.created_at)}` : ''}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div className="payout-amount">₹{p.amount}</div>
                <button
                  className="btn-complete"
                  disabled={busy !== null}
                  onClick={() => doAction('complete_payout', p.id, `Marked ₹${p.amount} payout complete`)}
                >
                  {busy === `complete_payout:${p.id}` ? 'Saving…' : 'Mark Complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Payout pagination */}
        {prTotal > PAGE_SIZE && (
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8,marginBottom:8}}>
            <button style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:10,padding:'8px 16px',fontFamily:'Nunito,sans-serif',fontWeight:700,fontSize:13,cursor:'pointer',color:'var(--navy)'}} disabled={prPage===0} onClick={()=>{ const p=prPage-1; setPrPage(p); loadData(lpPage,p) }}>← Prev</button>
            <span style={{fontSize:13,color:'var(--gray)',fontWeight:600}}>{prPage*PAGE_SIZE+1}–{Math.min((prPage+1)*PAGE_SIZE,prTotal)} of {prTotal}</span>
            <button style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:10,padding:'8px 16px',fontFamily:'Nunito,sans-serif',fontWeight:700,fontSize:13,cursor:'pointer',color:'var(--navy)'}} disabled={(prPage+1)*PAGE_SIZE>=prTotal} onClick={()=>{ const p=prPage+1; setPrPage(p); loadData(lpPage,p) }}>Next →</button>
          </div>
        )}

        {/* Refund Requests */}
        <div className="section">
          <div className="section-title">
            Refund Requests
            {refundRequests.length > 0 && <span className="count-badge">{refundRequests.length}</span>}
          </div>
          {refundRequests.length === 0 ? (
            <div className="empty">No pending refund requests!</div>
          ) : refundRequests.map((r: any) => (
            <div key={r.id} className="payout-card">
              <div className="payout-info">
                <div className="payout-name">{r.users?.name || '—'}</div>
                <div className="payout-meta">{r.users?.email || ''}{r.reason ? ` · "${r.reason}"` : ''}{r.created_at ? ` · ${fmtDate(r.created_at)}` : ''}</div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:14}}>
                <div className="payout-amount">₹{r.amount}</div>
                <button className="btn-complete" disabled={busy !== null} onClick={() => doAction('complete_refund', r.id, `Refund ₹${r.amount} marked complete`)}>
                  {busy === `complete_refund:${r.id}` ? 'Saving…' : 'Mark Refunded'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
