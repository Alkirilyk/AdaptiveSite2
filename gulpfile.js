

let gulp = require('gulp');
let concatCss = require('gulp-concat-css');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let uglyfly = require('gulp-uglyfly');

// gulp.task("js", function(){
// 	return gulp.src('all.js/*.js')
// 	pipe(uglify())
// 	.pipe(gulp.dest('./dist/'));
// })
 
gulp.task('default', function () {
  return gulp.src('*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('out/'));
});
 
gulp.task('scripts', function() {
  return gulp.src('script/*.js')
    .pipe(concat('all.js'))
    .pipe(uglyfly())
    .pipe(gulp.dest('./dist/'));
});


 
