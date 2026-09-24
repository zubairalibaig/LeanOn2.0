import { MetadataRoute } from 'next'
import { AI_BLOCKED_PATHS } from '@/lib/seo-noindex'

const PRIVATE = ['/api/', '/session/', '/dashboard/', '/wallet/', '/admin/', '/profile/', '/sessions/', '/auth']
// Search engines: must be able to crawl recruitment pages to see their noindex.
const SEARCH_CRAWLERS = ['Bingbot','msnbot','BingPreview','Applebot','ia_archiver']
// AI assistants / AI training: also kept away from listener-recruitment pages.
const AI_CRAWLERS = ['GPTBot','OAI-SearchBot','ChatGPT-User','ClaudeBot','Claude-Web','anthropic-ai','Google-Extended','PerplexityBot','Perplexity-User','Applebot-Extended','Amazonbot','meta-externalagent','DuckAssistBot','cohere-ai','YouBot','CCBot','Bytespider','Diffbot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent:'*', allow:'/', disallow:PRIVATE },
      { userAgent:'Googlebot', allow:'/', disallow:PRIVATE },
      ...SEARCH_CRAWLERS.map(userAgent=>({userAgent,allow:'/',disallow:PRIVATE})),
      ...AI_CRAWLERS.map(userAgent=>({userAgent,allow:'/',disallow:[...PRIVATE, ...AI_BLOCKED_PATHS]})),
    ],
    sitemap: [
      'https://www.leanon.app/sitemap.xml',
      'https://www.leanon.app/country-sitemap.xml',
      'https://www.leanon.app/nri-sitemap.xml',
      'https://www.leanon.app/seo-sitemap.xml',
    ],
    host:'https://www.leanon.app',
  }
}
