const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname + '/dist'),  //目录
        filename: '[name].[hash:7].js',  //文件名
        publicPath: './'    //根目录
    },
    resolve:{
        extensions: ['.js', '.vue'],  //js 和 vue 文件在import导入的时候不需要带扩展
        alias:{
            'vue$': 'vue/dist/vue.esm.js',  //vue官方指定写法，如果不写这个，则运行的时候会提示
            '@': path.resolve(__dirname, 'src')  //给src目录起个别名@ ，引用src目录的时候，可用@替代
        }
    },
    module:{
        rules:[
            {
                test: /\.js/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.less$/,
                use: ["css-loader","less-loader"]
            },
            {
                test: /(\.jpg|\.png|\.jpeg|\.gif)$/i,
                loader: 'url-loader',
                options:{
                    limit: 1024,
                    name: '[name]-[hash:7].[ext]'
                }
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new Clean(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    devServer:{
        port:8083,
        hot:true
    }
}