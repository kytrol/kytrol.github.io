'use_strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/js/script.js',
  output: {
    path: './build',
    filename: 'js/bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
          query: {
            configFile: './.eslintrc.js'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({ use: ['css-loader', 'postcss-loader', 'sass-loader'] })
      },
      {
        test: /\.woff$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            limit: 20000,
            mimetype: 'application/font-woff',
            context: __dirname + '/src/',
            publicPath: '../'
          }
        }
      },
      {
        test: /\.woff2$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            limit: 20000,
            mimetype: 'application/font-woff2',
            context: __dirname + '/src/'
          }
        }
      },
      {
        test: /\.[ot]tf$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            limit: 20000,
            mimetype: 'application/octet-stream',
            context: __dirname + '/src/'
          }
        }
      },
      {
        test: /\.eot$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            limit: 20000,
            mimetype: 'application/vnd.ms-fontobject',
            context: __dirname + '/src/'
          }
        }
      },
      {
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            mimetype: 'application/pdf',
            context: __dirname + '/src/'
          }
        }
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            limit: 20000,
            mimetype: 'image/svg+xml',
            context: __dirname + '/src/'
          }
          },
          { loader: 'img-loader?minimize' }
        ]
      },
      {
        test: /\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            mimetype: 'image/png',
            context: __dirname + '/src'
          }
          },
          {
            loader: 'img-loader?minimize'
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            mimetype: 'image/jpeg',
            context: __dirname + '/src'
          }
          },
          {
            loader: 'img-loader?minimize'
          }
        ]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader?pretty=true'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new ExtractTextPlugin('css/bundle.css'),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: '../index.html',
      minify: false,
    })
  ]
}
