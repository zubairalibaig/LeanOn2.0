import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Anonymous Emotional Support India — No Judgment | LeanOn',
  description: 'Anonymous emotional support in India. Talk to real peer listeners without revealing who you are. Private, judgment-free, instant. First 5 minutes completely free on LeanOn.',
  alternates: { canonical: 'https://leanon.app/support/anonymous-support' },
  keywords: ['anonymous support India', 'anonymous emotional support', 'anonymous mental health India', 'anonymous peer support', 'private support India'],
  openGraph: {
    title: 'Anonymous Emotional Support in India — LeanOn',
    description: 'Private, judgment-free peer support in India. Your identity stays yours.',
    url: 'https://leanon.app/support/anonymous-support',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is LeanOn really anonymous?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn only uses your first name. Your last name, phone number, email, and any other identifying information are never shared with listeners. Your conversations are completely private and never disclosed to third parties.' } },
    { '@type': 'Question', name: 'Why do people seek anonymous support?', acceptedAnswer: { '@type': 'Answer', text: 'In India especially, the stigma around emotional struggles is real. People fear being judged by family, colleagues, or community. Anonymous support removes that fear — allowing people to be fully honest about what they are going through without social consequences.' } },
    { '@type': 'Question', name: 'Does anonymous support actually help?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Research on online anonymous peer support consistently shows positive outcomes. The key mechanism is the same as any emotional support — feeling heard and understood. Anonymity often helps people open up more fully, making the support more effective, not less.' } },
    { '@type': 'Question', name: 'Can I stay anonymous if I do voice calls?', acceptedAnswer: { '@type': 'Answer', text: 'Voice sessions use an anonymized channel — the listener hears your voice but has no access to your personal identity. You can also choose text-only sessions if you prefer to maintain complete anonymity.' } },
    { '@type': 'Question', name: 'How does LeanOn protect my data?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn stores only the minimum data necessary to operate the platform. Session content is not retained or shared. Your phone number is used only for authentication. Full details are in our privacy policy at leanon.app/privacy.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Anonymous Support', item: 'https://leanon.app/support/anonymous-support' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 24px;height:68px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:48px;}
  .wrap{max-width:800px;margin:0 auto;padding:32px 24px 80px;}
  .breadcrumb{font-size:13px;color:#5A7A8A;margin-bottom:20px;}
  .breadcrumb a{color:#1A8FA0;font-weight:600;}
  .breadcrumb span{margin:0 5px;opacity:0.5;}
  h1{font-size:clamp(24px,5vw,38px);font-weight:900;color:#0F4867;line-height:1.18;margin-bottom:12px;}
  .lead{font-size:17px;color:#5A7A8A;line-height:1.7;margin-bottom:36px;font-weight:500;}
  h2{font-size:20px;font-weight:800;color:#0F4867;margin:32px 0 12px;}
  p{font-size:15px;color:#5A7A8A;line-height:1.75;margin-bottom:14px;font-weight:500;}
  .privacy-badge{display:inline-flex;align-items:center;gap:8px;background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:50px;padding:8px 18px;font-size:13px;font-weight:700;color:#166534;margin-bottom:28px;}
  .cta-box{background:linear-gradient(135deg,#0F4867,#1A8FA0);border-radius:20px;padding:32px 24px;text-align:center;color:#fff;margin:40px 0;}
  .cta-box h2{color:#fff;margin:0 0 8px;}
  .cta-box p{color:rgba(255,255,255,0.85);margin-bottom:20px;}
  .btn-primary{background:#FF9933;color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;display:inline-block;margin:0 6px 8px;}
  .btn-outline{background:transparent;color:#fff;font-family:'Nunito',sans-serif;font-weight:700;font-size:15px;padding:12px 26px;border-radius:50px;border:2px solid rgba(255,255,255,0.5);cursor:pointer;display:inline-block;margin:0 6px 8px;}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD699;border-radius:14px;padding:18px 20px;margin-top:32px;}
  .disclaimer h3{font-size:14px;font-weight:800;color:#0F4867;margin-bottom:6px;}
  .disclaimer p{font-size:13px;color:#5A7A8A;margin:0 0 8px;}
  .crisis{background:#FFF0F0;border:1.5px solid #FFB3B3;border-radius:10px;padding:12px 16px;margin-top:10px;font-size:13px;font-weight:700;color:#0F4867;}
  .related{margin-top:40px;}
  .related h2{font-size:17px;}
  .related-links{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;}
  .related-links a{background:#F0F8FC;border:1.5px solid #D5EEF6;border-radius:50px;padding:8px 18px;font-size:13px;font-weight:700;color:#1A8FA0;}
`

export default function AnonymousSupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth" style={{background:'#FF9933',color:'#fff',fontFamily:'Nunito,sans-serif',fontWeight:800,fontSize:14,padding:'10px 22px',borderRadius:50,border:'none',cursor:'pointer'}}>Start free</a>
      </nav>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span><a href="/support">Support</a><span>›</span><span>Anonymous Support</span>
        </div>
        <div className="privacy-badge">🔒 Your identity stays private — always</div>
        <h1>Anonymous Emotional Support in India — Be Heard Without Fear</h1>
        <p className="lead">You should not have to choose between getting support and protecting your privacy. On LeanOn, you connect with real peer listeners using only your first name — no last name, no photo, no personal information. Just honest conversation, completely protected.</p>

        <h2>What Anonymous Support Means</h2>
        <p>Anonymous support means you can open up fully without fear of judgment, social consequences, or your information reaching the wrong people. On LeanOn, listeners know you by your first name only. Your phone number, your identity, and your conversation content are never shared.</p>
        <p>This is not about hiding — it is about creating the safety needed to be honest. Many people find they can speak much more truthfully to someone who does not know them in real life.</p>

        <h2>Why Anonymity Matters in India</h2>
        <p>India&apos;s social fabric is tightly woven. Family expectations, community opinions, and professional reputation all intersect in ways that make vulnerability feel dangerous. Admitting you are struggling — to a colleague, a neighbour, or even a family member — can carry real social costs.</p>
        <p>This is why so many people suffer in silence. Not because they do not want support, but because the risk of judgment feels too high. Anonymous peer support removes that risk entirely.</p>

        <h2>How LeanOn Protects Your Privacy</h2>
        <p>LeanOn uses phone number OTP for authentication, but your number is never shared with listeners. Only your first name appears in a session. Session content is not stored long-term or shared with any third party. You can also choose text-only sessions to maintain full voice anonymity.</p>

        <h2>What You Can Talk About</h2>
        <p>Because the space is anonymous, people feel safe bringing their most difficult topics: family conflict they cannot discuss at home, relationship problems they are ashamed of, work struggles they fear will affect their career, mental health experiences they have hidden from everyone, or simply a feeling of emptiness they cannot explain.</p>
        <p>There is no topic too sensitive. The anonymity means you can say the things you have never been able to say to anyone else.</p>

        <h2>Does Anonymous Support Actually Work?</h2>
        <p>Yes. Research consistently shows that anonymity increases honest self-disclosure, which in turn increases the effectiveness of support. When people feel safe enough to be truly honest, the connection that results is often more meaningful than in face-to-face interactions where people manage their presentation.</p>

        <div className="cta-box">
          <h2>Talk Anonymously — Your Identity Stays Yours</h2>
          <p>First name only. No judgment. First 5 minutes free.</p>
          <a href="/auth"><button className="btn-primary">Start anonymously →</button></a>
          <a href="/browse"><button className="btn-outline">Browse listeners</button></a>
        </div>

        <div className="disclaimer">
          <h3>ℹ️ Peer support is not therapy</h3>
          <p>LeanOn listeners are not licensed therapists. For clinical mental health support, please consult a qualified professional. Read our <a href="/privacy" style={{color:'#1A8FA0',fontWeight:700}}>privacy policy</a> for full data details.</p>
          <div className="crisis">🆘 In crisis? Call iCall: <strong>9152987821</strong> or Tele-MANAS: <strong>14416</strong> (free, 24/7)</div>
        </div>

        <div className="related">
          <h2>Related Support</h2>
          <div className="related-links">
            <a href="/support/someone-to-talk-to">Someone to talk to</a>
            <a href="/support/emotional-support">Emotional support</a>
            <a href="/support/loneliness">Loneliness</a>
            <a href="/privacy">Privacy policy</a>
          </div>
        </div>
      </div>
    </>
  )
}
