module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: { browser: true, node: true, es2021: true },
  extends: [
    './rules/possible-errors.js',
    './rules/best-practices.js',
    './rules/variables.js',
    './rules/node-common.js',
    './rules/stylistic-issues.js',
    './rules/es6.js',
    './import.js',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    strict: 0,
    'prettier/prettier': 1,
  },
}
