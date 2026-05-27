import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://leanon.app'
  const now = new Date()
  return [
    { url: base,                                lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/browse`,                    lastModified: now, changeFrequency: 'hourly',  priority: 0.9 },
    { url: `${base}/about`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/become-listener`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/privacy`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,                     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    // Support pages — programmatic SEO
    { url: `${base}/support`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support/loneliness`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support/anxiety`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support/breakup`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support/grief`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support/founder-burnout`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support/student-stress`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support/career-confusion`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Blog
    { url: `${base}/blog`,                              lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/blog/loneliness-in-india`,          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/burnout-recovery-india`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/how-peer-support-works`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
