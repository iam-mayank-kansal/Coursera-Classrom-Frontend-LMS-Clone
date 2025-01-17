/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  trailingSlash: true,
  // images: {
  //   domains: ["localhost:3000"],
  // },
  images: { unoptimized: true },
};

export default nextConfig;
