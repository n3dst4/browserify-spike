import gulp from "gulp"
import bundleTask from "./gulp-helpers/bundle-task"

const _outFolder   = "__build"
const _inFile = "src/project.js"
const _outFile = "project.js"
const _production = process.env.NODE_ENV === "production";

gulp.task("default", ["html", "bundle"])

gulp.task("html", function () {
  gulp.src("html/index.html").pipe(gulp.dest(_outFolder))
})

gulp.task("bundle",
  bundleTask(_inFile, _outFile, _outFolder, {production: _production}));

gulp.task("watch",
  bundleTask(_inFile, _outFile, _outFolder, {production: _production, watch: true}));
