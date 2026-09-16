import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Middle East Loneliness Support for Indians | LeanOn',
  description: 'Millions of Indians across the Middle East live with quiet loneliness — far from home, away from everyone who knows them. LeanOn connects you with an Indian peer listener in your language.',
  keywords: [
    'Middle East loneliness Indian', 'loneliness support Middle East', 'Indian expat lonely Middle East',
    'emotional support Middle East Indians', 'NRI loneliness Middle East', 'Gulf Indians lonely',
    'talk to someone Middle East Indian', 'Indian listener Middle East', 'peer support Middle East',
    'Gulf expat loneliness', 'South Asian loneliness Gulf', 'Middle East Indian mental health',
    'missing home Middle East Indian', 'isolated Middle East Indian worker',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/middle-east-loneliness',
    languages: { 'en-IN': 'https://www.leanon.app/middle-east-loneliness' },
  },
  openGraph: {
    title: 'Middle East Loneliness Support for Indians — Talk in Your Language',
    description: 'Far from home in the Middle East and feeling the weight of it? LeanOn peer listeners are Indian, speak your language, and are available 24/7. First 5 minutes free.',
    url: 'https://www.leanon.app/middle-east-loneliness',
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
      name: 'Why is loneliness so common among Indians in the Middle East?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Middle East is home to millions of Indian workers, yet loneliness is endemic across the region. The reasons are structural: visa-based migration means limited roots, long working hours reduce social time, physical separation from family is constant, and the pressure to appear successful prevents honest conversation. Many Indians in the Gulf live in a paradox — surrounded by other Indians, yet deeply alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does LeanOn help with loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loneliness shrinks when someone genuinely listens. LeanOn listeners are trained to give you their full attention, ask questions that make you feel seen, and hold space without judgment. A single real conversation can break the cycle of isolation — even temporarily.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages do LeanOn listeners speak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners speak Hindi, Malayalam, Tamil, Telugu, Kannada, Bengali, Gujarati, and other Indian languages. You can check a listener\'s language profile before starting a session.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does LeanOn cost across the Middle East?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From the UAE: AED 37/55/74 for 15/30/45 min. Kuwait: KD 4/5/7. Oman: OMR 4/6/8. Available everywhere in the Middle East — Saudi Arabia, Qatar, Bahrain, and beyond. First 5 minutes free — once per listener.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available late at night from the Middle East?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7. The small time difference between the Middle East and India means listeners are awake and available even during Gulf night hours. You are never left alone with your thoughts.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Middle East Loneliness Support', item: 'https://www.leanon.app/middle-east-loneliness' },
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}}
`

export default function MiddleEastLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Middle East Loneliness Support
        </div>

        <h1>Eight Million Indians in the Gulf.<br />And So Many of Them Quietly Alone.</h1>
        <p className="lead">
          From Dubai to Riyadh, from Muscat to Doha — Indians have built the Middle East and sent
          money home for decades. But beneath the hard work and the sacrifices is a loneliness that
          rarely gets named. LeanOn is here for that silence.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>Why Indians in the Middle East feel so alone</h2>
          <p>The loneliness of the Gulf is not dramatic — it accumulates. Day by day, year by year:</p>
          <ul className="checklist">
            <li>Living among millions of other Indians, yet having no one who really knows you</li>
            <li>Your entire life here tied to a visa that can change without warning</li>
            <li>Building a career that everyone back home is proud of — and feeling hollow inside it</li>
            <li>Phone calls home where you perform being fine so they do not worry</li>
            <li>Festivals, funerals, weddings — all experienced from thousands of kilometres away</li>
            <li>The question &quot;when are you coming back&quot; with no honest answer you can give</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 The loneliness peaks after sundown</h2>
          <p>When the workday ends and there is nothing left to distract you, the quiet fills in fast.
            LeanOn listeners are available 24/7 — across every timezone in the Middle East. You are
            never left alone with it after dark.</p>
          <p>First 5 minutes are completely free. No card needed to start.</p>
          <a href="/browse" className="cta-night">Find an Indian listener now →</a>
        </div>

        <div className="card">
          <h2>Talk to an Indian listener who understands your world</h2>
          <p>LeanOn listeners are Indian. They understand what it means to be far from home, to be the
            one who was sent to succeed, to carry a family&apos;s expectations across an ocean. They speak
            Hindi, Malayalam, Tamil, Telugu, Kannada, Gujarati, Bengali, and more.</p>
          <p>You will not have to explain yourself. You can just talk.</p>
        </div>

        <div className="card">
          <h2>Session pricing across the Gulf</h2>
          <ul className="checklist">
            <li>UAE: AED 37 / AED 55 / AED 74 for 15/30/45 min</li>
            <li>Kuwait: KD 4 / KD 5 / KD 7 for 15/30/45 min</li>
            <li>Oman: OMR 4 / OMR 6 / OMR 8 for 15/30/45 min</li>
            <li>First 5 minutes free — once per listener</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Also available in Saudi Arabia, Qatar, and Bahrain. Anonymous and no subscription required.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen — right now</h2>
          <p>For Indians across the entire Middle East — available 24/7, in your language.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why is loneliness so common among Indians in the Middle East?</h3>
            <p>Visa-based migration, long working hours, separation from family, and the pressure to appear
              successful all combine to create endemic loneliness — even among millions of fellow Indians.</p>
          </div>
          <div className="faq-item">
            <h3>How does LeanOn help with loneliness?</h3>
            <p>Loneliness shrinks when someone genuinely listens. LeanOn listeners give you their full
              attention, ask questions that help you feel seen, and hold space without judgment.</p>
          </div>
          <div className="faq-item">
            <h3>What languages do LeanOn listeners speak?</h3>
            <p>Hindi, Malayalam, Tamil, Telugu, Kannada, Bengali, Gujarati, and more. Check a listener&apos;s
              profile before starting.</p>
          </div>
          <div className="faq-item">
            <h3>What does LeanOn cost across the Middle East?</h3>
            <p>UAE: AED 37/55/74. Kuwait: KD 4/5/7. Oman: OMR 4/6/8. Available in Saudi Arabia, Qatar, and
              Bahrain too. First 5 minutes free — once per listener.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn available late at night from the Middle East?</h3>
            <p>Yes, 24/7. The small time difference with India means listeners are always awake and available
              — even during Gulf night hours. You are never alone with your thoughts.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uae-loneliness">UAE loneliness →</a>
          <a href="/dubai-loneliness">Dubai loneliness →</a>
          <a href="/kuwait-loneliness">Kuwait support →</a>
          <a href="/oman-loneliness">Oman support →</a>
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/middle-east-rant">Need to rant? →</a>
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
