import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Someone to Talk to in the USA — Real Human, Not a Chatbot | LeanOn',
  description: 'When you need a real person to talk to in the USA — not an AI, not a hotline, not a six-week therapy waitlist — LeanOn connects you with a warm Indian peer listener. Available right now.',
  keywords: [
    'someone to talk to usa', 'need someone to talk to usa indian', 'real person to talk to usa',
    'not a chatbot listener usa', 'human listener usa', 'talk to a person usa nri',
    'peer listener usa indian', 'someone to talk to right now usa', 'need to talk to someone usa',
    'indian peer support usa', 'emotional support call usa indian',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-talk-to-someone',
    languages: { 'en-US': 'https://www.leanon.app/usa-talk-to-someone' },
  },
  openGraph: {
    title: 'Someone to Talk to in the USA — Real Human, Not a Chatbot',
    description: 'Not an AI. Not a hotline. Not a six-week waitlist. A warm, real Indian listener — available right now, for $10.',
    url: 'https://www.leanon.app/usa-talk-to-someone',
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
      name: 'What makes LeanOn different from AI chat or mental health apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects you with a real human being — a trained peer listener who is actually present with you, responding in real time, genuinely curious about your experience. AI cannot hold space. AI cannot feel the weight of what you are saying and be moved by it. A LeanOn listener can.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I talk to someone on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Immediately. Browse available listeners, pick one who feels right, and start the session. No appointment, no registration form, no insurance. Your first 5 minutes are free.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I talk about with a LeanOn listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anything. Loneliness, relationship struggles, work stress, visa anxiety, homesickness, family pressure, grief, feeling lost, needing to vent — or just wanting to hear a warm voice. You do not need a specific reason. You just need to want to talk.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost from the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first 5 minutes free — once per listener. Compared to $200/hour therapy, it is genuinely accessible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are LeanOn listeners Indian?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners are Indian or South Asian, and many speak Hindi, Telugu, Tamil, and other Indian languages. You can browse listener profiles and choose someone who feels like the right fit for you.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Someone to Talk to USA', item: 'https://www.leanon.app/usa-talk-to-someone' },
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

export default function UsaTalkToSomeonePage() {
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
          <a href="/">Home</a><span>›</span>Someone to Talk to USA
        </div>

        <h1>Not an AI. Not a Hotline.<br />A Real Warm Person — Available Right Now.</h1>
        <p className="lead">
          You do not need an appointment. You do not need a crisis. You do not need to wait six weeks for
          a therapy slot. You just need a real human being who will listen — properly, warmly, without
          judgment. LeanOn peer listeners are available right now, any time of day or night.
        </p>

        <a href="/browse" className="cta-hero">Talk to a real person now — first 5 min free →</a>

        <div className="card">
          <h2>Why AI chatbots are not enough</h2>
          <p>AI can generate empathy-sounding words. It cannot actually feel the weight of what you are
            saying and be moved by it. It cannot slow down and say &quot;wait — tell me more about that part.&quot;
            It cannot hold space. It cannot be genuinely present with you.</p>
          <p>When you need to be heard, you need a human. LeanOn listeners are real people who chose
            to do this because they care about connection. There is no substitute for that.</p>
        </div>

        <div className="night-box">
          <h2>🕐 Available at any hour — for when the need hits</h2>
          <p>Emotional needs do not arrive at office hours. They arrive at 11 PM on a Tuesday when
            India is asleep, you cannot sleep, and everything is just too much.</p>
          <p>LeanOn listeners are available 24/7. You can open the app right now, browse who is online,
            and be in a session within minutes.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>What you can talk about</h2>
          <ul className="checklist">
            <li>H-1B anxiety and the fear of what a layoff would mean for your visa.</li>
            <li>Loneliness in a suburb where you have been living for two years and still feel like a stranger.</li>
            <li>A relationship that is quietly falling apart and you do not know how to talk about it.</li>
            <li>Homesickness, missing your parents, missing India during festivals.</li>
            <li>Work pressure, burnout, the relentless hustle culture of American tech.</li>
            <li>Or just: a general heaviness that you cannot quite name but need to say out loud.</li>
          </ul>
        </div>

        <div className="card">
          <h2>$10 for 15 minutes — accessible support, right now</h2>
          <p>Therapy in the USA costs $200 per session, requires insurance or weeks of paperwork, and
            often has a waiting list measured in months. LeanOn sessions are <strong>$10 for 15 minutes</strong>,
            <strong> $15 for 30 minutes</strong>, and <strong>$20 for 45 minutes</strong>.</p>
          <p>Your first 5 minutes free — once per listener. No insurance required. No referral needed. No waitlist.
            Just a real person, available now.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>$10 for 15 min · $15 for 30 min · $20 for 45 min · First 5 min always free.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What makes LeanOn different from AI chat or mental health apps?</h3>
            <p>LeanOn connects you with a real human being — a trained peer listener who is actually
              present with you, responding in real time, genuinely curious about your experience.
              AI cannot hold space. A LeanOn listener can.</p>
          </div>
          <div className="faq-item">
            <h3>How quickly can I talk to someone on LeanOn?</h3>
            <p>Immediately. Browse available listeners, pick one who feels right, and start the session.
              No appointment, no registration form, no insurance. Your first 5 minutes are free.</p>
          </div>
          <div className="faq-item">
            <h3>What can I talk about with a LeanOn listener?</h3>
            <p>Anything. Loneliness, work stress, visa anxiety, homesickness, relationships, grief —
              or just wanting to hear a warm voice. You do not need a specific reason.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost from the USA?</h3>
            <p>Sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first
              5 minutes free — once per listener.</p>
          </div>
          <div className="faq-item">
            <h3>Are LeanOn listeners Indian?</h3>
            <p>Many LeanOn listeners are Indian or South Asian, and many speak Hindi, Telugu, Tamil, and
              other Indian languages. Browse profiles and choose someone who feels like the right fit.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/usa-empathy-listener">Empathy listener →</a>
          <a href="/usa-rant-to-someone">Need to rant? →</a>
          <a href="/usa-nri-support">NRI emotional support →</a>
          <a href="/usa-therapy-alternative">Therapy alternative →</a>
          <a href="/desi-usa-support">Desi community support →</a>
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
