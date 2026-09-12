import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'I Need Someone to Talk To Right Now | LeanOn India',
  description: 'Need someone to talk to right now? LeanOn connects you with a real peer listener in India in minutes. Had a fight, need to vent, going through something — anonymous, no appointment, available now.',
  keywords: [
    'i need someone to talk to right now', 'need someone to talk to India',
    'someone to talk to online India', 'I want to talk to someone India',
    'talk to someone right now India', 'need to talk to someone urgently India',
    'who can I talk to when I am sad India', 'I feel like I need to talk India',
    'need emotional support right now India', 'I want to talk about my feelings India',
    'find someone to talk to online India', 'someone to listen to me India',
    'talk to someone about my problems India', 'I need to vent right now',
    'need a friend to talk to India', 'talk to someone after a fight India',
    'need to vent about relationship India', 'talk to someone morning India',
  ],
  alternates: { canonical: 'https://www.leanon.app/i-need-someone-to-talk-to', languages: { 'en-IN': 'https://www.leanon.app/i-need-someone-to-talk-to' } },
  openGraph: {
    title: 'I Need Someone to Talk To Right Now | LeanOn India',
    description: 'Need someone to talk to right now? Real peer listeners in India — anonymous, no appointment, available now.',
    url: 'https://www.leanon.app/i-need-someone-to-talk-to',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Someone to Talk To' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find someone to talk to right now in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Open LeanOn, browse listeners who are online right now, and book a session. No appointment needed, no waitlist. Many listeners are available at any hour — including late at night. Your first 5 minutes are free.' },
    },
    {
      '@type': 'Question',
      name: 'What if I just need someone to listen and not give advice?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is exactly what peer listeners on LeanOn are trained to do: listen. Not advise, not fix, not steer. If you open a session and say "I just need someone to hear me right now" — that is what you will get. You lead the conversation.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous when I talk to someone on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to share your real name, city, or any personal details. Listeners sign confidentiality agreements. You can say whatever you need to say without it reaching anyone in your life.' },
    },
    {
      '@type': 'Question',
      name: 'What if I don\'t know what to say or where to start?',
      acceptedAnswer: { '@type': 'Answer', text: 'You do not need to have it figured out before you talk. You can open with "I don\'t know where to start" or "I\'ve been feeling off and I just need to say it out loud." That is enough. A good listener will meet you there.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to talk to someone on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'New users get a free 5-minute trial. Paid sessions start at ₹160 for 15 minutes — significantly less than a therapy session, available any time, with no appointment or insurance required.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn the same as a crisis helpline?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn is peer support for everyday emotional weight — loneliness, anxiety, grief, relationships, overthinking. If you are in a mental health crisis or having thoughts of self-harm, please call NIMHANS (080-46110007) or Tele-MANAS (14416), both free and available 24/7.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'I Need Someone to Talk To', item: 'https://www.leanon.app/i-need-someone-to-talk-to' },
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

export default function INeedSomeoneToTalkToPage() {
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
          <span style={{color:'var(--navy)'}}>I Need Someone to Talk To</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Real Humans · Available Now · Anonymous</p>
          <h1>Someone Is Here to <em>Listen</em> — Right Now</h1>
          <p className="lead">You do not have to explain why you need to talk, have it figured out, or be in a crisis. You just need to say something out loud to a real person who will hear it. LeanOn connects you in minutes.</p>
          <a href="/browse" className="cta-hero">Find a listener now →</a>
        </div>

        <div className="section">
          <h2>You Do Not Need a Reason</h2>
          <p>Sometimes the feeling is specific — a relationship falling apart, a bad week at work, a grief you have been carrying. Sometimes it is just a heaviness you cannot name. Both are enough. You do not need to have a diagnosis, a crisis, or a well-formed problem to deserve someone to talk to.</p>
          <p>The most common thing people say before their first session is: <em>"I don&apos;t even know where to start."</em> And the most common thing they say after is: <em>"That helped more than I expected."</em> The starting is the hardest part.</p>

          <h3>What You Can Bring</h3>
          <ul>
            <li>Something that has been sitting heavy and you have not said out loud yet</li>
            <li>A situation you keep turning over but have no one to process it with</li>
            <li>The feeling of not being okay without a clear reason why</li>
            <li>Loneliness, anxiety, grief, a difficult relationship, work pressure, or just a bad stretch</li>
            <li>Nothing specific — just the need to not be alone with your thoughts for 15 minutes</li>
          </ul>
        </div>

        <div className="section">
          <h2>How It Works</h2>
          <div className="how-steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <h3>Browse listeners who are online now</h3>
                <p>Each profile shows their lived experience and the topics they support. Pick someone whose story feels relevant to yours.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <h3>Start a session — no appointment needed</h3>
                <p>Book instantly. New users get a free 5-minute trial. Paid sessions start at ₹160 for 15 minutes.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <h3>Talk. Your listener will follow your lead</h3>
                <p>No scripts, no agendas, no advice unless you ask for it. Just a real person, listening.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Why It Has to Be a Real Person</h2>
          <p>There are AI chatbots, journaling apps, and breathing exercises. They are useful. But they do not do the one thing that actually shifts the weight: make you feel heard by a real human being who has also carried something hard.</p>
          <p>When you talk to a LeanOn listener, there is a person on the other side who has personally navigated loneliness, or burnout, or grief, or the kind of relationship difficulty you are in. They are not reading from a script. They are not generating a response. They are present — affected by what you say, carrying your story with them.</p>
          <p>That is the only thing that actually works. Everything else is preparation for it.</p>
        </div>

        <div className="section">
          <h2>What People Come to LeanOn For</h2>
          <p>No two conversations are the same, but these are the most common reasons people book a session:</p>
          <ul>
            <li>Feeling lonely — in a new city, in a relationship, in their own life</li>
            <li>Anxiety and overthinking that does not switch off</li>
            <li>Grief — loss of a person, a relationship, a version of themselves</li>
            <li>Work stress, burnout, or not knowing what to do with their career</li>
            <li>A relationship that is difficult in ways they cannot say to anyone in their life</li>
            <li>The general heaviness of being a person in a demanding world</li>
            <li>Needing to vent — with no advice, no opinions, just space</li>
          </ul>
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
          <h2>Someone is available right now</h2>
          <p>No appointment. No explaining yourself first. Just open the app and find a listener who is online.</p>
          <a href="/browse" className="btn-cta">Talk to someone now →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/loneliness">Loneliness →</a>
            <a href="/support/anxiety">Anxiety →</a>
            <a href="/support/need-to-vent">Need to vent →</a>
            <a href="/support/someone-to-talk-to">Someone to talk to →</a>
            <a href="/support/overthinking">Overthinking →</a>
            <a href="/talk-to-someone-right-now">Talk right now →</a>
          </div>
        </div>
      </div>
    </>
  )
}
