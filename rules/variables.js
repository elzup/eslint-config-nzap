module.exports = {
	rules: {
		'init-declarations': 0,
		'no-delete-var': 0, // [strict]
		'no-label-var': 0,
		'no-restricted-globals': 2,
		'no-shadow': 0,
		'no-shadow-restricted-names': 2,
		'no-undef': 2,
		'no-undef-init': 0,
		'no-undefined': 0,
		'no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'no-use-before-define': 0,
	},
}
