import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Loneliness Support for Indians in Malaysia | LeanOn',
  description: 'Feeling lonely as an Indian in Malaysia — missing home, navigating a new culture, no one who truly gets it. LeanOn connects you with real Indian listeners who understand your world.',
  keywords: [
    'loneliness support malaysia indian', 'feeling lonely malaysia', 'indian expat lonely malaysia',
    'missing home malaysia', 'nri lonely malaysia', 'isolation malaysia indian',
    'homesick malaysia indian', 'talk to someone malaysia', 'emotional support malaysia indian',
    'south asian loneliness malaysia', 'tamil lonely malaysia', 'no friends malaysia expat',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/malaysia-loneliness',
    languages: { 'en-MY': 'https://www.leanon.app/malaysia-loneliness' },
  },
  openGraph: {
    title: 'Loneliness Support for Indians in Malaysia — LeanOn',
    description: 'Navigating life in Malaysia as an Indian expat can be isolating. LeanOn connects you with real Indian peer listeners 24/7 — in your language, with your context understood.',
    url: 'https://www.leanon.app/malaysia-loneliness',
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
      name: 'Is it normal to feel lonely as an Indian in Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very normal, and often surprising to people who expected Malaysia\'s significant Indian community to make them feel at home. But community does not automatically equal connection — and if you moved from India recently, the specific texture of Indian expat loneliness in Malaysia is real. The familiar faces, food, and language exist but the deep bonds take years to build.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with feeling homesick in Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Talking about it helps. LeanOn connects you with Indian peer listeners who understand the homesickness that comes with being far from your people. A 15 or 30-minute conversation in Hindi, Tamil, or Telugu can ease the weight of missing home considerably.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to someone in Tamil from Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has Tamil-speaking listeners available 24/7. You can also find listeners who speak Hindi, Telugu, Malayalam, Kannada, Bengali, and English. Sessions start from RM 45 for 15 minutes, with the first 5 minutes free.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I feel lonely even in a place with many Indians like Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the most common forms of expat loneliness. Proximity to your community does not guarantee feeling understood. Surface-level familiarity without real intimacy can actually make the loneliness feel sharper. LeanOn gives you space for honest, deep conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn confidential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sessions are anonymous by default. Your listener does not know your real name or location unless you choose to share. Everything stays private between you and your listener.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Loneliness Support Malaysia', item: 'https://www.leanon.app/malaysia-loneliness' },
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

export default function MalaysiaLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Loneliness Support Malaysia
        </div>

        <h1>Malaysia Has Indians Everywhere.<br />Yet You Feel Alone.</h1>
        <p className="lead">
          Malaysia&apos;s Indian community is large and visible — but community is not the same as
          connection. If you came here from India recently, or if you have been here for years but
          still feel like something is missing, you are not alone in that feeling. LeanOn connects
          you with real Indian listeners who understand this specific kind of loneliness.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>What loneliness looks like for Indians in Malaysia</h2>
          <p>It is rarely dramatic. It is the quiet kind that sneaks up on you:</p>
          <ul className="checklist">
            <li>You are surrounded by familiar faces but still do not feel truly known.</li>
            <li>The Malaysian Indian community has its own established social structures you have not broken into yet.</li>
            <li>You came for work and the only conversations you have are professional ones.</li>
            <li>You call home and say everything is fine because explaining it all feels impossible.</li>
            <li>Weekends feel long and you are not sure how to fill them meaningfully.</li>
            <li>You miss the casual warmth of Indian friendships — the chai, the gossip, the sitting-around-doing-nothing-together.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of this is real. All of this matters.</p>
        </div>

        <div className="night-box">
          <h2>🌙 The quiet hours hit differently here</h2>
          <p>Late night in Kuala Lumpur. The office is long over. WhatsApp is quiet. Everyone back home
            is in their own routines. The flat is silent and you are not quite sure what to do with
            the emptiness.</p>
          <p>LeanOn listeners are online right now — Indian, warm, non-judgmental. You can start talking
            any time you need to.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Talk in Tamil, Hindi, or any Indian language</h2>
          <p>Many Indians in Malaysia are Tamil-speaking — and LeanOn has Tamil listeners available
            round the clock. You can also talk in Hindi, Telugu, Malayalam, Kannada, Bengali, or English.</p>
          <p>Being heard in your mother tongue does something that a translated conversation cannot.
            LeanOn listeners get that.</p>
        </div>

        <div className="card">
          <h2>Session pricing for Malaysia</h2>
          <p>Pay in Malaysian ringgit. The first 5-minute session free.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="dur">15 min</div>
              <div className="amt">RM 45</div>
            </div>
            <div className="price-card">
              <div className="dur">30 min</div>
              <div className="amt">RM 67</div>
            </div>
            <div className="price-card">
              <div className="dur">45 min</div>
              <div className="amt">RM 89</div>
            </div>
          </div>
          <p>No subscription. No commitment. Talk when you need to.</p>
        </div>

        <div className="cta">
          <h2>Someone who gets it is online right now</h2>
          <p>Real Indian listeners. Tamil, Hindi, and more. Available 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is it normal to feel lonely as an Indian in Malaysia?</h3>
            <p>Very normal. Malaysia has a large Indian community, but community does not automatically
              equal connection. The specific loneliness of being a recent expat — without the deep bonds
              that take years to build — is real and valid.</p>
          </div>
          <div className="faq-item">
            <h3>How do I deal with feeling homesick in Malaysia?</h3>
            <p>Talking about it helps. LeanOn connects you with Indian peer listeners who understand
              the homesickness that comes with being far from your people. A 15 or 30-minute conversation
              in your language can ease the weight considerably.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to someone in Tamil from Malaysia?</h3>
            <p>Yes. LeanOn has Tamil-speaking listeners available 24/7. Sessions start from RM 45 for
              15 minutes, with the first 5 minutes free.</p>
          </div>
          <div className="faq-item">
            <h3>What if I feel lonely even in a place with many Indians?</h3>
            <p>Proximity to community does not guarantee feeling understood. Surface-level familiarity
              without real intimacy can make the loneliness feel sharper. LeanOn gives you space for
              honest, deep conversation.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn confidential?</h3>
            <p>Yes. Sessions are anonymous by default. Your listener does not know your real name or
              location unless you choose to share. Everything stays private.</p>
          </div>
        </div>

        <div className="related">
          <a href="/malaysia-talk-to-someone">Talk to someone Malaysia →</a>
          <a href="/malaysia-empathy-listener">Empathy listener Malaysia →</a>
          <a href="/malaysia-rant">Need to rant Malaysia →</a>
          <a href="/malaysia-relationship-advice">Relationship support Malaysia →</a>
          <a href="/singapore-loneliness">Loneliness support Singapore →</a>
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
