/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['cms', 'components', 'pages', 'styles'],
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
