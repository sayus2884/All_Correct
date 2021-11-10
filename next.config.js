const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  images: {
    disableStaticImages: true,
  },
};

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig,
);

module.exports = config;
