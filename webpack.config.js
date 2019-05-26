const path = require('path');
const fs = require('fs');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = env => {
    let publicPath = env.NODE_ENV === "dev" ? '/' : './';
    return {
        entry:'./src/index.js',
        output:{
            path: path.resolve(__dirname + '/dist'),  //目录
            filename: '[name].[hash:7].js',  //文件名
            chunkFilename: '[name].chunk.js',
            publicPath: publicPath   //根目录
        },
        resolve:{
            extensions: ['.js', '.vue'],  //js 和 vue 文件在import导入的时候不需要带扩展
            alias:{
                'vue$': 'vue/dist/vue.esm.js',  //vue官方指定写法，如果不写这个，则运行的时候会提示
                'jquery':'jquery/dist/jquery.min.js',
                '@': path.resolve(__dirname, 'src'), //给src目录起个别名@ ，引用src目录的时候，可用@替代
                '~image':path.resolve(__dirname,'src','static','image')
            }
        },
        module:{
            rules:[
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    exclude: /node_modules/,
                    options: {},
                },
                {
                    test: /\.js/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(css|less)$/,
                    // use: ["vue-style-loader",'css-loader'],
                    use: [
                        MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','less-loader'
                    ]
                },
                // {
                //     test: /\.less$/,
                //     use: ["vue-style-loader","css-loader","less-loader"]
                // },
                {
                    test: /(\.jpg|\.png|\.jpeg|\.gif)$/i,
                    loader: 'url-loader',
                    options:{
                        limit: 1024,
                        name: 'images/[name]-[hash:7].[ext]'
                    }
                }
            ]
        },
        plugins:[
            new VueLoaderPlugin(),
            new Clean(),
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({filename:'index.css'}),
            new htmlPlugin({
                filename: 'index.html',
                template: 'index.html',
                minify: {
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    collapseWhitespace: true
                },
                loadingTpl: fs.readFileSync('./src/partials/loading.tpl'),
            }),
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery"
            })
        ],
        devServer:{
            port:8083
        }
    }

}