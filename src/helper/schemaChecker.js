'use strict';

module.exports = async (variable, variableName, schema) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        if (schema !== undefined && schema.check(variable)[0]) {
          reject(`Variable "${variableName}" is invalid: ${schema.check(variable)[0].message}`);
        }

        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });
};
