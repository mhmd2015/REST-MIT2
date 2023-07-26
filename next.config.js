/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {

    domains: ["restaurant-images-hadeel.s3.us-east-2.amazonaws.com"],
  },
  //output: 'export',
};

module.exports = nextConfig;
