module.exports = {
  rules: {
    'for-direction': 2,
    'getter-return': 0,
    'no-async-promise-executor': 2,
    'no-await-in-loop': 0,
    'no-compare-neg-zero': 0,
    'no-cond-assign': 0, // [prettier]
    'no-console': 0,
    'no-constant-condition': 0,
    'no-control-regex': 2,
    'no-debugger': 0,
    // no-unused-var で気づく
    'no-dupe-args': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 0,
    'no-empty-character-class': 0,
    // 書く可能性が低い
    'no-ex-assign': 0,
    'no-extra-boolean-cast': 0,
    'no-extra-parens': 0, // [prettier]
    'no-extra-semi': 0, // [prettier]
    'no-func-assign': 2,
    'no-import-assign': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 0, // [prettier]
    // 重い
    'no-loss-of-precision': 0,
    'no-misleading-character-class': 0,
    'no-new-native-nonconstructor': 0,
    'no-obj-calls': 0,
    'no-promise-executor-return': 0,
    'no-prototype-builtins': 0,
    'no-regex-spaces': 0,
    'no-setter-return': 0,
    'no-sparse-arrays': 2,
    // ハイライトで気づく
    'no-template-curly-in-string': 0,
    'no-unexpected-multiline': 0, // [prettier]
    // エディタハイライトでわかる
    'no-unreachable': 0,
    'no-unreachable-loop': 0,
    'no-unsafe-finally': 0,
    'no-unsafe-negation': 2,
    'no-unsafe-optional-chaining': 2,
    'no-unused-private-class-members': 0,
    'no-useless-backreference': 0,
    // IDU: I don't understand
    'require-atomic-updates': 0,
    'use-isnan': 2,
    'valid-typeof': 2,
  },
}
