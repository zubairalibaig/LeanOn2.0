import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Phoenix | Chandler, Tempe, Scottsdale | LeanOn',
  description: 'Chandler, Tempe, Scottsdale — Phoenix is growing fast as an Indian hub. Hot summers, new city, finding your people. Talk to a peer listener in India who understands.',
  keywords: ['indians in phoenix', 'chandler indian community', 'tempe indian support', 'scottsdale indian', 'phoenix indian mental health', 'desi support arizona'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-phoenix' },
  openGraph: { title: 'Emotional Support for Indians in Phoenix | Chandler, Tempe, Scottsdale | LeanOn', description: 'Chandler, Tempe, Scottsdale — Phoenix is growing fast as an Indian hub. Hot summers, new city, finding your people. Talk to a peer listener in India who understands.', url: 'https://www.leanon.app/indians-in-phoenix', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand Indian life in Phoenix?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience — including the Phoenix Indian experience of being in a fast-growing, newly-forming community where people are still building their networks, and the particular isolation of a car-dependent desert city.' } },
  { '@type': 'Question', name: 'What time works to connect from Phoenix?', acceptedAnswer: { '@type': 'Answer', text: 'Phoenix (MST, no daylight saving) is 11.5 hours behind IST in winter and 12.5 hours behind in summer (when the rest of the US is on daylight saving). 8am Phoenix = 8:30–9:30pm India depending on season. Early mornings work well.' } },
  { '@type': 'Question', name: 'Is this private from my Phoenix community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Nothing is shared with your Chandler or Scottsdale community, your employer, or family back in India.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Phoenix', item: 'https://www.leanon.app/indians-in-phoenix' },
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

export default function IndiansInPhoenixPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Phoenix</span></nav>
        <div className="hero">
          <p className="badge">Indians in Phoenix &middot; Chandler &middot; Scottsdale</p>
          <h1>New city. Fast growth. <em>Still finding your people.</em></h1>
          <p className="lead">Chandler, Tempe, and Scottsdale have seen a dramatic rise in Indian tech workers as companies expand to Phoenix. Many are new arrivals still building community. The heat, the sprawl, the car-dependent life — it can feel isolating while you&rsquo;re building your roots. Talk to someone in India in the meantime. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Chandler, Tempe, Scottsdale: Phoenix&rsquo;s Emerging Indian Hub</h2>
          <p>The Greater Phoenix area — particularly Chandler, Tempe, Gilbert, and Scottsdale — has seen rapid growth in its Indian tech worker population. Intel&rsquo;s semiconductor fabs in Chandler, the Taiwan Semiconductor Manufacturing Company (TSMC) facilities, and the broader tech expansion in the East Valley have brought thousands of Indian engineers and their families to Arizona in the past few years.</p>
          <p>Phoenix is hot, sprawling, and car-dependent. Unlike the Bay Area or Dallas, the Indian community infrastructure is still catching up. The temple exists, the Indian grocery stores are there, and the community is forming — but for many new arrivals, the sense of deep community that takes years to build is not yet present. You might be in a new subdivision in Gilbert with Indian neighbours on one side but still feel profoundly alone in your first year or two.</p>
          <p>LeanOn bridges that gap. A real Indian peer listener in India, available now, before your Phoenix community fully forms. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Desert and the Distance</h2>
          <p>Phoenix in July is 115 degrees Fahrenheit. The outdoor life that other parts of America offer — evening walks, weekend socialising on porches — is compressed into a few months of bearable weather. The rest of the time, Phoenix life moves indoors, into air conditioning, from car to building and back. This suburban isolation, combined with a still-forming community and the usual NRI pressures, creates a specific kind of loneliness.</p>
          <p>Phoenix (MST) does not observe daylight saving time. In winter, 8am Phoenix is 8:30pm India — late evening but still within reach. In summer (when the rest of the US moves clocks forward), 8am Phoenix is 9:30pm India — slightly later but still workable. Early mornings in Phoenix align well with Indian late evenings. No appointment needed, sessions are anonymous, first 5 minutes free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Before your Phoenix community forms.</h2><p>Real Indian peer listener. Understands the new arrival NRI experience. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-texas">Indians in Texas &rarr;</a>
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
