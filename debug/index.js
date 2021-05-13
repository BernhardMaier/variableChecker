'use strict';

const variablechecker = require('../src/index.js');

(async () => {
  try {
    const i = 1;

    await variablechecker(i, 'i');

    console.log('DONE'); // eslint-disable-line no-console
  } catch (err) {
    console.log('DONE'); // eslint-disable-line no-console
  }
})();

