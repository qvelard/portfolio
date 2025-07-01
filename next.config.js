/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // If you are using Next.js 13 or later with static export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES ? '/portfolio' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/portfolio' : '',
};

module.exports = nextConfig;
