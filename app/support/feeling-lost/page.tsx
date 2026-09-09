import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lost in Life? Peer Support India | LeanOn',
  description: "Feeling lost, stuck, or like you don't know who you are or what you want? Talk to a peer listener in India who has navigated the same uncertainty. Anonymous, 24/7.",
  keywords: ['feeling lost in life India', 'I feel stuck India', 'I dont know what I want India', 'I feel directionless India', 'I have no purpose India', 'feeling lost after college India', 'quarter life crisis India', 'lost and confused India', 'I dont know who I am India', 'what should I do with my life India', 'I feel like I am going nowhere India', 'lost in my twenties India', 'identity crisis India', 'feeling purposeless India', 'peer support feeling lost India'],
  alternates: { canonical: 'https://www.leanon.app/support/feeling-lost', languages: { 'en-IN': 'https://www.leanon.app/support/feeling-lost' } },
  openGraph: {
    title: 'Feeling Lost in Life? Peer Support India | LeanOn',
    description: "Feeling lost, stuck, or like you don't know who you are or what you want? Talk to a peer listener in India who has navigated the same uncertainty. Anonymous, 24/7.",
    url: 'https://www.leanon.app/support/feeling-lost',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn peer support for feeling lost in life' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is feeling lost in your 20s or 30s normal in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extremely. The quarter-life period — roughly 22 to 32 — is one of the most disorienting stretches a person navigates. You have often done what you were supposed to do: finished your degree, started a job, maybe moved to a new city. And then you look around and feel nothing like what you expected to feel. In India, this is compounded by the gap between the life you were trained to want and the life you are discovering you actually want. That gap is not a failure. It is a very normal reckoning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel lost even when I have a stable job and life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because stability and direction are not the same thing. You can have a salary, a flat, and a functioning life and still feel completely purposeless. This usually means the life you are living was not really chosen — it was accumulated, a result of following the path of least resistance or greatest parental approval. Feeling lost, in this case, is the self signalling that it wants to be part of the decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a quarter-life crisis and is it real?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is real. A quarter-life crisis is the period — often between 25 and 32 — when the script you have been following runs out and you have to figure out your own next chapter. It is characterised by questioning your career, your relationships, your identity, and your values. It is painful and disorienting. It is also, almost universally, the beginning of a more genuinely chosen life — if you let yourself go through it rather than suppressing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find my purpose when I feel lost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Purpose is rarely found in a single revelation. It tends to be built: through trying things, noticing what gives energy and what takes it, paying attention to what you were naturally drawn to before you were told what to be. Talking to someone who has navigated their own period of lostness — and found something on the other side — is often more useful than any self-help system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a peer listener help when I feel lost in life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — in a specific way. They will not give you your purpose (nobody can). What they can do is help you say out loud what you are actually feeling, which is often the beginning of clarity. Many people who feel lost have never actually articulated the feeling — they just carry it, vaguely, as background noise. A peer listener creates the space to bring it into language, which is the first step toward understanding it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who feels lost in India — is this common?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'More common than it appears. India\'s culture tends to equate direction with a specific set of outcomes: engineering, medicine, civil services, marriage, children. If you have departed from that script — or arrived at it and found it empty — the feeling of lostness is extremely common. You are not the only person sitting in a good job wondering what you are doing with your life. You are just one of the ones honest enough to say so.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Feeling Lost', item: 'https://www.leanon.app/support/feeling-lost' },
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
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .listeners-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;}
  .listener-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:20px;text-align:center;}
  .listener-avatar{width:60px;height:60px;border-radius:50%;background:var(--light);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 12px;}
  .listener-name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .listener-tag{font-size:12px;font-weight:700;color:var(--teal);background:var(--light);padding:4px 10px;border-radius:20px;display:inline-block;margin-bottom:8px;}
  .listener-bio{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
`

export default function FeelingLostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/support">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Feeling Lost</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Peer Support · Direction &amp; Identity</p>
          <h1>Feeling <em>Lost</em> Is Not a Flaw. It Is a Signal.</h1>
          <p className="lead">Millions of people in India — in stable jobs, in good relationships, by every external measure doing fine — feel completely directionless. LeanOn connects you with peer listeners who have navigated their own period of lostness and found something real on the other side.</p>
        </div>

        <div className="section">
          <h2>What &lsquo;Feeling Lost&rsquo; Actually Means</h2>
          <p>Feeling lost is not a diagnosis. It is not a character flaw. It is the self asking a question that the life you are living is not answering: is this what I actually want? When the answer is not clear — or when the honest answer is no — the result is a diffuse, persistent sense of being in the wrong place without knowing where the right place is.</p>

          <h3>It Is Not the Same as Being Unhappy</h3>
          <p>Many people who feel lost are not unhappy in the conventional sense. They are not in crisis. Nothing specific is wrong. Their life functions. They have relationships, income, a routine. But underneath the functioning is a background note of wrongness — a sense that they are occupying a life that was not quite chosen, that they are going somewhere but it is not where they actually want to go. This quiet lostness is harder to name than acute unhappiness, because there is nothing to point to.</p>

          <h3>The Self Asking for a Reckoning</h3>
          <p>Feeling lost is almost always the self signalling that it wants to be included in the decisions. The life was built — degree, job, city, relationships — through a series of accumulated steps that each made sense at the time, or were expected, or were the path of least resistance. At some point, enough steps have accumulated that the direction they are pointing becomes visible — and you realise it is not where you wanted to go. The lostness is the notification that this is worth examining.</p>
        </div>

        <div className="section">
          <h2>Why the Quarter-Life Period Is So Disorienting in India</h2>
          <p>The quarter-life period — roughly 22 to 35 — is one of the most disorienting stretches of adulthood for anyone. In India, it is compounded by the specific nature of the script that most people have been handed.</p>

          <h3>The Script Runs Out</h3>
          <p>For the first 22 years of most Indian lives, the path is clearly marked. School, board exams, entrance exams, degree, first job. There are waypoints. There is a clear next step. And then, at some point in your mid-twenties, the script runs out. No one tells you what comes next — not in a way that feels genuinely true for you. The job is there, but what is it for? The city is there, but is this where you want to be? The relationship path is there, but is this what you actually want?</p>

          <h3>Stability vs Direction</h3>
          <p>India&apos;s culture trains people to pursue stability — the steady job, the good package, the house, the settled life. Stability is valuable. But it is not the same as direction. You can have a completely stable life — financial security, a functioning routine, social standing — and still have no sense of direction. The stability tells you that you are safe. It does not tell you where you are going or why.</p>

          <h3>The Gap Between Trained Wants and Real Wants</h3>
          <p>Indian families, schools, and culture invest heavily in shaping what children want. By the time you are 22, you have been thoroughly trained to want certain things: a prestigious company, a certain salary, a certain kind of marriage, a house in a certain area. These wants are real in the sense that you feel them. But they were installed, not grown. When you arrive at them and still feel empty, it is often because what was installed is not what you actually wanted. Working out what you actually want — as distinct from what you were trained to want — is the work of the quarter-life period.</p>
        </div>

        <div className="section">
          <h2>What Not to Do When You Feel Lost</h2>

          <h3>Do Not Force a Decision to Escape the Feeling</h3>
          <p>The discomfort of not knowing where you are going is intense enough that many people make major decisions simply to escape it. You quit a job you did not like for a job you also do not like, because at least moving feels like direction. You end a relationship that was uncertain for a new one that is also uncertain, because at least change feels like progress. These decisions made from the urgency to escape lostness rarely resolve the lostness. They just create new situations in which you feel equally lost.</p>

          <h3>Do Not Make Dramatic Changes to Outrun It</h3>
          <p>A variation on the above: the dramatic gesture that is really about escaping the feeling. Moving to a new city, starting a business, making a major relationship change — all of these can be genuinely good decisions made from genuine clarity. Or they can be attempts to outrun a feeling of lostness that will travel with you wherever you go. The test is whether you are moving toward something or away from something. Moving away from lostness is rarely as effective as it seems in the planning.</p>

          <h3>Do Not Suppress It With Productivity</h3>
          <p>One of the most sophisticated and socially rewarded ways to avoid feeling lost is to stay extremely busy. If you never stop, you never have to sit with the not-knowing. The productivity is real — work gets done, goals get ticked off — but the underlying lostness is simply deferred. At some point the busyness stops, or you run out of ways to accelerate it, and the feeling is still there. Often larger for having been left unattended.</p>
        </div>

        <div className="section">
          <h2>What Helps</h2>

          <h3>Saying It Out Loud</h3>
          <p>Many people who feel lost have never actually said it out loud. They carry the feeling vaguely, as a persistent background unease, without ever giving it language. Saying &apos;I feel lost&apos; — to yourself, on paper, or to another person — changes its nature. It becomes something you can look at rather than something that colours everything from the inside. The naming is not the solution. But it is the beginning.</p>

          <h3>Sitting With the Not-Knowing</h3>
          <p>This is harder than it sounds in a culture that treats uncertainty as a problem to be solved immediately. The lostness wants you to rush to resolution — to have the answer, to know the direction, to get back to certainty. But not-knowing is not itself the problem. Not knowing what you want is a completely legitimate place to be, especially if you have spent years pursuing what you were told you should want. Sitting with it — giving it time, giving it air, not forcing a resolution — is sometimes the most useful thing you can do.</p>

          <h3>Talking to Someone Who Got Through Their Own Version</h3>
          <p>Advice from people who have never been lost is of limited use. What is genuinely useful is talking to someone who has navigated their own version of this disorientation — who was lost, who sat with it, who found something on the other side — and who can report from that experience without rushing you to the destination. LeanOn peer listeners have been through their own quarter-life reckonings. They are not here to tell you what your purpose is. They are here to sit with you in the not-knowing and to offer the company of someone who has been there.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Have Navigated Lostness</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🧭',
              name: 'Aditya',
              tag: 'Quarter-Life Crisis',
              bio: 'Quit an IIM job at 28 with no plan. Spent two years being lost. Found my way through. I can sit with you in the uncertainty.'
            },
            {
              emoji: '🌅',
              name: 'Riya',
              tag: 'Identity & Direction',
              bio: 'Spent my mid-twenties not knowing who I was outside the script I had been given. Worked through it. Here for others doing the same.'
            },
            {
              emoji: '🗺️',
              name: 'Sameer',
              tag: 'Purposelessness',
              bio: 'Had everything I was supposed to want and felt nothing. The purpose I found was not what anyone expected — including me.'
            },
          ].map((l, i) => (
            <div key={i} className="listener-card">
              <div className="listener-avatar">{l.emoji}</div>
              <div className="listener-name">{l.name}</div>
              <div className="listener-tag">{l.tag}</div>
              <p className="listener-bio">{l.bio}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Talk to Someone Who Has Been Lost and Found Their Way</h2>
          <p>You do not have to have it figured out to start. A peer listener is available right now — anonymous, no judgment, no appointments needed.</p>
          <div className="cta-btns">
            <a href="/browse?topic=general"><button className="btn-primary">Someone is here — start free now →</button></a>
            <a href="/how-leanon-works"><button className="btn-secondary">How it works →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Feeling lost often connects with other experiences. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/imposter-syndrome" className="related-link">Imposter Syndrome</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
          </div>
        </div>

        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
