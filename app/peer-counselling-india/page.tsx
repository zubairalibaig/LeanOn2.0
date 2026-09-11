import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Counselling India — Affordable Emotional Support | LeanOn',
  description: 'Peer counselling in India from people with lived experience. More affordable than therapy, more human than AI. First 5 minutes free on LeanOn.',
  keywords: ['peer counselling India', 'peer counselling online India', 'peer counselling app India', 'peer counsellor India', 'peer counselling cost India', 'online peer counselling'],
  alternates: { canonical: 'https://www.leanon.app/peer-counselling-india', languages: { 'en-IN': 'https://www.leanon.app/peer-counselling-india' } },
  openGraph: {
    title: 'Peer Counselling India — Affordable Emotional Support | LeanOn',
    description: 'Peer counselling in India from people with lived experience. More affordable than therapy, more human than AI. First 5 minutes free on LeanOn.',
    url: 'https://www.leanon.app/peer-counselling-india',
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
      name: 'What is peer counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer counselling is emotional support provided by someone with lived experience — a person who has personally been through something similar to what you are facing. Unlike licensed counselling or therapy, peer counselling does not involve diagnosis, prescription, or clinical treatment. It is about being genuinely heard and supported by someone who understands your experience from the inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer counselling the same as therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A licensed therapist or counsellor in India has a formal degree in psychology or counselling and is trained to diagnose and treat mental health conditions. A peer counsellor has lived experience and training in active listening and supportive conversation, but is not a licensed mental health professional. Peer counselling is for everyday emotional support — loneliness, burnout, relationship stress, family pressure — not for clinical treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does peer counselling cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Licensed therapy in India costs ₹1,500–₹5,000 per session. Online therapy platforms charge ₹800–₹2,000 per session. Peer counselling on LeanOn costs approximately ₹160 per session, and the first 5 minutes are free. There are no subscription fees or automatic renewals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer counselling confidential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. On LeanOn, all peer counselling sessions are fully confidential. Listeners sign confidentiality agreements and what you share does not leave the session. You use only a first name — no last name, no photo, no social account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does peer counselling work for anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer counselling is not a clinical treatment for anxiety disorders. However, the feeling of being heard by someone who has personally experienced anxiety — and who does not minimise it or rush to fix it — can provide significant relief. For diagnosed anxiety conditions, peer counselling works best alongside professional care. For everyday anxious thinking, family pressure, and the general weight of a difficult period, peer counselling is often exactly the right support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find peer counselling in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn (leanon.app) offers peer counselling from trained peer listeners available 24/7 across India. Sessions start at ₹160, are fully anonymous, and available without an appointment. The first 5 minutes of every session are free.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Peer Counselling India', item: 'https://www.leanon.app/peer-counselling-india' },
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
  .crisis{display:block;background:#EBF5FB;border-left:4px solid #1A8FA0;border-radius:0 12px 12px 0;padding:14px 18px;margin-bottom:28px;font-size:14px;color:#0F4867;font-weight:600;line-height:1.65;}
  .crisis a{color:var(--teal);font-weight:800;}
  .cost-table{width:100%;border-collapse:collapse;margin-top:8px;}
  .cost-table th{font-size:13px;font-weight:800;color:var(--teal);text-align:left;padding:10px 12px;background:var(--light);}
  .cost-table td{font-size:14px;color:#3A6070;padding:10px 12px;border-bottom:1px solid var(--border);line-height:1.6;}
  .cost-table tr:last-child td{border-bottom:none;}
  .cost-table .col-label{font-weight:800;color:var(--navy);}
  .highlight-row td{background:rgba(26,143,160,0.05);}
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
  @media(max-width:480px){.cost-table{font-size:13px;}.cost-table td,.cost-table th{padding:8px 8px;}}
`

export default function PeerCounsellingIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Peer Counselling India</span>
        </nav>

        <div className="crisis">
          🆘 In crisis? Call <a href="tel:08046110007">NIMHANS 080-46110007</a> or <a href="tel:14416">Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Counselling · India · 24/7</p>
          <h1>Peer counselling. From someone <em>who has been there.</em></h1>
          <p className="lead">Not a licensed therapist. Not an AI. A real person who has personally lived through something like what you are carrying — trained to listen, available now, and affordable. Peer counselling on LeanOn starts at ₹160/session, with the first 5 minutes free.</p>
        </div>

        {/* What is peer counselling */}
        <div className="section">
          <h2>What Is Peer Counselling?</h2>
          <p>Peer counselling is emotional support from someone with lived experience. A peer counsellor is not a licensed psychologist or therapist — they have not done a clinical degree, and they do not diagnose conditions or provide treatment. What they have is something different: they have personally been through a version of what you are facing, and they have trained specifically in active listening, holding space, and supportive conversation.</p>
          <p>The word &quot;counselling&quot; in peer counselling means something different from therapy. It is closer in spirit to &quot;someone you can talk to who has been there&quot; than to the clinical process of a professional consultation.</p>

          <h3>Peer Counsellors vs Licensed Therapists</h3>
          <p>A licensed therapist or counsellor in India has a formal degree — typically a Masters in Clinical Psychology, Counselling Psychology, or a related field. They are qualified to diagnose mental health conditions, design treatment plans, and deliver structured psychotherapy. A peer counsellor is trained in supportive conversation and active listening, but is not licensed to diagnose or treat.</p>
          <p>This distinction matters — not because peer counselling is lesser, but because the two are good at different things. For emotional overwhelm, the weight of everyday stress, relationship difficulty, family pressure, or the feeling of needing to talk to someone who gets it: peer counselling is often exactly the right tool. For a diagnosed mental health condition, clinical therapy is what is needed.</p>
        </div>

        {/* Cost comparison */}
        <div className="section">
          <h2>What Does Counselling Cost in India?</h2>
          <p>Here is an honest comparison of what different types of support actually cost:</p>
          <div style={{overflowX:'auto'}}>
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Type of support</th>
                  <th>Who provides it</th>
                  <th>Cost per session</th>
                  <th>Appointment needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-label">Private therapist (India)</td>
                  <td>Licensed psychologist/counsellor</td>
                  <td>₹1,500–₹5,000</td>
                  <td>Yes (often 1–2 week wait)</td>
                </tr>
                <tr>
                  <td className="col-label">Online therapy platforms</td>
                  <td>Licensed counsellors via app</td>
                  <td>₹800–₹2,000</td>
                  <td>Yes</td>
                </tr>
                <tr className="highlight-row">
                  <td className="col-label">LeanOn peer counselling</td>
                  <td>Trained peer listener with lived experience</td>
                  <td>₹160/session (first 5 min free)</td>
                  <td>No — available now</td>
                </tr>
                <tr>
                  <td className="col-label">Crisis helpline</td>
                  <td>Trained volunteers</td>
                  <td>Free</td>
                  <td>No (crisis situations only)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop:14,fontSize:13,color:'var(--gray)'}}>Prices are approximate. For genuine mental health crises, please call NIMHANS 080-46110007 or Tele-MANAS 14416 — free, 24/7, government of India.</p>
        </div>

        {/* Who it's for */}
        <div className="section">
          <h2>Who Is Peer Counselling For?</h2>
          <p>Peer counselling on LeanOn is used by people who need to talk to someone who understands — not necessarily to solve anything, but to be genuinely heard. Common situations include:</p>
          <ul>
            <li><strong>Loneliness</strong> — in a new city, inside a relationship that has grown distant, or the particular loneliness of carrying things you cannot say to anyone in your life</li>
            <li><strong>Relationship stress</strong> — a marriage under strain, a difficult breakup, a friendship that has gone cold</li>
            <li><strong>Family pressure</strong> — career expectations, marriage pressure, joint family dynamics, being the one who must handle everything</li>
            <li><strong>Work burnout</strong> — the slow depletion of a job that used to feel meaningful, or the relentless pressure of one that does not stop</li>
            <li><strong>Grief</strong> — loss that does not fit neatly into a few days of leave and a return to normal</li>
            <li><strong>Student stress</strong> — entrance exam anxiety, career uncertainty, the pressure of parental expectations</li>
            <li><strong>Anxiety and low mood</strong> — not necessarily a diagnosed condition, but the ongoing weight of hard days and a mind that does not rest</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Talk to a Peer Counsellor Today</h2>
          <p>Browse peer listeners by area of experience. First 5 minutes free. Anonymous, no appointment, available 24/7 across India.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse peer counsellors →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is peer counselling?</div>
            <div className="faq-a">Peer counselling is emotional support provided by someone with lived experience — a person who has personally been through something similar to what you are facing. Unlike licensed counselling or therapy, peer counselling does not involve diagnosis, prescription, or clinical treatment. It is about being genuinely heard and supported by someone who understands your experience from the inside.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is peer counselling the same as therapy?</div>
            <div className="faq-a">No. A licensed therapist or counsellor has a formal degree in psychology and is trained to diagnose and treat mental health conditions. A peer counsellor has lived experience and training in active listening, but is not a licensed mental health professional. Peer counselling is for everyday emotional support — loneliness, burnout, relationship stress, family pressure — not for clinical treatment.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does peer counselling cost in India?</div>
            <div className="faq-a">Licensed therapy in India costs ₹1,500–₹5,000 per session. Online therapy platforms charge ₹800–₹2,000. Peer counselling on LeanOn costs approximately ₹160 per session, and the first 5 minutes are free. No subscription fees, no automatic renewals.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is peer counselling confidential?</div>
            <div className="faq-a">Yes. On LeanOn, all sessions are fully confidential. Listeners sign confidentiality agreements and what you share does not leave the session. You use only a first name — no last name, no photo required.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Does peer counselling work for anxiety?</div>
            <div className="faq-a">Peer counselling is not a clinical treatment for anxiety disorders. However, being heard by someone who has personally experienced anxiety can provide significant relief. For diagnosed anxiety conditions, peer counselling works best alongside professional care. For everyday anxious thinking and the general weight of a difficult period, peer counselling is often exactly the right support.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Where can I find peer counselling in India?</div>
            <div className="faq-a">LeanOn (leanon.app) offers peer counselling from trained peer listeners available 24/7 across India. Sessions start at ₹160, are fully anonymous, and available without an appointment. The first 5 minutes of every session are free.</div>
          </div>
        </div>

        {/* Cross-links */}
        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/peer-support" className="related-link">Peer support India</a>
            <a href="/peer-support-online-india" className="related-link">Peer support online</a>
            <a href="/alternatives-to-therapy-india" className="related-link">Therapy alternatives</a>
            <a href="/cant-afford-therapy-india" className="related-link">Can&apos;t afford therapy</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/browse" className="related-link">Browse all listeners</a>
          </div>
        </div>
      </div>
    </>
  )
}
