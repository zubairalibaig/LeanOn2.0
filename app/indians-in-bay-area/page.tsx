import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in the Bay Area | San Jose, Fremont | LeanOn',
  description: 'Fremont, Sunnyvale, Santa Clara — the Bay Area has 300,000+ Indians. But tech salaries and community events don\'t fill every gap. Talk to someone real.',
  keywords: ['indians in bay area support', 'fremont indian community', 'sunnyvale indian support', 'san jose indian mental health', 'silicon valley indian loneliness', 'desi support bay area'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-bay-area' },
  openGraph: { title: 'Emotional Support for Indians in the Bay Area | San Jose, Fremont | LeanOn', description: 'Fremont, Sunnyvale, Santa Clara — the Bay Area has 300,000+ Indians. But tech salaries and community events don\'t fill every gap. Talk to someone real.', url: 'https://www.leanon.app/indians-in-bay-area', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Silicon Valley Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI tech worker experience — the Bay Area burnout, imposter syndrome, the H-1B dependency, the performance culture. You don\'t need to explain the context. Many listeners have close family in the Bay Area tech community.' } },
  { '@type': 'Question', name: 'What time works best to connect from the Bay Area?', acceptedAnswer: { '@type': 'Answer', text: 'Bay Area (PST/PDT) is 13.5 hours behind IST. 8am San Jose = 9:30pm India. Your morning — even before a full evening ends in India — finds listeners available. Evening Bay Area time (8–10pm) is India\'s late night and early morning, which also has listeners for night-owl sessions.' } },
  { '@type': 'Question', name: 'Is this confidential from my colleagues at my tech company?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous. Only a phone number and first name required. Nothing is shared with your employer, your Fremont or Sunnyvale community, or anyone back in India.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Bay Area', item: 'https://www.leanon.app/indians-in-bay-area' },
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

export default function IndiansInBayAreaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Bay Area</span></nav>
        <div className="hero">
          <p className="badge">Indians in Bay Area &middot; Fremont &middot; Silicon Valley</p>
          <h1>You optimised everything except <em>how you&rsquo;re actually feeling.</em></h1>
          <p className="lead">Fremont. Sunnyvale. Santa Clara. Cupertino. The Bay Area is the global capital of Indian tech success. And quietly — some of the highest rates of burnout, imposter syndrome, and identity exhaustion in any immigrant community. You can earn $300K and still feel like something is missing. Talk to a peer listener in India who has heard this exact thing. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Bay Area Indian Tech Worker: The World&rsquo;s Most Optimised, Least-Talked-About Problem</h2>
          <p>Fremont is one of the most Indian cities in America by proportion. Sunnyvale, Santa Clara, and Cupertino have enormous Indian tech worker populations. San Jose&rsquo;s Little India corridor on Story Road has been here for decades. The community infrastructure is extraordinary — temples, cricket leagues, Diwali events, Indian grocery stores on every second block.</p>
          <p>And underneath all of that: a peculiar, specific exhaustion. The Bay Area tech Indian experience carries layers that are hard to name. Imposter syndrome in a world where everyone looks successful. H-1B anxiety — your entire life tied to your employer&rsquo;s goodwill. The identity question: I left India to be here, and here I am, but who am I becoming? The marriage under strain from two demanding careers. The children who feel more American than Indian and what that means to you.</p>
          <p>LeanOn is for exactly this. Not crisis. Not diagnosis. Just: I need to talk to someone who actually gets it. A real Indian peer listener, in India, who understands the Silicon Valley Indian context. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Time Zone and Timing: Bay Area to India</h2>
          <p>Bay Area (PST/PDT) is 13.5 hours behind IST. 8am in San Jose or Fremont is 9:30pm in India — late evening, when some listeners are still available. More reliably: 6am in the Bay Area is 7:30pm India time, a prime window. If you commute early, take a walk before the stand-up meeting, or have a quiet moment before the household wakes — that is often Indian evening time.</p>
          <p>Weekend mornings in the Bay Area — that quiet hour before the Fremont temple visit or the Sunnyvale cricket match — are Indian evenings. There is almost always someone available. No appointment needed. Browse who is online and start a session.</p>
          <p>Sessions are text-based, anonymous, and completely private. Nothing reaches your team, your H-1B sponsor, or your family back in India. The first 5-minute session free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You optimised everything. Now talk to someone real.</h2><p>Real Indian peer listener. Understands Silicon Valley Indian life. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/indians-in-seattle">Indians in Seattle &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
