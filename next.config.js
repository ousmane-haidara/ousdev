/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  enableSvg: true,
  webpack(config) {
    return config;
  }
}

module.exports = withFonts(nextConfig);
