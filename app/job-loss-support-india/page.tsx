import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Lost Your Job? Emotional Support India | LeanOn',
  description: 'Layoff, resignation, being let go — the emotional side of job loss is real. Talk anonymously from ₹160. Not career advice — just someone to listen.',
  keywords: ['job loss support India', 'lost my job India', 'layoff emotional support India', 'fired from job support India', 'job loss depression India', 'redundancy support India'],
  alternates: { canonical: 'https://www.leanon.app/job-loss-support-india', languages: { 'en-IN': 'https://www.leanon.app/job-loss-support-india' } },
  openGraph: {
    title: 'Lost Your Job? Emotional Support India | LeanOn',
    description: 'Layoff, resignation, being let go — the emotional side of job loss is real. Talk anonymously from ₹160. Not career advice — just someone to listen.',
    url: 'https://www.leanon.app/job-loss-support-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {'@type': 'Question', name: 'Is it normal to feel depressed after a job loss?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. Job loss is a major life disruption and a genuine grief event &mdash; you are mourning an identity, a structure, a set of relationships, and a version of the future you expected. Feeling low, unmotivated, anxious about the future, or confused about your sense of self are all normal responses. These do not mean something is permanently wrong with you.'}},
    {'@type': 'Question', name: 'Can a peer listener help if I need career advice?', acceptedAnswer: {'@type': 'Answer', text: 'LeanOn is not a career advice service. But if what you need right now is someone to listen to the emotional side of what you are going through &mdash; the shame, the confusion, the fear about what comes next &mdash; peer support is exactly right for that.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free. No subscription.'}}
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Lost Your Job? Emotional Support India', item: 'https://www.leanon.app/job-loss-support-india' },
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

export default function JobLossSupportIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Lost Your Job? Emotional Support India</span>
        </nav>
        <div className="hero">
          <p className="badge">Job Loss · Emotional Support · India</p>
          <h1>It\'s not just income. It\'s identity. It\'s structure. <em>It\'s how you answer \'what do you do\'.</em></h1>
          <p className="lead">Losing a job in India is not just a financial event &mdash; it is an identity event. Talk to someone who understands that. Anonymous peer support from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Job Loss Really Takes</h2>
          <p>In India, a job is not just an income source. It is a social identity. It is what you tell relatives at family functions. It is tied to marriage prospects, to your parents' standing, to your own sense of being a functional adult. When it disappears &mdash; through a layoff, a firing, or a resignation gone wrong &mdash; the loss is much larger than the financial calculation.</p>
          <p>There is also the structure loss. Your days were organised around work. Without it, the hours have a different weight. You are at home when you feel you should not be. You are productive on some days and paralysed on others.</p>
        </div>
        <div className="section">
          <h2>The Shame That Nobody Talks About</h2>
          <p>Job loss in India carries shame that is disproportionate to its actual meaning. Layoffs happen to entire industries. Companies make financial decisions. But internally, and in many Indian families, job loss feels personal. It feels like failure. And it is extremely hard to talk about.</p>
          <p>LeanOn is a space where you can say exactly how bad this feels, without having to manage anyone else's reaction to it.</p>
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
          <h2>You are more than your job title.</h2>
          <p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/financial-anxiety-india">Financial anxiety &rarr;</a>
            <a href="/support/job-loss">Job loss support &rarr;</a>
            <a href="/no-motivation-india">No motivation &rarr;</a>
            <a href="/support/career-pressure-india">Career pressure &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
