'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { MIN_LISTENER_RATE, MAX_LISTENER_RATE, LANGUAGES } from '@/lib/constants'

let _sb: ReturnType<typeof createBrowserClient> | null = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sb = new Proxy({} as ReturnType<typeof createBrowserClient>, {
  get(_, prop) {
    if (!_sb) _sb = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
    const val = (_sb as any)[prop]
    return typeof val === 'function' ? val.bind(_sb) : val
  }
})

const TAGS = [
  {id:'loneliness', label:'Loneliness 🌙'},
  {id:'anxiety',    label:'Anxiety 😰'},
  {id:'stress',     label:'Work stress 💼'},
  {id:'burnout',    label:'Burnout 🔥'},
  {id:'career',     label:'Career confusion 🧭'},
  {id:'relationships', label:'Relationships 💬'},
  {id:'breakup',    label:'Breakup & divorce 💔'},
  {id:'grief',      label:'Grief & loss 🌿'},
  {id:'students',   label:'Student pressure 📚'},
  {id:'selfesteem', label:'Self-esteem 💙'},
  {id:'lgbtq',      label:'LGBTQ+ 🌈'},
  {id:'parenting',  label:'Parenting 👶'},
  {id:'startup',    label:'Startup journey 🚀'},
  {id:'general',    label:'Just need to talk ☕'},
]

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--bg:#FFFFFF;--light:#F0F8FC;--border:#D5EEF6;--gray:#5A7A8A;}
  body{font-family:'Nunito',sans-serif;background:var(--bg);color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .page{max-width:480px;margin:0 auto;padding:0 20px 60px;}
  .topbar{display:flex;align-items:center;gap:12px;padding:16px 0 24px;}
  .back{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,0.7);border:1.5px solid var(--border);cursor:pointer;font-size:18px;color:var(--navy);display:flex;align-items:center;justify-content:center;}

  .hero-card{background:var(--navy);border-radius:24px;padding:28px;margin-bottom:32px;text-align:center;}
  .hero-card h1{font-size:24px;font-weight:900;color:white;margin-bottom:10px;}
  .hero-card p{font-size:14px;color:rgba(201,231,244,0.8);font-weight:500;line-height:1.6;margin-bottom:24px;}
  .earn-row{display:flex;justify-content:center;gap:20px;}
  .earn-item .amount{font-size:24px;font-weight:900;color:var(--orange);}
  .earn-item .label{font-size:11px;color:rgba(201,231,244,0.7);font-weight:600;margin-top:2px;}

  .fee-box{background:rgba(26,143,160,0.08);border:1.5px solid rgba(26,143,160,0.2);border-radius:16px;padding:16px;margin-bottom:24px;}
  .fee-box h3{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .fee-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(26,143,160,0.12);font-size:13px;}
  .fee-row:last-child{border-bottom:none;font-weight:800;}
  .fee-row .label{color:var(--gray);font-weight:500;}
  .fee-row .value{color:var(--navy);font-weight:700;}
  .fee-row.highlight .value{color:#1A8FA0;font-weight:800;}

  .step-dots{display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:28px;}
  .dot{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;}
  .dot.done{background:var(--orange);color:white;} .dot.active{background:var(--navy);color:white;} .dot.todo{background:var(--light);color:var(--gray);}
  .dot-line{width:24px;height:2px;background:var(--border);}

  .section-title{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .section-sub{font-size:13px;color:var(--gray);font-weight:500;margin-bottom:20px;}
  .label{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px;display:block;}
  .input{width:100%;padding:13px 16px;font-family:'Nunito',sans-serif;font-size:15px;font-weight:600;color:var(--navy);border:2px solid var(--border);border-radius:14px;outline:none;background:white;transition:border-color 0.2s;margin-bottom:16px;}
  .input:focus{border-color:var(--navy);}
  .input::placeholder{color:#B0C8D8;font-weight:400;}
  textarea.input{resize:vertical;min-height:100px;line-height:1.5;}
  .tag-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;}
  .tag-chip{padding:10px 14px;border:2px solid var(--border);border-radius:12px;font-family:'Nunito',sans-serif;font-size:13px;font-weight:700;color:var(--gray);background:white;cursor:pointer;text-align:left;transition:all 0.15s;}
  .tag-chip.sel{border-color:var(--orange);background:#FFF3E0;color:var(--navy);}
  .rate-wrap{display:flex;align-items:center;gap:0;background:white;border:2px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:8px;}
  .rate-wrap:focus-within{border-color:var(--navy);}
  .rate-prefix{padding:13px 14px;font-weight:800;color:var(--gray);border-right:2px solid var(--border);}
  .rate-input{flex:1;padding:13px 14px;border:none;outline:none;font-family:'Nunito',sans-serif;font-size:18px;font-weight:800;color:var(--navy);}
  .rate-suffix{padding:13px 14px;font-size:13px;font-weight:600;color:var(--gray);}
  .rate-preview{background:var(--light);border-radius:12px;padding:12px 16px;margin-bottom:16px;}
  .rate-preview p{font-size:13px;color:var(--gray);font-weight:600;line-height:1.8;}
  .rate-preview strong{color:var(--navy);}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;}
  .disclaimer p{font-size:12px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .error-box{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:12px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#7A2020;font-weight:600;}
  .btn{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:50px;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 20px rgba(255,153,51,0.3);}
  .btn:hover{background:#e8861a;transform:translateY(-1px);}
  .btn:disabled{opacity:0.5;cursor:not-allowed;transform:none;}
  .btn-ghost{width:100%;padding:16px;font-family:'Nunito',sans-serif;font-size:15px;font-weight:700;color:var(--navy);background:white;border:2px solid var(--border);border-radius:50px;cursor:pointer;margin-top:10px;}
  .success{text-align:center;padding:40px 20px;}
  .success-icon{font-size:64px;margin-bottom:20px;}
  .success h2{font-size:24px;font-weight:900;color:var(--navy);margin-bottom:12px;}
  .success p{font-size:15px;color:var(--gray);font-weight:500;line-height:1.6;}
  .spin{display:inline-block;animation:spin 0.8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg);}}
`

export default function BecomeListenerPage() {
  const router  = useRouter()
  const [step, setStep]   = useState(1)
  const [name, setName]   = useState('')
  const [guardChecked, setGuardChecked] = useState(false)
  const [phone, setPhone] = useState('')
  const [bio, setBio]     = useState('')
  const [tags, setTags]   = useState<string[]>([])
  const [rate, setRate]   = useState('10')
  const [langs, setLangs] = useState<string[]>(['english'])
  const [aadhaar, setAadhaar] = useState('')
  const [bank, setBank]   = useState('')
  const [ifsc, setIfsc]   = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone]   = useState(false)
  const [error, setError] = useState('')

  // Guard: redirect already-approved listeners to their dashboard
  useEffect(() => {
    sb.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { setGuardChecked(true); return }
      const { data: lp } = await sb.from('listener_profiles').select('is_approved').eq('user_id', user.id).maybeSingle()
      if (lp?.is_approved) { router.replace('/dashboard'); return }
      setGuardChecked(true)
    })
  }, [])

  const rateNum     = Math.min(Math.max(parseInt(rate) || MIN_LISTENER_RATE, MIN_LISTENER_RATE), MAX_LISTENER_RATE)
  const earn15      = rateNum * 15
  const earn30      = rateNum * 30
  const earn45      = rateNum * 45
  const userPays15  = earn15 + 15
  const userPays30  = earn30 + 15
  const userPays45  = earn45 + 15

  function toggleTag(t: string) {
    setTags(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])
  }
  function toggleLang(l: string) {
    setLangs(p => p.includes(l) ? (p.length > 1 ? p.filter(x => x !== l) : p) : [...p, l])
  }

  async function submit() {
    setError('')
    setLoading(true)
    try {
      // Require authentication — listener applications are tied to a user account
      const { data: { user } } = await sb.auth.getUser()
      if (!user) {
        router.push('/auth?redirect=/become-listener')
        return
      }

      // Save application — is_approved: false means pending admin review
      // Aadhaar: store only last 4 digits per privacy best practice
      const aadhaarDigits = aadhaar.replace(/\s/g, '')
      const aadhaarLast4  = aadhaarDigits.slice(-4)

      const { error: profileErr } = await sb.from('listener_profiles').upsert({
        user_id:          user.id,
        bio:              bio.trim(),
        specialty_tags:   tags,
        languages_spoken: langs,
        rate_per_min:     rateNum,
        is_approved:      false,
        is_available:     false,
      }, { onConflict: 'user_id' })

      if (profileErr) throw profileErr

      // Save payout + verification details separately
      await sb.from('listener_applications').upsert({
        user_id:       user.id,
        name:          name.trim(),
        phone:         phone.trim(),
        aadhaar_last4: aadhaarLast4,
        bank_account:  bank.trim(),
        ifsc_code:     ifsc.trim().toUpperCase(),
        status:        'pending',
      }, { onConflict: 'user_id' })

      // Update user name if not already set
      await sb.from('users').update({ name: name.trim() }).eq('id', user.id)

      setDone(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Listener application error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!guardChecked) return (
    <>
      <style>{S}</style>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'Nunito,sans-serif',color:'#0F4867'}}>Loading...</div>
    </>
  )

  if (done) return (
    <>
      <style>{S}</style>
      <div className="page">
        <div className="success">
          <div className="success-icon">🎉</div>
          <h2>Application submitted!</h2>
          <p>We&apos;ll review your profile within 24 hours and notify you via WhatsApp on {phone}. Once approved, you&apos;ll go live and start earning.</p>
          <a href="/"><button className="btn" style={{marginTop:28}}>Back to home</button></a>
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
            ? <button className="back" onClick={() => setStep(s=>s-1)}>←</button>
            : <a href="/" className="back">←</a>
          }
        </div>

        {step === 1 && (
          <div className="hero-card">
            <h1>Earn by listening 🎧</h1>
            <p>You keep 100% of your rate. LeanOn adds a small flat fee on top — paid by the user, not taken from you.</p>
            <div className="earn-row">
              <div className="earn-item"><div className="amount">₹8–25</div><div className="label">per minute (you set it)</div></div>
              <div className="earn-item"><div className="amount">₹13K+</div><div className="label">per month possible</div></div>
              <div className="earn-item"><div className="amount">100%</div><div className="label">of your rate you keep</div></div>
            </div>
          </div>
        )}

        <div className="step-dots">
          {[1,2,3].map((s,i) => (
            <span key={s} style={{display:'contents'}}>
              {i > 0 && <div className="dot-line" />}
              <div className={`dot ${step > s ? 'done' : step === s ? 'active' : 'todo'}`}>
                {step > s ? '✓' : s}
              </div>
            </span>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div className="section-title">About you</div>
            <p className="section-sub">Your story is your profile. Be real — it builds trust.</p>
            <label className="label">Full name</label>
            <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
            <label className="label">WhatsApp number</label>
            <input className="input" type="tel" placeholder="98765 43210" value={phone} onChange={e=>setPhone(e.target.value)} />
            <label className="label">Your story (min 50 characters — this is shown on your profile)</label>
            <textarea className="input" placeholder="e.g. I went through a painful divorce at 29. It took 2 years to rebuild. I'm here for people who feel like there's no light at the end of the tunnel — I've been there and found my way back." value={bio} onChange={e=>setBio(e.target.value)} />
            <label className="label">Topics you can speak to (select all that apply)</label>
            <div className="tag-grid">
              {TAGS.map(t => (
                <button key={t.id} className={`tag-chip${tags.includes(t.id)?' sel':''}`} onClick={()=>toggleTag(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
            <label className="label" style={{marginTop:4}}>Languages you can listen in 🌐 (select all)</label>
            <div className="tag-grid">
              {LANGUAGES.map(l => (
                <button key={l.id} className={`tag-chip${langs.includes(l.id)?' sel':''}`} onClick={()=>toggleLang(l.id)}>
                  {l.label}
                </button>
              ))}
            </div>
            <button className="btn" onClick={()=>setStep(2)} disabled={!name||!phone||bio.length<50||tags.length===0}>
              Next: Set your rate →
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div className="section-title">Set your rate</div>
            <p className="section-sub">You keep 100% of this. New listeners start at ₹8–12/min and can increase as they get reviews.</p>

            <label className="label">Your rate per minute</label>
            <div className="rate-wrap">
              <span className="rate-prefix">₹</span>
              <input className="rate-input" type="number" min={MIN_LISTENER_RATE} max={MAX_LISTENER_RATE} value={rate} onChange={e=>setRate(e.target.value)} />
              <span className="rate-suffix">/ minute</span>
            </div>

            <div style={{background:'#F0F8FC',borderRadius:12,padding:'10px 14px',marginBottom:12,fontSize:13,color:'#0F4867',fontWeight:600}}>
              📅 Sessions are booked in <strong>15, 30, or 45 minute slots</strong>. No open-ended calls — clean start and end times for both sides.
            </div>

            <div className="rate-preview">
              <p>At <strong>₹{rateNum}/min</strong> you earn:</p>
              <p>15 min → you earn <strong>₹{earn15}</strong> · user pays <strong>₹{userPays15}</strong></p>
              <p>30 min → you earn <strong>₹{earn30}</strong> · user pays <strong>₹{userPays30}</strong></p>
              <p>45 min → you earn <strong>₹{earn45}</strong> · user pays <strong>₹{userPays45}</strong></p>
            </div>

            <div className="fee-box">
              <h3>How the ₹15 platform fee works</h3>
              <div className="fee-row"><span className="label">Your rate (15 min at ₹{rateNum}/min)</span><span className="value">₹{earn15}</span></div>
              <div className="fee-row"><span className="label">LeanOn platform fee (paid by user)</span><span className="value">+ ₹15</span></div>
              <div className="fee-row"><span className="label">Razorpay fee (paid by LeanOn)</span><span className="value">~ −₹3</span></div>
              <div className="fee-row highlight"><span className="label">You receive</span><span className="value">₹{earn15} ✓</span></div>
            </div>

            <label className="label">Aadhaar number (for identity verification)</label>
            <input className="input" type="text" placeholder="XXXX XXXX XXXX" maxLength={14}
              value={aadhaar} onChange={e=>setAadhaar(e.target.value.replace(/[^\d\s]/g,''))} />
            <div className="disclaimer">
              <p>🔒 Only the last 4 digits of your Aadhaar are stored for reference. The full number is never retained. Used solely for identity verification per Indian regulations.</p>
            </div>
            <button className="btn" onClick={()=>setStep(3)} disabled={!aadhaar||aadhaar.replace(/\s/g,'').length<12}>
              Next: Bank details →
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <div className="section-title">Bank account for payouts</div>
            <p className="section-sub">Your earnings are transferred within 3 business days of completing sessions.</p>
            <label className="label">Account number</label>
            <input className="input" type="text" placeholder="Enter account number" value={bank} onChange={e=>setBank(e.target.value)} />
            <label className="label">IFSC code</label>
            <input className="input" type="text" placeholder="e.g. SBIN0001234" value={ifsc} onChange={e=>setIfsc(e.target.value.toUpperCase())} />
            <div className="disclaimer">
              <p>⚠️ <strong>Important:</strong> LeanOn is a peer support platform. By applying, you confirm you are sharing personal lived experience only — not providing clinical advice, therapy, or counseling of any kind.</p>
            </div>
            {error && <div className="error-box">{error}</div>}
            <button className="btn" onClick={submit} disabled={loading||!bank||!ifsc}>
              {loading ? <span className="spin">⟳</span> : 'Submit application →'}
            </button>
            <a href="/"><button className="btn-ghost">Cancel</button></a>
          </>
        )}
      </div>
    </>
  )
}
