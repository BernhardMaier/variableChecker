'use strict';

const { assert } = require('assertthat');
const path = require('path');
const variableChecker = require(path.resolve('./src/index'));

describe('variableChecker...', () => {
  it('... is of type function', (done) => {
    assert.that(variableChecker).is.ofType('function');
    done();
  });

  it('... rejects error if variable is undefined (no variable name given)', (done) => {
    (async () => {
      try {
        await variableChecker(undefined);
      } catch (err) {
        assert.that(err).is.equalTo('Variable "undefined" is undefined!');
        done();
      }
    })();
  });

  it('... rejects error if variable is undefined (variable name given)', (done) => {
    (async () => {
      try {
        await variableChecker(undefined, 'dummy');
      } catch (err) {
        assert.that(err).is.equalTo('Variable "dummy" is undefined!');
        done();
      }
    })();
  });

  it('... resolves success when variable is not undefined (no condition, no schema)', (done) => {
    (async () => {
      try {
        await variableChecker(15, 'dummy');
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
