#!/usr/bin/env node
const bulkStrings = require('../index');

const args = require('minimist')(process.argv.slice(2), {
  string: ['file', 'format']
});

console.log(bulkStrings(args));
