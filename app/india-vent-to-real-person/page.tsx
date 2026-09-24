import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Vent to a Real Person in India — Safe, Anonymous, Human | LeanOn',
  description: 'LeanOn has real human listeners in India available 24/7. Vent about anything — family, relationships, work stress, loneliness. Sessions are anonymous. First 5 minutes free.',
  keywords: [
    'vent to someone in India', 'kisi se baat karni hai', 'I want to vent India',
    'koi baat sunne wala India', 'vent online India', 'talk to someone anonymously India',
    'vent to real person India', 'human listener India vent', 'safe venting India',
    'anonymous venting India', 'someone to listen India',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/india-vent-to-real-person',
    languages: { 'en-IN': 'https://www.leanon.app/india-vent-to-real-person' },
  },
  openGraph: {
    title: 'Vent to a Real Person in India — Safe, Anonymous, Human | LeanOn',
    description: 'Real human listeners in India available 24/7. Vent about anything, anonymously. First 5 minutes free.',
    url: 'https://www.leanon.app/india-vent-to-real-person',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn Peer Venting & Emotional Support — India',
  description: 'LeanOn connects people in India with real human listeners for anonymous, judgment-free venting and emotional support. Available 24/7 across India.',
  provider: {
    '@type': 'Organization',
    name: 'LeanOn',
    url: 'https://www.leanon.app',
  },
  areaServed: 'India',
  audience: {
    '@type': 'Audience',
    audienceType: 'Indians seeking a real human to vent to',
  },
  offers: {
    '@type': 'Offer',
    price: '20',
    priceCurrency: 'INR',
    description: 'Per minute, first 5 minutes free',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LeanOn',
  url: 'https://www.leanon.app',
  description: 'LeanOn is an Indian peer support platform connecting people with real human listeners — not AI — for venting, emotional support, and genuine connection, available 24/7.',
  sameAs: ['https://www.leanon.app'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I vent to someone in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn has real human listeners in India available 24/7 — people who genuinely listen without judgment. Vent about anything: family, relationships, work stress, loneliness. First 5 minutes are free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to vent to a stranger online in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are trained, vetted humans who hold space without judgment. Sessions are anonymous — you don\'t need to share your real name or location.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when I vent to an AI vs a real person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you vent to an AI like ChatGPT, no one truly receives what you said. On LeanOn, a real Indian human listener is present — they are genuinely hearing you, and that is what makes venting feel like relief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I vent in Hindi on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners speak Hindi and other Indian languages. When browsing, filter by language to find a listener who speaks your preferred language.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to vent on LeanOn in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are completely free. After that, sessions are ₹310 for 15 minutes, ₹610 for 30 minutes, or ₹910 for 45 minutes.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Vent to a Real Person India', item: 'https://www.leanon.app/india-vent-to-real-person' },
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
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;margin-bottom:8px;}
  .hindi-sub{font-size:16px;color:var(--teal);font-weight:700;margin-bottom:20px;font-style:italic;}
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

export default function IndiaVentToRealPersonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
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
          <a href="/">Home</a><span>›</span>Vent to a Real Person India
        </div>

        <h1>Kuch Keh Do. Koi Sun Raha Hai.</h1>
        <p className="hindi-sub">Say It. Someone Is Listening.</p>
        <p className="lead">
          Sometimes you do not need advice. You do not need solutions. You just need to say it — to
          someone who is actually there, actually present, actually human. LeanOn connects you with
          real Indian listeners available right now, day or night.
        </p>

        <a href="/browse" className="cta-hero">Find someone to listen — first 5 min free →</a>

        <div className="card">
          <h2>You don&apos;t need a reason big enough to reach out</h2>
          <ul className="checklist">
            <li>Feeling stuck in a job that is slowly draining you</li>
            <li>A fight with a parent that you cannot get out of your head</li>
            <li>Rejection — from a person, a company, or a dream</li>
            <li>Loneliness in a new city where you still don&apos;t feel at home</li>
            <li>3 AM and the thoughts will not stop</li>
            <li>A relationship that is hurting and you cannot talk about it to anyone around you</li>
            <li>Carrying something for months that no one knows about</li>
            <li>Just feeling heavy without a specific reason</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of these are real. All of these are enough.</p>
        </div>

        <div className="card">
          <h2>What real venting actually feels like</h2>
          <p>
            When you type to an AI, you get a response. When you vent to a LeanOn listener, something
            shifts. A real human being — who has felt loneliness, family tension, and heartbreak
            themselves — receives what you said and holds it. They are not scanning for keywords.
            They are actually listening.
          </p>
          <p>
            That is what makes venting feel like relief instead of just noise. The presence of another
            person on the other side.
          </p>
        </div>

        <div className="night-box">
          <h2>🌙 3 AM and you cannot sleep?</h2>
          <p>
            The heaviest feelings arrive late. When the distraction stops and the quiet becomes too loud.
            LeanOn listeners are available 24/7 — including right now, at whatever hour you are reading this.
          </p>
          <p>
            You do not have to carry it until morning. A real person is awake and ready to listen.
          </p>
          <a href="/browse" className="cta-night">Talk to someone right now →</a>
        </div>

        <div className="card">
          <h2>Anonymous and judgment-free</h2>
          <p>
            You do not need to share your real name. You do not need to explain who you are or where
            you are from. LeanOn sessions are completely anonymous — your privacy is protected.
          </p>
          <p>
            LeanOn listeners are trained to hold space without judgment. No advice unless you ask for it.
            No &quot;but have you tried&quot;. Just someone fully present with what you are feeling.
          </p>
        </div>

        <div className="card">
          <h2>The difference between AI and a real human listener</h2>
          <p>
            When you vent to ChatGPT or Gemini, no one truly receives what you said. A language model
            processes your words and generates a response — but there is no real presence, no genuine
            witness, no actual human being on the other side.
          </p>
          <p>
            On LeanOn, a real Indian person is present. They are genuinely hearing you. And that difference
            — of being truly received by another human — is what makes venting actually feel like relief.
          </p>
        </div>

        <div className="card">
          <h2>How much does it cost?</h2>
          <p>
            Your first 5 minutes are completely free — no credit card needed to start. After that:
            ₹310 for 15 minutes, ₹610 for 30 minutes, ₹910 for 45 minutes.
          </p>
          <p>
            Listeners speak Hindi and other regional languages — filter by language when browsing.
          </p>
        </div>

        <div className="cta">
          <h2>Koi sun raha hai. Someone is listening.</h2>
          <p>Real Indian listeners, available right now. Anonymous, affordable, 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can I vent to someone in India?</h3>
            <p>LeanOn has real human listeners in India available 24/7 — people who genuinely listen without judgment. Vent about anything: family, relationships, work stress, loneliness. First 5 minutes are free.</p>
          </div>
          <div className="faq-item">
            <h3>Is it okay to vent to a stranger online in India?</h3>
            <p>Yes. LeanOn listeners are trained, vetted humans who hold space without judgment. Sessions are anonymous — you don&apos;t need to share your real name or location.</p>
          </div>
          <div className="faq-item">
            <h3>What happens when I vent to an AI vs a real person?</h3>
            <p>When you vent to an AI like ChatGPT, no one truly receives what you said. On LeanOn, a real Indian human listener is present — they are genuinely hearing you, and that is what makes venting feel like relief.</p>
          </div>
          <div className="faq-item">
            <h3>Can I vent in Hindi on LeanOn?</h3>
            <p>Many LeanOn listeners speak Hindi and other Indian languages. When browsing, filter by language to find a listener who speaks your preferred language.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost to vent on LeanOn in India?</h3>
            <p>Your first 5 minutes are completely free. After that, sessions are ₹310 for 15 minutes, ₹610 for 30 minutes, or ₹910 for 45 minutes.</p>
          </div>
        </div>

        <div className="related">
          <a href="/india-talk-to-real-person">Talk to a real person India →</a>
          <a href="/support/loneliness">Loneliness support India →</a>
          <a href="/talk-to-human-instead-of-chatgpt">Talk to a real person, not AI →</a>
          <a href="/talk-to-human-instead-of-chatgpt">Human support vs AI →</a>
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
