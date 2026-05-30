import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How LeanOn Works | Peer Support in 4 Steps',
  description: 'Learn how LeanOn works in 4 simple steps. Sign up in 30 seconds, browse peer listeners, start a free session, and get the support you need.',
  keywords: ['how leanon works', 'how peer support works', 'leanon steps', 'start peer support india'],
  alternates: { canonical: 'https://www.leanon.app/how-leanon-works' },
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to get peer emotional support on LeanOn',
  description: 'Get peer emotional support on LeanOn in 4 simple steps.',
  author: { '@type': 'Organization', name: 'LeanOn Editorial Team' },
  step: [
    { '@type': 'HowToStep', name: 'Sign up', text: 'Enter your mobile number and verify with OTP. No full name required. Takes 30 seconds.', position: 1 },
    { '@type': 'HowToStep', name: 'Browse listeners', text: 'Browse verified peer listeners by topic, language, and availability. Read their stories.', position: 2 },
    { '@type': 'HowToStep', name: 'Start a free session', text: 'Your first 5-minute session is completely free. No wallet top-up needed.', position: 3 },
    { '@type': 'HowToStep', name: 'Continue if it helps', text: 'If your session feels right, book a 15, 30, or 45-minute follow-up at ₹165–₹395.', position: 4 },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;color:var(--navy);line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .steps{display:flex;flex-direction:column;gap:16px;margin-bottom:32px;}
  .step{display:flex;gap:16px;align-items:flex-start;background:white;border:1.5px solid var(--border);border-radius:20px;padding:20px;}
  .step-num{width:48px;height:48px;border-radius:50%;background:var(--navy);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:20px;color:white;flex-shrink:0;}
  .step-content h2{font-size:17px;font-weight:800;margin-bottom:6px;}
  .step-content p{font-size:14px;color:var(--gray);line-height:1.65;}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
`

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{height:48}} /></a>
        <a href="/auth"><button className="btn" style={{fontSize:13,padding:'8px 20px'}}>Try free</button></a>
      </nav>
      <div className="page">
        <a href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:700,color:'var(--gray)',marginBottom:28}}>← Back</a>
        <h1>How LeanOn Works — 4 Simple Steps</h1>
        <p className="lead">Getting emotional support on LeanOn takes under 60 seconds to set up. No appointments, no paperwork, no insurance forms. Just real humans ready to listen.</p>

        <div className="disclaimer">
          LeanOn provides peer emotional support, not professional therapy. If you need clinical mental health care, please consult a licensed professional.
        </div>

        <div className="steps">
          {[
            { n: '1', title: 'Sign up in 30 seconds', body: 'Enter your Indian mobile number and verify with a one-time SMS code. No full name needed. No email. No credit card. You\'re anonymous by default.' },
            { n: '2', title: 'Browse peer listeners', body: 'Browse real humans verified by LeanOn — not bots, not scripts. Filter by topic (loneliness, anxiety, grief, burnout), language, and availability. Read their personal stories to find someone who resonates.' },
            { n: '3', title: 'Start with a free 5-min session', body: 'Your first session is completely free. No wallet top-up required. Connect via text or voice chat and see if this listener is right for you.' },
            { n: '4', title: 'Continue if it helps', body: 'If the session feels meaningful, book a 15, 30, or 45-minute follow-up. Pricing starts at ₹165 for 15 minutes — less than a cup of coffee at most cafés.' },
          ].map((s, i) => (
            <div key={i} className="step">
              <div className="step-num">{s.n}</div>
              <div className="step-content">
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta">
          <h2>Start your free session</h2>
          <p>No card, no commitment. Your first 5 minutes are free.</p>
          <a href="/browse"><button className="btn">Browse listeners →</button></a>
        </div>
      </div>
    </>
  )
}
