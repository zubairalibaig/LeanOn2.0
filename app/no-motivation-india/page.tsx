import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'No Motivation India — Can\'t Get Going? Talk to Someone | LeanOn',
  description: 'Can\'t start anything. Everything feels pointless. No motivation is more than laziness. Anonymous support from ₹160.',
  keywords: ['no motivation India', 'lack of motivation India', 'can\'t get motivated India', 'feeling unmotivated India', 'low motivation depression India'],
  alternates: { canonical: 'https://www.leanon.app/no-motivation-india', languages: { 'en-IN': 'https://www.leanon.app/no-motivation-india' } },
  openGraph: { title: 'No Motivation India — Can\'t Get Going? Talk to Someone | LeanOn', description: 'Can\'t start anything. Everything feels pointless. No motivation is more than laziness. Anonymous support from ₹160.', url: 'https://www.leanon.app/no-motivation-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is no motivation a sign of depression?', acceptedAnswer: {'@type': 'Answer', text: 'It can be. Loss of motivation, energy, and interest in things you used to care about are classic signs of depression. But they are also signs of burnout, anxiety, grief, and simple exhaustion. You cannot diagnose from this symptom alone. If the loss of motivation is persistent and accompanied by persistent low mood, please consider speaking to a mental health professional.'}},
    {'@type': 'Question', name: 'Can a 15-minute conversation help with motivation?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. Not by delivering a motivational speech &mdash; those do not work. But by helping you identify what is actually in the way. A good conversation does not add energy; it removes the weight that is blocking it.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'No Motivation India', item: 'https://www.leanon.app/no-motivation-india' },
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

export default function NoMotivationIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>No Motivation India</span></nav>
        <div className="hero">
          <p className="badge">No Motivation · Unmotivated · India</p>
          <h1>It's not laziness. You used to be able to do things. <em>Something has changed.</em></h1>
          <p className="lead">You know what you need to do but you cannot start. Everything feels heavier than it should. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Lack of Motivation Actually Means</h2>
          <p>In a culture that places enormous value on productivity and achievement, lack of motivation is often interpreted as a character flaw &mdash; laziness, weakness, ingratitude. This interpretation is almost always wrong.</p>
          <p>Persistent loss of motivation is usually a symptom of something else: accumulated stress that has depleted your capacity, unprocessed grief or loss, depression, burnout, or the absence of meaning in what you are doing. It is an information signal, not a character verdict.</p>
        </div>
        <div className="section">
          <h2>Why Talking Helps</h2>
          <p>When you describe what is happening &mdash; the specific things you cannot start, what happens when you try, what it feels like internally &mdash; to someone who is listening carefully, patterns become visible. What sounds like general laziness often turns out to be something more specific: grief about a lost relationship, anxiety about failure, exhaustion from years of performing for others.</p>
          <p>Naming the actual source of the problem is the beginning of addressing it.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Something is in the way. Let someone help you find it.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/crying-for-no-reason-india">Crying for no reason &rarr;</a>
            <a href="/feeling-empty-inside-india">Feeling empty &rarr;</a>
            <a href="/support/dont-want-to-get-out-of-bed">Can't get out of bed &rarr;</a>
            <a href="/support/emotional-exhaustion">Emotional exhaustion &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
