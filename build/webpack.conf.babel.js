import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default function (options) {
  "use strict";

  return {
    entry: "./src/example/index",
    output: {
      path: resolve(__dirname, "./../dist"),
      publicPath: "/",
      filename: "[name].js"
    },
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        "components": resolve(__dirname, "./../src/components"),
        "vue$": "vue/dist/vue.js"
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
        },
        {
          test: /\.html$/,
          loader: 'html'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "UI Demo Example",
        template: "./src/example/example.html"
      })
    ],
    devServer: {
      contentBase: "./src",
      historyApiFallback: true
    },
    devtool: options.dev ? "cheap-module-eval-source-map" : "hidden-source-map"
  }
}