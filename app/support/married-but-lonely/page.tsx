import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Married but Lonely India — When Marriage Doesn\'t Feel Like Company | LeanOn',
  description: 'You are not alone in a traditional sense. But you are alone in every way that matters — emotionally, mentally, sometimes financially. The loneliness of an unsupportive marriage is one of the hardest things to name.',
  keywords: [
    'married but lonely India', 'lonely in marriage India', 'unhappy marriage India',
    'husband emotionally unavailable India', 'feeling alone in marriage India',
    'lonely wife India', 'marriage loneliness India', 'emotionally distant husband India',
    'invisible in marriage India', 'unhappy married woman India', 'no support from husband India',
    'marriage not working India', 'loveless marriage India', 'feeling unloved in marriage India',
    'lonely married women India support',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/married-but-lonely', languages: { 'en-IN': 'https://www.leanon.app/support/married-but-lonely' } },
  openGraph: {
    title: 'Married but Lonely India | LeanOn',
    description: 'Alone in every way that matters — emotionally, mentally, sometimes financially. The loneliness inside a marriage is one of the hardest things to name.',
    url: 'https://www.leanon.app/support/married-but-lonely',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Married but Lonely India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it normal to feel lonely inside a marriage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is extremely common — and in India, rarely spoken about. Many women in marriages describe a specific loneliness: not the loneliness of having no one around, but the loneliness of having someone right there who still does not see you, hear you, or show up for you. The presence of a spouse does not automatically mean emotional company. When the gap between physical proximity and emotional connection is large, the loneliness can feel more acute than being single.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel lonelier now that I am married than before?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because expectations change with marriage. Before, you may have had a full life of friends, family, your own independence. Marriage often comes with relocation, reduced social time, increased domestic responsibility, and the expectation that your spouse will fill many of those needs. When they do not — when emotional support, companionship, and even financial partnership are absent — the gap is starker than it was when you did not expect those things from one person.',
      },
    },
    {
      '@type': 'Question',
      name: 'My husband is not a bad person — he just doesn\'t connect. What do I do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the most common situations — and one of the hardest to name, because "he is not a bad person" is often used to invalidate your own experience. You can simultaneously love someone, not want your marriage to end, and still feel deeply unseen by them. That loneliness is real and does not require a dramatic reason to justify it. Starting by naming it — to yourself, and eventually in a safe space — is often the first step.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can talking to a peer listener help with marriage loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — especially for the specific kind of loneliness that is hard to talk about with family or friends. Telling your mother you are lonely in your marriage can feel like a betrayal, or invite unwanted advice, or worry people. A peer listener provides a space to say exactly how things are — without judgment, without it being repeated, without it becoming a family conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn couples counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — LeanOn is peer support for individuals. It is a space for you to be heard, not a space to work on the marriage together. If couples counselling is something you want to explore, a qualified relationship therapist is the right resource. LeanOn is for your experience, your feelings, your weight — which is just as important.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/browse' },
    { '@type': 'ListItem', position: 3, name: 'Married but Lonely', item: 'https://www.leanon.app/support/married-but-lonely' },
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
  .recognise{display:grid;gap:10px;margin:20px 0;}
  .rec-item{display:flex;gap:12px;align-items:flex-start;padding:14px 18px;background:white;border-radius:14px;border:1.5px solid var(--border);}
  .rec-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);margin-top:7px;flex-shrink:0;}
  .rec-item p{font-size:14px;color:var(--navy);margin:0;font-weight:600;line-height:1.6;}
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

const signs = [
  'You stop telling your husband things because you already know how he will respond — or that he will not really listen',
  'You feel relieved when he travels or is busy, because the absence of interaction is easier than the presence without connection',
  'You carry all the emotional labour — his moods, his family, the household, the children — while your own inner life goes unnoticed',
  'You stopped asking for things — help, attention, affection — because the disappointment of not receiving them became worse than not asking',
  'You feel genuinely seen and heard by people outside your marriage (a colleague, a friend, even a stranger) in a way you do not feel at home',
  'You wonder if you have just got very good at being alone, but inside a shared space',
]

export default function MarriedButLonelyPage() {
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
          <span style={{color:'var(--navy)'}}>Married but Lonely</span>
        </nav>

        <p className="hero-tag">Marriage · Loneliness · Emotional Disconnect · India</p>
        <h1>You Are Not Single. You Are Just <em>Alone Anyway.</em></h1>
        <p className="lead">
          There is a specific kind of loneliness that no one talks about — the loneliness of being in a marriage
          where the other person is physically present but emotionally absent. Where you have stopped telling them
          things because you already know they will not really hear you. Where the distance between two people
          in the same house can feel wider than any ocean.
        </p>

        <div className="crisis">
          <strong>If you are having thoughts of self-harm</strong>
          NIMHANS helpline: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7)
        </div>

        <h2>The Signs That Are Hard to Name</h2>
        <div className="recognise">
          {signs.map((s, i) => (
            <div key={i} className="rec-item">
              <div className="rec-dot" />
              <p>{s}</p>
            </div>
          ))}
        </div>

        <div className="quote-box">
          <p>"Though I am married my husband hardly helps and of late has stopped supporting financially too... I don't know if my mom and sister are happy with my visit. They of course want my baby but I don't think they want me."</p>
          <span>— a real LeanOn session, shared anonymously</span>
        </div>

        <h2>Why This Is So Hard to Talk About in India</h2>
        <p>
          The cultural pressure around marriage in India is enormous. You are supposed to make it work.
          Family, neighbours, society — everyone is invested in the appearance of a functional marriage.
          Naming that you are lonely inside yours can feel like an act of disloyalty, an invitation to unwanted
          advice, or a confirmation of failure.
        </p>
        <p>
          So most women don't say it. Not to their mothers. Not to their friends. Not even to themselves clearly.
          They just carry the weight — managing everything, keeping the home together, presenting well —
          while the inside life empties out.
        </p>

        <h2>When Both Partners Are Carrying Things</h2>
        <p>
          Sometimes the disconnect in a marriage comes from two people both drowning — both under pressure,
          both unable to give what the other needs. That does not make your loneliness less real.
          It does mean that what you need is not necessarily for your husband to change,
          but for you to have somewhere to put your experience.
        </p>

        <div className="card">
          <div className="card-label">What LeanOn offers</div>
          <h3>A space that is just for you</h3>
          <p>
            Not couples counselling. Not a space where your husband&apos;s side of things is also weighed.
            A space where you can say what your experience actually is — without having to soften it for anyone
            else&apos;s comfort. Many women find that just being able to say it — clearly, honestly, to someone
            who is just listening — is itself a form of relief.
          </p>
        </div>

        <div className="card">
          <div className="card-label">What you do not have to do</div>
          <h3>Justify why you feel the way you feel</h3>
          <p>
            You do not have to prove that your marriage is bad enough to warrant feeling lonely in it.
            You do not have to say your husband is a bad person or that you want to leave.
            You can simply say: I am lonely in this, and I need somewhere to say that.
          </p>
        </div>

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
          <h2>You Deserve to Be Heard</h2>
          <p>Talk to a real trained peer listener — anonymous, no judgment, available now. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse?topic=relationships"><button className="btn-primary">Talk to someone who understands — first 5 min free →</button></a>
            <a href="/for-women"><button className="btn-secondary">Support for women</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
