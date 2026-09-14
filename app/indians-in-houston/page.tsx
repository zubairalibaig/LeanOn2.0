import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in Houston | LeanOn',
  description: 'Sugar Land, Katy, Pearland — Houston\'s Indian community is huge but loneliness hits differently here. Talk to a peer listener in India who understands. First 5 min free.',
  keywords: ['indians in houston support', 'indian community houston', 'sugar land indian support', 'katy texas indian', 'indian loneliness houston', 'desi support houston texas'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-houston' },
  openGraph: { title: 'Emotional Support for Indians in Houston | LeanOn', description: 'Sugar Land, Katy, Pearland — Houston\'s Indian community is huge but loneliness hits differently here. Talk to a peer listener in India who understands. First 5 min free.', url: 'https://www.leanon.app/indians-in-houston', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk to someone who understands Houston\'s Indian community specifically?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and are familiar with the NRI experience including the Houston and Texas context — the tech corridors, the Sugar Land and Katy communities, the pressure of immigrant life in America. You don\'t need to explain the background.' } },
  { '@type': 'Question', name: 'What time does it work to call from Houston?', acceptedAnswer: { '@type': 'Answer', text: 'Houston (CST) is 11.5 hours behind IST. 8am Houston = 7:30pm India. This means your early morning before work aligns with Indian evenings — a good window when many listeners are available.' } },
  { '@type': 'Question', name: 'Is this confidential — no one in my community will know?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are completely anonymous. You sign up with only a phone number and first name. Nothing is shared with anyone in your community, your employer, or family back in India.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'The first 5 minutes of every session are free. Paid sessions start from ₹160 for 15 minutes. There is no subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indians in Houston', item: 'https://www.leanon.app/indians-in-houston' },
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

export default function IndiansInHoustonPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indians in Houston</span></nav>
        <div className="hero">
          <p className="badge">Indians in Houston &middot; Sugar Land &middot; Texas Desi</p>
          <h1>You built a life in Sugar Land. <em>You don&rsquo;t have to carry it alone.</em></h1>
          <p className="lead">Houston has one of the largest Indian communities in America — Sugar Land, Katy, Pearland, Stafford. But being surrounded by your own community doesn&rsquo;t always mean feeling understood. The H-1B pressure. The family back home who think you&rsquo;ve &ldquo;arrived.&rdquo; The loneliness of a big American life with something missing. Talk to a real Indian peer listener in India. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Houston&rsquo;s Indian Community: Big Numbers, Hidden Loneliness</h2>
          <p>The Houston metro area is home to well over 200,000 people of Indian origin. Sugar Land — with its Diwali celebrations in Town Square, its rows of Indian restaurants on Eldridge and First Colony, its cricket league and its temple — can feel like a small India. Katy and Pearland have followed. If you live here, you are surrounded by people who look like you, eat what you eat, and speak your language.</p>
          <p>And yet. The community can also be a pressure cooker. Everyone knows everyone. The uncles and aunties compare salaries at Diwali gatherings. Your kids&rsquo; schools, your house size, your job title — all of it circulates. You can be in the middle of the biggest Indian community in Texas and feel like you can&rsquo;t say a true word out loud, because everything gets back to someone.</p>
          <p>LeanOn gives you access to a real Indian peer listener — someone based in India, outside your community network entirely, who still completely understands the cultural context. No explaining required. No gossip risk. Just someone genuinely listening.</p>
        </div>

        <div className="section">
          <h2>The Weight That Comes With the H-1B Life</h2>
          <p>Houston draws Indian professionals in energy, healthcare, and technology. The visa, the job dependency, the constant performance of success — it accumulates. You cannot afford to seem weak at work because your status is tied to your employer. You cannot tell your parents you&rsquo;re struggling because they sacrificed too much for you to struggle. You cannot tell your Houston Indian friends because it goes in the community grapevine.</p>
          <p>The result is a very specific kind of silent carrying. You are fine. You are always fine. And inside, something is asking: is this it? The big house in Katy, the good school for the kids, the weekends at the Indian grocery on Westheimer — is this what I came here for?</p>
          <p>Houston (CST) is 11.5 hours behind IST. 8am in Houston is 7:30pm in India — a natural window. Before your work day starts, Indian listeners are winding down their evenings and available to talk. No appointment needed. Browse who is online and start a session.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You don&rsquo;t have to carry it alone.</h2><p>Real Indian peer listener. Understands the Houston NRI experience. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-texas">Indians in Texas &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
