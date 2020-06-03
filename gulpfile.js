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

const build = {
			name: 'eaSY', 				// Project Name
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

function imageMin() {
	return gulp.src(path.img + "**/*")
	.pipe(imagemin([
		imagemin.mozjpeg({quality: 10, progressive: true}),
		]))
	.pipe(gulp.dest(path.img))
}

function js() {
	return gulp.src(path.js + "**/*.js")
	.pipe(browserSync.stream())
}

function minifyCss(){
	return gulp.src(path.css + "style.css")
	.pipe(minify('style.min.css'))
	.pipe(gulp.dest(path.css))
}

function concatjs() {
	return gulp.src([path.js+'jquery.js', path.js+'libs/slick.min.js', path.js+'index.js'])
	.pipe(concat('common.min.js'))
	.pipe(gulp.dest(path.js))
}

function about(projectName) {

}

exports.image = imageMin;
exports.sass = gulp.series(sassReload, minifyCss);
exports.build = gulp.series(minifyCss, concatjs, imageMin);
exports.default = gulp;