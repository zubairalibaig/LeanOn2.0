import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'InnerHour Alternative India — Peer Support from ₹160 | LeanOn',
  description: 'Looking for an InnerHour or Amaha alternative? LeanOn offers real human peer support at ₹160 — no subscription, anonymous, available now.',
  keywords: ['innerhour alternative', 'amaha alternative', 'practo therapy alternative', 'lybrate counselling alternative', 'mpower alternative'],
  alternates: { canonical: 'https://www.leanon.app/innerhour-alternative', languages: { 'en-IN': 'https://www.leanon.app/innerhour-alternative' } },
  openGraph: {
    title: 'InnerHour Alternative India — Peer Support from ₹160 | LeanOn',
    description: 'Looking for an InnerHour or Amaha alternative? LeanOn offers real human peer support at ₹160 — no subscription, anonymous, available now.',
    url: 'https://www.leanon.app/innerhour-alternative',
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
      name: 'What happened to InnerHour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InnerHour rebranded to Amaha (also called YourSpace) in 2022. Amaha shifted focus to the corporate wellness and premium segment, with subscription plans starting at ₹2,500/month and targeting HR-sponsored employee wellness programmes. The original InnerHour self-help app is largely discontinued as a standalone product.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Amaha good?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amaha is good for what it is — corporate-sponsored therapy access with licensed professionals and structured self-help tools. If your employer offers it or you can afford the ₹2,500–₹12,000/month range, it is a solid clinical option. If you are paying out of pocket and want something more immediate and affordable, LeanOn starts at ₹160 per session with no subscription.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a therapist and a peer listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A therapist is a licensed mental health professional who can diagnose and treat conditions using clinical methods. A peer listener is a real person with lived experience who is trained to listen without judgment and provide human support — not diagnose or prescribe. Therapists on Amaha or Practo are suitable for clinical needs. LeanOn peer listeners are for everyday emotional support.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I choose peer support over therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose peer support when you need to be heard, process a difficult situation, reduce isolation, or get perspective from someone with lived experience. Choose therapy when you need clinical diagnosis, structured treatment for a mental health condition, or professional intervention. Many people use both — peer support for day-to-day weight, therapy for clinical concerns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn free to browse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Browsing listener profiles on LeanOn is completely free. You only pay when you start a session. The first 5 minutes of every session are also free, so you can try a listener before committing.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'InnerHour Alternative', item: 'https://www.leanon.app/innerhour-alternative' },
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
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .vs-table{width:100%;border-collapse:collapse;margin-top:4px;}
  .vs-table th{font-size:13px;font-weight:800;color:var(--teal);text-align:left;padding:8px 12px;background:var(--light);}
  .vs-table td{font-size:14px;color:#3A6070;padding:10px 12px;border-bottom:1px solid var(--border);line-height:1.6;vertical-align:top;}
  .vs-table tr:last-child td{border-bottom:none;}
  .vs-table .col-label{font-weight:800;color:var(--navy);}
  .vs-table tr.highlight-row td{background:#FFF8F0;font-weight:700;}
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
  @media(max-width:480px){.vs-table{font-size:12px;}.vs-table td,.vs-table th{padding:6px 6px;}}
`

export default function InnerhourAlternativePage() {
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
          <span style={{color:'var(--navy)'}}>InnerHour Alternative</span>
        </nav>

        <div className="hero">
          <p className="tag">InnerHour / Amaha Alternative · India</p>
          <h1>InnerHour became Amaha. Amaha costs <em>₹12,000+</em>. LeanOn costs ₹160.</h1>
          <p className="lead">InnerHour rebranded to Amaha in 2022 and moved upmarket — targeting corporate HR budgets, not individual users. If you are looking for affordable peer support that is actually built for you, LeanOn starts at ₹160 per session with no subscription.</p>
        </div>

        <div className="section">
          <h2>Platform Comparison</h2>
          <div style={{overflowX:'auto'}}>
            <table className="vs-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Type</th>
                  <th>Cost</th>
                  <th>Anonymous?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-label">Amaha (InnerHour)</td>
                  <td>Therapists + self-help</td>
                  <td>₹2,500–₹12,000/month</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">Practo therapy</td>
                  <td>Licensed therapists</td>
                  <td>₹800–₹2,000/session</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">Lybrate</td>
                  <td>Therapists</td>
                  <td>₹500–₹1,500/session</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">mPower</td>
                  <td>Psychiatric + therapy</td>
                  <td>₹1,200–₹3,000/session</td>
                  <td>No</td>
                </tr>
                <tr className="highlight-row">
                  <td className="col-label">LeanOn</td>
                  <td>Peer listeners</td>
                  <td>₹160/session</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section">
          <h2>Who Each Platform Is For</h2>
          <p><strong>Clinical or psychiatric needs</strong> — If you need diagnosis, medication management, or structured psychotherapy for a clinical condition, Amaha, Practo, or mPower are the right choice. These platforms connect you with licensed professionals.</p>
          <p><strong>Just need to talk</strong> — If you are carrying emotional weight — relationship stress, family pressure, work burnout, loneliness, anxiety — and you need a real human being to talk to right now, without a subscription or an appointment, that is exactly what LeanOn is built for. From ₹160, anonymous, available now.</p>
          <p>LeanOn does not compete with clinical platforms. It fills a different gap: the everyday emotional weight that does not need a psychiatrist but does need a real person.</p>
        </div>

        <div className="cta-card">
          <h2>Try LeanOn for ₹160</h2>
          <p>Real peer listeners, no subscription, anonymous. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse peer listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What happened to InnerHour?</div>
            <div className="faq-a">InnerHour rebranded to Amaha (also called YourSpace) in 2022. Amaha shifted focus to corporate wellness and the premium segment, with subscription plans starting at ₹2,500/month. The original InnerHour self-help app is largely discontinued.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is Amaha good?</div>
            <div className="faq-a">Amaha is good for what it is — corporate-sponsored therapy access with licensed professionals. If your employer offers it or you can afford the ₹2,500–₹12,000/month range, it is a solid clinical option. If you want something immediate and affordable, LeanOn starts at ₹160 per session.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between a therapist and a peer listener?</div>
            <div className="faq-a">A therapist is a licensed professional who can diagnose and treat conditions. A peer listener has lived experience and is trained to listen without judgment — not to diagnose or prescribe. Therapists on Amaha or Practo are for clinical needs. LeanOn peer listeners are for everyday emotional support.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">When should I choose peer support over therapy?</div>
            <div className="faq-a">Choose peer support when you need to be heard, process a difficult situation, or get perspective from someone with lived experience. Choose therapy when you need clinical diagnosis or structured treatment. Many people use both.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn free to browse?</div>
            <div className="faq-a">Yes. Browsing listener profiles is completely free. You only pay when you start a session. The first 5 minutes of every session are also free.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/betterhelp-alternative-india" className="related-link">BetterHelp Alternative</a>
            <a href="/yourdost-alternative" className="related-link">YourDOST Alternative</a>
            <a href="/best-mental-health-app-india" className="related-link">Best Mental Health App</a>
            <a href="/cant-afford-therapy-india" className="related-link">Can&apos;t Afford Therapy</a>
            <a href="/i-need-professional-help-india" className="related-link">Need Professional Help</a>
          </div>
        </div>
      </div>
    </>
  )
}
