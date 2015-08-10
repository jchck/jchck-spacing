var gulp 		= require('gulp'),
	rename 		= require('gulp-rename'),
	minify		= require('gulp-minify-css'),
	sass		= require('gulp-sass'),
	size		= require('gulp-size');

gulp.task('css', function(){
	gulp.src('./src/spacing.scss')
		.pipe(sass({outputStyle: 'compact'}))
		.pipe(size({gzip: true, showFiles: true, title:'prefixed'}))
		.pipe(gulp.dest('./dest'))
		.pipe(minify())
		.pipe(size({gzip: true, showFiles: true, title:'minified'}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./dest'));
});

gulp.task('default', ['css']);
