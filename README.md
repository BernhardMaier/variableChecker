# Badges

## Pipelines

- ![ci_main](https://github.com/BernhardMaier/variableChecker/actions/workflows/ci.yml/badge.svg?branch=main)
- ![cd_main](https://github.com/BernhardMaier/variableChecker/actions/workflows/cd.yml/badge.svg?branch=main)
- ![code_analysis](https://github.com/BernhardMaier/variableChecker/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)

## Code analysis

- ![GitHub language count](https://img.shields.io/github/languages/count/bernhardmaier/variablechecker)
- ![GitHub top language](https://img.shields.io/github/languages/top/bernhardmaier/variablechecker)
- ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/variablechecker)

## Version infos

- ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/BernhardMaier/variableChecker)
- ![GitHub](https://img.shields.io/github/license/BernhardMaier/variableChecker)

## npm

- ![npm](https://img.shields.io/npm/v/variablechecker)
- ![npm bundle size](https://img.shields.io/bundlephobia/min/variablechecker)
- ![npm bundle size](https://img.shields.io/bundlephobia/minzip/variablechecker)
- ![npm](https://img.shields.io/npm/dw/variablechecker)

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
