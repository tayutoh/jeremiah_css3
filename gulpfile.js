const gulp = require('gulp');
const sass = require('gulp-sass');
var plumber = require('gulp-plumber');

// sassとcssの保存先
gulp.task('sass', function(){
    gulp.src('./assets/sass/*.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./assets/css/'));
});

//自動監視
gulp.task('sass-watch', ['sass'], function(){
    var watcher = gulp.watch('./assets/sass/*.scss', ['sass']);
    watcher.on('change', function(event) {
    });
});

gulp.task('default', ['sass-watch']);
