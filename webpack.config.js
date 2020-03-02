const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "postcss.config.js"
              }
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: "sass-loader",
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.pug$/,
        loader: "pug-loader"
      },
      {
        test: /\.(png|gif|jpe?g)$/i,
        loaders: [{
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'src/img/',
              // publicPath: 'src/img/',
            },
          },
          'img-loader',
        ],
      },
      //fonts
      {
        test: /\.(woff|ttf|svg|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        }]
      },
      //svg
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "pages/colors_type.html",
      template: "src/pages/colors_type/colors_type.pug"
    }),
    new HtmlWebpackPlugin({
      filename: "pages/form_elements.html",
      template: "src/pages/form_elements/form_elements.pug"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }, )
  ]
};