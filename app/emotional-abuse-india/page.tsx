import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Abuse India — Talk to Someone Anonymously | LeanOn',
  description: 'Constant criticism, silent treatment, being made to feel crazy. Emotional abuse is real. Talk anonymously from ₹160. Not therapy — a real person who gets it.',
  keywords: [
    'emotional abuse India', 'emotional abuse in marriage India', 'emotional abuse partner India',
    'psychological abuse India', 'is my partner emotionally abusive India',
    'emotional abuse signs India', 'verbal abuse India',
  ],
  alternates: { canonical: 'https://www.leanon.app/emotional-abuse-india', languages: { 'en-IN': 'https://www.leanon.app/emotional-abuse-india' } },
  openGraph: {
    title: 'Emotional Abuse India — Talk to Someone Anonymously | LeanOn',
    description: 'Constant criticism, silent treatment, being made to feel crazy. Emotional abuse is real. Talk anonymously from ₹160.',
    url: 'https://www.leanon.app/emotional-abuse-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Emotional Abuse India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What counts as emotional abuse?',
      acceptedAnswer: { '@type': 'Answer', text: 'Emotional abuse includes patterns of behaviour that undermine your sense of self. This includes: consistent criticism and put-downs, silent treatment used as punishment, being told you are "too sensitive" or "imagining things", isolation from friends and family, threats, humiliation in public or private, and being made to feel responsible for the abuser\'s moods and reactions. None of this requires physical contact. It is real, it is damaging, and it is extremely common in Indian households where it is often normalised as "just how families are."' },
    },
    {
      '@type': 'Question',
      name: 'Why is emotional abuse hard to name?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because there is no bruise. When someone hits you, there is external evidence. When someone systematically erodes your confidence over years — through criticism, dismissal, silent treatment, and rewriting events — there is no evidence. In fact, the abuser typically offers a counter-narrative: you are too sensitive, you are overreacting, this is what you deserve. After long enough, you absorb that narrative and begin to doubt your own experience. This is by design.' },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to talk about this on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are completely anonymous and confidential. You do not use your full name. The listener is bound by a confidentiality agreement. Nothing leaves the session. LeanOn is specifically designed for situations where you cannot speak freely in the rest of your life.' },
    },
    {
      '@type': 'Question',
      name: 'Should I go to therapy instead?',
      acceptedAnswer: { '@type': 'Answer', text: 'Therapy is valuable and we always encourage it for situations involving sustained abuse. But therapy requires time, money, and readiness. Many people are not ready to enter a clinical setting yet — they are still figuring out whether what they are experiencing is real, and whether it has a name. LeanOn is often the first step: a space to say what you are going through out loud, feel validated, and think about what you want to do next.' },
    },
    {
      '@type': 'Question',
      name: 'What if I am in danger?',
      acceptedAnswer: { '@type': 'Answer', text: 'If you are in immediate danger or fear for your physical safety, please call NIMHANS on 080-46110007 or Tele-MANAS on 14416. Both are free and available 24/7. LeanOn peer support is for emotional processing — it is not a crisis intervention service.' },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. Your first 5-minute session is free — you pay only if you continue. No subscription, no appointment, no waiting.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Emotional Abuse India', item: 'https://www.leanon.app/emotional-abuse-india' },
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

export default function EmotionalAbuseIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Emotional Abuse India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Emotional Abuse &middot; Anonymous Support &middot; India</p>
          <h1>Nothing physical happened. But you feel broken. <em>That&apos;s enough.</em></h1>
          <p className="lead">Constant criticism, silent treatment, being made to feel crazy. Emotional abuse is real and it causes real damage. Talk to someone anonymously from &#x20b9;160. Not therapy &mdash; a real person who gets it.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What Emotional Abuse Looks Like</h2>
          <p>Emotional abuse is a pattern of behaviour, not a single incident. It wears you down gradually. Some common patterns in Indian relationships:</p>
          <ul>
            <li>Constant criticism — nothing you do is ever quite right, and it is delivered in a way that erodes rather than improves</li>
            <li>Silent treatment used as punishment — days of coldness to make you feel the consequences of something you did</li>
            <li>Being told you are too sensitive, imagining things, or overreacting every time you raise a concern</li>
            <li>Public humiliation disguised as a joke</li>
            <li>Isolation — subtle discouragement of your friendships or family visits</li>
            <li>Emotional volatility where you are always managing their mood to avoid an explosion</li>
          </ul>
        </div>

        <div className="section">
          <h2>Why It Is Hard to Name</h2>
          <p>There is no bruise. No moment you can point to and say: this is the evidence. The person doing it often presents themselves as the reasonable one, and you as the difficult, sensitive, dramatic one. After enough time, you begin to believe that version.</p>
          <p>In India, there is also a strong cultural pressure to keep family matters private and to "adjust." Women especially are expected to manage conflict through accommodation rather than direct expression. This means that naming emotional abuse as abuse &mdash; rather than as a personality clash or a phase &mdash; requires overcoming not just the abuser&apos;s narrative but the cultural one as well.</p>
        </div>

        <div className="section">
          <h2>Who You Can Talk To</h2>
          <p>You cannot always talk to family &mdash; they are often inside the same system, or they will tell you to adjust. You may not be ready for a therapist. You may not want the social consequences of telling friends.</p>
          <p>A LeanOn listener is a trained peer with no connection to your life. They will not judge. They will not tell you to adjust. They will not tell anyone. They will just listen while you say what you have been holding.</p>
          <p>That act of being genuinely heard &mdash; by someone with no stake in the outcome &mdash; is often the beginning of clarity.</p>
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
          <h2>You are not imagining it. You deserve to be heard.</h2>
          <p>Anonymous peer support. No judgment. From &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/gaslighting-india">Gaslighting India &rarr;</a>
            <a href="/toxic-relationship-india">Toxic relationship &rarr;</a>
            <a href="/controlling-relationship-india">Controlling relationship &rarr;</a>
            <a href="/feeling-trapped-india">Feeling trapped &rarr;</a>
            <a href="/support/relationship-stress">Relationship stress &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
