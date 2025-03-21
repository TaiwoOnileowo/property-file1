import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://property-file-blog.vercel.app",
      },
      {
        source: "/blog/:path*",
        destination: "https://property-file-blog.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
