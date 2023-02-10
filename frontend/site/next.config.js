/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withOptimizedImages = require("next-optimized-images");
module.exports = withOptimizedImages({});

module.exports = nextConfig;
