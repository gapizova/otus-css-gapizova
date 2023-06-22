const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"],
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.jpg$/,
                type: 'asset/resource',
                generator:  {
                    filename: 'images/[name]-[hash][ext]',
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator:  {
                    filename: 'images/[name]-[hash][ext]',
                }
            },
            {
                test: /\.(woff(2)?|ttf)$/,
                type: 'asset/resource',
                generator:  {
                    filename: 'fonts/[name]-[hash][ext]',
                }
            }
        ]
    },
    devServer: {
        compress: false,
        open: true,
        port: 3000,
        hot: true,
    }
}