const del = require("del")
const gulp = require("gulp")
const gulpWebpack = require("gulp-webpack")
const nunjucksRender = require("gulp-nunjucks-render")
const sass = require("gulp-sass")
const sync = require("browser-sync")
const webpack = require("webpack")
const webpackConfig = require("./webpack.config.js")
// const util = require('gulp-util');

const isProduction = process.env.MODE === "production"

const paths = {
  html: {
    dest: "./dist/",
    templates: "./src/html/",
    watch: "./src/html/**/*.nj",
    src: "./src/html/*.nj",
  },
  root: "./dist/",
  scripts: {
    dest: "./dist/scripts/",
    watch: "./src/scripts/**/*.js",
    src: "./src/scripts/*.js",
  },
  styles: {
    main: "./src/sass/main.scss",
    watch: "./src/sass/**/*.scss",
    src: "./src/sass/*.scss",
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
  if (isProduction) {
    return Promise.resolve()

  }

  sync.init({
    server: paths.root,
    notify: false,
  })
  sync.watch(paths.root + "/**/*.*", sync.reload)
}

exports.server = server

// Watch
const watch = () => {
  if (isProduction) {
    return Promise.resolve()
  }

  gulp.watch(paths.html.watch, gulp.series(html))
  gulp.watch(paths.styles.watch, gulp.series(styles))
  gulp.watch(paths.scripts.watch, gulp.series(scripts))
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

const copy = () => {
  return gulp
    .src(["src/assets/**/*"], {
      base: "src",
    })
    .pipe(gulp.dest("dist"))
    .pipe(
      sync.stream({
        once: true,
      }),
    )
}

exports.copy = copy

// Default
gulp.task(
  "default",
  gulp.series(clean, gulp.parallel(html, styles, scripts, copy), gulp.parallel(watch, server)),
)
