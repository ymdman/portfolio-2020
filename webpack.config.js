const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',

  entry: {
    app: './src/app.ts'
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-import'),
                require('postcss-custom-media')({
                  importFrom: './src/css/foundation/media-query.css'
                }),
                require('postcss-nested'),
                require('autoprefixer')
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.vue', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    }),
    new CopyWebpackPlugin([
      {
        from: `${__dirname}/src/images`,
        to: `${__dirname}/dist/images`
      }
    ]),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 65,
          progressive: true
        })
      ]
    })
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },

  devServer: {
    contentBase: './dist',
    port: 9000,
    historyApiFallback: true
  }
};
