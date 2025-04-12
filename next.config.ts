import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
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
