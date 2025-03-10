const gulp   = require('gulp');
const babel  = require('gulp-babel');
const eslint = require('gulp-eslint');

// Gulp dependencies
gulp.task('default', function() {
  // Run ESLint
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
      .pipe(eslint())
      .pipe(eslint.format());
  // Node source
  gulp.src("es6/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));
    // Browser source
  gulp.src("public/es6/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("public/dist"));
});
