'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./index.jsx'],
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1, // この下にある loader の数
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('cssnano')(),
              ],
            },
          },
        ]),
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
