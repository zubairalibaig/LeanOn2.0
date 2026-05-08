'use client'
import { useState } from 'react'

const TAGS = ['loneliness','stress','career','relationships','grief','students','startup','general']
const TAG_LABELS: Record<string,string> = {
  loneliness:'Loneliness 🌙', stress:'Work stress 💼', career:'Career confusion 🧭',
  relationships:'Relationships 💬', grief:'Grief & loss 🌿', students:'Student pressure 📚',
  startup:'Startup journey 🚀', general:'Just need to talk ☕'
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--blue:#C9E7F4;--cream:#FFFBF5;--gray:#6B8FA8;--border:#DDE8F0;--light:#F0F4F7;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  a{text-decoration:none;color:inherit;}
  .page{max-width:480px;margin:0 auto;padding:0 20px 60px;}
  .topbar{display:flex;align-items:center;gap:12px;padding:16px 0 24px;}
  .back{width:40px;height:40px;border-radius:12px;background:var(--light);border:none;cursor:pointer;font-size:18px;color:var(--navy);}
  .hero{background:var(--navy);border-radius:24px;padding:28px;margin-bottom:32px;text-align:center;}
  .hero h1{font-size:24px;font-weight:900;color:white;margin-bottom:10px;}
  .hero p{font-size:14px;color:var(--blue);font-weight:500;line-height:1.6;margin-bottom:20px;}
  .earn-row{display:flex;justify-content:center;gap:24px;}
  .earn-item{text-align:center;}
  .earn-amount{font-size:22px;font-weight:900;color:var(--orange);}
  .earn-label{font-size:11px;color:var(--blue);font-weight:600;}
  .step-indicator{display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:28px;}
  .step-dot{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;}
  .step-dot.done{background:var(--orange);color:white;}
  .step-dot.active{background:var(--navy);color:white;}
  .step-dot.todo{background:var(--light);color:var(--gray);}
  .step-line{width:24px;height:2px;background:var(--border);}
  .section-title{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .section-sub{font-size:13px;color:var(--gray);font-weight:500;margin-bottom:20px;}
  .label{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px;display:block;}
  .input{width:100%;padding:13px 16px;font-family:'Nunito',sans-serif;font-size:15px;font-weight:600;color:var(--navy);border:2px solid var(--border);border-radius:14px;outline:none;background:white;transition:border-color 0.2s;margin-bottom:16px;}
  .input:focus{border-color:var(--navy);}
  .input::placeholder{color:#B0C8D8;font-weight:400;}
  textarea.input{resize:vertical;min-height:100px;line-height:1.5;}
  .tag-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;}
  .tag-chip{padding:10px 14px;border:2px solid var(--border);border-radius:12px;font-family:'Nunito',sans-serif;font-size:13px;font-weight:700;color:var(--gray);background:white;cursor:pointer;text-align:left;transition:all 0.15s;}
  .tag-chip.selected{border-color:var(--orange);background:#FFF3E0;color:var(--navy);}
  .rate-row{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
  .rate-wrap{flex:1;display:flex;align-items:center;gap:0;background:white;border:2px solid var(--border);border-radius:14px;overflow:hidden;}
  .rate-wrap:focus-within{border-color:var(--navy);}
  .rate-prefix{padding:13px 14px;font-weight:800;color:var(--gray);border-right:2px solid var(--border);}
  .rate-input{flex:1;padding:13px 14px;border:none;outline:none;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:var(--navy);}
  .rate-suffix{padding:13px 14px;font-size:13px;font-weight:600;color:var(--gray);}
  .rate-hint{font-size:12px;color:var(--gray);font-weight:500;}
  .upload-box{border:2px dashed var(--border);border-radius:16px;padding:24px;text-align:center;cursor:pointer;transition:all 0.2s;margin-bottom:16px;background:white;}
  .upload-box:hover{border-color:var(--orange);}
  .upload-icon{font-size:32px;margin-bottom:8px;}
  .upload-title{font-size:14px;font-weight:700;color:var(--navy);margin-bottom:4px;}
  .upload-sub{font-size:12px;color:var(--gray);font-weight:500;}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;}
  .disclaimer p{font-size:12px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .btn{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:16px;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 20px rgba(255,153,51,0.3);}
  .btn:hover{background:#e8861a;transform:translateY(-1px);}
  .btn:disabled{opacity:0.5;cursor:not-allowed;transform:none;}
  .btn-ghost{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:15px;font-weight:700;color:var(--navy);background:white;border:2px solid var(--border);border-radius:16px;cursor:pointer;transition:all 0.2s;margin-top:10px;}
  .success{text-align:center;padding:40px 20px;}
  .success-icon{font-size:64px;margin-bottom:20px;}
  .success h2{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:12px;}
  .success p{font-size:15px;color:var(--gray);font-weight:500;line-height:1.6;}
  .spinning{display:inline-block;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
`

export default function BecomeListenerPage() {
  const [step, setStep]         = useState(1)
  const [name, setName]         = useState('')
  const [phone, setPhone]       = useState('')
  const [bio, setBio]           = useState('')
  const [selectedTags, setTags] = useState<string[]>([])
  const [rate, setRate]         = useState('10')
  const [aadhaar, setAadhaar]   = useState('')
  const [bank, setBank]         = useState('')
  const [ifsc, setIfsc]         = useState('')
  const [loading, setLoading]   = useState(false)
  const [done, setDone]         = useState(false)

  function toggleTag(t: string) {
    setTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
  }

  async function submit() {
    setLoading(true)
    // TODO: POST to Supabase listener_profiles table
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setDone(true)
  }

  if (done) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="success">
          <div className="success-icon">🎉</div>
          <h2>Application submitted!</h2>
          <p>We&apos;ll review your profile within 24 hours and notify you via WhatsApp on {phone}. Once approved, you&apos;ll go live and can start earning.</p>
          <br />
          <a href="/"><button className="btn" style={{marginTop:24}}>Back to home</button></a>
        </div>
      </div>
    </>
  )

  return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="topbar">
          {step > 1
            ? <button className="back" onClick={() => setStep(s => s-1)}>←</button>
            : <a href="/" className="back">←</a>
          }
        </div>

        {/* Hero */}
        {step === 1 && (
          <div className="hero">
            <h1>Earn by listening 🎧</h1>
            <p>Share your lived experience. Help someone feel less alone. Get paid for your time.</p>
            <div className="earn-row">
              <div className="earn-item"><div className="earn-amount">₹8–25</div><div className="earn-label">per minute</div></div>
              <div className="earn-item"><div className="earn-amount">₹13K+</div><div className="earn-label">per month possible</div></div>
              <div className="earn-item"><div className="earn-amount">90%</div><div className="earn-label">you keep</div></div>
            </div>
          </div>
        )}

        {/* Step indicator */}
        <div className="step-indicator">
          {[1,2,3].map((s,i) => (
            <>
              {i > 0 && <div className="step-line" key={`l${i}`} />}
              <div key={s} className={`step-dot ${step > s ? 'done' : step === s ? 'active' : 'todo'}`}>
                {step > s ? '✓' : s}
              </div>
            </>
          ))}
        </div>

        {/* Step 1: Basic info */}
        {step === 1 && (
          <>
            <div className="section-title">About you</div>
            <p className="section-sub">Tell us who you are and what you&apos;ve been through.</p>
            <label className="label">Full name</label>
            <input className="input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            <label className="label">WhatsApp number</label>
            <input className="input" type="tel" placeholder="98765 43210" value={phone} onChange={e => setPhone(e.target.value)} />
            <label className="label">Your story (this is your profile — be real)</label>
            <textarea className="input" placeholder="e.g. I went through a painful divorce at 29. It took 2 years to rebuild. I'm here for people who feel like there's no light at the end of the tunnel — I've been there and found my way back." value={bio} onChange={e => setBio(e.target.value)} />
            <label className="label">Topics you can speak to</label>
            <div className="tag-grid">
              {TAGS.map(t => (
                <button key={t} className={`tag-chip${selectedTags.includes(t) ? ' selected':''}`} onClick={() => toggleTag(t)}>
                  {TAG_LABELS[t]}
                </button>
              ))}
            </div>
            <button className="btn" onClick={() => setStep(2)} disabled={!name || !phone || bio.length < 50 || selectedTags.length === 0}>
              Next: Set your rate →
            </button>
          </>
        )}

        {/* Step 2: Rate + KYC */}
        {step === 2 && (
          <>
            <div className="section-title">Your rate & verification</div>
            <p className="section-sub">New listeners start at ₹8–12/min. You can increase as you get reviews.</p>
            <label className="label">Rate per minute (₹8–25)</label>
            <div className="rate-row">
              <div className="rate-wrap">
                <span className="rate-prefix">₹</span>
                <input className="rate-input" type="number" min={8} max={25} value={rate} onChange={e => setRate(e.target.value)} />
                <span className="rate-suffix">/ minute</span>
              </div>
            </div>
            <p className="rate-hint" style={{marginBottom:20}}>
              At ₹{rate}/min: 15-min session = ₹{parseInt(rate)*15}, 30-min = ₹{parseInt(rate)*30}. You keep 90%.
            </p>
            <label className="label">Aadhaar number (for identity verification)</label>
            <input className="input" type="text" placeholder="XXXX XXXX XXXX" maxLength={14}
              value={aadhaar} onChange={e => setAadhaar(e.target.value.replace(/[^\d\s]/g,''))} />
            <div className="disclaimer">
              <p>🔒 Your Aadhaar is used only for identity verification. It is never stored in plain text and is not shared with anyone. LeanOn uses secure, RBI-compliant verification.</p>
            </div>
            <button className="btn" onClick={() => setStep(3)} disabled={!aadhaar || aadhaar.replace(/\s/g,'').length < 12}>
              Next: Bank details →
            </button>
          </>
        )}

        {/* Step 3: Bank */}
        {step === 3 && (
          <>
            <div className="section-title">Bank account for payouts</div>
            <p className="section-sub">Earnings are paid out within 3 business days of completing sessions.</p>
            <label className="label">Account number</label>
            <input className="input" type="text" placeholder="Enter account number" value={bank} onChange={e => setBank(e.target.value)} />
            <label className="label">IFSC code</label>
            <input className="input" type="text" placeholder="e.g. SBIN0001234" value={ifsc} onChange={e => setIfsc(e.target.value.toUpperCase())} />
            <div className="disclaimer">
              <p>⚠️ <strong>Important:</strong> LeanOn is a peer support platform. Our listeners are not therapists, counselors, or licensed mental health professionals. By applying, you confirm you are sharing personal lived experience only — not providing clinical advice or therapy.</p>
            </div>
            <button className="btn" onClick={submit} disabled={loading || !bank || !ifsc}>
              {loading ? <span className="spinning">⟳</span> : 'Submit application →'}
            </button>
            <a href="/"><button className="btn-ghost">Cancel</button></a>
          </>
        )}
      </div>
    </>
  )
}
