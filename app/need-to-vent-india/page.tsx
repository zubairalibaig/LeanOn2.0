import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Vent India — Someone to Listen Right Now | LeanOn',
  description: 'Not advice. Not solutions. Just someone to listen while you get it all out. From ₹160. First 5 minutes free.',
  keywords: ['need to vent India', 'want to vent India', 'vent out India', 'vent to someone India', 'just need to vent India'],
  alternates: { canonical: 'https://www.leanon.app/need-to-vent-india', languages: { 'en-IN': 'https://www.leanon.app/need-to-vent-india' } },
  openGraph: { title: 'Need to Vent India — Someone to Listen Right Now | LeanOn', description: 'Not advice. Not solutions. Just someone to listen while you get it all out. From ₹160. First 5 minutes free.', url: 'https://www.leanon.app/need-to-vent-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    {'@type': 'Question', name: 'Is it okay to just vent without wanting advice?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. Many sessions on LeanOn are exactly this &mdash; someone needed to say what they were carrying and be heard. No advice, no solutions. Just genuine listening. That is a complete and valuable use of peer support.'}},
    {'@type': 'Question', name: 'How is this different from just talking to a friend?', acceptedAnswer: {'@type': 'Answer', text: 'Friends have their own responses, their own tiredness, their own opinions. A trained listener\'s job is to receive what you are saying fully, without their own stuff getting in the way. The result feels different &mdash; more received, less managed.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Need to Vent India', item: 'https://www.leanon.app/need-to-vent-india' },
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

export default function NeedToVentIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{color:'var(--navy)'}}>Need to Vent India</span></nav>
        <div className="hero">
          <p className="badge">Vent · Listen · Right Now · India</p>
          <h1>Not therapy. Not advice. Just someone to shut up and listen <em>while you let it all out.</em></h1>
          <p className="lead">Not looking for solutions. Just somewhere to put all of it. A real listener, from ₹160. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Venting Actually Does</h2>
          <p>Venting is not weakness. It is a pressure regulation mechanism. When you carry something at full weight for too long without expressing it, it starts to affect everything &mdash; your focus, your mood, your patience with the people around you.</p>
          <p>Expressing it to someone who is genuinely listening &mdash; not formulating their response while you talk, not getting ready to offer advice, just receiving what you are saying &mdash; releases the pressure. You do not need a solution. You need to say it out loud to a real person who hears it.</p>
        </div>
        <div className="section">
          <h2>No Advice Unless You Want It</h2>
          <p>LeanOn listeners follow your lead. If you want to vent, they listen. If you want to think through a decision, they help you think. If you want both, you say so. The session belongs to you.</p>
          <p>See also: <a href="/support/need-to-vent" style="color:#1A8FA0;font-weight:700">Need to vent</a> &mdash; the topic page.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Let it out. Someone is listening.</h2><p>Anonymous peer support. No advice unless you want it. From ₹160. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related"><a href="/bad-day-india">Bad day India &rarr;</a>
            <a href="/emotional-support-india">Emotional support India &rarr;</a>
            <a href="/talk-to-someone-free-india">Free session trial &rarr;</a>
            <a href="/rant-online-india">Rant online India &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a></div></div>
      </div>
    </>
  )
}
