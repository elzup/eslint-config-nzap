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
// OK 'line-comment-position'
// OK 'linebreak-style'
// OK 'lines-around-comment'
// OK 'lines-between-class-members'
// OK 'max-depth'
// OK 'max-len'
// OK 'max-lines'
// OK 'max-lines-per-function'
// OK 'max-nested-callbacks'
// OK 'max-params'
// OK 'max-statements'
// OK 'max-statements-per-line'
// OK 'multiline-comment-style'
// OK 'multiline-ternary'
// OK 'new-cap'
// OK 'new-parens'
// OK 'newline-per-chained-call'
// OK 'no-array-constructor'
// OK 'no-bitwise'
// OK 'no-continue'
// OK 'no-inline-comments'
// OK 'no-lonely-if'
// OK 'no-mixed-operators'
// OK 'no-mixed-spaces-and-tabs'
// OK 'no-multi-assign'
// OK 'no-multiple-empty-lines'
// OK 'no-negated-condition'
// OK 'no-nested-ternary'
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
// OK 'operator-linebreak'
// OK 'padded-blocks'
// OK 'padding-line-between-statements'
// OK 'prefer-exponentiation-operator'
// OK 'prefer-object-spread'
// OK 'quote-props'
// OK 'quotes'
// OK 'semi'
// OK 'semi-spacing'
// OK 'semi-style'
// OK 'sort-keys'
// OK 'sort-vars'
// OK 'space-before-blocks'
// OK 'space-before-function-paren'
// OK 'space-in-parens'
// OK 'space-infix-ops'
// OK 'space-unary-ops'
// OK 'spaced-comment'
// OK 'switch-colon-spacing'
// OK 'template-tag-spacing'
// OK 'unicode-bom'
// OK 'wrap-regex'
