'use strict';

const helpers = require('../helpers');

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

        await helpers.undefinedChecker(variable, variableName);
        await helpers.conditionChecker(variable, variableName, validation.condition);
        await helpers.schemaChecker(variable, variableName, validation.schema);

        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });
};
