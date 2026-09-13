import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Joint Family Stress India — Anonymous Support | LeanOn',
  description: 'No privacy, constant interference, family politics. Joint family stress is uniquely Indian. Talk anonymously from ₹160.',
  keywords: ['joint family stress India', 'joint family problems India', 'joint family conflict India', 'living with in-laws India', 'no privacy joint family India'],
  alternates: { canonical: 'https://www.leanon.app/joint-family-stress-india', languages: { 'en-IN': 'https://www.leanon.app/joint-family-stress-india' } },
  openGraph: { title: 'Joint Family Stress India — Anonymous Support | LeanOn', description: 'No privacy, constant interference, family politics. Joint family stress is uniquely Indian. Talk anonymously from ₹160.', url: 'https://www.leanon.app/joint-family-stress-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is joint family stress a real mental health issue?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. The absence of private space, the constant negotiation, and the dual loyalty demands of joint family living are recognized contributors to anxiety, depression, and relationship stress. The fact that it is culturally common does not make it psychologically cost-free.'}},
    {'@type': 'Question', name: 'How do I talk about this without seeming ungrateful?', acceptedAnswer: {'@type': 'Answer', text: 'To a LeanOn listener, you do not need to manage how you come across. You can say exactly what is happening and how it makes you feel, without framing it carefully or softening it for the listener\'s benefit. That freedom is one of the most valuable things about neutral peer support.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Joint Family Stress India', item: 'https://www.leanon.app/joint-family-stress-india' },
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

export default function JointFamilyStressIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Joint Family Stress India</span></nav>
        <div className="hero">
          <p className="badge">Joint Family · Privacy · Conflict · India</p>
          <h1>You love your family. <em>You're also drowning in them.</em></h1>
          <p className="lead">No privacy, constant interference, family politics. Joint family stress is real and uniquely Indian. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Makes Joint Family Stress Unique</h2>
          <p>Joint family living removes the most fundamental buffer in adult life: a space that is yours. Every decision &mdash; what you eat, when you sleep, how you parent, how you spend money &mdash; is subject to comment, suggestion, or interference. There is no separation between the nuclear relationship and the extended one.</p>
          <p>The people creating the stress also love you. That is the complicating factor. You cannot simply be angry at them. You hold both: love and exhaustion, gratitude and resentment. This complexity requires a space where you can express both without judgment.</p>
        </div>
        <div className="section">
          <h2>Who You Cannot Tell</h2>
          <p>You cannot tell your partner because they are inside the same system. You cannot tell your family of origin because it will become a conflict between the two families. You cannot tell friends because word travels. You need a neutral space where what you say stays there.</p>
          <p>That is exactly what LeanOn provides.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You can love your family and need space from them at the same time.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/mother-in-law-stress-india">Mother-in-law stress &rarr;</a>
            <a href="/sasural-problems-india">Sasural problems &rarr;</a>
            <a href="/feeling-trapped-india">Feeling trapped &rarr;</a>
            <a href="/cant-tell-anyone-india">Can't tell anyone &rarr;</a>
            <a href="/support/family-pressure-india">Family pressure &rarr;</a></div></div>
      </div>
    </>
  )
}
