import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'People Pleaser India — Exhausted from Saying Yes | LeanOn',
  description: 'You say yes to everything. You can\'t disappoint anyone. You\'ve forgotten what you actually want. Talk anonymously from ₹160.',
  keywords: ['people pleaser India', 'people pleasing India', 'can\'t say no India', 'approval seeking India', 'people pleasing exhaustion India'],
  alternates: { canonical: 'https://www.leanon.app/people-pleaser-india', languages: { 'en-IN': 'https://www.leanon.app/people-pleaser-india' } },
  openGraph: { title: 'People Pleaser India — Exhausted from Saying Yes | LeanOn', description: 'You say yes to everything. You can\'t disappoint anyone. You\'ve forgotten what you actually want. Talk anonymously from ₹160.', url: 'https://www.leanon.app/people-pleaser-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is people pleasing a mental health issue?', acceptedAnswer: {'@type': 'Answer', text: 'It is a learned behaviour pattern that can be associated with anxiety, codependency, and low self-worth. It does not require a diagnosis to be worth addressing. If it is affecting your quality of life &mdash; your energy, your relationships, your sense of who you are &mdash; it is worth talking about.'}},
    {'@type': 'Question', name: 'Why do I feel guilty when I say no?', acceptedAnswer: {'@type': 'Answer', text: 'Because at some level, you learned that your worth was conditional on your usefulness to others. The guilt is the enforcement mechanism. It does not mean you have done something wrong &mdash; it means the pattern is strongly conditioned.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'People Pleaser India', item: 'https://www.leanon.app/people-pleaser-india' },
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

export default function PeoplePleaseIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>People Pleaser India</span></nav>
        <div className="hero">
          <p className="badge">People Pleasing · Approval Seeking · India</p>
          <h1>You've spent so long making everyone else comfortable that you've <em>lost track of yourself.</em></h1>
          <p className="lead">Saying yes to everything. Never disappointing anyone. Forgetting what you actually want. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>The Exhaustion of People Pleasing</h2>
          <p>People pleasing is not a personality trait. It is usually a learned response to an environment where your needs came secondary to others' emotions, or where conflict felt genuinely dangerous. The pattern that protected you then costs you now.</p>
          <p>The cost is real: exhaustion from maintaining everyone else's comfort, resentment that you cannot express, a growing disconnect from your own preferences and needs, and the hollow feeling of being liked without being known.</p>
        </div>
        <div className="section">
          <h2>Why It Is Hard to Change</h2>
          <p>Because changing the pattern feels like being selfish. You have spent years with a definition of a good person that includes never saying no. Saying no &mdash; even once, even about something small &mdash; activates enormous guilt. That guilt is not evidence that you are doing something wrong. It is evidence of how deeply the pattern is embedded.</p>
          <p>A LeanOn listener will not tell you to just start saying no. They will listen to what the pattern has cost you and help you see it clearly, at whatever pace feels right.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You matter too. Let someone help you remember that.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/low-self-esteem-india">Low self-esteem India &rarr;</a>
            <a href="/social-anxiety-india">Social anxiety India &rarr;</a>
            <a href="/imposter-syndrome-india">Imposter syndrome &rarr;</a>
            <a href="/feeling-invisible-india">Feeling invisible &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
