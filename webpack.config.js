const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevelopment ? 'development': 'production',

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
                require('postcss-nested'),
                require('postcss-import'),
                require('autoprefixer')
              ]
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.vue', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ],

  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  devServer: {
    contentBase: './dist',
    port: 9000,
    historyApiFallback: true
  }
};
