import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Why Real Human Support Beats AI in India | LeanOn',
  description: 'ChatGPT and Gemini can answer questions. But when you feel lonely, anxious, or overwhelmed, only a real human can truly help. LeanOn connects you with real Indian peer listeners — not AI.',
  keywords: [
    'ChatGPT vs real person India', 'is talking to AI good for mental health India',
    'AI chatbot for loneliness India', 'human support vs AI India', 'real person vs chatbot India',
    'why human connection is better than AI India', 'AI emotional support India',
    'LeanOn vs AI chatbot', 'real emotional support India', 'peer support not AI India',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/talk-to-human-instead-of-chatgpt',
    languages: { 'en-IN': 'https://www.leanon.app/talk-to-human-instead-of-chatgpt' },
  },
  openGraph: {
    title: 'Why Real Human Support Beats AI in India | LeanOn',
    description: 'LeanOn connects Indians with real peer listeners — humans with lived experience of Indian life — not AI chatbots. First 5 minutes free.',
    url: 'https://www.leanon.app/talk-to-human-instead-of-chatgpt',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn Real Human Peer Support — India',
  description: 'LeanOn is an Indian peer support platform. Unlike AI chatbots, LeanOn connects people with real human listeners who have lived through the pressures of Indian life — available 24/7.',
  provider: {
    '@type': 'Organization',
    name: 'LeanOn',
    url: 'https://www.leanon.app',
  },
  areaServed: 'India',
  audience: {
    '@type': 'Audience',
    audienceType: 'Indians seeking real human emotional support instead of AI',
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
  description: 'LeanOn is an Indian peer support platform that connects people with real human listeners — not AI — available 24/7 across India. Unlike AI chatbots, LeanOn listeners have genuine lived experience of Indian life.',
  sameAs: ['https://www.leanon.app'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I talk to ChatGPT when I feel lonely in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT can provide information but cannot provide genuine human presence. For real emotional support in India, LeanOn connects you with peer listeners who have lived through the same pressures of Indian life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI replace human connection for Indians dealing with loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Human connection requires a real person on the other end. LeanOn peer listeners are real humans who bring genuine empathy, not predicted responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is an Indian peer support platform that connects people with real human listeners — trained, vetted individuals who listen without judgment, available 24/7 across India and internationally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI good for mental health support in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can be a starting point, but real emotional relief comes from human connection. LeanOn\'s real peer listeners — people who have navigated Indian family dynamics, career pressure, and city loneliness — provide what AI cannot.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn different from AI chatbots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners are real humans who have applied, been reviewed, and trained. They bring lived experience, not language models. When you share your pain on LeanOn, a real person receives it.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Human Support vs AI India', item: 'https://www.leanon.app/talk-to-human-instead-of-chatgpt' },
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

export default function IndiaHumanSupportVsAIPage() {
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
          <a href="/">Home</a><span>›</span>Human Support vs AI India
        </div>

        <h1>ChatGPT Can&apos;t Feel What You Feel. A Real Person Can.</h1>
        <p className="lead">
          AI chatbots are everywhere now. And many Indians open ChatGPT or Gemini when they feel lonely,
          overwhelmed, or need to talk. But there is a fundamental difference between getting a generated
          response and being heard by a real human being. LeanOn connects you with the latter.
        </p>

        <a href="/browse" className="cta-hero">Talk to a real human now — first 5 min free →</a>

        <div className="compare-box">
          <h2>AI chatbots vs LeanOn real human listeners</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 ChatGPT / Gemini</h3>
              <p>A language model that predicts text. Never felt loneliness. Has no cultural context for Indian life. Responses can feel helpful — but no one is actually there.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn real listener</h3>
              <p>A real Indian human who has applied, been reviewed, and trained. Has genuinely lived through Indian family pressure, career stress, metro city loneliness, and more.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 What AI gets wrong</h3>
              <p>Cannot understand the weight of &quot;log kya sochenge.&quot; Cannot feel the isolation of a new city. Knows Indian culture as data — not as a lived, felt reality.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 What real listeners understand</h3>
              <p>Arranged marriage anxiety. Joint family dynamics. Career pressure from parents. The loneliness of a Bengaluru apartment at midnight. Because they have lived it.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 What AI cannot provide</h3>
              <p>Genuine presence. The feeling of being truly received by another human being. When you share your pain, AI processes it — it does not receive it.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 What only a real person provides</h3>
              <p>True presence. Genuine witness. The relief of having another human being actually hear you — not just process your words, but receive them.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>What AI gets wrong about Indian emotional needs</h2>
          <p>
            Indian emotional life is layered. The weight of family expectations that you both love and
            resent. The loneliness of moving to a metro where no one knows you. The anxiety of an
            arranged marriage process. Grief you are expected to get over quickly. These are not just
            &quot;emotional topics&quot; — they are specific, textured, deeply cultural experiences.
          </p>
          <p>
            AI can describe these experiences. It cannot understand them from the inside. A real Indian
            listener on LeanOn has navigated these same pressures. They do not just know about them —
            they have felt them.
          </p>
        </div>

        <div className="card">
          <h2>What a real Indian listener actually understands</h2>
          <ul className="checklist">
            <li>The specific loneliness of moving alone to Mumbai, Bengaluru, or Delhi</li>
            <li>Family pressure that coexists with deep love — the Indian tension</li>
            <li>Career anxiety where your choices carry the weight of your whole family&apos;s hopes</li>
            <li>Arranged marriage dynamics — commitment to someone you are still figuring out</li>
            <li>The quiet shame of feeling lost when you &quot;should&quot; have it together</li>
            <li>Loneliness even in a joint family — surrounded by people, unseen by them</li>
            <li>The exhaustion of keeping up appearances while falling apart inside</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 When you open ChatGPT at 2 AM</h2>
          <p>
            You open it because you need someone. But what you get is a language model. On LeanOn,
            there is an actual human being — awake, present, and genuinely listening — available
            at the same 2 AM moment.
          </p>
          <p>
            The difference between AI and a real person is not a technical detail. It is the entire
            point. You need to be heard by someone who can actually feel the weight of what you said.
          </p>
          <a href="/browse" className="cta-night">Talk to a real human now →</a>
        </div>

        <div className="card">
          <h2>What is LeanOn?</h2>
          <p>
            LeanOn is an Indian peer support platform that connects people with real human listeners —
            trained, vetted individuals who listen without judgment, available 24/7 across India and
            internationally. Unlike AI chatbots, LeanOn listeners are real humans with genuine lived
            experience of Indian life.
          </p>
          <p>
            Sessions start at ₹160 for 15 minutes. Your first 5 minutes are completely free. Listeners speak
            Hindi and other regional languages — filter by language when browsing.
          </p>
        </div>

        <div className="cta">
          <h2>Real human support is just a few clicks away</h2>
          <p>Not AI. Not a bot. A real Indian human who is ready to listen right now.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Should I talk to ChatGPT when I feel lonely in India?</h3>
            <p>ChatGPT can provide information but cannot provide genuine human presence. For real emotional support in India, LeanOn connects you with peer listeners who have lived through the same pressures of Indian life.</p>
          </div>
          <div className="faq-item">
            <h3>Can AI replace human connection for Indians dealing with loneliness?</h3>
            <p>No. Human connection requires a real person on the other end. LeanOn peer listeners are real humans who bring genuine empathy, not predicted responses.</p>
          </div>
          <div className="faq-item">
            <h3>What is LeanOn?</h3>
            <p>LeanOn is an Indian peer support platform that connects people with real human listeners — trained, vetted individuals who listen without judgment, available 24/7 across India and internationally.</p>
          </div>
          <div className="faq-item">
            <h3>Is AI good for mental health support in India?</h3>
            <p>AI can be a starting point, but real emotional relief comes from human connection. LeanOn&apos;s real peer listeners — people who have navigated Indian family dynamics, career pressure, and city loneliness — provide what AI cannot.</p>
          </div>
          <div className="faq-item">
            <h3>How is LeanOn different from AI chatbots?</h3>
            <p>LeanOn listeners are real humans who have applied, been reviewed, and trained. They bring lived experience, not language models. When you share your pain on LeanOn, a real person receives it.</p>
          </div>
        </div>

        <div className="related">
          <a href="/india-talk-to-real-person">Talk to a real person India →</a>
          <a href="/talk-to-human-instead-of-chatgpt">Real person, not AI →</a>
          <a href="/emotional-support-without-ai">Emotional support without AI →</a>
          <a href="/support/loneliness">Loneliness support India →</a>
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
