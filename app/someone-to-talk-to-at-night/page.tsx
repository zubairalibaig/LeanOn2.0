import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Need Someone to Talk To at Night? LeanOn Is Available 24/7',
  description: 'Feeling alone at night in India? LeanOn connects you with real peer listeners available 24/7 — even at 2 AM. Anonymous, affordable, and genuinely human.',
  keywords: ['someone to talk to at night', 'midnight support india', 'night anxiety india', 'lonely at night india', 'talk to someone 2am india', 'late night emotional support'],
  alternates: { canonical: 'https://www.leanon.app/someone-to-talk-to-at-night' },
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
  .crisis-box{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:16px;padding:20px;margin-bottom:24px;}
  .crisis-box p{font-size:14px;color:#7A2020;line-height:1.65;font-weight:600;}
  .crisis-box a{color:#C0392B;font-weight:800;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
`

export default function SomeoneTalkToAtNightPage() {
  return (
    <>
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{height:48}} /></a>
        <a href="/auth"><button className="btn" style={{fontSize:13,padding:'8px 20px'}}>Try free</button></a>
      </nav>
      <div className="page">
        <a href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:700,color:'var(--gray)',marginBottom:28}}>← Back</a>
        <h1>Someone to Talk To at Night — LeanOn Is Here 24/7</h1>
        <p className="lead">It&apos;s 1 AM and you can&apos;t sleep. Your thoughts are spiralling. Everyone you know is asleep, and calling someone feels like too much. LeanOn is here for exactly this moment.</p>

        <div className="disclaimer">
          LeanOn provides peer emotional support, not professional therapy or clinical treatment. If you need clinical mental health care, please consult a licensed professional.
        </div>

        <div className="card">
          <h2>Why nights feel harder</h2>
          <p>Night anxiety is real and common. When there&apos;s no distraction, no work, no noise — the thoughts you&apos;ve been pushing down all day come flooding in. Loneliness, regrets, fears about the future. Everything feels heavier at 2 AM.</p>
          <p>In India, with joint families and shared spaces, there&apos;s often nowhere private to process these feelings. You can&apos;t call a friend at midnight without alarming them. Therapists aren&apos;t available at 3 AM. LeanOn fills that gap.</p>
        </div>

        <div className="card">
          <h2>Real people available right now</h2>
          <p>LeanOn has peer listeners available across all time zones and working through the night shift. Our listeners are real people — many of them are night owls themselves, or have been through dark nights of their own. They understand what it feels like to be alone with heavy thoughts.</p>
          <p>You can text (so no one hears) or use voice if you need to hear a calm voice. Start a free 5-minute session now — no top-up, no scheduling, no waiting room.</p>
        </div>

        <div className="card">
          <h2>You are not alone in this</h2>
          <p>Millions of people in India lie awake at night with the same feelings. The loneliness that comes at night is one of the most common and least talked-about human experiences. There is no shame in needing someone to talk to.</p>
          <p>LeanOn&apos;s listeners have been through dark nights themselves. That&apos;s not a marketing line — it&apos;s our selection criteria. Only people with real lived experience are approved to listen on our platform.</p>
        </div>

        <div className="crisis-box">
          <p>🆘 If you are having thoughts of self-harm or are in crisis right now, please call:</p>
          <p><strong><a href="tel:08046110007">NIMHANS: 080-46110007</a></strong> (free, 24/7) · <strong><a href="tel:14416">Tele-MANAS: 14416</a></strong> (free, Govt of India)</p>
        </div>

        <div className="cta">
          <h2>Someone is here right now</h2>
          <p>Free first session. No appointment, no judgement.</p>
          <a href="/browse"><button className="btn">Find a listener →</button></a>
        </div>
      </div>
    </>
  )
}
