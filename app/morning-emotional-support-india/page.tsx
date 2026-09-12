import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Morning Emotional Support India — Reset Before the Day Starts | LeanOn',
  description: 'Relationship fight before work. Anxiety about the day. Something from last night still sitting heavy. 15-minute morning session from ₹160. Reset and go.',
  keywords: [
    'morning emotional support india',
    'morning vent india',
    'talk to someone morning india',
    'emotional support before work india',
    'morning support session india',
    'start the day venting india',
    'morning relationship fight india',
    'process before work india',
  ],
  alternates: { canonical: 'https://www.leanon.app/morning-emotional-support-india', languages: { 'en-IN': 'https://www.leanon.app/morning-emotional-support-india' } },
  openGraph: {
    title: 'Morning Emotional Support India — Reset Before the Day Starts | LeanOn',
    description: 'Relationship fight before work. Anxiety about the day. Something from last night still sitting heavy. 15-minute morning session from ₹160. Reset and go.',
    url: 'https://www.leanon.app/morning-emotional-support-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Morning Emotional Support' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I do a session during my commute?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn sessions are voice calls. Many people book a session and take the call in the car, on a bus, or walking to the office. You need earphones and somewhere you can speak without being overheard. The commute is one of the most natural vent windows because you are already alone and already going over it in your head.' },
    },
    {
      '@type': 'Question',
      name: 'How long is a typical morning session?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 15-minute session is the most common morning choice. It is enough time to say what happened, have it received, and feel the pressure reduce before the day builds on top of it. If you have more time, the 30-minute session allows more space. But 15 minutes is specifically designed for this &mdash; quick, effective, done before you park.' },
    },
    {
      '@type': 'Question',
      name: 'Is it voice or chat?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voice. LeanOn sessions are voice calls between you and a real peer listener. This is deliberate &mdash; the spoken word moves emotion more effectively than text. It is also more natural for a commute: you are not typing while driving or on the metro, you are speaking.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to give your real name or any identifying information. The listener does not know who you are, where you work, or who you are talking about. You can say exactly what happened this morning without any risk of it reaching your partner, your workplace, or your family.' },
    },
    {
      '@type': 'Question',
      name: 'What if I only have 10 minutes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Book a 15-minute session and tell the listener at the start that you have limited time. They will calibrate to that. Many people find that even 10 minutes of genuine expression is enough to reduce the pressure significantly. The goal is not to resolve everything &mdash; it is to release enough to show up for the day.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Morning Emotional Support India', item: 'https://www.leanon.app/morning-emotional-support-india' },
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

export default function MorningEmotionalSupportIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Morning Emotional Support India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          &#x1F6A8; In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free &middot; 24/7 &middot; Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Voice Call &middot; 15 Minutes &middot; Anonymous &middot; From &#x20b9;160</p>
          <h1>Some mornings, you need <em>15 minutes</em> before the day can actually start.</h1>
          <p className="lead">A fight before the school run. Something from last night. A dread about what you&apos;re walking into. You can&apos;t show up fully while you&apos;re carrying that. Say it to someone &mdash; anonymously, in 15 minutes &mdash; and reset.</p>
          <a href="/browse" className="cta-hero">Start with 15 minutes &#x2192;</a>
        </div>

        <div className="section">
          <h2>Why Mornings Are the Hardest Time to Carry Something Alone</h2>
          <p>When you start the day carrying something unresolved, the entire day gets built on top of it. Every conversation you have, every meeting you sit in, every email you write &mdash; all of it happens from underneath the weight of the thing you have not been able to say.</p>
          <p>It is not just an abstract feeling. It affects your concentration, your patience, your ability to be present. The stress response that was activated in the morning &mdash; by a fight, by something heavy from the night before, by the dread of a conversation you know is coming &mdash; stays elevated for hours. It does not just clear when you walk into the office.</p>
          <p>The missing step, for most people, is a small window of expression before the day starts to build on top of the unresolved thing. Not therapy. Not resolution. Just saying it to someone who will actually hear it.</p>
        </div>

        <div className="section">
          <h2>When Morning Vent Sessions Happen</h2>
          <p>The three most common windows:</p>
          <ul>
            <li><strong>During the commute</strong> &mdash; earphones in, voice call in the car or on the metro, done before you arrive.</li>
            <li><strong>First 15 minutes at the desk</strong> &mdash; before the inbox, before the first meeting, a quick call that clears the head for the day.</li>
            <li><strong>Walking back from school drop-off</strong> &mdash; twenty minutes where you are alone and the morning is still running in your mind.</li>
          </ul>
          <p>None of these require special arrangements or a long block of time. They fit into the natural rhythm of the morning. You do not need to carve out an afternoon for this.</p>
        </div>

        <div className="section">
          <h2>What People Come to Process in the Morning</h2>
          <ul>
            <li>A fight before leaving home &mdash; something said, something done, something that did not get resolved before one of you walked out the door.</li>
            <li>Anxiety about a meeting or conversation at work that day.</li>
            <li>Something unresolved from the night before that is still sitting in the chest.</li>
            <li>Dreading a specific interaction &mdash; with a colleague, a family member, a partner who is cold this morning.</li>
            <li>Woke up with something heavy and cannot identify what it is but need to say it out loud to someone.</li>
          </ul>
        </div>

        <div className="section">
          <h2>What 15 Minutes Does</h2>
          <p>It is not therapy. It is not resolution. It is pressure release before the day builds on top of the unresolved thing.</p>
          <p>When you say what is sitting on you to a real person &mdash; not a journal, not a voice memo, not an AI &mdash; something shifts. The brain processes it differently when it is spoken to another human. The loop that has been running quiets. The pressure reduces. You can show up for the day from a slightly less activated state.</p>
          <p>The situation that caused the feeling does not disappear. But your capacity to carry the day while the situation exists is significantly better when you have had fifteen minutes to say it out loud and have it witnessed.</p>
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
          <h2>Reset before the day starts.</h2>
          <p>A listener is available now &mdash; no appointment, voice call, 15 minutes. Say what&apos;s sitting on you and get on with the day.</p>
          <a href="/browse" className="btn-cta">Start with 15 minutes &#x2192;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/just-had-a-fight">Just had a fight &#x2192;</a>
            <a href="/after-fight-with-partner-india">After a fight &#x2192;</a>
            <a href="/talk-during-commute-india">Talk during commute &#x2192;</a>
            <a href="/vent-about-relationship-india">Vent about relationship &#x2192;</a>
            <a href="/need-to-vent-right-now">Vent right now &#x2192;</a>
            <a href="/browse">Browse listeners &#x2192;</a>
          </div>
        </div>
      </div>
    </>
  )
}
