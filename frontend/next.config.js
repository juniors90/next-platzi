/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
    /*basePath: '/dist',*/
    compress: true,

  },
}

module.exports = nextConfig
