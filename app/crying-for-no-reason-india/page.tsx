import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Crying for No Reason India — Talk to Someone | LeanOn',
  description: 'Random crying, tears at your desk, no idea why. You\'re not broken — you\'re carrying something. Talk anonymously from ₹160.',
  keywords: ['crying for no reason India', 'randomly crying India', 'crying without reason India', 'unexplained tears India', 'why am I crying India'],
  alternates: { canonical: 'https://www.leanon.app/crying-for-no-reason-india', languages: { 'en-IN': 'https://www.leanon.app/crying-for-no-reason-india' } },
  openGraph: { title: 'Crying for No Reason India — Talk to Someone | LeanOn', description: 'Random crying, tears at your desk, no idea why. You\'re not broken — you\'re carrying something. Talk anonymously from ₹160.', url: 'https://www.leanon.app/crying-for-no-reason-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is crying for no reason a sign of depression?', acceptedAnswer: {'@type': 'Answer', text: 'Sometimes. Unexplained crying is one symptom of depression, but it is also a symptom of anxiety, emotional exhaustion, grief, and unprocessed stress. You cannot diagnose yourself from a single symptom. What matters is the broader pattern &mdash; how you are generally, whether you feel functional, whether things feel hopeless or just temporarily heavy.'}},
    {'@type': 'Question', name: 'Should I be worried?', acceptedAnswer: {'@type': 'Answer', text: 'Not necessarily. But it is worth paying attention to. If it is happening frequently and you genuinely do not know why, something is asking for your attention. LeanOn is a good first step &mdash; a conversation that helps you begin to identify what you are actually carrying.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Crying for No Reason India', item: 'https://www.leanon.app/crying-for-no-reason-india' },
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

export default function CryingForNoReasonIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Crying for No Reason India</span></nav>
        <div className="hero">
          <p className="badge">Unexplained Crying · Emotional Overwhelm · India</p>
          <h1>You're at your desk. Or in the bathroom. And you're crying and <em>you don't even know why.</em></h1>
          <p className="lead">Random crying is not a sign of weakness. It is a sign that something has been building. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>Why You Might Be Crying Without Knowing Why</h2>
          <p>Unexplained crying usually is not actually unexplained &mdash; it is just that the cause is not immediately visible to you. It is often the accumulation of things that have not been named or processed: stress that has been pushed down, grief that has not had space, exhaustion that has not been acknowledged, loneliness that has been normalized.</p>
          <p>The body holds what the mind has not had space to process. When the pressure builds past a certain point, it finds its own release. Crying for no reason is often the body saying: you need to pay attention to something.</p>
        </div>
        <div className="section">
          <h2>What To Do With It</h2>
          <p>The most useful thing is not to push it down again. Something is trying to surface. A conversation with someone who will listen without trying to fix it or explain it away can help you find out what it is.</p>
          <p>LeanOn listeners are trained to hold space for exactly this kind of conversation &mdash; where you do not know where to start, where the feelings are not yet formed into words, where you just need someone present while you figure out what is actually happening.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Something is asking for your attention. Let someone help you hear it.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/no-motivation-india">No motivation India &rarr;</a>
            <a href="/feeling-empty-inside-india">Feeling empty inside &rarr;</a>
            <a href="/support/anxiety">Anxiety support &rarr;</a>
            <a href="/support/emotional-exhaustion">Emotional exhaustion &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
