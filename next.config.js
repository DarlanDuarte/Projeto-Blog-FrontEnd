/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "backend-blog-project.cyclic.app",
      "localhost",
      "drive.google.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
