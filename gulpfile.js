const   gulp = require('gulp'),
		sass = require('gulp-sass'),
		minify = require('gulp-minify-css'),
		imagemin = require('gulp-imagemin'),
		rename = require('gulp-rename'),
		concat = require('gulp-concat'),
		sourcemap = require('gulp-sourcemaps'),
		browserSync = require('browser-sync').create(),
		reload = browserSync.reload();

const   path = {
			src: './src/',
			css: './src/assets/css/',
			js: './src/assets/js/',
			img: './src/assets/img/',
			scss: './src/scss/',
		}



function serve() {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: path.src
        },
        port: 1337,
        notification: false
    });


    gulp.watch(path.scss + "**/*.scss", gulp.series([sassReload]));
    gulp.watch(path.src + "**/*.html", gulp.series([htmlReload]));
    gulp.watch(path.js + "**/*.js", gulp.series([js]));
};

function htmlReload() {
	return gulp.src(path.src + "**/*.html")
	.pipe(browserSync.stream())
}

function sassReload() {

	return gulp.src(path.scss + "style.scss")
	.pipe(sass())
	.pipe(gulp.dest(path.css))
	.pipe(browserSync.stream())

}

function js() {
	return gulp.src(path.js + "**/*.js")
	.pipe(browserSync.stream())
}

exports.default = serve;