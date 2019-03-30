//-----------------------------------------------------
// Swanix Icons
// by Sebastian Serna
// (c) 2016-present
//-----------------------------------------------------

'use strict';

var gulp = require('gulp' ),
    plumber = require('gulp-plumber'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    replace = require('gulp-replace'),
    rename = require("gulp-rename"),
    cheerio = require("gulp-cheerio"),
    path = require('path');

//-----------------------------------------------------
// Global variables
//-----------------------------------------------------

// SVG paths
var inputSvg = 'src/svg/*.svg';
var outputSvg = 'dist/';


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
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgmin(configSvgMin))
        .pipe(svgstore())
        .pipe(rename('swanix-icons.svg')) 
        .pipe(gulp.dest(outputSvg));
});
