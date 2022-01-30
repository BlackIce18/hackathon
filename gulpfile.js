var gulp = require('gulp');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass')(require('sass'));
gulp.task('browserSync', function() {
    connect.server({}, function () {
        browserSync.init({
            /*server: {
                baseDir: './'
            },*/
            notify: false,
            proxy: "localhost:63342/landing",
        });
    });

    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.php').on('change', browserSync.reload);
    gulp.watch('./scss/**/*.scss', gulp.series('sassTask'));
});
gulp.task('sassTask', function() {
    return gulp.src('./scss/**/*.scss') // Получает все файлы с расширением .scss из папки app/scss
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('watch', gulp.series('browserSync'));