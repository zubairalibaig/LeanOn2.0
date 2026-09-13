import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Controlling Partner India — Anonymous Support | LeanOn',
  description: 'Checking your phone, monitoring your friends, deciding what you wear. A controlling relationship slowly erodes you. Talk anonymously from ₹160.',
  keywords: ['controlling partner India', 'controlling husband India', 'possessive partner India', 'jealous controlling relationship India', 'controlling relationship signs India'],
  alternates: { canonical: 'https://www.leanon.app/controlling-relationship-india', languages: { 'en-IN': 'https://www.leanon.app/controlling-relationship-india' } },
  openGraph: {
    title: 'Controlling Partner India — Anonymous Support | LeanOn',
    description: 'Checking your phone, monitoring your friends, deciding what you wear. A controlling relationship slowly erodes you. Talk anonymously from ₹160.',
    url: 'https://www.leanon.app/controlling-relationship-india',
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
      name: 'What is the difference between protective and controlling?',
      acceptedAnswer: { '@type': 'Answer', text: 'Protective behaviour comes from a place of genuine concern and respects your autonomy. Controlling behaviour comes from a need to manage uncertainty or threat and does not respect your autonomy. The clearest test: does it require you to give something up? Protective behaviour does not ask you to shrink. Controlling behaviour does.' },
    },
    {
      '@type': 'Question',
      name: 'Is a controlling relationship abusive?',
      acceptedAnswer: { '@type': 'Answer', text: 'Controlling behaviour exists on a spectrum. At the less severe end it is uncomfortable and erosive. At the more severe end it meets the definition of coercive control, which is a form of domestic abuse. The label matters less than the effect: if you feel like you have lost yourself in this relationship, that is a serious problem regardless of what it is called.' },
    },
    {
      '@type': 'Question',
      name: 'Can talking to someone help if I am not ready to leave?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most people are not ready to make a decision when they first reach out. LeanOn is not a service that pushes you toward decisions. It is a space to say what you are carrying, feel less alone in it, and think more clearly about what you want.' },
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
    { '@type': 'ListItem', position: 2, name: 'Controlling Partner India — Anonymous Support', item: 'https://www.leanon.app/controlling-relationship-india' },
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

export default function ControllingRelationshipIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Controlling Partner India — Anonymous Support</span>
        </nav>
        <div className="hero">
          <p className="badge">Controlling Relationship · Possessive Partner · India</p>
          <h1>It feels like love. Until you realise you've stopped <em>being yourself.</em></h1>
          <p className="lead">Checking your phone, monitoring your friends, deciding what you wear. Controlling behaviour erodes your sense of self gradually. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Controlling Behaviour Looks Like</h2>
          <p>Controlling behaviour in a relationship can look like: monitoring your phone or social media, needing to know where you are at all times, making decisions about your clothes or appearance, discouraging or limiting your friendships, creating situations where you feel guilty for spending time away from them, or reacting with anger or coldness whenever you assert independence.</p>
          <p>It is often framed as love — "I just worry about you," "I just want to be with you all the time." Over time, the line between care and control becomes invisible. And you have gradually become smaller: less connected to your own interests, your own friends, your own sense of who you are.</p>
        </div>
        <div className="section">
          <h2>Why It Is Hard to Name</h2>
          <p>Because it happened gradually. And because each individual instance seemed individually manageable. The jealousy felt like passion. The checking in felt like attentiveness. By the time the full pattern becomes visible, you have been in it for a long time and your sense of what is normal has shifted.</p>
          <p>A neutral outside view — someone who has not been inside the pattern with you — can sometimes see in one conversation what you have not been able to see over months.</p>
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
          <h2>You deserve to be yourself.</h2>
          <p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/emotional-abuse-india">Emotional abuse &rarr;</a>
            <a href="/gaslighting-india">Gaslighting India &rarr;</a>
            <a href="/toxic-relationship-india">Toxic relationship &rarr;</a>
            <a href="/feeling-trapped-india">Feeling trapped &rarr;</a>
            <a href="/support/relationship-stress">Relationship stress &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
