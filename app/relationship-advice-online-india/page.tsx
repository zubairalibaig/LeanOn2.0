import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Support Online India — Talk to a Peer Listener | LeanOn',
  description: 'Going through relationship problems? Talk privately with a screened peer listener in India by text or voice. LeanOn offers non-clinical peer support, not relationship counselling or therapy; availability depends on who is online.',
  keywords: [
    'relationship advice online india', 'relationship problems india', 'talk about relationship issues india',
    'partner problems india', 'breakup support india', 'peer support relationship problems india',
    'talk to someone about relationship india', 'marriage problems india', 'relationship support online',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/relationship-advice-online-india',
    languages: { 'en-IN': 'https://www.leanon.app/relationship-advice-online-india' },
  },
  openGraph: {
    title: 'Relationship Support Online India — Real Human Peer Support',
    description: 'Talk with a screened peer listener about relationship stress. Use a display name; your phone number is not shown to listeners. Availability depends on who is online.',
    url: 'https://www.leanon.app/relationship-advice-online-india',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get relationship advice online in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn lets you talk with a screened peer listener about relationship problems. One introductory session of up to 5 minutes is free per account. Use a display name; availability depends on which listeners are online. This is peer support, not therapy or professional relationship counselling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to talk about my relationship problems online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn does not show your phone number to listeners, and you can choose a display name. Voice calls are not recorded. Text messages are stored securely and authorised LeanOn administrators may review them for safety, such as when a conversation is reported or flagged. Review the Privacy Policy for details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a peer listener help with serious relationship problems like divorce or abuse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A peer listener may offer a non-clinical conversation, but cannot assess risk or provide specialist domestic-abuse support. If you feel unsafe or are experiencing abuse, prioritise immediate safety and contact an appropriate local specialist service or emergency service. LeanOn is not an emergency service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of relationship issues can I talk about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anything: fights with your partner, feeling disconnected, thinking about a breakup, dealing with a breakup, problems with your parents about your relationship, loneliness within a relationship, trust issues, long-distance struggles, arranged marriage pressures — all of it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn better than searching for a relationship counsellor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn may suit you if you want a non-clinical conversation with a peer listener. It is not a substitute for a qualified relationship counsellor or mental-health professional. Paid text sessions start at ₹160 for 15 minutes with a listener charging ₹10 per minute; the price varies by listener and mode. There is no guarantee a listener will be available at every moment.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Support Online India', item: 'https://www.leanon.app/relationship-advice-online-india' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .logo{font-size:22px;font-weight:900;color:var(--navy);}
  .logo span{color:var(--teal);}
  .nav-cta{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  .breadcrumb{font-size:12px;color:var(--gray);margin-bottom:20px;}
  .breadcrumb a{color:var(--teal);}
  .breadcrumb span{margin:0 6px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;margin-bottom:32px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:18px;font-weight:800;margin-bottom:12px;}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .card p:last-child{margin-bottom:0;}
  .pill-list{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;}
  .pill{background:var(--light);border:1px solid var(--border);border-radius:50px;padding:7px 16px;font-size:13px;font-weight:700;color:var(--navy);}
  .steps{counter-reset:steps;list-style:none;}
  .steps li{counter-increment:steps;display:flex;gap:14px;margin-bottom:18px;align-items:flex-start;}
  .steps li::before{content:counter(steps);background:var(--teal);color:white;font-weight:900;font-size:14px;min-width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;}
  .steps li p{font-size:15px;color:#3A6070;line-height:1.68;}
  .steps li strong{display:block;color:var(--navy);font-weight:800;margin-bottom:4px;}
  .faq-item{border-top:1px solid var(--border);padding:16px 0;}
  .faq-item:last-child{border-bottom:1px solid var(--border);}
  .faq-item h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;line-height:1.4;}
  .faq-item p{font-size:14px;color:#3A6070;line-height:1.7;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;margin-bottom:24px;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn-white{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:900;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;display:inline-block;}
  .btn-orange{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:900;font-size:15px;padding:12px 28px;border-radius:50px;border:none;cursor:pointer;display:inline-block;margin-top:10px;}
  .related{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .related a{background:white;border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;font-size:13px;font-weight:700;color:var(--navy);line-height:1.4;}
  .related a:hover{border-color:var(--teal);}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  @media(max-width:480px){.related{grid-template-columns:1fr;}}
`

export default function RelationshipAdvicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>Relationship Support Online India
        </div>

        <h1>Relationship Problems?<br />Talk to Someone Who Will Actually Listen</h1>
        <p className="lead">
          Relationship stress can be hard to discuss with people you know. LeanOn offers a private one-to-one conversation with a screened peer listener by text or voice. Listeners are not therapists or relationship counsellors; this is non-clinical peer support, not professional advice or treatment.
        </p>

        <a href="/talk?src=seo" className="cta-hero">Talk to a listener now — first 5 min free →</a>

        <div className="card">
          <h2>You don&apos;t have to figure it out alone</h2>
          <p>Whether you&apos;re fighting with your partner, dealing with a breakup, confused about a situationship,
            or feeling disconnected in a marriage — these feelings deserve to be heard. Not judged, not fixed,
            just heard.</p>
          <p>LeanOn connects you with screened peer listeners who can listen without judgement. They are not therapists and cannot provide professional relationship counselling or decide what you should do. You lead the conversation and choose what to share.</p>
        </div>

        <div className="card">
          <h2>What people talk about</h2>
          <p>Our listeners hear about all kinds of relationship situations:</p>
          <div className="pill-list">
            <span className="pill">Fighting with partner</span>
            <span className="pill">Thinking about breakup</span>
            <span className="pill">After a breakup</span>
            <span className="pill">Long distance problems</span>
            <span className="pill">Feeling lonely in relationship</span>
            <span className="pill">Arranged marriage pressure</span>
            <span className="pill">Parents disapproving</span>
            <span className="pill">Trust issues</span>
            <span className="pill">Situationship confusion</span>
            <span className="pill">Marriage stress</span>
            <span className="pill">Divorce thoughts</span>
            <span className="pill">Feeling unloved</span>
          </div>
        </div>

        <div className="card">
          <h2>How it works</h2>
          <ul className="steps">
            <li>
              <div>
                <strong>Browse available listeners</strong>
                <p>See who is online right now. Read their short bios and pick someone who feels right for you.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Start your first session free</strong>
                <p>First 5 minutes are on us. No payment card needed to start.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Say exactly what is on your mind</strong>
                <p>Listeners are screened and expected to ask open questions and truly hear you — not to give unsolicited advice
                  or tell you to leave/stay.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Leave feeling lighter</strong>
                <p>Sometimes just saying it out loud to someone who cares is enough to feel clearer.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Why not just talk to a friend?</h2>
          <p>Friends mean well, but they also have opinions, history, and emotions of their own. They may side
            with your partner, tell your mutual friends, or feel awkward next time they see you both.</p>
          <p>LeanOn listeners are screened and expected to be neutral. They have no stake in the outcome. Their only job is
            to help you feel heard — and that changes everything.</p>
        </div>

        <div className="card">
          <h2>A different kind of support—not therapy</h2>
          <p>Professional therapy costs and wait times vary by provider and location. LeanOn is a different option for a non-clinical conversation, not a cheaper replacement for treatment. Paid text sessions start at ₹160 for 15 minutes with a listener charging ₹10 per minute; the price varies by listener and mode. Availability depends on which listeners are online.</p>
          <p>If you need diagnosis, treatment, medication advice or specialist support, speak with a qualified professional.</p>
        </div>

        <div className="cta">
          <h2>Ready to talk?</h2>
          <p>Private peer conversation, with the price shown before you start. Availability depends on which listeners are online.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/talk?src=seo" className="btn-orange">Talk now</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>How do I get relationship advice online in India?</h3>
            <p>LeanOn lets you talk with a screened peer listener about relationship problems. One introductory session of up to 5 minutes is free per account. Use a display name; availability depends on which listeners are online. This is peer support, not therapy or professional relationship counselling.</p>
          </div>
          <div className="faq-item">
            <h3>Is it safe to talk about my relationship problems online?</h3>
            <p>LeanOn does not show your phone number to listeners, and you can choose a display name. Voice calls are not recorded. Text messages are stored securely and authorised LeanOn administrators may review them for safety, such as when a conversation is reported or flagged. Review the Privacy Policy for details.</p>
          </div>
          <div className="faq-item">
            <h3>What kinds of relationship issues can I talk about?</h3>
            <p>Anything: fights with your partner, breakups, long-distance struggles, trust issues, arranged
              marriage pressures, feeling lonely in a relationship — all of it.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn better than searching for a relationship counsellor?</h3>
            <p>LeanOn may suit you if you want a non-clinical conversation with a peer listener. It is not a substitute for a qualified relationship counsellor or mental-health professional. Paid text sessions start at ₹160 for 15 minutes with a listener charging ₹10 per minute; the price varies by listener and mode. There is no guarantee a listener will be available at every moment.</p>
          </div>
          <div className="faq-item">
            <h3>Can a peer listener help with serious problems like domestic abuse?</h3>
            <p>A peer listener may offer a non-clinical conversation, but cannot assess risk or provide specialist domestic-abuse support. If you feel unsafe or are experiencing abuse, prioritise immediate safety and contact an appropriate local specialist service or emergency service. LeanOn is not an emergency service.</p>
          </div>
        </div>

        <div className="related">
          <a href="/i-need-someone-to-talk-to">I need someone to talk to →</a>
          <a href="/astrotalk-alternative">AstroTalk alternative →</a>
          <a href="/support/anxiety">Anxiety support →</a>
          <a href="/feeling-lonely-in-india">Feeling lonely in India →</a>
          <a href="/alternatives-to-therapy-india">Alternatives to therapy →</a>
          <a href="/online-emotional-support-india">Online emotional support →</a>
        </div>

        <div className="disclaimer">
          <p>⚠️ If you are in crisis or thinking about self-harm, please reach out immediately:<br />
            <strong>NIMHANS helpline: 080-46110007</strong> &nbsp;|&nbsp;
            <strong>Tele-MANAS: 14416</strong> (free, 24/7)<br />
            LeanOn is peer support — not a substitute for professional mental health care or emergency services.
          </p>
        </div>
      </div>
    </>
  )
}
