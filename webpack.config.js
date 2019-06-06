let path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {

            }
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    },
                }, 'css-loader']
            },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?name=[hash:8]-[name].ext' },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],

                        ]
                    }
                }
            },
            {
                test: /\.ttf$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: './font/[hash].[ext]',
                    },
                }, ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]

    },
    resolve: {
        // mainFields: ['style', 'main'],
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
}