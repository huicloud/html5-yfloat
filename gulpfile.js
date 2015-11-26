var gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  del = require('del');

var DIST = './dist';

gulp.task('default', function() {

  // 编译前清除编译目录
  del.sync(DIST);

  var b = browserify({
    entries: './index.js',
    standalone: 'yfloat'
  });

  return b.bundle()
    .pipe(source('yfloat.js'))
    .pipe(gulp.dest(DIST))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(DIST));
});