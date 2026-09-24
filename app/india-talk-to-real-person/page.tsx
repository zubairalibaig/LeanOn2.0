import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Real Person in India — Not an AI Chatbot | LeanOn',
  description: 'LeanOn connects you with real Indian peer listeners — humans with genuine lived experience of Indian life, loneliness, family pressure, and relationship stress. First 5 minutes free.',
  keywords: [
    'real person to talk to in India', 'koi baat sunne wala', 'loneliness help India real person',
    'talk to someone in India', 'human listener India', 'not AI chatbot India',
    'peer support India real human', 'someone to talk to India', 'real conversation India',
    'Indian peer support platform', 'real human support India',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/india-talk-to-real-person',
    languages: { 'en-IN': 'https://www.leanon.app/india-talk-to-real-person' },
  },
  openGraph: {
    title: 'Talk to a Real Person in India — Not an AI Chatbot | LeanOn',
    description: 'Real Indian peer listeners available 24/7 — humans who understand Indian life, loneliness, family pressure, and relationship stress. First 5 minutes free.',
    url: 'https://www.leanon.app/india-talk-to-real-person',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn Peer Support — India',
  description: 'LeanOn is an Indian peer support platform that connects people with real human listeners — trained, vetted individuals with lived experience of Indian life, available 24/7.',
  provider: {
    '@type': 'Organization',
    name: 'LeanOn',
    url: 'https://www.leanon.app',
  },
  areaServed: 'India',
  audience: {
    '@type': 'Audience',
    audienceType: 'Indians seeking real human emotional support',
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
  description: 'LeanOn is an Indian peer support platform connecting people with real human listeners — not AI — available 24/7 across India.',
  sameAs: ['https://www.leanon.app'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find a real person to talk to in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is an Indian peer support platform where you can talk to real human listeners — people with genuine lived experience of Indian life, urban loneliness, family pressure, and relationship stress. First 5 minutes free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a human alternative to AI chatbots in India for emotional support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — LeanOn connects Indians with real peer listeners available 24/7. Unlike AI, LeanOn listeners have lived through the pressures of Indian life: career expectations, family dynamics, loneliness in metros, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to someone in Hindi on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, and other regional languages. You can filter by language when browsing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn affordable in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions start at ₹160 for 15 minutes with the first 5 minutes free. A 15-minute session costs ₹310 — far less than therapy while still being a real human connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of problems can I talk about on LeanOn in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loneliness in a new city, family pressure, career stress, arranged marriage anxiety, feeling misunderstood, relationship struggles, grief — any emotional weight specific to the Indian experience.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to a Real Person India', item: 'https://www.leanon.app/india-talk-to-real-person' },
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
  .compare-box{background:linear-gradient(135deg,#f0f8fc,#e0f2f7);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .compare-box h2{font-size:18px;font-weight:900;margin-bottom:16px;}
  .compare-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:8px;}
  .compare-col{background:white;border-radius:12px;padding:14px;}
  .compare-col h3{font-size:13px;font-weight:900;margin-bottom:8px;}
  .compare-col.ai h3{color:#999;}
  .compare-col.human h3{color:var(--teal);}
  .compare-col p{font-size:13px;line-height:1.65;color:#5A7A8A;}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.compare-row{grid-template-columns:1fr;}}
`

export default function IndiaTalkToRealPersonPage() {
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
          <a href="/">Home</a><span>›</span>Talk to a Real Person India
        </div>

        <h1>India Has Enough Screens. You Need a Real Voice.</h1>
        <p className="lead">
          LeanOn is an Indian peer support platform that connects you with real human listeners — people
          with genuine lived experience of Indian life. Not an AI. Not a bot. A real person who
          understands what it actually feels like to live here.
        </p>

        <a href="/browse" className="cta-hero">Talk to a real person now — first 5 min free →</a>

        <div className="card">
          <h2>What makes a real human different from an AI</h2>
          <p>
            When you type your pain into ChatGPT or Gemini, a language model predicts what to say next.
            When you talk to a LeanOn listener, a real Indian human being — someone who has felt loneliness,
            family pressure, career anxiety, or heartbreak — actually receives what you said.
          </p>
          <p>
            That difference is not small. It is everything. Being truly heard by another person changes
            something inside you. A chatbot cannot do that.
          </p>
        </div>

        <div className="compare-box">
          <h2>AI chatbot vs LeanOn real Indian listener</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI chatbot</h3>
              <p>Generates text based on patterns. Has never felt loneliness, family pressure, or rejection. Responses feel helpful but hollow — no one is actually there.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn real listener</h3>
              <p>A real Indian human who has applied, been reviewed, and trained. They have lived through the pressures of Indian life and genuinely want to hear you.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 What AI misses</h3>
              <p>Cannot understand the weight of an Indian family&apos;s expectations. Cannot feel the loneliness of a new city. Knows India as data, not as a lived reality.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 What a real listener brings</h3>
              <p>Understands hostel loneliness, metro city isolation, joint family stress, arranged marriage anxiety — because they have actually lived it.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>The Indian experiences only a real human can hold</h2>
          <ul className="checklist">
            <li>Moving alone to Bengaluru, Mumbai, or Delhi — knowing no one in the city</li>
            <li>Hostel life where everyone seems to have their group and you feel invisible</li>
            <li>Pressure from parents about career, marriage, or being enough</li>
            <li>Joint family stress — love and suffocation at the same time</li>
            <li>Feeling like no one at work really knows you</li>
            <li>3 AM loneliness when you have nobody to call</li>
            <li>Arranged marriage anxiety — commitment to someone you&apos;re still figuring out</li>
            <li>Grief that the people around you expect you to &quot;get over&quot;</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 It is 2 AM and you need a real voice</h2>
          <p>
            At 2 AM, ChatGPT is available. But so is LeanOn — except on LeanOn, there is an actual
            person on the other side. A real Indian human who is awake, present, and ready to listen.
          </p>
          <p>
            You do not need a reason big enough. You just need to not be alone with it anymore.
          </p>
          <a href="/browse" className="cta-night">Find someone who is awake right now →</a>
        </div>

        <div className="card">
          <h2>Multilingual listeners — your language, your comfort</h2>
          <p>
            Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi,
            and other regional languages. You can filter by language when browsing listeners.
          </p>
          <p>
            Sometimes the language you grew up speaking is the language your heart speaks most honestly.
            You should be able to reach out in that language.
          </p>
        </div>

        <div className="card">
          <h2>How much does it cost?</h2>
          <p>
            Sessions start at ₹160 for 15 minutes. Your first 5 minutes are completely free — no payment
            needed to start. A 15-minute session costs ₹310. A 30-minute session costs ₹610.
            A 45-minute session costs ₹910.
          </p>
          <p>
            This is far less than therapy, while still being a real human connection — not a chatbot.
          </p>
        </div>

        <div className="cta">
          <h2>A real Indian human is ready to listen right now</h2>
          <p>Anonymous, affordable, available 24/7. First 5 minutes free.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can I find a real person to talk to in India?</h3>
            <p>LeanOn is an Indian peer support platform where you can talk to real human listeners — people with genuine lived experience of Indian life, urban loneliness, family pressure, and relationship stress. First 5 minutes free.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a human alternative to AI chatbots in India for emotional support?</h3>
            <p>Yes — LeanOn connects Indians with real peer listeners available 24/7. Unlike AI, LeanOn listeners have lived through the pressures of Indian life: career expectations, family dynamics, loneliness in metros, and more.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to someone in Hindi on LeanOn?</h3>
            <p>Yes. Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, and other regional languages. You can filter by language when browsing.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn affordable in India?</h3>
            <p>Sessions start at ₹160 for 15 minutes with the first 5 minutes free. A 15-minute session costs ₹310 — far less than therapy while still being a real human connection.</p>
          </div>
          <div className="faq-item">
            <h3>What kind of problems can I talk about on LeanOn in India?</h3>
            <p>Loneliness in a new city, family pressure, career stress, arranged marriage anxiety, feeling misunderstood, relationship struggles, grief — any emotional weight specific to the Indian experience.</p>
          </div>
        </div>

        <div className="related">
          <a href="/support/loneliness">Loneliness support India →</a>
          <a href="/talk-to-human-instead-of-chatgpt">Talk to a real person, not AI →</a>
          <a href="/vent-to-a-real-person-online">Vent to a real person online →</a>
          <a href="/emotional-support-without-ai">Emotional support without AI →</a>
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
