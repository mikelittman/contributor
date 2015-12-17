var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var wiredep = require('wiredep').stream;


gulp.task('clean', function () {
  return del(['build/', '.tmp/']);
});

gulp.task('style', function () {
  return gulp.src('src/sass/style.scss')
    .pipe($.sass())
    .pipe(gulp.dest('.tmp/css/'));
});

gulp.task('html', ['style'], function () {
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

gulp.task('watch', ['build'], function () {
  gulp.watch('src/**', ['build']);
});


gulp.task('build', ['clean'], function () {
  gulp.start('html');
});

gulp.task('default', ['build'], function () {

});
