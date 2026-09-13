import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Anxiety Attack India — Talk Someone Through It | LeanOn',
  description: 'Heart racing, can\'t breathe, doom feeling. Anxiety attacks are terrifying. After it passes, you need to talk. Anonymous support from ₹160.',
  keywords: ['anxiety attack India', 'anxiety attack support India', 'panic anxiety India', 'what to do after anxiety attack India'],
  alternates: { canonical: 'https://www.leanon.app/anxiety-attack-india', languages: { 'en-IN': 'https://www.leanon.app/anxiety-attack-india' } },
  openGraph: { title: 'Anxiety Attack India — Talk Someone Through It | LeanOn', description: 'Heart racing, can\'t breathe, doom feeling. Anxiety attacks are terrifying. After it passes, you need to talk. Anonymous support from ₹160.', url: 'https://www.leanon.app/anxiety-attack-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'What is the difference between an anxiety attack and a panic attack?', acceptedAnswer: {'@type': 'Answer', text: 'The terms are often used interchangeably. In clinical language, panic attacks are sudden intense fear responses with physical symptoms (racing heart, shortness of breath, dizziness). Anxiety attacks typically build more gradually. Both are frightening, both are real, and both leave an aftermath that deserves attention.'}},
    {'@type': 'Question', name: 'Why do I feel ashamed after an anxiety attack?', acceptedAnswer: {'@type': 'Answer', text: 'Because there is still significant stigma around visible emotional distress, especially in India where composure is valued. The shame is a cultural overlay on a physiological event &mdash; your nervous system did something outside your conscious control. The shame is not deserved.'}},
    {'@type': 'Question', name: 'Can peer support help with anxiety?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. For many people, having a regular space to process anxiety &mdash; to talk through what they are carrying, what triggered the attack, what the fear is &mdash; reduces the overall load and makes attacks less frequent. It is not therapy but it is genuinely useful.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Anxiety Attack India', item: 'https://www.leanon.app/anxiety-attack-india' },
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

export default function AnxietyAttackIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Anxiety Attack India</span></nav>
        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>
        <div className="hero">
          <p className="badge">Anxiety Attack · After the Storm · India</p>
          <h1>After the anxiety attack passes, there's a specific kind of exhaustion and shame. <em>You need to talk about it.</em></h1>
          <p className="lead">The attack has passed. Now comes the exhaustion, the confusion, and the fear of the next one. Talk to someone anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Happens After an Anxiety Attack</h2>
          <p>The acute phase passes but the aftermath is its own difficult experience. There is physical exhaustion from the physiological intensity of the attack. There is often shame &mdash; why did that happen? What does it mean about me? And there is the anticipatory anxiety about the next one, which can itself trigger more anxiety.</p>
          <p>Talking through what happened &mdash; what you were feeling before it, what it felt like during, what you are carrying now &mdash; can reduce the intensity of the aftermath and make the next one less likely to spiral.</p>
        </div>
        <div className="section">
          <h2>When to Seek Professional Help</h2>
          <p>If anxiety attacks are frequent, significantly impacting your daily functioning, or increasing in intensity over time, please consider speaking to a mental health professional. LeanOn peer support is for processing the emotional weight of anxiety &mdash; it is not a substitute for clinical care.</p>
          <p>In an immediate crisis, please call NIMHANS on 080-46110007 or Tele-MANAS on 14416. Both are free and 24/7.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You survived it. Now let someone help you process it.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/panic-attack-india">Panic attack India &rarr;</a>
            <a href="/support/anxiety">Anxiety support &rarr;</a>
            <a href="/support/cant-sleep-anxiety">Can't sleep anxiety &rarr;</a>
            <a href="/crying-for-no-reason-india">Crying for no reason &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
