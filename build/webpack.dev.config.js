var path = require("path");
var webpack = require("webpack");

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        index: "./input/index.js"
    },
    output: {
        path: path.join(__dirname, "../output/"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "../"),
        publicPath: "/dev/",
        hot: true,
        host: "10.201.66.104",
        port: 80
    },
    resolve: {
    	alias: {
            "vue": resolve("node_modules/vue/dist/vue.common.dev.js"),
    		"@": resolve("src")
    	}
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}