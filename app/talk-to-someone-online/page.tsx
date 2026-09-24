import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone Online Right Now | Real Person, Not AI | LeanOn',
  description: 'When you need a real person to listen — not an AI, not a bot, not a therapist. LeanOn peer listeners are available now, no appointment needed.',
  keywords: ['talk to someone online', 'someone to talk to', 'someone to chat with', 'friendly chat online', 'talk to someone right now', 'I have no one to talk to', 'need someone to listen', 'want someone to talk to but don\'t need therapy', 'anonymous person to talk to', 'need to talk to someone', 'talk to real person online', 'real person to talk to online', 'not ai someone to talk to'],
  alternates: { canonical: 'https://www.leanon.app/talk-to-someone-online' },
  openGraph: { title: 'Talk to Someone Online Right Now | Real Person, Not AI | LeanOn', description: 'When you need a real person to listen — not an AI, not a bot, not a therapist. LeanOn peer listeners are available now, no appointment needed.', url: 'https://www.leanon.app/talk-to-someone-online', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is LeanOn a real person or an AI?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn connects you with real human peer listeners — not AI, not chatbots, not automated responses. Every listener is a real person who has applied, been screened, and trained. They are online right now, available to talk.' } },
  { '@type': 'Question', name: 'Why is talking to a human different from talking to an AI?', acceptedAnswer: { '@type': 'Answer', text: 'An AI generates what a person who understood you would say. A real human who has lived through something similar actually knows what it feels like. The difference is not subtle — AI and human conversations serve different needs; LeanOn is designed for people who specifically want another human being to listen.' } },
  { '@type': 'Question', name: 'Do I need an appointment?', acceptedAnswer: { '@type': 'Answer', text: 'No appointment needed. Browse listeners who are currently online and start a session immediately. The first 5 minutes are free.' } },
  { '@type': 'Question', name: 'What is this different from therapy?', acceptedAnswer: { '@type': 'Answer', text: 'Therapy involves a licensed professional working with you on diagnosis and treatment. LeanOn is peer support — real people with lived experience who will listen without judgment. It is more informal, more accessible, and available right now without a booking.' } },
  { '@type': 'Question', name: 'Is it anonymous?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You sign up with a phone number and first name only. No last name, no photo, no social login. Sessions are private and listeners sign confidentiality agreements.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Talk to Someone Online Right Now', item: 'https://www.leanon.app/talk-to-someone-online' },
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
  .compare-row{display:flex;gap:16px;margin-bottom:16px;flex-wrap:wrap;}
  .compare-col{flex:1;min-width:200px;background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:18px 20px;}
  .compare-col h3{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.05em;}
  .compare-col ul{list-style:none;display:flex;flex-direction:column;gap:6px;}
  .compare-col li{font-size:13px;color:var(--gray);font-weight:500;padding-left:14px;position:relative;}
  .compare-col li::before{content:'·';position:absolute;left:0;color:var(--teal);font-weight:900;}
  .compare-col.highlight{border-color:var(--teal);background:#E8F8FA;}
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

export default function TalkToSomeoneOnlinePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Talk to Someone Online Right Now</span></nav>
        <div className="hero">
          <p className="badge">Real Person &middot; Not AI &middot; No Appointment &middot; Available Now</p>
          <h1>A real person. Right now. <em>No appointment.</em></h1>
          <p className="lead">Not an AI. Not a bot. Not a therapist with a two-week waitlist. Just a real human being who will listen — right now, no form, no assessment. The first 5 minutes are free.</p>
          <a href="/browse" className="cta-hero">Find a real person to talk to &rarr;</a>
        </div>
        <div className="section">
          <h2>You Have Already Tried Talking to AI. You Know It Is Not the Same.</h2>
          <p>At some point most people have typed their problems into ChatGPT or another AI. And it is impressive &mdash; it says things that sound right, it reflects back, it validates. But something is missing. The response feels hollow, like a very articulate mirror. Because an AI generates what someone who understood you would say. It does not actually know what it feels like.</p>
          <p>A real person offers a different kind of conversation: another human being is actually receiving what you say and can respond from their own experience. If you have been using AI because you have no one to talk to, you may simply be looking for human company rather than another generated response.</p>
          <p>LeanOn listeners are real people. They have applied, been screened, and trained. They are online right now. And the first 5 minutes cost nothing.</p>
        </div>
        <div className="section">
          <h2>Not Therapy. Not AI. Something In Between That Actually Helps.</h2>
          <div className="compare-row">
            <div className="compare-col">
              <h3>AI Chatbot</h3>
              <ul>
                <li>Pattern-matches your words</li>
                <li>Has not lived through anything</li>
                <li>Always available, always even-keeled</li>
                <li>Often feels hollow for real pain</li>
              </ul>
            </div>
            <div className="compare-col highlight">
              <h3>LeanOn Peer Support</h3>
              <ul>
                <li>Real human with lived experience</li>
                <li>Understands from the inside</li>
                <li>Available now, no appointment</li>
                <li>First 5 minutes free</li>
              </ul>
            </div>
            <div className="compare-col">
              <h3>Formal Therapy</h3>
              <ul>
                <li>Licensed professional</li>
                <li>Waitlists, appointments, forms</li>
                <li>Expensive per session</li>
                <li>Great for clinical needs</li>
              </ul>
            </div>
          </div>
          <p>Peer support is the middle ground most people actually need &mdash; real human presence, available now, without the formal apparatus of a clinical appointment.</p>
        </div>
        <div className="section">
          <h2>How It Works</h2>
          <p>Browse listeners who are currently online. Each listener profile shows a little about their background and what they have been through. Choose someone whose experience resonates with yours. Start a session &mdash; text-based, anonymous, no signup beyond a phone number and first name.</p>
          <p>Your first 5-minute session is free. If it is helpful, you continue. If not, you stop and pay nothing. No subscription, no commitment, no waitlist.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Real person. Right now.</h2><p>Not AI. Not a bot. A real human being who will actually listen. First 5 minutes free.</p><a href="/browse" className="btn-cta">Talk to someone now &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/online-emotional-support">Online emotional support &rarr;</a>
          <a href="/someone-to-talk-to">Need someone to talk to &rarr;</a>
          <a href="/loneliness-support-online">Loneliness support &rarr;</a>
          <a href="/ai-chatbot-alternative">AI chatbot alternative &rarr;</a>
          <a href="/chat-with-real-person">Chat with real person &rarr;</a>
          <a href="/peer-support">Peer support &rarr;</a>
          <a href="/alternatives-to-therapy-india">Therapy vs peer support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
