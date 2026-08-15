/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled: reactStrictMode causes double-mount in dev
  // which creates duplicate WebSocket subscriptions and confuses testing
  reactStrictMode: false,

  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },

  async rewrites() {
    return [
      // Digital Asset Links must be served from this exact well-known path for
      // Android to verify the TWA. The handler is env-driven — see the route.
      { source: '/.well-known/assetlinks.json', destination: '/api/assetlinks' },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Control referrer information
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict device permissions (microphone allowed for voice calls)
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(self), geolocation=()' },
          // Force HTTPS for 2 years — only set in production to avoid breaking localhost
          ...(process.env.NODE_ENV === 'production' ? [
            { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          ] : []),
        ],
      },
      // Long-lived cache for static public assets — logo, manifest, llms.txt, OG images
      // CDN caches these at the edge; stale-while-revalidate keeps latency low on revalidation
      {
        source: '/logo.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, stale-while-revalidate=86400' }],
      },
      {
        source: '/manifest.json',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' }],
      },
      // PWA / Android launcher icons — immutable, content-addressed by name
      {
        source: '/:icon(icon-192.png|icon-512.png|icon-maskable-512.png|apple-touch-icon.png)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, stale-while-revalidate=86400' }],
      },
      {
        source: '/llms.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' }],
      },
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=600' }],
      },
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=600' }],
      },
    ]
  },

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, net: false, tls: false,
    }
    return config
  },
}

module.exports = nextConfig

