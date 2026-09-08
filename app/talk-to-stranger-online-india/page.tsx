import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Stranger Online India — Real Person, No Judgment, Right Now | LeanOn',
  description: 'Sometimes the best person to talk to is someone who does not know you. Talk to a real peer listener in India — anonymous, confidential, available right now.',
  keywords: [
    'talk to a stranger online India', 'stranger to talk to online India',
    'chat with stranger online India', 'talk to random person online India',
    'anonymous chat India', 'talk to unknown person online India',
    'vent to stranger online India', 'talk to stranger app India',
    'online stranger chat India', 'safe stranger chat India',
    'peer listener India', 'anonymous emotional support India',
    'talk to someone I don\'t know India', 'random chat with real person India',
    'confide in stranger online India',
  ],
  alternates: { canonical: 'https://www.leanon.app/talk-to-stranger-online-india', languages: { 'en-IN': 'https://www.leanon.app/talk-to-stranger-online-india' } },
  openGraph: {
    title: 'Talk to a Stranger Online India — Real Person, No Judgment, Right Now | LeanOn',
    description: 'Sometimes the best person to talk to is someone who does not know you. Talk to a real peer listener in India — anonymous, confidential, available right now.',
    url: 'https://www.leanon.app/talk-to-stranger-online-india',
    siteName: 'LeanOn',
    type: 'website',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Talk to a Stranger Online India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to talk to a stranger online in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'On LeanOn, yes. Unlike random chat apps, LeanOn listeners are vetted, trained, and bound by a confidentiality agreement. They are not random strangers — they are peer listeners who have applied, been reviewed, and specifically trained to hold space for difficult conversations. You can be anonymous; they are accountable.' },
    },
    {
      '@type': 'Question',
      name: 'Why would I want to talk to a stranger instead of someone I know?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because people who know you come with history, stakes, and social consequences. When you tell a friend something difficult, you often end up managing their reaction too. A peer listener on LeanOn has no connection to your life, no prior opinions about the people you mention, and no risk of the conversation going further. That creates a kind of honesty that is often not available with people close to you.' },
    },
    {
      '@type': 'Question',
      name: 'What can I talk about with a stranger on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Anything you need to get off your chest. Work stress, a fight with a partner, loneliness, anxiety, a decision you are wrestling with, something you cannot tell the people around you, something you just need to say out loud. There is no topic too small and no threshold of severity required. If something is pressing on you, that is enough.' },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn different from random stranger chat apps?',
      acceptedAnswer: { '@type': 'Answer', text: 'Completely different. Random chat apps connect you with unvetted strangers whose intentions are unknown. LeanOn is a platform specifically for emotional support — every listener has been reviewed, trained in active listening and supportive conversation, and has agreed to maintain your confidentiality. You are not talking to a random person. You are talking to someone who chose this role and knows how to hold it.' },
    },
    {
      '@type': 'Question',
      name: 'Will the stranger I talk to judge me?',
      acceptedAnswer: { '@type': 'Answer', text: 'Peer listeners on LeanOn are specifically trained in non-judgmental listening. Part of what makes them effective is the absence of judgment — they are not there to evaluate you, advise you, or form opinions about your choices. They are there to hear what you need to say and to be present with you through it. People consistently report feeling received rather than assessed.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I start talking to someone?',
      acceptedAnswer: { '@type': 'Answer', text: 'Very quickly. Browse available listeners, pick someone whose profile feels right, book the session — most people are connected within two to three minutes. There is no appointment, no intake form, no waiting list. If you need to talk now, you can.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to a Stranger Online', item: 'https://www.leanon.app/talk-to-stranger-online-india' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;--red:#E53E3E;}
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
  .compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  @media(max-width:540px){.compare-grid{grid-template-columns:1fr;}}
  .compare-card{border-radius:16px;padding:20px;border:1.5px solid var(--border);}
  .compare-card.bad{background:#FFF5F5;border-color:#FED7D7;}
  .compare-card.good{background:#F0FFF4;border-color:#9AE6B4;}
  .compare-card h3{font-size:15px;font-weight:800;margin-bottom:12px;}
  .compare-card.bad h3{color:var(--red);}
  .compare-card.good h3{color:#276749;}
  .compare-card ul{padding-left:16px;list-style:none;margin:0;}
  .compare-card ul li{font-size:14px;color:#3A6070;margin-bottom:6px;line-height:1.6;}
  .compare-card.bad ul li::before{content:"✗ ";color:var(--red);font-weight:800;}
  .compare-card.good ul li::before{content:"✓ ";color:#38A169;font-weight:800;}
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

export default function TalkToStrangerOnlineIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Talk to a Stranger Online</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Vetted · Trained · Confidential · Not Random</p>
          <h1>Sometimes the Best Listener Is Someone Who <em>Doesn&apos;t Know You</em></h1>
          <p className="lead">No history. No stakes. No social consequences. A real person who is there entirely for you — and who will never bring it up again, because they have no way to.</p>
          <a href="/browse" className="cta-hero">Talk to someone now →</a>
        </div>

        <div className="section">
          <h2>Why a Stranger? The Train Conversation Phenomenon</h2>
          <p>There is a reason people tell things to strangers on trains that they have not told their closest friends. Something about the combination of presence and no-consequences creates a different kind of honesty. You can say the unedited version. You can say the thing that makes you look bad. You can express the feeling you would normally soften for an audience who knows you.</p>
          <p>The conversation ends and you go your separate ways. But something has shifted — the thing you were carrying is lighter. This is not a bug in how humans work. It is a feature that most people never deliberately access.</p>
          <p>LeanOn makes that conversation available, on demand, with someone who has specifically trained to hold it.</p>
        </div>

        <div className="section">
          <h2>Not a Random Chat App. Something Much Better.</h2>
          <div className="compare-grid">
            <div className="compare-card bad">
              <h3>Random stranger chat</h3>
              <ul>
                <li>Unvetted, unknown users</li>
                <li>No training in listening</li>
                <li>No confidentiality</li>
                <li>Unpredictable, often unsafe</li>
                <li>No support context</li>
              </ul>
            </div>
            <div className="compare-card good">
              <h3>LeanOn peer listener</h3>
              <ul>
                <li>Reviewed and approved</li>
                <li>Trained in active listening</li>
                <li>Bound by confidentiality</li>
                <li>Safe, supportive space</li>
                <li>Here specifically for you</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>What Happens in the Conversation</h2>
          <p>You say what you need to say. The listener hears it — without judgment, without redirecting it to their own experience, without building a case or taking sides. They might ask a question to help you say more. They reflect back what they hear so you feel received.</p>
          <p>They do not give advice unless you ask. They do not tell you what you should have done. They are not there to solve anything. They are there to be present with you through it — and that presence, that quality of being genuinely heard by a real person, is what creates the shift.</p>
          <p>Most people feel meaningfully lighter within 15 minutes. Not because anything changed externally, but because the loop closed: the thing that was circling internally got said out loud, got received, and the brain registered that it was complete.</p>
        </div>

        <div className="section">
          <h2>Who Uses LeanOn for This</h2>
          <p>People who need to say something they cannot say in their regular life:</p>
          <ul>
            <li>The thing about a family member that would cause conflict if said directly</li>
            <li>The frustration at work that cannot be expressed to colleagues or managers</li>
            <li>The fear about the future that they are supposed to be handling</li>
            <li>The grief or sadness they have been managing for the people around them</li>
            <li>The thing from this morning that they have been carrying since 9 AM</li>
          </ul>
          <p>You do not need a crisis. You need a pressure that is building and no clean place to release it. That is enough to book a session.</p>
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
          <h2>The person who gets to hear the real version</h2>
          <p>Anonymous. Confidential. Available now. No history with you. No opinion about the people you mention. No risk of it going further. Just someone who will hear it.</p>
          <a href="/browse" className="btn-cta">Find a listener →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/need-to-vent-right-now">Vent right now →</a>
            <a href="/vent-to-someone-online">Vent online →</a>
            <a href="/having-a-bad-day">Having a bad day →</a>
            <a href="/just-had-a-fight">Just had a fight →</a>
            <a href="/support/anonymous-support">Anonymous support →</a>
            <a href="/chat-with-real-person">Chat with real person →</a>
          </div>
        </div>
      </div>
    </>
  )
}
