import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Vancouver | Surrey, Burnaby | LeanOn',
  description: 'Surrey, Burnaby, Abbotsford — BC has Canada\'s second-largest South Asian community. Beautiful province. Hard to talk about what\'s actually going on. First 5 min free.',
  keywords: ['indians in vancouver', 'surrey bc indian support', 'burnaby indian community', 'abbotsford indian', 'vancouver indian mental health', 'desi support bc', 'punjabi support surrey'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-vancouver' },
  openGraph: { title: 'Emotional Support for Indians in Vancouver | Surrey, Burnaby | LeanOn', description: 'Surrey, Burnaby, Abbotsford — BC has Canada\'s second-largest South Asian community. Beautiful province. Hard to talk about what\'s actually going on. First 5 min free.', url: 'https://www.leanon.app/indians-in-vancouver', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Surrey and BC Punjabi community?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the Punjabi diaspora experience — including the specific BC Punjabi community, the pressure of the community in Surrey, and the identity weight of immigrant life in Canada. No explanation needed.' } },
  { '@type': 'Question', name: 'When can I connect from Vancouver?', acceptedAnswer: { '@type': 'Answer', text: 'Vancouver (PST/PDT) is 13.5 hours behind IST. 8am Vancouver = 9:30pm India. Early mornings in Vancouver are late Indian evenings — still workable. 6am Vancouver = 7:30pm India, a stronger window.' } },
  { '@type': 'Question', name: 'Is this private from the Surrey community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Listeners are in India with no connection to the Surrey or BC Indian community. Nothing is shared.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Vancouver', item: 'https://www.leanon.app/indians-in-vancouver' },
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

export default function IndiansInVancouverPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Vancouver</span></nav>
        <div className="hero">
          <p className="badge">Indians in Vancouver &middot; Surrey &middot; BC Punjabi</p>
          <h1>Surrey. Burnaby. Beautiful BC. <em>And the loneliness that the mountains don&rsquo;t fix.</em></h1>
          <p className="lead">Surrey has one of the most dense Punjabi communities in the world outside of Punjab. And still — the isolation of immigrant life, the rain, the pressure to send money back, the parents who sacrificed, the identity that doesn&rsquo;t fit neatly in Canada or in India. Talk to a real peer listener. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Surrey, Burnaby, Abbotsford: BC&rsquo;s Punjabi Heartland</h2>
          <p>British Columbia has one of the world&rsquo;s most remarkable concentrations of Punjabi Canadians — Surrey&rsquo;s Punjabi community is extraordinary in its scale and density. The gurdwaras of Surrey and Abbotsford are among the largest outside of India. The Punjabi Market on Main Street in Vancouver is one of the most famous South Asian commercial corridors in North America. Burnaby, Langley, and Delta all have significant Indian communities.</p>
          <p>The BC Indian community — predominantly Punjabi, with significant Gujarati and South Indian communities — is one that has built real institutions here. But size and institutions don&rsquo;t dissolve the specific weight of immigrant life. The community pressure in Surrey can be as intense as anywhere: the family hierarchy, the expectations around marriage and career, the gossip network that makes it difficult to say anything true within the community.</p>
          <p>LeanOn is a space completely outside the Surrey and BC community networks — where a real Indian peer listener in India can hear you without it going anywhere. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>BC Rain and Real Connection</h2>
          <p>Vancouver is one of the most beautiful cities in the world — the mountains, the ocean, Stanley Park. It is also one of the rainiest. The long grey and rainy season from October through April has a genuine effect on wellbeing. Combined with the pressures of immigrant life — a housing market that remains extraordinarily expensive, the pressure to establish yourself in a Canadian career, the distance from family in India — the rain can compound a quiet isolation.</p>
          <p>Vancouver (PST/PDT) is 13.5 hours behind IST. 6am Vancouver is 7:30pm India — a strong window. 8am Vancouver is 9:30pm India — still workable. Weekend mornings before the gurdwara or the family gathering in Surrey are India&rsquo;s evenings. No appointment needed, sessions are anonymous, first 5-minute session free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Beautiful BC. Real support behind it.</h2><p>Real Indian peer listener. Understands BC Punjabi and Indian community life. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/punjabi-support-canada">Punjabi support Canada &rarr;</a>
          <a href="/indians-in-toronto">Indians in Toronto &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
