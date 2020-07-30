# eslint-config-nzap

[![npm version](https://badge.fury.io/js/chch.svg)](https://badge.fury.io/js/eslint-config-nzap)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Policy

- Processing weight reduction
  - Fewer enabled rules
- Does not hinder development freedom

## Usage

```
npm i -D eslint-config-nzap
```

## Usage

.eslintrc

```
{
  "extends": "nzap"
}
```

### React

```
{
  "extends": ["nzap", "nzap/react"]
}
```

### TypeScript

```
{
  "extends": ["nzap", "nzap/typescript"]
}
```

## TypeScript x React

```
{
  "extends": ["nzap", "nzap/tsx"]
}
```

### jest

```
{
  "extends": ["nzap", "nzap/jest"]
}
```

### Thanks :tada:

based by [akameco/eslint\-config\-precure](https://github.com/akameco/eslint-config-precure)
