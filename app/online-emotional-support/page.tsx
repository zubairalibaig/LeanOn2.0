import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Online Emotional Support from Real People | LeanOn',
  description: 'Real peer listeners with lived experience, available 24/7. More human than AI, more accessible than therapy. No appointment, no judgment.',
  keywords: ['online emotional support', 'emotional support online', 'emotional support chat', 'peer emotional support online', 'online support chat', 'emotional support real person'],
  alternates: { canonical: 'https://www.leanon.app/online-emotional-support' },
  openGraph: { title: 'Online Emotional Support from Real People | LeanOn', description: 'Real peer listeners with lived experience, available 24/7. More human than AI, more accessible than therapy. No appointment, no judgment.', url: 'https://www.leanon.app/online-emotional-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What is online emotional support?', acceptedAnswer: { '@type': 'Answer', text: 'Online emotional support is talking to a real person about what you are going through — not to receive diagnosis or treatment, but to be genuinely heard. LeanOn peer listeners provide emotional support through text-based sessions, available 24/7, no appointment needed.' } },
  { '@type': 'Question', name: 'How is LeanOn different from an AI chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are real humans with lived experience. An AI generates responses that simulate understanding. A real person who has been through something similar actually knows what it feels like. Most people who try both describe AI emotional support as hollow — it mimics empathy but does not provide it.' } },
  { '@type': 'Question', name: 'How is this different from therapy?', acceptedAnswer: { '@type': 'Answer', text: 'Therapy is a clinical service with a licensed professional — appropriate for diagnosis and treatment. LeanOn is peer support: informal, accessible, and focused on being heard rather than treated. It is available right now, without an appointment, and is significantly more affordable.' } },
  { '@type': 'Question', name: 'Do I need a reason to use LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'No. You do not need to be in crisis or have a diagnosed condition. Feeling overwhelmed, lonely, anxious, or just needing to talk is sufficient. LeanOn is for anyone who needs to be heard.' } },
  { '@type': 'Question', name: 'Is it available right now?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn is available 24/7. Browse listeners who are currently online and start a session immediately. The first 5 minutes are free with no charge.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Online Emotional Support from Real People', item: 'https://www.leanon.app/online-emotional-support' },
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
  .pillars{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;margin-top:8px;}
  .pillar{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:20px;}
  .pillar-title{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .pillar-desc{font-size:13px;color:var(--gray);line-height:1.65;font-weight:500;}
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

export default function OnlineEmotionalSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Online Emotional Support from Real People</span></nav>
        <div className="hero">
          <p className="badge">Emotional Support &middot; Real People &middot; 24/7 &middot; No Appointment</p>
          <h1>More human than AI. <em>More accessible than therapy.</em></h1>
          <p className="lead">Real peer listeners with lived experience, available right now. No appointment, no judgment, no waiting room. The first 5 minutes are free — start talking in under a minute.</p>
          <a href="/browse" className="cta-hero">Find a listener now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Online Emotional Support Actually Means</h2>
          <p>Emotional support is not advice. It is not problem-solving. It is not diagnosis. It is having someone genuinely present while you say the things you have been holding &mdash; someone who receives what you share without immediately trying to fix or reframe it.</p>
          <p>This is harder to find than it sounds. Most people in your life &mdash; family, friends, partners &mdash; get uncomfortable when you stay in the feeling too long. They try to help by offering solutions, silver linings, or context. Which is kind. But it is not the same as being heard.</p>
          <p>LeanOn peer listeners are specifically trained in active listening. Their job in a session is not to fix you or advise you &mdash; it is to be genuinely present while you talk. That difference in intent changes everything.</p>
        </div>
        <div className="section">
          <h2>The Three Things LeanOn Is Built On</h2>
          <div className="pillars">
            <div className="pillar">
              <div className="pillar-title">Real humans</div>
              <div className="pillar-desc">Every listener is a real person who has applied and been screened. Lived experience, not credentials. They know what certain things feel like from the inside.</div>
            </div>
            <div className="pillar">
              <div className="pillar-title">No appointment</div>
              <div className="pillar-desc">Browse who is online right now and start immediately. No waitlist, no booking form, no assessment. The moment you need support is when you should get it.</div>
            </div>
            <div className="pillar">
              <div className="pillar-title">Anonymous</div>
              <div className="pillar-desc">Phone number and first name only. No last name, no photo, no social login. What you say stays between you and your listener.</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>When Online Emotional Support Helps Most</h2>
          <p>You are overwhelmed and need to say it out loud before you can even think about what to do. You have been holding something for weeks and have not had a safe place to put it. Your usual support people are part of the problem, or would worry, or would not understand. You need to talk now &mdash; not in two weeks when an appointment opens up. The thing is not a crisis but it is real and it is heavy.</p>
          <p>These are the exact moments LeanOn is designed for. No reason required. No minimum severity. If you need to talk, that is enough.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Real emotional support, right now.</h2><p>No AI. No appointment. No judgment. A real person with lived experience, available now. First 5 minutes free.</p><a href="/browse" className="btn-cta">Start talking &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/talk-to-someone-online">Talk to someone online &rarr;</a>
          <a href="/someone-to-talk-to">Need someone to talk to &rarr;</a>
          <a href="/loneliness-support-online">Loneliness support &rarr;</a>
          <a href="/peer-support">Peer support &rarr;</a>
          <a href="/emotional-support">Emotional support India &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
