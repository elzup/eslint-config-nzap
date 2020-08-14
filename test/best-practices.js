const boo = false
const foo = false
const func = () => {}
const obj = {}

// NG 'accessor-pairs'
// eslint-disable-next-line for-direction

var _o = {
	set a(value) {
		this.val = value
	},
}

// NG 'array-callback-return'
const myArray = []
const nodes = []
// eslint-disable-next-line array-callback-return
var indexMap = myArray.reduce(function (memo, item, index) {
	memo[item] = index
}, {})

// OK 'block-scoped-var'

function doIf() {
	if (true) var build = true

	console.log(build)
}

// OK 'class-methods-use-this'
class A {
	foo() {
		console.log(
			'Hello World'
		) /*error Expected 'this' to be used by class method 'foo'.*/
	}
}

// OK 'complexity'

function a(x) {
	if (true) return x
	else if (false) return x + 1
	else return 4 // 3rd path
}

// NG 'consistent-return'

// eslint-disable-next-line consistent-return
function _doSomething(condition) {
	if (condition) return true
}

// OK 'curly'

if (boo) console.log('')

// OK 'default-case'
switch (a) {
	case 1:
		/* code */
		break
}

// OK 'default-case-last'
switch (foo) {
	default:
		break
	case -1:
		func()
		break
}

// NG 'default-param-last'
// eslint-disable-next-line default-param-last
function f(a, b = 0, c) {}

// NG 'dot-location'
// prettier-ignore
var _foo = obj
.property

// OK 'dot-notation'
var x = foo['bar']

// NG 'eqeqeq'
var b = 10

// eslint-disable-next-line eqeqeq
if (10 == 42) {
}

// OK 'grouped-accessor-pairs'
var o = {
	get a() {
		return this.val
	},
	b: 1,
	set a(value) {
		this.val = value
	},
}

// OK 'guard-for-in'
for (var key in obj) {
	func(key)
}

// OK 'max-classes-per-file'
// OK 'no-alert'
// OK 'no-caller'
// OK 'no-case-declarations'
// OK 'no-constructor-return'
// OK 'no-div-regex'
// OK 'no-else-return'
// OK 'no-empty-function'
// OK 'no-empty-pattern'
// OK 'no-eq-null'
// OK 'no-eval'
// OK 'no-extend-native'
// OK 'no-extra-bind'
// OK 'no-extra-label'
// OK 'no-fallthrough'
// OK 'no-floating-decimal'
// OK 'no-global-assign'
// OK 'no-implicit-coercion'
// OK 'no-implicit-globals'
// OK 'no-implied-eval'
// OK 'no-invalid-this'
// OK 'no-iterator'
// OK 'no-labels'
// OK 'no-lone-blocks'
// OK 'no-loop-func'
// OK 'no-magic-numbers'
// OK 'no-multi-spaces'
// OK 'no-multi-str'
// OK 'no-new'
// OK 'no-new-func'
// OK 'no-new-wrappers'
// OK 'no-octal'
// OK 'no-octal-escape'
// OK 'no-param-reassign'
// OK 'no-proto'
// OK 'no-redeclare'
// OK 'no-restricted-properties'
// OK 'no-return-assign'
// OK 'no-return-await'
// OK 'no-script-url'
// OK 'no-self-assign'
// OK 'no-self-compare'
// OK 'no-sequences'
// OK 'no-throw-literal'
// OK 'no-unmodified-loop-condition'
// OK 'no-unused-expressions'
// OK 'no-unused-labels'
// OK 'no-useless-call'
// OK 'no-useless-catch'
// OK 'no-useless-concat'
// OK 'no-useless-escape'
// OK 'no-useless-return'
// OK 'no-void'
// OK 'no-warning-comments'
// OK 'no-with'
// OK 'prefer-named-capture-group'
// OK 'prefer-promise-reject-errors'
// OK 'prefer-regex-literals'
// OK 'radix'
// OK 'require-await'
// OK 'require-unicode-regexp'
// OK 'vars-on-top'
// OK 'wrap-iife'
// OK 'yoda'
