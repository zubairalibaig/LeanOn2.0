import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Best Mental Health App India 2026 — Honest Comparison | LeanOn',
  description: 'Which mental health app is best in India? We compare LeanOn, Amaha, YourDOST, Wysa, and others across cost, anonymity, and Indian context.',
  keywords: ['best mental health app india', 'best online counselling app india', 'best therapy app india', 'mental wellness app india', 'online therapy india', 'therapy app india', 'best mental health platform india'],
  alternates: { canonical: 'https://www.leanon.app/best-mental-health-app-india', languages: { 'en-IN': 'https://www.leanon.app/best-mental-health-app-india' } },
  openGraph: {
    title: 'Best Mental Health App India 2026 — Honest Comparison | LeanOn',
    description: 'Which mental health app is best in India? We compare LeanOn, Amaha, YourDOST, Wysa, and others across cost, anonymity, and Indian context.',
    url: 'https://www.leanon.app/best-mental-health-app-india',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best free mental health app in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For AI-based self-help tools: Wysa is the best free option in India. For human peer support: LeanOn offers a free 5-minute trial on every session. For professional counselling on a budget: iCall (TISS) offers subsidised sessions. There is no single "best free app" — it depends on what you need.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a peer listener and a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A therapist is a licensed mental health professional who can diagnose and treat conditions using clinical methods. A peer listener is a real person with lived experience who is trained to listen and provide human support — not to diagnose or prescribe. Therapists are for clinical needs. Peer listeners are for the emotional weight most people carry day to day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn requires only a phone number and a first name. No last name, no photo, no social account. Sessions are confidential and cannot be linked to your real identity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I trust these apps with my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn takes privacy seriously — see our privacy policy at leanon.app/privacy. The platform collects minimal data (phone number, first name, session metadata) and does not share personal information. Sessions are confidential by design.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I need medication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you need medication, you need a psychiatrist — a licensed medical doctor specialising in mental health. None of the apps in this comparison can prescribe medication. Apps like Amaha can connect you with psychiatrists for clinical consultation. LeanOn is peer support and does not provide medical advice.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Best Mental Health App India', item: 'https://www.leanon.app/best-mental-health-app-india' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
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
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .vs-table{width:100%;border-collapse:collapse;margin-top:4px;}
  .vs-table th{font-size:12px;font-weight:800;color:var(--teal);text-align:left;padding:8px 10px;background:var(--light);}
  .vs-table td{font-size:13px;color:#3A6070;padding:9px 10px;border-bottom:1px solid var(--border);line-height:1.5;vertical-align:top;}
  .vs-table tr:last-child td{border-bottom:none;}
  .vs-table .col-label{font-weight:800;color:var(--navy);}
  .vs-table tr.highlight-row td{background:#FFF8F0;font-weight:700;}
  .routing-list{list-style:none;padding-left:0;}
  .routing-list li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:10px;padding-left:0;}
  .routing-list li strong{color:var(--navy);}
  .routing-list li a{color:var(--teal);font-weight:700;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
  @media(max-width:480px){.vs-table{font-size:11px;}.vs-table td,.vs-table th{padding:6px 5px;}}
`

export default function BestMentalHealthAppIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Best Mental Health App India</span>
        </nav>

        <div className="hero">
          <p className="tag">App Comparison · India · 2026</p>
          <h1>Everyone says they&apos;re the best. <em>Here&apos;s what actually matters.</em></h1>
          <p className="lead">An honest comparison of Indian mental health apps in 2026 — what each is good for, who should use it, and how the costs actually compare.</p>
        </div>

        <div className="section">
          <h2>What to Look for in a Mental Health App</h2>
          <ul>
            <li><strong>Anonymity</strong> — can you use it without your employer, family, or social circle knowing?</li>
            <li><strong>Indian cultural context</strong> — does it understand joint family dynamics, Indian work culture, arranged marriage pressure?</li>
            <li><strong>Cost</strong> — not monthly subscription cost, but what you actually pay per session or per month of real use</li>
            <li><strong>Human vs AI</strong> — do you need to be understood by a real person, or is self-help content enough?</li>
            <li><strong>Availability</strong> — can you access support at 11pm on a Sunday when you need it most?</li>
          </ul>
        </div>

        <div className="section">
          <h2>Comparison Table: Mental Health Apps in India 2026</h2>
          <div style={{overflowX:'auto'}}>
            <table className="vs-table">
              <thead>
                <tr>
                  <th>App</th>
                  <th>Type</th>
                  <th>Starting cost</th>
                  <th>Human?</th>
                  <th>Anonymous?</th>
                  <th>Indian context?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight-row">
                  <td className="col-label">LeanOn</td>
                  <td>Peer support</td>
                  <td>₹160/session</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td className="col-label">Amaha</td>
                  <td>Therapy</td>
                  <td>₹2,500+/month</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Partial</td>
                </tr>
                <tr>
                  <td className="col-label">YourDOST</td>
                  <td>Therapy+peer</td>
                  <td>₹500–₹2,000/session</td>
                  <td>Yes</td>
                  <td>Partial</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td className="col-label">Wysa</td>
                  <td>AI chatbot</td>
                  <td>Free–₹1,200/month</td>
                  <td>No (AI)</td>
                  <td>Yes</td>
                  <td>Partial</td>
                </tr>
                <tr>
                  <td className="col-label">iCall</td>
                  <td>Counselling (TISS)</td>
                  <td>₹200–₹500/session</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td className="col-label">Tata 1mg</td>
                  <td>Medical</td>
                  <td>Varies</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section">
          <h2>When to Choose Each Option</h2>
          <ul className="routing-list">
            <li><strong>Clinical or psychiatric needs, willing to pay more</strong> → Amaha</li>
            <li><strong>Affordable professional counselling</strong> → iCall (TISS)</li>
            <li><strong>Real human peer conversation, pay per session, anonymous</strong> → <a href="/browse">LeanOn</a></li>
            <li><strong>AI self-help tools, free</strong> → Wysa</li>
            <li><strong>Crisis</strong> → NIMHANS 080-46110007 or Tele-MANAS 14416 — free, 24/7, Government of India</li>
          </ul>
        </div>

        <div className="cta-card">
          <h2>Try LeanOn — Human Peer Support from ₹160</h2>
          <p>Real listeners, Indian context, anonymous, pay per session. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Which is the best free mental health app in India?</div>
            <div className="faq-a">For AI-based self-help: Wysa is the best free option. For human peer support: LeanOn offers a free 5-minute trial on every session. For professional counselling on a budget: iCall (TISS) offers subsidised sessions.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between a peer listener and a therapist?</div>
            <div className="faq-a">A therapist is a licensed professional who can diagnose and treat conditions. A peer listener is a real person with lived experience trained to listen and provide human support — not to diagnose. Therapists are for clinical needs. Peer listeners are for the emotional weight most people carry.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn anonymous?</div>
            <div className="faq-a">Yes. LeanOn requires only a phone number and a first name. No last name, no photo, no social account. Sessions are confidential.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I trust these apps with my data?</div>
            <div className="faq-a">LeanOn takes privacy seriously. The platform collects minimal data (phone number, first name, session metadata) and does not share personal information. See leanon.app/privacy.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I need medication?</div>
            <div className="faq-a">If you need medication, you need a psychiatrist — a licensed medical doctor. None of the apps in this comparison can prescribe medication. Apps like Amaha can connect you with psychiatrists. LeanOn is peer support and does not provide medical advice.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/betterhelp-alternative-india" className="related-link">BetterHelp Alternative</a>
            <a href="/innerhour-alternative" className="related-link">InnerHour Alternative</a>
            <a href="/yourdost-alternative" className="related-link">YourDOST Alternative</a>
            <a href="/wysa-alternative" className="related-link">Wysa Alternative</a>
            <a href="/blog/best-mental-health-apps-india-2026" className="related-link">App Reviews Blog</a>
          </div>
        </div>
      </div>
    </>
  )
}
