import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in New Jersey | Edison, Parsippany | LeanOn',
  description: 'Edison, Parsippany, Cherry Hill — NJ has one of the highest Indian densities outside India. Feeling unseen despite being surrounded? Talk to someone who understands.',
  keywords: ['indians in new jersey', 'edison nj indian support', 'parsippany indian community', 'nj indian mental health', 'new jersey desi support', 'indian loneliness nj'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-new-jersey' },
  openGraph: { title: 'Emotional Support for Indians in New Jersey | Edison, Parsippany | LeanOn', description: 'Edison, Parsippany, Cherry Hill — NJ has one of the highest Indian densities outside India. Feeling unseen despite being surrounded? Talk to someone who understands.', url: 'https://www.leanon.app/indians-in-new-jersey', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is this for NJ Indians specifically?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is for Indians anywhere abroad, and listeners understand the specific NJ Indian experience — the Oak Tree Road community, the high density in Edison and Parsippany, the pressure of being in one of the most watched Indian communities in America. You don\'t need to explain the context.' } },
  { '@type': 'Question', name: 'When is the best time to connect from New Jersey?', acceptedAnswer: { '@type': 'Answer', text: 'New Jersey (EST) is 10.5 hours behind IST. 8am NJ = 6:30pm India. Your morning before the commute aligns with Indian evenings — a reliable window for finding a listener online.' } },
  { '@type': 'Question', name: 'Is this private from the Edison and Parsippany community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous. Only a phone number and first name. Listeners are in India, with no connection to NJ Indian networks. Nothing leaves the session.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in New Jersey', item: 'https://www.leanon.app/indians-in-new-jersey' },
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

export default function IndiansInNewJerseyPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in New Jersey</span></nav>
        <div className="hero">
          <p className="badge">Indians in NJ &middot; Edison &middot; Parsippany</p>
          <h1>Edison has more Indians per mile than most cities in India. <em>And still, loneliness finds a way.</em></h1>
          <p className="lead">New Jersey&rsquo;s Indian community is legendary — Oak Tree Road in Edison feels like a different country. But high density isn&rsquo;t the same as deep connection. The gossip circuit. The keeping-up-with-the-Guptas pressure. The feeling that everyone knows your business. Talk to someone outside the NJ Indian community who still gets the culture completely. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Oak Tree Road and the Paradox of Visibility</h2>
          <p>Edison&rsquo;s Oak Tree Road — the stretch of Indian restaurants, sari shops, grocery stores, and gold jewellers — is one of the most famous Indian commercial corridors in the world. Parsippany, Iselin, Cherry Hill, Somerset — New Jersey&rsquo;s Indian community has roots going back to the 1970s and 80s. Third and fourth generation families sit alongside recent arrivals. The infrastructure is extraordinary.</p>
          <p>And with that extraordinary density comes a very particular kind of social pressure. Everyone knows everyone. News travels fast. Your marriage, your job, your children&rsquo;s schools, your parents&rsquo; health — all of it circulates. The community holds you warmly and also watches you closely. You can be on Oak Tree Road surrounded by hundreds of your own people and feel completely unable to say a true word.</p>
          <p>LeanOn offers a real Indian peer listener in India — completely outside your NJ network, completely inside the culture. You can say the actual thing. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The NJ Indian Experience: Real Talk</h2>
          <p>New Jersey Indians carry a particular mix of pressures. Many work in New York — the commute, the finance or tech or pharma career, the cost of living that demands two professional incomes. The expectation to own a house in the right neighbourhood, put children in the right school, attend the right events. All performed with a smile at the Edison mandir on weekends.</p>
          <p>New Jersey (EST) is 10.5 hours behind IST. 8am NJ is 6:30pm in India. Your morning commute window — walking to the NJ Transit platform, sitting on the train to Penn Station — is India&rsquo;s evening. You could have a real conversation with a real Indian listener before your workday even starts. No appointment. Anonymous. Completely private from the Oak Tree Road community.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Outside the NJ network. Inside the culture.</h2><p>Real Indian peer listener. Understands the NJ Indian experience. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/indians-in-new-york">Indians in New York &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
