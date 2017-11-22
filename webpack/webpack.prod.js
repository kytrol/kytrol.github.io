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
    publicPath: 'build/'
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
    new webpack.optimize.UglifyJsPlugin(),
    criticalCss,
    externalCss,
    // NOTE: Due to a bug in style-ext-html-webpack-plugin, a <link> is generated
    // for the internal styles. Awaiting fix, for now there is a 404 in the browser.
    new StyleExtHtmlWebpackPlugin(critCssPath)
  ]
};
