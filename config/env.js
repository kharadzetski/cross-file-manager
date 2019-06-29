const path = require('path');

const root = path.resolve('./');
const srcDir = `${root}/src`;
const mainPath = `${srcDir}/main`;
const target = `${root}/dist`;
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

module.exports = {
  mainPath,
  target,
  mode,
  isDev
};
