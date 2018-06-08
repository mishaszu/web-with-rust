const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './web/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webassembly intro',
            inject: 'body',
            template: './web/index.html',
        })
    ],
    devServer: {
        contentBase: 'build',
        port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: ['babel-loader'],
            },
        ]
    }
}