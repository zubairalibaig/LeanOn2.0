import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk Therapy India — The Power of Saying It Out Loud | LeanOn',
  description: 'Talk therapy works because speaking things out loud changes them. LeanOn offers real-voice peer conversations from ₹160 — no appointment, available now.',
  keywords: [
    'talk therapy india', 'talking therapy india', 'verbal therapy india',
    'talk about problems india', 'talking through problems india',
    'peer talk therapy india', 'affordable talk therapy india',
    'online talk therapy india',
  ],
  alternates: { canonical: 'https://www.leanon.app/talk-therapy-india', languages: { 'en-IN': 'https://www.leanon.app/talk-therapy-india' } },
  openGraph: {
    title: 'Talk Therapy India — The Power of Saying It Out Loud | LeanOn',
    description: 'Talk therapy works because speaking things out loud changes them. LeanOn offers real-voice peer conversations from ₹160 — no appointment, available now.',
    url: 'https://www.leanon.app/talk-therapy-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Talk Therapy India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LeanOn talk therapy?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn is peer support, not clinical talk therapy. Talk therapy (psychotherapy, CBT, etc.) is delivered by licensed mental health professionals and involves clinical assessment and treatment. LeanOn peer listeners are trained real people who listen, empathise, and hold space &mdash; but they do not assess or treat. For clinical conditions, please see a professional.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between peer support and talk therapy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Talk therapy involves structured clinical interventions delivered by a trained professional. Peer support involves being heard and supported by a real person with lived experience. Both involve talking. The difference is the clinical framework and professional qualification. Peer support is appropriate for processing everyday weight, venting, gaining perspective, feeling less alone. Clinical therapy is appropriate for diagnosed conditions and structured treatment.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. No profile, no social connection, nothing that links to your offline life.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160 for 15 minutes. The first 5 minutes of every session are free. Compare this with private therapy in India, which typically costs ₹1,500–5,000 per session.' },
    },
    {
      '@type': 'Question',
      name: 'Can I do it on my phone?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn sessions are voice calls on your phone. No video required. No app download needed in most cases. Browse at leanon.app, choose a listener, and start a session from your browser.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk Therapy India', item: 'https://www.leanon.app/talk-therapy-india' },
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
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
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

export default function TalkTherapyIndiaPage() {
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
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Talk Therapy India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Peer Conversation &middot; India &middot; From &#8377;160</p>
          <h1>Talk therapy: <em>the simplest form of healing.</em> Just say it out loud to someone real.</h1>
          <p className="lead">Talking about a problem doesn&apos;t solve it. But it changes your relationship with it. The act of putting words to something &mdash; to a real listener &mdash; is one of the oldest and most reliable ways humans process pain.</p>
          <a href="/browse" className="cta-hero">Start talking &rarr;</a>
        </div>

        <div className="section">
          <h2>What Talk Therapy Actually Is</h2>
          <p>In the clinical sense, &ldquo;talk therapy&rdquo; refers to psychotherapy &mdash; structured interventions like CBT (Cognitive Behavioural Therapy), psychodynamic therapy, or person-centred counselling, delivered by licensed professionals. These are effective for clinical conditions and require trained therapists.</p>
          <p>But at a broader level, &ldquo;talk therapy&rdquo; simply means using language &mdash; talking, with a listener &mdash; to process experience. This broader category includes formal therapy but also peer support, mentoring, supportive friendships, and any conversation where being heard leads to emotional processing.</p>
          <p>LeanOn operates in this broader category. It is not clinical therapy &mdash; listeners are trained peers, not licensed professionals. But it is talk: real voice conversations that use the mechanism of language and listener to help people process what they are carrying.</p>
        </div>

        <div className="section">
          <h2>Why Talking Helps: The Science</h2>
          <p>There are well-documented neurological reasons why verbally expressing an emotion reduces its intensity. When you put words to a feeling, you engage the prefrontal cortex &mdash; the part of the brain responsible for rational thought and regulation. This activation reduces activity in the amygdala, which is the alarm centre that generates the raw emotional response.</p>
          <p>In plain language: naming the feeling, out loud, to another person, turns down the alarm. This is not a metaphor. The physiology changes.</p>
          <p>Research by neuroscientist Matthew Lieberman at UCLA showed that simply labelling an emotional state reduced amygdala activation and increased prefrontal regulation. Other research shows that this effect is stronger in social contexts &mdash; talking to someone &mdash; than in solitary journalling or internal processing.</p>
          <p>This is why talking, specifically, helps. Not journalling (though that also helps somewhat). Not thinking harder about it. Talking &mdash; to a real person, who receives what you say.</p>
        </div>

        <div className="section">
          <h2>Talk Therapy on LeanOn vs Formal Therapy</h2>
          <p>LeanOn is appropriate for processing everyday weight, venting, gaining perspective, reducing the pressure of things left unsaid, and feeling less alone in difficult situations. It is not appropriate for diagnosing or treating clinical mental health conditions.</p>
          <p>The distinction: if you are carrying something heavy but do not have a clinical condition, LeanOn is likely the right tool. If you are experiencing persistent clinical symptoms &mdash; major depression, an anxiety disorder, trauma, eating disorders, psychosis &mdash; please see a licensed professional. LeanOn and professional therapy are not in competition; they serve different needs.</p>
        </div>

        <div className="section">
          <h2>Getting Started: What a First Session Is Like</h2>
          <p>Browse listener profiles at <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>leanon.app/browse</a>. Choose someone whose background resonates with what you are going through. Start the session. The first 5 minutes are free &mdash; use them to feel the connection.</p>
          <p>You do not need to prepare. You do not need to have it organised. You can start with &ldquo;I don&apos;t quite know where to begin&rdquo; and that is fine. A good listener will follow you wherever you need to go.</p>
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
          <h2>Say it out loud. To someone real.</h2>
          <p>Available now. No appointment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/walk-in-counselling-india">Walk-in counselling &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/paid-counselling-india">Paid counselling &rarr;</a>
            <a href="/rant-online-india">Rant online &rarr;</a>
            <a href="/get-it-off-your-chest-india">Get it off your chest &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
