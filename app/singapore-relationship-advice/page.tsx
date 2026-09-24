import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Struggles for Indians in Singapore | LeanOn',
  description: 'Long-distance strain, cultural clashes, partner conflicts abroad — relationship problems feel heavier as an Indian expat in Singapore. Talk to an Indian listener who understands your situation.',
  keywords: [
    'relationship advice singapore indian', 'indian expat relationship problems singapore',
    'long distance relationship singapore', 'cultural differences relationship singapore',
    'partner conflict singapore nri', 'relationship support singapore',
    'talk about relationship problems singapore', 'indian couple problems singapore',
    'marriage struggles singapore expat', 'south asian relationship advice singapore',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/singapore-relationship-advice',
    languages: { 'en-SG': 'https://www.leanon.app/singapore-relationship-advice' },
  },
  openGraph: {
    title: 'Relationship Struggles for Indians in Singapore — Talk It Out | LeanOn',
    description: 'Long-distance pain, cultural gaps, and partner conflicts feel lonelier when you are far from home. LeanOn connects Indian expats in Singapore with peer listeners who understand.',
    url: 'https://www.leanon.app/singapore-relationship-advice',
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
      name: 'How do I cope with a long-distance relationship while living in Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Long-distance from Singapore to India is especially hard because of the time difference and the feeling of being worlds apart culturally. Having someone to talk to — who understands both sides — can help you process the strain. LeanOn peer listeners are Indian themselves, so they understand the context without you having to explain from scratch.',
      },
    },
    {
      '@type': 'Question',
      name: 'My partner and I are fighting more since we moved to Singapore. Is this common?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very common. Relocation stress amplifies existing tensions and creates new ones — different adaptation speeds, financial pressure, social isolation, and disagreements about lifestyle. Talking to a neutral listener (not a mutual friend) can give you clarity before deciding your next step.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get relationship support in Hindi or Tamil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has listeners who speak Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and English. Some relationship problems are just easier to talk about in your mother tongue — you can choose a listener accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is talking to a LeanOn listener the same as therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn listeners are trained peer supporters, not therapists. They listen without judgment, ask thoughtful questions, and help you feel heard. They do not diagnose, prescribe, or give clinical advice. For serious mental health concerns, please also consult a licensed professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a session cost from Singapore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are priced in Singapore dollars: S$14 for 15 minutes, S$20 for 30 minutes, and S$27 for 45 minutes. Your first session starts with 5 free minutes so you can get comfortable before committing.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Advice Singapore', item: 'https://www.leanon.app/singapore-relationship-advice' },
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
  .pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0;}
  .price-card{background:var(--light);border:1.5px solid var(--border);border-radius:14px;padding:14px 12px;text-align:center;}
  .price-card .dur{font-size:13px;font-weight:700;color:var(--gray);margin-bottom:4px;}
  .price-card .amt{font-size:20px;font-weight:900;color:var(--teal);}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.pricing-grid{grid-template-columns:1fr;}}
`

export default function SingaporeRelationshipAdvicePage() {
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
          <a href="/">Home</a><span>›</span>Relationship Advice Singapore
        </div>

        <h1>Relationship Pain Is Lonelier<br />When You&apos;re Far from Home.</h1>
        <p className="lead">
          Navigating a relationship as an Indian expat in Singapore means carrying two worlds at once —
          the expectations from back home, the pressures of life abroad, and a partner who may be adapting
          differently than you are. LeanOn is here to help you talk it through.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>Relationship struggles that are common for Indians in Singapore</h2>
          <ul className="checklist">
            <li>Long-distance strain — one of you is in India, the other in Singapore, and the gap is growing.</li>
            <li>You moved together but you are adapting at different speeds and it is causing friction.</li>
            <li>Family back home has opinions about your relationship that you cannot ignore.</li>
            <li>Cultural expectations about gender roles, money, or priorities are creating tension.</li>
            <li>You are not sure if what you are feeling is just &ldquo;adjustment stress&rdquo; or something deeper.</li>
            <li>You want to talk to someone but you do not want it to get back to anyone in your circle.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💬 You do not need to figure it out alone</h2>
          <p>Relationship pain is hard to sit with in silence. But talking to friends carries risk — they
            know both of you, and everything you say shapes how they see your relationship.</p>
          <p>A LeanOn listener is a safe, neutral space. They hear your side fully, without judgment,
            without telling anyone, and without picking a side.</p>
          <a href="/browse" className="cta-night">Talk it through now →</a>
        </div>

        <div className="card">
          <h2>What talking to a peer listener looks like</h2>
          <p>You do not have to prepare anything. You can start wherever it feels right — the argument from
            last night, the thing you have been holding in for weeks, the question you keep going back to.</p>
          <p>A LeanOn listener asks questions that help you think clearly. They do not tell you what to do.
            They help you hear yourself — sometimes that is exactly what you need to figure out your next step.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Singapore</h2>
          <p>Pay in Singapore dollars. Your first 5-minute session free.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="dur">15 min</div>
              <div className="amt">S$14</div>
            </div>
            <div className="price-card">
              <div className="dur">30 min</div>
              <div className="amt">S$20</div>
            </div>
            <div className="price-card">
              <div className="dur">45 min</div>
              <div className="amt">S$27</div>
            </div>
          </div>
          <p>No subscription. Pay only when you need to talk.</p>
        </div>

        <div className="cta">
          <h2>Talk it out — in your language</h2>
          <p>Real Indian listeners. Hindi, Tamil, Telugu, and more. Available 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>How do I cope with a long-distance relationship while living in Singapore?</h3>
            <p>Long-distance from Singapore to India is especially hard because of time differences and the
              feeling of being worlds apart. Having someone to talk to who understands both sides can help you
              process the strain. LeanOn listeners are Indian themselves — no need to explain the context.</p>
          </div>
          <div className="faq-item">
            <h3>My partner and I are fighting more since we moved to Singapore. Is this common?</h3>
            <p>Very common. Relocation stress amplifies existing tensions — different adaptation speeds,
              financial pressure, social isolation, and disagreements about lifestyle. Talking to a neutral
              listener can give you clarity before deciding your next step.</p>
          </div>
          <div className="faq-item">
            <h3>Can I get relationship support in Hindi or Tamil?</h3>
            <p>Yes. LeanOn has listeners who speak Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and
              English. Some relationship problems are easier to talk about in your mother tongue.</p>
          </div>
          <div className="faq-item">
            <h3>Is talking to a LeanOn listener the same as therapy?</h3>
            <p>No. LeanOn listeners are trained peer supporters, not therapists. They listen without judgment
              and help you feel heard. For serious mental health concerns, also consult a licensed professional.</p>
          </div>
          <div className="faq-item">
            <h3>What does a session cost from Singapore?</h3>
            <p>Sessions are S$14 for 15 minutes, S$20 for 30 minutes, and S$27 for 45 minutes. Your first
              session starts with 5 free minutes so you can get comfortable before committing.</p>
          </div>
        </div>

        <div className="related">
          <a href="/singapore-loneliness">Loneliness support Singapore →</a>
          <a href="/singapore-talk-to-someone">Talk to someone Singapore →</a>
          <a href="/singapore-empathy-listener">Empathy listener Singapore →</a>
          <a href="/malaysia-relationship-advice">Relationship support Malaysia →</a>
          <a href="/relationship-advice-online-india">Relationship support India →</a>
          <a href="/singapore-rant">Need to rant in Singapore →</a>
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
