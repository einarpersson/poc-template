const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotEnv = require('dotenv-webpack')

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
      },
      {
        test: /\.(png)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new DotEnv({ defaults: true })
  ]
}
