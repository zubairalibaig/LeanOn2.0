import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Bhopal — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Bhopal, Madhya Pradesh. Talk anonymously about UPSC stress, student pressure, family expectations. Available 24/7 on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/bhopal', languages: { 'en-IN': 'https://www.leanon.app/bhopal' } },
  keywords: 'peer support Bhopal, emotional support Bhopal, UPSC stress Bhopal, student pressure Bhopal MP, talk to someone Bhopal, leanon Bhopal',
  openGraph: {
    title: 'Emotional Support in Bhopal — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Bhopal, Madhya Pradesh. Talk anonymously about UPSC stress, student pressure, family expectations. Available 24/7 on LeanOn.',
    url: 'https://www.leanon.app/bhopal',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is UPSC preparation stress particularly strong in Bhopal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bhopal has a significant student population and is one of Madhya Pradesh\'s key civil services preparation centres. The dream of government service runs deep in MP families, and many aspirants from across the state come to Bhopal for coaching and preparation. The long preparation timelines, the uncertainty of outcomes, and the family expectations that come with it create a particular kind of sustained stress that is common in the city.' },
    },
    {
      '@type': 'Question',
      name: 'What kinds of things do Bhopal users talk about on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Common themes include: UPSC and MPPSC preparation stress, the pressure of studying far from home while managing family expectations, the loneliness of the aspirant community despite being surrounded by other aspirants, relationship situations that cannot be discussed openly, family pressure around marriage especially for those whose exam timelines have stretched longer than expected, and the specific weight of living in a city with its own particular history.' },
    },
    {
      '@type': 'Question',
      name: 'Is Bhopal a city where mental health support is accessible?',
      acceptedAnswer: { '@type': 'Answer', text: 'Mental health support exists in Bhopal but the awareness and accessibility are still limited, particularly for students and young professionals on tight budgets. The cultural stigma around seeking help is also real. LeanOn offers a private, anonymous, and affordable option for people who want to talk to someone real without the barriers of traditional mental health support.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous and private?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. Sessions are private voice calls. Nothing is shared with your family, your hostel, your coaching centre, or anyone outside the session. For students especially, this privacy matters &mdash; and it is fully guaranteed.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available in Bhopal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn is available anywhere in India with a smartphone and internet connection. Sessions start from &#8377;160 for 15 minutes, available any time, from your phone.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Bhopal', item: 'https://www.leanon.app/bhopal' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/bhopal',
  areaServed: { '@type': 'City', name: 'Bhopal', addressCountry: 'IN' },
  serviceType: 'Peer Emotional Support',
}

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
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
`

export default function BhopalPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Bhopal</span>
        </nav>
        <div className="hero">
          <p className="tag">Peer Support &middot; Bhopal</p>
          <h1>Peer Support in Bhopal &mdash; Someone to Lean On in <em>the City of Lakes</em></h1>
          <p className="lead">Bhopal is a city of students and aspirants, carrying UPSC dreams, family expectations, and the quiet weight of lives lived under pressure. LeanOn connects you with peer listeners who understand the Bhopal experience &mdash; a private space completely outside your social world.</p>
        </div>
        <div className="section">
          <h2>Bhopal&apos;s Unique Emotional Pressures</h2>
          <h3>The UPSC and MPPSC Aspirant Experience</h3>
          <p>Bhopal is home to a significant population of civil services aspirants, both local students and those from across Madhya Pradesh who come for coaching. The preparation path &mdash; the years of study, the uncertainty of outcomes, the financial and emotional investment of entire families &mdash; creates a specific kind of sustained pressure. Many aspirants live with this weight in near-total silence, surrounded by others in the same situation but rarely able to talk honestly about the toll it takes.</p>
          <h3>Student Life and Distance from Home</h3>
          <p>For the many students who have come to Bhopal from smaller towns and villages across MP, city life brings both freedom and its own particular loneliness. The distance from family means less oversight but also less support. The cost of living, the adjustment to a new environment, and the pressure to perform academically while managing it all create stressors that are easy to underestimate.</p>
          <h3>Family Expectations and Marriage Pressure</h3>
          <p>In Bhopal&apos;s largely conservative social fabric, family expectations around career achievement and marriage timing are strong. Young people &mdash; especially those whose exam preparation has stretched beyond the expected timeline &mdash; often carry the dual pressure of their own uncertainty and their family&apos;s growing anxiety about the future.</p>
        </div>
        <div className="section">
          <h2>How LeanOn Works in Bhopal</h2>
          <p>Browse listener profiles at <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>leanon.app/browse</a>. Choose a listener whose background resonates with your situation. Start a session &mdash; the first 5 minutes are free. Sessions start at &#8377;160 for 15 minutes, available any time, from your phone.</p>
          <p>The listener is a real Indian person, trained in active listening. They have no connection to your coaching centre, your hostel, or your family. What you say stays in the session.</p>
        </div>
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not therapy.</strong> Listeners are trained peers, not licensed professionals. For clinical mental health conditions, please see a qualified professional.</p>
          <p>Crisis support: <strong>NIMHANS 080-46110007</strong> or <strong>Tele-MANAS 14416</strong> (free, 24/7, Government of India).</p>
        </div>
        <div className="cta-card">
          <h2>You don&apos;t have to carry it alone in Bhopal.</h2>
          <p>A real listener. Anonymous. Available now. From &#8377;160.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
