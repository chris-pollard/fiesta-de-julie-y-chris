// NOTE: To use this example standalone (e.g. outside of repo)
// delete the local development overrides at the bottom of this file

// avoid destructuring for older Node version support
const { resolve } = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const config = {
  mode: 'development',

  devServer: {
    static: '.',
  },

  entry: {
    app: resolve('./src/app'),
  },

  output: {
    library: 'App',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [resolve('.')],
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]', outputPath: 'fonts/' },
      },
    ],
  },

  // Optional: Enables reading mapbox token from environment variable
  plugins: [new webpack.EnvironmentPlugin({ MapboxAccessToken: '' }), new Dotenv()],
};

// Enables bundling against src in this repo rather than the installed version
module.exports = (env) => (env && env.local ? require('../webpack.config.local')(config)(env) : config);
