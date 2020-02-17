const path = require('path');
const ImageminPlugin = require('imagemin-webpack');
const imageminJpegtran = require('imagemin-jpegtran');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/'
            }
          },
          // 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
            minimize: true
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      }),
      // new CssnanoPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        plugins: [
          ['gifsicle'],
          ['jpegtran', { progressive: true }], //lossless comporession?
          // ["mozjpeg",{quality: 80,}], //lossy comporession?
          ['optipng'],
          ['pngquant'],
          ['svgo', { plugins: [{ removeViewBox: false }] }]
        ]
      }
    }),
    new HtmlWebpackPlugin({
      minify: 'production',
      template: 'src/index.html',
      excludeChunks: ['About', 'Journey']
    }),
    new HtmlWebpackPlugin({
      filename: 'About.html',
      template: 'src/About.html',
      thunks: ['common', 'About']
    }),
    new HtmlWebpackPlugin({
      filename: 'Journey.html',
      template: 'src/Journey.html',
      thunks: ['common', 'Journey']
    }),
    new CleanWebpackPlugin()
  ],

  // Optional for webpack-dev-server
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true
  }
};
