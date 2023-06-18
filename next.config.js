/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "cdn3.riastatic.com",
      },
      {
        hostname: "www.svgrepo.com",
      },
    ],
  },
};

module.exports = nextConfig;
