const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new webpack.EnvironmentPlugin(['MAPBOX_TOKEN'])],
  stats: 'detailed',
});
