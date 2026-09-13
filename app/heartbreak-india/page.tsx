import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Heartbreak Support India — Talk to Someone Who Gets It | LeanOn',
  description: 'Heartbreak is physical. It\'s not \'just feelings\'. Talk to a peer listener who has been there — anonymous, from ₹160.',
  keywords: [
    'heartbreak India', 'breakup pain India', 'heartbroken India',
    'how to get over heartbreak India', 'breakup support India',
    'heartbreak recovery India', 'breakup pain relief India',
  ],
  alternates: { canonical: 'https://www.leanon.app/heartbreak-india', languages: { 'en-IN': 'https://www.leanon.app/heartbreak-india' } },
  openGraph: {
    title: 'Heartbreak Support India — Talk to Someone Who Gets It | LeanOn',
    description: 'Heartbreak is physical. It\'s not \'just feelings\'. Talk to a peer listener who has been there — anonymous, from ₹160.',
    url: 'https://www.leanon.app/heartbreak-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Heartbreak India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why does heartbreak hurt physically?', acceptedAnswer: { '@type': 'Answer', text: 'Because the brain processes social rejection through the same neural pathways as physical pain. This is not a metaphor. The chest pain, the inability to eat, the disrupted sleep, the physical heaviness — these are real physiological responses to emotional pain. Your body is reacting to the loss of something that was central to how it felt safe and connected. Telling yourself it is "just feelings" does not help and it is also inaccurate.' } },
    { '@type': 'Question', name: 'Why do some heartbreaks hit harder than others?', acceptedAnswer: { '@type': 'Answer', text: 'The intensity of heartbreak is usually proportional to the degree of hope and investment you put into the relationship — not necessarily its duration. A relationship that felt like it could be the one, or a person who represented a particular future you had imagined, leaves a gap that is proportional to the size of that hope. It is also affected by attachment style, past loss, and how much of your identity was bound up in the relationship.' } },
    { '@type': 'Question', name: 'Is LeanOn different from talking to a friend about a breakup?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Friends who care about you usually get exhausted after a point — they feel helpless, they run out of things to say, they subtly start redirecting you toward moving on. A LeanOn listener has infinite patience for the grief, has no personal exhaustion about the topic, and is specifically trained to hold difficult emotional conversations without trying to resolve them prematurely.' } },
    { '@type': 'Question', name: 'Does LeanOn offer support for breakups specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There is also a dedicated /support/breakup page for the process of getting through a breakup. This page specifically addresses the physical and emotional pain of heartbreak — the acute phase where you cannot think about anything else and the pain feels unbearable.' } },
    { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. The first 5 minutes are free. No subscription needed.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Heartbreak India', item: 'https://www.leanon.app/heartbreak-india' },
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

export default function HeartbreakIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Heartbreak India</span>
        </nav>
        <div className="hero">
          <p className="badge">Heartbreak &middot; Breakup Pain &middot; India</p>
          <h1>It actually hurts. Your chest, your sleep, your appetite. <em>This is real.</em></h1>
          <p className="lead">Heartbreak is not just feelings &mdash; it is a physical experience. Talk to a peer listener who has been there. Anonymous, from &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Heartbreak Actually Does</h2>
          <p>The brain processes the pain of heartbreak through the same neural pathways as physical injury. The chest heaviness is real. The inability to eat is real. The fragmented sleep, the intrusive thoughts that arrive every time your attention wanders, the moments where you forget and then remember again &mdash; all of this is your nervous system processing a major loss.</p>
          <p>Telling yourself to get over it does not help. What helps is being able to talk about it to someone who is not going to rush you past it, not going to tell you there are other fish in the sea, not going to exhaust their patience for the grief.</p>
        </div>
        <div className="section">
          <h2>What You Need Right Now</h2>
          <p>Right now, you need to be heard. Not fixed. Not redirected. Not told that you are better off without them. You need someone to sit with you in the pain of it and not try to make it stop.</p>
          <p>LeanOn listeners are trained to do exactly this. They hold the space for grief without trying to resolve it prematurely. A conversation that does not try to fix anything often does more than one that does.</p>
          <p>See also: <a href="/support/breakup" style={{color:'var(--teal)',fontWeight:700}}>Support for breakups</a> &mdash; for the process of getting through the days that follow.</p>
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
          <h2>Your pain is real. You deserve to be heard.</h2>
          <p>Anonymous peer support. No judgment. From &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/breakup">Breakup support &rarr;</a>
            <a href="/affair-recovery-india">Affair recovery &rarr;</a>
            <a href="/relationship-trust-issues-india">Trust issues &rarr;</a>
            <a href="/overthinking-relationship-india">Overthinking relationship &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
