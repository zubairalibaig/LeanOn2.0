/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled: reactStrictMode causes double-mount in dev
  // which creates duplicate WebSocket subscriptions and confuses testing
  reactStrictMode: false,

  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
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
