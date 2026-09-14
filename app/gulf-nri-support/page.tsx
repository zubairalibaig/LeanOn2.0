import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Gulf NRIs — Talk to Someone Indian | LeanOn',
  description: 'Gulf NRIs carry a unique emotional weight — far from family, building a future, often alone. LeanOn connects you with a trained Indian peer listener in your language, any time.',
  keywords: [
    'Gulf NRI emotional support', 'NRI support Gulf', 'Indian expat Gulf support',
    'talk to someone Indian Gulf', 'Gulf NRI mental health', 'NRI loneliness Gulf',
    'emotional support NRI Middle East', 'Indian listener Gulf', 'peer support Gulf NRI',
    'Gulf Indians support', 'NRI stress Middle East', 'Indian expat mental wellness Gulf',
    'Gulf NRI talk to someone', 'South Asian expat support Gulf',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/gulf-nri-support',
    languages: { 'en-IN': 'https://www.leanon.app/gulf-nri-support' },
  },
  openGraph: {
    title: 'Emotional Support for Gulf NRIs — Talk to Someone Indian, Any Time',
    description: 'Building a life in the Gulf while holding everything together back home. LeanOn peer listeners understand exactly what that feels like. First 5 minutes free.',
    url: 'https://www.leanon.app/gulf-nri-support',
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
      name: 'What kind of emotional challenges do Gulf NRIs commonly face?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gulf NRIs face a specific cluster of challenges: the loneliness of migration, the pressure of being the financial anchor for family back home, the strain of long-distance relationships and parenting, the anxiety around visa renewals and sponsorship changes, the invisibility of being a worker rather than a resident, and the grief of missing years of family life. Most of these go unspoken because there is no one around to receive them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn only for people in crisis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. LeanOn is for anyone who wants to talk — whether you are in a difficult moment or just feeling the weight of ordinary life. You do not need to be in crisis to deserve support. Most LeanOn users are people living full lives who simply need a real conversation with someone who listens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Indian listeners really understand the Gulf NRI experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners are Indians themselves who have personal experience with migration, family pressure, and the specific stresses of building a life far from home. Even those who have not lived abroad understand the cultural context deeply — the expectations, the sacrifices, and what it means to carry the family\'s hopes on your shoulders.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a session cost across Gulf countries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UAE: AED 37 / AED 55 / AED 74 for 15/30/45 min. Kuwait: KD 4 / KD 5 / KD 7. Oman: OMR 4 / OMR 6 / OMR 8. The first 5 minutes of your first session are always free.',
      },
    },
    {
      '@type': 'Question',
      name: 'I am in Saudi Arabia / Qatar / Bahrain — is LeanOn available there too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is available anywhere with internet access. Whether you are in Riyadh, Doha, Manama, or anywhere else in the Gulf, you can connect with an Indian listener any time.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Gulf NRI Emotional Support', item: 'https://www.leanon.app/gulf-nri-support' },
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

export default function GulfNriSupportPage() {
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
          <a href="/">Home</a><span>›</span>Gulf NRI Emotional Support
        </div>

        <h1>You Left India to Build Something.<br />You Did Not Sign Up to Carry It Alone.</h1>
        <p className="lead">
          More than eight million Indians live and work across the Gulf — in the UAE, Saudi Arabia,
          Kuwait, Qatar, Oman, and Bahrain. You send money home. You keep the family running.
          You stay strong. But who is there for you? LeanOn is.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>The NRI emotional burden nobody talks about</h2>
          <p>The NRI experience in the Gulf comes with a set of pressures that are hard to explain to
            people who have not lived it:</p>
          <ul className="checklist">
            <li>Being the financial anchor — everyone depends on you and no one asks how you are doing</li>
            <li>Long-distance parenting — watching your children grow up in photos and video calls</li>
            <li>Visa anxieties — your entire life here can change with one employer decision</li>
            <li>The loneliness of success — achieving what you came for and still feeling empty</li>
            <li>Missing the small things: weddings, Diwali, your mother&apos;s cooking, evening walks</li>
            <li>Not being able to come home when someone is sick — because the ticket costs too much</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 Across the Gulf — someone is always awake to listen</h2>
          <p>Whether you are in Dubai, Riyadh, Kuwait City, Muscat, Doha, or Manama — LeanOn
            listeners are available 24/7. No appointments. Talk in your language whenever you need.</p>
          <p>First 5 minutes are always free. Start right now.</p>
          <a href="/browse" className="cta-night">Find an Indian listener now →</a>
        </div>

        <div className="card">
          <h2>An Indian listener who understands without being told</h2>
          <p>You do not have to explain what it means to be the one who left. A LeanOn listener
            already understands the weight of immigration, the pressure of family expectations, and
            the specific mix of pride and loneliness that comes with NRI life.</p>
          <p>Talk in Hindi, Malayalam, Tamil, Telugu, Kannada, Gujarati, Bengali, or any Indian
            language. Your world will not need a translation.</p>
        </div>

        <div className="card">
          <h2>Session pricing across the Gulf</h2>
          <ul className="checklist">
            <li>UAE: AED 37 / AED 55 / AED 74 for 15/30/45 min</li>
            <li>Kuwait: KD 4 / KD 5 / KD 7 for 15/30/45 min</li>
            <li>Oman: OMR 4 / OMR 6 / OMR 8 for 15/30/45 min</li>
            <li>First 5 minutes always free on your first session</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Anonymous. No subscription. Available in Saudi Arabia, Qatar, and Bahrain too.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen — right now</h2>
          <p>For Indians across the entire Gulf region — in your language, 24/7, anonymously.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What emotional challenges do Gulf NRIs commonly face?</h3>
            <p>Loneliness of migration, financial anchor pressure, long-distance parenting, visa anxieties,
              missing family milestones — and rarely having anyone nearby to receive any of it.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn only for people in crisis?</h3>
            <p>Not at all. LeanOn is for anyone who wants a real conversation. You do not need to be in
              crisis to deserve support — most users are simply living full lives who need to be heard.</p>
          </div>
          <div className="faq-item">
            <h3>Can Indian listeners understand the Gulf NRI experience?</h3>
            <p>Yes. Many listeners have personal experience with migration and understand the cultural context
              deeply — the expectations, sacrifices, and what it means to be the one who went abroad.</p>
          </div>
          <div className="faq-item">
            <h3>What does a session cost across Gulf countries?</h3>
            <p>UAE: AED 37/55/74. Kuwait: KD 4/5/7. Oman: OMR 4/6/8 for 15/30/45 min. First 5 min free.</p>
          </div>
          <div className="faq-item">
            <h3>I am in Saudi Arabia or Qatar — is LeanOn available there?</h3>
            <p>Yes. LeanOn works anywhere with internet. Whether in Riyadh, Doha, Manama, or anywhere else
              in the Gulf, you can connect with an Indian listener any time.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uae-loneliness">UAE loneliness →</a>
          <a href="/dubai-loneliness">Dubai loneliness →</a>
          <a href="/kuwait-loneliness">Kuwait support →</a>
          <a href="/oman-loneliness">Oman support →</a>
          <a href="/gulf-relationship-support">Gulf relationship support →</a>
          <a href="/middle-east-loneliness">Middle East loneliness →</a>
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
