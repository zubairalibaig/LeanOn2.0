'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--blue:#C9E7F4;--cream:#FFFBF5;--gray:#6B8FA8;--border:#DDE8F0;--light:#F0F4F7;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  a{text-decoration:none;color:inherit;}
  .page{max-width:460px;margin:0 auto;padding:0 20px 40px;}
  .topbar{display:flex;align-items:center;gap:12px;padding:16px 0 20px;}
  .back{width:40px;height:40px;border-radius:12px;background:var(--light);border:none;cursor:pointer;font-size:18px;color:var(--navy);}
  h1{font-size:22px;font-weight:900;color:var(--navy);}
  .balance-card{background:var(--navy);border-radius:24px;padding:28px;margin-bottom:28px;text-align:center;}
  .balance-label{font-size:13px;color:var(--blue);font-weight:700;margin-bottom:8px;opacity:0.8;}
  .balance-amount{font-size:48px;font-weight:900;color:white;margin-bottom:6px;}
  .balance-sub{font-size:13px;color:var(--blue);opacity:0.7;font-weight:500;}
  .refund-btn{background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.2);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:8px 18px;border-radius:50px;cursor:pointer;margin-top:16px;transition:all 0.2s;}
  .refund-btn:hover{background:rgba(255,255,255,0.2);}
  .section-title{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:14px;}
  .presets{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;}
  .preset{background:white;border:2px solid var(--border);border-radius:16px;padding:18px;text-align:center;cursor:pointer;transition:all 0.2s;}
  .preset:hover{border-color:var(--orange);background:#FFF8F0;}
  .preset.selected{border-color:var(--orange);background:#FFF3E0;}
  .preset-amount{font-size:22px;font-weight:900;color:var(--navy);}
  .preset-sessions{font-size:12px;color:var(--gray);font-weight:600;margin-top:4px;}
  .preset-tag{font-size:10px;background:var(--orange);color:white;font-weight:800;padding:3px 8px;border-radius:50px;display:inline-block;margin-top:6px;}
  .custom-wrap{background:white;border:2px solid var(--border);border-radius:16px;padding:16px;margin-bottom:24px;}
  .custom-label{font-size:13px;font-weight:700;color:var(--gray);margin-bottom:10px;}
  .custom-row{display:flex;align-items:center;gap:0;background:var(--light);border-radius:12px;overflow:hidden;}
  .custom-prefix{padding:12px 14px;font-weight:800;color:var(--gray);font-size:16px;}
  .custom-input{flex:1;padding:12px 0;background:transparent;border:none;outline:none;font-family:'Nunito',sans-serif;font-size:18px;font-weight:800;color:var(--navy);}
  .btn{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:16px;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 20px rgba(255,153,51,0.3);}
  .btn:hover{background:#e8861a;transform:translateY(-1px);}
  .btn:disabled{opacity:0.5;cursor:not-allowed;transform:none;}
  .note{background:var(--light);border-radius:14px;padding:14px 16px;display:flex;gap:10px;align-items:flex-start;margin-bottom:24px;}
  .note span{font-size:13px;color:var(--gray);font-weight:500;line-height:1.5;}
  .history-list{display:flex;flex-direction:column;gap:2px;}
  .txn{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--border);}
  .txn:last-child{border-bottom:none;}
  .txn-desc{font-size:14px;font-weight:700;color:var(--navy);}
  .txn-date{font-size:12px;color:var(--gray);font-weight:500;margin-top:2px;}
  .txn-amount{font-size:15px;font-weight:800;}
  .txn-amount.cr{color:#34C759;}
  .txn-amount.dr{color:var(--navy);}
  .spinning{display:inline-block;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
`

const PRESETS = [
  { amount: 200,  sessions: '1 session',    tag: '' },
  { amount: 500,  sessions: '3 sessions',   tag: 'Popular' },
  { amount: 1000, sessions: '6+ sessions',  tag: 'Best value' },
  { amount: 2000, sessions: '13+ sessions', tag: '' },
]

const DEMO_TXN = [
  { desc: 'Session with Ananya S.', date: 'Today, 2:15 AM',     amount: -165, type: 'dr' },
  { desc: 'Wallet recharge',        date: 'Yesterday, 11:30 PM', amount: 500,  type: 'cr' },
  { desc: 'Free trial session',     date: '3 days ago',          amount: 0,    type: 'dr' },
  { desc: 'Wallet recharge',        date: '1 week ago',          amount: 200,  type: 'cr' },
]

export default function WalletPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<number>(500)
  const [custom, setCustom]     = useState('')
  const [loading, setLoading]   = useState(false)
  const balance = 335 // TODO: fetch from Supabase

  const finalAmount = custom ? parseInt(custom) || 0 : selected

  async function handleRecharge() {
    if (finalAmount < 100) return
    setLoading(true)
    // TODO: Create Razorpay order, open checkout
    // const res = await fetch('/api/wallet/create-order', { method:'POST', body: JSON.stringify({ amount: finalAmount }) })
    // const { orderId } = await res.json()
    // const rzp = new (window as any).Razorpay({ key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, amount: finalAmount*100, ... })
    // rzp.open()
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    alert(`₹${finalAmount} added to wallet! (Razorpay integration pending)`)
  }

  return (
    <>
      <style>{S}</style>
      {/* Load Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />

      <div className="page">
        <div className="topbar">
          <button className="back" onClick={() => router.back()}>←</button>
          <h1>My Wallet</h1>
        </div>

        {/* Balance */}
        <div className="balance-card">
          <div className="balance-label">AVAILABLE BALANCE</div>
          <div className="balance-amount">₹{balance}</div>
          <div className="balance-sub">~{Math.floor(balance/165)} sessions remaining</div>
          <button className="refund-btn" onClick={() => alert('Refund request sent. We\'ll process within 3-5 days.')}>
            Request refund of balance
          </button>
        </div>

        {/* Recharge */}
        <div className="section-title">Recharge wallet</div>
        <div className="presets">
          {PRESETS.map(p => (
            <div key={p.amount} className={`preset${selected === p.amount && !custom ? ' selected':''}`}
              onClick={() => { setSelected(p.amount); setCustom('') }}>
              <div className="preset-amount">₹{p.amount}</div>
              <div className="preset-sessions">{p.sessions}</div>
              {p.tag && <div className="preset-tag">{p.tag}</div>}
            </div>
          ))}
        </div>

        <div className="custom-wrap">
          <div className="custom-label">Or enter custom amount (min ₹100)</div>
          <div className="custom-row">
            <span className="custom-prefix">₹</span>
            <input className="custom-input" type="number" placeholder="Enter amount"
              value={custom} onChange={e => { setCustom(e.target.value); setSelected(0) }} />
          </div>
        </div>

        <div className="note">
          <span>🔄</span>
          <span>Your wallet balance never expires and is fully refundable anytime. No lock-in, ever. Processed within 3–5 business days.</span>
        </div>

        <button className="btn" onClick={handleRecharge} disabled={loading || finalAmount < 100} style={{marginBottom:32}}>
          {loading ? <span className="spinning">⟳</span> : `Recharge ₹${finalAmount || '—'} →`}
        </button>

        {/* History */}
        <div className="section-title">Transaction history</div>
        <div className="history-list">
          {DEMO_TXN.map((t, i) => (
            <div key={i} className="txn">
              <div>
                <div className="txn-desc">{t.desc}</div>
                <div className="txn-date">{t.date}</div>
              </div>
              <div className={`txn-amount ${t.type}`}>
                {t.amount === 0 ? 'Free' : `${t.type === 'cr' ? '+' : '−'}₹${Math.abs(t.amount)}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
