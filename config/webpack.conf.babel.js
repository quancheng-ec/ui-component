import webpack from 'webpack'
import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'

export default function(options = {}) {
  const { dev, example } = options

  return {
    entry: example ? './example-src/index' : './src/index',
    output: {
      path: resolve(__dirname, './../dist'),
      publicPath: '/',
      filename: '[name].js'
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
          loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
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
      port: 4441
    },
    devtool: dev
      ? 'cheap-module-eval-source-map'
      : 'hidden-source-map'
  }
}
