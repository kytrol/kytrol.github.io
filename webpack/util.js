const path = require('path');

const rootPath = path.join(__dirname, '..');
const src = path.join(rootPath, 'src');

exports.paths = {
  src,
  build: path.join(rootPath, 'build'),
  pug: path.join(src, 'index.pug'),
  js: name => path.join('js', `${name}.js`),
  favicon: path.join('assets', 'img', 'favicon')
};

const baseOpts = mimetype => ({
  context: src,
  name: '[path][name].[ext]',
  mimetype
});

exports.cssAssetOpts = isProduction => mimetype => (
  Object.assign({}, baseOpts(mimetype), {
    publicPath: isProduction ? '../' : ''
  })
);

exports.htmlAssetOpts = mimetype => Object.assign({}, baseOpts(mimetype), {
  publicPath: ''
});
