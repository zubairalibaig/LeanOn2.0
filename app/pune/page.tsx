import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Pune — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Pune, India. Free first session. Talk anonymously in Marathi, Hindi, or English about stress, loneliness, and student life on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/pune', languages: { 'en-IN': 'https://www.leanon.app/pune' } },
  keywords: 'peer support Pune, emotional support Pune, loneliness Pune, student stress Pune, talk to someone Pune, Marathi emotional support, leanon Pune',
  openGraph: {
    title: 'Emotional Support in Pune — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Pune, India. Free first session. Talk anonymously on LeanOn.',
    url: 'https://www.leanon.app/pune',
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
      name: 'Why is loneliness so common among students and young professionals in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pune hosts one of India\'s largest student and young-migrant populations. Hundreds of thousands of people move here for college or a first job, leaving their entire support system behind. Hostels, PGs, and flatshares are full of people — yet genuinely close friendships take years to build. The result is a city full of young people who are surrounded by others and profoundly alone. LeanOn gives them someone to talk to honestly, any time of day or night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a listener in Marathi or Hindi on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has peer listeners who speak Marathi, Hindi, and English. You can filter by language on the browse page and have your session in whichever language feels most natural.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn useful for IT professionals in Hinjewadi and Magarpatta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Long commutes, project deadlines, layoff anxiety, and living far from family are everyday realities for Pune\'s IT workforce. Many of LeanOn\'s listeners have lived through exactly this and offer judgment-free, completely private conversations from ₹8 per minute — with up to 5 free 5-minute trial sessions to start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely. Only your first name is ever shown to a listener — no phone number, no photo, no surname. Nobody in your college, office, or family can discover that you use LeanOn.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Pune', item: 'https://www.leanon.app/pune' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/pune',
  areaServed: { '@type': 'City', name: 'Pune', addressCountry: 'IN' },
  serviceType: 'Peer Emotional Support',
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
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:var(--navy);}
`

export default function PunePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Pune</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Pune</p>
          <h1>Peer Support in Pune — For a City of <em>Students and New Starts</em></h1>
          <p className="lead">Pune is where India comes to begin: first college, first job, first time living away from home. It is also where loneliness quietly peaks — surrounded by lakhs of people your age, yet with no one who truly knows you. LeanOn connects you with peer listeners who have lived exactly that.</p>
        </div>

        <div className="section">
          <h2>Pune&apos;s Emotional Landscape</h2>
          <p>Pune wears many identities — Oxford of the East, IT hub, cultural capital of Maharashtra — and each one carries its own emotional weight.</p>

          <h3>The Student City&apos;s Hidden Loneliness</h3>
          <p>Hundreds of thousands of students move to Pune every year for engineering, medicine, design, and management. They leave behind home food, mother tongues, and the people who knew them their whole lives. Hostel rooms and PGs are crowded, but real connection takes years. Exam pressure, placement anxiety, and the fear of disappointing parents back home pile on top. Many students describe 2 AM as the loneliest hour — which is exactly when LeanOn listeners are still available.</p>

          <h3>First Jobs, First Burnout</h3>
          <p>Pune&apos;s IT belt — Hinjewadi, Magarpatta, Kharadi — runs on young professionals in their first decade of work. Long commutes, project pressure, appraisal cycles, layoff news, and the strange isolation of moving to a new city for a job. Many earn well, send money home, and still feel empty in ways they can&apos;t explain to their families.</p>

          <h3>Between Two Cultures</h3>
          <p>Pune&apos;s deep Marathi cultural roots coexist with a massive migrant population. For locals, family expectations around career and marriage remain strong. For migrants, there is the constant subtle effort of belonging somewhere new. Both kinds of pressure deserve a listening ear — in Marathi, Hindi, or English.</p>
        </div>

        <div className="section">
          <h2>Who Uses LeanOn in Pune</h2>
          <h3>Students Before Exams and Placements</h3>
          <p>The pressure of competitive exams and placement season is intense and isolating. Talking to a listener who has been through it — and come out the other side — brings perspective no coaching class provides.</p>

          <h3>Young Professionals Far From Home</h3>
          <p>When the workday ends and the flat is quiet, the distance from home feels longest. LeanOn listeners are available for a 15-minute conversation whenever the silence gets loud.</p>

          <h3>Anyone Navigating a New Beginning</h3>
          <p>New city, new job, new relationship, new breakup. Pune is a city of transitions, and transitions are exactly when having someone to lean on matters most.</p>
        </div>

        <div className="cta-card">
          <h2>Ready to Talk to Someone Who Gets Pune?</h2>
          <p>Browse peer listeners who understand student pressure, first-job stress, and the loneliness of starting over. Sessions in Marathi, Hindi, or English. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why is loneliness so common among students and young professionals in Pune?</div>
            <div className="faq-a">Pune hosts one of India&apos;s largest student and young-migrant populations. People move here leaving their entire support system behind. Hostels and PGs are full of people — yet genuinely close friendships take years to build. The result is a city full of young people who are surrounded by others and profoundly alone.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I talk to a listener in Marathi or Hindi on LeanOn?</div>
            <div className="faq-a">Yes. LeanOn has peer listeners who speak Marathi, Hindi, and English. Filter by language on the browse page and have your session in whichever language feels most natural.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn useful for IT professionals in Hinjewadi and Magarpatta?</div>
            <div className="faq-a">Yes. Long commutes, project deadlines, layoff anxiety, and living far from family are everyday realities for Pune&apos;s IT workforce. Many LeanOn listeners have lived exactly this. Sessions are private, judgment-free, and start with up to 5 free 5-minute trials.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn anonymous?</div>
            <div className="faq-a">Yes, completely. Only your first name is shown to a listener — no phone number, photo, or surname. Nobody in your college, office, or family can discover that you use LeanOn.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/mumbai" className="related-link">Peer Support Mumbai</a>
            <a href="/bengaluru" className="related-link">Peer Support Bengaluru</a>
          </div>
        </div>

        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>NIMHANS:</strong> <a href="tel:08046110007">080-46110007</a> &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> <a href="tel:14416">14416</a> (free · 24/7)</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals. For clinical mental health support, please consult a qualified mental health professional.</p>
        </div>
      </div>
    </>
  )
}
