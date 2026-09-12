import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Existential Crisis India — What\'s the Point? You\'re Not Alone. | LeanOn',
  description: 'Questioning everything — your job, your relationships, your purpose? Existential crisis hits hard in India. Talk to someone real. From ₹160.',
  keywords: [
    'existential crisis india', 'what is the point india', 'meaning of life india',
    'identity crisis india', 'life purpose india', 'existential dread india',
    'why am I here india', 'questioning everything india',
  ],
  alternates: { canonical: 'https://www.leanon.app/existential-crisis-india', languages: { 'en-IN': 'https://www.leanon.app/existential-crisis-india' } },
  openGraph: {
    title: 'Existential Crisis India — What\'s the Point? You\'re Not Alone. | LeanOn',
    description: 'Questioning everything — your job, your relationships, your purpose? Existential crisis hits hard in India. Talk to someone real. From ₹160.',
    url: 'https://www.leanon.app/existential-crisis-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Existential Crisis India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is an existential crisis a mental illness?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. An existential crisis is a period of deep questioning about meaning, purpose, identity, and the nature of existence. It is a philosophical and psychological experience, not a clinical diagnosis. It can overlap with depression or anxiety disorders, but existential questioning itself is not a mental illness. It is a human experience &mdash; perhaps the most human of all.' },
    },
    {
      '@type': 'Question',
      name: 'What do I do during an existential crisis?',
      acceptedAnswer: { '@type': 'Answer', text: 'The instinct is to find an answer quickly &mdash; to resolve the question. This usually does not work. The questions are too large and too real. What actually helps is having someone who can hold the uncertainty with you &mdash; who does not panic at the questions, does not rush you toward premature resolution, and can sit in the openness without flinching. A peer listener trained in this is more useful here than an advisor or a planner.' },
    },
    {
      '@type': 'Question',
      name: 'Is peer support appropriate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, with some distinctions. If your existential questioning is accompanied by clinical symptoms &mdash; persistent depression, inability to function, suicidal thoughts &mdash; please see a professional. For the questioning itself &mdash; the &ldquo;what is the point&rdquo; feeling, the loss of meaning, the identity uncertainty &mdash; peer support is very appropriate. A listener who has been through their own existential questions can hold space in a way that clinical frameworks often cannot.' },
    },
    {
      '@type': 'Question',
      name: 'Will talking help?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not by answering the questions. But by reducing the isolation of carrying them. Existential crisis is particularly lonely because most people in your life will either panic, offer platitudes, or try to argue you out of the questions. A LeanOn listener will do none of these things. They will be with you in the questions. That alone changes the experience significantly.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. What you say stays in the session. No social risk, no consequences.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Existential Crisis India', item: 'https://www.leanon.app/existential-crisis-india' },
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

export default function ExistentialCrisisIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Existential Crisis India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Existential Crisis &middot; India &middot; You&apos;re Not Alone</p>
          <h1>What&apos;s the point? <em>That question is more common than anyone admits.</em></h1>
          <p className="lead">You&apos;re not broken. You&apos;re not ungrateful. You&apos;re asking one of the most human questions there is. And you deserve to say it out loud to someone who won&apos;t panic or lecture you.</p>
          <a href="/browse" className="cta-hero">Find someone to talk to &rarr;</a>
        </div>

        <div className="section">
          <h2>What an Existential Crisis Is</h2>
          <p>An existential crisis is a period of deep questioning about meaning, purpose, identity, and what makes any of it worthwhile. It is distinct from depression (though they can overlap) in that the primary experience is philosophical &mdash; questioning the nature and value of existence &mdash; rather than purely emotional.</p>
          <p>It can be triggered by a specific event: a loss, a transition, a success that felt emptier than expected, a brush with mortality. Or it can arrive without obvious cause &mdash; a gradual accumulation of questions that suddenly become impossible to suppress.</p>
          <p>What makes it particularly difficult is that the questions are real. &ldquo;What is the point?&rdquo; is not an irrational question. It is the question that honest engagement with existence eventually produces. The answer, if there is one, cannot be given by someone else &mdash; but the process of finding it is easier when you are not carrying it alone.</p>
        </div>

        <div className="section">
          <h2>Why It Hits Particularly Hard in Urban India</h2>
          <p>India is in the middle of a rapid modernisation that is breaking down old frameworks faster than new ones can replace them. For generations, the answer to &ldquo;what is the point?&rdquo; was provided by religion, family, caste, community. The meaning was given by structure.</p>
          <p>Urban India in 2026 is increasingly outside those structures. Religious frameworks feel less convincing to many educated urban Indians. Family structures have changed. Career and financial success were supposed to provide meaning &mdash; and they do not, or not for long, or not in the way expected.</p>
          <p>The result is a generation asking real existential questions without the cultural scaffolding that used to answer them. It is not a crisis of faith so much as a crisis of frameworks. And it is more common than the surface of Indian life suggests.</p>
        </div>

        <div className="section">
          <h2>Why You Can&apos;t Talk About This With Most People</h2>
          <p>Existential questioning scares people who have resolved it through faith or certainty &mdash; they feel their certainty threatened by your questioning. It scares people who have not resolved it &mdash; they are suppressing the same questions and yours pokes at what they are avoiding. And it produces platitudes from people who mean well but do not have capacity for the uncertainty:</p>
          <p>&ldquo;You just need to be grateful.&rdquo; &ldquo;Focus on what you have.&rdquo; &ldquo;Stop overthinking.&rdquo; &ldquo;It&apos;s a phase.&rdquo;</p>
          <p>These responses, however kindly intended, leave you more alone than before.</p>
        </div>

        <div className="section">
          <h2>Why a Peer Listener Helps</h2>
          <p>A LeanOn peer listener who has navigated their own existential questions can hold the uncertainty without flinching. They are not invested in a particular answer. They do not need you to resolve the questions quickly. They can be present with you in the questions &mdash; which is, for existential crises, the most valuable kind of support there is.</p>
          <p>You are not looking to be argued out of the questions. You are looking for someone to share the weight of them with. That is precisely what peer support offers.</p>
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
          <h2>The questions deserve a real conversation.</h2>
          <p>Someone who won&apos;t panic or lecture. Anonymous. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/quarter-life-crisis-india">Quarter life crisis &rarr;</a>
            <a href="/midlife-crisis-india">Midlife crisis &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/talk-therapy-india">Talk therapy &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
