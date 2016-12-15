import webpack from 'webpack'
import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default function(options = {}) {
  const { dev, example } = options

  return {
    entry: example ? './example-src/index' : './src/index',
    output: {
      path: resolve(__dirname, './../dist'),
      publicPath: '/',
      filename: '[name].js',
      library: 'QCUI',
      libraryTarget: 'umd'
    },
    resolve: {
      extensions: [
        '.js', '.vue'
      ],
      alias: {
        'components': resolve(__dirname, './../src/components'),
        'vue$': 'vue/dist/vue.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                loader: 'css-loader',
                fallbackLoader: 'vue-style-loader'
              }),
              stylus: ExtractTextPlugin.extract({
                loader: 'css-loader!stylus-loader',
                fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
              }),
              js: 'babel-loader'
            }
          }
        }, {
          test: /\.html$/,
          loader: 'html-loader'
        }, {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: '[name].[ext]?[hash]'
          }
        }, {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader!postcss-loader!stylus-loader'
          })
        }, {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader!postcss-loader'
          })
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].style.css'),
      new HtmlWebpackPlugin({ title: 'UI Demo Example', template: './example-src/index.html' }),
      new webpack.LoaderOptionsPlugin({
        vue: {
          postcss: [autoprefixer('last 3 versions', '> 1%')]
        }
      })
    ],
    devServer: {
      contentBase: './example-src',
      historyApiFallback: true,
      host:'10.100.0.160',
      port: 4441
    },
    devtool: dev
      ? 'cheap-module-eval-source-map'
      : 'hidden-source-map'
  }
}
