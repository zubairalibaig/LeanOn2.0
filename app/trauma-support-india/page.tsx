import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Trauma Support India — Talk to Someone Real | LeanOn',
  description: 'Trauma stays in the body and the mind. Finding someone who listens without judgement is the first step. Peer support from ₹160.',
  keywords: ['trauma support india', 'PTSD support india', 'childhood trauma india', 'emotional abuse recovery india', 'trauma healing india', 'trauma counselling india', 'narcissistic abuse recovery india'],
  alternates: { canonical: 'https://www.leanon.app/trauma-support-india', languages: { 'en-IN': 'https://www.leanon.app/trauma-support-india' } },
  openGraph: {
    title: 'Trauma Support India — Talk to Someone Real | LeanOn',
    description: 'Trauma stays in the body and the mind. Finding someone who listens without judgement is the first step. Peer support from ₹160.',
    url: 'https://www.leanon.app/trauma-support-india',
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
      name: 'Is peer support appropriate for trauma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support can be helpful for the everyday weight of living with trauma history — reducing isolation, putting words to experiences, processing emotions. It is not appropriate as a replacement for clinical trauma therapy for severe PTSD or complex trauma. For clinical treatment, please see a licensed therapist. For the weight of carrying it day to day, peer support can help.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is peer support different from trauma therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trauma therapy is a clinical intervention using evidence-based methods like EMDR or trauma-focused CBT, delivered by a licensed therapist. Peer support is a human conversation — a space to be heard by someone who listens without judgment. Peer support does not treat trauma; it provides a safe space to process the weight of it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. First name only, no photo, no social account. What you share with a listener stays between you and them. Anonymity is especially important for trauma survivors who may not feel safe sharing with people in their lives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I get triggered during a session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can end a session at any time for any reason. If you feel overwhelmed during a session, tell your listener and they will follow your lead. If you are in acute distress, please call NIMHANS (080-46110007) or Tele-MANAS (14416).',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I see a professional instead?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'See a professional when you have symptoms of PTSD (flashbacks, nightmares, severe dissociation), when trauma is affecting your ability to function, or when you need structured clinical treatment. LeanOn will always point you toward professional help when that is the right path.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Trauma Support India', item: 'https://www.leanon.app/trauma-support-india' },
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
  .disclaimer-box{background:#FFF3E0;border:2px solid #FF9933;border-radius:16px;padding:20px 24px;margin-bottom:24px;}
  .disclaimer-box p{font-size:14px;color:#5A4020;line-height:1.7;font-weight:600;margin-bottom:8px;}
  .disclaimer-box p:last-child{margin-bottom:0;}
  .disclaimer-box a{color:#E87720;font-weight:800;}
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

export default function TraumaSupportIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Trauma Support India</span>
        </nav>

        <div className="disclaimer-box">
          <p>⚠️ <strong>Important:</strong> For crisis or psychiatric trauma treatment, please see a mental health professional or call <a href="tel:08046110007">NIMHANS: 080-46110007</a> or <a href="tel:14416">Tele-MANAS: 14416</a> (free · 24/7 · Govt of India).</p>
          <p>LeanOn is peer support, not clinical trauma therapy. If you are in acute distress or experiencing PTSD symptoms, please seek professional help first.</p>
        </div>

        <div className="hero">
          <p className="tag">Trauma Support · India · From ₹160</p>
          <h1>Trauma doesn&apos;t come with an on/off switch. <em>Sometimes you just need someone to sit with you in it.</em></h1>
          <p className="lead">Not a crisis. Not dramatic. Just the ongoing weight of something that happened — and the loneliness of carrying it in a world that expects you to be fine by now.</p>
        </div>

        <div className="section">
          <h2>What Peer Support Can Do</h2>
          <ul>
            <li><strong>Provide a non-judgmental space</strong> — to say the unsayable things without being looked at differently</li>
            <li><strong>Help you put words to things</strong> — naming what happened is often the beginning of processing it</li>
            <li><strong>Reduce isolation</strong> — the specific loneliness of carrying something you cannot talk about with people who know you</li>
            <li><strong>Be heard</strong> — without someone trying to fix you, explain it away, or rush you through it</li>
          </ul>
        </div>

        <div className="section">
          <h2>What Peer Support Cannot Do</h2>
          <ul>
            <li>Diagnose PTSD or other trauma-related conditions</li>
            <li>Provide clinical trauma treatment (EMDR, trauma-focused CBT, etc.)</li>
            <li>Replace therapy for severe or complex trauma</li>
            <li>Serve as a crisis response</li>
          </ul>
          <p>If any of the above is what you need, please see a qualified mental health professional. LeanOn will always say this honestly.</p>
        </div>

        <div className="section">
          <h2>Types of Trauma People Bring to LeanOn</h2>
          <ul>
            <li><strong>Childhood experiences</strong> — things that happened a long time ago that still show up in the present</li>
            <li><strong>Relationship abuse</strong> — emotional, verbal, or physical — the aftermath of leaving, or the complexity of still being in it</li>
            <li><strong>Loss and grief</strong> — the kind that does not fit neatly into a timeline</li>
            <li><strong>Betrayal</strong> — by someone you trusted deeply</li>
            <li><strong>Work trauma</strong> — a hostile workplace, a humiliating experience, the lasting effects of being treated badly professionally</li>
          </ul>
        </div>

        <div className="cta-card">
          <h2>You Don&apos;t Have to Carry It Alone</h2>
          <p>Peer support from ₹160. Anonymous, judgment-free, available now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is peer support appropriate for trauma?</div>
            <div className="faq-a">Peer support can be helpful for the everyday weight of living with trauma history — reducing isolation, putting words to experiences. It is not a replacement for clinical trauma therapy for severe PTSD. For clinical treatment, please see a licensed therapist.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is peer support different from trauma therapy?</div>
            <div className="faq-a">Trauma therapy is a clinical intervention using evidence-based methods like EMDR, delivered by a licensed therapist. Peer support is a human conversation — a space to be heard. Peer support does not treat trauma; it provides a safe space to process the weight of it.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it anonymous?</div>
            <div className="faq-a">Yes. First name only, no photo, no social account. What you share with a listener stays between you and them. Anonymity is especially important for trauma survivors who may not feel safe sharing with people in their lives.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I get triggered during a session?</div>
            <div className="faq-a">You can end a session at any time. If you feel overwhelmed, tell your listener and they will follow your lead. If you are in acute distress, please call NIMHANS (080-46110007) or Tele-MANAS (14416).</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">When should I see a professional instead?</div>
            <div className="faq-a">See a professional when you have symptoms of PTSD (flashbacks, nightmares, severe dissociation), when trauma is affecting your ability to function, or when you need structured clinical treatment. LeanOn will always point you toward professional help when that is the right path.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/support/childhood-trauma-india" className="related-link">Childhood Trauma</a>
            <a href="/i-need-professional-help-india" className="related-link">Need Professional Help</a>
            <a href="/peer-support" className="related-link">What Is Peer Support</a>
            <a href="/support/emotional-numbness" className="related-link">Emotional Numbness</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
          </div>
        </div>
      </div>
    </>
  )
}
