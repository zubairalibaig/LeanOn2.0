import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Student Stress Support India | LeanOn Peer Listeners',
  description: 'Student stress getting overwhelming? Talk to a peer listener anonymously on LeanOn. Free for students. Available 24/7 across India.',
  alternates: { canonical: 'https://www.leanon.app/support/student-stress', languages: { 'en-IN': 'https://www.leanon.app/support/student-stress' } },
  openGraph: {
    title: 'Student Stress Support India | LeanOn Peer Listeners',
    description: 'Student stress getting overwhelming? Talk to a peer listener anonymously on LeanOn. Free for students. Available 24/7 across India.',
    url: 'https://www.leanon.app/support/student-stress',
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
      name: 'How bad is exam stress among Indian students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extremely serious. India has some of the most competitive academic examinations in the world — JEE, NEET, UPSC, CAT — with millions of students competing for limited seats. Studies have found very high rates of anxiety, depression, and academic stress among Indian students, particularly during preparation periods. The combination of extremely high stakes, family expectations, and limited support systems makes this a significant mental health crisis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is hostel homesickness and how do I deal with it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hostel homesickness is the distress many Indian students experience when they leave home for the first time to attend college or coaching institutes — often at 16-18 years old. It involves missing family, familiar food, routines, and the safety of home while navigating an unfamiliar and often competitive environment. It is extremely normal and usually improves as you build new connections and routines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to feel like I do not fit in at IIT or a top college?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is extremely common. Many students who worked their entire school career toward a dream institution arrive and feel overwhelmed, outpaced, or like they do not belong — often called "imposter syndrome at college." This is a near-universal experience, particularly in the first year, and does not reflect your actual capability or worth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I do if I am being bullied at college?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Campus bullying — including ragging, which remains a serious problem in many Indian institutions despite regulations — can cause significant psychological harm. You should report it to the institution\'s anti-ragging committee and, if needed, the UGC Toll-Free Anti-Ragging Helpline at 1800-180-5522. You should also talk to someone you trust. LeanOn peer listeners who have navigated campus bullying can offer support while you navigate the situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle career anxiety as a student in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Career anxiety as a student in India often involves multiple layers: uncertainty about placement, pressure to choose the "right" stream, family expectations about salary and stability, and the fear of wasting years of hard work if the career does not pan out. Talking to someone who has navigated these decisions — including with regret and course corrections — can provide perspective that career counsellors often cannot.',
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
    { '@type': 'ListItem', position: 3, name: 'Student Stress', item: 'https://www.leanon.app/support/student-stress' },
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
  .notice{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:16px;padding:16px 20px;margin-bottom:24px;font-size:14px;color:#7A5020;font-weight:600;line-height:1.6;}
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

export default function StudentStressSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Student Stress</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Student Stress</p>
          <h1>Your Marks Do Not Define <em>Your Worth</em></h1>
          <p className="lead">Indian students face some of the world&apos;s most intense academic pressure. From JEE coaching to NEET failures to hostel homesickness and campus bullying — LeanOn connects you with peer listeners who have navigated the Indian education system and understand what you are carrying.</p>
        </div>

        <div className="notice">
          If you are in crisis or having thoughts of self-harm, please call <a href="tel:08046110007" style={{color:'#7A5020',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#7A5020',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India). LeanOn is peer support and cannot replace crisis intervention.
        </div>

        <div className="section">
          <h2>The Reality of Student Life in India</h2>
          <p>India&apos;s education system is one of the most demanding in the world. The stakes attached to competitive examinations, the family expectations that surround academic success, and the lack of adequate mental health support in most educational institutions create a perfect storm of student stress.</p>

          <h3>IIT-JEE and NEET Pressure</h3>
          <p>Preparing for JEE Advanced or NEET means years of intensive preparation, often starting as early as Class 8. Kota coaching factories, 16-hour study days, rank lists that determine your worth — this system puts enormous strain on developing minds. The psychological cost of this pressure is only beginning to be acknowledged publicly.</p>
          <p>And when you do not clear the exam on the first attempt? Or do not get the rank you needed? The grief of that moment — combined with family reactions, financial cost, and the sense of a lost year or years — is real and profound.</p>

          <h3>Hostel Homesickness</h3>
          <p>Leaving home for the first time at 17 or 18 to live in a hostel — often hundreds of kilometres from family — is a significant adjustment that Indian students are rarely prepared for. Hostel homesickness involves missing family, navigating unfamiliar food and routines, making new friends from scratch in a competitive environment, and doing all of this while maintaining high academic performance.</p>

          <h3>Campus Bullying and Ragging</h3>
          <p>Despite regulations, ragging and campus bullying remain serious problems in many Indian educational institutions. The power dynamics of senior-junior relationships, gender-based harassment, and social exclusion can cause lasting psychological harm. Students who experience this often feel they have no one to turn to — LeanOn offers a private, judgment-free space to talk.</p>

          <h3>Imposter Syndrome at Top Colleges</h3>
          <p>Many students who worked years for admission to IITs, NITs, AIIMS, or top private colleges arrive and immediately feel like they do not belong — surrounded by students who seem smarter, more confident, more prepared. This experience is extremely common, but because everyone is performing confidence, it can feel uniquely personal.</p>

          <h3>Career Anxiety</h3>
          <p>As students approach graduation, career anxiety becomes acute — placement pressure, the gap between expected and actual salaries, family expectations about career stability, and the fear of choosing the wrong path. Many students feel paralysed by these decisions and have no one to talk to who has been through it recently.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Helps Indian Students</h2>

          <h3>Listeners Who Survived the System</h3>
          <p>Our listeners include people who have navigated JEE drops, NEET attempts, college adjustments, and career pivots. They are not counsellors reading from textbooks — they are young adults who have been exactly where you are and have perspective to offer.</p>

          <h3>Completely Private</h3>
          <p>Many students cannot talk honestly about how they are struggling — parents would panic, friends are competing, teachers do not understand. LeanOn is completely private. Nothing you say reaches your family, institution, or peers.</p>

          <h3>Available During Exam Season</h3>
          <p>Stress peaks during exam periods, late at night when revision feels impossible and panic sets in. LeanOn is available 24/7, including during board exam weeks, JEE season, and final placements.</p>

          <h3>No Judgment About Your Academic Choices</h3>
          <p>Whether you want to switch streams, take a gap year, leave engineering for art, or are questioning whether the career your family chose for you is actually what you want — LeanOn listeners will not judge your choices. They will help you think through them.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Student Stress</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '📖',
              name: 'Aditya',
              tag: 'JEE Drop Year',
              bio: 'Went through a JEE drop year and the specific shame spiral that comes with it. Found his way through and wants to help others do the same.'
            },
            {
              emoji: '🏥',
              name: 'Preethi',
              tag: 'NEET & Medical Stress',
              bio: 'Navigated NEET preparation across multiple attempts and the emotional rollercoaster of medical college. Deeply understands exam pressure.'
            },
            {
              emoji: '🎓',
              name: 'Nikhil',
              tag: 'Campus Adjustment',
              bio: 'Experienced severe homesickness and imposter syndrome at IIT. Learned how to build connection and belonging in a competitive environment.'
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
          <h2>You Are More Than Your Rank</h2>
          <p>Talk to someone who has been through the pressure of Indian student life and made it through. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse?topic=student-stress"><button className="btn-primary">Find a Student Listener</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">How bad is exam stress among Indian students?</div>
            <div className="faq-a">Extremely serious. India has some of the most competitive academic examinations in the world — JEE, NEET, UPSC, CAT — with millions of students competing for limited seats. Studies have found very high rates of anxiety, depression, and academic stress among Indian students, particularly during preparation periods.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is hostel homesickness and how do I deal with it?</div>
            <div className="faq-a">Hostel homesickness is the distress many Indian students experience when they leave home for the first time for college or coaching institutes. It involves missing family, familiar food, and routines while navigating an unfamiliar competitive environment. It is extremely normal and usually improves as you build new connections and routines.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it okay to feel like I do not fit in at IIT or a top college?</div>
            <div className="faq-a">Yes, and it is extremely common. Many students who worked their entire school career toward a dream institution arrive and feel overwhelmed or like they do not belong — often called imposter syndrome. This is a near-universal experience, particularly in the first year, and does not reflect your actual capability or worth.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What do I do if I am being bullied at college?</div>
            <div className="faq-a">You should report campus bullying to the institution&apos;s anti-ragging committee and, if needed, the UGC Toll-Free Anti-Ragging Helpline at 1800-180-5522. You should also talk to someone you trust. LeanOn peer listeners who have navigated campus bullying can offer support while you navigate the situation.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do I handle career anxiety as a student in India?</div>
            <div className="faq-a">Career anxiety as a student often involves uncertainty about placement, family expectations about salary and stability, and fear of choosing the wrong path. Talking to someone who has navigated these decisions — including with regrets and course corrections — can provide perspective that career counsellors often cannot.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Student stress connects with many other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/anxiety" className="related-link">Anxiety</a>
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/breakup" className="related-link">Breakup Support</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for student stress support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/loneliness-in-india" className="related-link">Loneliness in India</a>
            <a href="/blog/affordable-alternatives-to-therapy-in-india" className="related-link">Affordable alternatives to therapy</a>
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support</a>
            <a href="/blog/how-peer-support-works" className="related-link">How peer support works</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/hyderabad" className="related-link">Peer support Hyderabad</a>
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
