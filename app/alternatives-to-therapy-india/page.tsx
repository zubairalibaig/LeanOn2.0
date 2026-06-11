import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affordable Alternatives to Therapy in India | LeanOn',
  description: 'Explore affordable alternatives to therapy in India: peer support, helplines, journaling, meditation apps. LeanOn provides the most human connection at the lowest cost.',
  keywords: ['alternatives to therapy india', 'affordable mental health india', 'peer support instead of therapy india', 'cheap therapy alternative india'],
  alternates: { canonical: 'https://www.leanon.app/alternatives-to-therapy-india' },
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
  .alt-list{display:flex;flex-direction:column;gap:14px;margin-bottom:32px;}
  .alt-item{background:white;border:1.5px solid var(--border);border-radius:18px;padding:20px;display:flex;gap:14px;align-items:flex-start;}
  .alt-item.featured{border-color:var(--teal);background:rgba(26,143,160,0.04);}
  .alt-icon{font-size:32px;flex-shrink:0;}
  .alt-title{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .alt-item.featured .alt-title{color:var(--teal);}
  .alt-desc{font-size:14px;color:var(--gray);line-height:1.65;}
  .alt-price{font-size:12px;font-weight:800;color:var(--orange);margin-top:4px;}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
`

export default function AlternativesToTherapyPage() {
  return (
    <>
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{height:48}} /></a>
        <a href="/auth"><button className="btn" style={{fontSize:13,padding:'8px 20px'}}>Try free</button></a>
      </nav>
      <div className="page">
        <a href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:700,color:'var(--gray)',marginBottom:28}}>← Back</a>
        <h1>Affordable Alternatives to Therapy in India</h1>
        <p className="lead">Professional therapy is out of reach for most Indians — ₹1,500–₹5,000 per session, limited availability, and significant wait times. Here are the real alternatives, and what each is best for.</p>

        <div className="disclaimer">
          This page compares emotional support options, not clinical treatment. For diagnosed mental health conditions, please consult a licensed professional. LeanOn is peer support — not therapy.
        </div>

        <div className="alt-list">
          <div className="alt-item featured">
            <div className="alt-icon">🤝</div>
            <div>
              <div className="alt-title">LeanOn peer support ★ Best for emotional connection</div>
              <div className="alt-desc">Real humans with lived experience. Instant access, 24/7, anonymous. Best for loneliness, stress, grief, burnout, anxiety, and processing difficult feelings. The most human-to-human connection outside of professional therapy.</div>
              <div className="alt-price">Free first session · ₹160 for 15 min thereafter</div>
            </div>
          </div>
          <div className="alt-item">
            <div className="alt-icon">📞</div>
            <div>
              <div className="alt-title">Government helplines — best for crisis</div>
              <div className="alt-desc">NIMHANS (080-46110007) and Tele-MANAS (14416) are free 24/7 government helplines. Best for acute crisis situations. Less suited for ongoing emotional support or non-crisis conversations.</div>
              <div className="alt-price">Free</div>
            </div>
          </div>
          <div className="alt-item">
            <div className="alt-icon">📓</div>
            <div>
              <div className="alt-title">Journaling — best for self-reflection</div>
              <div className="alt-desc">Writing out your thoughts has real mental health benefits. Best for processing emotions privately at your own pace. Does not provide human connection or feedback — can feel isolating for people who need to be heard by another person.</div>
              <div className="alt-price">Free</div>
            </div>
          </div>
          <div className="alt-item">
            <div className="alt-icon">🧘</div>
            <div>
              <div className="alt-title">Meditation apps — best for daily stress management</div>
              <div className="alt-desc">Apps like Headspace or Calm help with daily stress, sleep, and focus. Not designed for emotional processing or human connection. Complement peer support well but don't replace it.</div>
              <div className="alt-price">₹300–₹800/month subscription</div>
            </div>
          </div>
          <div className="alt-item">
            <div className="alt-icon">👨‍⚕️</div>
            <div>
              <div className="alt-title">Professional therapy — best for clinical conditions</div>
              <div className="alt-desc">Licensed therapists and psychiatrists are essential for diagnosed conditions, trauma processing, and medication management. The gold standard for clinical care — but expensive and hard to access across most of India.</div>
              <div className="alt-price">₹1,500–₹5,000 per session</div>
            </div>
          </div>
        </div>

        <div className="cta">
          <h2>Start with peer support — free</h2>
          <p>LeanOn is the most human, most affordable option for day-to-day emotional support.</p>
          <a href="/browse"><button className="btn">Try free →</button></a>
        </div>
      </div>
    </>
  )
}
