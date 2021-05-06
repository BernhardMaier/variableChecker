'use strict';

module.exports = async (variable, variableName, condition) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        if (condition !== undefined && !condition(variable)) {
          reject(`Variable "${variableName}" is invalid (not passing condition)!`);
        }

        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });
};
