import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Identity Crisis | Who Am I in Two Worlds? | LeanOn',
  description: 'Too Indian abroad. Not Indian enough back home. The NRI identity is complicated — talk to a peer listener who understands the dual-identity weight.',
  keywords: ['nri identity crisis', 'nri dual identity', 'indian identity abroad', 'too indian not indian enough', 'nri culture clash', 'indian identity usa uk canada', 'desi identity crisis'],
  alternates: { canonical: 'https://www.leanon.app/nri-identity-crisis' },
  openGraph: { title: 'NRI Identity Crisis | Who Am I in Two Worlds? | LeanOn', description: 'Too Indian abroad. Not Indian enough back home. The NRI identity is complicated — talk to a peer listener who understands the dual-identity weight.', url: 'https://www.leanon.app/nri-identity-crisis', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is the NRI identity crisis a real thing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The experience of being neither fully from here nor fully from there — of not being claimed completely by either culture — is one of the most common things NRIs describe. It is not a personal failure. It is the structural reality of living between two worlds.' } },
  { '@type': 'Question', name: 'Will a listener in India understand identity questions from abroad?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are Indian and understand NRI identity dynamics from the Indian side — they know what "foreign-returned" means, they know the gap between how NRIs are perceived in India and how they feel. They understand the in-between.' } },
  { '@type': 'Question', name: 'What if I don\'t even know how to describe my identity problem?', acceptedAnswer: { '@type': 'Answer', text: 'That is completely okay. A listener\'s job is not to receive a well-formulated problem. They can sit with "I don\'t know who I am anymore" just as well as any specific issue. Start where you are.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Identity Crisis', item: 'https://www.leanon.app/nri-identity-crisis' },
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

export default function NriIdentityCrisisPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Identity Crisis</span></nav>
        <div className="hero">
          <p className="badge">NRI Identity &middot; Dual Culture &middot; Desi Abroad</p>
          <h1>Too Indian there. <em>Not Indian enough here.</em></h1>
          <p className="lead">You feel it every time you go back to India — they call you &ldquo;foreign-returned&rdquo; or say you&rsquo;ve changed. And every time you&rsquo;re abroad, you&rsquo;re the Indian one. Neither place fully claims you. The NRI identity is a permanent in-between — and it&rsquo;s exhausting to carry without naming it. Talk to a real peer listener who lives this too. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Permanent In-Between</h2>
          <p>The NRI identity crisis is not a phase that resolves when you have been abroad long enough. It is a structural feature of living between two worlds. In America, the UK, or Canada, you are Indian — the representative of a culture, asked to explain food and festivals and family dynamics, seen as different from the local default. In India, you are &ldquo;foreign-returned&rdquo; — someone who has changed, who has Western habits, whose accent has shifted, who doesn&rsquo;t quite get the jokes or the references anymore.</p>
          <p>Neither place fully claims you as its own. You hold knowledge of both worlds in ways that people who stayed behind and people who were born abroad do not. And that knowledge — the dual citizenship of the soul that comes with the NRI experience — is exhausting. You are always translating. Always explaining. Always the bridge.</p>
          <p>This is not a failure. It is the genuine cost and complexity of a life lived across cultures. But it needs to be named. And the place to name it is with someone who already understands the shape of it. LeanOn listeners are Indian, understand the NRI experience from the inside, and won&rsquo;t need the in-between explained. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>When the Question Becomes &ldquo;Who Am I?&rdquo;</h2>
          <p>For many NRIs, the identity question deepens over time rather than resolving. The longer you are abroad, the more the India you carry is the India you left — not the one that has continued changing. You miss a place that partly no longer exists. You carry values that India has partly moved on from. And the abroad-self you have built is not quite the Indian self your family sees.</p>
          <p>The question &ldquo;who am I?&rdquo; in this context is genuine and weighty. A real Indian peer listener at LeanOn can sit with you in that question — not to resolve it, which would be dishonest, but to hear you explore it. Sometimes naming the in-between is itself a kind of relief. Sessions are anonymous and private. First 5 minutes free — once per listener.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The in-between, understood.</h2><p>Real Indian peer listener. Gets the NRI dual-identity experience. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/second-generation-indian-usa">Second gen Indian USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indian-diaspora-mental-health">Indian diaspora support &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
