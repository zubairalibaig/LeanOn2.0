import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lonely in a New City in India — You Are Not the Only One | LeanOn',
  description: 'Moving to Bangalore, Mumbai, Hyderabad, or Pune for work and feeling alone? The loneliness of being new to a city in India is real and specific. Talk to someone who gets it.',
  keywords: [
    'lonely new city India', 'moving to Bangalore loneliness', 'new to Mumbai lonely',
    'Hyderabad loneliness new job', 'Pune lonely new city', 'loneliness after relocating India',
    'IT job relocation loneliness India', 'moving cities India mental health',
    'new city friends India', 'alone in new city India', 'relocating India emotional support',
    'work relocation loneliness India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/new-city-india', languages: { 'en-IN': 'https://www.leanon.app/support/new-city-india' } },
  openGraph: {
    title: 'Feeling Lonely in a New City in India — You Are Not the Only One | LeanOn',
    description: 'Moving to Bangalore, Mumbai, Hyderabad, or Pune for work and feeling alone? Talk to someone who gets it.',
    url: 'https://www.leanon.app/support/new-city-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Emotional Support for New City Loneliness India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it normal to feel lonely even when you have colleagues?',
      acceptedAnswer: { '@type': 'Answer', text: 'Completely normal. Colleagues are not the same as friends — the relationship is functional, not personal. You can spend eight hours a day with people and still go home to an empty evening. Having colleagues does not fill the specific need for real connection, and many people in new cities feel this exact gap without being able to name it.' },
    },
    {
      '@type': 'Question',
      name: 'How long does the new-city adjustment usually take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Research suggests most people begin to feel more settled after six to twelve months — but "settled" does not always mean you have close friends. The social layer takes longer, often two or three years. This does not mean something is wrong with you. Adult friendships take time because they have to survive outside of structured environments.' },
    },
    {
      '@type': 'Question',
      name: 'I have friends from college online. Why do I still feel lonely?',
      acceptedAnswer: { '@type': 'Answer', text: 'Online contact maintains closeness but it does not replace physical presence. The loneliness of a new city is partly about being physically alone — no one to walk to a chai stall with, no one whose couch you can land on, no one in the same time zone of your life. Your college friends are real connections, but they cannot fill the local absence.' },
    },
    {
      '@type': 'Question',
      name: 'Should I go home more often or is that making it worse?',
      acceptedAnswer: { '@type': 'Answer', text: 'There is no single right answer — it depends on the person. For some, going home too often resets the adjustment clock and makes return harder. For others, periodic visits are necessary for mental health. What matters more is building something in the new city alongside the visits, rather than using going home as the only relief valve.' },
    },
    {
      '@type': 'Question',
      name: 'Can talking to a listener help me actually make friends?',
      acceptedAnswer: { '@type': 'Answer', text: 'A listener is not a friend-making service — but processing the anxiety and discouragement around building connections can make you more open and less guarded when you do encounter people. Loneliness creates a cycle: the worse you feel, the harder it is to show up well socially. Talking can break that cycle.' },
    },
    {
      '@type': 'Question',
      name: 'What if I have been in this city for a year and still feel alone?',
      acceptedAnswer: { '@type': 'Answer', text: 'A year is long enough to feel like you should be okay by now — which adds shame on top of loneliness. But the timeline varies enormously based on the city, your work hours, your living situation, and how much bandwidth you have after a demanding job. One year without deep friendships is not a failure. It is common. And the feeling is worth talking about.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Lonely in a New City', item: 'https://www.leanon.app/support/new-city-india' },
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

export default function NewCityIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Lonely in a New City</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">New City · Relocation · Peer Support</p>
          <h1>Feeling Lonely in a New City in India — <em>You Are Not the Only One</em></h1>
          <p className="lead">You moved to Bengaluru, Mumbai, Hyderabad, or Pune for a job. The weekdays are manageable. But Friday evening arrives and the absence hits hard. This loneliness is real, specific, and more common than you think. Someone on LeanOn gets it.</p>
          <a href="/browse" className="cta-hero">Talk to someone who understands →</a>
        </div>

        <div className="section">
          <h2>The Friday Evening Problem</h2>
          <p>Monday through Friday, work fills the hours. The commute, the stand-ups, the deadlines, the laptop open until 9 PM — all of it creates structure that holds the loneliness at bay. You are too busy to feel it.</p>
          <p>Then Friday evening comes. The Slack notifications go quiet. Your colleagues say "see you Monday" and head home to their families, their partners, their established lives in this city. And you head back to a flat that does not yet feel like home, to a roommate you are still getting to know, to an evening with no plans.</p>
          <p>Saturday morning is worse. You lie in bed aware that the day is entirely empty, that you have nowhere to be and no one expecting you. You scroll Instagram and see people from college posting group pictures. You text a few of them. The conversation is warm but brief — everyone is busy in their own lives, their own cities. You put your phone down and the silence comes back.</p>
          <p>This is the Friday Evening Problem. It is one of the most common and least talked-about emotional experiences for young professionals in India who have moved to a new city alone. You are not struggling. You are in a specific situation that is genuinely hard.</p>
        </div>

        <div className="section">
          <h2>Why the Weekday Is Fine But the Weekend Isn&apos;t</h2>
          <p>The weekday works because it is structured. You do not need to generate social connection — it is built into the day through meetings, Slack, the office. The social need is partially met by proximity to other humans, even if none of them are close friends yet.</p>
          <p>The weekend exposes the gap because it is unstructured. Now connection requires initiative — you have to decide to reach out, find someone available, make a plan. And in a new city where you have no established friendships, that initiative mostly leads nowhere. Plans fall through. People are busy. You end up doing the weekend alone: eating alone, watching something alone, walking to a cafe alone.</p>
          <p>Over time this creates a pattern: dreading Friday evening, manufacturing busyness on weekends to avoid the feeling, making excuses to stay late at work. These are adaptations. They work in the short term. But they do not fix the underlying problem, which is simply that you do not yet have people in this city.</p>
        </div>

        <div className="section">
          <h2>Why Making Friends as an Adult in a New City Is Actually Hard</h2>
          <p>Nobody tells you this before you move: adult friendships are structurally different from the friendships you made in school and college. Those happened because you were thrown together by circumstance — same hostel, same class, same mess — and you had enormous amounts of unstructured time to turn proximity into closeness.</p>
          <p>In a new city as a working adult, neither of those conditions exists. Colleagues are not the same as friends. The relationship is functional — you work together, you may even like each other, but it is bounded by professionalism and the fact that you go home to completely different lives. Building a friendship beyond work requires time, repeated contact, and the right chemistry — things that are hard to manufacture in a structured environment.</p>
          <p>There are apps, events, hobby groups. Some people find friends this way. But it requires sustained effort over months, at the end of a long workday, while already feeling depleted. And the early stages of any potential friendship involve social risk — the vulnerability of reaching out, the uncertainty of whether it will go anywhere.</p>
          <p>None of this is a personal failure. It is a structural problem with the circumstances. Knowing that does not immediately fix the loneliness, but it can remove the layer of self-blame that makes it worse.</p>
        </div>

        <div className="section">
          <h2>What This Kind of Loneliness Does Over Time</h2>
          <p>New-city loneliness that goes unaddressed tends to compound. The initial adjustment phase — which is hard but normal — can slide into a chronic baseline of isolation if nothing fills the gap. At that point, the loneliness is no longer just about being new. It becomes woven into your daily life.</p>
          <p>The signs are subtle at first: low-grade irritability, finding it hard to be motivated after work, dreading the weekend, losing interest in things you used to enjoy. Not crisis-level, not dramatic — just a persistent dimness. Many people in this state function perfectly well at work while quietly struggling the rest of the time.</p>
          <p>Over time, isolation can also make the task of building connections feel harder and more threatening. The more alone you feel, the more socially out-of-practice you become, and the more exhausting it feels to put yourself out there. This is the loneliness spiral, and it is worth interrupting early.</p>
          <p>Talking about it — even to one person who understands — breaks something in the spiral. It does not solve the practical problem of building friends in a new city. But it makes you feel less alone in the feeling, which is often what is needed before anything else can move.</p>
        </div>

        <div className="section">
          <h2>Finding Someone to Talk to When You&apos;re New</h2>
          <p>The irony of new-city loneliness is that it is hard to talk about precisely because you have fewer people to talk to. The people in your life who would normally hear this — close friends from college, family — are not present in the way you need. Phone calls help but they do not fully substitute for someone who is here, in the same reality as you.</p>
          <p>LeanOn listeners understand this experience firsthand — many have navigated the exact loneliness of relocating to a metro for work in India. They know what Bengaluru on a Saturday alone feels like. They know the WhatsApp calls home that leave you more homesick. They know the colleague relationship that is warm but not close. You do not have to explain any of it.</p>
          <p>A session is not therapy and it is not a substitute for real friendships. But it is a real person listening to a real experience, and sometimes that is the thing that makes the next week more manageable.</p>
          <div className="how-steps" style={{marginTop:20}}>
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <h3>Browse listeners who get it</h3>
                <p>Many listeners on LeanOn have personally relocated for work and carried new-city loneliness themselves.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <h3>Book in minutes — no appointment</h3>
                <p>Start a free 5-minute trial or jump into a paid session. Sessions from ₹160 for 15 minutes.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <h3>Just say what the week was like</h3>
                <p>You do not need to have a problem or a question. Start with the Friday evening and see where the conversation goes.</p>
              </div>
            </div>
          </div>
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
          <h2>Someone here understands what this city feels like on a Saturday</h2>
          <p>No appointment. No explaining why you moved or what you expected. Just open the app and find a listener who gets it.</p>
          <a href="/browse" className="btn-cta">Browse listeners now →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/loneliness">Loneliness →</a>
            <a href="/i-need-someone-to-talk-to">Need to talk →</a>
            <a href="/support/anxiety">Anxiety →</a>
            <a href="/support/overthinking">Overthinking →</a>
            <a href="/support/someone-to-talk-to">Someone to talk to →</a>
            <a href="/support/need-to-vent">Need to vent →</a>
          </div>
        </div>
      </div>
    </>
  )
}
