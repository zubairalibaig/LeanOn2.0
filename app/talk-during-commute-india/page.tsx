import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone During Your Commute | LeanOn',
  description: "Your commute is 20–45 minutes. That's enough time to process last night, reset from a fight, or vent before the workday starts. Real peer listener, ₹160.",
  keywords: [
    'talk to someone during commute india',
    'commute emotional support india',
    'voice call support during commute india',
    'talk while commuting india',
    'emotional support in transit india',
    'commute vent session india',
    'process feelings during commute india',
    'support during morning commute india',
  ],
  alternates: { canonical: 'https://www.leanon.app/talk-during-commute-india', languages: { 'en-IN': 'https://www.leanon.app/talk-during-commute-india' } },
  openGraph: {
    title: 'Talk to Someone During Your Commute | LeanOn',
    description: "Your commute is 20–45 minutes. That's enough time to process last night, reset from a fight, or vent before the workday starts. Real peer listener, ₹160.",
    url: 'https://www.leanon.app/talk-during-commute-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Talk During Commute' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I really do a session during a commute?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn sessions are voice calls. Earphones in, speak freely, and the listener receives it in real time. Many people find the commute is actually the best time for this &mdash; you are already alone, you are already going over the morning in your head, and you have nowhere to be for the next 20 to 40 minutes. The commute is a natural vent window.' },
    },
    {
      '@type': 'Question',
      name: 'Is it a phone call?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, it is a voice call through the LeanOn app. Not a video call &mdash; voice only. You do not need to be at a desk or be visible. It works exactly like a phone call. You book, the connection is made, and you talk.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not give your name, phone number, or any identifying information. The listener does not know who you are or where you are calling from. You can say what happened this morning &mdash; fully, honestly &mdash; without any risk of it reaching anyone in your life.' },
    },
    {
      '@type': 'Question',
      name: 'What if the call drops?',
      acceptedAnswer: { '@type': 'Answer', text: 'You can reconnect and continue. The listener will be available to resume the session. Network quality affects all calls &mdash; if your commute takes you through a low-signal area, you may want to wait until you have a stable connection, or book for a window when you know reception is good.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a commute session cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 15-minute session starts from ₹160. That is the most common commute session length. If your commute is longer and you want more time, 30-minute sessions are also available. There is no subscription &mdash; you pay per session, no ongoing commitment.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk During Commute India', item: 'https://www.leanon.app/talk-during-commute-india' },
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
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
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

export default function TalkDuringCommuteIndiaPage() {
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
          <a href="/">Home</a><span>&#x203A;</span>
          <span style={{color:'var(--navy)'}}>Talk During Commute India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          &#x1F6A8; In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free &middot; 24/7 &middot; Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Voice Call &middot; 15 Minutes &middot; No Appointment &middot; From &#x20b9;160</p>
          <h1>Your commute is 40 minutes. <em>That&apos;s enough time to reset.</em></h1>
          <p className="lead">You&apos;re already alone in the car or on the metro. You&apos;re already going over it in your head. LeanOn sessions are voice calls &mdash; you can use that 40 minutes to actually process it instead of just ruminating.</p>
          <a href="/browse" className="cta-hero">Start your session &#x2192;</a>
        </div>

        <div className="section">
          <h2>Why the Commute Is the Natural Vent Window</h2>
          <p>Most of the day, you are surrounded by people who either know you or know the situation. The commute is one of the few natural pockets of alone time. You are in transit &mdash; between home and work, or between work and home &mdash; and you are already in a transitional mental state. You are already processing.</p>
          <p>The difference between productive processing and rumination is having someone to say it to. Replaying the conversation alone in your head does not close the loop &mdash; it just keeps it running. Saying it to a real person who is actively listening is what actually moves it through.</p>
          <p>The commute gives you the time and the privacy to do that. Most people have between 20 and 45 minutes. That is more than enough for a 15-minute session.</p>
        </div>

        <div className="section">
          <h2>What the Commute-Vent Looks Like</h2>
          <p>Earphones in before you start the engine or as you board. Open the app, browse the listeners who are online, book a session. The connection is made in a couple of minutes. You speak. The listener receives, reflects, and is genuinely present for it. By the time you park &mdash; or arrive at your stop &mdash; you have had the conversation you needed to have.</p>
          <p>It is a voice call. You do not need to be at a desk. You do not need to be still. You can drive, walk, or sit on the metro and talk. The format is specifically suited to a commute.</p>
        </div>

        <div className="section">
          <h2>What People Process on Their Commute</h2>
          <ul>
            <li>A morning fight before leaving home &mdash; processing it on the way to work so it does not bleed into the day.</li>
            <li>Something unresolved from the night before &mdash; still carrying it, need to say it before arriving at the office.</li>
            <li>Anxiety about the day ahead &mdash; a difficult meeting, a conversation that needs to happen, a situation that has been building.</li>
            <li>Processing the day on the way home &mdash; releasing before walking back into the house where the tension still lives.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Voice Calls, Not Chat</h2>
          <p>LeanOn is a voice platform, not a text chat. This is deliberate. Voice moves emotion in a way that text does not. When you speak something out loud to another person, the brain processes it differently than when you type it. The relief is more complete.</p>
          <p>The commute is perfect for this precisely because you are not at a desk trying to type. You can speak naturally, the way you would to a friend in the passenger seat &mdash; except this friend has no stake in the outcome and no opinion about your partner.</p>
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
          <h2>Use the commute to actually process it.</h2>
          <p>A real listener, voice call, available now. 15 minutes from &#x20b9;160. Done before you park.</p>
          <a href="/browse" className="btn-cta">Start your session &#x2192;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/morning-emotional-support-india">Morning reset &#x2192;</a>
            <a href="/just-had-a-fight">Just had a fight &#x2192;</a>
            <a href="/after-fight-with-partner-india">After a fight &#x2192;</a>
            <a href="/vent-about-relationship-india">Vent about relationship &#x2192;</a>
            <a href="/need-to-vent-right-now">Vent right now &#x2192;</a>
            <a href="/browse">Browse listeners &#x2192;</a>
          </div>
        </div>
      </div>
    </>
  )
}
