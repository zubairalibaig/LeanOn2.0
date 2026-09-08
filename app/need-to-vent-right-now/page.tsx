import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Vent Right Now? Talk to a Real Person in 2 Minutes | LeanOn',
  description: 'Something happened and you need to get it off your chest RIGHT NOW. LeanOn connects you with a real listener in India within minutes — no appointment, anonymous, available now.',
  keywords: [
    'need to vent right now', 'need to vent online India',
    'someone to vent to right now', 'I need to rant right now India',
    'need to get this off my chest', 'instant vent online India',
    'talk to someone right now India', 'need to express anger right now',
    'someone to listen to me vent India', 'quick vent session online',
    'emotional release right now India', 'I need to tell someone something India',
    'vent anonymously online India', 'need to talk about something that just happened',
    'quick emotional support India',
  ],
  alternates: { canonical: 'https://www.leanon.app/need-to-vent-right-now', languages: { 'en-IN': 'https://www.leanon.app/need-to-vent-right-now' } },
  openGraph: {
    title: 'Need to Vent Right Now? Talk to a Real Person in 2 Minutes | LeanOn',
    description: 'Something happened and you need to get it off your chest RIGHT NOW. LeanOn connects you with a real listener in India within minutes — no appointment, anonymous, available now.',
    url: 'https://www.leanon.app/need-to-vent-right-now',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Vent Right Now' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can I start venting to someone on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Instantly. Open LeanOn, browse listeners who are online, and book a session. There is no appointment, no intake form, no waiting room. If a listener is online, you can start within 2 minutes. Many people connect within the time it takes to make a coffee.' },
    },
    {
      '@type': 'Question',
      name: 'What if I just need 10 minutes to get something off my chest?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is exactly what a 15-minute session is for. You do not need a long-term problem or a mental health crisis. If something happened and you need to say it out loud to a real person before it derails your day — that is enough. Book, vent, feel better.' },
    },
    {
      '@type': 'Question',
      name: 'Can I vent anonymously without sharing who I am?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to give your real name, phone number, or any identifying detail. The session is private by design. You can say exactly what happened — about your boss, your partner, your family member — without any risk of it reaching them.' },
    },
    {
      '@type': 'Question',
      name: 'Will the listener tell me what to do or just listen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Only what you ask for. Peer listeners on LeanOn are trained to listen without advising, fixing, or judging. If you open with \'I just need to vent, I don\'t want advice\' — that is what you will get. Your lead, your pace.' },
    },
    {
      '@type': 'Question',
      name: 'Is it weird to pay someone just to vent?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not at all. Venting to the people in your life has a social cost — you are managing their reaction, their opinions, their potential panic. A peer listener is a dedicated, confidential space with no social overhead. Many people find it more useful precisely because there are no consequences. It is not weird. It is practical.' },
    },
    {
      '@type': 'Question',
      name: 'What do I do after venting — will I feel better?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most people report feeling significantly lighter after even one session of genuine expression. The relief is physiological: moving unexpressed emotion from inside to outside through language and being heard reduces the body\'s stress load. You will still have the situation to deal with — but you will deal with it from a calmer, less pressurised state.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Need to Vent Right Now', item: 'https://www.leanon.app/need-to-vent-right-now' },
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

export default function NeedToVentRightNowPage() {
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
          <span style={{color:'var(--navy)'}}>Need to Vent Right Now</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Connect in 2 Minutes · Anonymous · No Appointment</p>
          <h1>Something Happened. You Need to <em>Say It.</em> Right Now.</h1>
          <p className="lead">Not tonight. Not when you&apos;ve calmed down. Right now — before the next meeting, before you have to go back in there, before it eats you alive for the rest of the day.</p>
          <a href="/browse" className="cta-hero">Find someone to vent to →</a>
        </div>

        <div className="section">
          <h2>You Don&apos;t Need a Big Problem</h2>
          <p>Your partner said something this morning that you cannot stop replaying. Your manager did something in front of everyone and you had to sit there and not react. You got bad news and you are currently pretending to work.</p>
          <p>Something happened and it is sitting in your chest like a stone and you have not had one moment to let it out. None of these are a mental health crisis. All of them are worth saying out loud to someone.</p>
          <p>The threshold for needing to vent is not severity. It is pressure. If something is pressing on you right now and you have no one to say it to — that is the threshold. That is enough.</p>
        </div>

        <div className="section">
          <h2>Why 10 Minutes With a Real Person Works</h2>
          <p>There is a specific relief that comes from being heard by another human being — not an app, not a journal, not a breathing exercise. When you speak something to a person who is actually present, the brain processes it differently. The loop closes. The thing that has been circling stops circling. You can think again.</p>
          <p>This is not a mood fix. It is a pressure valve. The situation does not disappear. But the weight of carrying it alone, unexpressed, is the part that makes everything else harder — and that part you can put down in 10 minutes.</p>
        </div>

        <div className="section">
          <h2>Who Books a Vent Session on LeanOn</h2>
          <p>Real people, in the middle of real days. These are the kinds of things that bring someone to LeanOn at 10 AM or 1 PM:</p>
          <ul>
            <li>&ldquo;Just had a fight with my husband before I left for work and I&apos;ve been holding it since 8 AM&rdquo;</li>
            <li>&ldquo;My manager said something in the team meeting that made me feel two inches tall&rdquo;</li>
            <li>&ldquo;I got news this morning that I can&apos;t share with anyone yet and I&apos;m going to explode&rdquo;</li>
            <li>&ldquo;Had a bad call with my mother. Now I have to go back to my desk and act normal.&rdquo;</li>
            <li>&ldquo;My co-worker is making my life miserable and I have nobody to say it to&rdquo;</li>
            <li>&ldquo;Something triggered me in a meeting and I&apos;m spiraling. I need to get it out before my 2 PM.&rdquo;</li>
          </ul>
        </div>

        <div className="section">
          <h2>How Fast Can You Start?</h2>
          <div className="how-steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <h3>Open LeanOn</h3>
                <p>Browse listeners who are online right now. Each profile shows what they are there for.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <h3>Pick a listener who&apos;s online</h3>
                <p>No appointment. No intake form. Just pick someone whose profile feels right and book.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <h3>Book → connect in 2 minutes</h3>
                <p>You are connected and talking. Most people connect within the time it takes to make a coffee.</p>
              </div>
            </div>
          </div>
          <p style={{marginTop:20,fontStyle:'italic',color:'var(--teal)',fontWeight:700}}>Most people connect within the time it takes to make a coffee.</p>
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
          <h2>You have 10 minutes. Use them.</h2>
          <p>A listener is online right now. No appointment. No explaining yourself first. Just say what happened.</p>
          <a href="/browse" className="btn-cta">Find someone to vent to →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/need-to-vent">Need to vent →</a>
            <a href="/support/anxiety">Anxiety →</a>
            <a href="/support/relationship-stress">Relationship stress →</a>
            <a href="/support/work-from-home-loneliness">Work loneliness →</a>
            <a href="/vent-to-someone-online">Vent online →</a>
            <a href="/having-a-bad-day">Having a bad day →</a>
          </div>
        </div>
      </div>
    </>
  )
}
