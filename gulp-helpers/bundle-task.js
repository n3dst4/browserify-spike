import gulp from "gulp"
import browserify from "browserify"
import babelify from 'babelify'
import vinylSource from "vinyl-source-stream"
import vinylBuffer from "vinyl-buffer"
import sourcemaps from "gulp-sourcemaps"
import uglify from "gulp-uglify"
import watchify from "watchify"
import gutil from "gulp-util"
import gulpIf from "gulp-if"
import path from "path"
//import notifier from "node-notifier"

// bundleTask returns a function which is suitable for use as a gulp task
export default function bundleTask (inFile, outFile, outFolder,
    opts = {watch: false, production: false}) {
  return function () {
    let bundler =
      browserify({
        entries: [inFile],
        debug: !opts.production,
        cache: {},
        packageCache: {},
        plugin: [babelify]
      })

    if (opts.watch) {
      bundler = bundler.plugin(watchify)
    }

    function bundle () {
      return bundler.bundle()
      .pipe(vinylSource(outFile))
      .pipe(vinylBuffer())
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

    bundler.on("error", function (err) {
      // thanks to http://stackoverflow.com/a/24817446/212676
      console.error(err);
      // if (notifier) {
      //   notifier.notify({
      //     'title': 'Kaboom! Gulp error:',
      //     'message': err,
      //     wait: false,
      //   });
      // }
    })


    return bundle()
  }
}
