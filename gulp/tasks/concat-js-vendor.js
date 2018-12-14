
var gulp    = require('gulp');
var concat  = require('gulp-concat');

gulp.task('concat-js-vendor', function() {
    return gulp.src([

        // VENDORS
        '../src/js/vendor/jquery-2.1.1.min.js',
        '../src/js/vendor/remodal.js',
        '../src/js/vendor/jquery.maskedinput.min.js',
        '../src/js/vendor/jquery.validate.min.js',

  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../app/static/js/'));
});
