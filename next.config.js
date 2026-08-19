/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled: reactStrictMode causes double-mount in dev
  // which creates duplicate WebSocket subscriptions and confuses testing
  reactStrictMode: false,

  images: {
    // Avatars are served through Vercel's optimizer rather than fetched
    // straight from Supabase Storage. Supabase bills CACHE HITS as egress, so
    // every direct <img> view was billable; routing through Vercel means
    // Supabase is hit roughly once per image, ever. See app/components/Avatar.tsx.
    remotePatterns: [
      // Any Supabase project host — avoids hardcoding the project ref and
      // keeps working if NEXT_PUBLIC_SUPABASE_URL is a placeholder at build time.
      { protocol: 'https', hostname: '*.supabase.co', pathname: '/storage/v1/object/public/**' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
    // Cache each optimized avatar at Vercel's edge for a year. Safe because
    // avatar URLs carry a ?t=<upload-time> version — a re-upload yields a new
    // URL and therefore a new cache entry, so this can never serve a stale photo.
    minimumCacheTTL: 31536000,
    // Avatars are small fixed squares; without this Next generates a full
    // ladder of device widths and burns transformation quota for nothing.
    imageSizes: [32, 48, 64, 96, 128, 256],
    deviceSizes: [640, 750, 828, 1080],
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

