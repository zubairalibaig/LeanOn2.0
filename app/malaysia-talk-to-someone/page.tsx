import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone Online in Malaysia | LeanOn',
  description: 'Need a real person to talk to in Malaysia? LeanOn connects Indian expats with trained peer listeners 24/7 — in Tamil, Hindi, Telugu, and more. First 5 minutes free.',
  keywords: [
    'talk to someone online malaysia', 'someone to talk to malaysia', 'need to talk malaysia',
    'online chat support malaysia', 'talk to a person malaysia', 'emotional support online malaysia',
    'peer support malaysia indian', 'someone to listen malaysia expat',
    'talk to someone midnight malaysia', 'real person to talk to malaysia',
    'online listener malaysia', 'indian expat support malaysia', 'tamil listener malaysia',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/malaysia-talk-to-someone',
    languages: { 'en-MY': 'https://www.leanon.app/malaysia-talk-to-someone' },
  },
  openGraph: {
    title: 'Talk to Someone Online in Malaysia — Real Indian Listeners | LeanOn',
    description: 'Need a real person to talk to in Malaysia? LeanOn connects Indian expats with peer listeners 24/7 — in Tamil, Hindi, and your language, with no judgment.',
    url: 'https://www.leanon.app/malaysia-talk-to-someone',
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
      name: 'Can I talk to someone in Malaysia right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7. No appointment needed, no waiting list. Browse the listeners who are online and start talking immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to have a specific problem to reach out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. You can reach out because you feel lonely, because you are bored and disconnected, because something small is weighing on you, or simply because you miss having a real conversation with someone who understands you. All of these are valid reasons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a Tamil-speaking listener from Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has Tamil-speaking listeners available around the clock. You can also talk in Hindi, Telugu, Malayalam, Kannada, Bengali, or English. Browse listener profiles to find one who speaks your language.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are LeanOn listeners real people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every listener on LeanOn is a real, trained human being from India — not a chatbot or AI. They go through a thorough vetting and training process before being allowed on the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost from Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are RM 45 for 15 minutes, RM 67 for 30 minutes, and RM 89 for 45 minutes. Your first session begins with 5 free minutes so you can try it before committing.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to Someone Malaysia', item: 'https://www.leanon.app/malaysia-talk-to-someone' },
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

export default function MalaysiaTalkToSomeonePage() {
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
          <a href="/">Home</a><span>›</span>Talk to Someone Malaysia
        </div>

        <h1>You Just Want Someone<br />to Actually Talk To.</h1>
        <p className="lead">
          Not an app. Not a chatbot. Not another scroll through social media. A real person — warm,
          Indian, who understands your world — who will give you their complete attention. LeanOn
          makes that possible from Malaysia, any time of day or night.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>When do you need someone to talk to?</h2>
          <ul className="checklist">
            <li>You are having a rough week and there is nobody nearby who would truly understand.</li>
            <li>You have been holding something in and you just need to say it to someone.</li>
            <li>You feel disconnected from everything and everyone, but you cannot explain why.</li>
            <li>You want to process a decision without someone telling you what to do.</li>
            <li>It is late, the house is quiet, and you crave a real conversation in your language.</li>
            <li>You just want company — someone to talk to who will talk back.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Every single one of these is enough reason to reach out.</p>
        </div>

        <div className="night-box">
          <h2>🌃 Midnight in KL — when the city sleeps but you are awake</h2>
          <p>It is past 11 PM. The day was a lot. You are not ready to sleep, but you do not want
            to stare at your phone. You want to talk — for real, to a real person, in Tamil or Hindi
            or whatever feels natural.</p>
          <p>LeanOn listeners are online right now. Indian, trained, warm, and ready.</p>
          <a href="/browse" className="cta-night">Find someone to talk to →</a>
        </div>

        <div className="card">
          <h2>Real listeners. Not AI. Not bots.</h2>
          <p>Every LeanOn listener is a human being from India who chose this work. They are trained
            in empathy listening and peer support before their first session. They speak Tamil, Hindi,
            Telugu, Malayalam, Kannada, Bengali, and English.</p>
          <p>You can be yourself completely. There is no algorithm deciding how to respond. There
            is a person — genuinely paying attention to you.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Malaysia</h2>
          <p>Pay in Malaysian ringgit. The first 5-minute session free.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="dur">15 min</div>
              <div className="amt">RM 45</div>
            </div>
            <div className="price-card">
              <div className="dur">30 min</div>
              <div className="amt">RM 67</div>
            </div>
            <div className="price-card">
              <div className="dur">45 min</div>
              <div className="amt">RM 89</div>
            </div>
          </div>
          <p>No subscription. Talk when you need to.</p>
        </div>

        <div className="cta">
          <h2>A real person is ready to talk right now</h2>
          <p>Anonymous, 24/7, real Indian listeners in your language.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Can I talk to someone in Malaysia right now?</h3>
            <p>Yes. LeanOn listeners are available 24/7. No appointment needed. Browse online listeners
              and start talking immediately.</p>
          </div>
          <div className="faq-item">
            <h3>Do I need to have a specific problem to reach out?</h3>
            <p>Not at all. Feeling lonely, disconnected, or just missing a real conversation are all
              valid reasons. You do not need a crisis to talk to a listener.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to a Tamil-speaking listener from Malaysia?</h3>
            <p>Yes. LeanOn has Tamil-speaking listeners available round the clock. You can also find
              listeners who speak Hindi, Telugu, Malayalam, Kannada, Bengali, and English.</p>
          </div>
          <div className="faq-item">
            <h3>Are LeanOn listeners real people?</h3>
            <p>Yes — real, trained human beings from India, not chatbots or AI. They go through thorough
              vetting and training before joining the platform.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost from Malaysia?</h3>
            <p>RM 45 for 15 minutes, RM 67 for 30 minutes, RM 89 for 45 minutes. First 5 minutes of
              your first session are always free.</p>
          </div>
        </div>

        <div className="related">
          <a href="/malaysia-loneliness">Loneliness support Malaysia →</a>
          <a href="/malaysia-empathy-listener">Empathy listener Malaysia →</a>
          <a href="/malaysia-rant">Need to rant Malaysia →</a>
          <a href="/malaysia-relationship-advice">Relationship support Malaysia →</a>
          <a href="/singapore-talk-to-someone">Talk to someone Singapore →</a>
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
