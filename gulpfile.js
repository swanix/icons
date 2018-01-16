//-----------------------------------------------------
// Swan Icons
// by Sebastian Serna
// 2016
//-----------------------------------------------------

'use strict';

var gulp = require('gulp' ),
    plumber = require('gulp-plumber'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    replace = require('gulp-replace'),
    rename = require("gulp-rename"),    
    path = require('path');

//-----------------------------------------------------
// Global variables
//-----------------------------------------------------

// SVG paths
var inputSvg = 'src/svg/*.svg';
var outputSvg = 'dist/images/';
// var inputDistSvg = 'dist/images/svg.svg';
// var outputDistSvg = 'dist/';


// SVG configuration
var  configSvgMin = {
    function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
            plugins: [{
                cleanupIDs: {
                    prefix: prefix + '-',
                    minify: true
                }
            }]
        }
    }
};

//-----------------------------------------------------
// SVG task
//-----------------------------------------------------

gulp.task('svg', function () {
    return gulp
        .src(inputSvg)
        .pipe(svgmin(configSvgMin))
        .pipe(svgstore())
        .pipe(rename('icons.svg')) 
        .pipe(gulp.dest(outputSvg));
});

// gulp.task('svg-color', function(){
//        gulp
//        .src(inputDistSvg)
//        .pipe(replace('#231F20', 'currentColor'))
//        .pipe(rename('icons.svg'))      
//        .pipe(gulp.dest(outputDistSvg));
//   });
