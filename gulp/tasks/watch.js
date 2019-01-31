var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create(); //browser sync and updates

gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server:{
      baseDir: 'app'
    }
  });

  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

  watch('./app/assets/js/**/*.js', function(){
  gulp.start('jsDev');
});

});

gulp.task('jsDev', function(){
  return gulp.src('./app/assets/js/main.js')
    .pipe(browserSync.stream());
});

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
