import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Imposter Syndrome India — Talk to Someone Who Has Been There | LeanOn',
  description: 'Waiting to be found out, feeling like a fraud despite your achievements. Imposter syndrome is epidemic in India. Anonymous peer support from ₹160.',
  keywords: ['imposter syndrome India', 'feeling like a fraud India', 'imposter syndrome at work India', 'high achiever anxiety India'],
  alternates: { canonical: 'https://www.leanon.app/imposter-syndrome-india', languages: { 'en-IN': 'https://www.leanon.app/imposter-syndrome-india' } },
  openGraph: { title: 'Imposter Syndrome India — Talk to Someone Who Has Been There | LeanOn', description: 'Waiting to be found out, feeling like a fraud despite your achievements. Imposter syndrome is epidemic in India. Anonymous peer support from ₹160.', url: 'https://www.leanon.app/imposter-syndrome-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is imposter syndrome a mental health condition?', acceptedAnswer: {'@type': 'Answer', text: 'Not formally. It is a psychological phenomenon &mdash; a pattern of thinking &mdash; rather than a clinical diagnosis. But it causes real suffering and affects performance, relationships, and quality of life. It is absolutely worth talking about.'}},
    {'@type': 'Question', name: 'Does it go away on its own?', acceptedAnswer: {'@type': 'Answer', text: 'Rarely. The external achievements that trigger it do not resolve it, because it is not actually about your competence &mdash; it is about an internal model of yourself that has not caught up with your actual accomplishments. Talking about it with someone who has experienced it and can hold it without confirming the fraud narrative is one of the most effective ways to shift it.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Imposter Syndrome India', item: 'https://www.leanon.app/imposter-syndrome-india' },
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

export default function ImposterSyndromeIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Imposter Syndrome India</span></nav>
        <div className="hero">
          <p className="badge">Imposter Syndrome · Fraud Feeling · India</p>
          <h1>You have the job, the degree, the position. And you are waiting to be <em>found out.</em></h1>
          <p className="lead">Feeling like a fraud despite your achievements. Waiting for the day someone realises you do not belong here. Talk anonymously from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Imposter Syndrome Feels Like</h2>
          <p>You achieved something. And instead of feeling good about it, you feel exposed. There is a persistent sense that you do not really deserve what you have, that you somehow fooled everyone, and that discovery is imminent. Your success reinforces the anxiety: every achievement is evidence of the fraud, because now there is more to lose.</p>
          <p>In India, where educational and career pressure is intense and public, imposter syndrome is extremely common among high achievers. The higher the achievement, the higher the exposure.</p>
        </div>
        <div className="section">
          <h2>Why It Is Especially Common in India</h2>
          <p>India's meritocratic pressure creates a culture of constant performance evaluation from childhood. The people who succeed the most have often done so through enormous effort in genuinely competitive environments. But that success was often contingent and hard-won enough that the feeling of belonging never fully formed. Simultaneously, the culture of not discussing difficulty means the fraud feeling is carried privately.</p>
          <p>LeanOn listeners understand this specific Indian professional pressure. You do not need to explain the context.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You earned it. Let someone help you believe it.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/low-self-esteem-india">Low self-esteem &rarr;</a>
            <a href="/people-pleaser-india">People pleaser &rarr;</a>
            <a href="/social-anxiety-india">Social anxiety &rarr;</a>
            <a href="/support/career-pressure-india">Career pressure &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
