import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { RESOURCES } from '@/lib/resources-data'

export const dynamic = 'force-static'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return RESOURCES.map(r => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resource = RESOURCES.find(r => r.slug === params.slug)
  if (!resource) return { title: 'Resource not found' }
  return {
    title: `${resource.title} | LeanOn Resources`,
    description: resource.description,
    alternates: { canonical: `https://www.leanon.app/resources/${resource.slug}` },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `https://www.leanon.app/resources/${resource.slug}`,
      siteName: 'LeanOn',
    },
  }
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
.breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:24px;}
.breadcrumb a:hover{color:var(--teal);}
.breadcrumb span{color:var(--border);}
.article h1{font-size:clamp(24px,5vw,36px);font-weight:900;line-height:1.15;margin-bottom:14px;}
.article .desc{font-size:16px;color:var(--gray);line-height:1.75;font-weight:500;margin-bottom:28px;padding-bottom:20px;border-bottom:1.5px solid var(--border);}
.article .body{font-size:15px;color:#3A5A6E;line-height:1.85;font-weight:500;}
.article .body p{margin-bottom:16px;}
.article .body p strong{color:var(--navy);font-weight:800;}
.share-row{display:flex;gap:10px;margin:28px 0;flex-wrap:wrap;}
.share-btn{display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:50px;font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;border:none;cursor:pointer;transition:all .2s;}
.share-wa{background:#25D366;color:white;}
.share-tw{background:#1DA1F2;color:white;}
.cta-box{background:var(--navy);border-radius:20px;padding:28px;text-align:center;margin-top:36px;}
.cta-box h2{font-size:18px;font-weight:900;color:white;margin-bottom:10px;}
.cta-box p{font-size:13px;color:rgba(201,231,244,.8);margin-bottom:20px;font-weight:500;}
.btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:none;cursor:pointer;}
.more{margin-top:36px;}
.more h3{font-size:16px;font-weight:800;margin-bottom:14px;}
.more-grid{display:flex;flex-wrap:wrap;gap:10px;}
.more-link{background:white;border:1.5px solid var(--border);border-radius:12px;padding:10px 14px;font-size:13px;font-weight:700;color:var(--navy);}
.more-link:hover{border-color:var(--teal);color:var(--teal);}
`

export default function ResourcePage({ params }: Props) {
  const resource = RESOURCES.find(r => r.slug === params.slug)
  if (!resource) notFound()

  const others = RESOURCES.filter(r => r.slug !== params.slug).slice(0, 6)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: resource.title,
        acceptedAnswer: { '@type': 'Answer', text: resource.description + ' ' + resource.content.slice(0, 300) },
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    description: resource.description,
    url: `https://www.leanon.app/resources/${resource.slug}`,
    publisher: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
    author: { '@type': 'Organization', name: 'LeanOn Team' },
  }

  const paragraphs = resource.content.split('\n\n').filter(Boolean)
  const shareUrl = encodeURIComponent(`https://www.leanon.app/resources/${resource.slug}`)
  const shareText = encodeURIComponent(resource.title + ' — via LeanOn')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Get support</button></a>
      </nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/resources">Resources</a><span>›</span>
          <span style={{color:'var(--navy)'}}>{resource.title.slice(0, 40)}…</span>
        </nav>

        <article className="article">
          <h1>{resource.title}</h1>
          <p className="desc">{resource.description}</p>
          <div className="body">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </article>

        <div className="share-row">
          <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <button className="share-btn share-wa">📲 Share on WhatsApp</button>
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
            <button className="share-btn share-tw">🐦 Share on Twitter</button>
          </a>
        </div>

        <div className="cta-box">
          <h2>Talk to a LeanOn peer listener — first 5 minutes free</h2>
          <p>Real humans with lived experience. Available 24/7. Anonymous. Start instantly.</p>
          <a href="/browse"><button className="btn">Find a listener →</button></a>
        </div>

        <div className="more">
          <h3>More resources</h3>
          <div className="more-grid">
            {others.map(r => (
              <a key={r.slug} href={`/resources/${r.slug}`} className="more-link">{r.title}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
