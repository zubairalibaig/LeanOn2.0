import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mom Burnout India — You Love Your Child. You Are Also Exhausted. | LeanOn',
  description: 'Maternal burnout is real and it is not talked about enough in India. Loving your child and being completely burnt out are not contradictions. Talk to someone who understands both.',
  keywords: [
    'mom burnout India', 'maternal burnout India', 'mother burnout India',
    'exhausted mother India', 'new mom burnout India', 'solo parenting burnout India',
    'parenting stress India', 'motherhood overwhelm India', 'tired mom India support',
    'mom mental health India', 'postpartum burnout India', 'working mom burnout India',
    'touched out mom India', 'no break as a mother India', 'husband not helping with baby India',
    'mother struggling India', 'mommy burnout India', 'need a break from parenting India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/mom-burnout-india', languages: { 'en-IN': 'https://www.leanon.app/support/mom-burnout-india' } },
  openGraph: {
    title: 'Mom Burnout India — You Love Your Child. You Are Also Exhausted. | LeanOn',
    description: 'Maternal burnout in India. Loving your child and being completely burnt out are not contradictions.',
    url: 'https://www.leanon.app/support/mom-burnout-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Mom Burnout India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is maternal burnout and how is it different from postpartum depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maternal burnout is the state of complete physical and emotional exhaustion that comes from sustained over-demand in the parenting role — usually when there is not enough support, rest, or acknowledgement. It can appear at any stage of motherhood, not just in the early postpartum period. Postpartum depression is a clinical condition that appears in the weeks and months after birth, involving persistent low mood, disconnection, and sometimes difficulty bonding. Both are real and both deserve support. If you are struggling, speaking to a doctor about whether clinical support is needed is always worth considering.',
      },
    },
    {
      '@type': 'Question',
      name: 'I love my child. Does feeling burnt out mean I am a bad mother?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — and this is perhaps the most important thing to say. Burnout is what happens when a person gives more than they are receiving over a sustained period. Mothers in India are often expected to give everything — constantly, cheerfully, without complaint. The burnout that results is not a sign of failure. It is the natural consequence of an impossible standard applied without adequate support. Loving your child and being burnt out by the role are not contradictions. They coexist in most mothers, most of the time, in a system that does not provide enough.',
      },
    },
    {
      '@type': 'Question',
      name: 'My husband is not helping. How do I cope?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The short, honest answer: it is very hard, and there is no fix that does not involve either the situation changing or your needs being otherwise met. What can help is not carrying the experience alone. Naming — even to a neutral person — what you are actually doing, what you are not receiving, and how you feel is a form of relief. It is also a step toward clarity about what you need and how to advocate for it. LeanOn peer listeners are not relationship coaches, but they can listen without judgment while you figure out what you are carrying and what you need.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to talk about parenting struggles on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. Listeners sign confidentiality agreements. You do not need to share your real name. What you share in a session stays there. Many people find that the anonymity of LeanOn is specifically what makes it possible to say the things they cannot say to family or friends — including the messy, ambivalent, exhausted parts of parenting that feel too vulnerable to share with people who know your child.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I just need to vent about being a mother — not get advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is exactly what LeanOn is for. Not therapy, not advice, not a to-do list for improving your situation. Just a real person who listens while you say what you actually feel, without making it about themselves or telling you what to do. Sometimes the most useful thing is simply to say it out loud to someone who receives it without judgment.',
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
    { '@type': 'ListItem', position: 3, name: 'Mom Burnout India', item: 'https://www.leanon.app/support/mom-burnout-india' },
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
  .burnout-signs{display:grid;gap:10px;margin:20px 0;}
  .sign{display:flex;gap:14px;align-items:flex-start;background:white;border-radius:14px;padding:16px 20px;border:1.5px solid var(--border);}
  .sign-dot{width:8px;height:8px;border-radius:50%;background:var(--orange);margin-top:7px;flex-shrink:0;}
  .sign p{font-size:14px;color:var(--navy);font-weight:600;margin:0;line-height:1.6;}
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
  .rel-card{background:white;border-radius:14px;padding:16px 18px;border:1.5px solid var(--border);display:block;transition:border-color 0.2s;}
  .rel-card:hover{border-color:var(--teal);}
  .rel-card h4{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:3px;}
  .rel-card p{font-size:12px;color:var(--gray);margin:0;}
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
  'You love your child but secretly count the hours until they sleep',
  'You feel touched out — you cannot bear another person needing something from you today',
  'You are doing everything but feel like you are doing nothing well',
  'You have stopped having things you look forward to',
  'Someone asking "how are you?" feels overwhelming rather than caring',
  'You feel guilty for feeling this way, which makes it worse',
  'The version of yourself before becoming a mother feels very far away',
  'You are exhausted in a way that a good night\'s sleep does not fix',
]

