'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { paths, cssAssetOpts, htmlAssetOpts } = require('./util');

module.exports = (env) => {
  const isProduction = env === 'prod';
  const cssAsset = cssAssetOpts(isProduction);

  return {
    entry: path.join(paths.src, paths.js('script')),
    output: {
      filename: paths.js('bundle'),
      path: paths.build
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              ['env', {
                targets: {
                  ie: 11
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.woff2?$/,
        use: {
          loader: 'file-loader',
          options: cssAsset('application/font-[ext]')
        }
      },
      {
        test: /\.[ot]tf$/,
        use: {
          loader: 'file-loader',
          options: cssAsset('application/octet-stream')
        }
      },
      {
        test: /\.eot$/,
        use: {
          loader: 'file-loader',
          options: cssAsset('application/vnd.ms-fontobject')
        }
      },
      {
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: htmlAssetOpts('application/pdf')
        }
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader',
          options: htmlAssetOpts('image/svg+xml')
        },
        {
          loader: 'img-loader',
          options: {
            svgo: {
              plugins: [
                { removeUselessDefs: false },
                { cleanupIDs: false },
                { removeTitle: true },
                { removeDesc: true },
                { sortAttrs: true },
                { removeDimensions: true },
                { removeAttrs: { attrs: 'stroke.*' } }
              ]
            }
          }
        }]
      },
      {
        test: /\.png$/,
        use: [{
          loader: 'file-loader',
          options: htmlAssetOpts('image/png')
        },
        {
          loader: 'img-loader?minimize'
        }]
      },
      {
        test: /\.jpg$/,
        use: [{
          loader: 'file-loader',
          options: htmlAssetOpts('image/jpeg')
        },
        {
          loader: 'img-loader',
          options: {
            minimize: true,
            mozjpeg: {
              progressive: true,
              quality: 70
            }
          }
        }]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader?pretty=true'
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.pug,
        filename: isProduction ? '../index.html' : 'index.html',
        minify: false
      }),
      new webpack.ProvidePlugin({
        svg4everybody: 'imports-loader?this=>global!exports-loader?global.svg4everybody!svg4everybody'
      }),
      new webpack.ProgressPlugin(),
      new FaviconsWebpackPlugin({
        logo: path.join(paths.src, paths.favicon, 'trout.png'),
        prefix: path.join(paths.favicon, '/'),
        background: 'rgba(0, 0, 0, 0)',
        emitStats: false,
        inject: true,
        persistentCache: false,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      })
    ]
  };
};
