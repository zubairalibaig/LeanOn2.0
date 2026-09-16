import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Minneapolis | Peer Support for Minnesota\'s Indian Community | LeanOn',
  description: "Indians in Minneapolis — medical professionals, tech workers, students — face one of the most isolating winters in America. Talk to someone who gets it.",
  keywords: ['indians in minneapolis', 'indian community minnesota', 'nri minnesota', 'south asian minneapolis', 'desi twin cities', 'indian minnesota'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-minneapolis' },
  openGraph: { title: 'Indians in Minneapolis | Peer Support for Minnesota\'s Indian Community | LeanOn', description: "Indians in Minneapolis — medical professionals, tech workers, students — face one of the most isolating winters in America. Talk to someone who gets it.", url: 'https://www.leanon.app/indians-in-minneapolis', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand the Minnesota Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and trained to understand the NRI experience, including the specific isolation of being Indian in Minnesota — the brutal winters, the predominantly white state, the smaller Indian community, and the pressure of being a high-achieving immigrant in a state that is not known for its diversity.' } },
  { '@type': 'Question', name: 'What time can I connect from Minneapolis?', acceptedAnswer: { '@type': 'Answer', text: 'Minneapolis (CST) is 11.5 hours behind IST. 7am Minneapolis = 6:30pm India. Early mornings before work are a good time to connect — Indian listeners are available in their evening.' } },
  { '@type': 'Question', name: 'Does the seasonal darkness in Minnesota affect what I can talk about?', acceptedAnswer: { '@type': 'Answer', text: 'No. You can talk about anything — including the specific weight of Minnesota winters as an Indian immigrant. The seasonal isolation, the lack of sunlight, the way January feels when you are from a warm country and your social world is already thin — listeners are prepared to hear all of it.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'I work at Mayo Clinic or the U of M. Is this private from my institution?', acceptedAnswer: { '@type': 'Answer', text: 'Completely private. LeanOn is anonymous — phone number and first name only. Nothing is shared with your employer, colleagues, or institution.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Minneapolis', item: 'https://www.leanon.app/indians-in-minneapolis' },
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

export default function IndiansInMinneapolisPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Minneapolis</span></nav>
        <div className="hero">
          <p className="badge">Indians in Minneapolis &middot; Twin Cities &middot; Minnesota</p>
          <h1>-20°C outside. <em>Just as cold inside.</em></h1>
          <p className="lead">Minneapolis draws Indian professionals to its medical institutions, tech companies, and the University of Minnesota. But Minnesota winters are not just cold — they are isolating in a way that compounds everything else. When you are Indian in one of the whitest states in America, with a small community and a brutal winter, the loneliness has a specific texture. Talk to someone who gets it. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Mayo Clinic, UMN, Medtronic: The Minnesota Indian Medical World</h2>
          <p>The Twin Cities draw Indian professionals primarily through two channels: the medical world and technology. Mayo Clinic in Rochester draws Indian physicians and researchers from across the country. The University of Minnesota has a significant Indian student and faculty community. Medtronic, UnitedHealth Group, 3M — the Minneapolis corporate world has Indian engineers and professionals distributed across the suburbs from Eden Prairie to Maple Grove to Eagan.</p>
          <p>The Indian community here is real but small by comparison to coastal cities. There are temples, cultural associations, and a functioning Indian social world. But you can spend a week in Minneapolis without seeing another Indian face in your building, your neighbourhood, or your gym. The visibility — being conspicuous as an Indian in a predominantly white state — is its own weight. The sense of being watched, of representing your entire country in every room you enter, is exhausting in a way that accumulates.</p>
          <p>LeanOn listeners understand this specific kind of fatigue. First 5 minutes free, from ₹160.</p>
        </div>

        <div className="section">
          <h2>What Minnesota Winter Does to Indian Immigrants</h2>
          <p>January in Minneapolis averages -14°C. The sun sets at 4:30pm. The cold is not just uncomfortable — it is physically constraining in a way that Indian immigrants, from a country where you can always walk outside, find profoundly isolating. The spontaneous socialising that is natural in warmer places — a walk after dinner, sitting outside, visiting a friend without a plan — doesn&rsquo;t exist for five months of the year.</p>
          <p>The Indian doctor who moved from Mumbai to work at Abbott Northwestern and spends Minnesota winter evenings indoors with Netflix and a growing anxiety about whether they made the right choice. The UMN graduate student from Chennai, here for their PhD, who has been indoors since November and whose last real conversation was with their advisor about data. The tech worker in Eden Prairie who has a comfortable suburban life and a profound sense of being somewhere they don&rsquo;t quite belong.</p>
          <p>Minneapolis (CST) is 11.5 hours behind IST. 7am Minneapolis = 6:30pm India. Before your Minnesota morning, India is awake. Talk to someone who understands. From ₹160.</p>
        </div>

        <div className="section">
          <h2>The Identity Conspicuousness of Being Indian in Minnesota</h2>
          <p>Minnesota is one of the least diverse major states in America. For most Indians here, every day involves being one of the only Indian people in any given room. This has a particular effect over time. You become a spokesperson for your country in contexts where you just wanted to eat lunch. You answer questions about Indian food, Hinduism, Bollywood, and cricket that you are tired of answering. You manage other people&rsquo;s curiosity as part of your daily work.</p>
          <p>This is a real weight, and it almost never gets talked about honestly — because talking about it requires explaining the exhaustion to the very people causing it, which makes it worse. LeanOn exists for exactly this: a listener who already understands, who doesn&rsquo;t need to be educated, who can hold the specific complexity of Indian identity in a white Midwestern state. No appointment, no commute in the cold. First 5 minutes free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Minnesota winter is brutal. You don&rsquo;t have to go through it alone.</h2><p>Real Indian peer listener. Understands the Twin Cities Indian experience. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-homesick">NRI homesickness &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
