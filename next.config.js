/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify:true,
  optimizeFonts:true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"raw.githubusercontent.com"
      },
    ],
    minimumCacheTTL:1500000,
  },
};

module.exports = nextConfig
