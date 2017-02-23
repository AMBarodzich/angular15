
var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function() {});

//reload browser
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files:  ['server/**/*.js', 'client/js/*.js'],
    port: 2000,
  });
});

//restart the application each time you change
gulp.task('nodemon', function(cb) {
  return nodemon({
    script: 'server/app.js',
    env: {
      'NODE_ENV': 'development'
    }
  }).on('start', function() {
    cb();
  }).on('restart');
});
