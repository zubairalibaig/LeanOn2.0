import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online Emotional Support India | Talk to a Peer Listener | LeanOn',
  description: 'Get online emotional support in India. Talk to verified peer listeners who have lived through what you\'re facing. Available 24/7, anonymous, instant access.',
  keywords: ['online emotional support india', 'emotional support online india', 'peer emotional support india', 'talk to someone online india'],
  alternates: { canonical: 'https://www.leanon.app/online-emotional-support-india' },
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
  .topics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px;}
  .topic{background:white;border:1.5px solid var(--border);border-radius:14px;padding:14px;text-align:center;font-size:13px;font-weight:700;color:var(--navy);}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
  @media(max-width:480px){.topics-grid{grid-template-columns:1fr 1fr;}}
`

export default function OnlineEmotionalSupportIndiaPage() {
  return (
    <>
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{height:48}} /></a>
        <a href="/auth"><button className="btn" style={{fontSize:13,padding:'8px 20px'}}>Try now</button></a>
      </nav>
      <div className="page">
        <a href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:700,color:'var(--gray)',marginBottom:28}}>← Back</a>
        <h1>Online Emotional Support India — LeanOn</h1>
        <p className="lead">India needs more ways to get emotional support — not just in metros, not just for those who can afford private therapy. LeanOn makes peer emotional support accessible, affordable, and available everywhere in India, 24/7.</p>

        <div className="disclaimer">
          LeanOn provides peer emotional support, not professional therapy or clinical treatment. If you need clinical mental health care, please consult a licensed professional.
        </div>

        <div className="card">
          <h2>What is online emotional support?</h2>
          <p>Online emotional support is a structured conversation with a trained peer listener who has personal experience with what you&apos;re going through. Unlike advice-giving or prescribing, peer emotional support focuses on active listening, empathy, and helping you feel genuinely heard.</p>
          <p>On LeanOn, you can connect with listeners who have personally experienced loneliness, anxiety, burnout, grief, relationship breakdowns, and more. Their understanding comes from lived experience, not a textbook.</p>
        </div>

        <div style={{marginBottom:24}}>
          <p style={{fontSize:16,fontWeight:800,color:'var(--navy)',marginBottom:14}}>Topics available on LeanOn</p>
          <div className="topics-grid">
            {['Loneliness 🌙','Anxiety 😰','Burnout 🔥','Grief 🌿','Breakup 💔','Career 🧭','Students 📚','LGBTQ+ 🌈','Parenting 👶','Startup 🚀','Relationships 💬','Just talk ☕'].map(t => (
              <div key={t} className="topic">{t}</div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Built for India&apos;s unique needs</h2>
          <p>India has unique emotional support needs: the pressure of joint family expectations, the stigma around mental health, the cost barrier to professional help, and the privacy challenges of living in shared spaces. LeanOn is designed with all of this in mind.</p>
          <p>Text-first conversations for privacy. OTP sign-up — no full name required. Support in 12 Indian languages. UPI payments. Listeners from across India who understand regional and cultural context.</p>
        </div>

        <div className="cta">
          <h2>Start a session today</h2>
          <p>Browse peer listeners by topic. Available 24/7.</p>
          <a href="/browse"><button className="btn">Browse listeners →</button></a>
        </div>
      </div>
    </>
  )
}
