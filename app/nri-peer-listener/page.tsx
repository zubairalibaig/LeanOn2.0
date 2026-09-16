import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Peer Listener | A Real Human Who Gets the Immigrant Experience | LeanOn',
  description: 'A peer listener for NRIs — someone who has actually lived the immigrant experience and can listen without needing it explained. Book a session anytime.',
  keywords: ['nri peer listener', 'nri listener online', 'peer listener for nri', 'indian listener abroad', 'nri support listener', 'talk to peer nri'],
  alternates: { canonical: 'https://www.leanon.app/nri-peer-listener' },
  openGraph: { title: 'NRI Peer Listener | A Real Human Who Gets the Immigrant Experience | LeanOn', description: 'A peer listener for NRIs — someone who has actually lived the immigrant experience and can listen without needing it explained. Book a session anytime.', url: 'https://www.leanon.app/nri-peer-listener', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What exactly is a peer listener?', acceptedAnswer: { '@type': 'Answer', text: 'A peer listener is someone who has lived through experiences similar to yours and is trained to listen with empathy. Unlike a professional, they bring lived experience rather than clinical knowledge. For NRIs, that means someone who already understands the immigrant world — no explanation required.' } },
  { '@type': 'Question', name: 'How is a peer listener different from a friend?', acceptedAnswer: { '@type': 'Answer', text: 'A friend has their own life, their own history with you, and sometimes their own opinions about what you should do. A peer listener has none of that. They are there solely to listen to you — no agenda, no judgment, no feedback you didn\'t ask for. That neutrality is the point.' } },
  { '@type': 'Question', name: 'Do NRI peer listeners have specific lived experience abroad?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are Indian and many have direct experience with life abroad or with close family who have lived abroad. You can browse profiles to find someone whose specific experience matches what you want to talk about.' } },
  { '@type': 'Question', name: 'Can I talk about anything or is it limited to certain topics?', acceptedAnswer: { '@type': 'Answer', text: 'You can talk about anything that is weighing on you — loneliness, relationships, family pressure, marriage, career anxiety, homesickness, identity. There are no required topics and no judgment about what you bring.' } },
  { '@type': 'Question', name: 'How much does a session with an NRI peer listener cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Peer Listener', item: 'https://www.leanon.app/nri-peer-listener' },
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

export default function NriPeerListenerPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Peer Listener</span></nav>
        <div className="hero">
          <p className="badge">NRI Peer Listener &middot; Indian Immigrant Life &middot; Lived Experience</p>
          <h1>An NRI Peer Listener — Someone Who <em>Needs No Explanation</em></h1>
          <p className="lead">You should not have to explain why Diwali away from home is hard. Or why the visa anxiety keeps you up at night. Or why success abroad still comes with an ache. A peer listener for NRIs already carries that context. They are there to listen — not advise, not fix, not judge. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Find a peer listener &rarr;</a>
        </div>

        <div className="section">
          <h2>What a Peer Listener Actually Is</h2>
          <p>A peer listener is not a counsellor. Not a life coach. Not a professional with a degree in immigrant psychology. They are an ordinary person who has walked through terrain similar to yours and has developed the skill of listening — genuinely, non-judgmentally, without agenda.</p>
          <p>For NRIs specifically, this means someone who has lived abroad, or who has close family who have, and who already carries the context of the Indian immigrant experience: the cultural split, the family pressure across time zones, the isolation in a foreign country, the guilt of struggling when your life &ldquo;looks good&rdquo;. They don&rsquo;t need the backstory. They are already standing in the same landscape you are trying to describe.</p>
        </div>

        <div className="section">
          <h2>Different from Friends — and That Is the Point</h2>
          <p>Friends are important. But friends have histories with you, their own opinions about your life, and sometimes a stake in what you decide. They worry about you. They want to help in ways that sometimes mean guiding you toward what they would do. A peer listener carries none of that. There is no shared history. No family connection. No community overlap. No opinion about your choices.</p>
          <p>Just presence. Attention. The particular skill of listening without filling the silence with their own needs. That neutrality is not coldness — it is a specific kind of care that is hard to find anywhere else. It is what makes the conversation feel safe in a way that conversations with people who know you often cannot.</p>
        </div>

        <div className="section">
          <h2>The Specific NRI Lived Experience Listeners Bring</h2>
          <p>The weight of being the family&rsquo;s hope abroad. The loneliness that hides behind a full calendar. The marriage pressure that follows you across continents. The relationship strain of building a life together in a foreign country. The identity question that immigrant life makes unavoidable — who are you when you are neither fully here nor fully there?</p>
          <p>LeanOn peer listeners have been through versions of these things. When you bring them, they meet them with recognition, not analysis. That recognition — the simple experience of being understood without having to explain — is often what shifts something in a conversation.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Someone who already understands.</h2><p>Real NRI peer listener. No preamble needed. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a peer listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-peer-support-online">NRI peer support &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
