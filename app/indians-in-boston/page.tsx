import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Boston | Cambridge, Burlington | LeanOn',
  description: 'Cambridge, Burlington, Lexington — Boston\'s Indian community is educated, driven, and often quietly overwhelmed. Talk to a peer listener in India who gets it.',
  keywords: ['indians in boston', 'cambridge indian community', 'boston indian mental health', 'desi support boston', 'indian loneliness boston', 'mit harvard indian support'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-boston' },
  openGraph: { title: 'Emotional Support for Indians in Boston | Cambridge, Burlington | LeanOn', description: 'Cambridge, Burlington, Lexington — Boston\'s Indian community is educated, driven, and often quietly overwhelmed. Talk to a peer listener in India who gets it.', url: 'https://www.leanon.app/indians-in-boston', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Boston Indian academic and professional experience?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience — including the specific weight of Boston\'s Indian community: the academic pressure of Cambridge, the PhD and postdoc experience, the residency grind, the high-achieving culture that leaves little room to say "I\'m not okay".' } },
  { '@type': 'Question', name: 'When can I connect from Boston?', acceptedAnswer: { '@type': 'Answer', text: 'Boston (EST) is 10.5 hours behind IST. 8am Boston = 6:30pm India. Before your lab meeting or your morning clinic round, India is in the evening and listeners are available.' } },
  { '@type': 'Question', name: 'Is this confidential from my department or colleagues?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Nothing reaches your supervisor, your research group, your hospital, or your Boston community.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Boston', item: 'https://www.leanon.app/indians-in-boston' },
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

export default function IndiansInBostonPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Boston</span></nav>
        <div className="hero">
          <p className="badge">Indians in Boston &middot; Cambridge &middot; New England</p>
          <h1>Smart city. <em>Smart doesn&rsquo;t mean okay.</em></h1>
          <p className="lead">Cambridge, Burlington, Lexington — Boston draws some of the most accomplished Indians in America. But high achievement and emotional weight are not opposites — often they travel together. The PhD pressure, the residency grind, the loneliness of a city that celebrates intellect but sometimes misses warmth. Talk to someone real. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Cambridge, Burlington, Lexington: The Boston Indian Academic Circle</h2>
          <p>Boston draws Indian professionals and academics to an extraordinary degree. MIT and Harvard draw Indian PhD students and postdocs by the hundreds each year. The biotech and pharma corridor — Cambridge, Waltham, Burlington, Lexington — employs thousands of Indian scientists and engineers. Massachusetts General Hospital, Brigham and Women&rsquo;s, Beth Israel — the Boston medical world has a large and distinguished Indian medical community.</p>
          <p>The Burlington and Lexington suburbs have established Indian family communities. Newton has a significant Indian professional presence. Westborough, Marlborough, and the Route 9 corridor are home to Indian families who have settled into Massachusetts suburban life. The community is distributed, educated, and often quietly overwhelmed.</p>
          <p>What makes Boston Indian life particularly complex is the intersection of exceptional achievement with exceptional pressure. You are here because you are among the best in the world at what you do. And that means there is even less permission to say: I&rsquo;m struggling. Talk to someone who has heard this. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Weight That Excellence Doesn&rsquo;t Dissolve</h2>
          <p>The Boston Indian experience has its own specific character. The PhD student in year four of five, watching their stipend fail to cover Cambridge rent, questioning whether the sacrifice is worth it. The medical resident working 80-hour weeks and calling home to parents who are deeply proud and completely unaware of how exhausted you are. The biotech professional who has made it by every external measure and still feels something missing.</p>
          <p>Boston (EST) is 10.5 hours behind IST. 8am in Cambridge or Burlington is 6:30pm in India. Before your lab meeting starts, India is in the evening. A real Indian peer listener is available, no appointment needed, anonymous and private. The first 5 minutes are always free. High achievement does not require silent suffering.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Smart enough to ask for support.</h2><p>Real Indian peer listener. Understands Boston Indian academic and professional life. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
