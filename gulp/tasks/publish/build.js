var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('publish', ['clean'], function (callback) {
  runSequence(
    'build',
    callback);
})
