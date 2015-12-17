var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var wiredep = require('wiredep').stream;


gulp.task('clean', function () {
  return del(['build/']);
});

gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe(wiredep({}))
    .pipe($.useref())
    .pipe(gulp.dest('build/'));
});


gulp.task('build', ['clean'], function () {
  gulp.start('html');
});

gulp.task('default', ['build'], function () {

});
