/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/icaroxavier.png',
      },
    ],
  },
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig
