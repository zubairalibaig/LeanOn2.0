import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Gaslighting India — Am I Being Gaslighted? Anonymous Support | LeanOn',
  description: 'Being told you\'re too sensitive, imagining things, overreacting. Gaslighting makes you doubt your own reality. Talk to someone who will validate what you\'re experiencing. From ₹160.',
  keywords: ['gaslighting India', 'am I being gaslighted India', 'gaslighting in marriage India', 'gaslighting partner India', 'gaslighting signs India', 'psychological manipulation India'],
  alternates: { canonical: 'https://www.leanon.app/gaslighting-india', languages: { 'en-IN': 'https://www.leanon.app/gaslighting-india' } },
  openGraph: {
    title: 'Gaslighting India — Am I Being Gaslighted? Anonymous Support | LeanOn',
    description: 'Being told you\'re too sensitive, imagining things, overreacting. Gaslighting makes you doubt your own reality. Talk to someone who will validate what you\'re experiencing. From ₹160.',
    url: 'https://www.leanon.app/gaslighting-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if I am being gaslighted?',
      acceptedAnswer: { '@type': 'Answer', text: 'Some signs: you regularly doubt your own memory of events that you were certain about; you feel confused after conversations about something specific; you find yourself apologising frequently without being clear why; you feel like you are never quite getting your version of events acknowledged; you feel less confident in your own judgment than you used to. None of these is conclusive alone, but together they describe the experience.' },
    },
    {
      '@type': 'Question',
      name: 'Can a peer listener help me figure this out?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Not by diagnosing the situation, but by listening carefully to what you describe and reflecting back what they hear. Often the person being gaslighted is the last to see it clearly — not because they are unintelligent, but because they are too close to it. An outside perspective that simply validates your experience can be clarifying.' },
    },
    {
      '@type': 'Question',
      name: 'Is this different from just having conflict with someone?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Normal relationship conflict involves two people with genuinely different perceptions of something, both of whom are trying to get their experience acknowledged. Gaslighting is one person consistently denying the other person\'s experience as a pattern. The key word is pattern — it happens repeatedly, across multiple topics, over time.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.' },
    }
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Gaslighting India — Am I Being Gaslighted? Anonymous Support', item: 'https://www.leanon.app/gaslighting-india' },
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

export default function GaslightingIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Gaslighting India — Am I Being Gaslighted? Anonymous Support</span>
        </nav>
        <div className="hero">
          <p className="badge">Gaslighting · Anonymous Support · India</p>
          <h1>You're not crazy. You're not overreacting. <em>You just need someone to confirm what you're feeling.</em></h1>
          <p className="lead">Being told you are too sensitive, imagining things, overreacting. Gaslighting makes you doubt your own reality. Talk to someone who will validate your experience. From ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Gaslighting Is</h2>
          <p>Gaslighting is a pattern of behaviour in which someone causes you to doubt your own perceptions, memory, or sanity. It involves being told that something did not happen when it did, that you are misremembering, that you are overreacting, that you are too sensitive, that everyone else thinks you are being unreasonable.</p>
          <p>The effect over time is a profound uncertainty about your own judgment. You begin to defer to their version of events because yours has been challenged so consistently. You apologise for your reactions. You start to believe that you are the problem.</p>
        </div>
        <div className="section">
          <h2>Why It Is So Disorienting</h2>
          <p>Because it targets the most fundamental thing: your trust in your own mind. Other forms of manipulation can be named and fought. Gaslighting undermines the very capacity you would use to fight back. By the time most people seek help, they are no longer sure whether they are being manipulated or whether they are simply difficult and confused.</p>
          <p>A neutral listener who hears what you are describing and reflects back "that sounds like a real pattern" — rather than "are you sure you are reading it right?" — is sometimes the first confirmation in a long time that you are not imagining things.</p>
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
          <h2>Your experience is real. You deserve to be heard.</h2>
          <p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/emotional-abuse-india">Emotional abuse &rarr;</a>
            <a href="/controlling-relationship-india">Controlling relationship &rarr;</a>
            <a href="/toxic-relationship-india">Toxic relationship &rarr;</a>
            <a href="/cheating-partner-india">Cheating partner &rarr;</a>
            <a href="/support/relationship-stress">Relationship stress &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
