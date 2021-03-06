'use strict';

const { ESLint } = require('eslint');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');

const esl = new ESLint({ errorOnUnmatchedPattern: false });
const cmd = {
  start: 'node service',
  test: 'nyc --reporter=lcovonly --reporter=text gulp mocha'
};
const paths = {
  analyze: [ 'src/**/*.js', 'test/**/*.js', ],
  tests: [ 'test/**/*Test.js', '!./Gulpfile.js' ]
};

const taskStart = async () => (shell.task([ cmd.start ]))();
const taskTest = async () => (shell.task([ cmd.test ]))();
const taskLint = async () => console.log((await esl.loadFormatter('stylish')).format((await esl.lintFiles(paths.analyze)))); // eslint-disable-line no-console
const taskMocha = async () => gulp.src(paths.tests, { read: false })
                                  .pipe(mocha({ exit: true, timeout: 25000 }))
                                  .on('error', console.error); // eslint-disable-line no-console

exports.start = gulp.series(taskStart);
exports.test = gulp.series(taskTest);
exports.mocha = gulp.series(taskMocha);
exports.lint = gulp.series(taskLint);
exports.default = gulp.series(taskLint, taskTest);
