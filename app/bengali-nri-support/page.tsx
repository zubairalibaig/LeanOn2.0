import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Bengali NRI Support | Talk to Someone Who Understands Bangla Culture | LeanOn',
  description: 'Bengali NRIs in the UK, USA, and beyond — the cultural weight, intellectual loneliness, and missing home are real. Talk to Bengali listeners who understand.',
  keywords: ['bengali nri support', 'bangladeshi nri', 'bengali diaspora uk', 'bengali in usa', 'talk to bengali person online', 'bangali abroad'],
  alternates: { canonical: 'https://www.leanon.app/bengali-nri-support' },
  openGraph: { title: 'Bengali NRI Support | Talk to Someone Who Understands Bangla Culture | LeanOn', description: 'Bengali NRIs in the UK, USA, and beyond — the cultural weight, intellectual loneliness, and missing home are real. Talk to Bengali listeners who understand.', url: 'https://www.leanon.app/bengali-nri-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk in Bengali?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Several LeanOn listeners speak Bengali. Mention your language preference when beginning your session and your listener will communicate with you in Bengali or Hindi, as you prefer.' } },
  { '@type': 'Question', name: 'Do listeners understand the West Bengal vs Bangladesh distinction?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Bengali diaspora spans both West Bengal and Bangladesh and carries different cultural weights. Listeners understand this without needing it explained — the specific experiences of Bong NRIs versus Bangladeshi NRIs are different and both are heard.' } },
  { '@type': 'Question', name: 'I feel a specific intellectual loneliness abroad. Can listeners understand that?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Bengali intellectual tradition is something listeners understand — the specific frustration of being in an environment where your cultural reference points do not land, where the conversation is always a translation. That is a real and nameable form of loneliness.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Your Bengali community and your family will never know. Sessions are anonymous — phone number and first name only. Nothing is shared beyond the session.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription required.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Bengali NRI Support', item: 'https://www.leanon.app/bengali-nri-support' },
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

export default function BengaliNriSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Bengali NRI Support</span></nav>
        <div className="hero">
          <p className="badge">Bengali NRI &middot; Bangla Culture &middot; Diaspora Support</p>
          <h1>The intellectual loneliness of being Bengali abroad <em>is real and nameable.</em></h1>
          <p className="lead">Bengali NRIs carry a specific kind of cultural weight — the literature, the music, the food, the particular intellectual tradition that does not translate easily into other contexts. Whether you are from West Bengal or Bangladesh, in the UK, the US, or beyond, the loneliness of being between two worlds has a texture. Talk to a Bengali peer listener who understands it. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Cultural Weight That Goes Abroad With You</h2>
          <p>Bengali culture has a deep intellectual and artistic tradition — Tagore, Ray, the Baul music, the specific pleasure of adda, the way food is central to every occasion, the language pride that runs through generations. When you move abroad, you carry all of this with you, and what you find is that it is hard to fully live out in a new context.</p>
          <p>The UK Bengali community is one of the oldest South Asian diaspora communities — Tower Hamlets, east London, the generations who came before. The US has significant Bengali communities in New York, Boston, and the Bay Area. But being part of a diaspora community does not resolve the specific loneliness of missing the original. Community events are warm substitutes. Durga Puja in Queens is beautiful. It is not the same as being in Kolkata for it, and you can love it and still feel that absence.</p>
          <p>LeanOn listeners understand this — the specific, high-context Bengali homesickness that is partly cultural and partly personal. You do not have to explain it. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Pressure to Be the Successful, Brainy One</h2>
          <p>Bengali families often carry a particular kind of intellectual expectation. Education, professional achievement, cultural sophistication — the implicit standard that being Bengali means being accomplished. This pressure follows you abroad. The family call that is partly a check on career progress. The comparison to relatives who have &ldquo;done well.&rdquo; The specific weight of being the one who went to the best college and is expected to have the best outcome.</p>
          <p>What is less often named is the loneliness inside that success. You can be accomplished, intellectually engaged, professionally respected — and still feel a persistent emptiness that the success does not fill. That emptiness is not a failure. It is a human response to displacement and pressure that has been going on long enough that you have stopped noticing it consciously.</p>
        </div>

        <div className="section">
          <h2>West Bengal and Bangladesh — Different Journeys, Same Belonging</h2>
          <p>The Bengali diaspora includes people from West Bengal and Bangladesh, and these are meaningfully different experiences — different political histories, different migration patterns, different family cultures, sometimes different religions. LeanOn listeners understand these distinctions. You do not have to code-switch or simplify your identity for the listener to understand you.</p>
          <p>Whether the weight you are carrying is about family in Dhaka, homesickness for Kolkata, the specific stress of UK immigration status, or the loneliness of being the &ldquo;foreign one&rdquo; in every room you are in — a listener will hear it as it is. No judgment. First 5 minutes free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Amar kotha, amar moto keu shunuk.</h2><p>A Bengali listener who gets the weight without the translation. First 5 minutes free. Sessions from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
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
