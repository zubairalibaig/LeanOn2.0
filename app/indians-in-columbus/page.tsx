import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Columbus Ohio | Peer Support for the Buckeye State | LeanOn',
  description: 'Columbus has a growing Indian community — OSU students, tech workers, medical professionals. The isolation of the Midwest Indian experience is real. Talk to someone.',
  keywords: ['indians in columbus ohio', 'indian community columbus', 'nri ohio', 'south asian columbus', 'osu indian students', 'desi columbus'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-columbus' },
  openGraph: { title: 'Indians in Columbus Ohio | Peer Support for the Buckeye State | LeanOn', description: 'Columbus has a growing Indian community — OSU students, tech workers, medical professionals. The isolation of the Midwest Indian experience is real. Talk to someone.', url: 'https://www.leanon.app/indians-in-columbus', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand Midwest Indian isolation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and trained to understand the NRI experience, including the specific weight of being Indian in a smaller Midwestern city — fewer Indians around you, less cultural infrastructure, the physical distance from the coasts where larger Indian communities live, and the particular loneliness that comes with being one of very few Indians in a predominantly white environment.' } },
  { '@type': 'Question', name: 'What time zone does Columbus use for connecting?', acceptedAnswer: { '@type': 'Answer', text: 'Columbus (EST) is 10.5 hours behind IST. 8am Columbus = 6:30pm India. Before your morning commute or your OSU class, Indian listeners are available in their evening.' } },
  { '@type': 'Question', name: 'Is this private from OSU or my workplace?', acceptedAnswer: { '@type': 'Answer', text: 'Completely private. LeanOn uses phone number and first name only. Nothing is shared with Ohio State University, your employer, your Columbus community, or anyone else.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free every session. Sessions from ₹160 for 15 minutes. No subscription required.' } },
  { '@type': 'Question', name: 'I\'m an OSU student feeling isolated. Is LeanOn right for me?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many LeanOn users are Indian students at American universities who feel the gap between their Indian identity and their American student life acutely. Listeners understand the student experience — the homesickness, the academic pressure, the social awkwardness of being one of few Indians in your department or dorm.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Columbus', item: 'https://www.leanon.app/indians-in-columbus' },
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

export default function IndiansInColumbusPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Columbus</span></nav>
        <div className="hero">
          <p className="badge">Indians in Columbus &middot; Ohio &middot; OSU &middot; Midwest</p>
          <h1>Ohio State, downtown Columbus. <em>Still very far from home.</em></h1>
          <p className="lead">Columbus is growing — OSU draws Indian students by the thousands, the tech and medical sectors have established Indian professional communities, and the city is more diverse than its Midwestern reputation suggests. But fewer Indians means less cultural infrastructure, and the particular isolation of the Midwest Indian experience is real. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>OSU, Nationwide Children&rsquo;s, OhioHealth: The Columbus Indian Community</h2>
          <p>Ohio State University has one of the largest Indian student populations of any Midwestern university — thousands of Indian graduate students, researchers, and undergraduates call Columbus home each year. The medical campuses — Nationwide Children&rsquo;s Hospital, OhioHealth, OSU Wexner Medical Center — have significant Indian physician and medical professional communities. The tech corridor around Easton and the Dublin and Westerville suburbs have Indian IT professional families.</p>
          <p>By most Midwestern standards, Columbus is welcoming. The city is younger and more diverse than many Ohio cities. There are Indian grocery stores, temples, cultural associations. The India Festival in downtown Columbus draws thousands. And yet the Columbus Indian community is smaller than Chicago, smaller than Detroit, smaller than the Bay Area or the New York metro. The cultural infrastructure that larger Indian communities take for granted — the density of people who just &ldquo;get it&rdquo; without explanation — is thinner here.</p>
          <p>LeanOn listeners are based in India, available without appointment, and trained to hold the specific weight of Midwest Indian experience. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Midwest Indian Experience: Everything You Don&rsquo;t Say</h2>
          <p>The Indian OSU student in year two of their PhD, calling home on Sunday, telling their parents everything is fine. The Indian medical resident at Wexner who is technically excellent and emotionally depleted. The Indian software engineer in Dublin who has been in Columbus for four years, has Indian colleagues and an Indian neighbour, and still has no one they can actually talk to.</p>
          <p>The specific burden of Midwest Indian life is the absence of a critical mass of people who understand you without effort. In New Jersey or Fremont, you can find a dozen Indians in your exact situation without trying. In Columbus, you are sometimes the only Indian in the room — and when you&rsquo;re not, the social dynamics of the smaller community mean everyone knows everyone, which means the same privacy constraints as back in India.</p>
          <p>Columbus (EST) is 10.5 hours behind IST. 8am Columbus = 6:30pm India — before your morning lecture or your hospital round, Indian listeners are available. Talk to someone who gets the Midwest Indian experience. From ₹160.</p>
        </div>

        <div className="section">
          <h2>Driving Everywhere in a City Built for Cars</h2>
          <p>One of the subtle loneliness amplifiers of Columbus — and Midwestern cities generally — is the physical structure of the city itself. You drive everywhere. There is no walking, no spontaneous encounter, no tube ride where you sit next to another Indian and nod in recognition. The isolation is built into the roads. You go from home to work to store to home, each leg in a car, each leg alone.</p>
          <p>The Indian social infrastructure that exists in Columbus — the weekend cricket matches, the temple events, the Diwali parties — requires a car and a plan. Spontaneous connection is hard. The kind of relationship where you can show up at someone&rsquo;s door when things are hard doesn&rsquo;t exist in the same way it might in an Indian city or a denser American one. LeanOn fills that gap — real, immediate, Indian, and available whenever you need it.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Buckeye State, but still needing to talk.</h2><p>Real Indian peer listener. Understands the Midwest Indian experience. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-homesick">NRI homesickness &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
