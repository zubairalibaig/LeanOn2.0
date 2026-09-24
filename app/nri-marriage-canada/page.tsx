import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Marriage Issues in Canada | Punjabi, Gujarati Families | LeanOn',
  description: 'Marriage pressure on Punjabi or Gujarati NRIs in Canada is real and complex. Talk to a peer listener who understands arranged marriage, joint family pressure, and NRI expectations.',
  keywords: ['nri marriage canada', 'punjabi marriage canada', 'arranged marriage nri canada', 'indian marriage issues canada', 'desi marriage canada', 'nri spouse canada', 'brampton marriage pressure'],
  alternates: { canonical: 'https://www.leanon.app/nri-marriage-canada' },
  openGraph: { title: 'NRI Marriage Issues in Canada | Punjabi, Gujarati Families | LeanOn', description: 'Marriage pressure on Punjabi or Gujarati NRIs in Canada is real and complex. Talk to a peer listener who understands arranged marriage, joint family pressure, and NRI expectations.', url: 'https://www.leanon.app/nri-marriage-canada', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand Punjabi and Gujarati marriage dynamics in Canada?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand Punjabi and Gujarati cultural dynamics around marriage — the rishta process, joint family pressure, the community watching, and the specific weight of these traditions in the Canadian diaspora context.' } },
  { '@type': 'Question', name: 'What if I\'m facing pressure to get married and don\'t want to?', acceptedAnswer: { '@type': 'Answer', text: 'That is exactly the kind of thing a peer listener can hold with you. The pressure to marry, the fear of disappointing your family, the guilt of wanting something different — these are real and complicated. A listener won\'t tell you what to do, but they will genuinely hear you.' } },
  { '@type': 'Question', name: 'What if my marriage is in trouble and I don\'t want the community to know?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions are completely anonymous. Only a phone number and first name. Listeners are in India, outside your Brampton or Surrey community entirely. Nothing is shared with anyone.' } },
  { '@type': 'Question', name: 'Is this also for men dealing with marriage pressure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn is for anyone, regardless of gender. Men in the Indian diaspora often have fewer places to talk about marriage pressure, relationship struggles, or family expectations. A real peer listener will hear you without judgement.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Marriage Canada', item: 'https://www.leanon.app/nri-marriage-canada' },
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

export default function NriMarriageCanadaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Marriage Canada</span></nav>
        <div className="hero">
          <p className="badge">NRI Marriage Canada &middot; Punjabi &middot; Gujarati</p>
          <h1>Canadian life. Indian family expectations. <em>Something has to give.</em></h1>
          <p className="lead">Brampton and Surrey have some of the highest concentrations of Punjabi families in the world outside of Punjab — and with that comes the full weight of community expectations around marriage. The &lsquo;when are you getting married?&rsquo; calls. The rishta pressure from parents back home. The mismatch between who you&rsquo;ve become here and who they want you to marry. Talk to a real peer listener. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Marriage Pressure in Brampton, Surrey, and Beyond</h2>
          <p>The Punjabi communities of Brampton, Ontario and Surrey, British Columbia have recreated community structures of extraordinary density and warmth. The gurdwaras are packed. The family networks are tight. The expectations around marriage — when, to whom, from what family background — are high and publicly enforced.</p>
          <p>For Indian-Canadians navigating these communities, marriage pressure is one of the most common sources of genuine distress. The aunties at the gurdwara know your age. The parents have shortlists. The family WhatsApp groups circulate rishtas. If you are in your late twenties or thirties and unmarried, the scrutiny is constant. If you are married but struggling, the expectation to stay and adjust — and to keep it private — is equally intense.</p>
          <p>Gujarati communities in the GTA face similar dynamics — the rishta culture, the caste considerations, the expectation that family honour is maintained through proper marriages. LeanOn is for anyone navigating these pressures, whatever their background. A real Indian peer listener in India — outside your Brampton or Surrey community entirely. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>When Canadian Values and Indian Expectations Collide</h2>
          <p>Growing up or building a life in Canada creates particular tensions around marriage. Canadian culture — with its emphasis on individual choice, personal fulfilment, and the acceptability of leaving a relationship that isn&rsquo;t working — pulls in one direction. Indian family culture pulls in another. The result is often a person caught between two incompatible instructions for their love life, unable to fully honour either without disappointing someone they love.</p>
          <p>This tension doesn&rsquo;t resolve by itself. But talking about it — with someone who truly understands both sides, without an agenda — can create clarity. Toronto and Vancouver (EST and PST) are 10.5–13.5 hours behind IST. Morning in Canada is evening in India. Listeners are available, no appointment needed. First 5 minutes free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Heard. Without judgement. Without the community knowing.</h2><p>Real Indian peer listener. Understands Canadian Indian marriage dynamics. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/punjabi-support-canada">Punjabi support Canada &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/arranged-marriage-nri">Arranged marriage NRI &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
