import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Parents Forcing Marriage India — Talk to Someone | LeanOn',
  description: 'Pressure to marry, marriage deadlines, family ultimatums. The pressure is real. Talk anonymously from ₹160 — no judgment.',
  keywords: ['parents forcing marriage India', 'marriage pressure India', 'family pressure to marry India', 'forced arranged marriage India', 'not ready for marriage India'],
  alternates: { canonical: 'https://www.leanon.app/parents-forcing-marriage-india', languages: { 'en-IN': 'https://www.leanon.app/parents-forcing-marriage-india' } },
  openGraph: { title: 'Parents Forcing Marriage India — Talk to Someone | LeanOn', description: 'Pressure to marry, marriage deadlines, family ultimatums. The pressure is real. Talk anonymously from ₹160 — no judgment.', url: 'https://www.leanon.app/parents-forcing-marriage-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is it normal to feel guilty for not wanting to marry yet?', acceptedAnswer: {'@type': 'Answer', text: 'Extremely common. The guilt is a function of how much your family\'s expectations are internalised. It does not mean their timeline is right for you.'}},
    {'@type': 'Question', name: 'What if I do want to marry, just not this person?', acceptedAnswer: {'@type': 'Answer', text: 'This is a different conversation but equally valid. LeanOn is for whatever you are carrying about marriage pressure &mdash; whether it is the timeline, the specific candidate, the process, or the autonomy question.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Parents Forcing Marriage India', item: 'https://www.leanon.app/parents-forcing-marriage-india' },
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

export default function ParentsForcingMarriageIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Parents Forcing Marriage India</span></nav>
        <div className="hero">
          <p className="badge">Marriage Pressure · Family Ultimatums · India</p>
          <h1>You're not refusing. You're not ready. <em>There's a difference and nobody is hearing it.</em></h1>
          <p className="lead">Marriage deadlines, family ultimatums, pressure from every direction. Talk anonymously from ₹160 &mdash; to someone who understands the difference between not ready and not wanting.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>The Specific Pressure of Marriage in India</h2>
          <p>In India, marriage is not just a personal decision. It is a family event, a social signal, and in many contexts a financial transaction involving multiple generations. The pressure to marry by a certain age &mdash; typically stricter for women &mdash; comes from parents, extended family, community comparison, and the fear of being left behind.</p>
          <p>Being not ready is treated as a deficiency to be corrected rather than a legitimate position. Nobody asks why you are not ready. They just apply more pressure. The result is an enormous amount of internal conflict that has nowhere to go.</p>
        </div>
        <div className="section">
          <h2>What You Need Right Now</h2>
          <p>Not advice about whether to agree or refuse. Not a script for the conversation with your parents. Just somewhere to put the weight of it &mdash; the guilt, the anger at having your life timeline managed, the genuine confusion about what you want. A neutral listener holds this without telling you what to do.</p>
          <p>See also: <a href="/support/not-ready-to-get-married-india" style={{color:"#1A8FA0",fontWeight:700}}>Not ready to get married</a> and <a href="/support/arranged-marriage-stress" style={{color:"#1A8FA0",fontWeight:700}}>Arranged marriage stress</a>.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Your timeline matters too.</h2><p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/support/arranged-marriage-stress">Arranged marriage stress &rarr;</a>
            <a href="/support/not-ready-to-get-married-india">Not ready to marry &rarr;</a>
            <a href="/joint-family-stress-india">Joint family stress &rarr;</a>
            <a href="/feeling-trapped-india">Feeling trapped &rarr;</a>
            <a href="/cant-tell-anyone-india">Can't tell anyone &rarr;</a></div></div>
      </div>
    </>
  )
}
