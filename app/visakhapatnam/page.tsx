import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Visakhapatnam — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Visakhapatnam (Vizag), Andhra Pradesh. Talk anonymously about career pressure, family expectations, work stress. Available 24/7 on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/visakhapatnam', languages: { 'en-IN': 'https://www.leanon.app/visakhapatnam' } },
  keywords: 'peer support Visakhapatnam, emotional support Vizag, work stress Visakhapatnam Andhra, family pressure Vizag, talk to someone Visakhapatnam, leanon Vizag',
  openGraph: {
    title: 'Emotional Support in Visakhapatnam — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Visakhapatnam (Vizag), Andhra Pradesh. Talk anonymously about career pressure, family expectations, work stress. Available 24/7 on LeanOn.',
    url: 'https://www.leanon.app/visakhapatnam',
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
      name: 'What makes Visakhapatnam emotionally distinct from other Andhra cities?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vizag combines the pressures of a port city, a naval base, a growing IT and pharma corridor, and a strong Telugu family culture. The city has grown rapidly and attracted professionals from across Andhra Pradesh, creating a mix of career pressure and family expectation that is specific to Vizag\'s trajectory. It is also a city where the aspiration to leave for Hyderabad, Bengaluru, or abroad creates its own particular strain on those who stay or return.' },
    },
    {
      '@type': 'Question',
      name: 'What do Vizag users talk about on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Common themes include: the pressure of the pharma and IT sectors in the city, the expectations of Telugu families around career achievement and marriage timing, the experience of being in a city that feels like it is between identities &mdash; not quite Hyderabad, not quite a smaller town &mdash; and relationship situations that are difficult to navigate within close-knit community structures.' },
    },
    {
      '@type': 'Question',
      name: 'Is the naval and defence sector presence relevant to LeanOn users?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Vizag has a significant naval and defence establishment, and the families of service personnel carry a specific kind of stress &mdash; long separations, uncertainty, the social pressures of living within tight institutional communities. These are things that are hard to discuss openly within those communities themselves, and LeanOn offers a completely private space outside them.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous and private?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. Sessions are private voice calls. Nothing is shared with your family, your employer, your colleagues, or anyone outside the session. In Vizag\'s tight community networks, this privacy matters &mdash; and it is fully guaranteed.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available in Visakhapatnam?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn is available anywhere in India with a smartphone and internet connection. Sessions start from &#8377;160 for 15 minutes, available any time, from your phone.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Visakhapatnam', item: 'https://www.leanon.app/visakhapatnam' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/visakhapatnam',
  areaServed: { '@type': 'City', name: 'Visakhapatnam', addressCountry: 'IN' },
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

export default function VisakhapatnamPage() {
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
          <span style={{color:'var(--navy)'}}>Visakhapatnam</span>
        </nav>
        <div className="hero">
          <p className="tag">Peer Support &middot; Visakhapatnam</p>
          <h1>Peer Support in Vizag &mdash; Someone to Lean On in <em>the City of Destiny</em></h1>
          <p className="lead">Visakhapatnam is a city on the move &mdash; port, pharma, IT, Navy. The ambition is real and so is the pressure. Strong Telugu family values, tight community networks, high career expectations. LeanOn is a completely private space outside all of it.</p>
        </div>
        <div className="section">
          <h2>Vizag&apos;s Unique Emotional Pressures</h2>
          <h3>Career Pressure in a Growing City</h3>
          <p>Visakhapatnam is undergoing rapid growth across the pharma, IT, port logistics, and manufacturing sectors. This growth brings opportunity but also a specific kind of pressure &mdash; the sense that you need to keep pace with the city&apos;s trajectory, that your career must match the ambition of the place itself. For many professionals in Vizag, the gap between aspiration and current reality is a constant source of quiet stress.</p>
          <h3>Telugu Family Culture and Marriage Expectations</h3>
          <p>Strong Telugu family bonds are a genuine source of support &mdash; but they also come with expectations. Career achievement, marriage timing, financial stability, and the appearance of having it all together are important in Vizag&apos;s social fabric. Young professionals navigating the gap between family expectations and the reality of their own lives often find there is no neutral space to process that honestly.</p>
          <h3>Naval and Defence Families</h3>
          <p>Visakhapatnam&apos;s significant naval base and defence establishment means a portion of the city lives within institutional structures that carry their own emotional weight. Long deployments, the stress of uncertain postings, the particular isolation of living within a closed community &mdash; these are experiences that rarely get talked about outside the family, if at all.</p>
          <h3>The Question of Staying or Leaving</h3>
          <p>Vizag occupies an interesting position for many of its residents &mdash; it is good enough to stay in but the pull toward Hyderabad, Bengaluru, or abroad is real. For those who stay, there is sometimes the quiet question of whether that was the right call. For those who return, the re-entry has its own complicated feelings. LeanOn is a space to say all of that honestly.</p>
        </div>
        <div className="section">
          <h2>How LeanOn Works in Visakhapatnam</h2>
          <p>Browse listener profiles at <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>leanon.app/browse</a>. Choose a listener whose background resonates with your situation. Start a session &mdash; the first 5 minutes are free. Sessions start at &#8377;160 for 15 minutes, available any time, from your phone.</p>
          <p>The listener is a real Indian person, trained in active listening. They have no connection to your family, your employer, or your community. What you say stays in the session.</p>
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
          <h2>You don&apos;t have to carry it alone in Vizag.</h2>
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
