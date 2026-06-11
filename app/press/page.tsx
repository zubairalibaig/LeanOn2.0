import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'LeanOn in the Press | Media Kit & Coverage',
  description: 'LeanOn press coverage, media kit, and contact for journalists. India\'s peer emotional support platform.',
  alternates: { canonical: 'https://www.leanon.app/press' },
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
.nav-logo{height:56px;}
.btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
.page{max-width:640px;margin:0 auto;padding:16px 24px 80px;}
.back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--gray);margin-bottom:32px;}
.hero{margin-bottom:40px;}
.tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;}
h1{font-size:clamp(26px,5vw,38px);font-weight:900;line-height:1.15;margin-bottom:14px;}
.lead{font-size:16px;color:var(--gray);line-height:1.75;font-weight:500;}
.section{background:white;border:1.5px solid var(--border);border-radius:22px;padding:26px;margin-bottom:20px;}
.section h2{font-size:19px;font-weight:800;margin-bottom:14px;}
.section p{font-size:14px;color:#3A6070;line-height:1.75;margin-bottom:10px;}
.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;}
.stat{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:16px;text-align:center;}
.stat-num{font-size:26px;font-weight:900;color:var(--navy);}
.stat-label{font-size:12px;color:var(--gray);font-weight:600;margin-top:4px;}
.press-mentions{display:flex;flex-direction:column;gap:12px;}
.mention{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px;}
.mention-source{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;}
.mention-headline{font-size:15px;font-weight:700;color:var(--navy);line-height:1.4;}
.fact-sheet{display:flex;flex-direction:column;gap:8px;}
.fact{display:flex;gap:10px;font-size:14px;color:#3A6070;line-height:1.6;}
.fact strong{color:var(--navy);font-weight:800;min-width:120px;flex-shrink:0;}
.contact-box{background:var(--navy);border-radius:22px;padding:28px;text-align:center;margin-top:24px;}
.contact-box h2{font-size:18px;font-weight:900;color:white;margin-bottom:10px;}
.contact-box p{font-size:14px;color:rgba(201,231,244,.8);font-weight:500;margin-bottom:20px;}
.contact-email{color:#FFD580;font-weight:800;font-size:16px;text-decoration:underline;}
`

export default function PressPage() {
  return (
    <>
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>
      <div className="page">
        <a href="/" className="back">← Back to home</a>
        <div className="hero">
          <p className="tag">Press &amp; Media</p>
          <h1>LeanOn in the Press</h1>
          <p className="lead">LeanOn is India&apos;s peer emotional support platform — connecting people with real human listeners, anonymously. We welcome press inquiries and media collaboration.</p>
        </div>

        <div className="stat-grid">
          {[
            { num: '50+', label: 'Verified listeners' },
            { num: '1,000+', label: 'Sessions completed' },
            { num: '4.8★', label: 'Average rating' },
          ].map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="section">
          <h2>About LeanOn</h2>
          <p>LeanOn is India&apos;s first peer emotional support platform connecting people experiencing loneliness, burnout, anxiety, grief, and relationship stress with verified peer listeners — real humans who have lived through the same challenges.</p>
          <p>Unlike therapy (expensive, stigmatised, appointment-based) or AI chatbots (no genuine empathy), LeanOn offers authentic human connection, available 24/7, starting at ₹0 for the first five minutes.</p>
          <p>LeanOn is built for India — with phone OTP sign-up, UPI payments, support for 12 Indian languages, and a text-first design for joint-family privacy.</p>
        </div>

        <div className="section">
          <h2>Media Mentions</h2>
          <div className="press-mentions">
            {[
              { source: 'ProductHunt', headline: 'LeanOn — Anonymous peer support for India, starting at ₹0' },
              { source: 'Reddit r/india', headline: '"Finally an app that gets the Indian context for mental health"' },
              { source: 'Reddit r/MentalHealthIndia', headline: 'LeanOn — real humans, not AI, available at 2 AM' },
            ].map((m, i) => (
              <div key={i} className="mention">
                <div className="mention-source">{m.source}</div>
                <div className="mention-headline">&ldquo;{m.headline}&rdquo;</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Key Facts</h2>
          <div className="fact-sheet">
            {[
              ['Product', 'Peer emotional support platform (web app, mobile-first)'],
              ['Market', 'India — Bengaluru, Mumbai, Delhi, Chennai, Hyderabad and all cities'],
              ['Model', 'Pay-per-session wallet; listeners keep 100% of their rate'],
              ['Free trial', 'First 5 minutes completely free, no payment method required'],
              ['Pricing', '₹160 for 15 min, ₹310 for 30 min (listener rate + ₹10 platform fee)'],
              ['Technology', 'Next.js, Supabase, Agora (voice), Razorpay (payments)'],
              ['Languages', 'English + 11 Indian languages'],
              ['Crisis policy', 'NIMHANS (080-46110007) and Tele-MANAS (14416) surfaced in sessions'],
            ].map(([k, v], i) => (
              <div key={i} className="fact"><strong>{k}:</strong> {v}</div>
            ))}
          </div>
        </div>

        <div className="contact-box">
          <h2>Press Inquiries</h2>
          <p>For interviews, data, or media partnerships, please contact our team.</p>
          <a href="mailto:press@leanon.app" className="contact-email">press@leanon.app</a>
        </div>
      </div>
    </>
  )
}
