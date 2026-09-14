import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Peer Support Online | Talk to an NRI Who Has Been Through It | LeanOn',
  description: 'NRI peer support from people who\'ve actually lived the immigrant experience — not professionals, real peers. Available now, no appointment.',
  keywords: ['nri peer support', 'nri peer support online', 'nri peer listener', 'nri peer counselling', 'indian immigrant peer support', 'desi peer support'],
  alternates: { canonical: 'https://www.leanon.app/nri-peer-support-online' },
  openGraph: { title: 'NRI Peer Support Online | Talk to an NRI Who Has Been Through It | LeanOn', description: 'NRI peer support from people who\'ve actually lived the immigrant experience — not professionals, real peers. Available now, no appointment.', url: 'https://www.leanon.app/nri-peer-support-online', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What is NRI peer support?', acceptedAnswer: { '@type': 'Answer', text: 'NRI peer support means talking to another Indian person who has personally experienced the immigrant life — the visa stress, the homesickness, the cultural in-between. Not a professional, not a coach. A real peer who has been through it and listens without judgment.' } },
  { '@type': 'Question', name: 'How is talking to a peer listener different from talking to a friend?', acceptedAnswer: { '@type': 'Answer', text: 'A friend has their own life, their own opinions, and sometimes their own stake in what you do. A peer listener has none of that. They are there only to listen, ask the right questions, and help you think through what you\'re carrying. No agenda, no advice you didn\'t ask for.' } },
  { '@type': 'Question', name: 'Are LeanOn listeners trained?', acceptedAnswer: { '@type': 'Answer', text: 'Listeners go through a selection and orientation process and are guided on active listening and empathetic engagement. They are not counsellors — they are skilled peers with lived experience. That distinction is the point.' } },
  { '@type': 'Question', name: 'How do I start a session?', acceptedAnswer: { '@type': 'Answer', text: 'Browse available listeners at leanon.app/browse, pick someone whose profile resonates, and start a session. First 5 minutes are free. No appointment needed.' } },
  { '@type': 'Question', name: 'How much does NRI peer support cost on LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free every session. Paid sessions start from ₹160 for 15 minutes. There is no subscription or commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Peer Support Online', item: 'https://www.leanon.app/nri-peer-support-online' },
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

export default function NriPeerSupportOnlinePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Peer Support Online</span></nav>
        <div className="hero">
          <p className="badge">NRI Peer Support &middot; Indian Immigrant Life &middot; Lived Experience</p>
          <h1>NRI Peer Support — From Someone Who <em>Has Actually Been There</em></h1>
          <p className="lead">A professional has read about the immigrant experience. A peer has lived it. They know the joint family pressure, the visa anxiety, the 2 AM homesickness — not because they studied it, but because they went through it too. That&rsquo;s who listens to you on LeanOn. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to a peer now &rarr;</a>
        </div>

        <div className="section">
          <h2>What Makes Peer Support Different for NRIs</h2>
          <p>When you sit with a professional, the first thirty minutes are often just context-setting. You explain what it means to be an NRI. You explain the joint family dynamics, why your parents have opinions about your marriage, why the visa situation affects everything, why you can&rsquo;t just &ldquo;go home for the weekend.&rdquo; By the time you get to what you actually wanted to talk about, the session is over.</p>
          <p>A peer already knows all of that. You say &ldquo;my mother is sending rishta profiles again&rdquo; and they don&rsquo;t need an explanation. You say &ldquo;H1B renewal stress&rdquo; and they know exactly the weight of that. You say &ldquo;I feel like I live two lives&rdquo; and they&rsquo;ve felt it too. The shorthand of shared experience means you spend the whole session on what actually matters.</p>
          <p>That is what NRI peer support gives you that nothing else does — the ability to skip the preamble and go straight to what you&rsquo;re carrying.</p>
        </div>

        <div className="section">
          <h2>Who Are LeanOn&rsquo;s Peer Listeners?</h2>
          <p>LeanOn listeners are everyday Indians with lived experience in the situations you are navigating. Not counsellors, not coaches, not professionals with degrees in immigrant psychology. Real people who moved abroad and came back, or who have close family abroad and understand the dynamics deeply. People who struggled, felt the loneliness, navigated the marriage pressure, came through the career anxiety.</p>
          <p>They are there to listen — not to give you advice you didn&rsquo;t ask for, not to push you toward a particular decision, not to fix you. Just to hear what you are carrying, ask the right questions, and make you feel a little less alone in it. That&rsquo;s it. That&rsquo;s the whole job.</p>
        </div>

        <div className="section">
          <h2>The Problems NRI Peer Support Helps With</h2>
          <p>The loneliness that comes without warning on an ordinary Tuesday. The relationship strain that builds when two people are trying to hold a life together in a foreign country without the safety net of family nearby. The marriage pressure that follows you even 8,000 miles from home. The workplace isolation of being the only Indian in the room. The H1B anxiety that makes every work decision feel precarious. The guilt of missing your parents&rsquo; health struggles from abroad.</p>
          <p>None of these need a clinical response. They need to be heard by someone who already understands the terrain. That is what a peer listener is for.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>No preamble needed. They already know.</h2><p>Real NRI peer listener. Lived experience. No appointment. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a peer listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
