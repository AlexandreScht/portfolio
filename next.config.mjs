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
};

export default nextConfig;
