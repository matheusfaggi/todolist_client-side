/* eslint-disable indent */
const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        host: '0.0.0.0',
        port: 8080,
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 500,
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    { loader: 'file-loader' },
                ]
            },
        ],
    },
};
