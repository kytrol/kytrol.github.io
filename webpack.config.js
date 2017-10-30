'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

const buildAddons = (addonsArg) => {
  const addons = [].concat(...[addonsArg]).filter(Boolean);

  return addons.map(addon => require(`./webpack/addons/webpack.${addon}.js`));
};

module.exports = (envOpts) => {
  const { env, addons } = envOpts;
  const envConfig = require(`./webpack/webpack.${env}.js`);

  return webpackMerge(commonConfig(env), envConfig, ...buildAddons(addons));
};
