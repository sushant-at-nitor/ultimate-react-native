const resolver = require('./resolver');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsx-control-statements/recommended',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
    'jsx-control-statements/jsx-control-statements': true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: resolver,
      typescript: {},
    },
  },
  plugins: [
    'react',
    'flowtype',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'jsx-control-statements',
    '@react-native-community',
  ],
  rules: {
    // typescrit rules
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/naming-convention': 0,
    camelcase: 1,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'jsx-control-statements/jsx-jcs-no-undef': 2,
    'newline-before-return': 2,
    'react/prop-types': 1,
    'no-unused-expressions': 1,
    'import/no-named-as-default': 0,
    'class-methods-use-this': 1,
    'no-nested-ternary': 0,
    'react/require-default-props': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/prefer-stateless-function': 1,
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],

    'react/forbid-prop-types': [
      0,
      {
        forbid: [],
      },
    ],
    'import/extensions': [
      1,
      'never',
      {
        svg: 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
