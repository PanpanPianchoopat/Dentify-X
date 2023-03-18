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
  useFileSystemPublicRoutes: false,
};

module.exports = nextConfig
