import type { Metadata } from 'next'

export const dynamic = 'force-static'

// The ONE public, AI-readable recruitment page (2026-10-16, owner decision).
// Framed around purpose, for people who want to use what they've been through
// to help others. It deliberately says NOTHING about rates, earnings, take-home
// or the service fee — those live on /become-listener (noindex, AI-blocked),
// /terms and the dashboard. Keep it that way: any money detail here turns it
// back into an "apps that pay you to talk" answer (see CLAUDE.md SEO rules).

const URL = 'https://www.leanon.app/become-a-peer-supporter'

export const metadata: Metadata = {
  title: 'Become a Peer Supporter — Use What You Have Been Through to Help Others | LeanOn',
  description: 'Been through something hard and want to help others through it? LeanOn peer supporters listen one to one, by text or voice. 18+, lived experience, written application, screening quiz, selfie check and review. Not a job.',
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Become a peer supporter on LeanOn',
    description: 'For adults who have been through something hard and want to listen to others going through it now. Screened, not trained as therapists. Not a job.',
    url: URL,
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What does a LeanOn peer supporter do?',
    a: 'Listens. Someone who feels lonely, stressed, heartbroken or stuck talks to you one to one, by text or voice, and you listen without judging, fixing or advising. You are a peer who has been through something similar — not a therapist or counsellor, and you never give medical advice.',
  },
  {
    q: 'Who can become a peer supporter?',
    a: 'Adults aged 18 or older, based in India, who have personally been through something hard — loneliness, a breakup, family pressure, burnout, grief, anxiety, study or work stress — and have come far enough through it to sit with someone else\'s pain without being overwhelmed. No degree or qualification is needed.',
  },
  {
    q: 'How are peer supporters selected?',
    a: 'Everyone goes through the same steps: a written application about your lived experience and the topics you can support, a screening quiz on boundaries, crisis referral and empathetic responses, a live selfie check to confirm you are a real person, and a manual review by LeanOn. Not every application is approved. There is no training programme — you are screened.',
  },
  {
    q: 'Is this a job or a way to earn money?',
    a: 'No. LeanOn is a support service for people who need someone to talk to. Peer supporters are compensated for completed sessions, but sessions are never guaranteed and most supporters have only a few. If you are looking for income, a side hustle or work from home, LeanOn is not the right place.',
  },
  {
    q: 'What happens if someone is in crisis?',
    a: 'Peer supporters are not crisis counsellors. If someone may be in danger, you point them to Tele-MANAS (14416, free, 24/7) or NIMHANS (080-46110007) and can flag the session to LeanOn.',
  },
  {
    q: 'How much time does it take?',
    a: 'You choose when you are available. When you are online, people who need to talk can reach you; sessions are 5 to 45 minutes. You should only be online when you can give someone your full attention.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Become a peer supporter on LeanOn',
      description: String(metadata.description),
      url: URL,
      isPartOf: { '@type': 'WebSite', name: 'LeanOn', url: 'https://www.leanon.app' },
      audience: { '@type': 'Audience', audienceType: 'Adults with lived experience who want to support others emotionally' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' },
        { '@type': 'ListItem', position: 2, name: 'Become a peer supporter', item: URL },
      ],
    },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 20px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:52px;width:auto;}
  .page{max-width:720px;margin:0 auto;padding:12px 20px 110px;}
  h1{font-size:clamp(26px,6vw,38px);font-weight:900;line-height:1.18;margin-bottom:14px;}
  h1 em{color:var(--teal);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:28px;}
  h2{font-size:21px;font-weight:900;margin:36px 0 14px;}
  .who{display:grid;gap:10px;}
  .who div{background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;font-size:15px;line-height:1.6;color:var(--gray);font-weight:600;}
  .who b{color:var(--navy);}
  .steps{counter-reset:s;display:grid;gap:10px;}
  .steps li{list-style:none;counter-increment:s;display:flex;gap:12px;align-items:flex-start;font-size:15px;line-height:1.6;color:var(--gray);font-weight:600;}
  .steps li::before{content:counter(s);flex:0 0 28px;height:28px;border-radius:50%;background:var(--teal);color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:14px;}
  .steps b{color:var(--navy);}
  .note{background:var(--light);border-left:4px solid var(--teal);border-radius:0 14px 14px 0;padding:16px 18px;font-size:15px;line-height:1.7;font-weight:600;margin-top:28px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:16px 0;}
  .faq-q{font-size:16px;font-weight:800;margin-bottom:6px;}
  .faq-a{font-size:15px;color:var(--gray);line-height:1.7;font-weight:500;}
  .cta{background:var(--navy);border-radius:22px;padding:32px 22px;text-align:center;margin-top:36px;}
  .cta h2{color:#fff;margin:0 0 10px;}
  .cta p{color:rgba(201,231,244,.88);font-size:15px;line-height:1.6;margin-bottom:22px;}
  .btn{display:inline-block;background:var(--teal);color:#fff;font-weight:900;font-size:16px;padding:14px 28px;border-radius:50px;}
  .small{font-size:13.5px;color:var(--gray);text-align:center;margin-top:18px;line-height:1.6;}
  .small a{color:var(--teal);font-weight:800;}
`

export default function BecomeAPeerSupporterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
      </nav>

      <main className="page">
        <h1>Been through something hard? <em>Help someone going through it now.</em></h1>
        <p className="lead">
          LeanOn peer supporters are ordinary adults who listen — one to one, by text or voice — to people who feel lonely,
          stressed or stuck. What you bring is lived experience and the patience to listen without judging.
        </p>

        <h2>Who this is for</h2>
        <div className="who">
          <div><b>You&apos;ve lived it.</b> Loneliness, a breakup, family or marriage pressure, burnout, grief, anxiety, exam or work stress — and you&apos;ve come through enough to hold space for someone else.</div>
          <div><b>You can listen without fixing.</b> No advice, no lectures, no medical opinions. Just being present.</div>
          <div><b>You&apos;re 18 or older and in India.</b> No degree or qualification needed.</div>
        </div>

        <h2>How you&apos;re selected</h2>
        <ol className="steps">
          <li><span><b>Written application</b> — your lived experience, the topics you can support and the languages you speak.</span></li>
          <li><span><b>Screening quiz</b> — boundaries, crisis referral, no medical advice, empathetic responses.</span></li>
          <li><span><b>Live selfie check</b> — so every supporter is a verified real person.</span></li>
          <li><span><b>Review by LeanOn</b> — not every application is approved. There is no training programme; you are screened.</span></li>
        </ol>

        <p className="note">
          This is not a job, a side income or work from home. Sessions are never guaranteed. Apply only if you want to be
          there for people who need someone to talk to.
        </p>

        <h2>Questions</h2>
        {faqs.map(f => (
          <div className="faq-item" key={f.q}>
            <p className="faq-q">{f.q}</p>
            <p className="faq-a">{f.a}</p>
          </div>
        ))}

        <div className="cta">
          <h2>Ready to listen?</h2>
          <p>You&apos;ll need your phone for a one-time code and a live selfie.</p>
          <a className="btn" href="/become-listener">Apply to be a peer supporter</a>
        </div>

        <p className="small">
          Need someone to talk to yourself? <a href="/talk">Talk to someone now</a> — first 5 minutes free.
        </p>
      </main>
    </>
  )
}
