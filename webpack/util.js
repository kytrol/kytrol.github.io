import path from 'path';

const rootPath = path.join(__dirname, '..');
const src = path.join(rootPath, 'src');

export const paths = {
  src,
  build: path.join(rootPath, 'build'),
  pug: path.join(src, 'index.pug'),
  js: name => path.join('js', `${name}.js`),
  favicon: path.join('assets', 'img', 'favicon')
};

/**
 * Inserts asset's mimtype into options object.
 * @param  {String} mimetype  Mimetype of asset
 * @return {Object}           Options for loader
 */
const baseOpts = mimetype => ({
  context: src,
  name: '[path][name].[ext]',
  mimetype
});

/**
 * Applies correct options to an asset referenced in CSS file.
 * @param  {Boolean}  isProduction  Whether env is production or development
 * @return {Function}               Used to insert mimetype of asset into options
 */
export const cssAssetOpts = isProduction => mimetype => (
  Object.assign({}, baseOpts(mimetype), {
    publicPath: isProduction ? '../' : ''
  })
);

/**
 * Applies correct options to an asset referenced in HTML file.
 * @param  {String}  mimetype  Mimetype of asset
 * @return {Object}            Options for loader
 */
export const htmlAssetOpts = mimetype => Object.assign({}, baseOpts(mimetype), {
  publicPath: ''
});
