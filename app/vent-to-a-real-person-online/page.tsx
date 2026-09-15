import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Vent to a Real Person Online — Someone Who Actually Listens | LeanOn',
  description: 'Need to vent but have no one to talk to? LeanOn connects you with real human listeners online — anonymous, available 24/7, first 5 minutes free. Not an AI. A real person.',
  keywords: [
    'vent to someone online', 'i need to vent', 'someone to vent to', 'vent online',
    'vent to a real person', 'vent anonymously online', 'need to vent no one to talk to',
    'where can i vent online', 'someone who will listen', 'vent without judgment',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/vent-to-a-real-person-online',
  },
  openGraph: {
    title: 'Vent to a Real Person Online | LeanOn',
    description: 'Sometimes you don\'t need advice. You just need to let it out. LeanOn connects you with real human listeners — anonymous, available 24/7, first 5 minutes free.',
    url: 'https://www.leanon.app/vent-to-a-real-person-online',
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
      name: 'Where can I vent to someone online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn lets you vent to a real human listener — someone with lived experience who won\'t judge you, won\'t give unsolicited advice, and won\'t try to fix you. Available 24/7, first 5 minutes free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to vent to someone online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn sessions are anonymous and confidential. Listeners are real people trained to hold space — they do not share your conversations and you do not need to share your real name.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between venting to an AI and venting to a real person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Venting to an AI like ChatGPT doesn\'t release emotional pressure the same way — because you know no real person heard you. On LeanOn, a real human is genuinely receiving your words, and that changes how cathartic it feels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I vent about anything?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Frustration with a partner, stress at work, family dynamics, feeling misunderstood, grief, anxiety, life feeling pointless — whatever it is, a LeanOn listener will hear it without judgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a venting session last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are 5 (free), 15, 30, or 45 minutes. Many people find 15 minutes enough to feel significantly lighter.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Vent to a Real Person Online', item: 'https://www.leanon.app/vent-to-a-real-person-online' },
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

export default function VentToRealPersonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>Vent to a Real Person Online
        </div>

        <h1>Sometimes You Don&apos;t Need Advice.<br />You Just Need to Let It Out.</h1>
        <p className="lead">
          You have something weighing on you. You have been carrying it for hours, maybe days. You don&apos;t
          need someone to fix it — you just need to say it out loud to a real person who will actually hear
          you. LeanOn makes that possible, right now, 24/7.
        </p>

        <a href="/browse" className="cta-hero">Find someone to listen — first 5 min free →</a>

        <div className="night-box">
          <h2>🌙 Need to vent at 2 AM?</h2>
          <p>
            The urge to vent doesn&apos;t follow a schedule. It hits late at night when everyone you know
            is asleep and the thoughts won&apos;t stop. LeanOn listeners are available right now — at any
            hour, on any day.
          </p>
          <p>
            You don&apos;t have to wait until morning. You don&apos;t have to keep it bottled up. A real
            human is online and ready to hear you.
          </p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>What you can vent about</h2>
          <p>There is no minimum requirement for what counts as &quot;worth venting about.&quot; If it&apos;s
            bothering you, it matters. LeanOn listeners are here for all of it:</p>
          <ul className="checklist">
            <li>A fight with your partner that still doesn&apos;t feel resolved</li>
            <li>A family member who never listens or always criticises</li>
            <li>Stress at work that you can&apos;t talk about with colleagues</li>
            <li>Feeling misunderstood by everyone in your life</li>
            <li>Grief that you&apos;ve been told to &quot;move on&quot; from</li>
            <li>Anxiety about the future, a decision, or something you can&apos;t control</li>
            <li>Feeling like life is pointless without a clear reason why</li>
            <li>Just needing to say something out loud to someone who will really receive it</li>
          </ul>
        </div>

        <div className="compare-box">
          <h2>Venting to AI vs. venting to a real person</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 Venting to AI</h3>
              <p>Your words go to a language model. No human hears them. Nothing is truly received.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 Venting to a LeanOn listener</h3>
              <p>A real person receives what you say. Your words land somewhere. That&apos;s what makes venting actually help.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 Venting to AI</h3>
              <p>AI validates everything. It agrees even when agreement isn&apos;t what you need — just noise.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 Venting to a LeanOn listener</h3>
              <p>A real human listens actively, reflects back what they hear, and asks questions that help you process.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 Venting to AI</h3>
              <p>The relief is temporary. You know no one heard you. The feelings return quickly.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 Venting to a LeanOn listener</h3>
              <p>Being genuinely heard by another person releases the pressure in a way AI simply cannot replicate.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>How it works</h2>
          <p>
            Browse LeanOn&apos;s listeners at <a href="/browse" style={{ color: 'var(--teal)', fontWeight: 700 }}>leanon.app/browse</a>.
            You can filter by availability, language, and what they specialize in. Read their short bio —
            many share what they&apos;ve personally been through, so you can find someone whose experience
            resonates with what you&apos;re dealing with.
          </p>
          <p>
            Your first 5 minutes are free. No credit card needed. You can also book a 15, 30, or 45-minute
            session if you know you need more time. Sessions are available from ₹20/min in India.
          </p>
          <p>
            Anonymous from start to finish — you never have to share your name, your location, or anything
            that identifies you. Just talk.
          </p>
        </div>

        <div className="cta">
          <h2>Someone is ready to hear you right now</h2>
          <p>Anonymous, no judgment, available 24/7. First 5 minutes free.</p>
          <a href="/browse" className="btn-white">Find a listener →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can I vent to someone online?</h3>
            <p>LeanOn lets you vent to a real human listener — someone with lived experience who won&apos;t
              judge you, won&apos;t give unsolicited advice, and won&apos;t try to fix you. Available 24/7,
              first 5 minutes free.</p>
          </div>
          <div className="faq-item">
            <h3>Is it safe to vent to someone online?</h3>
            <p>LeanOn sessions are anonymous and confidential. Listeners are real people trained to hold
              space — they do not share your conversations and you do not need to share your real name.</p>
          </div>
          <div className="faq-item">
            <h3>What&apos;s the difference between venting to an AI and venting to a real person?</h3>
            <p>Venting to an AI like ChatGPT doesn&apos;t release emotional pressure the same way — because
              you know no real person heard you. On LeanOn, a real human is genuinely receiving your words,
              and that changes how cathartic it feels.</p>
          </div>
          <div className="faq-item">
            <h3>Can I vent about anything?</h3>
            <p>Yes. Frustration with a partner, stress at work, family dynamics, feeling misunderstood,
              grief, anxiety, life feeling pointless — whatever it is, a LeanOn listener will hear it
              without judgment.</p>
          </div>
          <div className="faq-item">
            <h3>How long does a venting session last?</h3>
            <p>Sessions are 5 (free), 15, 30, or 45 minutes. Many people find 15 minutes enough to feel
              significantly lighter.</p>
          </div>
        </div>

        <div className="related">
          <a href="/talk-to-real-person-not-ai">Real person vs AI →</a>
          <a href="/loneliness-support-india">Loneliness support →</a>
          <a href="/i-need-someone-to-talk-to">I need someone to talk to →</a>
          <a href="/emotional-support-without-ai">Emotional support →</a>
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
