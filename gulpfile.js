const gulpWebpack = require("gulp-webpack")
const webpack = require("webpack")
const webpackConfig = require("./webpack.config.js")
const gulp = require("gulp")
const del = require("del")
const sync = require("browser-sync")
const nunjucksRender = require("gulp-nunjucks-render")
const sass = require("gulp-sass")

const paths = {
  html: {
    dest: "./dist/",
    templates: "./src/html/",
    src: "./src/html/**/*.nj",
  },
  root: "./dist/",
  scripts: {
    dest: "./dist/scripts/",
    src: "./src/scripts/**/*.js",
  },
  styles: {
    main: "./src/sass/main.scss",
    src: "./src/sass/**/*.scss",
    dest: "./dist/styles",
  },
}

// Clean
const clean = () => del(paths.root)

// Html Nunjucks
const html = () =>
  gulp
    .src(paths.html.src)
    .pipe(
      nunjucksRender({
        path: [paths.html.templates], // String or Array
      }),
    )
    .pipe(gulp.dest(paths.html.dest))

exports.html = html

// Styles
const styles = () =>
  gulp
    .src(paths.styles.main)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.styles.dest))

exports.styles = styles

// Server
function server() {
  sync.init({
    server: paths.root,
  })
  sync.watch(paths.root + "/**/*.*", sync.reload)
}

exports.server = server

// Watch
const watch = () => {
  gulp.watch(paths.html.src, gulp.series(html))
  gulp.watch(paths.styles.src, gulp.series(styles))
  gulp.watch(paths.scripts.src, gulp.series(scripts))
  // gulp.watch(["src/fonts/**/*", "src/images/**/*"], gulp.series(copy))
}

exports.watch = watch

// Webpack
const scripts = () =>
  gulp
    .src(paths.scripts.src)
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest))

exports.scripts = scripts

// Copy

// const copy = () => {
//   return gulp.src([
//           'src/fonts/**/*',
//           'src/images/**/*',
//       ], {
//           base: 'src'
//       })
//       .pipe(gulp.dest('dist'))
//       .pipe(sync.stream({
//           once: true
//       }));
// };

// Default
gulp.task(
  "default",
  gulp.series(clean, gulp.parallel(html, styles, scripts), gulp.parallel(watch, server)),
)
//
