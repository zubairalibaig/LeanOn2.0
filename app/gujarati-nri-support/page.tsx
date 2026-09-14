import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Gujarati NRI Support | Talk to Someone Who Understands Your World | LeanOn',
  description: 'Gujaratis abroad carry unique pressures — business family expectations, patels abroad, the drive to succeed. LeanOn listeners understand the Gujarati NRI experience.',
  keywords: ['gujarati nri support', 'gujarati diaspora', 'nri gujarati uk', 'gujarati in usa', 'gujarati abroad', 'talk to gujarati online'],
  alternates: { canonical: 'https://www.leanon.app/gujarati-nri-support' },
  openGraph: { title: 'Gujarati NRI Support | Talk to Someone Who Understands Your World | LeanOn', description: 'Gujaratis abroad carry unique pressures — business family expectations, patels abroad, the drive to succeed. LeanOn listeners understand the Gujarati NRI experience.', url: 'https://www.leanon.app/gujarati-nri-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk in Gujarati?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Several LeanOn listeners speak Gujarati and Hindi. Mention your language preference when you begin your session and your listener will accommodate you.' } },
  { '@type': 'Question', name: 'Do listeners understand the Patel community pressure specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Patel community carries specific expectations — family business involvement, arranged marriage within community, the reputation weight of the Patel name abroad. Listeners understand this without needing it explained.' } },
  { '@type': 'Question', name: 'Is this confidential from my community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Your Gujarati community in Leicester, Harrow, or Houston will never know. Sessions use only your phone number and first name. Nothing is shared.' } },
  { '@type': 'Question', name: 'What if my family pressure is about the family business?', acceptedAnswer: { '@type': 'Answer', text: 'Business family pressure — the expectation to join or grow the family enterprise, the conflict between your own career ambitions and family duty — is something LeanOn listeners hear often. You can talk about it without being judged or advised.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions start from ₹160 for 15 minutes. The first 5 minutes of every session are free. No subscription. Pay only if the session feels right after the first 5 minutes.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Gujarati NRI Support', item: 'https://www.leanon.app/gujarati-nri-support' },
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

export default function GujaratiNriSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Gujarati NRI Support</span></nav>
        <div className="hero">
          <p className="badge">Gujarati NRI &middot; UK &amp; USA &middot; Diaspora Support</p>
          <h1>You built something incredible abroad. <em>And you are still carrying it alone.</em></h1>
          <p className="lead">Gujaratis have one of the most established diasporas in the world — Leicester, Harrow, Houston, New Jersey. The community is strong. The expectations are stronger. Business family pressure, arranged marriage within the community, the drive to succeed that never quite turns off. Talk to a Gujarati peer listener who understands the weight behind the accomplishment. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Gujarati NRI Pressure Nobody Names</h2>
          <p>The Gujarati business community abroad is legendary — from the corner shops that became retail empires to the motels that built a community identity. But behind the entrepreneurial success narrative is the individual human being who carries the weight of that legacy. The expectation that you will work in the family business, grow it, not disgrace the family name — this does not pause because you moved to Leicester or Houston.</p>
          <p>Patel community identity specifically comes with a particular set of expectations. Marriage within the community is not just preferred — it is assumed. The matrimonial networks are active and intrusive. And the reputation of your family in the broader Patel community is always silently present in decisions that should feel personal. This is a real weight, and it is one most Gujaratis abroad carry without being able to articulate it to people outside the community.</p>
          <p>LeanOn listeners understand the Gujarati social fabric. They understand what it means to feel the eyes of the community even from thousands of miles away. You do not have to explain the structure — just talk about what it feels like from where you are. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Navratri, Diwali, and the Homesickness That Goes Unacknowledged</h2>
          <p>Gujarati NRIs celebrate. The garba events in Leicester are famous. The Diwali community gatherings are large and warm. And yet there is something that is always slightly off — a feeling that the celebration is a replica of something that exists fully only back home. You can love the community event and still feel the specific ache of the original being so far away.</p>
          <p>This kind of homesickness is hard to name because it comes packaged in community warmth. You are not alone in the room. But you are alone in the feeling. LeanOn is a space to name that feeling without dismissing it.</p>
        </div>

        <div className="section">
          <h2>Your Ambitions vs. What the Family Needs</h2>
          <p>One of the most common things Gujarati NRIs carry is the tension between their own ambitions and what the family expects. You may have come abroad with a plan that was entirely your own — a career, a lifestyle, a sense of self — and found that the family plan has a different trajectory in mind. This tension rarely gets spoken directly. It lives in loaded conversations at family gatherings, in the way certain topics are avoided on calls home.</p>
          <p>LeanOn peer listeners offer a space where you can speak this tension directly, without consequence. The conversation goes nowhere. The listener does not know your family. The goal is simply to let you say the things that need to be said out loud to someone who will actually hear them.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Someone who understands the Gujarati weight abroad.</h2><p>No judgment. No advice. Just a real listener who gets it. First 5 minutes free. Sessions from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
