'use strict';

const path = require('path');
const helper = require(path.resolve('./src/helper'));

module.exports = async (variable, variableName, validation) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        if (!variableName) {
          variableName = '';
        }

        if (!validation) {
          validation = {};
        }

        await helper.undefinedChecker(variable, variableName);
        await helper.conditionChecker(variable, variableName, validation.condition);
        await helper.schemaChecker(variable, variableName, validation.schema);

        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });
};
