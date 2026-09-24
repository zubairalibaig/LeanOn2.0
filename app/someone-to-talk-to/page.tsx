import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need Someone to Talk To? Real Peer Listeners Available Now | LeanOn',
  description: 'You don\'t need a reason. You don\'t need to be in crisis. You just need to be heard. LeanOn connects you with real people who have been through hard times and come out the other side.',
  keywords: ['someone to talk to', 'need someone to talk to', 'who can i talk to', 'need someone to talk to online', 'i need someone to talk to', 'someone to listen to me'],
  alternates: { canonical: 'https://www.leanon.app/someone-to-talk-to' },
  openGraph: { title: 'Need Someone to Talk To? Real Peer Listeners Available Now | LeanOn', description: 'You don\'t need a reason. You don\'t need to be in crisis. You just need to be heard. LeanOn connects you with real people who have been through hard times and come out the other side.', url: 'https://www.leanon.app/someone-to-talk-to', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do I need a specific reason to use LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'No. "I need someone to talk to" is reason enough. You do not need to be in crisis, have a diagnosis, or have a specific event to discuss. If you need to be heard, LeanOn is for you.' } },
  { '@type': 'Question', name: 'Who are the listeners on LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are real people with lived experience of difficult times — not therapists, not AI, not call center agents. They have applied, been screened, and trained in active listening. They choose to be on the platform because they want to support others through hard moments.' } },
  { '@type': 'Question', name: 'How quickly can I start talking?', acceptedAnswer: { '@type': 'Answer', text: 'Immediately. Browse listeners who are online right now and start a session. No appointment, no form, no waiting. The first 5 minutes are free.' } },
  { '@type': 'Question', name: 'Is it anonymous?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You sign up with a phone number and first name only — no last name, no photo, no social login. Listeners sign confidentiality agreements. What you share stays private.' } },
  { '@type': 'Question', name: 'What if I do not know what to say?', acceptedAnswer: { '@type': 'Answer', text: 'That is fine. Many sessions start with "I am not sure where to begin." Your listener will follow your lead. You do not need to have it organized or articulate. Just start.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Need Someone to Talk To?', item: 'https://www.leanon.app/someone-to-talk-to' },
] }

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
  .steps{display:flex;flex-direction:column;gap:16px;margin-top:8px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{width:32px;height:32px;min-width:32px;background:var(--teal);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;}
  .step-text{font-size:15px;color:#3A6070;line-height:1.7;font-weight:500;padding-top:4px;}
  .step-text strong{color:var(--navy);}
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
  .crisis{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:20px 24px;font-size:13px;color:var(--gray);line-height:1.7;text-align:center;}
  .crisis strong{color:var(--navy);}
`

export default function SomeoneToTalkToPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Need Someone to Talk To?</span></nav>
        <div className="hero">
          <p className="badge">Someone to Talk To &middot; Real Listener &middot; No Appointment</p>
          <h1>You just need to be heard. <em>No reason required.</em></h1>
          <p className="lead">You do not need to be in crisis. You do not need a diagnosis. You do not need to have it figured out. LeanOn connects you with real people who have been through hard things and know what it means to need someone to talk to. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Find someone to talk to &rarr;</a>
        </div>
        <div className="section">
          <h2>The Bar Is Not That High</h2>
          <p>Most people think you need to be in crisis to reach out for support. You do not. The bar is much lower than that &mdash; and the lower bar is where most people actually live.</p>
          <p>You are tired and there is no one to tell. You are carrying something that is too small to be a crisis but too heavy for how long you have been holding it. You just had one of those weeks. You are overthinking something and it would help to say it out loud. You are lonely in a way you cannot quite explain. You miss someone. You are worried about something you cannot control.</p>
          <p>Any of these is enough. You do not need to justify needing to talk.</p>
        </div>
        <div className="section">
          <h2>What Talking to a Real Person Actually Does</h2>
          <p>When you say something out loud &mdash; or in text, to a real person who is genuinely listening &mdash; it stops circling inside you. The weight does not always disappear but it changes shape. It becomes something you are processing rather than something that is just pressing.</p>
          <p>LeanOn listeners are real people who have been through hard things themselves. They are not therapists. They are not AI. They are humans with lived experience who have chosen to be present for other people in difficult moments. They will not give you unsolicited advice or try to fix what you did not ask to be fixed. They will listen.</p>
        </div>
        <div className="section">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step"><div className="step-num">1</div><div className="step-text"><strong>Browse</strong> listeners who are currently online. See a bit about their background and what they have been through.</div></div>
            <div className="step"><div className="step-num">2</div><div className="step-text"><strong>Choose</strong> someone whose experience feels right for what you need. Or just pick the one who is available.</div></div>
            <div className="step"><div className="step-num">3</div><div className="step-text"><strong>Start</strong> a text session immediately. No form, no assessment, no appointment. The first 5 minutes are free.</div></div>
            <div className="step"><div className="step-num">4</div><div className="step-text"><strong>Talk.</strong> Say what you have been carrying. Your listener will follow your lead.</div></div>
          </div>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Someone is online right now, ready to listen.</h2><p>Real person. No judgment. No reason required. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/support/someone-to-talk-to">Talk to someone online &rarr;</a>
          <a href="/online-emotional-support">Online emotional support &rarr;</a>
          <a href="/loneliness-support-online">Loneliness support &rarr;</a>
          <a href="/i-need-someone-to-talk-to">I need someone to talk to &rarr;</a>
          <a href="/need-to-vent-right-now">Need to vent &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
