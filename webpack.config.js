const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [ path.join(__dirname, 'src') ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [htmlPlugin]
}
