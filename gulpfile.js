//
'use stric';

var gulp = require('gulp');
var usemin = require('gulp-usemin');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src('app/**', {
			read: false
		})
		.pipe(clean());
});

gulp.task('usemin', ['clean'], function() {
	return gulp.src('views/**/*.html', {
			base: 'views'
		})
		.pipe(usemin({
			css: [minifyCss()],
			js: [uglify()],
			html: [minifyHtml({
				empty: true
			})]
		}))
		.pipe(gulp.dest('app/views'));
});


gulp.task('default', function() {
	gulp.start('usemin');
});