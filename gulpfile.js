//
'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('bower', function() {
	gulp.src("views/**/*.html", {
			base: 'views'
		})
		.pipe(wiredep({
			// override
			"overrides": {
				// bootstrap
				"bootstrap": {
					"main": [
						"dist/css/bootstrap.css",
						"dist/js/bootstrap.js"
					]
				}
			}
		}))
		.pipe(gulp.dest('app/views'));
});


gulp.task('default', ['bower']);