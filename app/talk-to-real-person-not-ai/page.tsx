import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Real Person, Not an AI | LeanOn',
  description: 'LeanOn connects you with real human peer listeners — not AI chatbots. When you\'re lonely or overwhelmed, a real person who has lived through similar experiences is ready to listen. First 5 minutes free.',
  keywords: [
    'talk to real person not ai', 'human vs ai emotional support', 'chatgpt for loneliness',
    'ai chatbot loneliness', 'real person to talk to online', 'human emotional support',
    'ai vs human support', 'alternative to chatgpt loneliness', 'peer support not ai',
    'real human listener online',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/talk-to-real-person-not-ai',
  },
  openGraph: {
    title: 'Talk to a Real Person, Not an AI | LeanOn',
    description: 'AI predicts words. Humans understand feelings. LeanOn connects you with real peer listeners — people with lived experience — available 24/7.',
    url: 'https://www.leanon.app/talk-to-real-person-not-ai',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn — Real Human Peer Support',
  description: 'LeanOn connects people feeling lonely, overwhelmed, or emotionally stuck with real human peer listeners who have lived experience — not AI chatbots.',
  provider: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
  serviceType: 'Peer Emotional Support',
  areaServed: 'Worldwide',
  audience: {
    '@type': 'Audience',
    audienceType: 'People experiencing loneliness, relationship stress, or emotional overwhelm',
  },
  offers: {
    '@type': 'Offer',
    description: 'First 5 minutes free. Sessions from ₹20/min in India, $10 for 15 min internationally.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LeanOn',
  url: 'https://www.leanon.app',
  description: 'LeanOn is a peer support platform that connects people with real human listeners — people with lived experience of loneliness, relationship struggles, grief, and life transitions. Unlike AI chatbots, LeanOn listeners are real people who genuinely listen, ask questions, and hold space.',
  sameAs: ['https://www.leanon.app'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is a peer support platform that connects you with real human listeners — people with lived experience, not AI chatbots or algorithms. Sessions start at 5 minutes free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn an AI chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Every listener on LeanOn is a real human being who has applied, been reviewed, and trained to listen without judgment. There is no AI involved in the conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why talk to a human instead of an AI like ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot truly empathize — it predicts words. A real human listener on LeanOn has lived through similar experiences and can offer genuine understanding, not just statistically likely responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I talk to a LeanOn listener about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loneliness, relationship stress, anxiety, grief, venting about work or family, feeling lost or empty — any emotional weight you\'re carrying that you need to say out loud to someone who will really hear it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is peer support — affordable, anonymous, and available 24/7. It is not therapy or clinical mental health care. Think of it as a trusted friend with relevant lived experience, available on demand.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to a Real Person, Not an AI', item: 'https://www.leanon.app/talk-to-real-person-not-ai' },
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

export default function TalkToRealPersonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>Talk to a Real Person, Not an AI
        </div>

        <h1>You Don&apos;t Need an Algorithm.<br />You Need a Human Who Gets It.</h1>
        <p className="lead">
          LeanOn is a peer support platform that connects people feeling lonely, overwhelmed, or emotionally
          stuck with real human listeners — people with lived experience of the same struggles. Not AI. Not
          chatbots. Real humans, available 24/7.
        </p>

        <a href="/browse" className="cta-hero">Talk to a real person now — first 5 min free →</a>

        <div className="card">
          <h2>The problem with talking to AI about loneliness</h2>
          <p>
            When you&apos;re feeling lonely or overwhelmed, you might open ChatGPT or ask Gemini for help.
            It responds quickly. The words sound right. But something feels hollow — and that&apos;s not
            your imagination.
          </p>
          <p>
            AI does not listen. It generates. Every response is a statistical prediction of what words
            should come next, trained on text from the internet. When it says &quot;I understand&quot; —
            it does not. It has never felt loneliness, loss, or the specific weight of being misunderstood
            by someone you love.
          </p>
          <p>
            Talking to AI about loneliness can actually make things worse: you get the illusion of
            connection without the reality of it. The relief is temporary. The emptiness returns.
          </p>
        </div>

        <div className="compare-box">
          <h2>AI chatbot vs. LeanOn real human listener</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Generates statistically likely responses based on training data</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>A real person who has felt what you feel and genuinely understands</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Available but never truly present — no one is actually receiving your words</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Fully present, undivided attention — a real person is with you in this moment</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Cannot be changed by your story — your words do not reach anyone</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Your words actually reach a real person who is moved by what you share</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Free but never fulfilling — the emptiness returns after the conversation ends</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>First 5 min free, then from ₹20/min — real connection that actually helps</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>What real human support looks like</h2>
          <p>
            A LeanOn listener does not read from a script. They bring their own life — their own experience
            of heartbreak, uncertainty, grief, or confusion — into the conversation. When you say &quot;I
            feel completely alone even though I&apos;m surrounded by people&quot;, a real listener knows
            exactly what that means. Not because they were trained on text that includes that phrase. Because
            they have felt it.
          </p>
          <p>What you can expect from a LeanOn session:</p>
          <ul className="checklist" style={{ marginTop: '12px' }}>
            <li>Someone who actually listens — not just waits to respond</li>
            <li>Questions that help you feel seen and understood</li>
            <li>No judgment, no unsolicited advice, no pressure</li>
            <li>A real person who is changed by what you share with them</li>
            <li>Complete anonymity — you never have to share your name</li>
            <li>Available now, in the middle of the night, whenever you need it</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Real humans. Real support. Right now.</h2>
          <p>Browse listeners by availability, language, and topic. First 5 minutes free.</p>
          <a href="/browse" className="btn-white">Browse real listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is LeanOn?</h3>
            <p>LeanOn is a peer support platform that connects you with real human listeners — people with
              lived experience, not AI chatbots or algorithms. Sessions start at 5 minutes free.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn an AI chatbot?</h3>
            <p>No. Every listener on LeanOn is a real human being who has applied, been reviewed, and
              trained to listen without judgment. There is no AI involved in the conversations.</p>
          </div>
          <div className="faq-item">
            <h3>Why talk to a human instead of an AI like ChatGPT?</h3>
            <p>AI cannot truly empathize — it predicts words. A real human listener on LeanOn has lived
              through similar experiences and can offer genuine understanding, not just statistically
              likely responses.</p>
          </div>
          <div className="faq-item">
            <h3>What can I talk to a LeanOn listener about?</h3>
            <p>Loneliness, relationship stress, anxiety, grief, venting about work or family, feeling lost
              or empty — any emotional weight you&apos;re carrying that you need to say out loud to someone
              who will really hear it.</p>
          </div>
          <div className="faq-item">
            <h3>How is LeanOn different from therapy?</h3>
            <p>LeanOn is peer support — affordable, anonymous, and available 24/7. It is not therapy or
              clinical mental health care. Think of it as a trusted friend with relevant lived experience,
              available on demand.</p>
          </div>
        </div>

        <div className="related">
          <a href="/loneliness-support-india">Loneliness support →</a>
          <a href="/vent-to-a-real-person-online">Vent to a real person →</a>
          <a href="/i-need-someone-to-talk-to">I need someone to talk to →</a>
          <a href="/feeling-lonely-in-india">Feeling lonely in India →</a>
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
