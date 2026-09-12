import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Housewife Mental Health India — Your Work Is Real. So Is Your Exhaustion. | LeanOn',
  description: 'Homemaker life is invisible, relentless, and lonely in ways nobody talks about. Talk to someone who gets it — anonymous, from ₹160.',
  keywords: [
    'housewife mental health india', 'homemaker loneliness india', 'stay at home mom india support',
    'homemaker isolation india', 'housewife depression india', 'homemaker mental health india',
    'housewife support india', 'homemaker support india',
  ],
  alternates: { canonical: 'https://www.leanon.app/housewife-support-india', languages: { 'en-IN': 'https://www.leanon.app/housewife-support-india' } },
  openGraph: {
    title: 'Housewife Mental Health India — Your Work Is Real. So Is Your Exhaustion. | LeanOn',
    description: 'Homemaker life is invisible, relentless, and lonely in ways nobody talks about. Talk to someone who gets it — anonymous, from ₹160.',
    url: 'https://www.leanon.app/housewife-support-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Housewife Support India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it normal to feel lonely as a homemaker?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it is more common than the silence around it suggests. Research on homemaker mental health consistently finds elevated rates of loneliness, depression, and anxiety compared to working women &mdash; not because homemaking is inherently worse, but because the labour is invisible, the adult interaction is limited, and there is no off switch. What you feel is real and widely shared.' },
    },
    {
      '@type': 'Question',
      name: 'Is this depression?',
      acceptedAnswer: { '@type': 'Answer', text: 'Loneliness and exhaustion are not the same as clinical depression, though they can overlap. If you are experiencing persistent low mood, inability to feel pleasure, significant changes in sleep or appetite, or thoughts of self-harm, please speak to a doctor. For the everyday weight of homemaker life &mdash; the invisible exhaustion, the identity questions, the loneliness &mdash; peer support is appropriate and helpful.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn without my family knowing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn is completely private. You sign up with just your phone number and first name. Sessions are voice calls from your phone &mdash; no app visible to others, no browser history that names the service. What you say in the session is confidential.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name is all the listener knows. The session is private and confidential. Nothing is shared with your family, your social circle, or anyone outside the session.' },
    },
    {
      '@type': 'Question',
      name: 'How does pricing work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160 for 15 minutes. The first 5 minutes of every session are free. There is no subscription &mdash; you pay only for what you use. You can recharge your wallet from your phone using UPI.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Housewife Support India', item: 'https://www.leanon.app/housewife-support-india' },
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

export default function HousewifeSupportIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Housewife Support India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Homemaker Support &middot; India &middot; You Matter</p>
          <h1>You&apos;re always there for everyone. <em>Who&apos;s there for you?</em></h1>
          <p className="lead">You keep the house running, the kids fed, the family functioning. Nobody asked how you were doing this week &mdash; they assumed you were fine because nothing fell apart. You&apos;re not fine. And you&apos;re allowed to say that.</p>
          <a href="/browse" className="cta-hero">Find someone to talk to &rarr;</a>
        </div>

        <div className="section">
          <h2>The Invisible Exhaustion of Being a Homemaker</h2>
          <p>The work of running a home and managing a family does not end. There is no clock-out. There is no commute home where the day stops. There is no performance review that acknowledges the thousand things managed invisibly. The labour is real &mdash; physical, emotional, logistical &mdash; and it is almost entirely uncounted.</p>
          <p>The emotional labour component is particularly draining. Managing the emotional temperature of the household. Absorbing the stress that comes in from outside. Being the person everyone brings their problems to without having a person to bring yours to. This is not invisible to you. It is simply invisible to everyone around you.</p>
        </div>

        <div className="section">
          <h2>The Specific Loneliness of Homemaker Life</h2>
          <p>Adult conversation deficit is real. Most of your day is spent with children, household tasks, and the occasional errand. The conversations you have are not the kind that fill the adult part of you &mdash; the part that has thoughts and opinions and a perspective on the world beyond the domestic sphere.</p>
          <p>The comparison with working women can feel acute, even when you do not intend it. They have colleagues. They leave the house. They have a professional identity. This is not to say working is better or worse than homemaking &mdash; it is to acknowledge that homemaking involves specific losses that are rarely named, and the loneliness that results is real and deserves support.</p>
          <p>In joint families, the dynamic is more complex. You may be surrounded by people all day and still fundamentally alone in your inner life &mdash; because the family structure does not create space for individual emotional needs, especially for the woman who is there to maintain the household.</p>
        </div>

        <div className="section">
          <h2>Why Homemakers in India Hesitate to Seek Support</h2>
          <p>Three things stop most homemakers from reaching out:</p>
          <ul>
            <li>&ldquo;Others have it worse.&rdquo; The comparison logic that says your struggle is not legitimate because it is not extreme enough.</li>
            <li>&ldquo;My husband provides.&rdquo; The financial dependency frame that conflates being provided for with having your emotional needs met. These are separate things.</li>
            <li>&ldquo;What would people think?&rdquo; The social risk of being seen to struggle &mdash; which might be interpreted as ingratitude or instability by family and community.</li>
          </ul>
          <p>None of these are reasons not to seek support. They are reasons to seek it anonymously.</p>
        </div>

        <div className="section">
          <h2>What LeanOn Offers</h2>
          <p>A space that is entirely yours. Where you are not a wife or a mother or a daughter-in-law. Just a person, with thoughts and feelings and a need to be heard. The listener has no connection to your family. Nothing you say will reach them. You can say everything you manage in silence every day &mdash; and be heard by someone who has no agenda except to understand.</p>
          <p>Sessions are 15 minutes. You can find 15 minutes. During school drop-off. While the lunch is on the stove. After everyone has gone to bed. This is not a major commitment &mdash; it is a small space that is entirely yours.</p>
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
          <h2>You are allowed to need someone too.</h2>
          <p>Anonymous. Private. Your space. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/single-parent-india">Single parent India &rarr;</a>
            <a href="/divorce-support-india">Divorce support &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/get-it-off-your-chest-india">Get it off your chest &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
