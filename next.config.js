/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s.gravatar.com", "strapi-landingpage-production.up.railway.app"],
  },
};

module.exports = nextConfig;
