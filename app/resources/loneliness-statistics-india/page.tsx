import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Loneliness Statistics in India 2026 | LeanOn Research',
  description: 'India loneliness statistics 2026 — 330 million Indians report significant loneliness. Here\'s the data on India\'s isolation crisis and what helps.',
  alternates: { canonical: 'https://www.leanon.app/resources/loneliness-statistics-india' },
  keywords: ['loneliness statistics India', 'India loneliness data', 'loneliness India 2026', 'social isolation India'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Loneliness Statistics in India 2026',
  description: 'Data on India\'s loneliness crisis — 330 million affected.',
  url: 'https://www.leanon.app/resources/loneliness-statistics-india',
  publisher: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
.nav-logo{height:56px;}
.btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
.page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
.back{font-size:14px;font-weight:700;color:var(--gray);margin-bottom:24px;display:inline-block;}
h1{font-size:clamp(24px,5vw,36px);font-weight:900;line-height:1.15;margin-bottom:14px;}
.lead{font-size:16px;color:var(--gray);line-height:1.75;font-weight:500;margin-bottom:28px;}
.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:28px;}
@media(max-width:480px){.stat-grid{grid-template-columns:1fr 1fr;}}
.stat-card{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px;text-align:center;}
.stat-num{font-size:26px;font-weight:900;color:var(--navy);}
.stat-num.orange{color:var(--orange);}
.stat-label{font-size:12px;color:var(--gray);font-weight:600;margin-top:4px;line-height:1.4;}
.section{background:white;border:1.5px solid var(--border);border-radius:20px;padding:22px;margin-bottom:18px;}
.section h2{font-size:18px;font-weight:800;margin-bottom:12px;}
.section p{font-size:14px;color:#3A6070;line-height:1.75;margin-bottom:10px;}
.section p:last-child{margin-bottom:0;}
.share-row{display:flex;gap:10px;margin:24px 0;flex-wrap:wrap;}
.share-btn{display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:50px;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;border:none;cursor:pointer;}
.share-wa{background:#25D366;color:white;}
.share-tw{background:#1DA1F2;color:white;}
.cta-box{background:var(--navy);border-radius:20px;padding:28px;text-align:center;margin-top:28px;}
.cta-box h2{font-size:18px;font-weight:900;color:white;margin-bottom:10px;}
.cta-box p{font-size:13px;color:rgba(201,231,244,.8);margin-bottom:20px;font-weight:500;}
.btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:none;cursor:pointer;}
`

export default function LonelinessStatisticsIndia() {
  const shareUrl = encodeURIComponent('https://www.leanon.app/resources/loneliness-statistics-india')
  const shareText = encodeURIComponent('330 million Indians report significant loneliness. India\'s isolation crisis — via LeanOn')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Get support</button></a>
      </nav>
      <div className="page">
        <a href="/resources" className="back">← All resources</a>
        <h1>Loneliness Statistics in India 2026</h1>
        <p className="lead">India faces a profound loneliness crisis — one of the largest in the world. Here is the data.</p>

        <div className="stat-grid">
          {[
            { num: '330M', label: 'Indians reporting significant loneliness', orange: true },
            { num: '24%', label: 'Of Indian adults experience loneliness', orange: false },
            { num: '56M', label: 'Indians estimated to have depression', orange: false },
            { num: '29%', label: 'Higher heart disease risk from loneliness', orange: true },
            { num: '1%', label: 'Of those who need mental health support receive it', orange: false },
            { num: '15 cigs', label: 'Daily — equivalent health impact of chronic loneliness', orange: false },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <div className={`stat-num${s.orange ? ' orange' : ''}`}>{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="section">
          <h2>India&apos;s loneliness crisis by the numbers</h2>
          <p>A 2023 Meta-Gallup global survey found that 24% of Indians reported experiencing significant loneliness — representing approximately 330 million people. This placed India among the most affected nations globally.</p>
          <p>The Indian Psychiatric Society estimates that over 56 million Indians suffer from depression, a condition closely linked to chronic loneliness. Studies suggest loneliness is both a cause and consequence of depression, creating self-reinforcing cycles that are difficult to break without intervention.</p>
          <p>The WHO identifies loneliness as a significant public health threat: chronically lonely individuals have a 29% increased risk of heart disease, a 32% increased risk of stroke, and significantly elevated risk of premature death. The health impact has been compared to smoking 15 cigarettes per day.</p>
        </div>

        <div className="section">
          <h2>Why India is particularly affected</h2>
          <p><strong>Rapid urbanisation:</strong> Over the last three decades, India has undergone one of the fastest urbanisation processes in history. Millions have moved from tight-knit communities to anonymous urban environments, severing social networks built over lifetimes.</p>
          <p><strong>Joint family dissolution:</strong> The joint family system — historically a dense social support structure — is declining. Nuclear families and migration are reducing the density of daily social contact for millions.</p>
          <p><strong>Work culture:</strong> India has some of the longest average working hours globally. Long commutes and long working days leave limited time for meaningful social connection.</p>
          <p><strong>Stigma:</strong> Mental health stigma in India is among the highest globally. The cultural association between emotional struggle and weakness prevents millions from acknowledging or addressing their loneliness.</p>
          <p><strong>Digital substitution:</strong> The rapid adoption of smartphones has in many cases substituted passive social media consumption for genuine in-person connection — producing the appearance of social life without its substance.</p>
        </div>

        <div className="section">
          <h2>Demographics most affected</h2>
          <p><strong>Urban migrants:</strong> Individuals who have moved to metro cities for work, separated from their home communities and social networks. Bengaluru, Mumbai, Delhi, and Hyderabad have particularly high migrant populations.</p>
          <p><strong>Men:</strong> Male loneliness is systematically underreported due to stigma. Men report fewer close friendships and less emotional intimacy in their relationships, yet are significantly less likely to seek support.</p>
          <p><strong>Elderly:</strong> With the decline of joint families, elderly Indians increasingly live in isolation from children and grandchildren. The elderly are disproportionately affected by the health consequences of loneliness.</p>
          <p><strong>Students:</strong> Students in competitive exam preparation environments (IIT-JEE, NEET, UPSC) often experience extreme social isolation during years of intense study.</p>
        </div>

        <div className="share-row">
          <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <button className="share-btn share-wa">📲 Share on WhatsApp</button>
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <button className="share-btn share-tw">🐦 Share on Twitter</button>
          </a>
        </div>

        <div className="cta-box">
          <h2>You don&apos;t have to be one of the statistics</h2>
          <p>Talk to a real peer listener on LeanOn. Available 24/7 across India.</p>
          <a href="/browse"><button className="btn">Find a listener →</button></a>
        </div>
      </div>
    </>
  )
}
