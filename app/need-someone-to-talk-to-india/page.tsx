import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need Someone to Talk To in India? LeanOn — Real Humans, 24/7',
  description: 'Need someone to talk to in India? LeanOn connects you with real peer listeners who understand. Anonymous, affordable, available even at 2 AM. Available 24/7.',
  alternates: { canonical: 'https://www.leanon.app/need-someone-to-talk-to-india' },
  keywords: ['need someone to talk to India', 'someone to talk to India', 'peer listener India 24/7'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Need Someone to Talk To in India? — LeanOn',
  description: 'Real human peer support in India — available 24/7.',
  url: 'https://www.leanon.app/need-someone-to-talk-to-india',
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
.times{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;}
.time-pill{background:var(--light);border:1.5px solid var(--border);border-radius:50px;padding:6px 14px;font-size:13px;font-weight:700;color:var(--navy);}
.cta-box{background:var(--navy);border-radius:20px;padding:28px;text-align:center;margin-top:24px;}
.cta-box h2{font-size:18px;font-weight:900;color:white;margin-bottom:10px;}
.cta-box p{font-size:13px;color:rgba(201,231,244,.8);margin-bottom:20px;font-weight:500;}
.btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:none;cursor:pointer;}
.back{font-size:14px;font-weight:700;color:var(--gray);margin-bottom:24px;display:inline-block;}
.crisis-box{background:#FFF0F0;border:2px solid #FFCDD2;border-radius:16px;padding:16px;margin-bottom:18px;}
.crisis-box p{font-size:13px;color:#7A2020;font-weight:700;line-height:1.65;}
`

export default function NeedSomeoneToTalkToIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>
      <div className="page">
        <a href="/" className="back">← LeanOn Home</a>
        <h1>Need <span>Someone to Talk To</span> in India?</h1>
        <p className="lead">
          You&apos;re not alone — even if it feels that way right now. LeanOn connects you with real peer listeners in India who have been through what you&apos;re going through. Available 24/7, instant access, no appointment.
        </p>

        <div className="crisis-box">
          <p>🆘 In immediate crisis? Call <strong><a href="tel:08046110007">NIMHANS: 080-46110007</a></strong> or <strong><a href="tel:14416">Tele-MANAS: 14416</a></strong> (free · 24/7 · Govt of India)</p>
        </div>

        <div className="section">
          <h2>You deserve someone who truly understands</h2>
          <p>In India, it&apos;s often hard to find someone to talk to — really talk to. Family members may not understand or may judge you. Friends get tired of hearing about the same problems. Therapy feels too clinical or is simply too expensive. And at 2 AM when the feelings are worst, there&apos;s often no one available at all.</p>
          <p>LeanOn changes this. Our peer listeners are available around the clock — and they genuinely understand. Not because they have a degree, but because they have lived through something similar.</p>
        </div>

        <div className="section">
          <h2>When do people reach out on LeanOn?</h2>
          <p>There is no wrong time or wrong reason to need someone to talk to. People connect with LeanOn listeners:</p>
          <div className="times">
            {['Late at night', 'After a fight', 'During exam season', 'After job loss', 'When grieving', 'Work burnout', 'Loneliness', 'Breakup', '2 AM anxiety', 'Career crisis', 'Moving to new city', 'Just to vent'].map(t => (
              <span key={t} className="time-pill">{t}</span>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>How it works</h2>
          <p><strong>1. Sign up in 30 seconds</strong> — just your phone number. No full name, no email.</p>
          <p><strong>2. Browse peer listeners</strong> — read their bios and find someone who gets your situation. Browse anonymously.</p>
          <p><strong>3. Start a 5-min chat</strong> — no wallet, no card, no commitment.</p>
          <p><strong>4. Talk</strong> — text or voice. Say what you need to say. Your listener is here for you.</p>
        </div>

        <div className="section">
          <h2>What makes LeanOn different</h2>
          <p>LeanOn listeners are not therapists — and that is often exactly why they are more helpful for day-to-day emotional struggles. They have lived through what you&apos;re going through. They are not constrained by clinical detachment. They are present, empathetic, and non-judgmental in a way that is hard to find elsewhere.</p>
          <p>The platform is designed for India: anonymous, text-first for privacy in joint homes, available in 12 Indian languages, and priced so that cost is never a barrier.</p>
        </div>

        <div className="cta-box">
          <h2>Someone is online right now</h2>
          <p>Browse peer listeners and start talking. You don&apos;t have to go through this alone.</p>
          <a href="/browse"><button className="btn">Find a listener →</button></a>
        </div>
      </div>
    </>
  )
}
