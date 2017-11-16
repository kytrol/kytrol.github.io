'use strict';

import webpackMerge from 'webpack-merge';
import commonConfig from './webpack/webpack.common';

const buildAddons = addonsArg => {
  const addons = [].concat(...[addonsArg]).filter(Boolean);

  return addons.map(addon => require(`./webpack/addons/webpack.${addon}.js`).default);
};

export default envOpts => {
  const { env, addons } = envOpts;
  const envConfig = require(`./webpack/webpack.${env}.js`).default;

  return webpackMerge(commonConfig(env), envConfig, ...buildAddons(addons));
};
