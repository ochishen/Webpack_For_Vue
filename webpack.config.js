const path = require('path')
const htmlWebpackPlugin  = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode:'development',//生产模式的时候记得改成production!!!!
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
                test:/\.(sc|c)ss$/,
                use:[
                 process.env.NODE_ENV !== 'production'
                 ? 'vue-style-loader'://生产环境的时候要删掉(因为三元表达式无效！！！！)
                 miniCssExtractPlugin.loader,
                   'css-loader',
                   'sass-loader'
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