import gulp from "gulp"
import browserify from "browserify"
import babelify from 'babelify'
import source from "vinyl-source-stream"
import buffer from "vinyl-buffer"
import sourcemaps from "gulp-sourcemaps"
import uglify from "gulp-uglify"

var projectName = "project"
var outputFolder   = "__build"
var inFile = "src/project.js"
var outFile = projectName + ".js"

gulp.task("default", ["html", "bundle"])


gulp.task("html", function () {
  gulp.src("html/index.html").pipe(gulp.dest(outputFolder))
})


gulp.task("bundle", function() {

  var bundler = browserify({
    debug: true
  })

  return bundler.add(inFile)
                .plugin(babelify)
                .bundle()
                .pipe(source(outFile))
                .pipe(buffer())
                .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(uglify())
                // write sourcemaps inline to prevent bug in Chrome
                // https://bugs.chromium.org/p/chromium/issues/detail?id=508270
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(outputFolder));
});
