import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Looking for a YourDOST Alternative? Try LeanOn',
  description: 'YourDOST feels corporate and expensive. LeanOn connects you to a real peer listener in under 2 minutes — anonymous, ₹160/session, no HR data sharing.',
  keywords: [
    'yourdost alternative', 'alternative to yourdost', 'yourdost vs leanon',
    'corporate wellness alternative india', 'peer support india', 'anonymous mental health support india',
    'talk to someone without hr knowing', 'affordable emotional support india', 'yourdost without employer',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/yourdost-alternative',
    languages: { 'en-IN': 'https://www.leanon.app/yourdost-alternative' },
  },
  openGraph: {
    title: 'Looking for a YourDOST Alternative? Try LeanOn',
    description: 'YourDOST feels corporate and expensive. LeanOn connects you to a real peer listener in under 2 minutes — anonymous, ₹160/session, no HR data sharing.',
    url: 'https://www.leanon.app/yourdost-alternative',
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
      name: 'Is LeanOn like YourDOST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn and YourDOST both exist to help you feel better — but they work very differently. YourDOST connects you with credentialed counselors through your employer. LeanOn connects you with trained peer listeners who have been through similar experiences, directly and anonymously, without any employer involvement. Think of LeanOn as a complement to therapy — more accessible, more immediate, and completely private.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my conversation private from my employer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely. LeanOn has no relationship with your employer. You sign up with just a phone number — no company email, no employee ID, no HR portal. Your conversations are between you and your listener only. No one at your company will ever know you used it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I just need to vent, not get counseling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is exactly what LeanOn is designed for. Sometimes you do not need a diagnosis or a treatment plan — you just need someone to hear you out without judgment. Our peer listeners are trained to hold space, ask gentle questions, and help you feel understood. No clinical notes, no homework, no advice you did not ask for.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost compared to YourDOST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your company\'s YourDOST subscription has expired — or you left the job — counseling sessions typically cost ₹500 to ₹2,000 per session out of pocket. On LeanOn, sessions start at ₹160 for 15 minutes, and your very first 5 minutes are free. No subscription, no commitment, pay only when you want to talk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn without a corporate subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has nothing to do with your employer. Anyone in India can sign up directly — whether you are employed, between jobs, a student, or self-employed. You just need a phone number to get started, and your first session is free.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'YourDOST Alternative', item: 'https://www.leanon.app/yourdost-alternative' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#3ABFBF;--orange:#F4845F;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
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
  .compare-table{width:100%;border-collapse:collapse;font-size:14px;margin-top:12px;}
  .compare-table th{background:var(--light);padding:10px 12px;text-align:left;font-weight:800;color:var(--navy);}
  .compare-table td{padding:10px 12px;border-top:1px solid var(--border);color:#3A6070;vertical-align:top;}
  .compare-table tr:nth-child(even) td{background:#FAFCFF;}
  .tick{color:var(--teal);font-weight:900;}
  .cross{color:#B0B0C0;}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.compare-table{font-size:13px;}}
`

export default function YourDOSTAlternativePage() {
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
          <a href="/">Home</a><span>›</span>YourDOST Alternative
        </div>

        <h1>Looking for a YourDOST Alternative? Try LeanOn</h1>
        <p className="lead">
          YourDOST does good work — but it is tied to your employer, runs on office hours, and can feel clinical
          when you just need to talk. LeanOn connects you with a real peer listener in under 2 minutes,
          completely anonymously, any time of day or night. No HR, no corporate portal, no waiting list.
        </p>

        <a href="/auth" className="cta-hero">Start free — talk in 2 min →</a>

        <div className="card">
          <h2>When YourDOST is not quite right for you</h2>
          <p>
            YourDOST is valuable as a corporate benefit — but it has limits that matter. Access disappears
            when you change jobs or your company&apos;s subscription lapses. Sessions are scheduled in advance
            and mostly happen during work hours. And because it is linked to your employer, there is always
            a quiet worry: <em>who can see this?</em>
          </p>
          <p>
            Many working professionals find themselves in a gap — they know they want support, but therapy
            feels too heavy, too expensive, or just not what they need right now. They want to talk to
            someone who actually gets it, quickly, without it going anywhere near their HR file.
          </p>
          <p>
            That is exactly the gap LeanOn was built for.
          </p>
        </div>

        <div className="card">
          <h2>YourDOST vs LeanOn — what actually differs</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>YourDOST</th>
                <th>LeanOn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Who you talk to</td>
                <td>Counselor / therapist</td>
                <td className="tick">Peer listener who&apos;s been there</td>
              </tr>
              <tr>
                <td>Session cost</td>
                <td>₹500–₹2,000 per session</td>
                <td className="tick">₹160 per session</td>
              </tr>
              <tr>
                <td>First session free?</td>
                <td className="cross">No</td>
                <td className="tick">✅ First 5 min free</td>
              </tr>
              <tr>
                <td>Anonymous?</td>
                <td className="cross">Linked to employer</td>
                <td className="tick">✅ Fully anonymous</td>
              </tr>
              <tr>
                <td>Available 24/7?</td>
                <td className="cross">Weekday hours</td>
                <td className="tick">✅ Even at 2 AM</td>
              </tr>
              <tr>
                <td>Response time</td>
                <td className="cross">Schedule ahead</td>
                <td className="tick">✅ Under 2 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>How LeanOn works — 3 simple steps</h2>
          <ul className="steps">
            <li>
              <div>
                <strong>Browse listeners</strong>
                <p>See who is online right now. Each listener has a short bio so you can pick someone who feels like the right fit for what you are going through.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Start your free session</strong>
                <p>Your first 5 minutes are completely free — no payment needed, no commitment. Just start talking whenever you are ready.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Feel heard, not filed</strong>
                <p>Listeners hold space for you, ask gentle questions, and reflect back what they hear. Nothing goes to your employer. Nothing goes anywhere except between you and your listener.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Who uses LeanOn after YourDOST</h2>
          <p>
            A lot of the people who find LeanOn have used YourDOST before — and liked it, actually. But then
            something changed: they switched jobs, got laid off, started freelancing, or their company stopped
            the subscription. Suddenly the support they had relied on was gone.
          </p>
          <p>
            Others are still employed but want something they can reach at 11 PM after a rough day — not book
            for next Tuesday. Or they want to vent about work stress without even the smallest chance of it
            feeding back to their manager.
          </p>
          <p>
            LeanOn is not trying to replace YourDOST. It is the thing you reach for when YourDOST is not
            available, not affordable, or not private enough for the moment.
          </p>
        </div>

        <div className="cta">
          <h2>Ready to talk — on your terms?</h2>
          <p>No employer involvement. No scheduling. No waiting list. Just a real person, right now.</p>
          <a href="/auth" className="btn-white">Start free — talk in 2 min →</a><br />
          <a href="/browse" className="btn-orange">Browse peer listeners →</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is LeanOn like YourDOST?</h3>
            <p>LeanOn and YourDOST both exist to help you feel better — but they work very differently.
              YourDOST connects you with credentialed counselors through your employer. LeanOn connects you
              with trained peer listeners, directly and anonymously, with no employer involvement. Think of
              LeanOn as more accessible and more immediate — a complement to therapy, not a replacement.</p>
          </div>
          <div className="faq-item">
            <h3>Is my conversation private from my employer?</h3>
            <p>Yes, completely. LeanOn has no relationship with your employer. You sign up with just a
              phone number — no company email, no employee ID, no HR portal. Your conversations are
              between you and your listener only. No one at your company will ever know you used it.</p>
          </div>
          <div className="faq-item">
            <h3>What if I just need to vent, not get counseling?</h3>
            <p>That is exactly what LeanOn is designed for. Sometimes you do not need a diagnosis or a
              treatment plan — you just need someone to hear you out without judgment. Our peer listeners
              are trained to hold space and help you feel understood. No clinical notes, no homework,
              no unsolicited advice.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost compared to YourDOST?</h3>
            <p>If your company&apos;s YourDOST subscription has lapsed, counseling sessions typically
              cost ₹500 to ₹2,000 per session out of pocket. On LeanOn, sessions start at ₹160 for
              15 minutes, and your very first 5 minutes are free. No subscription, no commitment —
              pay only when you want to talk.</p>
          </div>
          <div className="faq-item">
            <h3>Can I use LeanOn without a corporate subscription?</h3>
            <p>Yes. LeanOn has nothing to do with your employer. Anyone in India can sign up directly —
              whether you are employed, between jobs, a student, or self-employed. You just need a phone
              number to get started, and your first session is free.</p>
          </div>
        </div>

        <div className="related">
          <a href="/cant-afford-therapy-india">Can&apos;t afford therapy in India →</a>
          <a href="/peer-support-online-india">Peer support online India →</a>
          <a href="/online-counseling-india">Online counseling India →</a>
          <a href="/alternatives-to-therapy-india">Alternatives to therapy →</a>
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
