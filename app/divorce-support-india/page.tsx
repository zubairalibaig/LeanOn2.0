import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Divorce Support India — Process It With Someone Real | LeanOn',
  description: 'Going through a divorce in India? The emotional weight is enormous. Talk to a real peer listener who gets the Indian context — anonymous, from ₹160.',
  keywords: [
    'divorce support india', 'divorce coping india', 'going through divorce india',
    'divorce emotional support india', 'separation support india',
    'divorce help india', 'divorce recovery india',
  ],
  alternates: { canonical: 'https://www.leanon.app/divorce-support-india', languages: { 'en-IN': 'https://www.leanon.app/divorce-support-india' } },
  openGraph: {
    title: 'Divorce Support India — Process It With Someone Real | LeanOn',
    description: 'Going through a divorce in India? The emotional weight is enormous. Talk to a real peer listener who gets the Indian context — anonymous, from ₹160.',
    url: 'https://www.leanon.app/divorce-support-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Divorce Support India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is peer support appropriate during divorce?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Divorce involves intense emotional processing &mdash; grief, anger, relief, identity questions, fear &mdash; that a peer listener is well-suited to support. For clinical symptoms that arise during divorce (severe depression, anxiety disorder, PTSD), please see a professional as well. The legal and financial dimensions of divorce require lawyers and financial advisors. The emotional dimension is exactly what peer support is for.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. Nothing is connected to your social or professional life. What you say in the session stays there. Given the social complexity of divorce in India, anonymity is particularly important &mdash; and it is fully guaranteed.' },
    },
    {
      '@type': 'Question',
      name: 'What can I talk about?',
      acceptedAnswer: { '@type': 'Answer', text: 'Anything related to your experience. The grief. The anger. The relief and the guilt about the relief. The identity confusion &mdash; who are you outside of this marriage? The fear about the future. What other people are saying. What your children are going through. What you have not been able to say to anyone. All of it is appropriate.' },
    },
    {
      '@type': 'Question',
      name: 'Will the listener take sides?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. A LeanOn listener has no stake in the outcome. They will not take your side or your spouse&apos;s side. They will hold space for your experience of the situation, which is different from validating a position. You will feel heard without the listener fuelling anything.' },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a divorce lawyer or a therapist?',
      acceptedAnswer: { '@type': 'Answer', text: 'A divorce lawyer handles the legal process. A therapist provides clinical mental health treatment. A peer listener provides a space to process the emotional weight &mdash; a real person with no agenda, no fees by the hour, and no professional relationship that changes the nature of what you can say. It is the conversation you cannot have with anyone else.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Divorce Support India', item: 'https://www.leanon.app/divorce-support-india' },
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

export default function DivorceSupportIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Divorce Support India</span>
        </nav>
        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>
        <div className="hero">
          <p className="badge">Divorce Support &middot; India &middot; Anonymous</p>
          <h1>Divorce in India doesn&apos;t just end a marriage. <em>It ends a whole identity you built around it.</em></h1>
          <p className="lead">In India, divorce carries shame, family pressure, financial panic, and grief &mdash; all at once. You can&apos;t tell most people. You&apos;re managing everyone else&apos;s reactions while barely managing your own. Say it here.</p>
          <a href="/browse" className="cta-hero">Talk to someone &rarr;</a>
        </div>
        <div className="section">
          <h2>Why Divorce Hits Different in India</h2>
          <p>In India, marriage is not just a relationship between two people. It is a contract between two families, embedded in social identity, community standing, and in many cases religious significance. When it ends, the impact radiates outward in ways that do not happen in cultures where divorce is less socially loaded.</p>
          <p>For women especially, marital status is deeply tied to social identity. Divorce can mean losing your social position in a community, facing judgment from people who were once part of your support network, and navigating a legal and financial system that was not designed with your independence in mind.</p>
          <p>For men, the cultural expectation that they should have &ldquo;handled&rdquo; the marriage &mdash; and the silence around male emotional experience &mdash; means that divorce grief often goes completely unexpressed.</p>
        </div>
        <div className="section">
          <h2>The Emotional Stages Nobody Talks About</h2>
          <ul>
            <li><strong>Grief</strong> &mdash; for the relationship, for the life imagined, for the person you were inside the marriage</li>
            <li><strong>Relief</strong> &mdash; and the guilt about the relief, because you are supposed to be sad, not relieved</li>
            <li><strong>Anger</strong> &mdash; at what happened, at what was said or done, at the years and energy invested</li>
            <li><strong>Loneliness</strong> &mdash; even if the marriage was not happy, its end brings a specific kind of silence</li>
            <li><strong>Identity confusion</strong> &mdash; who are you now, outside the marriage? How do you define yourself?</li>
            <li><strong>Fear</strong> &mdash; about the future, about finances, about whether you will be okay</li>
          </ul>
          <p>These stages do not arrive in order and they do not end cleanly. They can all be present simultaneously. They need to be said to someone &mdash; not managed alone.</p>
        </div>
        <div className="section">
          <h2>Who You Can&apos;t Talk To</h2>
          <p>Family will panic or will have decided whose fault it is. Friends will have opinions. Mutual friends have loyalties to both sides. Colleagues do not need to know. The lawyer only hears the legal facts. The therapist, if you can afford one and find one with availability, is still many weeks away.</p>
          <p>What is missing is a neutral person who has no stake in the outcome &mdash; who can hear the whole complicated thing without forming a position, without advising you on what to do, without making it about anything other than your experience of it. That is a LeanOn peer listener.</p>
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
          <h2>You deserve a space outside the drama.</h2>
          <p>Anonymous. No judgment. No sides. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/single-parent-india">Single parent support &rarr;</a>
            <a href="/interfaith-relationship-india">Interfaith relationship &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/relationship-counselling-india">Relationship counselling &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
