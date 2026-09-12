import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'After a Fight With Your Partner — Process It Before It Festers | LeanOn',
  description: "You had the fight. Now you're replaying it. Your body is still activated. Talk to someone real — anonymous, 15 minutes, ₹160. Before it festers.",
  keywords: [
    'after fight with partner india',
    'after argument with husband india',
    'after fight with wife india',
    'what to do after fight with boyfriend india',
    'cant stop replaying fight india',
    'processing after fight india',
    'still upset after fight india',
    'fight replay loop india',
  ],
  alternates: { canonical: 'https://www.leanon.app/after-fight-with-partner-india', languages: { 'en-IN': 'https://www.leanon.app/after-fight-with-partner-india' } },
  openGraph: {
    title: 'After a Fight With Your Partner — Process It Before It Festers | LeanOn',
    description: "You had the fight. Now you're replaying it. Your body is still activated. Talk to someone real — anonymous, 15 minutes, ₹160. Before it festers.",
    url: 'https://www.leanon.app/after-fight-with-partner-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — After a Fight' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How soon after a fight should I talk to someone?',
      acceptedAnswer: { '@type': 'Answer', text: 'As soon as you have a window. You do not need to wait until you have calmed down completely &mdash; you just need a moment where you can speak without being overheard. The sooner you process it, the less the fight takes from the rest of your day. Most people wait until they are already spiraling before they reach out. Earlier is better.' },
    },
    {
      '@type': 'Question',
      name: 'Will the listener take sides?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. A peer listener is not there to validate your position or build your case. They are there to hear your experience of what happened &mdash; which is different. That distinction matters. You are not looking for a judge. You are looking for someone to receive what you are carrying so you can put it down for a moment.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not share your name or any identifying information. The listener has no connection to your partner or anyone in your life. You can describe the fight, the things that were said, the history behind it &mdash; with no risk of any of it going anywhere.' },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about the other person without them knowing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. What you say in a session stays in the session. The listener has no way of contacting your partner and no reason to. You can describe your partner, the situation, the context &mdash; fully and honestly &mdash; without it reaching them.' },
    },
    {
      '@type': 'Question',
      name: 'What if I am still very upset?',
      acceptedAnswer: { '@type': 'Answer', text: 'Good &mdash; say so. You do not need to be calm to start. You can open with "I had a fight and I am still very upset and I just need to get it out." That is a fine place to start. A peer listener will not ask you to organise your thoughts first. They will receive whatever comes, in whatever state it arrives.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'After a Fight With Your Partner', item: 'https://www.leanon.app/after-fight-with-partner-india' },
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

export default function AfterFightWithPartnerIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>After a Fight With Your Partner</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          &#x1F6A8; In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free &middot; 24/7 &middot; Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Process It &middot; Anonymous &middot; No Judgment &middot; From &#x20b9;160</p>
          <h1>The fight is over. <em>You&apos;re still in it.</em></h1>
          <p className="lead">It&apos;s been an hour &mdash; or three &mdash; and the conversation keeps running on loop. You can&apos;t focus. You keep thinking of what you should have said. Or shouldn&apos;t have said. Talk to someone outside it before it takes the whole day.</p>
          <a href="/browse" className="cta-hero">Get it out before it takes over &#x2192;</a>
        </div>

        <div className="section">
          <h2>What Happens After a Fight (The Biology)</h2>
          <p>The fight may be over, but your nervous system has not gotten the memo. During a conflict, your body activates the stress response &mdash; stress hormones flood in, heart rate elevates, attention narrows. This is designed for survival. It was useful when the threat was physical. In an argument with your partner, it is less useful.</p>
          <p>What makes the hours after a fight different from the immediate moment is this: the acute activation has passed, but the residue remains. The stress hormones do not clear immediately. They stay elevated for hours, sometimes longer. This is why you can feel &ldquo;almost okay&rdquo; and still find yourself replaying the conversation forty minutes later.</p>
          <p>The replay loop is part of the biology. Your brain is trying to process an unresolved threat. It keeps returning to the scene because the narrative has not closed. Saying it out loud to another person &mdash; expressing what happened and how it felt &mdash; is one of the most effective ways to help the brain close the loop.</p>
        </div>

        <div className="section">
          <h2>The Difference Between Resolution and Release</h2>
          <p>You do not need to resolve the fight in the next 15 minutes. Resolution involves both people, takes time, and often cannot happen until both sides have had space to cool down and think. Trying to force resolution before you are ready often produces a worse conversation, not a better one.</p>
          <p>Release is something you can do alone, right now. It means getting the activated emotion out of the loop &mdash; expressing it to a witness, having it heard, reducing the pressure enough that you can function. Release does not require the other person. It only requires you and someone who will listen.</p>
          <p>After release, you are better positioned for resolution. You approach the next conversation from a less reactive, more grounded place. You have already said what you needed to say &mdash; to someone safe &mdash; and can now engage with the actual repair more thoughtfully.</p>
        </div>

        <div className="section">
          <h2>What Replaying the Fight Costs You</h2>
          <p>The loop is expensive. Every time the conversation runs again in the background, it consumes attention, working memory, and emotional bandwidth that you would otherwise use for the rest of your day.</p>
          <p>It affects the next conversation you have &mdash; with a colleague, a friend, anyone &mdash; because you are only partially present. It affects the next interaction with your partner, because you are already loaded when they walk back in. And it extends the duration of the fight&apos;s impact well beyond the fight itself.</p>
          <p>Fifteen minutes of expression does not guarantee the loop will stop completely. But it reduces the charge significantly. The pressure reduces. The loop loses urgency. You can be more present for the rest of the day.</p>
        </div>

        <div className="section">
          <h2>When People Do This</h2>
          <p>The most common windows for a post-fight session:</p>
          <ul>
            <li>Mid-morning at the desk &mdash; fight was this morning, still replaying it two hours later.</li>
            <li>Lunch break &mdash; quick call from a quiet spot before the afternoon starts.</li>
            <li>Commute home &mdash; processing before you walk back into the house where the tension still lives.</li>
            <li>Before the evening &mdash; releasing enough to have a calmer next conversation with your partner.</li>
          </ul>
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
          <h2>Get it out before it takes over the day.</h2>
          <p>A real listener, available now &mdash; no appointment, no judgment, no advice unless you want it. Anonymous. 15 minutes from &#x20b9;160.</p>
          <a href="/browse" className="btn-cta">Get it out before it takes over &#x2192;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/just-had-a-fight">Just had a fight &#x2192;</a>
            <a href="/morning-emotional-support-india">Morning reset &#x2192;</a>
            <a href="/vent-about-relationship-india">Vent about relationship &#x2192;</a>
            <a href="/talk-during-commute-india">Talk during commute &#x2192;</a>
            <a href="/need-to-vent-right-now">Vent right now &#x2192;</a>
            <a href="/browse">Browse listeners &#x2192;</a>
          </div>
        </div>
      </div>
    </>
  )
}
