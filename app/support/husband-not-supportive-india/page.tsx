import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Husband Not Supportive India — Emotional and Financial Withdrawal in Marriage | LeanOn',
  description: 'When your husband has stopped showing up — emotionally, financially, or both. The particular exhaustion of managing everything while the person who was supposed to be your partner has checked out.',
  keywords: [
    'husband not supportive India', 'husband not helping India', 'unsupportive husband India',
    'husband stopped financial support India', 'husband emotionally absent India',
    'husband checked out India', 'marriage problems India', 'husband not caring India',
    'no support from husband India', 'husband ignoring wife India', 'husband selfish India',
    'husband not involved India', 'marriage breakdown India', 'coping without husband support India',
    'managing alone in marriage India', 'husband financial withdrawal India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/husband-not-supportive-india', languages: { 'en-IN': 'https://www.leanon.app/support/husband-not-supportive-india' } },
  openGraph: {
    title: 'Husband Not Supportive India | LeanOn',
    description: 'Emotional and financial withdrawal in marriage. The exhaustion of managing everything while your partner has checked out.',
    url: 'https://www.leanon.app/support/husband-not-supportive-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Unsupportive Husband India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'My husband has stopped contributing financially. What are my options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Financial withdrawal in a marriage is a serious issue. Your practical options depend on your situation — whether you have your own income, what the legal framework is, whether children are involved. In India, a wife has legal rights to maintenance under the Hindu Marriage Act and other personal laws. Beyond the legal dimension, the emotional weight of financial abandonment — the stress, the loss of security, the practical burden — is real and deserves to be named and addressed. Talking to a peer listener is not a legal resource, but it can be a place to process the emotional experience while you figure out the practical steps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I cope when my husband is emotionally absent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional absence in a marriage is one of the most draining things to live with — particularly because it is hard to name. He is there. He is not doing something obviously wrong. He is just... not present. The coping that works long-term involves finding emotional connection and support outside of the marriage — friends, family, a peer listener, a therapist — without allowing the absence to be the only reality you inhabit. You also have to grieve, somewhere, what you expected and are not receiving. That grieving matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'I feel like I am the issue because my husband, mother and sister all have problems with me. Am I?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The feeling that "so many people have a problem with me, therefore something must be fundamentally wrong with me" is one of the most common things women in difficult relational situations report. It is also one of the least reliable ways to understand reality. The people who have problems with you may each have their own unprocessed burdens, competitive dynamics, or reasons that have very little to do with you. Multiple people being unhappy with one person is not proof that person is the problem — it can equally be a sign that that person is surrounded by people who are each struggling in their own way.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I stay or leave a marriage where my husband is not supportive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is genuinely one of the hardest decisions a person can face, and it is not one that can be answered by a peer support platform. LeanOn listeners are not relationship advisors and will not tell you what to do. What a peer listener can offer is a space to hear yourself clearly — to say what you are experiencing, what you need, what you are afraid of — which is often the first step in finding your own answer to that question.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn marriage counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is peer support for individuals. It is a space for you to be heard — not a couples intervention, not relationship coaching, not a space where your husband\'s perspective is also weighed. If couples counselling is something you want to pursue, a qualified relationship therapist is the right resource. LeanOn is for your experience, your weight, your needs — which matter independently of the marriage.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'For Women', item: 'https://www.leanon.app/for-women' },
    { '@type': 'ListItem', position: 3, name: 'Husband Not Supportive India', item: 'https://www.leanon.app/support/husband-not-supportive-india' },
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
  .page{max-width:760px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero-tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(26px,5vw,42px);font-weight:900;color:var(--navy);line-height:1.13;margin-bottom:18px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;margin-bottom:36px;max-width:620px;}
  h2{font-size:20px;font-weight:800;color:var(--navy);margin-top:38px;margin-bottom:14px;}
  p{font-size:15px;color:#3A6070;line-height:1.82;font-weight:500;margin-bottom:16px;}
  .quote-box{background:var(--light);border-left:4px solid var(--teal);border-radius:0 16px 16px 0;padding:20px 24px;margin:28px 0;}
  .quote-box p{font-size:15px;color:var(--navy);font-style:italic;margin-bottom:6px;}
  .quote-box span{font-size:12px;color:var(--gray);font-weight:700;}
  .cards{display:grid;gap:16px;margin:20px 0;}
  .card{background:white;border-radius:20px;padding:26px 30px;border:1.5px solid var(--border);}
  .card-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;}
  .card h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .card p{font-size:14px;margin-bottom:0;}
  .faq{margin-top:44px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:18px 0;}
  .faq-item:last-child{border-bottom:none;}
  .faq-q{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-a{font-size:14px;color:#3A6070;line-height:1.72;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:42px 32px;text-align:center;margin-top:52px;}
  .cta-card h2{font-size:22px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:14px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:26px;line-height:1.72;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:13px 24px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .crisis{background:#FFF8F0;border-left:4px solid var(--orange);border-radius:0 12px 12px 0;padding:16px 20px;margin:32px 0;font-size:13px;color:var(--navy);line-height:1.7;}
  .crisis strong{display:block;margin-bottom:4px;}
  .crisis a{color:var(--teal);font-weight:700;}
`

export default function HusbandNotSupportiveIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Talk to someone</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/for-women">For Women</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Husband Not Supportive India</span>
        </nav>

        <p className="hero-tag">Marriage · Unsupportive Partner · Emotional Withdrawal · India</p>
        <h1>You Married a Partner. You Got a <em>House Guest.</em></h1>
        <p className="lead">
          He is physically there. But the emotional support, the financial partnership, the sense of
          being a team — those have quietly withdrawn. You are managing the child, the bills, the home,
          the family relationships, and the emotional labour of the entire household. He is present in name.
          The weight is yours.
        </p>

        <div className="crisis">
          <strong>If you are having thoughts of self-harm</strong>
          NIMHANS helpline: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7)
        </div>

        <h2>When Support Withdraws Gradually</h2>
        <p>
          It often does not happen all at once. First the emotional attunement goes — the asking how you are,
          the interest in your day, the warmth. Then the practical help tapers off. Then, sometimes, the
          financial contribution becomes unreliable or stops.
        </p>
        <p>
          Each withdrawal is gradual enough that it is easy to explain away. He is stressed at work.
          He has his own pressures. Maybe I am expecting too much. And then you realise you have adjusted
          your expectations all the way down to nothing — and you are still disappointed.
        </p>

        <div className="quote-box">
          <p>"I have a 19 month old baby boy. Though I am married my husband hardly helps and of late has stopped supporting financially too... Everything feels like a never ending struggle."</p>
          <span>— a real LeanOn session, shared anonymously</span>
        </div>

        <h2>The Two Kinds of Withdrawal</h2>
        <div className="cards">
          <div className="card">
            <div className="card-label">Emotional withdrawal</div>
            <h3>When the connection disappears</h3>
            <p>
              He stopped asking about your day. He does not respond when you try to share something.
              You can feel the absence of interest — in you, in the child, in the family.
              You learned to stop needing things from him because the disappointment became worse than the need.
            </p>
          </div>
          <div className="card">
            <div className="card-label">Financial withdrawal</div>
            <h3>When the partnership becomes one-sided</h3>
            <p>
              He has stopped contributing to the household. Whether by gradual reduction or sudden withdrawal,
              the financial weight has shifted entirely to you — even as you continue to carry the child,
              the home, and the emotional labour. This is a form of abandonment, even when no one names it.
            </p>
          </div>
        </div>

        <h2>Why This Is Hard to Talk About</h2>
        <p>
          In India, naming that your husband is not supportive can feel dangerous.
          It can feel like you are airing private matters, being disloyal to the family,
          risking your marriage in the telling of it, or inviting judgment about whether you chose right.
        </p>
        <p>
          Many women carry this entirely alone — managing the weight, keeping up appearances,
          telling no one how things actually are. The silence is protective and exhausting at the same time.
        </p>
        <p>
          Talking to a peer listener — anonymously, privately — is not the same as telling your family.
          It is telling yourself, with a witness. Sometimes that is what you need first.
        </p>

        <div className="faq">
          <h2>Questions People Ask</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Do Not Have to Carry This Alone</h2>
          <p>Talk to a real peer listener — anonymous, no judgment, not marriage counselling. Just a real person who will hear what you are actually carrying.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a listener</button></a>
            <a href="/support/married-but-lonely"><button className="btn-secondary">Married but lonely</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
