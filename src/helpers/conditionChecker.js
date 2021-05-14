'use strict';

module.exports = async (variable, variableName, condition) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        if (condition !== undefined) {
          if (typeof condition !== 'function') {
            return reject(`Given condition for "${variableName}" is not a function!`);
          }

          if (!condition(variable)) {
            return reject(`Variable "${variableName}" is invalid (not fulfilling condition)!`);
          }
        }

        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });
};
