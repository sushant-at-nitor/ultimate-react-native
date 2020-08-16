const Config = require('./config');

module.exports = {
  modules: [Config.rootDirectory, 'node_modules'],
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  typescript: {
    project: Config.rootDirectory,
  },
  alias: {
    common: 'src/common',
    locale: 'src/locale',
    services: 'src/services',
    modules: 'src/modules',
  },
};
