import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lonely in UAE? You\'re Not Alone | LeanOn',
  description: 'Millions of Indians in the UAE feel isolated — far from family, friends, and the familiar. LeanOn connects you with an Indian peer listener who understands your world, in your language.',
  keywords: [
    'feeling lonely in UAE', 'lonely in UAE Indian', 'loneliness support UAE', 'NRI loneliness UAE',
    'Indian expat lonely UAE', 'isolation UAE Indian worker', 'missing home UAE', 'talk to someone UAE',
    'emotional support UAE Indians', 'Gulf loneliness Indian', 'desert loneliness expat',
    'no one to talk to UAE', 'Indian listener UAE', 'peer support UAE',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uae-loneliness',
    languages: { 'en-IN': 'https://www.leanon.app/uae-loneliness' },
  },
  openGraph: {
    title: 'Feeling Lonely in UAE? Talk to an Indian Listener — First 5 Min Free',
    description: 'Far from home, missing family, and carrying it all alone? LeanOn peer listeners understand the UAE expat experience. Talk now, in your language.',
    url: 'https://www.leanon.app/uae-loneliness',
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
      name: 'Why do so many Indians feel lonely in the UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UAE can feel isolating despite being full of people. Long working hours, living in labour camps or small shared apartments, limited social circles, the physical distance from family in India, and the constant financial pressure of sending remittances home — all of this creates a deep sense of loneliness that is rarely spoken about.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are LeanOn listeners — are they Indian?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are trained Indian peer supporters. They understand the NRI experience, speak Hindi, Tamil, Telugu, Malayalam, Kannada, and other Indian languages, and can relate to the pressures of living abroad as an Indian.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost for someone in the UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions start at AED 37 for 15 minutes, AED 55 for 30 minutes, and AED 74 for 45 minutes. The first 5 minutes of your very first session are completely free — no payment needed to start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn confidential? Can my employer or family find out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely confidential. LeanOn is anonymous — you do not need to use your real name. Sessions are private and your employer, visa sponsor, or family will never know. You can speak freely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a listener in the middle of the night from UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7. The UAE–India time difference (IST is 1.5 hours ahead of UAE time) means Indian listeners are awake and available even during UAE night hours. You are never left alone with your thoughts.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Loneliness Support UAE', item: 'https://www.leanon.app/uae-loneliness' },
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

export default function UAELonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Loneliness Support UAE
        </div>

        <h1>You Came to Build a Life Here.<br />But the Loneliness Wasn&apos;t Part of the Plan.</h1>
        <p className="lead">
          The UAE is home to over three million Indians — yet so many of them feel invisible and alone.
          Long shifts, small rooms, calls home that never feel like enough. LeanOn connects you with an
          Indian peer listener who actually gets it, in your own language.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>What loneliness really looks like for Indians in the UAE</h2>
          <p>It is not dramatic. It is quiet and constant. It looks like this:</p>
          <ul className="checklist">
            <li>Waking up in a shared flat, surrounded by five people, and feeling completely alone</li>
            <li>Sending money home every month and having nothing left — not even energy for yourself</li>
            <li>Video calls with family that end and leave a silence worse than before</li>
            <li>Weekends that stretch out with nothing to fill them</li>
            <li>Not being able to talk about how hard it really is — because you chose to come here</li>
            <li>The desert heat, the sameness of days, the feeling of being far from everything familiar</li>
          </ul>
          <p style={{ marginTop: '12px' }}>If any of this sounds familiar, you do not have to keep holding it alone.</p>
        </div>

        <div className="night-box">
          <h2>🌙 Alone at night in Dubai, Abu Dhabi, or Sharjah?</h2>
          <p>After the workday ends, the loneliness can hit hardest. No family nearby. No one to just sit
            with. LeanOn listeners are available 24/7 — including late UAE nights when India is still awake
            and our listeners are ready.</p>
          <p>Start talking right now. First 5 minutes are free, no questions asked.</p>
          <a href="/browse" className="cta-night">Find an Indian listener now →</a>
        </div>

        <div className="card">
          <h2>Talk to an Indian listener in your language</h2>
          <p>There is something irreplaceable about talking to someone who comes from the same place as you —
            who understands the pressure of izzat, the weight of family expectations, the specific kind of
            homesickness that comes with being an Indian abroad.</p>
          <p>LeanOn listeners speak Hindi, Malayalam, Tamil, Telugu, Kannada, Bengali, and more. You do not
            have to explain your culture. You just talk, and they understand.</p>
        </div>

        <div className="card">
          <h2>Session pricing in AED</h2>
          <p>Transparent, affordable, no subscription needed:</p>
          <ul className="checklist">
            <li>15-minute session — AED 37</li>
            <li>30-minute session — AED 55</li>
            <li>45-minute session — AED 74</li>
            <li>First 5 minutes — completely free on your first session</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Pay only for what you use. No hidden fees. Cancel anytime.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>Anonymous, affordable, available 24/7 — for Indians across the UAE.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why do so many Indians feel lonely in the UAE?</h3>
            <p>Long working hours, physical separation from family, limited social circles, and the constant
              financial pressure of remittances all create deep isolation — even in a country full of other Indians.</p>
          </div>
          <div className="faq-item">
            <h3>Who are LeanOn listeners — are they Indian?</h3>
            <p>Yes. LeanOn listeners are trained Indian peer supporters who speak your language and understand
              the NRI experience firsthand.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost for someone in the UAE?</h3>
            <p>Sessions start at AED 37 for 15 minutes, AED 55 for 30 minutes, and AED 74 for 45 minutes.
              Your first 5 minutes are completely free.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn confidential?</h3>
            <p>Completely. LeanOn is anonymous — you can use any name. Your employer, visa sponsor, and family
              will never know. You can speak freely without any fear.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to a listener at night from the UAE?</h3>
            <p>Yes — LeanOn listeners are available 24/7. Indian listeners are awake and available even during
              UAE night hours. You are never left alone with your thoughts.</p>
          </div>
        </div>

        <div className="related">
          <a href="/dubai-loneliness">Lonely in Dubai →</a>
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/uae-relationship-advice">Relationship support UAE →</a>
          <a href="/middle-east-loneliness">Middle East loneliness →</a>
          <a href="/middle-east-rant">Need to rant? →</a>
          <a href="/loneliness-support-india">Loneliness support India →</a>
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
