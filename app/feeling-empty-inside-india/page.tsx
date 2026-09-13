import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Empty Inside India — Talk to Someone | LeanOn',
  description: 'Not sad, not angry — just hollow. Feeling empty inside is one of the hardest things to explain. Anonymous support from ₹160.',
  keywords: ['feeling empty inside India', 'emotional emptiness India', 'feel hollow India', 'numbness India', 'feeling nothing India'],
  alternates: { canonical: 'https://www.leanon.app/feeling-empty-inside-india', languages: { 'en-IN': 'https://www.leanon.app/feeling-empty-inside-india' } },
  openGraph: { title: 'Feeling Empty Inside India — Talk to Someone | LeanOn', description: 'Not sad, not angry — just hollow. Feeling empty inside is one of the hardest things to explain. Anonymous support from ₹160.', url: 'https://www.leanon.app/feeling-empty-inside-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is feeling empty a sign of depression?', acceptedAnswer: {'@type': 'Answer', text: 'Yes, emotional emptiness and numbness are classic features of depression. But they can also result from burnout, trauma, or prolonged emotional suppression. If the emptiness is persistent and affecting your functioning, please consider speaking to a mental health professional.'}},
    {'@type': 'Question', name: 'How does a peer listener help when I feel nothing?', acceptedAnswer: {'@type': 'Answer', text: 'By providing a witness. The experience of describing the emptiness to someone who is listening carefully &mdash; tracking what you are saying, asking questions that go deeper &mdash; often begins to create small movements in a state that has felt completely static. The emptiness rarely lifts in one conversation, but it begins to.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Feeling Empty Inside India', item: 'https://www.leanon.app/feeling-empty-inside-india' },
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

export default function FeelingEmptyInsideIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Feeling Empty Inside India</span></nav>
        <div className="hero">
          <p className="badge">Feeling Empty · Hollow · Emotional Numbness</p>
          <h1>Not sad. Not angry. Just... <em>hollow.</em></h1>
          <p className="lead">Emotional emptiness is harder to explain than sadness. And harder to ask for help with. Talk anonymously from ₹160 to someone who understands.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Feeling Empty Actually Is</h2>
          <p>Feeling empty is not the same as sadness. Sadness has content &mdash; there is something to cry about. Emptiness is the absence of feeling. You go through your day, you respond appropriately, you function. But inside there is nothing connecting you to any of it. Nothing lands. Nothing feels real.</p>
          <p>This experience is common and it has many possible causes: depression, trauma, burnout, the aftermath of a significant loss, the numbing that comes from years of suppressing emotions. Whatever the cause, it deserves to be named and heard.</p>
        </div>
        <div className="section">
          <h2>Why It Is Hard to Ask for Help</h2>
          <p>Because you cannot easily describe it. "I feel sad" gives someone something to respond to. "I feel nothing" is harder. People tend to respond by trying to cheer you up &mdash; suggesting activities, pointing to things you have to be grateful for. This misses the point entirely. What you need is not cheering up. You need to be heard.</p>
          <p>A LeanOn listener will not try to cheer you up. They will try to understand what you are describing and hold space for it. See also: <a href="/support/feeling-empty" style="color:#1A8FA0;font-weight:700">Support for feeling empty</a> &mdash; the topic page.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You are not broken. You are carrying something.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/support/feeling-empty">Feeling empty support &rarr;</a>
            <a href="/no-motivation-india">No motivation &rarr;</a>
            <a href="/crying-for-no-reason-india">Crying for no reason &rarr;</a>
            <a href="/support/emotional-numbness">Emotional numbness &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
