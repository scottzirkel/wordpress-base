var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build:staging', ['clean'], function (callback) {
  runSequence(
    [
      'html',
      'compass',
      'javascript',
      'svg',
      'images',
    ],
    [
      'angular:app',
      'angular:template',
      'angular:htaccess',
    ],
    'bower',
    ['angular:kludge'],
    callback);
});
