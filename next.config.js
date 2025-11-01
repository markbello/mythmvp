/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow local assets
    domains: [],
    // Enable image optimization
    formats: ['image/avif', 'image/webp'],
  },
  // Exclude src directory from compilation
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // ESLint will ignore src directory via .eslintrc.json
}

module.exports = nextConfig

