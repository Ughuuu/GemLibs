import gulp from 'gulp';
var sass = require('gulp-sass');
import {path, tasks} from './const';
var plumber = require('gulp-plumber');

const SCSS_DIST = path.DIST + '**/*.scss';
const SCSS_DEV = path.DEV + '**/*.scss';

gulp.task(tasks.CLIENT_SCSS_DEV, function () {
  return gulp.src(SCSS_DEV, {base: path.DEV})
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.DEV));
});

gulp.task(tasks.CLIENT_SCSS_DIST, function () {
  return gulp.src(SCSS_DIST, {base: path.DIST})
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.DIST));
});