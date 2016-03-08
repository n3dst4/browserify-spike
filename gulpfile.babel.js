var gulp        = require("gulp")
var browserify = require("browserify")
var babelify = require('babelify')
var source = require("vinyl-source-stream")
var buffer = require("vinyl-buffer")
//var path = require("path")
var sourcemaps  = require("gulp-sourcemaps")
var uglify = require("gulp-uglify")

var projectName = "project"
var outputFolder   = "__build"
var inFile = "src/project.js"
var outFile = projectName + ".js"

gulp.task("default", ["html", "bundle"]);


gulp.task("html", function () {
  gulp.src("html/index.html").pipe(gulp.dest(outputFolder))
})


gulp.task("bundle", function() {

  var bundler = browserify({
    debug: true,
    standalone : projectName
  });

  return bundler.add(inFile)
                .plugin(babelify)
                .bundle()
                .pipe(source(outFile))
                .pipe(buffer())
                .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(uglify())
                //.pipe(sourcemaps.write('./')) // external
                .pipe(sourcemaps.write()) // inline
                .pipe(gulp.dest(outputFolder));
});
