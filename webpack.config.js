const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const setLoaders = (mode) => {
  const loaders = []
  // BABEL LOADER
  loaders.push({
    use: 'babel-loader',
    test: /\.js(x)?$/,
    exclude: /node_modules/,
  })

  // STYLE LOADER
  loaders.push({
    use: ['style-loader', 'css-loader'],
    test: /\.css$/,
    exclude: /node_modules/,
  })

  return loaders
}

const setPlugins = (mode) => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ]
  return plugins
}

module.exports = (env, args) => {
  const { mode } = args

  const config = {
    entry: resolve(__dirname, 'src/index.jsx'),
    output: {
      filename: 'app.bundle.js',
      path: resolve(__dirname, 'dist'),
    },
    module: {
      rules: setLoaders(mode),
    },
    devtool: mode == 'development' ? 'source-map' : 'eval',
    plugins: setPlugins(mode),
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }
  return config
}
