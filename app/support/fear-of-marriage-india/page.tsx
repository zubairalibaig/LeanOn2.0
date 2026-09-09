import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Fear of Marriage India — When Your Parents\' Marriage Is the Reason | LeanOn',
  description: 'You don\'t trust marriage because you have seen what it produces up close. Parents who fought, who were unfaithful, who were visibly unhappy. That shapes you. This page is for that.',
  keywords: [
    'fear of marriage India', 'don\'t trust marriage India', 'parents bad marriage India',
    'scared of marriage India', 'marriage skepticism India', 'don\'t want to get married India',
    'fear of commitment India', 'parents cheating marriage India', 'unhappy parents marriage India',
    'childhood marriage trauma India', 'marriage phobia India', 'gamophobia India',
    'don\'t believe in marriage India', 'marriage is not for me India', 'avoiding marriage India fear',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/fear-of-marriage-india', languages: { 'en-IN': 'https://www.leanon.app/support/fear-of-marriage-india' } },
  openGraph: {
    title: 'Fear of Marriage India — When Your Parents\' Marriage Is the Reason | LeanOn',
    description: 'You grew up watching a marriage that hurt you to witness. Now you don\'t want one. That makes sense.',
    url: 'https://www.leanon.app/support/fear-of-marriage-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Fear of Marriage India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it normal to be afraid of marriage because of your parents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely. The marriage you witnessed growing up is your primary close-up model for what marriage produces — what it looks like, what it requires, what it does to two people over time. If that model was painful to watch — constant fighting, infidelity, resentment, visible unhappiness — your nervous system learned that marriage leads there. That learning is not accurate as a universal rule, but it is real and it shapes how you feel about the institution. It is one of the most common and least discussed reasons for marriage reluctance in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'My parents cheated on each other. How does that affect my ability to trust?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Witnessing parental infidelity as a child or young adult can deeply affect how safe intimate relationships feel in general. You may find yourself expecting betrayal, being hypervigilant to signs of it, finding it hard to fully commit or trust, or simply wanting to avoid the situation entirely. These are understandable responses to what you experienced — not character flaws. They are adaptations that made sense in the environment where they formed. Understanding where the fear comes from is the first step in deciding whether and how you want to navigate it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I break the pattern of my parents\' marriage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — but it usually requires actively understanding the pattern rather than simply deciding to be different. Many people who grew up in unhealthy family systems unconsciously replicate elements of them in their own relationships, not because they want to, but because that is what was modelled. The awareness of this — naming it, understanding how it shows up — is protective. People who have done this work tend to make more conscious choices about who they are with and how they show up in relationships. Therapy is particularly valuable here; peer support can be a useful early step toward that work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I decide I do not want to get married at all?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is a valid choice. Not everyone wants or needs a traditional marriage to live a full and connected life. In India, this choice comes with significant social pressure — family, peers, community — and living it authentically requires a degree of clarity and resilience. What matters is that the choice comes from your own honest assessment of what you want, not purely from fear or from avoiding what your parents had. Those can lead to the same destination, but one is chosen and the other is just reactive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is talking to someone helpful when you have fear of marriage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — particularly in the early stages of understanding where the fear comes from. Many people with fear of marriage have never named it clearly, even to themselves. They know they are not ready, that something feels wrong, that the pressure makes them anxious. But the specific source — the relationship model they carry from childhood — has not been fully examined. Talking about it, to anyone who listens without judgment, begins the process of understanding it. A peer listener can hold that conversation. A therapist can go deeper into the patterns over time.',
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
    { '@type': 'ListItem', position: 3, name: 'Fear of Marriage India', item: 'https://www.leanon.app/support/fear-of-marriage-india' },
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
  .effects{display:grid;gap:10px;margin:20px 0;}
  .effect{background:white;border-radius:14px;padding:16px 20px;border-left:4px solid var(--teal);border-top:1px solid var(--border);border-right:1px solid var(--border);border-bottom:1px solid var(--border);}
  .effect h4{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .effect p{font-size:13px;color:var(--gray);margin:0;line-height:1.6;}
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

const effects = [
  { title: 'Expecting betrayal', body: 'When infidelity was part of what you witnessed, the nervous system learns to watch for it. Trust becomes harder — not because you are paranoid, but because you have evidence.' },
  { title: 'Avoiding commitment', body: 'Keeping relationships casual, not letting things get too serious, leaving before you can be left. Protective strategies that can become patterns.' },
  { title: 'Choosing the wrong people', body: 'Unconsciously gravitating toward partners who recreate the familiar dynamic — not because you want it, but because it is what you know as "relationship."' },
  { title: 'Feeling you do not deserve a good relationship', body: 'If the two people who were supposed to model love did it badly, it can leave a sense that good relationships are for other people, not for you.' },
  { title: 'Staying single as a protection', body: 'Deciding not to have a relationship at all — because the risk of ending up like your parents feels more dangerous than the loneliness of avoiding it.' },
]

export default function FearOfMarriageIndiaPage() {
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
          <a href="/browse">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Fear of Marriage India</span>
        </nav>

        <p className="hero-tag">Marriage Fear · Relationship Skepticism · India · Parental Influence</p>
        <h1>You Don&apos;t Trust Marriage Because You Saw <em>What It Does.</em></h1>
        <p className="lead">
          Not an abstract fear. Not a commitment issue. A specific, earned skepticism from growing up watching
          a marriage that hurt you to witness — the fighting, the silence, the unhappiness, or worse.
          When that is your closest evidence of what marriage produces, not wanting one is not irrational.
          It makes complete sense.
        </p>

        <div className="crisis">
          <strong>If you are struggling and need immediate support</strong>
          NIMHANS helpline: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7)
        </div>

        <div className="quote-box">
          <p>"I don't trust in marriage because I have seen my parents themselves not having a good one. My parents have even cheated on each other."</p>
          <span>— a real LeanOn session, shared anonymously</span>
        </div>

        <h2>How Witnessing an Unhappy Parents&apos; Marriage Affects You</h2>
        <p>
          Children in difficult homes do not just witness a marriage — they inhabit it. The tension,
          the fights, the silences, the walking on eggshells, the grief of watching two people
          who are clearly unhappy together. This becomes the nervous system&apos;s template for what intimacy
          and commitment produce.
        </p>
        <div className="effects">
          {effects.map((e, i) => (
            <div key={i} className="effect">
              <h4>{e.title}</h4>
              <p>{e.body}</p>
            </div>
          ))}
        </div>

        <h2>The Paradox of Being Pressured to Marry</h2>
        <p>
          One of the cruellest aspects of this situation in India: often the people pressuring you to get
          married are the same people whose marriage taught you to fear it. Your parents, who were unhappy
          together, want you to marry. The relatives who saw what your parents&apos; marriage was want you
          to find someone. The social machinery keeps pushing regardless of what it is pushing you toward.
        </p>
        <p>
          You are trying to hold a thoughtful position — one based on actual evidence from your own life —
          against enormous pressure. That takes something.
        </p>

        <h2>What This Is Not</h2>
        <p>
          Fear of marriage rooted in your parents&apos; relationship is not: fear of commitment for no reason,
          being too picky, being unable to love, immaturity, or a problem to be fixed by meeting the right person.
          It is an understandable response to a formative experience. And it deserves to be taken seriously
          on its own terms — not explained away as something you will grow out of.
        </p>

        <h2>What Helps</h2>
        <p>
          Understanding it. Naming where the fear comes from, rather than just feeling its weight.
          Distinguishing between your parents&apos; specific relationship and relationships in general.
          Deciding what you actually want — separate from what you were shown and separate from what
          you are being pressured into.
        </p>
        <p>
          For deeper work on this — particularly if it is affecting your current relationships —
          a therapist specialising in attachment and family systems is the most effective resource.
          For a first conversation, a peer listener can hold the space while you begin to name it.
        </p>

        <div className="faq">
          <h2>Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Can Say It Out Loud Here</h2>
          <p>Talk to a real person who will hear it without judgment, without advice, without pushing. Anonymous. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a listener</button></a>
            <a href="/support/not-ready-to-get-married-india"><button className="btn-secondary">Not ready to marry</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
