/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */

// OK '@typescript-eslint/no-import-type-side-effects'
import {} from 'react'

type Alice = 'alice'
type Bob = 'bob'

// NG '@typescript-eslint/adjacent-overload-signatures'
// NG '@typescript-eslint/array-type'
// OK '@typescript-eslint/await-thenable'
async function aThenable() {
  await 'value'
  const createValue = () => 'value'

  await createValue()
}
// OK '@typescript-eslint/ban-ts-comment'
// OK '@typescript-eslint/ban-tslint-comment'
// @ts-ignore
// tslint:disable-next-line
const banComent = 0

// OK '@typescript-eslint/ban-types'

type BanType = {}
const btNoop = () => {}

// OK '@typescript-eslint/class-literal-property-style'
class ClpStyle {
  readonly myField1 = 1
  readonly myField2 = `hello world`
  private readonly myField3 = 'hello world'
}

// OK '@typescript-eslint/consistent-indexed-object-style'
// OK '@typescript-eslint/consistent-type-assertions'
// OK '@typescript-eslint/consistent-type-definitions'
// OK '@typescript-eslint/consistent-type-imports'
// OK '@typescript-eslint/explicit-function-return-type'
// OK '@typescript-eslint/explicit-member-accessibility'
// OK '@typescript-eslint/explicit-module-boundary-types'
// OK '@typescript-eslint/member-delimiter-style'
// OK '@typescript-eslint/member-ordering'
// OK '@typescript-eslint/method-signature-style'
// OK '@typescript-eslint/naming-convention'
const nc = 0

function nConvention(_hoge: string) {}

// OK '@typescript-eslint/no-base-to-string'
// OK '@typescript-eslint/no-confusing-non-null-assertion'
// OK '@typescript-eslint/no-confusing-void-expression'
// OK '@typescript-eslint/no-dynamic-delete'
// OK '@typescript-eslint/no-empty-interface'
interface Nei {}
// OK '@typescript-eslint/no-explicit-any'
// OK '@typescript-eslint/no-extra-non-null-assertion'
// OK '@typescript-eslint/no-extraneous-class'
// OK '@typescript-eslint/no-floating-promises'
// OK '@typescript-eslint/no-for-in-array'

// OK '@typescript-eslint/no-implicit-any-catch'
// OK '@typescript-eslint/no-implied-eval'
// OK '@typescript-eslint/no-inferrable-types'
// OK '@typescript-eslint/no-invalid-void-type'
// OK '@typescript-eslint/no-misused-new'
// OK '@typescript-eslint/no-misused-promises'
// OK '@typescript-eslint/no-mixed-enums'
enum Status {
  Unknown,
  Closed = 1,
  Open = 'open',
}

// OK '@typescript-eslint/no-namespace'
// OK '@typescript-eslint/no-non-null-asserted-optional-chain'
// NG '@typescript-eslint/no-non-null-assertion'
const nnna = Math.random() > 0.5 ? '' : undefined
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const definitely = nnna!

// OK '@typescript-eslint/no-parameter-properties'
// OK '@typescript-eslint/no-require-imports'
// OK '@typescript-eslint/no-this-alias'
// OK '@typescript-eslint/no-throw-literal'
// OK '@typescript-eslint/no-type-alias'
// OK '@typescript-eslint/no-unnecessary-boolean-literal-compare'
// OK '@typescript-eslint/no-unnecessary-condition'
// OK '@typescript-eslint/no-unnecessary-qualifier'
// OK '@typescript-eslint/no-unnecessary-type-arguments'
// OK '@typescript-eslint/no-unnecessary-type-assertion'
// OK '@typescript-eslint/no-unnecessary-type-constraint'
// OK '@typescript-eslint/no-unsafe-assignment'
// OK '@typescript-eslint/no-unsafe-call'
// OK '@typescript-eslint/no-unsafe-declaration-merging'
// unreachable
// interface Nudm {}
// class Nudm {}
// OK '@typescript-eslint/no-unsafe-enum-comparison'
// OK '@typescript-eslint/no-unsafe-member-access'
// OK '@typescript-eslint/no-unsafe-return'
// OK '@typescript-eslint/no-var-requires'

