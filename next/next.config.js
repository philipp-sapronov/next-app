const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/out/'],
        enforce: 'pre',
        options: {
          emitWarning: true,
          configFile: './.eslintrc.js',
        },
      })
    }

    return config
  },
})
