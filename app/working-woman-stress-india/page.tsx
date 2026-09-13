import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Working Woman Stress India — You\'re Carrying Too Much | LeanOn',
  description: 'Career pressure, home responsibilities, guilt, comparison. Working women in India carry an invisible double shift. Anonymous support from ₹160.',
  keywords: ['working woman stress India', 'working woman burnout India', 'career and family balance India', 'professional woman anxiety India'],
  alternates: { canonical: 'https://www.leanon.app/working-woman-stress-india', languages: { 'en-IN': 'https://www.leanon.app/working-woman-stress-india' } },
  openGraph: { title: 'Working Woman Stress India — You\'re Carrying Too Much | LeanOn', description: 'Career pressure, home responsibilities, guilt, comparison. Working women in India carry an invisible double shift. Anonymous support from ₹160.', url: 'https://www.leanon.app/working-woman-stress-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is burnout different for working women in India?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. The specific stressors &mdash; the double shift, the guilt, the social comparison, the lack of acknowledgment &mdash; create a particular texture of burnout that is distinct from either general burnout or the working-woman experience in other cultural contexts.'}},
    {'@type': 'Question', name: 'Can I talk about work AND home stress in one session?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. Life does not compartmentalise and neither do LeanOn sessions. You can bring whatever is most pressing &mdash; a difficult day at work, a conflict at home, the general weight of all of it.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Working Woman Stress India', item: 'https://www.leanon.app/working-woman-stress-india' },
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

export default function WorkingWomanStressIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Working Woman Stress India</span></nav>
        <div className="hero">
          <p className="badge">Working Woman · Double Shift · India</p>
          <h1>You're doing two jobs. Only one of them <em>anyone sees.</em></h1>
          <p className="lead">Career pressure, domestic load, guilt, and the invisible double shift. Working women in India carry more than anyone acknowledges. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>The Invisible Double Shift</h2>
          <p>The working woman in India carries two jobs: the professional one that earns her the right to be in the workforce, and the domestic one that remains entirely hers regardless of her professional achievements. The house, the children, the in-laws, the social functions, the emotional management of the family &mdash; none of it redistributes when she gets a promotion.</p>
          <p>There is also the guilt. The feeling that she is not doing enough at work because she has a family, and not doing enough for her family because she has work. The expectation &mdash; from family, from culture, from herself &mdash; that she should be able to do both perfectly, without complaint.</p>
        </div>
        <div className="section">
          <h2>Why This Is Hard to Talk About</h2>
          <p>Because the prevailing narrative is that working women should be grateful for the opportunity. Expressing how hard it is can feel like ingratitude, or like admitting failure, or like giving ammunition to people who said it was not a good idea. LeanOn is a space where you can say how hard it actually is, without any of those consequences.</p>
          <p>See also: <a href="/support/working-woman-india" style={{color:"#1A8FA0",fontWeight:700}}>Working woman India</a> &mdash; the topic page.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You are doing enough. Let someone tell you they see it.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/support/working-woman-india">Working woman India &rarr;</a>
            <a href="/support/mom-burnout-india">Mom burnout India &rarr;</a>
            <a href="/for-women">Support for women &rarr;</a>
            <a href="/financial-anxiety-india">Financial anxiety &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
