const path = require('path');

const rootDirectory = path.resolve(__dirname);
const sourceDirectory = path.resolve(rootDirectory, 'src');

module.exports = {
  buildEnvs: ['staging', 'test', 'preprod', 'demo', 'production'],
  rootDirectory,
  sourceDirectory,
};
