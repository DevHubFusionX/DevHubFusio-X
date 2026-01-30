import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository is not at the root (e.g., username.github.io/repo-name/), 
  // uncomment the next line and replace 'repo-name' with your repository name:
  // basePath: '/repo-name',
};

export default nextConfig;
