import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Oman | LeanOn',
  description: 'Feeling lonely or overwhelmed in Oman? LeanOn connects Indian expats with a trained Indian peer listener — in your language, 24/7, starting with a free 5-minute trial.',
  keywords: [
    'emotional support Oman Indian', 'lonely in Oman Indian', 'Indian expat Oman loneliness',
    'talk to someone Oman', 'Oman NRI support', 'feeling isolated Oman',
    'Indian listener Oman', 'peer support Oman Indians', 'Oman expat mental health',
    'missing home Oman', 'Muscat Indian expat lonely', 'no one to talk to Oman',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/oman-loneliness',
    languages: { 'en-IN': 'https://www.leanon.app/oman-loneliness' },
  },
  openGraph: {
    title: 'Emotional Support for Indians in Oman — Talk to an Indian Listener',
    description: 'Lonely or overwhelmed in Oman? LeanOn peer listeners understand the Indian expat experience and speak your language. First 5 minutes free.',
    url: 'https://www.leanon.app/oman-loneliness',
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
      name: 'What is emotional life like for Indians in Oman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oman is quieter and more conservative than its Gulf neighbours. While it has a large and established Indian community — particularly from Kerala and other southern states — many Indians still describe deep isolation, especially those in construction, hospitality, or domestic work. Long hours, limited social access, and the distance from family create an emotional weight that builds over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost from Oman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions cost OMR 4 for 15 minutes, OMR 6 for 30 minutes, and OMR 8 for 45 minutes. Your first session always starts with a completely free 5-minute trial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I speak to a listener in Malayalam or Hindi from Oman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has Malayalam, Hindi, Tamil, Telugu, Kannada, Bengali, and other Indian language listeners. Kerala has one of the largest Indian populations in Oman, and Malayalam-speaking listeners are available. Check a listener\'s profile for their languages.',
      },
    },
    {
      '@type': 'Question',
      name: 'I work long hours in Oman and rarely get time for myself. Is there a quick way to talk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 15-minute session is often enough to feel lighter. LeanOn sessions are on-demand — no appointments, no waiting rooms. Open the app, pick a listener who is online, and start talking. Even a short conversation can break the weight of a hard day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn anonymous? My employer must not find out.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely anonymous. You can use any name — nothing is connected to your real identity, your employer, or your visa. Speak freely and without worry.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Emotional Support Oman', item: 'https://www.leanon.app/oman-loneliness' },
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

export default function OmanLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Emotional Support Oman
        </div>

        <h1>Working Hard in Oman.<br />Carrying Your Feelings Quietly — Alone.</h1>
        <p className="lead">
          Oman has one of the largest and most established Indian communities in the Gulf.
          But for many — especially those in construction, hospitality, or domestic work — it is
          a place of long hours, limited freedom, and deep loneliness. LeanOn is here to make
          sure you always have someone to talk to, in your own language.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>The quiet loneliness of life in Oman</h2>
          <p>Oman is calmer and more conservative than Dubai or Abu Dhabi. For many Indians, this
            means fewer social options, smaller social circles, and evenings that stretch out with
            nothing to fill them except video calls and thoughts of home.</p>
          <ul className="checklist">
            <li>An Indian community around you — but not the people you are close to</li>
            <li>Work camps or shared accommodation that offer company but not connection</li>
            <li>The sameness of days — work, eat, sleep, repeat</li>
            <li>Missing everything: the food, the festivals, your mother&apos;s voice in the next room</li>
            <li>Being &quot;the responsible one&quot; who sends money home and cannot afford to break down</li>
            <li>Feeling like Oman is temporary — but the temporary has lasted years</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 Late night in Muscat, Salalah, or Sohar?</h2>
          <p>LeanOn listeners are available 24/7. India and Oman share a very similar time zone —
            which means Indian listeners are awake and available whenever you need them.</p>
          <p>Start with a free 5 minutes. No payment required to begin.</p>
          <a href="/browse" className="cta-night">Find an Indian listener now →</a>
        </div>

        <div className="card">
          <h2>Talk to an Indian listener in your language</h2>
          <p>Oman has a very large Malayali population, alongside significant Hindi, Tamil, and
            Telugu communities. LeanOn listeners speak Malayalam, Hindi, Tamil, Telugu, Kannada,
            Bengali, and other Indian languages. Talking in your mother tongue opens doors that
            English cannot always reach.</p>
        </div>

        <div className="card">
          <h2>Session pricing in OMR</h2>
          <ul className="checklist">
            <li>15-minute session — OMR 4</li>
            <li>30-minute session — OMR 6</li>
            <li>45-minute session — OMR 8</li>
            <li>First 5 minutes free — once per listener</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Anonymous. No subscription. Pay only for what you use.</p>
        </div>

        <div className="cta">
          <h2>Someone is listening — right now</h2>
          <p>Available 24/7 for Indians across Oman — in your language, anonymously.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is emotional life like for Indians in Oman?</h3>
            <p>Oman is quieter and more conservative. Many Indians — particularly in construction, hospitality,
              and domestic work — describe deep isolation despite being in a country with a large Indian community.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost from Oman?</h3>
            <p>OMR 4 for 15 minutes, OMR 6 for 30 minutes, OMR 8 for 45 minutes. First 5 minutes are free.</p>
          </div>
          <div className="faq-item">
            <h3>Can I speak in Malayalam or Hindi from Oman?</h3>
            <p>Yes. LeanOn has Malayalam, Hindi, Tamil, Telugu, Kannada, Bengali, and other Indian language
              listeners. Check a listener&apos;s profile to find your language.</p>
          </div>
          <div className="faq-item">
            <h3>I work long hours. Is there a quick way to talk?</h3>
            <p>A 15-minute session is often enough to feel lighter. No appointments — open the app, pick an
              online listener, and start talking immediately.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn anonymous — will my employer find out?</h3>
            <p>Completely anonymous. Nothing is connected to your real identity, employer, or visa. Speak
              freely and without worry.</p>
          </div>
        </div>

        <div className="related">
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/middle-east-loneliness">Middle East loneliness →</a>
          <a href="/kuwait-loneliness">Kuwait support →</a>
          <a href="/uae-loneliness">UAE support →</a>
          <a href="/middle-east-rant">Need to rant? →</a>
          <a href="/middle-east-empathy-listener">Empathy listener Gulf →</a>
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
