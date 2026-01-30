/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/DevHubFusio-X",
  assetPrefix: "/DevHubFusio-X/",
};

export default nextConfig;
