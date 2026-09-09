import { MetadataRoute } from 'next'
import { RESOURCES } from '@/lib/resources-data'
import { FEELINGS } from '@/lib/feelings-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.leanon.app'
  const d = (s: string) => new Date(s)
  // The sitemap is force-static, so this evaluates at BUILD time — i.e. the
  // deploy date. Using the build date instead of a hardcoded string means the
  // "fresh" pages' lastModified never silently goes stale between deploys.
  const TODAY = new Date().toISOString().slice(0, 10)
  return [
    { url: base,                                       lastModified: d(TODAY),        changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/browse`,                           lastModified: d(TODAY),        changeFrequency: 'hourly',  priority: 0.95 },
    { url: `${base}/about`,                            lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/become-listener`,                  lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/contact`,                          lastModified: d('2026-01-01'), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/faq`,                              lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/glossary`,                         lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`,                          lastModified: d('2026-01-01'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,                            lastModified: d('2026-01-01'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/trust`,                            lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/press`,                            lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.6 },
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
    { url: `${base}/support/social-anxiety`,            lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/imposter-syndrome`,         lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/work-from-home-loneliness`, lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.85 },
    // Seeker-intent support pages (Round 4 — acquiring paying users, not listeners)
    { url: `${base}/support/overthinking`,             lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/marriage-loneliness`,      lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/job-loss`,                 lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/sunday-night-loneliness`,  lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/support/long-distance-relationship`, lastModified: d(TODAY),      changeFrequency: 'monthly', priority: 0.85 },
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
    { url: `${base}/blog/empathy-in-peer-support`,                     lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/what-is-peer-support-india`,                  lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/online-emotional-support-india-guide`,        lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/how-to-stop-overthinking-at-night`,           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/no-one-to-talk-to`,                           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/therapy-cost-india`,                          lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/why-people-call-astrologers-to-talk`,         lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/what-it-means-to-have-someone-to-lean-on`,    lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    // Brand + authority pages
    { url: `${base}/leanon`,                           lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/emotional-support`,                lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.9 },
    // Long-tail SEO pages
    { url: `${base}/leanon-app-mental-health`,         lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/anonymous-peer-support`,           lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/need-someone-to-talk-to-india`,    lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/get-paid-to-chat-india`,           lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    // High-commercial-intent seeker pages (Round 4). Priority 0.95 — these are
    // the pages that reach people ready to PAY, which is the current bottleneck.
    { url: `${base}/online-counselling-india-cost`,    lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/talk-to-someone-right-now`,        lastModified: d(TODAY),        changeFrequency: 'weekly',  priority: 0.95 },
    // Astrology-chat bridge — intercepts searchers already turning to
    // astrology apps for a conversation, not a prediction (see PROJECT.md §2).
    { url: `${base}/talk-to-someone-not-astrologer`,   lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    // "lean on" (with a space) cluster — the head term is owned by the 2015
    // Major Lazer song, so this targets the emotional-intent long tail instead.
    { url: `${base}/someone-to-lean-on`,               lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    // Daily check-in hub + mood pages — the recurring-entry-point engine.
    { url: `${base}/daily-check-in`,                   lastModified: d(TODAY),        changeFrequency: 'daily',   priority: 0.9 },
    ...FEELINGS.map(f => ({
      url: `${base}/feeling/${f.slug}`,
      lastModified: d(TODAY),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    // City pages
    { url: `${base}/bengaluru`,                        lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/mumbai`,                           lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/delhi`,                            lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/hyderabad`,                        lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/chennai`,                          lastModified: d('2026-06-11'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/pune`,                             lastModified: d('2026-06-11'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/kolkata`,                          lastModified: d('2026-06-11'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/jaipur`,                           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ahmedabad`,                        lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.8 },
    // AI/ChatGPT-alternative + earning pages — the highest-growth SEO cluster
    { url: `${base}/chat-with-real-person`,            lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/ai-chatbot-alternative`,           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/earn-by-listening`,                lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    // High-intent immediate-need landing page
    { url: `${base}/i-need-someone-to-talk-to`,        lastModified: d(TODAY),        changeFrequency: 'weekly',  priority: 0.97 },
    // New support topic pages
    { url: `${base}/support/feeling-empty`,            lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/feeling-like-a-failure`,   lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/cant-sleep-anxiety`,       lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/need-to-vent`,             lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/emotional-exhaustion`,     lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/support/feeling-lost`,             lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    // Blog: AI vs human + earning posts
    { url: `${base}/blog/chatgpt-vs-human-listener`,   lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/earn-money-listening-online-india`, lastModified: d(TODAY),  changeFrequency: 'monthly', priority: 0.9 },
    // Blog: ChatGPT-user + high-intent emotional queries
    { url: `${base}/blog/is-chatgpt-good-for-mental-health`, lastModified: d(TODAY), changeFrequency: 'monthly', priority: 0.92 },
    { url: `${base}/blog/feel-empty-inside-india`,     lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/feel-like-a-failure-india`,   lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/2am-loneliness-india`,        lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/hate-job-cant-quit-india`,    lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.9 },
    // Blog: vent/impulse persona — daytime, situational-trigger, pressure-valve
    { url: `${base}/blog/getting-it-off-your-chest`,         lastModified: d(TODAY),  changeFrequency: 'monthly', priority: 0.92 },
    { url: `${base}/blog/bad-morning-reset-india`,           lastModified: d(TODAY),  changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/venting-to-a-stranger-india`,       lastModified: d(TODAY),  changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog/emotional-reset-workday-india`,     lastModified: d(TODAY),  changeFrequency: 'monthly', priority: 0.9 },
    // Vent/impulse landing pages — highest-converting persona (daytime, one-session, acute trigger)
    { url: `${base}/need-to-vent-right-now`,           lastModified: d(TODAY),        changeFrequency: 'weekly',  priority: 0.97 },
    { url: `${base}/vent-to-someone-online`,           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/having-a-bad-day`,                 lastModified: d(TODAY),        changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/just-had-a-fight`,                 lastModified: d(TODAY),        changeFrequency: 'weekly',  priority: 0.93 },
    { url: `${base}/talk-to-stranger-online-india`,    lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    // Seeker acquisition — high-commercial-intent pages targeting people who WANT support
    // (not listeners). Addresses the listener-heavy supply/demand imbalance.
    { url: `${base}/online-counseling-india`,            lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/cant-afford-therapy-india`,          lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/support/family-pressure-india`,      lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/support/career-pressure-india`,      lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/support/new-city-india`,             lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    { url: `${base}/support/relationship-anxiety`,       lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    { url: `${base}/support/arranged-marriage-stress`,   lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    { url: `${base}/support/postpartum-india`,           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    // Blog: seeker-acquisition posts (therapy cost, family pressure, new city, signs)
    { url: `${base}/blog/cant-afford-therapy-india`,     lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/blog/family-pressure-mental-health-india`, lastModified: d(TODAY),  changeFrequency: 'monthly', priority: 0.93 },
    { url: `${base}/blog/loneliness-new-city-india`,     lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.92 },
    { url: `${base}/blog/signs-you-need-to-talk-to-someone`, lastModified: d(TODAY),    changeFrequency: 'monthly', priority: 0.92 },
    // Women-targeting hub + seeker pages — Avantikka-cluster (married women, mothers, working women)
    // Both paid sessions to date are women 20s-30s → dedicated women's SEO cluster
    { url: `${base}/for-women`,                           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/support/married-but-lonely`,          lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/support/mom-burnout-india`,           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/support/working-woman-india`,         lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/support/husband-not-supportive-india`, lastModified: d(TODAY),       changeFrequency: 'monthly', priority: 0.95 },
    // Blog: women-cluster posts
    { url: `${base}/blog/married-but-lonely-india`,       lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/blog/working-mothers-mental-health-india`, lastModified: d(TODAY),   changeFrequency: 'monthly', priority: 0.93 },
    { url: `${base}/blog/mom-burnout-signs-india`,        lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    // Harshit-cluster pages — men's loneliness, marriage pressure, fear of marriage, adulting, banking stress
    // First male paid user: bank employee, lonely, job+marriage pressure, parents who cheated on each other
    { url: `${base}/support/men-loneliness-india`,        lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/support/not-ready-to-get-married-india`, lastModified: d(TODAY),     changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/support/fear-of-marriage-india`,      lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/support/adulting-india`,              lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/support/banking-job-stress-india`,    lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    // Blog: Harshit-cluster posts
    { url: `${base}/blog/men-loneliness-india`,           lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/blog/fear-of-marriage-india`,         lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    { url: `${base}/blog/adulting-loneliness-india`,      lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    // Sakshi-cluster pages — emotional numbness, morning dread, childhood trauma, professional help access
    { url: `${base}/support/emotional-numbness`,          lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/support/dont-want-to-get-out-of-bed`, lastModified: d(TODAY),       changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/support/childhood-trauma-india`,      lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.93 },
    { url: `${base}/i-need-professional-help-india`,      lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    // New SEO pages (Items 18-21)
    { url: `${base}/why-leanon`,                       lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/how-leanon-works`,                 lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/is-leanon-safe`,                   lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/anonymous-support-online`,         lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/someone-to-talk-to-at-night`,      lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/online-emotional-support-india`,   lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.9 },
    // AstroTalk-overlap + relationship + loneliness cluster
    { url: `${base}/astrotalk-alternative`,            lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/relationship-advice-online-india`, lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/talk-to-real-person-online-india`, lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/loneliness-support-india`,         lastModified: d(TODAY),        changeFrequency: 'monthly', priority: 0.97 },
    { url: `${base}/alternatives-to-therapy-india`,    lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/feeling-lonely-in-india`,          lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/our-story`,                        lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    // Resources hub + all resource pages
    // NOTE: `loneliness-statistics-india` is intentionally NOT hardcoded here —
    // it lives in RESOURCES (resources-data.ts), so the .map below already emits
    // it. Listing it above too put it in the sitemap twice.
    { url: `${base}/resources`,                        lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.8 },
    ...RESOURCES.map(r => ({
      url: `${base}/resources/${r.slug}`,
      lastModified: d('2026-05-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
