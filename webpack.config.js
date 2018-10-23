const path = require('path')
const htmlWebpackPlugin  = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        filename:'bilibili.js',
        path:path.resolve(__dirname,'lib')
    },
    devServer:{
        contentBase:path.resolve(__dirname,'lib'),
        compress:true,
        port:8000,
        open:true
    },
    watch:true,
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.(jpg|peng|gif)$/,
                loader:'file-loader'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                 process.env.NODE_ENV !== 'production'
                 ? 'vue-style-loader':
                 miniCssExtractPlugin.loader,
                   'css-loader'
                ]
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    },
    plugins:[
        
        new htmlWebpackPlugin({
            template:'./bilibili.html',
            filename:'index.html'
        }),
        new cleanWebpackPlugin(['./lib*.*']),
        new vueLoaderPlugin(),
        new miniCssExtractPlugin({
            filename:'style.css'
        })
    ]
}