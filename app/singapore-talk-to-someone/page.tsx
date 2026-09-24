import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone Online in Singapore | LeanOn',
  description: 'Need a real person to talk to in Singapore? LeanOn connects Indian expats with trained peer listeners 24/7 — in Hindi, Tamil, Telugu, and more. First 5 minutes free.',
  keywords: [
    'talk to someone online singapore', 'someone to talk to singapore', 'need to talk singapore',
    'online chat support singapore', 'talk to a person singapore', 'emotional support online singapore',
    'peer support singapore indian', 'someone to listen singapore expat',
    'talk to someone midnight singapore', 'real person to talk to singapore',
    'online listener singapore', 'indian expat support singapore',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/singapore-talk-to-someone',
    languages: { 'en-SG': 'https://www.leanon.app/singapore-talk-to-someone' },
  },
  openGraph: {
    title: 'Talk to Someone Online in Singapore — Real Indian Listeners | LeanOn',
    description: 'Need a real person to talk to? LeanOn connects Indian expats in Singapore with peer listeners 24/7 — in your language, with your cultural context understood.',
    url: 'https://www.leanon.app/singapore-talk-to-someone',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I talk to someone in Singapore right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7. You can start a session any time of day or night — no appointment, no waiting list. Just browse available listeners and start talking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to have a specific problem to talk to someone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You can reach out because you feel low, because you are bored and lonely, because something small is bothering you, or simply because you miss having a real conversation. LeanOn is for exactly these moments when you just want a human connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are LeanOn listeners real people or AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real people. Every LeanOn listener is a trained human peer supporter — not a chatbot. They go through a vetting and training process before they are allowed on the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What language can I talk in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners speak Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and English. You can filter by language when browsing. Many listeners are also comfortable with a mix of languages in the same conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to talk to someone from Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are S$14 for 15 minutes, S$20 for 30 minutes, and S$27 for 45 minutes. The first 5 minutes of your first session are always free.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to Someone Singapore', item: 'https://www.leanon.app/singapore-talk-to-someone' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .logo{font-size:22px;font-weight:900;color:var(--navy);}
  .logo span{color:var(--teal);}
  .nav-cta{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  .breadcrumb{font-size:12px;color:var(--gray);margin-bottom:20px;}
  .breadcrumb a{color:var(--teal);}
  .breadcrumb span{margin:0 6px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;margin-bottom:32px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:18px;font-weight:800;margin-bottom:12px;}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .card p:last-child{margin-bottom:0;}
  .night-box{background:linear-gradient(135deg,#0F2640,#143354);border-radius:20px;padding:28px;margin-bottom:20px;color:white;}
  .night-box h2{font-size:18px;font-weight:900;margin-bottom:12px;color:white;}
  .night-box p{font-size:15px;line-height:1.78;margin-bottom:10px;color:rgba(255,255,255,0.85);}
  .night-box p:last-child{margin-bottom:0;}
  .night-box .cta-night{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:15px;padding:12px 28px;border-radius:50px;margin-top:16px;}
  .checklist{list-style:none;margin-top:10px;}
  .checklist li{font-size:15px;color:#3A6070;line-height:1.7;padding:6px 0;border-bottom:1px solid var(--border);display:flex;gap:10px;align-items:flex-start;}
  .checklist li:last-child{border-bottom:none;}
  .checklist li::before{content:'💙';flex-shrink:0;}
  .pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0;}
  .price-card{background:var(--light);border:1.5px solid var(--border);border-radius:14px;padding:14px 12px;text-align:center;}
  .price-card .dur{font-size:13px;font-weight:700;color:var(--gray);margin-bottom:4px;}
  .price-card .amt{font-size:20px;font-weight:900;color:var(--teal);}
  .faq-item{border-top:1px solid var(--border);padding:16px 0;}
  .faq-item:last-child{border-bottom:1px solid var(--border);}
  .faq-item h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;line-height:1.4;}
  .faq-item p{font-size:14px;color:#3A6070;line-height:1.7;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;margin-bottom:24px;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn-white{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:900;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;display:inline-block;}
  .btn-orange{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:900;font-size:15px;padding:12px 28px;border-radius:50px;border:none;cursor:pointer;display:inline-block;margin-top:10px;}
  .related{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .related a{background:white;border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;font-size:13px;font-weight:700;color:var(--navy);line-height:1.4;}
  .related a:hover{border-color:var(--teal);}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  @media(max-width:480px){.related{grid-template-columns:1fr;}.pricing-grid{grid-template-columns:1fr;}}
`

export default function SingaporeTalkToSomeonePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>Talk to Someone Singapore
        </div>

        <h1>Sometimes You Just Need<br />a Real Person to Talk To.</h1>
        <p className="lead">
          You do not need a reason, a crisis, or a perfectly formed problem. You just need someone
          to connect with — a real human being who will listen. LeanOn makes that possible, any time,
          from Singapore, in your language.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>When do you need someone to talk to?</h2>
          <ul className="checklist">
            <li>You are having a bad day and there is no one nearby who would understand.</li>
            <li>You have been holding something in for a long time and you just need to say it.</li>
            <li>You feel disconnected and not sure why — you just want human warmth.</li>
            <li>You made a difficult decision and want to process it with someone who will not judge.</li>
            <li>You feel anxious about something you cannot quite name and want to talk it through.</li>
            <li>It is late, the flat is quiet, and you miss having real conversations.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Every one of these is a valid reason to reach out.</p>
        </div>

        <div className="night-box">
          <h2>🌃 Available any time you need it</h2>
          <p>2 AM in Singapore. The messages back home are going unanswered because everyone is asleep.
            You are awake and you want to talk — not to scroll, not to watch something, but to actually
            have a conversation with a real person.</p>
          <p>LeanOn listeners are online right now. Indian, warm, trained, ready.</p>
          <a href="/browse" className="cta-night">Find someone to talk to →</a>
        </div>

        <div className="card">
          <h2>Why LeanOn is different from chatbots or apps</h2>
          <p>LeanOn is not AI. Every single listener on the platform is a real, trained human being who
            chose to do this work. They are from India. They have lived experience. They understand your
            cultural background and the specific texture of Indian expat life.</p>
          <p>You can talk in Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, or English — whatever
            feels most natural to you.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Singapore</h2>
          <p>Pay in Singapore dollars. The first 5-minute session free.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="dur">15 min</div>
              <div className="amt">S$14</div>
            </div>
            <div className="price-card">
              <div className="dur">30 min</div>
              <div className="amt">S$20</div>
            </div>
            <div className="price-card">
              <div className="dur">45 min</div>
              <div className="amt">S$27</div>
            </div>
          </div>
          <p>No subscription. Talk when you need to.</p>
        </div>

        <div className="cta">
          <h2>A real person is ready to talk right now</h2>
          <p>Anonymous, available 24/7, Indian listeners, your language.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Can I talk to someone in Singapore right now?</h3>
            <p>Yes. LeanOn listeners are available 24/7. No appointment, no waiting list. Just browse
              available listeners and start talking.</p>
          </div>
          <div className="faq-item">
            <h3>Do I need to have a specific problem to talk to someone?</h3>
            <p>No. You can reach out because you feel low, because you are lonely, because something small
              is bothering you, or simply because you miss having a real conversation.</p>
          </div>
          <div className="faq-item">
            <h3>Are LeanOn listeners real people or AI?</h3>
            <p>Real people. Every LeanOn listener is a trained human peer supporter — not a chatbot.
              They go through vetting and training before joining the platform.</p>
          </div>
          <div className="faq-item">
            <h3>What language can I talk in?</h3>
            <p>Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and English. Many listeners are
              comfortable with a mix of languages in the same conversation.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost from Singapore?</h3>
            <p>S$14 for 15 minutes, S$20 for 30 minutes, S$27 for 45 minutes. First 5 minutes of
              your first session are always free.</p>
          </div>
        </div>

        <div className="related">
          <a href="/singapore-loneliness">Loneliness support Singapore →</a>
          <a href="/singapore-empathy-listener">Empathy listener Singapore →</a>
          <a href="/singapore-rant">Need to rant Singapore →</a>
          <a href="/singapore-relationship-advice">Relationship support Singapore →</a>
          <a href="/malaysia-talk-to-someone">Talk to someone Malaysia →</a>
          <a href="/i-need-someone-to-talk-to">Need someone to talk to →</a>
        </div>

        <div className="disclaimer">
          <p>⚠️ If you are in crisis or thinking about self-harm, please reach out immediately:<br />
            <strong>NIMHANS helpline: 080-46110007</strong> &nbsp;|&nbsp;
            <strong>Tele-MANAS: 14416</strong> (free, 24/7)<br />
            LeanOn is peer support — not a substitute for professional mental health care or emergency services.
          </p>
        </div>
      </div>
    </>
  )
}
