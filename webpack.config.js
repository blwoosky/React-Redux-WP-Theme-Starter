var isProduction = process.env.NODE_ENV === "production";
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var sassLoader = ['style-loader', 'css-loader', 'sass-loader'];

var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': isProduction ? `"production"` : `"development"`
    })
];

if (isProduction) {

    sassLoader.shift();

    plugins.push(
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourceMap: false})
    )
}

module.exports = {
    context: __dirname + "/",
    entry: [
        './src'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "main.js"
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true
        },
        proxy: {
            "/comments": {
                "target": {
                    "host": "blwoosky.local",
                    "protocol": 'http:',
                    "port": 80,
                    "path": "/wp-json/wp/v2/comments"
                },
                ignorePath: true,
                changeOrigin: true,
                secure: false
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: isProduction ? ExtractTextPlugin.extract(sassLoader.join("!")) : sassLoader.join("!"),
                include: __dirname + '/src'
            },
            {
                test: /\.js$/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', "react", "stage-2"]
                },
                include: __dirname + '/src'
            },
            {
                test: /\.(png|jpg)/,
                loader: 'url?[name].[ext]',
                include: __dirname + '/src'
            }
        ]
    },
    plugins: plugins
};