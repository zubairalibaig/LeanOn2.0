import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Social Anxiety | When Every Social Situation Feels Like a Test | LeanOn',
  description: "For NRIs, social anxiety isn't just nerves — it's navigating culture, accent, belonging, and what people think of you. Talk to a listener who understands the layers.",
  keywords: ['nri social anxiety', 'indian immigrant social anxiety', 'accent anxiety nri', 'social anxiety indian abroad', 'desi social anxiety', 'immigrant anxiety'],
  alternates: { canonical: 'https://www.leanon.app/nri-social-anxiety' },
  openGraph: { title: 'NRI Social Anxiety | When Every Social Situation Feels Like a Test | LeanOn', description: "For NRIs, social anxiety isn't just nerves — it's navigating culture, accent, belonging, and what people think of you. Talk to a listener who understands the layers.", url: 'https://www.leanon.app/nri-social-anxiety', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is LeanOn a substitute for professional support for social anxiety?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is peer support — not a substitute for professional help. If social anxiety is significantly affecting your daily life, professional support is worth exploring. LeanOn is a space to be heard by someone who understands the NRI-specific layers without judgment, which can be a valuable complement to professional support or a first step toward it.' } },
  { '@type': 'Question', name: 'Can listeners understand accent anxiety specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Accent anxiety — the fear of being judged, mimicked, or dismissed because of how you speak — is something many NRIs carry, and listeners understand it as a real and specific burden, not a trivial vanity.' } },
  { '@type': 'Question', name: 'I\'m exhausted by always being "the Indian one" in every room. Can I talk about this?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The exhaustion of being the representative of your entire country — answering questions about India, being the diversity in every team photo, having your food and culture treated as curiosity — is a real weight. Listeners are trained to hold this without minimising it.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'My social anxiety is worse at Indian community events than at work. Is that unusual?', acceptedAnswer: { '@type': 'Answer', text: 'Not at all. Many NRIs find that Indian community events — where they feel they should belong — produce more anxiety than their Western work environment, because the expectations are higher and the judgment feels more personal. This is a common experience and worth talking about.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Social Anxiety', item: 'https://www.leanon.app/nri-social-anxiety' },
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

export default function NriSocialAnxietyPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Social Anxiety</span></nav>
        <div className="hero">
          <p className="badge">NRI Social Anxiety &middot; Accent &middot; Belonging &middot; Identity</p>
          <h1>It&rsquo;s not just nerves. <em>It&rsquo;s everything at once.</em></h1>
          <p className="lead">For Indian immigrants, social anxiety carries layers that most people don&rsquo;t see. It&rsquo;s the accent you&rsquo;re monitoring while you speak. The cultural reference you missed and don&rsquo;t want to ask about. The way you&rsquo;re always calculating whether this room is safe for who you are. It&rsquo;s exhausting in a way that &ldquo;just be yourself&rdquo; doesn&rsquo;t fix. Talk to a listener who understands the layers. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What NRI Social Anxiety Actually Looks Like</h2>
          <p>Social anxiety for NRIs is not the same as social anxiety in the abstract. There are layers. The standard layer — the worry about being judged, the difficulty speaking up in groups, the over-analysis of everything you said after the fact — and then the NRI layer on top: the accent you are monitoring in real time, the cultural references you don&rsquo;t get and don&rsquo;t ask about because you don&rsquo;t want to seem like you don&rsquo;t belong, the way your name is slightly wrong in someone else&rsquo;s mouth, the question &ldquo;where are you originally from?&rdquo; that comes after you thought you had arrived somewhere socially.</p>
          <p>The NRI who practises sentences in their head before saying them in a meeting — not because they don&rsquo;t know what to say but because they are running an accent check simultaneously. The Indian professional who goes to a work social event and manages their presentation so carefully for two hours that they come home exhausted from something that was supposed to be fun. The international student who is technically fluent in English and still feels like they are operating in a second language because the social code is different.</p>
          <p>LeanOn listeners understand this specific kind of social exhaustion. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Being &ldquo;The Indian One&rdquo; in Every Room</h2>
          <p>One of the most draining aspects of NRI social life is the experience of perpetual representativeness. You are not just yourself in a room — you are India&rsquo;s representative. Someone will ask you about the food, about the festivals, about whether it&rsquo;s really as dirty as they&rsquo;ve heard, about the Modi situation, about the caste system, about whether you can speak Hindi (and what about the other Indian languages?). You answer, and you answer well, because you are good at this. And then you go home and wonder why you feel so hollow.</p>
          <p>The exhaustion of representativeness is real and rarely acknowledged. It is not dramatic — no single conversation is terrible. It is cumulative. It is the thousandth time you have been the Indian in the room, and the weight of all those explanations, all those performances of cultural ambassador, sits in your body as a low-grade depletion. LeanOn is a space where you do not have to explain India. You can just be the person you are that day, with whatever you actually feel. No performance required.</p>
        </div>

        <div className="section">
          <h2>When Family Events Are the Hardest Rooms</h2>
          <p>Something many NRIs find surprising: Indian community events — temple, family gatherings, desi parties — can produce more anxiety than the Western social world they navigated all week. The stakes feel higher. The judgment feels more personal. Being found wanting by your own community cuts differently than being misread by a Western colleague.</p>
          <p>The NRI at the Indian family gathering who is hyper-aware of their marital status, their career status, their children&rsquo;s grades, their parents&rsquo; opinion, their accent (which has shifted), their language (which has weakened), their weight, their complexion. The specific social pressure of Indian community events for NRIs is something that Indian culture both produces and rarely names. LeanOn is the space to name it. Anonymous, from ₹160.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Talk to someone who already understands before you even start.</h2><p>Real Indian peer listener. No cultural explanation required. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
