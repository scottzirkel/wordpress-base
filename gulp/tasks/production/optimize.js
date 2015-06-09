var gulp        = require('gulp'),
    usemin      = require('gulp-usemin'),
    uglify      = require('gulp-uglify'),
    imageMin    = require('gulp-imagemin'),
    config      = require('../../config').optimize;

gulp.task('optimize:src', function() {
  return gulp.src(config.src)
    .pipe(usemin({
      assetsDir: config.src,
      css: [minifyCss()],
      js: [uglify()]
    }))
    .pipe(gulp.dest(config));
});

/*
Images
Optimize all images
*/

gulp.task('optimize:img', function() {
  return gulp.src(config.img.src)
    .pipe(imageMin(config.img.imgMin))
    .pipe(gulp.dest(config.img.dest));
});

/*
JS
Minifies JavaScript
*/

gulp.task('optimize:js', function() {
  return gulp.src(config.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest));
});
