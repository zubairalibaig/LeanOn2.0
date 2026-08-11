import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'How to Stop Overthinking — Talk to Someone Who Gets It | LeanOn',
  description: 'Overthinking at night? Racing thoughts that will not switch off? Talk anonymously to a peer listener in India. First 5 minutes free, available 24/7.',
  keywords: 'how to stop overthinking, overthinking at night, racing thoughts India, anxiety overthinking, talk to someone about overthinking, rumination help, overthinking help India, peer support overthinking',
  alternates: { canonical: 'https://www.leanon.app/support/overthinking', languages: { 'en-IN': 'https://www.leanon.app/support/overthinking' } },
  openGraph: {
    title: 'How to Stop Overthinking — Talk to Someone Who Gets It | LeanOn',
    description: 'Overthinking at night? Racing thoughts that will not switch off? Talk anonymously to a peer listener in India. First 5 minutes free, available 24/7.',
    url: 'https://www.leanon.app/support/overthinking',
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
      name: 'Why does my mind race more at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At night the distractions fall away — no work, no notifications, no people. Your mind finally has space, and it fills that space with everything you were too busy to feel during the day. Lying still in the dark with nothing to do also makes thoughts feel louder and more urgent than they actually are. This is why so many people describe 2 AM as the worst hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between overthinking and anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Overthinking is a mental habit — replaying, analysing, imagining every possible outcome. Anxiety is the physical and emotional state that often comes with it: tight chest, restlessness, dread. They feed each other. Overthinking can trigger anxiety, and anxiety makes the mind reach for more thinking as a way to feel in control. Neither means something is wrong with you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does telling myself to just stop thinking about it never work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because pushing a thought away requires monitoring for it, which keeps it active. The more effort you put into not thinking about something, the more your mind checks whether it is gone — and finds it. Suppression is not a switch. What tends to help instead is giving the thought somewhere to go, usually by saying it out loud to another person.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does talking to a peer listener break the overthinking loop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A loop survives because it stays inside your head, where it can repeat endlessly without ever finishing. Speaking it to another human forces it into words, gives it a beginning and an end, and lets someone reflect it back to you. LeanOn listeners have lived through their own spirals, so they listen with empathy instead of rushing you towards a solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn peer support cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. It is significantly more affordable than therapy and available any time — including the late nights when overthinking tends to peak.',
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
    { '@type': 'ListItem', position: 3, name: 'Overthinking', item: 'https://www.leanon.app/support/overthinking' },
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

export default function OverthinkingSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Overthinking</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Overthinking</p>
          <h1>Your Mind Won&apos;t Stop. You&apos;re Not <em>Broken</em>.</h1>
          <p className="lead">If you&apos;re reading this at 1 AM with the same three thoughts going round and round, you&apos;re in the right place. LeanOn connects you with peer listeners across India who have lived inside their own spirals — and know that the loop usually loosens the moment you say it out loud to someone.</p>
        </div>

        {/* Understanding overthinking */}
        <div className="section">
          <h2>Understanding Overthinking</h2>
          <p>Overthinking is not a character flaw, and it is not something you chose. It is what a tired, caring mind does when it has something unresolved and no safe place to put it. Recognising the shape of it is the first step towards loosening its grip.</p>

          <h3>The 2 AM Thought Spiral</h3>
          <p>Nights are the worst because everything that kept you occupied has gone quiet. No meetings, no messages, no traffic. Your mind finally gets the floor and it uses it to run through every unfinished thing at once. Lying still in the dark also removes the small movements and distractions that normally break a thought before it settles. So the same worry circles back, louder each time, and every hour on the clock makes it feel more urgent. Nothing has actually got worse — it is just late, and you are alone with it.</p>

          <h3>Rumination vs Problem-Solving</h3>
          <p>They can feel identical from the inside, which is why overthinking is so convincing. Problem-solving moves — it asks what can I do, arrives at something, and lets go. Rumination replays — it asks why did this happen, what did they mean, what if it happens again, and never reaches an end because it was never looking for one. A useful test at 2 AM: has this thinking produced anything new in the last twenty minutes? If it is the same loop wearing a different sentence, your mind is not solving. It is circling, and it needs rest or company, not more thinking.</p>

          <h3>Overthinking Work and Career</h3>
          <p>In India, work is rarely just work. There is family expectation layered on top of it, comparisons with cousins and batchmates, the weight of a decision someone else partly made for you, and the constant background sense that you should be further along by now. So one offhand comment from a manager becomes three hours of analysis. A quiet appraisal cycle becomes a full imagined future. High-pressure work cultures give the mind endless raw material — and very few people you can say any of it to without it getting back to someone.</p>

          <h3>Replaying Conversations</h3>
          <p>Social overthinking has its own particular sting. You reread a message you sent hours ago, hunting for the wrong word. You replay a conversation from a party last week and cringe at something nobody else remembers. You watch someone go from replying quickly to replying slowly and write an entire story about what it means. Underneath it is usually a simple, deeply human worry: that you might not be wanted. The mind tries to solve that fear by reviewing the evidence again and again, but there is no amount of reviewing that ever settles it.</p>

          <h3>Why Suppression Backfires</h3>
          <p>The most natural response — just stop thinking about it — is the one that reliably fails. To push a thought away you have to keep checking whether it is gone, and every check brings it back. Add the second layer of frustration at yourself for still thinking about it, and now you have two loops instead of one. Thoughts tend to quieten not when they are forced out but when they are given somewhere to land: written down, or better, said out loud to another person who receives it without flinching.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps You Break the Loop</h2>
          <p>LeanOn is not therapy, and we are honest about that. We are peer support — real humans talking to real humans. When your mind will not stop, here is what that actually does for you:</p>

          <h3>Saying It Out Loud Interrupts the Loop</h3>
          <p>A thought can repeat forever inside your head because it never has to finish. Speaking it to another person changes that. You have to find words, put them in order, and reach the end of the sentence — and somewhere in that process the thought stops being a fog and becomes a thing with edges. Most people notice it partway through: the worry that felt enormous at 2 AM sounds smaller in their own voice. That is not the thought being dismissed. It is the loop finally being interrupted.</p>

          <h3>Listeners Who Have Lived Their Own Spirals</h3>
          <p>Our listeners are not reading from a script about racing thoughts. They have had the sleepless nights, the reread messages, the week-long replay of one conversation. That lived experience shows up as real empathy rather than polite sympathy — they understand why you cannot simply put it down, because they could not either.</p>

          <h3>Available at 2 AM When It Peaks</h3>
          <p>Overthinking does not keep office hours. It peaks exactly when there is no one left to call and everyone you know is asleep. LeanOn listeners are available 24/7, so on the nights when you are staring at the ceiling and the loop is winning, there is a real person you can reach in a couple of minutes.</p>

          <h3>No Judgment, No Advice You Did Not Ask For</h3>
          <p>Most people, with the best intentions, respond to overthinking by trying to fix it — do not worry, it is nothing, just sleep. It rarely helps, and it often adds a quiet shame for still being stuck. LeanOn listeners are trained to listen with empathy first. They will not tell you your worry is silly, and they will not hand you solutions you never asked for. You get to say the whole thing, uninterrupted, to someone who is genuinely there for it.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Overthinking</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌙',
              name: 'Ananya',
              tag: 'Late-Night Spirals',
              bio: 'Spent two years awake at 3 AM replaying the same worries. I know how loud a quiet room can get, and I am happy to sit with you in it.'
            },
            {
              emoji: '💼',
              name: 'Rohit',
              tag: 'Work Overthinking',
              bio: 'Analysed every email and every appraisal until it took over my evenings. Learned slowly that thinking harder was not the way out.'
            },
            {
              emoji: '💬',
              name: 'Sneha',
              tag: 'Replaying Conversations',
              bio: 'Used to reread my own messages for hours looking for the wrong word. I understand social overthinking from the inside.'
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
          <h2>Ready to Get Out of Your Own Head?</h2>
          <p>Talk to a peer listener who knows the loop from the inside. First 5 minutes free — no appointments, no waitlists, any hour of the night.</p>
          <div className="cta-btns">
            <a href="/browse?topic=overthinking"><button className="btn-primary">Browse Overthinking Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why does my mind race more at night?</div>
            <div className="faq-a">At night the distractions fall away — no work, no notifications, no people. Your mind finally has space, and it fills that space with everything you were too busy to feel during the day. Lying still in the dark with nothing to do also makes thoughts feel louder and more urgent than they actually are. This is why so many people describe 2 AM as the worst hour.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between overthinking and anxiety?</div>
            <div className="faq-a">Overthinking is a mental habit — replaying, analysing, imagining every possible outcome. Anxiety is the physical and emotional state that often comes with it: tight chest, restlessness, dread. They feed each other. Overthinking can trigger anxiety, and anxiety makes the mind reach for more thinking as a way to feel in control. Neither means something is wrong with you.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why does telling myself to just stop thinking about it never work?</div>
            <div className="faq-a">Because pushing a thought away requires monitoring for it, which keeps it active. The more effort you put into not thinking about something, the more your mind checks whether it is gone — and finds it. Suppression is not a switch. What tends to help instead is giving the thought somewhere to go, usually by saying it out loud to another person.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does talking to a peer listener break the overthinking loop?</div>
            <div className="faq-a">A loop survives because it stays inside your head, where it can repeat endlessly without ever finishing. Speaking it to another human forces it into words, gives it a beginning and an end, and lets someone reflect it back to you. LeanOn listeners have lived through their own spirals, so they listen with empathy instead of rushing you towards a solution.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn peer support cost?</div>
            <div className="faq-a">LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. It is significantly more affordable than therapy and available any time — including the late nights when overthinking tends to peak.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Overthinking rarely travels alone. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/social-anxiety" className="related-link">Social Anxiety</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for help with racing thoughts, these pages may also help:</p>
          <div className="related">
            <a href="/blog/loneliness-at-night" className="related-link">Loneliness at night</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
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
