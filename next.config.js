/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.staffhunter.io/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
