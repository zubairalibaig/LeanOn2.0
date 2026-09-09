import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Career Pressure in India — Emotional Support When Work Feels Like Everything | LeanOn',
  description: 'In India, career is identity. When it is going wrong, everything feels like it is going wrong. Talk to someone who gets the pressure — the IIT culture, the salary bar, the family expectations.',
  keywords: [
    'career pressure India', 'work stress India', 'job pressure India', 'career anxiety India',
    'IT career stress India', 'engineering career India mental health', 'career failure India',
    'job anxiety India', 'career expectations India', 'work life balance India',
    'burnout India', 'career confusion India emotional support', 'job stress India',
    'performance pressure India',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/support/career-pressure-india',
    languages: { 'en-IN': 'https://www.leanon.app/support/career-pressure-india' },
  },
  openGraph: {
    title: 'Career Pressure in India — Emotional Support When Work Feels Like Everything | LeanOn',
    description: 'In India, career is identity. When it is going wrong, everything feels like it is going wrong. Talk to someone who gets the pressure — the IIT culture, the salary bar, the family expectations.',
    url: 'https://www.leanon.app/support/career-pressure-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Career Pressure Support India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "I'm not failing, just unhappy at work. Is that worth talking about?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. Unhappiness at work is one of the most common and least-discussed forms of suffering in India — precisely because the cultural script says that if you have a stable, well-paying job, you should be grateful, not unhappy. The gap between being objectively fine and feeling terrible is real and worth taking seriously. You do not need to be failing or in crisis to deserve support.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a listener help me figure out what career to choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A peer listener is not a career counsellor and will not give you a career roadmap. But many people find that talking through what they are feeling about their career helps them clarify what they actually want — which is often harder to hear when you are alone with your thoughts or surrounded by people with stakes in your decision. You may leave with more clarity not because your listener told you what to do, but because saying it out loud revealed something you already knew.",
      },
    },
    {
      '@type': 'Question',
      name: "What if I want to switch careers but my family won't support it?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This is one of the most common and most painful situations that people bring to LeanOn — wanting to make a change that feels true to you but knowing it will create conflict with the people whose approval matters most. A listener will not tell you what to do. But they will give you space to fully feel and express both sides: what you want, and what it will cost. That kind of honest processing is often exactly what you need before you can make any kind of decision.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is career pressure the same as burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "They overlap but are not the same thing. Burnout is a specific state of chronic exhaustion caused by sustained overwork — emotional depletion, cynicism, and reduced effectiveness. Career pressure is the broader experience of the weight placed on your career by yourself, your family, and your culture. You can have intense career pressure without being burned out yet. And burnout can happen even in a career you chose freely. Both deserve attention.",
      },
    },
    {
      '@type': 'Question',
      name: "I'm embarrassed about where I am in my career. Will the listener judge me?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Listeners on LeanOn have personally navigated careers that did not go according to plan, comparison with peers who appeared to be ahead, the specific shame of falling short of what was expected. They understand this from the inside. There is no career stage that is too humble, too stuck, or too complicated to bring to a session. The embarrassment itself is something you can talk about.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am doing well but still feel terrible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This is more common than you might think — the experience of meeting external benchmarks and still feeling empty, anxious, or lost. In Indian culture, where career success is so closely tied to identity and worth, doing well on paper can coexist with profound unhappiness. The mismatch between what looks like success and what feels like your life is something many LeanOn listeners have experienced personally. You are not ungrateful. You are human.",
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
    { '@type': 'ListItem', position: 3, name: 'Career Pressure India', item: 'https://www.leanon.app/support/career-pressure-india' },
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
  .how-steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .step-body h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-body p{font-size:14px;color:var(--gray);line-height:1.7;font-weight:500;margin:0;}
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

export default function CareerPressureIndiaPage() {
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
          <a href="/support">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Career Pressure India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Peer Support · Career Pressure · India</p>
          <h1>When Career Feels Like <em>Your Entire Identity</em></h1>
          <p className="lead">In India, your career is not just what you do — it is who you are, what your family sacrificed for, and what determines your place in the world. When it is going wrong — or just going nowhere — everything feels like it is going wrong. Talk to someone who understands this pressure from the inside.</p>
          <a href="/browse?topic=career" className="cta-hero">Find a listener →</a>
        </div>

        <div className="section">
          <h2>Why Career Hits Differently in India</h2>
          <p>In most countries, career is one dimension of a life. In India, it is often experienced as the dimension — the one that determines respect, marriage prospects, family harmony, and your own sense of self-worth. This is not an exaggeration; it is the product of a culture that has spent decades treating professional achievement as the primary vehicle for social mobility and family honour.</p>
          <p>The result is a level of psychological investment in career that most generic mental health content does not speak to. A bad performance review in India is not just feedback about work. It can feel like confirmation of a fear you have been carrying since you did not make it into the institution your parents dreamed of. A job loss is not just a financial setback. It is a social event with consequences that ripple through your family.</p>

          <h3>The IIT-IIM Benchmark</h3>
          <p>Regardless of whether you attended one of these institutions, the IIT-IIM framework shapes Indian career culture profoundly. It establishes a hierarchy that many people spend their careers measuring themselves against — even when they are doing objectively well by any global standard. The benchmark creates a permanent ceiling of &quot;could have been better&quot; that follows people through decades of professional life.</p>

          <h3>The Salary Conversation at Family Dinners</h3>
          <p>In many Indian families, salaries are not private. Relatives compare. Cousins&apos; packages become reference points. The question &quot;how much are you earning now?&quot; is asked by people who consider it their right to know — and who will adjust their opinion of you based on the answer. This transforms every increment, promotion, or stagnation into a social event with an audience.</p>

          <h3>The Engineering-to-Everywhere Pipeline</h3>
          <p>Millions of Indians entered engineering not because they wanted to be engineers but because it was the path of least resistance through family expectations. A large proportion of them end up in IT services doing work that bears no relationship to what they studied. Many of them are deeply unclear about what they actually want to do — and deeply afraid to find out, because finding out might mean disrupting a life that looks successful from the outside.</p>
        </div>

        <div className="section">
          <h2>The Compounded Weight: When Career Is Also Family, Status, and Marriage</h2>
          <p>Indian career pressure is rarely only about career. It is entangled with several other dimensions simultaneously, which is why it can feel so much heavier than &quot;just work stress.&quot;</p>

          <h3>Your Career Is Your Parents&apos; Investment</h3>
          <p>For many Indians — especially first-generation professionals — parents made real sacrifices for their education. Coaching classes, tuition fees, relocating to better school districts, decades of deferred personal spending. The weight of that sacrifice is real. When your career feels like it is not living up to what they gave, the guilt can be as acute as the professional failure itself.</p>

          <h3>Your Career Affects Your Marriage Prospects</h3>
          <p>In most Indian matrimonial contexts, career and salary are primary filtering criteria. If you are unmarried and struggling in your career, the two pressures amplify each other — a bad job month is also a month in which you feel less eligible, less worthy, less ready to be considered. For women especially, there is an additional layer of contradiction: succeed too much and you are intimidating; too little and you are not a good match.</p>

          <h3>Your Career Determines Your Family&apos;s Status</h3>
          <p>In Indian society, family status is often proxied by the career achievements of its most visible members. Your job title, your company&apos;s brand, your salary level — these are shared as information within extended family networks. Success is celebrated publicly. Difficulty is managed quietly and with shame. This means that struggling in your career is not a private experience; it is a family experience that others are quietly tracking.</p>
        </div>

        <div className="section">
          <h2>What Career Pressure Actually Does to You</h2>
          <p>The sustained experience of career pressure in Indian culture produces a specific pattern of distress that deserves to be named:</p>

          <h3>Anxiety That Does Not Switch Off</h3>
          <p>Many people under career pressure describe a baseline anxiety that is present constantly — not acute panic, but a low-level hum of worry that makes it hard to be fully present in anything. At work, the anxiety is about performance. At home, the anxiety is about what work will bring tomorrow. In conversations with family, the anxiety is about the questions you might have to answer. There is no room that feels safe.</p>

          <h3>Comparison as a Chronic State</h3>
          <p>LinkedIn has made career comparison an hourly experience for many people. The promotion announcements, the new job titles, the salary milestone posts — each one lands as a small piece of evidence in a case you are building against yourself. This is not envy in the usual sense. It is a more systematic thing: a continuous audit of where you stand relative to where you should be by now.</p>

          <h3>The Inability to Celebrate What Is Good</h3>
          <p>Many people under career pressure find that even genuine achievements do not produce satisfaction — only temporary relief from anxiety before the next thing to worry about arrives. A promotion is immediately followed by fear about performing in the new role. A raise is immediately relativised against what someone else is making. The goal post moves constantly because the pressure is not really about the achievements; it is about the underlying fear of being found inadequate.</p>

          <h3>Loneliness in the Struggle</h3>
          <p>Career difficulty in India is hard to talk about because the culture around career is so success-oriented. The people you might talk to — peers, family, colleagues — all have stakes in maintaining a version of you that is doing well. Admitting struggle risks changing how they see you, and possibly how they treat you. So most people navigate career difficulty almost entirely alone, which amplifies everything.</p>
        </div>

        <div className="section">
          <h2>You Cannot Always Process This With the People Who Made the Pressure</h2>
          <p>The people most affected by your career — your parents, your partner, your close friends — are also the people least able to receive the full truth of how you are feeling about it. Not because they do not care, but because they are invested.</p>
          <p>Your parents may hear your career struggle as an invitation to intensify advice, pressure, or worry. Your partner may hear it as a financial concern. Your peers may hear it as competition. The people closest to you often respond to your career difficulty by trying to solve it — because seeing you struggle is uncomfortable for them too.</p>
          <p>What you actually need is different: a space to say how it feels without the information being used to fix, advise, or worry. A space where your struggle does not become someone else&apos;s emergency. A space where you can be honest about how complicated and confusing the whole thing is without having to manage the other person&apos;s reaction to what you are saying.</p>
          <p>That is what a conversation with a LeanOn peer listener provides. Someone outside your social system. Someone with no stake in your career outcome. Someone who can hold what you are saying without it triggering their own anxiety or agenda.</p>
        </div>

        <div className="section">
          <h2>What It Helps to Say Out Loud</h2>
          <p>There are things that are hard to even acknowledge to yourself — because saying them makes them real, and because the culture around career in India trains people to suppress rather than express. Some of them:</p>
          <ul>
            <li>&quot;I got into the career my parents wanted and I hate it and I do not know what to do.&quot;</li>
            <li>&quot;I compare myself to my batchmates constantly and it is making me miserable.&quot;</li>
            <li>&quot;I am terrified that I peaked in my twenties and this is as good as it gets.&quot;</li>
            <li>&quot;I want to change careers completely but I am paralysed by what my family will say.&quot;</li>
            <li>&quot;I do not know what I actually want to do with my professional life and I am embarrassed that I do not know.&quot;</li>
            <li>&quot;I am doing well by every external measure and I still feel like a failure.&quot;</li>
            <li>&quot;I am so tired of pretending to be fine about my career in front of my family.&quot;</li>
          </ul>
          <p>These are not small things. They are the kinds of thoughts that people carry for years without saying out loud to anyone. A peer listener will receive them without judgment, without advice unless you ask for it, and without it reaching anyone in your life.</p>
          <p>Saying it out loud does not solve the career situation. But it often changes your relationship to it — from something you are trapped inside to something you can see from the outside, even briefly. That shift matters.</p>
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
          <h2>Your career struggle deserves more than silence</h2>
          <p>Talk to a peer listener who genuinely understands Indian career culture — the expectations, the comparisons, the weight of it. Anonymous, confidential, available now.</p>
          <a href="/browse?topic=career" className="btn-cta">Someone is listening — start free now →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/family-pressure-india">Family pressure →</a>
            <a href="/support/loneliness">Loneliness support →</a>
            <a href="/support/anxiety">Anxiety support →</a>
            <a href="/online-counseling-india">Online counseling India →</a>
            <a href="/cant-afford-therapy-india">Affordable therapy alternatives →</a>
            <a href="/i-need-someone-to-talk-to">Need to talk →</a>
            <a href="/support/overthinking">Overthinking →</a>
            <a href="/browse">Browse all listeners →</a>
          </div>
        </div>
      </div>
    </>
  )
}
