import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "My Partner Doesn't Understand Me — Talk to Someone Who Will | LeanOn",
  description: "Your partner doesn't understand. You've explained it a hundred times. Talk to a real peer listener who will actually hear you — anonymous, ₹160.",
  keywords: [
    'partner not understanding me india',
    'husband not understanding india',
    'wife not understanding india',
    'partner doesnt get me india',
    'feel misunderstood in relationship india',
    'spouse doesnt listen india',
    'partner not listening india',
    'feel invisible in relationship india',
  ],
  alternates: { canonical: 'https://www.leanon.app/partner-not-understanding-india', languages: { 'en-IN': 'https://www.leanon.app/partner-not-understanding-india' } },
  openGraph: {
    title: "My Partner Doesn't Understand Me — Talk to Someone Who Will | LeanOn",
    description: "Your partner doesn't understand. You've explained it a hundred times. Talk to a real peer listener who will actually hear you — anonymous, ₹160.",
    url: 'https://www.leanon.app/partner-not-understanding-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Partner Not Understanding' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a listener help me figure out how to communicate better?',
      acceptedAnswer: { '@type': 'Answer', text: 'A peer listener is not a communication coach, and they will not give you a script for the next conversation. But many people find that after a vent session, they can articulate what they actually need far more clearly than before. The act of saying it to a neutral person &mdash; without managing the other person\'s reaction &mdash; often reveals what you are really trying to communicate.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not need to give your real name, phone number, or any identifying details. The listener has no connection to your partner or to anyone in your life. You can say exactly what has been happening without worrying about it reaching anyone.' },
    },
    {
      '@type': 'Question',
      name: 'What if my partner finds out I talked to someone about our relationship?',
      acceptedAnswer: { '@type': 'Answer', text: 'The session is entirely anonymous and confidential. There is no record linking you to the conversation, no name, no identifying information. Your partner has no way of knowing. And it is worth noting: talking to a neutral person about how you feel in a relationship is a healthy thing to do. You are not betraying anyone by processing your own experience.' },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a therapist?',
      acceptedAnswer: { '@type': 'Answer', text: 'A therapist is a licensed professional who treats mental health conditions over structured sessions. A peer listener is someone who has lived experience, trained to listen actively and support without advising. You do not need a diagnosis or a long-term treatment plan to use LeanOn. If you have been carrying the feeling of not being understood for a week and you need to say it out loud, that is what a peer listener is for.' },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about this without it being about saving the relationship?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You do not have to frame this as a relationship crisis. You can simply say "my partner does not understand me and I need to say what that feels like." The listener will receive that. They are not there to save or end your relationship. They are there to hear you.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Partner Not Understanding India', item: 'https://www.leanon.app/partner-not-understanding-india' },
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
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
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

export default function PartnerNotUnderstandingIndiaPage() {
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
          <a href="/">Home</a><span>&#x203A;</span>
          <span style={{color:'var(--navy)'}}>Partner Not Understanding India</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          &#x1F6A8; In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free &middot; 24/7 &middot; Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Actually Heard &middot; Anonymous &middot; No Judgment &middot; From &#x20b9;160</p>
          <h1>You&apos;ve explained it again. <em>They still don&apos;t get it.</em></h1>
          <p className="lead">It&apos;s not that they&apos;re bad. They just don&apos;t understand. And the more you explain, the worse it gets. You need to say it to someone outside the loop &mdash; someone who has no reason to be defensive about it.</p>
          <a href="/browse" className="cta-hero">Be actually heard &#x2192;</a>
        </div>

        <div className="section">
          <h2>When &ldquo;You Don&apos;t Understand Me&rdquo; Becomes the Core of Every Argument</h2>
          <p>There is a particular frustration that comes from feeling seen by a complete stranger and invisible to the person you live with. The stranger gets it in five minutes. Your partner has known you for years and still looks at you like you are speaking a different language.</p>
          <p>This is not rare. It is one of the most common things that brings people to LeanOn. And it is not a sign that the relationship is doomed &mdash; but it is a sign that the feeling of not being understood has built up to the point where it needs somewhere to go. It needs to be said to someone who will receive it cleanly, without getting defensive, without making it about them.</p>
        </div>

        <div className="section">
          <h2>What &ldquo;Not Understanding&rdquo; Looks Like</h2>
          <p>It rarely looks like someone saying &ldquo;I don&apos;t understand you.&rdquo; It looks like this:</p>
          <ul>
            <li>They dismiss what you are feeling as an overreaction.</li>
            <li>They jump to fixing the problem before you have finished describing it.</li>
            <li>They change the subject to their own version of a similar experience.</li>
            <li>They take it personally &mdash; your feeling becomes about what it implies about them.</li>
            <li>They tell you how you should feel instead of hearing how you do feel.</li>
          </ul>
          <p>These responses are not malicious. But they are not understanding. And when they are the consistent pattern, the accumulated feeling of not being heard becomes its own weight to carry.</p>
        </div>

        <div className="section">
          <h2>Why Talking to a Neutral Person Helps</h2>
          <p>When you try to explain something to your partner and they become defensive, you end up managing their reaction instead of expressing your experience. You edit what you say, soften it, walk back parts of it to keep the peace. By the end, what actually came out is not what you were trying to say.</p>
          <p>With a peer listener, that dynamic does not exist. They have no reaction to manage. They will not get defensive, because none of what you say is about them. You can say the full version &mdash; unedited, unsoftened &mdash; and have it actually received.</p>
          <p>Many people find that just saying it to a neutral person reveals what they actually need. The act of articulating it clearly, without managing someone else&apos;s reaction, often produces the clarity that no amount of trying to explain to their partner has managed.</p>
        </div>

        <div className="section">
          <h2>Who Uses LeanOn for This</h2>
          <p>People who had a conversation that went nowhere the night before and are processing it during their morning commute. People who are sitting at their desk after a lunch call with their partner that ended in frustration. People who are walking back from the school drop-off run and still replaying the conversation from before they left.</p>
          <p>The 15-minute session is specifically for this. You do not need a long appointment. You need fifteen minutes, somewhere you can speak freely, and a listener who will actually hear it. That is the entire product.</p>
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
          <h2>Be actually heard.</h2>
          <p>Say the full version &mdash; unedited, unsoftened &mdash; to someone who has no reason to get defensive about it. Anonymous. 15 minutes from &#x20b9;160.</p>
          <a href="/browse" className="btn-cta">Be actually heard &#x2192;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/vent-about-relationship-india">Vent about relationship &#x2192;</a>
            <a href="/relationship-frustration-india">Relationship frustration &#x2192;</a>
            <a href="/just-had-a-fight">Just had a fight &#x2192;</a>
            <a href="/need-to-vent-right-now">Vent right now &#x2192;</a>
            <a href="/relationship-advice-vs-venting-india">Just vent, no advice &#x2192;</a>
            <a href="/browse">Browse listeners &#x2192;</a>
          </div>
        </div>
      </div>
    </>
  )
}
