const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        }),
        new CopyWebpackPlugin([
            {
                from: 'web/images',
                to: 'images'
            },
            {
                from: 'web/fonts',
                to: 'fonts'
            }
        ])
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
            {
                test: /\.rs$/,
                use: [
                    {
                        loader: 'wasm-loader'
                    },
                    {
                        loader: 'rust-native-wasm-loader',
                        options: {
                            release: true
                        }
                    }
                ]
            },
        ]
    }
}