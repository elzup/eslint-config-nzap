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
cStyle2 = 2

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
new Object()

// OK 'no-plusplus'
let npp = 0

npp++

// OK 'no-restricted-syntax'

// OK 'no-tabs'
// prettier-ignore
var nTabs	 = 2

// OK 'no-ternary'
const nTernary = 0 ? 1 : 2

// NG 'no-trailing-spaces'

// OK 'no-underscore-dangle'
const __nud = 0

// OK 'no-unneeded-ternary'
const nuTernary = 1 ? true : false

// OK 'no-whitespace-before-property'
// prettier-ignore
obj. bar .baz

// OK 'nonblock-statement-body-position'
// prettier-ignore
if (v)
  func()

// OK 'object-curly-newline'
const ocNewline = {}

// OK 'object-curly-spacing'
const ocSpacing = { oc: true }

// OK 'object-property-newline'
const opNewline = { foo: 'foo', bar: 'bar', baz: 'baz' }

// OK 'one-var'
function ov() {
  var bar
  var baz
}

// OK 'one-var-declaration-per-line'
// prettier-ignore
var ovdp, ovdp2, ovdp3 = 0

// OK 'operator-assignment'
var oa = 1

oa = oa + 1

// NG 'operator-linebreak'
let ol

// prettier-ignore
ol = 1
+
2

// OK 'padded-blocks'
// prettier-ignore
if (v) {

	func()

}

// OK 'padding-line-between-statements'
function plbStatements() {
  func()
  return
}

// OK 'prefer-exponentiation-operator'
const peOperator = Math.pow(2, 8)

// OK 'prefer-object-spread'
Object.assign({}, obj)

// OK 'quote-props'
const qProps = {
  foo: 'bar',
  baz: 42,
}

// OK 'quotes'
const quotes = 'q'

// NG 'semi'
const semi = 'ESLint'

// OK 'semi-spacing'

// OK 'semi-style'
;[1, 2, 3]

// OK 'sort-keys'
const sKeys = { b: 2, c: 3, a: 1 }

// OK 'sort-vars'
var svs2, svs3, svs1

// OK 'space-before-blocks'
// prettier-ignore
if (v){
}

// OK 'space-before-function-paren'
function sbfParen() {}

// OK 'space-in-parens'
// prettier-ignore
func( 'bar');

// OK 'space-infix-ops'
// prettier-ignore
1+ 2

// OK 'space-unary-ops'
// prettier-ignore
void{foo: 0}

// OK 'spaced-comment'
/*s comment*/

// OK 'switch-colon-spacing'
// prettier-ignore
switch (v) {
	case 0 :break
}

// OK 'template-tag-spacing'
// prettier-ignore
func `Hello world`;

// OK 'unicode-bom'

// OK 'wrap-regex'
;/wr/.test('bar')
