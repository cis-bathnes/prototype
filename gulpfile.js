var gulp        = require('gulp');
var sass        = require('gulp-sass');
var connect     = require('gulp-connect');
var livereload  = require('gulp-livereload');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var imagemin    = require('gulp-imagemin');
var cache       = require('gulp-cache');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./assets/css/*.scss')
      .pipe(sass({outputStyle: 'compressed',errLogToConsole: true }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./public/assets/css'))
      .pipe(livereload());
});

gulp.task('scripts', function() {
    return gulp.src('./assets/js/*.js')
      .pipe(concat('prototype.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('./public/assets/js'))
      .pipe(livereload());
});

gulp.task('images', function() {
  return gulp.src('./assets/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./public/assets/img'))
    .pipe(livereload());
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./assets/css/**/*.scss', ['sass']);
  gulp.watch('./assets/js/**/*.js', ['scripts']);
  gulp.watch('./assets/img/**/*', ['images']);
  gulp.watch('./public/**/*.html', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass', 'scripts', 'images']);