import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feeling Lonely in India? Talk to Someone Who Understands | LeanOn',
  description: 'Feeling lonely in India? A conversation with a screened peer listener may offer human connection. LeanOn provides non-clinical peer support; availability depends on who is online, and it is not therapy or crisis care.',
  keywords: ['feeling lonely in india', 'loneliness india', 'i feel lonely india', 'lonely in india', 'loneliness support india', 'how to deal with loneliness india'],
  alternates: { canonical: 'https://www.leanon.app/feeling-lonely-in-india' },
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
  .quote{background:rgba(26,143,160,0.06);border-left:4px solid var(--teal);border-radius:0 16px 16px 0;padding:16px 20px;margin-bottom:20px;font-size:15px;font-style:italic;color:#2A4F60;line-height:1.7;}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
`

export default function FeelingLonelyInIndiaPage() {
  return (
    <>
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{height:48}} /></a>
        <a href="/talk?src=seo"><button className="btn" style={{fontSize:13,padding:'8px 20px'}}>Try now</button></a>
      </nav>
      <div className="page">
        <a href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:700,color:'var(--gray)',marginBottom:28}}>← Back</a>
        <h1>Feeling Lonely in India? You Are Not Alone</h1>
        <p className="lead">Loneliness can happen even when you live with family, work in a busy office or spend time around people. If you feel alone, you are not failing. There are different ways to seek connection, including talking with someone outside your usual circle.</p>

        <div className="disclaimer">
          LeanOn provides peer emotional support, not professional therapy or clinical treatment. If you need clinical mental health care, please consult a licensed professional.
        </div>

        <div className="card">
          <h2>Loneliness can happen even when people are around</h2>
          <p>You do not have to prove that your situation is serious to deserve a conversation. A peer-listener conversation is one non-clinical option; it may not be the right fit for everyone, and it does not replace professional care when needed.</p>
        </div>

        <div className="card">
          <h2>Why loneliness is so common in India right now</h2>
          <p>India is going through a massive social transition. Nuclear families, job migrations, long work hours, social media that creates comparison instead of connection, and the pressure to appear fine on the outside — all of this creates fertile ground for loneliness.</p>
          <p>In joint families, there can be people all around you but still no one who truly understands what you&apos;re going through. Loneliness isn&apos;t about isolation — it&apos;s about the absence of genuine, non-judgmental connection.</p>
        </div>

        <div className="card">
          <h2>What helps with loneliness</h2>
          <p>People experience loneliness differently. Some find it helpful to talk with someone who listens without immediately trying to solve the problem. A conversation is one possible source of connection; experiences vary and it is not a treatment for a mental-health condition.</p>
          <p>LeanOn listeners bring varied lived experiences and are screened for listening ability and boundaries. You can read their profiles and choose someone whose experience feels relevant to you. They are peer supporters, not therapists, and do not provide clinical treatment.</p>
        </div>

        <div className="card">
          <h2>Taking the first step</h2>
          <p>Reaching out can feel difficult when you are lonely. LeanOn does not require you to explain everything before starting a conversation. Your account uses a verified phone number, but it is not shown to listeners; you can choose a display name and decide what personal details to share.</p>
          <p>You don&apos;t have to explain yourself. You don&apos;t have to have a reason. You can simply start a session and say &ldquo;I&apos;ve been feeling really lonely lately.&rdquo; That&apos;s enough.</p>
        </div>

        <div className="cta">
          <h2>Someone is here for you</h2>
          <p>No appointment is needed, but a conversation can start only when a listener accepts your request. Availability is not guaranteed at every moment. Your phone number is not shown to listeners; use a display name and share only what feels comfortable.</p>
          <a href="/talk?src=seo"><button className="btn">Talk to someone now →</button></a>
        </div>
      </div>
    </>
  )
}
