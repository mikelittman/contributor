var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var wiredep = require('wiredep').stream;


gulp.task('clean', function () {
  return del(['build/']);
});

gulp.task('html', function () {
  var filters = {
    css: $.filter('*.css', {restore: true}),
    js: $.filter('*.js')
  };
  return gulp.src('src/index.html')
    .pipe(wiredep({}))
    .pipe($.useref())
    .pipe(filters.css)
    .pipe($.minify())
    .pipe(filters.css.restore)
    .pipe(gulp.dest('build/'));
});


gulp.task('build', ['clean'], function () {
  gulp.start('html');
});

gulp.task('default', ['build'], function () {

});
