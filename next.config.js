/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["iamaltera.com"],
  },
};

module.exports = nextConfig;
