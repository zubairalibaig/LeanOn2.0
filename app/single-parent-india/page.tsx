import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Single Parent India — You\'re Carrying Two Roles. You Need Support Too. | LeanOn',
  description: 'Single parenting in India is exhausting and often completely invisible. Talk to someone who understands — anonymous peer support from ₹160.',
  keywords: [
    'single parent india', 'single mother india support', 'single father india',
    'divorced parent india', 'widowed parent india', 'single parenting india',
    'single mom india support', 'lone parent india',
  ],
  alternates: { canonical: 'https://www.leanon.app/single-parent-india', languages: { 'en-IN': 'https://www.leanon.app/single-parent-india' } },
  openGraph: {
    title: 'Single Parent India — You\'re Carrying Two Roles. You Need Support Too. | LeanOn',
    description: 'Single parenting in India is exhausting and often completely invisible. Talk to someone who understands — anonymous peer support from ₹160.',
    url: 'https://www.leanon.app/single-parent-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Single Parent India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this support for me or for my child?',
      acceptedAnswer: { '@type': 'Answer', text: 'For you. LeanOn is peer support for adults navigating difficult life circumstances. Your children&apos;s needs are enormous and your own are often sidelined in service of theirs. This is a space where your needs come first &mdash; without guilt.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. Nothing visible in your family home, nothing connected to your social circle. The session is entirely private.' },
    },
    {
      '@type': 'Question',
      name: 'What if I need to end the session abruptly?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is completely fine. Children interrupt. Emergencies happen. You can end any session at any point. There is no obligation to complete the session if something comes up. You will only be charged for the time you used.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160 for 15 minutes. The first 5 minutes of every session are free. There is no subscription, no recurring charge. You pay for what you use when you need it.' },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about parenting guilt?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, absolutely. Parenting guilt &mdash; the feeling that you are not enough, that the situation is affecting your children, that you should be managing better &mdash; is one of the most common and most painful experiences of single parenting. You can say all of it. The listener will not judge you.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Single Parent India', item: 'https://www.leanon.app/single-parent-india' },
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

export default function SingleParentIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Single Parent India</span>
        </nav>
        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>
        <div className="hero">
          <p className="badge">Single Parent Support &middot; India &middot; Anonymous</p>
          <h1>You&apos;re doing two jobs and getting credit for none of it. <em>You need somewhere to say that.</em></h1>
          <p className="lead">Single parenting in India comes with everything a couple does &mdash; and none of the backup. The exhaustion, the guilt, the loneliness, the financial pressure, the judgement. You need somewhere to put that down for 15 minutes.</p>
          <a href="/browse" className="cta-hero">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>The Specific Challenges of Single Parenting in India</h2>
          <p>Single parenting in India carries a specific social weight that does not exist in many other cultures. For single mothers particularly, societal stigma is real &mdash; divorced, separated, or widowed women face judgment that married women do not. The social support network that should fill the gap often withdraws instead.</p>
          <p>Financial pressure is almost universal. Running a household on one income, managing childcare, navigating work &mdash; all simultaneously, without a partner to absorb some of the load on the difficult days. The days when you are sick but cannot be sick. The days when there is too much happening at once and nobody to tag-team with.</p>
          <p>And the complete absence of time off. There is no weekend when you hand the children to the other parent. There is no break from being the responsible one. You are the responsible one, all the time, for as long as this phase of life lasts.</p>
        </div>
        <div className="section">
          <h2>What Nobody Tells Single Parents</h2>
          <p>You are allowed to be tired. Not as a prelude to &ldquo;but you&apos;re doing a great job&rdquo; &mdash; just as a straightforward statement of fact. The tiredness is real and enormous and does not need justification.</p>
          <p>You are allowed to struggle. Struggling does not mean you are failing your children. It means you are a human being under significant sustained pressure without the support systems most people take for granted.</p>
          <p>You are allowed to resent it sometimes. The life you imagined, the partnership that was supposed to be there, the ease that other families seem to have &mdash; it is okay to be angry about what did not work out. That anger is not a failure of gratitude. It is an honest response to a genuinely hard situation.</p>
        </div>
        <div className="section">
          <h2>How LeanOn Fits Single Parent Life</h2>
          <p>15 minutes. Any time of day. A voice call from your phone. You do not need to find a babysitter. You do not need to schedule something two weeks out. You do not need to commute anywhere. During school hours, during nap time, after bedtime &mdash; the session fits around your life rather than demanding you reorganise around it.</p>
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
          <h2>You carry so much. Put some of it down for 15 minutes.</h2>
          <p>Anonymous. Private. Available now. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/housewife-support-india">Housewife support &rarr;</a>
            <a href="/divorce-support-india">Divorce support &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/get-it-off-your-chest-india">Get it off your chest &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
