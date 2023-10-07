/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "backend-blog-project.cyclic.app",
      "localhost",
      "drive.google.com",
    ],
  },
};

module.exports = nextConfig;
