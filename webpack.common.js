const { resolve } = require('path');

module.exports = {
  entry: {
    app: resolve('./src/App'),
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
};
