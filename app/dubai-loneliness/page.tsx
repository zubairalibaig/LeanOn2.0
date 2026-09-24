import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Lonely in Dubai? Talk to Someone Who Gets It | LeanOn',
  description: 'Dubai shines on the outside but many Indian expats feel profoundly alone in it. LeanOn connects you with an Indian peer listener who understands expat life — in your language, any time.',
  keywords: [
    'lonely in Dubai', 'loneliness Dubai Indian', 'Indian expat Dubai lonely', 'talk to someone Dubai',
    'Dubai expat blues', 'feeling isolated Dubai', 'emotional support Dubai', 'Dubai NRI loneliness',
    'no one to talk to Dubai', 'Indian listener Dubai', 'expat loneliness Dubai',
    'Dubai life lonely', 'peer support Dubai', 'Indian expat mental health Dubai',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/dubai-loneliness',
    languages: { 'en-IN': 'https://www.leanon.app/dubai-loneliness' },
  },
  openGraph: {
    title: 'Lonely in Dubai? Talk to an Indian Listener — First 5 Min Free',
    description: 'Dubai is glamorous on Instagram but lonely in reality for many Indian expats. LeanOn peer listeners understand the expat experience. Talk now, in your language.',
    url: 'https://www.leanon.app/dubai-loneliness',
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
      name: 'Why is Dubai so lonely for Indian expats despite so many people being there?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dubai is a city built for productivity and ambition, not deep connection. Expats come from everywhere, form transient friend groups, and often leave. Indians in Dubai frequently describe feeling like they are running a race with no one beside them — professional success on the outside, emptiness on the inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'I have friends in Dubai but I still feel lonely. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Social loneliness (not having people around) is different from emotional loneliness (not feeling deeply understood). You can have a full social calendar in Dubai and still feel that no one truly knows you. This gap is what LeanOn listeners help bridge.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost from Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions cost AED 37 for 15 minutes, AED 55 for 30 minutes, and AED 74 for 45 minutes. Your first session begins with a completely free 5-minute trial — no payment required to start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a listener in Hindi or my regional language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners include speakers of Hindi, Gujarati, Malayalam, Tamil, Telugu, Kannada, Bengali, and other Indian languages. You can check a listener\'s languages on their profile before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I just want to talk — no specific problem, just feeling low?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is exactly what LeanOn is for. You do not need a crisis or a defined problem. Feeling low, empty, or disconnected is a perfectly valid reason to reach out. LeanOn listeners are trained to sit with you in those moments without judgment.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Lonely in Dubai', item: 'https://www.leanon.app/dubai-loneliness' },
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

export default function DubaiLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Lonely in Dubai
        </div>

        <h1>Dubai Is Everything You Dreamed Of.<br />So Why Does It Feel So Lonely?</h1>
        <p className="lead">
          From the outside, life in Dubai looks incredible — the skyline, the salary, the freedom.
          But behind the Instagram posts, many Indian expats describe a quiet ache: no one who really
          knows them, no roots, no softness. LeanOn is a place to say that out loud.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>The Dubai expat paradox — glamorous and hollow at once</h2>
          <p>Dubai attracts driven people who work hard and perform happiness. There is no room in that
            culture to say &quot;I am not okay.&quot; So most people do not say it — they push through,
            scroll through reels, and wonder why they feel so empty despite having so much.</p>
          <ul className="checklist">
            <li>A career everyone is proud of, but you feel like a cog in a machine</li>
            <li>Friends who are more acquaintances — everyone is temporary here</li>
            <li>Homesickness you have learned to suppress but never resolved</li>
            <li>The quiet after work in a flat that does not feel like home</li>
            <li>Missing festivals, weddings, and ordinary family evenings back in India</li>
            <li>Zoom calls that remind you of everything you are missing</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌙 Dubai nights can be the hardest</h2>
          <p>After the meetings, the gyms, the malls — when it all goes quiet — that is when the
            loneliness hits. Many Indians in Dubai describe the evenings as the hardest part of the day.</p>
          <p>LeanOn listeners are there for exactly these moments. Talk in your language, whenever you need.</p>
          <a href="/browse" className="cta-night">Find a listener right now →</a>
        </div>

        <div className="card">
          <h2>Why talking to an Indian listener is different</h2>
          <p>You do not have to translate your world for a LeanOn listener. They know what it means to
            leave everything behind to build something better. They understand the pressure of being the
            &quot;successful one&quot; in the family. They speak your language — literally and figuratively.</p>
          <p>Whether you want to speak in Hindi, Gujarati, Tamil, Malayalam, or English, there is a
            listener who will meet you exactly where you are.</p>
        </div>

        <div className="card">
          <h2>Session pricing in AED</h2>
          <ul className="checklist">
            <li>15-minute session — AED 37</li>
            <li>30-minute session — AED 55</li>
            <li>45-minute session — AED 74</li>
            <li>Your first 5 minutes are free — always</li>
          </ul>
          <p style={{ marginTop: '12px' }}>No subscriptions. No commitments. Pay only for what you use.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen — right now</h2>
          <p>Anonymous, affordable, available 24/7 for Indians in Dubai and across the UAE.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why is Dubai so lonely for Indian expats despite so many people being there?</h3>
            <p>Dubai is built for ambition, not deep roots. Expats form transient friendships and often leave.
              You can have a full life in Dubai and still feel that no one truly knows you.</p>
          </div>
          <div className="faq-item">
            <h3>I have friends in Dubai but I still feel lonely. Is that normal?</h3>
            <p>Absolutely. Social loneliness (no people around) is different from emotional loneliness (not
              feeling deeply understood). LeanOn listeners help bridge exactly that gap.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost from Dubai?</h3>
            <p>AED 37 for 15 minutes, AED 55 for 30 minutes, AED 74 for 45 minutes. First 5 minutes are free.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk in Hindi or my regional language?</h3>
            <p>Yes. LeanOn listeners speak Hindi, Gujarati, Malayalam, Tamil, Telugu, Kannada, Bengali, and more.
              Check a listener&apos;s profile to find your language.</p>
          </div>
          <div className="faq-item">
            <h3>What if I just want to talk with no specific problem?</h3>
            <p>That is exactly what LeanOn is for. Feeling low or disconnected is a perfectly valid reason
              to reach out. No crisis needed — just a desire to be heard.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uae-loneliness">Loneliness support UAE →</a>
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/uae-relationship-advice">Relationship support UAE →</a>
          <a href="/middle-east-loneliness">Middle East loneliness →</a>
          <a href="/middle-east-rant">Need to rant? →</a>
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
