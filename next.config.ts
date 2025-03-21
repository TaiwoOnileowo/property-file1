import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://property-file-blog.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://property-file-blog.vercel.app/blog:path*",
      },
    ];
  },
};

export default nextConfig;
