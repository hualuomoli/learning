//
'use strict';

// 
var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['./index.html', 'app/**/*'], browserSync.reload);
});

gulp.task('default', function() {
    gulp.start('watch');
});
