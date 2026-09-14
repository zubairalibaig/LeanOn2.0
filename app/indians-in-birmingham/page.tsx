import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Support for Indians in Birmingham | Handsworth, Soho, Lozells | LeanOn',
  description: 'Birmingham has one of the UK\'s largest and oldest Indian communities. Handsworth, Soho Road — and still, some things are hard to say out loud. Talk to someone who gets it.',
  keywords: ['indians in birmingham', 'handsworth indian community', 'birmingham indian support', 'soho road birmingham', 'desi support birmingham', 'indian loneliness birmingham uk'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-birmingham' },
  openGraph: { title: 'Support for Indians in Birmingham | Handsworth, Soho, Lozells | LeanOn', description: 'Birmingham has one of the UK\'s largest and oldest Indian communities. Handsworth, Soho Road — and still, some things are hard to say out loud. Talk to someone who gets it.', url: 'https://www.leanon.app/indians-in-birmingham', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Birmingham Indian community?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the British Indian diaspora experience — including Birmingham\'s Punjabi and Gujarati communities, the intergenerational pressures of a community that has been here for generations, and the particular dynamics of Handsworth and Soho Road. No explanation needed.' } },
  { '@type': 'Question', name: 'When is a good time to connect from Birmingham?', acceptedAnswer: { '@type': 'Answer', text: 'UK (GMT/BST) is 5.5 hours behind IST in winter and 4.5 hours in summer. 3pm Birmingham = 8:30pm India. Afternoon in Birmingham is Indian evening — a reliable window for listeners.' } },
  { '@type': 'Question', name: 'Is this private from the Birmingham community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Listeners are in India with no connection to the Birmingham Indian network. Nothing is shared.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Birmingham', item: 'https://www.leanon.app/indians-in-birmingham' },
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

export default function IndiansInBirminghamPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Birmingham</span></nav>
        <div className="hero">
          <p className="badge">Indians in Birmingham &middot; Handsworth &middot; Soho Road</p>
          <h1>Soho Road to Handsworth. <em>You know this community. Do they know you?</em></h1>
          <p className="lead">Birmingham&rsquo;s Indian community — especially the Punjabi and Gujarati communities around Handsworth, Soho Road, and Lozells — goes back generations. It&rsquo;s tight-knit. It looks after its own. And sometimes that same closeness means nothing can be said out loud. Talk to someone outside Birmingham who still completely understands. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Handsworth, Soho Road, Lozells: Generations of Community</h2>
          <p>Birmingham&rsquo;s Indian community is one of the oldest and most established in the United Kingdom. The first wave of Punjabi and Gujarati immigrants arrived in the 1950s and 60s, many settling in Handsworth and the Soho Road corridor. Third and fourth generation families now live here. The community has built temples, gurdwaras, community centres, and political representation that few other Indian diaspora communities outside London can match.</p>
          <p>The depth of this community is its great strength — and also the source of particular pressures. When the community has been here for generations, the expectations are layered with history. Your grandparents sacrificed. Your parents built. What are you doing? The community watches with love and judgement intertwined. Mental health struggles, marriage difficulties, identity questions — these things carry stigma in long-established communities that have survived by holding themselves together tightly.</p>
          <p>LeanOn gives you a real Indian peer listener in India — completely outside the Birmingham community network, completely inside the cultural context. You can say the actual thing. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Birmingham Indian Experience: What Goes Unsaid</h2>
          <p>The British Indian experience in Birmingham has its own particular weight. The identity question: British or Indian, and what does each mean? The generational gap between parents who came here with nothing and children who have everything but feel something is missing. The community&rsquo;s views on marriage, on mental health, on what is acceptable to say and what must be kept private.</p>
          <p>Birmingham (GMT/BST) is 5.5 hours behind IST in winter (4.5 hours in summer). 3pm in Birmingham is 8:30pm in India — a natural afternoon window when India is in the evening. A real Indian listener is available, no appointment needed. The sessions are anonymous and completely private from the Handsworth and Soho Road community. First 5 minutes always free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Outside the community. Inside the culture.</h2><p>Real Indian peer listener. Understands British Indian community dynamics. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indians-in-leicester">Indians in Leicester &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
