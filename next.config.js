/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {

    domains: ["restaurant-images-hadeel.s3.us-east-2.amazonaws.com"],
  },
  
};

module.exports = nextConfig;
