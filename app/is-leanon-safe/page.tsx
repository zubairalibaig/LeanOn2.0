import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LeanOn Safety & Privacy: What Users Should Know',
  description: 'Learn how LeanOn handles phone OTP sign-in, display names, listener screening, automated safety moderation, reporting, data deletion and crisis boundaries.',
  keywords: ['is leanon safe', 'leanon privacy', 'leanon anonymity', 'leanon safety', 'peer support safety india'],
  alternates: { canonical: 'https://www.leanon.app/is-leanon-safe' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is LeanOn Safe? Privacy, Anonymity & Trust',
  author: { '@type': 'Organization', name: 'LeanOn Editorial Team' },
  publisher: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
  datePublished: '2026-01-01',
  dateModified: '2026-05-01',
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
  .safety-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .safety-item{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px;}
  .safety-icon{font-size:28px;margin-bottom:8px;}
  .safety-title{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .safety-desc{font-size:12px;color:var(--gray);line-height:1.55;}
  .crisis-box{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:16px;padding:20px;margin-bottom:24px;}
  .crisis-box h2{font-size:16px;font-weight:800;color:#7A2020;margin-bottom:10px;}
  .crisis-box p{font-size:14px;color:#7A2020;line-height:1.65;}
  .crisis-box a{color:#C0392B;font-weight:800;}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
  @media(max-width:640px){.safety-grid{grid-template-columns:1fr;}}
`

export default function IsLeanOnSafePage() {
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
        <h1>Is LeanOn Safe? Privacy, Anonymity & Trust</h1>
        <p className="lead">This page explains LeanOn’s current privacy and safety approach in plain language. No online service can promise complete anonymity or zero risk, so read the details and decide what you are comfortable sharing.</p>

        <div className="disclaimer">
          LeanOn provides peer emotional support, not professional therapy or clinical treatment. If you need clinical mental health care, please consult a licensed professional.
        </div>

        <div className="safety-grid">
          {[
            { icon: '🔒', title: 'Display-name sign-up', desc: 'Use phone OTP sign-in without an email or full legal name; choose what display name and personal details to share.' },
            { icon: '🤫', title: 'Privacy with clear limits', desc: 'Text messages are not stored after a session by default; automated safety moderation may process content and flagged content may be reviewed. See the Privacy Policy.' },
            { icon: '✓', title: 'Screened listeners', desc: 'Applicants are identity-verified and reviewed for lived experience, listening, boundaries and referral awareness before approval.' },
            { icon: '🚫', title: 'Report & block', desc: 'Use the in-app reporting and blocking controls to flag concerns; the team reviews reports and may take action.' },
            { icon: '🗑️', title: 'Data deletion', desc: 'You can request full account and data deletion at any time via our support channel.' },
            { icon: '📵', title: 'No data sold for ads', desc: 'LeanOn says it does not sell user data. Service-provider processing and other details are explained in the Privacy Policy.' },
          ].map((s, i) => (
            <div key={i} className="safety-item">
              <div className="safety-icon">{s.icon}</div>
              <div className="safety-title">{s.title}</div>
              <div className="safety-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Our listener verification process</h2>
          <p>Every listener on LeanOn is a real person who has applied, shared their lived experience, and been approved by our team. We check for empathy, genuine experience, and adherence to our Code of Conduct. Listeners who violate our terms are removed immediately.</p>
          <p>Before going live, every applicant verifies their identity with a private camera selfie and answers screening questions on active listening, boundaries, crisis referral and our Code of Conduct. Their answers are reviewed alongside the rest of their application.</p>
        </div>

        <div className="crisis-box">
          <h2>🆘 Crisis resources</h2>
          <p>If you or someone you know is in crisis or having thoughts of self-harm, please contact:</p>
          <p><strong><a href="tel:08046110007">NIMHANS: 080-46110007</a></strong> (free, 24/7)</p>
          <p><strong><a href="tel:14416">Tele-MANAS: 14416</a></strong> (free, Government of India, 24/7)</p>
        </div>

        <div className="cta">
          <h2>Make an informed choice</h2>
          <p>Browse profiles and choose what you share. A session starts when an available listener accepts; availability varies. LeanOn is not a crisis service.</p>
          <a href="/browse"><button className="btn">Browse listeners →</button></a>
        </div>
      </div>
    </>
  )
}
