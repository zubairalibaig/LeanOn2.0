import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in San Jose | Peer Support for the Silicon Valley Community | LeanOn',
  description: "San Jose has one of the largest Indian populations in America. But tech success doesn't cure loneliness. Talk to someone who understands the Bay Area Indian experience.",
  keywords: ['indians in san jose', 'indian community san jose', 'south bay indians', 'silicon valley indian support', 'san jose nri', 'desi san jose'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-san-jose' },
  openGraph: { title: 'Indians in San Jose | Peer Support for the Silicon Valley Community | LeanOn', description: "San Jose has one of the largest Indian populations in America. But tech success doesn't cure loneliness. Talk to someone who understands the Bay Area Indian experience.", url: 'https://www.leanon.app/indians-in-san-jose', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand the Silicon Valley Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and are trained to understand the NRI experience — including the specific pressures of Bay Area tech life: H1B anxiety, layoff fear, the overachiever identity, and the loneliness that comes with working 60-hour weeks in a city that measures you by your company and title.' } },
  { '@type': 'Question', name: 'What timezone does San Jose connect from?', acceptedAnswer: { '@type': 'Answer', text: 'San Jose (PST) is 13.5 hours behind IST. 7am San Jose = 8:30pm India. Before your morning standup, Indian listeners are available in their evening. Early mornings before work are a good time to connect.' } },
  { '@type': 'Question', name: 'Will my employer or colleagues know I used LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn is completely anonymous — phone number and first name only. Nothing is shared with your company, your manager, your HR department, or anyone in your Bay Area community.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free every session. Sessions from ₹160 for 15 minutes. No subscription, no commitment.' } },
  { '@type': 'Question', name: 'Is this different from talking to a friend or family in India?', acceptedAnswer: { '@type': 'Answer', text: 'Listeners are trained to listen without judgment and without advice unless you ask. Unlike family, they won\'t worry about you, tell others, or try to fix your situation. You can say exactly what\'s on your mind.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in San Jose', item: 'https://www.leanon.app/indians-in-san-jose' },
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

export default function IndiansInSanJosePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in San Jose</span></nav>
        <div className="hero">
          <p className="badge">Indians in San Jose &middot; Silicon Valley &middot; South Bay</p>
          <h1>100,000 Indians in the Valley. <em>Still lonely.</em></h1>
          <p className="lead">San Jose has one of the largest Indian populations in America — Milpitas, Sunnyvale, Cupertino, Fremont. The zip codes, the companies, the potlucks — the community infrastructure is real. And yet so many Bay Area Indians describe a specific, exhausting loneliness: surrounded by other Indians who are all too busy to really talk. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The South Bay Indian Community: Scale Without Connection</h2>
          <p>The Indian community in the South Bay is extraordinary in its size. San Jose, Milpitas, Sunnyvale, Cupertino, Fremont, Santa Clara — these are cities where you can live an almost entirely Indian-facing life. Indian grocery stores, temples, cultural associations, cricket leagues, Diwali events that fill convention halls. On paper, you are never alone.</p>
          <p>And yet the specific loneliness of Bay Area Indians is something that doesn&rsquo;t show up in the census data. Everyone here is optimizing — their career, their H1B timeline, their green card queue position, their kids&rsquo; school district. The conversations are about stock options, home prices, and school rankings. The deeper conversations — about what you actually feel, what you actually fear, what you miss about India that you&rsquo;ve never said out loud — those happen less often than you&rsquo;d expect in a city with 100,000 Indians.</p>
          <p>LeanOn listeners are Indians based in India who have been trained to hold space for exactly this. Not advice. Not a tech bro response. Real listening from someone who understands the NRI experience from the inside. First 5 minutes free, no appointment.</p>
        </div>

        <div className="section">
          <h2>What the Valley Does to Indian Immigrants</h2>
          <p>The H1B lottery results come out and the anxiety spikes across every Indian household in Milpitas and Sunnyvale simultaneously. The layoffs at a major tech company hit and the WhatsApp groups light up — not with emotional support, but with job referral requests. The immigrant overachiever syndrome runs deep in the Valley: you came here to make it, and &ldquo;making it&rdquo; means you are not allowed to be struggling.</p>
          <p>The couples who both work in tech — 60-hour weeks each, exhausted, communicating in logistics — groceries, school pickup, weekend plans — but never actually talking. The engineer who got the promotion they worked three years for and felt nothing when it happened. The parent who made it to the Bay Area and still feels like they&rsquo;re one Outlook notification away from losing it all. These are not dramatic crises. They are the texture of daily Silicon Valley Indian life, and they deserve to be talked about.</p>
          <p>San Jose (PST) is 13.5 hours behind IST. 7am in San Jose is 8:30pm in India — before your morning standup, Indian listeners are available. Talk to someone who gets it.</p>
        </div>

        <div className="section">
          <h2>The Immigrant Overachiever and the Permission to Not Be Okay</h2>
          <p>One of the hardest parts of the Bay Area Indian experience is the complete absence of permission to struggle. You are here because you were exceptional. Your family sacrificed for this. You got the visa, the offer letter, the apartment in Cupertino. To say &ldquo;I&rsquo;m not okay&rdquo; feels like ingratitude — like you are failing the story everyone told about you.</p>
          <p>But exceptionalism and emotional need are not opposites. The specific pressure of being a high-performing Indian immigrant in Silicon Valley — the visa precarity, the performance reviews, the parents in India who think you have the perfect life, the colleagues who have no frame of reference for what you carry — creates a weight that doesn&rsquo;t respond to promotion or pay rise. LeanOn exists for exactly this. Real peer listener, real conversation. From ₹160.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The Valley is full of Indians. Talk to one who will actually listen.</h2><p>Real peer listener based in India. Understands the Silicon Valley Indian experience. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/indians-in-bay-area">Indians in Bay Area &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
