'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .page{max-width:460px;margin:0 auto;padding:0 20px 88px;}
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
  const [loading, setLoading]   = useState(false)
  const [balance, setBalance]   = useState<number|null>(null)
  const [transactions, setTransactions] = useState<Txn[]>([])
  const [userId, setUserId]     = useState<string|null>(null)
  const [refunding, setRefunding] = useState(false)
  const [paymentPending, setPaymentPending] = useState(false)

  useEffect(() => {
    // Load Razorpay script
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

    const { data: userData } = await sb.from('users').select('wallet_balance').eq('id', user.id).single()
    if (userData) setBalance(userData.wallet_balance)

    const { data: txns } = await sb.from('wallet_transactions')
      .select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(10)
    if (txns) setTransactions(txns)
  }

  async function handleRefund() {
    if (!userId || !balance || balance <= 0) return
    if (!confirm(`Request a refund of ₹${balance} to your original payment method? We'll process it within 3–5 business days.`)) return
    setRefunding(true)
    const res = await fetch('/api/refund', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) })
    const data = await res.json()
    setRefunding(false)
    if (!res.ok) { alert(data.error || 'Could not submit refund request.'); return }
    alert(`Refund request for ₹${balance} submitted! You'll receive it in 3–5 business days.`)
  }

  async function handleRecharge() {
    if (!userId) return
    setLoading(true)
    try {
      // Create order
      const res = await fetch('/api/wallet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: selected }),
      })
      const { orderId } = await res.json()

      // Open Razorpay checkout
      const rzp = new window.Razorpay({
        key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount:      selected * 100,
        currency:    'INR',
        name:        'LeanOn',
        description: 'Wallet recharge',
        order_id:    orderId,
        prefill:     {},
        theme:       { color: '#FF9933' },
        handler: async (response: RazorpayResponse) => {
          // Show pending state immediately — webhook may arrive before PUT resolves
          setPaymentPending(true)
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
          setPaymentPending(false)
          if (res.ok) {
            await loadUserData()
            alert(`₹${selected} added to your wallet!`)
          } else {
            const data = await res.json()
            alert(data.error || 'Payment verification failed. Contact support.')
          }
        },
      })
      rzp.open()
    } catch {
      alert('Payment failed. Please try again.')
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
          <div className="balance-sub">{balance !== null ? `~${Math.floor(balance/165)} sessions remaining` : 'Loading...'}</div>
          <button className="refund-btn" onClick={handleRefund} disabled={refunding || !balance || balance <= 0}>
            {refunding ? 'Submitting…' : 'Request refund of balance'}
          </button>
        </div>

        {balance === 0 && (
          <div style={{textAlign:'center',padding:'40px 20px',background:'white',borderRadius:24,border:'1.5px solid var(--border)',marginBottom:24}}>
            <div style={{fontSize:48,marginBottom:12}}>💰</div>
            <h3 style={{fontSize:20,fontWeight:800,color:'var(--navy)',marginBottom:8}}>Your wallet is empty</h3>
            <p style={{fontSize:15,color:'var(--gray)',marginBottom:24}}>
              Top up your wallet to start a session. Your first 5 minutes are always free — no top-up needed for that!
            </p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12,maxWidth:320,margin:'0 auto 20px'}}>
              {[199,499,999,1999].map(amt => (
                <button key={amt} onClick={() => setSelected(amt)}
                  style={{background: selected===amt ? '#FFF8F0' : 'white',border:`2px solid ${selected===amt?'var(--orange)':'var(--border)'}`,borderRadius:16,padding:'16px 8px',textAlign:'center',cursor:'pointer',fontFamily:'Nunito,sans-serif',fontWeight:900,fontSize:20,color:'var(--navy)'}}>
                  ₹{amt}
                </button>
              ))}
            </div>
            <p style={{fontSize:13,color:'var(--gray)'}}>₹165 for 15 min · ₹295 for 30 min · ₹395 for 45 min</p>
          </div>
        )}

        <div className="section-title">Recharge wallet</div>
        <div className="presets">
          {PRESETS.map(p => (
            <div key={p.amount} className={`preset${selected===p.amount?' sel':''}`} onClick={() => setSelected(p.amount)}>
              <div className="preset-amount">₹{p.amount}</div>
              <div className="preset-sessions">{p.sessions}</div>
              {p.tag && <div className="preset-tag">{p.tag}</div>}
            </div>
          ))}
        </div>

        <div className="note">
          <span>🔄</span>
          <span>Unused balance is fully refundable anytime. No expiry. Your money is safe.</span>
        </div>

        {paymentPending && (
          <div className="note" style={{marginBottom:12,background:'rgba(255,153,51,0.1)',borderColor:'rgba(255,153,51,0.3)'}}>
            <span>⏳</span>
            <span><strong>Processing your payment…</strong> Please wait. Do not close this page.</span>
          </div>
        )}
        <button className="btn" onClick={handleRecharge} disabled={loading || paymentPending} style={{marginBottom:32}}>
          {loading || paymentPending ? <span className="spin">⟳</span> : `Recharge ₹${selected} →`}
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
