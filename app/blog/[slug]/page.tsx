import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { post as lonelinessPost } from '../posts/loneliness-in-india'
import { post as burnoutPost } from '../posts/burnout-recovery-india'
import { post as peerSupportPost } from '../posts/how-peer-support-works'

export const dynamic = 'force-static'

const allPosts = [lonelinessPost, burnoutPost, peerSupportPost]

function getPost(slug: string) {
  return allPosts.find((p) => p.slug === slug)
}

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | LeanOn Blog`,
    description: post.description,
    alternates: { canonical: `https://leanon.app/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://leanon.app/blog/${post.slug}`,
      siteName: 'LeanOn',
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
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
  .page{max-width:740px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .article-header{margin-bottom:40px;}
  .article-meta{display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;}
  .article-date{font-size:13px;font-weight:600;color:var(--gray);}
  .article-read-time{font-size:13px;font-weight:600;color:var(--teal);background:var(--light);padding:3px 10px;border-radius:50px;}
  .article-title{font-size:clamp(26px,5vw,40px);font-weight:900;color:var(--navy);line-height:1.2;margin-bottom:16px;}
  .article-desc{font-size:17px;color:var(--gray);line-height:1.75;font-weight:500;}
  .article-topics{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px;}
  .article-topic{font-size:12px;font-weight:700;color:var(--teal);background:rgba(26,143,160,0.1);padding:4px 10px;border-radius:50px;}
  .article-divider{border:none;border-top:1.5px solid var(--border);margin:32px 0;}
  .article-body h2{font-size:22px;font-weight:800;color:var(--navy);margin:32px 0 14px;}
  .article-body h2:first-child{margin-top:0;}
  .article-body p{font-size:16px;color:#3A6070;line-height:1.85;margin-bottom:18px;font-weight:500;}
  .article-body ul{padding-left:22px;margin-bottom:18px;}
  .article-body ul li{font-size:16px;color:#3A6070;line-height:1.80;margin-bottom:8px;font-weight:500;}
  .article-body a{color:var(--teal);font-weight:700;text-decoration:underline;text-underline-offset:3px;}
  .article-body strong{color:var(--navy);font-weight:800;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-top:48px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .back-link{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--teal);margin-bottom:32px;}
  .back-link:hover{opacity:0.8;}
`

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'LeanOn' },
    publisher: { '@type': 'Organization', name: 'LeanOn', url: 'https://leanon.app' },
    url: `https://leanon.app/blog/${post.slug}`,
    mainEntityOfPage: `https://leanon.app/blog/${post.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leanon.app' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://leanon.app/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://leanon.app/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/blog">Blog</a><span>›</span>
          <span style={{color:'var(--navy)',maxWidth:'300px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{post.title}</span>
        </nav>

        <a href="/blog" className="back-link">← Back to Blog</a>

        <div className="article-header">
          <div className="article-meta">
            <span className="article-date">{formatDate(post.date)}</span>
            <span className="article-read-time">{post.readTime}</span>
          </div>
          <h1 className="article-title">{post.title}</h1>
          <p className="article-desc">{post.description}</p>
          <div className="article-topics">
            {post.topics.map((t) => (
              <span key={t} className="article-topic">{t}</span>
            ))}
          </div>
        </div>

        <hr className="article-divider" />

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="cta-card">
          <h2>Ready to Talk to Someone Who Gets It?</h2>
          <p>Reading is a start — but sometimes you need to actually talk. Browse peer listeners who understand what you are going through. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse All Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
