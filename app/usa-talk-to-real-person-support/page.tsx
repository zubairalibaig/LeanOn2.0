import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Real Person About Your Problems — Not an AI | LeanOn US',
  description: 'LeanOn connects Americans with real peer listeners — humans with lived experience, not AI chatbots. Available 24/7. First 5 minutes free. $10 for 15 min.',
  keywords: [
    'real person to talk to about loneliness USA', 'human support not AI USA',
    'affordable emotional support real person', 'talk to someone about loneliness US',
    'real human listener USA', 'peer support United States', 'alternative to therapy USA',
    'someone to talk to online USA', 'not AI emotional support', 'human connection online USA',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-talk-to-real-person-support',
  },
  openGraph: {
    title: 'Talk to a Real Person About Your Problems — Not an AI | LeanOn US',
    description: 'America has no shortage of apps. You need a real human. LeanOn connects you with vetted human peer listeners — available 24/7, first 5 min free.',
    url: 'https://www.leanon.app/usa-talk-to-real-person-support',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn — Real Human Peer Support for the United States',
  description: 'LeanOn connects people in the United States feeling lonely, overwhelmed, or emotionally stuck with real human peer listeners — not AI chatbots. Available 24/7 with first 5 minutes free.',
  provider: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
  serviceType: 'Peer Emotional Support',
  areaServed: 'United States',
  audience: {
    '@type': 'Audience',
    audienceType: 'Americans experiencing loneliness, relationship stress, or emotional overwhelm',
  },
  offers: {
    '@type': 'Offer',
    description: 'First 5 minutes free. $10 for 15 minutes, $15 for 30 minutes, $20 for 45 minutes.',
    priceCurrency: 'USD',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LeanOn',
  url: 'https://www.leanon.app',
  description: 'LeanOn is a peer support platform that connects people with real human listeners — people with lived experience of loneliness, relationship struggles, grief, and life transitions. Unlike AI chatbots, LeanOn listeners are real humans who genuinely listen, ask questions, and hold space.',
  sameAs: ['https://www.leanon.app'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I talk to a real person about loneliness in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects Americans with real peer listeners — humans with lived experience, not AI chatbots. Available 24/7 at $10 for 15 minutes, with the first 5 minutes completely free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a real person or AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every listener on LeanOn is a real human being who has applied, been reviewed, and trained to listen without judgment. There is no AI involved — only genuine human connection.',
      },
    },
    {
      '@type': 'Question',
      name: "What's a good alternative to therapy in the US for everyday emotional support?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "LeanOn peer support is affordable (starting at $10), available 24/7, and doesn't require insurance or appointments. It's not therapy — it's a real human who listens, which is often exactly what you need.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to someone about loneliness in the US at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7, including late at night and early morning when loneliness tends to peak. Start a free session any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn different from ChatGPT for emotional support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "LeanOn listeners are real humans who have lived through loss, loneliness, and life's hard moments. They bring genuine empathy — not predicted responses. When they say 'I understand', they mean it.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to a Real Person — US', item: 'https://www.leanon.app/usa-talk-to-real-person-support' },
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

export default function USATalkToRealPersonPage() {
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
          <a href="/">Home</a><span>›</span>Talk to a Real Person — US
        </div>

        <h1>America Has No Shortage of Apps.<br />You Need a Real Human.</h1>
        <p className="lead">
          LeanOn is a peer support platform that connects Americans feeling lonely, overwhelmed, or
          emotionally stuck with real human listeners — people with lived experience, not AI. Not chatbots.
          Not algorithms. A real person who is actually there, available 24/7 across the United States.
        </p>

        <a href="/browse" className="cta-hero">Talk to a real person now — first 5 min free →</a>

        <div className="card">
          <h2>The American loneliness crisis is real — and AI makes it worse</h2>
          <p>
            The US Surgeon General called loneliness a public health epidemic. Remote work, post-pandemic
            disconnection, and the collapse of third places have left millions of Americans feeling
            profoundly alone — even in cities of millions.
          </p>
          <p>
            The instinct to open ChatGPT or Gemini and talk it out makes sense. It&apos;s fast, private,
            and always available. But AI generates text — it does not receive you. It cannot be moved by
            what you share. The words look like understanding, but no one is home.
          </p>
          <p>
            Therapy is the right answer for many people — but therapy waitlists in the US can run
            6–12 weeks, and cost $150–$300 per session without insurance. LeanOn fills the gap: a real
            human, today, for $10.
          </p>
        </div>

        <div className="compare-box">
          <h2>AI chatbot vs. LeanOn real human listener</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot (ChatGPT, Gemini)</h3>
              <p>Predicts statistically likely words — no one is actually reading what you write</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>A real American who has felt what you feel and genuinely understands</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Free but hollow — the loneliness returns because no one was actually there</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>First 5 min free, then $10 for 15 min — real connection that actually helps</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Has never experienced loneliness, loss, or the specific weight of American work culture</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Lived experience of the same struggles — when they say &quot;I get it&quot;, they mean it</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>No insurance, but also no real listening — just word prediction at scale</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>No insurance needed, no appointments — anonymous, available now</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>What LeanOn is — in plain English</h2>
          <p>
            LeanOn is a peer support platform. Every listener is a real human being who has applied,
            been reviewed, and trained to listen without judgment. They are not therapists. They are
            not AI. They are people — with lives, with experience of hard things — who choose to be
            present for others.
          </p>
          <p>What you get in a LeanOn session:</p>
          <ul className="checklist" style={{ marginTop: '12px' }}>
            <li>A real person who is fully present and undivided in their attention</li>
            <li>No advice unless you ask for it — just listening and presence</li>
            <li>Complete anonymity — no name, no location, no identifying information required</li>
            <li>Available now, 2am, Sunday morning, whenever loneliness hits</li>
            <li>No insurance, no waitlist, no prescription — just a human who listens</li>
            <li>First 5 minutes free — no commitment, no credit card required upfront</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>It&apos;s 2am in America and you can&apos;t sleep</h2>
          <p>
            You&apos;re awake and your mind won&apos;t stop. You don&apos;t want to call a friend at this
            hour. Therapy is weeks away. You&apos;ve already tried ChatGPT and it felt worse, not better.
          </p>
          <p>
            LeanOn has real human listeners available right now — at 2am, at 4am, on holidays. Because
            loneliness doesn&apos;t keep office hours. And neither do we.
          </p>
          <a href="/browse" className="cta-night">Find a listener right now →</a>
        </div>

        <div className="cta">
          <h2>Real humans. Real support. Right now.</h2>
          <p>Browse listeners available now. First 5 minutes free. $10 / $15 / $20 for 15, 30, 45 min.</p>
          <a href="/browse" className="btn-white">Browse real listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can I talk to a real person about loneliness in the US?</h3>
            <p>LeanOn connects Americans with real peer listeners — humans with lived experience, not AI
              chatbots. Available 24/7 at $10 for 15 minutes, with the first 5 minutes completely free.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn a real person or AI?</h3>
            <p>Every listener on LeanOn is a real human being who has applied, been reviewed, and trained
              to listen without judgment. There is no AI involved — only genuine human connection.</p>
          </div>
          <div className="faq-item">
            <h3>What&apos;s a good alternative to therapy in the US for everyday emotional support?</h3>
            <p>LeanOn peer support is affordable (starting at $10), available 24/7, and doesn&apos;t require
              insurance or appointments. It&apos;s not therapy — it&apos;s a real human who listens, which
              is often exactly what you need.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to someone about loneliness in the US at night?</h3>
            <p>Yes. LeanOn listeners are available 24/7, including late at night and early morning when
              loneliness tends to peak. Start a free session any time.</p>
          </div>
          <div className="faq-item">
            <h3>How is LeanOn different from ChatGPT for emotional support?</h3>
            <p>LeanOn listeners are real humans who have lived through loss, loneliness, and life&apos;s
              hard moments. They bring genuine empathy — not predicted responses. When they say
              &quot;I understand&quot;, they mean it.</p>
          </div>
        </div>

        <div className="related">
          <a href="/talk-to-real-person-not-ai">Human vs AI support →</a>
          <a href="/usa-loneliness">Loneliness in America →</a>
          <a href="/usa-nri-support">NRI support in the US →</a>
          <a href="/vent-to-a-real-person-online">Vent to a real person →</a>
        </div>

        <div className="disclaimer">
          ⚠️ If you&apos;re in crisis or experiencing suicidal thoughts, please call or text{' '}
          <strong>988 (Suicide &amp; Crisis Lifeline)</strong>.<br />
          LeanOn is peer support — not a substitute for professional mental health care or emergency services.
        </div>
      </div>
    </>
  )
}
