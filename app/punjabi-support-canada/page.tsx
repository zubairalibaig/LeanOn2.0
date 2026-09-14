import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Punjabi Support Online for Canadians | Talk to Someone Back Home | LeanOn',
  description: 'Living in Brampton, Surrey, or Calgary? LeanOn connects Punjabi NRIs in Canada with peer listeners in India who speak your language and understand your world.',
  keywords: ['punjabi support canada', 'punjabi nri canada', 'punjabi mental health canada', 'talk to punjabi person online', 'brampton indian support', 'surrey bc punjabi support', 'desi support canada'],
  alternates: { canonical: 'https://www.leanon.app/punjabi-support-canada' },
  openGraph: { title: 'Punjabi Support Online for Canadians | Talk to Someone Back Home | LeanOn', description: 'Living in Brampton, Surrey, or Calgary? LeanOn connects Punjabi NRIs in Canada with peer listeners in India who speak your language and understand your world.', url: 'https://www.leanon.app/punjabi-support-canada', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk in Punjabi or Hindi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, many listeners speak Punjabi and Hindi. When booking, mention your preferred language and your listener will communicate with you in it.' } },
  { '@type': 'Question', name: 'Do listeners understand the Canada Punjabi experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. They understand joint family pressure from afar, the sacrifice parents made, the \'successful abroad\' mask, and the loneliness in Canadian winters. You do not have to explain the context — they already know it.' } },
  { '@type': 'Question', name: 'What if I\'m embarrassed to talk about this?', acceptedAnswer: { '@type': 'Answer', text: 'You sign up anonymously with only a phone number. No photo, no full name, no social account. Your family in Brampton or Punjab never knows. Everything you say stays between you and your listener.' } },
  { '@type': 'Question', name: 'Is this available at convenient hours from Canada?', acceptedAnswer: { '@type': 'Answer', text: 'India listeners are active evenings IST (6pm–11pm), which is Canada morning (6:30am–1:30pm EDT / 3:30am–10:30am PDT). This lines up perfectly before your workday starts.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions start from ₹160 (about $3 CAD) for 15 minutes. The first 5 minutes of every session are free — if it doesn\'t feel right, you pay nothing.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Punjabi Support for Canadians', item: 'https://www.leanon.app/punjabi-support-canada' },
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

export default function PunjabiSupportCanadaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Punjabi Support for Canadians</span></nav>
        <div className="hero">
          <p className="badge">Punjabi Support &middot; NRI Canada &middot; Desi Abroad</p>
          <h1>Someone back home who <em>speaks your language.</em></h1>
          <p className="lead">You moved to Brampton or Surrey with big dreams and a heavier heart than anyone back home knows. The loneliness between calls to your parents. The pressure to have &ldquo;made it.&rdquo; The feeling that no one here fully understands &mdash; and you can&rsquo;t explain it to people there either. Talk to a Punjabi peer listener in India. No explaining required. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>You don&rsquo;t have to explain what &#2602;&#2608;&#2604;&#2587;&#2624; (pardesh) means</h2>
          <p>Pardesh is not just &ldquo;being away.&rdquo; It is the particular weight of building a life in a place that was never supposed to be permanent &mdash; and slowly realising it might be. You are expected to be happy about it. You moved to Brampton or Surrey; that is success. The fact that you feel invisible between Sunday calls, that the cold is not just the weather, that you code-switch so hard every day that you forget which one is you &mdash; that part nobody talks about.</p>
          <p>The dual identity of being Punjabi in Canada is real. You are too Indian for your Canadian colleagues and too Canadian for your family back in Punjab. You perform belonging in both directions and are fully at ease in neither. The loneliness is not weakness &mdash; it is the gap between the life everyone imagines you are living and the life you are actually in.</p>
          <p>LeanOn listeners are in India. Many have direct experience with close family abroad &mdash; siblings in Brampton, cousins in Surrey, friends who moved and went quiet. They understand pardesh without a translation. The first 5 minutes are free, and no name is needed to start.</p>
        </div>
        <div className="section">
          <h2>The LeanOn difference for the Punjabi diaspora</h2>
          <p>Punjabi families carry specific, layered expectations. The sacrifice is real &mdash; parents who spent savings to send you, siblings who are watching what &ldquo;going abroad&rdquo; actually delivers. The &ldquo;settle ho gaya?&rdquo; question from every relative is not small talk. It is a status check on a decision the whole family made together.</p>
          <p>LeanOn listeners understand joint family pressure from afar. They understand the envy that sometimes comes from siblings back home, and the guilt that comes from noticing it. They understand the arranged marriage questions that start as soon as the visa is stamped, and the confusion of navigating that while also trying to make rent in a country that is expensive in ways no one at home quite grasps.</p>
          <p>They will not give you advice. They will not tell you what your family would think. They will listen &mdash; in Punjabi or Hindi if you prefer &mdash; while you say the things you have been carrying since you landed.</p>
        </div>
        <div className="section">
          <h2>When to call &mdash; time zones</h2>
          <p>LeanOn listeners are India-based (IST). The time difference actually works in your favour. <strong>Brampton / Toronto (EDT):</strong> India is 9.5 hours ahead. A 9am call in Brampton is 6:30pm in India &mdash; right when listeners are coming online for the evening. <strong>Surrey / Vancouver (PDT):</strong> India is 12.5 hours ahead. 8am in Surrey is 8:30pm in India &mdash; peak listener availability.</p>
          <p>If you have a quiet hour before your workday, before the house wakes up, or on a Sunday morning when the silence is loudest, there will very likely be a Punjabi or Hindi-speaking listener available. No appointment. No waiting list. Browse who is online now and start a session.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Apni baat, apne bande se.</h2><p>A Punjabi peer listener who gets it. First 5 minutes free. From ₹160 (~$3 CAD).</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/loneliness-support-india">Loneliness support &rarr;</a>
          <a href="/talk-to-someone-online">Talk to someone online &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
