//-----------------------------------------------------
// SWAN Icons
// by Sebastian Serna
// 2016
//-----------------------------------------------------

'use strict';

var gulp = require('gulp' ),
    svgSprite = require('gulp-svg-sprite');

//-----------------------------------------------------
// Global variables
//-----------------------------------------------------

// SVG paths
var inputSvg = 'src/*.svg';
var outputSvg = 'dist/';

//-----------------------------------------------------
// SVG task
//-----------------------------------------------------

gulp.task('svg', function() {
    return gulp
      .src(inputSvg)
      .pipe(svgSprite( /* configuration here */ ))
      .pipe(gulp.dest(outputSvg));
});
