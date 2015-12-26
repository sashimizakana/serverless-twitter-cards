"use strict";
const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('default',()=>{
   return gulp.src('src/**')
   .pipe(zip('package.zip'))
   .pipe(gulp.dest('dist')); 
});