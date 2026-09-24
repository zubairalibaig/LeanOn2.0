import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Support for NRIs & Indians Abroad | Talk to Someone Who Gets It | LeanOn',
  description: 'Feeling disconnected abroad? LeanOn connects you with Indian peer listeners who understand the NRI experience — family pressure, cultural isolation, and the longing for home.',
  keywords: ['nri support', 'indian support abroad', 'talk to someone indian', 'nri emotional support', 'indian diaspora support', 'nri loneliness', 'indian abroad support'],
  alternates: { canonical: 'https://www.leanon.app/nri-support' },
  openGraph: { title: 'Support for NRIs & Indians Abroad | Talk to Someone Who Gets It | LeanOn', description: 'Feeling disconnected abroad? LeanOn connects you with Indian peer listeners who understand the NRI experience — family pressure, cultural isolation, and the longing for home.', url: 'https://www.leanon.app/nri-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What is NRI peer support?', acceptedAnswer: { '@type': 'Answer', text: 'NRI peer support means talking to a real Indian person — not a therapist, not an AI — who understands the specific pressures of living abroad: dual identity, family expectations from afar, cultural loneliness, visa anxiety. LeanOn listeners have lived experience with these exact pressures.' } },
  { '@type': 'Question', name: 'Do listeners understand the NRI or diaspora experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and many have personal experience with family emigrating, siblings abroad, or their own experience navigating between cultures. You do not have to explain what it means to feel like a different person in two different worlds.' } },
  { '@type': 'Question', name: 'What time zone are listeners in?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are India-based (IST — UTC+5:30). This works naturally for diaspora users: India evening (7pm–11pm IST) is US East Coast morning (8:30am–12:30pm EST) and UK evening (2:30pm–6:30pm GMT). If you have a quiet moment before your workday, Indian listeners are likely available.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are anonymous. You sign up with only a phone number and first name — no last name, no photo, no social login. Listeners sign confidentiality agreements. Nothing from your session is shared with your family, your employer, or anyone in India.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions start from US$10 for 15 minutes. Your first 5-minute session is free — you can stop after those 5 minutes and pay nothing. There is no subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Support for NRIs & Indians Abroad', item: 'https://www.leanon.app/nri-support' },
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

export default function NriSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Support for NRIs &amp; Indians Abroad</span></nav>
        <div className="hero">
          <p className="badge">NRI Support &middot; Indians Abroad &middot; Diaspora</p>
          <h1>Someone who actually gets <em>the NRI experience.</em></h1>
          <p className="lead">The loneliness that does not translate. The calls home where you say everything is fine. The exhaustion of holding two worlds at once. Talk to a real Indian peer listener who understands — no explaining required. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>The Things You Cannot Say in the WhatsApp Group</h2>
          <p>You moved abroad and everyone back home thinks you made it. The assumption is that distance equals success equals happiness. Telling your parents you are lonely feels ungrateful. Telling your friends back home feels like complaining about a life they would trade theirs for. So you say nothing.</p>
          <p>But the loneliness is real. The identity confusion is real. The low-grade grief of missing every wedding, every festival, every casual Sunday at home &mdash; it accumulates. Living between two cultures means you are never fully at ease in either. Your Indian self feels muted abroad; your abroad-self feels like a stranger at home.</p>
          <p>LeanOn listeners are Indian, based in India, and many have direct experience with family members abroad or have themselves navigated dual cultures. You do not have to explain what Diwali away from home feels like. They already know.</p>
        </div>
        <div className="section">
          <h2>Timing That Actually Works For You</h2>
          <p>LeanOn listeners are based in India (IST). This creates a natural overlap that works for diaspora users: when India is in the evening (7pm&ndash;11pm IST), the US East Coast is in the morning (8:30am&ndash;12:30pm EST), the UK is in the evening (2:30pm&ndash;6:30pm GMT), and the Gulf is in the late afternoon.</p>
          <p>If you have a quiet moment before your workday starts, or on a Sunday morning when the silence is heaviest, Indian listeners are very likely to be available. No appointment needed. Browse who is online right now and start a session.</p>
        </div>
        <div className="section">
          <h2>What NRI Peer Support Is (and Is Not)</h2>
          <p>LeanOn is peer support &mdash; not a helpline, not a therapist, not a chatbot. Listeners are real people with lived experience. They will not give you advice about your visa or your marriage. They will listen while you say the things you have been carrying. Sometimes being heard by someone who understands is what shifts something.</p>
          <p>Sessions are text-based and anonymous. You sign up with only a phone number and first name. Nothing is shared with your family, your employer, or anyone back home. Your first 5-minute session is free.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You do not have to hold it alone.</h2><p>Real Indian peer listener. Understands the NRI experience. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indian-diaspora-support">Indian diaspora support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/loneliness-support-online">Loneliness support &rarr;</a>
          <a href="/someone-to-talk-to">Someone to talk to &rarr;</a>
          <a href="/online-emotional-support">Online emotional support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
