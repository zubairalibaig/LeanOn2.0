import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'New Mom India — When It\'s Not All Joy | LeanOn',
  description: 'Sleep deprivation, identity shift, isolation, pressure to be happy. New motherhood is hard. Talk anonymously from ₹160.',
  keywords: ['new mom India', 'new mother stress India', 'first time mom anxiety India', 'new baby overwhelming India'],
  alternates: { canonical: 'https://www.leanon.app/new-mom-india', languages: { 'en-IN': 'https://www.leanon.app/new-mom-india' } },
  openGraph: { title: 'New Mom India — When It\'s Not All Joy | LeanOn', description: 'Sleep deprivation, identity shift, isolation, pressure to be happy. New motherhood is hard. Talk anonymously from ₹160.', url: 'https://www.leanon.app/new-mom-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is it normal to struggle as a new mom?', acceptedAnswer: {'@type': 'Answer', text: 'Extremely normal. The combination of sleep deprivation, hormonal shift, identity change, and social pressure to appear grateful is genuinely very hard. The fact that others appear to be coping does not mean they actually are.'}},
    {'@type': 'Question', name: 'Can I talk about struggling with motherhood without feeling judged?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. A LeanOn listener will not respond with "but you should be grateful" or "it gets better." They will listen to what you are actually experiencing.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'New Mom India', item: 'https://www.leanon.app/new-mom-india' },
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

export default function NewMomIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>New Mom India</span></nav>
        <div className="hero">
          <p className="badge">New Mom · Motherhood · Postpartum Stress · India</p>
          <h1>You're supposed to be the happiest you've ever been. <em>You've never felt more alone.</em></h1>
          <p className="lead">Sleep deprivation, identity shift, isolation, pressure to perform joy. New motherhood in India is hard. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Nobody Tells You About New Motherhood</h2>
          <p>The narrative around new motherhood in India is almost entirely positive: it is the most beautiful thing, you will feel complete, this is what you were made for. When the reality is more complex &mdash; when you are exhausted, overwhelmed, grieving your former self, and not sure you are doing anything right &mdash; you feel broken in addition to everything else.</p>
          <p>The isolation compounds it. You are at home with a baby who cannot converse. Your partner is trying to help but does not fully understand. Your mother or mother-in-law offers help that comes with its own set of expectations. The loneliness of new motherhood is specific and profound.</p>
        </div>
        <div className="section">
          <h2>This Is Not Postpartum Depression Necessarily</h2>
          <p>Postpartum depression is a clinical condition that requires professional support &mdash; if you are experiencing it, please speak to a doctor. But much of what new mothers feel in India does not reach clinical threshold: it is the ordinary distress of an enormous transition that comes with no preparation, no acknowledgment, and no room to express anything other than gratitude.</p>
          <p>LeanOn is for that gap &mdash; the space between clinical need and just-needing-to-talk. See also: <a href="/support/postpartum-india" style={{color:"#1A8FA0",fontWeight:700}}>Postpartum support India</a>.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>New motherhood is hard. You are allowed to say that.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/support/postpartum-india">Postpartum India &rarr;</a>
            <a href="/support/mom-burnout-india">Mom burnout India &rarr;</a>
            <a href="/for-women">Support for women &rarr;</a>
            <a href="/feeling-invisible-india">Feeling invisible &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
