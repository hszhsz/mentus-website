/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.mentus.ai'],
    unoptimized: true,
  },
  trailingSlash: true,
  poweredByHeader: false,
}

module.exports = nextConfig
