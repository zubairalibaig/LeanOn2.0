import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Social Anxiety India — Anonymous Support Without Judgment | LeanOn',
  description: 'Dreading social situations, overthinking every interaction, avoiding people. Social anxiety is real and common. Anonymous peer support from ₹160.',
  keywords: ['social anxiety India', 'social anxiety support India', 'shyness vs social anxiety India', 'social phobia India'],
  alternates: { canonical: 'https://www.leanon.app/social-anxiety-india', languages: { 'en-IN': 'https://www.leanon.app/social-anxiety-india' } },
  openGraph: { title: 'Social Anxiety India — Anonymous Support Without Judgment | LeanOn', description: 'Dreading social situations, overthinking every interaction, avoiding people. Social anxiety is real and common. Anonymous peer support from ₹160.', url: 'https://www.leanon.app/social-anxiety-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is social anxiety the same as introversion?', acceptedAnswer: {'@type': 'Answer', text: 'No. Introverts prefer less social stimulation and find it draining. Social anxiety involves fear and avoidance driven by anticipated judgment. An introvert who avoids parties because they prefer quiet is not anxious. Someone who avoids parties because they are terrified of saying something wrong and being judged has social anxiety.'}},
    {'@type': 'Question', name: 'Can peer support help with social anxiety?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. Processing the social anxiety &mdash; talking through specific situations that triggered it, what the fear is, where it comes from &mdash; with a non-judgmental listener reduces its hold. Many people find that talking about the anxiety is itself a useful counter-experience.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Social Anxiety India', item: 'https://www.leanon.app/social-anxiety-india' },
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

export default function SocialAnxietyIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Social Anxiety India</span></nav>
        <div className="hero">
          <p className="badge">Social Anxiety · Anonymous Support · India</p>
          <h1>Every interaction replayed. Every gathering dreaded. <em>You're exhausted from managing it alone.</em></h1>
          <p className="lead">Dreading social situations, overthinking every interaction. Social anxiety makes ordinary life exhausting. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Social Anxiety Actually Is</h2>
          <p>Social anxiety is not shyness. Shyness is a temperament trait &mdash; you take longer to warm up to new people. Social anxiety is a fear-based response to social evaluation that produces genuine physical symptoms (racing heart, flushing, nausea) and often leads to avoidance of situations that might trigger it.</p>
          <p>In India, social anxiety intersects with high-stakes social evaluation: joint family functions, work performance reviews, arranged marriage introductions. The situations where social anxiety is most triggered are often the ones that matter most.</p>
        </div>
        <div className="section">
          <h2>Why Online Peer Support Helps</h2>
          <p>One of the ironies of social anxiety is that you need social connection &mdash; being heard, understood, feeling less alone &mdash; but the anxiety makes it very hard to seek it in person. A text-based conversation with an anonymous listener offers connection without the social performance anxiety. You can take your time. You can think before responding. You are not being judged on how you come across.</p>
          <p>See also: <a href="/support/social-anxiety" style="color:#1A8FA0;font-weight:700">Social anxiety support</a> &mdash; the topic page.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You deserve connection without the performance.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/imposter-syndrome-india">Imposter syndrome &rarr;</a>
            <a href="/people-pleaser-india">People pleaser &rarr;</a>
            <a href="/low-self-esteem-india">Low self-esteem &rarr;</a>
            <a href="/support/social-anxiety">Social anxiety support &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
