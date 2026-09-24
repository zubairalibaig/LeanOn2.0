import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Manchester | Peer Support for the North of England\'s Indian Community | LeanOn',
  description: "Manchester and the North of England have a significant Indian community. But the northern cold and distance from London's larger Indian hubs has its own loneliness.",
  keywords: ['indians in manchester', 'indian community manchester', 'nri manchester', 'south asian manchester', 'british indians manchester', 'desi manchester'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-manchester' },
  openGraph: { title: 'Indians in Manchester | Peer Support for the North of England\'s Indian Community | LeanOn', description: "Manchester and the North of England have a significant Indian community. But the northern cold and distance from London's larger Indian hubs has its own loneliness.", url: 'https://www.leanon.app/indians-in-manchester', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand the Manchester Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and trained to understand the NRI experience, including the British Indian context — the north-south divide within the British Indian community, the Rusholme and Bolton communities, the specific dynamics of being Indian in a northern English city with its own distinct culture.' } },
  { '@type': 'Question', name: 'What time can I connect from Manchester?', acceptedAnswer: { '@type': 'Answer', text: 'Manchester (GMT/BST) is 5.5 hours behind IST in winter and 4.5 hours behind in summer. 2pm Manchester in winter = 7:30pm India. Afternoons or early evenings are good times to connect.' } },
  { '@type': 'Question', name: 'Is this different from talking to my family or British Indian friends?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are outside your Manchester social circle entirely. They don\'t know your family, your community, or your workplace. You can say what you actually feel without worrying about word getting back to anyone.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription required.' } },
  { '@type': 'Question', name: 'I feel caught between the British Indian community and British mainstream culture. Can listeners understand this?', acceptedAnswer: { '@type': 'Answer', text: 'This is one of the core experiences LeanOn was built for. The in-between identity of the British Indian — not fully belonging to either world, navigating both with exhausting fluency — is something listeners understand and can hold without judgment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Manchester', item: 'https://www.leanon.app/indians-in-manchester' },
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

export default function IndiansInManchesterPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Manchester</span></nav>
        <div className="hero">
          <p className="badge">Indians in Manchester &middot; North of England &middot; Rusholme &middot; Bolton</p>
          <h1>Rusholme curry mile. <em>The rain doesn&rsquo;t stop either.</em></h1>
          <p className="lead">Manchester has a substantial Indian and South Asian community — Rusholme, Bolton, Oldham, Burnley. But the North of England carries a particular loneliness for Indian immigrants: the distance from London&rsquo;s larger Indian hubs, the northern chill that goes beyond weather, and the in-between identity of being British Indian in a city that is proudly not London. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Rusholme, Bolton, Oldham: The Northern Indian Community</h2>
          <p>Manchester&rsquo;s Indian and South Asian community is one of the oldest and most established in England — Rusholme&rsquo;s curry mile is famous, and Bolton, Oldham, and Burnley have significant South Asian communities that go back generations. The Manchester University and University of Salford Indian student populations add a newer layer. The city&rsquo;s NHS hospitals and GP practices have large Indian medical professional communities.</p>
          <p>But Manchester is not London. London&rsquo;s Indian community — Wembley, Southall, East Ham — has a scale and infrastructure that Manchester&rsquo;s simply doesn&rsquo;t match. The British Indian experience in Manchester has a particular character: more working-class roots, more industrial city history, more of the grit that comes with a northern English city that has been through hard decades. The Indian professional who moved to Manchester for the university or the NHS and finds themselves in a community that is real but different from what they imagined.</p>
          <p>LeanOn listeners understand the British Indian experience. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The North-South Divide Within the British Indian Community</h2>
          <p>The British Indian community has its own internal geography. London is the centre of gravity — the Bollywood screenings in Leicester Square, the Diwali celebrations at Trafalgar Square, the sheer density of Indian life in Wembley and Southall. Manchester Indians are aware of this, and many feel the pull. The Indian professional in Manchester who regularly takes the train to London for the weekend not just for work but for the relief of being in a denser Indian world.</p>
          <p>The north-south divide affects more than geography. It affects the kinds of Indian careers that exist in each city, the communities that formed, the class composition of the British Indian population in each region. Manchester&rsquo;s Indian community has more diversity in its origins — not just the Gujarati and Punjabi patterns of London, but Bangladeshi and Pakistani and Indian communities layered over each other in the northern mill towns. Navigating this is its own form of complexity.</p>
          <p>Manchester (GMT) is 5.5 hours behind IST in winter. 2pm in Manchester = 7:30pm in India. Afternoons are a good time to connect. From US$10.</p>
        </div>

        <div className="section">
          <h2>The Grit of Northern England and What It Asks of Indian Immigrants</h2>
          <p>Manchester has a particular cultural identity — direct, unsentimental, proud of its working-class roots, its music scene, its football. This is a city that values authenticity and is suspicious of pretension. For Indian immigrants, this can be both welcoming and alienating. Welcoming because the directness means less code-switching than in more formal English cities. Alienating because the cultural references are very specific to a northern English world — the Hacienda, the Industrial Revolution, the rivalry with Liverpool — that Indian immigrants don&rsquo;t share.</p>
          <p>The Indian student at Manchester University who loves the city but never quite feels part of it. The Indian NHS doctor who has been in the North West for six years and whose colleagues are warm and whose life is full and who has a quiet, persistent feeling of not belonging. LeanOn is for exactly this: a real Indian listener, anonymous, available in the afternoon before India&rsquo;s evening ends, no appointment needed.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Northern England, Indian roots. Talk to someone who holds both.</h2><p>Real Indian peer listener. Understands the British Indian experience in the North. Anonymous. First 5 minutes free. From US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/indians-in-london">Indians in London &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
