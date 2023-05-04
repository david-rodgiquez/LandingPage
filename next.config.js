/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s.gravatar.com",
      new URL(process.env.NEXT_PUBLIC_STRAPI_BASE_URL).host,
    ],
  },
};

module.exports = nextConfig;
