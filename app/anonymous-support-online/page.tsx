import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anonymous Emotional Support Online India | LeanOn',
  description: 'Get anonymous emotional support online in India. No name required, no judgement, no records. Real peer listeners available 24/7 on LeanOn.',
  keywords: ['anonymous emotional support online india', 'anonymous support india', 'anonymous peer support', 'anonymous chat india', 'emotional support anonymously'],
  alternates: { canonical: 'https://www.leanon.app/anonymous-support-online' },
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:18px;font-weight:800;margin-bottom:12px;}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
`

export default function AnonymousSupportPage() {
  return (
    <>
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{height:48}} /></a>
        <a href="/auth"><button className="btn" style={{fontSize:13,padding:'8px 20px'}}>Try free</button></a>
      </nav>
      <div className="page">
        <a href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:700,color:'var(--gray)',marginBottom:28}}>← Back</a>
        <h1>Anonymous Emotional Support Online — India</h1>
        <p className="lead">Sometimes you need to talk to someone without anyone knowing it was you. LeanOn is built for exactly that — anonymous peer emotional support, available any time you need it.</p>

        <div className="disclaimer">
          LeanOn provides peer emotional support, not professional therapy or clinical treatment. If you need clinical mental health care, please consult a licensed professional.
        </div>

        <div className="card">
          <h2>How LeanOn protects your anonymity</h2>
          <p>You sign up with just your mobile number — no full name, no email, no social login. You can use a first name or even a nickname. Your sessions are private and never shared. We don't sell your data or use your conversations for advertising.</p>
          <p>For people in joint families, shared workspaces, or small towns where privacy is especially important — LeanOn's text-first approach means you can talk without anyone hearing. No voice by default. Full control in your hands.</p>
        </div>

        <div className="card">
          <h2>Why anonymous support works</h2>
          <p>Research on mental health helplines and peer support platforms consistently shows that anonymity increases honest disclosure. When you know your words won't be traced back to you, you can say what you actually feel — not what you think is appropriate.</p>
          <p>LeanOn listeners are trained to create a non-judgmental space where you can be completely honest. They won't tell your family, your employer, or your doctor. What you share stays between you and your listener.</p>
        </div>

        <div className="card">
          <h2>Who uses anonymous support on LeanOn</h2>
          <p>People across India use LeanOn anonymously for loneliness, relationship struggles, workplace stress, burnout, grief, and anxiety. Many live in joint families where private conversations are difficult. Others work in high-pressure environments where admitting struggle feels risky. Some simply need to say things they can't say to anyone they know.</p>
          <p>You don't need a reason. You just need a moment to breathe and be heard.</p>
        </div>

        <div className="cta">
          <h2>Talk anonymously — free today</h2>
          <p>Your first 5 minutes are completely free. No name, no judgement.</p>
          <a href="/browse"><button className="btn">Start anonymously →</button></a>
        </div>
      </div>
    </>
  )
}
