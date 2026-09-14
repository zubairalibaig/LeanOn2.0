import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Malayali NRI Support | Talk to Someone from Kerala Who Gets It | LeanOn',
  description: 'Kerala has one of the largest NRI communities in the world. Gulf, UK, USA — the Malayali abroad carries unique weight. LeanOn connects you with listeners from Kerala.',
  keywords: ['malayali nri support', 'kerala nri', 'malayali abroad', 'keralite in usa', 'keralite in uk', 'gulf malayali', 'talk to malayali online'],
  alternates: { canonical: 'https://www.leanon.app/malayali-nri-support' },
  openGraph: { title: 'Malayali NRI Support | Talk to Someone from Kerala Who Gets It | LeanOn', description: 'Kerala has one of the largest NRI communities in the world. Gulf, UK, USA — the Malayali abroad carries unique weight. LeanOn connects you with listeners from Kerala.', url: 'https://www.leanon.app/malayali-nri-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk in Malayalam?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Several LeanOn listeners speak Malayalam. Mention your preferred language when you start and your listener will respond in Malayalam or Hindi as you prefer.' } },
  { '@type': 'Question', name: 'Do listeners understand the Gulf Malayali experience specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Gulf-Kerala corridor is deeply understood — the sacrifice of Gulf workers, the remittances that built Kerala, and the identity crisis of returning after years abroad to a home that has moved on. Both Gulf experiences and Western country experiences are understood.' } },
  { '@type': 'Question', name: 'I am a nurse in the UK and very isolated. Is this for me?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Malayali nurses in the UK are one of the most isolated NRI groups — working difficult hours, in a new country, often far from their immediate family who may still be in Kerala or the Gulf. You do not have to minimise that. A listener will hear it.' } },
  { '@type': 'Question', name: 'Is this confidential from my family in Kerala?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Your family in Kerala and your community abroad will never know. Sessions are anonymous — phone number and first name only.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription needed.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Malayali NRI Support', item: 'https://www.leanon.app/malayali-nri-support' },
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

export default function MayalaliNriSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Malayali NRI Support</span></nav>
        <div className="hero">
          <p className="badge">Malayali NRI &middot; Kerala &middot; Gulf &amp; UK &amp; USA</p>
          <h1>Kerala sends more people abroad than almost any state. <em>Most of them carry it quietly.</em></h1>
          <p className="lead">Kerala&rsquo;s NRI community is one of the largest and most geographically spread in India — Gulf workers, nurses in the UK, IT professionals in the US, students in Australia. Each group carries a different weight, but the loneliness of being the one who left is common across all of them. Talk to a Malayali peer listener who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Gulf-Kerala Story — and the Identity It Creates</h2>
          <p>The Gulf-Kerala corridor is one of the most significant migration stories in modern India. Generations of Malayali workers went to Dubai, Abu Dhabi, Kuwait, and Saudi Arabia, sent remittances home, and built a Kerala that runs partly on NRI money. The sacrifice was real. The psychological cost of that sacrifice — years away from family, children growing up without a parent present, the social status anxiety of &ldquo;Gulf returnee&rdquo; — is rarely discussed directly.</p>
          <p>Gulf returnees face a particular identity crisis: you worked for decades abroad, saved carefully, returned home — and found that Kerala has moved on in ways that make you feel like a stranger in your own place. Your reference points are from the Gulf years. The social scripts back home have changed. This specific disorientation is something LeanOn listeners understand without needing it explained.</p>
          <p>Onam in Dubai is different from Onam in Thrissur. Both are beautiful. Only one feels like home. LeanOn is a space to talk about that difference honestly. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Malayali Nurses in the UK — One of the Most Isolated NRI Groups</h2>
          <p>Kerala has exported more nurses to the UK than almost any other source. These women — and some men — work long shifts in the NHS, often in towns far from any Malayali community, living in unfamiliar places with unfamiliar food and unfamiliar weather. Many have left their children in Kerala with grandparents. Many have spouses still in Kerala or the Gulf. The isolation is specific and acute.</p>
          <p>This is a group that is often invisible in NRI conversations, which tend to focus on tech workers and students. If you are a Malayali nurse in the UK, your experience is real and it deserves space. LeanOn listeners will hear you — in Malayalam if you prefer — without the NRI success narrative that makes your actual daily reality feel unacknowledgeable.</p>
        </div>

        <div className="section">
          <h2>Family Finances That Cross Borders</h2>
          <p>In Kerala, NRI remittances are not just personal — they are community infrastructure. Many Malayali NRIs support parents, siblings, children&rsquo;s education, house construction, and extended family obligations back home. The expectation of financial support from abroad is baked into the family structure. And the weight of being that financial anchor, from thousands of miles away, while also building your own life in a foreign country — that weight is real and often unspoken.</p>
          <p>You cannot say to your family in Kerala that you are struggling. You are, by definition, the one who &ldquo;made it out.&rdquo; LeanOn gives you a space to say it to someone who will not send the information back to Kerala, and who understands the exact bind you are in.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Oru Keralite kku oru Keralite listener.</h2><p>Understands the Gulf, the UK, the US, and the weight of being away. First 5 minutes free. Sessions from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/nri-parents-india">NRI guilt parents &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
