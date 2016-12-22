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

// SVG configuration
var  configSvg               = {
      shape               : {
          dimension       : {         
              maxWidth    : 32,
              maxHeight   : 32
          },
          spacing         : {         
              padding     : 10
          },
      },
      mode                : {
          view            : {        
              bust        : false,
              render      : {
                  css    : true      
              }
          },
          symbol          : true     
      }
};

//-----------------------------------------------------
// SVG task
//-----------------------------------------------------

gulp.task('svg', function() {
    return gulp
      .src(inputSvg)
      .pipe(svgSprite(configSvg))
      .pipe(gulp.dest(outputSvg));
});
