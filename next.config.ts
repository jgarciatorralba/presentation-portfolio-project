import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    testProxy: true,
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
