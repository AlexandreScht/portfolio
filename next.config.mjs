/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV !== 'production' ? false : true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  basePath: process.env.NODE_ENV !== 'production' ? '' : '/portfolio',
  assetPrefix: process.env.NODE_ENV !== 'production' ? '' : '/portfolio/',
  output: process.env.NODE_ENV !== 'production' ? undefined : 'export',
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
