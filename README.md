# Olympic ESLint Config

This config is the AirBnB base config (ES5 & ES6) with some exceptions.

## Usage

Install using npm:
```
npm install --save-dev eslint eslint-config-olympic eslint-config-airbnb-base eslint-plugin-import
```

Extend this config in your `.eslintrc`:
```
{
    "extends": "olympic",
}
```

## Deviations from AirBnB Style Guide

| Rule              | AirBnB Value                                   | Olympic Value                                  |
|-------------------|------------------------------------------------|------------------------------------------------|
| [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign) | 2, { props: true }                             | 0                                              |
| [indent](http://eslint.org/docs/rules/indent) | 2, 2, { SwitchCase: 1, VariableDeclarator: 1 } | 2, 4, { SwitchCase: 1, VariableDeclarator: 1 } |
| [func-names](http://eslint.org/docs/rules/func-names) | 1                                              | 0                                              |
| [no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary) | 2                                              | 0                                              |
| [one-var](http://eslint.org/docs/rules/one-var) | 2, 'never' | 0
| [one-var-declaration-per-line](http://eslint.org/docs/rules/one-var-declaration-per-line) | 2, 'always' | 0
