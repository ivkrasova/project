const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {
//   CleanWebpackPlugin
// } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//для favicon - const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  //-путь всех исходников
  context: path.resolve(__dirname, 'src'),
  //-точка входа 
  entry: ['@babel/polyfill', './index.js'],
  //-точка выхода
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  //-файлы повторяющиеся отдельно в vendors~ для оптимизации
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    //- можно выбрать любой порт
    // port: 8081,
    contentBase: path.join(__dirname, 'dist'),
    overlay: true,
  },
  module: {
    rules: [{
        //-для компиляции из нового стандарта в старый
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            //-набор плагинов для работы с js
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }, {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        exclude: path.resolve(__dirname, 'src/fonts/'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './img/', //--тогда картинки будет открываться в index, но не будет открываться в pages (build)
            // name: 'img/[name].[ext]',
            // outputPath: './pages/' //-тогда картинки будет открываться в pages, но не будет открываться в index (build)
          },
        }],
      },
      {
        test: /\.(woff|ttf|svg|eot)$/,
        include: path.resolve(__dirname, 'src/fonts/'),
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        }]
      },
      {
        //-с ним не подгружаются svg картинки через pug
        // test: /\.svg$/,
        // loader: 'svg-url-loader',
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    // new CopyWebpackPlugin([
    //-для favicon
    //   { 
    //   from: path.resolve(__dirname, './favicon.ico'),
    //   to: path.resolve(__dirname, 'dist')
    //   }
    // ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.pug'
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'pages/colors_type.html',
    //   template: './pages/colors_type/colors_type.pug'
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'pages/form_elements.html',
    //   template: './pages/form_elements/form_elements.pug'
    // }),
    // new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};