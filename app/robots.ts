import { MetadataRoute } from 'next'

// Private routes hidden from all crawlers
const PRIVATE = ['/api/', '/session/', '/dashboard/', '/wallet/', '/admin/', '/profile/', '/sessions/', '/auth']

// AI/LLM crawlers explicitly allowed — being indexed by these is how LeanOn
// gets cited in ChatGPT, Claude, Gemini, Perplexity, and Copilot answers.
const AI_CRAWLERS = [
  'GPTBot',             // OpenAI training
  'OAI-SearchBot',      // ChatGPT Search
  'ChatGPT-User',       // ChatGPT live browsing
  'ClaudeBot',          // Anthropic training
  'Claude-Web',         // Claude live browsing
  'anthropic-ai',       // Anthropic (legacy)
  'Google-Extended',    // Gemini training
  'Googlebot',          // Google core (redundant with * but explicit)
  'Bingbot',            // Bing / Microsoft Copilot indexing
  'msnbot',             // Bing legacy
  'BingPreview',        // Bing link preview
  'PerplexityBot',      // Perplexity indexing
  'Perplexity-User',    // Perplexity live browsing
  'Applebot-Extended',  // Apple Intelligence
  'Applebot',           // Apple web crawler
  'Amazonbot',          // Alexa / Rufus
  'meta-externalagent', // Meta AI
  'DuckAssistBot',      // DuckDuckGo AI
  'cohere-ai',          // Cohere AI
  'YouBot',             // You.com AI
  'CCBot',              // Common Crawl — feeds many open models
  'Bytespider',         // ByteDance / TikTok AI
  'Diffbot',            // Structured data extraction, feeds AI datasets
  'ia_archiver',        // Wayback Machine — improves AI training data quality
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      { userAgent: 'Googlebot', allow: '/', disallow: PRIVATE },
      ...AI_CRAWLERS.map(userAgent => ({ userAgent, allow: '/', disallow: PRIVATE })),
    ],
    sitemap: 'https://www.leanon.app/sitemap.xml',
    host: 'https://www.leanon.app',
  }
}
