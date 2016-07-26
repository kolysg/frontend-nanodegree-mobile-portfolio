var gulp = require ('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	minifyImg = require('gulp-imagemin');

//uglify scripts
gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min'}))
		.pipe(gulp.dest('dist/js/'));

});

//Minify-css
gulp.task('styles', function(){
	gulp.src('src/css/*.css')
		.pipe(minifyCSS())
		.pipe(rename({ suffix: '.min'}))
		.pipe(gulp.dest('dist/css/'));

});

//Compress Images
gulp.task('images', function(){
    gulp.src('src/img/*')
        .pipe(minifyImg())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('dist/img/'))
});

gulp.task('moreimages', function(){
    gulp.src('src/views/images/*')
        .pipe(minifyImg())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('dist/views/images'))
});

//watch
/*gulp.tast('watch', function(){
	gulp.watch('src/css/*.css', ['styles']);
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/img/*'), ['images'];
});

//default gulp tast
gulp.task('default', ['scripts', 'styles', 'watch', 'images']);*/