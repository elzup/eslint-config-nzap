module.exports = {
	rules: {
		// enforces getter/setter pairs in objects
		'accessor-pairs': 0,
		// enforces return statements in callbacks of array's methods
		'array-callback-return': 2,
		// treat var statements as if they were block scoped
		'block-scoped-var': 0,
		// enforce that class methods utilize `this`
		'class-methods-use-this': 0,
		// specify the maximum cyclomatic complexity allowed in a program
		complexity: 0,
		// require return statements to either always or never specify values
		'consistent-return': 2,
		// specify curly brace conventions for all control statements
		curly: 0,
		// require default case in switch statements
		'default-case': 0,
		// enforce default clauses in switch statements to be last
		'default-case-last': 0,
		// enforce default parameters to be last
		'default-param-last': 2,
		// enforces consistent newlines before or after dots
		'dot-location': 0,
		// encourages use of dot notation whenever possible
		'dot-notation': 0,
		// require the use of === and !==
		eqeqeq: 2,
		// require grouped accessor pairs in object literals and classes
		'grouped-accessor-pairs': 0,
		// make sure for-in loops have an if statement
		// IDU: I don't understand
		'guard-for-in': 0,
		// enforce a maximum number of classes per file
		'max-classes-per-file': 0,
		// disallow the use of alert, confirm, and prompt
		'no-alert': 0,
		// disallow use of arguments.caller or arguments.callee
		'no-caller': 0,
		// disallow lexical declarations in case clauses
		'no-case-declarations': 2,
		// disallow returning value in constructor
		'no-constructor-return': 0,
		// disallow division operators explicitly at beginning of regular expression
		'no-div-regex': 0,
		// disallow else after a return in an if
		'no-else-return': 0,
		// disallow empty functions
		'no-empty-function': 0,
		// disallow use of empty destructuring patterns
		'no-empty-pattern': 0,
		// disallow comparisons to null without a type-checking operator
		'no-eq-null': 0,
		// disallow use of eval()
		'no-eval': 2,
		// disallow adding to native types
		'no-extend-native': 2,
		// disallow unnecessary function binding
		'no-extra-bind': 0,
		// disallow Unnecessary Labels
		'no-extra-label': 0,
		// disallow fallthrough of case statements
		'no-fallthrough': 2,
		// disallow the use of leading or trailing decimal points in numeric literals
		'no-floating-decimal': 0,
		// disallow assignment to native objects or read-only global variables
		'no-global-assign': 2,
		// disallow the type conversions with shorter notations
		'no-implicit-coercion': 0,
		// disallow declarations in the global scope
		'no-implicit-globals': 0,
		// disallow use of eval()-like methods
		'no-implied-eval': 0,
		// disallow this keywords outside of classes or class-like objects
		'no-invalid-this': 2,
		// disallow usage of __iterator__ property
		'no-iterator': 2,
		// disallow use of labeled statements
		'no-labels': 0,
		// disallow unnecessary nested blocks
		'no-lone-blocks': 0,
		// disallow creation of functions within loops
		'no-loop-func': 0,
		// disallow the use of magic numbers
		'no-magic-numbers': 0,
		// disallow use of multiple spaces
		'no-multi-spaces': 0,
		// disallow use of multiline strings
		'no-multi-str': 0,
		// disallow new For Side Effects
		'no-new': 0,
		// disallow use of new operator for Function object
		'no-new-func': 0,
		// disallows creating new instances of String,Number, and Boolean
		'no-new-wrappers': 0,
		// disallow use of (old style) octal literals
		'no-octal': 0,
		// disallow use of octal escape sequences in string literals, such as
		'no-octal-escape': 0,
		// disallow reassignment of function parameters
		'no-param-reassign': 2,
		// disallow usage of __proto__ property
		'no-proto': 0,
		// disallow declaring the same variable more then once
		'no-redeclare': 2,
		// disallow certain object properties
		'no-restricted-properties': 0,
		// disallow use of assignment in return statement
		'no-return-assign': 0,
		// disallows unnecessary return await
		'no-return-await': 0,
		// disallow use of `javascript:` urls.
		'no-script-url': 0,
		// disallow Self Assignment
		'no-self-assign': 0,
		// disallow comparisons where both sides are exactly the same
		'no-self-compare': 0,
		// disallow use of comma operator
		'no-sequences': 0,
		// restrict what can be thrown as an exception
		'no-throw-literal': 0,
		// disallow unmodified conditions of loops
		'no-unmodified-loop-condition': 0,
		// disallow usage of expressions in statement position
		'no-unused-expressions': 1,
		// disallow Unused Labels
		'no-unused-labels': 0,
		// disallow unnecessary .call() and .apply()
		'no-useless-call': 0,
		// disallow unnecessary catch clauses
		'no-useless-catch': 0,
		// disallow unnecessary concatenation of literals or template literals
		'no-useless-concat': 0,
		// disallow unnecessary escape usage
		'no-useless-escape': 0,
		// disallow redundant return statements
		'no-useless-return': 0,
		// disallow use of void operator
		'no-void': 0,
		// disallow usage of configurable warning terms in comments: e.g. todo
		'no-warning-comments': 0,
		// disallow use of the with statement
		'no-with': 2,
		// suggest using named capture group in regular expression
		'prefer-named-capture-group': 0,
		// require using Error objects as Promise rejection reasons
		'prefer-promise-reject-errors': 0,
		// disallow use of the RegExp constructor in favor of regular expression literals
		'prefer-regex-literals': 0,
		// require use of the second argument for parseInt()
		radix: 0,
		// disallow async functions which have no await expression
		'require-await': 0,
		// enforce the use of u flag on RegExp
		'require-unicode-regexp': 0,
		// requires to declare all vars on top of their containing scope
		'vars-on-top': 0,
		// require immediate function invocation to be wrapped in parentheses
		'wrap-iife': 0,
		// require or disallow Yoda conditions
		yoda: 0,
	},
}
