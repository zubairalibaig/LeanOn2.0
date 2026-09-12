import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Kochi — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Kochi. Gulf migration, NRI family separation, Kerala joint family dynamics, high education. From ₹160.',
  alternates: { canonical: 'https://www.leanon.app/kochi', languages: { 'en-IN': 'https://www.leanon.app/kochi' } },
  keywords: 'peer support Kochi, emotional support Kerala, NRI mental health Kerala, Gulf migration loneliness, family separation Kerala, talk to someone Kochi Ernakulam',
  openGraph: {
    title: 'Emotional Support in Kochi — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Kochi. Gulf migration, NRI family separation, Kerala joint family dynamics, high education. From ₹160.',
    url: 'https://www.leanon.app/kochi',
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
      name: 'What makes emotional challenges in Kochi and Kerala unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kerala has one of the highest literacy rates in India and a long tradition of international migration — particularly to Gulf countries. The result is a unique set of emotional challenges: the loneliness of working abroad while your family is in Kerala, the strain of long-distance marriage, identity tension between traditional Kerala values and global exposure, and the mental health awareness that comes with education but the social stigma that still exists around seeking help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support available in English and Malayalam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners include people from Kerala who are comfortable in both English and Malayalam. When you browse, you can filter or look at listener bios to find someone whose language and background matches yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use LeanOn if I am in the Gulf or abroad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is available worldwide. Many users connect from the Gulf, the UK, the US, Canada, and Australia. Sessions are conducted online via text or voice. Payment works from abroad with international cards and UPI for NRIs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do Kochi users talk about on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common topics include Gulf migration and the loneliness of working abroad, family separation (especially spouses and parents), the pressure to send remittances, joint family dynamics in Kerala, education pressure on children, marriage and relationship tension from long distance, and the identity questions that come from moving between Kerala culture and global exposure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn peer support different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is peer support, not therapy. Listeners are trained peers — not licensed therapists. More accessible (from ₹160 for 15 minutes), available 24/7, and completely anonymous. For clinical mental health concerns, professional help is always recommended.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Kochi', item: 'https://www.leanon.app/kochi' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/kochi',
  areaServed: { '@type': 'City', name: 'Kochi', addressCountry: 'IN' },
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
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:var(--navy);}
`

export default function KochiPage() {
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
          <span style={{color:'var(--navy)'}}>Kochi</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Kochi · Kerala · NRI Friendly</p>
          <h1>Peer Support in Kochi — Someone to Talk to When <em>Distance Makes it Hard</em></h1>
          <p className="lead">Kerala has the highest literacy rate in India and one of the largest diaspora populations. Kochi is educated, globally connected — and deeply affected by the loneliness that comes with migration, family separation, and lives stretched across continents.</p>
        </div>

        <div className="section">
          <h2>Kochi and Kerala&apos;s Unique Emotional Landscape</h2>
          <h3>Gulf Migration and Family Separation</h3>
          <p>Hundreds of thousands of Keralites work in the Gulf — in UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain. The remittance economy that built modern Kerala also created an epidemic of quiet loneliness: fathers who see their children once a year, spouses managing households alone, parents growing old without their children nearby. The financial success masks an emotional cost that rarely gets discussed.</p>
          <h3>Long-Distance Marriage</h3>
          <p>For many Kerala families, long-distance marriage is not unusual — it is expected. One partner goes abroad, the other manages the home in Kerala. The resulting loneliness, resentment, disconnection, and the difficulty of maintaining intimacy across time zones is a specific challenge that most people navigate silently.</p>
          <h3>Joint Family and Return Pressure</h3>
          <p>Kerala&apos;s joint family culture creates a specific tension for those who have lived abroad: the expectation to return eventually, the guilt of not being there, the difficulty of re-integrating after years outside. And for those who stayed, the weight of being the child or sibling who was left behind to manage everything.</p>
          <h3>Education and High Expectations</h3>
          <p>Kerala&apos;s extraordinary emphasis on education creates its own pressure. Engineering, medicine, civil services, MBA abroad — the aspiration is intense, and the competition is fierce. The mental toll of this pressure on students, especially in Ernakulam, Thrissur, and Thiruvananthapuram, is significant.</p>
        </div>

        <div className="section">
          <h2>What Kochi Users Talk About on LeanOn</h2>
          <ul>
            <li><strong>Gulf loneliness</strong> — working far from family, missing milestones, the weight of being the provider from a distance</li>
            <li><strong>Long-distance relationships</strong> — the slow drift, the resentment, the difficulty of staying connected</li>
            <li><strong>Return anxiety</strong> — should I go back? what do I go back to? who am I now?</li>
            <li><strong>Joint family pressure</strong> — Kerala&apos;s specific version: the matrilineal undercurrents, the taravad expectations, the family land and property dynamics</li>
            <li><strong>Exam pressure</strong> — the Kerala engineering and medical entrance culture, the pressure on children of high-achieving families</li>
            <li><strong>Mental health stigma</strong> — knowing you need support but finding it hard to ask in a community where education doesn&apos;t always translate to openness about emotional struggles</li>
          </ul>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners from Kerala</h2>
        <div className="listeners-grid">
          {[
            { emoji: '✈️', name: 'Rajan', tag: 'Gulf Migration', bio: 'Spent 8 years in Dubai before returning to Kochi. Know the loneliness of working abroad and the complicated feelings around home. Happy to listen.' },
            { emoji: '💙', name: 'Divya', tag: 'Long-Distance Family', bio: 'My husband worked in Qatar for five years. I navigated that stretch alone. I understand what that kind of absence does to a marriage and a family.' },
            { emoji: '📚', name: 'Arun', tag: 'Education Pressure', bio: 'Dropped engineering after the first year — the hardest thing I did. The pressure on Kerala students is real. I can sit with that without judgment.' },
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
          <h2>Ready to Talk to Someone Who Understands Kerala?</h2>
          <p>Browse peer listeners who know the NRI experience and Kerala family dynamics. Available worldwide, 24/7, from ₹160.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Kerala Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What makes emotional challenges in Kochi and Kerala unique?</div>
            <div className="faq-a">Kerala&apos;s high literacy, large diaspora, and Gulf migration economy create specific emotional challenges: family separation, long-distance marriage, return anxiety, and the particular loneliness of success from far away.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is peer support available in English and Malayalam?</div>
            <div className="faq-a">Yes. LeanOn listeners include people from Kerala comfortable in both English and Malayalam. Browse listener bios to find someone whose language and background matches yours.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I use LeanOn if I am in the Gulf or abroad?</div>
            <div className="faq-a">Yes. LeanOn is available worldwide. Many users connect from Gulf countries, the UK, the US, and Australia. Sessions are online. Payment works with international cards.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What do Kochi users talk about on LeanOn?</div>
            <div className="faq-a">Gulf loneliness, long-distance marriage, return anxiety, joint family pressure, education pressure, and the mental health stigma that can persist even in highly educated communities.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn peer support different from therapy?</div>
            <div className="faq-a">Yes. LeanOn is peer support, not therapy. Listeners are trained peers — not licensed therapists. Accessible from ₹160 for 15 minutes, available 24/7, anonymous.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <div className="related">
            <a href="/nri-mental-health" className="related-link">NRI Mental Health</a>
            <a href="/loneliness-support-india" className="related-link">Loneliness Support</a>
            <a href="/relationship-counselling-india" className="related-link">Relationship Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/bengaluru" className="related-link">Peer Support Bengaluru</a>
            <a href="/online-emotional-support-india" className="related-link">Online Emotional Support</a>
          </div>
        </div>

        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>NIMHANS:</strong> <a href="tel:08046110007">080-46110007</a> &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> <a href="tel:14416">14416</a> (free · 24/7)</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals.</p>
        </div>
      </div>
    </>
  )
}
