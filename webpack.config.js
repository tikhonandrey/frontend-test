const globalBabelSettings = require('./.babelrc')

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  entry: './src/client/index.js',

  output: {
    filename: 'index.js',
    path: `${__dirname}/dist/client`,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: globalBabelSettings.presets,
          plugins: ['babel-plugin-styled-components'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
