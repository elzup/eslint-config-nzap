/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */

const func = () => {}
const obj = {}
var v = false

class Item {}

// OK 'init-declarations'
function iDec() {
	let bar
}

// OK 'no-delete-var'
var ndVar
// delete ndVar

// OK 'no-label-var'
v: if (v) {
}

// NG 'no-restricted-globals'
function nrGlobals() {
	console.log(event)
}

// OK 'no-shadow'
var ns = 3

function nShadow() {
	var ns = 10
}

// NG 'no-shadow-restricted-names'
// function NaN() {}

// NG 'no-undef'
// eslint-disable-next-line no-undef
nUndef

// OK 'no-undef-init'
const nuInit = undefined

// OK 'no-undefined'
const nUndefined = undefined

// NG 'no-unused-vars'
// const nuVars = 0
const _nuVars = 0

// OK 'no-use-before-define
nubDefine()
function nubDefine() {}
