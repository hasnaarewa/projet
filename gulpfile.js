const { series ,watch} = require('gulp');
var browserSync = require('browser-sync').create();
// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    watch(['*.html','css/*.css','js/*.js'], (done)=>{
        browserSync.reload();
    done();
    });
  cb();
}


exports.default = build