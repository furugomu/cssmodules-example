'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./index'],
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
            },
          },
        ]),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
