var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build:production', ['clean'], function (callback) {
  runSequence(
    [ 'html',
      'compass',
      'javascript',
      'bower:css',
      'bower:js',
      'images'
    ],
    'optimize:img',
    'optimize:js',
    'otherAssets',
    callback);
});
