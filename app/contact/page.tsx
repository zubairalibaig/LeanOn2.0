'use client'
import { useState } from 'react'

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:560px;margin:0 auto;padding:16px 24px 80px;}
  .back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--gray);margin-bottom:28px;}
  h1{font-size:28px;font-weight:900;color:var(--navy);margin-bottom:8px;}
  .sub{font-size:15px;color:var(--gray);font-weight:500;margin-bottom:32px;line-height:1.6;}
  .form-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;}
  .form-card h2{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:20px;}
  .label{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px;display:block;}
  .input{width:100%;padding:13px 16px;font-family:'Nunito',sans-serif;font-size:15px;font-weight:600;color:var(--navy);border:2px solid var(--border);border-radius:14px;outline:none;background:white;transition:border-color 0.2s;margin-bottom:16px;}
  .input:focus{border-color:var(--navy);}
  .input::placeholder{color:#B0C8D8;font-weight:400;}
  textarea.input{resize:vertical;min-height:110px;line-height:1.5;}
  select.input{cursor:pointer;}
  .btn{width:100%;padding:15px;font-family:'Nunito',sans-serif;font-size:16px;font-weight:800;color:white;background:var(--orange);border:none;border-radius:50px;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 16px rgba(255,153,51,0.3);}
  .btn:hover{background:#e8861a;}
  .success{text-align:center;padding:32px 0;}
  .success-icon{font-size:48px;margin-bottom:16px;}
  .success h3{font-size:20px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .success p{font-size:14px;color:var(--gray);font-weight:500;}
`

export default function ContactPage() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [type, setType]       = useState('general')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  async function submit() {
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, type, message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit')
      setSent(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>
      <div className="page">
        <a href="/" className="back">← Back to home</a>
        <h1>Get in touch</h1>
        <p className="sub">Have a question, feedback, or issue? We&apos;ll get back to you within 24 hours.</p>

        <div className="form-card">
          <h2>Send us a message</h2>
          {sent ? (
            <div className="success">
              <div className="success-icon">✅</div>
              <h3>Message sent!</h3>
              <p>We&apos;ll get back to you within 24 hours at your email.</p>
            </div>
          ) : (
            <>
              <label className="label">Your name</label>
              <input className="input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
              <label className="label">Email address</label>
              <input className="input" type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
              <label className="label">Topic</label>
              <select className="input" value={type} onChange={e=>setType(e.target.value)}>
                <option value="general">General enquiry</option>
                <option value="seeker">Question as a user</option>
                <option value="listener">Question as a listener</option>
                <option value="refund">Refund request</option>
                <option value="safety">Safety concern</option>
                <option value="legal">Legal / compliance</option>
                <option value="press">Press / media</option>
                <option value="partnership">Partnership</option>
              </select>
              <label className="label">Message</label>
              <textarea className="input" placeholder="How can we help?" value={message} onChange={e=>setMessage(e.target.value)} />
              {submitError && (
                <p style={{color:'#E53935',fontSize:13,fontWeight:700,marginBottom:12}}>{submitError}</p>
              )}
              <button className="btn" onClick={submit} disabled={submitting||!name||!email||!message}>
                {submitting ? '⟳ Sending...' : 'Send message →'}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
