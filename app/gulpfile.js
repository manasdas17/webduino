var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var jshint = require("gulp-jshint");
var csshint = require("gulp-csslint");
var stylish = require("jshint-stylish");
var sass = require("gulp-sass");
var connect = require("gulp-connect");



gulp.task("default", ["watch", "connect"], function (){
	console.log("Started");
});

gulp.task("compile:js", ["jshint"], function () {
	
	var bundle = browserify("./src/js/app.js").bundle();

	return bundle
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./public/assets/js"))
		.pipe(connect.reload());

});


gulp.task("compile:css",  function () {
	
	return gulp.src(["./src/scss/*.scss"])
		.pipe(sass())
		.pipe(csshint())
		.pipe(csshint.reporter())
		.pipe(gulp.dest("./public/assets/css"))
		.pipe(connect.reload());

});

gulp.task("jshint", function () {
	
	return gulp.src(["./src/js/**/*.js"])
		.pipe(jshint())
		.pipe(jshint.reporter("jshint-stylish"));
})

gulp.task('html', function () {
 	return gulp.src('./public/**/*.html')
    .pipe(connect.reload());
});

gulp.task("watch", ["compile:js", "compile:css"], function () {
	gulp.watch(["./src/js/**/*.js"], ["compile:js"])
	gulp.watch(["./src/scss/**/*.scss"], ["compile:css"])
	gulp.watch(["./public/**/*.html"], ["html"])
})

gulp.task("connect", function () {
	connect.server({
		root: "./public",
		port: 8090,
		livereload: true	
	});
});	