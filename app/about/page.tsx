import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About LeanOn — Our Mission | Peer Support India',
  description: "LeanOn is India's peer support platform. Our mission: give everyone access to someone to lean on. Learn about our story, values, and how we are changing emotional wellness in India.",
  keywords: ['about leanon', 'leanon mission', 'peer support India mission', 'lean on app story'],
  alternates: { canonical: 'https://leanon.app/about' },
}

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
  .page{max-width:640px;margin:0 auto;padding:16px 24px 80px;}
  .back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--gray);margin-bottom:32px;}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,42px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 span{color:var(--orange);}
  .lead{font-size:17px;color:var(--gray);line-height:1.75;font-weight:500;}
  .story-section{background:white;border-radius:24px;padding:28px;margin-bottom:24px;border:1.5px solid var(--border);}
  .story-section h2{font-size:20px;font-weight:800;color:var(--navy);margin-bottom:14px;}
  .story-section p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:12px;}
  .story-section p:last-child{margin-bottom:0;}
  .values-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .value-card{background:white;border:1.5px solid var(--border);border-radius:18px;padding:18px;}
  .value-icon{font-size:28px;margin-bottom:10px;}
  .value-title{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .value-desc{font-size:13px;color:var(--gray);line-height:1.55;font-weight:500;}
  .mission-card{background:var(--navy);border-radius:24px;padding:28px;margin-bottom:24px;color:white;}
  .mission-card h2{font-size:18px;font-weight:800;margin-bottom:14px;}
  .mission-card p{font-size:14px;color:rgba(201,231,244,0.85);line-height:1.75;font-weight:500;margin-bottom:10px;}
  .mission-card p:last-child{margin-bottom:0;}
  .cta-section{text-align:center;padding:32px 24px;background:white;border-radius:24px;border:1.5px solid var(--border);}
  .cta-section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .cta-section p{font-size:14px;color:var(--gray);font-weight:500;margin-bottom:24px;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:16px 32px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
`

export default function AboutPage() {
  return (
    <>
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>
      <div className="page">
        <a href="/" className="back">← Back to home</a>
        <div className="hero">
          <p className="tag">Our story</p>
          <h1>We built LeanOn because <span>nobody should be alone at 2 AM.</span></h1>
          <p className="lead">LeanOn is a peer support platform connecting people who are struggling with real humans who have been through the same thing — and found their way through.</p>
        </div>

        <div className="story-section">
          <h2>Why LeanOn exists</h2>
          <p>There are millions of people in India who are lonely, overwhelmed, anxious, or grieving — right now, tonight. They aren&apos;t necessarily mentally ill. They don&apos;t need a diagnosis. They just need someone to talk to who gets it.</p>
          <p>The problem is that therapy is expensive, stigmatized, and requires scheduling in advance. Friends are unavailable or don&apos;t understand. Family can&apos;t always be the safe space you need, especially in joint households.</p>
          <p>LeanOn fills this gap. Our listeners aren&apos;t therapists — they&apos;re real people who have been through what you&apos;re going through. They&apos;ve rebuilt after divorce, survived burnout, navigated grief, failed and started over. They understand in a way that no degree can teach.</p>
        </div>

        <div className="values-grid">
          {[
            {icon:'🤝',title:'Human first',desc:'Every session is a real human conversation. No bots, no scripted responses, no clinical detachment.'},
            {icon:'⚡',title:'Instant access',desc:'No appointments. No wait lists. When you need support, it should be available now.'},
            {icon:'🔒',title:'Private always',desc:'Your sessions are private. We will never share your conversations or identity.'},
            {icon:'💰',title:'Genuinely affordable',desc:'Starting at ₹165 for 15 minutes. Less than a cup of coffee at most cafes.'},
            {icon:'🇮🇳',title:'Built for India',desc:'Text-first for joint family privacy. Phone OTP, UPI payments, 12 Indian languages.'},
            {icon:'❤️',title:'Peer, not clinical',desc:'We are not therapy. We are honest about that. Peer support is its own valid category.'},
          ].map((v,i)=>(
            <div key={i} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <div className="value-title">{v.title}</div>
              <div className="value-desc">{v.desc}</div>
            </div>
          ))}
        </div>

        <div className="mission-card">
          <h2>Our mission</h2>
          <p>In India, 1 in 7 people experiences a mental health condition, yet fewer than 1% receive any form of support. Therapy has a stigma. Hotlines feel clinical. Friends get tired. Family doesn&apos;t always understand.</p>
          <p>LeanOn exists to close that gap — not with doctors or algorithms, but with people. Real people who have lived through what you&apos;re facing and who choose to sit with you in it. Available now. In your language. At a price that doesn&apos;t sting.</p>
          <p>Someone to lean on, whenever you need one.</p>
        </div>

        <div className="cta-section">
          <h2>Ready to lean on someone?</h2>
          <p>Your first 5 minutes are completely free. No card, no commitment.</p>
          <a href="/auth"><button className="btn-primary">Start free now →</button></a>
        </div>
      </div>
    </>
  )
}
