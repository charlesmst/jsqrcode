var concat = require('gulp-concat');
var gulp = require("gulp")
var srcs = [
    "./src/grid.js",
    "./src/version.js",
    "./src/detector.js",
    "./src/formatinf.js",
    "./src/errorlevel.js",
    "./src/bitmat.js",
    "./src/datablock.js",
    "./src/bmparser.js",
    "./src/datamask.js",
    "./src/rsdecoder.js",
    "./src/gf256poly.js",
    "./src/gf256.js",
    "./src/decoder.js",
    "./src/qrcode.js",
    "./src/findpat.js",
    "./src/alignpat.js",
    "./src/databr.js",
    "./src/export.js",
]
gulp.task('build', function () {
    return gulp.src(srcs)
        .pipe(concat('jsqrcode.js'))
        .pipe(gulp.dest('./lib/'));
});