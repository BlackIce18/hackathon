var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass')(require('sass'));
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    });
    gulp.watch('./scss/**/*.scss', gulp.series('sassTask'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});
gulp.task('sassTask', function() {
    return gulp.src('./scss/**/*.scss') // Получает все файлы с расширением .scss из папки app/scss
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true,

        }))
});
gulp.task('watch', gulp.series('browserSync'));