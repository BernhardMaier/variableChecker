'use strict';

const vc = require('../src/index.js');

(async () => {
  try {
    const i = 1;

    await vc.checkAsync(i, 'i');

    console.log('DONE'); // eslint-disable-line no-console
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
})();

