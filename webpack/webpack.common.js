import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import { paths } from './util';

/**
 * Inserts asset's mimtype into options object.
 * @param  {String} mimetype  Mimetype of asset
 * @return {Object}           Options for loader
 */
const baseOpts = mimetype => ({
  context: paths.src,
  name: '[path][name].[ext]',
  mimetype
});

/**
 * Applies correct options to an asset referenced in CSS file.
 * @param  {Boolean}  isProduction  Whether env is production or development
 * @return {Function}               Used to insert mimetype of asset into options
 */
const cssAssetOpts = isProduction => mimetype => (
  Object.assign({}, baseOpts(mimetype), {
    publicPath: isProduction ? '../' : ''
  })
);

export default env => {
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
        loader: 'babel-loader'
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
          options: baseOpts('application/pdf')
        }
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader',
          options: baseOpts('image/svg+xml')
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
          options: baseOpts('image/png')
        },
        {
          loader: 'img-loader?minimize'
        }]
      },
      {
        test: /\.jpg$/,
        use: [{
          loader: 'file-loader',
          options: baseOpts('image/jpeg')
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
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
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
