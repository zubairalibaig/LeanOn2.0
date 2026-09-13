import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone Free India — First 5 Minutes Free | LeanOn',
  description: 'First 5 minutes free on every session. No subscription, no commitment. Real peer listeners in India. Start now.',
  keywords: ['talk to someone free India', 'free emotional support India', 'free chat India mental health', 'talk to someone online free India'],
  alternates: { canonical: 'https://www.leanon.app/talk-to-someone-free-india', languages: { 'en-IN': 'https://www.leanon.app/talk-to-someone-free-india' } },
  openGraph: { title: 'Talk to Someone Free India — First 5 Minutes Free | LeanOn', description: 'First 5 minutes free on every session. No subscription, no commitment. Real peer listeners in India. Start now.', url: 'https://www.leanon.app/talk-to-someone-free-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is there really no subscription?', acceptedAnswer: {'@type': 'Answer', text: 'No. LeanOn does not have a subscription. You buy session credits when you want them and use them when you need them. There is no monthly fee and no auto-renewal.'}},
    {'@type': 'Question', name: 'What happens at the end of the 5 free minutes?', acceptedAnswer: {'@type': 'Answer', text: 'The session pauses and you are prompted to add credits to continue. The listener waits. If you decide not to continue, the session ends and you have paid nothing.'}},
    {'@type': 'Question', name: 'How much does it cost after the free 5 minutes?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160 for 15 minutes. You can extend in 15-minute increments.'}},
    {'@type': 'Question', name: 'Can I use the free trial more than once?', acceptedAnswer: {'@type': 'Answer', text: 'Each session begins with 5 free minutes. You can have as many sessions as you like &mdash; each one starts with the free 5 minutes.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Talk to Someone Free India', item: 'https://www.leanon.app/talk-to-someone-free-india' },
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

export default function TalkToSomeoneFreeIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Talk to Someone Free India</span></nav>
        <div className="hero">
          <p className="badge">Free Session · First 5 Minutes · India</p>
          <h1>First 5 minutes are free. <em>No subscription, no commitment.</em></h1>
          <p className="lead">Try a real peer listener for free. No credit card, no subscription. If the first 5 minutes help, continue. If not, you pay nothing.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>How the Free Session Works</h2>
          <p>Every session on LeanOn begins with 5 free minutes. You browse listeners who are online right now, choose one based on their profile, and start a session. For the first 5 minutes, there is no charge. If you find it useful and want to continue, you top up and continue the session. If not, you end it and pay nothing.</p>
          <p>There is no subscription, no automatic billing, no commitment. You pay for what you use, when you use it.</p>
        </div>
        <div className="section">
          <h2>What Happens in 5 Minutes</h2>
          <p>A lot, actually. The listener opens by creating a space for you to say what is on your mind. You begin. In 5 minutes, most people know whether this is the kind of conversation they need. If it feels right, continuing is simple. If it does not feel right, you end it &mdash; no charge, no obligation.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Try it. First 5 minutes free, always.</h2><p>Real peer listener. No subscription. From ₹160 if you continue.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/emotional-support-india">Emotional support India &rarr;</a>
            <a href="/need-to-vent-india">Need to vent &rarr;</a>
            <a href="/bad-day-india">Bad day India &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/browse">Browse listeners now &rarr;</a></div></div>
      </div>
    </>
  )
}
