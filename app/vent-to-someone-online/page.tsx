import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Vent to Someone Online — Real Human, Anonymous, Available Now | LeanOn',
  description: 'Need to vent to someone who will actually listen? LeanOn connects you with a real peer listener in India — not an AI, not a bot, not your family. Say what you need to say.',
  keywords: [
    'vent to someone online India', 'online venting India',
    'talk to someone to vent India', 'vent online anonymously India',
    'vent to a stranger online India', 'someone to vent to India',
    'talk about my feelings online India', 'online vent session India',
    'vent without judgment India', 'safe vent online India',
    'get things off your chest online India', 'talk to real person online to vent India',
    'anonymous vent online India', 'no judgment venting India',
    'online emotional outlet India',
  ],
  alternates: { canonical: 'https://www.leanon.app/vent-to-someone-online', languages: { 'en-IN': 'https://www.leanon.app/vent-to-someone-online' } },
  openGraph: {
    title: 'Vent to Someone Online — Real Human, Anonymous, Available Now | LeanOn',
    description: 'Need to vent to someone who will actually listen? LeanOn connects you with a real peer listener in India — not an AI, not a bot, not your family. Say what you need to say.',
    url: 'https://www.leanon.app/vent-to-someone-online',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Vent to Someone Online' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is online venting and does it work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Online venting is the act of expressing accumulated emotion — frustration, anger, sadness, overwhelm — to another person through a digital platform. Research consistently shows that externalising emotion (saying it out loud or in writing to someone who receives it) reduces its physiological weight. On LeanOn, you vent to a real human being who is trained to listen, which is meaningfully different from journaling or talking to an AI.' },
    },
    {
      '@type': 'Question',
      name: 'Why vent to a stranger online instead of a friend?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because friends come with complications. They have opinions about your situation, they may take sides, they might tell someone else, and they have feelings about what you tell them that you then have to manage. A peer listener on LeanOn is a dedicated, confidential space — they are there entirely for you, with no social overhead, no judgment, and no consequences.' },
    },
    {
      '@type': 'Question',
      name: 'Is venting online in India safe and private?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. On LeanOn, you do not share your real name or contact details. The session is end-to-end private. Listeners sign confidentiality agreements. You can speak freely about anyone in your life — your boss, your partner, your in-laws — without any risk of it reaching them.' },
    },
    {
      '@type': 'Question',
      name: 'What should I say when I start a venting session?',
      acceptedAnswer: { '@type': 'Answer', text: 'Whatever is there. You can open with \'Something just happened and I need to get it out\' or \'I\'ve been holding something since this morning\' or literally just start talking. You do not need to have it organised or summarised. The listener\'s job is to receive whatever comes out.' },
    },
    {
      '@type': 'Question',
      name: 'How long should a vent session be?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most people find 15 minutes is enough to feel meaningfully lighter. The first few minutes are often just getting it out — the whole thing, unedited. The last few minutes are the shift: once it is out, something changes. 30 minutes is better if there is a lot or if you want to actually talk through it rather than just express it.' },
    },
    {
      '@type': 'Question',
      name: 'What makes LeanOn different from just texting a friend to vent?',
      acceptedAnswer: { '@type': 'Answer', text: 'Three things: confidentiality (your listener has no connection to your life and no interest in sharing what you say), no social debt (you are not creating a situation where someone now worries about you, has an opinion, or expects an update), and trained presence (listeners are practised in actually receiving what you say without redirecting, one-upping, or immediately solving).' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Vent to Someone Online', item: 'https://www.leanon.app/vent-to-someone-online' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:780px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .how-steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .step-body h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-body p{font-size:14px;color:var(--gray);line-height:1.7;font-weight:500;margin:0;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .related a{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);display:block;}
  .related a:hover{border-color:var(--teal);color:var(--teal);}
`

export default function VentToSomeoneOnlinePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Vent to Someone Online</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Real Human · Not AI · Anonymous</p>
          <h1>Vent to Someone Who Will <em>Actually Listen</em></h1>
          <p className="lead">Not someone who will tell you what to do. Not someone who will take sides. Not someone who will bring it up later. Just someone who will hear it — all of it — without judgment.</p>
          <a href="/browse" className="cta-hero">Start a vent session →</a>
        </div>

        <div className="section">
          <h2>The Problem With Venting to People You Know</h2>
          <p>The moment you tell a friend something difficult, you have taken on a second job: managing their reaction. They worry. They have opinions. They may share it with someone else. They might say something that makes you regret telling them. They will bring it up again later at a moment you do not expect.</p>
          <p>Even the best people in your life are not clean receivers. They are filters — their own histories, biases, and emotional investments shape what they hear and how they respond. Sometimes that is valuable. Often, when you just need to get something out, it is an obstacle.</p>
          <p>A peer listener on LeanOn has no connection to your life. No stake in the outcome. No opinion about who is right. No risk of it going further. That is a different kind of space — and sometimes it is exactly the kind you need.</p>
        </div>

        <div className="section">
          <h2>What Actually Happens When You Vent to a Listener</h2>
          <p>There is a specific physiological mechanism behind why being heard helps. When you carry an unexpressed emotion, your nervous system keeps processing it — looping, activating, looking for resolution. Language is one of the primary ways humans process and encode experience. Speaking something to a present, receptive person closes the loop in a way that thinking alone cannot.</p>
          <p>When you vent to a LeanOn listener, you are not just getting it off your chest in a metaphorical sense. You are completing a cognitive and emotional processing cycle. The thing stops circling. The pressure drops. You can think again — and respond to the rest of your day from that clearer state rather than from underneath it.</p>
        </div>

        <div className="section">
          <h2>What You Can Say</h2>
          <p>There is no category of thing too small, too messy, or too complicated. These are the kinds of things people bring:</p>
          <ul>
            <li>&ldquo;My in-laws have been making comments and I can&apos;t say anything back&rdquo;</li>
            <li>&ldquo;I&apos;m furious at my boss and can&apos;t show it&rdquo;</li>
            <li>&ldquo;My partner and I had a fight and I&apos;m still shaking&rdquo;</li>
            <li>&ldquo;I got rejected and nobody in my life knows I even applied&rdquo;</li>
            <li>&ldquo;Something is building and I need to release it before it comes out the wrong way&rdquo;</li>
            <li>&ldquo;I&apos;ve been holding something for days and I just need to say it to someone&rdquo;</li>
          </ul>
          <p>You do not need to organise it. You do not need to know what you want from the conversation. Just start talking.</p>
        </div>

        <div className="section">
          <h2>What the Listener Will and Won&apos;t Do</h2>
          <h3>What they will do</h3>
          <p>Listen without interrupting. Reflect back what they hear so you feel received. Stay with you through the uncomfortable parts without flinching. Follow your lead on what you need — more space, a question, a reflection.</p>
          <h3>What they will not do</h3>
          <p>They will not give you unsolicited advice. They will not tell you what you should have done. They will not judge the person you are venting about, or build a case against them, or accidentally take sides. They will not share anything you say. They will not bring their own problems into it. They are there entirely for you — and that is the whole job.</p>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Ready to say it out loud?</h2>
          <p>A real listener is available right now. No appointment. No intake form. Just say what you need to say.</p>
          <a href="/browse" className="btn-cta">Start a vent session →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/need-to-vent-right-now">Vent right now →</a>
            <a href="/support/need-to-vent">Need to vent →</a>
            <a href="/support/anonymous-support">Anonymous support →</a>
            <a href="/chat-with-real-person">Chat with real person →</a>
            <a href="/having-a-bad-day">Having a bad day →</a>
            <a href="/just-had-a-fight">Just had a fight →</a>
          </div>
        </div>
      </div>
    </>
  )
}
