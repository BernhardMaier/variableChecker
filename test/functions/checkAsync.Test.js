'use strict';

const { assert } = require('assertthat');
const path = require('path');
const Schema = require('validate');
const { checkAsync } = require(path.resolve('./src/index'));

const condition_int = (i) => i > 10;
const condition_obj = (o) => o.username === 'xyz';
const schema = {
	check: obj => {
		return new Schema({
      username: {
        type: 'string',
        required: true,
        message: 'Error: "username" is missing!',
      },
      password: {
        type: 'string',
        required: true,
        message: 'Error: "password" is missing!',
      },
      ownMapping: {
        type: 'string',
        required: false,
      },
    }).validate(obj);
	},
};

describe('checkAsync...', () => {
  it('... is of type function', (done) => {
    assert.that(checkAsync).is.ofType('function');
    done();
  });

  it('... rejects error if variable is undefined (no variable name given)', (done) => {
    (async () => {
      try {
        await checkAsync(undefined);
      } catch (err) {
        assert.that(err).is.equalTo('Variable "" is undefined!');
        done();
      }
    })();
  });

  it('... rejects error if variable is undefined (variable name given)', (done) => {
    (async () => {
      try {
        await checkAsync(undefined, 'dummy');
      } catch (err) {
        assert.that(err).is.equalTo('Variable "dummy" is undefined!');
        done();
      }
    })();
  });

  it('... resolves success when variable is not undefined (no condition, no schema)', (done) => {
    (async () => {
      try {
        await checkAsync(15, 'dummy');
        done();
      } catch (err) {
        throw err;
      }
    })();
  });

  it('... rejects error if condition is not a function (no schema)', (done) => {
    (async () => {
      try {
        await checkAsync(10, 'dummy', { condition: 'This is not a function...' });
      } catch (err) {
        assert.that(err).is.equalTo('Given condition for "dummy" is not a function!');
        done();
      }
    })();
  });

  it('... rejects error if variable is not fulfilling condition (no schema)', (done) => {
    (async () => {
      try {
        await checkAsync(10, 'dummy', { condition: condition_int });
      } catch (err) {
        assert.that(err).is.equalTo('Variable "dummy" is invalid (not fulfilling condition)!');
        done();
      }
    })();
  });

  it('... resolves success when variable is fulfilling condition (no schema)', (done) => {
    (async () => {
      try {
        await checkAsync(15, 'dummy', { condition: condition_int });
        done();
      } catch (err) {
        throw err;
      }
    })();
  });

  it('... rejects error if schema has no check function (no condition)', (done) => {
    (async () => {
      try {
        await checkAsync(10, 'dummy', { schema: 'This is not a schema...' });
      } catch (err) {
        assert.that(err).is.equalTo('Given schema for "dummy" does not have a check function!');
        done();
      }
    })();
  });

  it('... rejects error if variable is invalid for schema (no condition)', (done) => {
    (async () => {
      try {
        await checkAsync({}, 'dummy', { schema });
      } catch (err) {
        assert.that(err).is.equalTo('Variable "dummy" is invalid: Error: "username" is missing!');
        done();
      }
    })();
  });

  it('... resolves success when variable is valid for schema (no condition)', (done) => {
    (async () => {
      try {
        await checkAsync({ username: 'xyz', password: '123' }, 'dummy', { schema });
        done();
      } catch (err) {
        throw err;
      }
    })();
  });

  it('... resolves success when variable is fulfilling condition and is valid for schema', (done) => {
    (async () => {
      try {
        await checkAsync({ username: 'xyz', password: '123' }, 'dummy', { condition: condition_obj, schema });
        done();
      } catch (err) {
        throw err;
      }
    })();
  });
});
