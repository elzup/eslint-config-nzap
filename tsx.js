module.exports = {
	extends: ['./typescript.js', './react.js'],
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
		'@typescript-eslint/naming-convention': [
			'error',
			{ selector: 'default', format: ['camelCase', 'PascalCase'] },
			{ selector: 'typeAlias', format: ['PascalCase'] },
			{ selector: 'property', format: null },
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase'], // React component のため
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},
		],
	},
}
