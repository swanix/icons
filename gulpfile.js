//-----------------------------------------------------
// Swanix Icons
// by Sebastian Serna
// (c) 2016-present
//-----------------------------------------------------

const { src, dest, watch, series, parallel } = require('gulp');
// General plugins
const browserSync = require('browser-sync');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const header = require('gulp-header');
// Project specific
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const cheerio = require("gulp-cheerio");
const path = require('path');

//-----------------------------------------------------
// Server tasks
//-----------------------------------------------------

function watch_files() {
  browserSync.init({
    server: {
        baseDir: 'docs',
        index: 'index.html',
        serveStaticOptions: {
          extensions: ['html']
        }
    }
  });
  watch('./docs/**/*.njk', html_compiler);
  watch('./docs/**/*.html').on('change', browserSync.reload);
  watch('./docs/**/*.json').on('change', browserSync.reload);
  watch('./docs/**/*.svg').on('change', browserSync.reload);
  watch('package.json', series(html_compiler, svg_sprite, svg_version));
}

//-----------------------------------------------------
// HTML compiler task
//-----------------------------------------------------

// Nunjucks to HTML paths
var inputHtml = 'docs/templates/*.njk';
var inputAllHtml = 'docs/templates/**/*.njk';
var outputHtml = 'docs/';

function html_compiler() {
  return src(inputHtml)
    .pipe(data(function() {
      delete require.cache[require.resolve('./package.json')];
      pkg = require('./package.json');
      return pkg;
    }))
    .pipe(nunjucks.compile())
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(dest(outputHtml));
}

//-----------------------------------------------------
// Version header task
//-----------------------------------------------------

// using data from package.json
delete require.cache[require.resolve('./package.json')];
var pkg = require('./package.json');
var versionHtml = ['<!--',
  ' <%= pkg.name %> - v<%= pkg.version %>',
  ' <%= pkg.homepage %>',
  ' @license <%= pkg.license %>',
  ' -->',
  ''].join('\n');
 
// Version HTML/XML
function svg_version() {
    return src(svgDistFile)
    .pipe(header(versionHtml, { pkg : pkg } ))
    .pipe(dest('./dist/'))
    .pipe(dest('./docs/'));
}

//-----------------------------------------------------
// SVG task
//-----------------------------------------------------

// SVG paths
var inputSvg = 'src/*.svg';
var outputSvg = 'dist/';
var outputSvgDocs = 'docs/';
var svgDistFile = 'dist/swanix-icons.svg';

// SVG configuration
var configSvgMin = {
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

function svg_sprite () {
    return src(inputSvg)
      .pipe(plumber())
      .pipe(cheerio({
          run: function ($) {
              $('[fill]').removeAttr('fill');
          },
          parserOptions: { xmlMode: true }
      }))
      .pipe(svgmin(configSvgMin))
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(rename('swanix-icons.svg')) 
      .pipe(dest(outputSvg))
      .pipe(dest(outputSvgDocs));
}

//-----------------------------------------------------
// TASKS
//-----------------------------------------------------

exports.default = watch_files;
exports.watch = watch_files;
exports.html = html_compiler;
exports.svg = series(svg_sprite, svg_version);
exports.build = series(svg_sprite, svg_version, html_compiler);