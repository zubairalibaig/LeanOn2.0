import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in Calgary | Peer Support for Alberta\'s Growing Indian Community | LeanOn',
  description: "Calgary's Indian community — students, oil industry workers, IT — face long winters and a small desi network. Talk to someone who understands Indian life in Alberta.",
  keywords: ['indians in calgary', 'indian community calgary', 'nri calgary', 'south asian alberta', 'desi calgary', 'indian alberta'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-calgary' },
  openGraph: { title: 'Indians in Calgary | Peer Support for Alberta\'s Growing Indian Community | LeanOn', description: "Calgary's Indian community — students, oil industry workers, IT — face long winters and a small desi network. Talk to someone who understands Indian life in Alberta.", url: 'https://www.leanon.app/indians-in-calgary', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand the Calgary Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and understand the NRI experience, including the specific dynamics of Alberta — the oil industry cycles, the long bitter winters, being far from the main Ontario Indian hubs, and the particular isolation of a city whose Indian community is still building its roots.' } },
  { '@type': 'Question', name: 'What time can I connect from Calgary?', acceptedAnswer: { '@type': 'Answer', text: 'Calgary (MST) is 12.5 hours behind IST. 7am Calgary = 7:30pm India. Early mornings before work are a good time to connect — Indian listeners are available in their evening.' } },
  { '@type': 'Question', name: 'Is this different from talking to my Indian community in Calgary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are completely outside your Calgary social circle. They don\'t know your family, your coworkers, or your temple community. You can say what you actually feel without worrying about it getting back to anyone.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'I\'m worried about the oil industry slowdown. Can I talk about financial anxiety?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners can hold financial anxiety, job insecurity, and the stress of an uncertain industry. You don\'t have to have a crisis to talk — the low-grade worry about your career and your family\'s future is a real weight and worth talking about.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Calgary', item: 'https://www.leanon.app/indians-in-calgary' },
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

export default function IndiansInCalgaryPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Calgary</span></nav>
        <div className="hero">
          <p className="badge">Indians in Calgary &middot; Alberta &middot; Canada</p>
          <h1>Chinook winds and oil patch cycles. <em>No one warned you about this part.</em></h1>
          <p className="lead">Calgary&rsquo;s Indian community is real, warm, and spread thin. The city draws Indian immigrants through oil and gas, IT, healthcare, and the university — but it is far from Brampton and Mississauga, the winters are long, and the Indian social infrastructure is still building. Talk to someone who understands Indian life in Alberta. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Calgary Indian Community: Oil, IT, and the Long Haul</h2>
          <p>Calgary&rsquo;s Indian community came in waves — early IT workers in the 2000s, oil and gas professionals through the boom years, and a more recent wave of students and healthcare workers. The community is centred around the NE and NW quadrants of the city — Forest Lawn, Martindale, Saddle Ridge — with newer Indian families also settling in the suburbs of Chestermere and Airdrie. The Diwali celebrations, cricket leagues, and Gujarati associations are there.</p>
          <p>But Calgary is not Brampton. The Indian community infrastructure that the Greater Toronto Area has built over decades — the density of cultural events, the Indian grocery stores on every corner, the street-level Indian presence that makes you feel at home without effort — is not the same in Calgary. You can go days in certain parts of the city without the cultural anchoring that comes naturally in denser Indian communities. That gap is real, and it matters.</p>
          <p>LeanOn listeners are based in India, available without appointment, and understand the Alberta Indian experience. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Oil Industry Uncertainty and the Immigrant Who Bet on Alberta</h2>
          <p>Many Indians came to Calgary specifically because of the oil and gas industry — the salaries were exceptional, the standard of living was high, and the Alberta advantage seemed secure. And then the oil price cycles hit. The boom-bust pattern of Calgary&rsquo;s economy is something Indian immigrants — who often came here with specific financial goals for their family back in India — find particularly destabilising.</p>
          <p>The Indian engineer at Suncor or Enbridge who watched colleagues get laid off and is calculating how many months they can sustain if their contract ends. The IT contractor whose project was cancelled because oil prices dropped. The Indian family who bought a house at the top of the market and is now watching prices move in the wrong direction. Financial anxiety for NRIs carries an extra layer — it is not just your own security, it is remittances, it is the promise you made when you left, it is your parents&rsquo; retirement. LeanOn is a space to talk about all of it. Calgary (MST) is 12.5 hours behind IST.</p>
        </div>

        <div className="section">
          <h2>Stampede Culture and the Indian Who Is Always a Visitor</h2>
          <p>Calgary has a very specific cultural identity built around the Calgary Stampede and Western Canadian culture — cowboy hats, rodeos, country music, a particular brand of frontier pride. This is not bad or hostile — Calgarians are genuinely friendly. But it is far from the Indian cultural world in a way that creates a low-grade sense of permanent visitor status.</p>
          <p>The Indian family who has been in Calgary for eight years and still feels like they are watching the city from the outside. The Indian professional whose colleagues are warm and welcoming and with whom they share almost nothing cultural. The way you get invited to Stampede parties every year and go and enjoy it and come home feeling somehow more aware of what you are not. LeanOn is the space to talk about this without having to explain it. Real Indian listener, anonymous, no appointment needed. From US$10.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Alberta is home now. Talk to someone who understands what that means.</h2><p>Real Indian peer listener. Understands the Calgary Indian experience. Anonymous. First 5 minutes free. From US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/indians-in-toronto">Indians in Toronto &rarr;</a>
          <a href="/indians-in-vancouver">Indians in Vancouver &rarr;</a>
          <a href="/nri-homesick">NRI homesickness &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
