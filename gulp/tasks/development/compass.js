var gulp    = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    compass = require('gulp-compass'),
    concat  = require('gulp-concat'),
    config  = require('../../config').compass;

gulp.task('compass', function () {
  gulp.src(config.src)
    .pipe(compass({
      css: 'build/assets/css',
      sass: 'app/sass',
      require: config.require
    }))
    // .pipe(concat('app.css'))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest))
})
