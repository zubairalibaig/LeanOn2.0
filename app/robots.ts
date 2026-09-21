import { MetadataRoute } from 'next'

const PRIVATE = ['/api/', '/session/', '/dashboard/', '/wallet/', '/admin/', '/profile/', '/sessions/', '/auth', '/become-listener']
const AI_CRAWLERS = ['GPTBot','OAI-SearchBot','ChatGPT-User','ClaudeBot','Claude-Web','anthropic-ai','Google-Extended','Googlebot','Bingbot','msnbot','BingPreview','PerplexityBot','Perplexity-User','Applebot-Extended','Applebot','Amazonbot','meta-externalagent','DuckAssistBot','cohere-ai','YouBot','CCBot','Bytespider','Diffbot','ia_archiver']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent:'*', allow:'/', disallow:PRIVATE },
      { userAgent:'Googlebot', allow:'/', disallow:PRIVATE },
      ...AI_CRAWLERS.map(userAgent=>({userAgent,allow:'/',disallow:PRIVATE})),
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
