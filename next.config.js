/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "my-e-app-bucket.s3.eu-north-1.amazonaws.com",
      "kaushalam-ecommerce.s3.eu-north-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
