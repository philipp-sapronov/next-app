const gulpWebpack = require("gulp-webpack")
const webpack = require("webpack")
const webpackConfig = require("./webpack.config.js")
const postcss = require("gulp-postcss")
const gulp = require("gulp")
const del = require("del")
const sync = require("browser-sync")
const sourcemaps = require("gulp-sourcemaps")
const nunjucksRender = require("gulp-nunjucks-render")
const sass = require("gulp-sass")

const paths = {
  html: {
    dest: "./dist/pages/",
    templates: "./src/templates/",
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
const server = () => {
  sync.init({
    ui: false,
    notify: false,
    server: {
      baseDir: "dist",
    },
  })
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

// Default
gulp.task("default", gulp.series(clean, gulp.parallel(html, styles, scripts)))
//gulp.parallel(watch, server)
