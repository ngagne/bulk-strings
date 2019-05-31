# bulk-strings

> A simple random bulk string generator. Useful for testing/benchmarking applications.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save bulk-strings
```

## Usage

Here are examples to generate 10 strings, 3-4 characters in length:

### JavaScript
```js
const bulkStrings = require('bulk-strings');

// generate 10 strings, 3-4 characters in length
bulkStrings({ total: 10, min: 3, max: 4 });
```

### CLI
```sh
$ bulk-strings --total 10 --min 3 --max 4
```

## Options
* `total` - The total number of strings to generate _(default: 100)_.
* `min` - The minimum length of each string _(default: 1)_.
* `max` - The maximum length of each string _(default: 10)_.
* `format` - The output format _(default: array)_. Valid options are:
    * `array` - JavaScript array
    * `csv` - Delimited string (useful with `separator` option)
    * `json` - JSON formatted string
* `separator` - Character(s) used to join the strings together (if `format` is `csv`) _(default: ,)_.
* `file` - A file path to write output to.