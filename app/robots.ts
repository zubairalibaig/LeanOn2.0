import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/session/', '/dashboard/', '/wallet/', '/admin/'] },
    ],
    sitemap: 'https://leanon.app/sitemap.xml',
    host: 'https://leanon.app',
  }
}
