var gulp    = require('gulp'),
    config  = require('../../config').watch;

gulp.task('watch', function () {
  gulp.watch(config.sass, ['compass', 'scss-lint']);
  gulp.watch(config.images, ['images']);
  gulp.watch(config.js, ['javascript']);
});
