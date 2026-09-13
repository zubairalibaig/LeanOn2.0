import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Invisible India — Nobody Sees You | LeanOn',
  description: 'At home, at work, in the family — feeling unseen is one of the loneliest feelings. Talk to someone who will actually pay attention. From ₹160.',
  keywords: ['feeling invisible India', 'nobody notices me India', 'feeling unseen India', 'ignored by family India', 'feeling insignificant India'],
  alternates: { canonical: 'https://www.leanon.app/feeling-invisible-india', languages: { 'en-IN': 'https://www.leanon.app/feeling-invisible-india' } },
  openGraph: { title: 'Feeling Invisible India — Nobody Sees You | LeanOn', description: 'At home, at work, in the family — feeling unseen is one of the loneliest feelings. Talk to someone who will actually pay attention. From ₹160.', url: 'https://www.leanon.app/feeling-invisible-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is feeling invisible related to depression?', acceptedAnswer: {'@type': 'Answer', text: 'Often yes. Feeling unseen and unvalued is a major contributor to depression and low self-worth. It is also a common feature of depressive episodes. If the feeling is persistent and accompanied by other low-mood symptoms, please consider speaking to a mental health professional.'}},
    {'@type': 'Question', name: 'Why would talking to a stranger help?', acceptedAnswer: {'@type': 'Answer', text: 'Because the stranger has no prior model of you as invisible. They come to the conversation fresh, with genuine attention. Their experience of you is formed entirely by what you share &mdash; which is often very different from how you are received in contexts where a role or history has already been assigned to you.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Feeling Invisible India', item: 'https://www.leanon.app/feeling-invisible-india' },
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

export default function FeelingInvisibleIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Feeling Invisible India</span></nav>
        <div className="hero">
          <p className="badge">Feeling Invisible · Unseen · India</p>
          <h1>You're in the room. You're talking. And somehow nobody is <em>actually seeing you.</em></h1>
          <p className="lead">At home, at work, in the family &mdash; feeling unseen is one of the loneliest feelings there is. Talk to someone who will actually pay attention. From ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Feeling Invisible Means</h2>
          <p>Feeling invisible is not about being literally ignored. You are present. You participate. You contribute. But you are not received. The things you say do not land. Your needs are not noticed. Your feelings are not picked up on. You are in the picture but not in focus.</p>
          <p>This can happen in any context &mdash; a family where someone else is always more dramatic, a workplace where your contributions are absorbed without attribution, a marriage where your partner is physically present but not emotionally available.</p>
        </div>
        <div className="section">
          <h2>Why It Is One of the Loneliest Feelings</h2>
          <p>Because it is specifically the absence of being seen. Loneliness, in the straightforward sense, comes from being alone. Feeling invisible comes from being surrounded by people and still being alone. That gap &mdash; between presence and connection &mdash; is one of the most painful human experiences.</p>
          <p>A LeanOn listener will pay attention. They will track what you are saying, reflect it back, ask questions that go deeper. For someone who has been feeling invisible, the experience of being genuinely seen by another person &mdash; even a stranger &mdash; is often unexpectedly powerful.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You deserve to be seen. Let someone really look.</h2><p>Anonymous peer support. Genuine attention. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/low-self-esteem-india">Low self-esteem &rarr;</a>
            <a href="/people-pleaser-india">People pleaser &rarr;</a>
            <a href="/feeling-empty-inside-india">Feeling empty &rarr;</a>
            <a href="/support/loneliness">Loneliness support &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
