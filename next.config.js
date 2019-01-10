const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  target: 'serverless'
};

module.exports = withPlugins([[withCSS]], nextConfig);
