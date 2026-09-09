import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Arranged Marriage Pressure and Stress in India — Talk to Someone Who Gets It | LeanOn',
  description: 'The pressure of the arranged marriage process in India — the profiles, the meetings, the family expectations — is a specific kind of stress that most mental health content ignores. LeanOn listeners understand it.',
  keywords: [
    'arranged marriage stress India', 'arranged marriage pressure India', 'arranged marriage anxiety India',
    'marriage pressure India', 'shaadi pressure India', 'marriage rejection India',
    'arranged marriage mental health India', 'matrimony site exhaustion India',
    'biodata India stress', 'meeting for arranged marriage anxiety India',
    'parents marriage pressure India', 'unmarried pressure India', 'late marriage India anxiety',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/arranged-marriage-stress', languages: { 'en-IN': 'https://www.leanon.app/support/arranged-marriage-stress' } },
  openGraph: {
    title: 'Arranged Marriage Pressure and Stress in India — Talk to Someone Who Gets It | LeanOn',
    description: 'The profiles, the meetings, the family expectations — arranged marriage stress is real and rarely discussed. LeanOn listeners understand it.',
    url: 'https://www.leanon.app/support/arranged-marriage-stress',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Arranged Marriage Stress Support India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will the listener have opinions about arranged marriage vs love marriage?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Listeners on LeanOn do not have an agenda about how you should find a partner or whether arranged marriage is right for you. You can be going through the process and fully committed to it, ambivalent about it, or quietly resistant — the listener will meet you where you are, without steering you in any direction.' },
    },
    {
      '@type': 'Question',
      name: 'What if I am not sure I want to get married right now?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is one of the most common and most unsayable feelings in the arranged marriage process — and you can say it in a LeanOn session. The listener will not try to convince you either way. This is a space to think through what you actually feel, without someone else&apos;s expectations in the room.' },
    },
    {
      '@type': 'Question',
      name: 'I feel like I cannot say no to the process. Can a listener help me think through this?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The feeling of being unable to say no — because of family pressure, love for your parents, financial dependence, or the social cost of refusing — is something many people in the arranged marriage process carry without being able to name it out loud. A listener can hold that with you and help you think, without telling you what to do.' },
    },
    {
      '@type': 'Question',
      name: 'What if I am grieving a match that did not work out?',
      acceptedAnswer: { '@type': 'Answer', text: 'Grief after an arranged marriage match falls apart is real and often dismissed — by family ("there are so many others"), by friends who do not understand the process, by cultural messaging that treats it as just a failed transaction. But you spent time imagining a future with that person, and the loss is real. A LeanOn session is a place to grieve without being told to move on.' },
    },
    {
      '@type': 'Question',
      name: 'Is this the kind of thing people actually talk about on LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Arranged marriage stress — the process, the pressure, the family dynamics, the age anxiety, the feelings around rejection and being evaluated — is one of the real things people bring to LeanOn sessions. Many listeners have navigated the process themselves and understand it from the inside.' },
    },
    {
      '@type': 'Question',
      name: 'What if my feelings about the process are complicated and I am not sure what I feel?',
      acceptedAnswer: { '@type': 'Answer', text: 'Complicated and unsure is the most honest place most people in this process are — and it is exactly the kind of thing a peer listener is good at sitting with. You do not need to have clarity to start a session. You can come in with a tangle of feelings and just start talking. The clarity, if it comes, comes from saying things out loud.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Arranged Marriage Stress', item: 'https://www.leanon.app/support/arranged-marriage-stress' },
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

export default function ArrangedMarriageStressPage() {
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
          <span style={{color:'var(--navy)'}}>Arranged Marriage Stress</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Marriage Pressure · Family Expectations · Peer Support</p>
          <h1>Arranged Marriage Pressure and Stress in India — <em>Talk to Someone Who Gets It</em></h1>
          <p className="lead">The profiles, the meetings, the family expectations, the age anxiety, the rejections you cannot grieve — the arranged marriage process is genuinely stressful in ways that most mental health content never touches. LeanOn listeners understand it from the inside.</p>
          <a href="/browse" className="cta-hero">Talk to someone who understands →</a>
        </div>

        <div className="section">
          <h2>What the Arranged Marriage Process Actually Feels Like From Inside It</h2>
          <p>From the outside, the arranged marriage process in India is often described in one of two ways: either as a warm family tradition, or as an outdated institution. Neither of these captures what it actually feels like to be inside it.</p>
          <p>It feels like being evaluated. Profiles are shared, assessed, and shortlisted — your education, job, family background, height, skin tone, all translated into a biodata and sent to strangers. You meet people who have already made a preliminary judgement about your suitability before you walk into the room. They are doing the same math you are: does this person fit the criteria? Is this someone I can build a life with? The pressure of that evaluation — on both sides — is unlike most other social situations adults encounter.</p>
          <p>It feels lonely. The process happens through your family, which means the people running it are invested in its outcome. They want you to find someone. Their relief is waiting on the other side of your decision. This makes it very hard to say how you actually feel about what is happening — the anxiety, the ambivalence, the grief, the moments of wondering if you want to be doing this at all.</p>
          <p>And it feels exhausting. The repetition of meetings, the emotional reset after each one that does not work out, the families you have to engage with knowing the match may go nowhere, the managing of your own expectations and everyone else's simultaneously. It is a marathon with no clear finishing line and enormous pressure not to say you are tired.</p>
        </div>

        <div className="section">
          <h2>The Age Anxiety and the Clock Your Family Keeps</h2>
          <p>In the arranged marriage process in India, age operates differently than it does in most other contexts. Your age is not just a number — it is a statement of urgency, a factor in how many profiles come your way, and a source of direct and indirect pressure from family.</p>
          <p>At 25, the process begins in earnest. By 28, there is a palpable shift in tone. By 30, the conversations become pointed. "Good profiles are getting harder to find at your age." "You are being too selective." "Your younger cousin is already married." The clock is kept not just in your head but out loud, by the people around you who love you and are genuinely worried — which makes it harder to be angry about, and harder to bear.</p>
          <p>The age anxiety is layered. There is the genuine worry about the narrowing pool. There is the cultural message that something is wrong with you if you are not married by a certain age. There is the awareness that your parents' social standing is partly tied up in your marital status. And there is the part of you that is trying to make a decision about the rest of your life while all of this is in the room.</p>
          <p>Talking about age anxiety in the arranged marriage context is something very few people can do honestly — because the people who understand the context are also the ones creating the pressure. A LeanOn listener sits outside that dynamic.</p>
        </div>

        <div className="section">
          <h2>Why You Cannot Process This With the People Who Are Running It</h2>
          <p>The arranged marriage process has a structural problem when it comes to emotional processing: the people who understand it best are the people who are managing it on your behalf. Your parents know what the process feels like. Your aunts and uncles have been through it or watched their children go through it. Your community understands the social weight of it.</p>
          <p>But they are also participants. They have skin in the game. When you tell your mother you found the last meeting exhausting, she hears it as resistance or ingratitude. When you say you are not sure about a profile, a conversation about what you want becomes a conversation about why you are being difficult. When you admit you are dreading the next meeting, you risk becoming the family problem rather than having your feeling acknowledged.</p>
          <p>This means the people who have the most context are the hardest ones to be fully honest with. And the friends who are not in the process — who met their partners in college, who have not navigated this specific experience — often do not know what to say. They mean well, but they minimise it or misread it.</p>
          <p>What you need is someone who understands the context without having a stake in the outcome. That is what a peer listener offers.</p>
        </div>

        <div className="section">
          <h2>The Rejection Nobody Talks About</h2>
          <p>Rejection is built into the arranged marriage process — it happens on both sides, multiple times. You look at a profile and feel it is not right. Someone looks at your profile and feels the same. Meetings happen where you know, on the train home, that this is not going anywhere.</p>
          <p>The cultural script around this rejection is: move on. There are many more profiles. This is part of the process. Do not be too attached before you even know someone properly.</p>
          <p>But rejection still registers in the body. Being rejected — even at the profile stage, before a meeting — touches something about how you see yourself. When a meeting does not go further, even when you were not sure about the other person either, there is still a sting. And when a meeting did go well, when you allowed yourself to imagine something, and then they or their family said no — the grief of that is real. It is not dramatic or inappropriate. It is what happens when you have been hopeful about something and it does not work out.</p>
          <p>The arranged marriage process asks you to experience this grief multiple times, often in quick succession, while simultaneously presenting yourself as enthusiastic and available for the next meeting. The lack of space to grieve the ones that did not work out — even the brief connections, even the near misses — is one of the most quietly painful parts of the process.</p>
        </div>

        <div className="section">
          <h2>Finding a Space Where You Can Actually Say It</h2>
          <p>A LeanOn session is not couples counselling, and it is not help deciding whether to accept a match. It is a space for the things you cannot say to your family, cannot explain to friends who have not been through it, and cannot put into a WhatsApp message.</p>
          <p>Listeners on LeanOn who have navigated the arranged marriage process understand what it is like to sit across from a stranger and feel the weight of your family's hopes in the room. They know the exhaustion of the process, the loneliness of going through it, and the complication of not being able to talk about it honestly with the people closest to you.</p>
          <p>You can come to a session with the ambivalence, the age anxiety, the grief over a match that did not work out, the anger you have not been able to show, or the quiet worry that something is wrong with you. None of it will surprise a listener who has been there.</p>
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
          <h2>A space for what you cannot say to your family</h2>
          <p>Anonymous. No agenda about what you should decide. A listener who understands the arranged marriage process from the inside.</p>
          <a href="/browse" className="btn-cta">Find a listener now →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/relationship-anxiety">Relationship anxiety →</a>
            <a href="/support/anxiety">Anxiety →</a>
            <a href="/i-need-someone-to-talk-to">Need to talk →</a>
            <a href="/support/loneliness">Loneliness →</a>
            <a href="/support/need-to-vent">Need to vent →</a>
            <a href="/support/overthinking">Overthinking →</a>
          </div>
        </div>
      </div>
    </>
  )
}
