import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Lucknow — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Lucknow, India. Talk anonymously about family pressure, UPSC stress, relationship challenges. Available 24/7 on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/lucknow', languages: { 'en-IN': 'https://www.leanon.app/lucknow' } },
  keywords: 'peer support Lucknow, emotional support Lucknow, UPSC stress Lucknow, family pressure Lucknow UP, talk to someone Lucknow, leanon Lucknow',
  openGraph: {
    title: 'Emotional Support in Lucknow — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Lucknow, India. Talk anonymously about family pressure, UPSC stress, relationship challenges. Available 24/7 on LeanOn.',
    url: 'https://www.leanon.app/lucknow',
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
      name: 'Why do people in Lucknow feel pressure around career and marriage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Lucknow sits at the heart of Uttar Pradesh\'s social fabric, where family expectations around both career track (government service, UPSC, law) and marriage timing are particularly strong. Young professionals and students in Lucknow navigate a specific intersection of traditional family values and modern aspirations that creates its own unique pressure. The expectation to perform on both fronts simultaneously &mdash; building a career while meeting marriage timelines &mdash; is widely felt but rarely spoken about openly.' },
    },
    {
      '@type': 'Question',
      name: 'Is UPSC preparation stress particularly acute in Lucknow?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lucknow has a significant population of UPSC aspirants, both local students and those who have migrated to the city for coaching. The pressure of the preparation &mdash; the long timeline, the uncertainty, the family expectations around a government job, and the social comparison within the aspirant community &mdash; creates a specific kind of sustained stress. Many aspirants struggle with this in silence, particularly as the years accumulate.' },
    },
    {
      '@type': 'Question',
      name: 'What kinds of things do Lucknow users talk about on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Common themes from Lucknow users include: UPSC and competitive exam stress, family pressure around marriage especially for women in their mid-20s, the experience of returning to Lucknow after studying or working elsewhere and feeling caught between two worlds, relationship situations that cannot be discussed openly within the family, and the loneliness of navigating modern life within traditional social structures.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available to people outside major metros?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn is available anywhere in India with a smartphone and internet connection. You do not need to be in a metro city. Many users are in tier-2 and tier-3 cities and towns where mental health support is even less accessible than in metros.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous and private?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. Sessions are private voice calls. Nothing is shared with your family, your community, or anyone outside the session. This is particularly important in cities where social networks are tight and privacy is harder to maintain.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Lucknow', item: 'https://www.leanon.app/lucknow' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/lucknow',
  areaServed: { '@type': 'City', name: 'Lucknow', addressCountry: 'IN' },
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

export default function LucknowPage() {
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
          <span style={{color:'var(--navy)'}}>Lucknow</span>
        </nav>
        <div className="hero">
          <p className="tag">Peer Support &middot; Lucknow</p>
          <h1>Peer Support in Lucknow &mdash; Someone to Lean On in <em>the City of Nawabs</em></h1>
          <p className="lead">Lucknow carries the weight of tradition alongside modern ambition. Family expectations, UPSC dreams, marriage timelines, career pressure &mdash; and a social culture where admitting struggle is still difficult. LeanOn connects you with peer listeners who understand the Lucknow experience.</p>
        </div>
        <div className="section">
          <h2>Lucknow&apos;s Unique Emotional Pressures</h2>
          <h3>The UPSC and Civil Services Treadmill</h3>
          <p>Lucknow is one of India&apos;s major UPSC preparation hubs. The dream of government service &mdash; IAS, IPS, PCS &mdash; runs deep in UP families. The preparation years are long and gruelling, the uncertainty is enormous, and the social expectation that you will succeed adds pressure that coaching centres and study groups cannot address. Many aspirants quietly carry the weight of their family&apos;s hopes alongside their own doubts.</p>
          <h3>Family and Marriage Pressure</h3>
          <p>Lucknow&apos;s social fabric is tightly woven with family expectation. For young women especially, the pressure to marry by a certain age runs parallel to career ambitions and creates a specific kind of anxiety &mdash; the feeling of being on two timers simultaneously, neither fully in your control. For men, the expectation to achieve a certain standard before they are considered &ldquo;marriageable&rdquo; creates its own quiet pressure.</p>
          <h3>Migration and Return</h3>
          <p>Many people from Lucknow spend years in Delhi, Mumbai, or abroad, and then return. The return can be disorienting: you have changed, the city has partly changed, and the social expectations have not. You are back in the family orbit, back in the social comparison, and often feeling caught between the person you became and the person your family expects.</p>
          <h3>Awadhi Culture and the Difficulty of Expressing Struggle</h3>
          <p>Lucknow&apos;s Tehzeeb &mdash; its cultural tradition of grace, politeness, and propriety &mdash; is beautiful. It is also, at times, a barrier to honest self-expression. The social expectation of composure makes it harder to say &ldquo;I am struggling&rdquo; without feeling like you are violating something important. LeanOn offers a space completely outside that social fabric, where composure is not required.</p>
        </div>
        <div className="section">
          <h2>How LeanOn Works in Lucknow</h2>
          <p>Browse listener profiles at <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>leanon.app/browse</a>. Choose a listener whose background resonates with your situation. Start a session &mdash; the first 5 minutes are free. Sessions start at ₹160 for 15 minutes, available any time, from your phone.</p>
          <p>The listener is a real Indian person, trained in active listening. They have no connection to your social or family network. What you say stays in the session.</p>
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
          <h2>You don&apos;t have to carry it alone in Lucknow.</h2>
          <p>A real listener. Anonymous. Available now. From ₹160.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
