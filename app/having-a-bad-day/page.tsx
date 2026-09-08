import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Having a Bad Day? Talk It Out With a Real Listener | LeanOn India',
  description: 'When the day has gone sideways and you need someone to hear you — LeanOn connects you with a real peer listener in India in minutes. Anonymous, no appointment, available now.',
  keywords: [
    'having a bad day India', 'bad day what to do India',
    'my day is going terrible India', 'bad day at work India',
    'had a bad morning India', 'bad day talk to someone India',
    'morning went badly India', 'everything is going wrong today India',
    'how to deal with a bad day India', 'someone to talk to on a bad day India',
    'bad day emotional support India', 'venting on a bad day India',
    'I am having a terrible day India', 'bad day quick support India',
    'reset after a bad morning India',
  ],
  alternates: { canonical: 'https://www.leanon.app/having-a-bad-day', languages: { 'en-IN': 'https://www.leanon.app/having-a-bad-day' } },
  openGraph: {
    title: 'Having a Bad Day? Talk It Out With a Real Listener | LeanOn India',
    description: 'When the day has gone sideways and you need someone to hear you — LeanOn connects you with a real peer listener in India in minutes. Anonymous, no appointment, available now.',
    url: 'https://www.leanon.app/having-a-bad-day',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Having a Bad Day' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do when I\'m having a really bad day?',
      acceptedAnswer: { '@type': 'Answer', text: 'The most effective thing — backed by both research and the experience of most people who try it — is to say it out loud to another person before it compounds. Not to analyse it. Not to fix it. Just to get it outside your head and into the world where it stops circling. A 15-minute conversation with a peer listener on LeanOn often turns a day that was going to be a write-off into one where you can actually function.' },
    },
    {
      '@type': 'Question',
      name: 'Why do bad days at work or home feel so heavy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because we rarely get to express the emotion in the moment. When your boss undermines you in a meeting, you have to sit there and be professional. When your partner says something that hurts, you often have to keep moving. When bad news arrives in the morning, you still have to show up and function. The feeling accumulates, unexpressed, and weighs heavier through the day.' },
    },
    {
      '@type': 'Question',
      name: 'How do I reset emotionally in the middle of a workday?',
      acceptedAnswer: { '@type': 'Answer', text: 'Step one: get it out. Not to your colleagues or your manager — somewhere private and consequence-free. A 15-minute session with a peer listener is often enough to release the pressure and reset. You will not fix the situation. But you will get back enough equilibrium to get through the afternoon without it bleeding into everything.' },
    },
    {
      '@type': 'Question',
      name: 'Is it worth talking to someone if the problem won\'t change?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — because the problem and your emotional state around the problem are two different things. The situation with your boss, your partner, or your family may not change today. But your internal state — the pressure, the circling, the weight — can shift. And you make better decisions, respond better, and handle the day better from a lower-pressure state.' },
    },
    {
      '@type': 'Question',
      name: 'What if I just want to say what happened without getting advice?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is exactly what peer listeners are trained for. Say \'I don\'t need advice, I just need to tell someone what happened\' — and that is what will happen. No fixing, no redirecting, no silver linings.' },
    },
    {
      '@type': 'Question',
      name: 'How fast can I talk to someone when my day is going badly?',
      acceptedAnswer: { '@type': 'Answer', text: 'Within minutes. Browse online listeners on LeanOn, pick one, book. If you are at lunch or have 15 minutes between meetings, that is enough time to connect and get the thing out that is sitting on your chest.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Having a Bad Day', item: 'https://www.leanon.app/having-a-bad-day' },
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
  .trigger-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  @media(max-width:560px){.trigger-cards{grid-template-columns:1fr;}}
  .trigger-card{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:20px;}
  .trigger-card-label{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--teal);margin-bottom:8px;}
  .trigger-card p{font-size:14px;color:#3A6070;line-height:1.7;margin:0;}
`

export default function HavingABadDayPage() {
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
          <span style={{color:'var(--navy)'}}>Having a Bad Day</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Available in Minutes · No Appointment · Anonymous</p>
          <h1>When the Day Has <em>Gone Sideways</em></h1>
          <p className="lead">Some days the morning sets a tone that everything else inherits. A fight before work, bad news at 9 AM, a meeting that went wrong, a comment that landed badly. By noon, you are carrying something that is making every subsequent thing harder.</p>
          <a href="/browse" className="cta-hero">Talk it out right now →</a>
        </div>

        <div className="section">
          <h2>The Accumulation Problem</h2>
          <p>A bad day is rarely one thing. It is usually one thing that you could not express — because you were at your desk, because it was not the right moment, because there was no one safe to say it to — and then everything that happened after it landed on top of the original weight.</p>
          <p>By afternoon, you are not just carrying the thing that happened. You are carrying the thing that happened, plus three hours of pretending you were fine, plus the effort of functioning under pressure, plus the small irritations that you would have brushed off easily on a normal day but could not today because your capacity was already at the limit.</p>
          <p>The accumulation is the problem. The first event was manageable. The unexpressed accumulation is what makes a bad day a write-off.</p>
        </div>

        <div className="section">
          <h2>What Actually Resets a Bad Day</h2>
          <p>Not productivity tips. Not taking a walk. Not deep breathing, though none of those are wrong. What actually interrupts the accumulation cycle is expression — getting the original thing out, spoken, received, outside of you.</p>
          <p>When you say what happened to a real person who is genuinely listening, the loop closes. The nervous system gets the signal that it has been processed. The pressure drops. The subsequent events of the day stop piling onto the original trigger — because the original trigger is no longer sitting there, unresolved, underneath everything.</p>
          <p>A 15-minute conversation with a peer listener on LeanOn does not fix the situation. But it often turns a day that was going to be a complete write-off into one where you can actually function through the afternoon.</p>
        </div>

        <div className="section">
          <h2>Morning and Afternoon Triggers</h2>
          <div className="trigger-cards">
            <div className="trigger-card">
              <p className="trigger-card-label">Morning</p>
              <p>Something happened between waking up and sitting at your desk — a fight, bad news, anxiety about the day, a difficult call with family. You have been carrying it since and nobody around you knows. It is now colouring every meeting, every email, every interaction.</p>
            </div>
            <div className="trigger-card">
              <p className="trigger-card-label">Lunchtime</p>
              <p>The morning accumulated. A meeting went wrong, or a colleague did something, or work stress built to a point where you need the lunch break to decompress — or the afternoon will be a write-off. You have 15 minutes and nowhere to take it.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>What a 15-Minute Session Actually Does</h2>
          <p>You talk. The listener receives it — without redirecting, without advising, without managing their own reaction to what you say. They are there entirely to hear you.</p>
          <p>In the first few minutes, you get it out — the thing, the context, the feeling. Unedited. In whatever order it comes.</p>
          <p>Then something shifts. Not always dramatically. But the weight changes. The thing that was pressing on everything from underneath stops pressing quite so hard. You return to your afternoon from a lower-pressure state — not fixed, not solved, but functional. That is the whole point. The pressure valve, not the cure.</p>
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
          <h2>The afternoon does not have to be a write-off.</h2>
          <p>A listener is available right now. 15 minutes is enough to get it out and return to your day from a different state.</p>
          <a href="/browse" className="btn-cta">Talk it out now →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/need-to-vent-right-now">Vent right now →</a>
            <a href="/support/anxiety">Anxiety →</a>
            <a href="/support/work-from-home-loneliness">Work loneliness →</a>
            <a href="/support/overthinking">Overthinking →</a>
            <a href="/just-had-a-fight">Just had a fight →</a>
            <a href="/vent-to-someone-online">Vent online →</a>
          </div>
        </div>
      </div>
    </>
  )
}
