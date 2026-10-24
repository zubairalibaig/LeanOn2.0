import type { Metadata } from 'next'
import GeoQuickAnswer from '@/app/components/GeoQuickAnswer'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Pay for a Private Conversation with a Human Listener in India | LeanOn',
  description: 'Pay to talk to a real peer listener in India. One free 5-minute introduction per account; prices depend on listener rate, with a 15-minute example at ₹160.',
  keywords: [
    'pay to talk to someone online india', 'pay per minute chat india', 'paid chat online india',
    'pay someone to listen india', 'pay to vent online india', 'talk to someone online india paid',
    'online listener india', 'peer support india', 'pay for emotional support india',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/pay-to-talk-online-india',
    languages: { 'en-IN': 'https://www.leanon.app/pay-to-talk-online-india' },
  },
  openGraph: {
    title: 'Pay to Talk to a Real Person Online | LeanOn',
    description: 'Pay to talk to a real peer listener in India. One free 5-minute introduction per account; prices depend on listener rate, with a 15-minute example at ₹160.',
    url: 'https://www.leanon.app/pay-to-talk-online-india',
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
      name: 'Is it worth paying to talk to someone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whether paying is worthwhile depends on what you need. LeanOn is for people who want a real person to listen, not an AI response or an astrology prediction. One introductory session of up to 5 minutes is free per account. Paid sessions are priced by the selected listener’s rate and duration, plus a flat ₹10 platform fee; the price is shown before you start.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost per minute to talk on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In India, the session total is the selected listener’s per-minute rate × session length, plus a flat ₹10 platform fee. For example, 15 minutes at ₹10/min costs ₹160; another listener rate changes the total. One introductory session of up to 5 minutes is free per account. See https://www.leanon.app/pricing for current details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn uses phone OTP for sign-in, but your phone number is not shown to listeners; you can use a display name. This does not mean you are anonymous to the platform. Read the Privacy Policy for details about data handling, safety checks and your choices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I talk about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anything that is on your mind — relationship stress, family pressure, work anxiety, loneliness, confusion, grief, or just needing to vent. LeanOn listeners are screened and expected to hold space without judging or advising. You do not need a big reason to reach out.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Pay to Talk Online India', item: 'https://www.leanon.app/pay-to-talk-online-india' },
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
  .price-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;}
  .price-box{border-radius:14px;padding:18px;text-align:center;}
  .price-box.them{background:#FFF5F5;border:1.5px solid #FFD5D5;}
  .price-box.us{background:#F0FBFC;border:1.5px solid #A8E0E8;}
  .price-box .label{font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:6px;}
  .price-box.them .label{color:#B03030;}
  .price-box.us .label{color:var(--teal);}
  .price-box .amount{font-size:24px;font-weight:900;line-height:1.1;}
  .price-box.them .amount{color:#C04040;}
  .price-box.us .amount{color:var(--navy);}
  .price-box .detail{font-size:12px;color:var(--gray);margin-top:4px;line-height:1.5;}
  .price-box.us .free-badge{display:inline-block;background:var(--orange);color:white;font-size:11px;font-weight:800;padding:2px 10px;border-radius:50px;margin-top:6px;}
  .compare-table{width:100%;border-collapse:collapse;font-size:14px;margin-top:12px;}
  .compare-table th{background:var(--light);padding:10px 12px;text-align:left;font-weight:800;color:var(--navy);}
  .compare-table td{padding:10px 12px;border-top:1px solid var(--border);color:#3A6070;vertical-align:top;}
  .compare-table tr:nth-child(even) td{background:#FAFCFF;}
  .tick{color:#1A8FA0;font-weight:900;}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.price-row{grid-template-columns:1fr;}.compare-table{font-size:13px;}}
`

export default function PayToTalkOnlineIndiaPage() {
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
          <a href="/">Home</a><span>›</span>Pay to Talk Online India
        </div>

        <h1>Affordable, Private Conversations with a Human Listener in India</h1>
        <p style={{ fontSize: 20, fontWeight: 800, color: '#FF9933', margin: '-6px 0 14px' }}>Pay per minute to talk to a real person who listens — choose who, by text or voice.</p>
        <p className="lead">
          If you want a real person to listen rather than an AI response or a prediction, LeanOn offers one-to-one conversations with screened peer listeners. It is peer support, not therapy or clinical care. Your first introductory session of up to 5 minutes is free once per account; check the displayed price before starting a paid session.
        </p>

        <a href="/talk?src=seo" className="cta-hero">Try your free 5-minute introduction →</a>

        <GeoQuickAnswer path="/pay-to-talk-online-india" />
        <div className="card">
          <h2>You&apos;re already paying to be heard. It&apos;s completely normal.</h2>
          <p>
            Every time someone calls an AstroTalk astrologer or opens a paid chat app, there is usually
            one real reason: they need to talk. Not horoscopes. Not predictions. Just a real person
            on the other end who will listen without judgment.
          </p>
          <p>
            Paying for a conversation is a personal choice. LeanOn serves a different need from astrology or prediction services: a real peer listener focused on hearing you out, without making predictions or providing clinical treatment.
          </p>
          <p>
            LeanOn focuses on a real, screened peer listener. Browse the live directory to see who is currently available; a session begins when a listener accepts your request.
          </p>
        </div>

        <div className="card">
          <h2>What you&apos;re actually paying for</h2>
          <div className="price-row">
            <div className="price-box them">
              <div className="label">AstroTalk</div>
              <div className="amount">Rates vary</div>
              <div className="detail">Service and pricing depend on the platform</div>
            </div>
            <div className="price-box us">
              <div className="label">LeanOn</div>
              <div className="amount">₹160 example</div>
              <div className="detail">Example: 15 min at ₹10/min + ₹10 platform fee<br />Peer listener, not clinical care</div>
              <div className="free-badge">First 5 min free once/account</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Who you&apos;ll talk to</h2>
          <ul className="steps">
            <li>
              <div>
                <strong>Real people, not AI</strong>
                <p>Every listener on LeanOn is a human being. No bots, no scripts, no auto-responses.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Screened to listen, not to advise</strong>
                <p>Listeners go through peer support training — active listening, open questions, reflecting back.
                  They are not there to solve your problems or tell you what to do.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Check live availability</strong>
                <p>Browse who is online and send a session request. The conversation starts when a listener accepts.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>LeanOn vs paid chat apps in India</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>What you get</th>
                <th>LeanOn</th>
                <th>AstroTalk / chat apps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Someone who listens</td>
                <td className="tick">Yes — that&apos;s the whole point</td>
                <td>Incidentally, wrapped in predictions</td>
              </tr>
              <tr>
                <td>Price per minute</td>
                <td className="tick">Varies by listener</td>
                <td>Varies by platform</td>
              </tr>
              <tr>
                <td>First session cost</td>
                <td className="tick">Free once per account (5 min)</td>
                <td>Varies, often paid</td>
              </tr>
              <tr>
                <td>Phone number shown to listener?</td>
                <td className="tick">No; display name is shown</td>
                <td>Depends on platform</td>
              </tr>
              <tr>
                <td>No unsolicited advice</td>
                <td className="tick">Yes — screened to hold space</td>
                <td>Depends on the person</td>
              </tr>
              <tr>
                <td>No astrology / predictions</td>
                <td className="tick">Zero</td>
                <td>Core product</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>What you can talk about</h2>
          <p>Relationship problems. Family pressure. Work stress. Feeling stuck or overwhelmed. Loneliness.
            Grief. Not knowing what to do next. Not feeling like yourself. There is no topic too small
            and no mood you have to explain first.</p>
          <p>Listeners do not need you to arrive with a neat problem. If something is bothering you,
            that is a good enough reason.</p>
        </div>

        <div className="cta">
          <h2>Ready to talk to a real person?</h2>
          <p>No astrologer. No AI. Just someone who is there to listen.</p>
          <a href="/talk?src=seo" className="btn-white">Try your free 5-minute introduction →</a><br />
          <a href="/browse" className="btn-orange">Browse listeners →</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is it worth paying to talk to someone?</h3>
            <p>Whether paying is worthwhile depends on what you need. LeanOn is for people who want a real person to listen, not an AI response or prediction. One introductory session of up to 5 minutes is free per account. Paid sessions are priced according to the selected listener’s rate and duration, plus a flat ₹10 platform fee; you see the price before starting.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost per minute?</h3>
            <p>In India, the total is the selected listener’s rate per minute × session length, plus a flat ₹10 platform fee. For example, 15 minutes at ₹10/min costs ₹160; the total changes with the listener’s rate. One introductory session of up to 5 minutes is free per account. See <a href="/pricing">current pricing</a>.</p>
          </div>
          <div className="faq-item">
            <h3>Is it anonymous?</h3>
            <p>You sign in using phone OTP, but your phone number is not shown to listeners; you can use a display name. This does not mean you are anonymous to the platform. Review the <a href="/privacy">Privacy Policy</a> for details.</p>
          </div>
          <div className="faq-item">
            <h3>What can I talk about?</h3>
            <p>Anything that is on your mind — relationship stress, family pressure, work anxiety, loneliness,
              confusion, grief, or just needing to vent. Listeners are screened and expected to hold space without judging or
              advising. You do not need a big reason to reach out.</p>
          </div>
        </div>

        <div className="related">
          <a href="/astrotalk-alternative">AstroTalk alternative →</a>
          <a href="/relationship-advice-online-india">Relationship support online →</a>
          <a href="/talk-about-my-problems-online">Talk about my problems online →</a>
          <a href="/chat-with-real-person">Chat with a real person →</a>
        </div>

        <div className="disclaimer">
          <p>⚠️ If you are in crisis or thinking about self-harm, please reach out immediately:<br />
            <strong>NIMHANS helpline: 080-46110007</strong> &nbsp;|&nbsp;
            <strong>Tele-MANAS: 14416</strong> (free, 24/7)<br />
            LeanOn is peer support — not a substitute for emergency mental health care.
          </p>
        </div>
      </div>
    </>
  )
}
