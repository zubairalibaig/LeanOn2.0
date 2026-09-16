import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Texas | Houston, Dallas, Austin | LeanOn',
  description: 'Texas is home to 400,000+ Indians — and many feel quietly alone in it. Talk to a peer listener in India who understands the Texas Indian experience. First 5 min free.',
  keywords: ['indians in texas support', 'indian community texas', 'texas indian mental health', 'desi support texas', 'houston dallas austin indian support', 'nri texas'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-texas' },
  openGraph: { title: 'Emotional Support for Indians in Texas | Houston, Dallas, Austin | LeanOn', description: 'Texas is home to 400,000+ Indians — and many feel quietly alone in it. Talk to a peer listener in India who understands the Texas Indian experience. First 5 min free.', url: 'https://www.leanon.app/indians-in-texas', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Texas Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience in American metros including the Texas corridor — Houston\'s energy sector, Dallas tech, Austin startups. You don\'t need to explain the context.' } },
  { '@type': 'Question', name: 'What time works to connect from Texas?', acceptedAnswer: { '@type': 'Answer', text: 'Texas (CST/CDT) is 11–11.5 hours behind IST. 7am in Houston or Dallas = 6:30pm in India. Early Texas morning aligns well with Indian evenings when listeners are active.' } },
  { '@type': 'Question', name: 'Is my session completely confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are anonymous — only a phone number and first name required. Nothing leaves the session. Your community, employer, and family won\'t know.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription required.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Texas', item: 'https://www.leanon.app/indians-in-texas' },
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

export default function IndiansInTexasPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Texas</span></nav>
        <div className="hero">
          <p className="badge">Indians in Texas &middot; Houston &middot; Dallas &middot; Austin</p>
          <h1>Texas. The big life. <em>The quiet loneliness.</em></h1>
          <p className="lead">Houston, Dallas-Plano-Frisco, Austin, San Antonio. Texas has one of the fastest-growing Indian populations in America. Tech jobs, big houses, community events. And still — the isolation of an immigrant life. The family calls that feel like performance. The friendships that feel shallow. Talk to someone real. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Texas: Four Cities, One Shared Weight</h2>
          <p>Texas has become one of the most important Indian diaspora states in America. Houston&rsquo;s Indian community in Sugar Land, Katy, and Pearland is one of the largest in the country. The DFW corridor — Plano, Frisco, Irving, Coppell — has seen explosive growth as tech companies expand their Texas footprints. Austin&rsquo;s startup scene draws younger Indian professionals. San Antonio has a quieter but growing community.</p>
          <p>What unites them is not just geography but a particular kind of experience: arriving somewhere vast and promising, building a real life, surrounding yourself with community — and still feeling a gap between what you have and what you need. The community events are great. The temple is there. The cricket league runs. And underneath all of it, some things go unsaid.</p>
          <p>LeanOn offers a real Indian peer listener in India — someone completely outside the Texas Indian community network who still understands everything about it. You don&rsquo;t have to explain what it means to be the successful Indian in a family that sacrificed for you. They already know.</p>
        </div>

        <div className="section">
          <h2>Talking Across Time Zones: Texas to India</h2>
          <p>Texas (CST/CDT) sits 11 to 11.5 hours behind IST. This creates a natural bridge. Your 7am in Houston or Dallas is 6:30pm in India — a good evening window when Indian listeners are available and winding down their day. Even 6am Texas is comfortable India evening time.</p>
          <p>If you&rsquo;re in Austin working late in the startup grind, or sitting in your Frisco house after the kids are in bed, or driving home from the Houston Medical Center — India is awake and available. LeanOn listeners don&rsquo;t require appointments. Browse who is online and start a session when the moment feels right.</p>
          <p>The sessions are text-based, anonymous, and fully private. No one in your Texas community, your workplace, or your family back home will know. The first 5 minutes of every session are free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Texas-sized life. Real support behind it.</h2><p>Real Indian peer listener. Understands the Texas NRI experience. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-houston">Indians in Houston &rarr;</a>
          <a href="/indians-in-dallas">Indians in Dallas &rarr;</a>
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
