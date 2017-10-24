'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    publicPath: 'build/'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader?minimize'
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [autoprefixer()]
          }
        },
        {
          loader: 'sass-loader'
        }]
      })
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin(path.join('css', 'bundle.css'))
  ]
};
