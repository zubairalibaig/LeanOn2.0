import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Dallas-Plano-Frisco | LeanOn',
  description: 'Plano, Frisco, Irving — DFW\'s booming Indian community is one of America\'s fastest growing. But fast growth and real belonging are different things. Talk to someone who gets it.',
  keywords: ['indians in dallas support', 'plano indian community', 'frisco indian support', 'irving texas indian', 'dfw indian mental health', 'desi support dallas'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-dallas' },
  openGraph: { title: 'Emotional Support for Indians in Dallas-Plano-Frisco | LeanOn', description: 'Plano, Frisco, Irving — DFW\'s booming Indian community is one of America\'s fastest growing. But fast growth and real belonging are different things. Talk to someone who gets it.', url: 'https://www.leanon.app/indians-in-dallas', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the DFW Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience in American tech hubs like the DFW corridor. You don\'t need to explain the Plano or Frisco Indian community, the H-1B pressure, or what it means to be surrounded by community but still feel alone.' } },
  { '@type': 'Question', name: 'What time works best to connect from Dallas?', acceptedAnswer: { '@type': 'Answer', text: 'Dallas (CST) is 11.5 hours behind IST. 7am Dallas = 6:30pm India. Your early morning before work is India\'s evening — a reliable window when listeners are available. No appointment needed.' } },
  { '@type': 'Question', name: 'Is this confidential from my Plano or Frisco community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — only a phone number and first name are required. Nothing is shared with anyone in your community. Listeners are in India, outside your network entirely.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'The first 5 minutes of every session are free. Sessions start from ₹160 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Dallas', item: 'https://www.leanon.app/indians-in-dallas' },
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

export default function IndiansInDallasPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Dallas</span></nav>
        <div className="hero">
          <p className="badge">Indians in Dallas-Plano &middot; Frisco &middot; DFW Desi</p>
          <h1>The DFW dream. <em>And the weight nobody talks about.</em></h1>
          <p className="lead">Frisco and Plano are two of the fastest-growing Indian suburbs in America. New tech jobs, new homes, new children in gifted programs. And quietly — the exhaustion of performing success. The isolation from real friends when everyone around you is also performing. Talk to a peer listener in India who has heard this story from hundreds of people. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Plano, Frisco, Irving: The Performance Capital of Indian America</h2>
          <p>The DFW Indian corridor — from Irving and Coppell through Plano, Allen, and up into Frisco — has grown at a remarkable pace. Technology companies have relocated headquarters here. Indian families have followed. There are temples off Legacy Drive, cricket leagues, Navratri celebrations that fill convention centres. The community infrastructure is real.</p>
          <p>And underneath it, a particular kind of exhaustion. Everyone in Frisco is doing well. Everyone has a good job. Everyone&rsquo;s kids are in the gifted program. The community gathers for Diwali, for cricket, for Holi — and there is an unspoken agreement that what is shared is the highlight reel. The actual weight of immigration, of H-1B anxiety, of marriages under strain, of identity — that goes unspoken.</p>
          <p>LeanOn is built for exactly this. A real Indian peer listener in India — outside your Plano network entirely — who understands the cultural context without you having to explain it. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Exhaustion of Success Nobody Named</h2>
          <p>Indian tech workers in DFW often carry a very specific weight: the pressure of having a good life that doesn&rsquo;t feel as good as it looks. The visa tied to the job. The family in India who are proud but dependent. The marriage that started one way and has drifted. The children who are assimilating in ways that are both wonderful and quietly grieving.</p>
          <p>None of this fits into the community WhatsApp group. It&rsquo;s not for your parents to hear. It&rsquo;s not something your Plano friends — also performing success — can receive without judgment. Dallas (CST) is 11.5 hours behind IST. 7am Dallas is 6:30pm in India — your early morning is their evening. Listeners are available. No appointment needed.</p>
          <p>You don&rsquo;t have to be in crisis to talk to someone. You can just be tired. A real Indian listener who has heard similar stories, who won&rsquo;t gossip, and who genuinely wants to understand — that is what LeanOn offers.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The DFW dream deserves real support behind it.</h2><p>Real Indian peer listener. Understands the Plano-Frisco NRI experience. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-texas">Indians in Texas &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
