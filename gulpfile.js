var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass');

// https://www.liquidlight.co.uk/blog/how-do-i-update-to-gulp-4/

gulp.task('sass', function (done) {
  gulp.src('./public/css/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
  done()
});

gulp.task('develop', function (done) {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js handlebars coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
  done()
});

gulp.task('watch', function(done) {
  gulp.watch('./public/css/*.scss', ['sass']);
  done()
});

gulp.task('watch', function(){
  gulp.watch('./public/css/*.scss')
    .on('change', function(path, stats) {
      console.log(path);
      // code to execute on change
    })
    .on('unlink', function(path, stats) {
      console.log(path);
      // code to execute on delete
    });
});

gulp.task('default', gulp.series(['sass', 'develop', 'watch'], function(done) {
  done();
  }
));
