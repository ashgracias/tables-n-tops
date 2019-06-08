"use strict";

let path = require("path"),
    webpack = require("webpack");

module.exports = {
    context: path.join(__dirname, "/src/client"),
    entry: ["./player_token", "./style.css"],
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/js")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: []
};