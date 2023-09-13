/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require('path');


module.exports = {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/app/components');
    return config;
  },
};