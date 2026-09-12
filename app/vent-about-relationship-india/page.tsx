import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Vent About Your Relationship — Say It to Someone Real | LeanOn',
  description: 'Need to vent about your relationship — not get advice, just say it? Real peer listener in India, anonymous, available now. 15 minutes from ₹160.',
  keywords: [
    'need to vent about relationship india',
    'venting about relationship india',
    'vent relationship frustration india',
    'talk about relationship problems india',
    'need to say something about my relationship',
    'vent about partner india',
    'relationship vent session india',
    'say it out loud relationship india',
  ],
  alternates: { canonical: 'https://www.leanon.app/vent-about-relationship-india', languages: { 'en-IN': 'https://www.leanon.app/vent-about-relationship-india' } },
  openGraph: {
    title: 'Vent About Your Relationship — Say It to Someone Real | LeanOn',
    description: 'Need to vent about your relationship — not get advice, just say it? Real peer listener in India, anonymous, available now. 15 minutes from ₹160.',
    url: 'https://www.leanon.app/vent-about-relationship-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Vent About Your Relationship' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between venting and therapy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Therapy is a structured clinical process aimed at diagnosing, treating, or managing a mental health condition over time. Venting is about pressure release — saying what is sitting on you to someone who will receive it without judgment. You do not need a diagnosis or a recurring problem to vent. If something in your relationship is pressing on you right now and you need to say it, that is enough.' },
    },
    {
      '@type': 'Question',
      name: 'Will the listener give me advice about my relationship?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not unless you ask. Peer listeners on LeanOn are trained to listen and reflect — not to advise, judge, or tell you what to do. If you open with "I just need to say this, I don\'t want advice," that is exactly what you will get. The default mode is receive and reflect, not fix and recommend.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous? Will the listener know who I am?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, it is anonymous. You do not need to give your real name, phone number, or any identifying information. You can talk about your partner, your in-laws, your specific situation — with no risk of it reaching anyone in your life. The session is private by design.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a vent session take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most people find 15 minutes is enough to say what has been building up and feel the pressure reduce. LeanOn offers 15, 30, and 45 minute sessions. You do not need to fill a full hour. The 15-minute session is specifically for this — say it, feel lighter, get on with your day.' },
    },
    {
      '@type': 'Question',
      name: 'What if I start crying?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is fine. Crying is often part of the release. A peer listener will not be uncomfortable with it. You do not need to hold it together. The session is a space where you can let whatever comes out, come out — including tears.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Vent About Your Relationship', item: 'https://www.leanon.app/vent-about-relationship-india' },
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

export default function VentAboutRelationshipIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Vent About Your Relationship</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          &#x1F6A8; In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free &middot; 24/7 &middot; Govt of India)
        </div>

        <div className="hero">
          <p className="badge">No Advice · Just Listening · Anonymous · From &#x20b9;160</p>
          <h1>You don&apos;t want advice. You want to <em>say it out loud.</em></h1>
          <p className="lead">You&apos;ve been holding something in about your relationship. Not a crisis &mdash; just something that needs to come out before it festers. A real listener won&apos;t fix it or take sides. They&apos;ll just hear it.</p>
          <a href="/browse" className="cta-hero">Say what&apos;s been building up &#x2192;</a>
        </div>

        <div className="section">
          <h2>The Difference Between Venting and Advice-Seeking</h2>
          <p>When you vent, you are not looking for a solution. You are reducing internal pressure. There is something sitting inside that needs to move from inside to outside &mdash; through words, to a real person who can receive them.</p>
          <p>Most people in your life jump straight to advice when you bring something up about your relationship. They suggest what you should say, what you should do, whether you should leave, whether you are overreacting. That advice is not really for you &mdash; it is for them. People are uncomfortable with unresolved emotion, and advice is how they manage their own discomfort.</p>
          <p>A peer listener is trained differently. Their job is not to fix. It is to receive. They reflect back what they hear, they confirm that they understand, and they do not steer you toward a conclusion. After fifteen minutes of that, most people feel significantly lighter &mdash; not because anything has changed, but because the pressure has somewhere to go.</p>
        </div>

        <div className="section">
          <h2>What People Vent About</h2>
          <p>These are the kinds of things that bring people to LeanOn on a Tuesday morning or during a lunch break:</p>
          <ul>
            <li>&ldquo;He doesn&apos;t listen. I&apos;ve said the same thing ten times.&rdquo;</li>
            <li>&ldquo;She keeps bringing up the same thing. It never ends.&rdquo;</li>
            <li>&ldquo;My in-laws are getting involved again and he&apos;s not saying anything.&rdquo;</li>
            <li>&ldquo;He said something yesterday that I can&apos;t let go of.&rdquo;</li>
            <li>&ldquo;She&apos;s pulling away and I don&apos;t know why.&rdquo;</li>
            <li>&ldquo;We had a fight this morning and he&apos;s acting like nothing happened.&rdquo;</li>
          </ul>
          <p>None of these are crises. All of them are worth saying out loud.</p>
        </div>

        <div className="section">
          <h2>Why You Can&apos;t Vent to Your Usual People</h2>
          <p>Think about who you would normally call. Your closest friend &mdash; they know your partner, they have opinions, they will remember what you told them the next time they see you both. Your sister &mdash; family loyalty means she either takes your side too hard, or tries too hard to stay neutral. Either way, you are now managing her reaction on top of your own feelings.</p>
          <p>The people who are close enough to actually hear it are also the people who are inside the story. They have a stake in the outcome. They will form opinions about your partner that will not disappear even if the situation resolves. And you will carry the knowledge that you told them.</p>
          <p>A peer listener on LeanOn has no connection to anyone in your life. No loyalty, no history, no stake. You can say exactly what happened and exactly how you feel about it &mdash; without editing, without managing their reaction, without it going anywhere.</p>
        </div>

        <div className="section">
          <h2>What Happens in 15 Minutes</h2>
          <p>You say what happened. The listener receives it &mdash; they reflect back what they hear, ask clarifying questions if needed, confirm they understand. They do not give advice unless you ask. They do not take sides.</p>
          <p>At the end of 15 minutes, the thing that was pressing on you from inside has been spoken and witnessed. It stops pressing quite as hard. The loop that was running in the background quiets. You can focus again. You can go back into your afternoon without carrying that particular weight.</p>
          <p>This works during a commute. During a lunch break. In 15 minutes at your desk before the next meeting. You do not need a long afternoon or a special appointment. You need 15 minutes and somewhere you can speak freely.</p>
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
          <h2>Say what&apos;s been building up.</h2>
          <p>A real listener is available now &mdash; no appointment, no advice unless you want it, no judgment. 15 minutes from &#x20b9;160.</p>
          <a href="/browse" className="btn-cta">Say what&apos;s been building up &#x2192;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/just-had-a-fight">Just had a fight &#x2192;</a>
            <a href="/need-to-vent-right-now">Vent right now &#x2192;</a>
            <a href="/relationship-frustration-india">Relationship frustration &#x2192;</a>
            <a href="/after-fight-with-partner-india">After a fight &#x2192;</a>
            <a href="/relationship-advice-vs-venting-india">Vent, not advice &#x2192;</a>
            <a href="/browse">Browse listeners &#x2192;</a>
          </div>
        </div>
      </div>
    </>
  )
}
