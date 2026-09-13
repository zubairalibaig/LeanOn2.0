import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support India — Real People, Real Understanding | LeanOn',
  description: 'Sometimes you need emotional support, not solutions. Trained peer listeners in India. Anonymous, from ₹160.',
  keywords: ['emotional support India', 'emotional support online India', 'need emotional support India', 'where to get emotional support India', 'emotional support person India'],
  alternates: { canonical: 'https://www.leanon.app/emotional-support-india', languages: { 'en-IN': 'https://www.leanon.app/emotional-support-india' } },
  openGraph: { title: 'Emotional Support India — Real People, Real Understanding | LeanOn', description: 'Sometimes you need emotional support, not solutions. Trained peer listeners in India. Anonymous, from ₹160.', url: 'https://www.leanon.app/emotional-support-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is emotional support the same as therapy?', acceptedAnswer: {'@type': 'Answer', text: 'No. Therapy is a clinical service provided by licensed professionals. It involves diagnosis, treatment planning, and specific evidence-based interventions. Emotional support &mdash; the kind LeanOn provides &mdash; is peer-based, non-clinical, and focused on being heard rather than treated. Many people benefit from both.'}},
    {'@type': 'Question', name: 'Who provides emotional support on LeanOn?', acceptedAnswer: {'@type': 'Answer', text: 'Real people &mdash; trained peer listeners with lived experience. They are not AI, not therapists, and not volunteers. They are compensated for their time and trained in active listening and supportive conversation.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free. No subscription.'}},
    {'@type': 'Question', name: 'Is it anonymous?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. First name only. Listener bound by confidentiality agreement.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Emotional Support India', item: 'https://www.leanon.app/emotional-support-india' },
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

export default function EmotionalSupportIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Emotional Support India</span></nav>
        <div className="hero">
          <p className="badge">Emotional Support · Real People · India</p>
          <h1>Sometimes you don't need advice. You need someone to <em>actually be there.</em></h1>
          <p className="lead">Real human peer listeners in India. Not AI, not therapy, not advice. Genuine emotional support from ₹160. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Emotional Support Actually Means</h2>
          <p>Emotional support is not advice. It is not problem-solving. It is not cheerleading or reassurance. It is the experience of being genuinely accompanied &mdash; of having someone present with you in what you are going through, without trying to change it or fix it.</p>
          <p>This is rarer than it sounds. Most people, when someone they care about is suffering, instinctively move to fix, advise, or minimise. Genuine emotional support requires staying present with the discomfort without trying to make it stop.</p>
        </div>
        <div className="section">
          <h2>Why LeanOn Listeners Are Different</h2>
          <p>LeanOn listeners are trained specifically in the skills that make emotional support possible: active listening, reflecting without steering, genuine curiosity, and the capacity to hold complexity without rushing to resolution. They have also been through difficult things themselves &mdash; which means they understand what being heard in a hard moment actually requires.</p>
          <p>Sessions are anonymous, available immediately, and start at ₹160. First 5 minutes are free.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You deserve to be heard. Not fixed. Heard.</h2><p>Anonymous peer support. Real people. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/need-to-vent-india">Need to vent &rarr;</a>
            <a href="/bad-day-india">Bad day India &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/talk-to-someone-free-india">First 5 minutes free &rarr;</a></div></div>
      </div>
    </>
  )
}
