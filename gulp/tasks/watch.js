// AQUI MONITORA OS ARQUIVOS VERIFICANDO SE EXISTE ALTERAÇÕES

var gulp = require('gulp');

gulp.task('default', ['concat-sass', 'concat-js', 'min-css', 'min-js'], function(){
	gulp.watch('../src/sass/**/*.scss', ['concat-sass']) // MONITORA A PASTA SASS DO CSS
	gulp.watch('../app/css/all.css', ['min-css']) // MONITORA A PASTA css DO static
	gulp.watch('../src/js/**/*.js', ['concat-js']) // MONITORA A PASTA js DO src
	gulp.watch('../app/js/all.js', ['min-js']) // MONITORA A PASTA js DO static
});
