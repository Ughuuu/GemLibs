import gulp from 'gulp';
import imageMin from 'gulp-imagemin';
import {path, tasks} from './const';
var plumber = require('gulp-plumber');

const IMAGES = path.DIST + '**/*.{png,jpg,jpeg,svg,gif}';

gulp.task(tasks.CLIENT_IMAGE_DIST, () => {
  return gulp.src(IMAGES, {base: path.DIST})
             .pipe(plumber())
			       .pipe(imageMin())
             .pipe(gulp.dest(path.DIST));
});
