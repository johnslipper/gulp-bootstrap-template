/* Gulp Packages */
var gulp = require('gulp'); // Gulp Itself
var jshint = require('gulp-jshint'); // JS Syntax Checking
var uglify = require('gulp-uglify'); // JS Minify
var minifyCSS = require('gulp-minify-css'); // CSS Minify
var autoprefixer = require('gulp-autoprefixer'); // CSS Autoprefixing
var gulpImports = require('gulp-imports'); // In-File Importing (Used for JS Concat)
var rename = require("gulp-rename"); // Rename Files (Used for JS '.min' prefixing)
var less = require('gulp-less'); // LESS Preprocessing
var lessGlobPlugin = require('less-plugin-glob'); // LESS Globs (file @import statements)
var browserSync = require('browser-sync').create(); // Browser Sync Webserver
var plumber = require('gulp-plumber'); // Error Handling


/* Default Task */
gulp.task('default', ['jshint', 'scripts', 'less', 'watch', 'webserver']);


/* JavaScript Checking */
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});


/* JavaScript File Processing */
gulp.task('scripts', function() {
  gulp.src('js/*.js') // Input
  .pipe(plumber()) // Error Handling
  .pipe(gulpImports()) // Import JS includes
  .pipe(uglify()) // Minify JS
  .pipe(rename({
    suffix: ".min" // Add suffix to filename
  }))
  .pipe(gulp.dest('js/min/')) // Output
  .pipe(browserSync.stream()); // Server Refresh
});


/* LESS File Processing */
gulp.task('less', function() {
  gulp.src('less/*.less') // Input
  .pipe(plumber()) // Error Handling
  .pipe(less({ // Run LESS with plugins
    plugins: [lessGlobPlugin] // LESS @import statements
  }))
  .pipe(autoprefixer({ // Run autoprefixers
      browsers: ['last 2 versions']
  }))
  .pipe(minifyCSS()) // Minify CSS
  .pipe(gulp.dest('css/')) // Output
  .pipe(browserSync.stream()); // Server Refresh
});


/* Webserver using Browsersync */
gulp.task('webserver', function() {
  browserSync.init({
    server: {
      baseDir: "./" // Serve Project Root
    },
    open: true // Automatic Browser Launch
  });
});

/* BrowserSync reload all Browsers */
gulp.task('browsersync-reload', function () {
    browserSync.reload();
});


/* Watch Tasks */
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint', 'scripts']); // Watch JavaScript
  gulp.watch('less/**/*.less', ['less']); // Watch LESS
  gulp.watch("*.html", ['browsersync-reload']); // Watch HTML
});

