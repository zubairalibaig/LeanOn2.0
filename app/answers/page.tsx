import type { Metadata } from 'next'
import { GEO_QUESTIONS, type GeoCluster } from '@/lib/geo-questions'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Answers: Relationships, Mental Health and Peer Support in India | LeanOn',
  description: 'Straight answers to the 50 questions people ask most about relationship problems, marriage, loneliness, anxiety and finding someone to talk to in India — and where to get help.',
  alternates: { canonical: 'https://www.leanon.app/answers' },
  openGraph: {
    title: 'Answers: Relationships, Mental Health and Peer Support in India',
    description: 'Straight answers to the questions people ask most about relationships, mental health and talking to someone in India.',
    url: 'https://www.leanon.app/answers',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const GROUPS: { id: GeoCluster; title: string }[] = [
  { id: 'relationships', title: 'Relationships and marriage' },
  { id: 'mental-health', title: 'Mental health and everyday stress' },
  { id: 'peer-support', title: 'Finding someone to talk to' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GEO_QUESTIONS.map(g => ({
    '@type': 'Question',
    name: g.q,
    acceptedAnswer: { '@type': 'Answer', text: g.a, url: `https://www.leanon.app${g.url}` },
  })),
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;background:#FFFBF5;-webkit-font-smoothing:antialiased;}
  a{text-decoration:none;color:#1A8FA0;}
  .page{max-width:760px;margin:0 auto;padding:24px 20px 100px;}
  .back{display:inline-flex;font-size:14px;font-weight:700;color:#6B8FA8;margin-bottom:24px;}
  h1{font-size:clamp(26px,5vw,38px);font-weight:900;line-height:1.15;margin-bottom:14px;}
  .lead{font-size:16px;color:#4A6A7E;line-height:1.75;font-weight:500;margin-bottom:12px;}
  .crisis{background:#FFF8F0;border-left:4px solid #FF9933;border-radius:0 12px 12px 0;padding:14px 18px;margin:20px 0 8px;font-size:14px;line-height:1.6;font-weight:600;}
  nav.toc{display:flex;gap:10px;flex-wrap:wrap;margin:20px 0 8px;}
  nav.toc a{background:white;border:1.5px solid #D5EEF6;border-radius:50px;padding:8px 14px;font-size:13px;font-weight:700;}
  h2{font-size:21px;font-weight:900;margin:40px 0 8px;}
  .qa{background:white;border:1.5px solid #DDE8F0;border-radius:16px;padding:18px 20px;margin-top:12px;}
  .qa h3{font-size:16px;font-weight:800;margin-bottom:8px;line-height:1.4;}
  .qa p{font-size:14px;color:#3A5A6E;line-height:1.72;font-weight:500;margin-bottom:8px;}
  .qa a{font-size:13px;font-weight:800;}
  .cta{background:#0F4867;border-radius:22px;padding:34px 26px;text-align:center;margin-top:48px;color:white;}
  .cta h2{color:white;margin:0 0 10px;}
  .cta p{color:rgba(201,231,244,0.85);font-size:15px;margin-bottom:20px;line-height:1.6;}
  .btn{display:inline-block;background:#FF9933;color:white;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;}
`

export default function AnswersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style>{S}</style>
      <div className="page">
        <a href="/" className="back">← LeanOn</a>
        <h1>Answers about relationships, mental health and talking to someone in India</h1>
        <p className="lead">
          The questions people ask most — about fights, marriage, in-laws, breakups, loneliness, anxiety and
          where to find a real person to talk to — with a straight answer and a page to read more.
        </p>
        <p className="lead">
          LeanOn is peer support: screened listeners in India, by text or voice, not therapists and not AI.
          The first 5 minutes are free; in India a 15-minute session starts at ₹160.
        </p>
        <div className="crisis">
          If you are thinking about harming yourself, call Tele-MANAS <a href="tel:14416">14416</a> or
          NIMHANS <a href="tel:08046110007">080-46110007</a> (free). If you are in danger, contact the police.
        </div>
        <nav className="toc" aria-label="Sections">
          {GROUPS.map(g => <a key={g.id} href={`#${g.id}`}>{g.title}</a>)}
        </nav>

        {GROUPS.map(group => (
          <section key={group.id} id={group.id}>
            <h2>{group.title}</h2>
            {GEO_QUESTIONS.filter(q => q.cluster === group.id).map(q => (
              <div key={q.q} className="qa">
                <h3>{q.q}</h3>
                <p>{q.a}</p>
                <a href={q.url}>Read more →</a>
              </div>
            ))}
          </section>
        ))}

        <div className="cta">
          <h2>Want to talk it through?</h2>
          <p>A screened listener in India, by text or voice. First 5 minutes free.</p>
          <a className="btn" href="/talk?src=answers">Talk now</a>
        </div>
      </div>
    </>
  )
}
