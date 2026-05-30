import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About LeanOn — India\'s Peer Emotional Support Platform',
  description: 'Learn about LeanOn, India\'s peer emotional support platform connecting people with trained peer listeners anonymously and affordably.',
  keywords: ['about leanon', 'leanon mission', 'peer support India mission', 'lean on app story'],
  alternates: { canonical: 'https://www.leanon.app/about', languages: { 'en-IN': 'https://www.leanon.app/about' } },
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:640px;margin:0 auto;padding:16px 24px 80px;}
  .back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--gray);margin-bottom:32px;}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,42px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 span{color:var(--orange);}
  .lead{font-size:17px;color:var(--gray);line-height:1.75;font-weight:500;}
  .story-section{background:white;border-radius:24px;padding:28px;margin-bottom:24px;border:1.5px solid var(--border);}
  .story-section h2{font-size:20px;font-weight:800;color:var(--navy);margin-bottom:14px;}
  .story-section p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:12px;}
  .story-section p:last-child{margin-bottom:0;}
  .values-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .value-card{background:white;border:1.5px solid var(--border);border-radius:18px;padding:18px;}
  .value-icon{font-size:28px;margin-bottom:10px;}
  .value-title{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .value-desc{font-size:13px;color:var(--gray);line-height:1.55;font-weight:500;}
  .mission-card{background:var(--navy);border-radius:24px;padding:28px;margin-bottom:24px;color:white;}
  .mission-card h2{font-size:18px;font-weight:800;margin-bottom:14px;}
  .mission-card p{font-size:14px;color:rgba(201,231,244,0.85);line-height:1.75;font-weight:500;margin-bottom:10px;}
  .mission-card p:last-child{margin-bottom:0;}
  .cta-section{text-align:center;padding:32px 24px;background:white;border-radius:24px;border:1.5px solid var(--border);}
  .cta-section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .cta-section p{font-size:14px;color:var(--gray);font-weight:500;margin-bottom:24px;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:16px 32px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
`

export default function AboutPage() {
  return (
    <>
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>
      <div className="page">
        <a href="/" className="back">← Back to home</a>
        <div className="hero">
          <p className="tag">Our story</p>
          <h1>We built LeanOn because <span>nobody should be alone at 2 AM.</span></h1>
          <p className="lead">LeanOn is a peer support platform connecting people who are struggling with real humans who have been through the same thing — and found their way through.</p>
        </div>

        <div className="story-section">
          <h2>Why LeanOn exists</h2>
          <p>There are millions of people in India who are lonely, overwhelmed, anxious, or grieving — right now, tonight. They aren&apos;t necessarily mentally ill. They don&apos;t need a diagnosis. They just need someone to talk to who gets it.</p>
          <p>The problem is that therapy is expensive, stigmatized, and requires scheduling in advance. Friends are unavailable or don&apos;t understand. Family can&apos;t always be the safe space you need, especially in joint households.</p>
          <p>LeanOn fills this gap. Our listeners aren&apos;t therapists — they&apos;re real people who have been through what you&apos;re going through. They&apos;ve rebuilt after divorce, survived burnout, navigated grief, failed and started over. They understand in a way that no degree can teach.</p>
        </div>

        <div className="values-grid">
          {[
            {icon:'🤝',title:'Human first',desc:'Every session is a real human conversation. No bots, no scripted responses, no clinical detachment.'},
            {icon:'⚡',title:'Instant access',desc:'No appointments. No wait lists. When you need support, it should be available now.'},
            {icon:'🔒',title:'Private always',desc:'Your sessions are private. We will never share your conversations or identity.'},
            {icon:'💰',title:'Genuinely affordable',desc:'Starting at ₹165 for 15 minutes. Less than a cup of coffee at most cafes.'},
            {icon:'🇮🇳',title:'Built for India',desc:'Text-first for joint family privacy. Phone OTP, UPI payments, 12 Indian languages.'},
            {icon:'❤️',title:'Peer, not clinical',desc:'We are not therapy. We are honest about that. Peer support is its own valid category.'},
          ].map((v,i)=>(
            <div key={i} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <div className="value-title">{v.title}</div>
              <div className="value-desc">{v.desc}</div>
            </div>
          ))}
        </div>

        <div className="mission-card">
          <h2>Our mission</h2>
          <p>In India, 1 in 7 people experiences a mental health condition, yet fewer than 1% receive any form of support. Therapy has a stigma. Hotlines feel clinical. Friends get tired. Family doesn&apos;t always understand.</p>
          <p>LeanOn exists to close that gap — not with doctors or algorithms, but with people. Real people who have lived through what you&apos;re facing and who choose to sit with you in it. Available now. In your language. At a price that doesn&apos;t sting.</p>
          <p>Someone to lean on, whenever you need one.</p>
        </div>

        <div className="story-section">
          <h2>Our team &amp; mission</h2>
          <p>LeanOn was founded by mental health advocates who believe that peer support is one of the most powerful tools for emotional wellbeing — and the most underutilised. Our team includes people with personal experience of loneliness, burnout, and the difficulty of accessing meaningful support in India.</p>
          <p>Every listener on LeanOn is manually vetted by our team. We review lived experience, empathy, and commitment to our code of conduct before anyone is approved.</p>
          <p>Our anonymity commitment: your identity is protected by design. Phone OTP sign-up. No full name required. Sessions completely private. No data sold. Data deletion on request.</p>
        </div>

        <div className="story-section">
          <h2>Our Methodology</h2>
          <p>LeanOn listeners undergo a structured empathy training program before going live. The program covers four core modules:</p>
          <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:8}}>
            {[
              { n:'1', title:'Active Listening & Emotional Reflection', desc:'Techniques for creating non-judgmental space and reflecting back what is heard without interpretation or advice-giving.' },
              { n:'2', title:'Boundary-Setting & Self-Care', desc:'How to be present for others without absorbing their distress — essential for sustainable, ethical peer support.' },
              { n:'3', title:'Crisis Recognition & Referral Protocols', desc:'Identifying signs of acute crisis, appropriate responses, and when to refer seekers to professional resources.' },
              { n:'4', title:'LeanOn Code of Conduct', desc:'Platform ethics, confidentiality, and what peer support is — and explicitly is not — so every listener is clear on their role.' },
            ].map(m => (
              <div key={m.n} style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:14,padding:14,display:'flex',gap:12,alignItems:'flex-start'}}>
                <div style={{width:28,height:28,borderRadius:'50%',background:'var(--orange)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:900,color:'white',flexShrink:0}}>{m.n}</div>
                <div>
                  <div style={{fontSize:14,fontWeight:800,color:'var(--navy)',marginBottom:4}}>{m.title}</div>
                  <div style={{fontSize:13,color:'var(--gray)',lineHeight:1.6}}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="story-section">
          <h2>Safety First</h2>
          <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:4}}>
            {[
              '🔒 All conversations are private and never shared with third parties',
              '✓ Every listener manually verified — no self-approval, no bots',
              '🚫 Instant block and report feature for any session',
              '🆘 Automatic crisis detection in text sessions with crisis resource display',
              '📞 NIMHANS (080-46110007) and Tele-MANAS (14416) crisis helplines visible in every session',
              '🗑️ Full data deletion available on request',
              '👮 All reports reviewed within 24 hours by our safety team',
            ].map((s, i) => (
              <div key={i} style={{fontSize:14,color:'#2A4F60',fontWeight:600,lineHeight:1.6,padding:'8px 0',borderBottom:'1px solid var(--border)'}}>{s}</div>
            ))}
          </div>
        </div>

        <div className="story-section" style={{background:'#FFF8F0',border:'1.5px solid #FFD9A0'}}>
          <h2 style={{color:'#7A5C00'}}>Peer Support, Not Therapy</h2>
          <p style={{color:'#7A5C00',fontWeight:600}}>LeanOn is a peer emotional support platform. Our listeners are not licensed therapists, psychologists, or medical professionals. They are real people with relevant lived experience who have been trained in active listening and empathy.</p>
          <p style={{color:'#7A5C00',fontWeight:600}}>If you need clinical mental health care, diagnosis, medication, or treatment for a diagnosed condition, please consult a licensed mental health professional. LeanOn can complement professional care — it is not a substitute for it.</p>
        </div>

        <div className="story-section">
          <h2>What people say about LeanOn</h2>
          <div style={{display:'flex',flexDirection:'column',gap:16,marginTop:8}}>
            {[
              { emoji: '🧑', name: 'Rahul S., Bengaluru', text: '"I was going through my first startup failure and had nobody who truly understood. My LeanOn listener had been through the same thing. For the first time I felt actually heard, not just managed."' },
              { emoji: '👩', name: 'Meera K., Mumbai', text: '"As someone in a joint family, I had nowhere to talk privately about what I was feeling. LeanOn gave me that space. The text-first approach was perfect."' },
              { emoji: '🧑‍💻', name: 'Arjun T., Hyderabad', text: '"I was skeptical — I thought it would feel fake or scripted. It wasn\'t. My listener was a real person who had been through anxiety themselves. 100% recommend."' },
              { emoji: '👩', name: 'Priya N., Delhi', text: '"I reached out at 1 AM during a really dark night. Someone was there. That changed something for me."' },
            ].map((t, i) => (
              <div key={i} style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:16,padding:18}}>
                <p style={{fontSize:14,color:'#2A4F60',lineHeight:1.68,fontStyle:'italic',marginBottom:12}}>{t.text}</p>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:'var(--teal)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{t.emoji}</div>
                  <span style={{fontSize:13,fontWeight:700,color:'var(--navy)'}}>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="story-section">
          <h2>LeanOn by the numbers</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,textAlign:'center',marginTop:8}}>
            {[
              { num: '50+', label: 'Verified listeners' },
              { num: '1,000+', label: 'Sessions completed' },
              { num: '4.8 ★', label: 'Average rating' },
            ].map((s, i) => (
              <div key={i} style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:16,padding:16}}>
                <div style={{fontSize:24,fontWeight:900,color:'var(--navy)'}}>{s.num}</div>
                <div style={{fontSize:12,color:'var(--gray)',fontWeight:600,marginTop:4}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="story-section">
          <h2>As seen on</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:10,marginTop:8}}>
            {['ProductHunt', 'Reddit r/india', 'Reddit r/MentalHealthIndia', 'LinkedIn India'].map(p => (
              <span key={p} style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:50,padding:'7px 14px',fontSize:13,fontWeight:700,color:'var(--navy)'}}>{p}</span>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to lean on someone?</h2>
          <p>Your first 5 minutes are completely free. No card, no commitment.</p>
          <a href="/auth"><button className="btn-primary">Start free now →</button></a>
        </div>
      </div>
    </>
  )
}