// OK '@typescript-eslint/non-nullable-type-assertion-style'
// OK '@typescript-eslint/parameter-properties'
// OK '@typescript-eslint/prefer-as-const'
// OK '@typescript-eslint/prefer-enum-initializers'
// OK '@typescript-eslint/prefer-for-of'
// OK '@typescript-eslint/prefer-function-type'
// OK '@typescript-eslint/prefer-includes'
// OK '@typescript-eslint/prefer-literal-enum-member'
// OK '@typescript-eslint/prefer-namespace-keyword'
// OK '@typescript-eslint/prefer-nullish-coalescing'

function pnc(foo: string | null) {
  return false || 'a string'
}

// OK '@typescript-eslint/prefer-optional-chain'
// OK '@typescript-eslint/prefer-readonly'
// OK '@typescript-eslint/prefer-readonly-parameter-types'
// OK '@typescript-eslint/prefer-reduce-type-parameter'
// OK '@typescript-eslint/prefer-regexp-exec'
// OK '@typescript-eslint/prefer-string-starts-ends-with'
// OK '@typescript-eslint/prefer-ts-expect-error'
// OK '@typescript-eslint/promise-function-async'
// OK '@typescript-eslint/require-array-sort-compare'
// OK '@typescript-eslint/restrict-plus-operands'
// OK '@typescript-eslint/restrict-template-expressions'
// OK '@typescript-eslint/sort-type-constituents'
type Stc = 'b' | 'a'

// NG '@typescript-eslint/strict-boolean-expressions'

function sbEx(o0: object | null | undefined, o1?: object): number {
  if (o0) return 0
  return o1 ? 0 : 1
}

// OK '@typescript-eslint/switch-exhaustiveness-check'
// OK '@typescript-eslint/triple-slash-reference'
// OK '@typescript-eslint/type-annotation-spacing'
// OK '@typescript-eslint/typedef'
// OK '@typescript-eslint/unbound-method'
// OK '@typescript-eslint/unified-signatures'

// OK '@typescript-eslint/brace-style'
// OK '@typescript-eslint/comma-dangle'
// OK '@typescript-eslint/comma-spacing'
// OK '@typescript-eslint/consistent-generic-constructors'
// OK '@typescript-eslint/default-param-last'
// OK '@typescript-eslint/dot-notation'
// OK '@typescript-eslint/func-call-spacing'
// OK '@typescript-eslint/indent'
// OK '@typescript-eslint/init-declarations'
// OK '@typescript-eslint/keyword-spacing'
// OK '@typescript-eslint/lines-between-class-members'
// OK '@typescript-eslint/no-array-constructor'
// OK '@typescript-eslint/no-dupe-class-members'
// OK '@typescript-eslint/no-duplicate-enum-values
// OK '@typescript-eslint/no-duplicate-type-constituents'
type Tndtc = string | string | `A` | `A`

// OK '@typescript-eslint/no-duplicate-imports'
// OK '@typescript-eslint/no-empty-function'
// OK '@typescript-eslint/no-extra-parens'
// OK '@typescript-eslint/no-extra-semi'
// OK '@typescript-eslint/no-invalid-this'
// OK '@typescript-eslint/no-loop-func'
// OK '@typescript-eslint/no-loss-of-precision'
// OK '@typescript-eslint/no-magic-numbers'
// OK '@typescript-eslint/no-redeclare'
// OK '@typescript-eslint/no-shadow'
// OK '@typescript-eslint/no-unused-expressions'
// OK '@typescript-eslint/no-unused-vars'
// OK '@typescript-eslint/no-use-before-define'
// OK '@typescript-eslint/no-useless-constructor'
// OK '@typescript-eslint/quotes'
// OK '@typescript-eslint/require-await'
// OK '@typescript-eslint/return-await'
// OK '@typescript-eslint/semi'
// OK '@typescript-eslint/sort-type-union-intersection-members'
type Stuim = Bob | Alice

// OK '@typescript-eslint/space-before-function-paren'
// OK '@typescript-eslint/space-infix-ops'
