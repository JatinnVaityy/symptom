const path = require('path');

module.exports = {
  mode: "development",
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    inline: true,
    host: '127.0.0.1'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        query: {
          plugins: ['@babel/transform-runtime'],
          presets: ['@babel/preset-env']
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', {loader: 'css-loader'}]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff&name=[path][name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
};
