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
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader:'file-loader'
            },
            {
                test:/\.(jpg|peng|svg|gif)$/,
                loader:'file-loader'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.(sc|c|postc)ss$/,
                use: [
               //生产环境的时候要去掉(三元表达式无效！！！) 
                   process.env.NODE_ENV !== 'production'
                   ? 'vue-style-loader':            
                   miniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                  {
                    loader: "postcss-loader",
                    options:{
                        plugins:[
                            require('autoprefixer')('last 100 versions')
                        ]
                    }
                   }
                ],
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