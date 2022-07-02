const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

let multipleViews = ['blank', 'tables', 'elements'].map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`
  })
})

module.exports = {
  context: __dirname,
  entry: {
    'appjs': './src/js/index.js',
    'scss': './src/sass/app.scss',
  },

  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'assets/[name].[contenthash:8].js',
    publicPath: '/'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      'template': './src/index.html',
    }),

    new MiniCssExtractPlugin({
      'filename': 'assets/app.[contenthash:8].css',
    }),

    new CopyPlugin({
      patterns: [
        // {
        //   from: './src/images',
        //   to: 'images'
        // },
        {
          from: './src/fonts',
          to: 'assets/fonts'
        },
      ],
    }),
  ].concat(multipleViews),

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            url: false,
            sourceMap: true
          }
        }, 'sass-loader', ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
