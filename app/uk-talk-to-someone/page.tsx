import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Someone to Talk to in the UK — Real Human, Not a Bot | LeanOn',
  description: 'Not AI. Not a chatbot. Not a helpline script. A real Indian person who will listen to whatever is on your mind, available 24/7 in the UK.',
  keywords: [
    'someone to talk to uk', 'talk to someone uk', 'real person to talk to uk',
    'not a bot uk support', 'human listener uk', 'indian listener uk', 'emotional support uk',
    'someone to listen uk', 'talk about feelings uk', 'nri support uk talk',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-talk-to-someone',
    languages: { 'en-GB': 'https://www.leanon.app/uk-talk-to-someone' },
  },
  openGraph: {
    title: 'Someone to Talk to in the UK — Real Human, Not a Bot',
    description: 'Not AI. A real Indian person who will listen to whatever is on your mind. Available 24/7.',
    url: 'https://www.leanon.app/uk-talk-to-someone',
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
      name: 'Are LeanOn listeners real people or AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners are real humans — peer-trained Indians who have applied to be listeners, gone through a training process, and choose to be on the app to support other people. There is no AI in the listening sessions. When you talk, a real person is on the other side.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I talk about with a LeanOn listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anything. Loneliness, work stress, relationship issues, family pressure, identity, sadness, anxiety, anger, or just an undifferentiated "I do not feel good and I need to say it out loud." There is no topic that is too small or too heavy. Listeners are trained to hold space for all of it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I do not want advice — I just want someone to listen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is completely valid. You can tell your listener at the start: "I am not looking for advice, I just need to be heard." Good listeners will follow your lead and will not steer you towards solutions unless you ask.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this different from calling a helpline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Helplines are invaluable in crisis — but they follow a script and are primarily there for emergency situations. LeanOn is for everyday emotional support — the loneliness, the stress, the unnamed heaviness of NRI life. It is a peer conversation, not a structured call, and listeners can follow you wherever the conversation naturally goes.',
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
    { '@type': 'ListItem', position: 2, name: 'Talk to Someone UK', item: 'https://www.leanon.app/uk-talk-to-someone' },
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

export default function UkTalkToSomeonePage() {
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
          <a href="/">Home</a><span>›</span>Talk to Someone UK
        </div>

        <h1>Not a Bot. Not a Script.<br />A Real Person Who Will Actually Listen.</h1>
        <p className="lead">
          There are plenty of apps that offer AI conversations. LeanOn is not one of them. Every session is
          with a real, peer-trained Indian human who is there entirely for you — no script, no agenda,
          no algorithm making sense of your feelings.
        </p>

        <a href="/browse" className="cta-hero">Talk to a real person now — first 5 min free →</a>

        <div className="card">
          <h2>Why real human connection matters</h2>
          <p>AI can be useful. But when you are lonely, or stressed, or missing home, or just need to say
            something out loud — what helps is the sense that another person actually cares. That they are
            genuinely present. That their response comes from understanding, not an algorithm.</p>
          <p>LeanOn listeners are real people who chose to be on this platform because they want to help.
            That is a different kind of conversation.</p>
        </div>

        <div className="card">
          <h2>What you can bring to a conversation</h2>
          <ul className="checklist">
            <li>A specific problem you need to talk through</li>
            <li>A general heaviness you cannot quite name</li>
            <li>Loneliness, anxiety, or sadness with no clear cause</li>
            <li>Work stress, family pressure, or relationship confusion</li>
            <li>Something you have been carrying for a while and never told anyone</li>
            <li>Just needing to not be alone for a few minutes</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of it is welcome. None of it is too small.</p>
        </div>

        <div className="night-box">
          <h2>🌙 Available whenever you need it</h2>
          <p>2 AM in your flat. Sunday afternoon when the quiet gets heavy. After a hard week at work
            when you finally have a moment to breathe — and realise how depleted you are.</p>
          <p>LeanOn listeners are available 24/7. Right now, someone is ready to talk.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Session pricing in GBP</h2>
          <ul className="checklist">
            <li>First 5 minutes — completely free</li>
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
          <p style={{ marginTop: '12px' }}>No subscription. Pay only for the time you use.</p>
        </div>

        <div className="cta">
          <h2>A real conversation is one tap away</h2>
          <p>Indian peer listeners, available 24/7. Anonymous and confidential.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Are LeanOn listeners real people or AI?</h3>
            <p>Real humans — peer-trained Indians who applied to be listeners and went through a training
              process. There is no AI in the listening sessions. A real person is on the other side.</p>
          </div>
          <div className="faq-item">
            <h3>What can I talk about?</h3>
            <p>Anything. Loneliness, work stress, relationships, family pressure, identity, sadness, anxiety,
              or just an undifferentiated "I do not feel good." No topic is too small or too heavy.</p>
          </div>
          <div className="faq-item">
            <h3>What if I just want someone to listen, not give advice?</h3>
            <p>That is completely valid. Tell your listener at the start and they will follow your lead
              without steering you towards solutions unless you ask.</p>
          </div>
          <div className="faq-item">
            <h3>Is this different from calling a helpline?</h3>
            <p>Yes. Helplines follow scripts and are primarily for crisis situations. LeanOn is for everyday
              emotional support — a real peer conversation that goes wherever you need it to go.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/uk-empathy-listener">Empathy listener UK →</a>
          <a href="/uk-rant-to-someone">Need to rant? →</a>
          <a href="/uk-nri-support">NRI support UK →</a>
          <a href="/london-loneliness">Lonely in London →</a>
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
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
