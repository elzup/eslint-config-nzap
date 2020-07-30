import * as m from './module'

const code = () => {
	// void
}
const codePromise = new Promise()
var x, y

// NG 'for-direction'
// eslint-disable-next-line for-direction
for (var i = 10; i >= 0; i++) {
	code()
}

// OK 'getter-return'
var _p = {
	get name() {
		'nicholas'
	},
}

// NG 'no-async-promise-executor
// eslint-disable-next-line no-async-promise-executor
const _foo = new Promise(async () => {
	code()
})

// OK 'no-await-in-loop'
async function _foo2(things) {
	const results = []

	for (const thing of things) {
		results.push(await codePromise(thing))
	}
}

// OK 'no-compare-neg-zero'
0 === -0

// NG 'no-cond-assign'
// prettier-ignore
// eslint-disable-next-line no-cond-assign
if (x = 0) {
	code()
}

// OK 'no-console'
console.log()

// OK 'no-constant-condition'
if (false) {
	code()
}

// NG 'no-control-regex'
// eslint-disable-next-line no-control-regex
var _pattern1 = /\x1f/

// OK 'no-debugger'
function _isTruthy() {
	debugger
}

// OK 'no-dupe-args'
// eslint-disable-next-line no-dupe-args
function _foo3(_a, _b, _a) {
	//
}

// NG 'no-dupe-else-if'
if (x === 0) {
	code()
} else if (x === 1) {
	code()
	// eslint-disable-next-line no-dupe-else-if
} else if (x === 1) {
	code()
}

// NG 'no-dupe-keys'
var _foo4 = {
	bar: 'baz',
	// eslint-disable-next-line no-dupe-keys
	bar: 'qux',
}
const x1 = { a: 1 }
const _y1 = { ...x1, a: 2 }

// NG 'no-duplicate-case'
switch (x) {
	case 1:
		break
	case 2:
		break
	// eslint-disable-next-line no-duplicate-case
	case 1: // duplicate test expression
		break
	default:
		break
}

// OK 'no-empty'
if (x) {
}

// OK 'no-empty-character-class'
;/^abc[]/.test('abcdefg') // false
'abcdefg'.match(/^abc[]/) // null

// OK 'no-ex-assign'
try {
	// code
} catch (e) {
	e = 10
	console.log(e)
}

// NG 'no-extra-boolean-cast'
// eslint-disable-next-line no-extra-boolean-cast
if (!!x) {
}

// NG 'no-extra-parens'
// eslint-disable-next-line no-extra-parens
// prettier-ignore
var _a = (4 * 10)

// OK no-extra-semi
// prettier-ignore
code();

// NG no-func-assign
function _foo5() {}
// eslint-disable-next-line no-func-assign
_foo5 = code

// NG no-import-assign
// eslint-disable-next-line no-import-assign
m = 10

// NG no-inner-declarations
function _foo6() {
	if (true) {
		// eslint-disable-next-line no-inner-declarations
		function _foo7() {}
	}
}

// NG no-invalid-regexp
// eslint-disable-next-line no-invalid-regexp
RegExp('[')

// OK no-irregular-whitespace
// prettier-ignore
'' +  ''

// OK no-loss-of-precision
9007199254740993

// OK no-misleading-character-class
var _b = /^[👍]$/

// OK no-obj-calls
var _math = new Math()

// NG no-promise-executor-return
new Promise((resolve, reject) => {
	if (x) {
		return null
	}

	code((err, result) => {
		if (err) {
			reject(err)
		} else {
			resolve(result)
		}
	})
})

new Promise((resolve, reject) =>
	code((err, data) => {
		if (err) {
			reject(err)
		} else {
			resolve(data)
		}
	})
)

new Promise(() => {
	return 1
})

// OK no-prototype-builtins
var foo

foo.hasOwnProperty('bar')

// OK no-regex-spaces
var _re = /foo   bar/

// OK no-setter-return
var foo = {
	set a(value) {
		this.val = value
		return value
	},
}

// NG no-sparse-arrays
// eslint-disable-next-line no-sparse-arrays
var _items = [,]
// eslint-disable-next-line no-sparse-arrays
var _colors = ['red', , 'blue']

// OK no-template-curly-in-string
var _s = 'Time: ${12 * 60 * 60 * 1000}'

// OK no-unexpected-multiline
// prettier-ignore
var foo = code
(1 || 2).baz()

// OK no-unreachable
function _fn() {
	x = 1
	return x
	x = 3 // this will never execute
}

// OK no-unreachable-loop
while (foo) {
	code(foo)
	foo = foo.parent
	break
}

// OK no-unsafe-finally
function _foo7() {
	try {
		return 1
	} catch (_e) {
		return 2
	} finally {
		return 3
	}
}

// NG no-unsafe-negation
// eslint-disable-next-line no-unsafe-negation
if (!y in x) {
}

// OK no-useless-backreference
;/^(?:(a)|\1b)$/ // reference to (a) into another alternative

// OK require-atomic-updates
let result

async function _foo8() {
	result = (await code) + result
	let tmp = await code

	result += tmp
	let _localVariable = 0

	_localVariable += await code
}

// NG use-isnan
// eslint-disable-next-line use-isnan
if (foo === NaN) {
}

// NG valid-typeof
// eslint-disable-next-line valid-typeof
typeof foo === 'strnig'
