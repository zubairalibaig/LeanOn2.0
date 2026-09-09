import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Adulting in India Is Hard — The Loneliness Nobody Prepared You For | LeanOn',
  description: 'Job pressure, marriage pressure, financial pressure, family expectations — all at once. Nobody told you adulting in India would feel this lonely. Talk to someone who gets it.',
  keywords: [
    'adulting India hard', 'adulting loneliness India', 'life pressure 20s India',
    'adulting stress India', 'growing up India pressure', '20s loneliness India',
    '30s anxiety India', 'adulting is exhausting India', 'quarter life crisis India',
    'young adult stress India', 'life overwhelming India', 'Indian adult loneliness',
    'everything is too much India', 'job marriage pressure India', 'adulthood India struggles',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/adulting-india', languages: { 'en-IN': 'https://www.leanon.app/support/adulting-india' } },
  openGraph: {
    title: 'Adulting in India Is Hard | LeanOn',
    description: 'Job pressure, marriage pressure, money, family expectations — all at once. Nobody prepared you for this.',
    url: 'https://www.leanon.app/support/adulting-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Adulting India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is adulting in India feel so overwhelming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several factors compound in India specifically. The transition from a structured education environment to an unstructured adult life is abrupt. Career pressure in a competitive job market arrives at the same time as family pressure to marry and settle down. Financial pressure is real — the cost of living in metros, the expectation to support parents, the loans. And the social support structures that might soften this — close friends in the same city, affordable therapy, community networks — are often absent. The result is a set of pressures that arrive simultaneously, with few acknowledged places to put them.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a quarter-life crisis and am I having one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quarter-life crisis typically occurs in the mid-20s to early 30s and involves a sense of anxiety, uncertainty, and disillusionment about the life you have ended up in or are heading toward. Common signs: feeling trapped in a career you did not fully choose, questioning whether you are on the right path, comparing your life unfavourably to peers, feeling that life should feel more meaningful than it does, and a sense that everything is simultaneously moving too fast and going nowhere. It is very common, rarely discussed in India, and not a sign that something is permanently wrong.',
      },
    },
    {
      '@type': 'Question',
      name: 'I feel lonely despite being busy. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely. Busyness and loneliness are not opposites. You can be surrounded by colleagues, have a full calendar, be in group chats, and still feel essentially unseen by anyone. The loneliness that goes with adulting is often the loneliness of not being known — of having a full interior life that is never really shared with anyone, because adult life tends to not create the same kind of deep friendships that school or college did.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with job AND marriage pressure at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both pressures tend to feel more manageable when you are clear about your own position on them — even imperfectly. On the job front: naming clearly what you actually want from your career, rather than just reacting to what is in front of you. On the marriage front: getting honest with yourself about whether you are genuinely not ready or whether the pressure has made you resist in a reactive way. Often both pressures are compounded by the sense that you cannot say any of this clearly to anyone. Having one honest conversation — with a peer listener, a friend you trust, yourself — tends to reduce the weight significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn for young adults specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is for anyone who needs to be heard — there is no age restriction. Many of our listeners and seekers are in their 20s and 30s, navigating exactly the pressures described here. You do not need a dramatic reason to use LeanOn. You can come because you are feeling lonely, because adulting is heavy, because you want to talk to someone who will not give you advice or judge you. That is enough.',
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
    { '@type': 'ListItem', position: 3, name: 'Adulting India', item: 'https://www.leanon.app/support/adulting-india' },
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
  .stack{display:grid;gap:12px;margin:22px 0;}
  .stack-item{display:flex;gap:14px;align-items:center;background:white;border-radius:14px;padding:16px 20px;border:1.5px solid var(--border);}
  .stack-num{font-size:20px;font-weight:900;color:var(--teal);width:32px;text-align:center;flex-shrink:0;}
  .stack-item p{font-size:14px;font-weight:600;color:var(--navy);margin:0;line-height:1.5;}
  .quote-box{background:var(--light);border-left:4px solid var(--teal);border-radius:0 16px 16px 0;padding:20px 24px;margin:28px 0;}
  .quote-box p{font-size:15px;color:var(--navy);font-style:italic;margin-bottom:6px;}
  .quote-box span{font-size:12px;color:var(--gray);font-weight:700;}
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
`

const pressures = [
  { num: '₹', text: 'Financial pressure — rent, EMI, savings, parents, cost of living in metros' },
  { num: '💼', text: 'Career pressure — performing at work, job market anxiety, not knowing if you are on the right path' },
  { num: '💒', text: 'Marriage pressure — everyone asking, everyone getting engaged, the invisible timeline ticking' },
  { num: '👨‍👩‍👧', text: 'Family pressure — being a good child, meeting expectations, managing relationships with people who have opinions about your life' },
  { num: '👥', text: 'Social loneliness — friends from college scattered, colleagues are not quite friends, feeling like nobody actually knows you' },
  { num: '🪞', text: 'Identity confusion — who you actually are versus who you are expected to be' },
]

export default function AdultingIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Adulting India</span>
        </nav>

        <p className="hero-tag">Adulting · 20s-30s · India · Quarter-Life Reality</p>
        <h1>Nobody Told You Adulting in India Would Feel <em>This Lonely.</em></h1>
        <p className="lead">
          You are doing everything you were supposed to do. You got the degree. You got the job.
          You are managing. And yet — late at night, or on a Sunday when everything goes quiet —
          it is heavier than it looks from the outside. Too many pressures arriving at once,
          not enough places to put them.
        </p>

        <div className="quote-box">
          <p>"Just wanted to talk. Feelin lonely. Too many things — job marriage pressure going on. Adulting is hard."</p>
          <span>— a real LeanOn session, shared anonymously</span>
        </div>

        <h2>The Specific Stack of Pressures</h2>
        <div className="stack">
          {pressures.map((p, i) => (
            <div key={i} className="stack-item">
              <div className="stack-num">{p.num}</div>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <h2>Why This Generation Has It Differently Hard</h2>
        <p>
          Indian adults in their 20s and 30s today are navigating something genuinely new.
          The career landscape is more competitive and more uncertain than the previous generation faced.
          The marriage timeline pressure is still there but increasingly clashing with the reality that
          you need more time — more financial stability, more self-knowledge — before you are ready.
          The social media layer adds a constant comparison feed: everyone else&apos;s life looks more sorted.
        </p>
        <p>
          Meanwhile, the support structures that helped previous generations — joint families, neighbourhood
          communities, religious networks — have often broken down without being replaced by anything.
          You are figuring it out more alone than any generation before.
        </p>

        <h2>The Loneliness of Having It Together on the Outside</h2>
        <p>
          One of the specific difficulties of adulting loneliness is that it is invisible.
          You are functional. You show up. You manage. Nobody looking at you would know.
          And that invisibility can make it worse — there is no obvious moment where anyone
          asks if you are okay, because why would they? You seem fine.
        </p>
        <p>
          That gap — between what you show and what you are carrying — is one of the reasons
          people use LeanOn. Not because they are in crisis. Just because they needed to say
          what is actually going on to someone who would listen.
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
          <h2>Just Wanted to Talk?</h2>
          <p>Real person. No judgment. No agenda. Anonymous, available now. First 5 minutes free, from ₹85 for 15 minutes.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a listener</button></a>
            <a href="/support/men-loneliness-india"><button className="btn-secondary">Men &amp; loneliness</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
