import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Empty Inside? Peer Support for Numbness & Emptiness | LeanOn',
  description: 'Feeling emotionally empty, numb, or like nothing makes you happy anymore? Talk to a peer listener in India who has been there. Anonymous, available 24/7.',
  keywords: ['feeling empty inside India', 'feel numb emotionally India', 'nothing makes me happy anymore', 'emotional numbness India', 'I feel empty what to do', 'why do I feel empty India', 'feel hollow inside India', 'anhedonia India', 'feel detached from life India', 'emotionally disconnected India', 'why do I feel nothing India', 'empty feeling in chest India', 'peer support for emptiness India', 'talk to someone about feeling empty', 'feeling empty in relationship India'],
  alternates: { canonical: 'https://www.leanon.app/support/feeling-empty', languages: { 'en-IN': 'https://www.leanon.app/support/feeling-empty' } },
  openGraph: {
    title: 'Feeling Empty Inside? Peer Support for Numbness & Emptiness | LeanOn',
    description: 'Feeling emotionally empty, numb, or like nothing makes you happy anymore? Talk to a peer listener in India who has been there. Anonymous, available 24/7.',
    url: 'https://www.leanon.app/support/feeling-empty',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn peer support for feeling empty' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean to feel emotionally empty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional emptiness is the sensation of feeling hollow, numb, or disconnected — as if your feelings have gone quiet. It is not the same as sadness, which has heat and urgency. Emptiness is more like a grey flatness: you go through the motions, but nothing quite lands. It is one of the most disorienting emotional experiences because it does not have a clear cause you can point to and fix. And it is far more common than people acknowledge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel empty even when things are going well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the most confusing forms of emptiness — when life looks fine from the outside but you feel nothing on the inside. This often happens after a sustained period of striving: you hit the goal, got the job, passed the exam, and then felt... nothing. It can also happen as the aftermath of a long period of suppressing emotions — at some point the system goes quiet. It is not ingratitude. It is a signal that something deeper needs attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is feeling empty a sign of depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional emptiness and numbness are common features of depression in India — but they can also arise from burnout, grief, relationship disconnection, or simply long stretches of not being heard. You do not need a diagnosis to deserve support. If you have felt empty for more than a few weeks, it is worth talking to someone — a peer listener who has been through it, or a mental health professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop feeling empty inside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no one-size fix, but certain things consistently help: speaking the feeling out loud to someone who can actually hear it (not just process your words), reconnecting with small sensory experiences (food, movement, music), re-examining whether the life you are living is the one you actually chose, and giving yourself permission to feel lost rather than forcing yourself to feel fine. Peer listeners on LeanOn have navigated this — talking to one is often a useful first step.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel emotionally numb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional numbness is often a protective response — the mind dampening feeling when feeling has been too much for too long. It can follow grief, trauma, sustained stress, burnout, or a long period of emotional suppression. The numbness itself is not the problem; it is the signal. It is saying: something was too much, and I need attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a peer listener help with feeling empty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A peer listener on LeanOn has personally navigated periods of emptiness — whether after burnout, grief, or simply a long stretch of feeling nothing. They will not try to diagnose you or fix you. They will sit with you in it, reflect it back, and help you articulate what might be underneath. For many people, being heard is the first crack in the numbness.',
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
    { '@type': 'ListItem', position: 3, name: 'Feeling Empty', item: 'https://www.leanon.app/support/feeling-empty' },
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

export default function FeelingEmptyPage() {
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
          <span style={{color:'var(--navy)'}}>Feeling Empty</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Peer Support · Emotional Emptiness</p>
          <h1>Feeling <em>Empty Inside</em> Is More Common Than Anyone Admits</h1>
          <p className="lead">That hollow, grey flatness — going through the motions while feeling nothing — is one of the least-talked-about emotional experiences in India. LeanOn connects you with peer listeners who have personally navigated emotional emptiness and numbness.</p>
        </div>

        <div className="section">
          <h2>What Feeling Empty Actually Feels Like</h2>
          <p>Emotional emptiness is not sadness. Sadness has heat — it aches, it burns, it moves through you. Emptiness is different. It is a grey flatness, a kind of interior silence where feeling used to be. You go through the day, attend the meetings, scroll the phone, have the conversations — and nothing quite lands. It is like watching your own life through glass.</p>

          <h3>Going Through the Motions</h3>
          <p>The particular quality of emotional emptiness is that it is invisible from the outside. You can be completely functional — showing up, performing, even laughing — while internally feeling nothing at all. This is part of what makes it so disorienting. There is no visible crisis. Nothing is technically wrong. And yet something is profoundly absent.</p>

          <h3>Not the Same as Sadness</h3>
          <p>People who have felt deep sadness sometimes find emptiness more frightening — because at least sadness is something. Emptiness is the absence of feeling. You cannot cry because there is nothing to cry about. You cannot be angry because you cannot muster the energy. Food that used to taste good tastes like nothing. Music that used to move you sits flat. This is what clinicians sometimes call anhedonia — the inability to feel pleasure — and it is a signal worth paying attention to.</p>

          <h3>The Disconnection From Yourself</h3>
          <p>Emotional emptiness often comes with a sense of depersonalisation — of watching yourself from a slight distance, as if you are a character in a film about your own life. You are present but not present. This is the self&apos;s way of signalling that something needs attention.</p>
        </div>

        <div className="section">
          <h2>Why This Happens — Especially in India</h2>
          <p>Emotional emptiness does not arrive from nowhere. It is almost always the result of something — a period of intense suppression, a long stretch of striving without arrival, or simply never having been given permission to feel.</p>

          <h3>The Suppression Culture</h3>
          <p>Indian families and workplaces reward emotional control. Crying is weakness. Anger is disrespect. Anxiety is ingratitude. Over years of suppressing what you actually feel, the emotional system can go quiet — not because you are healed, but because the signal has been dampened so consistently that it dims. The emptiness you feel is not the absence of emotion. It is the result of very effective emotional suppression.</p>

          <h3>Striving With No Arrival</h3>
          <p>India&apos;s competitive culture trains people to defer feeling until they arrive — until the exam passes, the job is secured, the salary reaches a number. The problem is that arrival does not feel the way the anticipation promised. Many people hit the goal — the job, the package, the marriage — and feel... nothing. This post-achievement emptiness is extremely common and almost never discussed, because admitting it feels like ingratitude.</p>

          <h3>Burnout Aftermath</h3>
          <p>Emotional emptiness often follows a period of sustained high-stress output — a demanding project, a difficult relationship, a long caregiving stretch. The emotional system, like the body, has a point of exhaustion. After that point, it goes into a kind of conservation mode — flat, quiet, empty. The emptiness is not a failure of character. It is the after-effect of giving too much for too long.</p>

          <h3>Long-Distance From Yourself</h3>
          <p>For many young Indians, the life they are living was not really chosen — it was inherited, expected, accumulated. Living a life that is not genuinely yours creates a specific kind of emptiness: the feeling of being a stranger in your own story. This is not a crisis to be solved by quitting your job. But it is a signal worth hearing.</p>
        </div>

        <div className="section">
          <h2>What Emptiness Is Telling You</h2>
          <p>Emotional emptiness is not a flaw and it is not a diagnosis. It is a signal. The body and mind are extraordinarily good at telling us what they need — but in a culture that rewards suppression and output, we get very practised at not listening. Emptiness is what happens when the signal gets loud enough that it can no longer be ignored.</p>

          <h3>Something Has Been Too Much</h3>
          <p>The protective function of emotional numbing is real. When feeling has been too much — too painful, too overwhelming, too dangerous to express — the mind dampens it. The numbness is not a malfunction. It was adaptive. It protected you from something. The task now is not to force yourself to feel, but to understand what the system was protecting you from — and to create enough safety that feeling can gradually return.</p>

          <h3>The Importance of Naming It</h3>
          <p>One of the most consistently useful things you can do with emotional emptiness is name it. Not fix it — name it. Say: I feel empty. I feel numb. I feel hollow. The act of putting language to an experience changes how the brain processes it. Naming moves it from a diffuse, ambient presence to something you can look at and acknowledge. For many people, saying &apos;I feel empty&apos; out loud to another person — for the first time — is when something begins to shift.</p>
        </div>

        <div className="section">
          <h2>What Helps — and What Does Not</h2>

          <h3>What Does Not Help</h3>
          <p>Distracting yourself endlessly — with work, with content, with social obligations — does not resolve emotional emptiness. It postpones it. Many people spend years at high velocity precisely because stopping means having to sit with the flatness. The distraction is understandable. But it does not cure anything. At some point, the emptiness waits for you on the other side of every distraction.</p>

          <h3>Speaking It Out Loud</h3>
          <p>Speaking the emptiness to another person — not to get advice, but simply to have it heard — is one of the most consistently helpful things you can do. The act of externalising the experience, of putting it into language and having someone receive it without fixing or dismissing it, interrupts the internal loop. It does not require a therapist. A peer listener who has personally navigated the same territory can offer the kind of recognition that is uniquely helpful.</p>

          <h3>Small Sensory Reconnections</h3>
          <p>The route back from emotional numbness is often through the senses. Not big interventions — small ones. The taste of something you genuinely enjoy. A walk in air that is not air-conditioned. Music played at actual volume. Physical movement that makes the body tired in a good way. These small reconnections with physical reality can gradually thaw the emotional freeze, not all at once, but incrementally.</p>

          <h3>Peer Support</h3>
          <p>LeanOn peer listeners have personally navigated emotional emptiness and numbness — through burnout, grief, or long periods of suppression. Talking to someone who has been on the other side of the same flatness offers something different from therapy or advice: recognition. The sense that someone genuinely knows what this feels like. That alone is often the first crack in the wall.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Have Navigated Emptiness</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌫️',
              name: 'Kavya',
              tag: 'Burnout Aftermath',
              bio: 'After two years of peak performance, I felt nothing. I know what the flatness is and I know how to sit with someone in it.'
            },
            {
              emoji: '🕯️',
              name: 'Rahul',
              tag: 'Post-Achievement Emptiness',
              bio: 'Got everything I was supposed to want and felt hollow. Navigated that — and I am here to help you do the same.'
            },
            {
              emoji: '🌱',
              name: 'Divya',
              tag: 'Emotional Numbness',
              bio: 'Suppressed emotion for years until I felt nothing. Recovery is gradual. I know the way out because I walked it.'
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
          <h2>Ready to Talk About What You Are Feeling?</h2>
          <p>A peer listener who has personally navigated emptiness is available right now. No appointments, no waitlists. Start with a free trial session.</p>
          <div className="cta-btns">
            <a href="/browse?topic=general"><button className="btn-primary">You don't have to feel this alone — first 5 min free →</button></a>
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
          <p>Emotional emptiness often travels with other experiences. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/overthinking" className="related-link">Overthinking</a>
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
