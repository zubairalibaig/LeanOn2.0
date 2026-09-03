import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why LeanOn? Peer Emotional Support vs Therapy | India',
  description: 'Why choose LeanOn over therapy? Discover the benefits of peer emotional support — affordable, instant, anonymous, available 24/7 across India.',
  keywords: ['why leanon', 'leanon vs therapy', 'leanon peer support india', 'peer support benefits india', 'alternative to therapy india'],
  alternates: { canonical: 'https://www.leanon.app/why-leanon' },
  openGraph: { title: 'Why LeanOn? Peer Emotional Support vs Therapy', description: 'The case for peer support over therapy in India.', url: 'https://www.leanon.app/why-leanon' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why LeanOn? The Case for Peer Support Over Therapy',
  author: { '@type': 'Organization', name: 'LeanOn Editorial Team' },
  publisher: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
  datePublished: '2026-01-01',
  dateModified: '2026-05-01',
  mainEntityOfPage: 'https://www.leanon.app/why-leanon',
  description: 'Why peer emotional support is the right choice for millions in India who need someone to talk to but cannot access or afford professional therapy.',
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;color:var(--navy);line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:18px;font-weight:800;margin-bottom:12px;}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;}
  .compare-col{background:white;border:1.5px solid var(--border);border-radius:16px;padding:18px;}
  .compare-col.leanon{border-color:var(--teal);background:rgba(26,143,160,0.04);}
  .compare-col h3{font-size:14px;font-weight:800;margin-bottom:10px;}
  .compare-col.leanon h3{color:var(--teal);}
  .compare-col li{font-size:13px;color:var(--gray);margin-bottom:6px;list-style:none;padding-left:4px;line-height:1.5;}
  .compare-col.leanon li::before{content:"✓ ";color:var(--teal);font-weight:800;}
  .compare-col.other li::before{content:"✗ ";color:#C7C7CC;font-weight:800;}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
  @media(max-width:640px){.compare-grid{grid-template-columns:1fr;}}
`

export default function WhyLeanOnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{height:48}} /></a>
        <a href="/auth"><button className="btn" style={{fontSize:13,padding:'8px 20px'}}>Try now</button></a>
      </nav>
      <div className="page">
        <a href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:700,color:'var(--gray)',marginBottom:28}}>← Back</a>
        <h1>Why LeanOn? The Case for Peer Emotional Support</h1>
        <p className="lead">Millions of people in India need someone to talk to right now — but therapy is expensive, stigmatized, and requires a scheduled appointment. LeanOn exists because emotional support shouldn't have a waiting list.</p>

        <div className="disclaimer">
          <strong>Important:</strong> LeanOn provides peer emotional support, not professional therapy or clinical treatment. If you need clinical mental health care, please consult a licensed mental health professional.
        </div>

        <div className="compare-grid">
          <div className="compare-col leanon">
            <h3>LeanOn Peer Support</h3>
            <ul>
              <li>Available 24/7 — even at 2 AM</li>
              <li>From ₹160 for 15 minutes</li>
              <li>No appointment needed</li>
              <li>Completely anonymous</li>
              <li>Real humans with lived experience</li>
              <li>No stigma, no clinical label</li>
              <li>Start in under 60 seconds</li>
            </ul>
          </div>
          <div className="compare-col other">
            <h3>Traditional Therapy</h3>
            <ul>
              <li>Limited hours, no late-night access</li>
              <li>₹1,500–₹5,000 per session</li>
              <li>Requires weeks of scheduling</li>
              <li>Your name and details on record</li>
              <li>Clinical framework, diagnoses</li>
              <li>Social stigma in many families</li>
              <li>Weeks of onboarding paperwork</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2>Peer support fills a real gap</h2>
          <p>Not every emotional struggle requires clinical intervention. Loneliness, relationship stress, work burnout, grief, and anxiety are things that a trusted human with lived experience can support you through — without the formality of a clinical setting.</p>
          <p>Research shows that peer support reduces isolation, improves coping, and provides the sense of being understood that no prescription can replicate. LeanOn's listeners have been through what you're going through. That's their qualification.</p>
        </div>

        <div className="card">
          <h2>Accessible for India</h2>
          <p>India has 1 psychologist per 100,000 people. Therapy costs 5–20x what most working-class Indians can afford monthly. Joint family privacy concerns mean many people cannot even make a call at home without being heard.</p>
          <p>LeanOn is designed for India: text-first for privacy, OTP sign-up with no name required, UPI payments, 12 Indian languages, and pricing that doesn't sting.</p>
        </div>

        <div className="card">
          <h2>When LeanOn is right for you</h2>
          <p>LeanOn works best when you need emotional connection, a non-judgmental ear, or someone who truly understands your specific situation through lived experience. It's the right choice for day-to-day emotional struggles, loneliness, processing difficult feelings, and getting through a hard night.</p>
          <p>If you are experiencing a mental health crisis, thoughts of self-harm, or symptoms that significantly impair daily functioning — please also consult a licensed mental health professional. Our listeners can refer you to appropriate resources.</p>
        </div>

        <div className="cta">
          <h2>Try LeanOn today</h2>
          <p>Available 24/7. No card, no commitment.</p>
          <a href="/browse"><button className="btn">Browse listeners →</button></a>
        </div>
      </div>
    </>
  )
}
