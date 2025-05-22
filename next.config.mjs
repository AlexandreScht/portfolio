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
  webpack(cfg) {
    cfg.module.rules.push({ test: /\.html$/, loader: 'raw-loader' });
    return cfg;
  },
  basePath: '/portfolio',
  assetPrefix: '',
};

export default nextConfig;
