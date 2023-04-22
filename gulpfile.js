// GULPFILE.JS
'use strict';

const gulp = require('gulp');
const { series } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
 

/* =========================
   Build Styles
   ========================= */
function buildStyles() {
  return gulp.src('./scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ["last 2 versions"]
    }))
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('./'));
};

exports.buildStyles = buildStyles;

/* =========================
   Build Scripts
   ========================= */
   function buildScripts() {
    return gulp.src(['./js/*.js',])
      .pipe(concat('compiled.js'))
      .pipe(minify())
      .pipe(gulp.dest('./'));
};
exports.buildScripts = buildScripts;

function watch() {
    gulp.watch('./scss/**/*.scss', buildStyles);
    gulp.watch('./js/**/*.js', buildScripts);
}

exports.watch = watch;

exports.default = series(buildStyles, buildScripts, watch);