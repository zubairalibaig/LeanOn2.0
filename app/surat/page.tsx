import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Surat — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Surat, Gujarat. Talk anonymously about business pressure, family expectations, diamond industry stress. Available 24/7 on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/surat', languages: { 'en-IN': 'https://www.leanon.app/surat' } },
  keywords: 'peer support Surat, emotional support Surat, business stress Surat Gujarat, family pressure Surat, talk to someone Surat, leanon Surat',
  openGraph: {
    title: 'Emotional Support in Surat — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Surat, Gujarat. Talk anonymously about business pressure, family expectations, diamond industry stress. Available 24/7 on LeanOn.',
    url: 'https://www.leanon.app/surat',
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
      name: 'Why is business pressure particularly intense in Surat?',
      acceptedAnswer: { '@type': 'Answer', text: 'Surat is one of India\'s most commercially active cities, with the diamond industry, textile trade, and a strong entrepreneurial culture defining its social fabric. Business success is not just a personal achievement in Surat &mdash; it is tied to family honour, community standing, and even marriage prospects. The pressure to succeed in business, and to be seen succeeding, is pervasive and starts early. The silence around business failure or financial stress makes it harder to carry.' },
    },
    {
      '@type': 'Question',
      name: 'What kinds of things do Surat users talk about on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Common themes include: the pressure of running or working in a family business, the stress of the diamond or textile trade and its volatility, family expectations around marriage especially for those who have achieved financial stability, the difficulty of setting personal boundaries in tightly knit Gujarati community structures, and the loneliness of high-performance working life.' },
    },
    {
      '@type': 'Question',
      name: 'Is Surat a city where mental health support is accessible?',
      acceptedAnswer: { '@type': 'Answer', text: 'Mental health awareness is growing in Surat, but the culture around admitting struggle remains difficult. In a community where resilience and hustle are deeply valued, saying "I am struggling emotionally" can feel like weakness. LeanOn offers a space completely outside the community network, where you can be honest without any social consequence.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous and private?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. Sessions are private voice calls. Nothing is shared with your family, your business contacts, or anyone in your community. In a city where networks are tight and reputation matters, this privacy is not just a feature &mdash; it is the point.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available for people in Surat?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn is available anywhere in India with a smartphone and internet connection. You do not need to travel to Mumbai or another metro. Sessions start from &#8377;160 for 15 minutes, any time, from your phone.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Surat', item: 'https://www.leanon.app/surat' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/surat',
  areaServed: { '@type': 'City', name: 'Surat', addressCountry: 'IN' },
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

export default function SuratPage() {
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
          <span style={{color:'var(--navy)'}}>Surat</span>
        </nav>
        <div className="hero">
          <p className="tag">Peer Support &middot; Surat</p>
          <h1>Peer Support in Surat &mdash; Someone to Lean On in <em>the Diamond City</em></h1>
          <p className="lead">Surat runs on hustle. Business pressure, family expectations around success, the Gujarati culture of resilience that makes it hard to admit when the weight is too much. LeanOn connects you with peer listeners who understand what it means to carry that weight quietly.</p>
        </div>
        <div className="section">
          <h2>Surat&apos;s Unique Emotional Pressures</h2>
          <h3>The Business Success Imperative</h3>
          <p>In Surat, business success is not just personal achievement &mdash; it is social currency. The diamond industry, textile trade, and a deeply entrepreneurial culture mean that financial performance is visible, talked about, and deeply tied to identity and family honour. The pressure to succeed, and to be seen succeeding, starts early and rarely lets up.</p>
          <h3>Diamond and Textile Industry Stress</h3>
          <p>The diamond polishing and textile industries that define Surat&apos;s economy are high-stakes, volatile environments. Price fluctuations, export market changes, supplier relationships, and the physical and mental demands of high-volume production create a specific kind of chronic stress. For workers and business owners alike, the uncertainty is constant but rarely discussed openly.</p>
          <h3>Gujarati Community Values and Hidden Pressure</h3>
          <p>Surat&apos;s Gujarati community has a strong tradition of resilience, hard work, and optimism. These are genuine virtues &mdash; but they also make it harder to say when you are struggling. The cultural expectation of bouncing back, of maintaining a positive front, of not burdening others with difficulty, can leave emotional weight entirely unaddressed.</p>
          <h3>Marriage, Family, and the Success Threshold</h3>
          <p>In Surat&apos;s social fabric, marriage readiness is often linked to a financial threshold. Young professionals &mdash; men especially &mdash; feel the pressure to reach a certain level of business success before they are considered suitable matches. For women, the timing pressures are different but equally real. Both face a social clock that runs alongside the business calendar.</p>
        </div>
        <div className="section">
          <h2>How LeanOn Works in Surat</h2>
          <p>Browse listener profiles at <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>leanon.app/browse</a>. Choose a listener whose background resonates with your situation. Start a session &mdash; the first 5 minutes are free. Sessions start at &#8377;160 for 15 minutes, available any time, from your phone.</p>
          <p>The listener is a real Indian person, trained in active listening. They have no connection to your business network, your family, or your community. What you say stays in the session.</p>
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
          <h2>The hustle is real. So is the weight. You don&apos;t have to carry it alone.</h2>
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
