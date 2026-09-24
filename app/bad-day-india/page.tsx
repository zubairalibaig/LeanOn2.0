import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Having a Bad Day? Talk to Someone Right Now | LeanOn India',
  description: 'Everything went wrong. You just need to talk it out. A real person, right now, from ₹160. First 5 minutes free.',
  keywords: ['bad day India', 'having a bad day India', 'everything went wrong India', 'just want to vent India', 'talk to someone bad day India'],
  alternates: { canonical: 'https://www.leanon.app/bad-day-india', languages: { 'en-IN': 'https://www.leanon.app/bad-day-india' } },
  openGraph: { title: 'Having a Bad Day? Talk to Someone Right Now | LeanOn India', description: 'Everything went wrong. You just need to talk it out. A real person, right now, from ₹160. First 5 minutes free.', url: 'https://www.leanon.app/bad-day-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Do I need a specific reason to use LeanOn?', acceptedAnswer: {'@type': 'Answer', text: 'No. "I had a bad day and I need to talk to someone" is reason enough.'}},
    {'@type': 'Question', name: 'How quickly can I start a session?', acceptedAnswer: {'@type': 'Answer', text: 'Immediately. Browse listeners who are online right now and start a session. No appointment, no form, no assessment. The first 5 minutes are free.'}},
    {'@type': 'Question', name: 'What if I can\'t afford it?', acceptedAnswer: {'@type': 'Answer', text: 'Your first 5-minute session is free with no charge. Sessions start at ₹160 if you continue beyond that. There is no subscription.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Having a Bad Day? Talk to Someone Right Now', item: 'https://www.leanon.app/bad-day-india' },
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

export default function BadDayIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Having a Bad Day? Talk to Someone Right Now</span></nav>
        <div className="hero">
          <p className="badge">Bad Day · Vent · Talk Right Now · India</p>
          <h1>Everything went wrong today. <em>You just need someone to hear it.</em></h1>
          <p className="lead">Not therapy, not a lecture. Just a real person who will listen right now. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>Sometimes You Just Need to Say It Out Loud</h2>
          <p>Bad days are not always about one big thing. Sometimes it is the accumulation &mdash; the traffic, the email, the comment at lunch, the thing your partner said, the plan that fell through. Individually manageable. Together, suffocating.</p>
          <p>The most useful thing is often not advice or perspective. It is just someone to listen while you say all of it out loud. When it is outside you instead of inside, it stops pressing.</p>
        </div>
        <div className="section">
          <h2>No Appointment, No Commitment</h2>
          <p>You do not need to be in crisis. You do not need to have a serious mental health issue. You just need to talk. LeanOn is available right now &mdash; browse listeners who are online, start a session, the first 5 minutes are free. If it helps, continue. If not, you stop and pay nothing.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Start talking. Right now.</h2><p>Real person. No judgment. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/need-to-vent-india">Need to vent India &rarr;</a>
            <a href="/emotional-support-india">Emotional support India &rarr;</a>
            <a href="/talk-to-someone-free-india">First 5 minutes free &rarr;</a>
            <a href="/vent-to-someone-online">Vent online &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
