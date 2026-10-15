import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'LeanOn App for Mental Health India | Peer Support Platform',
  description: 'LeanOn is an online peer-support platform for everyday emotional needs. Talk with a screened peer listener about loneliness, relationship stress, burnout or grief. Not therapy or crisis care.',
  alternates: { canonical: 'https://www.leanon.app/leanon-app-mental-health' },
  keywords: ['leanon app mental health', 'leanon mental health India', 'peer support mental health India', 'mental health app India'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'LeanOn App for Mental Health India',
  description: 'An online peer-support platform for non-clinical emotional support and human connection.',
  url: 'https://www.leanon.app/leanon-app-mental-health',
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
.page{max-width:640px;margin:0 auto;padding:32px 24px 80px;}
h1{font-size:clamp(26px,5vw,38px);font-weight:900;line-height:1.15;margin-bottom:16px;color:var(--navy);}
h1 span{color:var(--orange);}
.lead{font-size:16px;color:var(--gray);line-height:1.75;font-weight:500;margin-bottom:28px;}
.section{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:18px;}
.section h2{font-size:18px;font-weight:800;margin-bottom:12px;}
.section p{font-size:14px;color:#3A6070;line-height:1.75;margin-bottom:10px;}
.section p:last-child{margin-bottom:0;}
.cta-box{background:var(--navy);border-radius:20px;padding:28px;text-align:center;margin-top:24px;}
.cta-box h2{font-size:18px;font-weight:900;color:white;margin-bottom:10px;}
.cta-box p{font-size:13px;color:rgba(201,231,244,.8);margin-bottom:20px;font-weight:500;}
.btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:none;cursor:pointer;}
.back{font-size:14px;font-weight:700;color:var(--gray);margin-bottom:24px;display:inline-block;}
`

export default function LeanOnAppMentalHealth() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>
      <div className="page">
        <a href="/" className="back">← LeanOn Home</a>
        <h1>LeanOn App for <span>Mental Health</span> — India&apos;s Peer Support Platform</h1>
        <p className="lead">
          LeanOn is an online peer-support platform for everyday emotional needs — not therapy, diagnosis or crisis care. Talk with a real person through text or voice when a listener is available. Each account gets one free introductory session of up to 5 minutes.
        </p>

        <div className="section">
          <h2>What is the LeanOn app for mental health?</h2>
          <p>LeanOn is a peer emotional support platform that connects people in India with verified peer listeners — real people who have personally navigated loneliness, burnout, anxiety, grief, relationship stress, career confusion, and more.</p>
          <p>LeanOn offers non-clinical peer support. Listeners are not presented as therapists and do not provide clinical diagnosis or treatment. Peer-support models emphasise shared experience, listening and mutual understanding; the general model is discussed in the <a href="https://www.who.int/publications/i/item/9789240025783" target="_blank" rel="noopener noreferrer">World Health Organization’s community mental-health guidance</a>. This guidance is not an evaluation or endorsement of LeanOn.</p>
        </div>

        <div className="section">
          <h2>Why LeanOn works for mental health in India</h2>
          <p>People seek different kinds of help for different reasons: clinical treatment, urgent crisis support, or a non-clinical conversation with someone who listens. Clear information about what each option can and cannot provide helps people make an informed choice.</p>
          <p>Sign up with phone OTP without an email or full legal name, and choose a display name. In India, one example is ₹160 for 15 minutes with a listener charging ₹10 per minute, including the flat ₹10 platform fee; the actual price varies by listener and session type and is shown before booking. Language options depend on listener profiles and live availability.</p>
          <p>It&apos;s not a replacement for professional mental health care — and we&apos;re honest about that. But for the millions of Indians who need someone to talk to right now, LeanOn fills a gap that nothing else does.</p>
        </div>

        <div className="section">
          <h2>Who uses LeanOn?</h2>
          <p>People come to LeanOn from all walks of life: students overwhelmed by exam pressure, startup founders going through their first failure, professionals experiencing burnout in high-pressure jobs, people processing grief and loss, individuals struggling with loneliness in new cities, and people who simply need someone to talk to at 2 AM.</p>
          <p>What they all have in common: they want a real human who gets it — not a bot, not a clinical professional, but someone who has been through something similar and found their way through.</p>
        </div>

        <div className="section">
          <h2>Is LeanOn safe?</h2>
          <p>LeanOn uses phone OTP sign-in and allows a display name. Automated safety moderation may process session content, and content flagged for safety may be reviewed by the team. According to the Privacy Policy, text is not stored after session completion by default and voice calls are not recorded. Applicants are identity-verified and reviewed before approval. Review the <a href="/privacy">Privacy Policy</a> and <a href="/trust">Trust &amp; Safety page</a> before deciding what to share.</p>
        </div>

        <div className="cta-box">
          <h2>Explore peer support on LeanOn</h2>
          <p>One free 5-minute introductory session per account. Check live listener availability; a session begins when a listener accepts.</p>
          <a href="/browse"><button className="btn">Browse peer listeners →</button></a>
        </div>
      </div>
    </>
  )
}
