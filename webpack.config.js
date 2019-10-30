
var MiniCssExtractPlugin =require('mini-css-extract-plugin');
// var {CleanWebpackPlugin} =require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports={
    entry:{
        index:'./src/js/meituan.js',
        info:'./src/js/goodsInfo.js'
    },
    output:{
        filename:'[name]-[hash:5].js',
        path:__dirname +'/out'
    },
    // loader的使用
    module:{
        rules:[
            {test:/(\.js)$/,use:['babel-loader']},
            {test:/(\.css)$/,use:[MiniCssExtractPlugin.loader,'css-loader']},
            {test:/(\.jpg|png|svg|eot|ttf|woff)/,use:['url-loader?limit=1000&name=./[name].[ext]']}
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name]-[hash:5].css'
        }),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./meituan-index.html',
            filename:'index.html',
            minify:{
                removeComments:true
            },
            //单独引入的包
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:'./meituan-detail.html',
            filename:'detail.html',
            minify:{
                removeComments:true
            },
            chunks:['info']
        })
    ],
    mode:'development',
    devServer:{
        port:'9191'
    }
}