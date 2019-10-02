module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['prettier/@typescript-eslint', 'plugin:import/typescript'],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		// バージョンエラーを抑制
		warnOnUnsupportedTypeScriptVersion: false,
		sourceType: 'module',
		jsx: true,
		project: 'tsconfig.json',
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
	rules: {
		'no-console': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
}
