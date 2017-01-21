//-----------------------------------------------------
// SWAN Icons
// by Sebastian Serna
// 2016
//-----------------------------------------------------

'use strict';

var gulp = require('gulp' ),
    plumber = require('gulp-plumber'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    path = require('path');

//-----------------------------------------------------
// Global variables
//-----------------------------------------------------

// SVG paths
var inputSvg = 'src/*.svg';
var outputSvg = 'dist/images/';

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
        .pipe(gulp.dest(outputSvg));
});
