import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Exhaustion & Being Emotionally Drained | LeanOn India',
  description: 'Feeling emotionally drained, tired of everything, or like you have nothing left to give? Talk to a peer listener in India who has been through emotional exhaustion. Anonymous, 24/7.',
  keywords: ['emotional exhaustion India', 'emotionally drained India', 'nothing left to give India', 'tired of everything India', 'emotionally tired India', 'compassion fatigue India', 'feeling emotionally depleted India', 'too tired to feel India', 'emotionally burnt out India', 'emotional fatigue India', 'I am exhausted emotionally India', 'how to recover from emotional exhaustion India', 'mental tiredness India', 'emotionally overwhelmed India', 'support for emotional exhaustion India'],
  alternates: { canonical: 'https://www.leanon.app/support/emotional-exhaustion', languages: { 'en-IN': 'https://www.leanon.app/support/emotional-exhaustion' } },
  openGraph: {
    title: 'Emotional Exhaustion & Being Emotionally Drained | LeanOn India',
    description: 'Feeling emotionally drained, tired of everything, or like you have nothing left to give? Talk to a peer listener in India who has been through emotional exhaustion. Anonymous, 24/7.',
    url: 'https://www.leanon.app/support/emotional-exhaustion',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn peer support for emotional exhaustion' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is emotional exhaustion and how is it different from physical tiredness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional exhaustion is the depletion of your emotional reserves — the capacity to feel, to respond, to care, to engage. Unlike physical tiredness, sleep does not reliably fix it. You can wake up after 8 hours and still feel completely flat. Emotional exhaustion comes from sustained emotional output without replenishment: caregiving, managing others\' feelings, ongoing stress, or simply carrying too much for too long without being held yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the signs of emotional exhaustion in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common signs: feeling like you have nothing left to give; being irritable about small things while feeling nothing about big ones; becoming cynical or detached from things that used to matter; physical symptoms like headaches, nausea, or fatigue without medical cause; wanting to isolate; feeling like every interaction costs more than it gives; and the specific feeling of going through the motions while watching yourself from a distance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you recover from emotional exhaustion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recovery requires replenishment, not just rest. The things that tend to work: radical reduction of what you are obligated to carry for a period; being held — having someone genuinely hear you, not just ask how you are; re-engaging with small things that give without demanding (nature, music, physical movement); sleeping more than you think you need; and saying no to things that drain without giving back. Recovery is rarely fast. But it begins with acknowledgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a peer listener help with emotional exhaustion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and in a specific way. When you are emotionally exhausted, you have been in the giving role for too long. A peer listener session puts you in the receiving role: someone is there for you, listening to you, holding the space for you. For many people who are chronically in caretaker or support roles, this is a rare and restorative experience. You do not have to look after the listener. You can just be the one who needs something for a change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is emotional exhaustion the same as burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They overlap but are not identical. Burnout is typically tied to a specific context — work, a relationship, a role — and involves cynicism and reduced efficacy in that area. Emotional exhaustion is broader — it is the depletion of your general emotional capacity. You can be burned out at work and still have emotional reserves for your personal life; emotional exhaustion typically spreads across everything.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I see a doctor for emotional exhaustion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If exhaustion has lasted more than a month and is significantly affecting your ability to function — work, relationships, self-care — see a doctor to rule out thyroid, anaemia, or other physical causes, and consider speaking to a mental health professional. Peer support is valuable for processing and connection; it is not a substitute for medical evaluation.',
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
    { '@type': 'ListItem', position: 3, name: 'Emotional Exhaustion', item: 'https://www.leanon.app/support/emotional-exhaustion' },
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

export default function EmotionalExhaustionPage() {
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
          <span style={{color:'var(--navy)'}}>Emotional Exhaustion</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Peer Support · Emotional Exhaustion</p>
          <h1>Emotionally <em>Drained</em> and Nothing Left to Give?</h1>
          <p className="lead">Emotional exhaustion is not the same as being tired. Sleep does not fix it. It is the depletion of your capacity to feel, respond, and engage — the result of carrying too much for too long without being held. LeanOn peer listeners know this territory.</p>
        </div>

        <div className="section">
          <h2>What Emotional Exhaustion Actually Feels Like</h2>
          <p>Emotional exhaustion has a specific quality that distinguishes it from ordinary tiredness or stress. You can be completely functional on the outside — going to work, fulfilling obligations, answering messages — while feeling hollowed out on the inside. It is the sensation of going through the motions of your life as if you are watching from a slight distance.</p>

          <h3>Nothing Left to Give</h3>
          <p>The clearest signal of emotional exhaustion is the feeling that you have nothing left. A friend needs support and you find yourself feeling nothing — not callousness, just emptiness. A situation that would normally move you leaves you flat. You try to care and the caring simply is not there. This is not a personality change. It is depletion. The reserves are gone because they were given without being replenished.</p>

          <h3>The Going-Through-Motions Quality</h3>
          <p>Another characteristic sign is the feeling of performing your life rather than living it. You are in the conversation, but not quite present. You laugh at the right moments, you say the right things, but something is not there. This automatic functioning — going through the motions — is the emotionally exhausted self operating on minimum viable effort. The system is protecting you by doing the bare minimum needed to get through.</p>

          <h3>Irritability About Small Things, Numbness About Big Ones</h3>
          <p>A paradox that many emotionally exhausted people notice: they can become disproportionately irritated by minor things — a cup left out, a slow internet connection — while feeling strangely numb about major things that would normally matter enormously. This is the exhausted nervous system inverting its responses. Big emotions require reserve. There is no reserve. But small triggers still register because the irritability threshold has lowered.</p>
        </div>

        <div className="section">
          <h2>What Causes It in India</h2>
          <p>Emotional exhaustion is not a random occurrence. It is almost always the result of sustained emotional output in a context that does not provide for replenishment. In India, several cultural dynamics make this particularly acute.</p>

          <h3>The Always-On Culture</h3>
          <p>India&apos;s work culture — especially in startups, consulting, banking, and high-growth companies — has normalised a level of availability and output that would have been considered extreme even a generation ago. The expectation of instant responsiveness across time zones, the erosion of boundaries between work and life, and the ambient pressure to perform at all times creates a specific form of emotional taxation that accumulates without any designated outlet.</p>

          <h3>Being the Strong One</h3>
          <p>In many Indian families, one person ends up carrying the emotional load — the eldest child who manages everyone else&apos;s anxiety, the spouse who absorbs the other&apos;s difficulty, the friend who is always available. If you have been the strong one for a long time, you have been in the giving role without being in the receiving role. No one asks how you are, because you seem fine. The result, over time, is exhaustion that no one around you can see, because you have been too good at hiding it.</p>

          <h3>Caregiving Without Being Cared For</h3>
          <p>Caregiving — of ageing parents, of children, of a sick relative — is emotionally demanding work that Indian culture largely renders invisible. It is expected, especially of women. It is not acknowledged as labour. The carer does not get a break, does not get recognised, and does not get supported. Over months or years of this, emotional exhaustion is not a possibility. It is a mathematical certainty.</p>

          <h3>Suppression as Default</h3>
          <p>Indian culture&apos;s deep resistance to emotional expression means that feelings go in but do not come out. Year after year of suppressing grief, anger, disappointment, and fear — of presenting composure to the world while carrying turmoil inside — depletes the system as surely as any other sustained effort. The body keeps the score. At some point, the account is empty.</p>
        </div>

        <div className="section">
          <h2>The Difference Between Rest and Recovery</h2>
          <p>One of the most important distinctions to understand about emotional exhaustion is that rest is not recovery. Many people who are emotionally exhausted sleep enough, take their leave, and return from a holiday feeling exactly as drained as when they left. This is because the problem is not rest-deficit. It is replenishment-deficit.</p>

          <h3>Why Sleep Alone Does Not Fix It</h3>
          <p>Sleep repairs physical exhaustion. It does not, by itself, replenish emotional reserves. If you go to sleep still carrying unprocessed grief, unacknowledged stress, and unexpressed feeling — you will wake up with all of that still present. The sleep refreshes the body. The emotional load remains.</p>

          <h3>What Actual Replenishment Looks Like</h3>
          <p>Replenishment for emotional exhaustion is typically some combination of: reducing what you are carrying (saying no to obligations that drain without giving back); being received (having someone genuinely hear you and hold space for you, not just check in); engaging with things that give energy without demanding output (nature, music, physical movement, creative work); and giving yourself explicit permission to not be fine for a while — to not be the strong one, to not have it handled.</p>

          <h3>The Recovery Timeline</h3>
          <p>Recovery from emotional exhaustion is rarely fast. Weeks or months of sustained depletion does not resolve in a weekend. The trajectory is gradual: a slow recharging, a gradual return of the capacity to feel and engage. The beginning of recovery often looks like simply acknowledging how depleted you are — not trying to push through it, not trying to fix it immediately, but simply saying: I have nothing left, and I need to be held for a while.</p>
        </div>

        <div className="section">
          <h2>Being Held When You Are the One Who Always Holds Others</h2>
          <p>For the people who are chronically in the giving role — the caretakers, the fixers, the strong ones, the first-responders in their social networks — the most restorative thing is often the simplest: being in the receiving role. Having someone hold space for you. Not managing anyone. Not performing competence. Not reassuring anyone that you are fine.</p>

          <h3>The Specific Value of the Receiving Role</h3>
          <p>A LeanOn peer listener session reverses the usual dynamic for people who are emotionally exhausted from giving. In that session, you are the one who is heard. The listener&apos;s attention is entirely on you. You do not have to look after anyone. You do not have to be useful. You do not have to seem strong. You can arrive depleted and simply speak about what you have been carrying — and have someone receive it without requiring anything back from you. For many chronic caretakers, this experience is genuinely unfamiliar. And often, that unfamiliarity is itself a signal of how much is needed.</p>

          <h3>The First Step</h3>
          <p>Recovery from emotional exhaustion begins somewhere. Often it begins with naming it — saying, even if only to yourself: I am depleted. I have nothing left. I need to be held. Speaking that to another person who can hear it without fixing it is often the first real step toward replenishment. You cannot recover from something you are not allowed to acknowledge. The acknowledgment is where it starts.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Have Been Emotionally Exhausted</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🕊️',
              name: 'Meera',
              tag: 'Caregiver Exhaustion',
              bio: 'Cared for my mother for two years while holding a full-time job. I know what it means to have nothing left.'
            },
            {
              emoji: '🌿',
              name: 'Rohan',
              tag: 'The Strong One',
              bio: 'Was everyone\'s person for years. Hit a wall. Learned how to receive. I am here for people who need to be received.'
            },
            {
              emoji: '🧘',
              name: 'Sunita',
              tag: 'Emotional Depletion',
              bio: 'Suppressed feelings for so long I felt nothing. Recovery is possible. I have been through it and I can sit with you.'
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
          <h2>Let Someone Hold Space for You</h2>
          <p>You have been giving for too long. Come be in the receiving role for a while. A peer listener is available right now — no judgment, no appointments.</p>
          <div className="cta-btns">
            <a href="/browse?topic=burnout"><button className="btn-primary">Rest your mind — talk to someone — first 5 min free →</button></a>
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
          <p>Emotional exhaustion often connects with other experiences. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/feeling-empty" className="related-link">Feeling Empty</a>
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
