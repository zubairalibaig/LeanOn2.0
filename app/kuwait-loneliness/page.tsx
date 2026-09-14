import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Loneliness Support for Indians in Kuwait | LeanOn',
  description: 'Feeling lonely and isolated in Kuwait? LeanOn connects Indian expats with a trained Indian peer listener — in your language, any time, starting with a free 5-minute trial.',
  keywords: [
    'loneliness support Kuwait Indian', 'lonely in Kuwait Indian', 'Indian expat Kuwait lonely',
    'emotional support Kuwait Indians', 'talk to someone Kuwait', 'Kuwait NRI loneliness',
    'feeling isolated Kuwait', 'Indian listener Kuwait', 'peer support Kuwait',
    'Kuwait Indian mental health', 'missing home Kuwait Indian', 'no one to talk to Kuwait',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/kuwait-loneliness',
    languages: { 'en-IN': 'https://www.leanon.app/kuwait-loneliness' },
  },
  openGraph: {
    title: 'Loneliness Support for Indians in Kuwait — Talk to an Indian Listener',
    description: 'Isolated in Kuwait and missing home? LeanOn peer listeners understand the expat experience and speak your language. First 5 minutes free.',
    url: 'https://www.leanon.app/kuwait-loneliness',
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
      name: 'What makes Kuwait particularly isolating for Indian expats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kuwait has a small but tight-knit Indian community — but for many workers, access to that community is limited by long working hours, accommodation far from social areas, and restrictions on movement. The country\'s small geography means limited options for meeting people outside work. Combined with sponsorship-based visa restrictions, many Indians in Kuwait feel trapped in a narrow daily routine with no real emotional outlet.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost from Kuwait?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are KD 4 for 15 minutes, KD 5 for 30 minutes, and KD 7 for 45 minutes. Your first session always starts with a free 5-minute trial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a listener in Malayalam, Hindi, or my regional language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. There are significant Malayali and Hindi-speaking communities in Kuwait, and LeanOn has listeners in both these languages and many more — Tamil, Telugu, Kannada, Bengali, and others. Check a listener\'s profile for their languages.',
      },
    },
    {
      '@type': 'Question',
      name: 'I feel guilty feeling lonely because I chose to come here for a better life. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very normal, and very common among Gulf workers. The feeling that you are not "allowed" to complain because you chose to migrate — and because others depend on you — is one of the most painful layers of expat loneliness. LeanOn listeners understand this deeply. You are allowed to feel what you feel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are sessions confidential — will my employer or sponsor know?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely confidential and anonymous. Your employer, visa sponsor, and family will never know. You can use any name and speak freely.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Kuwait Loneliness Support', item: 'https://www.leanon.app/kuwait-loneliness' },
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

export default function KuwaitLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Kuwait Loneliness Support
        </div>

        <h1>Building a Future in Kuwait.<br />But Carrying the Weight of It Alone.</h1>
        <p className="lead">
          Kuwait is home to hundreds of thousands of Indian workers — yet so many of them describe
          a deep, quiet loneliness. Far from family, in a country with strict social and movement
          rules, missing the warmth of home. LeanOn connects you with an Indian peer listener who
          speaks your language and understands your world.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>Loneliness in Kuwait — what it really feels like</h2>
          <ul className="checklist">
            <li>A strict routine: work, accommodation, work again — with little in between</li>
            <li>A small world that feels even smaller when you are homesick</li>
            <li>Weekends that pass with no one who really knows you to spend them with</li>
            <li>The guilt of feeling lonely when your family back home depends on you</li>
            <li>Visa restrictions that make it hard to build a life outside of work</li>
            <li>Missing the small joys of India — the noise, the food, the faces you love</li>
          </ul>
          <p style={{ marginTop: '12px' }}>This is real. And it deserves to be spoken about, not just endured.</p>
        </div>

        <div className="night-box">
          <h2>🌙 Alone in Kuwait City tonight?</h2>
          <p>LeanOn listeners are available 24/7. The time difference between Kuwait and India is small —
            which means Indian listeners are awake and ready whenever you need to talk, day or night.</p>
          <p>First 5 minutes are completely free. No card needed to start.</p>
          <a href="/browse" className="cta-night">Find an Indian listener now →</a>
        </div>

        <div className="card">
          <h2>Talk in your language — Hindi, Malayalam, Tamil and more</h2>
          <p>Kuwait has a large Malayali community, and Hindi speakers from across India. LeanOn listeners
            speak Malayalam, Hindi, Tamil, Telugu, Kannada, Bengali, and other Indian languages. Talking in
            your mother tongue makes it easier to express the things that are hardest to say.</p>
        </div>

        <div className="card">
          <h2>Session pricing in KD</h2>
          <ul className="checklist">
            <li>15-minute session — KD 4</li>
            <li>30-minute session — KD 5</li>
            <li>45-minute session — KD 7</li>
            <li>First 5 minutes always free on your first session</li>
          </ul>
          <p style={{ marginTop: '12px' }}>No subscription. Anonymous. Pay only for what you use.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen — right now</h2>
          <p>For Indians across Kuwait — available 24/7, in your language.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What makes Kuwait particularly isolating for Indian expats?</h3>
            <p>Long hours, accommodation-based routines, restricted movement under visa rules, and few avenues
              to build a life outside work all make Kuwait uniquely isolating for many Indian workers.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost from Kuwait?</h3>
            <p>KD 4 for 15 minutes, KD 5 for 30 minutes, KD 7 for 45 minutes. First 5 minutes are free.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk in Malayalam, Hindi, or my regional language?</h3>
            <p>Yes. LeanOn has listeners in Malayalam, Hindi, Tamil, Telugu, Kannada, Bengali, and more.
              Check a listener&apos;s profile to find one who speaks your language.</p>
          </div>
          <div className="faq-item">
            <h3>I feel guilty for feeling lonely. Is that normal?</h3>
            <p>Very normal and very common. The feeling that you&apos;re not &quot;allowed&quot; to struggle because you
              chose to come here is one of the most painful layers of Gulf loneliness. You are allowed to feel
              what you feel. LeanOn listeners understand this deeply.</p>
          </div>
          <div className="faq-item">
            <h3>Are sessions confidential — will my employer know?</h3>
            <p>Completely confidential and anonymous. Your employer, sponsor, and family will never know.
              You can use any name and speak freely.</p>
          </div>
        </div>

        <div className="related">
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/middle-east-loneliness">Middle East loneliness →</a>
          <a href="/middle-east-rant">Need to rant? →</a>
          <a href="/uae-loneliness">Loneliness support UAE →</a>
          <a href="/oman-loneliness">Oman support →</a>
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
