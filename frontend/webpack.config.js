const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js'
    },
    resolve: {
      alias: {
        'react': path.resolve(__dirname, './node_modules/react')
      }
    },
    output: {
        filename: './static/js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        }
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', {
                      "targets": "defaults" 
                    }],
                    '@babel/preset-react'
                  ]
                }
              }]
        },
        {//处理图片，会在 output 目录中生成图片文件，js 中需要使用 require("*.jpg")先行引入才可以，同样 html 中通过 background-image 设置的图片不可以，但 css 中通过 background-image 设置的图片可以
          test: /\.(jpg|png|jpeg)$/,
          include: path.resolve(__dirname, 'src'),
          use: {
              loader: "file-loader",
              options: {
                  outputPath: "./static/media/",//这里的 images 貌似没什么作用，但不写不行，可以是任意的一个或多个字符
                  name: "[name].[hash:8].[ext]",//8表示截取 hash 的长度
                  useRelativePath: true//这个必须与 outputPath 结合使用才可以处理 css 中的引入的图片
              }
          }
        }, 
        {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            oneOf: [
                {
                  assert: { type: "css" },
                  loader: "css-loader",
                  options: {
                    exportType: "css-style-sheet",
                    // Other options
                    outputPath: "./static/css/",
                    name: "[name].[hash:8].[ext]" 
                  },
                },
                {
                  use: [
                    "style-loader",
                    {
                      loader: "css-loader",
                      options: {
                        // Other options
                      },
                    },
                  ],
                },
              ]
        }]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 80, // 端口号
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'public/index.html',
            favicon: './public/favicon.ico'
        })
    ]
}