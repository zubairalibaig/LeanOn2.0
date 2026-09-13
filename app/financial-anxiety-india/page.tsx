import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Financial Anxiety India — Talk to Someone About Money Stress | LeanOn',
  description: 'EMI pressure, job insecurity, debt stress, family financial expectations. Money anxiety is real. Talk anonymously from ₹160.',
  keywords: ['financial anxiety India', 'money stress India', 'EMI stress India', 'financial pressure India', 'debt anxiety India', 'job insecurity anxiety India'],
  alternates: { canonical: 'https://www.leanon.app/financial-anxiety-india', languages: { 'en-IN': 'https://www.leanon.app/financial-anxiety-india' } },
  openGraph: {
    title: 'Financial Anxiety India — Talk to Someone About Money Stress | LeanOn',
    description: 'EMI pressure, job insecurity, debt stress, family financial expectations. Money anxiety is real. Talk anonymously from ₹160.',
    url: 'https://www.leanon.app/financial-anxiety-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {'@type': 'Question', name: 'Is financial anxiety different from other anxiety?', acceptedAnswer: {'@type': 'Answer', text: 'In some ways, yes. Most anxiety is about uncertain threats. Financial anxiety is often about very concrete, quantified reality. But the emotional experience &mdash; the racing thoughts, the dread, the inability to stop thinking about it &mdash; is the same anxiety mechanism. And the relief of talking about it with someone who listens without judgment applies equally.'}},
    {'@type': 'Question', name: 'Can talking help if the money problem has not actually changed?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. The anxiety exists separately from the financial situation, even if it is caused by it. Reducing the emotional weight of the anxiety creates more internal space to think clearly about the actual situation. People often find that after talking, they can think more practically about what to do &mdash; because the emotional noise has reduced.'}},
    {'@type': 'Question', name: 'Is this a financial advice service?', acceptedAnswer: {'@type': 'Answer', text: 'No. LeanOn listeners are not financial advisors. They are trained peer listeners who will hold space for whatever you are carrying. If you need financial planning, you need a different kind of professional. If you need someone to talk to about what the financial stress is doing to you, LeanOn is exactly right.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Financial Anxiety India', item: 'https://www.leanon.app/financial-anxiety-india' },
  ],
}

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
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
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

export default function FinancialAnxietyIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>&#x203A;</span>
          <span style={{color:'var(--navy)'}}>Financial Anxiety India</span>
        </nav>
        <div className="hero">
          <p className="badge">Financial Anxiety · Money Stress · India</p>
          <h1>The numbers keep running in your head at 2am. But this isn\'t a money problem right now &mdash; <em>it\'s an anxiety problem.</em></h1>
          <p className="lead">EMI pressure, job insecurity, debt, family expectations. Financial anxiety is real and exhausting. Talk to someone anonymously from ₹160 &mdash; not financial advice, just someone to listen.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Financial Anxiety Feels Like in India</h2>
          <p>Financial anxiety in India has a specific texture. It is not just worry about money in the abstract. It is the weight of family expectations &mdash; parents who sacrificed, a spouse who is counting on you, parents-in-law who are watching. It is the specific dread of the EMI SMS. The mental calculation that runs in the background of every conversation.</p>
          <p>There is also the shame dimension. Money problems carry enormous social stigma in India. You cannot tell people. You cannot admit the numbers. So you carry it alone, at full weight, with nobody to share the load.</p>
        </div>
        <div className="section">
          <h2>Why It Is Harder to Talk About Than Other Anxiety</h2>
          <p>Because it has a specificity that feels embarrassing. You can describe loneliness or relationship pain without numbers. Financial anxiety comes with amounts, with decisions you made, with a timeline. It feels like it reflects on you as a person.</p>
          <p>A neutral listener receives this without judgment. They are not going to calculate your decisions and assess whether you were irresponsible. They are going to listen to the anxiety &mdash; the 2am numbers, the weight of it &mdash; and hold space for that.</p>
        </div>
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-card">
          <h2>The weight of it is real. Let someone help you carry it.</h2>
          <p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/job-loss-support-india">Job loss support &rarr;</a>
            <a href="/upsc-stress-india">UPSC stress &rarr;</a>
            <a href="/support/career-pressure-india">Career pressure &rarr;</a>
            <a href="/feeling-trapped-india">Feeling trapped &rarr;</a>
            <a href="/cant-tell-anyone-india">Can't tell anyone &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
