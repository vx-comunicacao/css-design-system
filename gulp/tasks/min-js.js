/*--------------------------------------------------------------
    MINIFY ALL.JS
--------------------------------------------------------------*/
// plugins
var gulp 	= require('gulp');
var uglify 	= require('gulp-uglify');
var rename 	= require('gulp-rename');

// tasks
gulp.task('min-js', function() {
	return gulp.src('../static/js/all.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../app/static/js/'))
});
