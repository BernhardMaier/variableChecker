'use strict';

const functions = require('./functions');
const functionExports = {};
const functionKeys = Object.keys(functions);
let functionKey;

for (let i = 0; i < functionKeys.length; i++) {
  functionKey = functionKeys[i];
  functionExports[functionKey] = functions[functionKey];
}

module.exports = functionExports;
