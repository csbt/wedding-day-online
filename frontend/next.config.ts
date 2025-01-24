import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['wpocean.com', 'c2.staticflickr.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['components/store']
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

export default nextConfig
