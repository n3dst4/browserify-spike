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
import gulpIf from "gulp-if"
//import notifier from "node-notifier"

// bundleTask returns a function which is suitable for use as a gulp task
export default function bundleTask (inFile, outFile, outFolder,
    opts = {watch: false, production: false}) {
  return function () {
    const bundler = (opts.watch ? watchify : (x) => x)(
      browserify({debug: !opts.production}).add(inFile).plugin(babelify)
    )

    function bundle () {
      return bundler.bundle()
      .pipe(source(outFile))
      .pipe(buffer())
      .pipe(gulpIf(!opts.production, sourcemaps.init({loadMaps: true})))
      .pipe(gulpIf(opts.production, uglify()))
      // write sourcemaps inline to prevent bug in Chrome
      // https://bugs.chromium.org/p/chromium/issues/detail?id=508270
      .pipe(gulpIf(!opts.production, sourcemaps.write()))
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
}
