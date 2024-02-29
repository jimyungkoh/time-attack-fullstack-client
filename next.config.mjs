/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "time-attack.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
