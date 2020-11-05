// stylistic-issues rules give priority to prettier
module.exports = {
	rules: {
		'array-bracket-newline': 0,
		'array-bracket-spacing': 0,
		'array-element-newline': 0,
		'block-spacing': 0,
		'brace-style': [2, '1tbs', { allowSingleLine: true }],
		camelcase: 2,
		'capitalized-comments': 0,
		'comma-dangle': 0,
		'comma-spacing': 0,
		'comma-style': 0,
		'computed-property-spacing': 0,
		'consistent-this': 0,
		'eol-last': 0, // [editor]
		'func-call-spacing': 0, // [prettier]
		'func-name-matching': 0,
		'func-names': 0, // [prettier]
		'func-style': 0,
		'function-call-argument-newline': 0,
		'function-paren-newline': 0,
		'id-denylist': 0,
		'id-length': 0,
		'id-match': 0,
		'implicit-arrow-linebreak': 0,
		indent: [2, 2],
		'jsx-quotes': 0,
		'key-spacing': 0,
		// 'key-spacing': [2, { beforeColon: false, afterColon: true }],
		'keyword-spacing': 0,
		'linebreak-style': 0,
		'line-comment-position': 0,
		'lines-around-comment': 0,
		'lines-between-class-members': 0,
		'max-depth': 0,
		'max-len': [
			2,
			80,
			4,
			{
				ignoreComments: true,
				ignoreUrls: true,
				ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
			},
		],
		'max-lines': 0,
		'max-lines-per-function': 0,
		'max-nested-callbacks': 0,
		'max-params': 0,
		'max-statements': 0,
		'max-statements-per-line': 0,
		'multiline-comment-style': 0,
		'multiline-ternary': 0,
		'new-cap': 2,
		'new-parens': 0,
		'newline-after-var': 2,
		'no-array-constructor': 0,
		'no-bitwise': 0,
		'no-continue': 0,
		'no-inline-comments': 0,
		'no-lonely-if': 0,
		'no-mixed-operators': 0,
		'no-mixed-spaces-and-tabs': 2,
		'no-multi-assign': 0,
		'no-multiple-empty-lines': 0,
		'no-negated-condition': 0,
		'no-nested-ternary': 0,
		'no-new-object': 0,
		'no-plusplus': 0,
		'no-restricted-syntax': 0,
		'no-tabs': 0,
		'no-ternary': 0,
		'no-trailing-spaces': 2,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 0,
		'no-whitespace-before-property': 0,
		'nonblock-statement-body-position': 0,
		'object-curly-newline': 0,
		'object-curly-spacing': 0,
		'object-property-newline': 0,
		'one-var': 0,
		'one-var-declaration-per-line': 0,
		'operator-assignment': 0,
		'operator-linebreak': [2, 'after'],
		'padded-blocks': 0,
		'padding-line-between-statements': 0,
		'prefer-exponentiation-operator': 0,
		'prefer-object-spread': 0,
		'quote-props': 0,
		quotes: [2, 'single'],
		semi: 2,
		'semi-spacing': 0,
		'semi-style': 0,
		'sort-keys': 0,
		'sort-vars': 0,
		'space-before-blocks': 0,
		'space-before-function-paren': 0,
		'space-in-parens': 0,
		'space-infix-ops': 0,
		'space-unary-ops': 0,
		'spaced-comment': 0,
		'switch-colon-spacing': 0,
		'template-tag-spacing': 0,
		'unicode-bom': 0,
		'wrap-regex': 0,
	},
}
