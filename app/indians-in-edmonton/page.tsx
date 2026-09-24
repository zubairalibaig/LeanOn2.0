import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Edmonton | Peer Support for Indians in Northern Alberta | LeanOn',
  description: "Edmonton has a growing Indian community navigating harsh winters, a spread-out city, and the unique pressures of Alberta's economy. Talk to someone who gets it.",
  keywords: ['indians in edmonton', 'nri edmonton', 'indian community alberta', 'south asian edmonton', 'desi edmonton', 'indian northern canada'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-edmonton' },
  openGraph: { title: 'Indians in Edmonton | Peer Support for Indians in Northern Alberta | LeanOn', description: "Edmonton has a growing Indian community navigating harsh winters, a spread-out city, and the unique pressures of Alberta's economy. Talk to someone who gets it.", url: 'https://www.leanon.app/indians-in-edmonton', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand the Edmonton Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and trained to understand the NRI experience, including the specific isolation of Edmonton — the brutal northern winters, the smaller and less-connected Indian community compared to Toronto or Vancouver, and the particular loneliness of being in a city that is often overlooked even within Canada.' } },
  { '@type': 'Question', name: 'What time can I connect from Edmonton?', acceptedAnswer: { '@type': 'Answer', text: 'Edmonton (MST) is 12.5 hours behind IST. 7am Edmonton = 7:30pm India. Early mornings before work or university are a good time — Indian listeners are available in their evening.' } },
  { '@type': 'Question', name: 'I\'m a University of Alberta student feeling isolated. Is LeanOn right for me?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Indian university students navigating Edmonton winters, academic pressure, and the social difficulty of building a life in a new city are among the people LeanOn was built for. Listeners understand the student experience — the homesickness, the financial stress, the academic pressure — without judgment.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription required.' } },
  { '@type': 'Question', name: 'Edmonton is not as famous as Vancouver or Toronto. Does that affect what I can talk about?', acceptedAnswer: { '@type': 'Answer', text: 'No. Listeners are trained to understand NRI experience broadly, and the fact that Edmonton is less well-known outside Alberta doesn\'t limit what you can discuss. The isolation of being in a less-famous city — including the way it\'s invisible in Indian diaspora conversations — is something worth talking about.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Edmonton', item: 'https://www.leanon.app/indians-in-edmonton' },
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

export default function IndiansInEdmontonPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Edmonton</span></nav>
        <div className="hero">
          <p className="badge">Indians in Edmonton &middot; Northern Alberta &middot; Canada</p>
          <h1>-40°C in January. <em>The cold that doesn&rsquo;t just mean weather.</em></h1>
          <p className="lead">Edmonton is one of the coldest major cities in North America, and its Indian community — University of Alberta students, healthcare workers, trades, IT professionals — navigates that cold while building lives far from the main Indian hubs in Brampton and Surrey. The isolation of northern Alberta has its own character. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>University of Alberta, AHS, Trades: The Edmonton Indian Community</h2>
          <p>Edmonton&rsquo;s Indian community is smaller than Calgary&rsquo;s and considerably smaller than the Toronto or Vancouver Indian communities, but it is real and growing. The University of Alberta has a significant Indian student and faculty community — a large proportion of international students are from India, and Indian graduate students and postdocs are a meaningful part of the university&rsquo;s research culture. Alberta Health Services employs Indian physicians, nurses, and allied health professionals. The trades sector — electricians, engineers, welders — has a growing Indian workforce.</p>
          <p>The community is centred in areas like Mill Woods, Millwoods Town Centre, and the Edmonton suburbs of Sherwood Park and Spruce Grove. There are temples, Indian grocery stores, and cultural events. But Edmonton is spread out — the city sprawls over a massive area, and without a car, the social infrastructure that does exist is hard to reach. The isolation is physical as well as social.</p>
          <p>LeanOn listeners understand the Edmonton Indian experience. First 5 minutes free, from US$10.</p>
        </div>

        <div className="section">
          <h2>What It Means to Be Indian in Canada&rsquo;s Northernmost Major City</h2>
          <p>Edmonton sits at 53°N — higher latitude than Moscow. January averages -14°C, and temperatures regularly drop to -30°C or lower. For Indian immigrants from any part of the subcontinent, this is a physical reality that takes years to fully adjust to. The winter is not just cold — it is long. It begins in November and can persist into April. The darkness arrives early. The city shrinks inward.</p>
          <p>For Indian immigrants, the Edmonton winter compounds the social isolation that already comes with being in a smaller Indian community far from family. The Indian University of Alberta student from Hyderabad who has been inside their apartment for three days because it&rsquo;s -35°C and the campus feels like a wind tunnel. The Indian healthcare worker who moved from Mumbai to Edmonton General and is three years in and still not sure they made the right decision. The Indian family in Mill Woods that has a comfortable life and a quiet, persistent loneliness that they don&rsquo;t know how to name.</p>
          <p>Edmonton (MST) is 12.5 hours behind IST. 7am Edmonton = 7:30pm India. Before your day starts, Indian listeners are available.</p>
        </div>

        <div className="section">
          <h2>The Invisible City: Edmonton in the Indian Diaspora Conversation</h2>
          <p>When Indian immigrants talk about Canada, they talk about Toronto and Vancouver. Brampton. Surrey. The GTA. Edmonton barely appears in the conversation. This invisibility has a real effect on Indians who live here — it reinforces the sense that your experience doesn&rsquo;t quite count, that you chose a city that isn&rsquo;t on anyone&rsquo;s map, that your version of the NRI story is somehow less than.</p>
          <p>The Indian in Edmonton who visits cousins in Brampton and feels a pang of something uncomfortable — jealousy, inadequacy, the knowledge that they chose differently and aren&rsquo;t sure it was right. The University of Alberta student whose friends from home all went to universities in Ontario and whose weekend conversations are full of references they don&rsquo;t share. LeanOn is for this too. No appointment, no judgment, anonymous. From US$10.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Northern Alberta. You deserve someone to talk to too.</h2><p>Real Indian peer listener. Understands the Edmonton Indian experience. Anonymous. First 5 minutes free. From US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/indians-in-calgary">Indians in Calgary &rarr;</a>
          <a href="/indians-in-toronto">Indians in Toronto &rarr;</a>
          <a href="/nri-homesick">NRI homesickness &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
