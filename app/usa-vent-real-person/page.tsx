import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Vent to a Real Person Online in the US — Anonymous, Human | LeanOn',
  description: 'LeanOn lets you vent to a real human listener in the US — 24/7, anonymous, first 5 minutes free. No AI, no judgment. $10 for 15 min, $15 for 30 min.',
  keywords: [
    'vent to real person USA', 'anonymous venting online USA', 'someone to talk to in America',
    'vent online USA', 'talk to someone USA', 'real human listener America',
    'vent anonymously USA', 'emotional venting online US', 'talk about stress USA',
    'peer support venting United States',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-vent-real-person',
  },
  openGraph: {
    title: 'Vent to a Real Person Online in the US — Anonymous, Human | LeanOn',
    description: "You've got a lot on your mind. A real human is ready to listen. LeanOn — anonymous, available 24/7, first 5 min free.",
    url: 'https://www.leanon.app/usa-vent-real-person',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn — Anonymous Venting with Real Humans in the US',
  description: 'LeanOn lets Americans vent to real human peer listeners — anonymous, 24/7, no AI. First 5 minutes free, $10 for 15 minutes.',
  provider: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
  serviceType: 'Peer Emotional Support',
  areaServed: 'United States',
  audience: {
    '@type': 'Audience',
    audienceType: 'Americans who want to vent to a real person online anonymously',
  },
  offers: {
    '@type': 'Offer',
    description: 'First 5 minutes free. $10 for 15 minutes, $15 for 30 minutes, $20 for 45 minutes.',
    priceCurrency: 'USD',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LeanOn',
  url: 'https://www.leanon.app',
  description: 'LeanOn is a peer support platform that connects people with real human listeners — people with lived experience of loneliness, relationship struggles, grief, and life transitions. Unlike AI chatbots, LeanOn listeners are real humans who genuinely listen, ask questions, and hold space.',
  sameAs: ['https://www.leanon.app'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I vent to someone online in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn lets you vent to a real human listener — available 24/7, completely anonymous, first 5 minutes free. No AI, no judgment, just a real person ready to hear you out.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn anonymous in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. You don't need to share your real name, location, or any identifying information. LeanOn sessions are private and confidential.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to vent on LeanOn in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that, $10 for 15 minutes, $15 for 30 minutes, or $20 for 45 minutes — significantly cheaper than therapy, with no insurance or appointment needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I vent about on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Work stress, relationship frustration, family conflict, loneliness, feeling overwhelmed, grief, anxiety about the future — anything emotionally heavy that you need to say out loud to someone who will genuinely hear it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why vent to a human instead of writing in a journal or talking to AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A journal doesn't respond. AI doesn't truly hear you. A LeanOn listener is a real person who receives your words, responds with genuine empathy, and helps you feel less alone — which is what venting is actually for.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Vent to a Real Person — US', item: 'https://www.leanon.app/usa-vent-real-person' },
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
  .compare-box{background:linear-gradient(135deg,#f0f8fc,#e0f2f7);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .compare-box h2{font-size:18px;font-weight:900;margin-bottom:16px;}
  .compare-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:8px;}
  .compare-col{background:white;border-radius:12px;padding:14px;}
  .compare-col h3{font-size:13px;font-weight:900;margin-bottom:8px;}
  .compare-col.ai h3{color:#999;}
  .compare-col.human h3{color:var(--teal);}
  .compare-col p{font-size:13px;line-height:1.65;color:#5A7A8A;}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.compare-row{grid-template-columns:1fr;}}
`

export default function USAVentRealPersonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>Vent to a Real Person — US
        </div>

        <h1>You&apos;ve Got a Lot on Your Mind.<br />A Real Human Is Ready to Listen.</h1>
        <p className="lead">
          LeanOn is a peer support platform where you can vent to a real human listener — anonymously,
          any time of day or night, with no judgment and no AI. Just a real person in the US who is
          fully present and ready to receive what you&apos;re carrying.
        </p>

        <a href="/browse" className="cta-hero">Vent to a real person now — first 5 min free →</a>

        <div className="card">
          <h2>American hustle culture was built to make you feel like this</h2>
          <p>
            Work stress you can&apos;t talk about at work. Political tension exhausting your friendships.
            Loneliness in cities packed with millions of people. Relationship issues you&apos;ve been
            managing alone for months because everyone else has their own problems.
          </p>
          <p>
            You might have tried journaling. Or opening ChatGPT at midnight. But a journal doesn&apos;t
            respond. And AI generates text — it doesn&apos;t actually receive you. There&apos;s a reason
            neither of them fully works: what you need is to be heard by a real human being.
          </p>
          <p>
            LeanOn gives you a real person to vent to — vetted, trained, and ready. Not in weeks. Now.
          </p>
        </div>

        <div className="card">
          <h2>What Americans vent about on LeanOn</h2>
          <ul className="checklist" style={{ marginTop: '0' }}>
            <li>Work exhaustion, toxic management, and burnout that&apos;s hard to name</li>
            <li>Relationship tension — romantic, family, friendships going cold</li>
            <li>Loneliness in a new city, or after a breakup, or just quietly over time</li>
            <li>Political and social anxiety that&apos;s become background noise</li>
            <li>Financial stress and the shame that comes with it</li>
            <li>Grief, loss, or the slow erosion of something you loved</li>
            <li>Feeling stuck, flat, or like something is wrong but you can&apos;t name it</li>
          </ul>
        </div>

        <div className="compare-box">
          <h2>Venting to AI vs. venting to a real LeanOn human</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>📓 Journal / AI chatbot</h3>
              <p>You put words out into silence. Nothing comes back that has actually received you.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>A real person receives what you say and responds with genuine presence and understanding.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Produces empathy-shaped text without ever feeling anything — hollow by design</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Can be moved by what you share — has their own experience of hard things</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Chatbot</h3>
              <p>Never truly anonymous — your words train future models and feed data systems</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Human</h3>
              <p>Fully anonymous — no name, no location, no identifying details required</p>
            </div>
          </div>
        </div>

        <div className="night-box">
          <h2>Sometimes you need to vent at 3am</h2>
          <p>
            Something happened. Or nothing happened, and that&apos;s the problem. You&apos;ve been
            carrying it all day and it&apos;s now 3am and you can&apos;t sleep and you just need someone
            to talk to.
          </p>
          <p>
            LeanOn has real human listeners available right now — not a bot, not a delayed response,
            not an 8am appointment slot. A real person. Tonight.
          </p>
          <a href="/browse" className="cta-night">Find a listener right now →</a>
        </div>

        <div className="cta">
          <h2>Say it out loud to someone who&apos;ll actually hear you.</h2>
          <p>Anonymous. Human. 24/7. First 5 minutes free. $10 / $15 / $20 for 15, 30, 45 min.</p>
          <a href="/browse" className="btn-white">Browse real listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can I vent to someone online in the US?</h3>
            <p>LeanOn lets you vent to a real human listener — available 24/7, completely anonymous,
              first 5 minutes free. No AI, no judgment, just a real person ready to hear you out.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn anonymous in the US?</h3>
            <p>Yes. You don&apos;t need to share your real name, location, or any identifying information.
              LeanOn sessions are private and confidential.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost to vent on LeanOn in the US?</h3>
            <p>Your first 5 minutes are free. After that, $10 for 15 minutes, $15 for 30 minutes, or
              $20 for 45 minutes — significantly cheaper than therapy, with no insurance or appointment
              needed.</p>
          </div>
          <div className="faq-item">
            <h3>What can I vent about on LeanOn?</h3>
            <p>Work stress, relationship frustration, family conflict, loneliness, feeling overwhelmed,
              grief, anxiety about the future — anything emotionally heavy that you need to say out loud
              to someone who will genuinely hear it.</p>
          </div>
          <div className="faq-item">
            <h3>Why vent to a human instead of writing in a journal or talking to AI?</h3>
            <p>A journal doesn&apos;t respond. AI doesn&apos;t truly hear you. A LeanOn listener is a
              real person who receives your words, responds with genuine empathy, and helps you feel less
              alone — which is what venting is actually for.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-talk-to-real-person-support">Talk to a real person — US →</a>
          <a href="/talk-to-human-instead-of-chatgpt">Human vs AI support →</a>
          <a href="/emotional-support-without-ai">Emotional support without AI →</a>
          <a href="/vent-to-a-real-person-online">Vent to a real person →</a>
        </div>

        <div className="disclaimer">
          ⚠️ If you&apos;re in crisis or experiencing suicidal thoughts, please call or text{' '}
          <strong>988 (Suicide &amp; Crisis Lifeline)</strong>.<br />
          LeanOn is peer support — not a substitute for professional mental health care or emergency services.
        </div>
      </div>
    </>
  )
}
