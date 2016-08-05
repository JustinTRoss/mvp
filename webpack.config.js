module.exports = {
  entry: ['whatwg-fetch', './client/index.js'],
  output: {
    path: './client/',
    filename: 'bundle.js'
  },
  devtools: 'source-map',
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