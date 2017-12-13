import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleExtHtmlWebpackPlugin from 'style-ext-html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import { paths } from './util';

const critCssPath = paths.css('critical');

const criticalCss = new ExtractTextPlugin(critCssPath);
const externalCss = new ExtractTextPlugin(paths.css('bundle'));

const cssLoaderOpts = {
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
};

export default {
  output: {
    publicPath: paths.public
  },
  module: {
    rules: [{
      test: /critical\.scss/,
      exclude: /node_modules/,
      use: criticalCss.extract(cssLoaderOpts)
    },
    {
      test: /styles\.scss/,
      exclude: /node_modules/,
      use: externalCss.extract(cssLoaderOpts)
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    criticalCss,
    externalCss,
    new StyleExtHtmlWebpackPlugin(critCssPath)
  ]
};
