import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Chat with a Real Person in India — Not a Bot | LeanOn',
  description: 'Tired of AI chatbots? Talk to a real human listener on LeanOn. No scripts, no algorithms — just genuine empathy from someone who has lived it. Available 24/7 in India.',
  keywords: 'chat with real person online India, talk to real human not AI, real person to talk to online India, human chat not chatbot India, AI alternative human connection, tired of AI chatbot, ChatGPT alternative India, human listener not bot, real human emotional support India, talk to actual human online, not a bot chat India, genuine human conversation online, chatbot replacement India, real person chat app India, human connection app India',
  alternates: { canonical: 'https://www.leanon.app/chat-with-real-person', languages: { 'en-IN': 'https://www.leanon.app/chat-with-real-person' } },
  openGraph: {
    title: 'Chat with a Real Person in India — Not a Bot | LeanOn',
    description: 'Tired of AI chatbots? Talk to a real human listener on LeanOn. No scripts, no algorithms — just genuine empathy from someone who has lived it. Available 24/7 in India.',
    url: 'https://www.leanon.app/chat-with-real-person',
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
      name: 'What is the difference between talking to an AI and talking to a real person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI like ChatGPT generates responses based on patterns in text data. It has never felt lonely, anxious, or heartbroken. A real peer listener on LeanOn has actually been through what you are going through — they have sat in the same silence at 2 AM, questioned the same things, and come out the other side. That lived experience is something no algorithm can replicate. When a listener says "I understand," they mean it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ChatGPT good for mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can be a starting point, but it has real limitations for emotional support. It cannot pick up on the weight behind your words, it has no continuity of memory in most settings, and it has never experienced human pain. For genuine emotional processing — especially around loneliness, grief, or anxiety — a trained human peer listener provides something fundamentally different: presence, not prediction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do people feel lonely even after talking to AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because connection requires two-way vulnerability, not just a response. When you share something painful with an AI, you are essentially talking to a mirror that reflects plausible words back. There is no one on the other side. Human loneliness is healed by human presence — a real voice, real warmth, real shared experience. That is what LeanOn provides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is talking to a real person online safe and anonymous in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. On LeanOn, you do not need to share your name, city, or any personal details. Listeners are verified, trained in active listening, and sign confidentiality agreements. Sessions are private by design. You can talk about anything — your family, your relationship, your darkest thoughts — without fear of judgment or disclosure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a real human to talk to online in India right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open LeanOn, browse listeners by language or topic, and start a session. No appointment, no waitlist. Many listeners are online right now — including late at night when talking to a real person matters most.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to talk to a real person online in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session. New users get a free 5-minute trial. It is significantly more affordable than therapy and available any time — no insurance, no waitlist, no prescription needed.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Chat with a Real Person', item: 'https://www.leanon.app/chat-with-real-person' },
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
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:5px 14px;border-radius:20px;letter-spacing:0.05em;margin-bottom:16px;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;}
  .card-icon{font-size:28px;margin-bottom:12px;}
  .card-title{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .card-body{font-size:13px;color:var(--gray);line-height:1.65;font-weight:500;}
  .scenario-list{display:flex;flex-direction:column;gap:12px;margin-bottom:0;}
  .scenario{background:var(--light);border-left:4px solid var(--teal);border-radius:0 12px 12px 0;padding:14px 18px;font-size:15px;color:var(--navy);font-weight:600;line-height:1.55;}
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
  .hero-cta{margin-top:28px;}
`

export default function ChatWithRealPersonPage() {
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
          <span style={{color:'var(--navy)'}}>Chat with a Real Person</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Human Connection · Not AI</p>
          <div className="badge">100% Human. 0% AI.</div>
          <h1>Talk to a <em>Real Person</em> — Not a Chatbot</h1>
          <p className="lead">LeanOn connects you with verified peer listeners in India who have personally been through what you are facing. No scripts. No algorithms. Just genuine human empathy.</p>
          <div className="hero-cta">
            <a href="/browse"><button className="btn-primary" style={{fontFamily:'Nunito,sans-serif'}}>Browse Real Listeners →</button></a>
          </div>
        </div>

        {/* What makes a human different */}
        <div className="section">
          <h2>What Makes a Real Human Different?</h2>
          <p>Millions of people in India have tried sharing their feelings with AI chatbots. And many of them end up here — because something essential was missing. Here is what that something is.</p>
        </div>

        <div className="cards-grid">
          {[
            {
              icon: '🧠',
              title: 'Lived Experience vs Trained Data',
              body: 'AI learned from text scraped off the internet. Our listeners have actually lived through loneliness, heartbreak, burnout, and anxiety. They know the feeling — not just the words for it.',
            },
            {
              icon: '💛',
              title: 'Emotional Presence vs Pattern Matching',
              body: 'When you go quiet, a human listener feels that silence and holds space for it. AI fills silence with the statistically most likely next sentence. That difference is everything.',
            },
            {
              icon: '🔁',
              title: 'Continuity vs Reset',
              body: 'Your listener on LeanOn remembers your story — the context, the names, the details that matter. Most AI chats reset every single session, making you start over each time.',
            },
            {
              icon: '🔒',
              title: 'Confidential vs Data-Trained',
              body: 'What you share with a LeanOn listener stays private and is never used to train a model. Your pain is not a data point. It is a conversation with a real person who cares.',
            },
          ].map((c, i) => (
            <div key={i} className="card">
              <div className="card-icon">{c.icon}</div>
              <div className="card-title">{c.title}</div>
              <p className="card-body">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Why people come to LeanOn */}
        <div className="section">
          <h2>Who Talks to a Real Person on LeanOn?</h2>
          <p>People come to LeanOn for many reasons. These are the most common:</p>
          <div className="scenario-list">
            <div className="scenario">&ldquo;I&apos;ve been chatting with AI for weeks but it doesn&apos;t actually make me feel better — I still feel completely alone.&rdquo;</div>
            <div className="scenario">&ldquo;I want someone who has personally been through loneliness, anxiety, or grief — not something that just knows about it from reading.&rdquo;</div>
            <div className="scenario">&ldquo;I need to talk right now. I can&apos;t wait for a therapy appointment that&apos;s 3 weeks away.&rdquo;</div>
            <div className="scenario">&ldquo;I&apos;ve tried ChatGPT and it gives good advice but I still feel unheard. I need a real person to actually listen.&rdquo;</div>
            <div className="scenario">&ldquo;I don&apos;t want my words training someone&apos;s AI model. I want a private, human conversation.&rdquo;</div>
          </div>
        </div>

        {/* The AI gap */}
        <div className="section">
          <h2>Why AI Cannot Replace Human Connection</h2>

          <h3>AI Has Never Sat With You at 2 AM</h3>
          <p>The moment you type &ldquo;I feel so alone and I don&apos;t know why&rdquo; into an AI — it returns something grammatically empathetic, contextually plausible, and emotionally hollow. It has never sat in that 2 AM silence. It has never felt the particular weight of loneliness in a city where you know no one. Your LeanOn listener has. And that makes their &ldquo;I understand&rdquo; mean something completely different.</p>

          <h3>Connection Requires Someone On the Other Side</h3>
          <p>Human loneliness is not a problem that better text prediction can solve. It is the ache of not being seen, known, or felt by another human being. When you talk to an AI, there is no one on the other side receiving your pain — there is only an algorithm outputting a response. That structural absence is why many people feel lonelier after AI conversations, not less.</p>

          <h3>Lived Experience vs Statistical Knowledge</h3>
          <p>An AI trained on the internet knows everything about grief — the stages, the research, the coping strategies. But it has never lost someone. A peer listener on LeanOn who has personally navigated grief brings something the AI cannot: the credibility of having been there and the hard-won wisdom of having come through. That is irreplaceable.</p>

          <h3>Memory, Context, and Being Truly Known</h3>
          <p>One of the most healing aspects of being understood is continuity — the feeling that someone knows your history and holds it with care. AI resets. Listeners remember. That difference accumulates into something that matters deeply over multiple conversations.</p>
        </div>

        {/* How LeanOn works */}
        <div className="section">
          <h2>How to Talk to a Real Person on LeanOn</h2>

          <h3>Step 1: Browse Verified Listeners</h3>
          <p>See listener profiles, their lived experience, the topics they support, and their availability. Every listener is a real, verified person — their profile reflects genuine experience, not a generated bio.</p>

          <h3>Step 2: Start a Session</h3>
          <p>No appointment, no waitlist. Click &ldquo;Talk now&rdquo; and your session begins within seconds. You can talk via text or voice — whatever feels most natural.</p>

          <h3>Step 3: Be Heard</h3>
          <p>Your listener is trained in active listening and guided by their own lived experience. You are not getting scripted responses — you are having a real conversation with someone who genuinely cares about what you are going through.</p>

          <h3>Available 24/7 Across India</h3>
          <p>Listeners are available all day, every day — including at 2 AM when most professional services are closed and the weight of feeling alone is heaviest. No insurance required, no prescription needed, no judgement.</p>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Start Talking to a Real Person →</h2>
          <p>Your first 5 minutes are free. No credit card, no commitment. Just a real human, ready to listen — right now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a Real Listener</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn Free</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        {/* Related */}
        <div className="section">
          <h2>Related Pages</h2>
          <p>Looking for more ways to connect with real humans on LeanOn?</p>
          <div className="related">
            <a href="/ai-chatbot-alternative" className="related-link">AI Chatbot Alternative</a>
            <a href="/anonymous-peer-support" className="related-link">Anonymous Support</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/how-leanon-works" className="related-link">How LeanOn Works</a>
            <a href="/is-leanon-safe" className="related-link">Is LeanOn Safe?</a>
            <a href="/alternatives-to-therapy-india" className="related-link">Therapy Alternatives</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
