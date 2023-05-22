/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')

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

module.exports = nextTranslate(nextConfig)
