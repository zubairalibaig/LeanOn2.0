import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Earn Money by Listening to People Online in India | LeanOn',
  description: 'Turn your empathy into income. Earn ₹300–₹800/hour as a peer listener on LeanOn. Work from home, set your own hours. No degree needed — lived experience is enough.',
  keywords: [
    'earn money by listening online India', 'paid listener job India',
    'get paid to listen to people India', 'earn from talking online India',
    'work from home listener India', 'side income listener India',
    'make money chatting online India', 'earn money empathy India',
    'online listener job India', 'paid peer listener India',
    'earn from home without investment India', 'listening job from home India',
    'how to earn by helping people online India', 'emotional support job India',
    'listener income India',
  ],
  alternates: { canonical: 'https://www.leanon.app/earn-by-listening', languages: { 'en-IN': 'https://www.leanon.app/earn-by-listening' } },
  openGraph: {
    title: 'Earn Money by Listening to People Online in India | LeanOn',
    description: 'Turn your empathy into income. Earn ₹300–₹800/hour as a peer listener on LeanOn. Work from home, set your own hours.',
    url: 'https://www.leanon.app/earn-by-listening',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Earn by Listening' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much can I earn as a peer listener on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Listeners on LeanOn set their own session rate (typically ₹100–₹300 per 15 minutes). Active listeners conducting 3–5 sessions per day can earn ₹300–₹800 per hour of sessions. Your earnings depend on your rate, availability, and how many seekers book with you. There are no upfront costs or hidden deductions.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a degree or certification to become a listener on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'No degree or certification is required. What matters is lived experience — you should have personally navigated what your future seekers are going through (loneliness, burnout, anxiety, grief, relationship stress, etc.). You will complete LeanOn\'s own active listening training. This is peer support, not therapy — your qualification is your story.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get paid as a listener on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Earnings accumulate in your listener dashboard. You can request a payout to your UPI ID at any time (subject to minimum thresholds). Payouts are processed within 48–72 hours. There are no joining fees, subscription fees, or hidden deductions.' },
    },
    {
      '@type': 'Question',
      name: 'Can I do this as a side income while working a full-time job?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — and this is how most LeanOn listeners start. You set your own availability. Many listeners take sessions during lunch breaks, evenings, or weekends. You can turn your listener status on or off at any time from the app. There is no minimum commitment.' },
    },
    {
      '@type': 'Question',
      name: 'What topics can I listen to as a peer listener on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'You choose the topics you are qualified to support based on your own experience: loneliness, anxiety, burnout, grief, career stress, relationship issues, student stress, or any combination. You only take sessions on topics you select — you are never assigned calls outside your comfort zone.' },
    },
    {
      '@type': 'Question',
      name: 'Is being a LeanOn listener emotionally draining?',
      acceptedAnswer: { '@type': 'Answer', text: 'It can be if you do not protect yourself. LeanOn recommends clear session boundaries and community support for listeners. Most listeners find the work deeply fulfilling rather than draining because they are making a real difference using experience they already carry. The key is to set your own pace and limits.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Earn by Listening', item: 'https://www.leanon.app/earn-by-listening' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;--green:#16a34a;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:780px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;}
  .stat{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px 20px;text-align:center;}
  .stat-value{font-size:28px;font-weight:900;color:var(--teal);margin-bottom:4px;}
  .stat-label{font-size:13px;font-weight:700;color:var(--gray);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:20px;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .personas{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;}
  .persona{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:20px;}
  .persona-emoji{font-size:32px;margin-bottom:12px;}
  .persona-title{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .persona-desc{font-size:13px;color:var(--gray);line-height:1.65;font-weight:500;}
  .steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .step-content h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-content p{font-size:14px;color:var(--gray);line-height:1.7;font-weight:500;margin:0;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  @media(max-width:520px){.stats{grid-template-columns:1fr;}.personas{grid-template-columns:1fr;}}
`

export default function EarnByListeningPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Earn by Listening</span>
        </nav>

        <div className="hero">
          <p className="badge">Set Your Own Hours · Work From Home</p>
          <h1>Earn Money With Your <em>Empathy</em></h1>
          <p className="lead">If you have been through loneliness, burnout, anxiety, or heartbreak — your experience has value. Become a peer listener on LeanOn and earn ₹300–₹800/hour helping people through exactly what you have overcome.</p>
          <a href="/become-listener" className="cta-hero">Apply to become a listener →</a>
        </div>

        <div className="stats">
          <div className="stat"><div className="stat-value">₹300–800</div><div className="stat-label">per hour (active listeners)</div></div>
          <div className="stat"><div className="stat-value">UPI</div><div className="stat-label">direct payout to your account</div></div>
          <div className="stat"><div className="stat-value">0 ₹</div><div className="stat-label">upfront cost to join</div></div>
        </div>

        {/* Who should apply */}
        <div className="section">
          <h2>Who Becomes a Listener?</h2>
          <div className="personas">
            <div className="persona">
              <div className="persona-emoji">💙</div>
              <div className="persona-title">The Empath</div>
              <p className="persona-desc">You are the friend everyone calls at 2 AM. You listen without judging, without fixing, without making it about you. Now get paid for that rare ability.</p>
            </div>
            <div className="persona">
              <div className="persona-emoji">🌱</div>
              <div className="persona-title">The Survivor</div>
              <p className="persona-desc">You have been through depression, burnout, grief, or a breakdown — and come out the other side. Your story can save someone else&apos;s night.</p>
            </div>
            <div className="persona">
              <div className="persona-emoji">⚡</div>
              <div className="persona-title">The Side-Hustler</div>
              <p className="persona-desc">Earn from your phone, on your own schedule, with no boss and no office. Evening sessions, weekends, lunch breaks — you decide.</p>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="section">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Apply</h3>
                <p>Share your lived experience and the topics you have navigated personally. Be specific — generic applications do not pass. Takes about 10 minutes.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Complete Active Listening Training</h3>
                <p>Approved applicants complete LeanOn&apos;s training before going live. This is what separates peer listeners from well-meaning amateurs.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Set Your Rate &amp; Availability</h3>
                <p>Choose your per-session rate, the topics you support, and when you are available. Turn on or off anytime from the app.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Earn — Paid Direct to Your UPI</h3>
                <p>Every session you complete adds to your dashboard balance. Request a payout to your UPI ID whenever you want. Processed in 48–72 hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What you earn */}
        <div className="section">
          <h2>What You Can Realistically Earn</h2>
          <p>Listeners set their own rate — typically ₹100–₹300 per 15-minute session.</p>
          <p><strong>Casual (4–6 sessions/week):</strong> ₹3,200–₹7,200/month — solid side income with minimal time.</p>
          <p><strong>Part-time (2–3 sessions/day, 5 days/week):</strong> ₹20,000–₹45,000/month depending on your rate.</p>
          <p><strong>Active (4+ sessions/day, consistent availability):</strong> ₹40,000–₹80,000+/month.</p>
          <p>No upfront costs. No subscription fees. No commission taken from your rate — LeanOn charges a flat platform fee per session directly.</p>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Start earning this week</h2>
          <p>Applications take 10 minutes. Approved listeners can go live within days. Your empathy is already there — let it work for you.</p>
          <a href="/become-listener" className="btn-cta">Apply now — it&apos;s free →</a>
        </div>

        <div className="section" style={{textAlign:'center'}}>
          <p style={{fontSize:14,color:'var(--gray)'}}>Looking for support instead? <a href="/browse" style={{color:'var(--teal)',fontWeight:800}}>Find a listener →</a></p>
          <p style={{fontSize:14,color:'var(--gray)',marginTop:8}}>Read more: <a href="/blog/earn-money-listening-online-india" style={{color:'var(--teal)',fontWeight:800}}>How to earn money listening online in India →</a></p>
        </div>
      </div>
    </>
  )
}
