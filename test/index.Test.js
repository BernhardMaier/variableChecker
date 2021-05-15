'use strict';

const { assert } = require('assertthat');
const fs = require('fs');
const path = require('path');
const index = require(path.resolve('./src/index'));
const functions = require(path.resolve('./src/functions'));

describe('index...', () => {
  it('... exports correct amount of functions (compared with export)', (done) => {
    const indexCount = Object.keys(index).length;
    const functionCount = Object.keys(functions).length;

    assert.that(indexCount).is.equalTo(functionCount);
    done();
  });

  it('... exports correct amount of functions (compared with files)', (done) => {
    const indexCount = Object.keys(index).length;
    const fileCount = fs.readdirSync(path.resolve('./src/functions')).length - 1;

    assert.that(indexCount).is.equalTo(fileCount);
    done();
  });

  it('... exports correct functions', (done) => {
    const indexKeys = Object.keys(index);
    const functionCount = Object.keys(functions);

    assert.that(indexKeys).is.equalTo(functionCount);
    done();
  });
});
