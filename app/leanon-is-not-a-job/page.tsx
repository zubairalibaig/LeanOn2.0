import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Is LeanOn a Job? No — It Is a Support Service for Seekers | LeanOn',
  description: 'LeanOn is not a job, not a way to earn money online, and not a side income platform. It is a peer support service where people pay to talk to a real human listener. If you need someone to talk to, browse listeners now.',
  alternates: { canonical: 'https://www.leanon.app/leanon-is-not-a-job' },
  openGraph: {
    title: 'Is LeanOn a Job? No — It Is a Support Service for Seekers | LeanOn',
    description: 'LeanOn is a peer support platform for people who need someone to talk to. Not a job or income opportunity.',
    url: 'https://www.leanon.app/leanon-is-not-a-job',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'Is LeanOn a job?',
    a: 'No. LeanOn is a peer support platform where people who feel lonely, overwhelmed, or need someone to talk to can connect with a real human peer listener. The customer is the person who needs support — they pay to have a conversation. LeanOn is not a job, not a work-from-home opportunity, and not a side income platform.',
  },
  {
    q: 'Can I earn money on LeanOn?',
    a: 'LeanOn is designed for people who need emotional support, not for people looking to earn money. If you are searching for a job or side income, LeanOn is not the right service for you.',
  },
  {
    q: 'Is LeanOn a side hustle?',
    a: 'No. LeanOn is a support service for seekers — people who want to talk to a real person about loneliness, stress, relationships, or other everyday emotional challenges. It is not an income platform.',
  },
  {
    q: 'What is LeanOn actually for?',
    a: 'LeanOn is for people who feel lonely, overwhelmed, or simply need a real human conversation. You can browse peer listeners, choose who you want to talk to, and start a private text or voice session. Every new account gets one free 5-minute first session.',
  },
  {
    q: 'I heard LeanOn pays listeners — does that make it a job?',
    a: 'Peer listeners on LeanOn are compensated for completed sessions, but this is the operational model of a support service — not a job offer. LeanOn is a marketplace for emotional support, not an employment platform. The primary audience is seekers: people who pay to receive support.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: metadata.title,
      description: String(metadata.description),
      url: 'https://www.leanon.app/leanon-is-not-a-job',
      isPartOf: { '@type': 'WebSite', name: 'LeanOn', url: 'https://www.leanon.app' },
      about: { '@type': 'Thing', name: 'Peer emotional support' },
      audience: { '@type': 'Audience', audienceType: 'People seeking emotional support or human connection' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' },
        { '@type': 'ListItem', position: 2, name: 'LeanOn Is Not a Job', item: 'https://www.leanon.app/leanon-is-not-a-job' },
      ],
    },
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
  .page{max-width:760px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  h1{font-size:clamp(26px,5.5vw,40px);font-weight:900;color:var(--navy);line-height:1.18;margin-bottom:16px;}
  h1 em{color:var(--teal);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:620px;margin-bottom:36px;}
  .answer-box{background:var(--light);border-left:4px solid var(--teal);border-radius:0 16px 16px 0;padding:24px 28px;margin-bottom:40px;}
  .answer-box p{font-size:16px;line-height:1.8;font-weight:600;color:var(--navy);}
  .section{margin-bottom:48px;}
  h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:20px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:last-child{border-bottom:none;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-a{font-size:15px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:22px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
`

export default function LeanOnIsNotAJobPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>LeanOn Is Not a Job</span>
        </nav>

        <h1>LeanOn Is <em>Not</em> a Job</h1>
        <p className="lead">LeanOn is a peer support service for people who need someone to talk to — not a job, not an income opportunity, and not a side hustle.</p>

        <div className="answer-box">
          <p>LeanOn is for <strong>seekers</strong>: people who feel lonely, overwhelmed, or need a real human conversation about everyday emotional challenges. If you are looking for a job or a way to earn money online, LeanOn is not the right service for you.</p>
        </div>

        <div className="section">
          <h2>What LeanOn actually is</h2>
          <p style={{fontSize:16,lineHeight:1.8,color:'var(--gray)',marginBottom:16}}>LeanOn connects people who want emotional support with real human peer listeners — by private text or voice, with no appointment needed. The person who needs support is the customer. They browse listener profiles, choose who they want to talk to, and pay per session.</p>
          <p style={{fontSize:16,lineHeight:1.8,color:'var(--gray)'}}>Every new account gets one free 5-minute first session. Paid sessions start at ₹160 for 15 minutes. No subscriptions. No lock-in.</p>
        </div>

        <div className="section">
          <h2>Common questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.q}</p>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Need someone to talk to?</h2>
          <p>Browse peer listeners who are available right now. Private, real human conversations — by text or voice. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners →</a>
        </div>

        <div className="section" style={{textAlign:'center'}}>
          <p style={{fontSize:14,color:'var(--gray)'}}>
            <a href="/i-need-someone-to-talk-to" style={{color:'var(--teal)',fontWeight:800}}>I need someone to talk to →</a>
            {' · '}
            <a href="/browse" style={{color:'var(--teal)',fontWeight:800}}>Browse listeners →</a>
          </p>
        </div>
      </div>
    </>
  )
}
