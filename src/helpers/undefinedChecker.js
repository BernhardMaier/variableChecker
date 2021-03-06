'use strict';

module.exports = async (variable, variableName) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        if (variable === undefined) {
          return reject(`Variable "${variableName}" is undefined!`);
        }

        resolve();
      } catch (err) {
        reject(err);
      }
    })();
  });
};
