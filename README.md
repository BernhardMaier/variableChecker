# Pipeline status

- ![ci_main](https://github.com/BernhardMaier/variableChecker/actions/workflows/ci.yml/badge.svg?branch=main)
- ![cd_main](https://github.com/BernhardMaier/variableChecker/actions/workflows/cd.yml/badge.svg?branch=main)
- ![code_analysis](https://github.com/BernhardMaier/variableChecker/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)
- [![CircleCI](https://circleci.com/gh/BernhardMaier/variableChecker.svg?style=shield)](https://app.circleci.com/pipelines/github/BernhardMaier/variableChecker)

# variableChecker

Simple helper to do variable checks and keep complexity low.

# How to use it

## Samples

``` javascript
const variableChecker = require('variablechecker');

(async () => {
  try {
    const a = 1;
    await variableChecker.checkAsync(a, 'a'); // This will success
    
    const b = undefined;
    await variableChecker.checkAsync(b, 'b'); // This will fail and rejects an error message
    
    const c = 0;
    const condition = (x) => x >= 0;
    await variableChecker.checkAsync(c, 'c', { condition }); // This will success
    
    const c = -1;
    const condition = (x) => x >= 0;
    await variableChecker.checkAsync(c, 'c', { condition }); // This will fail and rejects an error message
    
    console.log('DONE');
  } catch (err) {
    console.log(err);
  }
})();
```

# Update & Migration

## 0.1.1 => 1.0.0

The `variableChecker` now ships as object containing a method called `checkAsync`. If you're using v0.1.1, then you change all existing calls from `await variableChecker(...);` to `await variableChecker.checkAsync(...);`.
