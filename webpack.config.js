const path = require('path');
const webpack = require('webpack');//启用热更新的第一步(可以直接在package.json中设置，而不用在这里设置）
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//向外暴露了一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true //启用热更新的第二步
    },
    plugins: [  //配置插件
        new webpack.HotModuleReplacementPlugin(),//启用热更新的第三步
        new htmlWebpackPlugin({ //创建一个在内存中生成的HTML页面的插件
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: { //这个节点用于配置所有第三方模块loader
        rules: [
            //处理顺序是从右到左
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            //limit参数表示图片大于或等于limit值时被转化为base64,
            //name参数表示设置图片名称
            {test: /\.jpg|png|jpeg|gif|bmp/, use: 'url-loader?limit=52000&name=[hash:8]-[name].[ext]'},
            {test: /\.ttf|woff|woff2|svg|eot$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader',exclude:/node_modules/}
        ]
    }
};