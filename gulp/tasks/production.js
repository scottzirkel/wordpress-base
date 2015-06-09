var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('production', function () {
  runSequence(
    'deploy:production'
    );
});
