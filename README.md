##gulp-ejs-preprocessor


	var gulp = require('gulp');

	gulp.src('./template/**/*.ejs')
		.pipe(buildEjs())
		.pipe(gulp.dest('./build'));

##Options

- function, only one param providing data to ejs files, like:

	gulp.src('./template/**/*.ejs')
		.pipe(buildEjs(function(file, encoding){
			return {};
		}))
		.pipe(gulp.dest('./build'));

