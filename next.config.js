/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled: reactStrictMode causes double-mount in dev
  // which creates duplicate WebSocket subscriptions and confuses testing
  reactStrictMode: false,

  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
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

