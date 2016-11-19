

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {

        vendors: [
            'foundation-sites/dist/foundation.js'
        ],
        vendorsCss: [
            'foundation-sites/dist/foundation.css',
            'foundation-sites/dist/foundation-flex.css',
            'foundation-icons/foundation-icons.css'
        ],
        'styles': './src/styles/app.scss',
        'app': './src/main.ts'
    },

    output: {
        path: path.join(__dirname, 'dist', 'js'),
        // publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.sass','.scss', '.html', '.css']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts',
            exclude: /(node_modules|bower_components)/
        },

            {
                test:   /\.scss$/,
                loader: ExtractTextPlugin.extract('style','css!sass')
            } ,
            {
                test:   /\.css$/,
                loader: ExtractTextPlugin.extract('style','css')
            } ,

            {
            test: /\.html$/,
            loader: 'html',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.(png|jpe?g|gif|svg|ico)$/,
            loader: 'file?name=../img/[name].[ext]'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file?name=../fonts/[name].[ext]"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml&name=../fonts/[name].[ext]"
        }]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name].css' , {allChunks: true}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        }),
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            '$': 'jquery'

        })
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: false,
        //     sourcemap: false
        // })
    ]
};