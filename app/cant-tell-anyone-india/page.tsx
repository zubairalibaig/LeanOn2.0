import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Can\'t Tell Anyone? Say It Here — Anonymous, No Judgment | LeanOn',
  description: 'The thing you\'ve been carrying alone because there\'s no safe person to say it to. Say it to a real person on LeanOn. Anonymous, private, from ₹160.',
  keywords: [
    'cant tell anyone india', 'something I cant tell anyone india', 'no one to confide in india',
    'too embarrassed to say india', 'shame india support', 'secret I cant share india',
    'keeping secrets alone india', 'too personal to share india',
  ],
  alternates: { canonical: 'https://www.leanon.app/cant-tell-anyone-india', languages: { 'en-IN': 'https://www.leanon.app/cant-tell-anyone-india' } },
  openGraph: {
    title: 'Can\'t Tell Anyone? Say It Here — Anonymous, No Judgment | LeanOn',
    description: 'The thing you\'ve been carrying alone because there\'s no safe person to say it to. Say it to a real person on LeanOn. Anonymous, private, from ₹160.',
    url: 'https://www.leanon.app/cant-tell-anyone-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Can\'t Tell Anyone India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I say literally anything?',
      acceptedAnswer: { '@type': 'Answer', text: 'Within reason, yes. You can say things that are embarrassing, things that are unfair, things you are not proud of, things you are ashamed of, things that involve difficult feelings about other people. If something you say raises a genuine concern about your safety or someone else&apos;s, the listener will gently mention professional support. Otherwise, the session is a container for exactly the things that are hardest to say.' },
    },
    {
      '@type': 'Question',
      name: 'Is it really anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name and phone number are all that exist on the platform. The listener knows only your first name. There is no email, no social profile, no connection to your offline identity. The session is a private voice call. What you say does not leave it.' },
    },
    {
      '@type': 'Question',
      name: 'Will the listener share what I said?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn listeners are bound by confidentiality. They do not share session content with anyone, including other LeanOn staff. The only exception would be a situation involving imminent risk to safety &mdash; but a conversation about something difficult or shameful does not trigger this. Your words stay in the session.' },
    },
    {
      '@type': 'Question',
      name: 'What if I\'m ashamed?',
      acceptedAnswer: { '@type': 'Answer', text: 'The shame is usually the thing that has kept you from saying it. The listener will not reinforce it. They will hear what you say without evaluation. The relief that follows saying something that has been suppressed by shame is often disproportionately large &mdash; bigger than the thing itself warranted. Shame grows in silence. It shrinks when it is witnessed without judgment.' },
    },
    {
      '@type': 'Question',
      name: 'How do I start?',
      acceptedAnswer: { '@type': 'Answer', text: 'Browse listener profiles, choose someone, and start the session. You can open with "there&apos;s something I haven&apos;t been able to say to anyone" and go from there. The listener will not rush you. There is no right way to start. Starting is enough.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Can\'t Tell Anyone India', item: 'https://www.leanon.app/cant-tell-anyone-india' },
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

export default function CantTellAnyoneIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Can&apos;t Tell Anyone India</span>
        </nav>
        <div className="hero">
          <p className="badge">Anonymous &middot; Private &middot; No Judgment</p>
          <h1>The thing you can&apos;t tell anyone. <em>Say it here.</em></h1>
          <p className="lead">There&apos;s a thing you&apos;ve been carrying &mdash; maybe for days, maybe for years. You haven&apos;t said it because there&apos;s no safe person. Too much history, too much judgement risk, too much to explain. This is the safe place.</p>
          <a href="/browse" className="cta-hero">Say it now &rarr;</a>
        </div>
        <div className="section">
          <h2>Why Some Things Feel Impossible to Say</h2>
          <p>The things that are hardest to say are not always the most dramatic. Often they are ordinary human experiences that have become loaded with shame, complication, or the fear of how they would land with the specific people who know you.</p>
          <p>Sometimes it is shame: you did something, felt something, or experienced something that you believe would change how people see you if they knew. Sometimes it is complexity: the situation involves so many layers of history and relationship that you cannot compress it into a conversation without misrepresenting it. Sometimes it is fear: of judgment, of advice that would miss the point, of the reaction changing the relationship.</p>
          <p>All of these are legitimate reasons not to have said the thing. They are not reasons to carry it indefinitely.</p>
        </div>
        <div className="section">
          <h2>How Anonymity Changes What Is Possible</h2>
          <p>In most conversations, you are editing yourself before you speak. You are anticipating the reaction, calculating the impact on the relationship, deciding what is safe to say and what is not. This happens automatically, below the surface &mdash; but it shapes what actually comes out dramatically.</p>
          <p>When there is no social cost &mdash; when the person you are talking to has no connection to your life, and what you say stays completely within the session &mdash; the editing stops. The real version of the thing comes out. The version you have been carrying rather than the version you have been presenting.</p>
          <p>That is what anonymity makes possible. Not just privacy &mdash; honesty. The kind that is only available when there is nothing to lose.</p>
        </div>
        <div className="section">
          <h2>What Happens When You Finally Say It</h2>
          <p>Even to a stranger. Even once. The relief that follows is often disproportionate to what you expected. The thing that felt enormous in silence is still significant when said &mdash; but it has changed shape. It is no longer just inside you. It has been witnessed. You are no longer alone inside it.</p>
          <p>Sometimes saying it produces clarity. You understand how you actually feel about it, separate from the pressure of holding it. Sometimes it produces grief. Sometimes just relief. All of these are better than the silence.</p>
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
          <h2>The safe person is here. Say it.</h2>
          <p>Anonymous. Real person. No judgment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/get-it-off-your-chest-india">Get it off your chest &rarr;</a>
            <a href="/stranger-friend-india">Talk to a stranger &rarr;</a>
            <a href="/rant-online-india">Rant online &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
