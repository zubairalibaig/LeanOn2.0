import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Issues for Indians in the Gulf | LeanOn',
  description: 'Marriage strain, long-distance pressure, family expectations, longing for home — Indian relationships in the Gulf carry unique weight. Talk to an Indian listener who truly understands.',
  keywords: [
    'relationship issues Gulf Indian', 'Gulf NRI marriage problems', 'long distance marriage Gulf',
    'Indian relationship support Gulf', 'marriage strain Gulf expat', 'family pressure Gulf Indian',
    'Gulf NRI relationship advice', 'Indian couple problems Gulf', 'longing for home Gulf Indian',
    'relationship help Gulf', 'Gulf Indian marriage counselling', 'expat relationship issues',
    'NRI relationship problems Gulf', 'Indian listener relationship Gulf',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/gulf-relationship-support',
    languages: { 'en-IN': 'https://www.leanon.app/gulf-relationship-support' },
  },
  openGraph: {
    title: 'Relationship Support for Indians in the Gulf — Talk to Someone Who Gets It',
    description: 'Distance, family pressure, longing for home — relationships for Gulf NRIs carry unique strain. LeanOn peer listeners understand the Indian relationship context deeply.',
    url: 'https://www.leanon.app/gulf-relationship-support',
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
      name: 'How does living in the Gulf affect Indian marriages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gulf migration puts enormous strain on Indian marriages. Partners separated by thousands of miles develop different lives and different rhythms. Communication becomes transactional — updates and logistics rather than real connection. Financial pressure creates constant low-level tension. And both partners often feel alone in their respective struggles, unable to truly share their experience with each other.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about family pressure around my marriage or relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are deeply familiar with the Indian family system — in-law pressure, extended family involvement in marital decisions, the expectations around when to have children, property, career choices. You can speak openly without judgment and without your conversation reaching anyone you know.',
      },
    },
    {
      '@type': 'Question',
      name: 'I feel like I am drifting apart from my spouse but cannot say it. What do I do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Starting by saying it to a LeanOn listener is a powerful first step. You do not need to know what to do next — just articulating what you are feeling, to someone who will truly listen, helps you understand it better and releases some of the pressure. Many people find clarity through conversation that they could not find through thinking alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost for Gulf NRIs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UAE: AED 37 / AED 55 / AED 74 for 15/30/45 minutes. Kuwait: KD 4 / KD 5 / KD 7. Oman: OMR 4 / OMR 6 / OMR 8. First 5 minutes of your first session are always free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this confidential — will my spouse or family find out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely confidential. LeanOn is anonymous — you can use any name. Your spouse, family, and anyone you know will never find out you used LeanOn. You can speak freely about anything.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Gulf Relationship Support', item: 'https://www.leanon.app/gulf-relationship-support' },
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

export default function GulfRelationshipSupportPage() {
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
          <a href="/">Home</a><span>›</span>Gulf Relationship Support
        </div>

        <h1>Your Relationship Is Surviving the Distance.<br />But Is It Living?</h1>
        <p className="lead">
          Indian relationships in the Gulf carry a weight that most people never fully put into words.
          The distance, the longing, the unspoken resentments, the family pressures from thousands of
          kilometres away. LeanOn gives you a private space to talk through all of it — with an Indian
          listener who truly understands.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>How Gulf migration changes relationships</h2>
          <p>When one partner leaves for the Gulf, the relationship does not stay still — it transforms.
            Sometimes it grows stronger. Often it grows apart, slowly, invisibly:</p>
          <ul className="checklist">
            <li>Conversations become updates — money, children, logistics — not real connection</li>
            <li>Both partners develop lives the other does not fully understand</li>
            <li>Financial pressure becomes the subtext of every argument</li>
            <li>Physical absence breeds insecurity that neither person names out loud</li>
            <li>One partner resents the sacrifices; the other resents not being appreciated for making them</li>
            <li>The reunion visits become short and loaded with expectation and disappointment</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💬 After a difficult call, who do you turn to?</h2>
          <p>The moments after a hard conversation with your partner or family are often the loneliest.
            The argument still unresolved. The flat too quiet. No one nearby who understands the full story.</p>
          <p>LeanOn listeners are available 24/7 — to hear you out, without taking sides, in your language.</p>
          <a href="/browse" className="cta-night">Find an Indian listener now →</a>
        </div>

        <div className="card">
          <h2>The family pressure layer</h2>
          <p>Indian relationships rarely happen between just two people. In-laws, parents, siblings, and
            extended family all have opinions — and from the Gulf, managing those opinions while building
            your own life feels impossible.</p>
          <p>LeanOn listeners understand the Indian family system deeply: the weight of arranged marriage
            expectations, the pressure around children and timelines, the guilt of not being physically
            present during family crises. You can speak openly about all of it.</p>
        </div>

        <div className="card">
          <h2>Session pricing across the Gulf</h2>
          <ul className="checklist">
            <li>UAE: AED 37 / AED 55 / AED 74 for 15/30/45 min</li>
            <li>Kuwait: KD 4 / KD 5 / KD 7 for 15/30/45 min</li>
            <li>Oman: OMR 4 / OMR 6 / OMR 8 for 15/30/45 min</li>
            <li>First 5 minutes free — once per listener</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Anonymous. No subscription. Available in Saudi Arabia, Qatar, and Bahrain too.</p>
        </div>

        <div className="cta">
          <h2>You deserve to be heard — all of it</h2>
          <p>Available 24/7 for Indians across the Gulf — anonymously, in your language.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>How does living in the Gulf affect Indian marriages?</h3>
            <p>Partners develop different lives and rhythms, communication becomes transactional, financial
              pressure creates constant tension, and both often feel alone in their respective struggles.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about family pressure around my marriage?</h3>
            <p>Yes. LeanOn listeners understand Indian family dynamics deeply — in-law pressure, extended family
              involvement, and cultural expectations around marriage. Speak openly without judgment.</p>
          </div>
          <div className="faq-item">
            <h3>I feel like I am drifting apart from my spouse but cannot say it. What do I do?</h3>
            <p>Saying it to a LeanOn listener is a powerful first step. You do not need to know what to do
              next — just articulating what you feel releases pressure and often brings clarity.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost for Gulf NRIs?</h3>
            <p>UAE: AED 37/55/74. Kuwait: KD 4/5/7. Oman: OMR 4/6/8 for 15/30/45 min. First 5 min free.</p>
          </div>
          <div className="faq-item">
            <h3>Will my spouse or family find out I talked to a listener?</h3>
            <p>No. LeanOn is completely anonymous. Your spouse, family, and anyone you know will never know
              you used LeanOn. You can speak freely about anything.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uae-relationship-advice">UAE relationship support →</a>
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/middle-east-loneliness">Middle East loneliness →</a>
          <a href="/middle-east-rant">Need to rant? →</a>
          <a href="/uae-loneliness">UAE loneliness →</a>
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
