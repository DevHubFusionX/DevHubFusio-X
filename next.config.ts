import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Repository name is 'DevHubFusio-X'
  basePath: '/DevHubFusio-X',
};

export default nextConfig;
