module.exports = {
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
