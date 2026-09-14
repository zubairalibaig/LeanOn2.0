import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Atlanta | Alpharetta, Johns Creek | LeanOn',
  description: 'Alpharetta, Johns Creek, Duluth — Atlanta\'s Indian community is one of America\'s closest-knit. But community and connection aren\'t the same thing. Talk to someone who gets it.',
  keywords: ['indians in atlanta support', 'alpharetta indian community', 'johns creek indian support', 'duluth georgia indian', 'atlanta indian mental health', 'desi support atlanta'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-atlanta' },
  openGraph: { title: 'Emotional Support for Indians in Atlanta | Alpharetta, Johns Creek | LeanOn', description: 'Alpharetta, Johns Creek, Duluth — Atlanta\'s Indian community is one of America\'s closest-knit. But community and connection aren\'t the same thing. Talk to someone who gets it.', url: 'https://www.leanon.app/indians-in-atlanta', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Atlanta Indian community experience?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience including the close-knit community dynamics of places like Alpharetta and Johns Creek. You don\'t need to explain what it feels like when the community is both support and pressure.' } },
  { '@type': 'Question', name: 'What time zone works for talking from Atlanta?', acceptedAnswer: { '@type': 'Answer', text: 'Atlanta (EST) is 10.5 hours behind IST. 8am Atlanta = 6:30pm India. Your morning before work aligns with Indian evenings — a natural window when many listeners are available.' } },
  { '@type': 'Question', name: 'Will anyone in my community find out?', acceptedAnswer: { '@type': 'Answer', text: 'No. Sessions are fully anonymous — only a phone number and first name. Listeners are in India, outside your Atlanta network. Nothing is shared with your community, family, or employer.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'The first 5 minutes of every session are free. Sessions start from ₹160 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Atlanta', item: 'https://www.leanon.app/indians-in-atlanta' },
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

export default function IndiansInAtlantaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Atlanta</span></nav>
        <div className="hero">
          <p className="badge">Indians in Atlanta &middot; Alpharetta &middot; Johns Creek</p>
          <h1>Atlanta. The community you wanted. <em>The connection you still miss.</em></h1>
          <p className="lead">Alpharetta, Johns Creek, Duluth — the Atlanta metro has a dense, close-knit Indian community built around temples, cricket leagues, and Diwali parties. But sometimes the community itself is the pressure. Everyone watching. Everyone comparing. A real conversation with someone outside your circle — and inside your culture. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>When the Community Is Both Comfort and Pressure</h2>
          <p>The Atlanta Indian community — concentrated in Alpharetta, Johns Creek, Duluth, Suwanee, and Sugar Hill — is one of the most tightly woven Indian diaspora communities in America. The BAPS temple in Lilburn draws thousands. The Navratri celebrations in Alpharetta fill convention halls. The community infrastructure is genuinely remarkable.</p>
          <p>And precisely because it is so tight-knit, it can also be suffocating. Gossip travels fast. Everyone knows which families are struggling, which marriages are strained, whose children didn&rsquo;t make the gifted program. The social surveillance — done with warmth and genuine concern — means there are things you simply cannot say inside the community.</p>
          <p>LeanOn gives you a real Indian peer listener who is completely outside this network. Based in India, understanding everything about the culture, but with no connection to your Atlanta circle. You can say the actual thing. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Specific Weight of Atlanta Indian Life</h2>
          <p>Atlanta draws Indian professionals heavily in technology, finance, and healthcare — the Alpharetta tech corridor, the hospitals around Emory and Piedmont, the finance companies in Buckhead. With that comes the classic NRI weight: visa dependency, performance pressure, the family in India who are watching your every milestone from afar.</p>
          <p>Atlanta (EST) is 10.5 hours behind IST. 8am in Atlanta is 6:30pm in India. Your early morning commute to the office — the quiet before the workday starts — is India&rsquo;s evening. Listeners are available, no appointment needed. You can talk from the parking lot before you walk in, or from your kitchen before anyone else is awake.</p>
          <p>The sessions are text-based and anonymous. Nothing is shared with your employer, your Alpharetta neighbours, or family back in India. The weight you&rsquo;ve been carrying quietly has somewhere to go.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Outside the circle. Inside the culture.</h2><p>Real Indian peer listener. Understands Atlanta NRI life. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indians-in-texas">Indians in Texas &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
