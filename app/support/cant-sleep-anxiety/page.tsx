import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Can't Sleep Because of Anxiety? Peer Support India | LeanOn",
  description: "Lying awake with racing thoughts, anxiety, or overthinking? Talk to a peer listener in India who knows that 2 AM feeling. Anonymous support, available right now.",
  keywords: ["can't sleep anxiety India", "insomnia anxiety India", "lying awake overthinking India", "racing thoughts at night India", "2am anxiety India", "sleep anxiety India", "I can't sleep what do I do India", "anxiety at night India", "midnight anxiety India", "overthinking at night India", "sleep problems anxiety India", "can't sleep worry India", "wake up anxious India", "night time anxiety India", "talk to someone at night India"],
  alternates: { canonical: 'https://www.leanon.app/support/cant-sleep-anxiety', languages: { 'en-IN': 'https://www.leanon.app/support/cant-sleep-anxiety' } },
  openGraph: {
    title: "Can't Sleep Because of Anxiety? Peer Support India | LeanOn",
    description: "Lying awake with racing thoughts, anxiety, or overthinking? Talk to a peer listener in India who knows that 2 AM feeling. Anonymous support, available right now.",
    url: 'https://www.leanon.app/support/cant-sleep-anxiety',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn peer support for sleep anxiety' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does anxiety get worse at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During the day, activity and distraction keep anxiety partially at bay. At night, when the stimulation goes quiet, the mind has space to fill — and it fills it with everything it has been holding. The 2 AM spiral is not irrational. It is what happens when your brain finally has uninterrupted time with all the things you have been too busy to process. The problem is that 2 AM is not a good time to process them — sleep deprivation makes everything worse, and there is no one to talk to.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop racing thoughts at night in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A few things that actually help: writing down every thought — not to solve it, just to get it out of your head and onto paper where it can wait; doing something physically boring (not a screen) to break the loop; speaking the thoughts out loud — even to yourself — which changes how the brain processes them; and, if the thoughts are connected to something you actually need to process, talking to someone about them rather than circling alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is lying awake with anxiety a sign of something serious?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Most people experience acute sleep anxiety during high-stress periods — before big decisions, during relationship turmoil, during work uncertainty. Chronic sleep anxiety (weeks or months of regular disruption) is worth taking seriously, and speaking to a doctor or mental health professional is advisable. But occasional bad nights are a very normal human experience, not a diagnosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I can\'t sleep and feel really low at 2 AM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First: you are not alone in being awake and feeling this right now. Millions of people in India are awake at 2 AM with racing thoughts. Second: do not try to force sleep — it does not work and creates more anxiety. Get up, do something calming (not a screen), or open LeanOn and talk to someone. Peer listeners are available through the night. Sometimes the thing that breaks the spiral is simply saying what you are thinking out loud to another person.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can talking to someone at night help with anxiety and insomnia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and the mechanism is straightforward. Night anxiety is often circular: thoughts loop because they have nowhere to go. Speaking them out loud, to someone who listens without judgment, interrupts the loop. It is not magic — it is just that language requires sequencing, and sequencing breaks cycles. Many people find that a 15-minute conversation in the early hours is more effective than two hours of solo spiraling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to talk to someone at night in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session and is available at any hour including 2 AM and 3 AM. New users get a free 5-minute trial. For the cost of a coffee, you can have a real conversation with someone who has personally navigated what you are going through — and who is awake right now.',
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
    { '@type': 'ListItem', position: 3, name: "Can't Sleep Anxiety", item: 'https://www.leanon.app/support/cant-sleep-anxiety' },
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

export default function CantSleepAnxietyPage() {
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
          <span style={{color:'var(--navy)'}}>Can&apos;t Sleep Anxiety</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Peer Support · Sleep &amp; Anxiety</p>
          <h1>Lying Awake at <em>2 AM</em> With Racing Thoughts?</h1>
          <p className="lead">You are not alone. Millions of people in India are awake right now, spiraling in the dark. LeanOn peer listeners are available through the night — real people who know the 2 AM feeling and are ready to talk.</p>
        </div>

        <div className="section">
          <h2>Why 2 AM Is the Hardest Hour</h2>
          <p>There is a reason anxiety peaks at night. During the day, you are moving — work, commute, social obligations, screens, chores. Each of these is a distraction, and distractions keep the anxious mind partially occupied. At night, when the stimulation drops, the mind suddenly has space. And it fills that space with everything it has been holding.</p>

          <h3>The Night Amplification Effect</h3>
          <p>Problems do not actually get bigger at night. But they feel bigger, because the contrast has changed. During the day, your anxiety is one signal among many competing for attention. At 2 AM, it is the only signal. The silence amplifies it. The darkness removes the visual cues that orient you. The fatigue lowers your capacity to reason your way out. Everything that was manageable at 3 PM feels catastrophic at 3 AM.</p>

          <h3>Distraction Gone</h3>
          <p>The coping mechanism that got you through the day — staying busy, staying distracted, staying in motion — no longer works when you are lying in the dark. Your phone is right there, which creates its own loop: scroll to escape the anxiety, the blue light and stimulation make sleep harder, which makes the anxiety worse, which makes you scroll more. The tools that seem like escape are often the things extending the cycle.</p>

          <h3>The Mind Trying to Process</h3>
          <p>It is worth naming something: the 2 AM spiral is not random. The thoughts that come are usually the ones you have been avoiding. The conversation you need to have. The decision you have been deferring. The relationship tension you are not addressing. Your mind, finally with some uninterrupted time, is trying to process things. The problem is not the processing. The problem is that 2 AM, alone in the dark with no one to talk to, is not a good environment for it.</p>
        </div>

        <div className="section">
          <h2>The Anxiety-Sleep Loop</h2>
          <p>Sleep anxiety is particularly cruel because it is self-reinforcing. Anxiety makes it hard to sleep. Poor sleep makes anxiety worse. Worse anxiety makes it harder to sleep the next night. Over time this becomes a pattern — you start to associate the bed itself with the anxiety, which triggers it earlier in the evening.</p>

          <h3>How the Cycle Builds</h3>
          <p>It usually starts with a bad night — high stress, a difficult day, something you cannot stop thinking about. You sleep badly. The next day you are more reactive and less resilient because of the sleep deprivation. The anxiety is slightly higher. That night, you lie down and your mind is already primed — you remember last night, you worry about whether tonight will be the same. The worry itself becomes the problem. You are now anxious about anxiety. The cycle has started.</p>

          <h3>What Makes It Worse</h3>
          <ul>
            <li>Checking your phone when you cannot sleep — the light and stimulation delay sleep further</li>
            <li>Trying harder to force sleep — effort is incompatible with sleep onset</li>
            <li>Catastrophising about the consequences of not sleeping — the thoughts themselves raise arousal</li>
            <li>Staying in bed for hours not sleeping — it reinforces the association between bed and wakefulness</li>
            <li>Napping during the day to compensate — it reduces sleep pressure for the night</li>
          </ul>

          <h3>What the Body Is Doing</h3>
          <p>When you are anxious, your body is in a low-grade state of alert. Cortisol is elevated. Heart rate is slightly higher. The nervous system is primed for threat. These are the opposite of the physiological conditions required for sleep. You cannot force your nervous system to calm down through willpower. It needs either a genuine shift in the stress signal, or a circuit breaker — something that interrupts the loop.</p>
        </div>

        <div className="section">
          <h2>What Actually Helps at Night</h2>

          <h3>Write It Down</h3>
          <p>Not to solve it — just to get it out of your head. The thoughts are looping because they have nowhere else to go. Put them somewhere. A notes app, a paper notebook, a voice memo. The act of externalising them — turning them from circling thoughts into captured text — physically changes where they are processed in the brain. You are not solving the problem. You are parking it somewhere it can wait until morning.</p>

          <h3>Get Up and Do Something Boring</h3>
          <p>If you have been lying awake for more than 20 minutes, get up. Do not stay in bed trying to force sleep — it reinforces the anxiety. Do something boring and non-stimulating: fold clothes, read a physical book with a lamp, make a warm drink, sit quietly. Not a screen. Not email. Something that occupies your hands without activating your mind. When you feel genuinely sleepy, go back to bed.</p>

          <h3>Talk to Someone</h3>
          <p>This is the most underused and most effective intervention for night anxiety. The thoughts are looping because they are solo — your mind circling the same track with no interruption. Speaking them out loud to another person, even briefly, breaks the loop. Language requires sequencing. Sequencing requires linear thought. Linear thought interrupts the circular spiral. A 15-minute conversation at 2 AM with someone who will simply listen — not fix, not advise, just hear — can achieve what two hours of solo rumination cannot.</p>

          <h3>Avoid Screens in the Hour Before Sleep</h3>
          <p>The blue light from phones and laptops suppresses melatonin production and signals daylight to your brain. But the bigger issue is the stimulation: social media, news, and conversations are designed to engage and activate. You cannot wind down while simultaneously consuming content engineered to hold your attention. The hour before bed matters more than most people acknowledge.</p>
        </div>

        <div className="section">
          <h2>When Nighttime Anxiety Becomes a Problem</h2>
          <p>Occasional bad nights are a normal part of human life. They are not a diagnosis. If you are going through a stressful period — a big decision, a difficult relationship, a work crisis — disrupted sleep is expected. The question is duration and severity.</p>

          <h3>When to Seek Professional Help</h3>
          <p>Consider speaking to a doctor or mental health professional if: sleep disruption has lasted more than three weeks; you are regularly sleeping fewer than five hours; the sleep anxiety is significantly affecting your ability to function during the day; or the nighttime thoughts include self-harm or not wanting to be here. These are signals that something more than peer support is needed. Peer support is for processing and connection — it is not a substitute for medical evaluation.</p>

          <h3>The Role of Peer Support</h3>
          <p>LeanOn is not a clinical service. What it offers is specific and valuable: a real person, available at 2 AM, who has personally navigated anxious nights and knows what the spiral feels like. Sometimes that is exactly what you need — not a diagnosis, not a technique, but a voice on the other end that says: I know this. You are not alone. Let&apos;s talk through it.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Available Through the Night</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌙',
              name: 'Neha',
              tag: 'Night Anxiety',
              bio: 'I spent months lying awake with racing thoughts. I know what 2 AM feels like, and I am here for it.'
            },
            {
              emoji: '🫁',
              name: 'Aryan',
              tag: 'Sleep & Stress',
              bio: 'Work stress used to destroy my sleep. Learned what actually helps. Available late nights when you need someone.'
            },
            {
              emoji: '✨',
              name: 'Preethi',
              tag: 'Overthinking at Night',
              bio: 'The midnight spiral is real. I have been there and I know how to sit with someone through it until the morning comes.'
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
          <h2>Someone Is Awake Right Now</h2>
          <p>LeanOn peer listeners are available 24/7 — including right now. Talk to someone who knows the 2 AM feeling. Start with a free trial session.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a listener →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
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
          <p>Sleep anxiety often connects with other experiences. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/overthinking" className="related-link">Overthinking</a>
            <a href="/support/sunday-night-loneliness" className="related-link">Sunday Night Loneliness</a>
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
