// next.config.js

const nextConfig = {
    images: {
      domains: [
        "res.cloudinary.com"
      ]
    },
  
    async rewrites() {
      return [
        {
          source: '/(.*)',
          destination: '/',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  