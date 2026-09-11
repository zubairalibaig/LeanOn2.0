import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support India — Real People, Real Conversations | LeanOn',
  description: 'Peer support connects you with someone who has lived through what you\'re facing. Not therapy. Not AI. Real conversations on LeanOn — ₹160/session, anonymous, 24/7.',
  keywords: ['peer support', 'peer support India', 'peer support platform', 'peer support online', 'peer support app India', 'what is peer support'],
  alternates: { canonical: 'https://www.leanon.app/peer-support', languages: { 'en-IN': 'https://www.leanon.app/peer-support' } },
  openGraph: {
    title: 'Peer Support India — Real People, Real Conversations | LeanOn',
    description: 'Peer support connects you with someone who has lived through what you\'re facing. Not therapy. Not AI. Real conversations on LeanOn — ₹160/session, anonymous, 24/7.',
    url: 'https://www.leanon.app/peer-support',
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
      name: 'What is peer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support is a conversation with someone who has personally experienced something similar to what you are going through — not a therapist, not an AI, not a coach. It is the "me too" moment: the relief of being heard by someone who actually knows what it feels like from the inside, not from a textbook. Peer support focuses on being heard and understood, not on being diagnosed or fixed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is peer support different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy is delivered by a licensed professional — a psychologist, psychiatrist, or counsellor — who can diagnose and treat mental health conditions. Peer support is delivered by someone with lived experience who is trained to listen and support, not to diagnose or treat. Therapy costs ₹1,500–₹5,000 per session in India and requires an appointment. Peer support on LeanOn costs ₹160/session and is available 24/7 with no appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support effective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research consistently shows that peer support reduces feelings of isolation, improves mood, and helps people feel understood and less alone. It is most effective for everyday emotional challenges — loneliness, burnout, relationship stress, family pressure, anxiety — rather than clinical mental health conditions that require professional treatment. The lived experience of a peer supporter adds a warmth and authenticity that professional care sometimes cannot match.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does peer support cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On LeanOn, peer support sessions start at approximately ₹160 for 30 minutes. The first 5 minutes of every session are free, so you can talk to a listener and decide if it feels right before you commit. There are no subscription fees, no membership charges, and no automatic renewals — you pay per session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. On LeanOn you sign up with a phone number and a first name only. No last name, no photo, no social account is required. What you share in a session stays between you and your listener. Listeners sign confidentiality agreements and the platform does not share your information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can peer support help with anxiety or depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support is not a clinical treatment for anxiety or depression, and LeanOn does not claim otherwise. However, many people find that daily emotional weight — anxious thinking, low mood, the heaviness of a hard week — eases significantly when they can talk to someone who has been there and who listens without judgment. If you are managing a diagnosed condition, peer support works best alongside professional care, not instead of it. If you are unsure whether your experience needs clinical attention, please speak to a doctor or licensed counsellor.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Peer Support India', item: 'https://www.leanon.app/peer-support' },
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
  .steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{min-width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;}
  .step-text{padding-top:4px;}
  .step-title{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-desc{font-size:14px;color:var(--gray);line-height:1.6;font-weight:500;}
  .vs-table{width:100%;border-collapse:collapse;margin-top:4px;}
  .vs-table th{font-size:13px;font-weight:800;color:var(--teal);text-align:left;padding:8px 12px;background:var(--light);}
  .vs-table td{font-size:14px;color:#3A6070;padding:10px 12px;border-bottom:1px solid var(--border);line-height:1.6;vertical-align:top;}
  .vs-table tr:last-child td{border-bottom:none;}
  .vs-table .col-label{font-weight:800;color:var(--navy);}
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

export default function PeerSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Peer Support India</span>
        </nav>

        <div className="crisis">
          🆘 In crisis? Call <a href="tel:08046110007">NIMHANS 080-46110007</a> or <a href="tel:14416">Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · India · 24/7</p>
          <h1>Peer support. <em>Real people.</em> Real conversations.</h1>
          <p className="lead">Not therapy. Not an AI chatbot. Not advice from someone who has never been through it. Peer support is the experience of talking to a real human being who has lived something like what you are carrying right now — and who listens without judgment, without a diagnosis, and without a clinical distance between you.</p>
        </div>

        {/* Stats row */}
        <div className="stats-row">
          <div className="stat-pill"><em>₹160</em>/session</div>
          <div className="stat-pill">First <em>5 min free</em></div>
          <div className="stat-pill"><em>24/7</em> available</div>
          <div className="stat-pill"><em>Anonymous</em></div>
          <div className="stat-pill">30+ <em>trained listeners</em></div>
        </div>

        {/* What is peer support */}
        <div className="section">
          <h2>What Is Peer Support?</h2>
          <p>Peer support is a conversation between two people — one who is going through something difficult, and one who has personally lived through something similar. The peer supporter is not a therapist, not a coach, not an algorithm. They listen, reflect, and bring the insight of lived experience — the knowledge that comes from having actually been in that fog, not from reading about it.</p>

          <h3>The &quot;Me Too&quot; Moment</h3>
          <p>There is a specific kind of relief that happens when someone says &quot;I went through something like that too&quot; — and means it. Not as a polite thing to say, but because they did. That moment of recognition changes something. The thing you have been carrying alone stops feeling like a personal failure and starts feeling like a human experience. That is the core of peer support.</p>

          <h3>Listening, Not Fixing</h3>
          <p>Most people who reach out are not looking to be fixed. They know their situation. What they need is to say the actual version of it — not the acceptable summary — to someone who will not flinch, will not try to resolve it in ten minutes, and will not change how they see you after. Peer support gives you that space.</p>

          <h3>Peer Support vs Therapy vs AI Chatbots</h3>
          <div style={{overflowX:'auto'}}>
            <table className="vs-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Who delivers it</th>
                  <th>What it is good for</th>
                  <th>What it costs (India)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-label">Peer support (LeanOn)</td>
                  <td>Real person with lived experience</td>
                  <td>Feeling heard, loneliness, burnout, everyday emotional weight</td>
                  <td>₹160/session</td>
                </tr>
                <tr>
                  <td className="col-label">Therapy</td>
                  <td>Licensed psychologist or counsellor</td>
                  <td>Clinical diagnosis, structured treatment, mental health conditions</td>
                  <td>₹1,500–₹5,000/session</td>
                </tr>
                <tr>
                  <td className="col-label">AI chatbot</td>
                  <td>Algorithm / language model</td>
                  <td>Information retrieval, surface-level responses</td>
                  <td>Free or low-cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How it works */}
        <div className="section">
          <h2>How LeanOn Peer Support Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text">
                <div className="step-title">Browse listeners</div>
                <div className="step-desc">See real peer listeners, their areas of lived experience, their rate, and availability. Choose someone who has been through something like what you are dealing with.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text">
                <div className="step-title">Start with 5 minutes free</div>
                <div className="step-desc">Every session begins with a free 5-minute trial. Talk, get a sense of the connection, and decide whether to continue — with no commitment until you choose to extend.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text">
                <div className="step-title">Talk anonymously</div>
                <div className="step-desc">Sessions are fully text-based and anonymous. No last name, no photo, no social account. Just a conversation with someone who has been there.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Who it's for */}
        <div className="section">
          <h2>Who Uses Peer Support on LeanOn?</h2>
          <p>Peer support is for anyone who is carrying something they cannot easily say to the people around them. Some of the most common situations:</p>
          <ul>
            <li><strong>Loneliness</strong> — in a new city, in a crowd, or inside a relationship that has grown distant</li>
            <li><strong>Relationship stress</strong> — a marriage under strain, a difficult breakup, a friendship that has gone cold</li>
            <li><strong>Family pressure</strong> — expectations around career, marriage, money; joint family friction; the weight of being the one who is supposed to handle everything</li>
            <li><strong>Work burnout</strong> — the slow hollowing out of a job that used to feel meaningful, or the acute pressure of a profession that does not stop</li>
            <li><strong>Grief</strong> — loss that does not fit neatly into a week of leave and a return to normal</li>
            <li><strong>Student pressure</strong> — entrance exam anxiety, career uncertainty, the performance of appearing fine</li>
            <li><strong>Anything you cannot say to people in your actual life</strong> — because they are too close to the problem, would worry too much, or simply would not understand</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Start Your First Peer Support Session</h2>
          <p>First 5 minutes are free. Anonymous. Available right now — no appointment, no waitlist.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse peer listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is peer support?</div>
            <div className="faq-a">Peer support is a conversation with someone who has personally experienced something similar to what you are going through — not a therapist, not an AI, not a coach. It is the &quot;me too&quot; moment: the relief of being heard by someone who actually knows what it feels like from the inside, not from a textbook. Peer support focuses on being heard and understood, not on being diagnosed or fixed.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is peer support different from therapy?</div>
            <div className="faq-a">Therapy is delivered by a licensed professional — a psychologist, psychiatrist, or counsellor — who can diagnose and treat mental health conditions. Peer support is delivered by someone with lived experience who is trained to listen and support, not to diagnose or treat. Therapy costs ₹1,500–₹5,000 per session in India and requires an appointment. Peer support on LeanOn costs ₹160/session and is available 24/7 with no appointment.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is peer support effective?</div>
            <div className="faq-a">Research consistently shows that peer support reduces feelings of isolation, improves mood, and helps people feel understood and less alone. It is most effective for everyday emotional challenges — loneliness, burnout, relationship stress, family pressure, anxiety — rather than clinical conditions. The lived experience of a peer supporter adds authenticity that professional care sometimes cannot match.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does peer support cost in India?</div>
            <div className="faq-a">On LeanOn, peer support sessions start at approximately ₹160 for 30 minutes. The first 5 minutes of every session are free, so you can talk to a listener and decide if it feels right before you commit. There are no subscription fees, no membership charges, and no automatic renewals — you pay per session.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is peer support anonymous?</div>
            <div className="faq-a">Yes. On LeanOn you sign up with a phone number and a first name only. No last name, no photo, no social account required. What you share in a session stays between you and your listener.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can peer support help with anxiety or depression?</div>
            <div className="faq-a">Peer support is not a clinical treatment for anxiety or depression, and LeanOn does not claim otherwise. However, many people find that daily emotional weight — anxious thinking, low mood, the heaviness of a hard week — eases significantly when they can talk to someone who has been there. If you are managing a diagnosed condition, peer support works best alongside professional care, not instead of it.</div>
          </div>
        </div>

        {/* Cross-links */}
        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/peer-support-online-india" className="related-link">Peer support online India</a>
            <a href="/peer-counselling-india" className="related-link">Peer counselling India</a>
            <a href="/blog/what-is-peer-support-india" className="related-link">What is peer support?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/alternatives-to-therapy-india" className="related-link">Therapy alternatives India</a>
          </div>
        </div>
      </div>
    </>
  )
}
