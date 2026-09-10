import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Overwhelmed? You\'re Not Broken — You Just Need to Be Heard | LeanOn',
  description: 'Feeling overwhelmed, exhausted, or like you can\'t cope? Talk to a real peer listener — anonymous, no judgment, available 24/7 across India. First 5 min free.',
  keywords: [
    'feeling overwhelmed India', 'overwhelmed and don\'t know why India',
    'feeling overwhelmed all the time India', 'everything feels too much India',
    'can\'t cope India', 'overwhelmed for no reason India',
    'feeling overwhelmed at work India', 'overwhelmed with life India',
    'feeling overwhelmed and anxious India', 'why do I feel overwhelmed India',
    'emotionally overwhelmed India', 'overwhelmed and exhausted India',
    'too much to handle India', 'feeling overwhelmed support India',
    'talk to someone when overwhelmed India',
  ],
  alternates: { canonical: 'https://www.leanon.app/feeling-overwhelmed-india', languages: { 'en-IN': 'https://www.leanon.app/feeling-overwhelmed-india' } },
  openGraph: {
    title: 'Feeling Overwhelmed? You\'re Not Broken — You Just Need to Be Heard | LeanOn',
    description: 'Feeling overwhelmed, exhausted, or like you can\'t cope? Talk to a real peer listener — anonymous, no judgment, available 24/7 across India. First 5 min free.',
    url: 'https://www.leanon.app/feeling-overwhelmed-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Feeling Overwhelmed' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I talk to someone if I\'m overwhelmed but not in crisis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely — you do not need to be in crisis to talk to someone. Overwhelm is one of the most common reasons people reach out to peer listeners on LeanOn. You do not need a dramatic reason or a single identifiable cause. Feeling like too much is piling up — that is a completely valid reason to reach out. Many people find the most useful conversations happen before things become a crisis, not after.' },
    },
    {
      '@type': 'Question',
      name: 'What if I can\'t explain why I\'m overwhelmed?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is more common than you might think — and it is completely fine. Overwhelm often does not have one clean cause. It is the accumulation of many small things over time. You do not need to know the reason, and you do not need to arrive with an explanation. You can say "I don\'t even know where to start" — and that is a fine place to start. Listeners on LeanOn are trained to sit with ambiguity and help you find the shape of what you\'re carrying.' },
    },
    {
      '@type': 'Question',
      name: 'Is it confidential?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions on LeanOn are fully anonymous — you do not need to share your name, your job, your location, or any identifying information. What you say in a session stays in the session. Listeners are bound by a strict confidentiality commitment and are not connected to your employer, your family, or any institution. You can say anything without consequence.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a session take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions are available in 15, 30, or 45-minute slots — you choose what feels right. Most people experiencing overwhelm find that a 15-minute session is enough to get the weight out and return to their day from a lower-pressure state. There is also a free 5-minute trial if you want to check how it feels before committing to a session.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Feeling Overwhelmed', item: 'https://www.leanon.app/feeling-overwhelmed-india' },
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
  .cta-buttons{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-cta-outline{display:inline-block;background:transparent;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:2px solid rgba(255,255,255,0.45);}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .related a{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);display:block;}
  .related a:hover{border-color:var(--teal);color:var(--teal);}
  .feel-list{list-style:none;padding-left:0;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;}
  @media(max-width:480px){.feel-list{grid-template-columns:1fr;}}
  .feel-list li{background:var(--light);border:1.5px solid var(--border);border-radius:12px;padding:12px 16px;font-size:14px;font-weight:600;color:#3A6070;line-height:1.5;}
  .feel-list li::before{content:'·';color:var(--teal);font-weight:900;margin-right:8px;}
`

export default function FeelingOverwhelmedPage() {
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
          <span style={{color:'var(--navy)'}}>Feeling Overwhelmed</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Anonymous · No Judgment · Available 24/7</p>
          <h1>Everything Feels Like <em>Too Much</em> Right Now</h1>
          <p className="lead">It is not one big thing. It is everything — the unanswered messages, the unfinished tasks, the conversation you keep replaying, the expectations you cannot meet, the tiredness you cannot shake. It has been building quietly for a while, and now even small things feel impossible to carry.</p>
          <a href="/auth" className="cta-hero">Talk to someone now →</a>
        </div>

        <div className="section">
          <h2>The Pile-Up Nobody Talks About</h2>
          <p>Overwhelm rarely announces itself as one clear problem. It creeps in as a feeling that everything is slightly behind, slightly undone, slightly too much — and you cannot point to any single cause, which makes it harder to explain to anyone, including yourself.</p>
          <p>You want to explain it to someone, but where do you even begin? It is the work thing, and the family thing, and the money thing, and the way you have been feeling about yourself lately, and the fact that you cannot seem to get enough sleep, and the messages you have been putting off responding to for three weeks. It is everything at once and somehow also nothing specific enough to name.</p>
          <p>That namelessness is part of what makes it so heavy. You cannot solve something you cannot articulate. And you cannot articulate it because you have not had anyone to talk it through with.</p>
        </div>

        <div className="section">
          <h2>What Overwhelm Actually Feels Like</h2>
          <p>If any of these sound familiar, you are not alone — and you are not exaggerating:</p>
          <ul className="feel-list">
            <li>Can&apos;t focus on anything for more than a few minutes</li>
            <li>Keep putting things off, even simple ones</li>
            <li>Feel behind on everything, always</li>
            <li>Snapping at people you love for small reasons</li>
            <li>Can&apos;t sleep, or sleeping too much</li>
            <li>Nothing feels manageable right now</li>
            <li>Checking your phone constantly but not actually doing anything</li>
            <li>Feeling vaguely guilty all the time</li>
          </ul>
          <p>These are not signs of weakness or failure. They are signs that you have been holding too much, for too long, without anywhere to put it down.</p>
        </div>

        <div className="section">
          <h2>Why Talking Helps When You&apos;re Overwhelmed</h2>
          <p>When everything is piling up inside your head, it keeps circling. You think about the same things in the same loops — rehearsing conversations, running through your task list, worrying about what you should have done differently. The inside of your head is very loud, and nothing gets resolved because nothing gets released.</p>
          <p>Talking to another person changes that. Getting it out of your head — spoken aloud, received by someone who is genuinely listening — interrupts the loop. You are no longer containing something; you are sharing it. And when something is shared, it stops pressing on everything from underneath.</p>
          <p>You do not need to solve anything in the conversation. You do not need a plan or an insight or a breakthrough. Sometimes all you need is to have someone hold the weight with you for a while — and discover that the weight actually gets lighter when it is not yours alone to carry.</p>
        </div>

        <div className="section">
          <h2>You Don&apos;t Need to Have It Figured Out to Start Talking</h2>
          <p>One of the things that stops people from reaching out is the feeling that they do not have a clear enough reason. That they need to have a coherent story, a specific problem, a reason that justifies taking up someone&apos;s time.</p>
          <p>You do not.</p>
          <p>It is completely fine to start a session with &quot;I don&apos;t even know where to begin.&quot; That sentence is a beginning. Listeners on LeanOn are trained for exactly this — not to rush you toward a point, not to ask you to explain yourself, but to sit with you in the not-knowing and let the shape of what you are carrying emerge at its own pace.</p>
          <p>You do not need to arrive with clarity. You just need to arrive.</p>
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
          <h2>You don&apos;t have to keep carrying this alone.</h2>
          <p>A real peer listener is available right now — anonymous, judgment-free, and trained to sit with you exactly where you are. First 5 minutes are free.</p>
          <div className="cta-buttons">
            <a href="/auth" className="btn-cta">Talk to someone now →</a>
            <a href="/browse" className="btn-cta-outline">Browse listeners →</a>
          </div>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/emotional-exhaustion">Emotional exhaustion →</a>
            <a href="/support/cant-sleep-anxiety">Can&apos;t sleep / anxiety →</a>
            <a href="/need-to-vent-right-now">Vent right now →</a>
            <a href="/talk-about-my-problems-online">Talk about my problems →</a>
          </div>
        </div>
      </div>
    </>
  )
}
