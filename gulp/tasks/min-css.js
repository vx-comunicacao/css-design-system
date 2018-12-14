// AQUI MINIFICA E RENOMEIA O ARQUIVO .css PARA min.css

var gulp = require('gulp');
var rename = require('gulp-rename'); // renomeia os arquivos
var minifyCss = require('gulp-cssmin'); // minifica os arquivos

gulp.task('min-css', function(){
	gulp.src('../static/css/all.css')
	.pipe(minifyCss())
	.pipe(rename({
		suffix: '.min'
	}))
    .pipe(gulp.dest('../app/static/css/'));
});
