/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false, // make sure App Router is disabled
  },
}

module.exports = nextConfig;
