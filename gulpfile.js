//-----------------------------------------------------
// Swanix Icons
// by Sebastian Serna
// (c) 2016-present
//-----------------------------------------------------

'use strict';

var gulp = require('gulp' ),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    rename = require("gulp-rename"),
    cheerio = require("gulp-cheerio"),
    path = require('path'),
    header = require('gulp-header'),
    bump = require('gulp-bump');


//-----------------------------------------------------
// Global variables
//-----------------------------------------------------

// SVG paths
var inputSvg = 'src/svg/*.svg';
var outputSvg = 'dist/';
var outputSvgDocs = 'docs/';
var svgDistFile = 'dist/swanix-icons.svg';
var svgDocsFile = 'docs/swanix-icons.svg';


// SVG configuration
var  configSvgMin = {
    function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
            plugins: [{
                removeXMLProcInst: true
                }, {
                removeDoctype: false
                }, {
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
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename('swanix-icons.svg')) 
        .pipe(gulp.dest(outputSvg))
        .pipe(gulp.dest(outputSvgDocs));
});

gulp.task('svg-version', function () {

});

//-----------------------------------------------------
// Version tasks
//-----------------------------------------------------
   
// Semantic major
gulp.task('v-major', function(){
    gulp.src('./package.json')
    .pipe(bump({type:'major'}))
    .pipe(gulp.dest('./'));
});

// Semantic minor
gulp.task('v-minor', function(){
    gulp.src('./package.json')
    .pipe(bump({type:'minor'}))
    .pipe(gulp.dest('./'));
});

// Semantic patch
gulp.task('v-patch', function(){
    gulp.src('./package.json')
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

//-----------------------------------------------------
// Header tasks
//-----------------------------------------------------

// using data from package.json
var pkg = require('./package.json');
var versionHtml = ['<!--',
  ' <%= pkg.name %> - v<%= pkg.version %>',
  ' <%= pkg.homepage %>',
  ' @license <%= pkg.license %>',
  ' -->',
  ''].join('\n');
 
// Version HTML/XML
gulp.task('svg-version', function(){
    gulp.src(svgDistFile)
    .pipe(header(versionHtml, { pkg : pkg } ))
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.dest('./docs/'));
});
