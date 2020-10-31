/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */

import * as m from './module'

const func = () => {}
const p = new Promise()
const obj = {}

let v = false

// NG 'for-direction'
// eslint-disable-next-line for-direction
for (let i = 10; i >= 0; i++) {
	func()
}

// OK 'getter-return'
const gReturn = {
	get name() {
		'nicholas'
	},
}

// NG 'no-async-promise-executor
// eslint-disable-next-line no-async-promise-executor
const napExector = new Promise(async () => {
	func()
})

// OK 'no-await-in-loop'
async function naiLoop(things) {
	const results = []

	for (const thing of things) {
		results.push(await p(thing))
	}
}

// OK 'no-compare-neg-zero'
0 === -0

// OK 'no-cond-assign'
// prettier-ignore
if (v = 0) {
	func()
}

// OK 'no-console'
console.log()

// OK 'no-constant-condition'
if (false) {
	func()
}

// NG 'no-control-regex'
// eslint-disable-next-line no-control-regex
var ncRegex = /\x1f/

// OK 'no-debugger'
const nDebugger = () => {
	debugger
}

// NG 'no-dupe-args'
// eslint-disable-next-line no-redeclare, no-dupe-args
const ndArgs = (_a, _b, _a) => {}

// NG 'no-dupe-else-if'
if (v === 0) {
} else if (v === 1) {
	// eslint-disable-next-line no-dupe-else-if
} else if (v === 1) {
}

// NG 'no-dupe-keys'
var ndKeys = {
	bar: 'baz',
	// eslint-disable-next-line no-dupe-keys
	bar: 'qux',
}

// NG 'no-duplicate-case'
switch (v) {
	case 2:
		break
	// eslint-disable-next-line no-duplicate-case
	case 1: // duplicate test expression
		break
}

// OK 'no-empty'
const nEmpty = () => {}

// OK 'no-empty-character-class'
;/^abc[]/.test('abcdefg') // false
'abcdefg'.match(/^abc[]/) // null

// OK 'no-ex-assign'
try {
} catch (e) {
	e = 10
}

// OK 'no-extra-boolean-cast'
if (!!v) {
}

// OK 'no-extra-parens'
// prettier-ignore
var neParens = (4 * 10)

// OK no-extra-semi
// prettier-ignore
func();

// NG no-func-assign
function nfAssign() {}
// eslint-disable-next-line no-func-assign
nfAssign = func

// NG no-import-assign
// m = 100

// NG no-inner-declarations
function niDeclera() {
	if (true) {
		// eslint-disable-next-line no-inner-declarations
		function niDeclera2() {}
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
const nmcClass = /^[👍]$/

// OK no-obj-calls
const noCalls = new Math()

// OK no-promise-executor-return
new Promise(() => {
	return 1
})

// OK no-prototype-builtins
obj.hasOwnProperty('bar')

// OK no-regex-spaces
const neSpaces = /l   r/

// OK no-setter-return
const nsReturn = {
	set a(value) {
		this.val = value
		return value
	},
}

// NG no-sparse-arrays
// eslint-disable-next-line no-sparse-arrays
const nsArrays = [, 'red', , 'blue']

// OK no-template-curly-in-string
const ntciString = 'Time: ${12 * 60 * 60 * 1000}'

// OK no-unexpected-multiline
// prettier-ignore
const nuMultiline = func
(1 || 2).baz()

// OK no-unreachable
function nUnreachable() {
	v = 1
	return v
	v = 3 // this will never execute
}

// OK no-unreachable-loop
while (v) {
	func(v)
	v = v.parent
	break
}

// OK no-unsafe-finally
function nuFinally() {
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
if (!0 in v) {
}

// OK no-useless-backreference
;/^(?:(a)|\1b)$/ // reference to (a) into another alternative

// OK require-atomic-updates
let rau

async function raUpdates() {
	rau = (await p) + rau
	let tmp = await p

	rau += tmp
	let _localVariable = 0

	_localVariable += await p
}

// NG use-isnan
// eslint-disable-next-line use-isnan
if (v === NaN) {
}

// NG valid-typeof
// eslint-disable-next-line valid-typeof
typeof v === 'strnig'
