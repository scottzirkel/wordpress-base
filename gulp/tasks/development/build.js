var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence(
    'scss-lint',
    [
      'compass',
      'javascript',
      'images',
      'otherAssets',
    ],
    callback);
})
