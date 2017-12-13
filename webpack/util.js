import path from 'path';

const rootDir = path.join(__dirname, '..');
const src = path.join(rootDir, 'src');

export const paths = {
  build: path.join(rootDir, 'build'),
  css: name => path.join('css', `${name}.css`),
  favicon: path.join('assets', 'img', 'favicon'),
  js: name => path.join('js', `${name}.js`),
  public: path.join('build', '/'),
  pug: path.join(src, 'index.pug'),
  src
};
