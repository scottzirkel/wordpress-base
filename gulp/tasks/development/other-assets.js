var gulp    = require('gulp'),
    config  = require('../../config').otherAssets;

gulp.task('otherAssets', function() {
  return gulp.src(config.src)
      .pipe(gulp.dest(config.dest));
});
