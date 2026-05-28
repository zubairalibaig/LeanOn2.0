import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://leanon.app'
  const now = new Date()
  return [
    { url: base,                                       lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/browse`,                           lastModified: now, changeFrequency: 'hourly',  priority: 0.95 },
    { url: `${base}/about`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/become-listener`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/contact`,                          lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/faq`,                              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/glossary`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`,                          lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,                            lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    // Support hub + topic pages
    { url: `${base}/support`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/loneliness`,               lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/anxiety`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/breakup`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/grief`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/founder-burnout`,          lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/student-stress`,           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/career-confusion`,         lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/relationship-stress`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/emotional-support`,        lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/someone-to-talk-to`,       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/anonymous-support`,        lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    // Blog
    { url: `${base}/blog`,                             lastModified: now, changeFrequency: 'weekly',  priority: 0.75 },
    { url: `${base}/blog/loneliness-in-india`,         lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/burnout-recovery-india`,      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/how-peer-support-works`,      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/what-does-lean-on-mean`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/loneliness-at-night`,         lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/emotional-burnout`,           lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/anonymous-emotional-support-india`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/peer-support-vs-therapy-india`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/joint-family-emotional-support`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
