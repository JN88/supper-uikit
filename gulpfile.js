var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var less = require('gulp-less-sourcemap');
var livereload = require('gulp-livereload');
var cssmin = require('gulp-cssmin');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

// Less to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function () {
    return gulp.src('./assets/less/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./assets/css')).on('error', gutil.log)
        .pipe(livereload());
});

gulp.task('minify-css', function () {
    return gulp.src(['./assets/css/*.css', '!assets/css/*.min.css'])
        .pipe(plumber())
        .pipe(cssmin({
            keepSpecialComments: false,
            advanced: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./assets/css')).on('error', gutil.log);
});

// Default task
gulp.task('watch', function () {
	livereload.listen();
    gulp.watch('./assets/less/**/*.less', ['build-css']);
    gulp.watch('./assets/css/*.css', ['minify-css']);
});

// Start Watching: Run "gulp"
gulp.task('default', ['build-css', 'minify-css', 'watch']);
