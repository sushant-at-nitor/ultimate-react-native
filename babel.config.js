const moduleResolver = [
  'module-resolver',
  {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.ios.js',
      '.android.js',
      '.ios.tsx',
      '.android.tsx',
      '.json',
    ],
    root: ['.'],
    alias: {
      locale: 'src/locale',
      common: 'src/common',
      services: 'src/services',
      modules: 'src/modules',
    },
  },
];

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
    plugins: [
      moduleResolver,
      'jsx-control-statements',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
    ],
  };
};
