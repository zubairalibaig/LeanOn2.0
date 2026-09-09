import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Dealing With Family Pressure in India — Emotional Support When You Can\'t Talk to Them | LeanOn',
  description: 'Family expectations around career, marriage, and money in India can be overwhelming. Talk to someone who understands — anonymously, without it getting back to them.',
  keywords: [
    'family pressure India', 'Indian family expectations', 'parents pressure India',
    'dealing with family stress India', 'career pressure from parents India', 'marriage pressure India',
    'family conflict India', 'emotional support family problems India', 'Indian family mental health',
    'joint family stress India', "can't talk to family India", 'family expectations pressure India',
    'parent pressure mental health India',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/support/family-pressure-india',
    languages: { 'en-IN': 'https://www.leanon.app/support/family-pressure-india' },
  },
  openGraph: {
    title: 'Dealing With Family Pressure in India — Emotional Support When You Can\'t Talk to Them | LeanOn',
    description: 'Family expectations around career, marriage, and money in India can be overwhelming. Talk to someone who understands — anonymously, without it getting back to them.',
    url: 'https://www.leanon.app/support/family-pressure-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Family Pressure Support India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will the listener judge my family or take sides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Peer listeners on LeanOn are trained to be present with you — not to evaluate your family or render a verdict on who is right. You can share honestly about what your family is doing and how it is making you feel, and your listener will hold space for that without turning it into a trial. Many listeners have personally navigated complicated family dynamics in India and will understand the nuance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I feel guilty talking about my family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is extremely common — especially in Indian families where loyalty is deeply valued. Talking about your struggles with family pressure is not a betrayal. You are not sharing your family\'s secrets with the world; you are processing your own emotional experience in a confidential space. The guilt itself is something you can bring to the conversation. Many LeanOn listeners have navigated this exact tension.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I\'m the one causing my family stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring that too. Many people come to LeanOn carrying guilt about the pressure they feel they are putting on their family — for not meeting expectations, for choices they have made, for the tension their situation is creating at home. A peer listener will not tell you whether you are right or wrong. They will help you process what you are feeling, including the complexity of being both affected by and affecting the people you love.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this relevant if I live abroad and my family is in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very much so. Some of the most intense family pressure experiences happen across distance — the WhatsApp calls about marriage timelines, the financial expectations from abroad, the guilt about not being present for aging parents, the pressure to return home. LeanOn listeners understand this experience specifically. Distance does not reduce Indian family pressure; it often amplifies it with an added layer of guilt and disconnection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of family issues do people bring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common are: pressure about career choices (especially deviation from engineering/medicine/MBA), marriage pressure (age, caste, timing), financial expectations (being the breadwinner, remitting money abroad), conflict between personal values and family values, not being able to express emotions at home, feeling unseen or unheard in a joint family, and the grief of a relationship with a parent that is loving but also controlling. All of these are legitimate and all of them can be held in a LeanOn session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from complaining to a friend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A friend who knows your family brings their own history with them — opinions, previous conversations, positions they have already taken. A LeanOn listener has no history with your family, no stake in the situation, and no opinion about what you should do. They also maintain complete confidentiality, which means nothing you say will circulate back to the people involved. This is the specific value of talking to someone outside your social circle: genuine objectivity, genuine privacy.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Family Pressure India', item: 'https://www.leanon.app/support/family-pressure-india' },
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

