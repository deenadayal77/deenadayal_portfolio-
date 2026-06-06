/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: false, formats: ['image/avif', 'image/webp'] },
  compress: true,
  poweredByHeader: false,
};
module.exports = nextConfig;
