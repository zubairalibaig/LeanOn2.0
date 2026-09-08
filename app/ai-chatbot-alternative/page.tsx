import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Human Listener vs AI Chatbot for Mental Health India | LeanOn',
  description: 'Looking for a ChatGPT alternative for emotional support? LeanOn connects you with real trained peer listeners in India — not an AI. Talk anonymously, 24/7. Free trial.',
  keywords: [
    'AI chatbot alternative India', 'ChatGPT alternative for loneliness', 'human vs AI mental health India',
    'alternative to AI chatbot for anxiety India', 'better than ChatGPT for emotional support',
    'chatbot not helping loneliness', 'human emotional support vs AI chatbot',
    'real person vs AI chatbot India', 'ChatGPT replacement emotional support India',
    'human connection instead of AI India', 'chatbot limitations mental health',
    'why AI cannot replace human connection', 'peer support vs AI therapy India',
    'emotional AI chatbot alternatives', 'not an AI support India',
  ],
  alternates: { canonical: 'https://www.leanon.app/ai-chatbot-alternative', languages: { 'en-IN': 'https://www.leanon.app/ai-chatbot-alternative' } },
  openGraph: {
    title: 'Human Listener vs AI Chatbot for Mental Health India | LeanOn',
    description: 'Looking for a ChatGPT alternative for emotional support? LeanOn connects you with real trained peer listeners in India — not an AI. Talk anonymously, 24/7. Free trial.',
    url: 'https://www.leanon.app/ai-chatbot-alternative',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Real Humans, Not AI' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can ChatGPT replace a human listener for mental health?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. ChatGPT can give you information about mental health, suggest coping strategies, and be available at 3 AM. But it cannot replace the experience of being truly heard by someone who has personally walked your path. Peer listeners on LeanOn are not trained on data — they are trained by their own lived experience of anxiety, grief, loneliness, or burnout. That difference is profound when you are in genuine emotional pain.' },
    },
    {
      '@type': 'Question',
      name: 'What are the limitations of AI chatbots for emotional support?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI chatbots: (1) have no persistent memory — they forget your story each session; (2) cannot feel — they predict the next likely response, not an emotional one; (3) lack accountability — a human listener is a real person who showed up for you; (4) may worsen loneliness — users often feel more isolated after AI conversations because the void of real connection becomes more apparent; (5) cannot share lived experience — they can describe grief but have never felt it.' },
    },
    {
      '@type': 'Question',
      name: 'Why do people in India prefer talking to real humans for emotional support?',
      acceptedAnswer: { '@type': 'Answer', text: 'Indian culture places deep value on relational support — we are used to leaning on family and community. When that system fails (distance, judgment, stigma), people do not want a chatbot — they want the same warm, human quality that they would get from a trusted friend. LeanOn\'s peer listeners provide exactly that: empathetic, real, non-judgmental human presence.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn an AI or are the listeners real people?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every listener on LeanOn is a real, verified human being. No bots, no AI-generated responses, no scripts. Listeners apply to join, go through background verification, and complete active listening training before their first session. When you talk to someone on LeanOn, there is a real person on the other side of the conversation.' },
    },
    {
      '@type': 'Question',
      name: 'Which is better for loneliness — ChatGPT or a peer listener?',
      acceptedAnswer: { '@type': 'Answer', text: 'For loneliness specifically, a peer listener is better — by a significant margin. Loneliness is the feeling of not being truly known or seen by another human. An AI, by definition, cannot see you — it can only respond. Peer listeners on LeanOn have personally experienced loneliness and know what it takes to make someone feel genuinely less alone. That is the core of what they offer.' },
    },
    {
      '@type': 'Question',
      name: 'How do I switch from AI chatbots to talking to a real human?',
      acceptedAnswer: { '@type': 'Answer', text: 'It is easy. Visit LeanOn, browse listener profiles, and book a session. Many people describe their first LeanOn session as the first time they felt actually heard in months. You can start with a free 5-minute trial — no commitment, no payment required.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'AI Chatbot Alternative', item: 'https://www.leanon.app/ai-chatbot-alternative' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;--red:#E53E3E;}
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
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:20px;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .comparison{border-collapse:collapse;width:100%;margin-top:8px;}
  .comparison th{text-align:left;font-size:13px;font-weight:800;padding:10px 14px;background:var(--light);color:var(--navy);}
  .comparison th:first-child{border-radius:12px 0 0 0;}
  .comparison th:last-child{border-radius:0 12px 0 0;}
  .comparison td{padding:12px 14px;font-size:14px;font-weight:600;border-top:1px solid var(--border);vertical-align:top;}
  .comparison tr:last-child td:first-child{border-radius:0 0 0 12px;}
  .comparison tr:last-child td:last-child{border-radius:0 0 12px 0;}
  .yes{color:#16a34a;font-weight:800;}
  .no{color:var(--red);font-weight:800;}
  .testimonials{display:grid;gap:16px;}
  .testimonial{background:var(--light);border-radius:16px;padding:20px 24px;border-left:4px solid var(--teal);}
  .testimonial p{font-size:15px;color:#2D5568;line-height:1.75;font-weight:500;font-style:italic;margin-bottom:10px;}
  .testimonial .attr{font-size:13px;font-weight:800;color:var(--teal);}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
`

export default function AIChatbotAlternativePage() {
  const faqs = faqSchema.mainEntity
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
          <span style={{color:'var(--navy)'}}>AI Chatbot Alternative</span>
        </nav>

        <div className="hero">
          <p className="badge">Real People. Real Empathy.</p>
          <h1>When AI Is Not Enough — Talk to a <em>Real Human</em></h1>
          <p className="lead">AI chatbots are impressive. But they have never felt lonely, heartbroken, or anxious. LeanOn peer listeners have — and that changes everything about being heard.</p>
          <a href="/browse" className="cta-hero">Find a real listener →</a>
        </div>

        {/* Comparison table */}
        <div className="section">
          <h2>AI Chatbot vs LeanOn Peer Listener</h2>
          <div style={{overflowX:'auto'}}>
            <table className="comparison">
              <thead>
                <tr>
                  <th></th>
                  <th>AI Chatbot (ChatGPT etc.)</th>
                  <th>LeanOn Peer Listener</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>Remembers your story</td>
                  <td><span className="no">❌</span> Resets each session</td>
                  <td><span className="yes">✅</span> Holds your context</td>
                </tr>
                <tr>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>Has lived experience</td>
                  <td><span className="no">❌</span> Trained on text data</td>
                  <td><span className="yes">✅</span> Personally been through it</td>
                </tr>
                <tr>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>Feels your emotion</td>
                  <td><span className="no">❌</span> Predicts responses</td>
                  <td><span className="yes">✅</span> Actually present with you</td>
                </tr>
                <tr>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>Confidential</td>
                  <td><span className="no">❌</span> May train future models</td>
                  <td><span className="yes">✅</span> Private, no data sharing</td>
                </tr>
                <tr>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>Available in India 24/7</td>
                  <td><span className="yes">✅</span> Yes</td>
                  <td><span className="yes">✅</span> Yes, including 2 AM</td>
                </tr>
                <tr>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>Free to start</td>
                  <td><span className="yes">✅</span> Free tier</td>
                  <td><span className="yes">✅</span> Free 5-min trial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why switch */}
        <div className="section">
          <h2>Why People Are Switching From AI to LeanOn</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>&ldquo;I talked to ChatGPT every night for a month about my breakup. It was helpful at first. Then I realised I was just getting well-worded advice from something that had never had its heart broken. LeanOn was different.&rdquo;</p>
              <p className="attr">— Priya, Bengaluru</p>
            </div>
            <div className="testimonial">
              <p>&ldquo;I needed someone who actually knew what it felt like to be lonely in a new city. No AI can give you that. My listener had moved from Kerala to Pune alone at 24 — exactly my situation.&rdquo;</p>
              <p className="attr">— Rahul, Pune</p>
            </div>
            <div className="testimonial">
              <p>&ldquo;The listener just got it. Immediately. Without me having to explain the context ten times. That has never happened with any AI.&rdquo;</p>
              <p className="attr">— Ananya, Hyderabad</p>
            </div>
          </div>
        </div>

        {/* Why AI falls short */}
        <div className="section">
          <h2>The One Thing AI Cannot Replicate</h2>
          <p>Presence. Not intelligence — AI is impressively intelligent. Not vocabulary — AI&apos;s language is often beautiful. The missing ingredient is presence: the felt sense of being with a real person who is actually affected by what you say, who carries your story forward, who has an inside experience of what you are going through.</p>
          <p>When a peer listener says &ldquo;I know that feeling,&rdquo; they mean it in the way only a person can mean it — from their own experience of that same ache. That is not something any language model can produce, regardless of how large it gets.</p>
          <p>For many people — especially those dealing with loneliness, grief, or prolonged anxiety — this distinction is not abstract. It is the difference between a conversation that helps and one that leaves you feeling more alone than before.</p>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Try a real conversation</h2>
          <p>Your first 5 minutes are free. No appointment, no signup friction. Just a real person ready to listen — right now.</p>
          <a href="/browse" className="btn-cta">Browse listeners →</a>
        </div>

        <div className="section">
          <h2>Read More</h2>
          <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
            <a href="/chat-with-real-person" style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:16,padding:'14px 16px',fontSize:14,fontWeight:700,color:'var(--navy)',display:'block'}}>Chat with a real person →</a>
            <a href="/support/loneliness" style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:16,padding:'14px 16px',fontSize:14,fontWeight:700,color:'var(--navy)',display:'block'}}>Loneliness support →</a>
            <a href="/blog/chatgpt-vs-human-listener" style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:16,padding:'14px 16px',fontSize:14,fontWeight:700,color:'var(--navy)',display:'block'}}>ChatGPT vs human listener →</a>
            <a href="/support/anxiety" style={{background:'var(--light)',border:'1.5px solid var(--border)',borderRadius:16,padding:'14px 16px',fontSize:14,fontWeight:700,color:'var(--navy)',display:'block'}}>Anxiety support →</a>
          </div>
        </div>
      </div>
    </>
  )
}
