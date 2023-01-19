const path = require('path');
const withTM = require('next-transpile-modules')(['gsap']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withTM();
