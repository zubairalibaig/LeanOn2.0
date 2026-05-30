import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Anonymous Peer Support India — LeanOn | Talk Anonymously',
  description: 'Anonymous peer support in India. Talk to someone who understands — without sharing your name, identity, or details. Private, safe, available 24/7. First 5 min free.',
  alternates: { canonical: 'https://www.leanon.app/anonymous-peer-support' },
  keywords: ['anonymous peer support India', 'anonymous emotional support India', 'talk anonymously India', 'anonymous listener India'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Anonymous Peer Support India — LeanOn',
  description: 'Anonymous peer support for India — private, safe, human.',
  url: 'https://www.leanon.app/anonymous-peer-support',
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.page{max-width:640px;margin:0 auto;padding:32px 24px 80px;}
h1{font-size:clamp(26px,5vw,38px);font-weight:900;line-height:1.15;margin-bottom:16px;}
h1 span{color:var(--orange);}
.lead{font-size:16px;color:var(--gray);line-height:1.75;font-weight:500;margin-bottom:28px;}
.section{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:18px;}
.section h2{font-size:18px;font-weight:800;margin-bottom:12px;}
.section p{font-size:14px;color:#3A6070;line-height:1.75;margin-bottom:10px;}
.section p:last-child{margin-bottom:0;}
.privacy-list{display:flex;flex-direction:column;gap:10px;margin-top:12px;}
.pi{display:flex;gap:12px;align-items:flex-start;background:var(--light);border-radius:12px;padding:12px 14px;}
.pi-icon{font-size:20px;flex-shrink:0;}
.pi-text{font-size:13px;color:#3A5A6E;line-height:1.55;font-weight:600;}
.cta-box{background:var(--navy);border-radius:20px;padding:28px;text-align:center;margin-top:24px;}
.cta-box h2{font-size:18px;font-weight:900;color:white;margin-bottom:10px;}
.cta-box p{font-size:13px;color:rgba(201,231,244,.8);margin-bottom:20px;font-weight:500;}
.btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:none;cursor:pointer;}
.back{font-size:14px;font-weight:700;color:var(--gray);margin-bottom:24px;display:inline-block;}
`

export default function AnonymousPeerSupport() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>
      <div className="page">
        <a href="/" className="back">← LeanOn Home</a>
        <h1><span>Anonymous</span> Peer Support India — LeanOn</h1>
        <p className="lead">
          Talk to someone who understands — without sharing your identity. LeanOn is India&apos;s most private peer support platform, designed for a country where stigma is real and family privacy matters.
        </p>

        <div className="section">
          <h2>Why anonymous support matters in India</h2>
          <p>In India, mental health struggles carry real stigma. In joint families, walls are thin. In workplaces, vulnerability can cost you. In friend groups, gossip travels. Many people who desperately need to talk to someone feel they simply cannot — because the risk to their reputation, relationships, or career is too high.</p>
          <p>LeanOn was built for this reality. You can join with just your phone number, use any first name you choose, and talk about anything without fear of judgment or disclosure. Your listener only knows your chosen first name. Nothing else.</p>
        </div>

        <div className="section">
          <h2>How LeanOn protects your anonymity</h2>
          <div className="privacy-list">
            {[
              { icon: '📱', text: 'Sign up with just your mobile number — no email, no full name, no social login' },
              { icon: '👤', text: 'Choose any first name to display — your real name is never required' },
              { icon: '🔒', text: 'Sessions are completely private — your listener only sees your chosen name' },
              { icon: '💬', text: 'Text-first design — talk discreetly even in a shared room' },
              { icon: '🚫', text: 'No profile photos required for seekers' },
              { icon: '🗑️', text: 'Request account and data deletion anytime' },
            ].map((item, i) => (
              <div key={i} className="pi">
                <span className="pi-icon">{item.icon}</span>
                <span className="pi-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>What can you talk about anonymously?</h2>
          <p>LeanOn listeners specialise in topics that people in India are most hesitant to discuss openly: loneliness in joint families, anxiety at work, career confusion and comparison, relationship struggles and breakups, grief and loss, student exam pressure, startup burnout, and simply feeling stuck.</p>
          <p>You can also just talk — about anything, or nothing specific. Sometimes the most valuable thing is simply having someone present who is not judging you.</p>
        </div>

        <div className="section">
          <h2>Is anonymous support as effective?</h2>
          <p>Research on peer support consistently shows that anonymity actually improves openness and honesty. When people feel safe from judgment, they share more authentically — and that authenticity is what makes support effective. Many people find they can say things to an anonymous peer listener that they have never been able to say to anyone in their life.</p>
        </div>

        <div className="cta-box">
          <h2>Start anonymously — first 5 minutes free</h2>
          <p>No name required. No judgment. Someone is online right now.</p>
          <a href="/auth"><button className="btn">Start anonymously →</button></a>
        </div>
      </div>
    </>
  )
}
