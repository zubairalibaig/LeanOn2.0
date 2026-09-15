import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Real Emotional Support — Not a Chatbot | LeanOn',
  description: 'LeanOn is the human alternative to ChatGPT for emotional support. Real peer listeners with lived experience — available 24/7 for loneliness, grief, relationships, and anything weighing on you. First 5 min free.',
  keywords: [
    'emotional support without ai', 'human alternative to chatgpt', 'talking to ai vs real person',
    'real emotional support online', 'chatgpt alternative emotional support', 'ai vs human mental health',
    'real person emotional support', 'human listener online', 'peer support not chatbot',
    'emotional support real human being',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/emotional-support-without-ai',
  },
  openGraph: {
    title: 'Real Emotional Support — Not a Chatbot | LeanOn',
    description: 'Real support comes from real people. LeanOn connects you with human peer listeners — not AI — for loneliness, grief, relationships, and everything in between.',
    url: 'https://www.leanon.app/emotional-support-without-ai',
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
    audienceType: 'People seeking emotional support from real humans rather than AI chatbots',
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
      name: 'What is a good alternative to ChatGPT for emotional support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is a peer support platform where real human listeners — people with genuine lived experience — are available 24/7 to talk about loneliness, relationships, grief, and anything else weighing on you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is human emotional support better than AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Human listeners on LeanOn have actually lived through pain, love, loss, and confusion. Their empathy is real — not predicted. When they say "I understand", they mean it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can provide distraction, but it cannot provide genuine connection. Research consistently shows that the feeling of being truly heard by another person — not a machine — is what relieves loneliness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn better than talking to an AI about my problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects you with a real human who genuinely listens. Unlike AI, LeanOn listeners are changed by your conversation — they are actually present, and that presence is what makes the difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a real person to talk to online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Browse LeanOn\'s peer listeners at leanon.app/browse — filter by language, availability, and topic. First 5 minutes are free. Real humans, real conversations, real support.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Emotional Support Without AI', item: 'https://www.leanon.app/emotional-support-without-ai' },
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
  .steps{counter-reset:steps;list-style:none;margin-top:10px;}
  .steps li{font-size:15px;color:#3A6070;line-height:1.7;padding:10px 0 10px 44px;border-bottom:1px solid var(--border);position:relative;}
  .steps li:last-child{border-bottom:none;}
  .steps li::before{counter-increment:steps;content:counter(steps);position:absolute;left:0;top:10px;width:28px;height:28px;background:var(--teal);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;}
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

export default function EmotionalSupportWithoutAIPage() {
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
          <a href="/">Home</a><span>›</span>Emotional Support Without AI
        </div>

        <h1>Real Support Comes from Real People.<br />Not Machines.</h1>
        <p className="lead">
          LeanOn is a peer support platform that connects people with real human listeners — people with
          genuine lived experience of loneliness, grief, relationships, and life&apos;s hardest moments.
          Unlike AI chatbots like ChatGPT or Gemini, LeanOn listeners are real humans who are actually
          present in the conversation with you.
        </p>

        <a href="/browse" className="cta-hero">Talk to a real human now — first 5 min free →</a>

        <div className="card">
          <h2>What AI cannot give you</h2>
          <p>
            ChatGPT, Gemini, and other AI chatbots can generate empathetic-sounding words. But there are
            things they fundamentally cannot provide, no matter how sophisticated they become:
          </p>
          <ul className="checklist">
            <li>Genuine understanding — knowing what something feels like because you&apos;ve been there</li>
            <li>Real presence — another consciousness that is actually with you in this moment</li>
            <li>True connection — the feeling of being received by someone who cares</li>
            <li>Authentic empathy — not predicted empathy, but empathy from lived experience</li>
            <li>The relief of being truly heard — not processed, not analysed, but actually heard</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Research on loneliness is clear: the relief comes from genuine human connection. AI can
            simulate conversation. It cannot simulate presence.
          </p>
        </div>

        <div className="compare-box">
          <h2>AI chatbot vs. LeanOn real human listener</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot (ChatGPT etc.)</h3>
              <p>Has never experienced pain, love, grief, or confusion. Its &quot;empathy&quot; is a prediction.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Has actually lived through pain, love, loss, and confusion. Their understanding is real.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot (ChatGPT etc.)</h3>
              <p>Generates responses. No one is present. Your words reach no one.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>A real person is present, receiving your words, and genuinely affected by what you share.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot (ChatGPT etc.)</h3>
              <p>The feeling of loneliness returns quickly — because the connection was never real.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Real human connection is what actually relieves emotional pain — not the appearance of it.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>What real human support provides</h2>
          <p>
            A LeanOn listener brings their whole self to a conversation. They have been through things —
            real things. A difficult relationship. Loss. Periods of not knowing who they were. Career
            uncertainty. Family tension that didn&apos;t resolve neatly.
          </p>
          <p>
            When you talk to them, you are not talking to a system. You are talking to a person who has
            navigated their own version of what you are going through. That is what makes the difference.
          </p>
          <p>What every LeanOn session provides:</p>
          <ul className="checklist" style={{ marginTop: '12px' }}>
            <li>A real human who is fully present and undistracted</li>
            <li>Genuine listening — not waiting to respond, but actually absorbing what you say</li>
            <li>Questions that come from real curiosity, not scripted prompts</li>
            <li>The kind of understanding that only comes from having felt similar things</li>
            <li>Complete anonymity — no names, no identifying information required</li>
          </ul>
        </div>

        <div className="card">
          <h2>How LeanOn works</h2>
          <ol className="steps">
            <li>
              <strong>Browse listeners</strong> at <a href="/browse" style={{ color: 'var(--teal)', fontWeight: 700 }}>leanon.app/browse</a>.
              Filter by availability, language, and what they specialise in. Read their bio — many share
              what they&apos;ve personally been through.
            </li>
            <li>
              <strong>Start a free session.</strong> Your first 5 minutes are free. No credit card needed
              upfront. Just start talking to someone who is genuinely there.
            </li>
            <li>
              <strong>Continue as long as you need.</strong> Sessions are available in 15, 30, or 45-minute
              blocks. Pricing starts from ₹20/min in India, $10 for 15 minutes internationally.
            </li>
          </ol>
        </div>

        <div className="cta">
          <h2>Real humans. Real conversations. Real support.</h2>
          <p>Not a chatbot. Not an algorithm. A real person, ready for you right now.</p>
          <a href="/browse" className="btn-white">Browse real listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is a good alternative to ChatGPT for emotional support?</h3>
            <p>LeanOn is a peer support platform where real human listeners — people with genuine lived
              experience — are available 24/7 to talk about loneliness, relationships, grief, and anything
              else weighing on you.</p>
          </div>
          <div className="faq-item">
            <h3>Why is human emotional support better than AI?</h3>
            <p>Human listeners on LeanOn have actually lived through pain, love, loss, and confusion. Their
              empathy is real — not predicted. When they say &quot;I understand&quot;, they mean it.</p>
          </div>
          <div className="faq-item">
            <h3>Can AI help with loneliness?</h3>
            <p>AI can provide distraction, but it cannot provide genuine connection. Research consistently
              shows that the feeling of being truly heard by another person — not a machine — is what
              relieves loneliness.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn better than talking to an AI about my problems?</h3>
            <p>LeanOn connects you with a real human who genuinely listens. Unlike AI, LeanOn listeners
              are changed by your conversation — they are actually present, and that presence is what
              makes the difference.</p>
          </div>
          <div className="faq-item">
            <h3>How do I find a real person to talk to online?</h3>
            <p>Browse LeanOn&apos;s peer listeners at leanon.app/browse — filter by language, availability,
              and topic. First 5 minutes are free. Real humans, real conversations, real support.</p>
          </div>
        </div>

        <div className="related">
          <a href="/talk-to-real-person-not-ai">Real person vs AI →</a>
          <a href="/vent-to-a-real-person-online">Vent to a real person →</a>
          <a href="/loneliness-support-india">Loneliness support →</a>
          <a href="/i-need-someone-to-talk-to">I need someone to talk to →</a>
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
