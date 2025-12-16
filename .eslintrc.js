module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['react-native'],
      },
    ],
    'import/named': 'warn',
    'import/default': 'warn',
    'import/namespace': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['react-native'],
  },
};
