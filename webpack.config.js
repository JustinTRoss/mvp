module.exports = {
  entry: ['whatwg-fetch', './client/index.js'],
  output: {
    path: './client/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}