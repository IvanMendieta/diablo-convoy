var gulp = require('gulp'); //
var postCss = require('gulp-postcss'); // new kid on the block to get all the tools we need to simplify the css.
var autoprefixer = require('autoprefixer'); //get all the autoprefixer css
var cssVars = require('postcss-simple-vars'); //variables css
var nested = require('postcss-nested'); //nested css
var cssImpot = require('postcss-import'); //nested css
var mixins = require('postcss-mixins'); //nested css

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postCss([cssImpot, mixins, nested, cssVars, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
