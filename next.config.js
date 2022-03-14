const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
});
