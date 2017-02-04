import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import rev from 'gulp-rev-append';
import {path, tasks} from './const';
var plumber = require('gulp-plumber');

const VIEWS = path.DIST + '**/*.html';

gulp.task(tasks.CLIENT_VIEWS_DIST, () => {
  return gulp.src(VIEWS, {base: path.DIST})
             .pipe(plumber())
             .pipe(rev())
			       .pipe(htmlmin({
               collapseWhitespace: true,
               caseSensitive: true
             }))
             .pipe(gulp.dest(path.DIST));
});
