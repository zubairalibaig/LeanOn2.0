import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Stress Management India — Talk It Out with a Real Person | LeanOn',
  description: 'Overwhelmed by stress? Sometimes talking helps more than tips. Real peer listeners available from ₹160. Anonymous, judgment-free, available now.',
  keywords: ['stress management india', 'anxiety management india', 'how to deal with stress india', 'stress relief india', 'reduce stress india', 'coping with stress india'],
  alternates: { canonical: 'https://www.leanon.app/stress-management-india', languages: { 'en-IN': 'https://www.leanon.app/stress-management-india' } },
  openGraph: {
    title: 'Stress Management India — Talk It Out with a Real Person | LeanOn',
    description: 'Overwhelmed by stress? Sometimes talking helps more than tips. Real peer listeners available from ₹160. Anonymous, judgment-free, available now.',
    url: 'https://www.leanon.app/stress-management-india',
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
      name: 'Does talking about stress actually help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and more than most tips acknowledge. Talking about stress externalises the loop that plays in your head, reduces the physiological stress response, and gives you perspective. Bottling stress in amplifies it. Saying it out loud to someone who listens without judgment actively reduces its intensity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between venting and peer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Venting is releasing pressure. Peer support is doing that with someone who is trained to hold space and reflect — so the release has somewhere to go and you come away with perspective as well as relief. LeanOn peer support is structured venting with someone who has been there.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy is clinical treatment by a licensed professional — valuable for diagnosed conditions. Peer support is a real human conversation for everyday stress, from ₹160. No appointment, no waitlist, no stigma.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to someone at 2am?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are available 24/7 including late at night. Stress does not keep office hours — and many people find it most intense at night when there is nothing else to distract from it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a stress support session actually look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You tell your listener what is going on. They listen without interrupting. They reflect back what they hear. They ask questions that help you go deeper. You end the call with the stress still there, usually, but no longer carrying it alone — and often with more clarity about what is actually bothering you underneath the surface level.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Stress Management India', item: 'https://www.leanon.app/stress-management-india' },
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

export default function StressManagementIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Stress Management India</span>
        </nav>

        <div className="hero">
          <p className="tag">Stress Relief · India · From ₹160</p>
          <h1>Every &quot;stress management tips&quot; article tells you the same 5 things. <em>You already know them.</em></h1>
          <p className="lead">Breathe deeply. Exercise. Journal. Take a walk. What helps is being heard — by a real person who listens without turning it back to themselves or offering more advice you already have.</p>
        </div>

        <div className="section">
          <h2>Why Standard Stress Advice Falls Short</h2>
          <p>The standard tips — breathing exercises, journaling, mindfulness — are genuinely useful. The problem is not the advice. The problem is that they address stress as an individual problem when it is often a relational one.</p>
          <p>Stress does not just build up in your nervous system. It builds up in your isolation. The reason it gets heavier over time is often because there is nobody to carry any of it with you. The stress of a bad week at work, pressure from family, a relationship that is not working — these do not respond to journaling alone. They respond to being spoken out loud to someone who will not flinch.</p>
          <p>That is what talking does differently from every other stress management technique.</p>
        </div>

        <div className="section">
          <h2>What Stress Types LeanOn Listeners Cover</h2>
          <ul>
            <li><strong>Work stress</strong> — deadlines, managers, performance anxiety, the job that has consumed your evenings</li>
            <li><strong>Family stress</strong> — parent expectations, joint family friction, sibling dynamics, the weight of being the responsible one</li>
            <li><strong>Relationship stress</strong> — a partner who does not understand, communication that has broken down, the loneliness inside a relationship</li>
            <li><strong>Financial stress</strong> — the anxiety of not being where you thought you would be, debt, uncertainty</li>
            <li><strong>Exam and career stress</strong> — JEE, NEET, UPSC, the weight of a career decision that feels permanent</li>
          </ul>
        </div>

        <div className="cta-card">
          <h2>Talk to Someone — Not a Tips Article</h2>
          <p>Real peer listeners from ₹160. Anonymous, available now, no appointment needed.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Does talking about stress actually help?</div>
            <div className="faq-a">Yes. Talking externalises the loop in your head, reduces the physiological stress response, and gives you perspective. Bottling stress amplifies it. Saying it out loud to someone who listens without judgment actively reduces its intensity.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between venting and peer support?</div>
            <div className="faq-a">Venting is releasing pressure. Peer support is doing that with someone trained to hold space and reflect — so the release has somewhere to go and you come away with perspective as well as relief.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is this different from therapy?</div>
            <div className="faq-a">Therapy is clinical treatment by a licensed professional — valuable for diagnosed conditions. Peer support is a real human conversation for everyday stress, from ₹160. No appointment, no waitlist, no stigma.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I talk to someone at 2am?</div>
            <div className="faq-a">Yes. LeanOn listeners are available 24/7 including late at night. Stress does not keep office hours.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What does a stress support session actually look like?</div>
            <div className="faq-a">You tell your listener what is going on. They listen, reflect back what they hear, and ask questions that help you go deeper. You end the call with more clarity about what is actually bothering you underneath the surface.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/work-stress-india" className="related-link">Work Stress India</a>
            <a href="/support/overthinking" className="related-link">Overthinking Support</a>
            <a href="/feeling-overwhelmed-india" className="related-link">Feeling Overwhelmed</a>
            <a href="/anger-management-india" className="related-link">Anger Management</a>
          </div>
        </div>
      </div>
    </>
  )
}
