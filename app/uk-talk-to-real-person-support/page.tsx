import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Real Person About Your Problems — Not an AI | LeanOn UK',
  description: 'LeanOn connects people in the UK with real peer listeners — humans with lived experience, not AI chatbots. Available 24/7, first 5 minutes free. From £8 for 15 min.',
  keywords: [
    'talk to real person UK', 'human support not AI UK', 'someone to talk to in the UK',
    'real person emotional support UK', 'alternative to therapy UK', 'peer support UK',
    'talk about loneliness UK', 'human listener UK', 'not AI support UK',
    'emotional support without NHS waiting list',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-talk-to-real-person-support',
  },
  openGraph: {
    title: 'Talk to a Real Person About Your Problems — Not an AI | LeanOn UK',
    description: "You don't need another app. You need a real human who listens. LeanOn — vetted human peer listeners, available 24/7, first 5 min free.",
    url: 'https://www.leanon.app/uk-talk-to-real-person-support',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn — Real Human Peer Support for the United Kingdom',
  description: 'LeanOn connects people in the United Kingdom feeling lonely, overwhelmed, or emotionally stuck with real human peer listeners — not AI chatbots. Available 24/7, first 5 minutes free, no NHS waiting list.',
  provider: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
  serviceType: 'Peer Emotional Support',
  areaServed: 'United Kingdom',
  audience: {
    '@type': 'Audience',
    audienceType: 'People in the UK experiencing loneliness, relationship stress, or emotional overwhelm',
  },
  offers: {
    '@type': 'Offer',
    description: 'First 5 minutes free. £8 for 15 minutes, £12 for 30 minutes, £16 for 45 minutes.',
    priceCurrency: 'GBP',
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
      name: 'Where can I find a real person to talk to about loneliness in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects people in the UK with real peer listeners — humans with lived experience, not AI chatbots. Available 24/7, first 5 minutes free, starting at £8 for 15 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an affordable alternative to therapy in the UK for emotional support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "LeanOn peer support starts at £8 for 15 minutes with the first 5 minutes free. It's not therapy — it's a real human listener who is fully present, available any time, with no NHS waiting list.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn an AI or a real person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every LeanOn listener is a real human — applied, reviewed, and trained to listen without judgment. There is no AI in the conversations. Just one real person talking to another.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to someone about loneliness in the UK late at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. LeanOn listeners are available 24/7. Late nights and early mornings when loneliness is hardest — that's exactly when LeanOn is there.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn different from AI chatbots for people in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "LeanOn listeners are real humans who have lived through the same kinds of loneliness, loss, and uncertainty you're feeling. They bring genuine human empathy — not algorithmic responses.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to a Real Person — UK', item: 'https://www.leanon.app/uk-talk-to-real-person-support' },
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

export default function UKTalkToRealPersonPage() {
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
          <a href="/">Home</a><span>›</span>Talk to a Real Person — UK
        </div>

        <h1>You Don&apos;t Need Another App.<br />You Need a Real Human Who Listens.</h1>
        <p className="lead">
          LeanOn is a peer support platform that connects people in the UK with real human listeners —
          people with lived experience, not AI chatbots. No NHS waiting list. No referral. No appointment.
          A real person, available now, for as little as £8.
        </p>

        <a href="/browse" className="cta-hero">Talk to a real person now — first 5 min free →</a>

        <div className="card">
          <h2>Britain has a loneliness problem — and an NHS waiting list problem</h2>
          <p>
            The UK has a Minister for Loneliness. NHS mental health waiting times regularly exceed
            18 months for talking therapy. Private therapy starts at £60 a session. And in the
            meantime, people are quietly managing more than they should have to manage alone.
          </p>
          <p>
            The British tendency — keep it together, don&apos;t make a fuss, sort it out yourself —
            doesn&apos;t help. Nor does talking to an AI that sounds empathetic but is not actually
            receiving you. What helps is a real human who listens without judgment.
          </p>
          <p>
            LeanOn gives you exactly that. A real peer listener, trained and reviewed, available any
            time of day or night, for £8 — less than a pint of lager in London.
          </p>
        </div>

        <div className="compare-box">
          <h2>AI chatbot vs. LeanOn real human listener</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot (ChatGPT, Gemini)</h3>
              <p>Generates statistically likely responses — no one is actually reading what you write</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>A real person in the UK who has felt what you feel and genuinely understands</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>NHS-level wait with none of the clinical benefit — hollow, hollow, hollow</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Available now. No referral, no waiting list, no gatekeeping.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Has never been lonely in London, uncertain about the future, or overwhelmed by life</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Lived experience of the same hard things — when they say &quot;I understand&quot;, they do</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Free at point of use — but the loneliness stays because no one was actually there</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>First 5 min free, then £8 for 15 min — real connection that actually helps</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>What LeanOn is — in plain English</h2>
          <p>
            LeanOn is a peer support platform. Every listener is a real human being who has applied,
            been reviewed, and trained to listen without judgment. They are not therapists or counsellors.
            They are not AI. They are real people — with lives, with their own experience of the hard
            things — who choose to be present for others.
          </p>
          <p>What you can expect from a LeanOn session:</p>
          <ul className="checklist" style={{ marginTop: '12px' }}>
            <li>A real person — fully present, undivided attention, no scripts</li>
            <li>No advice unless you want it — just listening and space to be heard</li>
            <li>Complete anonymity — no name, no location, no identifying details required</li>
            <li>Available now, at midnight, on Sunday, whenever you need it most</li>
            <li>No NHS referral, no GP appointment, no insurance — just a human who listens</li>
            <li>First 5 minutes free — no credit card, no commitment required</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>It&apos;s late and you&apos;re in your head again</h2>
          <p>
            The flat is quiet. You&apos;ve been fine all day — or fine enough. But now it&apos;s late
            and something is sitting heavily on you and there&apos;s no one to call at this hour who
            won&apos;t worry.
          </p>
          <p>
            LeanOn listeners are available right now. At midnight. On bank holidays. When the NHS
            waiting list stretches to next year. A real person. Tonight.
          </p>
          <a href="/browse" className="cta-night">Find a listener right now →</a>
        </div>

        <div className="cta">
          <h2>Real humans. Real support. Right now.</h2>
          <p>Browse listeners available now. First 5 minutes free. £8 / £12 / £16 for 15, 30, 45 min.</p>
          <a href="/browse" className="btn-white">Browse real listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can I find a real person to talk to about loneliness in the UK?</h3>
            <p>LeanOn connects people in the UK with real peer listeners — humans with lived experience,
              not AI chatbots. Available 24/7, first 5 minutes free, starting at £8 for 15 minutes.</p>
          </div>
          <div className="faq-item">
            <h3>Is there an affordable alternative to therapy in the UK for emotional support?</h3>
            <p>LeanOn peer support starts at £8 for 15 minutes with the first 5 minutes free. It&apos;s
              not therapy — it&apos;s a real human listener who is fully present, available any time,
              with no NHS waiting list.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn an AI or a real person?</h3>
            <p>Every LeanOn listener is a real human — applied, reviewed, and trained to listen without
              judgment. There is no AI in the conversations. Just one real person talking to another.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to someone about loneliness in the UK late at night?</h3>
            <p>Yes. LeanOn listeners are available 24/7. Late nights and early mornings when loneliness
              is hardest — that&apos;s exactly when LeanOn is there.</p>
          </div>
          <div className="faq-item">
            <h3>How is LeanOn different from AI chatbots for people in the UK?</h3>
            <p>LeanOn listeners are real humans who have lived through the same kinds of loneliness,
              loss, and uncertainty you&apos;re feeling. They bring genuine human empathy — not
              algorithmic responses.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-loneliness">Loneliness in the UK →</a>
          <a href="/uk-nri-support">NRI support in the UK →</a>
          <a href="/talk-to-human-instead-of-chatgpt">Human vs AI support →</a>
          <a href="/vent-to-a-real-person-online">Vent to a real person →</a>
        </div>

        <div className="disclaimer">
          ⚠️ If you&apos;re in crisis or thinking about self-harm, please call{' '}
          <strong>Samaritans: 116 123</strong> (free, 24/7).<br />
          LeanOn is peer support — not a substitute for professional mental health care or emergency services.
        </div>
      </div>
    </>
  )
}
