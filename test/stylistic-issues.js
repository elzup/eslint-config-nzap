/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */

const func = () => {}
const obj = {}
var v = false

class Item {}

// OK 'array-bracket-newline'
// prettier-ignore
const abNewline = [
	1,
	2
]

// OK 'array-bracket-spacing'
// prettier-ignore
const abSpacing = [ 'foo', 'bar' ]

// OK 'array-element-newline'
const aeNewline = [1, 2]

// OK 'block-spacing'
// prettier-ignore
const bSpacing = () => {return true}

// NG 'brace-style'
// if (v)
// {
// 	return
// }

// NG 'camelcase'
// const camel_case = ''

// OK 'capitalized-comments'
// lowercase comment

// OK 'comma-dangle'
// prettier-ignore
var cDangle = {
	bar: 'baz',
	qux: 'quux',
}

// OK 'comma-spacing'
// prettier-ignore
const cSpacing = [1 , 2]

// OK 'comma-style'
// prettier-ignore
const cStyle = 1
,
bar = 2

// OK 'computed-property-spacing'
// prettier-ignore
obj['a' ]

// OK 'consistent-this'
// eslint-disable-next-line no-invalid-this
var that = this

// OK 'eol-last'
// OK 'func-call-spacing'
// prettier-ignore
func ()

// OK 'func-name-matching'
const fnMatching = function fnMatching2() {}

// OK 'func-names'
const fNames = function () {}

// OK 'func-style'
function fStyle() {}

// OK 'function-call-argument-newline'
func('one', 'two', 'three')

// OK 'function-paren-newline'
const fpNewline = (a, b) => a + b

// OK 'id-denylist'
// OK 'id-length'
// OK 'id-match'

// OK 'implicit-arrow-linebreak'
;(ial) => v

// NG 'indent'
//   func()

// OK 'jsx-quotes'
const jQuotes = () => <a b="c" />

// OK 'key-spacing'
// prettier-ignore
const kSpacing = { foo : 42 }

// OK 'keyword-spacing'
// prettier-ignore
if (v) {
}else if (v + 1) {
}

// OK 'line-comment-position'
1 + 1 // invalid comment

// OK 'linebreak-style'
// OK 'lines-around-comment'
const lbStyle = 'long'
/* what a great and wonderful day */
const lbStyle2 = 'great'

// OK 'lines-between-class-members'
class LbcMembers {
	foo() {}
	bar() {}
}

// OK 'max-depth'
if (true) {
	if (true) {
		if (true) {
			if (true) {
				if (true) {
					if (true) {
						func()
					}
				}
			}
		}
	}
}

// OK 'max-len'
// prettier-ignore
const mLen = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };

// OK 'max-lines'
// prettier-ignore
var mLines1,
    mLines2,
		mLines3

// OK 'max-lines-per-function'
function mlpFunc() {
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
}

// OK 'max-nested-callbacks'
{
	const f = func

	f(() =>
		f(() =>
			f(() =>
				f(() =>
					f(() => f(() => f(() => f(() => f(() => f(() => f(() => 0)))))))
				)
			)
		)
	)
}

// OK 'max-params'
const mParams = (bar, baz, qux, qxx) => {}

// OK 'max-statements'
function mStatements() {
	const v1 = 0
	const v2 = 0
	const v3 = 0
	const v4 = 0
	const v5 = 0
	const v6 = 0
	const v7 = 0
	const v8 = 0
	const v9 = 0
	const v10 = 0
	const v11 = 0
}

// OK 'max-statements-per-line'
// prettier-ignore
if (v) { const mspl = 1 }

// OK 'multiline-comment-style'
// this line
// calls foo()
/* this line
calls foo() */

// OK 'multiline-ternary'
v > 10 ? 0 : 1

// NG 'new-cap'
// const nc = new nCap()

// OK 'new-parens'
// prettier-ignore
const np1 = new Item
// prettier-ignore
const np2 = new (Item)

// OK 'newline-per-chained-call'
const npcc = {
	chain() {
		return {
			map() {
				return {
					filter() {
						return {
							value() {},
						}
					},
				}
			},
		}
	},
}
const npcc2 = {
	chain: () => ({
		map: () => ({
			filter: () => ({
				value() {},
			}),
		}),
	}),
}

// prettier-ignore
npcc.chain({}).map(func).filter(func)
	.value()

// OK 'no-array-constructor'
new Array(1, 2)

// OK 'no-bitwise'
0 | ((1 & 1) ^ 1)

// OK 'no-continue'
while (false) {
	if (v) continue
}

// OK 'no-inline-comments'
func() // hoge

// OK 'no-lonely-if'
if (v) {
} else {
	if (v) {
	}
}

// OK 'no-mixed-operators'
const nmOperators = (0 && 1) || 2 || 3 === 0

// NG 'no-mixed-spaces-and-tabs'

// OK 'no-multi-assign'
var nma1
// prettier-ignore
var nma2 = nma1 = 5

// OK 'no-multiple-empty-lines'
// prettier-ignore
{



}

// OK 'no-negated-condition'
if (!v) {
} else {
}

// OK 'no-nested-ternary'
var nnt1, nnt2, nnt3
const nnt = nnt1 ? nnt2 : nnt3 === nnt1 ? nnt2 : nnt3

// OK 'no-new-object'
// OK 'no-plusplus'
// OK 'no-restricted-syntax'
// OK 'no-tabs'
// OK 'no-ternary'
// OK 'no-trailing-spaces'
// OK 'no-underscore-dangle'
// OK 'no-unneeded-ternary'
// OK 'no-whitespace-before-property'
// OK 'nonblock-statement-body-position'
// OK 'object-curly-newline'
// OK 'object-curly-spacing'
// OK 'object-property-newline'
// OK 'one-var'
// OK 'one-var-declaration-per-line'
// OK 'operator-assignment'
// NG 'operator-linebreak'
// OK 'padded-blocks'
// OK 'padding-line-between-statements'
// OK 'prefer-exponentiation-operator'
// OK 'prefer-object-spread'
// OK 'quote-props'
// OK 'quotes'
// NG 'semi'
// OK 'semi-spacing'
// OK 'semi-style'
// OK 'sort-keys'
// OK 'sort-vars'
// NG 'space-before-blocks'
// NG 'space-before-function-paren'
// NG 'space-in-parens'
// NG 'space-infix-ops'
// NG 'space-unary-ops'
// OK 'spaced-comment'
// OK 'wrap-regex'
