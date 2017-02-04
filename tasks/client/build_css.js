import gulp from 'gulp';
import cssmin from 'gulp-clean-css';
import {path, tasks} from './const';
var plumber = require('gulp-plumber');

const CSS = path.DIST + '**/*.css';

gulp.task(tasks.CLIENT_CSS_DIST, () => {
  return gulp.src(CSS, {base: path.DIST})
             .pipe(plumber())
             .pipe(cssmin())
             .pipe(gulp.dest(path.DIST));
});
