var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

var paths = {
    less: ['dev/less/**/*.less'],
    js: ['dev/js/**/*.js']
}

gulp.task('less', function () {
   gulp.src(paths.less)
     .pipe(less())
     .pipe(prefix('last 2 version', 'ie 8', 'ie 9'))
     .pipe(minifyCSS())
     .pipe(sourcemaps.init())
     .pipe(gulp.dest('css/'))
});

gulp.task('js', function () {
    return gulp.src(paths.js)
      .pipe(jshint())
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('js/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.less, ['less']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['less', 'js']);
