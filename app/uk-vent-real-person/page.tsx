import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Vent to a Real Person Online in the UK — Safe, Anonymous, Human | LeanOn',
  description: 'LeanOn has real human listeners available 24/7 in the UK — anonymous, judgment-free, starting with 5 free minutes. No AI, no waiting list. £8 for 15 min.',
  keywords: [
    'vent to real person UK', 'someone to vent to online UK', 'anonymous venting UK',
    'talk to someone online UK', 'vent anonymously UK', 'real person to vent to UK',
    'emotional support UK online', 'peer support venting UK', 'human listener UK',
    'talk about problems UK',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-vent-real-person',
  },
  openGraph: {
    title: 'Vent to a Real Person Online in the UK — Safe, Anonymous, Human | LeanOn',
    description: 'Sometimes the very British thing to do is not to say anything. That is the problem. LeanOn — real humans, 24/7, anonymous, first 5 min free.',
    url: 'https://www.leanon.app/uk-vent-real-person',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn — Anonymous Venting with Real Humans in the UK',
  description: 'LeanOn lets people in the UK vent to real human peer listeners — anonymous, 24/7, no AI, no NHS waiting list. First 5 minutes free, starting at £8 for 15 minutes.',
  provider: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
  serviceType: 'Peer Emotional Support',
  areaServed: 'United Kingdom',
  audience: {
    '@type': 'Audience',
    audienceType: 'People in the UK who want to vent to a real human listener anonymously',
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
      name: 'Where can I vent to someone anonymously in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn has real human listeners available 24/7 in the UK — anonymous, judgment-free, and starting with 5 free minutes. No AI, just a real person ready to hear you out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First 5 minutes are free. After that, £8 for 15 minutes, £12 for 30 minutes, or £16 for 45 minutes. No subscription, no insurance, no waiting list.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to vent to a stranger online in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "LeanOn listeners are trained, vetted real humans. Sessions are fully anonymous. You don't need to share your name, location, or any personal details.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why talk to a real person instead of journalling or talking to AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Being heard by a real human is different — neurologically and emotionally. A LeanOn listener is actually present with you. AI generates responses; humans actually receive you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I vent about on LeanOn in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anything: work stress, relationship tension, family issues, loneliness, housing pressure, feeling stuck, grief, anxiety — all of it. You don\'t need a good reason. Feeling heavy is reason enough.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Vent to a Real Person — UK', item: 'https://www.leanon.app/uk-vent-real-person' },
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

export default function UKVentRealPersonPage() {
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
          <a href="/">Home</a><span>›</span>Vent to a Real Person — UK
        </div>

        <h1>Sometimes the Very British Thing to Do<br />Is Not to Say Anything.<br />That&apos;s the Problem.</h1>
        <p className="lead">
          LeanOn is a peer support platform where people in the UK can vent to a real human listener —
          anonymously, without judgment, any time of day or night. No AI. No waiting lists. No stiff
          upper lip required. Just a real person ready to hear you out.
        </p>

        <a href="/browse" className="cta-hero">Vent to a real person now — first 5 min free →</a>

        <div className="card">
          <h2>You&apos;ve been fine. You&apos;re always fine. That&apos;s the problem.</h2>
          <p>
            British culture is built around not making a fuss. You manage. You cope. You say
            &quot;I&apos;m fine&quot; when you&apos;re not. And slowly, all of that unspoken weight
            builds into something heavier than it had to be.
          </p>
          <p>
            You might have tried journalling. Or Googled and ended up in an 18-month NHS waiting
            list. Or talked to ChatGPT at midnight and felt somehow worse after. Because AI generates
            empathy-shaped words — but no one is home. Nothing you say actually reaches anyone.
          </p>
          <p>
            LeanOn gives you a real human to vent to — someone who has lived through hard things and
            is genuinely present with you. Not in months. Now.
          </p>
        </div>

        <div className="card">
          <h2>What people in the UK vent about on LeanOn</h2>
          <ul className="checklist" style={{ marginTop: '0' }}>
            <li>Work exhaustion — the quiet grind of a job that takes everything</li>
            <li>Relationship tension you haven&apos;t been able to name out loud yet</li>
            <li>City loneliness — surrounded by millions, known by none of them</li>
            <li>The weight of being a South Asian or Black British person managing two cultures</li>
            <li>Housing stress, financial pressure, the sense that the ground keeps shifting</li>
            <li>Family pressure — expectations, disappointments, things left unsaid for years</li>
            <li>Grief, loss, or that hollow feeling after something ends</li>
            <li>Anxiety that doesn&apos;t have a clear source — just always there</li>
          </ul>
        </div>

        <div className="compare-box">
          <h2>Journal / AI chatbot vs. LeanOn real human</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>📓 Journal</h3>
              <p>Words go into a page that cannot receive them. You&apos;re still alone with them after.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>A real person receives what you say and responds — you&apos;re actually heard.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Generates empathy-shaped text with no one behind it — the loneliness stays</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Actually present — can be moved by what you share, asks real questions</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Has never navigated British work culture, family pressure, or London rent</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Lived experience of the real pressures of life in the UK — gets it without explanation</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>No cost but no real help — hollow relief that fades within hours</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>First 5 min free, then £8 for 15 min — real connection that actually helps</p>
            </div>
          </div>
        </div>

        <div className="night-box">
          <h2>You don&apos;t have to keep it together tonight</h2>
          <p>
            It&apos;s late. The day was long. You&apos;ve been holding something for weeks and
            you&apos;re too tired to keep holding it. There&apos;s no one to call without making
            it a whole thing.
          </p>
          <p>
            LeanOn has real human listeners available right now. Late night, early morning, bank
            holidays. Because the weight doesn&apos;t wait for office hours — and neither do we.
          </p>
          <a href="/browse" className="cta-night">Find a listener right now →</a>
        </div>

        <div className="cta">
          <h2>Say it out loud to someone who&apos;ll actually hear you.</h2>
          <p>Anonymous. Human. 24/7. First 5 minutes free. £8 / £12 / £16 for 15, 30, 45 min.</p>
          <a href="/browse" className="btn-white">Browse real listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can I vent to someone anonymously in the UK?</h3>
            <p>LeanOn has real human listeners available 24/7 in the UK — anonymous, judgment-free,
              and starting with 5 free minutes. No AI, just a real person ready to hear you out.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost in the UK?</h3>
            <p>First 5 minutes are free. After that, £8 for 15 minutes, £12 for 30 minutes, or £16
              for 45 minutes. No subscription, no insurance, no waiting list.</p>
          </div>
          <div className="faq-item">
            <h3>Is it safe to vent to a stranger online in the UK?</h3>
            <p>LeanOn listeners are trained, vetted real humans. Sessions are fully anonymous. You
              don&apos;t need to share your name, location, or any personal details.</p>
          </div>
          <div className="faq-item">
            <h3>Why talk to a real person instead of journalling or talking to AI?</h3>
            <p>Being heard by a real human is different — neurologically and emotionally. A LeanOn
              listener is actually present with you. AI generates responses; humans actually receive you.</p>
          </div>
          <div className="faq-item">
            <h3>What can I vent about on LeanOn in the UK?</h3>
            <p>Anything: work stress, relationship tension, family issues, loneliness, housing pressure,
              feeling stuck, grief, anxiety — all of it. You don&apos;t need a good reason. Feeling
              heavy is reason enough.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-talk-to-real-person-support">Talk to a real person — UK →</a>
          <a href="/uk-loneliness">Loneliness in the UK →</a>
          <a href="/talk-to-real-person-not-ai">Human vs AI support →</a>
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
