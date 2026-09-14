import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Florida | Orlando, Tampa, Miami | LeanOn',
  description: 'Orlando, Tampa, Jacksonville — Florida\'s Indian community is growing fast. The sunshine is great. The loneliness less visible. Talk to someone who gets it.',
  keywords: ['indians in florida', 'orlando indian support', 'tampa indian community', 'florida indian mental health', 'desi support florida', 'indian loneliness florida'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-florida' },
  openGraph: { title: 'Emotional Support for Indians in Florida | Orlando, Tampa, Miami | LeanOn', description: 'Orlando, Tampa, Jacksonville — Florida\'s Indian community is growing fast. The sunshine is great. The loneliness less visible. Talk to someone who gets it.', url: 'https://www.leanon.app/indians-in-florida', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand Indian life in Florida?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience — including the Florida Indian experience of being in a fast-growing but still-forming community, new arrivals still building connections, and the specific isolation that warm weather and suburban sprawl can create.' } },
  { '@type': 'Question', name: 'What time works to connect from Florida?', acceptedAnswer: { '@type': 'Answer', text: 'Florida (EST) is 10.5 hours behind IST. 8am Florida = 6:30pm India. Early Florida mornings before work align with Indian evenings — a reliable window for finding listeners online.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are fully anonymous — phone number and first name only. Nothing is shared with your community, family, or employer.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Florida', item: 'https://www.leanon.app/indians-in-florida' },
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

export default function IndiansInFloridaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Florida</span></nav>
        <div className="hero">
          <p className="badge">Indians in Florida &middot; Orlando &middot; Tampa</p>
          <h1>Florida sunshine. <em>And the loneliness it doesn&rsquo;t fix.</em></h1>
          <p className="lead">Florida&rsquo;s Indian community has exploded in the last decade — Orlando, Tampa, Jacksonville, and South Florida all have growing desi communities. But rapid growth means new arrivals who haven&rsquo;t built community yet, children between cultures, and the specific loneliness of warm weather that somehow makes isolation feel worse. Talk to a real peer listener. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Florida&rsquo;s Indian Community: Growing Fast, Still Finding Itself</h2>
          <p>Florida has seen dramatic growth in its Indian population over the past decade. Orlando draws Indian tech workers and healthcare professionals. Tampa has a substantial and growing desi community in its suburbs. Jacksonville, Boca Raton, and the South Florida corridor all have significant and expanding Indian presences. The state is sunny, affordable compared to the coasts, and increasingly popular as a relocation destination for Indians from more expensive metros.</p>
          <p>But rapid growth means the community infrastructure is still forming in many parts of Florida. New arrivals may not yet have found their people — the temple, the cricket club, the Saturday language class for children. The car-dependent sprawl of Florida suburbs can compound isolation. And unlike the tight-knit communities of New Jersey or Atlanta, in many Florida cities you can be Indian and genuinely alone.</p>
          <p>LeanOn connects you with a real Indian peer listener in India — someone who understands the NRI experience fully even before the Florida community solidifies around you. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>When Sunshine Doesn&rsquo;t Fix the Weight</h2>
          <p>Florida is supposed to be the good life — warm weather, lower taxes, outdoor living. For many Indians who have relocated from the Northeast or Midwest, it is genuinely better in many ways. And yet the immigrant weight doesn&rsquo;t leave when you arrive in a nicer climate. The family back in India still calls. The H-1B still depends on your employer. The identity questions are still there. Children still navigate between cultures.</p>
          <p>Florida (EST) is 10.5 hours behind IST. 8am Florida is 6:30pm India. Early mornings before the Florida workday begins — even in the sunshine, even with the palm trees outside — are Indian evenings. A real listener is available, no appointment needed. Anonymous, private, first 5 minutes always free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Sun and real support.</h2><p>Real Indian peer listener. Understands Florida NRI life. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/indians-in-texas">Indians in Texas &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
