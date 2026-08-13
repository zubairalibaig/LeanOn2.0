import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Someone to Lean On — Talk to a Real Person Tonight | LeanOn India',
  description: 'Need someone to lean on? Talk anonymously to a verified peer listener in India tonight. First 5 minutes free. Real humans with lived experience, not AI.',
  keywords: 'someone to lean on, need someone to lean on, having someone to lean on, no one to lean on, what does lean on mean, lean on someone meaning, someone to lean on India',
  alternates: { canonical: 'https://www.leanon.app/someone-to-lean-on', languages: { 'en-IN': 'https://www.leanon.app/someone-to-lean-on' } },
  openGraph: {
    title: 'Someone to Lean On — Talk to a Real Person Tonight | LeanOn India',
    description: 'Need someone to lean on? Talk anonymously to a verified peer listener in India tonight. First 5 minutes free. Real humans with lived experience, not AI.',
    url: 'https://www.leanon.app/someone-to-lean-on',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean to have someone to lean on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To lean on someone means to rely on them emotionally — to let another person carry part of the weight you are holding, without that costing you the relationship. Having someone to lean on is not about being rescued or being given answers. It is about not having to hold everything alone, and knowing that being honest will not change how that person treats you tomorrow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it weak to need someone to lean on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Needing someone to lean on is a basic human requirement, not a character flaw. People are built to regulate emotion in the presence of other people — that is why saying something out loud to someone who listens changes how heavy it feels. The idea that adults should handle everything alone is a cultural expectation, not a fact about human beings. Reaching out is one of the more difficult things a person can do, which makes it the opposite of weakness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I genuinely have no one to lean on right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is a real and painful situation, and it is far more common than it looks from the outside — including among people who appear socially surrounded. Sometimes the people around you are close to the problem, or would worry, or would repeat it. LeanOn was built for exactly this gap: verified peer listeners who have lived through similar things, available anonymously and around the clock, so there is always someone to lean on even when your own circle is not an option tonight.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn related to the song "Lean On" by Major Lazer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — there is no connection of any kind. LeanOn (written as one word) is an Indian peer emotional support platform that connects people with verified peer listeners. The name comes from the everyday English phrase "someone to lean on", meaning a person you can rely on emotionally. The 2015 song is a separate and unrelated work by Major Lazer and DJ Snake.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first 5 minutes with a listener are free, so you can find the right person before paying anything. After that, listeners set their own rate between ₹8 and ₹25 per minute and keep all of it, while LeanOn adds a flat ₹10 platform fee per paid session. A 15-minute session works out to about ₹160 — far less than a therapy appointment in India, and available at any hour.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Someone to Lean On', item: 'https://www.leanon.app/someone-to-lean-on' },
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

export default function SomeoneToLeanOnPage() {
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
          <span style={{color:'var(--navy)'}}>Someone to Lean On</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · India</p>
          <h1>Everyone Needs <em>Someone to Lean On</em></h1>
          <p className="lead">Not advice. Not a diagnosis. Not a lecture about what you should have done. Just someone to lean on — a real, empathetic person on the other end who listens properly while you say the thing you have been carrying alone. LeanOn connects you with verified peer listeners across India, anonymously, at any hour. The first 5 minutes are free.</p>
        </div>

        {/* What it means */}
        <div className="section">
          <h2>What It Really Means to Lean on Someone</h2>
          <p>The phrase is so ordinary that most people never stop to unpack it. But if you have ever searched for it at midnight, you already know it means something very specific — and something you cannot get from a group chat.</p>

          <h3>Shared Weight, Not Transferred Burden</h3>
          <p>To lean on someone is not to hand them your problem and walk away. Leaning implies contact, not collapse: you are still standing, but part of your weight is resting on another person for a while. That is what having someone to lean on actually gives you — not a solution, but the experience of not holding the whole thing by yourself for the length of one conversation. Most people find that the problem does not shrink, but their capacity to face it grows.</p>

          <h3>It Is a Normal Human Need, Not a Weakness</h3>
          <p>Somewhere along the way, needing support got recoded as failure. It is not. Human beings regulate their emotions in the presence of other human beings — that is why a feeling you have circled for six days can loosen within ten minutes of saying it out loud to someone who is genuinely listening. Wanting someone to lean on is as ordinary as wanting sleep. The only unusual thing about it is how rarely people admit it.</p>

          <h3>Why It Gets Harder as an Adult</h3>
          <p>In school and college, closeness was a by-product of proximity. As an adult you have to schedule it. Friends are stretched across cities, jobs and small children, and a message that says &quot;are you free to talk?&quot; can sit unanswered for two days — not from indifference, but from exhaustion. Family is often invested in the outcome, which means you are managing their reaction as well as your own. And colleagues, however friendly, sit inside a system where what you say can travel. The result is a strange adult arithmetic: more people in your life than ever, and fewer of them you can be fully honest with.</p>

          <h3>The Indian Context: Joint Families and &quot;Log Kya Kahenge&quot;</h3>
          <p>In India this is sharper still. In a joint family, privacy is scarce and information moves fast — what you tell one person at 9 PM can reach four relatives by morning. Emotional difficulty is often read as a family matter rather than a personal one, so admitting you are struggling with your marriage, your job or your mental health can feel like implicating everybody. &quot;Log kya kahenge&quot; is not a joke; it is a live cost that people calculate before speaking. The painful irony is that the people physically closest to you are often the ones you can least afford to be honest with — which is exactly how someone can be surrounded by family and still have no one to lean on.</p>
        </div>

        {/* No one to lean on */}
        <div className="section">
          <h2>When You Have No One to Lean On</h2>
          <p>If you have ever scrolled your entire contact list at 2 AM and closed the phone without messaging anybody, you are not broken and you are not alone in that. It is one of the most common experiences people describe on LeanOn.</p>

          <h3>It Happens to People With Full Contact Lists</h3>
          <p>This is not only about isolated people. It happens to people with hundreds of contacts, a busy weekend calendar and a family they love. Social volume and emotional support are two different resources, and having a great deal of the first does not guarantee any of the second. Plenty of people who look thoroughly connected from the outside would tell you, honestly, that they have no one to lean on.</p>

          <h3>Contacts Are Not Confidants</h3>
          <p>There is a difference between people you can talk to and people you can be honest with. You can have twenty of the first and none of the second. A confidant is someone in front of whom you do not have to edit — no performance of being fine, no worrying that this version of you will be remembered and referenced later. Most adults lose confidants gradually and without noticing, until a hard week arrives and there is nobody obvious to call.</p>

          <h3>Why a Stranger Is Sometimes Easier to Lean On</h3>
          <p>It sounds backwards, but it is consistent: a person with no stake in your life is often easier to lean on than a close friend. A stranger will not have to sit across from you at Diwali. They will not worry about you for the next three weeks, or tell you what your mother would say, or quietly reorganise their opinion of your marriage. Because they have nothing invested in the outcome, they can give you the one thing your inner circle sometimes cannot: undivided, unembarrassed, empathetic attention — with no social bill arriving afterwards.</p>

          <h3>What Actually Helps</h3>
          <p>Not advice, mostly. What helps is being heard accurately by someone who has been somewhere similar and does not flinch — someone who lets you finish, reflects back what you actually said, and does not rush to fix you. It helps to say the specific thing rather than the acceptable summary of it. It helps for the conversation to be private enough that you are not calculating consequences while you speak. And it helps enormously to know that the option exists at all: that at 3 AM on a Tuesday there is still someone to lean on.</p>
        </div>

        {/* The name */}
        <div className="section">
          <h2>LeanOn Was Named for Exactly This</h2>
          <p>The platform is called LeanOn — one word — because that phrase is the whole idea. Not counselling, not coaching, not a chatbot. Just someone to lean on when you need it.</p>

          <h3>The Name Comes From the Phrase</h3>
          <p>LeanOn takes its name directly from the everyday expression &quot;someone to lean on&quot;: a person you can rely on emotionally, who holds part of your weight without making you pay for it later. That belief is the founding premise of the platform — that everyone deserves someone to lean on, and that access to it should not depend on how lucky you were with the friends and family you happened to get.</p>

          <h3>Verified Peers With Real Lived Experience — Not Therapists, Not AI</h3>
          <p>Every listener on LeanOn is a verified human being who has personally lived through something like what you are carrying: a breakup, a job loss, years in a marriage they could not talk about, the long quiet of a city where nobody knows them. They are peers, not licensed therapists, and we are direct about that distinction. And there is no AI anywhere in the conversation — no generated replies, no simulated empathy. The person typing has actually been there.</p>

          <h3>Anonymous, First Names Only, Open at 3 AM</h3>
          <p>You choose a listener and talk. First names only, no photographs of you, nothing shared with anyone in your life, and nothing that shows up anywhere later. Listeners are available around the clock, including the hours when this feeling is worst, so having someone to lean on does not depend on office timings. The first 5 minutes with any listener are free — enough to find out whether this particular person actually gets it before you spend anything.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Know What It Is Like to Have No One</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌊',
              name: 'Ananya',
              tag: 'Nobody to call',
              bio: 'Big family, hundreds of contacts, and for two years nobody I could actually be honest with. I know that specific silence well.'
            },
            {
              emoji: '🌱',
              name: 'Rohan',
              tag: 'Moved cities alone',
              bio: 'Shifted for work at 26 and went months without a real conversation. Learned slowly how to ask for support instead of waiting.'
            },
            {
              emoji: '🫂',
              name: 'Fatima',
              tag: 'Joint family, no privacy',
              bio: 'Ten people at home and nowhere to say the hard things. I listen without judging and without repeating anything.'
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

        {/* CTA */}
        <div className="cta-card">
          <h2>Find Someone to Lean On Tonight</h2>
          <p>Browse verified peer listeners and start talking in under a minute. Anonymous, available 24/7, first 5 minutes free — no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What does it mean to have someone to lean on?</div>
            <div className="faq-a">To lean on someone means to rely on them emotionally — to let another person carry part of the weight you are holding, without that costing you the relationship. Having someone to lean on is not about being rescued or being given answers. It is about not having to hold everything alone, and knowing that being honest will not change how that person treats you tomorrow.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it weak to need someone to lean on?</div>
            <div className="faq-a">No. Needing someone to lean on is a basic human requirement, not a character flaw. People are built to regulate emotion in the presence of other people — that is why saying something out loud to someone who listens changes how heavy it feels. The idea that adults should handle everything alone is a cultural expectation, not a fact about human beings. Reaching out is one of the more difficult things a person can do, which makes it the opposite of weakness.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I genuinely have no one to lean on right now?</div>
            <div className="faq-a">That is a real and painful situation, and it is far more common than it looks from the outside — including among people who appear socially surrounded. Sometimes the people around you are close to the problem, or would worry, or would repeat it. LeanOn was built for exactly this gap: verified peer listeners who have lived through similar things, available anonymously and around the clock, so there is always someone to lean on even when your own circle is not an option tonight.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn related to the song &quot;Lean On&quot; by Major Lazer?</div>
            <div className="faq-a">No — there is no connection of any kind. LeanOn (written as one word) is an Indian peer emotional support platform that connects people with verified peer listeners. The name comes from the everyday English phrase &quot;someone to lean on&quot;, meaning a person you can rely on emotionally. The 2015 song is a separate and unrelated work by Major Lazer and DJ Snake.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does it cost?</div>
            <div className="faq-a">The first 5 minutes with a listener are free, so you can find the right person before paying anything. After that, listeners set their own rate between ₹8 and ₹25 per minute and keep all of it, while LeanOn adds a flat ₹10 platform fee per paid session. A 15-minute session works out to about ₹160 — far less than a therapy appointment in India, and available at any hour.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Needing someone to lean on rarely arrives on its own. These pages may help too:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/support/marriage-loneliness" className="related-link">Loneliness in Marriage</a>
            <a href="/talk-to-someone-right-now" className="related-link">Talk to Someone Right Now</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for someone to lean on, these pages are worth a read:</p>
          <div className="related">
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/no-one-to-talk-to" className="related-link">No one to talk to</a>
            <a href="/leanon" className="related-link">What is LeanOn?</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
          </div>
        </div>

        {/* City availability */}
        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
