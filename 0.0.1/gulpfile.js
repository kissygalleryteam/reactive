var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var kmc = require('gulp-kmc');

kmc.config({
           packages:[{
               name: 'kg/react/1.0',
               base: './node_modules/react'
            }]
});

gulp.task('r', function () {
    return gulp.src('./node_modules/react/*.js')
        
        .pipe(kmc.convert())
        .pipe(gulp.dest('./build/'));
});

gulp.task('default',['r'], function () {
    return gulp.src('./node_modules/react/lib/*.js')
        
        .pipe(kmc.convert())
        .pipe(gulp.dest('./build/lib/'));
});

