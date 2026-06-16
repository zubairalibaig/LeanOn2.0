'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { showToast } from '@/lib/toast'
import { grossRechargeAmount } from '@/lib/constants'
const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .page{max-width:480px;margin:0 auto;padding:0 20px 88px;}
  .topbar{display:flex;align-items:center;gap:12px;padding:16px 0 20px;}
  .back{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,0.8);border:1.5px solid var(--border);cursor:pointer;font-size:18px;color:var(--navy);display:flex;align-items:center;justify-content:center;}
  h1{font-size:22px;font-weight:900;color:var(--navy);}
  .balance-card{background:var(--navy);border-radius:24px;padding:28px;margin-bottom:28px;text-align:center;}
  .balance-label{font-size:13px;color:rgba(213,238,246,0.7);font-weight:700;margin-bottom:8px;}
  .balance-amount{font-size:48px;font-weight:900;color:white;margin-bottom:6px;}
  .balance-sub{font-size:13px;color:rgba(213,238,246,0.6);font-weight:500;}
  .refund-btn{background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.2);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:8px 18px;border-radius:50px;cursor:pointer;margin-top:16px;}
  .section-title{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:14px;}
  .presets{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;}
  .preset{background:white;border:2px solid var(--border);border-radius:16px;padding:18px;text-align:center;cursor:pointer;transition:all 0.2s;}
  .preset:hover,.preset.sel{border-color:var(--orange);background:#FFF8F0;}
  .preset-amount{font-size:22px;font-weight:900;color:var(--navy);}
  .preset-sessions{font-size:12px;color:var(--gray);font-weight:600;margin-top:4px;}
  .preset-tag{font-size:10px;background:var(--orange);color:white;font-weight:800;padding:3px 8px;border-radius:50px;display:inline-block;margin-top:6px;}
  .btn{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:50px;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 20px rgba(255,153,51,0.3);}
  .btn:hover{background:#e8861a;}
  .btn:disabled{opacity:0.5;cursor:not-allowed;}
  .note{background:rgba(26,143,160,0.08);border:1px solid rgba(26,143,160,0.2);border-radius:14px;padding:14px 16px;display:flex;gap:10px;align-items:flex-start;margin-bottom:24px;}
  .note span{font-size:13px;color:#1A5F6A;font-weight:600;line-height:1.5;}
  .history-list{display:flex;flex-direction:column;gap:2px;}
  .txn{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--border);}
  .txn:last-child{border-bottom:none;}
  .txn-desc{font-size:14px;font-weight:700;color:var(--navy);}
  .txn-date{font-size:12px;color:var(--gray);font-weight:500;margin-top:2px;}
  .txn-amount.cr{color:#34C759;font-size:15px;font-weight:800;}
  .txn-amount.dr{color:var(--navy);font-size:15px;font-weight:800;}
  .spin{display:inline-block;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
`

const PRESETS = [
  { amount:200,  sessions:'~1 session',    tag:'' },
  { amount:500,  sessions:'~3 sessions',   tag:'Popular' },
  { amount:1000, sessions:'~6 sessions',   tag:'Best value' },
  { amount:2000, sessions:'~12 sessions',  tag:'' },
]

type RazorpayResponse = { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }
type RazorpayOptions = { key: string | undefined; amount: number; currency: string; name: string; description: string; order_id: string; prefill: object; theme: { color: string }; handler: (r: RazorpayResponse) => void }
declare global { interface Window { Razorpay: new (opts: RazorpayOptions) => { open(): void } } }

type Txn = { id: string; description?: string; type: 'credit' | 'debit'; amount: number; created_at: string }

export default function WalletPage() {
  const router = useRouter()
  const sb = createClient()
  const [selected, setSelected] = useState(500)
  const [customInput, setCustomInput] = useState('')
  const [loading, setLoading]   = useState(false)
  const [balance, setBalance]   = useState<number|null>(null)
  const [transactions, setTransactions] = useState<Txn[]>([])
  const [userId, setUserId]     = useState<string|null>(null)
  const [refunding, setRefunding] = useState(false)
  const [refundSubmitted, setRefundSubmitted] = useState(false)
  const [paymentPending, setPaymentPending] = useState(false)
  const [showRefundConfirm, setShowRefundConfirm] = useState(false)
  const rzpScriptRef = useRef(false)

  useEffect(() => {
    // Load Razorpay script — guard against double-inject on remount
    if (rzpScriptRef.current || document.querySelector('script[src*="checkout.razorpay.com"]')) return
    rzpScriptRef.current = true
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    document.body.appendChild(script)

    // Load user data
    loadUserData()
  }, [])

  // Realtime: update balance if webhook credits it while page is open
  useEffect(() => {
    if (!userId) return
    const sb = createClient()
    const ch = sb.channel('wallet-balance')
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'users',
        filter: `id=eq.${userId}`,
      }, (payload) => {
        const newBalance = (payload.new as { wallet_balance?: number }).wallet_balance
        if (typeof newBalance === 'number') setBalance(newBalance)
      })
      .subscribe()
    return () => { sb.removeChannel(ch) }
  }, [userId])

  async function loadUserData() {
    const { data: { user } } = await sb.auth.getUser()
    if (!user) { router.push('/auth'); return }
    setUserId(user.id)

    // Try browser-client first (RLS: users_select_own). Fall back to the server
    // API (admin client, bypasses RLS) if the row is missing or inaccessible —
    // e.g. users who completed payment before their public.users row was created.
    const { data: userData } = await sb.from('users').select('wallet_balance').eq('id', user.id).maybeSingle()
    if (userData !== null) {
      setBalance(userData?.wallet_balance ?? 0)
    } else {
      // Browser client returned null — row may be missing or RLS blocked.
      // Server API uses admin client so it always reaches the row if it exists.
      try {
        const res = await fetch('/api/auth/profile')
        if (res.ok) {
          const profile = await res.json()
          setBalance(profile.wallet_balance ?? 0)
        } else {
          setBalance(0)
        }
      } catch {
        setBalance(0)
      }
    }

    const { data: txns } = await sb.from('wallet_transactions')
      .select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(10)
    if (txns) setTransactions(txns)
  }

  async function confirmRefund() {
    if (!userId || !balance || balance <= 0) return
    setShowRefundConfirm(false)
    setRefunding(true)
    const res = await fetch('/api/refund', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) })
    const data = await res.json()
    setRefunding(false)
    if (!res.ok) { showToast(data.error || 'Could not submit refund request.', 'error'); return }
    setBalance(0)
    setRefundSubmitted(true)
    showToast(`Refund request submitted! You'll receive it in 3–5 business days.`, 'success')
  }

  async function handleRecharge() {
    if (!userId) return
    // Guard: Razorpay script must be loaded before we construct the checkout
    if (typeof window === 'undefined' || !window.Razorpay) {
      showToast('Payment is still loading. Please wait a moment and try again.', 'warning')
      return
    }
    setLoading(true)
    try {
      // Create order
      const res = await fetch('/api/wallet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: selected }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        showToast(err.error || 'Could not start payment. Please try again.', 'error')
        setLoading(false)
        return
      }
      const { orderId, amount: orderAmountPaise } = await res.json()
      if (!orderId) {
        showToast('Could not start payment. Please try again.', 'error')
        setLoading(false)
        return
      }

      // Open Razorpay checkout — order amount includes the gateway fee
      const rzp = new window.Razorpay({
        key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount:      orderAmountPaise ?? selected * 100,
        currency:    'INR',
        name:        'LeanOn',
        description: 'Wallet recharge',
        order_id:    orderId,
        prefill:     {},
        theme:       { color: '#FF9933' },
        handler: async (response: RazorpayResponse) => {
          // Show pending state immediately — webhook may arrive before PUT resolves
          setPaymentPending(true)
          // Auto-reset pending state after 30s in case handler never fires (network drop)
          const resetTimer = setTimeout(() => setPaymentPending(false), 30_000)
          // Verify and credit wallet — userId derived server-side from session cookie
          const res = await fetch('/api/wallet', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature:  response.razorpay_signature,
              amount: selected,
            }),
          })
          clearTimeout(resetTimer)
          setPaymentPending(false)
          if (res.ok) {
            const data = await res.json()
            // Update balance directly from server response — don't rely on a
            // second DB read which can race with the credit_wallet_idempotent RPC
            if (typeof data.newBalance === 'number') setBalance(data.newBalance)
            // Reload transaction history to show the new credit entry
            sb.from('wallet_transactions')
              .select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(10)
              .then(({ data: txns }) => { if (txns) setTransactions(txns) })
            showToast(`₹${selected} added to your wallet!`, 'success')
          } else {
            const data = await res.json()
            showToast(data.error || 'Payment verification failed. Contact support.', 'error')
          }
        },
      })
      rzp.open()
    } catch {
      showToast('Payment failed. Please try again.', 'error')
    }
    setLoading(false)
  }

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          <button className="back" onClick={() => router.back()}>←</button>
          <h1>My Wallet</h1>
        </div>

        <div className="balance-card">
          <div className="balance-label">AVAILABLE BALANCE</div>
          <div className="balance-amount">₹{balance ?? '—'}</div>
          <div className="balance-sub">{balance !== null ? `~${Math.floor(balance / 10)} min of support available` : 'Loading...'}</div>
          {showRefundConfirm ? (
            <div style={{ marginTop: 16, background: 'rgba(255,255,255,0.12)', borderRadius: 14, padding: '14px 16px', textAlign: 'left' }}>
              <p style={{ fontSize: 13, color: 'white', fontWeight: 600, marginBottom: 12, lineHeight: 1.5 }}>
                Request a refund of ₹{balance} to your original payment method? We&apos;ll process it within 3–5 business days.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={confirmRefund} style={{ flex: 1, padding: '9px 0', borderRadius: 50, background: 'white', color: 'var(--navy)', border: 'none', fontFamily: 'Nunito,sans-serif', fontWeight: 800, fontSize: 13, cursor: 'pointer' }}>
                  Yes, refund
                </button>
                <button onClick={() => setShowRefundConfirm(false)} style={{ flex: 1, padding: '9px 0', borderRadius: 50, background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.3)', fontFamily: 'Nunito,sans-serif', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </div>
          ) : refundSubmitted ? (
            <div style={{marginTop:16,fontSize:13,color:'rgba(255,255,255,0.75)',fontWeight:600,lineHeight:1.5}}>
              ✓ Refund requested — arrives in 3–5 business days
            </div>
          ) : (
            <button className="refund-btn" onClick={() => setShowRefundConfirm(true)} disabled={refunding || !balance || balance <= 0}>
              {refunding ? 'Submitting…' : 'Request refund of balance'}
            </button>
          )}
        </div>

        {balance === 0 && (
          <div style={{textAlign:'center',padding:'40px 20px',background:'white',borderRadius:24,border:'1.5px solid var(--border)',marginBottom:24}}>
            <div style={{fontSize:48,marginBottom:12}}>💰</div>
            <h3 style={{fontSize:20,fontWeight:800,color:'var(--navy)',marginBottom:8}}>Your wallet is empty</h3>
            <p style={{fontSize:15,color:'var(--gray)',marginBottom:24}}>
              Top up your wallet to start a session. Your first 5 minutes are always free — no top-up needed for that!
            </p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12,maxWidth:320,margin:'0 auto 20px'}}>
              {[200,500,1000,2000].map(amt => (
                <button key={amt} onClick={() => setSelected(amt)}
                  style={{background: selected===amt ? '#FFF8F0' : 'white',border:`2px solid ${selected===amt?'var(--orange)':'var(--border)'}`,borderRadius:16,padding:'16px 8px',textAlign:'center',cursor:'pointer',fontFamily:'Nunito,sans-serif',fontWeight:900,fontSize:20,color:'var(--navy)'}}>
                  ₹{amt}
                </button>
              ))}
            </div>
            <p style={{fontSize:13,color:'var(--gray)'}}>₹160 for 15 min · ₹310 for 30 min · ₹460 for 45 min</p>
          </div>
        )}

        <div className="section-title">Recharge wallet</div>
        <div className="presets">
          {PRESETS.map(p => (
            <div key={p.amount} className={`preset${selected===p.amount && !customInput?' sel':''}`} onClick={() => { setSelected(p.amount); setCustomInput('') }}>
              <div className="preset-amount">₹{p.amount}</div>
              <div className="preset-sessions">{p.sessions}</div>
              {p.tag && <div className="preset-tag">{p.tag}</div>}
            </div>
          ))}
        </div>

        {/* Custom amount input */}
        <div style={{marginBottom:14}}>
          <div style={{fontSize:13,fontWeight:700,color:'var(--navy)',marginBottom:6}}>Or enter a custom amount (min ₹50)</div>
          <div style={{display:'flex',alignItems:'center',background:'white',border:`2px solid ${customInput ? 'var(--orange)' : 'var(--border)'}`,borderRadius:14,overflow:'hidden'}}>
            <span style={{padding:'12px 12px 12px 16px',fontWeight:900,fontSize:18,color:'var(--navy)'}}>₹</span>
            <input
              type="number"
              inputMode="numeric"
              min={50}
              max={10000}
              placeholder="e.g. 100"
              value={customInput}
              onChange={e => {
                const v = e.target.value.replace(/[^0-9]/g,'')
                setCustomInput(v)
                const n = parseInt(v, 10)
                if (!isNaN(n) && n >= 50 && n <= 10000) setSelected(n)
              }}
              style={{flex:1,padding:'12px 16px 12px 4px',fontFamily:'Nunito,sans-serif',fontSize:16,fontWeight:700,color:'var(--navy)',border:'none',outline:'none',background:'transparent'}}
            />
          </div>
          {customInput && (() => {
            const n = parseInt(customInput, 10)
            if (isNaN(n) || n < 50) return <p style={{fontSize:12,color:'#E53935',fontWeight:600,marginTop:6}}>Minimum ₹50</p>
            if (n > 10000) return <p style={{fontSize:12,color:'#E53935',fontWeight:600,marginTop:6}}>Maximum ₹10,000</p>
            return null
          })()}
        </div>

        <div className="note">
          <span>🔄</span>
          <span>Unused balance is fully refundable anytime. No expiry. Your money is safe.</span>
        </div>

        {/* Gateway fee callout — show exact charge before user pays */}
        <div style={{background:'rgba(255,153,51,0.08)',border:'1px solid rgba(255,153,51,0.25)',borderRadius:14,padding:'12px 16px',marginBottom:16,fontSize:13,color:'#7A4000',fontWeight:600,lineHeight:1.5}}>
          💳 You&apos;ll be charged <strong>₹{grossRechargeAmount(selected)}</strong>{' '}
          <span style={{fontWeight:500,opacity:0.8}}>(₹{selected} wallet credit + ₹{grossRechargeAmount(selected) - selected} gateway fee)</span>
        </div>

        {paymentPending && (
          <div className="note" style={{marginBottom:12,background:'rgba(255,153,51,0.1)',borderColor:'rgba(255,153,51,0.3)'}}>
            <span>⏳</span>
            <span><strong>Processing your payment…</strong> Please wait. Do not close this page.</span>
          </div>
        )}
        <button className="btn" onClick={handleRecharge} disabled={loading || paymentPending || (!!customInput && (isNaN(parseInt(customInput,10)) || parseInt(customInput,10) < 50 || parseInt(customInput,10) > 10000))} style={{marginBottom:32}}>
          {loading || paymentPending ? <span className="spin">⟳</span> : `Add ₹${selected} to wallet →`}
        </button>

        {transactions.length === 0 && balance !== null && (
          <div style={{background:'white',borderRadius:16,padding:'24px',textAlign:'center',marginBottom:24,border:'1.5px solid var(--border)'}}>
            <div style={{fontSize:32,marginBottom:8}}>💳</div>
            <div style={{fontSize:14,color:'var(--gray)',fontWeight:600,lineHeight:1.6}}>No transactions yet. Your payment history will appear here after your first top-up or session.</div>
          </div>
        )}

        {transactions.length > 0 && (
          <>
            <div className="section-title">Recent transactions</div>
            <div className="history-list">
              {transactions.map((t,i) => (
                <div key={i} className="txn">
                  <div>
                    <div className="txn-desc">{t.description || 'Transaction'}</div>
                    <div className="txn-date">{new Date(t.created_at).toLocaleDateString('en-IN', {day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}</div>
                  </div>
                  <div className={`txn-amount ${t.type==='credit'?'cr':'dr'}`}>
                    {t.type==='credit' ? '+' : '−'}₹{Math.abs(t.amount)}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
