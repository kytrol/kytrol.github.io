import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import { paths } from './util';

export default {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: [paths.build, paths.pug],
    watchContentBase: true,
    hot: true,
    inline: true,
    port: 3001,
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader?sourceMap' },
          { loader: 'css-loader?sourceMap' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
          { loader: 'sass-loader?sourceMap' },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
