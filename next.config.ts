/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: "/DevHubFusion-X",
  assetPrefix: "/DevHubFusion-X/",
};

export default nextConfig;
