import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Numbness — When You\'ve Forgotten What It Feels Like to Feel | LeanOn',
  description: 'Feeling emotionally numb — not sad, not happy, just nothing — is one of the most disorienting experiences there is. Talk to someone who understands what it is like to not feel at all.',
  keywords: [
    'emotional numbness India', 'feeling numb emotionally India', 'can\'t feel emotions India',
    'lost ability to feel India', 'emotionally detached India', 'feeling nothing India',
    'emotional blunting India', 'numbness depression India', 'can\'t feel happy or sad India',
    'emotional disconnection India', 'anhedonia India', 'feeling empty inside India',
    'numb for years India', 'emotional flatness India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/emotional-numbness', languages: { 'en-IN': 'https://www.leanon.app/support/emotional-numbness' } },
  openGraph: {
    title: 'Emotional Numbness — When You\'ve Forgotten What It Feels Like to Feel | LeanOn',
    description: 'Feeling emotionally numb — not sad, not happy, just nothing. Talk to someone who understands.',
    url: 'https://www.leanon.app/support/emotional-numbness',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Emotional Numbness Support' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is emotional numbness the same as depression?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not always, though they often overlap. Depression usually involves intense sadness or hopelessness. Numbness is different — it is the absence of feeling, including the absence of sadness. You are not distressed, you are just not anything. Clinically this is sometimes called emotional blunting or anhedonia, and it can occur alongside depression, after prolonged stress, or on its own after years of emotional suppression. Whether or not it meets a diagnostic threshold, it is real and it deserves attention.' },
    },
    {
      '@type': 'Question',
      name: 'How long can emotional numbness last?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on what caused it and whether anything has been done about it. For some people it develops slowly over years — starting in their teens, solidifying by their mid-20s — and stays until something interrupts it. That interruption does not have to be a dramatic event. It can be a single honest conversation, a therapist who asks the right question, or a period of life that finally felt safe enough to feel in. There is no fixed timeline. But numbness that has been in place for years usually needs some kind of deliberate attention — it does not lift on its own.' },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to feel things again after being numb for years?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The capacity to feel does not disappear — it gets suppressed, usually as a protective response to experiences that were too painful to process. When the conditions change — when there is safety, when the experience gets named and witnessed, when the emotional load gradually reduces — feeling tends to return, often slowly and unevenly. It is common for people to describe sudden, unexpected moments of feeling after long periods of numbness: a piece of music, an honest conversation, a moment of being truly seen. These are not anomalies. They are the beginning of something.' },
    },
    {
      '@type': 'Question',
      name: 'Can talking to someone help when I don\'t even know what I feel?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — and "I don\'t know what I feel" is one of the most important things you can say to a listener. You do not need to arrive with a named emotion or a clear problem. Talking about the absence of feeling — describing what it is like to go through the motions, to function without landing anywhere emotionally — is itself a starting point. A good listener does not need you to perform emotions you don\'t have. They can sit with the flatness alongside you, and that witnessing alone can shift something.' },
    },
    {
      '@type': 'Question',
      name: 'Should I see a therapist for emotional numbness?',
      acceptedAnswer: { '@type': 'Answer', text: 'If numbness has been with you for years, yes — a therapist is worth pursuing when you can access one. Chronic emotional numbness that began after difficult experiences in childhood or adolescence often has roots that benefit from professional support. That said, professional help in India is genuinely hard to access — cost, availability, stigma. While you navigate toward that, peer support through LeanOn is not a replacement but it is not nothing. Speaking to someone who has also experienced emotional disconnection, having your experience witnessed without judgment, can be meaningful support while you work toward the bigger picture.' },
    },
    {
      '@type': 'Question',
      name: 'What do I say in a session if I don\'t know what\'s wrong?',
      acceptedAnswer: { '@type': 'Answer', text: 'Say exactly that: "I don\'t know what\'s wrong. I\'ve been feeling nothing for a long time and I don\'t know where to start." That is a complete enough opening. You do not need to diagnose yourself, explain your history, or arrive with a clear narrative. The listener\'s job is to help you find language for what you are experiencing — not to wait for you to have it figured out before the conversation begins.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Emotional Numbness', item: 'https://www.leanon.app/support/emotional-numbness' },
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

export default function EmotionalNumbnessPage() {
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
          <span style={{color:'var(--navy)'}}>Emotional Numbness</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Peer Support · Anonymous · India</p>
          <h1>When You Have <em>Stopped Feeling</em> — and Cannot Remember When It Happened</h1>
          <p className="lead">Not depressed. Not sad. Just nothing. You do what you are supposed to do. You show up. You function. But somewhere along the way, things stopped landing. You stopped feeling things the way you used to — or maybe you never did, and you have just been waiting for it to start.</p>
          <a href="/browse" className="cta-hero">Talk to someone who understands →</a>
        </div>

        <div className="section">
          <h2>When You&apos;ve Stopped Feeling — and Can&apos;t Remember When It Happened</h2>
          <p>Emotional numbness is not the same as being sad. Sadness has texture — it hurts, it moves, it shifts. Numbness is the absence of that. It is the flat line where feeling used to be. You can watch something beautiful and notice that you are supposed to feel something, but nothing comes. You can hear news that should devastate you and feel only a distant awareness that it is bad. You watch yourself respond to life with the mechanical accuracy of someone performing emotions they no longer actually have.</p>
          <p>For many people, the numbness set in so gradually that there was no clear before and after. It started somewhere in the teenage years — maybe around 17 or 18 — as a quiet shutting down in response to things that were too much. A parent who was not there. A home that was not safe. Experiences that arrived before you had the tools to process them. The body learned, slowly and sensibly, that feeling was dangerous. So it stopped.</p>
          <p>By the mid-20s, that protective mechanism has often been in place for so long that it feels like personality. People say things like &quot;I am just not an emotional person&quot; or &quot;I don&apos;t really feel things that deeply.&quot; But underneath that framing is often a history — of years of suppression, of learning to function without feeling, of carrying a weight so consistently that you have stopped noticing it is there.</p>
          <p>If you are reading this, you probably know the difference. You are not someone who has never felt deeply. You are someone who used to — or who senses that you should — and somewhere the connection got severed.</p>
        </div>

        <div className="section">
          <h2>Why Numbness Isn&apos;t the Same as Being Fine</h2>
          <p>One of the most insidious things about emotional numbness is that it looks like stability from the outside. You are not crying at work. You are not having panic attacks. You are not calling people at 2am. You are, by most observable metrics, doing okay. And so it becomes very easy to tell yourself — and to have others tell you — that you are fine.</p>
          <p>But fine is a low bar. Fine means functional. It does not mean whole. It does not mean that you are actually living your life rather than moving through it like a very competent ghost.</p>
          <p>The cost of long-term emotional numbness shows up in specific ways:</p>
          <ul>
            <li>Relationships that feel hollow — you are present but not actually connecting</li>
            <li>An inability to want things. Not knowing what you want from life, from relationships, from any given day</li>
            <li>A quiet desperation for something — love, connection, intensity — without the ability to feel it when it arrives</li>
            <li>A sense of watching your own life from a slight distance, like a film you are not quite in</li>
            <li>Exhaustion from performing emotions for other people that you are not feeling inside</li>
          </ul>
          <p>None of this is &quot;fine.&quot; It is a real, liveable, grinding kind of suffering — the kind that is hard to name because it does not look like suffering from the outside, and does not always feel like suffering from the inside. It just feels like nothing.</p>
        </div>

        <div className="section">
          <h2>The Exhaustion of Performing Emotions You Don&apos;t Feel</h2>
          <p>There is a specific, underrated exhaustion that comes from being emotionally numb in a world that expects you to feel. You learn, early and well, to perform. To mirror the appropriate response — excitement when others are excited, sadness at appropriate moments, enthusiasm for things that are supposed to matter. You become very good at it. People around you probably have no idea.</p>
          <p>This performance is not deceptive, exactly. It is survival. It is the only available way to navigate social reality when the actual feeling is not there. But it is draining in a particular way — you are spending real energy to generate a facsimile of something that should come naturally. And there is a loneliness to it that is hard to describe: being surrounded by people who think they know you, when the you they know is mostly a careful construction.</p>
          <p>The longing that often coexists with numbness — the desperate need for love or connection or someone to really see you — is partly this: the wish to stop performing. To find someone in whose presence the performance could drop, even briefly. To be known in the place where you actually are, not the place where you have learned to appear.</p>
          <p>Peer support on LeanOn is not the same as therapy. But it is a space where the performance can, at least in part, stop. Where you can say &quot;I don&apos;t feel anything and I have not for years&quot; to someone who will not be alarmed, who will not try to fix it, who will simply receive it and stay.</p>
        </div>

        <div className="section">
          <h2>Why This Is Hard to Talk About — and Why Talking Helps Anyway</h2>
          <p>Emotional numbness is hard to name as a problem because it does not feel like a crisis. You are not in acute pain. There is no clear event to point to. When someone asks &quot;what&apos;s wrong?&quot; the honest answer is &quot;nothing specific, I just don&apos;t feel anything&quot; — which sounds strange to say and often produces confused or dismissive responses.</p>
          <p>There is also the question of whether you deserve support for something that is not, technically, a breakdown. The answer is yes. The threshold for deserving support is not suffering loudly enough. It is simply experiencing something that is diminishing your life — and years of emotional flatness, of going through the motions, of the quiet grief of not being present to your own experience, is exactly that.</p>
          <p>Talking helps not because it resolves the numbness immediately, but because it begins to make it real. When something that has existed only as a private, unnamed experience gets spoken to another person and witnessed — something shifts. Not a dramatic shift, not a sudden flood of feeling. But a small, incremental movement toward the self that has been waiting under the flat line.</p>
          <p>The people who talk to LeanOn listeners about emotional numbness often say the same thing: they did not know what they were going to say, they did not know if it would help, but the act of saying &quot;I don&apos;t feel things&quot; to a real person who heard it — without judgment, without a script — was itself a small beginning.</p>
        </div>

        <div className="section">
          <h2>You Don&apos;t Need to Understand It to Start</h2>
          <p>You do not need to have a clear diagnosis, a coherent narrative of how this happened, or a sense of what you need from a conversation. You do not need to be in crisis. You do not need to be sure that talking will help.</p>
          <p>You can start with: &quot;I have been feeling numb for a very long time and I don&apos;t really know what to do with that.&quot; That is enough. A LeanOn listener is trained to meet you in the uncertainty — to help you find language for what you are experiencing, to sit with you in the flatness without needing to immediately fix or explain it.</p>
          <p>The numbness did not develop overnight. It will not resolve overnight either. But the first honest conversation — the first time you say this to someone who actually hears it — is where something, slowly, begins.</p>
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
          <h2>Someone is here to listen — without needing you to feel it first</h2>
          <p>You do not have to perform emotions you do not have. Just say what is actually there — or not there. That is enough to begin.</p>
          <a href="/browse" className="btn-cta">Find a listener →</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/support/dont-want-to-get-out-of-bed">Not wanting to get up →</a>
            <a href="/support/childhood-trauma-india">Childhood trauma →</a>
            <a href="/i-need-professional-help-india">Need professional help →</a>
            <a href="/i-need-someone-to-talk-to">Need someone to talk to →</a>
            <a href="/support/loneliness">Loneliness →</a>
            <a href="/browse">Browse listeners →</a>
          </div>
        </div>
      </div>
    </>
  )
}
