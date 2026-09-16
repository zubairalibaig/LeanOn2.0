import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Second Generation NRI Identity | The In-Between Feeling | LeanOn',
  description: "Born or raised abroad to Indian parents — you're Indian enough for the West to see you as foreign, and too Western for India to see you as Indian. Talk to someone who gets the in-between.",
  keywords: ['second generation nri', 'abcd identity', 'british indian identity', 'desi identity crisis', 'indian american identity', 'desi abroad second gen', 'coconut identity'],
  alternates: { canonical: 'https://www.leanon.app/nri-second-generation' },
  openGraph: { title: 'Second Generation NRI Identity | The In-Between Feeling | LeanOn', description: "Born or raised abroad to Indian parents — you're Indian enough for the West to see you as foreign, and too Western for India to see you as Indian. Talk to someone who gets the in-between.", url: 'https://www.leanon.app/nri-second-generation', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do LeanOn listeners understand second generation identity?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners understand the NRI experience broadly and are specifically trained to hold the in-between identity — the ABCD/BBCD experience, the cultural code-switching, the sense of not fully belonging to either the Western world you grew up in or the Indian world your parents come from.' } },
  { '@type': 'Question', name: 'I feel like a fraud at Indian community events. Is that normal?', acceptedAnswer: { '@type': 'Answer', text: 'Very normal. Many second-generation Indians describe feeling like performers at their own community\'s events — going through motions of Indian identity that feel both genuine and hollow. Listeners can hold this complexity without trying to resolve it for you.' } },
  { '@type': 'Question', name: 'I don\'t speak my parents\' mother tongue well. I feel guilty about it. Can I talk about this?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and you won\'t be judged. The language guilt — feeling like you\'ve failed your heritage by not speaking Tamil, Gujarati, Telugu, Punjabi, Hindi fluently — is one of the most common things second-generation Indians carry. Sessions are conducted in English.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription required.' } },
  { '@type': 'Question', name: 'My parents don\'t understand my identity struggle. Can listeners help with this?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The generational gap between first-generation NRI parents and their second-generation children — especially around identity — is real and painful. Listeners understand both sides of this and can hold your experience without taking sides.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Second Generation NRI', item: 'https://www.leanon.app/nri-second-generation' },
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

export default function NriSecondGenerationPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Second Generation NRI</span></nav>
        <div className="hero">
          <p className="badge">Second Generation &middot; ABCD &middot; BBCD &middot; In-Between Identity</p>
          <h1>Too Indian for here. <em>Too Western for there.</em></h1>
          <p className="lead">You grew up with dal and Disney simultaneously. You can code-switch between your parents&rsquo; world and your friends&rsquo; world in a single breath. And somewhere in the middle of all that fluency, you lost the thread of who you actually are. The second-generation identity struggle is real, and it doesn&rsquo;t have an easy answer. Talk to someone who won&rsquo;t try to give you one. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>ABCD, BBCD, and the In-Between That Has No Name</h2>
          <p>American Born Confused Desi. British Born Confused Desi. The terms exist because the experience is common enough to need a name — but the name itself is reductive. You are not confused. You are navigating two complete cultural systems simultaneously, and doing it well enough that neither world fully sees the work it takes. The American or British world sees an Indian. The Indian world — India, the community, the temple — sees an American or a Brit. Neither sees you.</p>
          <p>The second-generation Indian experience is marked by a specific kind of exhaustion: the constant translation. Translating yourself to your Western friends who want to understand your Indian identity but can&rsquo;t quite get there. Translating yourself to your Indian relatives who find your Western sensibilities puzzling or threatening. Being the bridge — the one who explains India to the West and the West to India — without anyone asking you how the bridging feels.</p>
          <p>LeanOn listeners are based in India and understand the Indian side of this equation from the inside. They can hold the complexity without reducing it. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Fraudulence of Indian Events and the Guilt of Not Being Indian Enough</h2>
          <p>The second-generation Indian at the Diwali party who goes through the motions — wears the kurta, says the right things, eats the mithai — and feels, privately, like a performer. Not because they don&rsquo;t care about their Indian identity. Because the specific version of Indianness being performed at the event doesn&rsquo;t quite match the version they carry inside. The version that includes Drake and cricket. The version that is Gujarati at home and something harder to name everywhere else.</p>
          <p>The guilt about not speaking the mother tongue fluently. The guilt about not knowing the Ramayana as well as you should. The guilt about eating beef sometimes, or drinking alcohol, or choosing a partner your parents wouldn&rsquo;t have chosen. The guilt about not going to India often enough, not calling the grandparents enough, not caring enough about the things your parents sacrificed to preserve. Second-generation Indian guilt is a very specific weight, and it rarely gets talked about directly — because talking about it requires admitting something to people who would take it personally.</p>
          <p>LeanOn is outside all of that. Anonymous. No judgment. A space to say the thing you can&rsquo;t say at the Diwali party.</p>
        </div>

        <div className="section">
          <h2>When You Visit India and Feel Foreign There Too</h2>
          <p>For many second-generation Indians, the most disorienting experience is visiting India and feeling like a tourist in the country they were told was home. The cousins who grew up there treat you differently — with curiosity, sometimes with a slight condescension, as though your Western upbringing made you less authentic. The city feels familiar in your bones and foreign in your daily habits. The food, the pace, the sounds — everything is recognisable and nothing is quite right for you.</p>
          <p>This can produce a grief that is hard to name: the loss of a home you were never quite native to. The sense that your India exists only in your parents&rsquo; stories and your own nostalgia — a nostalgic country you inherited but never lived in. LeanOn listeners are in India. They don&rsquo;t see you as a tourist. They understand you as someone who carries India without living it. From ₹160.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Both worlds are yours. Talk to someone who gets that.</h2><p>Real Indian peer listener. Understands second-generation identity. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/arranged-marriage-nri">Arranged marriage NRI &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
