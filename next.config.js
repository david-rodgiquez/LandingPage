/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["strapi-production-8990.up.railway.app"],
  },
};

module.exports = nextConfig;
