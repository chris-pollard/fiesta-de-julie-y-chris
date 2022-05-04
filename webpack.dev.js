const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: '.',
  },

  plugins: [new Dotenv({
    path: './.env',
    safe: true,
  })],

});
