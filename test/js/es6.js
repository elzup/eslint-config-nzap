/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */

// ref1 'no-duplicate-imports'
// prettier-ignore
// eslint-disable-next-line import/no-duplicates
import { fuga } from 'module'
// eslint-disable-next-line import/no-duplicates
import { hoge } from 'module'

const func = () => {}
const obj = {}
const v = false

class Item {}

// OK 'arrow-body-style'
// OK 'arrow-parens'
// OK 'arrow-spacing'
// prettier-ignore
v=> 0

// NG 'constructor-super'
// class cSuper {
//   constructor() {
//     super() // This is a SyntaxError.
//   }
// }

// OK 'generator-star-spacing'
// prettier-ignore
function * generator() {}

// NG 'no-class-assign'
class A {}
// A = 0

// OK 'no-confusing-arrow'
// prettier-ignore
const ncArrow = a => 1 ? 2 : 3

// NG 'no-const-assign'
// const ncAssign = 0
// ncAssign = 1

// NG 'no-constant-binary-expression'
const ncbExpression = +0 === null

// NG 'no-dupe-class-members'
class NdcMembers {
  bar() {}
  // bar() {}
}

// OK 'no-duplicate-imports'
// ref1: file head

// OK 'no-new-symbol'
const nnSymbol = new Symbol('foo')

// OK 'no-restricted-exports'

// OK 'no-restricted-imports'

// OK 'no-this-before-super'
class NdbSuper extends Item {
  constructor() {
    // this.a = 0
    super()
  }
}

// OK 'no-useless-computed-key'
let nuck = { ['0']: 0, ['0+1,234']: 0 }

// OK 'no-useless-constructor'
class nuConstructor {
  constructor() {}
}

// OK 'no-useless-rename'
// ref2: file head
const { a: unRename } = { a: 1 }

// NG 'no-var'
// var nVar

// OK 'object-shorthand'
const oShorthand = {
  bar() {},
}

// OK 'prefer-arrow-callback'
func(function (a) {
  return a
}) // ERROR

// OK 'prefer-const'
let pConst = 0

// OK 'prefer-destructuring'
const pDestr = v[0]

// OK 'prefer-numeric-literals'
parseInt('111110111', 2) === 503

// OK 'prefer-object-has-own'
Object.prototype.hasOwnProperty.call(obj, 'a')

// OK 'prefer-rest-params'
function prParams() {
  func(arguments)
}

// OK 'prefer-spread'
func.apply(null, [1, 2])

// OK 'prefer-template'
const pTemplate = 'Time: ' + String(v)

// OK 'require-yield'
function* rYield() {
  return 10
}

// OK 'rest-spread-spacing'
// prettier-ignore
func(...[1, 2, 3])

// OK 'sort-imports'
// OK 'symbol-description'
const sDesc = Symbol() // prettier-ignore // OK 'template-curly-spacing'
`lint, ${100}!`

// OK 'yield-star-spacing'
function* ysSpacing() {
  // prettier-ignore
  yield * func()
}
