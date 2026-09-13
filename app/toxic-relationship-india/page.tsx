import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Am I in a Toxic Relationship? Anonymous Support India | LeanOn',
  description: 'Second-guessing everything, walking on eggshells, feeling worse than you did alone. Talk it out anonymously from ₹160.',
  keywords: [
    'toxic relationship India', 'toxic relationship signs India', 'am I in a toxic relationship India',
    'unhealthy relationship India', 'leave toxic relationship India',
    'toxic partner India', 'toxic marriage India',
  ],
  alternates: { canonical: 'https://www.leanon.app/toxic-relationship-india', languages: { 'en-IN': 'https://www.leanon.app/toxic-relationship-india' } },
  openGraph: {
    title: 'Am I in a Toxic Relationship? Anonymous Support India | LeanOn',
    description: 'Second-guessing everything, walking on eggshells, feeling worse than you did alone. Talk it out anonymously from ₹160.',
    url: 'https://www.leanon.app/toxic-relationship-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Toxic Relationship India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a relationship toxic?',
      acceptedAnswer: { '@type': 'Answer', text: 'A relationship is toxic when it consistently leaves you feeling worse than you would feel alone. That can look like: constant criticism that erodes your confidence, dynamics where you feel you are always walking on eggshells, a pattern where your needs are regularly dismissed or minimised, cycles of conflict and false resolution that never actually resolve, or simply a persistent sense that you have become smaller as a person since this relationship began. Toxic does not require anything dramatic or physical. It can be very quiet.' },
    },
    {
      '@type': 'Question',
      name: 'Why is it so hard to see a toxic relationship when you are in it?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because you are inside it. When something shifts gradually, it is almost impossible to notice from the inside. Each small thing feels individually manageable. The good moments are real, which makes the bad moments seem like exceptions. And there is usually a version of events the other person offers that makes your discomfort sound unreasonable. A neutral outside view can sometimes see in one conversation what takes the person inside months or years to recognise.' },
    },
    {
      '@type': 'Question',
      name: 'Why do friends give bad advice in these situations?',
      acceptedAnswer: { '@type': 'Answer', text: 'Friends mean well but they usually have one of two modes: they either validate everything you say (which is comforting but does not help you see clearly), or they push you toward a decision before you are ready. They have their own anxieties about relationships. They may project. They will remember what you told them and bring it up later in ways you cannot control. A neutral listener does not have any of this. They just help you hear yourself think.' },
    },
    {
      '@type': 'Question',
      name: 'Can a peer listener help me figure out if my relationship is toxic?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — not by diagnosing the relationship, but by helping you articulate your own experience. Often the clarity comes from simply saying things out loud to someone who is listening carefully and reflecting back what they hear. "It sounds like you feel afraid to express an opinion" lands differently than just thinking it. Naming it out loud makes it real in a way that internal rumination does not.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Completely. You use a first name. The listener is bound by a confidentiality agreement. Nothing you say leaves the session. This is especially important when the person you are talking about is also in your social circle.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes are free on every session. No subscription, no appointment needed.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Toxic Relationship India', item: 'https://www.leanon.app/toxic-relationship-india' },
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

export default function ToxicRelationshipIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Toxic Relationship India</span>
        </nav>

        <div className="hero">
          <p className="badge">Toxic Relationship &middot; Anonymous Support &middot; India</p>
          <h1>You don&apos;t need a diagnosis. <em>You need someone to help you think.</em></h1>
          <p className="lead">Second-guessing everything, walking on eggshells, feeling worse than you did alone. If any of this sounds familiar, you deserve a space to think it through. Anonymous peer support, from &#x20b9;160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Signs a Relationship Is Draining You</h2>
          <p>A toxic relationship does not always look dramatic from the outside. It can look like a normal relationship where one person is quietly diminishing. Some signs:</p>
          <ul>
            <li>You feel like you are always walking on eggshells, calibrating your words and behaviour to avoid a reaction</li>
            <li>After conversations with them, you feel worse than before — deflated, confused, or ashamed</li>
            <li>You have stopped doing things or seeing people who matter to you because of this relationship</li>
            <li>You regularly question your own perception of events</li>
            <li>You feel responsible for managing their emotions as well as your own</li>
            <li>You have become smaller — quieter, less confident, less like yourself</li>
          </ul>
          <p>None of these requires a label. They are just experiences. And they deserve to be spoken about.</p>
        </div>

        <div className="section">
          <h2>Why You Cannot See It Clearly From Inside</h2>
          <p>Every relationship has a story, and the person you are in a relationship with is also the co-author of that story. Over time, their version of events becomes part of your internal reality. What looks like toxicity to an outsider looks like a complicated but normal relationship to the person living it.</p>
          <p>There is also love. And history. And the sunk cost of everything you have already invested. These are not weaknesses — they are how relationships work. But they do make it very hard to assess the situation accurately from the inside.</p>
        </div>

        <div className="section">
          <h2>Why Friends Give Bad Advice Here</h2>
          <p>Friends who care about you typically have one of two responses: they fully take your side (which feels good but does not help you think clearly) or they try to play devil&apos;s advocate (which feels dismissive when you are in pain). Neither is what you need.</p>
          <p>What you need is someone who will hold the complexity — who will let you talk without either validating every complaint or challenging you to consider the other person&apos;s perspective before you have even finished processing your own feelings. A neutral listener does not have a stake in the outcome. They just help you hear yourself.</p>
        </div>

        <div className="section">
          <h2>How a Neutral Listener Helps</h2>
          <p>Sometimes just saying things out loud to someone who is carefully listening is enough to create clarity. You describe a pattern. The listener reflects it back. Suddenly you hear it from the outside for the first time. That clarity does not require a diagnosis or a label. It just requires being genuinely heard.</p>
          <p>LeanOn listeners are trained in this kind of listening. They will not push you toward conclusions. They will not label your relationship for you. They will help you find your own clarity at your own pace.</p>
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
          <h2>You deserve clarity. You deserve to be heard.</h2>
          <p>Anonymous peer support. No judgment. From &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/emotional-abuse-india">Emotional abuse India &rarr;</a>
            <a href="/gaslighting-india">Gaslighting India &rarr;</a>
            <a href="/controlling-relationship-india">Controlling relationship &rarr;</a>
            <a href="/cheating-partner-india">Cheating partner India &rarr;</a>
            <a href="/feeling-trapped-india">Feeling trapped India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
