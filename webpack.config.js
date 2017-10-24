'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

module.exports = (env) => (
  webpackMerge(commonConfig(env), require(`./webpack/webpack.${env}`))
);
