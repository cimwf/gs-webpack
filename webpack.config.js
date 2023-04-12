const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[hash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            filename: 'html/[name]-[hash:8].html'
        })
    ]
}