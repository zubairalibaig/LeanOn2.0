import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Get Paid to Chat India — Become a Peer Listener on LeanOn',
  description: 'Earn ₹8–25 per minute providing real emotional support to people in India. LeanOn is a vetted peer support platform — not a random chat app. Apply to become a listener.',
  alternates: { canonical: 'https://www.leanon.app/get-paid-to-chat-india' },
  keywords: ['get paid to chat India', 'peer listener India', 'emotional support work from home India', 'become a peer counsellor India', 'earn money helping people India'],
  robots: { index: false, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Get Paid to Chat India — Become a Peer Listener on LeanOn',
  description: 'A vetted peer support platform where empathetic listeners earn ₹8–25 per minute providing real emotional support.',
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
.not-box{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:20px;padding:24px;margin-bottom:18px;}
.not-box h2{font-size:18px;font-weight:800;margin-bottom:12px;color:var(--navy);}
.not-list{display:flex;flex-direction:column;gap:8px;}
.not-item{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:#5A4020;line-height:1.55;}
.not-icon{font-size:18px;flex-shrink:0;}
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
        <h1>Get <span>Paid to Listen</span> — Peer Support Work in India</h1>
        <p className="lead">
          LeanOn pays empathetic people to provide real emotional support. Not a chat gig. Not a quick side hustle. A vetted platform for people who genuinely want to help others through hard times.
        </p>

        <div className="earn-card">
          <div><div className="earn-num">₹8–25</div><div className="earn-label">Per minute earned</div></div>
          <div><div className="earn-num">60%</div><div className="earn-label">Of every session you keep</div></div>
          <div><div className="earn-num">Vetted</div><div className="earn-label">Application reviewed</div></div>
        </div>

        <div className="not-box">
          <h2>Let&apos;s be upfront — LeanOn is not:</h2>
          <div className="not-list">
            {[
              { icon: '✗', text: 'An anonymous chat app where anyone can sign up and start earning' },
              { icon: '✗', text: 'A quick money or passive income scheme' },
              { icon: '✗', text: 'A platform for casual, entertainment, or social chat' },
              { icon: '✗', text: 'A place for inappropriate conversations of any kind — any such behaviour results in an immediate permanent ban' },
            ].map((r, i) => (
              <div key={i} className="not-item"><span className="not-icon">{r.icon}</span><span>{r.text}</span></div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>What a LeanOn listener actually does</h2>
          <p>A listener is a trained peer supporter — someone who uses their own lived experience to hold space for people going through loneliness, grief, anxiety, burnout, relationship pain, or career confusion. The core skill is empathy: truly hearing someone, without judgement, without rushing to fix.</p>
          <p>Every application is personally reviewed. We look for emotional maturity, a genuine desire to help, and the ability to hold a difficult conversation with care. This is meaningful, skilled work — and we pay for it accordingly.</p>
          <p>Sessions are 5 to 45 minutes. You set your own hours and your own rate. Earnings are credited to your wallet after each session and paid out via UPI.</p>
        </div>

        <div className="section">
          <h2>Who is a good fit?</h2>
          <div className="req-list">
            {[
              { icon: '💙', text: 'You have personally lived through something hard — loneliness, grief, burnout, anxiety, a breakup, student stress — and it has given you genuine perspective' },
              { icon: '🎧', text: 'People in your life already come to you when they need to talk. You are patient, present, and non-judgemental' },
              { icon: '🌱', text: 'You want to do meaningful work — not just fill time or earn a few extra rupees' },
              { icon: '📱', text: 'You have a smartphone and a stable internet connection' },
              { icon: '🇮🇳', text: 'You are based in India (all states and cities welcome)' },
            ].map((r, i) => (
              <div key={i} className="req"><span className="req-icon">{r.icon}</span><span>{r.text}</span></div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>The application process</h2>
          <div className="steps">
            {[
              'Apply — tell us about your lived experience and why you want to support others',
              'Our team personally reviews every application (within 48 hours)',
              'Approved listeners complete their profile: bio, specialties, and rate',
              'Go online when you\'re ready and receive session requests',
            ].map((s, i) => (
              <div key={i} className="step">
                <div className="step-num">{i + 1}</div>
                <div className="step-text">{s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Earnings</h2>
          <p>At ₹10/min, a 30-minute text chat earns you ₹180 and a 30-minute voice call (priced ₹5/min higher) earns ₹270. Three text sessions a day is ~₹540 — roughly ₹16,000/month, around your existing schedule. Experienced listeners charge ₹20–25/min, taking home ₹360+ per 30-minute session.</p>
          <p>Payouts are processed via UPI within 3 business days. You keep 60% of every session; LeanOn&apos;s 40% service fee covers finding seekers, secure payments, verification, safety and support.</p>
        </div>

        <div className="cta-box">
          <h2>Apply to become a listener</h2>
          <p>Every application is reviewed. If this resonates with you, we want to hear from you.</p>
          <a href="/become-listener"><button className="btn">Apply now →</button></a>
        </div>
      </div>
    </>
  )
}
