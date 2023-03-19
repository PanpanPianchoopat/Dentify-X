/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  images: {
    domains: ["media.giphy.com"],
  },
};

module.exports = nextConfig
