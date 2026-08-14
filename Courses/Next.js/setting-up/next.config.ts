import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // new URL('https://lh3.googleusercontent.com/a/**')
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/a/**',
      },
    ],
    qualities: [100],
  },
}

export default nextConfig
