import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Just Had a Fight? Someone to Talk to Right Now in India | LeanOn',
  description: 'Had a fight with your partner, parent, or colleague and you\'re still reeling? Talk to a real peer listener in India right now — anonymous, no judgment, no advice unless you want it.',
  keywords: [
    'just had a fight India', 'had a fight with husband India',
    'had a fight with wife India', 'fight with partner India',
    'had argument with family India', 'fight with colleague India',
    'after a fight who to talk to India', 'fight with boss India',
    'had fight still upset India', 'need to talk after fight India',
    'processing fight with partner India', 'argument with mother India',
    'fight with parents India', 'I had a big fight India',
    'someone to talk to after argument India',
  ],
  alternates: { canonical: 'https://www.leanon.app/just-had-a-fight', languages: { 'en-IN': 'https://www.leanon.app/just-had-a-fight' } },
  openGraph: {
    title: 'Just Had a Fight? Someone to Talk to Right Now in India | LeanOn',
    description: 'Had a fight with your partner, parent, or colleague and you\'re still reeling? Talk to a real peer listener in India right now — anonymous, no judgment, no advice unless you want it.',
    url: 'https://www.leanon.app/just-had-a-fight',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Just Had a Fight' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do immediately after having a fight?',
      acceptedAnswer: { '@type': 'Answer', text: 'The worst time to process a fight is while you are still in it. The best first step is to get some distance — physical or temporal — and then get it out to someone who is not involved. Not to get validation, not to build a case, but to say what happened and how it made you feel, out loud, to someone who can hear it without a stake in the outcome. This alone often brings enough clarity to respond better than you would have otherwise.' },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel so shaky and can\'t focus after a fight?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because fights trigger the threat response — your nervous system genuinely experienced it as a threat, regardless of the stakes. Your body is running the same chemistry as if you had narrowly avoided something dangerous. The shaking, the inability to concentrate, the intrusive replaying — these are physiological, not dramatic. They resolve faster when you express the emotion rather than suppressing it.' },
    },
    {
      '@type': 'Question',
      name: 'Who should I talk to after a fight with my partner?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not your mutual friends — they have loyalties and opinions. Not your parents — they will worry or take sides, and you may regret what you told them later. Not your colleagues — professional boundary. A peer listener on LeanOn is a clean space: they have no connection to anyone in the situation, no opinion about who is right, and no interest beyond hearing you. That is exactly what you need in the immediate aftermath.' },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to vent about my partner or family member to a stranger?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — and it is more appropriate than venting to people who know them. A peer listener on LeanOn is bound by confidentiality and has no connection to your life. You can say exactly what happened, exactly how you feel about it, without editing, without consequences. Many people find that saying it to someone completely neutral helps them figure out how they actually feel, separate from who is right or wrong.' },
    },
    {
      '@type': 'Question',
      name: 'Will the listener take my side?',
      acceptedAnswer: { '@type': 'Answer', text: 'No — and that is a feature, not a bug. A peer listener is not there to validate your position. They are there to hear your experience of it. That is different — and often more useful — than having someone agree with you. You can process what happened more clearly when someone is holding space for your feelings without stacking fuel on the fire.' },
    },
    {
      '@type': 'Question',
      name: 'What if I\'m still angry and can\'t speak calmly?',
      acceptedAnswer: { '@type': 'Answer', text: 'You don\'t need to be calm. You can be angry. You can say \'I am furious right now and I just need someone to hear what happened.\' That is a fine place to start. A good listener will not ask you to organise it. They will receive it in whatever state it comes.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Just Had a Fight', item: 'https://www.leanon.app/just-had-a-fight' },
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

export default function JustHadAFightPage() {
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
          <span style={{color:'var(--navy)'}}>Just Had a Fight</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Talk Right Now · Anonymous · No Judgment</p>
          <h1>Just Had a Fight. <em>Still Shaking.</em> Need to Say It.</h1>
          <p className="lead">You had to hold it in. You could not react in front of everyone, or it was not the right moment, or the conversation ended and you are still sitting with it. Find a real person to talk to right now.</p>
          <a href="/browse" className="cta-hero">Talk to someone now →</a>
        </div>

        <div className="section">
          <h2>Why You Can&apos;t Tell Anyone Else</h2>
          <p>Think through who you would normally call. Your partner — they are the other party. Your mutual friends — they have loyalties, they will form opinions, and you will have to manage those opinions on top of everything else. Your family — they will worry, they will take sides, and they will remember this conversation for years in ways that may not help you.</p>
          <p>Your colleagues — professional consequences. Your manager — not a chance. And the people who are close enough to hear it without judgment are often too close to the situation to be clean about it.</p>
          <p>A peer listener on LeanOn has no connection to your life. No opinion about the person you just fought with. No interest in anything except hearing you. That is the clean option — and right now, that is exactly what you need.</p>
        </div>

        <div className="section">
          <h2>What Happens in Your Body After a Fight</h2>
          <p>The shaking, the inability to focus, the replay loop running on a background track while you try to send emails — these are not dramatic responses. They are physiological. A fight triggers the threat response: your nervous system genuinely treated it as a danger, regardless of what was actually at stake.</p>
          <p>Your body is flooded with stress hormones that were designed to help you survive a physical threat. They do not distinguish between a literal threat and an argument with someone you love. The chemistry is the same. And it resolves faster — significantly faster — when you express the emotion rather than suppressing it and waiting for it to fade.</p>
          <p>Suppressing it takes effort. It bleeds into everything. The meeting you go into right after, the next conversation you have, the way you respond to the next small frustration of the day — all of it happens from underneath the weight of something you are working to keep down.</p>
        </div>

        <div className="section">
          <h2>What a Vent Session Does After a Fight</h2>
          <p>You do not need to be calm to start. You do not need to have it organised or know what you want from the conversation. You can open with &ldquo;I just had a fight and I&apos;m still angry and I just need someone to hear what happened.&rdquo;</p>
          <p>A peer listener will not ask you to slow down or structure it. They will receive whatever comes out. The version that is angry and unedited and not entirely fair — that is fine. That is what the session is for.</p>
          <p>Once it is out, something usually shifts. Not a resolution. Not clarity about what to do next. Just a reduction in pressure. The thing that was pressing on everything from inside has been spoken. It stops pressing quite so hard. You can breathe. You can think again. You can decide how to respond from a less activated state.</p>
        </div>

        <div className="section">
          <h2>Common Fights That Bring People to LeanOn</h2>
          <p>These are the kinds of situations that land people on this page at 9 AM or noon on a Tuesday:</p>
          <ul>
            <li>&ldquo;Fight with my husband before he left for work and we haven&apos;t spoken since&rdquo;</li>
            <li>&ldquo;My mother-in-law said something in front of everyone and I had to smile&rdquo;</li>
            <li>&ldquo;Heated call with my manager and now I have to go back into another meeting with him&rdquo;</li>
            <li>&ldquo;Fight with my best friend — we said things and I don&apos;t know where we stand&rdquo;</li>
            <li>&ldquo;Argument with my father that has been building for years and finally exploded&rdquo;</li>
            <li>&ldquo;Had a fight via text this morning and now I&apos;m just sitting with it at my desk&rdquo;</li>
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
          <h2>You don&apos;t have to hold it in until tonight.</h2>
          <p>A listener is available right now — no appointment, no judgment, no advice unless you want it. Just say what happened.</p>
          <a href="/browse" className="btn-cta">Talk to someone now →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/relationship-stress">Relationship stress →</a>
            <a href="/support/marriage-loneliness">Marriage loneliness →</a>
            <a href="/need-to-vent-right-now">Vent right now →</a>
            <a href="/support/breakup">Breakup support →</a>
            <a href="/having-a-bad-day">Having a bad day →</a>
            <a href="/vent-to-someone-online">Vent online →</a>
          </div>
        </div>
      </div>
    </>
  )
}
