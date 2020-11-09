const _nuVars = 0

const func = (v: unknown) => {
  console.log(v)
}

type NoUnusedVars = {
  func: () => void
  plus: (a: number, b: number) => number
}

const t: NoUnusedVars = {
  func: () => {},
  plus: (a, b) => a + b,
}

func(t)
