module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: 'dist'
  },
  debug: true,
  module: {
    loaders: [
      { test: /\.js$/, 
        loader: 'babel', 
        query: {
          presets: ['react']
        },
        exclude: [/node_modules/] }
    ]
  }
}
