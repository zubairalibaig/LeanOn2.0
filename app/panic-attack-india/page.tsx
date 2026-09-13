import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Panic Attack India — What Happens After | LeanOn',
  description: 'The panic has passed. Now comes the shame, the exhaustion, the fear of the next one. Talk to someone anonymously from ₹160.',
  keywords: ['panic attack India', 'panic attack support India', 'panic disorder India', 'panic attack aftermath India'],
  alternates: { canonical: 'https://www.leanon.app/panic-attack-india', languages: { 'en-IN': 'https://www.leanon.app/panic-attack-india' } },
  openGraph: { title: 'Panic Attack India — What Happens After | LeanOn', description: 'The panic has passed. Now comes the shame, the exhaustion, the fear of the next one. Talk to someone anonymously from ₹160.', url: 'https://www.leanon.app/panic-attack-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'What causes panic attacks?', acceptedAnswer: {'@type': 'Answer', text: 'Panic attacks are the body\'s threat-response system (fight-or-flight) activating inappropriately &mdash; without a genuine external threat. This can be triggered by accumulated stress, specific phobias, hyperventilation, caffeine, or sometimes seemingly nothing at all. Understanding the mechanism does not always stop them, but it does reduce the catastrophic interpretation that something is seriously wrong with your health.'}},
    {'@type': 'Question', name: 'Should I see a doctor after a panic attack?', acceptedAnswer: {'@type': 'Answer', text: 'If you have not been evaluated for panic attacks before, yes &mdash; a doctor can rule out cardiac causes for the symptoms, which can look similar. Once physical causes are ruled out, ongoing support for panic can come from therapy (especially CBT) or peer support for the emotional processing component.'}},
    {'@type': 'Question', name: 'Is LeanOn a crisis service?', acceptedAnswer: {'@type': 'Answer', text: 'No. LeanOn is for peer emotional support. In an immediate crisis, call NIMHANS 080-46110007 or Tele-MANAS 14416. LeanOn is for processing the emotional aftermath of panic, anxiety, and other difficult experiences.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Panic Attack India', item: 'https://www.leanon.app/panic-attack-india' },
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

export default function PanicAttackIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Panic Attack India</span></nav>
        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>
        <div className="hero">
          <p className="badge">Panic Attack · Aftermath · India</p>
          <h1>The panic has passed. Now comes the shame, the exhaustion, <em>and the fear of the next one.</em></h1>
          <p className="lead">After a panic attack, the physical intensity fades but the emotional aftermath remains. Talk anonymously from ₹160. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Panic Attack Aftermath Feels Like</h2>
          <p>The acute panic passes. Your heart rate returns to normal. You can breathe again. But what follows is its own difficult experience: physical exhaustion, embarrassment about what just happened, the disorienting question of what caused it, and &mdash; most persistently &mdash; the hypervigilance about when it might happen again.</p>
          <p>That last part is often the worst. The fear of the fear. The constant body monitoring. The avoidance of situations that might trigger it. Over time, this can shrink your world significantly.</p>
        </div>
        <div className="section">
          <h2>Why Talking After Helps</h2>
          <p>Processing a panic attack verbally &mdash; describing what happened, what you were feeling before it, what triggered it &mdash; reduces the power it has over you. Unexpressed, it becomes a kind of unresolved event that the nervous system keeps returning to. Named and witnessed, it becomes something that happened, rather than something happening.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The worst has passed. Now let someone help you process it.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/anxiety-attack-india">Anxiety attack India &rarr;</a>
            <a href="/support/anxiety">Anxiety support &rarr;</a>
            <a href="/support/cant-sleep-anxiety">Can't sleep anxiety &rarr;</a>
            <a href="/crying-for-no-reason-india">Crying for no reason &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
