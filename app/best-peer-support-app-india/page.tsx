import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Best Peer Support App in India 2026 — LeanOn vs Alternatives',
  description: 'Looking for the best peer support app in India? Compare LeanOn, YourDOST, iCall, Wysa and more. Real people. Anonymous. From ₹160.',
  keywords: ['best peer support app India', 'peer support app India', 'peer support platform India', 'best mental health app India 2026', 'peer support app review India'],
  alternates: { canonical: 'https://www.leanon.app/best-peer-support-app-india', languages: { 'en-IN': 'https://www.leanon.app/best-peer-support-app-india' } },
  openGraph: {
    title: 'Best Peer Support App in India 2026 — LeanOn vs Alternatives',
    description: 'Looking for the best peer support app in India? Compare LeanOn, YourDOST, iCall, Wysa and more. Real people. Anonymous. From ₹160.',
    url: 'https://www.leanon.app/best-peer-support-app-india',
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
      name: 'What is the best peer support app in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For people who want to talk to a real human with lived experience, LeanOn is the strongest option in India in 2026. It offers real peer listeners (not AI), costs ₹160/session with the first 5 minutes free, is fully anonymous, and is available 24/7 without an appointment. For clinical counselling with a licensed professional, options like iCall (TISS) may be more appropriate. For a free AI companion, Wysa is available.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does LeanOn compare to YourDOST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YourDOST is a mixed platform offering both AI tools and sessions with licensed counsellors and psychologists. Sessions typically cost ₹500–₹2,000 and require booking in advance. LeanOn focuses exclusively on peer support — real people with lived experience rather than clinical professionals. LeanOn is more affordable (₹160/session), fully anonymous, and available 24/7 without an appointment. The choice depends on whether you need clinical counselling or human peer connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn better than Wysa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wysa is an AI chatbot — it uses artificial intelligence to provide mental health support. LeanOn uses real human peer listeners with lived experience. If you want a free AI-based coping tool, Wysa is designed for that. If you want to talk to an actual person who has been through something like what you are facing, LeanOn is the right choice. Many people use both — Wysa for quick coping tools and LeanOn when they need genuine human connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does peer support cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On LeanOn, peer support costs approximately ₹160 per session, with the first 5 minutes free. This compares to ₹1,500–₹5,000 for a private therapist, ₹800–₹2,000 for online therapy platforms, and ₹200–₹500 for services like iCall.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there free peer support apps in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wysa offers a free AI chatbot. iCall (run by TISS) offers subsidised counselling sessions starting at ₹200. Government crisis helplines NIMHANS (080-46110007) and Tele-MANAS (14416) are free but designed for acute crises, not ongoing peer support. LeanOn offers a free 5-minute trial for every session, with paid sessions from ₹160.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is peer support different from counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Counselling is typically delivered by a licensed professional — a psychologist, psychotherapist, or certified counsellor — who is trained to diagnose and treat mental health conditions. Peer support is delivered by someone with lived experience who has training in active listening and supportive conversation, but is not a licensed professional. Counselling is clinical; peer support is human connection from someone who has been there.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Best Peer Support App India', item: 'https://www.leanon.app/best-peer-support-app-india' },
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
  h1{font-size:clamp(26px,5.5vw,42px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
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
  .crisis{display:block;background:#EBF5FB;border-left:4px solid #1A8FA0;border-radius:0 12px 12px 0;padding:14px 18px;margin-bottom:28px;font-size:14px;color:#0F4867;font-weight:600;line-height:1.65;}
  .crisis a{color:var(--teal);font-weight:800;}
  .compare-table{width:100%;border-collapse:collapse;margin-top:8px;}
  .compare-table th{font-size:12px;font-weight:800;color:var(--teal);text-align:left;padding:10px 10px;background:var(--light);}
  .compare-table td{font-size:13px;color:#3A6070;padding:10px 10px;border-bottom:1px solid var(--border);line-height:1.55;vertical-align:top;}
  .compare-table tr:last-child td{border-bottom:none;}
  .compare-table .col-label{font-weight:800;color:var(--navy);}
  .leanon-row td{background:rgba(26,143,160,0.04);}
  .leanon-row .col-label{color:var(--teal);}
  .badge{display:inline-block;font-size:11px;font-weight:700;padding:2px 8px;border-radius:50px;}
  .badge-green{background:#e6f9f0;color:#167a47;}
  .badge-orange{background:#fff4e6;color:#b45309;}
  .badge-gray{background:#f0f4f8;color:#5A7A8A;}
  .differentiators{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;margin-top:8px;}
  .diff-card{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:18px;}
  .diff-icon{font-size:24px;margin-bottom:8px;}
  .diff-title{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .diff-desc{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}
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
  @media(max-width:560px){.compare-table{font-size:12px;}.compare-table td,.compare-table th{padding:8px 6px;}}
`

export default function BestPeerSupportAppIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Best Peer Support App India</span>
        </nav>

        <div className="crisis">
          🆘 In crisis? Call <a href="tel:08046110007">NIMHANS 080-46110007</a> or <a href="tel:14416">Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support Apps · India · 2026 Comparison</p>
          <h1>The best peer support app in India — <em>a clear-eyed comparison</em></h1>
          <p className="lead">There are several platforms in India that help people with mental health and emotional support. They are not all the same thing. Here is an honest comparison of what each actually does, who it is best for, and what it costs.</p>
        </div>

        {/* Comparison table */}
        <div className="section">
          <h2>Platform Comparison: 2026</h2>
          <div style={{overflowX:'auto'}}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{width:'22%'}}>Platform</th>
                  <th>Type</th>
                  <th>Cost</th>
                  <th>Real humans?</th>
                  <th>Anonymous?</th>
                  <th>24/7?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="leanon-row">
                  <td className="col-label">LeanOn</td>
                  <td>Peer support</td>
                  <td>₹160/session</td>
                  <td><span className="badge badge-green">✅ Real people</span></td>
                  <td><span className="badge badge-green">✅ Yes</span></td>
                  <td><span className="badge badge-green">✅ Yes</span></td>
                </tr>
                <tr>
                  <td className="col-label">YourDOST</td>
                  <td>AI + counsellors</td>
                  <td>₹500–₹2,000</td>
                  <td><span className="badge badge-orange">Partial</span></td>
                  <td><span className="badge badge-gray">❌ No</span></td>
                  <td><span className="badge badge-gray">❌ No</span></td>
                </tr>
                <tr>
                  <td className="col-label">iCall (TISS)</td>
                  <td>Counselling</td>
                  <td>₹200–₹500</td>
                  <td><span className="badge badge-green">✅ Yes</span></td>
                  <td><span className="badge badge-gray">❌ No</span></td>
                  <td><span className="badge badge-gray">❌ By appointment</span></td>
                </tr>
                <tr>
                  <td className="col-label">Wysa</td>
                  <td>AI chatbot</td>
                  <td>Free–₹500/month</td>
                  <td><span className="badge badge-gray">❌ AI only</span></td>
                  <td><span className="badge badge-green">✅ Yes</span></td>
                  <td><span className="badge badge-green">✅ Yes</span></td>
                </tr>
                <tr>
                  <td className="col-label">Vandrevala Foundation</td>
                  <td>Crisis helpline</td>
                  <td>Free</td>
                  <td><span className="badge badge-green">✅ Yes</span></td>
                  <td><span className="badge badge-green">✅ Yes</span></td>
                  <td><span className="badge badge-orange">Crisis only</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop:12,fontSize:13,color:'var(--gray)'}}>Costs are approximate and may vary. This table compares options — it is not an endorsement of all platforms. For mental health crises, use NIMHANS 080-46110007 or Tele-MANAS 14416 (free, government of India).</p>
        </div>

        {/* What makes LeanOn different */}
        <div className="section">
          <h2>What Makes LeanOn Different</h2>
          <div className="differentiators">
            <div className="diff-card">
              <div className="diff-icon">🤝</div>
              <div className="diff-title">Lived experience, not scripts</div>
              <div className="diff-desc">Every LeanOn listener has personally been through something relevant to the conversations they take — not trained on a script, but from life.</div>
            </div>
            <div className="diff-card">
              <div className="diff-icon">🔒</div>
              <div className="diff-title">Fully anonymous</div>
              <div className="diff-desc">First name only. No last name, no photo, no social account. What you share stays between you and your listener.</div>
            </div>
            <div className="diff-card">
              <div className="diff-icon">⚡</div>
              <div className="diff-title">No appointment needed</div>
              <div className="diff-desc">Available now. No scheduling, no waitlist, no 2-week wait. The thing that made you decide to reach out does not wait that long.</div>
            </div>
            <div className="diff-card">
              <div className="diff-icon">💰</div>
              <div className="diff-title">Pay per session</div>
              <div className="diff-desc">₹160/session. No subscriptions, no membership fees, no auto-renewals. First 5 minutes of every session are free.</div>
            </div>
          </div>
        </div>

        {/* Who should use LeanOn */}
        <div className="section">
          <h2>Who Should Use LeanOn</h2>
          <p>LeanOn is the right choice if:</p>
          <ul>
            <li>You need to talk to a real human — not an AI, not a bot — who has actually been through something like what you are facing</li>
            <li>You want to vent right now, not in two weeks when a therapist has an opening</li>
            <li>You are dealing with relationship problems, family pressure, burnout, or loneliness — emotional weight that does not require a clinical diagnosis</li>
            <li>You need it to be completely anonymous — you cannot let the people in your life know you are seeking support</li>
            <li>You cannot afford private therapy (₹1,500–₹5,000/session) but want something more human than an AI chatbot</li>
          </ul>
          <p>LeanOn is <strong>not</strong> the right choice for diagnosed mental health conditions that require clinical treatment, medication management, or structured psychotherapy. For those, a licensed professional is what is needed — and iCall or a private therapist are more appropriate.</p>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Try LeanOn — First 5 Minutes Free</h2>
          <p>Browse real peer listeners by experience area. No appointment, no subscription. Talk anonymously from ₹160/session.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse peer listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is the best peer support app in India?</div>
            <div className="faq-a">For people who want to talk to a real human with lived experience, LeanOn is the strongest option in India in 2026. It offers real peer listeners (not AI), costs ₹160/session with the first 5 minutes free, is fully anonymous, and is available 24/7 without an appointment.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does LeanOn compare to YourDOST?</div>
            <div className="faq-a">YourDOST is a mixed platform offering AI tools and sessions with licensed counsellors. Sessions typically cost ₹500–₹2,000 and require booking in advance. LeanOn focuses exclusively on peer support — real people with lived experience. LeanOn is more affordable (₹160/session), fully anonymous, and available 24/7 without an appointment.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn better than Wysa?</div>
            <div className="faq-a">Wysa is an AI chatbot. LeanOn uses real human peer listeners with lived experience. If you want a free AI-based coping tool, Wysa is designed for that. If you want to talk to an actual person who has been through something like what you are facing, LeanOn is the right choice.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What does peer support cost in India?</div>
            <div className="faq-a">On LeanOn, peer support costs approximately ₹160 per session, with the first 5 minutes free. This compares to ₹1,500–₹5,000 for a private therapist, ₹800–₹2,000 for online therapy platforms, and ₹200–₹500 for services like iCall.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Are there free peer support apps in India?</div>
            <div className="faq-a">Wysa offers a free AI chatbot. iCall offers subsidised counselling from ₹200. Government crisis helplines NIMHANS (080-46110007) and Tele-MANAS (14416) are free but designed for acute crises, not ongoing peer support. LeanOn offers a free 5-minute trial for every session, with paid sessions from ₹160.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is peer support different from counselling?</div>
            <div className="faq-a">Counselling is typically delivered by a licensed professional trained to diagnose and treat mental health conditions. Peer support is delivered by someone with lived experience trained in active listening. Counselling is clinical; peer support is human connection from someone who has been there.</div>
          </div>
        </div>

        {/* Cross-links */}
        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/peer-support" className="related-link">Peer support India</a>
            <a href="/yourdost-alternative" className="related-link">YourDOST alternative</a>
            <a href="/wysa-alternative" className="related-link">Wysa alternative</a>
            <a href="/peer-counselling-india" className="related-link">Peer counselling India</a>
            <a href="/alternatives-to-therapy-india" className="related-link">Therapy alternatives</a>
            <a href="/blog/best-peer-support-apps-india-2026" className="related-link">Blog: app comparison</a>
          </div>
        </div>
      </div>
    </>
  )
}
