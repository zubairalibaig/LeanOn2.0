import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to an NRI Online | Find Someone Who Understands the Immigrant Life | LeanOn',
  description: 'Want to talk to an actual NRI — not a chatbot, not a professional — just someone who gets what immigrant life feels like from the inside? LeanOn connects you.',
  keywords: ['talk to nri online', 'talk to indian abroad', 'connect with nri', 'nri to talk to', 'find nri to talk to', 'indian immigrant to talk to'],
  alternates: { canonical: 'https://www.leanon.app/talk-to-nri-online' },
  openGraph: { title: 'Talk to an NRI Online | Find Someone Who Understands the Immigrant Life | LeanOn', description: 'Want to talk to an actual NRI — not a chatbot, not a professional — just someone who gets what immigrant life feels like from the inside? LeanOn connects you.', url: 'https://www.leanon.app/talk-to-nri-online', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Are LeanOn listeners actually NRI or Indian?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are Indian. Many have lived abroad or have close family who have — they understand the NRI experience from the inside, not from a textbook. You don\'t need to explain the context; they already carry it.' } },
  { '@type': 'Question', name: 'Can I specifically talk to someone who has lived abroad?', acceptedAnswer: { '@type': 'Answer', text: 'Listener profiles share their background and areas of lived experience. You can browse and choose someone whose specific experience matches what you want to talk about — whether that\'s life in the UK, the US, Canada, or elsewhere.' } },
  { '@type': 'Question', name: 'Can I talk in Hindi or my regional language?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many listeners are comfortable in Hindi and other Indian languages. Check individual listener profiles for language preferences.' } },
  { '@type': 'Question', name: 'Is my conversation private?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private — only your phone number and first name are used to create your account. Nothing is shared with your family, community, or anyone else.' } },
  { '@type': 'Question', name: 'How much does it cost to talk to an NRI online?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free — once per listener. Sessions continue from ₹160 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Talk to an NRI Online', item: 'https://www.leanon.app/talk-to-nri-online' },
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

export default function TalkToNriOnlinePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Talk to an NRI Online</span></nav>
        <div className="hero">
          <p className="badge">NRI Connection &middot; Indian Immigrant Life &middot; Peer Support</p>
          <h1>Talk to an NRI Online — Someone Who <em>Already Knows</em> Your World</h1>
          <p className="lead">You say &ldquo;Diwali away from home&rdquo; and they already know. You say &ldquo;my mother keeps sending profiles&rdquo; and they don&rsquo;t need it explained. The shorthand of shared experience is irreplaceable — and it&rsquo;s what LeanOn gives you. Not a chatbot, not a professional. A real Indian person who has lived the immigrant life from the inside. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Why You Want to Talk to an NRI Specifically</h2>
          <p>There are things about immigrant life that don&rsquo;t need explaining to someone who has been there. The guilt of missing your parents&rsquo; health struggles from abroad. The performance of being fine in front of colleagues. The loneliness of building a life in a new country where nobody knew you before you arrived. The specific anxiety of visa renewals and immigration uncertainty. The way your identity feels split — not quite at home in India anymore, not fully at home abroad either.</p>
          <p>When you talk to someone who has lived this, you don&rsquo;t spend thirty minutes setting up context. You skip straight to what you actually need to say. That saved time and energy isn&rsquo;t a small thing — it&rsquo;s the entire reason peer connection exists. They know the terrain. They just need to hear where you are on it.</p>
        </div>

        <div className="section">
          <h2>What You Can Talk About</h2>
          <p>Loneliness — the kind that doesn&rsquo;t make sense because your life looks fine. Marriage pressure from India reaching you thousands of miles away. Relationship strain between you and a partner navigating immigration together, or apart. Work stress in a foreign country where you can&rsquo;t afford to stumble. Missing family at the moments that matter — weddings, illnesses, ordinary Sunday evenings. The daily weight of being an immigrant, which is invisible to almost everyone around you.</p>
          <p>Nothing is off the table. There is no topic too small and no feeling that needs to be justified first.</p>
        </div>

        <div className="section">
          <h2>How It Works</h2>
          <p>Browse listeners at leanon.app/browse. Each listener profile shows their background, what they have experienced, and what they are good at listening to. Pick someone whose profile resonates with what you are carrying. Start a session — first 5 minutes free — once per listener, no appointment needed. Continue the conversation for as long as you need, from ₹160 for 15 minutes.</p>
          <p>Anonymous. Private. No record that goes back to your family or your community. Just the conversation you need.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Skip the preamble. Start where it matters.</h2><p>Real Indian peer listener. Understands the immigrant world from the inside. First 5 minutes free.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/indians-in-toronto">Indians in Toronto &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
