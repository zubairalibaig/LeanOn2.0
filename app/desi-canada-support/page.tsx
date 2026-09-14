import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Support for the Desi Community in Canada — When No One Understands You | LeanOn',
  description: 'Being desi in Canada means navigating two worlds at once — and sometimes feeling fully at home in neither. LeanOn is peer support built with the South Asian experience in mind.',
  keywords: [
    'desi support canada', 'south asian support canada', 'desi community canada mental health',
    'indian community canada loneliness', 'desi mental health canada', 'south asian isolation canada',
    'desi canada emotional support', 'brown community canada support', 'desi loneliness canada',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/desi-canada-support',
    languages: { 'en-CA': 'https://www.leanon.app/desi-canada-support' },
  },
  openGraph: {
    title: 'Support for the Desi Community in Canada | LeanOn',
    description: 'Being desi in Canada is a particular kind of in-between. LeanOn peer listeners understand both worlds — and will not ask you to explain your culture before being heard.',
    url: 'https://www.leanon.app/desi-canada-support',
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
      name: 'Why do desi people in Canada often struggle to find emotional support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'South Asian culture often discourages openly discussing mental health or emotional struggles. Add to this the isolation of immigration and the cultural gap between Indian values and Canadian individualism, and many desi people find themselves carrying heavy emotional weight with nowhere to put it down.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn built for South Asians specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is for anyone who needs to be heard — but it was built in India and has a deep understanding of the South Asian emotional experience. Many listeners are themselves Indian or South Asian, and understand the specific pressures of desi life in a Western country without needing them explained.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean to feel like you belong in neither world?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many desi Canadians describe feeling too Western for India and too Indian for Canada. This in-between is a real and painful form of cultural isolation — you cannot fully be yourself in either context. LeanOn is a space where you do not have to choose.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk in Hindi or other Indian languages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners speak Hindi, Punjabi, Tamil, Telugu, Kannada, Malayalam, Bengali, and other languages. Check a listener\'s profile for their languages — you can filter when browsing.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Desi Community Support Canada', item: 'https://www.leanon.app/desi-canada-support' },
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

export default function DesiCanadaSupportPage() {
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
          <a href="/">Home</a><span>›</span>Desi Community Support Canada
        </div>

        <h1>Too Indian for Canada.<br />Too Canadian for India.<br />Just Right for LeanOn.</h1>
        <p className="lead">
          Being desi in Canada is a particular kind of in-between. You belong to two worlds and
          sometimes feel at home in neither. The pressure, the expectations, the cultural tightrope —
          and nobody around you who fully understands all of it. LeanOn listeners get it.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>The desi experience in Canada that nobody talks about</h2>
          <ul className="checklist">
            <li>Working below your level because Canadian employers don&apos;t recognise your Indian credentials</li>
            <li>Feeling pressure from family in India who don&apos;t understand why you are still struggling</li>
            <li>Being surrounded by other desis in Brampton or Surrey but still feeling deeply alone</li>
            <li>The guilt of not being the success story everyone back home expected</li>
            <li>The loneliness of navigating Canadian work culture as a brown person</li>
            <li>Missing home in a way that goes beyond food — the warmth, the familiarity, being known</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🫂 You should not have to explain your culture to be heard</h2>
          <p>The hardest part of opening up in a new country is sometimes having to translate your
            entire cultural context before you can even get to the actual thing you wanted to say.
            LeanOn listeners — many of whom are South Asian themselves — already understand that context.</p>
          <p>You can just talk. About the real thing. Without the preamble.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Talking about emotions is not un-desi</h2>
          <p>Many South Asians were raised in cultures where talking about your feelings openly was
            either discouraged or simply not done. &quot;Log kya kahenge&quot; — what will people say — shapes
            how much we share even with the people closest to us.</p>
          <p>LeanOn gives you a space completely outside that web of expectations. Anonymous, private,
            and entirely yours. You can say the thing you would never say to your family, your friends,
            or your colleagues back home.</p>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Many listeners speak Hindi, Punjabi, Tamil, Telugu, and other Indian languages</li>
            <li>Anonymous — your community will never know</li>
            <li>Available any time — no appointment needed</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone who gets it is ready to listen</h2>
          <p>The desi community in Canada deserves support that actually understands them.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why do desi people in Canada often struggle to find emotional support?</h3>
            <p>South Asian culture often discourages openly discussing emotional struggles. Add the
              isolation of immigration and the cultural gap between Indian values and Canadian
              individualism, and many desi people carry heavy weight with nowhere to put it down.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn built for South Asians specifically?</h3>
            <p>LeanOn is for anyone who needs to be heard, but it was built in India and has deep
              understanding of the South Asian emotional experience. Many listeners are Indian or South
              Asian and understand desi life in a Western country without needing it explained.</p>
          </div>
          <div className="faq-item">
            <h3>What does it mean to feel like you belong in neither world?</h3>
            <p>Many desi Canadians describe feeling too Western for India and too Indian for Canada. This
              in-between is a real and painful form of cultural isolation. LeanOn is a space where you
              do not have to choose.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes free. Then CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk in Hindi or other Indian languages?</h3>
            <p>Yes. Many LeanOn listeners speak Hindi, Punjabi, Tamil, Telugu, Kannada, Malayalam,
              Bengali, and other languages. Check a listener&apos;s profile for their languages.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/canada-empathy-listener">Empathy listener →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
          <a href="/toronto-loneliness">Lonely in Toronto →</a>
          <a href="/canada-rant-to-someone">Need to rant? →</a>
          <a href="/canada-talk-to-someone">Someone to talk to →</a>
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
