import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Midlife Crisis India — 40s Don\'t Have to Feel Like a Dead End | LeanOn',
  description: 'Feeling like you\'ve taken the wrong turn somewhere in your 40s? Talk to someone who\'s been through it. Real peer support from ₹160.',
  keywords: [
    'midlife crisis india', '40s anxiety india', 'midlife meaning india',
    'midlife crisis symptoms india', 'feeling stuck 40s india',
    'career plateau india', 'midlife identity crisis india',
  ],
  alternates: { canonical: 'https://www.leanon.app/midlife-crisis-india', languages: { 'en-IN': 'https://www.leanon.app/midlife-crisis-india' } },
  openGraph: {
    title: 'Midlife Crisis India — 40s Don\'t Have to Feel Like a Dead End | LeanOn',
    description: 'Feeling like you\'ve taken the wrong turn somewhere in your 40s? Talk to someone who\'s been through it. Real peer support from ₹160.',
    url: 'https://www.leanon.app/midlife-crisis-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Midlife Crisis India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a midlife crisis?',
      acceptedAnswer: { '@type': 'Answer', text: 'A midlife crisis is a period of identity questioning that often occurs in the 40s or 50s, when people reassess their choices &mdash; career, relationships, personal goals &mdash; against their original expectations. It is often triggered by a specific event (a health scare, a child leaving home, a career ceiling) but reflects a broader reckoning with time, meaning, and unlived possibilities.' },
    },
    {
      '@type': 'Question',
      name: 'Is it a real thing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, though it does not always look like the cliche of a sports car and a younger partner. Research shows that life satisfaction does follow a U-curve &mdash; it dips in middle age before recovering &mdash; across many cultures and demographics. The midlife reckoning is a real psychological phenomenon, even when it manifests quietly as a sense of unease rather than dramatic change.' },
    },
    {
      '@type': 'Question',
      name: 'Who do I talk to?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not your children &mdash; they are too close and too young to hold this. Not your parents &mdash; they often feel threatened by the questioning. Not most colleagues &mdash; professional risk. A peer listener on LeanOn is specifically suited to this: they have no stake in your choices, no investment in how it turns out, and often have navigated their own version of this reckoning.' },
    },
    {
      '@type': 'Question',
      name: 'Is this depression?',
      acceptedAnswer: { '@type': 'Answer', text: 'A midlife reckoning and depression can overlap. If you are experiencing persistent low mood, inability to feel pleasure, significant sleep or appetite changes, or thoughts of self-harm, please see a professional. If you are experiencing questioning, restlessness, and a sense of disconnection that does not rise to clinical symptoms, peer support is appropriate &mdash; and often very helpful.' },
    },
    {
      '@type': 'Question',
      name: 'How is peer support different from therapy?',
      acceptedAnswer: { '@type': 'Answer', text: 'Therapy provides clinical assessment and structured treatment. Peer support provides someone to talk to who has been through their own version of what you are navigating &mdash; and who can hold space for the confusion without rushing to solutions. For midlife questioning, the lived-experience quality of peer support is often more immediately useful than clinical frameworks.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Midlife Crisis India', item: 'https://www.leanon.app/midlife-crisis-india' },
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

export default function MidlifeCrisisIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Midlife Crisis India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Midlife &middot; India &middot; Not a Dead End</p>
          <h1>The midlife feeling: you&apos;ve done everything right. <em>So why does something feel wrong?</em></h1>
          <p className="lead">Career, family, responsibilities &mdash; you&apos;ve built it all. And somewhere in the building, something got left behind. Talking about it doesn&apos;t mean your life is falling apart. It means you&apos;re human.</p>
          <a href="/browse" className="cta-hero">Talk to someone &rarr;</a>
        </div>

        <div className="section">
          <h2>What Midlife Crisis Feels Like in India</h2>
          <p>The Indian version of midlife questioning has its own shape. It arrives alongside specific pressures that are different from Western contexts:</p>
          <ul>
            <li><strong>Career plateau:</strong> You have reached a certain level and the next step is not obvious, not available, or not what you expected it to feel like.</li>
            <li><strong>Children growing up:</strong> The role you organised yourself around is changing. You are needed differently or less. The identity built around parenting is shifting.</li>
            <li><strong>Parents aging:</strong> The generation above you is beginning to need care. You are suddenly the person who is supposed to have answers.</li>
            <li><strong>Personal dreams deferred:</strong> The thing you wanted to do &mdash; the project, the change, the life you imagined &mdash; has been delayed long enough that it now feels like it will never happen.</li>
            <li><strong>Marriage becoming routine:</strong> Not bad, necessarily &mdash; but the early intensity is gone, and what is left is comfortable but not alive in the way it once was.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Why Indian Men and Women Experience It Differently</h2>
          <p>Indian women in their 40s often describe a specific kind of invisibility. After decades of being defined by their roles &mdash; as daughter, wife, mother &mdash; there is a moment when those roles are no longer demanding in the same way. Children are older. The family is established. And the question &ldquo;who am I outside of these roles?&rdquo; arrives without an obvious answer.</p>
          <p>Indian men in their 40s often describe the weight of accumulated financial responsibility alongside the beginning of professional diminishment. The career that was supposed to keep ascending has plateaued. The social identity built around achievement and providing is under pressure. The question of whether it was worth it arrives and there is no culturally acceptable space to ask it.</p>
          <p>These are not the same crisis. But both deserve a real conversation.</p>
        </div>

        <div className="section">
          <h2>Why People Don&apos;t Talk About It</h2>
          <p>Two forces silence midlife questioning in India: the sense of privilege and the sense of ingratitude. &ldquo;I have a stable job, a family, a house. Others have so much less. Who am I to be struggling?&rdquo; This logic is understandable and completely wrong. Suffering is not comparative. The fact that others have harder circumstances does not make your experience of feeling stuck or lost less real or less deserving of space.</p>
          <p>The second force is the cultural expectation that by middle age you should have the answers, not the questions. Admitting confusion, restlessness, or dissatisfaction in your 40s feels like failure. It should not. It is the opposite of failure &mdash; it is honest engagement with your one life.</p>
        </div>

        <div className="section">
          <h2>Why Peer Support Helps</h2>
          <p>Someone who has been through their own midlife reckoning &mdash; not a therapist with a clinical framework, but a real person who has navigated the same confusion &mdash; can hold this in a way that is specific and grounding. They do not panic at the questions. They do not rush to solutions. They have sat in the same uncertainty and come out with something, even if that something is simply a different relationship with the uncertainty.</p>
          <p>That is what LeanOn peer listeners offer for midlife conversations.</p>
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
          <h2>Your questions deserve a real conversation.</h2>
          <p>Peer support from someone who has been through it. Anonymous. From ₹160.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/existential-crisis-india">Existential crisis &rarr;</a>
            <a href="/quarter-life-crisis-india">Quarter life crisis &rarr;</a>
            <a href="/divorce-support-india">Divorce support &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
