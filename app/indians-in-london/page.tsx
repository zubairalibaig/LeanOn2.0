import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indians in London | Peer Support for Britain\'s Largest Indian Community | LeanOn',
  description: "London has the largest Indian diaspora outside India. But Wembley, Southall, East Ham can feel crowded and still lonely. Talk to someone who really understands.",
  keywords: ['indians in london', 'indian community london', 'british indians', 'nri london', 'south asian london', 'desi london', 'wembley indians'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-london' },
  openGraph: { title: 'Indians in London | Peer Support for Britain\'s Largest Indian Community | LeanOn', description: "London has the largest Indian diaspora outside India. But Wembley, Southall, East Ham can feel crowded and still lonely. Talk to someone who really understands.", url: 'https://www.leanon.app/indians-in-london', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand London\'s Indian community?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and trained to understand the British Indian experience in depth — including London\'s fragmented Indian landscape: the Gujarati Wembley world, the Punjabi Southall culture, the Tamil East Ham community, the finance-district Indian elite, and the specific paradox of being lonely in a city with a million Indians.' } },
  { '@type': 'Question', name: 'What time can I connect from London?', acceptedAnswer: { '@type': 'Answer', text: 'London (GMT/BST) is 5.5 hours behind IST in winter and 4.5 hours in summer. 2pm in London in winter = 7:30pm India. Afternoons are a good time to connect — Indian listeners are available during their evening.' } },
  { '@type': 'Question', name: 'London\'s Indian community is huge. Why would I still feel lonely?', acceptedAnswer: { '@type': 'Answer', text: 'Scale does not equal connection. London\'s Indian community is large but fragmented — by region of origin, by class, by generation, by neighbourhood. You can be surrounded by Indians who share your heritage but not your specific experience. And the city itself — the pace, the cost, the transience — makes deep connection genuinely hard.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'I\'ve lived in London for years but still don\'t feel I belong. Is this normal?', acceptedAnswer: { '@type': 'Answer', text: 'Very. The London Indian loneliness paradox — the sense of being surrounded by Indians and still feeling unseen — is one of the most common experiences LeanOn listeners hear about from British Indians. Belonging is not the same as presence. You can be in the most Indian city outside India and still feel invisible.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in London', item: 'https://www.leanon.app/indians-in-london' },
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

export default function IndiansInLondonPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in London</span></nav>
        <div className="hero">
          <p className="badge">Indians in London &middot; Wembley &middot; Southall &middot; East Ham</p>
          <h1>A million Indians in London. <em>Still couldn&rsquo;t find the right person to talk to.</em></h1>
          <p className="lead">London has more Indians than any city outside India. Wembley, Southall, East Ham, Harrow, Ilford — entire parts of the city that are almost entirely Indian. And yet the London Indian loneliness paradox is real: you can be surrounded by your own people and still feel completely unseen. Talk to someone who understands why. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Wembley, Southall, East Ham: London&rsquo;s Fragmented Indian World</h2>
          <p>London&rsquo;s Indian community is not one community — it is many, often invisible to each other. Wembley and Harrow are predominantly Gujarati — the mandir communities, the Patel and Shah families, the jewellery shops and sweet centres on Ealing Road. Southall is Punjabi in character — the gurdwaras, the music, the wedding halls on every other street. East Ham and Green Street are heavily Tamil and Kerala. Tooting has a Sri Lankan Tamil community. The City and Canary Wharf have the Indian finance elite, who often have almost nothing in common socially with the Wembley or Southall communities.</p>
          <p>These are not the same community with the same experience — they are different histories, different class backgrounds, different generations in the UK. The newly arrived Indian professional in East London who goes to a Wembley temple event and feels like a tourist in their own diaspora. The third-generation Punjabi from Southall whose relationship to India is entirely different from the first-generation Tamil IT worker who arrived last year. The fragmentation is real, and it means that scale does not equal connection.</p>
          <p>LeanOn listeners understand the complexity of the British Indian experience. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The London Indian Loneliness Paradox</h2>
          <p>London is expensive, transient, and fast. The Indian finance professional in Canary Wharf who works 70-hour weeks and earns a City salary and lives alone in a zone 2 flat. The Indian NHS doctor who treats fifty patients a day and has not had a real conversation about their own life in months. The Indian family in Harrow who have the community, the samosas, the Diwali fireworks over Wembley stadium — and still feel a private loneliness they don&rsquo;t know how to name.</p>
          <p>The London Indian loneliness paradox is produced by several forces working together: the city&rsquo;s pace leaves no time for depth. The cost of living means everyone is working too hard. The fragmentation of the Indian community means the people around you may share your ethnicity but not your experience. And the British Indian expectation of stoicism — the stiff upper lip that got adopted alongside the citizenship — means emotional difficulty gets suppressed even when community exists.</p>
          <p>London (GMT) is 5.5 hours behind IST in winter. Afternoons are a good time — Indian listeners are available in their evening. From ₹160.</p>
        </div>

        <div className="section">
          <h2>Racism on the Tube and the Weight You Carry Without Naming It</h2>
          <p>London is genuinely more diverse and more accepting than most cities in the world. And racism happens here. The microaggression on the Tube that you absorbed and said nothing about. The comment from a colleague that was technically a compliment but landed wrong. The way certain spaces in the city — certain clubs, certain social circles, certain conversations — quietly let you know you are tolerated but not quite welcome. For Indians who came to London from India, this is sometimes the first sustained experience of being racially marked, and it is disorienting in a way that compounds other difficulties.</p>
          <p>LeanOn is a space where you do not have to explain what it is like to be brown in Britain. Listeners already understand. You can talk about the Tube incident, the difficult colleague, the exhaustion of navigating a world that was built by and for people who look nothing like you — without having to provide context or justify your reaction. Anonymous, private, no appointment needed.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The most Indian city outside India. Still worth talking.</h2><p>Real Indian peer listener. Understands the British Indian London experience. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
