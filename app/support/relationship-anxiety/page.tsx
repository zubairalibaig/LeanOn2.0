import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Anxiety — When Worry About Your Relationship Becomes Its Own Problem | LeanOn',
  description: 'Constantly checking if they are okay with you, overanalysing messages, scared of losing them — relationship anxiety is exhausting. Talk to someone who understands.',
  keywords: [
    'relationship anxiety India', 'anxious in relationship India', 'fear of losing partner India',
    'relationship insecurity India', 'overthinking relationship India', 'relationship worry India',
    'love anxiety India', 'attachment anxiety relationship India', 'relationship fear India',
    'scared partner will leave India', 'insecure in relationship India',
    'jealousy anxiety relationship India', 'emotional support relationship India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/relationship-anxiety', languages: { 'en-IN': 'https://www.leanon.app/support/relationship-anxiety' } },
  openGraph: {
    title: 'Relationship Anxiety — When Worry About Your Relationship Becomes Its Own Problem | LeanOn',
    description: 'Overanalysing messages, needing reassurance, scared of losing them — relationship anxiety is exhausting. Talk to someone who understands.',
    url: 'https://www.leanon.app/support/relationship-anxiety',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Relationship Anxiety Support India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is relationship anxiety the same as being in a bad relationship?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. Relationship anxiety can exist in a healthy relationship — the anxiety comes from inside you, not necessarily from what your partner is doing. That said, relationship anxiety can also be a signal that something real is wrong. A good listener can help you tell the difference by creating space to explore what is actually happening, without pushing you toward a conclusion.' },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about my partner to a listener without it being unfair to them?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your experience of the relationship is yours to talk about. You are not putting your partner on trial — you are processing your own feelings. Peer listeners are trained to hear one side of a relationship without judging the absent person, and a session stays focused on what you are experiencing rather than a verdict on your partner.' },
    },
    {
      '@type': 'Question',
      name: 'What if my partner does not know I feel this way?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is very common. Many people with relationship anxiety hide it from their partner because they are scared the anxiety itself will damage the relationship. A LeanOn session is a safe place to say what you have not been able to say to anyone — including the feelings you are too scared to name out loud. The listener holds it confidentially.' },
    },
    {
      '@type': 'Question',
      name: 'Will the listener give me advice about my relationship?',
      acceptedAnswer: { '@type': 'Answer', text: 'Listeners follow your lead. If you want to think through what to do, they will think with you. If you need to process feelings without being given advice, they will hold that space. You tell them at the start what kind of support you are looking for, and they adjust accordingly. They will not push you toward any particular decision.' },
    },
    {
      '@type': 'Question',
      name: 'I feel guilty for having these feelings. Is that normal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Very normal. People with relationship anxiety often feel guilty because they know, at some level, that their anxiety is not fully rational — their partner is not doing anything wrong, and yet the anxiety persists. The guilt adds another layer to the exhaustion. In a session, you can set the guilt down for a moment and just talk about the feelings underneath it.' },
    },
    {
      '@type': 'Question',
      name: 'Can peer support help with attachment issues?',
      acceptedAnswer: { '@type': 'Answer', text: 'Peer support is not therapy and does not treat attachment disorders. But talking about your experience with someone who understands can reduce the isolation that makes anxiety worse, help you process specific situations, and make you feel less like something is fundamentally broken with you. For deeper work on attachment patterns, a therapist is a better fit — and a LeanOn listener can be a supportive space alongside that.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Relationship Anxiety', item: 'https://www.leanon.app/support/relationship-anxiety' },
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
  .how-steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .step-body h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-body p{font-size:14px;color:var(--gray);line-height:1.7;font-weight:500;margin:0;}
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

export default function RelationshipAnxietyPage() {
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
          <a href="/support">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Relationship Anxiety</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Relationships · Anxiety · Peer Support</p>
          <h1>Relationship Anxiety — When Worry About Your Relationship Becomes <em>Its Own Problem</em></h1>
          <p className="lead">Overanalysing a message. Replaying the last conversation. Needing reassurance but hating that you need it. Scared that the anxiety itself is pushing them away. Relationship anxiety is exhausting in ways that are hard to explain — and you do not have to carry it alone.</p>
          <a href="/browse?topic=relationships" className="cta-hero">Talk to someone who understands →</a>
        </div>

        <div className="section">
          <h2>What Relationship Anxiety Actually Feels Like</h2>
          <p>Relationship anxiety is not the same as having relationship problems. It is the anxiety about the relationship becoming the problem — a persistent background scan for threat that does not switch off even when things are going well.</p>
          <p>It looks like this: You read a message and it seems slightly off. Not wrong exactly — but the tone feels different from usual. You read it again. And again. You start constructing reasons for why it sounds that way. Maybe they are annoyed at you. Maybe something happened. Maybe they are pulling back. You sit with this for an hour before they message again as if nothing happened, because nothing did happen — it was just a text.</p>
          <p>It is the replaying of the last conversation for signs that you said something wrong. The checking of their last online status. The pit in your stomach when they take longer than usual to reply. The rehearsing of what to say next time so you do not mess it up. The hypervigilance that is always slightly on, always scanning, and never fully at rest.</p>
          <p>And underneath all of it, the fear: that this person you care about will leave. That you are fundamentally too much, or not enough, or both. That the anxiety itself — which you cannot fully control — will eventually confirm the thing you are most afraid of.</p>
        </div>

        <div className="section">
          <h2>The Reassurance Loop and Why It Does Not Work</h2>
          <p>When the anxiety spikes, the most natural response is to seek reassurance. You ask them: Are you okay? Are we okay? Did I do something wrong? And they say yes, we are fine. And for a few minutes — maybe a few hours — the anxiety quiets.</p>
          <p>Then it comes back. So you ask again. Or you find a subtler way to check — a message that invites reassurance without directly asking for it. And they give it. And it helps again, briefly.</p>
          <p>This is the reassurance loop, and the problem with it is that it does not address the source of the anxiety. It manages it, temporarily, through external input. But the source is internal — and external reassurance cannot fix an internal feeling for long. Each time the loop completes, the window of relief gets shorter, and the need for reassurance can actually increase.</p>
          <p>Many people in this loop know it is happening and feel trapped by it. They know their partner is answering the same question for the tenth time. They can see the strain it creates. But the anxiety is louder than the knowledge, and so the loop continues.</p>
          <p>Understanding why the loop does not work is different from knowing how to break it. But it is the right place to start — because it stops you blaming yourself for something that is a structural feature of anxiety, not a personal failing.</p>
        </div>

        <div className="section">
          <h2>Why Talking to Your Partner About It Has Limits</h2>
          <p>The obvious place to take relationship anxiety is to the person the anxiety is about. And talking to your partner about it can help — especially if they are patient and the relationship is secure. But there are real limits.</p>
          <p>Your partner is not a neutral party. When you tell them you are scared they will leave, you are creating a dynamic — however unintentionally — where they must manage not just their own feelings but yours. The conversation can become about reassuring you rather than genuinely exploring what is happening. Over time, this places a weight on the relationship that is difficult to carry.</p>
          <p>There is also the question of what you can actually say. If the anxiety involves feelings that are embarrassing — jealousy you think is irrational, fears that you know are not fair to the other person, insecurities you are ashamed of — it can be very hard to be fully honest with your partner about them. You edit yourself. You say a softer version. And so the full weight of what you are carrying never actually gets put down.</p>
          <p>A peer listener is outside the relationship. They have no stake in what you decide, no feelings that need managing, and no relationship to protect. You can say the thing you have been editing — the jealousy, the fear, the irrationality — and have it heard without consequence.</p>
        </div>

        <div className="section">
          <h2>What Actually Helps</h2>
          <p>Relationship anxiety responds to a combination of things over time. No single intervention resolves it permanently, but several things make a meaningful difference:</p>
          <ul>
            <li><strong>Naming it:</strong> Being able to say "this is relationship anxiety" — rather than "my relationship is bad" or "I am broken" — changes your relationship to the feeling. It gives you some distance from it.</li>
            <li><strong>Saying it out loud to someone safe:</strong> Anxiety thrives in isolation. When you say the fear to another person who can hear it without flinching, it often loses some of its power. Not all of it, but some.</li>
            <li><strong>Noticing the pattern:</strong> Most people with relationship anxiety have a pattern — a specific trigger, a specific type of fear, a specific loop. Noticing the pattern is the first step to not being fully run by it.</li>
            <li><strong>Not seeking reassurance every time the anxiety spikes:</strong> This is hard — but practising tolerating the anxiety for longer before seeking reassurance gradually weakens the loop.</li>
            <li><strong>Longer-term work with a therapist:</strong> If the anxiety is deep or rooted in earlier experiences, peer support is a complement to therapy, not a substitute. But therapy access in India is still limited and expensive — peer support can be a meaningful bridge.</li>
          </ul>
        </div>

        <div className="section">
          <h2>You Do Not Have to Process This Alone</h2>
          <p>Relationship anxiety is one of the loneliest experiences there is — because the one person you would normally talk to is the person the anxiety is about. You are carrying something heavy in a room that the other person is also in, and you cannot put it down in front of them.</p>
          <p>LeanOn gives you somewhere outside the room. A listener who has heard relationship anxiety before — who will not be surprised by the irrationality of the fear, will not judge the jealousy, will not tell you what to do — just receive what you have been carrying and help you feel less alone in it.</p>
          <p>Sessions are anonymous. Your partner will not know. What you say stays in the session. You can start by saying "I have been feeling anxious about my relationship and I just need to say some of it out loud" — that is enough to begin.</p>
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
          <h2>You can say the thing you have been editing</h2>
          <p>Anonymous. No judgment. A real listener who has heard relationship anxiety before and will not flinch at yours.</p>
          <a href="/browse?topic=relationships" className="btn-cta">Talk to someone who gets it — first 5 min free →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/anxiety">Anxiety →</a>
            <a href="/support/overthinking">Overthinking →</a>
            <a href="/i-need-someone-to-talk-to">Need to talk →</a>
            <a href="/support/loneliness">Loneliness →</a>
            <a href="/support/need-to-vent">Need to vent →</a>
            <a href="/support/someone-to-talk-to">Someone to talk to →</a>
          </div>
        </div>
      </div>
    </>
  )
}
