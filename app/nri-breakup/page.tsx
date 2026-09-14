import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Breakup | Heartbreak Without Your Support Network | LeanOn',
  description: 'Breaking up when you\'re an NRI is different — your friends are far, your family doesn\'t know, your flatmate is a colleague. Talk to someone who gets it, privately.',
  keywords: ['nri breakup', 'breakup abroad', 'nri heartbreak', 'indian breakup abroad', 'desi breakup uk usa canada', 'nri relationship end'],
  alternates: { canonical: 'https://www.leanon.app/nri-breakup' },
  openGraph: { title: 'NRI Breakup | Heartbreak Without Your Support Network | LeanOn', description: 'Breaking up when you\'re an NRI is different — your friends are far, your family doesn\'t know, your flatmate is a colleague. Talk to someone who gets it, privately.', url: 'https://www.leanon.app/nri-breakup', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk about the breakup without worrying it will reach my community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private — only your phone number and first name. Nothing is shared with your family, your community, or anyone in your life. What you say stays between you and the listener.' } },
  { '@type': 'Question', name: 'I am not in crisis — I just need to talk about the breakup. Is that enough reason?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to be in crisis to talk to a peer listener. Heartbreak is a real and significant thing to carry, especially when you are alone abroad. That is a completely valid reason to want to talk to someone.' } },
  { '@type': 'Question', name: 'What if my visa or living situation is affected by the breakup?', acceptedAnswer: { '@type': 'Answer', text: 'Peer listeners can hear all of this — the practical consequences and the emotional ones together. You do not have to separate them.' } },
  { '@type': 'Question', name: 'Can I talk to the same listener more than once?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can return to the same listener for follow-up sessions. Many people find it helpful to talk to the same person as they work through something over time.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free. Sessions continue from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Breakup', item: 'https://www.leanon.app/nri-breakup' },
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

export default function NriBreakupPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Breakup</span></nav>
        <div className="hero">
          <p className="badge">NRI Breakup &middot; Heartbreak Abroad &middot; Indian Immigrant</p>
          <h1>NRI Breakup — <em>Heartbreak With No One Around</em></h1>
          <p className="lead">Your support network is 8,000 miles away. You can&rsquo;t cry to your mum in person. Your flatmate might be a colleague. Your friends in your new country are still new enough that the history isn&rsquo;t there. Breaking up when you are an NRI is not just heartbreak — it is heartbreak in a foreign city with no safety net within reach. You are not alone. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Unique Pain of Breakup as an NRI</h2>
          <p>Breakup hurts for everyone. But breakup as an NRI has specific textures that make it harder. Your closest people — the ones who knew you before this relationship, who can hold the history — are in India. The call to your mum, which would be the instinctive first move, might be complicated by the fact that she didn&rsquo;t know you were in this relationship, or would worry more than help, or doesn&rsquo;t have the cultural framework to understand what you are going through.</p>
          <p>Your friends in your new country are real but young — the friendship doesn&rsquo;t yet have the depth to hold this. Your colleagues are the wrong people to show vulnerability to. Your flatmate — if you lived with the person you are no longer with — may mean you also have to move home in a foreign city at the same time as you are grieving a relationship. The practical and the emotional are piling on each other.</p>
        </div>

        <div className="section">
          <h2>What Nobody Tells You About NRI Heartbreak</h2>
          <p>The visa situation can be affected. If you were on a dependent visa, the breakup changes your immigration status. If you were planning to be together long-term and the relationship was part of your reason for being in this country — the breakup isn&rsquo;t just a personal loss, it is a question about what the whole project means. These things don&rsquo;t fit neatly into any conversation about relationships, and they are invisible to everyone around you.</p>
          <p>And then there is the Indian community. Depending on where you live, word may travel. The fear of community judgment adds another layer to the pain — you are grieving privately because you cannot afford to grieve publicly. That isolation on top of heartbreak is its own weight.</p>
        </div>

        <div className="section">
          <h2>Who Do You Talk To?</h2>
          <p>A peer listener at LeanOn. Private, anonymous, no community overlap. Someone who understands the NRI context — the isolation, the absent support network, the community dynamics, the way immigrant life makes heartbreak heavier than it would be at home. They are not there to tell you it will be okay. They are there to hear it all, right now, when you need someone to talk to and there is no one around.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Heartbreak in a foreign city. Someone is there.</h2><p>Real peer listener. Private, anonymous, understands NRI life. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
