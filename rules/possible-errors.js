module.exports = {
	rules: {
		// Enforce "for" loop update clause moving the counter in the right direction
		'for-direction': 2,
		// disallow return statement is not present in property getters
		'getter-return': 0,
		// disallow using an async function as a Promise executor
		'no-async-promise-executor': 2,
		// disallow await inside of loops
		'no-await-in-loop': 0,
		// disallow comparing against -0
		'no-compare-neg-zero': 0,
		// disallow assignment in conditional expressions
		// prettier により括弧つけられるので気づく
		'no-cond-assign': 2,
		// disallow use of console
		'no-console': 0,
		// disallow use of constant expressions in conditions
		'no-constant-condition': 0,
		// disallow control characters in regular expressions
		'no-control-regex': 2,
		// disallow use of debugger
		'no-debugger': 0,
		// disallow duplicate arguments in functions
		// no-unused-var で気づく
		'no-dupe-args': 2,
		// Disallow duplicate conditions
		'no-dupe-else-if': 2,
		// disallow duplicate keys when creating object literals
		'no-dupe-keys': 2,
		// disallow a duplicate case label.
		'no-duplicate-case': 2,
		// disallow empty statements
		'no-empty': 0,
		// disallow the use of empty character classes in regular expressions
		'no-empty-character-class': 0,
		// disallow assigning to the exception in a catch block
		// 書く可能性が低い
		'no-ex-assign': 0,
		// disallow double-negation boolean casts in a boolean context
		'no-extra-boolean-cast': 2,
		// disallow unnecessary parentheses
		'no-extra-parens': 2,
		// disallow unnecessary semicolons
		// prettier に委ねる
		'no-extra-semi': 0,
		// disallow overwriting functions written as function declarations
		'no-func-assign': 2,
		// disallow assigning to imported bindings
		'no-import-assign': 2,
		// disallow function or variable declarations in nested blocks
		'no-inner-declarations': [2, 'functions'],
		// disallow invalid regular expression strings in the RegExp constructor
		'no-invalid-regexp': 2,
		// disallow irregular whitespace outside of strings and comments
		'no-irregular-whitespace': 0,
		// disallow literal numbers that lose precision
		// 重い
		'no-loss-of-precision': 0,
		// disallow characters which are made with multiple code points in character class syntax
		'no-misleading-character-class': 0,
		// disallow the use of object properties of the global object (Math and JSON) as functions
		'no-obj-calls': 0,
		// disallow returning values from Promise executor functions
		// 'no-promise-executor-return': 0,
		// disallow use of Object.prototypes builtins directly
		'no-prototype-builtins': 0,
		// disallow multiple spaces in a regular expression literal
		'no-regex-spaces': 0,
		// disallow returning values from setters
		'no-setter-return': 0,
		// disallow sparse arrays
		'no-sparse-arrays': 2,
		// disallow template literal placeholder syntax in regular strings
		// ハイライトで気づく
		'no-template-curly-in-string': 0,
		// Avoid code that looks like two expressions but is actually one
		'no-unexpected-multiline': 0,
		// disallow unreachable statements after a return, throw, continue, or break statement
		// エディタハイライトでわかる
		'no-unreachable': 0,
		// disallow loops with a body that allows only one iteration
		// 'no-unreachable-loop': 0,
		// disallow control flow statements in `finally` blocks
		'no-unsafe-finally': 0,
		// disallow negating the left operand of relational operators
		'no-unsafe-negation': 2,
		// disallow useless backreferences in regular expressions
		'no-useless-backreference': 0,
		// disallow assignments that can lead to race conditions due to usage of await or yield
		'require-atomic-updates': 0,
		// disallow comparisons with the value NaN
		'use-isnan': 2,
		// ensure that the results of typeof are compared against a valid string
		'valid-typeof': 2,
	},
}
