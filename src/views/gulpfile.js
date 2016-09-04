var gulp = require('gulp'),
	serve = require('gulp-serve'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	minifyhtml = require('gulp-minify-html'),
	imageop = require('gulp-image-optimization'),
	concatify = require('gulp-concat'),
	browserSync = require('browser-sync'); //install allthe dependencies, example: npm install gulp-uglify --save-dev
	cleanCSS = require('gulp-clean-css');
//path to various files
var paths = {
	scripts: ['js/*.js'],    
	styles: ['css/*.css'],    
	images: ['images/*'],        
	content: ['pizza.html']
}; 

// Optimize Images
gulp.task('images', function() {
  	return gulp.src(paths.images)
  	.pipe(imageop({
  		optimizationLevel: 5
  	}))
    .pipe(gulp.dest('./../../dist/views/images/'))
    .pipe(rename({ suffix: '.min'}))
});

//minify css stylesheet
gulp.task('styles', function(){
	return gulp.src(paths.styles);
		.pipe(cleanCSS(compatibility: 'ie8'))
		.pipe(rename({ suffix: '.min'}))
		.pipe(gulp.dest('./../../dist/views/styles/'));
});

// Concats & minifies js files and outputs them to dist/js/ 
gulp.task('scripts', function(){   
	return gulp.src(paths.scripts)        
	.pipe(sourcemaps.init())            
	.pipe(uglify())            
	.pipe(concatify('main.js'))        
	.pipe(sourcemaps.write())  
	.pipe(rename({ suffix: '.min'}))      
	.pipe(gulp.dest('./../../dist/views/js/'));});

// Minifies our HTML files and outputs them to dist/*.html
gulp.task('content', function() {    
	return gulp.src(paths.content)        
	.pipe(minifyhtml({            
		empty: true,            
		quotes: true        
	}))   
	.pipe(rename({ suffix: '.min'}))     
	.pipe(gulp.dest('./../../dist/views/'));});

//watch files
gulp.task('watch', function(){
	gulp.watch('paths.scripts', ['scripts']);
	gulp.watch('paths.styles', ['scripts']);
	gulp.watch('paths.images', ['images']);
	//gulp.watch('paths.content', [''])
})


//default task
gulp.task('default', ['images', 'scripts', 'styles' 'content', 'watch']);

// Watches for changes to our files and executes required scripts
/*gulp.task('css-watch', ['styles'], browserSync.reload);
gulp.task('image-watch', ['images', 'svgstore'], browserSync.reload);
gulp.task('script-watch', ['scripts'], browserSync.reload);*/

// Launches a test webserver
/*gulp.task('browse', function(){
    browserSync({        
    	port: 3030,        
    	server: {            
    		baseDir: "./../../dist/"        
    	}    
    });    
    gulp.watch(paths.scripts, ['script-watch']);    
    gulp.watch(paths.stylesheets, ['css-watch']);    
    gulp.watch(paths.content, ['content-watch']);    
    gulp.watch(paths.images, ['image-watch']);});

gulp.task('serve', ['scripts', 'styles','images', 'content', 'browse']);*/