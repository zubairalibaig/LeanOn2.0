import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Marriage Problems? Talk to Someone Who Understands | LeanOn India',
  description: 'Struggling with marriage problems? Talk anonymously to a peer listener who gets it — no judgment, ₹160/session, available 24/7 in India.',
  keywords: [
    'marriage problems india talk to someone', 'marriage advice online india',
    'unhappy marriage india help', 'married but unhappy india',
    'marriage problems india', 'marriage issues india', 'troubled marriage india',
    'talk about marriage problems india', 'marriage not working india',
    'marriage help india online', 'arranged marriage problems india',
    'husband wife problems india', 'marriage counselling online india',
    'unhappy in marriage india', 'marriage support india',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/marriage-problems-india',
    languages: { 'en-IN': 'https://www.leanon.app/marriage-problems-india' },
  },
  openGraph: {
    title: 'Marriage Problems? Talk to Someone Who Understands | LeanOn India',
    description: 'Struggling with marriage problems? Talk anonymously to a peer listener who gets it — no judgment, ₹160/session, available 24/7 in India.',
    url: 'https://www.leanon.app/marriage-problems-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Marriage Problems India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it anonymous if I talk about my marriage problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely. You do not need to share your real name, your location, or any identifying details. Your listener only knows what you choose to tell them. Nothing from the conversation is stored under your identity or shared outside the session. You can talk about the most private details of your marriage without any of it following you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the listener tell me to leave my husband or wife?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A peer listener\'s role is to listen — not to advise, judge, or steer. They will not tell you to leave, stay, or do anything. If you ask for their perspective on something specific, they can share it, but the default is that your decisions are yours. Many people find this the most important part: being heard without someone immediately telling them what to do.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about my marriage without my spouse knowing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is designed for individuals seeking support for themselves. Your spouse does not need to know, be involved, or consent to you talking about your own experience. There is no record sent to anyone. The session is private to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this the same as marriage counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Marriage counselling is a clinical process that typically involves both partners working with a licensed therapist toward improving the relationship. LeanOn is peer support for you as an individual. It is a space to be heard, to think out loud, to say things you cannot say elsewhere — not a therapeutic intervention on your marriage. If couples counselling is what you need, a qualified relationship therapist is the right resource. But for many people, what they need first is just someone to talk to.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Support', item: 'https://www.leanon.app/relationship-advice-online-india' },
    { '@type': 'ListItem', position: 3, name: 'Marriage Problems India', item: 'https://www.leanon.app/marriage-problems-india' },
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
  .topic-list{display:grid;gap:10px;margin:20px 0;}
  .topic-item{display:flex;gap:12px;align-items:flex-start;padding:14px 18px;background:white;border-radius:14px;border:1.5px solid var(--border);}
  .topic-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);margin-top:7px;flex-shrink:0;}
  .topic-item p{font-size:14px;color:var(--navy);margin:0;font-weight:600;line-height:1.6;}
  .quote-box{background:var(--light);border-left:4px solid var(--teal);border-radius:0 16px 16px 0;padding:20px 24px;margin:28px 0;}
  .quote-box p{font-size:15px;color:var(--navy);font-style:italic;margin-bottom:6px;}
  .quote-box span{font-size:12px;color:var(--gray);font-weight:700;}
  .card{background:white;border-radius:20px;padding:26px 30px;border:1.5px solid var(--border);margin-bottom:16px;}
  .card-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;}
  .card h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .card p{font-size:14px;margin-bottom:0;}
  .faq{margin-top:44px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:18px 0;}
  .faq-item:last-child{border-bottom:none;}
  .faq-q{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-a{font-size:14px;color:#3A6070;line-height:1.72;font-weight:500;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:24px 0;}
  .related-link{background:white;border:1.5px solid var(--border);border-radius:14px;padding:14px 18px;font-size:13px;font-weight:700;color:var(--navy);transition:border-color 0.15s,color 0.15s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
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

const topics = [
  'Emotional distance — feeling like strangers living together',
  'Constant fights that go nowhere, over the same things',
  'Feeling invisible or taken for granted inside the relationship',
  'Different life goals that were not talked about before marriage',
  'Interference from in-laws and not knowing how to handle it',
  'A one-sided relationship where one person carries everything',
  'An arranged marriage that is not working out the way anyone expected',
  'Being afraid to even consider divorce, but also afraid to stay',
  'Feeling trapped — too much to lose, but too much to endure',
  'Simply not being in love anymore, and not knowing what to do with that',
]

export default function MarriageProblemsIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Talk to someone</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/relationship-advice-online-india">Relationship Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Marriage Problems India</span>
        </nav>

        <p className="hero-tag">Marriage · Relationships · India</p>
        <h1>When Your Marriage Feels Hard and <em>You Can&apos;t Tell Anyone</em></h1>
        <p className="lead">
          Marriage problems are one of the hardest things to carry alone — because in India, you are not
          supposed to carry them at all. You are supposed to make it work. Not complain. Not burden others.
          And definitely not admit that the thing everyone celebrated might not be what you hoped for.
        </p>

        <div className="crisis">
          <strong>If you are in distress or having thoughts of self-harm</strong>
          NIMHANS helpline: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7)
        </div>

        <h2>What marriage problems people talk about</h2>
        <p>
          There is no single shape a struggling marriage takes. These are the things people most commonly
          need a space to say out loud:
        </p>
        <div className="topic-list">
          {topics.map((t, i) => (
            <div key={i} className="topic-item">
              <div className="topic-dot" />
              <p>{t}</p>
            </div>
          ))}
        </div>

        <div className="quote-box">
          <p>&ldquo;I have never said any of this to anyone in my life. Not to my mother, not to my friends. The moment I started speaking I realised how long I had been holding it in.&rdquo;</p>
          <span>— from an anonymous LeanOn session</span>
        </div>

        <h2>You don&apos;t need to have all the answers</h2>
        <p>
          When people think about talking through marriage problems, they often imagine needing a goal —
          deciding whether to stay, deciding how to fix things, deciding something. But that is not how it
          usually begins.
        </p>
        <p>
          Sometimes the most valuable thing is much simpler: saying it out loud. Hearing yourself put words
          to what has been shapeless and heavy. Being heard by someone who is not going to react with alarm,
          or start telling you what to do, or repeat it to someone else.
        </p>
        <p>
          The value of a conversation is not always in the solution it produces. Sometimes it is in the
          relief of finally not carrying something alone for an hour.
        </p>

        <div className="card">
          <div className="card-label">What happens in a session</div>
          <h3>You talk. They listen. No agenda.</h3>
          <p>
            A peer listener will not direct the conversation toward a particular outcome. They will not
            push you to leave or to stay. They will not tell you what your husband or wife &ldquo;should&rdquo; be doing.
            They are there to make space for your experience — whatever it is, without judgment.
          </p>
        </div>

        <h2>Why not talk to family or friends?</h2>
        <p>
          Family and friends are invested in the outcome. Your mother wants your marriage to work.
          Your friends have opinions about your spouse. The people closest to you care about you — but
          that caring comes with stakes. When you tell them something, it affects how they see your partner,
          how they worry about you, what advice they push on you.
        </p>
        <p>
          A peer listener has no stake. They do not know your husband or wife. They will never meet your
          in-laws. What you say in the session stays in the session. That is exactly why many people find
          it possible to be more honest with a stranger about their marriage than with the people who love them.
        </p>

        <div className="card">
          <div className="card-label">The weight of keeping it inside</div>
          <h3>The shame of admitting it is not perfect</h3>
          <p>
            There is a particular shame that comes with marriage problems in India — not just the problem itself,
            but the admission that the marriage is not what it appeared to be. That the wedding happened, the
            family was happy, and now something is quietly wrong. Many people stay silent for years simply because
            saying it feels like it would make it more real, or let down everyone who was so certain it would work.
            That silence has a cost.
          </p>
        </div>

        <div className="faq">
          <h2>Questions people ask</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <h2>You might also find these helpful</h2>
        <div className="related">
          <a href="/support/married-but-lonely" className="related-link">Married but lonely →</a>
          <a href="/support/husband-not-supportive-india" className="related-link">Husband not supportive →</a>
          <a href="/support/arranged-marriage-stress" className="related-link">Arranged marriage stress →</a>
          <a href="/relationship-advice-online-india" className="related-link">Relationship advice online →</a>
        </div>

        <div className="cta-card">
          <h2>You can say it here</h2>
          <p>
            Talk to a trained peer listener — anonymous, no judgment, available now.
            First 5 minutes free. ₹160 for a 15-minute session.
          </p>
          <div className="cta-btns">
            <a href="/auth"><button className="btn-primary">Talk to someone — first 5 min free →</button></a>
            <a href="/browse"><button className="btn-secondary">Browse listeners →</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
