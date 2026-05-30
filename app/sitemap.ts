import { MetadataRoute } from 'next'
import { RESOURCES } from '@/lib/resources-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.leanon.app'
  const d = (s: string) => new Date(s)
  return [
    { url: base,                                       lastModified: d('2026-05-01'), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/browse`,                           lastModified: d('2026-05-01'), changeFrequency: 'hourly',  priority: 0.95 },
    { url: `${base}/about`,                            lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/become-listener`,                  lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/contact`,                          lastModified: d('2026-01-01'), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/faq`,                              lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/glossary`,                         lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`,                          lastModified: d('2026-01-01'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,                            lastModified: d('2026-01-01'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/trust`,                            lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/press`,                            lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.6 },
    // Support hub + topic pages
    { url: `${base}/support`,                          lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/loneliness`,               lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/anxiety`,                  lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/breakup`,                  lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/grief`,                    lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/founder-burnout`,          lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/student-stress`,           lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/career-confusion`,         lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/relationship-stress`,      lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/emotional-support`,        lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/someone-to-talk-to`,       lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/anonymous-support`,        lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    // Blog
    { url: `${base}/blog`,                             lastModified: d('2026-05-01'), changeFrequency: 'weekly',  priority: 0.75 },
    { url: `${base}/blog/loneliness-in-india`,         lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/burnout-recovery-india`,      lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/how-peer-support-works`,      lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/what-does-lean-on-mean`,      lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/loneliness-at-night`,         lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/emotional-burnout`,           lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/anonymous-emotional-support-india`, lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/peer-support-vs-therapy-india`,              lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/joint-family-emotional-support`,             lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/how-to-deal-with-loneliness-in-joint-family-india`, lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/startup-founder-burnout-stories-and-recovery`, lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/affordable-alternatives-to-therapy-in-india`, lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/mens-mental-health-talking-is-strength`,      lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/women-loneliness-india-peer-support`,         lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
    // Brand + authority pages
    { url: `${base}/leanon`,                           lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/emotional-support`,                lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.9 },
    // Long-tail SEO pages
    { url: `${base}/leanon-app-mental-health`,         lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/anonymous-peer-support`,           lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/need-someone-to-talk-to-india`,    lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/get-paid-to-chat-india`,           lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    // City pages
    { url: `${base}/bengaluru`,                        lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/mumbai`,                           lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/delhi`,                            lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/hyderabad`,                        lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.85 },
    // Resources hub + all resource pages
    { url: `${base}/resources`,                        lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/resources/loneliness-statistics-india`, lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    ...RESOURCES.map(r => ({
      url: `${base}/resources/${r.slug}`,
      lastModified: d('2026-05-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