export default function MomBurnoutIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Mom Burnout India</span>
        </nav>

        <p className="hero-tag">Maternal Burnout · Motherhood · India · Support</p>
        <h1>You Love Your Child. You Are Also <em>Completely Exhausted.</em></h1>
        <p className="lead">
          Both of those things are true. And in India, there is almost nowhere to say the second one out loud
          without being made to feel guilty about it. You are not a bad mother for being burnt out.
          You are a person who has been giving everything, to everyone, for a long time — with very little coming back.
        </p>

        <div className="crisis">
          <strong>If you are having thoughts of self-harm or feel you cannot go on</strong>
          NIMHANS helpline: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7)
        </div>

        <h2>Signs of Maternal Burnout</h2>
        <div className="burnout-signs">
          {signs.map((s, i) => (
            <div key={i} className="sign">
              <div className="sign-dot" />
              <p>{s}</p>
            </div>
          ))}
        </div>

        <div className="quote-box">
          <p>"I have a 19 month old baby boy. I am burnt out on most days. I love my baby but I too need a break at times. I am very mindful around my baby but all this external stress is getting the better of me. If not for him, I would have given up a long time ago."</p>
          <span>— a real LeanOn session, shared anonymously</span>
        </div>

        <h2>Why Maternal Burnout Is Particularly Hard in India</h2>
        <p>
          In India, mothers are expected to be selfless. To prioritise the child, the family, the household —
          always. There is almost no cultural permission to say: I am burnt out by this role that I also love.
        </p>
        <p>
          The practical support structures that exist elsewhere — affordable childcare, parental leave for
          both parents, community parenting networks — are either absent or inaccessible for most women.
          Many mothers in India are doing the work of two or three people, without acknowledgement and without rest.
        </p>
        <p>
          The burnout that results is not a personal failure. It is what happens when demand vastly exceeds support,
          over a sustained period, with no one asking how the person doing all the giving is actually doing.
        </p>

        <h2>What Helps</h2>
        <div className="card">
          <div className="card-label">First thing</div>
          <h3>Saying it out loud to someone who just listens</h3>
          <p>
            Not someone who will tell you to be grateful. Not someone who will make you feel guilty.
            Not someone who will immediately tell you what to do. Just someone who will hear it —
            that you are tired, that you need a break, that you are more than just this role —
            and receive it without judgment.
          </p>
        </div>
        <div className="card">
          <div className="card-label">Worth knowing</div>
          <h3>Burnout is not permanent, but it needs attention</h3>
          <p>
            Maternal burnout left unaddressed does not resolve on its own — it deepens. The more you
            keep giving without replenishing, the less there is. Recognising it, naming it, and
            finding even small ways to be heard and supported are not luxuries. They are maintenance.
          </p>
        </div>

        <h2>Related Support</h2>
        <div className="related">
          <a href="/support/postpartum-india" className="rel-card">
            <h4>Postpartum Isolation</h4>
            <p>New motherhood and the loneliness no one prepared you for</p>
          </a>
          <a href="/support/married-but-lonely" className="rel-card">
            <h4>Married but Lonely</h4>
            <p>When your partner isn&apos;t showing up the way you need</p>
          </a>
          <a href="/support/husband-not-supportive-india" className="rel-card">
            <h4>Husband Not Helping</h4>
            <p>Carrying the child, the home, and the emotional load alone</p>
          </a>
          <a href="/support/working-woman-india" className="rel-card">
            <h4>Working Woman Stress</h4>
            <p>Career + child + home — all at once</p>
          </a>
        </div>

        <div className="faq">
          <h2>Questions Mothers Ask</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Deserve to Be Heard Too</h2>
          <p>Talk to a real person who will actually listen — not advise, not fix, not make you feel guilty. Anonymous. Available now. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a listener</button></a>
            <a href="/for-women"><button className="btn-secondary">Support for women</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
