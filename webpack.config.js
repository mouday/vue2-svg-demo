// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // 入口
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  //
  externals: {
    vue: 'Vue',
  },

  module: {
    rules: [
      // 处理svg图标
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [path.resolve('./src/icons/svg')],
        options: {
          symbolId: 'icon-[name]',
        },
      },
      // 处理vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 处理less
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'],
      },
    ],
  },

  plugins: [
    // 加载vue
    new VueLoaderPlugin(),

    // 加载html
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    // 提取css
    new MiniCssExtractPlugin(),

    // 拷贝public目录下的文件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: path.resolve(__dirname, './dist'),
          toType: 'dir',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],

  optimization: {
    // minimize: true,
    minimizer: [
      new TerserPlugin({
        // 不将注释提取到单独的文件中
        extractComments: false,
      }),
      // 使用 cssnano 优化和压缩 CSS
      new CssMinimizerPlugin(),
    ],
  },

  mode: process.env.NODE_ENV,
};
