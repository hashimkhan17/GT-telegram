/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BYPASS_TELEGRAM_AUTH: process.env.NEXT_PUBLIC_BYPASS_TELEGRAM_AUTH,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
