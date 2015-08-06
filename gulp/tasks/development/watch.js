var gulp    = require('gulp'),
    config  = require('../../config').watch;

gulp.task('watch', function () {
  gulp.watch(config.sass, ['sass', 'scss-lint']);
  gulp.watch(config.images, ['images']);
  gulp.watch(config.js, ['javascript']);
});
