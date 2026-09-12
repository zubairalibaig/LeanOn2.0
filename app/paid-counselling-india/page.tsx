import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Paid Counselling India — Affordable, Anonymous & Online | LeanOn',
  description: 'Paid online counselling in India from ₹160 per session. Talk to a trained peer listener — anonymous, judgment-free, available now.',
  keywords: ['paid counselling india', 'affordable counselling india', 'low cost counselling india', 'mental health counselling india', 'talk to counsellor online india', 'emotional counselling india'],
  alternates: { canonical: 'https://www.leanon.app/paid-counselling-india', languages: { 'en-IN': 'https://www.leanon.app/paid-counselling-india' } },
  openGraph: {
    title: 'Paid Counselling India — Affordable, Anonymous & Online | LeanOn',
    description: 'Paid online counselling in India from ₹160 per session. Talk to a trained peer listener — anonymous, judgment-free, available now.',
    url: 'https://www.leanon.app/paid-counselling-india',
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
      name: 'Is paid counselling worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For many people, yes — having a dedicated space to talk to someone who listens without judgment makes a real difference. The challenge in India is that professional therapy costs ₹1,500–₹5,000 per session, which is out of reach for most people. Peer support on LeanOn starts at ₹160 per session, making it accessible without the same financial commitment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does LeanOn pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is pay-per-session — no monthly subscription, no automatic renewal. Sessions start at ₹160. The first 5 minutes of every session are free, so you can try a listener before committing. You recharge your wallet and use it when you need it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ₹160 really the full cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '₹160 is the starting price for a 30-minute session with the most affordable listeners. The exact cost depends on the listener\'s rate (set by the listener) and session length. There is a flat ₹10 platform fee per paid session. No hidden charges, no subscriptions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a counsellor and a peer listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A counsellor or therapist is a licensed mental health professional who can diagnose and treat conditions. A peer listener is a real person with lived experience who is trained to listen, hold space, and provide support — but does not diagnose or prescribe. Peer support is for everyday emotional weight. Professional counselling is for clinical conditions. LeanOn provides peer support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn peer support sessions are not covered by health insurance, as they are not clinical services. However, at ₹160 per session they are significantly more affordable than insured services typically cost out-of-pocket.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Paid Counselling India', item: 'https://www.leanon.app/paid-counselling-india' },
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
  .crisis{display:block;background:#EBF5FB;border-left:4px solid #1A8FA0;border-radius:0 12px 12px 0;padding:14px 18px;margin-bottom:28px;font-size:14px;color:#0F4867;font-weight:600;line-height:1.65;}
  .crisis a{color:var(--teal);font-weight:800;}
  .stats-row{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:24px;}
  .stat-pill{background:white;border:1.5px solid var(--border);border-radius:50px;padding:10px 18px;font-size:14px;font-weight:800;color:var(--navy);text-align:center;}
  .stat-pill em{color:var(--teal);font-style:normal;}
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
  @media(max-width:480px){.vs-table{font-size:13px;}.vs-table td,.vs-table th{padding:8px 8px;}}
`

export default function PaidCounsellingIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Paid Counselling India</span>
        </nav>

        <div className="crisis">
          🆘 In crisis? Call <a href="tel:08046110007">NIMHANS 080-46110007</a> or <a href="tel:14416">Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Paid Counselling · India · From ₹160</p>
          <h1>Paid counselling that fits your life — <em>and your budget</em></h1>
          <p className="lead">Private therapy costs ₹1,500–₹5,000 per session. LeanOn peer sessions start at ₹160. Real human listeners, anonymous, no waitlist, no subscription.</p>
        </div>

        <div className="stats-row">
          <div className="stat-pill">From <em>₹160</em>/session</div>
          <div className="stat-pill">First <em>5 min free</em></div>
          <div className="stat-pill"><em>Anonymous</em></div>
          <div className="stat-pill">No <em>appointment</em></div>
          <div className="stat-pill">Pay <em>per session</em></div>
        </div>

        <div className="section">
          <h2>What Paid Counselling Actually Costs in India</h2>
          <p>The mental health support landscape in India has a wide price range. Here is what you actually pay:</p>
          <div style={{overflowX:'auto'}}>
            <table className="vs-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Typical Cost per Session</th>
                  <th>Appointment Needed</th>
                  <th>Anonymous?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-label">Private therapist</td>
                  <td>₹1,500–₹5,000</td>
                  <td>Yes (days wait)</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">Hospital counsellor</td>
                  <td>₹600–₹1,200</td>
                  <td>Yes (weeks wait)</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="col-label">Online platforms (Amaha, YourDOST)</td>
                  <td>₹500–₹2,000</td>
                  <td>Yes</td>
                  <td>Partial</td>
                </tr>
                <tr className="highlight-row">
                  <td className="col-label">LeanOn peer support</td>
                  <td>From ₹160</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section">
          <h2>What You Get with a LeanOn Session</h2>
          <ul>
            <li><strong>1:1 voice call</strong> with a real human peer listener — not a bot, not a form</li>
            <li><strong>Trained peer listener</strong> with lived experience in the area you want to discuss</li>
            <li><strong>Fully anonymous</strong> — first name only, no photo, no social account required</li>
            <li><strong>No waitlist</strong> — browse available listeners and start in minutes</li>
            <li><strong>Pay as you go</strong> — recharge when you want, use when you need it</li>
            <li><strong>First 5 minutes free</strong> on every session — try before you commit</li>
          </ul>
        </div>

        <div className="section">
          <h2>Who Is This For?</h2>
          <p>LeanOn peer support is for anyone who needs to talk but cannot justify ₹2,000 per session. That includes:</p>
          <ul>
            <li>Working professionals carrying stress they cannot talk about at work</li>
            <li>Students under exam or career pressure</li>
            <li>Anyone going through relationship difficulty, family pressure, or grief</li>
            <li>People who have tried to find a therapist and found it too expensive, too far away, or too clinical</li>
            <li>Anyone who just needs to be heard — not fixed, not diagnosed, not managed</li>
          </ul>
          <p>If you need clinical diagnosis or psychiatric treatment, we will always point you to a professional. For the emotional weight most people carry day to day, peer support is often exactly right.</p>
        </div>

        <div className="cta-card">
          <h2>Start a Session for ₹160</h2>
          <p>Browse real peer listeners. First 5 minutes are free. No appointment, no waitlist, available right now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse peer listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is paid counselling worth it?</div>
            <div className="faq-a">For many people, yes — having a dedicated space to talk to someone who listens without judgment makes a real difference. The challenge in India is that professional therapy costs ₹1,500–₹5,000 per session. Peer support on LeanOn starts at ₹160, making it accessible without the same financial commitment.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does LeanOn pricing work?</div>
            <div className="faq-a">LeanOn is pay-per-session — no monthly subscription, no automatic renewal. Sessions start at ₹160. The first 5 minutes of every session are free. You recharge your wallet and use it when you need it.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is ₹160 really the full cost?</div>
            <div className="faq-a">₹160 is the starting price for a session with the most affordable listeners. The exact cost depends on the listener&apos;s rate and session length. There is a flat ₹10 platform fee per paid session. No hidden charges, no subscriptions.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between a counsellor and a peer listener?</div>
            <div className="faq-a">A counsellor is a licensed professional who can diagnose and treat conditions. A peer listener is a real person with lived experience trained to listen and hold space — not to diagnose or prescribe. LeanOn provides peer support, not clinical counselling.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is this covered by insurance?</div>
            <div className="faq-a">LeanOn peer support sessions are not covered by health insurance, as they are not clinical services. However, at ₹160 per session they are significantly more affordable than most insured services cost out-of-pocket.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/peer-support" className="related-link">What Is Peer Support</a>
            <a href="/cant-afford-therapy-india" className="related-link">Can&apos;t Afford Therapy</a>
            <a href="/online-counselling-india" className="related-link">Online Counselling India</a>
            <a href="/betterhelp-alternative-india" className="related-link">BetterHelp Alternative</a>
            <a href="/blog/therapy-cost-india" className="related-link">Therapy Cost India</a>
          </div>
        </div>
      </div>
    </>
  )
}
