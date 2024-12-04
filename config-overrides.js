const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add polyfills
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "os": require.resolve("os-browserify"),
    "url": require.resolve("url"),
    "zlib": require.resolve("zlib-browserify"),
    "path": require.resolve("path-browserify"),
    "fs": false,
    "buffer": require.resolve("buffer/")
  };

  // Add plugins
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ];

  // Allow importing from outside src/
  config.resolve.plugins = config.resolve.plugins.filter(plugin => 
    !plugin.constructor.name.includes('ModuleScopePlugin')
  );

  return config;
} 