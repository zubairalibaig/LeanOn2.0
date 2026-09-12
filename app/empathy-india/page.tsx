import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathy India — Be Truly Heard, Not Just Listened To | LeanOn',
  description: 'Empathy is more than listening. It\'s feeling understood. Find an empathetic peer on LeanOn — real people, real understanding, from ₹160.',
  keywords: [
    'empathy india', 'empathy meaning india', 'what is empathy india',
    'empathic support india', 'empathy vs sympathy india', 'find empathetic person india',
    'lack of empathy partner india', 'empathy in relationships india',
    'empathetic listener india', 'emotional support empathy india',
  ],
  alternates: { canonical: 'https://www.leanon.app/empathy-india', languages: { 'en-IN': 'https://www.leanon.app/empathy-india' } },
  openGraph: {
    title: 'Empathy India — Be Truly Heard, Not Just Listened To | LeanOn',
    description: 'Empathy is more than listening. It\'s feeling understood. Find an empathetic peer on LeanOn — real people, real understanding, from ₹160.',
    url: 'https://www.leanon.app/empathy-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Empathy India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is empathy vs sympathy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sympathy is feeling sorry for someone from a distance — "that sounds hard." Empathy is feeling with someone — actually climbing into the emotional space they are in and understanding it from the inside. Sympathy keeps distance. Empathy closes it. The difference is felt immediately in a conversation: sympathy often sounds like "at least..." or "look on the bright side." Empathy sounds like "that makes complete sense. Tell me more."' },
    },
    {
      '@type': 'Question',
      name: 'Can empathy be learned?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Empathy has both an innate component (some people naturally find it easier) and a learned one. Active listening, perspective-taking exercises, and genuine curiosity about other people\'s inner lives all build empathic capacity over time. LeanOn listeners are specifically trained in these skills, which is why conversations with them feel different from most conversations you\'ve had.' },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel like nobody understands me?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most people, when someone shares something difficult, instinctively move to fix, advise, or minimise — not because they don\'t care, but because sitting with someone\'s pain is genuinely uncomfortable. The trained response to discomfort is to make it stop, and advice-giving feels like helping. True empathy requires tolerating the discomfort of being present with someone\'s pain without trying to resolve it. This is rare — and when you find it, it is unmistakable.' },
    },
    {
      '@type': 'Question',
      name: 'What does an empathetic listener do?',
      acceptedAnswer: { '@type': 'Answer', text: 'An empathetic listener tracks what you are saying and what you seem to be feeling, reflects both back to you ("it sounds like you\'re angry, but underneath it you\'re hurt"), makes room for you to go deeper without pushing, and does not jump to solutions or perspectives. They hold the space. They keep their own reactions and opinions out of it. The result is that you feel understood, not managed.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn cheaper than a therapist?',
      acceptedAnswer: { '@type': 'Answer', text: 'Significantly. A private therapist in India typically charges ₹1,500–5,000 per session. LeanOn peer sessions start at ₹160 for 15 minutes, with the first 5 minutes of every session free. LeanOn is not therapy — listeners are trained peers, not licensed professionals — but for the everyday need to be heard without judgment, it is accessible, immediate, and effective.' },
    },
    {
      '@type': 'Question',
      name: 'When do I most need empathy?',
      acceptedAnswer: { '@type': 'Answer', text: 'The moments when you most need empathy are the ones where you have already tried talking to people in your life and still feel unheard — after a fight, when you\'re overwhelmed by something you can\'t explain, when words won\'t come out right, when you feel like you\'re performing okay for everyone around you but collapsing inside. These are exactly the moments LeanOn is built for.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Empathy India', item: 'https://www.leanon.app/empathy-india' },
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

export default function EmpathyIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Empathy India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Empathy &middot; Peer Support &middot; India</p>
          <h1>Empathy isn&apos;t a word. It&apos;s a feeling. <em>You&apos;ll know it when you find it.</em></h1>
          <p className="lead">You&apos;ve talked to people who listened but didn&apos;t really get it. Empathy is different &mdash; it&apos;s when someone feels with you, not just for you. That&apos;s what every LeanOn listener is trained to offer.</p>
          <a href="/browse" className="cta-hero">Find an empathetic listener &rarr;</a>
        </div>

        <div className="section">
          <h2>What Empathy Actually Means</h2>
          <p>Empathy is not the same as sympathy, and it is not the same as advice. These three responses to pain look similar from the outside but feel completely different to the person receiving them.</p>
          <h3>Sympathy</h3>
          <p>Sympathy acknowledges your pain from a distance. &ldquo;That sounds really hard.&rdquo; &ldquo;I&apos;m sorry you&apos;re going through this.&rdquo; It is kind. But it keeps the speaker outside your experience. You feel witnessed, but not joined.</p>
          <h3>Advice</h3>
          <p>Advice tries to solve the problem. &ldquo;Have you tried talking to him?&rdquo; &ldquo;Maybe you should just take a break.&rdquo; It comes from care, but it implies that your pain is a problem to be fixed rather than an experience to be held. When you&apos;re not ready for solutions, advice lands as dismissal.</p>
          <h3>Pity</h3>
          <p>Pity looks down from above. It creates distance. The pitied person feels small; the person offering pity feels superior. It is the most distancing response of all, and it is often mistaken for empathy.</p>
          <h3>Empathy</h3>
          <p>Empathy enters the experience with you. It says &ldquo;I am inside this with you. I am not trying to get you out of it faster. I am here.&rdquo; It requires the listener to temporarily set aside their own perspective and genuinely inhabit yours. This is cognitively and emotionally demanding, which is why it is rare &mdash; and why it is so powerful when you find it.</p>
        </div>

        <div className="section">
          <h2>Why Empathy Is So Rare in the People Around Us</h2>
          <p>The people who love you are not withholding empathy because they don&apos;t care. They&apos;re withholding it because sitting with someone&apos;s pain, without trying to fix it or make it stop, is genuinely uncomfortable. Most people&apos;s instinct when someone they love is suffering is to make the suffering stop. Advice-giving is how they do that.</p>
          <p>There is also a cultural dimension in India. The culture broadly values practical action, hierarchical wisdom, and problem-solving. Sitting with someone and reflecting their feelings back without steering them towards a solution can feel passive, even unhelpful. This is not a moral failing &mdash; it is a different model of care.</p>
          <p>The result is that most Indians grow up without ever experiencing what a truly empathetic conversation feels like. When they finally have one &mdash; which is often the first session on LeanOn &mdash; they describe it as something they didn&apos;t know existed.</p>
        </div>

        <div className="section">
          <h2>What an Empathetic Conversation Feels Like</h2>
          <p>You start talking and the listener tracks you. Not just the words but the feeling underneath the words. They reflect back what they hear &mdash; not just what you said, but what it seemed to mean: &ldquo;It sounds like the part that hurt most wasn&apos;t what she said but that she said it in front of everyone.&rdquo;</p>
          <p>That accuracy. That precision. The feeling that someone just said something about your inner experience that you hadn&apos;t quite put into words yourself. That is empathy.</p>
          <p>After a genuinely empathetic conversation, most people describe a physical change. A lightening. A reduction in pressure. Something they were carrying has been set down &mdash; not because the situation has changed, but because it has been witnessed. Being truly seen by another person has a physiological effect. The weight reduces.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Listeners Are Trained in Empathy</h2>
          <p>LeanOn listeners go through specific training in the skills that make empathy possible:</p>
          <ul>
            <li><strong>Active listening:</strong> Not planning the response while the other person is talking. Fully receiving what is being said before responding.</li>
            <li><strong>Reflecting back:</strong> Articulating what the speaker seems to be feeling, not just what they said. Checking the understanding.</li>
            <li><strong>Not steering:</strong> Resisting the instinct to lead the conversation toward a conclusion or a solution. Following the speaker&apos;s thread.</li>
            <li><strong>Genuine curiosity:</strong> Asking questions that invite depth rather than questions that confirm the listener&apos;s existing interpretation.</li>
            <li><strong>Holding uncertainty:</strong> Being comfortable with unresolved situations, with &ldquo;I don&apos;t know,&rdquo; with the space where solutions do not exist.</li>
          </ul>
          <p>These skills are teachable. LeanOn listeners practise them specifically, which is why a conversation with a LeanOn listener often feels different from conversations with people who care about you but haven&apos;t been trained in this way.</p>
        </div>

        <div className="section">
          <h2>When You Most Need Empathy</h2>
          <p>There are specific moments when advice and sympathy fail entirely and only empathy helps:</p>
          <ul>
            <li>Right after a fight, when you&apos;re still activated and unable to think clearly</li>
            <li>When you&apos;re overwhelmed by something you can&apos;t quite explain or articulate</li>
            <li>When the situation is too complicated for a quick summary and you need someone to follow the whole thing</li>
            <li>When you&apos;ve already been given plenty of advice and none of it has helped</li>
            <li>When you&apos;re performing okay for everyone around you but quietly not okay at all</li>
            <li>When words won&apos;t come out right and you need someone to help you find them</li>
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
          <h2>Find an empathetic listener today.</h2>
          <p>Real people, trained in empathy. From ₹160. First 5 minutes free on every session.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/empathy-friend-india">Empathy friend India &rarr;</a>
            <a href="/paid-friend-india">Paid friend India &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/rant-online-india">Rant online India &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy India &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
