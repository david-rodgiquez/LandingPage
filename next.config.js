/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["landingpage-strapi-production.up.railway.app"],
  },
};

module.exports = nextConfig;
