import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'BetterHelp Alternative India — Human Support, Indian Prices | LeanOn',
  description: 'BetterHelp costs $280/month. LeanOn peer sessions start at ₹160. Real human listeners, Indian context, available now.',
  keywords: ['betterhelp alternative india', '7 cups alternative india', 'replika alternative india', 'woebot alternative india', 'talkspace alternative india', 'online therapy alternative india', 'best online counselling app india', 'therapy app india', 'online therapy india'],
  alternates: { canonical: 'https://www.leanon.app/betterhelp-alternative-india', languages: { 'en-IN': 'https://www.leanon.app/betterhelp-alternative-india' } },
  openGraph: {
    title: 'BetterHelp Alternative India — Human Support, Indian Prices | LeanOn',
    description: 'BetterHelp costs $280/month. LeanOn peer sessions start at ₹160. Real human listeners, Indian context, available now.',
    url: 'https://www.leanon.app/betterhelp-alternative-india',
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
      name: 'Is LeanOn like BetterHelp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn and BetterHelp both provide online emotional support, but they are quite different. BetterHelp connects you with licensed US therapists via subscription (~$280/month). LeanOn connects you with trained Indian peer listeners via pay-per-session (from ₹160). LeanOn is peer support, not licensed therapy. If you need clinical treatment, see a professional. If you need a real human conversation without the ₹20,000/month price tag, LeanOn is built for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 7 Cups and how does LeanOn compare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '7 Cups offers free peer listening by volunteers alongside paid professional therapy. LeanOn offers paid peer listening by trained Indian listeners with lived experience — the key difference is the cultural context and the quality of the listener training. LeanOn listeners understand Indian family dynamics, work culture, and social pressures. 7 Cups listeners are mostly Western.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free option on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first 5 minutes of every LeanOn session are free — you try before you commit. Sessions after that start at ₹160. There is no monthly subscription or free tier beyond the trial window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does BetterHelp cost so much in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BetterHelp is priced in USD for a US market. At $60–$100/week, that translates to roughly ₹15,000–₹25,000 per month in India — far out of reach for most people. Additionally, BetterHelp therapists are US-licensed and may not understand Indian family structures, arranged marriage dynamics, or the specific pressures of Indian professional life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support as good as therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support and therapy serve different needs. Therapy is clinical treatment — it can diagnose, treat conditions, and provide structured interventions. Peer support is about being heard by someone with lived experience — it reduces isolation, builds perspective, and helps with everyday emotional weight. Neither is universally better. Peer support is often exactly what is needed for relationship stress, loneliness, burnout, and family pressure.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'BetterHelp Alternative India', item: 'https://www.leanon.app/betterhelp-alternative-india' },
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

export default function BetterhelpAlternativeIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>BetterHelp Alternative India</span>
        </nav>

        <div className="hero">
          <p className="tag">BetterHelp Alternative · India · From ₹160</p>
          <h1>You deserve real human support — <em>not a ₹20,000/month subscription</em></h1>
          <p className="lead">BetterHelp costs $280/month. Talkspace is similar. Neither understands Indian family dynamics, Indian work culture, or Indian emotional context. LeanOn peer sessions start at ₹160 — real humans, Indian context, pay per session.</p>
        </div>

        <div className="section">
          <h2>Platform Comparison</h2>
          <div style={{overflowX:'auto'}}>
            <table className="vs-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Type</th>
                  <th>Starting cost</th>
                  <th>Indian context</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-label">BetterHelp</td>
                  <td>Licensed therapist</td>
                  <td>~₹20,000/month</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">Talkspace</td>
                  <td>Licensed therapist</td>
                  <td>~₹15,000/month</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">7 Cups</td>
                  <td>Peer listeners (volunteers)</td>
                  <td>Free–₹5,000/month</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">Replika</td>
                  <td>AI chatbot</td>
                  <td>₹500–₹2,000/month</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">Woebot</td>
                  <td>AI chatbot</td>
                  <td>Free</td>
                  <td>No</td>
                </tr>
                <tr className="highlight-row">
                  <td className="col-label">LeanOn</td>
                  <td>Peer listeners (trained)</td>
                  <td>₹160/session</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section">
          <h2>Why BetterHelp Does Not Work for India</h2>
          <ul>
            <li><strong>USD pricing</strong> — $60–$100/week becomes ₹5,000–₹8,500/week in India. That is more than many people earn in a week.</li>
            <li><strong>US-licensed therapists</strong> — who do not understand arranged marriage, joint family pressure, Indian workplace culture, or the specific dynamics of Indian social life.</li>
            <li><strong>No anonymous option</strong> — you provide real identification for a billing relationship.</li>
            <li><strong>Subscription trap</strong> — you pay whether or not you use the service that week.</li>
          </ul>
        </div>

        <div className="section">
          <h2>What Is Different About LeanOn</h2>
          <ul>
            <li><strong>Pay per session</strong> — no subscription, use when you need it, from ₹160</li>
            <li><strong>Indian listeners</strong> — who understand joint family dynamics, Indian work pressure, arranged marriage stress, and the specific loneliness of Indian cities</li>
            <li><strong>Anonymous</strong> — first name only, no photo, no billing identity</li>
            <li><strong>Voice call</strong> — a real conversation, not a chat window</li>
            <li><strong>Available now</strong> — no appointment, no waitlist, browse and start in minutes</li>
          </ul>
        </div>

        <div className="cta-card">
          <h2>Try a Session for ₹160</h2>
          <p>Real human listeners. Indian context. No subscription. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse peer listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn like BetterHelp?</div>
            <div className="faq-a">Both provide online emotional support, but they are different. BetterHelp connects you with licensed US therapists via subscription (~$280/month). LeanOn connects you with trained Indian peer listeners via pay-per-session (from ₹160). LeanOn is peer support, not licensed therapy.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is 7 Cups and how does LeanOn compare?</div>
            <div className="faq-a">7 Cups offers free peer listening by volunteers. LeanOn offers paid peer listening by trained Indian listeners with lived experience. The key differences are cultural context and listener quality. LeanOn listeners understand Indian family dynamics and social pressures.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is there a free option on LeanOn?</div>
            <div className="faq-a">The first 5 minutes of every LeanOn session are free — you try before you commit. Sessions after that start at ₹160. There is no monthly subscription.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why does BetterHelp cost so much in India?</div>
            <div className="faq-a">BetterHelp is priced in USD for a US market. At $60–$100/week, that translates to roughly ₹15,000–₹25,000 per month in India. Additionally, BetterHelp therapists are US-licensed and may not understand Indian family structures or professional pressures.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is peer support as good as therapy?</div>
            <div className="faq-a">Peer support and therapy serve different needs. Therapy is clinical treatment. Peer support is about being heard by someone with lived experience — it reduces isolation and helps with everyday emotional weight. Neither is universally better. Peer support is often right for relationship stress, loneliness, burnout, and family pressure.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/innerhour-alternative" className="related-link">InnerHour Alternative</a>
            <a href="/yourdost-alternative" className="related-link">YourDOST Alternative</a>
            <a href="/wysa-alternative" className="related-link">Wysa Alternative</a>
            <a href="/best-mental-health-app-india" className="related-link">Best Mental Health App</a>
            <a href="/cant-afford-therapy-india" className="related-link">Can&apos;t Afford Therapy</a>
          </div>
        </div>
      </div>
    </>
  )
}
