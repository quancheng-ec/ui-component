import webpack from 'webpack'
import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'

export default function(options) {
  'use strict'

  const { dev, example } = options

  return {
    entry: example ? './example-src/index' : './src/example/index',
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
          loader: 'vue',
          options: {
            loaders: {
              js: 'babel'
            }
          }
        }, {
          test: /\.html$/,
          loader: 'html'
        }, {
          test: /\.styl$/,
          loader: 'style!css!postcss!stylus'
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
