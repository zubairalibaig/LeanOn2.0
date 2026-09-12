import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Quarter Life Crisis India — Feeling Lost in Your 20s? | LeanOn',
  description: 'You\'re in your 20s. It\'s supposed to be the best time of your life. So why does it feel like drowning? Talk to someone who gets it. From ₹160.',
  keywords: [
    'quarter life crisis india', '20s anxiety india', 'quarter life crisis meaning',
    'what to do with my life india', 'lost in your 20s india',
    'life direction india', 'feeling lost 20s india', 'early 20s confusion india',
  ],
  alternates: { canonical: 'https://www.leanon.app/quarter-life-crisis-india', languages: { 'en-IN': 'https://www.leanon.app/quarter-life-crisis-india' } },
  openGraph: {
    title: 'Quarter Life Crisis India — Feeling Lost in Your 20s? | LeanOn',
    description: 'You\'re in your 20s. It\'s supposed to be the best time of your life. So why does it feel like drowning? Talk to someone who gets it. From ₹160.',
    url: 'https://www.leanon.app/quarter-life-crisis-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Quarter Life Crisis India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is quarter life crisis a real thing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Research by Arnett, Oliver, and others confirms that the late teens to mid-20s is a period of intense identity formation and instability &mdash; what Arnett called "emerging adulthood." The quarter life crisis is the distress that accompanies this period when external expectations, internal confusion, and comparison pressure converge. It is well documented and affects a significant proportion of young adults globally.' },
    },
    {
      '@type': 'Question',
      name: 'Am I depressed or just in a quarter life crisis?',
      acceptedAnswer: { '@type': 'Answer', text: 'They can overlap. A quarter life crisis is characterised by identity confusion, comparison anxiety, feeling stuck or directionless, and dissatisfaction with life trajectory. Depression involves persistent low mood, inability to feel pleasure, changes in sleep and appetite, and other clinical symptoms that persist over weeks. If your symptoms persist and feel like more than confusion and comparison anxiety, speak to a professional. For the processing and conversation side of a quarter life crisis, peer support is appropriate.' },
    },
    {
      '@type': 'Question',
      name: 'Who do I talk to about feeling lost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not your parents &mdash; they are often invested in the direction you took and will feel defensive. Not most friends &mdash; they are in the same comparison dynamic and conversations often spiral into competitive anxiety. A LeanOn peer listener is a clean space: they have no stake in your trajectory, no opinion about the choices you have made, no investment in a particular outcome. They can hold the confusion without trying to resolve it too quickly.' },
    },
    {
      '@type': 'Question',
      name: 'Is peer support helpful for this?',
      acceptedAnswer: { '@type': 'Answer', text: 'Very. The quarter life crisis is not primarily a planning problem &mdash; it is a processing problem. The confusion is emotional and existential, not logistical. What helps is being heard in the confusion, having someone hold space for the uncertainty without rushing to answers, and finding that you are not uniquely broken for feeling this way. A peer listener who has been through their own version of this is particularly effective.' },
    },
    {
      '@type': 'Question',
      name: 'How is this different from therapy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Therapy involves clinical assessment and structured treatment. Peer support involves being heard and supported by someone with lived experience. For a quarter life crisis &mdash; which is a developmental challenge rather than a clinical condition &mdash; peer support is often more immediately useful. It is also accessible: no waiting list, no ₹2,000 per session, available when you need it.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Quarter Life Crisis India', item: 'https://www.leanon.app/quarter-life-crisis-india' },
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

export default function QuarterLifeCrisisIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Quarter Life Crisis India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Quarter Life Crisis &middot; India &middot; You&apos;re Not Alone</p>
          <h1>Quarter life crisis is real. Being 25 and <em>completely lost</em> is more common than anyone admits.</h1>
          <p className="lead">You&apos;re comparing your life to everyone else&apos;s highlight reel. You have a degree but not a direction. You have a job but not a purpose. Your parents expect one thing. Your peers are doing another. And you don&apos;t know what you want.</p>
          <a href="/browse" className="cta-hero">Talk to someone who gets it &rarr;</a>
        </div>

        <div className="section">
          <h2>What a Quarter Life Crisis Actually Is</h2>
          <p>The 20s are, developmentally, a period of intense identity formation. Researcher Jeffrey Arnett calls this &ldquo;emerging adulthood&rdquo; &mdash; a distinct life phase characterised by instability, self-focus, exploration, and the feeling of being in-between. You have left the structures of school and family but have not yet formed stable adult identities.</p>
          <p>The quarter life crisis is the distress that arises when this already-turbulent period is amplified by external expectations and internal pressure. Career confusion, relationship uncertainty, comparison anxiety, the gap between who you expected to be and who you are &mdash; these converge in a feeling that something is fundamentally wrong.</p>
          <p>It is not. You are in the middle of a normal but difficult developmental process. The confusion is appropriate. The uncertainty is appropriate. What is not appropriate is facing it alone and in silence.</p>
        </div>

        <div className="section">
          <h2>Signs You Are in One</h2>
          <ul>
            <li>Feeling stuck, even though externally everything looks fine</li>
            <li>Constantly comparing your trajectory to peers and feeling behind</li>
            <li>Anxiety about being in the wrong career, the wrong city, the wrong relationship</li>
            <li>Switching jobs, directions, or plans repeatedly without finding what sticks</li>
            <li>A nagging feeling of disconnection from your own life &mdash; like you are living someone else&apos;s script</li>
            <li>Difficulty answering the question &ldquo;what do you want?&rdquo;</li>
          </ul>
        </div>

        <div className="section">
          <h2>Why It Is Particularly Intense in India</h2>
          <p>Indian 20-somethings face a specific convergence of pressures:</p>
          <h3>Marriage pressure alongside career uncertainty</h3>
          <p>In most Indian families, the 20s are simultaneously the time to establish a career AND to be considered for marriage. These two tracks create contradictory demands on identity &mdash; and create enormous anxiety when either is not going to plan.</p>
          <h3>First-generation professionals</h3>
          <p>A significant portion of India&apos;s current 20-something generation is the first in their family to enter professional-class careers. There is no map. Nobody at home understands the landscape. The imposter syndrome is structurally baked in.</p>
          <h3>Social media comparison culture</h3>
          <p>Instagram and LinkedIn make everyone else&apos;s life look like a success story, in real time. The comparison is constant, automatic, and almost never fair &mdash; you are comparing your messy inside to everyone else&apos;s curated outside.</p>
        </div>

        <div className="section">
          <h2>Why Talking Helps More Than Planning</h2>
          <p>The instinct when you feel lost is to plan harder &mdash; to make a spreadsheet, to research options, to find the right decision. But the quarter life crisis is not a planning problem. It is a processing problem. The confusion is emotional and existential, and it does not resolve through better planning.</p>
          <p>What actually helps is being heard in the confusion. Having someone hold space for the uncertainty without rushing to answers. Finding that you are not uniquely broken for feeling this way. The processing &mdash; talking through what you are feeling, what you actually want, what you are afraid of &mdash; often produces more clarity than any amount of planning.</p>
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
          <h2>You are not the only one feeling lost in your 20s.</h2>
          <p>Talk to someone who has been through it. Anonymous. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/existential-crisis-india">Existential crisis &rarr;</a>
            <a href="/midlife-crisis-india">Midlife crisis India &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
