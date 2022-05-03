// NOTE: To use this example standalone (e.g. outside of repo)
// delete the local development overrides at the bottom of this file

// avoid destructuring for older Node version support
const { resolve } = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const config = [
  {
    mode: 'development',

    devServer: {
      static: '.',
    },

    entry: {
      app: resolve('./src/app'),
    },
    performance: { hints: false },
    output: {
      library: 'App',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: 'file-loader',
        },
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

      ],
    },
    plugins: [new Dotenv()],
  },
  {
    mode: 'production',
    performance: { hints: false },
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
          test: /\.(sa|sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: 'file-loader',
        },
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

      ],
    },
    plugins: [new Dotenv()],
  },
];

// Enables bundling against src in this repo rather than the installed version
module.exports = (env) => (env && env.local ? config[0] : config[1]);
