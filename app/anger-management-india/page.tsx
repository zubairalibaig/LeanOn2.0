import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Anger Management India — Talk Before It Explodes | LeanOn',
  description: 'Anger building up? Sometimes talking it through before it erupts is all you need. Anonymous peer support from ₹160.',
  keywords: ['anger management india', 'anger issues india', 'panic attack support india', 'emotional regulation india', 'controlling anger india', 'anger counselling india'],
  alternates: { canonical: 'https://www.leanon.app/anger-management-india', languages: { 'en-IN': 'https://www.leanon.app/anger-management-india' } },
  openGraph: {
    title: 'Anger Management India — Talk Before It Explodes | LeanOn',
    description: 'Anger building up? Sometimes talking it through before it erupts is all you need. Anonymous peer support from ₹160.',
    url: 'https://www.leanon.app/anger-management-india',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does venting make anger worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unstructured venting — just releasing without reflection — can sometimes reinforce the anger. But talking through what is underneath the anger with someone who holds space and helps you slow down is different. Peer support is structured listening, not just venting — which is why it can help with anger rather than amplify it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is emotional regulation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional regulation is the ability to recognise, understand, and manage your emotional responses — not by suppressing them, but by processing them. Talking to someone who holds space and helps you slow down is one of the most effective ways to build this skill in real time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can peer support help with anger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — especially by helping you identify what is underneath the anger. Anger is almost always a secondary emotion. The primary emotion is usually fear, shame, or hurt. Talking through a situation with a listener who does not react to the anger helps you get to what is actually going on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I say something awful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners are trained to hold space without reactivity. They will not judge you for what you say in a session — that is the point. You can express the actual version of how you feel, not the acceptable summary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this anger management therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is peer support, not clinical anger management therapy. Clinical anger management is a structured programme delivered by a licensed professional. LeanOn provides a real human conversation — a space to process before the explosion, not a clinical intervention.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Anger Management India', item: 'https://www.leanon.app/anger-management-india' },
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
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
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
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
`

export default function AngerManagementIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Anger Management India</span>
        </nav>

        <div className="hero">
          <p className="tag">Anger · Emotional Regulation · India · From ₹160</p>
          <h1>Anger isn&apos;t the problem. <em>Carrying it alone is.</em></h1>
          <p className="lead">The build-up. The explosion. The regret. The cycle. Sometimes talking it through before it erupts — with someone who will not escalate — breaks the loop before it breaks something else.</p>
        </div>

        <div className="section">
          <h2>The Build-Up Cycle</h2>
          <p>Something happens. You cannot talk to anyone about it — they are part of the problem, or they will take sides, or you are embarrassed by how angry you feel. So it festers. Days pass. The original thing is still there, and now there are three more things on top of it. Then something small happens and everything explodes — and the explosion is usually disproportionate, because it is carrying months of build-up.</p>
          <p>Talking before the explosion does not eliminate the anger. It gives it somewhere to go. It reduces the pressure. It helps you understand what is actually underneath.</p>
        </div>

        <div className="section">
          <h2>What Is Underneath the Anger</h2>
          <p>Anger is almost never the primary emotion. Underneath it is almost always one of these:</p>
          <ul>
            <li><strong>Fear</strong> — of losing something, of not being enough, of a situation spiralling out of control</li>
            <li><strong>Shame</strong> — about something you did, about how you were treated, about your situation</li>
            <li><strong>Hurt</strong> — by someone who should have done better, by a situation that is not fair</li>
          </ul>
          <p>When you talk to a LeanOn listener, they are not managing your anger — they are helping you slow down enough to find what is actually there.</p>
        </div>

        <div className="section">
          <h2>Panic Attacks and Anger</h2>
          <p>Anger and panic are not opposites — they often overlap. The racing heart, the inability to think clearly, the physical intensity — these can accompany both states. If you have panic attacks, peer support can help you process the emotional content that triggers them and work through the aftermath when they happen.</p>
          <p>If you are having a panic attack right now, please reach out to <a href="tel:14416" style={{color:'var(--teal)',fontWeight:700}}>Tele-MANAS: 14416</a> or <a href="tel:08046110007" style={{color:'var(--teal)',fontWeight:700}}>NIMHANS: 080-46110007</a>.</p>
        </div>

        <div className="cta-card">
          <h2>Talk Before It Explodes</h2>
          <p>Anonymous peer support from ₹160. No judgment, available now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Does venting make anger worse?</div>
            <div className="faq-a">Unstructured venting can sometimes reinforce anger. But talking through what is underneath the anger with someone who helps you slow down is different. Peer support is structured listening, not just venting.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is emotional regulation?</div>
            <div className="faq-a">Emotional regulation is the ability to recognise, understand, and manage your emotional responses — not by suppressing them, but by processing them. Talking to someone who holds space is one of the most effective ways to build this skill in real time.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can peer support help with anger?</div>
            <div className="faq-a">Yes — especially by helping you identify what is underneath the anger. Anger is almost always a secondary emotion. Talking through a situation helps you get to what is actually going on.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I say something awful?</div>
            <div className="faq-a">LeanOn listeners are trained to hold space without reactivity. They will not judge you for what you say in a session. You can express the actual version of how you feel.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is this anger management therapy?</div>
            <div className="faq-a">No. LeanOn is peer support, not clinical anger management therapy. Clinical anger management is a structured programme by a licensed professional. LeanOn provides a real human conversation — a space to process before the explosion.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/stress-management-india" className="related-link">Stress Management</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/overthinking" className="related-link">Overthinking</a>
            <a href="/need-to-vent-right-now" className="related-link">Need to Vent</a>
            <a href="/just-had-a-fight" className="related-link">Just Had a Fight</a>
          </div>
        </div>
      </div>
    </>
  )
}