export default function FamilyPressureIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Family Pressure India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Peer Support · Family Pressure · India</p>
          <h1>When the Pressure Comes From <em>The People You Love</em></h1>
          <p className="lead">Indian family expectations around career, marriage, and money can feel like a weight you carry everywhere. The hardest part: you cannot vent to the people who are the source of it. LeanOn gives you a space outside all of that — anonymous, confidential, and genuinely understanding of the Indian family dynamic.</p>
          <a href="/browse?topic=relationships" className="cta-hero">Find a listener →</a>
        </div>

        <div className="section">
          <h2>The Specific Trap of Indian Family Pressure</h2>
          <p>In most Indian families, the relationship between love and expectation is deeply intertwined. Your parents may genuinely want what is best for you — and they may also be the source of the most persistent, grinding pressure you have ever experienced. Both things are true simultaneously. That is what makes it so hard to process.</p>
          <p>The expectations tend to cluster around a few specific fault lines:</p>

          <h3>Career — The Narrowest Path</h3>
          <p>In many Indian families, there is an implicit hierarchy of acceptable professions: engineering or medicine first, then MBA, then government service, then law. Everything else requires justification. If you are in IT but want to move into design, journalism, teaching, or entrepreneurship, the conversation with your family is not about whether it is right for you — it is about defending the choice against a verdict that has already been reached.</p>
          <p>The IIT/IIM benchmark is a particular weight. If you did not get there, it can follow you in family conversations for decades. If you did get there and are still not happy, that can feel like a problem you are not allowed to have.</p>

          <h3>Marriage — The Timeline You Did Not Choose</h3>
          <p>For many Indians, the marriage pressure starts in the mid-twenties and intensifies steadily. The pressure is about age (&quot;you are already 27&quot;), about caste and community (&quot;we have to find someone from our background&quot;), and about timing relative to siblings and cousins. If you are not in a relationship, you are behind. If you are in a relationship that your family does not approve of, you are a problem to be solved.</p>
          <p>The experience of being actively loved by parents who are simultaneously doing something painful to you is one of the most confusing emotional states a person can be in.</p>

          <h3>Money — The Weight of Being the Support</h3>
          <p>For many Indians — especially first-generation professionals and those who have moved cities or abroad — there is an expectation to contribute financially to the family. This is often unspoken and assumed. When the expectation clashes with your own financial goals, debt, or simply your desire to build your own life, the resulting guilt and resentment can be crushing.</p>
        </div>

        <div className="section">
          <h2>Why You Can&apos;t Just &quot;Talk to Your Family About It&quot;</h2>
          <p>The standard advice — &quot;just be honest with your parents&quot;, &quot;have a conversation&quot;, &quot;set boundaries&quot; — misses something fundamental about how many Indian families actually function.</p>
          <p>In a lot of Indian families, expressing emotional difficulty to your parents is not a neutral act. It creates worry, which generates more pressure, which makes everything worse. Telling your mother you are stressed about the marriage timeline does not open a conversation — it starts a campaign.</p>
          <p>There is also the dynamic of respect and filial duty that is deeply embedded in Indian culture. Expressing frustration or resentment toward your parents — even to yourself, even privately — can feel like a form of disloyalty. Like you are a bad child for feeling the way you feel.</p>

          <h3>You Cannot Vent to Friends Either</h3>
          <p>Friends from home know your family. Things said in confidence have a way of circulating. Telling your best friend that your mother is pressuring you about marriage means that information now exists in your social network — where it can be misinterpreted, shared, or eventually reach your family. The social cost of that can be significant.</p>
          <p>And beyond the practical concern, there is something exhausting about always having to manage how you are perceived. A conversation with a friend is never fully private from your own image of yourself in their eyes. You edit. You soften. You leave things out.</p>
        </div>

        <div className="section">
          <h2>What Happens When It Stays Unexpressed</h2>
          <p>The pressure that cannot be expressed does not go away. It accumulates. This is not a metaphor — there is real psychological and physiological research showing that the suppression of emotions increases their intensity over time and produces measurable stress responses.</p>
          <p>What this looks like in practice:</p>
          <ul>
            <li>Anxiety that seems disproportionate to whatever you are doing — because it is not really about work, it is about the accumulated weight of years of pressure</li>
            <li>A persistent low-grade sadness that you cannot locate because you feel obligated to be grateful for what your family has given you</li>
            <li>Irritability and reactivity that come out sideways — at partners, colleagues, or strangers — because you have no safe place to discharge what you are actually feeling</li>
            <li>Physical symptoms: tension, insomnia, headaches — the body expressing what the mind has been trained not to</li>
            <li>The specific loneliness of carrying a story that you cannot tell anyone who knows you</li>
          </ul>
          <p>None of this is weakness. It is what happens to a person who is carrying a real emotional load with no outlet.</p>
        </div>

        <div className="section">
          <h2>Finding a Space Outside the System</h2>
          <p>What you need — and what is genuinely hard to find — is a space that is completely outside the system of relationships that creates the pressure. Not a friend who knows your family. Not a relative with their own stake in the situation. Not a therapist who might have their own cultural frameworks that do not apply to your specific family dynamic.</p>
          <p>LeanOn peer listeners are trained to hold complexity without resolving it into simple verdicts. They understand, from lived experience, what Indian family dynamics actually feel like from the inside — not as an academic concept but as something they have personally navigated.</p>
          <p>Many listeners have their own experiences with:</p>
          <ul>
            <li>Career pressure and the terror of deviating from the expected path</li>
            <li>Marriage pressure from families who love them but do not understand them</li>
            <li>Financial obligations that conflict with their own needs</li>
            <li>The guilt of having feelings about the people who sacrificed for them</li>
            <li>Living away from home and carrying all of this across distance</li>
          </ul>
          <p>You do not have to explain the context from scratch. You can just say what you are feeling and be met by someone who actually gets it.</p>
        </div>

        <div className="section">
          <h2>What a Conversation on LeanOn Looks Like</h2>
          <p>A session does not have to be structured or have a clear goal. You can start with whatever is most present for you right now. Some people start with:</p>
          <ul>
            <li>&quot;My parents called again about marriage and I just need to say how I actually feel about it.&quot;</li>
            <li>&quot;I am the earning member of my family and I am drowning and I cannot tell any of them.&quot;</li>
            <li>&quot;I do not want the career they chose for me and I have no idea how to have that conversation.&quot;</li>
            <li>&quot;I love my family and I also feel trapped and I cannot say both of those things to anyone I know.&quot;</li>
          </ul>
          <p>Your listener will follow your lead. No advice unless you ask for it. No judgment on your family. No solution imposed. Just a real person holding the space while you say what you actually feel.</p>
          <p>Most people leave a session feeling lighter — not because the situation has changed, but because the weight has been shared. The pressure is still there, but it is not entirely yours alone anymore. That shift matters.</p>
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
          <h2>There is a space outside the pressure</h2>
          <p>Talk to someone who understands Indian family dynamics — anonymously, confidentially, and without it getting back to anyone in your life.</p>
          <a href="/browse?topic=relationships" className="btn-cta">Talk to someone who gets the pressure — first 5 min free →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/career-pressure-india">Career pressure →</a>
            <a href="/support/loneliness">Loneliness support →</a>
            <a href="/support/anxiety">Anxiety support →</a>
            <a href="/online-counseling-india">Online counseling India →</a>
            <a href="/cant-afford-therapy-india">Affordable therapy alternatives →</a>
            <a href="/i-need-someone-to-talk-to">Need to talk →</a>
            <a href="/support/need-to-vent">Need to vent →</a>
            <a href="/browse">Browse all listeners →</a>
          </div>
        </div>
      </div>
    </>
  )
}
