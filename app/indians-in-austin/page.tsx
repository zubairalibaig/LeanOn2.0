import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Austin Texas | Peer Support for Austin\'s Growing Desi Community | LeanOn',
  description: "Austin's Indian community has exploded with tech migration. But tech success in Austin doesn't mean you have someone to talk to. LeanOn is here.",
  keywords: ['indians in austin', 'austin indian community', 'desi austin', 'nri austin texas', 'south asian austin', 'indian tech austin'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-austin' },
  openGraph: { title: 'Indians in Austin Texas | Peer Support for Austin\'s Growing Desi Community | LeanOn', description: "Austin's Indian community has exploded with tech migration. But tech success in Austin doesn't mean you have someone to talk to. LeanOn is here.", url: 'https://www.leanon.app/indians-in-austin', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the Austin Indian tech experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and understand the NRI experience, including the specific dynamics of Austin\'s Indian tech migration — the transplant loneliness, the cultural mismatch of Indian values in an aggressively Texan city, the startup culture pressure, and the isolation of being far from established Indian communities on the coasts.' } },
  { '@type': 'Question', name: 'What time can I connect from Austin?', acceptedAnswer: { '@type': 'Answer', text: 'Austin (CST) is 11.5 hours behind IST. 7am Austin = 6:30pm India. Before your morning standup or commute, Indian listeners are available in their evening.' } },
  { '@type': 'Question', name: 'I moved to Austin for work and know almost no one. Can listeners help with this?', acceptedAnswer: { '@type': 'Answer', text: 'Transplant loneliness — being new to a city with no pre-existing network — is one of the most common things LeanOn listeners hear about. You can talk through the specific loneliness of being in a new city, far from family, with colleagues but no real friends.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'Austin feels very un-Indian culturally. Can listeners understand this?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The specific cultural mismatch of Indian sensibility in a city built around individualism, country music, BBQ, and a very particular brand of Texas pride is something listeners can hold. The pressure to love the city you moved to — and the guilt when you don\'t — is real.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Austin', item: 'https://www.leanon.app/indians-in-austin' },
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

export default function IndiansInAustinPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Austin</span></nav>
        <div className="hero">
          <p className="badge">Indians in Austin &middot; Texas &middot; Keep Austin Weird</p>
          <h1>Tesla, Oracle, and 40,000 Indians. <em>No one to actually talk to.</em></h1>
          <p className="lead">Austin&rsquo;s Indian community has tripled in five years. The Tesla Gigafactory, Oracle headquarters, Dell, and a growing startup ecosystem pulled thousands of Indian engineers and professionals to Texas. The city is booming, the weather is warm, and the loneliness is real. When you moved for a job and your entire family is elsewhere, the city&rsquo;s energy doesn&rsquo;t fill that gap. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Austin Indian Tech Migration: Big Numbers, Thin Roots</h2>
          <p>Austin&rsquo;s Indian community is one of the fastest-growing in America — but it is almost entirely made up of transplants. Unlike New Jersey or Fremont, where Indian communities have been building infrastructure for thirty years, Austin&rsquo;s Indian community is young. The temples are newer. The cultural associations are still forming. The Indian grocery stores are there, but the dense, intergenerational Indian social fabric that takes decades to build is not.</p>
          <p>The South Austin and Cedar Park and Round Rock suburbs fill with Indian families who all arrived within the last five years. They know each other through work, through the temple WhatsApp groups, through the kids&rsquo; schools. But the friendships are surface — transplant friendships, built quickly because everyone is in the same situation. The kind of deep friendship where you can say what you are actually feeling is hard to build in five years, especially when you are also building a career and raising children and navigating a city that is very much still figuring out what it is.</p>
          <p>LeanOn listeners are based in India, available without appointment, and understand the transplant Indian experience. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Cultural Mismatch: Indian Values in the Most Texan of Cities</h2>
          <p>Austin has a very specific cultural identity — keep Austin weird, live music capital, BBQ and bourbon, tech bro startup energy, and an aggressive local pride that can feel unwelcoming to anyone whose identity doesn&rsquo;t fit the mould. For many Indian immigrants, the cultural mismatch is more acute in Austin than it would be in New York or San Francisco, where cosmopolitanism is a value. Austin is not cosmopolitan in the same way — it is proudly itself, and that self is not particularly Indian.</p>
          <p>The Indian engineer at a Tesla factory who is surrounded by American colleagues who bond over things they have no entry point into. The startup founder who moved to Austin for the ecosystem and spends every networking event translating themselves. The Indian family in Round Rock whose kids go to school with mostly white and Latino classmates and are navigating a cultural distance their parents didn&rsquo;t anticipate. These are the ordinary textures of Indian Austin life, and they deserve to be talked about. Austin (CST) is 11.5 hours behind IST. 7am Austin = 6:30pm India.</p>
        </div>

        <div className="section">
          <h2>Far from Family, Closer to the Edge</h2>
          <p>One of the distinctive features of Austin Indian life is how far it is from the established Indian community hubs. No family in Austin. The nearest large Indian community is Dallas, two and a half hours away. The Bay Area cousins, the New Jersey aunties — everyone is a flight away. And flights from Austin are not cheap.</p>
          <p>The Indian overachiever who chose Austin for the opportunity and the lower taxes and the space, and now has a house with three bedrooms and nobody to fill it with on a hard Sunday. The Indian couple who moved together and have each other and are grateful for that and also deeply lonely because &ldquo;each other&rdquo; is not the same as a network. LeanOn is a real Indian listener, available in minutes, who understands this specific situation. From ₹160.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Austin is booming. You should be able to say when you&rsquo;re not.</h2><p>Real Indian peer listener. Understands the Austin Indian transplant experience. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/indians-in-texas">Indians in Texas &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
