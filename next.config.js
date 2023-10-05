/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'juliosesai.tech',
        port: '',
        pathname: '/api-Guitarras/image/**',
      },
    ]
    
  }
}

module.exports = nextConfig

