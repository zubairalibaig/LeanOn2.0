import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mother-in-Law Stress India — Anonymous Support for Saas-Bahu Tension | LeanOn',
  description: 'Saas-bahu tension, controlling in-laws, joint family conflict. Talk to someone who understands Indian family dynamics — anonymous, from ₹160.',
  keywords: [
    'mother in law stress India', 'saas bahu problem India', 'in-law conflict India',
    'sasural tension India', 'controlling mother in law India', 'joint family tension India',
    'mother in law problems India', 'saas problem India',
  ],
  alternates: { canonical: 'https://www.leanon.app/mother-in-law-stress-india', languages: { 'en-IN': 'https://www.leanon.app/mother-in-law-stress-india' } },
  openGraph: {
    title: 'Mother-in-Law Stress India — Anonymous Support for Saas-Bahu Tension | LeanOn',
    description: 'Saas-bahu tension, controlling in-laws, joint family conflict. Talk to someone who understands Indian family dynamics — anonymous, from ₹160.',
    url: 'https://www.leanon.app/mother-in-law-stress-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Mother-in-Law Stress India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is mother-in-law stress so common in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'India\'s joint family system creates a structural tension between the nuclear relationship (husband and wife) and the family of origin (his parents, especially his mother). The saas has often poured years of emotional energy into her son, and the bahu\'s arrival represents both a shift in his attention and a change in household dynamics. Without clear boundaries and with genuine cultural ambiguity about where the "new family" begins and ends, conflict is almost inevitable.' },
    },
    {
      '@type': 'Question',
      name: 'Why can\'t I just tell my husband?',
      acceptedAnswer: { '@type': 'Answer', text: 'This is the central bind. You love your husband. You do not want to create conflict between him and his mother. You have probably tried bringing it up and watched him become defensive, minimise what you said, or get caught between two loyalties. After a few attempts, many women stop trying because the attempt itself becomes another source of pain. You need to process your feelings with a neutral party before, or instead of, that conversation — someone who will not make you feel like you are being unreasonable.' },
    },
    {
      '@type': 'Question',
      name: 'What if I sound like I am complaining?',
      acceptedAnswer: { '@type': 'Answer', text: 'You are not complaining. You are describing your actual experience. There is a culture of expectation in India that a bahu should adjust — and women who do not adjust are often labelled difficult, sensitive, or dramatic. A LeanOn listener has no stake in that narrative. They will listen to exactly what you are experiencing without applying a filter of "but she means well" or "that is just how it is." Your feelings are valid. Your experience is real. A neutral ear confirms that.' },
    },
    {
      '@type': 'Question',
      name: 'How can talking to a stranger help with an in-law situation?',
      acceptedAnswer: { '@type': 'Answer', text: 'It helps because the situation is already too crowded with people who have positions. Your family has a position. His family has a position. Your husband is caught in the middle. Friends who know both families have positions. A stranger with no history to any of you can hear the situation fresh and reflect back what you are actually carrying — without any of those positions getting in the way. That clarity is often the first step toward figuring out what you actually want to do.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available 24/7?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are available whenever you need them — early morning, late night, or during the workday. There is no appointment. You browse listeners who are online right now and start a session. The first 5-minute session free.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. Your first 5-minute session is free — you pay only if you continue beyond that. No subscription, no commitment.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Mother-in-Law Stress India', item: 'https://www.leanon.app/mother-in-law-stress-india' },
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

export default function MotherInLawStressIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Mother-in-Law Stress India</span>
        </nav>

        <div className="hero">
          <p className="badge">Saas-Bahu &middot; In-Laws &middot; Joint Family</p>
          <h1>You love your partner. You dread going home. <em>You can&apos;t say this out loud.</em></h1>
          <p className="lead">In-law tension is one of the most common and least spoken-about stresses in Indian marriages. Talk to someone who understands the saas-bahu dynamic without judgment. Anonymous, from &#x20b9;160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Why In-Law Stress Is Different From Other Stress</h2>
          <p>Most stressors have a clear outside and inside. Work stress is about work. Financial stress is about money. But in-law stress is inside your home and inside your marriage at the same time. There is nowhere to go to get away from it. The person you would normally turn to for support is also the person at the centre of the situation.</p>
          <p>There is also the cultural weight. In India, the expectation that a bahu will adjust is so deeply embedded that even naming the problem can feel like a character flaw. Women who express difficulty with in-laws are often labelled dramatic, difficult, or selfish — even by other women who are going through the same thing privately.</p>
          <p>The result: you carry something very heavy, completely alone, in silence. And the longer it goes unspoken, the heavier it gets.</p>
        </div>

        <div className="section">
          <h2>Why You Cannot Vent to Your Husband</h2>
          <p>It is not that he does not love you. It is that he is in an impossible position. Any complaint you make about his mother is also, in some way, a complaint about him — where he came from, who raised him, the family he is asking you to be part of. His instinct will often be to defend rather than to validate.</p>
          <p>There is also the guilt dimension. Many men feel genuine guilt about taking their wife away from her own family and placing her in a complicated household. But guilt does not translate automatically into action. It often translates into avoidance — not wanting to hear about the problem because hearing it makes the guilt worse.</p>
          <p>And if he does try to help, the intervention often makes things worse. He speaks to his mother. His mother feels attacked. The tension escalates. Now you feel responsible for starting a bigger conflict.</p>
        </div>

        <div className="section">
          <h2>What You Actually Need</h2>
          <p>You do not necessarily need advice. You do not need someone to tell you what to do or whether to confront the situation. What you need first is simply to be heard without anyone redirecting the conversation toward how the other person might feel, or how you should be more patient, or how this is just how families work.</p>
          <p>You need to say the things you have been keeping inside — and have someone receive them without flinching, without minimising, and without gossiping. That is the specific thing a neutral listener provides.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Helps</h2>
          <p>LeanOn listeners understand Indian family dynamics. Many of them have lived through joint family situations themselves. They are not going to tell you that you are being difficult. They are not going to ask you to consider your mother-in-law&apos;s perspective before you have had a chance to fully express your own.</p>
          <p>A session gives you a private, confidential space to say what you have been carrying. That alone changes something. When the thing that has been pressing down on you internally is finally said out loud and received, it loses some of its weight. Not all of it — the situation is still there. But you are more able to think about it, and more able to decide what, if anything, you want to do.</p>
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
          <h2>You deserve to be heard without judgment.</h2>
          <p>Anonymous peer support from someone who gets Indian family dynamics. From &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/joint-family-stress-india">Joint family stress &rarr;</a>
            <a href="/sasural-problems-india">Sasural problems &rarr;</a>
            <a href="/toxic-relationship-india">Toxic relationship &rarr;</a>
            <a href="/support/married-but-lonely">Married but lonely &rarr;</a>
            <a href="/for-women">Support for women &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
