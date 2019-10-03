module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	env: { browser: true, node: true, es6: true },
	extends: ['./rules/best-practices.js', './import.js', 'prettier'],
	plugins: ['prettier'],
	rules: {},
}
