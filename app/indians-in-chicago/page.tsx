import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Chicago | Schaumburg, Naperville | LeanOn',
  description: 'Schaumburg, Naperville, Skokie — Chicago\'s Indian diaspora is large and tightly connected. But community watching and real support are different. Talk to someone who gets it.',
  keywords: ['indians in chicago', 'schaumburg indian community', 'naperville indian support', 'chicago indian mental health', 'illinois desi support', 'indian loneliness chicago'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-chicago' },
  openGraph: { title: 'Emotional Support for Indians in Chicago | Schaumburg, Naperville | LeanOn', description: 'Schaumburg, Naperville, Skokie — Chicago\'s Indian diaspora is large and tightly connected. But community watching and real support are different. Talk to someone who gets it.', url: 'https://www.leanon.app/indians-in-chicago', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand what Indian life in Chicago is like?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the NRI experience in American Midwest metros. The Chicago Indian experience — the Schaumburg and Naperville communities, the Midwest winters, the community dynamics — doesn\'t need explaining. They already know.' } },
  { '@type': 'Question', name: 'When can I connect from Chicago?', acceptedAnswer: { '@type': 'Answer', text: 'Chicago (CST) is 11.5 hours behind IST. 8am Chicago = 7:30pm India. Your early morning before the commute is Indian evening — a reliable window for finding a listener. No appointment needed.' } },
  { '@type': 'Question', name: 'Is this private from my Schaumburg or Naperville community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely private. Sessions are anonymous — phone number and first name only. Listeners are in India, with no connection to the Chicago Indian network. Nothing is shared with anyone.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Chicago', item: 'https://www.leanon.app/indians-in-chicago' },
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

export default function IndiansInChicagoPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Chicago</span></nav>
        <div className="hero">
          <p className="badge">Indians in Chicago &middot; Schaumburg &middot; Naperville</p>
          <h1>The Midwest dream. Community around you. <em>Still somehow alone.</em></h1>
          <p className="lead">Schaumburg and Naperville have dense Indian communities — temples, cricket clubs, Bollywood nights. And still, loneliness. The Midwest winters are hard. The community is warm but also watchful. You need somewhere that&rsquo;s outside the gossip network but completely inside the culture. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Schaumburg, Naperville, Skokie: The Chicago Indian Triangle</h2>
          <p>Chicago&rsquo;s Indian community is concentrated in a triangle running from Skokie and Devon Avenue on the North Side — home to one of the most famous South Asian commercial strips in America — out to Schaumburg in the northwest suburbs and Naperville and Lisle to the southwest. The Devon Avenue corridor has been an Indian cultural hub since the 1970s. The suburbs have grown dramatically as the community has prospered.</p>
          <p>What marks Chicago Indian community life is a particular warmth combined with a particular watchfulness. The community is deeply interconnected — you will meet the same families at the mandir on Sunday and at the cricket club on Saturday and at the Diwali party next month. This closeness is genuinely supportive. It is also the reason that certain things simply cannot be said inside it. Marriages under strain. Mental health struggles. The question of whether this life is really what you wanted.</p>
          <p>LeanOn gives you a real Indian peer listener in India — outside the Chicago network, inside the culture — to say those things. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Chicago Winters and the Loneliness That Compounds</h2>
          <p>The Midwest winter is not a small thing. Chicago winters are long, grey, and genuinely isolating. For Indians who grew up in warm climates — whether in South India, Punjab, Gujarat, or UP — the Chicago cold from November through March can become a psychological weight that compounds other isolation. The short days. The indoor weeks. The gap between the warm community events of summer and the long quiet of winter.</p>
          <p>Chicago (CST) is 11.5 hours behind IST. 8am Chicago is 7:30pm India — a natural window. On a grey February morning, your commute to the office in Schaumburg or your desk in a Naperville home office is India&rsquo;s warm evening. A real Indian listener is available. No appointment needed. Anonymous. The first 5 minutes are free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Warm community. Real conversation.</h2><p>Real Indian peer listener. Understands Chicago NRI life. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/indians-in-texas">Indians in Texas &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
