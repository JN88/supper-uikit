var gulp = require('gulp');
var less = require('gulp-less');
var less = require('gulp-less-sourcemap');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('assets/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('assets/less/*.less', ['less']);
});

gulp.task('default', ['less', 'watch'], function() {

});