import gulp from "gulp"
import browserify from "browserify"
import babelify from 'babelify'
import source from "vinyl-source-stream"
import buffer from "vinyl-buffer"
import sourcemaps from "gulp-sourcemaps"
import uglify from "gulp-uglify"
import watchify from "watchify"
import gutil from "gulp-util"
import path from "path"

const _outFolder   = "__build"
const _inFile = "src/project.js"
const _outFile = "project.js"

gulp.task("default", ["html", "bundle"])


gulp.task("html", function () {
  gulp.src("html/index.html").pipe(gulp.dest(_outFolder))
})


function bundleTask (inFile, outFile, outFolder, watch) {

  const bundler = (watch ? watchify : (x) => x)(
    browserify({debug: true}).add(inFile).plugin(babelify)
  )

  function bundle () {
    return bundler.bundle()
                  .pipe(source(outFile))
                  .pipe(buffer())
                  .pipe(sourcemaps.init({loadMaps: true}))
                  .pipe(uglify())
                  // write sourcemaps inline to prevent bug in Chrome
                  // https://bugs.chromium.org/p/chromium/issues/detail?id=508270
                  .pipe(sourcemaps.write())
                  .pipe(gulp.dest(outFolder));
  }

  bundler.on("update", function (ids) {
    gutil.log("Script dependencies updated:");
    ids = ids.map(function (id) {
      return gutil.colors.magenta(path.relative(process.cwd(), id));
    });
    ids.forEach(function (id) { gutil.log(id); });
    bundle();
  })

  bundler.on("log", function (msg) {
    gutil.log(msg);
  })

  return bundle()
}



gulp.task("bundle", function() {
  return bundleTask(_inFile, _outFile, _outFolder)
});

gulp.task("watch", ["bundle"], function() {
  return bundleTask(_inFile, _outFile, _outFolder, true)
});
