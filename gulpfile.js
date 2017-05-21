var gulp        = require('gulp');
var gutil       = require('gulp-util');
var htmlmin     = require('gulp-html-minifier');
var uglify      = require("gulp-uglify");
var watch       = require("gulp-watch");
var jshint      = require("gulp-jshint");
var concat      = require("gulp-concat");
var cssmin = require('gulp-cssmin');



gulp.task("default", function () {
    gutil.log("Gulp is working!");
    gulp.start('watch');
});



gulp.task('jshint', function () {
    gutil.log('Starting jshint task.');
    return gulp.src([
        './app/components/**/**/**/*.js', 
        './app/components/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
gulp.task('uglify', function () {
    gutil.log('Starting uglify task.');
    return gulp.src(['./app/components/**/**/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./app/dist'));
});
gulp.task('minify', function() {
    gutil.log('Starting minify task.');
    return gulp.src([
        './app/index.html', 
        './app/components/**/**/**/*.html'
    ])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./app/dist'));
});
gulp.task('minify-css', function () {
    gutil.log('Starting minify-css task.');
    return gulp.src(['./app/components/**/**/**/*.css'])
    .pipe(cssmin())
    .pipe(gulp.dest('./app/dist'));
});


gulp.task('watch', function () {
    gutil.log('Starting watch task.');
    gulp.watch('./app/components/**/**/**/*.js', function (event) {
        gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.start('jshint');
        gulp.start('uglify');
        gulp.start('minify');
        gulp.start('minify-css');
    });
 });