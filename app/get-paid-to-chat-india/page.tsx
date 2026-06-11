import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Get Paid to Chat India — Become a Listener on LeanOn',
  description: 'Earn ₹8–25 per minute chatting with people who need support. Become a LeanOn peer listener in India — flexible hours, your own rate, no degree required. Apply free.',
  alternates: { canonical: 'https://www.leanon.app/get-paid-to-chat-india' },
  keywords: ['get paid to chat India', 'earn money chatting India', 'become a listener India', 'work from home India chat'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Get Paid to Chat India — Become a LeanOn Listener',
  description: 'Earn ₹8–25 per minute helping people who need support.',
  url: 'https://www.leanon.app/get-paid-to-chat-india',
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.page{max-width:640px;margin:0 auto;padding:32px 24px 80px;}
h1{font-size:clamp(26px,5vw,38px);font-weight:900;line-height:1.15;margin-bottom:16px;}
h1 span{color:var(--orange);}
.lead{font-size:16px;color:var(--gray);line-height:1.75;font-weight:500;margin-bottom:28px;}
.earn-card{background:var(--navy);border-radius:20px;padding:24px;margin-bottom:20px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center;}
.earn-num{font-size:28px;font-weight:900;color:var(--orange);}
.earn-label{font-size:12px;color:rgba(201,231,244,.7);font-weight:600;margin-top:4px;}
.section{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:18px;}
.section h2{font-size:18px;font-weight:800;margin-bottom:12px;}
.section p{font-size:14px;color:#3A6070;line-height:1.75;margin-bottom:10px;}
.section p:last-child{margin-bottom:0;}
.req-list{display:flex;flex-direction:column;gap:8px;margin-top:10px;}
.req{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:#3A6070;line-height:1.55;}
.req-icon{font-size:18px;flex-shrink:0;}
.steps{display:flex;flex-direction:column;gap:12px;margin-top:12px;}
.step{display:flex;gap:14px;align-items:flex-start;}
.step-num{width:30px;height:30px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;color:white;flex-shrink:0;}
.step-text{font-size:14px;color:#3A5A6E;line-height:1.55;font-weight:600;padding-top:5px;}
.cta-box{background:var(--orange);border-radius:20px;padding:28px;text-align:center;margin-top:24px;}
.cta-box h2{font-size:18px;font-weight:900;color:white;margin-bottom:10px;}
.cta-box p{font-size:13px;color:rgba(255,255,255,.85);margin-bottom:20px;font-weight:500;}
.btn{background:white;color:var(--orange);font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:none;cursor:pointer;}
.back{font-size:14px;font-weight:700;color:var(--gray);margin-bottom:24px;display:inline-block;}
`

export default function GetPaidToChatIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>
      <div className="page">
        <a href="/" className="back">← LeanOn Home</a>
        <h1>Get <span>Paid to Chat</span> India — Become a LeanOn Listener</h1>
        <p className="lead">
          Turn your lived experience into income. Earn ₹8–25 per minute helping people who need someone to talk to. Set your own hours. Work from anywhere. No degree required.
        </p>

        <div className="earn-card">
          <div><div className="earn-num">₹8–25</div><div className="earn-label">Per minute earned</div></div>
          <div><div className="earn-num">100%</div><div className="earn-label">Of your rate you keep</div></div>
          <div><div className="earn-num">You</div><div className="earn-label">Set your own price</div></div>
        </div>

        <div className="section">
          <h2>What does a LeanOn listener do?</h2>
          <p>A LeanOn listener is a peer supporter — someone who draws on their own lived experience to provide empathetic, non-judgmental support to people going through a difficult time. You&apos;re not a therapist, and you don&apos;t need to be. You just need to have been through something, and genuinely want to help others through it.</p>
          <p>Sessions are 5 to 45 minutes. You choose when you&apos;re available. When you&apos;re online, you receive session requests. You can text or voice call. You earn immediately upon session completion, credited to your LeanOn wallet.</p>
        </div>

        <div className="section">
          <h2>Who can become a listener?</h2>
          <div className="req-list">
            {[
              { icon: '💙', text: 'You have lived through loneliness, burnout, grief, anxiety, a breakup, career confusion, student stress, or something else that has given you genuine perspective' },
              { icon: '🎧', text: 'You are empathetic and a genuinely good listener — people come to you when they need to talk' },
              { icon: '📱', text: 'You have a smartphone and a stable internet connection' },
              { icon: '🇮🇳', text: 'You are based in India (all states and cities welcome)' },
              { icon: '🚫', text: 'No degree, certification, or clinical background required' },
            ].map((r, i) => (
              <div key={i} className="req"><span className="req-icon">{r.icon}</span><span>{r.text}</span></div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>How to get started</h2>
          <div className="steps">
            {[
              'Apply at LeanOn — share your lived experience and why you want to help',
              'Our team reviews your application (usually within 48 hours)',
              'Once approved, complete your listener profile with your bio, specialties, and rate',
              'Go online and start receiving session requests — earn immediately',
            ].map((s, i) => (
              <div key={i} className="step">
                <div className="step-num">{i + 1}</div>
                <div className="step-text">{s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Earnings potential</h2>
          <p>At ₹10/min (a starting rate), a single 30-minute session earns you ₹300. Do 3 sessions a day and earn ₹900/day — ₹27,000/month, fully flexible. Many experienced listeners charge ₹20–25/min, earning ₹600 per 30-minute session.</p>
          <p>You keep 100% of your rate. LeanOn charges seekers a flat ₹10 platform fee on top — this never comes out of your earnings. Payouts are processed via UPI within 3 business days.</p>
        </div>

        <div className="cta-box">
          <h2>Apply to become a listener — it&apos;s free</h2>
          <p>Start earning within 48 hours of applying.</p>
          <a href="/become-listener"><button className="btn">Apply now →</button></a>
        </div>
      </div>
    </>
  )
}
