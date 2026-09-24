import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Burnout | When the Dream Abroad Stops Feeling Worth It | LeanOn',
  description: 'You did everything right. Got the visa, the job, the apartment. Now you feel empty. NRI burnout is real — talk to someone who understands why.',
  keywords: ['nri burnout', 'immigrant burnout', 'nri exhaustion', 'nri overwhelm', 'indian professional burnout abroad', 'desi burnout'],
  alternates: { canonical: 'https://www.leanon.app/nri-burnout' },
  openGraph: { title: 'NRI Burnout | When the Dream Abroad Stops Feeling Worth It | LeanOn', description: 'You did everything right. Got the visa, the job, the apartment. Now you feel empty. NRI burnout is real — talk to someone who understands why.', url: 'https://www.leanon.app/nri-burnout', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is NRI burnout different from regular burnout?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. NRI burnout carries extra layers — the immigrant\'s need to justify the move, the guilt about not enjoying the dream, the suppressed grief of displacement, and the absence of the support network you would have had at home. These compound standard work or life exhaustion in specific ways.' } },
  { '@type': 'Question', name: 'I secretly wish I could go back to India. Is that normal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it is more common than people admit. The return fantasy — wanting to undo the move, to reclaim the life you had before — is something many NRIs carry quietly because it feels ungrateful or like a failure. Listeners understand it completely. It is not weakness. It is a human response to long-term displacement.' } },
  { '@type': 'Question', name: 'I feel guilty because my life is objectively good. Am I wrong to feel burnt out?', acceptedAnswer: { '@type': 'Answer', text: 'No. The privilege guilt that comes with NRI burnout is real and it makes the burnout harder to address, but it does not make the burnout less real. You can have a good life and still be depleted. The two are not incompatible.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Your family, your employer, and your community will never know.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription or commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Burnout', item: 'https://www.leanon.app/nri-burnout' },
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

export default function NriBurnoutPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Burnout</span></nav>
        <div className="hero">
          <p className="badge">NRI Burnout &middot; Immigrant Exhaustion &middot; The Hollow Dream</p>
          <h1>You did everything right. <em>So why does it feel like nothing?</em></h1>
          <p className="lead">The visa. The job. The apartment in a city that was supposed to be the goal. You built the thing you worked for — and now you are running on empty in a way you cannot explain to anyone back home because they think you are living the dream. NRI burnout is real. Talk to someone who understands why the dream does not always deliver the peace. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Immigrant Ambition That Never Turns Off</h2>
          <p>Indian immigrants — particularly those who came for education or professional opportunity — typically carry a specific kind of drive that does not have an off switch. The ambition that got you the degree, the visa, the job: it is the same drive that now keeps you working evenings and weekends even after you have achieved the original goal, because there is always a new goal, because rest feels dangerous, because the immigrant without a safety net cannot afford to slow down.</p>
          <p>At some point — usually after years, sometimes after a decade — the drive starts to feel less like motivation and more like a treadmill. You are tired in a deep way. Not just work tired. Tired of the performance, tired of the proving, tired of the relentless forward motion with no clear destination. This is NRI burnout — and it is different from standard work exhaustion because it carries the additional weight of displacement, suppressed grief, and the guilt of not enjoying the life you worked so hard to build.</p>
          <p>LeanOn listeners understand this from the inside. Not as a productivity problem to be solved, but as a human experience to be heard. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Return Fantasy — When You Wish You Could Undo the Move</h2>
          <p>One of the most commonly suppressed NRI experiences is the return fantasy — the recurring thought that you want to go back. Back to India. Back to the life before the visa. Back to where your support network exists, where food tastes right, where you do not have to code-switch every single day.</p>
          <p>This thought carries enormous shame for many NRIs. You are supposed to be grateful. The people who sacrificed to get you here would be devastated to hear it. Your friends who never got the opportunity would find it incomprehensible. And so you push it down, and it comes back, and you push it down again.</p>
          <p>LeanOn is a place where you can say this out loud to someone who will hear it without horror, without disappointment, and without telling you what you should do. It is not weakness. It is a human response to long-term displacement, and it deserves to be spoken.</p>
        </div>

        <div className="section">
          <h2>Suppressed Grief and the No-Safety-Net Life</h2>
          <p>Immigrants live without the safety net that most people take for granted. No parents around the corner. No childhood friends nearby. No support system that does not require a flight to access. When difficult things happen — an illness, a loss, a relationship ending — you navigate it largely alone, while appearing to be fine because the people who need to believe you are fine are watching on a video call from India.</p>
          <p>The accumulated weight of years of this — of absorbing difficulty without adequate support, of performing okay-ness for the benefit of family at home — is a real thing. It does not always feel like grief because it is spread across time, but it accumulates. LeanOn peer listeners understand this specific weight. Real listening, no advice, no performance required. First 5 minutes free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The dream that stopped feeling like one.</h2><p>Real peer listener. No judgment. No productivity tips. First 5 minutes free. Sessions from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-workplace-stress">NRI workplace stress &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-parents-india">NRI guilt parents &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
