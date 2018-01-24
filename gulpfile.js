var cache			 = require('gulp-cache');
var concat			= require('gulp-concat');
var connect		 = require('gulp-connect');
var gulp				= require('gulp');
var imagemin		= require('gulp-imagemin');
var livereload	= require('gulp-livereload');
var rename			= require('gulp-rename');
var sass				= require('gulp-sass');
var uglify			= require('gulp-uglify');

gulp.task('connect', function(){
	connect.server({
		root: 'public',
		livereload: true
	});
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('./assets/css/**/*.scss', ['sass']);
	gulp.watch('./assets/js/**/*.js', ['scripts']);
	gulp.watch('./assets/img/**/*', ['images']);
	gulp.watch('./*.html', ['copy-index-html']);
});

gulp.task('sass', function () {
	return gulp.src('./assets/css/*.scss')
		.pipe(sass({outputStyle: 'compressed',errLogToConsole: true }))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/assets/css'))
		.pipe(livereload());
});

gulp.task('scripts', function() {
	return gulp.src('./assets/js/*.js')
		.pipe(gulp.dest('./public/assets/js'))
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

gulp.task('copy-index-html', function() {
	return gulp.src('./*.html')
		.pipe(gulp.dest('./public'))
		.pipe(livereload());
});

gulp.task('livereload', function (){
	return gulp.src('./public/**/*')
	 .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch', 'sass', 'scripts', 'images', 'copy-index-html']);