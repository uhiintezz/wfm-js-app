const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        static: __dirname + './dist',
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
        { 
            test: /\.m?js$/, exclude: /node_modules/, 
            use: {  loader: 'babel-loader', 
                options: {presets: ['@babel/preset-env'] }}
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        ]
    }
}