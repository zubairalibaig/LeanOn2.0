import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Paid Friend India — A Real Person Who Actually Listens | LeanOn',
  description: 'Sometimes you just need a friend who listens without judgment. LeanOn peer listeners are real people, not therapists — real conversations from ₹160.',
  keywords: [
    'paid friend india', 'rent a friend india', 'friend for hire india',
    'friendship support india', 'online friend india', 'talk like a friend india',
    'paid listener india', 'someone to talk to india', 'friend who listens india',
  ],
  alternates: { canonical: 'https://www.leanon.app/paid-friend-india', languages: { 'en-IN': 'https://www.leanon.app/paid-friend-india' } },
  openGraph: {
    title: 'Paid Friend India — A Real Person Who Actually Listens | LeanOn',
    description: 'Sometimes you just need a friend who listens without judgment. LeanOn peer listeners are real people, not therapists — real conversations from ₹160.',
    url: 'https://www.leanon.app/paid-friend-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Paid Friend India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a paid friend the same as a therapist?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. A therapist is a licensed professional who diagnoses and treats mental health conditions. A peer listener on LeanOn is a real person with lived experience who listens, empathises, and holds space. There is no diagnosis, no clinical framework, no treatment plan. It is much closer to a good friend conversation than a therapy session. LeanOn is not a substitute for therapy when clinical care is needed.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You sign up with just your phone number and first name. The listener knows your first name and nothing else unless you choose to share it. There is no profile, no social media connection, no way for the conversation to reach your social circle.' },
    },
    {
      '@type': 'Question',
      name: 'What do I talk about?',
      acceptedAnswer: { '@type': 'Answer', text: 'Anything. The things you can\'t tell the people in your life. Relationship frustration. Work stress. Family pressure. Loneliness you can\'t explain. The feeling that something is wrong but you can\'t name it. There is no topic that is too small or too large. You set the agenda.' },
    },
    {
      '@type': 'Question',
      name: 'Is ₹160 really the cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 15-minute session starts at ₹160. Longer sessions (30 or 45 minutes) cost proportionally more. The first 5 minutes of every session are free, so you can assess the connection before committing. There are no subscriptions, no hidden fees, no automatic renewals.' },
    },
    {
      '@type': 'Question',
      name: 'Can I choose who I talk to?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You browse listener profiles, read about their background and areas of experience, and choose who you want to talk to. If a session does not feel right, you can end it during the free 5-minute window and choose someone else.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Paid Friend India', item: 'https://www.leanon.app/paid-friend-india' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:780px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .compare-table{width:100%;border-collapse:collapse;margin-bottom:14px;font-size:14px;}
  .compare-table th{background:var(--light);color:var(--navy);font-weight:800;padding:12px 14px;text-align:left;border-bottom:2px solid var(--border);}
  .compare-table td{padding:12px 14px;border-bottom:1.5px solid var(--border);color:#3A6070;line-height:1.6;}
  .compare-table tr:last-child td{border-bottom:none;}
  .highlight-row td{background:#F0F8FC;font-weight:700;color:var(--navy);}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .related a{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);display:block;}
  .related a:hover{border-color:var(--teal);color:var(--teal);}
`

export default function PaidFriendIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Paid Friend India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free, 24/7)
        </div>

        <div className="hero">
          <p className="badge">Peer Support &middot; India &middot; From &#8377;160</p>
          <h1>Not a therapist. Not a bot. <em>Someone who actually listens</em> &mdash; like a friend.</h1>
          <p className="lead">A good friend would listen without judgment, without unsolicited advice, without making it about themselves. LeanOn listeners are trained to be exactly that &mdash; available when your actual friends can&apos;t be.</p>
          <a href="/browse" className="cta-hero">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>What Is a Paid Friend?</h2>
          <p>The concept of paying someone to listen &mdash; or to spend time with you &mdash; is not new. In Japan, the &ldquo;rent-a-friend&rdquo; industry has existed for decades, with people hiring &ldquo;client partners&rdquo; to accompany them to events, provide company, or simply listen. The industry is enormous and mainstream there.</p>
          <p>In India, the concept is arriving in a different form. Not companionship for events, but emotional support through conversation. The need is the same: a real human being, without agenda, who will give you their full attention and genuinely hear you.</p>
          <p>LeanOn is not &ldquo;rent a friend&rdquo; in the companionship sense. It is peer emotional support &mdash; a trained listener who holds space for your experience without judging, steering, or advising. Closer to the best version of a friend who actually listens than to a therapist or a companion service.</p>
        </div>

        <div className="section">
          <h2>Why You Might Need a Paid Listener</h2>
          <p>The people who search for &ldquo;paid friend India&rdquo; are not people who have no one. They are people whose existing support system is not working for this particular thing. Some reasons:</p>
          <ul>
            <li>Your friends have their own problems. Calling them to talk about yours feels like a burden.</li>
            <li>Your friends give advice instead of listening. You&apos;re not looking for advice right now. You need to be heard.</li>
            <li>The situation is too personal to share with people who know the other parties.</li>
            <li>You&apos;ve already talked about it so many times that you don&apos;t want to put your friends through it again.</li>
            <li>There&apos;s something you haven&apos;t told anyone &mdash; not because you don&apos;t need to say it, but because there&apos;s no safe person to say it to.</li>
          </ul>
          <p>These are not signs of a broken social life. They are ordinary human situations that existing friendship structures were not designed to handle.</p>
        </div>

        <div className="section">
          <h2>Difference Between a Paid Friend and a Therapist</h2>
          <div style={{overflowX:'auto'}}>
            <table className="compare-table">
              <thead>
                <tr><th>Dimension</th><th>Therapist / Counsellor</th><th>LeanOn Peer Listener</th></tr>
              </thead>
              <tbody>
                <tr><td>Training</td><td>Licensed mental health professional</td><td>Trained peer with lived experience</td></tr>
                <tr><td>Purpose</td><td>Diagnose and treat clinical conditions</td><td>Listen, empathise, support</td></tr>
                <tr><td>Tone</td><td>Clinical, structured</td><td>Human, conversational</td></tr>
                <tr><td>Availability</td><td>Appointments, waiting lists</td><td>Available now, no appointment</td></tr>
                <tr className="highlight-row"><td>Cost</td><td>&#8377;1,500&ndash;5,000/session</td><td>From &#8377;160/session</td></tr>
                <tr><td>Right for</td><td>Clinical mental health conditions</td><td>Processing, venting, feeling heard</td></tr>
              </tbody>
            </table>
          </div>
          <p>If you are experiencing symptoms of a clinical mental health condition &mdash; persistent low mood, significant anxiety, trauma responses, suicidal thoughts &mdash; please seek professional help. LeanOn is not a substitute for clinical care.</p>
        </div>

        <div className="section">
          <h2>What a LeanOn Session Feels Like</h2>
          <p>You browse listener profiles and choose someone whose background resonates. You start a voice call. The listener is a real Indian person &mdash; they understand your context, your cultural references, the specific weight of the situations you&apos;re navigating.</p>
          <p>You talk. They listen. Not passively &mdash; they reflect back what they hear, ask questions that go deeper, track the feeling underneath the words. They do not advise unless you ask. They do not judge. They do not make it about themselves.</p>
          <p>The first 5 minutes of every session are free. If the connection is right, you continue. If not, you can end the session and choose someone else. No penalties, no awkwardness.</p>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You don&apos;t have to carry it alone.</h2>
          <p>A real person. No judgment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/online-friend-india">Online friend India &rarr;</a>
            <a href="/stranger-friend-india">Talk to a stranger &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/empathy-india">Empathy India &rarr;</a>
            <a href="/rant-online-india">Rant online &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
