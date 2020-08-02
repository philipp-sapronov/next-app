module.exports = {
  syntax: "css",
  plugins: [
    require("autoprefixer")({
      browsers: ["last 2 versions"],
      cascade: false,
    }),

    // require("cssnano")(),
  ],
}
