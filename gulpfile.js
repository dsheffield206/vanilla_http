'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulpMocha');
var chai = require('chai');

gulp.task('somthing', function() {
   return gulp.src('./http_server');
});
