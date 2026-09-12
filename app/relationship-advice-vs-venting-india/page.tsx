import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Just Want to Vent — Not Get Advice | LeanOn India',
  description: "You don't want to be told what to do. You want to say what happened. Real peer listeners who just listen — no advice unless you ask. From ₹160.",
  keywords: [
    'venting vs advice relationship india',
    'relationship venting online india',
    'just want to vent about relationship india',
    'dont want advice just want to vent india',
    'vent without advice india',
    'listener who wont give advice india',
    'just need to vent india',
    'pure listening relationship india',
  ],
  alternates: { canonical: 'https://www.leanon.app/relationship-advice-vs-venting-india', languages: { 'en-IN': 'https://www.leanon.app/relationship-advice-vs-venting-india' } },
  openGraph: {
    title: 'Just Want to Vent — Not Get Advice | LeanOn India',
    description: "You don't want to be told what to do. You want to say what happened. Real peer listeners who just listen — no advice unless you ask. From ₹160.",
    url: 'https://www.leanon.app/relationship-advice-vs-venting-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Just Vent, No Advice' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will the listener give advice?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not unless you ask. The default mode for a LeanOn peer listener is receive and reflect &mdash; not advise, fix, or steer. If you open with "I just need to vent, no advice," that is exactly what you will get. If you later want input, you can ask for it. The listener follows your lead.' },
    },
    {
      '@type': 'Question',
      name: 'Can I ask for advice if I want it?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many people start by venting and then, once the pressure has released, ask for perspective. The listener can offer that when you invite it. The point is that it is your choice &mdash; you are not handed advice before you are ready for it, and you are not pushed toward a conclusion you have not reached yourself.' },
    },
    {
      '@type': 'Question',
      name: 'Is this different from therapy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. A therapist is a licensed professional working toward a clinical outcome over structured sessions. A peer listener is someone with lived experience who is trained to listen actively without advising. If you need a 15-minute call to say what happened in your relationship before the afternoon gets going, a peer listener is the right fit. You do not need a clinical framework for everyday emotional pressure.' },
    },
    {
      '@type': 'Question',
      name: 'How do I tell the listener I just want to vent?',
      acceptedAnswer: { '@type': 'Answer', text: 'Just say it at the start: "I just need to vent about something. I don\'t want advice, I just need someone to hear it." That is enough. The listener will calibrate accordingly. They are trained for this &mdash; you are not the first person to start a session that way.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to share your name, phone number, or any identifying information. The listener has no connection to your life. You can say exactly what happened, about specific people in your life, without any risk of it leaving the session.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Just Want to Vent, Not Get Advice', item: 'https://www.leanon.app/relationship-advice-vs-venting-india' },
  ],
}

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
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
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
`

export default function RelationshipAdviceVsVentingIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>&#x203A;</span>
          <span style={{color:'var(--navy)'}}>Just Vent, Not Get Advice</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          &#x1F6A8; In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free &middot; 24/7 &middot; Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Pure Listening &middot; No Advice &middot; Anonymous &middot; From &#x20b9;160</p>
          <h1>You already know what advice you&apos;d get. You don&apos;t want advice. <em>You want to say it.</em></h1>
          <p className="lead">Every person you could call would have an opinion. They&apos;d want to fix it, or warn you, or tell you what you should have done. You just need to say it to someone who will receive it without making it about what comes next.</p>
          <a href="/browse" className="cta-hero">Just say it &#x2192;</a>
        </div>

        <div className="section">
          <h2>The Pressure of Unsolicited Advice</h2>
          <p>When someone gives you advice about your relationship that you did not ask for, notice what happens. You either feel dismissed &mdash; like your experience is a problem to be solved rather than something worth hearing &mdash; or you feel obligated to defend your position, which means you are now managing the conversation instead of being in it.</p>
          <p>This happens because advice is not primarily for you. It is for the person giving it. When someone is uncomfortable with an unresolved emotional situation, giving advice is how they manage their own discomfort. They are not necessarily wrong about the advice. But their timing &mdash; before you have said what you need to say &mdash; is almost always off.</p>
          <p>Most people have advice ready before the person in front of them has finished speaking. A peer listener is trained to resist that. Their job is to hear it fully before doing anything with it.</p>
        </div>

        <div className="section">
          <h2>What Pure Listening Actually Is</h2>
          <p>The listener reflects back what they hear. &ldquo;So what you&apos;re saying is &mdash;&rdquo; They confirm that they understand. They ask clarifying questions that are about understanding more deeply, not steering toward a conclusion. They do not try to find the silver lining. They do not minimise. They do not jump ahead to what you should do next.</p>
          <p>What this produces &mdash; often &mdash; is the feeling of being seen. Not agreed with, not validated in the sense of someone taking your side, but genuinely seen. And that alone reduces the internal pressure significantly. The thing that was pressing on you from inside has been received. It does not need to keep pressing.</p>
        </div>

        <div className="section">
          <h2>When You Want to Vent vs When You Want Advice</h2>
          <p>Here is a rough guide. If you have just had a fight, or you are replaying a conversation, or something happened and you need to say it before you can think about it clearly &mdash; you want to vent first. Advice before venting lands on an activated nervous system and either feels tone-deaf or creates more noise.</p>
          <p>After the pressure has reduced &mdash; after you have said what happened and had it received &mdash; you are in a much better position to think about what to do. Many people find that after a good vent session, they do not actually want advice. The clarity that comes from expression is often enough. The action they need to take has become obvious, or the situation has resolved enough in their mind that they can approach it calmly.</p>
          <p>If you do want advice after venting, you can ask your listener. They can offer perspective when you invite it. But it will land completely differently after you have already said what you needed to say.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Listeners Are Trained</h2>
          <p>The default mode for a LeanOn peer listener is receive and reflect, not advise and recommend. They will not give you their opinion about your partner unless you ask. They will not tell you whether to leave or stay. They will not suggest what you should have said or what you should say next.</p>
          <p>They will hear what you say, confirm they understand it, and create space for more. They will follow your lead. If you want to talk for fifteen minutes without a single unsolicited input, that is a completely valid session. It is often the most useful kind.</p>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Just say it.</h2>
          <p>No opinions. No advice. No steering. A real person who will receive what you say and leave it with you. Anonymous. 15 minutes from &#x20b9;160.</p>
          <a href="/browse" className="btn-cta">Just say it &#x2192;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/vent-about-relationship-india">Vent about relationship &#x2192;</a>
            <a href="/need-to-vent-right-now">Vent right now &#x2192;</a>
            <a href="/just-had-a-fight">Just had a fight &#x2192;</a>
            <a href="/relationship-frustration-india">Relationship frustration &#x2192;</a>
            <a href="/partner-not-understanding-india">Not being understood &#x2192;</a>
            <a href="/browse">Browse listeners &#x2192;</a>
          </div>
        </div>
      </div>
    </>
  )
}
