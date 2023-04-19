/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */

const func = () => {}
const obj = {}
const v = false

class Item {}

// OK 'accessor-pairs'
const aPairs = {
  set a(value) {
    this.val = value
  },
}

// NG 'array-callback-return'
const acr1 = []
// eslint-disable-next-line array-callback-return
// const acr2 = acr1.reduce((memo, item, index) => {
//   memo[item] = index
// }, {})

// OK 'block-scoped-var'
function bsVar() {
  if (true) var build = true

  func(build)
}

// OK 'class-methods-use-this'
class CmuThis {
  foo() {
    func(
      'Hello World'
    ) /*error Expected 'this' to be used by class method 'foo'.*/
  }
}

// OK 'complexity'
function complexity(x) {
  if (true) return x
  else if (false) return 2
  else return 4 // 3rd path
}

// OK 'consistent-return'
function cReturn(condition) {
  if (condition) return true
}

// OK 'curly'
if (true) func()

// OK 'default-case'
switch (v) {
  case 1:
    /* code */
    break
}

// OK 'default-case-last'
switch (v) {
  default:
    break
  case -1:
    func()
    break
}

// NG 'default-param-last'
// eslint-disable-next-line default-param-last
const dpLast = (a, b = 0, c) => {}

// OK 'dot-location'
// prettier-ignore
const dLocation = obj
.property

// OK 'dot-notation'
const dNotation = obj['bar']

// NG 'eqeqeq'
// eslint-disable-next-line eqeqeq
const eee = 10 == 42

// OK 'grouped-accessor-pairs'
const gaPairs = {
  get a() {
    return this.val
  },
  b: 1,
  set a(value) {
    this.val = value
  },
}

// NG 'guard-for-in'
// eslint-disable-next-line guard-for-in
// for (const key in obj) {
// }

// OK 'max-classes-per-file'
class McpFile1 {}
class McpFile2 {}

// OK 'no-alert'
if (false) alert()

// OK 'no-caller'
function nCaller(n) {
  if (n <= 0) return
  arguments.callee(n - 1)
}

// NG 'no-case-declarations'
switch (v) {
  case 1:
    // eslint-disable-next-line no-case-declarations
    let x = 1

    break
}

// OK 'no-constructor-return'
class NcReturn {
  constructor(a) {
    this.a = a
    return a
  }
}

// OK 'no-div-regex'
const reg2 = /[=]foo/

// OK 'no-else-return'
function neReturn() {
  if (v) {
    return 0
  } else {
    return 2
  }
}

// OK 'no-empty-function'
function neFunc() {}

// OK 'no-empty-static-block'
class Nesb {
  static {}
}

// OK 'no-empty-pattern'
const {} = obj

// OK 'no-eq-null'
const neNull = v === null

// NG 'no-eval'
// eslint-disable-next-line no-eval
eval('const a = 0')

// NG 'no-extend-native'
// eslint-disable-next-line no-extend-native
Object.prototype.a = 'a'
// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, 'times', { value: 999 })

// OK 'no-extra-bind'
const neBind = (() => {
  func()
}).bind(null)

// OK 'no-extra-label'
neLabel: while (v) {
  break neLabel
}

// NG 'no-fallthrough'
switch (v) {
  case 1:
    func()
  // eslint-disable-next-line no-fallthrough
  case 2:
    func()
}

// OK 'no-floating-decimal'
// prettier-ignore
const nfDecimal = .5

// NG 'no-global-assign'
// Object = null
// undefined = 1

// OK 'no-implicit-coercion'
const niCoercion = !!v

// OK 'no-implicit-globals'
const niGlobals = 1

// OK 'no-implied-eval'
setTimeout("niEval = 'Hi!'", 100)

// NG 'no-invalid-this'
// eslint-disable-next-line no-invalid-this
this.niThis = 0

// NG 'no-iterator'
// eslint-disable-next-line no-iterator
obj.__iterator__ = function () {}

// OK 'no-labels'
noLabel: if (true) {
}

// OK 'no-lone-blocks'
{
  func()
}

// OK 'no-loop-func'
for (let i = 10; i; i--) {
  ;(() => i)()
}

// OK 'no-magic-numbers'
const nmNum = 100,
  nmNum2 = nmNum + nmNum * 0.25

// OK 'no-multi-spaces'
// prettier-ignore
if(v   === "bar") {}

// OK 'no-multi-str'
const nmStr =
  'Line 1 \
Line 2'

// OK 'no-new'
new Item()

// OK 'no-new-func'
var nnFunc = Function('a', 'b', 'return a + b')

// OK 'no-new-wrappers'
var nnWraps = new String('hello')

// OK 'no-nonoctal-decimal-escape'
// "\8"

// OK 'no-octal'
// var nOct = 071

// OK 'no-octal-escape'
// var noEsc = 'Copyright \251'

// NG 'no-param-reassign'
function npReassign(bar) {
  // eslint-disable-next-line no-param-reassign
  bar++
}

// OK 'no-proto'
const nProto = {}

func(nProto.__proto__)

// OK 'no-redeclare'
var nRedec = 0

{
  // eslint-disable-next-line no-redeclare
  var nRedec = 0
}

// OK 'no-restricted-properties'
var nrProperties = { foo: 0 }

nrProperties.foo

// OK 'no-return-assign'
var nra = 0
const nrAssign = () => (nra = 1)

// OK 'no-return-await'
async function nrAwait() {
  return await nrAwait()
}

// OK 'no-script-url'
location.href = 'javascript:void(0)'

// OK 'no-self-assign'
let nsa = 0

nsa = nsa

// OK 'no-self-compare'
const nsComp = v === v

// OK 'no-sequences'
0, 1

// OK 'no-throw-literal'
throw 0

// OK 'no-unmodified-loop-condition'
while (v) {}

// NG 'no-unused-expressions'
0

// OK 'no-unused-labels'
nuLabel: {
}

// OK 'no-useless-call'
func.call(undefined, 1, 2, 3)

// OK 'no-useless-catch'
try {
} catch (e) {
  throw e
}

// OK 'no-useless-concat'
;`no-use` + `less-concat`

// OK 'no-useless-escape'
// ;"\'"

// OK 'no-useless-return'
function nuReturn() {
  return
}

// OK 'no-void'
const nVoid = () => void 0

// OK 'no-warning-comments'
// FIXME: NoWarningComments

// NG 'no-with'
// with (nWIth) {
// 	func(a)
// }

// OK 'prefer-named-capture-group'
const pncGroup = /(ba[rz])/

pncGroup.exec('bar')[1]

// OK 'prefer-promise-reject-errors'
Promise.reject(0)

// OK 'prefer-regex-literals'
new RegExp('abc')

// OK 'radix'
parseInt('077')

// OK 'require-await'
async function requireAwait() {
  func()
}

// OK 'require-unicode-regexp'
const ruRexep = /aaa/

// OK 'vars-on-top'
function varsOnTop() {
  var first

  first = true
  var second
}

// OK 'wrap-iife'
const wIife = (function () {
  return { y: 1 }
})()

// OK 'yoda'
if ('yd' === obj) {
}
