const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@components': path.resolve(__dirname, 'src/components/fragments'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@images': path.resolve(__dirname, 'src/images'),
      '@illustrations': path.resolve(__dirname, 'src/components/vectors/illustrations'),
      '@fonts': path.resolve(__dirname, 'src/fonts')
    },
  };
	return config;
};