module.exports = {
	rules: {
		// stylistic-issues rules give priority to prettier

		// enforce line breaks after opening and before closing array brackets
		'array-bracket-newline': 0,
		// enforce spacing inside array brackets
		'array-bracket-spacing': 0,
		// enforce line breaks between array elements
		'array-element-newline': 0,
		// disallow or enforce spaces inside of single line blocks
		'block-spacing': 0,
		// enforce one true brace style
		'brace-style': [2, '1tbs', { allowSingleLine: true }],
		// require camel case names
		camelcase: 2,
		// enforce or disallow capitalization of the first letter of a comment
		'capitalized-comments': 0,
		// disallow trailing commas in object literals
		'comma-dangle': 0,
		// enforce spacing before and after comma
		'comma-spacing': 0,
		// enforce one true comma style
		'comma-style': 0,
		// require or disallow padding inside computed properties
		'computed-property-spacing': 0,
		// enforces consistent naming when capturing the current execution context
		'consistent-this': 0,
		/*
		 * enforce newline at the end of file, with no multiple empty lines
		 *  [editor cover]
		 */
		'eol-last': 0,
		//  [prettier cover]
		'func-call-spacing': 0,
		'func-name-matching': 0,
		/*
		 * require function expressions to have a name
		 *  [prettier cover]
		 */
		'func-names': 0,
		// enforces use of function declarations or expressions
		'func-style': 0,
		'function-call-argument-newline': 0,
		'function-paren-newline': 0,
		'id-denylist': 0,
		// this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		'id-length': 0,
		// require identifiers to match the provided regular expression
		'id-match': 0,
		'implicit-arrow-linebreak': 0,
		// this option sets a specific tab width for your code
		indent: [2, 2],
		// specify whether double or single quotes should be used in JSX attributes
		'jsx-quotes': 0,
		// enforces spacing between keys and values in object literal properties
		'key-spacing': 0,
		// 'key-spacing': [2, { beforeColon: false, afterColon: true }],
		'keyword-spacing': 0,
		// disallow mixed "LF" and "CRLF" as linebreaks
		'linebreak-style': 0,
		'line-comment-position': 0,
		// enforces empty lines around comments
		'lines-around-comment': 0,
		'lines-between-class-members': 0,
		// specify the maximum depth that blocks can be nested
		'max-depth': 0,
		// specify the maximum length of a line in your program
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
		// specify the maximum depth callbacks can be nested
		'max-nested-callbacks': 0,
		'max-params': 0,
		'max-statements': 0,
		'max-statements-per-line': 0,

		'multiline-comment-style': 0,
		'multiline-ternary': [2, 2],
		// require a capital letter for constructors
		'new-cap': 2,
		// disallow the omission of parentheses when invoking a constructor with no arguments
		'new-parens': 0,
		// allow/disallow an empty newline after var statement
		'newline-after-var': 2,
		// disallow use of the Array constructor
		'no-array-constructor': 2,
		// disallow use of bitwise operators
		'no-bitwise': 0,
		// disallow use of the continue statement
		'no-continue': 0,
		// disallow comments inline after code
		'no-inline-comments': 0,
		// disallow if as the only statement in an else block
		'no-lonely-if': 0,
		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 2,
		// disallow multiple empty lines
		'no-multiple-empty-lines': 0,
		// disallow negated conditions
		'no-negated-condition': 0,
		// disallow nested ternary expressions
		'no-nested-ternary': 0,
		// disallow use of the Object constructor
		'no-new-object': 0,
		// disallow use of unary operators, ++ and --
		'no-plusplus': 0,
		// disallow use of certain syntax in code
		'no-restricted-syntax': 0,
		// disallow space between function identifier and application
		'no-spaced-func': 2,
		// disallow the use of ternary operators
		'no-ternary': 0,
		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 2,
		// disallow dangling underscores in identifiers
		'no-underscore-dangle': 0,
		// disallow the use of Boolean literals in conditional expressions
		'no-unneeded-ternary': 0,
		// require or disallow padding inside curly braces
		'object-curly-spacing': [2, 'never'],
		// allow just one var statement per function
		'one-var': 0,
		// require assignment operator shorthand where possible or prohibit it entirely
		'operator-assignment': 0,
		// enforce operators to be placed before or after line breaks
		'operator-linebreak': [2, 'after'],
		// enforce padding within blocks
		'padded-blocks': 0,
		// require quotes around object literal property names
		'quote-props': 0,
		// specify whether double or single quotes should be used
		quotes: [2, 'single'],
		// Require JSDoc comment
		'require-jsdoc': 0,
		// enforce spacing before and after semicolons
		'semi-spacing': 0,
		// require or disallow use of semicolons instead of ASI
		semi: 2,
		// sort variables within the same declaration block
		'sort-vars': 0,
		// require a space before/after certain keywords
		'keyword-spacing': 0,
		// require or disallow space before blocks
		'space-before-blocks': [2, 'always'],
		// require or disallow space before function opening parenthesis
		'space-before-function-paren': [2, 'never'],
		// require or disallow spaces inside parentheses
		'space-in-parens': [2, 'never'],
		// require spaces around operators
		'space-infix-ops': 2,
		// Require or disallow spaces before/after unary operators
		'space-unary-ops': 0,
		// require or disallow a space immediately following the // or /* in a comment
		'spaced-comment': 0,
		// require regex literals to be wrapped in parentheses
		'wrap-regex': 0,
	},
}
