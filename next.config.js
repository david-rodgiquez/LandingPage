/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s.gravatar.com", "landingpage-strapi-production.up.railway.app"],
  },
};

module.exports = nextConfig;
