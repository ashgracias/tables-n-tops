"use strict";

let path = require("path"),
    webpack = require("webpack");

module.exports = {
    context: path.join(__dirname, "/src/client"),
    entry: ["./main.js", "./style.css"],
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/js")
    },
    plugins: []
};