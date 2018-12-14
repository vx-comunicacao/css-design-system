// AQUI CONCATENA E CONVERTE O ARQUIVO .scss PARA css

var gulp = require('gulp');
var concat = require('gulp-concat'); // junta todos os arquivos
var sass = require('gulp-sass');

gulp.task('concat-sass', function () {
    console.log('sdasd')
  gulp.src('../src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../app/static/css/'))
});
