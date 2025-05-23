/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV !== 'production' ? false : true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  outputFileTracingIncludes: {
    'app/api/sendEmail/route': ['./public/template/contact.html'],
  },
  basePath: '/portfolio',
  assetPrefix: '',
};

export default nextConfig;
