import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Los Angeles | Peer Support for the Desi LA Community | LeanOn',
  description: "LA's Indian community — Artesia, Cerritos, Culver City — is large but often isolated. Talk to someone who understands what it means to be Indian in LA.",
  keywords: ['indians in los angeles', 'indian community la', 'desi la', 'south asian la', 'indian in california', 'artesia indian community', 'cerritos indians'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-los-angeles' },
  openGraph: { title: 'Indians in Los Angeles | Peer Support for the Desi LA Community | LeanOn', description: "LA's Indian community — Artesia, Cerritos, Culver City — is large but often isolated. Talk to someone who understands what it means to be Indian in LA.", url: 'https://www.leanon.app/indians-in-los-angeles', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand what it means to be Indian in LA?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and understand the NRI experience broadly — including the specific dynamics of LA Indian life: the cultural mismatch of Indian values in a city built around reinvention, the Artesia and Cerritos community dynamics, the entertainment industry adjacent Indian experience, and the economic range within the LA Indian community.' } },
  { '@type': 'Question', name: 'What time can I call from Los Angeles?', acceptedAnswer: { '@type': 'Answer', text: 'Los Angeles (PST) is 13.5 hours behind IST. 7am in LA = 8:30pm in India. Early mornings, before the commute, Indian listeners are in their evening and available. Weekend mornings also work well.' } },
  { '@type': 'Question', name: 'Is it confidential from my community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. LeanOn uses phone number and first name only. Sessions are private and nothing is shared with your Artesia temple community, your Cerritos family network, or anyone else in your LA circle.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free every session. Sessions from ₹160 for 15 minutes. No subscription required.' } },
  { '@type': 'Question', name: 'I feel like I don\'t fully belong to either world — Indian or American. Can listeners understand this?', acceptedAnswer: { '@type': 'Answer', text: 'This is one of the most common things LeanOn listeners hear from NRIs. The in-between feeling — too Indian for LA, too LA for India — is real, and listeners are trained to hold that complexity without trying to resolve it or give you an answer.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Los Angeles', item: 'https://www.leanon.app/indians-in-los-angeles' },
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

export default function IndiansInLosAngelesPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Los Angeles</span></nav>
        <div className="hero">
          <p className="badge">Indians in Los Angeles &middot; Artesia &middot; Cerritos &middot; South Bay</p>
          <h1>Little India in Artesia. <em>Big loneliness everywhere else.</em></h1>
          <p className="lead">Los Angeles has one of America&rsquo;s most culturally rich Indian communities — and one of its most isolating cities. From Little India in Artesia to Silicon Beach in Culver City, LA Indians navigate enormous cultural distance in a city that runs on reinvention. Talk to someone who understands what it really means to be Indian in LA. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Artesia, Cerritos, Culver City: The LA Indian Landscape</h2>
          <p>Artesia&rsquo;s Pioneer Boulevard — Little India — is one of the most concentrated Indian commercial corridors in America. Cerritos has a large and established South Asian community. Torrance, Irvine, and the South Bay have growing Indian professional populations. And Silicon Beach — Culver City, Playa Vista, Santa Monica — has pulled in a newer wave of Indian tech and entertainment workers who live very differently from the Artesia old-timers.</p>
          <p>LA&rsquo;s Indian community is one of the most economically diverse in America. From Indian restaurant workers and cab drivers to Bollywood-adjacent creative types in West Hollywood to fintech engineers in Venice Beach to Gujarati business owners in Cerritos who have been here for thirty years — the LA Indian community is not one community. It is many, often invisible to each other.</p>
          <p>What unites them is the specific dissonance of being Indian in the most un-Indian of American cities. LA is a city of surfaces, reinvention, and individualism. Indian culture is about depth, continuity, and community. The friction between these two worlds is something LeanOn listeners understand.</p>
        </div>

        <div className="section">
          <h2>The Dream Chasers and the Distance Between Who You Are and Who LA Wants You to Be</h2>
          <p>LA draws Indians who came for dreams — entertainment industry, fashion, music, film. These Indians often exist in a different kind of isolation: their Indian community doesn&rsquo;t understand their creative ambitions, and their Hollywood world doesn&rsquo;t understand their Indian identity. The second-generation Indian kid from Cerritos who moved to Silver Lake to be a filmmaker, and feels like a stranger in both worlds.</p>
          <p>The Bollywood-adjacent dream chasers — the ones who came to LA because India&rsquo;s entertainment industry felt too closed, and America&rsquo;s felt impossibly far. The Indian engineer in Playa Vista who chose LA over the Bay Area because they wanted culture, and now spends 90 minutes in traffic each way and has almost no friends. The cultural mismatch is not just personal — it is structural. LA was not built for the kind of community Indian immigrants instinctively build.</p>
          <p>Los Angeles (PST) is 13.5 hours behind IST. 7am in LA is 8:30pm in India — before the morning commute starts, Indian listeners are available. Talk to someone who gets the LA Indian experience. From ₹160.</p>
        </div>

        <div className="section">
          <h2>The Specific Loneliness of Indian LA</h2>
          <p>Indian loneliness in LA has a particular flavour. It&rsquo;s not the grey Midwestern isolation of missing sunshine. It&rsquo;s the paradox of being surrounded by glamour and feeling completely unseen. The Indian engineer at a tech company in Santa Monica who goes to rooftop parties and has no one to call when something hard happens. The Indian woman in Culver City whose American colleagues are warm and friendly and with whom she shares nothing real.</p>
          <p>It&rsquo;s also the community pressure of the Artesia-Cerritos network — aunties who know your parents, temple politics, the weight of a tight-knit community that sees everything. Both extremes — complete social isolation and suffocating social monitoring — produce the same result: nowhere to actually talk. LeanOn is that somewhere. Anonymous, judgment-free, with someone who understands both sides.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>In a city of millions, talk to one person who actually listens.</h2><p>Real Indian peer listener. Understands the desi LA experience — from Artesia to Silicon Beach. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
