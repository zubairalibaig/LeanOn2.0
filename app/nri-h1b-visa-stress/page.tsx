import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'H1B Visa Stress | The Anxiety No One Admits to | LeanOn',
  description: 'H1B holders live with a specific kind of anxiety — tethered to your employer, lottery fear, green card decade-wait. Talk to someone who understands what that does to you.',
  keywords: ['h1b stress', 'h1b anxiety', 'h1b visa stress', 'indian h1b holder', 'h1b green card wait', 'h1b mental health', 'f1 to h1b stress'],
  alternates: { canonical: 'https://www.leanon.app/nri-h1b-visa-stress' },
  openGraph: { title: 'H1B Visa Stress | The Anxiety No One Admits to | LeanOn', description: 'H1B holders live with a specific kind of anxiety — tethered to your employer, lottery fear, green card decade-wait. Talk to someone who understands what that does to you.', url: 'https://www.leanon.app/nri-h1b-visa-stress', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is H1B anxiety a recognised thing or am I being dramatic?', acceptedAnswer: { '@type': 'Answer', text: 'It is completely real. The H1B creates a specific set of conditions — employer dependency, lottery uncertainty, decade-long green card queues, layoff risk with immediate visa consequences — that generate a chronic background anxiety that non-immigrants do not experience. You are not being dramatic. This is the logical emotional response to genuinely precarious circumstances.' } },
  { '@type': 'Question', name: 'I was laid off and I am terrified. Is this the right place to talk about that?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. H1B layoff is not like a normal layoff — it comes with a 60-day clock, immediate visa jeopardy, and a rush of decisions that need to be made under enormous pressure. The emotional weight of that terror is something LeanOn listeners understand and can hold with you.' } },
  { '@type': 'Question', name: 'My partner is on H4 and cannot work. We are both struggling. Can we each talk to a listener?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, absolutely. The H4 isolation — financial dependency, professional sidelining, far from your own support network — is its own form of stress that deserves space. Both the H1B holder and the H4 partner can find listeners who understand their specific experience.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Your employer, your community, and your family will never know.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription needed.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'H1B Visa Stress', item: 'https://www.leanon.app/nri-h1b-visa-stress' },
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
  .crisis{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:20px 24px;font-size:13px;color:var(--gray);line-height:1.7;text-align:center;}
  .crisis strong{color:var(--navy);}
`

export default function NriH1bVisaStressPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>H1B Visa Stress</span></nav>
        <div className="hero">
          <p className="badge">H1B Visa &middot; Immigration Anxiety &middot; Green Card Wait</p>
          <h1>You built a life here. <em>And you do not fully own it yet.</em></h1>
          <p className="lead">H1B holders carry a quiet, chronic anxiety that rarely gets spoken out loud — tethered to an employer, living in fear of the layoff that changes everything, waiting in a green card queue that stretches a decade or more. This is not a legal blog. It is a space to speak the emotional weight of living on a leash. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Living on a Leash — the H1B Employer Dependency</h2>
          <p>The H1B visa ties your legal right to be in the United States to a single employer. This is not a trivial constraint — it shapes every major decision you make. You cannot easily quit a toxic job. You cannot take a sabbatical to deal with a family crisis. You cannot take time between jobs to reassess your career. Every setback at work — a bad manager, an unfair performance review, a restructuring — carries a weight that non-immigrant colleagues simply do not experience because their right to stay in the country is not on the table.</p>
          <p>The layoff, in particular, is a special terror for H1B holders. It is not just financial. It is existential — a 60-day clock, immediate visa jeopardy, the need to find a new sponsored job before the window closes, the decision of whether to try to stay or go back to India. This is a specific and acute form of stress that deserves to be named and spoken, not just managed.</p>
          <p>LeanOn listeners understand the H1B experience from the inside. They have heard these fears from hundreds of people and they understand the specific shape of the anxiety without needing it explained. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Green Card Decade — Waiting for a Life You Already Have</h2>
          <p>Indian nationals face the longest green card queues of any nationality — in some employment categories, the wait is measured in decades, not years. You may have been in the US for ten or fifteen years, built a career, raised children, and still not have the permanent residence that would allow you to simply live without the visa anxiety. This is a specific injustice, and it generates a specific kind of suppressed anger and helplessness that accumulates over time.</p>
          <p>The green card wait affects major life decisions. Can you leave a company that is treating you badly? Can you buy a house if there is uncertainty? Can you plan for your children&rsquo;s schooling? Can you take risks professionally when you have so little flexibility? These constraints are real and the emotional toll of navigating them — quietly, professionally, without showing the anxiety — is something LeanOn peer listeners understand completely.</p>
        </div>

        <div className="section">
          <h2>The Daily Unspoken Anxiety</h2>
          <p>For most H1B holders, the anxiety is not always acute. It lives in the background — a low hum that shows up when there is news about immigration policy, when your company announces restructuring, when a colleague mentions that someone was let go. It shapes your relationship with your employer, your willingness to push back, your sense of how much control you have over your own life.</p>
          <p>This daily, chronic, mostly unspoken anxiety has a cost. It affects your sleep, your relationships, your sense of self. And it is a cost that almost nobody around you — your American colleagues, your managers, your family in India — fully understands or acknowledges. LeanOn is a space to speak it, name it, and have it heard by someone who completely understands why it is there.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The H1B anxiety deserves to be spoken aloud.</h2><p>Real peer listener. Understands the visa weight completely. First 5 minutes free. Sessions from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-workplace-stress">NRI workplace stress &rarr;</a>
          <a href="/telugu-nri-support">Telugu NRI support &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
