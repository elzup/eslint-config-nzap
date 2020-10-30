/* eslint-disable no-unused-vars */

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
class _Foo {}
class _Bar {}

// OK 'no-alert'
alert()

// OK 'no-caller'

function _foo2(n) {
	if (n <= 0) {
		return
	}

	arguments.callee(n - 1)
}

// NG 'no-case-declarations'

switch (foo) {
	case 1:
		// eslint-disable-next-line no-case-declarations
		let x = 1

		break
	case 2:
		// eslint-disable-next-line no-case-declarations
		const y = 2

		break
}

// OK 'no-constructor-return'
class _A {
	constructor(a) {
		this.a = a
		return a
	}
}

// OK 'no-div-regex'
const reg2 = /[=]foo/

// OK 'no-else-return'
function _foo3() {
	if (x) {
		return 0
	} else {
		return 2
	}
}

// OK 'no-empty-function'
function _foo4() {}

// OK 'no-empty-pattern'
var {} = obj

// OK 'no-eq-null'
// eslint-disable-next-line eqeqeq
const res = foo == null

// NG 'no-eval'
// eslint-disable-next-line no-eval
var foo2 = eval

foo2('var a = 0')

// NG 'no-extend-native'
// eslint-disable-next-line no-extend-native
Object.prototype.a = 'a'
// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, 'times', { value: 999 })

// OK 'no-extra-bind'
var noExtraBind = function () {
	foo()
}

// OK 'no-extra-label'
A: while (a) {
	break A
}

// NG 'no-fallthrough'
switch (foo) {
	case 1:
		console.log()
	// eslint-disable-next-line no-fallthrough
	case 2:
		console.log()
}

// OK 'no-floating-decimal'
// prettier-ignore
var num = .5

// NG 'no-global-assign'
// eslint-disable-next-line no-global-assign
Object = null
// eslint-disable-next-line no-global-assign
undefined = 1

// OK 'no-implicit-coercion'
var noImplicitCoercion = !!foo

// OK 'no-implicit-globals'
var foo5 = 1

// OK 'no-implied-eval'
setTimeout("alert('Hi!');", 100)

// NG 'no-invalid-this'
// eslint-disable-next-line no-invalid-this
this.a = 0

// NG 'no-iterator'
// eslint-disable-next-line no-iterator
foo.__iterator__ = function () {}

// OK 'no-labels'

label: if (true) {
}

// OK 'no-lone-blocks'
{
	aLabel: {
	}
}

// OK 'no-loop-func'
var i = 10

while (i) {
	var noLoopFunc = function () {
		return i
	}

	noLoopFunc()
}

// OK 'no-magic-numbers'
var dutyFreePrice = 100,
	_finalPrice = dutyFreePrice + dutyFreePrice * 0.25

// OK 'no-multi-spaces'
// prettier-ignore
if(foo   === "bar") {}

// OK 'no-multi-str'
var noMultiStr = 'Line 1 \
Line 2'

// OK 'no-new'
new A()

// OK 'no-new-func'
var noNewFunc = Function('a', 'b', 'return a + b')

// OK 'no-new-wrappers'
// var stringObject = new String('Hello world')
var stringObject = 'Hello world'

// OK 'no-octal'
// var num = 071

// OK 'no-octal-escape'
// var _foo = 'Copyright \251'

// NG 'no-param-reassign'
function _foo8(bar) {
	// eslint-disable-next-line no-param-reassign
	bar++
}

// OK 'no-proto'
const noProto = {}

func(noProto.__proto__)

// OK 'no-redeclare'
var noRedeclare = 0
// eslint-disable-next-line no-redeclare
var noRedeclare = 0

// OK 'no-restricted-properties'
var noRestrictedProperties = { foo: 0 }

func(noRestrictedProperties.foo)

// OK 'no-return-assign'
var nra = 0
const noReturnAssign = () => (nra = 1)

// OK 'no-return-await'
async function noReturnAwait() {
	return await noReturnAwait()
}

// OK 'no-script-url'
location.href = 'javascript:void(0)'

// OK 'no-self-assign'
let nsa = 0

nsa = nsa

// OK 'no-self-compare'
const nsComp = 10

func(nsComp === nsComp)

// OK 'no-sequences'
0, 1

// OK 'no-throw-literal'
throw 0

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
