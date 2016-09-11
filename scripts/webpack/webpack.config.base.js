import path from 'path'

export default {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.node$/,
      loader: 'node-loader',
    }],
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.node'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
  },
  plugins: [
  ],
  externals: [
  ],
}
