import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'GetCompanion Alternative — LeanOn | Peer Support Without the Middleman',
  description: 'GetCompanion charges for companionship. LeanOn connects you with real peer listeners who have lived through what you\'re facing — ₹160/session, free 5-min trial, no "Happiness Executive" label.',
  keywords: [
    'getcompanion alternative', 'alternative to getcompanion', 'getcompanion vs leanon',
    'companionship app india', 'paid companionship alternative', 'loneliness support india',
    'someone to talk to india', 'peer support india', 'emotional support india',
    'happiness executive alternative', 'affordable emotional support india',
    'talk to real person india', 'human connection india',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/getcompanion-alternative',
    languages: { 'en-IN': 'https://www.leanon.app/getcompanion-alternative' },
  },
  openGraph: {
    title: 'GetCompanion Alternative — LeanOn | Peer Support Without the Middleman',
    description: 'GetCompanion charges for companionship. LeanOn connects you with real peer listeners who have lived through what you\'re facing — ₹160/session, free 5-min trial.',
    url: 'https://www.leanon.app/getcompanion-alternative',
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
      name: 'How is LeanOn different from GetCompanion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GetCompanion connects you with "Happiness Executives" for paid companionship — conversations, walks, meals, hospital visits. LeanOn connects you with peer listeners who have personally lived through what you are facing: loneliness, burnout, grief, breakups, anxiety, and more. The difference is lived experience. A LeanOn listener does not just keep you company — they understand what you are going through because they have been there themselves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn cheaper than GetCompanion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn sessions start at ₹160 for 15 minutes, and your very first 5 minutes with each new listener are completely free — no wallet top-up needed. Both platforms use per-minute billing from a wallet, but LeanOn\'s free trial lets you find the right listener before spending anything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to meet someone in person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is fully online — text chat or voice call from anywhere in India or abroad. You never need to meet anyone in person or share your location. This makes it accessible whether you are in Mumbai, a small town, or living abroad as an NRI.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a "Happiness Executive" and a peer listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Happiness Executive on GetCompanion is trained in empathetic conversation and companionship skills. A peer listener on LeanOn has lived through the same challenge you are facing — loneliness, a breakup, work burnout, grief — and found their way through it. The empathy comes from personal experience, not just training. That shared understanding is what makes peer support different from paid companionship.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn if I am an Indian living abroad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has dedicated support for Indians and South Asians living in the USA, UK, Canada, Australia, UAE, Oman, Kuwait, Singapore, and Malaysia. You can talk with a peer listener who understands the cultural context — homesickness, family pressure from India, visa stress, cultural adjustment — by text or voice, at any hour.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'GetCompanion Alternative', item: 'https://www.leanon.app/getcompanion-alternative' },
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

export default function GetCompanionAlternativePage() {
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
          <a href="/">Home</a><span>&rsaquo;</span>GetCompanion Alternative
        </div>

        <h1>Looking for a GetCompanion Alternative? Try LeanOn</h1>
        <p className="lead">
          GetCompanion offers paid companionship with trained &ldquo;Happiness Executives.&rdquo;
          LeanOn offers something different: peer listeners who have personally lived through what
          you are going through. They are not just keeping you company &mdash; they understand
          your loneliness, burnout, or heartbreak because they have been there themselves.
        </p>

        <a href="/auth" className="cta-hero">Start free &mdash; talk in 2 min &rarr;</a>

        <div className="card">
          <h2>Companionship vs lived-experience peer support</h2>
          <p>
            Both GetCompanion and LeanOn exist because millions of people in India need someone
            to talk to &mdash; someone who listens without judgment. The difference is in <em>who</em> you
            talk to and <em>why</em> they understand.
          </p>
          <p>
            GetCompanion connects you with Happiness Executives &mdash; people trained in empathetic
            conversation, available for chat, calls, or even in-person meetups in Gurugram. It is
            companionship as a service: someone pleasant to spend time with.
          </p>
          <p>
            LeanOn connects you with peer listeners who have personally navigated the same challenge
            you are facing. A listener who helps with breakup pain has been through a breakup. A
            listener who supports work burnout has lived through burnout. That shared experience
            means the empathy is not just trained &mdash; it is real.
          </p>
        </div>

        <div className="card">
          <h2>GetCompanion vs LeanOn &mdash; what actually differs</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>GetCompanion</th>
                <th>LeanOn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Who you talk to</td>
                <td>Happiness Executive</td>
                <td className="tick">Peer listener with lived experience</td>
              </tr>
              <tr>
                <td>Why they understand</td>
                <td>Trained in empathy</td>
                <td className="tick">Been through the same thing</td>
              </tr>
              <tr>
                <td>Free trial</td>
                <td className="cross">No</td>
                <td className="tick">5 min free per new listener</td>
              </tr>
              <tr>
                <td>Session cost</td>
                <td>Per-minute from wallet</td>
                <td className="tick">From &#8377;160 / 15 min</td>
              </tr>
              <tr>
                <td>In-person meetups</td>
                <td>Gurugram only</td>
                <td>Online only (text + voice)</td>
              </tr>
              <tr>
                <td>Available from</td>
                <td>App required</td>
                <td className="tick">Any browser, no install</td>
              </tr>
              <tr>
                <td>NRI / diaspora support</td>
                <td className="cross">India-focused</td>
                <td className="tick">10 countries with dedicated pages</td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>Not specified</td>
                <td className="tick">12 Indian languages</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>When LeanOn is the better fit</h2>
          <p>
            <strong>You want someone who actually gets it.</strong> Not just pleasant conversation &mdash;
            you want to talk to someone who has navigated loneliness, a toxic workplace, a breakup, or
            family pressure themselves. Lived experience creates a depth of understanding that general
            companionship training cannot.
          </p>
          <p>
            <strong>You are not in Gurugram.</strong> GetCompanion&apos;s in-person services are limited
            to Gurugram. LeanOn is fully online &mdash; accessible from any city in India, or from abroad
            if you are an NRI dealing with homesickness or cultural isolation.
          </p>
          <p>
            <strong>You want to try before you pay.</strong> LeanOn gives you a free 5-minute session
            with every new listener. No wallet top-up, no commitment. Find the right person first.
          </p>
          <p>
            <strong>You prefer text over meeting a stranger.</strong> Some people find it easier to
            open up over text than face-to-face. LeanOn&apos;s text and voice sessions let you share
            at your own pace, from the privacy of your own space.
          </p>
        </div>

        <div className="card">
          <h2>How LeanOn works &mdash; 3 simple steps</h2>
          <ul className="steps">
            <li>
              <div>
                <strong>Browse peer listeners</strong>
                <p>See who is online right now. Read bios, topics, ratings, and languages. Pick someone whose lived experience matches what you are going through.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Start your free session</strong>
                <p>Your first 5 minutes are completely free &mdash; no payment needed. Start a text chat or voice call whenever you are ready.</p>
              </div>
            </li>
            <li>
              <div>
                <strong>Continue if it clicks</strong>
                <p>If you find the right listener, extend to a 15, 30, or 45-minute paid session. Recharge your wallet with UPI, cards, or net banking. Unused balance is fully refundable.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="cta">
          <h2>Real peer support &mdash; not just companionship</h2>
          <p>Talk to someone who has been where you are. Free to start, no app to install.</p>
          <a href="/auth" className="btn-white">Start free &mdash; talk in 2 min &rarr;</a><br />
          <a href="/browse" className="btn-orange">Browse peer listeners &rarr;</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>How is LeanOn different from GetCompanion?</h3>
            <p>GetCompanion connects you with trained Happiness Executives for paid companionship.
              LeanOn connects you with peer listeners who have personally lived through what you are
              facing. The difference is lived experience &mdash; a LeanOn listener understands your
              challenge because they have navigated it themselves.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn cheaper than GetCompanion?</h3>
            <p>LeanOn sessions start at &#8377;160 for 15 minutes. Your first 5 minutes with
              each new listener are free &mdash; no wallet top-up needed. Both platforms use
              per-minute billing, but LeanOn&apos;s free trial lets you find the right fit first.</p>
          </div>
          <div className="faq-item">
            <h3>Do I need to meet someone in person?</h3>
            <p>No. LeanOn is fully online &mdash; text chat or voice call from anywhere. You never
              need to share your location or meet anyone face-to-face.</p>
          </div>
          <div className="faq-item">
            <h3>What is the difference between a Happiness Executive and a peer listener?</h3>
            <p>A Happiness Executive is trained in empathetic conversation. A LeanOn peer listener
              has lived through the same challenge you are facing and found their way through it.
              The empathy comes from personal experience, not just training.</p>
          </div>
          <div className="faq-item">
            <h3>Can I use LeanOn from outside India?</h3>
            <p>Yes. LeanOn supports Indians and South Asians in the USA, UK, Canada, Australia,
              UAE, Oman, Kuwait, Singapore, and Malaysia. Talk to a peer listener who understands
              homesickness, family pressure, and cultural adjustment.</p>
          </div>
        </div>

        <div className="related">
          <a href="/loneliness-support-india">Loneliness support India &rarr;</a>
          <a href="/peer-support-online-india">Peer support online India &rarr;</a>
          <a href="/ai-chatbot-alternative">AI chatbot alternative &rarr;</a>
          <a href="/alternatives-to-therapy-india">Alternatives to therapy &rarr;</a>
        </div>

        <div className="disclaimer">
          <p>If you are in crisis or thinking about self-harm, please reach out immediately:<br />
            <strong>NIMHANS helpline: 080-46110007</strong> &nbsp;|&nbsp;
            <strong>Tele-MANAS: 14416</strong> (free, 24/7)<br />
            LeanOn is peer support &mdash; not a substitute for emergency mental health care.
          </p>
        </div>
      </div>
    </>
  )
}
