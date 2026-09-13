import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Competitive Exam Stress India — CAT, GATE, Banking, UPSC | LeanOn',
  description: 'The pressure of competitive exams in India is unlike anything. Talk to someone who gets it — anonymous peer support from ₹160.',
  keywords: ['competitive exam stress India', 'CAT exam anxiety India', 'GATE exam stress India', 'banking exam stress India', 'exam anxiety India adults'],
  alternates: { canonical: 'https://www.leanon.app/competitive-exam-stress-india', languages: { 'en-IN': 'https://www.leanon.app/competitive-exam-stress-india' } },
  openGraph: {
    title: 'Competitive Exam Stress India — CAT, GATE, Banking, UPSC | LeanOn',
    description: 'The pressure of competitive exams in India is unlike anything. Talk to someone who gets it — anonymous peer support from ₹160.',
    url: 'https://www.leanon.app/competitive-exam-stress-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {'@type': 'Question', name: 'Is it normal to feel this much pressure about an exam?', acceptedAnswer: {'@type': 'Answer', text: 'For competitive exams in India, yes. The social and family stakes are real. The sense that your entire future is contingent on one result is a real pressure, not an irrational one. The emotional response to that pressure &mdash; anxiety, paralysis, mood swings &mdash; is entirely normal.'}},
    {'@type': 'Question', name: 'Can I talk to someone about exam stress even if I am not in crisis?', acceptedAnswer: {'@type': 'Answer', text: 'Yes. You do not need to be in crisis to use LeanOn. Many people use it for regular stress processing &mdash; just to have somewhere to put what they are carrying. A 15-minute session during preparation can help more than hours of unproductive overthinking.'}},
    {'@type': 'Question', name: 'How much does it cost?', acceptedAnswer: {'@type': 'Answer', text: 'Sessions start at ₹160. First 5 minutes free.'}}
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Competitive Exam Stress India', item: 'https://www.leanon.app/competitive-exam-stress-india' },
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

export default function CompetitiveExamStressIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Competitive Exam Stress India</span>
        </nav>
        <div className="hero">
          <p className="badge">Exam Stress · CAT · GATE · Banking · UPSC</p>
          <h1>The syllabus is manageable. The <em>pressure isn\'t.</em></h1>
          <p className="lead">Competitive exams in India carry a weight that goes far beyond the syllabus. Talk to someone who understands. Anonymous peer support from ₹160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>Why Competitive Exam Stress Is Unique</h2>
          <p>Competitive exams in India &mdash; CAT, GATE, banking exams, UPSC, state PSC &mdash; are not just academic challenges. They are social events. Your rank is your identity. Your success is your family's pride. Your failure is something that follows you in ways that exam failure in other contexts does not.</p>
          <p>There is also the comparison culture. In a world where everyone is preparing, every conversation becomes a status check. It is very hard to express genuine vulnerability about how you are doing when the social pressure is to project confidence and control.</p>
        </div>
        <div className="section">
          <h2>What Carrying This Does to You</h2>
          <p>The pressure affects sleep, concentration, appetite, and relationships. You become irritable. You oscillate between overwork and paralysis. You feel guilty when you are not studying and unable to study when you are. Your sense of yourself has narrowed to this one measure of performance.</p>
          <p>A LeanOn listener does not know your rank or your preparation status. They only know what you tell them about how you are feeling. That is a relief in itself.</p>
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
          <h2>The pressure is real. You do not have to carry it alone.</h2>
          <p>Anonymous peer support. No judgment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/upsc-stress-india">UPSC stress &rarr;</a>
            <a href="/financial-anxiety-india">Financial anxiety &rarr;</a>
            <a href="/no-motivation-india">No motivation &rarr;</a>
            <a href="/support/student-stress">Student stress &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
