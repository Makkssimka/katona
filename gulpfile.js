import {src, dest, parallel, watch} from 'gulp'
import  * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import fileInclude from 'gulp-file-include';


const sass = gulpSass(dartSass);
const browser = browserSync.create();

const browserSyncFunc = () => {
  browser.init({
    server: { baseDir: 'dist/' },
    notify: false,
    online: true,
    open: false
  })
}

const stylesFunc = () => {
  return src('./src/styles/app.scss')
    .pipe(sass())
    .pipe(dest('./dist/styles'))
    .pipe(browser.stream())
};

const scriptsFunc = () => {
  return src([
    './src/scripts/app.js'
  ])
    .pipe(dest('./dist/scripts'))
    .pipe(browser.stream());
}
const componentsFunc = () => {
  return src([
    './src/pages/*.html'
  ])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./dist'))
    .pipe(browser.stream())
}

const watchFunc = () => {
  watch(['./src/**/*.js'], scriptsFunc);
  watch(['./src/**/*.scss'], stylesFunc);
  watch(['./src/**/*.html'], componentsFunc);
}

export default parallel(stylesFunc, scriptsFunc, componentsFunc, browserSyncFunc, watchFunc);