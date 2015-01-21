var gulp = require('gulp'),
    browserify = require('browserify'),
    source =  require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync');

gulp.task('js', function(){
  browserify({
    entries: './src/js/main.js',
    debug: true
  })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(buffer())
    .pipe(uglify({
      mangle: true
    }))
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('../dist/js'))
    .pipe(browserSync.reload({ stream: true }));
});