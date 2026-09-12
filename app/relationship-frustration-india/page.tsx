import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Frustration India — Say It Before It Becomes Something Bigger | LeanOn',
  description: 'The frustration keeps building. Same patterns, same arguments, nothing changes. Talk to someone real before it turns into a bigger fight. From ₹160.',
  keywords: [
    'relationship frustration india',
    'frustrated with partner india',
    'frustration in relationship india',
    'partner frustrating me india',
    'chronic relationship frustration india',
    'unhappy in relationship india',
    'vent relationship frustration india',
    'same argument again india',
  ],
  alternates: { canonical: 'https://www.leanon.app/relationship-frustration-india', languages: { 'en-IN': 'https://www.leanon.app/relationship-frustration-india' } },
  openGraph: {
    title: 'Relationship Frustration India — Say It Before It Becomes Something Bigger | LeanOn',
    description: 'The frustration keeps building. Same patterns, same arguments, nothing changes. Talk to someone real before it turns into a bigger fight. From ₹160.',
    url: 'https://www.leanon.app/relationship-frustration-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Relationship Frustration' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this different from couples counselling?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Couples counselling involves both partners and is focused on the relationship as a unit. This is for you — one person who needs to say what is building up before it turns into something bigger. You are not here to repair the relationship. You are here to process your own frustration so it does not carry forward into the next conversation.' },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about a frustration without it being a crisis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The threshold for a session is not a crisis. It is pressure. If a frustration is sitting in you right now and you have nowhere to put it, that is enough. Chronic low-level frustration is often more corrosive than acute conflict because it builds silently over time. You do not need to wait for a blowup to talk about it.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to share your real name or any identifying information. The listener has no connection to your partner, your family, or anyone in your life. You can say exactly what is frustrating you without managing the consequences.' },
    },
    {
      '@type': 'Question',
      name: 'What if I sound petty?',
      acceptedAnswer: { '@type': 'Answer', text: 'The things that build into chronic frustration often do sound small in isolation. "He doesn\'t notice." "She dismisses what I say." "He forgets things that matter to me." None of these are dramatic. All of them are worth saying. A peer listener will not judge the size of the frustration. They are there to hear it, not evaluate it.' },
    },
    {
      '@type': 'Question',
      name: 'How is this different from talking to a friend?',
      acceptedAnswer: { '@type': 'Answer', text: 'Your friends know your partner. They form opinions that persist long after the frustration passes. They may advise you, which can be helpful but often adds complexity. A peer listener has no connection to your relationship. They receive what you say without stacking their own reactions on top of it. There are no social consequences to what you tell them.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Frustration India', item: 'https://www.leanon.app/relationship-frustration-india' },
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

export default function RelationshipFrustrationIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Relationship Frustration India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          &#x1F6A8; In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free &middot; 24/7 &middot; Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Neutral Listener &middot; No Judgment &middot; Anonymous &middot; From &#x20b9;160</p>
          <h1>The frustration isn&apos;t a fight. It&apos;s a <em>pattern.</em> And you&apos;re tired of it.</h1>
          <p className="lead">It&apos;s not one big blowup. It&apos;s the same small thing, again and again. You&apos;ve tried explaining it. Nothing changes. You need to say it to someone who has no stake in the outcome.</p>
          <a href="/browse" className="cta-hero">Talk about what&apos;s frustrating you &#x2192;</a>
        </div>

        <div className="section">
          <h2>Why Relationship Frustration Is Different From a Fight</h2>
          <p>A fight is acute. It flares up, it happens, it ends &mdash; or at least it pauses. Chronic relationship frustration is different. It is ongoing. It is the same dynamic playing out week after week, the same feelings of not being heard or not being seen, the same pattern with no resolution in sight.</p>
          <p>It drains you slowly. And it is hard to talk about because it sounds petty out of context. &ldquo;He doesn&apos;t notice things.&rdquo; &ldquo;She dismisses what I say.&rdquo; These do not sound like a big deal when you say them to someone who does not understand the accumulated weight of years of it.</p>
          <p>But it is not petty. Chronic frustration is often more corrosive than acute conflict, precisely because it does not have a visible flashpoint. It builds under the surface and shows up as distance, irritability, and a slow erosion of goodwill.</p>
        </div>

        <div className="section">
          <h2>Common Frustrations People Bring</h2>
          <p>These are the kinds of things that bring people to LeanOn during the workday:</p>
          <ul>
            <li>&ldquo;He doesn&apos;t notice the things that matter to me.&rdquo;</li>
            <li>&ldquo;She dismisses what I say. I can&apos;t finish a sentence.&rdquo;</li>
            <li>&ldquo;We keep having the same argument. Nothing changes.&rdquo;</li>
            <li>&ldquo;I feel like I&apos;m always the one who tries.&rdquo;</li>
            <li>&ldquo;He says everything is fine but it&apos;s not.&rdquo;</li>
            <li>&ldquo;She compares me to her friends&apos; husbands. Constantly.&rdquo;</li>
          </ul>
        </div>

        <div className="section">
          <h2>Why Unexpressed Frustration Turns Into Resentment</h2>
          <p>Frustration that has nowhere to go does not disappear. It accumulates. Over time, it becomes resentment &mdash; a generalised negative feeling toward the person that shapes every interaction you have with them.</p>
          <p>The buildup cycle goes like this: frustration occurs, you suppress it because you do not want a fight or because the timing is wrong, it accumulates, it comes out disproportionately in a later, smaller interaction. The other person is confused about why you reacted so strongly to something small. You are frustrated that they do not understand why. Neither of you is wrong about what just happened &mdash; but you are both wrong about what it was about.</p>
          <p>Venting to a neutral person breaks this cycle at the accumulation stage. The pressure releases before it becomes resentment. You go into the next interaction with less charge, not more.</p>
        </div>

        <div className="section">
          <h2>What Talking to a Neutral Person Does</h2>
          <p>A peer listener on LeanOn is not in your relationship. They have no loyalty to your partner, no history with either of you, and no stake in whether you stay or leave or resolve anything. They will not get defensive when you say something negative about your partner. They will not tell you what you should do.</p>
          <p>What they will do is hear it. They will reflect back what you said, confirm that they understand, and ask clarifying questions. They will not manage their own reaction while you are talking. That alone &mdash; being heard without someone else&apos;s reaction landing on top of your words &mdash; is often enough to reduce the pressure significantly.</p>
          <p>You can do this on your commute, in fifteen minutes at your desk, during your lunch break. It does not require an appointment or a long afternoon.</p>
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
          <h2>The frustration doesn&apos;t have to keep building.</h2>
          <p>Say what has been accumulating &mdash; to someone who will hear it without making it more complicated. No appointment. 15 minutes from &#x20b9;160.</p>
          <a href="/browse" className="btn-cta">Talk about what&apos;s frustrating you &#x2192;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/vent-about-relationship-india">Vent about relationship &#x2192;</a>
            <a href="/just-had-a-fight">Just had a fight &#x2192;</a>
            <a href="/partner-not-understanding-india">Partner not understanding &#x2192;</a>
            <a href="/need-to-vent-right-now">Vent right now &#x2192;</a>
            <a href="/relationship-advice-vs-venting-india">Just vent, no advice &#x2192;</a>
            <a href="/browse">Browse listeners &#x2192;</a>
          </div>
        </div>
      </div>
    </>
  )
}
