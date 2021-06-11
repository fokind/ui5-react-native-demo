module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
  },
};
