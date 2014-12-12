var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var kmc = require('gulp-kmc');
var filter = require('gulp-filter');
var minify = require('gulp-minify');

var name = 'kg/react/0.0.2';
kmc.config({
           packages:[{
               name: name,
               base: './node_modules/react'
            }]
});


gulp.task('default', function () {
    return gulp.src('./node_modules/react/**/*.js')
               .pipe(filter(function(file){
                  //console.log(file.path);
                  return (file.relative.indexOf('node_modules')==-1) && (file.relative.indexOf('dist')==-1);
               }))
               .pipe(kmc.convert())
               .pipe(kmc.combo({
                   deps:false,
                   files:[
                            {
                               src: name+'/react.js',
                               dest: name+'/react.js'
                            },
                            {
                               src: name+'/addons.js',
                               dest: name+'/addons.js'
                            }
                         ]
               }))
               .pipe(minify({
                  ext:{
                      src:'-debug.js',
                      min:'.js'
                  }
               }))
               .pipe(gulp.dest('./build/'));
});

