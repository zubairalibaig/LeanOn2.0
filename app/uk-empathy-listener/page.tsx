import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathy Listening for South Asians in the UK | LeanOn',
  description: 'Feeling unheard? Talk to someone who understands your culture, your language, and what it means to be South Asian in the UK. LeanOn empathy listeners are available 24/7.',
  keywords: [
    'empathy listener uk south asian', 'someone who understands me uk', 'feeling unheard uk',
    'south asian listener uk', 'talk in hindi uk', 'cultural empathy support uk',
    'indian empathy listener uk', 'understood uk south asian', 'desi listener uk',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-empathy-listener',
    languages: { 'en-GB': 'https://www.leanon.app/uk-empathy-listener' },
  },
  openGraph: {
    title: 'Empathy Listening for South Asians in the UK — Be Heard',
    description: 'Feeling unheard? Talk to someone who understands your culture and what it means to be South Asian in the UK.',
    url: 'https://www.leanon.app/uk-empathy-listener',
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
      name: 'What is empathy listening and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empathy listening means being fully present with someone — not planning your next response, not looking for solutions, not thinking about something else. Just genuinely taking in what the other person is saying and reflecting it back so they feel seen. It is rarer than it sounds, and it is what LeanOn listeners are specifically trained to do.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does it matter that the listener understands South Asian culture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'So much of what you carry as a South Asian in the UK is shaped by culture — family pressure, the taboo around showing weakness, the pressure to succeed and be grateful because you worked so hard to get here, the guilt of having left. A listener who does not share that cultural context will miss what is actually being said. LeanOn listeners understand it from the inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a listener in Hindi or another South Asian language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners speak Hindi, Punjabi, Gujarati, Tamil, Telugu, Kannada, Bengali, and other languages. You can check language availability on listener profiles when browsing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I do not know how to explain what I am feeling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is completely fine — and honestly quite normal. You can start with "I do not even know where to begin" and a good listener will help you find the thread. You do not need to arrive with your thoughts organised.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost from the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: £8 for 15 minutes, £12 for 30 minutes, £16 for 45 minutes.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Empathy Listener UK', item: 'https://www.leanon.app/uk-empathy-listener' },
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

export default function UkEmpathyListenerPage() {
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
          <a href="/">Home</a><span>›</span>Empathy Listener UK
        </div>

        <h1>You Just Want Someone Who Actually Gets It.</h1>
        <p className="lead">
          Not someone who nods politely. Not someone who says "have you tried meditation?" Not someone who
          half-listens while checking their phone. Someone who truly gets the specific weight of being South
          Asian, being far from home, and being expected to hold it all together.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone who understands — first 5 min free →</a>

        <div className="card">
          <h2>What &ldquo;being understood&rdquo; really means</h2>
          <p>There are things that are hard to explain to people who did not grow up where you did:</p>
          <ul className="checklist">
            <li>The guilt of being abroad while your parents get older</li>
            <li>The pressure to succeed so your sacrifice was worth it</li>
            <li>Keeping your emotions tightly controlled because &ldquo;log kya kahenge&rdquo;</li>
            <li>Feeling like you are always translating yourself — your culture, your feelings, your context</li>
            <li>The loneliness of not being fully Indian anymore, and not fully British either</li>
            <li>Carrying cultural expectations that do not fit who you actually are</li>
          </ul>
          <p style={{ marginTop: '12px' }}>A listener who already understands this context does not need you to explain it from scratch.</p>
        </div>

        <div className="night-box">
          <h2>🫂 Heard. Not fixed. Not advised. Just heard.</h2>
          <p>There is a particular kind of relief that comes from saying something out loud and having
            someone truly receive it. Not respond to it with a solution. Not reframe it. Just hear it,
            acknowledge it, and hold space for how it actually feels.</p>
          <p>That is what LeanOn empathy listeners are trained to do.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>Talk in your own language if you want</h2>
          <p>Many LeanOn listeners speak Hindi, Punjabi, Gujarati, Tamil, Telugu, Kannada, Bengali, and other
            South Asian languages. Sometimes the feeling comes out more naturally in the language you grew up
            speaking.</p>
          <p>Browse listener profiles to find someone whose language and background resonate with yours.</p>
        </div>

        <div className="card">
          <h2>Session pricing in GBP</h2>
          <ul className="checklist">
            <li>First 5 minutes — completely free</li>
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Be heard — fully, without translation</h2>
          <p>Indian listeners who understand the NRI experience. Available 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is empathy listening?</h3>
            <p>Empathy listening means being fully present — not planning your next response, not looking for
              solutions. Just genuinely taking in what you are saying and reflecting it back so you feel seen.
              It is rarer than it sounds, and it is what LeanOn listeners are specifically trained to do.</p>
          </div>
          <div className="faq-item">
            <h3>Why does it matter that the listener understands South Asian culture?</h3>
            <p>So much of what you carry is shaped by culture — family pressure, the taboo around showing
              weakness, the guilt of having left. A listener who does not share that context will miss what
              is actually being said.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk in Hindi or another South Asian language?</h3>
            <p>Yes. Many listeners speak Hindi, Punjabi, Gujarati, Tamil, Telugu, Kannada, and Bengali.
              Check language availability on listener profiles.</p>
          </div>
          <div className="faq-item">
            <h3>What if I do not know how to explain what I am feeling?</h3>
            <p>You can start with "I do not even know where to begin" — a good listener will help you find
              the thread. You do not need to arrive with your thoughts organised.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-talk-to-someone">Talk to someone UK →</a>
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/uk-nri-support">NRI support UK →</a>
          <a href="/british-indian-support">British Indian identity →</a>
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
          <a href="/uk-rant-to-someone">Need to rant? →</a>
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
