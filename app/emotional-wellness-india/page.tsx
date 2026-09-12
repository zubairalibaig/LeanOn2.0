import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Wellness India — Build the Habit of Being Heard | LeanOn',
  description: 'Emotional wellness isn\'t a goal. It\'s a practice. Start with being heard. Real peer conversations from ₹160.',
  keywords: ['emotional wellness india', 'emotional intelligence india', 'emotional health india', 'mindfulness support india', 'self-help india', 'emotional wellbeing india', 'emotional fitness india'],
  alternates: { canonical: 'https://www.leanon.app/emotional-wellness-india', languages: { 'en-IN': 'https://www.leanon.app/emotional-wellness-india' } },
  openGraph: {
    title: 'Emotional Wellness India — Build the Habit of Being Heard | LeanOn',
    description: 'Emotional wellness isn\'t a goal. It\'s a practice. Start with being heard. Real peer conversations from ₹160.',
    url: 'https://www.leanon.app/emotional-wellness-india',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is emotional wellness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional wellness is not a state where nothing is wrong. It is the ongoing capacity to recognise, process, and manage your emotional experiences — to feel things without being overwhelmed by them, and to recover from difficulty without being defined by it. It is built through practice, not achieved as a destination.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do peer conversations build emotional intelligence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional intelligence — the skill of naming what you feel, understanding why, and communicating it — is built through practice, and conversation is one of the most effective practice environments. When you articulate what you are feeling to someone who reflects it back without judgment, you build the vocabulary and the habit of emotional self-awareness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is peer support — real human conversations, not clinical therapy. It is suitable for building emotional wellness habits and processing day-to-day emotional weight. For clinical mental health conditions, please see a licensed professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn for regular check-ins, not just crises?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and this is one of the most valuable ways to use it. Regular emotional processing is more effective than crisis-only intervention. Many people use LeanOn for weekly or monthly check-ins to stay emotionally current rather than waiting until things become overwhelming.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is emotional health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional health is your relationship with your own emotional experience — the ability to feel, process, and act from a place of awareness rather than reaction. It is not about being happy; it is about being present with what you feel and having the capacity to work with it constructively.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Emotional Wellness India', item: 'https://www.leanon.app/emotional-wellness-india' },
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

export default function EmotionalWellnessIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Emotional Wellness India</span>
        </nav>

        <div className="hero">
          <p className="tag">Emotional Wellness · India · From ₹160</p>
          <h1>Emotional wellness doesn&apos;t mean having it all together. <em>It means having someone to process with.</em></h1>
          <p className="lead">Not a destination. Not a state of permanent calm. Emotional wellness is the ongoing practice of staying connected to what you feel — and having somewhere to bring it.</p>
        </div>

        <div className="section">
          <h2>What Emotional Wellness Actually Looks Like</h2>
          <p>Emotional wellness is not the absence of difficult emotions. It is the capacity to feel them, name them, and process them without being overwhelmed or shut down by them.</p>
          <p>In practice, it looks like:</p>
          <ul>
            <li>Noticing when something is affecting you, rather than numbing or distracting</li>
            <li>Being able to say what you actually feel — to yourself and, when it matters, to others</li>
            <li>Processing as you go rather than accumulating until things explode</li>
            <li>Having a place to bring the hard things before they become crises</li>
          </ul>
          <p>Regular peer conversations on LeanOn support all of this — not just in crisis moments, but as an ongoing practice.</p>
        </div>

        <div className="section">
          <h2>Emotional Intelligence: The Practice</h2>
          <p>Emotional intelligence — the skill of naming what you feel, understanding why, and communicating it — is built through practice, not acquired through reading. Conversation is one of the most effective practice environments: when you articulate what you are feeling to someone who reflects it back without judgment, you build the vocabulary and the habit.</p>
          <p>LeanOn peer sessions are not just support. They are practice. Every conversation where you say something true and feel heard is a small act of emotional fitness.</p>
        </div>

        <div className="section">
          <h2>LeanOn as a Wellness Practice</h2>
          <p>Most people use LeanOn in moments of acute stress. But the most effective use is regular — weekly or monthly check-ins that keep you emotionally current rather than waiting until you are overwhelmed.</p>
          <p>Think of it like exercise: occasional intense sessions are less effective than regular moderate ones. The same is true of emotional processing.</p>
        </div>

        <div className="cta-card">
          <h2>Start the Practice</h2>
          <p>Real peer conversations from ₹160. Available now, no appointment, anonymous.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/daily-check-in"><button className="btn-secondary">Daily check-in →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is emotional wellness?</div>
            <div className="faq-a">Emotional wellness is the ongoing capacity to recognise, process, and manage your emotional experiences — to feel things without being overwhelmed and to recover from difficulty. It is built through practice, not achieved as a destination.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do peer conversations build emotional intelligence?</div>
            <div className="faq-a">Emotional intelligence is built through practice. When you articulate what you are feeling to someone who reflects it back without judgment, you build the vocabulary and the habit of emotional self-awareness.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is this therapy?</div>
            <div className="faq-a">No. LeanOn is peer support — real human conversations, not clinical therapy. Suitable for building emotional wellness habits. For clinical conditions, please see a licensed professional.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I use LeanOn for regular check-ins, not just crises?</div>
            <div className="faq-a">Yes — and this is one of the most valuable ways to use it. Regular emotional processing is more effective than crisis-only intervention. Many people use LeanOn for weekly or monthly check-ins.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is emotional health?</div>
            <div className="faq-a">Emotional health is your relationship with your own emotional experience — the ability to feel, process, and act from a place of awareness rather than reaction. It is not about being happy; it is about being present with what you feel.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/peer-support" className="related-link">What Is Peer Support</a>
            <a href="/daily-check-in" className="related-link">Daily Check-In</a>
            <a href="/empathy-friend-india" className="related-link">Empathy Friend</a>
            <a href="/online-emotional-support-india" className="related-link">Online Emotional Support</a>
            <a href="/stress-management-india" className="related-link">Stress Management</a>
          </div>
        </div>
      </div>
    </>
  )
}
