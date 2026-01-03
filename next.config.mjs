/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/webport',
  assetPrefix: '/webport/',
};

export default nextConfig;
