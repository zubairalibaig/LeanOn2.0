import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in New York | Jackson Heights, Flushing | LeanOn',
  description: 'Jackson Heights, Flushing, Murray Hill — NYC\'s Indian community spans every borough. Yet New York loneliness is its own kind of beast. Talk to someone who understands.',
  keywords: ['indians in new york', 'jackson heights indian', 'queens indian community', 'nyc indian mental health', 'desi support new york', 'indian loneliness nyc', 'manhattan indian support'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-new-york' },
  openGraph: { title: 'Emotional Support for Indians in New York | Jackson Heights, Flushing | LeanOn', description: 'Jackson Heights, Flushing, Murray Hill — NYC\'s Indian community spans every borough. Yet New York loneliness is its own kind of beast. Talk to someone who understands.', url: 'https://www.leanon.app/indians-in-new-york', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand New York Indian life?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience — including the specific intensity of New York: the pace, the cost of living pressure, the isolation of a city of millions. You don\'t need to explain the context.' } },
  { '@type': 'Question', name: 'When can I connect from New York?', acceptedAnswer: { '@type': 'Answer', text: 'New York (EST) is 10.5 hours behind IST. 8am NYC = 6:30pm India. Your morning commute on the subway — Queens to Manhattan or anywhere — is Indian evening. No appointment needed.' } },
  { '@type': 'Question', name: 'Is this private from my community in Queens or New Jersey?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Listeners are in India with no connection to the NYC or NJ Indian network. Nothing is shared with anyone.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in New York', item: 'https://www.leanon.app/indians-in-new-york' },
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

export default function IndiansInNewYorkPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in New York</span></nav>
        <div className="hero">
          <p className="badge">Indians in NYC &middot; Queens &middot; Manhattan</p>
          <h1>Eight million people around you. <em>And still, some nights hit differently.</em></h1>
          <p className="lead">New York&rsquo;s Indian diaspora is scattered across Queens, Manhattan, New Jersey suburbs, and Long Island. The subway, the grind, the relentless pace — and somewhere in between the appointments and the ambition, a quieter loneliness. Talk to a real peer listener in India. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Jackson Heights to Murray Hill: New York&rsquo;s Indian Map</h2>
          <p>New York&rsquo;s Indian community is spread across the city in ways that reflect its diversity. Jackson Heights in Queens — the neighbourhood around 74th Street — is one of the most famous South Asian corridors in America, with Bengali, Bangladeshi, Pakistani, and Indian communities layered on top of each other. Flushing has a large Indian presence. Murray Hill in Manhattan is home to younger professionals. Long Island has established South Asian suburbs. New Jersey — just across the water — is an extension of this same diaspora.</p>
          <p>The city moves fast. Friendships form in workplaces and immediately take on a professional texture. The community is present — the restaurants, the temples, the cultural events — but deeply distributed. You might go weeks without a real conversation. The pace and ambition that drew you here are also the things that keep genuine connection at arm&rsquo;s length.</p>
          <p>LeanOn is for exactly this: a real Indian peer listener in India, understanding everything about where you come from, available when the New York pace briefly stops and something quieter comes through. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The New York Indian Experience: Real and Unspoken</h2>
          <p>New York draws Indian professionals in finance, technology, medicine, law, and the arts. Each carries a particular weight. The finance professional in Midtown who earns extraordinarily but works hours that leave no room for a life. The doctor doing a residency at a Manhattan hospital, 80-hour weeks, far from family. The tech worker in a Brooklyn apartment who moved from the Bay Area and is still figuring out what New York means to them.</p>
          <p>New York (EST) is 10.5 hours behind IST. 8am NYC is 6:30pm India. Your morning — whether you&rsquo;re on the 7 train from Jackson Heights or walking over the Queensboro Bridge — is India&rsquo;s evening. A real Indian listener is available, without an appointment, in the gaps the city briefly creates. Sessions are anonymous and completely private. The first 5 minutes are always free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>New York pace. Real human connection.</h2><p>Real Indian peer listener. Understands NYC Indian life. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/indians-in-new-jersey">Indians in New Jersey &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
