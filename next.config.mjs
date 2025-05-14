/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV !== 'production' ? false : true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        pathname: '/images/**',
      },
    ],
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  output: process.env.NODE_ENV !== 'production' ? undefined : 'export',
  reactStrictMode: true,
};

export default nextConfig;
