import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Marathi NRI Support | Talk to a Maharashtrian Who Gets Your World | LeanOn',
  description: 'Marathi NRIs carry the weight of Pune and Mumbai dreams taken abroad. LeanOn connects you with Marathi listeners who understand your home and your now.',
  keywords: ['marathi nri support', 'marathi diaspora', 'maharashtrian abroad', 'nri marathi usa', 'nri marathi uk', 'talk to marathi person online'],
  alternates: { canonical: 'https://www.leanon.app/marathi-nri-support' },
  openGraph: { title: 'Marathi NRI Support | Talk to a Maharashtrian Who Gets Your World | LeanOn', description: 'Marathi NRIs carry the weight of Pune and Mumbai dreams taken abroad. LeanOn connects you with Marathi listeners who understand your home and your now.', url: 'https://www.leanon.app/marathi-nri-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk in Marathi or Hindi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Several LeanOn listeners speak Marathi and Hindi. Mention your preferred language when you begin and your listener will respond in it.' } },
  { '@type': 'Question', name: 'Do listeners understand Pune IT culture specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Pune-to-abroad pipeline is well understood — the IT corridor background, the particular mix of ambition and cultural rootedness that Pune families carry. You do not have to explain the context.' } },
  { '@type': 'Question', name: 'What if the pressure is from extended family back in Maharashtra?', acceptedAnswer: { '@type': 'Answer', text: 'Extended family pressure from Maharashtra is one of the most common things Marathi NRIs talk about with listeners. The expectations, the obligations, the guilt of not being there for occasions — all of it is heard without judgment.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Your Marathi community abroad and your family back in Pune or Mumbai will never know. Sessions are anonymous — phone number and first name only.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription needed.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Marathi NRI Support', item: 'https://www.leanon.app/marathi-nri-support' },
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

export default function MarathiNriSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Marathi NRI Support</span></nav>
        <div className="hero">
          <p className="badge">Marathi NRI &middot; Pune &amp; Mumbai &middot; Diaspora Support</p>
          <h1>Pune chi swapne, parades cha bhaar. <em>You shouldn&rsquo;t have to carry it alone.</em></h1>
          <p className="lead">Marathi NRIs carry a specific weight — the IT dreams born in Pune&rsquo;s tech corridors, the Mumbai ambition taken global, the extended family obligations that do not pause because you moved continents. LeanOn connects you with Marathi peer listeners who understand your home and your now, without needing either explained. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Pune-to-Abroad Pipeline and What It Carries</h2>
          <p>Pune has become one of India&rsquo;s great IT export cities. Tens of thousands of Maharashtrians have followed the path from Pune or Mumbai engineering colleges to onsite assignments, H1B visas, and eventually permanent lives abroad. The path is well-worn. The emotional cost of walking it is not well-discussed.</p>
          <p>Marathi families carry deep cultural rootedness — Ganesh Chaturthi is not just a festival, it is the heartbeat of the year. Missing it from Seattle or London is not a small thing. Neither is missing the Gudi Padwa family gathering, the puran poli at your aai&rsquo;s house, the specific comfort of speaking Marathi all day with people who share your cultural reference. These are real losses that get minimised in the NRI success narrative.</p>
          <p>LeanOn listeners understand this. Many have family or close connections abroad and have heard these specific stories. You do not have to minimise the weight of what you carry — a listener will hear it as it is. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Extended Family Obligations That Cross Oceans</h2>
          <p>Maharashtrian families often have complex extended family networks — multiple generations with strong expectations of participation, financial support, and presence. When you are 10,000 miles away, the impossibility of meeting these expectations does not reduce the guilt of not meeting them. Weddings you cannot attend, illnesses you cannot help with, decisions you are consulted on from afar and then feel responsible for regardless of outcome.</p>
          <p>This specific guilt — of being the one who left and is therefore both privileged and failing simultaneously — is something Marathi NRIs carry in ways that are hard to name. It sits underneath the daily work life, the ambition, the building of something abroad. LeanOn is a space to put it down for a moment and speak it honestly to someone who will simply hear it.</p>
        </div>

        <div className="section">
          <h2>Marathi Identity Abroad — Between Cultures</h2>
          <p>Marathi identity has a particular texture abroad — distinct from the broader pan-Indian identity that gets lumped together in diaspora contexts. The language, the food, the cultural sensibility — the specific pleasure of vada pav that no restaurant gets right, the particular humour of Marathi conversations — these things matter and their absence is real.</p>
          <p>Talking to a Marathi listener at LeanOn means you do not have to translate yourself. The cultural shorthand works. The references land. You can say what you actually feel, in the language and with the shared understanding that makes the feeling speakable. No judgment, no advice — just genuine listening from someone who gets it.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Apla manus, apli bhashet.</h2><p>A Marathi listener who understands without explanation. First 5 minutes free. Sessions from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
          <a href="/nri-parents-india">NRI guilt parents &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
