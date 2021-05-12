'use strict';

module.exports = async (variable, variableName, schema) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        if (schema !== undefined) {
          if (typeof schema.check !== 'function') {
            return reject(`Given schema for "${variableName}" does not have a check function!`);
          }

          if (schema.check(variable)[0]) {
            return reject(`Variable "${variableName}" is invalid: ${schema.check(variable)[0].message}`);
          }
        }

        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });
};
