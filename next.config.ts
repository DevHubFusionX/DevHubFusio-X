/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/DevHubFusion-X",
  assetPrefix: "/DevHubFusion-X/",
};

export default nextConfig;
