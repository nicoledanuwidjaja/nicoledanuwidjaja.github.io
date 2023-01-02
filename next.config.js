const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
        return config
    }
});