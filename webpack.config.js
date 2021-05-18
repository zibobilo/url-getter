
module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  plugins: [

  ],
  target: 'web',
  output: {
    libraryTarget: "var",
    library: "urlUTM",
    path: __dirname + '/dist',
    filename: 'build/URLGetter.min.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}